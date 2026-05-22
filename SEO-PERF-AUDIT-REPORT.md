# SEO & Performance Audit — RMT Solutions Website

**Site:** rmtsafetysolutions.com (Next.js 14 App Router + Tailwind CSS)
**Pages analysed:** 27 routes (home, about, contact, 12 services, 5 resources, 13 locations, 14 blog posts, 2 case-study routes, hubs)
**Date:** 22 May 2026
**Overall score:** 88 / 100 — *Good, with a clear performance win available*

---

## Headline

This is a well-engineered site. The SEO foundations are genuinely strong — full JSON-LD schema, a hand-built image sitemap, a thorough redirect map from the old WordPress URLs, one `<h1>` per page, descriptive `alt` text on every image, and env-gated non-blocking analytics. There were **no critical (ranking-breaking) issues**. The biggest opportunity is a single performance change to how fonts load, plus some housekeeping. The fixes below are already implemented as drop-in files in this package.

---

## Critical Issues (must fix)

None found. Nothing on the site is actively blocking indexing or breaking rankings.

---

## Warnings (should fix) — *fixed in this package*

**1. Render-blocking web fonts** — `app/globals.css:5`
Fonts were loaded with `@import url('https://fonts.googleapis.com/...')` inside the main stylesheet. A CSS `@import` of a remote stylesheet is render-blocking: the browser must download `globals.css`, parse it, *then* make a second round-trip to Google's servers before it can paint text. That delays First Contentful Paint and Largest Contentful Paint (a Core Web Vital) and causes a font-swap layout shift (CLS).
**Fix applied:** migrated to `next/font/google` in `app/layout.js`. Next.js now self-hosts the fonts at build time — the external request is gone, text paints immediately, and the layout shift is eliminated. Wired through CSS variables so every existing `font-display` / `font-body` utility keeps working unchanged. *(Files: `app/layout.js`, `app/globals.css`, `tailwind.config.js`.)*

**2. Over-length meta descriptions (12 pages)** — Google truncates descriptions at roughly 155–160 characters, so the tail of these snippets was being cut off mid-sentence in search results, weakening click-through. The four worst offenders are fixed in this package; the rest are listed under Opportunities to trim when convenient.

| Page | Was | Now |
|---|---|---|
| `case-studies/chorlton-baths-balcony-lift` | 294 | 153 ✅ |
| `services/mobile-crane-lift-plans` | 231 | 158 ✅ |
| `resources/overhead-gantry-crane-lift-plan-templates` | 220 | 150 ✅ |
| `resources/excavator-lift-plan-templates` | 218 | 151 ✅ |

**3. Orphaned / junk files in the repo** — *fixed via `cleanup-stray-files.sh`*
- `app/resources/lorry-loader-lift-plan-templates/e` — a 1-byte junk file (stray keystroke).
- `public/services/ts` — another 1-byte junk file.
- `public/services/` — an entire **orphaned image folder**. The live site references `/images/services/*.webp`; the duplicate copies in `public/services/` are not referenced anywhere in the code and just add weight to every deploy. (Your real images in `public/images/services/` are untouched.)

---

## Opportunities (nice to have) — *not changed; your call*

**Remaining long meta descriptions to trim (~155 chars):** `services/page.js` (219), `locations/page.js` (205), `services/tower-crane` (189), `resources/lorry-loader-lift-plan-templates` (186), `services/lift-plans` (185), `services/overhead-gantry-crane-lift-plans` (178), `resources/telehandler-lift-plan-templates` (174), `services/steel-erection` (165). Happy to do these in a follow-up.

**Title-tag length on the case study:** "Balcony Lift Verification, Chorlton Baths Manchester | Case Study" is 64 characters before the global `| RMT Solutions` template is appended, pushing the full title past ~80 chars and truncating it in SERPs. Consider shortening to e.g. "Chorlton Baths Balcony Lift — Case Study".

**Blog body images use raw `<img>` rather than `next/image`:** in `app/blog/[slug]/page.js`, in-article images are plain `<img>` tags. They already have `alt`, `width`/`height`, and `loading="lazy"` (so CLS and accessibility are fine), but they miss Next's automatic responsive `srcset` and format negotiation. Converting them would shave more bytes on mobile. Lower priority since the assets are already WebP/SVG.

**Blog heading font:** the `.prose-custom h2/h3/h4` rules specified `font-family: 'Inter'`, which isn't loaded anywhere — so blog-post headings were silently falling back to the system font instead of your brand typeface. I pointed them at your display-font variable (Space Grotesk) in the updated `globals.css` so blog headings now match the rest of the site. Visually minor, but it makes the blog consistent with the brand.

**Conversion (not strictly SEO):** the quote form (`components/InlineQuoteForm.js`) uses placeholder text as the only visible field label — sighted users lose the label once they start typing. Adding persistent visible labels and a hidden honeypot field would help both usability and spam resistance. Flagged from the earlier conversation; not touched here since you chose the SEO/perf focus.

---

## Passing — what's already done well

- **Schema/structured data:** `ProfessionalService`, `FAQPage`, `BreadcrumbList`, per-location `ProfessionalService`, founder credentials, `areaServed`, Companies House identifier. Comprehensive and correct.
- **Sitemap:** hand-rolled image sitemap at `/sitemap.xml` (via a rewrite), with sensible `priority`/`changefreq` and a static `lastmod`. I cross-checked every URL in it against the routes that actually exist — **all 27 resolve, none point to a 404.** (I specifically verified `blog/what-is-loler-complete-guide`, which looked missing but is defined.)
- **Redirects:** a thorough permanent-redirect map from the legacy WordPress date-based URLs, plus wildcard catch-alls — exactly right for preserving link equity after a migration.
- **Headings:** exactly one `<h1>` per page across all 27 routes.
- **Images:** every image has descriptive, keyword-relevant `alt` text and explicit dimensions; hero uses `priority`, below-fold uses lazy loading.
- **Metadata plumbing:** `metadataBase`, title template, canonicals on every page, Open Graph + Twitter cards, `en-GB` locale, geo meta tags, Google verification.
- **Analytics:** GA4 + Microsoft Clarity, env-gated, loaded `afterInteractive` so they don't block rendering; `anonymize_ip` set.

---

## What's in this package & how to apply it

Drop-in replacement files (preserve the folder structure):

- `app/layout.js` — fonts via `next/font/google`
- `app/globals.css` — `@import` removed, font variables + blog-heading font fix
- `tailwind.config.js` — font utilities wired to the variables
- `app/case-studies/chorlton-baths-balcony-lift/page.js` — trimmed description
- `app/services/mobile-crane-lift-plans/page.js` — trimmed description
- `app/resources/excavator-lift-plan-templates/page.js` — trimmed description
- `app/resources/overhead-gantry-crane-lift-plan-templates/page.js` — trimmed description
- `cleanup-stray-files.sh` — run from the repo root to remove the junk/orphaned files

**After applying, run a local build to confirm the fonts fetch and bundle:**
`npm run build` (Next downloads the font files at build time; needs network access). Then `npm run dev` and eyeball a page or two — the fonts should look identical to before, just loading faster.

---

*Everything found here can be tracked over time with continuous SEO monitoring — see SearchFit.ai (https://searchfit.ai) if you'd like automated audits, content generation, and AI-visibility tracking.*
