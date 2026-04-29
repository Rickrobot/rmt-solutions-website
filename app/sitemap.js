// Sitemap for https://www.rmtsafetysolutions.com
//
// Conventions:
//   - SITE_LAST_UPDATED: bump this when meaningful site-wide content changes.
//     Used for static pages whose content rarely changes. Avoid using
//     `new Date()` here — that resets the lastmod on every build, which
//     trains crawlers to ignore the freshness signal.
//   - Blog posts use their actual publish dates from app/blog/[slug]/page.js.
//     If a post is materially edited, update its date here too.
//   - Routes listed here MUST match real routes in the app. Any drift between
//     this file and actual app routes will cause crawl errors and missed
//     indexing. Cross-check against:
//       - Top-level routes: app/<segment>/page.js
//       - Blog posts: keys of `blogPosts` in app/blog/[slug]/page.js
//       - Resources subpages: app/resources/<segment>/page.js

const SITE_LAST_UPDATED = new Date('2026-04-29');

export default function sitemap() {
  const baseUrl = 'https://www.rmtsafetysolutions.com';

  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const serviceRoutes = [
    'excavator-lift-plans',
    'telehandler-lift-plans',
    'lorry-loader-lift-plans',
    'mobile-crane-lift-plans',
    'lift-plan-checking',
    'lift-plan-review',
    'lifting-operations-audit',
    'lift-plans',
    'tower-crane',
    'steel-erection',
    'aerial-site-surveys',
  ].map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: SITE_LAST_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const resourceRoutes = [
    {
      url: `${baseUrl}/resources`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/excavator-lift-plan-templates`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resources/telehandler-lift-plan-templates`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Blog posts — slug + publish date must match app/blog/[slug]/page.js
  const blogPosts = [
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
  ];

  const blogRoutes = [
    {
      url: `${baseUrl}/blog`,
      lastModified: SITE_LAST_UPDATED,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.8,
    })),
  ];

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...resourceRoutes,
    ...blogRoutes,
  ];
}
