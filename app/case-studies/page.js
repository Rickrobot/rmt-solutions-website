import Image from 'next/image'
import Link from 'next/link'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'Case Studies | Lift Planning Projects',
  description: 'Lift planning case studies from RMT Solutions. Tower crane contracts, steel erection projects, mobile crane lifts, and excavator operations across the UK.',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'Manchester Residential Development',
      category: 'Tower Crane',
      duration: '18 months',
      description: 'Appointed Person contract for major residential development with 2 tower cranes. 8-weekly audits, lift plan review, and on-call support throughout.',
      highlights: ['2 tower cranes', '18-month contract', '8-weekly audits', '500+ lift plans reviewed'],
      image: null,
    },
    {
      title: 'Industrial Warehouse - Midlands',
      category: 'Steel Erection',
      duration: '8 weeks',
      description: 'Complete lift planning for 15,000m² warehouse steel frame erection including tandem lifts for heavy portal rafters.',
      highlights: ['15,000m² frame', 'Tandem lifts', '2 mobile cranes', 'Fabrication drawing review'],
      image: '/images/mobile-crane-steel-erection.webp',
    },
    {
      title: 'Precast Concrete Installation',
      category: 'Mobile Crane',
      duration: '12 weeks',
      description: 'Lift planning for precast concrete element installation on commercial building. Multiple crane positions and complex logistics.',
      highlights: ['Precast elements to 12t', 'Multiple crane positions', 'Tight site access', 'Traffic management'],
      image: '/images/mobile-crane-steel-erection.webp',
    },
    {
      title: 'Utilities Infrastructure',
      category: 'Excavator',
      duration: '6 months',
      description: 'Series of excavator lift plans for 3km pipeline installation including trench box handling and pipe installation.',
      highlights: ['3km pipeline', '50+ lift plans', 'Remote delivery', '48hr turnaround'],
      image: null,
    },
    {
      title: 'Commercial Office Development',
      category: 'Tower Crane',
      duration: '24 months',
      description: 'Ongoing AP contract for city centre office development with complex logistics and multiple subcontractors.',
      highlights: ['City centre site', 'Complex logistics', 'Multiple subcontractors', 'Lift plan checking'],
      image: null,
    },
    {
      title: 'Retail Park Extension',
      category: 'Steel Erection',
      duration: '6 weeks',
      description: 'Lift planning for retail unit steel frame extension with live retail operations adjacent.',
      highlights: ['Live retail adjacent', 'Restricted hours', '2,500m² extension', 'Exclusion zone management'],
      image: '/images/mobile-crane-steel-erection.webp',
    },
  ]

  const categories = ['All', 'Tower Crane', 'Steel Erection', 'Mobile Crane', 'Excavator']

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              Lift Planning <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Examples of lift planning projects we've delivered for contractors across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-4 mb-12 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full font-medium transition ${
                  cat === 'All'
                    ? 'bg-amber-500 text-slate-900'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <article
                key={study.title}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl overflow-hidden border border-slate-700/50 card-hover"
              >
                <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative">
                  {study.image ? (
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl font-display font-bold text-slate-600/50">
                        {study.category.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <span className="text-gray-500 text-sm">{study.duration}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-6">{study.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="bg-slate-700/50 text-gray-300 text-xs px-3 py-1 rounded-full"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Have a Similar Project?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Get in touch to discuss your lift planning requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}
