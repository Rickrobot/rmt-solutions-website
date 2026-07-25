# TODO — Ricky

## ⚠️ DO THIS FIRST (2 minutes) — GA4 key events

**Why it matters:** conversion tracking went live on 25 July and is firing
correctly, but GA4 does **not** count an event as a conversion until you mark it.
Until this is done you are collecting data you cannot report on — and the whole
point of the tracking work was to answer "which pages make the phone ring?".

### Step 1 — make the events appear (30 seconds)

Events only show in GA4's list **after they have fired at least once**. So:

- [ ] Open **https://www.rmtsafetysolutions.com/contact** on your phone
- [ ] Tap the green **"Send the drawing on WhatsApp"** button (then just close WhatsApp)
- [ ] Tap the **phone number**
- [ ] Go back and submit a **test enquiry** through the form
- [ ] Go to **/resources/telehandler-lift-plan-templates** and tap a template download

### Step 2 — mark them as key events (90 seconds)

- [ ] Go to **GA4 → Admin → Events** (under *Data display*)
- [ ] Find each event below and toggle **"Mark as key event"**:

| Event | Mark as key event? |
|---|---|
| `generate_lead` | ✅ **YES — this is the important one** |
| `phone_call` | ✅ yes |
| `whatsapp_click` | ✅ yes |
| `template_download` | ✅ yes |
| `email_click` | ❌ no — useful signal, not a conversion |
| `form_submit_error` | ❌ no — that's an alert, not a conversion |

**If the events aren't listed yet:** they can take up to 24 hours to appear.
Check **GA4 → Reports → Realtime** instead — events show there within seconds,
which confirms tracking works even before they reach the Events list.

---

## Also worth doing tomorrow (5 minutes)

- [ ] **Search Console → URL Inspection → Request Indexing** on the five pages
      with new titles, to speed up the recrawl:
  - `/blog/when-do-you-need-lift-plan`
  - `/blog/what-is-a-lift-plan`
  - `/blog/what-is-bs-7121-complete-guide`
  - `/blog/cpcs-appointed-person-guide`
  - `/services/lift-plan-checking`

- [ ] **Set Search Console's default view to United Kingdom only.** 31% of your
      impressions are non-UK (the US alone is 12.6% at 0.37% CTR) and they
      distort every number you look at.

- [ ] **Delete the `_to_delete/` folder** in Finder. It's gitignored so it will
      never reach a commit, but it's holding the retired lift-plan-review page
      and some leftover git artefacts.

---

## The report to build once data arrives (2–3 weeks)

**GA4 → Explore → Free form**
- Dimension: **Landing page**
- Metric: **Key events**

This answers the question the whole review was about: which pages actually
produce enquiries.

**Prediction worth testing:** the `/resources/` template pages will produce more
enquiries than the entire blog, despite the blog having 6.7× the impressions.
If that holds, it settles the content strategy — build more templates, not more
guides.

Second thing to watch: the `link_location` parameter will tell you whether
`contact_hero` (the WhatsApp button) or the form produces more enquiries. If
WhatsApp wins on mobile, the same treatment should go on the service pages.

---

## Shipped 25 July 2026 — for reference

| Commit | What |
|---|---|
| `2785d3a` | 4 blog titles/metas, page merges + 301s, 4-hour response, OG tags |
| `860dffe` | Conversion tracking (GA4 + Clarity) |
| `11ce6e6` | Contact page rebuild — WhatsApp-first, proof, next-steps |

Detail in `SEO-FIXES-ROUND-9.txt` and `CONVERSION-TRACKING-SETUP.md`.

**Don't expect ranking movement for 2–4 weeks.** The two merged URLs will dip
briefly before their authority consolidates — that's expected, not a fault.
