// Custom sitemap.xml route handler.
//
// Why a route handler instead of `app/sitemap.js`?
//   Next.js's `MetadataRoute.Sitemap` helper added support for the
//   `images` field in 14.3 — on 14.2.x it silently drops the field at
//   build time, producing a sitemap with no `<image:image>` entries.
//   This file emits the XML directly so we keep full control over the
//   image sitemap extension while staying on Next 14.2.
//
// Why /sitemap-feed and not /sitemap.xml?
//   Next.js reserves `sitemap.{xml,js,ts}` as metadata filenames. Having
//   `app/sitemap.xml/` as a route directory conflicts with that
//   convention and breaks the build with "two parallel pages that
//   resolve to the same path". The route lives at `/sitemap-feed` and
//   is exposed at the canonical `/sitemap.xml` URL via a rewrite in
//   next.config.js.
//
// Conventions (mirrors the previous sitemap.js):
//   - SITE_LAST_UPDATED: bump when meaningful site-wide content changes.
//     Avoid `new Date()` here — that resets lastmod on every build and
//     trains crawlers to ignore the freshness signal.
//   - Blog posts carry their own dates.
//   - Every route listed here MUST exist in the app.

const BASE_URL = 'https://www.rmtsafetysolutions.com';
const SITE_LAST_UPDATED = '2026-05-21';

// Canonical images surfaced via the image sitemap extension. These give
// the listed pages a hard image association in Google Search and make
// the URLs eligible for Google Images results.
const OG_IMAGE = `${BASE_URL}/images/og-lift-planning.jpg`;
const HERO_IMAGE = `${BASE_URL}/images/mobile-crane-steel-erection.webp`;

const STATIC_ROUTES = [
  { path: '',              changefreq: 'weekly',  priority: '1.0', images: [HERO_IMAGE, OG_IMAGE] },
  { path: '/about',        changefreq: 'monthly', priority: '0.8', images: [OG_IMAGE] },
  // Services hub — parent of every /services/{slug} leaf. Priority is
  // set high (0.9) because every service leaf's BreadcrumbList JSON-LD
  // points here, and Google needs to crawl it to validate that schema.
  { path: '/services',     changefreq: 'monthly', priority: '0.9', images: [OG_IMAGE] },
  { path: '/case-studies', changefreq: 'weekly',  priority: '0.8', images: [HERO_IMAGE] },
  { path: '/contact',      changefreq: 'monthly', priority: '0.7', images: [OG_IMAGE] },
];

const SERVICE_SLUGS = [
  'excavator-lift-plans',
  'telehandler-lift-plans',
  'lorry-loader-lift-plans',
  'mobile-crane-lift-plans',
  'overhead-gantry-crane-lift-plans',
  'lift-plan-checking',
  'lift-plan-review',
  'lifting-operations-audit',
  'lift-plans',
  'tower-crane',
  'steel-erection',
  'aerial-site-surveys',
];

const RESOURCE_ROUTES = [
  { path: '/resources',                                    priority: '0.7' },
  { path: '/resources/excavator-lift-plan-templates',      priority: '0.7' },
  { path: '/resources/telehandler-lift-plan-templates',    priority: '0.7' },
  { path: '/resources/lorry-loader-lift-plan-templates',   priority: '0.7' },
  { path: '/resources/overhead-gantry-crane-lift-plan-templates', priority: '0.7' },
];

// Order: home patch (Warrington) first, then regional flagships, then
// satellite boroughs, then tier-1 UK cities.
const LOCATION_SLUGS = [
  'warrington',
  'manchester',
  'liverpool',
  'salford',
  'stockport',
  'trafford',
  'wirral',
  'leeds',
  'birmingham',
  'london',
  'bristol',
  'glasgow',
  'edinburgh',
];

const BLOG_POSTS = [
  { slug: 'what-is-bs-7121-complete-guide',                                   date: '2026-05-19' },
  { slug: 'what-is-a-lift-plan',                                              date: '2026-02-11' },
  { slug: 'what-does-a-lift-plan-checking-service-involve',                   date: '2026-02-11' },
  { slug: 'what-is-loler-complete-guide',                                     date: '2026-01-28' },
  { slug: 'when-do-you-need-lift-plan',                                       date: '2026-01-28' },
  { slug: 'mobile-crane-vs-tower-crane',                                      date: '2026-01-28' },
  { slug: 'excavator-lift-plans-complete-guide',                              date: '2026-01-31' },
  { slug: 'cpcs-appointed-person-guide',                                      date: '2026-01-31' },
  { slug: 'common-lift-planning-mistakes',                                    date: '2026-01-31' },
  { slug: 'telehandler-lift-plans-complete-guide',                            date: '2026-02-06' },
  { slug: 'lorry-loader-lift-plans-guide',                                    date: '2026-02-06' },
  { slug: 'lift-plan-checking-what-gets-checked-and-why-plans-get-rejected',  date: '2026-02-22' },
  { slug: 'lifting-operations-audit-what-to-expect',                          date: '2026-02-23' },
  { slug: 'overhead-crane-lift-plan-guide',                                   date: '2026-05-21' },
];

// XML escaping for URLs/captions — sitemap content is typically ASCII-safe
// but we belt-and-brace it in case anything ever contains &, <, >, or quotes.
function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function buildUrlEntry({ loc, lastmod, changefreq, priority, images }) {
  const lines = [
    '  <url>',
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
  ];
  if (Array.isArray(images) && images.length > 0) {
    for (const img of images) {
      lines.push('    <image:image>');
      lines.push(`      <image:loc>${escapeXml(img)}</image:loc>`);
      lines.push('    </image:image>');
    }
  }
  lines.push('  </url>');
  return lines.join('\n');
}

function buildSitemapXml() {
  const entries = [];

  // Static top-level routes
  for (const r of STATIC_ROUTES) {
    entries.push(
      buildUrlEntry({
        loc: `${BASE_URL}${r.path}`,
        lastmod: SITE_LAST_UPDATED,
        changefreq: r.changefreq,
        priority: r.priority,
        images: r.images,
      })
    );
  }

  // Service pages — each gets the hero image surfaced
  for (const slug of SERVICE_SLUGS) {
    entries.push(
      buildUrlEntry({
        loc: `${BASE_URL}/services/${slug}`,
        lastmod: SITE_LAST_UPDATED,
        changefreq: 'monthly',
        priority: '0.9',
        images: [HERO_IMAGE],
      })
    );
  }

  // Resource hub + template subpages
  for (const r of RESOURCE_ROUTES) {
    entries.push(
      buildUrlEntry({
        loc: `${BASE_URL}${r.path}`,
        lastmod: SITE_LAST_UPDATED,
        changefreq: 'monthly',
        priority: r.priority,
      })
    );
  }

  // Case study detail pages — each gets its own canonical image
  entries.push(
    buildUrlEntry({
      loc: `${BASE_URL}/case-studies/chorlton-baths-balcony-lift`,
      lastmod: SITE_LAST_UPDATED,
      changefreq: 'yearly',
      priority: '0.7',
      images: [`${BASE_URL}/images/chorlton-baths-balcony-lift.jpg`],
    })
  );

  // Locations hub + city pages
  entries.push(
    buildUrlEntry({
      loc: `${BASE_URL}/locations`,
      lastmod: SITE_LAST_UPDATED,
      changefreq: 'monthly',
      priority: '0.85',
    })
  );
  for (const slug of LOCATION_SLUGS) {
    entries.push(
      buildUrlEntry({
        loc: `${BASE_URL}/locations/${slug}`,
        lastmod: SITE_LAST_UPDATED,
        changefreq: 'monthly',
        priority: '0.8',
      })
    );
  }

  // Blog index + posts
  entries.push(
    buildUrlEntry({
      loc: `${BASE_URL}/blog`,
      lastmod: SITE_LAST_UPDATED,
      changefreq: 'weekly',
      priority: '0.9',
    })
  );
  for (const post of BLOG_POSTS) {
    entries.push(
      buildUrlEntry({
        loc: `${BASE_URL}/blog/${post.slug}`,
        lastmod: post.date,
        changefreq: 'monthly',
        priority: '0.8',
      })
    );
  }

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset',
    '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    entries.join('\n'),
    '</urlset>',
    '',
  ].join('\n');
}

export async function GET() {
  const body = buildSitemapXml();
  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      // Modest CDN cache — sitemap changes are infrequent. Tune at the
      // edge if you switch hosts.
      'Cache-Control': 'public, max-age=0, s-maxage=3600, must-revalidate',
    },
  });
}
