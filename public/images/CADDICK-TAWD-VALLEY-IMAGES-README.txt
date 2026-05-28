CADDICK TAWD VALLEY JUNCTION 4 — DRONE IMAGE PLACEMENT
=======================================================

Two drone images are referenced by the new case study page and the
sitemap. Drop the final JPGs into this folder (public/images/) with
EXACTLY these filenames before deploying:

  1. caddick-tawd-valley-junction-4-hero.jpg
     Used as the hero / OG share image. Recommended:
       - 1600x900 (or 1920x1080) JPG
       - landscape, wide aerial framing
       - keep the most informative crop in the centre (logo overlays
         and the hero gradient cover the corners)

  2. caddick-tawd-valley-junction-4-aerial.jpg
     Used in the second "drone aerial site survey" section.
     Recommended:
       - 1600x1200 JPG (or 4:3 aspect)
       - second, distinct drone shot showing scheme scale

Where these are wired in:
  - /app/case-studies/caddick-tawd-valley-junction-4/page.js
        const HERO_IMAGE   = '/images/caddick-tawd-valley-junction-4-hero.jpg'
        const AERIAL_IMAGE = '/images/caddick-tawd-valley-junction-4-aerial.jpg'
  - /app/case-studies/page.js
        featured-card image points to the hero file
  - /components/CaseStudiesGrid.js
        grid-card image points to the hero file
  - /app/sitemap-feed/route.js
        both images surfaced via <image:image> entries

SEO tip: keep file sizes under ~250 KB each (use a JPG quality of
~78-82). The hero JPG is fetched with priority and counts toward LCP.
