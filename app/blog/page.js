import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Lift Planning Blog | Expert Advice & Guides',
  description: 'Expert lift planning advice, LOLER compliance guides, and construction safety insights from a CPCS Appointed Person with 35 years experience.',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/blog',
  },
  openGraph: {
    title: 'Lift Planning Blog | Expert Advice & Guides',
    description: 'Expert lift planning advice and LOLER compliance guides from RMT Solutions.',
    url: 'https://www.rmtsafetysolutions.com/blog',
  },
};

// Blog posts data.
//
// Each post carries an imageAlt field so the index card images get an
// alt that describes the image rather than restating the article title.
// (Round-3 SEO fix — was previously alt={post.title}, which Google's
// image-search ranking treats as low-signal because the same image was
// being claimed to be about four different topics across the grid.)
//
// dateModified is intentionally separate from date so freshness signals
// can be updated independently when posts are revised. Both default to
// the original publication date.
const blogPosts = [
  {
    slug: 'overhead-crane-lift-plan-guide',
    title: 'Do You Need a Lift Plan for an Overhead Crane? UK Guide (BS 7121-7)',
    excerpt: 'Do overhead, gantry and bridge cranes need a lift plan? A UK guide to LOLER and BS 7121-7 for factory and warehouse crane lifting — when a generic plan is enough and when you need a specific written plan.',
    category: 'Lift Planning',
    readTime: '13 min read',
    date: 'May 21, 2026',
    dateModified: 'May 21, 2026',
    image: '/images/services/overhead-gantry-crane-factory-uk.webp',
    imageAlt: 'Overhead travelling bridge crane lifting a steel load inside a UK factory — overhead crane lifting operation under LOLER and BS 7121-7',
  },
  {
    slug: 'what-is-bs-7121-complete-guide',
    title: 'What is BS 7121? The Complete UK Guide to Safe Use of Cranes',
    excerpt: 'What is BS 7121? Complete guide to the British Standard for safe use of cranes — every part explained, how it links to LOLER 1998, and what UK contractors need to comply.',
    category: 'Compliance',
    readTime: '16 min read',
    date: 'May 19, 2026',
    dateModified: 'May 19, 2026',
    image: '/images/mobile-crane-steel-erection.webp',
    imageAlt: 'Mobile crane lifting a structural steel section during erection — operation governed by BS 7121 code of practice for safe use of cranes',
  },
  {
    slug: 'lifting-operations-audit-what-to-expect',
    title: 'Lifting Operations Audit: What Gets Checked and How to Prepare',
    excerpt: 'What does a lifting operations audit actually cover on a UK construction site? A practical guide from an Appointed Person covering what auditors examine, the most common findings, and how to prepare your site.',
    category: 'Services',
    readTime: '14 min read',
    date: 'February 23, 2026',
    dateModified: 'February 23, 2026',
    image: '/images/services/lifting-operations-audit-inspection-uk.webp',
    imageAlt: 'Independent auditor observing a tower crane lifting operation from behind the exclusion zone on a UK construction site, carrying out a lifting operations audit',
  },
  {
    slug: 'lift-plan-checking-what-gets-checked-and-why-plans-get-rejected',
    title: 'Lift Plan Checking: What Gets Checked, Why Plans Get Rejected, and How to Get Yours Right First Time',
    excerpt: 'What actually gets checked during a lift plan review? Learn what causes lift plans to fail, common rejection reasons, and how to get your plans approved first time from an Appointed Person with 35 years of experience.',
    category: 'Services',
    readTime: '12 min read',
    date: 'February 22, 2026',
    dateModified: 'February 22, 2026',
    image: '/images/services/loler-compliance-regulations-standards.webp',
    imageAlt: 'LOLER 1998 and BS 7121 standards underpinning lift plan checks — what gets verified when a lift plan is reviewed',
  },
  {
    slug: 'what-is-a-lift-plan',
    title: 'What is a Lift Plan? The Complete Guide for UK Construction',
    excerpt: 'What is a lift plan and why do you need one? Complete guide to what a lift plan contains, when one is required under LOLER, who can write one, and common mistakes to avoid.',
    category: 'Compliance',
    readTime: '10 min read',
    date: 'February 11, 2026',
    dateModified: 'February 11, 2026',
    image: '/images/services/mobile-crane-lifting-precast-concrete.webp',
    imageAlt: 'Mobile crane lifting a precast concrete unit on a UK construction site — a typical lifting operation covered by a lift plan',
  },
  {
    slug: 'what-does-a-lift-plan-checking-service-involve',
    title: 'What Does a Lift Plan Checking Service Involve?',
    excerpt: 'What does a lift plan checking service involve and why do tier 1 contractors need one? Learn what gets checked, common rejection reasons, and how professional review improves site safety.',
    category: 'Services',
    readTime: '9 min read',
    date: 'February 11, 2026',
    dateModified: 'February 11, 2026',
    image: '/images/services/lift-plan-checking-clipboard-inspection.webp',
    imageAlt: 'Lifting engineer reviewing a lift plan against a checklist — the document scrutiny carried out during a lift plan checking service',
  },
  {
    slug: 'telehandler-lift-plans-complete-guide',
    title: 'Telehandler Lift Plans: A Complete Guide for UK Contractors',
    excerpt: 'Everything UK contractors need to know about telehandler lift plans. Covers fixed-frame and 360° slew machines, LOLER requirements, load charts, and common planning mistakes.',
    category: 'Planning',
    readTime: '9 min read',
    date: 'February 6, 2026',
    dateModified: 'February 6, 2026',
    image: '/images/services/telehandler-lift-plan-forks-uk.webp',
    imageAlt: 'JCB telehandler with boom raised on a UK construction site, set to lift a palletised load on its forks — work that requires a telehandler lift plan',
  },
  {
    slug: 'lorry-loader-lift-plans-guide',
    title: 'Lorry Loader Lift Plans: LOLER Compliance Guide for UK Contractors',
    excerpt: 'Everything UK contractors need to know about lorry loader (HIAB) lift plans. Covers vehicle positioning, stabiliser requirements, LOLER compliance, and common planning mistakes.',
    category: 'Planning',
    readTime: '9 min read',
    date: 'February 6, 2026',
    dateModified: 'February 6, 2026',
    image: '/images/services/lorry-loader-hiab-delivery-construction-site.webp',
    imageAlt: 'Lorry loader (HIAB) offloading a delivery on a UK construction site — a vehicle-mounted crane operation requiring a lorry loader lift plan',
  },
  {
    slug: 'excavator-lift-plans-complete-guide',
    title: 'Excavator Lift Plans: A Complete Guide for UK Contractors',
    excerpt: 'Complete guide to excavator lift plans under LOLER 1998. Learn when you need a lift plan for excavator lifting operations, requirements, and compliance.',
    category: 'Planning',
    readTime: '8 min read',
    date: 'January 31, 2026',
    dateModified: 'January 31, 2026',
    image: '/images/services/excavator-lifting-hook-chains-uk.webp',
    imageAlt: '360-degree excavator lifting a load on hook and chains on a UK site — a lifting operation that requires an excavator lift plan',
  },
  {
    slug: 'cpcs-appointed-person-guide',
    title: 'CPCS Appointed Person: What They Do and Why You Need One',
    excerpt: 'Understanding the CPCS Appointed Person role in UK construction. Learn what an A61 Appointed Person does, when you need one, and LOLER compliance requirements.',
    category: 'Compliance',
    readTime: '9 min read',
    date: 'January 31, 2026',
    dateModified: 'January 31, 2026',
    image: '/images/services/appointed-person-reviewing-lift-plan-uk.webp',
    imageAlt: 'CPCS Appointed Person in hi-vis and hard hat reviewing a lift plan on a tablet on a UK construction site, with a mobile crane working in the background',
  },
  {
    slug: 'common-lift-planning-mistakes',
    title: 'Common Lift Planning Mistakes (And How to Avoid Them)',
    excerpt: 'Learn the most common lift planning mistakes UK contractors make and how to avoid them. Expert advice on LOLER compliance, safety, and professional lift planning.',
    category: 'Planning',
    readTime: '10 min read',
    date: 'January 31, 2026',
    dateModified: 'January 31, 2026',
    image: '/images/services/lift-planning-site-desk-review-uk.webp',
    imageAlt: 'Lifting team reviewing and marking up a lift plan on site — catching planning mistakes before the lift goes ahead',
  },
  {
    slug: 'what-is-loler-complete-guide',
    title: 'What is LOLER? A Complete Guide for UK Contractors',
    excerpt: 'Everything you need to know about LOLER regulations, compliance requirements, and why proper lift planning is essential for construction safety.',
    category: 'Compliance',
    readTime: '8 min read',
    date: 'January 28, 2026',
    dateModified: 'January 28, 2026',
    image: '/images/services/loler-thorough-examination-lifting-equipment-uk.webp',
    imageAlt: 'Competent person carrying out a LOLER thorough examination of lifting equipment on a UK site, inspecting a hook and chain sling for defects',
  },
  {
    slug: 'when-do-you-need-lift-plan',
    title: 'When Do You Need a Lift Plan? LOLER Requirements Explained',
    excerpt: 'Learn when a lift plan is legally required, what triggers LOLER compliance, and how to ensure your lifting operations are properly planned.',
    category: 'Planning',
    readTime: '6 min read',
    date: 'January 28, 2026',
    dateModified: 'January 28, 2026',
    image: '/images/services/excavator-lifting-concrete-ring-construction.webp',
    imageAlt: 'Excavator lifting a concrete ring into an excavation — an everyday operation that still requires a LOLER lift plan',
  },
  {
    slug: 'mobile-crane-vs-tower-crane',
    title: 'Mobile Crane vs Tower Crane: Which Should You Choose?',
    excerpt: 'Understand the differences between mobile and tower cranes, when to use each type, and how to make the right choice for your project.',
    category: 'Equipment',
    readTime: '7 min read',
    date: 'January 28, 2026',
    dateModified: 'January 28, 2026',
    image: '/images/residential-tower-crane.webp',
    imageAlt: 'Tower crane operating above a UK residential development — comparison context for mobile vs tower crane selection',
  },
];

// Blog + BreadcrumbList JSON-LD.
// The Blog schema gives Google an explicit content graph for the blog
// section with each post enumerated as a blogPost entry. The
// BreadcrumbList schema (Home > Blog) unlocks breadcrumb display in
// mobile SERPs and matches the structural-data depth on /about, /contact
// and /locations/[slug].
const blogJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://www.rmtsafetysolutions.com/blog#blog',
  name: 'RMT Solutions — Lift Planning Blog',
  description:
    'Expert lift planning advice, LOLER compliance guides, and construction safety insights from a CPCS Appointed Person with 35 years experience.',
  url: 'https://www.rmtsafetysolutions.com/blog',
  inLanguage: 'en-GB',
  publisher: {
    '@type': 'Organization',
    name: 'RMT Solutions Ltd',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.rmtsafetysolutions.com/images/rmt-logo-publisher.png',
      width: 600,
      height: 60,
    },
  },
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://www.rmtsafetysolutions.com/blog/${post.slug}`,
    image: `https://www.rmtsafetysolutions.com${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.dateModified || post.date).toISOString(),
    author: { '@type': 'Person', name: 'Ricky Marsh' },
  })),
};

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.rmtsafetysolutions.com/blog' },
  ],
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern"></div>
          <div className="absolute inset-0 grid-bg"></div>
        </div>
        <div className="hero-overlay absolute inset-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Expert Insights
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              Lift Planning <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Expert advice, compliance guides, and industry insights from a CPCS Appointed Person with 35 years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <article className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl overflow-hidden border border-slate-700/50 card-hover h-full flex flex-col">
                  {/* Featured Image — Next.js Image with explicit dimensions
                      reserves layout space (CLS protection), serves a
                      responsive variant per viewport, and lets us mark the
                      first three cards as priority since they're likely
                      above the fold on most viewports. */}
                  <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      width={800}
                      height={450}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-sm">{post.readTime}</span>
                    </div>

                    {/* Title */}
                    <h2 className="font-display text-xl font-bold text-white mb-3 hover:text-amber-400 transition">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                      <span className="text-gray-500 text-sm">{post.date}</span>
                      <span className="text-amber-400 text-sm font-semibold flex items-center gap-2">
                        Read Article
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Coming Soon Message */}
          <div className="mt-16 text-center">
            <p className="text-gray-400">
              More articles coming soon. Check back regularly for new lift planning insights and compliance guides.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Need Professional Lift Planning?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Get expert LOLER compliant lift plans from a qualified CPCS Appointed Person.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
