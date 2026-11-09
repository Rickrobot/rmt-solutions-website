import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Case Studies | Lift Planning Projects',
  description: 'Real lift planning jobs from RMT Solutions: Caddick housing and industrial schemes, HS2 lorry loader plans, excavator pipe lifts and a crane balcony lift.',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Lift Planning Projects',
    description: 'Lift planning case studies from RMT Solutions across the UK.',
    url: 'https://www.rmtsafetysolutions.com/case-studies',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    images: ['/images/og-lift-planning.jpg'],
  },
}

// CollectionPage / ItemList JSON-LD — exposes the case studies as a
// structured collection. Mirrors the pattern on /locations and /services.
// Every entry is a real RMT job with its own write-up, and the list
// matches the featured cards rendered below. Only add a case study here
// once its page exists; never list a job without one (Nov 2026: six
// stand-in grid entries with no real job behind them were removed).
const SITE = 'https://www.rmtsafetysolutions.com'

const CASE_STUDIES = [
  { name: 'Rivington Chase, Horwich: Lifting Operations Support', category: 'Appointed Person and lift plan review', path: '/case-studies/rivington-chase-horwich-loco-works' },
  { name: 'Caddick Tawd Valley Junction 4, Skelmersdale', category: 'Steel erection', path: '/case-studies/caddick-tawd-valley-junction-4' },
  { name: 'HS2 Lorry Loader Lift Plans', category: 'Lorry loader', path: '/case-studies/hs2-lorry-loader-lift-plans' },
  { name: 'Rising Main Excavator Lift Plan, Wastewater Works', category: 'Excavator', path: '/case-studies/rising-main-excavator-lift-plan' },
  { name: 'Chorlton Baths Balcony Lift, Manchester', category: 'Mobile crane', path: '/case-studies/chorlton-baths-balcony-lift' },
]

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Lift Planning Case Studies',
  description:
    'Real lifting jobs delivered by RMT Solutions: Appointed Person cover and lift plan reviews on Caddick schemes, HS2 lorry loader lift plans, excavator pipe lifts and a mobile crane balcony lift.',
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
      url: `${SITE}${c.path}`,
      item: {
        '@type': 'CreativeWork',
        name: c.name,
        url: `${SITE}${c.path}`,
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

      {/* Featured case studies — detailed write-ups we link out to */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-6 block">
            Featured Projects
          </span>

          {/* Featured: Rivington Chase, Horwich (active site) */}
          <Link
            href="/case-studies/rivington-chase-horwich-loco-works"
            className="group block rounded-3xl overflow-hidden border border-slate-700/50 bg-gradient-to-b from-slate-800/50 to-slate-900/50 card-hover mb-8"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto md:min-h-[320px] bg-gradient-to-br from-slate-700 to-slate-800">
                <Image
                  src="/images/rivington-chase-horwich-hero.jpg"
                  alt="Aerial drone view of Caddick Construction's Rivington Chase affordable housing development on the former Horwich Loco Works, Horwich"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                    Appointed Person &amp; Lift Plan Reviews
                  </span>
                  <span className="text-gray-500 text-sm">Horwich, Bolton</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition">
                  Rivington Chase, Horwich — Lifting Operations Support
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Appointed Person duties, independent crane and excavator lift plan reviews, and
                  site-specific lift plans for Caddick Construction&apos;s 116 affordable homes on the
                  former Horwich Loco Works — part of a £262m regeneration. Illustrated with our own
                  aerial footage.
                </p>
                <span className="inline-flex items-center text-amber-400 font-semibold">
                  Read the case study
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Featured: Caddick Tawd Valley Junction 4 (active site) */}
          <Link
            href="/case-studies/caddick-tawd-valley-junction-4"
            className="group block rounded-3xl overflow-hidden border border-slate-700/50 bg-gradient-to-b from-slate-800/50 to-slate-900/50 card-hover mb-8"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto md:min-h-[320px] bg-gradient-to-br from-slate-700 to-slate-800">
                <Image
                  src="/images/caddick-tawd-valley-junction-4-hero.jpg"
                  alt="Aerial drone view of Caddick Construction's Tawd Valley Junction 4 industrial scheme at White Moss Business Park, Skelmersdale"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                    Steel Erection &amp; Cladding
                  </span>
                  <span className="text-gray-500 text-sm">White Moss, Skelmersdale</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition">
                  Caddick Tawd Valley Junction 4 — Lift Plan Reviews
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Independent lift plan reviews for every lifting activity on Caddick
                  Construction&apos;s £14m, 45-unit, 100,000 sq ft industrial scheme for Tawd Valley
                  Developments — off Junction 4 of the M58. Illustrated with our own drone aerial
                  imagery from site.
                </p>
                <span className="inline-flex items-center text-amber-400 font-semibold">
                  Read the case study
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </Link>

          {/* Featured: anonymised case studies (Nov 2026) */}
          {[
            {
              href: '/case-studies/hs2-lorry-loader-lift-plans',
              img: '/images/case-studies/hs2-lorry-loader-lift-plan.webp',
              alt: 'RMT example lorry loader plan drawing with stabiliser spreads, slew paths and the exclusion zone',
              tag: 'Lorry Loader',
              place: 'HS2 main works sites',
              title: 'HS2 Lorry Loader Lift Plans, Rewritten and Accepted',
              text: 'Lift plans for a tyre-fitting specialist’s truck- and van-mounted cranes, rewritten to BS 7121-4, ALLMI and the tier 1 joint venture’s own standards. Accepted and in use on HS2 sites.',
            },
            {
              href: '/case-studies/rising-main-excavator-lift-plan',
              img: '/images/case-studies/pipeline-excavator-lift-plan.webp',
              alt: 'RMT example drawing of a midi excavator lifting from the quick-hitch lifting eye with the bucket off',
              tag: 'Excavator',
              place: 'Wastewater treatment works, Lancashire',
              title: 'Rising Main Excavator Lifts, Three Machines, One Plan',
              text: 'A lift plan and Appointed Person cover for laying a 400 mm PE rising main: three possible midi excavators, nine lift types and welded pipe strings, revised twice in six days. Every lift completed safely.',
            },
          ].map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="group block rounded-3xl overflow-hidden border border-slate-700/50 bg-gradient-to-b from-slate-800/50 to-slate-900/50 card-hover mb-8"
            >
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto md:min-h-[320px] bg-white">
                  <Image src={c.img} alt={c.alt} fill className="object-cover" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">{c.tag}</span>
                    <span className="text-gray-500 text-sm">{c.place}</span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition">{c.title}</h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">{c.text}</p>
                  <span className="inline-flex items-center text-amber-400 font-semibold">
                    Read the case study
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </Link>
          ))}

          {/* Featured: Chorlton Baths */}
          <Link
            href="/case-studies/chorlton-baths-balcony-lift"
            className="group block rounded-3xl overflow-hidden border border-slate-700/50 bg-gradient-to-b from-slate-800/50 to-slate-900/50 card-hover"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto md:min-h-[320px] bg-gradient-to-br from-slate-700 to-slate-800">
                <Image
                  src="/images/chorlton-baths-balcony-lift.jpg"
                  alt="Mobile crane installing steel balcony units at Chorlton Baths, Manchester"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                    Mobile Crane
                  </span>
                  <span className="text-gray-500 text-sm">Chorlton Baths, Manchester</span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4 group-hover:text-amber-400 transition">
                  Balcony Lift Verification
                </h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  An independent site visit to confirm the arrangements and safety of a mobile crane
                  lifting operation installing steel balcony units on a Caddick development — on a
                  constrained urban frontage with a live highway alongside.
                </p>
                <span className="inline-flex items-center text-amber-400 font-semibold">
                  Read the case study
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          </Link>
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
