# Conversion Tracking — What Was Added & What You Must Do in GA4

**Added:** 25 July 2026 · **Files changed:** 5 (1 new, 4 modified)
**Status:** built clean and verified in a real browser — every event below was
fired and captured in `dataLayer`, including a negative control that correctly
did *not* fire.

---

## The problem this solves

GA4 and Microsoft Clarity were already installed on the site, but both were
only recording **pageviews**. Nothing recorded an enquiry. That meant the one
question that actually matters — *which pages make the phone ring?* — was
unanswerable. You could see 1,134 clicks a quarter; you could not see which of
them turned into work.

---

## What now gets tracked

| Event | Fires when | Where it fires |
|---|---|---|
| `generate_lead` | An enquiry form is submitted **successfully** | Contact page form + every inline quote form on service pages |
| `phone_call` | Any `tel:` link is clicked | 50+ links site-wide |
| `whatsapp_click` | Any WhatsApp link is clicked | Contact page, sticky mobile CTA, blog |
| `email_click` | Any `mailto:` link is clicked | Contact page, footer, homepage |
| `template_download` | Any file under `/downloads/` is clicked | All 25 template links across `/resources/` |
| `form_submit_error` | A form submission fails | Both forms (so you find out if Web3Forms breaks) |

Every event also carries:

- `page_path` — **which page produced the conversion.** This is the whole point.
- `event_label` — the link text, email address, or selected service
- `link_location` — `inline` or `mobile_sticky_cta`, so you can tell whether the
  sticky mobile button is earning its place on the screen

`template_download` additionally carries `file_name` and `file_extension`, so
you can see exactly which templates drive downloads — useful given `/resources/`
is your best-converting section (2.70% CTR, 328 clicks/quarter).

---

## How it was built

**One new file:** `components/ConversionTracking.js`, mounted once in
`app/layout.js`.

It uses a single delegated click listener on `document` rather than an
`onClick` handler on every link. That matters because the site has 50+ `tel:`
links and 25+ download links spread across ~30 files — per-link handlers would
have meant a large fragile diff, would have forced several server components to
become client components, and would silently miss any link added in future.
The delegated listener catches every current *and future* link with no
per-link code.

**Modified:**

- `app/layout.js` — mounts `<ConversionTracking />`
- `app/contact/page.js` — fires `generate_lead` on successful submit, passing
  the selected service and equipment type
- `components/InlineQuoteForm.js` — now uses the shared tracker and GA4's
  recommended `generate_lead` name (was a non-standard `form_submit_success`)
- `components/FloatingCallButton.js` — its bespoke tracker was **removed** and
  replaced with `data-track-location="mobile_sticky_cta"`. Keeping both would
  have double-counted every sticky CTA click.

**Safety:** every call is wrapped so it no-ops silently when analytics is
absent — local dev, ad blockers, consent tooling. It can never throw in the
render path or break a page.

**Clarity bonus:** each event also tags the Clarity session. You can filter
session recordings by conversion and literally watch what someone did before
they called you.

---

## ⚠️ YOU MUST DO THIS IN GA4 — it doesn't work until you do

Events are being sent, but GA4 does **not** treat them as conversions until you
mark them. This takes about two minutes.

1. Go to **GA4 → Admin → Events** (under *Data display*)
2. Wait for the events to appear. **They only show up after they've fired at
   least once**, so it may take up to 24 hours. To speed it up: open your own
   site, tap the phone number and submit a test enquiry.
3. Toggle **"Mark as key event"** for:
   - `generate_lead` ← the important one
   - `phone_call`
   - `whatsapp_click`
   - `template_download`

Leave `email_click` and `form_submit_error` unmarked — they're useful signals
but they aren't conversions.

**Check it's working now:** GA4 → **Reports → Realtime**, then open the site in
another tab and tap the phone number. The event should appear within seconds.

---

## The report to build (this is the one that answers the question)

**GA4 → Explore → Free form**

- **Dimension:** Landing page + query string
- **Metric:** Key events (or Event count, filtered to `generate_lead`)

That single report tells you which pages actually produce enquiries — and
therefore which of the SEO work is worth continuing.

My prediction from the Search Console data, worth testing: **`/resources/`
template pages will produce more enquiries than the blog**, despite the blog
having 6.7× the impressions. If that holds, it settles the content strategy
argument — build more templates, not more guides.

---

## One caveat on GA4 Enhanced Measurement

GA4's Enhanced Measurement can auto-track file downloads (`.pdf`, `.docx`). The
custom event here is deliberately named `template_download` rather than
`file_download` so the two can never double-count. If you'd rather rely on GA4's
built-in one, you can — but the custom event carries `page_path` and
`link_location`, which the built-in doesn't.

---

## What this still doesn't tell you

Tracking a form submit is not the same as tracking **won work**. A `generate_lead`
event is someone asking for a quote, not someone paying an invoice.

If you want the full picture later, the next step is recording which enquiries
turned into jobs — even a spreadsheet with date, source page and won/lost would
let you work out which pages produce *profitable* enquiries rather than just
lots of them. Worth doing once you have 30–40 leads to look at.
