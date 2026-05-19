import Link from 'next/link'
import CaseStudiesGrid from '@/components/CaseStudiesGrid'

export const metadata = {
  title: 'Case Studies | Lift Planning Projects',
  description: 'Lift planning case studies from RMT Solutions. Tower crane contracts, steel erection projects, mobile crane lifts, and excavator operations across the UK.',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Lift Planning Projects',
    description: 'Lift planning case studies from RMT Solutions across the UK.',
    url: 'https://www.rmtsafetysolutions.com/case-studies',
    images: ['/images/og-lift-planning.jpg'],
  },
}

// CollectionPage / ItemList JSON-LD — exposes the case studies as a
// structured collection. Mirrors the pattern on /locations and /services.
// The list mirrors the in-page data in components/CaseStudiesGrid.js;
// when adding a new case study, update both files so the schema stays
// in sync with what is actually rendered.
const SITE = 'https://www.rmtsafetysolutions.com'

const CASE_STUDIES = [
  { name: 'Manchester Residential Development', category: 'Tower Crane' },
  { name: 'Industrial Warehouse - Midlands', category: 'Steel Erection' },
  { name: 'Precast Concrete Installation', category: 'Mobile Crane' },
  { name: 'Utilities Infrastructure', category: 'Excavator' },
  { name: 'Commercial Office Development', category: 'Tower Crane' },
  { name: 'Retail Park Extension', category: 'Steel Erection' },
]

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Lift Planning Case Studies',
  description:
    'Examples of LOLER-compliant lift planning projects delivered by RMT Solutions across the UK — tower crane contracts, steel erection, mobile crane lifts and excavator operations.',
  url: `${SITE}/case-studies`,
  isPartOf: {
    '@type': 'WebSite',
    name: 'RMT Solutions Ltd',
    url: SITE,
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: CASE_STUDIES.length,
    itemListElement: CASE_STUDIES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: c.name,
        about: `${c.category} lift planning project`,
        provider: {
          '@type': 'ProfessionalService',
          name: 'RMT Solutions Ltd',
          url: SITE,
        },
      },
    })),
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SITE}/case-studies` },
  ],
}

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-400 transition">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-300">Case Studies</span>
            </nav>
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
          <CaseStudiesGrid />
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
