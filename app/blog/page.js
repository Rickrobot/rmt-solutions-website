import Link from 'next/link';

export const metadata = {
  title: 'Lift Planning Blog | Expert Advice & Guides | RMT Solutions',
  description: 'Expert lift planning advice, LOLER compliance guides, and construction safety insights from a CPCS Appointed Person with 35 years experience.',
  keywords: 'lift planning blog, LOLER guides, crane safety, appointed person advice, construction compliance, BS 7121',
  openGraph: {
    title: 'Lift Planning Blog | Expert Advice & Guides',
    description: 'Expert lift planning advice and LOLER compliance guides from RMT Solutions.',
    url: 'https://www.rmtsafetysolutions.com/blog',
  },
};

// Blog posts data - we'll expand this
const blogPosts = [
  {
    slug: 'what-is-loler-complete-guide',
    title: 'What is LOLER? A Complete Guide for UK Contractors',
    excerpt: 'Everything you need to know about LOLER regulations, compliance requirements, and why proper lift planning is essential for construction safety.',
    category: 'Compliance',
    readTime: '8 min read',
    date: 'January 28, 2026',
    image: '/images/warehouse-steel-erection.webp',
  },
  {
    slug: 'when-do-you-need-lift-plan',
    title: 'When Do You Need a Lift Plan? LOLER Requirements Explained',
    excerpt: 'Learn when a lift plan is legally required, what triggers LOLER compliance, and how to ensure your lifting operations are properly planned.',
    category: 'Planning',
    readTime: '6 min read',
    date: 'January 28, 2026',
    image: '/images/precast-concrete-lift.webp',
  },
  {
    slug: 'mobile-crane-vs-tower-crane',
    title: 'Mobile Crane vs Tower Crane: Which Should You Choose?',
    excerpt: 'Understand the differences between mobile and tower cranes, when to use each type, and how to make the right choice for your project.',
    category: 'Equipment',
    readTime: '7 min read',
    date: 'January 28, 2026',
    image: '/images/residential-tower-crane.webp',
  },
];

export default function BlogPage() {
  return (
    <>
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
            {blogPosts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <article className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl overflow-hidden border border-slate-700/50 card-hover h-full flex flex-col">
                  {/* Featured Image */}
                  <div className="h-56 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
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

