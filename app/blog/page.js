import Link from 'next/link';

export const metadata = {
  title: 'Lift Planning Blog | Expert Guides & LOLER Compliance | RMT Solutions',
  description: 'Expert articles on lift planning, LOLER compliance, crane operations, and construction safety from a CPCS Appointed Person with 35 years of experience.',
  openGraph: {
    title: 'Lift Planning Blog | RMT Solutions',
    description: 'Expert articles on lift planning, LOLER compliance, crane operations, and construction safety.',
    url: 'https://www.rmtsafetysolutions.com/blog',
  },
};

const blogPosts = [
  {
    slug: 'telehandler-lift-plans-complete-guide',
    title: 'Telehandler Lift Plans: A Complete Guide for UK Contractors',
    description: 'Complete guide to telehandler lift plans under LOLER 1998. Covers fixed-frame and 360 slew machines, load charts, stabiliser requirements, and LOLER compliance.',
    category: 'Planning',
    readTime: '9 min read',
    date: 'February 6, 2026',
    image: '/images/precast-concrete-lift.webp',
  },
  {
    slug: 'lorry-loader-lift-plans-guide',
    title: 'Lorry Loader Lift Plans: LOLER Compliance Guide for UK Contractors',
    description: 'Complete guide to lorry loader (HIAB) lift plans under LOLER 1998. Covers vehicle positioning, stabiliser requirements, load charts, and compliance.',
    category: 'Planning',
    readTime: '9 min read',
    date: 'February 6, 2026',
    image: '/images/precast-concrete-lift.webp',
  },
  {
    slug: 'excavator-lift-plans-complete-guide',
    title: 'Excavator Lift Plans: A Complete Guide for UK Contractors',
    description: 'Complete guide to excavator lift plans under LOLER 1998. Learn when you need a lift plan for excavator lifting operations, requirements, and compliance.',
    category: 'Planning',
    readTime: '8 min read',
    date: 'January 31, 2026',
    image: '/images/precast-concrete-lift.webp',
  },
  {
    slug: 'cpcs-appointed-person-guide',
    title: 'CPCS Appointed Person: What They Do and Why You Need One',
    description: 'Understanding the CPCS Appointed Person role in UK construction. Learn what an A61 Appointed Person does, when you need one, and LOLER compliance requirements.',
    category: 'Compliance',
    readTime: '9 min read',
    date: 'January 31, 2026',
    image: '/images/mobile-crane-steel-erection.webp',
  },
  {
    slug: 'common-lift-planning-mistakes',
    title: 'Common Lift Planning Mistakes (And How to Avoid Them)',
    description: 'Learn the most common lift planning mistakes UK contractors make and how to avoid them. Expert advice on LOLER compliance and professional lift planning.',
    category: 'Planning',
    readTime: '10 min read',
    date: 'January 31, 2026',
    image: '/images/warehouse-steel-erection.webp',
  },
  {
    slug: 'mobile-crane-vs-tower-crane',
    title: 'Mobile Crane vs Tower Crane: Which Should You Choose?',
    description: 'Understand the differences between mobile and tower cranes, when to use each type, and how to make the right choice for your project.',
    category: 'Equipment',
    readTime: '7 min read',
    date: 'January 28, 2026',
    image: '/images/residential-tower-crane.webp',
  },
  {
    slug: 'when-do-you-need-lift-plan',
    title: 'When Do You Need a Lift Plan? LOLER Requirements Explained',
    description: 'Learn when a lift plan is legally required, what triggers LOLER compliance, and how to ensure your lifting operations are properly planned.',
    category: 'Planning',
    readTime: '6 min read',
    date: 'January 28, 2026',
    image: '/images/precast-concrete-lift.webp',
  },
  {
    slug: 'what-is-loler-complete-guide',
    title: 'What is LOLER? A Complete Guide for UK Contractors',
    description: 'Everything you need to know about LOLER regulations, compliance requirements, and why proper lift planning is essential for construction safety.',
    category: 'Compliance',
    readTime: '8 min read',
    date: 'January 28, 2026',
    image: '/images/warehouse-steel-erection.webp',
  },
];

// Blog listing schema
const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'RMT Solutions Lift Planning Blog',
  description: 'Expert articles on lift planning, LOLER compliance, crane operations, and construction safety.',
  url: 'https://www.rmtsafetysolutions.com/blog',
  publisher: {
    '@type': 'Organization',
    name: 'RMT Solutions Ltd',
    url: 'https://www.rmtsafetysolutions.com',
  },
  blogPost: blogPosts.map((post) => ({
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `https://www.rmtsafetysolutions.com/blog/${post.slug}`,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: 'Ricky Marsh',
    },
  })),
};

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern"></div>
          <div className="absolute inset-0 grid-bg"></div>
        </div>
        <div className="hero-overlay absolute inset-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400 transition">
              Home
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gray-500">Blog</span>
          </nav>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Lift Planning Blog
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl">
            Expert guides on LOLER compliance, lift planning, crane operations, and construction safety from a CPCS Appointed Person with 35 years of experience.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-slate-900/50 border border-slate-800/50 rounded-2xl overflow-hidden hover:border-amber-500/30 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500/20 backdrop-blur-sm text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="font-display text-lg font-bold text-white mb-3 group-hover:text-amber-400 transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 sm:p-12">
            <h2 className="font-display text-3xl font-bold text-white mb-4">
              Need Professional Lift Planning?
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              From excavator lift plans to tower crane compliance contracts, RMT Solutions provides LOLER-compliant lift planning from a CPCS Appointed Person with 35 years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-8 py-4 rounded-xl font-semibold transition shadow-lg shadow-amber-500/20"
              >
                Get a Quote
              </Link>
              <Link
                href="/#services"
                className="border border-slate-600 hover:border-amber-500/50 text-white px-8 py-4 rounded-xl font-semibold transition"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
