#!/usr/bin/env python3
"""
quote.py: RMT Solutions' quote engine
=====================================

Turns an enquiry into a fixed-price quotation on RMT letterhead, inside the
4-working-hour promise, without ever inventing a price.

Nothing goes out without Ricky. `issue` only prepares and holds a quote;
`approve --by Ricky` records his approval; Ricky sends the email himself. This
engine never sends anything, and nothing that uses it may send on his behalf.

    quote.py classify --text "<subject, body, filenames>"      suggest the lines and the questions to ask
    quote.py price    spec.json                                 validate a spec and print the totals (and the
                                                                fee to pass to creditwatch.py --fee)
    quote.py issue    spec.json --log RMT-Quote-Log.json --credit credit.json [-o out.pdf] [--draft]
                                                                gate, number, render the PDF, write the email
                                                                text and log the quote as PREPARED (held)
    quote.py approve  RMT-Q-2026-001 --log ... --by Ricky       Ricky's own approval; only then may it go out,
                                                                and Ricky sends it himself
    quote.py status   RMT-Q-2026-001 accepted|declined|expired|withdrawn --log ... [--po ...] [--reason ...]
    quote.py followup --log ... [--days 3]                      quotes with no answer, and quotes about to lapse
    quote.py stats    --log ...                                 win rate, value won, 4-hour promise hit rate
    quote.py --self-test

Prices come only from references/price-book.json. A service priced per job
(null in the book) needs Ricky's figure in the spec for that job, or the quote
is refused. The engine does the arithmetic in pence, so a total never drifts.

Exit codes: 0 done; 1 bad input; 2 the gate refused (read the reasons; --draft
builds anyway, stamped DRAFT and unnumbered); 3 the render failed; 4 no Chromium
(the email text and log entry are still not written, so nothing half-issues).
"""
from __future__ import annotations

import argparse, datetime as dt, json, os, re, sys, tempfile
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

HERE = Path(__file__).resolve().parent
SKILL = HERE.parent
PRICE_BOOK = SKILL / "references" / "price-book.json"

REF_RE = re.compile(r"^RMT-Q-(\d{4})-(\d{3})$")
PLACEHOLDER = re.compile(r"_{4,}|\bTBC\b|\bTBA\b|\bto be confirmed\b|\bXXX\b|\[(?!\[)[^\]]{1,80}\]", re.I)
STATUSES = ("prepared", "issued", "accepted", "declined", "expired", "withdrawn")
# Only Ricky approves a quote to go out. Names accepted as Ricky for --by.
APPROVERS = ("ricky", "ricky marsh", "michael marsh")
CREDIT_OK = ("clear", "watch")
CREDIT_MAX_AGE_H = 24
PENNY = Decimal("0.01")

# England and Wales bank holidays (gov.uk). Extend each year; the engine warns
# when a date falls outside the years held here rather than guessing.
BANK_HOLIDAYS = {
    "2026-01-01", "2026-04-03", "2026-04-06", "2026-05-04", "2026-05-25", "2026-08-31",
    "2026-12-25", "2026-12-28",
    "2027-01-01", "2027-03-26", "2027-03-29", "2027-05-03", "2027-05-31", "2027-08-30",
    "2027-12-27", "2027-12-28",
}
HOLIDAY_YEARS = {int(d[:4]) for d in BANK_HOLIDAYS}
WARNINGS: list[str] = []


# ------------------------------------------------------------------ small helpers
def emit(obj, code=0):
    if WARNINGS:
        obj.setdefault("warnings", []).extend(WARNINGS)
    print(json.dumps(obj, indent=2, ensure_ascii=False, default=str))
    sys.exit(code)


def fail(msg, code=1):
    emit({"status": "error", "error": msg}, code)


def load_json(path):
    try:
        return json.loads(Path(path).read_text(encoding="utf-8"))
    except FileNotFoundError:
        fail(f"not found: {path}")
    except json.JSONDecodeError as e:
        fail(f"{path} is not valid JSON: {e}")


def save_json(path, data):
    """Write through a temp file in the same folder, so a crash never leaves half a log."""
    path = Path(path)
    fd, tmp = tempfile.mkstemp(prefix=".quote-", dir=path.parent if str(path.parent) else ".")
    with os.fdopen(fd, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False, default=str)
        f.write("\n")
    os.replace(tmp, path)


def money(v) -> Decimal:
    return Decimal(str(v)).quantize(PENNY, rounding=ROUND_HALF_UP)


def gbp(v) -> str:
    return "£{:,.2f}".format(Decimal(v))


def norm(s) -> str:
    return re.sub(r"\s+", " ", str(s or "").lower()).strip()


def now(arg=None) -> dt.datetime:
    return dt.datetime.fromisoformat(arg) if arg else dt.datetime.now().replace(second=0, microsecond=0)


def all_strings(node):
    if isinstance(node, str):
        yield node
    elif isinstance(node, dict):
        for v in node.values():
            yield from all_strings(v)
    elif isinstance(node, list):
        for v in node:
            yield from all_strings(v)


# ------------------------------------------------------------------ working time
def is_working_day(d: dt.date) -> bool:
    if d.year not in HOLIDAY_YEARS:
        w = f"No bank holiday data for {d.year}: working days that year count weekends only. Add the year to BANK_HOLIDAYS."
        if w not in WARNINGS:
            WARNINGS.append(w)
    return d.weekday() < 5 and d.isoformat() not in BANK_HOLIDAYS


def add_working_days(d: dt.date, n: int) -> dt.date:
    while n > 0:
        d += dt.timedelta(days=1)
        if is_working_day(d):
            n -= 1
    return d


def working_days_between(a: dt.date, b: dt.date) -> int:
    """Working days after a, up to and including b."""
    n, d = 0, a
    while d < b:
        d += dt.timedelta(days=1)
        if is_working_day(d):
            n += 1
    return n


def _hm(s):
    h, m = s.split(":")
    return dt.time(int(h), int(m))


def add_working_hours(start: dt.datetime, hours: float, wh: dict) -> dt.datetime:
    """The moment `hours` of working time have passed after `start`. An enquiry
    that lands out of hours starts the clock at the next opening."""
    open_t, close_t = _hm(wh["start"]), _hm(wh["end"])
    left = dt.timedelta(hours=hours)
    t = start
    while True:
        day_open = dt.datetime.combine(t.date(), open_t)
        day_close = dt.datetime.combine(t.date(), close_t)
        if not is_working_day(t.date()) or t >= day_close:
            t = dt.datetime.combine(t.date() + dt.timedelta(days=1), open_t)
            continue
        if t < day_open:
            t = day_open
        avail = day_close - t
        if left <= avail:
            return t + left
        left -= avail
        t = dt.datetime.combine(t.date() + dt.timedelta(days=1), open_t)


def working_hours_between(a: dt.datetime, b: dt.datetime, wh: dict) -> float:
    if b <= a:
        return 0.0
    open_t, close_t = _hm(wh["start"]), _hm(wh["end"])
    total, d = dt.timedelta(0), a.date()
    while d <= b.date():
        if is_working_day(d):
            s = max(a, dt.datetime.combine(d, open_t))
            e = min(b, dt.datetime.combine(d, close_t))
            if e > s:
                total += e - s
        d += dt.timedelta(days=1)
    return round(total.total_seconds() / 3600, 2)


def fmt_date(d: dt.date) -> str:
    return f"{d.strftime('%A')} {d.day} {d.strftime('%B %Y')}"


# ------------------------------------------------------------------ price book
def load_book(path=None):
    book = load_json(path or PRICE_BOOK)
    codes = [s["code"] for s in book["services"]]
    if len(codes) != len(set(codes)):
        fail("price book has a duplicated service code")
    book["_by_code"] = {s["code"]: s for s in book["services"]}
    return book


# ------------------------------------------------------------------ classify
_REVIEW_HINT = re.compile(r"\b(review|check(ed|ing)?|approv\w*|comment\w* on|sign(ed)? off our|cat a)\b")
_WRITE_HINT = re.compile(r"\b(write|produce|prepare|need|require|draw up|do us|quote for|price for)\b[^.]{0,40}\b(lift ?plans?|lifting plans?|rams|method statements?)")
_URGENT = re.compile(r"\b(urgent|asap|today|tomorrow|first thing|same day|same-day|next day)\b")
_COUNT = re.compile(r"\b(\d{1,2}|two|three|four|five|six|seven|eight|nine|ten)\s+(?:[a-z-]+\s+){0,2}?(?:lift ?plans|plans|lifts|cabins|units|loads|containers|modules|beams)\b")
_SERIES = re.compile(r"(?:^|[\s_-])lp\s?(\d{1,2})(?=[\s._-]|$)", re.I)
_WORDS = {"two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9, "ten": 10}


def _hit(text, kw):
    return re.search(r"(?<![a-z0-9])" + re.escape(kw) + r"(?![a-z0-9])", text) is not None


def classify(text, files=(), book=None):
    """Keyword signals only. It proposes lines and lists what Ricky must decide;
    it never settles a scope or a price."""
    book = book or load_book()
    blob = norm(text + " " + " ".join(files))
    found, questions, signals = {}, [], []
    for s in book["services"]:
        hits = [k for k in s["keywords"] if _hit(blob, k)]
        if hits:
            found[s["code"]] = hits

    review = bool(_REVIEW_HINT.search(blob))
    write = bool(_WRITE_HINT.search(blob))
    machine_codes = [c for c in ("LP-EXC", "LP-TH", "LP-FL", "LP-LL", "LP-MC", "LP-TC", "LP-OH") if c in found]
    if "LPR" in found and not review:
        found.pop("LPR")
    if review and write:
        questions.append("The enquiry reads as both a review and a request to write a plan. Which is it?")
    elif review and machine_codes and not write:
        signals.append("Reads as a review of someone else's plan: the machine words describe the plan, not new work.")
        found.setdefault("LPR", ["review wording"])
        for c in machine_codes:
            found.pop(c, None)
        machine_codes = []

    if "TLP" in found:
        signals.append("Tandem or multi-crane wording: price as TLP, and route the work to rmt-tandem-lift-plan.")
    if "OOH" in found:
        signals.append("Evening or weekend wording: add OOH only if the client is asking for out-of-hours work, and agree the price on the call first.")
    if _hit(blob, "crane") and not machine_codes and "TLP" not in found and "LPR" not in found:
        questions.append("'Crane' with no type: mobile crane, tower crane, lorry loader or overhead crane?")
    if not found:
        questions.append("No service recognised. What does the client want: a plan written, a plan reviewed, RAMS, AP attendance or an audit?")

    qty, series = None, sorted({int(n) for n in _SERIES.findall(" ".join(files) + " " + text)})
    m = _COUNT.search(blob)
    if m:
        qty = int(_WORDS.get(m.group(1), m.group(1)))
    elif len(series) > 1:
        qty = len(series)
        signals.append(f"Numbered plan series LP{series[0]}–LP{series[-1]}: {len(series)} plans, one submission.")
    if _URGENT.search(blob):
        signals.append("Urgent wording. Standard prices apply to same-day and next-day work (the website promise): no surcharge.")

    priced_codes = [c for c in found if not book["_by_code"][c].get("only_on_request")]
    if qty is not None and len(priced_codes) > 1:
        signals.append(f"A count of {qty} was mentioned, but more than one service was named: say which line it belongs to.")
        qty_for = None
    else:
        qty_for = qty
    lines = []
    for code in priced_codes:
        hits, s = found[code], book["_by_code"][code]
        lines.append({"code": code, "name": s["name"], "qty": qty_for or 1, "matched": hits,
                      "price_ex_vat": s["price_ex_vat"],
                      "needs_price": s["price_ex_vat"] is None})
    for ln in lines:
        if ln["needs_price"]:
            questions.append(f"{ln['code']} ({ln['name']}) is priced per job. What is the price for this one?")
    if qty_for is None and lines:
        questions.append("How many plans (or days, or documents) for each line? The suggestion assumes one.")
    return {"status": "success", "suggested_lines": lines, "signals": signals, "questions": questions,
            "note": "Suggestions only. Ricky confirms the scope, quantities and every per-job price."}


# ------------------------------------------------------------------ price a spec
def price(spec, book):
    """Totals plus every reason the spec cannot be issued yet. Never raises on
    a business problem: it reports it."""
    problems, notes, lines = [], [], []
    for i, ln in enumerate(spec.get("lines") or [], 1):
        code = ln.get("code")
        s = book["_by_code"].get(code)
        if not s:
            problems.append(f"line {i}: unknown service code {code!r} (codes: {', '.join(book['_by_code'])})")
            continue
        try:
            qty = Decimal(str(ln.get("qty", 1)))
        except Exception:
            problems.append(f"line {i}: quantity {ln.get('qty')!r} is not a number")
            continue
        if qty <= 0 or (qty * 2) % 1 != 0:
            problems.append(f"line {i}: quantity must be a positive whole or half number, not {ln.get('qty')}")
        book_price, given = s["price_ex_vat"], ln.get("price_ex_vat")
        if given is not None:
            try:
                unit = money(given)
            except Exception:
                problems.append(f"line {i}: price {given!r} is not a number")
                continue
            if unit <= 0:
                problems.append(f"line {i}: price must be above zero")
            if book_price is not None and unit != money(book_price):
                if not str(ln.get("price_reason") or "").strip():
                    problems.append(f"line {i}: {code} is {gbp(book_price)} in the price book but {gbp(unit)} here. "
                                    "Give price_reason (for example an agreed rate) or use the book price.")
                else:
                    notes.append(f"line {i}: {code} at {gbp(unit)}, not the book's {gbp(book_price)}: {ln['price_reason']}")
        elif book_price is None:
            problems.append(f"line {i}: PRICE NEEDED. {code} ({s['name']}) is priced per job; put Ricky's figure in price_ex_vat.")
            unit = None
        else:
            unit = money(book_price)
        if s.get("only_on_request") and not spec.get("out_of_hours_requested"):
            problems.append(f"line {i}: {code} is only quoted when the client asked for out-of-hours work. "
                            "Set out_of_hours_requested: true once it has been agreed on the call.")
        amount = (unit * qty).quantize(PENNY, rounding=ROUND_HALF_UP) if unit is not None else None
        lines.append({"code": code, "name": ln.get("name") or s["name"], "unit": s["unit"], "qty": qty,
                      "unit_price": unit, "amount": amount, "note": ln.get("note", ""),
                      "basis": "per job" if book_price is None else "fixed",
                      "scope": s["scope"] + list(ln.get("extra_scope") or []),
                      "info_needed": s["info_needed"], "site_visit": s["site_visit"],
                      "delivery_working_days": s["delivery_working_days"]})
    if not lines and not problems:
        problems.append("no lines: add at least one service")

    subtotal = sum((l["amount"] for l in lines if l["amount"] is not None), Decimal("0.00"))
    vat_rate = Decimal(str(book["vat_rate_pct"]))
    vat = (subtotal * vat_rate / 100).quantize(PENNY, rounding=ROUND_HALF_UP)
    total = subtotal + vat
    return {"lines": lines, "subtotal": subtotal, "vat_rate_pct": vat_rate, "vat": vat, "total": total,
            "complete": all(l["amount"] is not None for l in lines), "problems": problems, "notes": notes}


def spec_problems(spec, book):
    out = []
    c = spec.get("client") or {}
    if not str(c.get("name") or "").strip():
        out.append("client.name is missing")
    if not str(c.get("contact") or "").strip():
        out.append("client.contact is missing: the quote is addressed to a named person")
    if not (str(c.get("email") or "").strip() or c.get("address")):
        out.append("client needs an email or an address")
    if c.get("code") and not re.fullmatch(r"[A-Z]{2,6}", c["code"]):
        out.append(f"client.code {c['code']!r} must be 2-6 capital letters (the document register's client code)")
    if not str(spec.get("site") or "").strip():
        out.append("site is missing")
    for s in all_strings(spec):
        if PLACEHOLDER.search(s):
            out.append(f"placeholder left in the spec: {s[:80]!r}")
    used = {"quote_validity_days", "payment_terms_days", "working_hours"}
    for k in sorted(used & set(book.get("unconfirmed") or [])):
        out.append(f"price book term {k} = {book[k]!r} is not confirmed by Ricky yet. Confirm it and remove it from 'unconfirmed'.")
    return out


# ------------------------------------------------------------------ credit gate
def credit_gate(spec, credit_path, total_inc_vat, at: dt.datetime):
    """Reads creditwatch.py check output. Returns (problems, gate, proforma)."""
    if not credit_path:
        return (["no credit check: run credit-watch (creditwatch.py check ... --fee <total inc VAT>) and pass its output with --credit"],
                None, False)
    p = Path(credit_path)
    if not p.exists():
        return ([f"credit check file not found: {credit_path}"], None, False)
    age_h = (at - dt.datetime.fromtimestamp(p.stat().st_mtime)).total_seconds() / 3600
    cr = load_json(p)
    gate = cr.get("gate")
    problems = []
    if age_h > CREDIT_MAX_AGE_H:
        problems.append(f"the credit check is {age_h:.0f} hours old; re-run it for this quote")
    # The fee the gate was run for must be this quote's total, so the limit check is real.
    exposures = [m.get("exposure") for m in (cr.get("matches") or []) + (cr.get("credit") or []) if m.get("exposure")]
    if exposures:
        ran_for = money(exposures[0].get("this_job") or 0)
        if ran_for != total_inc_vat:
            problems.append(f"the credit check was run with --fee {gbp(ran_for)} but this quote totals {gbp(total_inc_vat)} inc VAT; re-run it")
    elif gate in CREDIT_OK:
        WARNINGS.append("The credit check was run without --fee, so the credit limit was not tested against this quote.")

    ov = spec.get("credit_override") or {}
    has_override = all(str(ov.get(k) or "").strip() for k in ("decision", "by", "date"))
    if has_override and norm(ov.get("by")) not in ("ricky", "ricky marsh", "michael marsh"):
        problems.append("credit_override.by must be Ricky: only he decides credit")
        has_override = False
    proforma = gate == "proforma"
    if gate in CREDIT_OK:
        pass
    elif gate in ("proforma", "stop", "over_limit", "endole_due", "confirm_identity"):
        if not has_override:
            why = {
                "proforma": "the client is on PROFORMA: Ricky must confirm the quote goes out, on payment-in-advance terms",
                "stop": "the client is on credit STOP: Ricky decides whether to quote at all",
                "over_limit": "this quote takes the client over their RMT credit limit: ask Ricky",
                "endole_due": "the client needs an Endole check (none on record, or over 30 days old) before work is quoted",
                "confirm_identity": "the credit register only partly matches this client: confirm who it is with Ricky",
            }[gate]
            problems.append(why + (". Do the Endole check with credit-watch, then re-run the credit check: this one cannot be overridden."
                                   if gate == "endole_due" else ". Record his answer as credit_override {decision, by, date}."))
    else:
        problems.append(f"unrecognised credit gate {gate!r} in {credit_path}")
    if gate == "endole_due" and has_override:
        problems.append("an Endole check cannot be overridden: do the check, then re-run credit-watch")
    return problems, gate, proforma


# ------------------------------------------------------------------ the log
def load_log(path):
    p = Path(path)
    if not p.exists():
        return {"_about": "RMT Solutions quote log, written only by quote.py", "version": 1, "quotes": []}
    log = load_json(p)
    if not isinstance(log.get("quotes"), list):
        fail(f"{path} is not a quote log")
    return log


def next_ref(log, year: int) -> str:
    nums = [int(m.group(2)) for q in log["quotes"] if (m := REF_RE.match(q["ref"])) and int(m.group(1)) == year]
    return f"RMT-Q-{year}-{(max(nums) + 1 if nums else 1):03d}"


def find_quote(log, ref):
    for q in log["quotes"]:
        if q["ref"] == ref:
            return q
    fail(f"{ref} is not in the log")


# ------------------------------------------------------------------ the quote record
def delivery(lines, accept_on: dt.date):
    days = [l["delivery_working_days"] for l in lines if l["delivery_working_days"]]
    visit = any(l["site_visit"] for l in lines)
    if not days:
        return {"working_days": None, "by": None, "site_visit": visit}
    n = max(days)
    return {"working_days": n, "by": add_working_days(accept_on, n), "site_visit": visit}


def build_record(spec, book, priced, at: dt.datetime, ref, gate, proforma):
    received = dt.datetime.fromisoformat(spec["enquiry"]["received"]) if (spec.get("enquiry") or {}).get("received") else None
    wh = book["working_hours"]
    sla_due = add_working_hours(received, book["quote_sla_working_hours"], wh) if received else None
    # What the client must send, grouped by service (one group per service code).
    info, seen = [], set()
    for l in priced["lines"]:
        if l["code"] in seen or not l["info_needed"]:
            continue
        seen.add(l["code"])
        info.append({"service": l["name"], "items": list(l["info_needed"])})
    if spec.get("info_needed_extra"):
        info.append({"service": "Also", "items": list(spec["info_needed_extra"])})
    valid_until = at.date() + dt.timedelta(days=book["quote_validity_days"])
    return {
        "ref": ref, "rev": "A", "status": "prepared" if ref else "draft",
        "issued_at": at.isoformat(timespec="minutes"),
        "client": spec["client"], "site": spec["site"], "contract_no": spec.get("contract_no"),
        "summary": spec.get("summary") or "; ".join(f"{l['qty'].normalize()} × {l['name']}" for l in priced["lines"]),
        "lines": priced["lines"], "subtotal": priced["subtotal"], "vat_rate_pct": priced["vat_rate_pct"],
        "vat": priced["vat"], "total": priced["total"],
        "inclusions": book["standard_inclusions"] + list(spec.get("extra_inclusions") or []),
        "exclusions": list(spec.get("exclusions") or []),
        "info_needed": info,
        "delivery": delivery(priced["lines"], at.date()),
        "valid_until": valid_until,
        "payment": ({"kind": "proforma"} if proforma else {"kind": "account", "days": book["payment_terms_days"]}),
        "credit_gate": gate, "credit_override": spec.get("credit_override"),
        "enquiry": spec.get("enquiry") or {},
        "sla": {"received": received, "due_by": sla_due,
                "met": (at <= sla_due) if sla_due else None,
                "working_hours_taken": working_hours_between(received, at, wh) if received else None},
        "price_book_version": book["version"], "notes": priced["notes"],
        "history": [],
    }


def email_text(rec):
    first = (rec["client"].get("contact") or "").split()[0] if rec["client"].get("contact") else "there"
    d = rec["delivery"]
    lines = [f"Subject: Quotation {rec['ref'] or 'DRAFT'}: {rec['site']}", "",
             f"Hi {first},", "",
             f"Thanks for your enquiry. Our quotation for {rec['summary']} at {rec['site']} is attached.", "",
             f"Price: {gbp(rec['subtotal'])} + VAT ({gbp(rec['total'])} including VAT). It is a fixed price.",]
    if d["working_days"]:
        when = f"within {d['working_days']} working day{'s' if d['working_days'] > 1 else ''} of your go-ahead and the information below"
        if d["site_visit"]:
            when += "; we will agree the site visit date with you when you confirm"
        lines.append(f"Delivery: {when}. If you confirm today, that is {fmt_date(d['by'])}.")
    if rec["payment"]["kind"] == "proforma":
        lines.append("Payment: in advance. We will send a proforma invoice when you confirm, and start as soon as it is paid.")
    if rec["info_needed"]:
        lines += ["", "To get started we will need:"]
        for g in rec["info_needed"]:
            if len(rec["info_needed"]) > 1:
                lines.append(f"  {g['service']}:")
            lines += [f"  - {i}" for i in g["items"]]
    lines += ["", f"To go ahead, just reply to this email or send a purchase order quoting {rec['ref'] or 'the quote reference'}.",
              f"The quote is valid until {fmt_date(rec['valid_until'])}.", "",
              "Kind regards,", "", "Ricky Marsh", "RMT Solutions Ltd", "07803 808093"]
    return "\n".join(lines) + "\n"


# ------------------------------------------------------------------ commands
def cmd_classify(a):
    text = a.text or ""
    if a.text_file:
        text += "\n" + Path(a.text_file).read_text(encoding="utf-8")
    emit(classify(text, a.files or [], load_book(a.price_book)))


def cmd_price(a):
    book, spec = load_book(a.price_book), load_json(a.spec)
    pr = price(spec, book)
    problems = spec_problems(spec, book) + pr["problems"]
    emit({"status": "success" if not problems else "incomplete",
          "lines": [{"code": l["code"], "qty": str(l["qty"].normalize()),
                     "unit_price": str(l["unit_price"]) if l["unit_price"] is not None else None,
                     "amount": str(l["amount"]) if l["amount"] is not None else None} for l in pr["lines"]],
          "subtotal_ex_vat": str(pr["subtotal"]), "vat": str(pr["vat"]), "total_inc_vat": str(pr["total"]),
          "creditwatch_fee": str(pr["total"]) if pr["complete"] else None,
          "problems": problems, "notes": pr["notes"]})


def cmd_issue(a):
    book, spec = load_book(a.price_book), load_json(a.spec)
    at = now(a.now)
    pr = price(spec, book)
    problems = spec_problems(spec, book) + pr["problems"]
    hard = [p for p in pr["problems"] if "unknown service code" in p or "not a number" in p]
    if hard:
        emit({"status": "refused", "problems": hard}, 2)
    cproblems, gate, proforma = credit_gate(spec, a.credit, pr["total"], at)
    problems += cproblems
    if problems and not a.draft:
        emit({"status": "refused", "problems": problems,
              "next": "Fix these, or build with --draft to show Ricky an unnumbered DRAFT."}, 2)

    log = load_log(a.log)
    ref = None if a.draft else next_ref(log, at.year)
    rec = build_record(spec, book, pr, at, ref, gate, proforma)
    out_pdf = Path(a.out or f"{ref or 'RMT-Q-DRAFT'}.pdf")

    import build_quote_pdf as B   # lazy: classify/price/status never need Jinja or Chromium
    try:
        info = B.render(rec, out_pdf, draft=bool(a.draft), open_items=problems)
    except B.RendererUnavailable as e:
        emit({"status": "error", "error": f"no Chromium to render the PDF: {e}. Nothing was logged."}, 4)
    except B.RenderFailed as e:
        emit({"status": "error", "error": f"render failed: {e}. Nothing was logged."}, 3)

    mail = email_text(rec)
    mail_path = out_pdf.with_suffix(".email.txt")
    mail_path.write_text(mail, encoding="utf-8")
    if not a.draft:
        rec["history"].append({"at": at.isoformat(timespec="minutes"), "status": "prepared", "pdf": out_pdf.name})
        log["quotes"].append(json.loads(json.dumps(rec, default=str)))
        save_json(a.log, log)
    sla = rec["sla"]
    emit({"status": "draft" if a.draft else "prepared_awaiting_ricky", "ref": ref, "pdf": str(out_pdf), "email": str(mail_path),
          "pages": info.get("pages"), "subtotal_ex_vat": str(rec["subtotal"]), "total_inc_vat": str(rec["total"]),
          "valid_until": rec["valid_until"].isoformat(), "credit_gate": gate,
          "payment": rec["payment"]["kind"],
          "four_hour_promise": None if sla["due_by"] is None else
              {"due_by": sla["due_by"].isoformat(timespec="minutes"), "met": sla["met"],
               "working_hours_taken": sla["working_hours_taken"]},
          "open_items": problems if a.draft else [], "notes": rec["notes"],
          "next": None if a.draft else (
              "NOT SENT and not approved. Show Ricky the PDF and the email text and wait for his own approval. "
              "You may create an unsent Superhuman draft for him to look at; never send it, schedule it or ask "
              "anything else to send it. When Ricky approves in his own words, run: quote.py approve "
              + ref + " --by Ricky. Ricky sends the email himself.")},
         0)


def cmd_approve(a):
    """Ricky's approval: the only way a prepared quote becomes one that may go out."""
    book, log = load_book(a.price_book), load_log(a.log)
    q = find_quote(log, a.ref)
    at = now(a.now)
    if norm(a.by) not in APPROVERS:
        fail("only Ricky approves a quote to go out: --by must be Ricky")
    if q["status"] != "prepared":
        fail(f"{a.ref} is {q['status']}; only a prepared quote can be approved")
    q["status"] = "issued"
    q["approved_by"], q["approved_at"] = a.by, at.isoformat(timespec="minutes")
    # The 4-hour promise is about when the client gets the quote, so measure it at approval.
    sla = q.get("sla") or {}
    if sla.get("received"):
        rec_t = dt.datetime.fromisoformat(str(sla["received"]))
        due = dt.datetime.fromisoformat(str(sla["due_by"]))
        sla["met"] = at <= due
        sla["working_hours_taken"] = working_hours_between(rec_t, at, book["working_hours"])
        sla["measured_at"] = "approval"
    q["history"].append({"at": q["approved_at"], "status": "issued", "approved_by": a.by,
                         **({"note": a.note} if a.note else {})})
    save_json(a.log, log)
    emit({"status": "approved", "ref": q["ref"], "approved_by": a.by,
          "four_hour_promise_met": sla.get("met"),
          "next": "Ricky sends the email himself from Superhuman. Do not send it for him."})


def cmd_status(a):
    log = load_log(a.log)
    q = find_quote(log, a.ref)
    at = now(a.now)
    if a.new_status == q["status"]:
        fail(f"{a.ref} is already {q['status']}")
    if q["status"] == "prepared" and a.new_status != "withdrawn":
        fail(f"{a.ref} has not been approved by Ricky, so it has not gone out: it can only be withdrawn")
    if q["status"] not in ("prepared", "issued"):
        fail(f"{a.ref} is {q['status']}; only a prepared or issued quote can change status")
    if a.new_status == "declined" and not (a.reason or "").strip():
        fail("give --reason for a declined quote (price, timing, went elsewhere ...): it is what the stats learn from")
    q["status"] = a.new_status
    ev = {"at": at.isoformat(timespec="minutes"), "status": a.new_status}
    if a.po:
        q["po_number"] = ev["po"] = a.po
    if a.reason:
        q["status_reason"] = ev["reason"] = a.reason
    q["history"].append(ev)
    save_json(a.log, log)
    nxt = None
    if a.new_status == "accepted":
        nxt = ["Run credit-watch check again if the quote was issued more than 30 days ago."]
        if q["payment"]["kind"] == "proforma":
            nxt.append("Raise the proforma invoice and hold the work until payment is confirmed received.")
        nxt += ["Add the job to the job board, quoting " + q["ref"] + (f" and PO {a.po}" if a.po else "") + ".",
                "When the work is issued, log it with invoice-tracker and put " + q["ref"] + " in its notes, invoicing "
                + gbp(q["subtotal"]) + " + VAT."]
    emit({"status": "success", "ref": q["ref"], "now": q["status"], "next": nxt})


def cmd_followup(a):
    log, at = load_log(a.log), now(a.now)
    chase, lapsing, lapsed, waiting = [], [], [], []
    for q in log["quotes"]:
        if q["status"] == "prepared":
            waiting.append({"ref": q["ref"], "client": q["client"]["name"], "site": q["site"],
                            "total_ex_vat": q["subtotal"], "prepared": q["issued_at"]})
            continue
        if q["status"] != "issued":
            continue
        issued = dt.date.fromisoformat((q.get("approved_at") or q["issued_at"])[:10])
        valid = dt.date.fromisoformat(str(q["valid_until"])[:10])
        waited = working_days_between(issued, at.date())
        row = {"ref": q["ref"], "client": q["client"]["name"], "contact": q["client"].get("contact"),
               "site": q["site"], "total_ex_vat": q["subtotal"], "issued": issued.isoformat(),
               "working_days_waiting": waited, "valid_until": valid.isoformat()}
        if valid < at.date():
            lapsed.append(row)
        elif (valid - at.date()).days <= 5:
            lapsing.append(row)
        elif waited >= a.days:
            chase.append(row)
    emit({"status": "success", "awaiting_ricky_approval": waiting, "chase": chase,
          "lapsing_within_5_days": lapsing, "lapsed": lapsed,
          "note": "Quotes awaiting approval have not gone out: remind Ricky, never send them. Chasers are drafts "
                  "for Ricky to approve and send; mark lapsed quotes `status ... expired` once he agrees."})


def cmd_stats(a):
    allq = load_log(a.log)["quotes"]
    qs = [q for q in allq if q["status"] != "prepared"]      # only quotes that actually went out
    by = {s: [q for q in allq if q["status"] == s] for s in STATUSES}
    decided = len(by["accepted"]) + len(by["declined"]) + len(by["expired"])
    sla = [q["sla"]["met"] for q in qs if q.get("sla", {}).get("met") is not None]
    taken = sorted(q["sla"]["working_hours_taken"] for q in qs if q.get("sla", {}).get("working_hours_taken") is not None)
    reasons = {}
    for q in by["declined"]:
        reasons[q.get("status_reason", "")] = reasons.get(q.get("status_reason", ""), 0) + 1
    emit({"status": "success", "quotes": len(qs), **{s: len(v) for s, v in by.items()},
          "win_rate_pct": round(100 * len(by["accepted"]) / decided, 1) if decided else None,
          "value_quoted_ex_vat": str(sum(Decimal(q["subtotal"]) for q in qs)),
          "value_won_ex_vat": str(sum(Decimal(q["subtotal"]) for q in by["accepted"])),
          "open_value_ex_vat": str(sum(Decimal(q["subtotal"]) for q in by["issued"])),
          "four_hour_promise_met_pct": round(100 * sum(sla) / len(sla), 1) if sla else None,
          "median_working_hours_to_quote": taken[len(taken) // 2] if taken else None,
          "declined_reasons": reasons})


# ------------------------------------------------------------------ self-test
def cmd_selftest(_a):
    import subprocess
    ok_count, failures = 0, []

    def ok(cond, what):
        nonlocal ok_count
        if cond:
            ok_count += 1
        else:
            failures.append(what)

    book = load_book()
    # Price book integrity
    ok(all(book["_by_code"][c]["price_ex_vat"] == 200 for c in ("LP-EXC", "LP-TH", "LP-FL", "LP-LL")),
       "the four remote plans are £200 in the book (website price rule, 20 Nov 2026)")
    ok(all(book["_by_code"][c]["price_ex_vat"] is None for c in ("LP-MC", "LP-TC", "TLP")),
       "mobile crane, tower crane and tandem stay priced per job")
    ok(chr(0xA7) not in PRICE_BOOK.read_text(encoding="utf-8"), "no section symbol in the price book")

    # Working time
    ok(add_working_days(dt.date(2026, 12, 24), 2) == dt.date(2026, 12, 30), "2 working days from Christmas Eve skips 25 and 28 Dec")
    wh = {"start": "08:00", "end": "17:00"}
    ok(add_working_hours(dt.datetime(2026, 11, 24, 15, 0), 4, wh) == dt.datetime(2026, 11, 25, 10, 0), "4 h from Tue 15:00 is Wed 10:00")
    ok(add_working_hours(dt.datetime(2026, 11, 28, 11, 0), 4, wh) == dt.datetime(2026, 11, 30, 12, 0), "Saturday enquiry starts Monday 08:00")
    ok(add_working_hours(dt.datetime(2026, 11, 24, 6, 30), 4, wh) == dt.datetime(2026, 11, 24, 12, 0), "early enquiry starts at opening")
    ok(working_hours_between(dt.datetime(2026, 11, 24, 15, 0), dt.datetime(2026, 11, 25, 10, 0), wh) == 4.0, "working hours between")

    # Arithmetic in pence
    spec = {"client": {"name": "Example Contractors Ltd", "contact": "Sam Example", "email": "sam@example.co.uk"},
            "site": "Unit 4, Example Park", "lines": [{"code": "LP-TH", "qty": 3}, {"code": "LP-MC", "qty": 1, "price_ex_vat": 333.33}]}
    pr = price(spec, book)
    ok(pr["subtotal"] == Decimal("933.33") and pr["vat"] == Decimal("186.67") and pr["total"] == Decimal("1120.00"),
       "3 × £200 + £333.33 = £933.33, VAT £186.67, total £1,120.00")
    ok(price({**spec, "lines": [{"code": "LP-MC"}]}, book)["problems"][0].startswith("line 1: PRICE NEEDED"), "per-job line without a price is refused")
    ok(any("price_reason" in p for p in price({**spec, "lines": [{"code": "LP-TH", "price_ex_vat": 180}]}, book)["problems"]),
       "a book price changed without a reason is refused")
    ok(not price({**spec, "lines": [{"code": "LP-TH", "price_ex_vat": 180, "price_reason": "agreed framework rate"}]}, book)["problems"],
       "a changed price with a reason is accepted")
    ok(any("out-of-hours" in p for p in price({**spec, "lines": [{"code": "OOH", "price_ex_vat": 100}]}, book)["problems"]),
       "OOH needs out_of_hours_requested")
    ok(any("placeholder" in p for p in spec_problems({**spec, "site": "TBC"}, book)), "placeholder refused")

    # Classifier
    c = classify("Can you do us a lift plan for a Manitou telehandler unloading 3 cabins on Thursday? Urgent", book=book)
    ok([l["code"] for l in c["suggested_lines"]] == ["LP-TH"] and c["suggested_lines"][0]["qty"] == 3, "telehandler × 3 cabins")
    ok(any("no surcharge" in s for s in c["signals"]), "urgent wording notes no surcharge")
    c = classify("Please review the attached lift plans for the 100t mobile crane", ["2556-LP1 P01.pdf", "2556-LP2 P01.pdf"], book)
    ok([l["code"] for l in c["suggested_lines"]] == ["LPR"], "review of a crane plan is LPR, not LP-MC")
    c = classify("Tandem lift with two cranes lifting a bridge beam", book=book)
    ok("TLP" in [l["code"] for l in c["suggested_lines"]] and any("tandem" in s.lower() for s in c["signals"]), "tandem routes to TLP")
    c = classify("We need a crane for Tuesday", book=book)
    ok(any("'Crane' with no type" in q for q in c["questions"]), "bare 'crane' asks which type")
    c = classify("Lift plan needed for HIAB delivering kiosk Saturday", book=book)
    ok([l["code"] for l in c["suggested_lines"]] == ["LP-LL"] and any("Evening or weekend" in s for s in c["signals"]),
       "HIAB on Saturday suggests LP-LL, flags OOH but does not add it")

    # Full issue round trip through the CLI, with a confirmed copy of the book
    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        b = json.loads(PRICE_BOOK.read_text(encoding="utf-8"))
        b["unconfirmed"] = []
        (td / "book.json").write_text(json.dumps(b))
        spec = {**spec, "enquiry": {"received": "2026-11-24T09:10"}}
        (td / "spec.json").write_text(json.dumps(spec))
        (td / "credit.json").write_text(json.dumps({"status": "success", "listed": False, "gate": "clear", "matches": [],
            "credit": [{"client": "Example Contractors Ltd", "exposure": {"this_job": 1120.0, "over_limit": False}}]}))
        (td / "stop.json").write_text(json.dumps({"status": "success", "listed": True, "gate": "stop", "matches": []}))

        def run(*args):
            r = subprocess.run([sys.executable, str(Path(__file__)), *args, "--price-book", str(td / "book.json")],
                               capture_output=True, text=True)
            try:
                return r.returncode, json.loads(r.stdout)
            except json.JSONDecodeError:
                return r.returncode, {"raw": r.stdout + r.stderr}

        rc, out = run("issue", str(td / "spec.json"), "--log", str(td / "log.json"), "--credit", str(td / "stop.json"),
                      "--now", "2026-11-24T11:00")
        ok(rc == 2 and any("STOP" in p for p in out.get("problems", [])), "credit STOP refuses the quote")
        rc, out = run("issue", str(td / "spec.json"), "--log", str(td / "log.json"), "--now", "2026-11-24T11:00")
        ok(rc == 2 and any("no credit check" in p for p in out.get("problems", [])), "no credit check refuses the quote")
        os.utime(td / "credit.json", None)
        rc, out = run("issue", str(td / "spec.json"), "--log", str(td / "log.json"), "--credit", str(td / "credit.json"),
                      "-o", str(td / "q.pdf"), "--now", dt.datetime.now().replace(second=0, microsecond=0).isoformat())
        if rc == 4:
            WARNINGS.append("No Chromium here: the PDF render step was not tested.")
        else:
            ok(rc == 0 and out.get("ref", "").startswith("RMT-Q-") and (td / "q.pdf").exists(), f"issue writes a numbered PDF ({out})")
            ok((td / "q.email.txt").exists() and "£933.33 + VAT" in (td / "q.email.txt").read_text(), "email text carries the price")
            ref = out.get("ref") or "RMT-Q-0000-000"
            ok(out.get("status") == "prepared_awaiting_ricky", "issue only prepares: the quote is held for Ricky")
            rc, out = run("status", ref, "accepted", "--log", str(td / "log.json"))
            ok(rc == 1, "a quote Ricky has not approved cannot be marked accepted")
            rc, out = run("followup", "--log", str(td / "log.json"))
            ok(rc == 0 and [w["ref"] for w in out["awaiting_ricky_approval"]] == [ref] and not out["chase"],
               "follow-up lists an unapproved quote as awaiting Ricky, never as one to chase")
            rc, out = run("approve", ref, "--log", str(td / "log.json"), "--by", "Assistant")
            ok(rc == 1, "nobody but Ricky can approve")
            rc, out = run("approve", ref, "--log", str(td / "log.json"), "--by", "Ricky")
            ok(rc == 0 and out["status"] == "approved", "Ricky approves the quote")
            rc, out = run("approve", ref, "--log", str(td / "log.json"), "--by", "Ricky")
            ok(rc == 1, "a quote cannot be approved twice")
            rc, out = run("status", ref, "declined", "--log", str(td / "log.json"))
            ok(rc == 1, "declined without a reason is refused")
            rc, out = run("status", ref, "accepted", "--log", str(td / "log.json"), "--po", "PO-1234")
            ok(rc == 0 and out["now"] == "accepted", "status accepted")
            rc, out = run("stats", "--log", str(td / "log.json"))
            ok(rc == 0 and out["accepted"] == 1 and out["win_rate_pct"] == 100.0, "stats count the win")
            log = json.loads((td / "log.json").read_text())
            ok(next_ref(log, dt.datetime.now().year).endswith("-002"), "numbers run on and are never reused")

    if failures:
        emit({"status": "fail", "passed": ok_count, "failed": failures}, 1)
    emit({"status": "pass", "passed": ok_count})


# ------------------------------------------------------------------ main
def main(argv=None):
    if argv is None and "--self-test" in sys.argv[1:]:
        return cmd_selftest(None)
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sp = ap.add_subparsers(dest="cmd", required=True)

    def p(name, fn, **kw):
        s = sp.add_parser(name, **kw)
        s.add_argument("--price-book", help="defaults to references/price-book.json")
        s.add_argument("--now", help="ISO date-time to act as 'now' (tests and back-dating)")
        s.set_defaults(fn=fn)
        return s

    s = p("classify", cmd_classify); s.add_argument("--text"); s.add_argument("--text-file"); s.add_argument("--files", nargs="*")
    s = p("price", cmd_price); s.add_argument("spec")
    s = p("issue", cmd_issue); s.add_argument("spec"); s.add_argument("--log", required=True)
    s.add_argument("--credit", help="output of creditwatch.py check, saved as JSON"); s.add_argument("-o", "--out")
    s.add_argument("--draft", action="store_true")
    s = p("approve", cmd_approve); s.add_argument("ref"); s.add_argument("--log", required=True)
    s.add_argument("--by", required=True, help="Ricky, and only after he has said so himself"); s.add_argument("--note")
    s = p("status", cmd_status); s.add_argument("ref"); s.add_argument("new_status", choices=STATUSES[2:])
    s.add_argument("--log", required=True); s.add_argument("--po"); s.add_argument("--reason")
    s = p("followup", cmd_followup); s.add_argument("--log", required=True); s.add_argument("--days", type=int, default=3)
    s = p("stats", cmd_stats); s.add_argument("--log", required=True)
    a = ap.parse_args(argv)
    a.fn(a)


if __name__ == "__main__":
    sys.path.insert(0, str(HERE))
    main()
