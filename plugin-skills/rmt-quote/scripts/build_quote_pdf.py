#!/usr/bin/env python3
"""
build_quote_pdf.py: sets a quote record from quote.py as an A4 quotation on RMT letterhead
=========================================================================================

Uses the shared RMT document system (rmt-solutions assets/design/rmt_design.py):
the same fonts, logo, running header and footer, and renderer as every other
document RMT issues. Called by `quote.py issue`; not meant to be run by hand.

The design module is found, in order: $RMT_DESIGN_DIR; <plugin>/assets/design
when this skill sits inside the rmt-solutions plugin; a sibling rmt-solutions
plugin folder.
"""
from __future__ import annotations

import datetime as dt, os, sys
from decimal import Decimal
from pathlib import Path

HERE = Path(__file__).resolve().parent
SKILL = HERE.parent


def _design_dir() -> Path:
    cands = []
    if os.environ.get("RMT_DESIGN_DIR"):
        cands.append(Path(os.environ["RMT_DESIGN_DIR"]))
    cands.append(SKILL.parents[1] / "assets" / "design")                  # rmt-solutions/skills/rmt-quote
    cands += sorted(SKILL.parents[2].glob("rmt-solutions/assets/design"))  # a sibling plugin
    cands += sorted(SKILL.parents[3].glob("*/rmt-solutions/assets/design"))
    for c in cands:
        if (c / "rmt_design.py").exists():
            return c
    raise RuntimeError("cannot find the RMT design system (rmt_design.py). Install this skill inside the "
                       "rmt-solutions plugin, or set RMT_DESIGN_DIR to its assets/design folder.")


DESIGN = _design_dir()
sys.path.insert(0, str(DESIGN))
import rmt_design as D                                   # noqa: E402

# The AP's signature, as on the withdrawal notice. Absent -> the letter is left for a wet signature.
SIGNATURE = DESIGN.parents[1] / "skills" / "rmt-document-register" / "assets" / "branding" / "signature-ricky-marsh.png"

RendererUnavailable = D.RendererUnavailable
RenderFailed = D.RenderFailed


def _date(v) -> dt.date:
    return v if isinstance(v, dt.date) else dt.date.fromisoformat(str(v)[:10])


def fmt_date(v) -> str:
    d = _date(v)
    return f"{d.day} {d.strftime('%B %Y')}"


def gbp(v) -> str:
    return "£{:,.2f}".format(Decimal(str(v)))


def qty(v) -> str:
    q = Decimal(str(v)).normalize()
    return f"{q:f}"


def render(rec: dict, out_pdf, *, draft: bool = False, open_items=()) -> dict:
    env = D.env(extra_dirs=[HERE / "templates"])
    env.filters.update(gbp=gbp, qty=qty, fmt_date=fmt_date)
    ref = rec["ref"] or "DRAFT"
    ctx = {
        "q": rec, "ref": ref, "is_draft": draft, "open_items": list(open_items),
        "logo": D.data_uri(D.LOGO),
        "signature": D.data_uri(SIGNATURE) if SIGNATURE.exists() and not draft else None,
        "issued": fmt_date(rec["issued_at"]),
        "valid_until": fmt_date(rec["valid_until"]),
        "delivery_by": fmt_date(rec["delivery"]["by"]) if rec["delivery"]["by"] else None,
    }
    body = env.get_template("quote.html.j2").render(**ctx)
    kind = "Desktop quotation" if rec.get("site_visit", {}).get("desktop") else "Quotation"
    page = D.page_css(kind, f"{ref} · Rev {rec['rev']}", draft=draft)
    extra = (HERE / "templates" / "quote.css").read_text(encoding="utf-8")
    title = f"{ref} · {kind} · {rec['site']}"
    html = D.document(body, title=title, page=page + extra)
    info = D.render_pdf(html, out_pdf, title=title, subject=f"Quotation for {rec['client']['name']}",
                        keywords=f"quotation, {ref}, {rec['site']}, RMT Solutions")
    import re
    data = Path(out_pdf).read_bytes()
    info["pages"] = len(re.findall(rb"/Type\s*/Page(?![s\w])", data)) or None
    return info
