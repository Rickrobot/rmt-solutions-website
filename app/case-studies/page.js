import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MapPin, ShieldCheck, ClipboardCheck, Building2 } from 'lucide-react'

const SITE = 'https://www.rmtsafetysolutions.com'
const URL = `${SITE}/case-studies/chorlton-baths-balcony-lift`
const HERO_IMAGE = '/images/chorlton-baths-balcony-lift.jpg'

export const metadata = {
  title: 'Balcony Lift Verification, Chorlton Baths Manchester | Case Study',
  description:
    'Case study: independent site verification of a mobile crane lifting operation installing steel balcony units at the former Chorlton Baths, Manchester Road, Chorlton (M21), on Caddick Construction\u2019s £14m extra care scheme. Lift plan and exclusion zone review against BS 7121 and LOLER 1998.',
  keywords: [
    'balcony lift case study',
    'mobile crane balcony installation',
    'Chorlton Baths Manchester',
    'lift plan verification',
    'steel balcony lifting operation',
    'BS 7121 case study',
    'lifting operations site visit Manchester',
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: 'Balcony Lift Verification, Chorlton Baths Manchester | Case Study',
    description:
      'Independent site verification of a mobile crane lifting operation installing steel balcony units at Chorlton Baths, Manchester, on a Caddick development.',
    url: URL,
    type: 'article',
    images: [
      {
        url: `${SITE}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
        alt: 'Mobile crane installing steel balcony units at Chorlton Baths, Manchester',
      },
    ],
  },
}

// Article / CreativeWork JSON-LD — gives this case study a hard
// authorship + publisher association and an explicit image, location
// and subject. Reinforces the E-E-A-T "Experience" signal (real
// project work) and makes the page eligible for richer SERP treatment.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Balcony Lift Verification at Chorlton Baths, Manchester',
  description:
    'Independent site verification of a mobile crane lifting operation installing steel balcony units at Chorlton Baths, Manchester, on a Caddick development. The visit confirmed the arrangements and safety of the lifting operations against the approved lift plan, BS 7121 and LOLER 1998.',
  image: {
    '@type': 'ImageObject',
    url: `${SITE}${HERO_IMAGE}`,
    width: 1200,
    height: 630,
    caption: 'Mobile crane installing steel balcony units at Chorlton Baths, Manchester',
  },
  about: 'Mobile crane lifting operation — steel balcony installation',
  datePublished: '2026-05-21',
  dateModified: '2026-05-21',
  author: {
    '@type': 'Organization',
    name: 'RMT Solutions Ltd',
    url: SITE,
  },
  publisher: {
    '@type': 'Organization',
    name: 'RMT Solutions Ltd',
    url: SITE,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE}/images/rmt-logo-publisher.png`,
    },
  },
  contentLocation: {
    '@type': 'Place',
    name: 'Former Chorlton Baths, Manchester Road, Chorlton',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Manchester Road, Chorlton',
      addressLocality: 'Manchester',
      addressRegion: 'Greater Manchester',
      postalCode: 'M21 9PG',
      addressCountry: 'GB',
    },
  },
  isPartOf: {
    '@type': 'CollectionPage',
    name: 'Lift Planning Case Studies',
    url: `${SITE}/case-studies`,
  },
  mainEntityOfPage: URL,
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SITE}/case-studies` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Chorlton Baths Balcony Lift',
      item: URL,
    },
  ],
}

export default function ChorltonBathsBalconyLiftPage() {
  const factSheet = [
    { label: 'Project', value: 'Steel balcony installation' },
    { label: 'Location', value: 'Former Chorlton Baths, Manchester M21' },
    { label: 'Main contractor', value: 'Caddick Construction' },
    { label: 'Scheme', value: '£14m extra care, 50 apartments' },
    { label: 'Lifting equipment', value: 'Mobile crane' },
    { label: 'RMT role', value: 'Site verification visit' },
  ]

  const checks = [
    'Crane positioning and outrigger spread against the approved lift plan',
    'Ground conditions and bearing pressure beneath the outrigger pads',
    'Rigging arrangement and lift points for the balcony units',
    'Exclusion zone set-up and segregation from the live highway, cycle lane and footway',
    'Slinger / signaller positions and lines of communication with the operator',
    'Permit, RAMS and Appointed Person arrangements on site',
  ]

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <Image
            src={HERO_IMAGE}
            alt="Mobile crane installing steel balcony units at Chorlton Baths, Manchester"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-400 transition">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/case-studies" className="hover:text-amber-400 transition">Case Studies</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-300">Chorlton Baths Balcony Lift</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                Mobile Crane
              </span>
              <span className="inline-flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-1.5 text-amber-400" />
                Chorlton Baths, Manchester
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Balcony Lift <span className="gradient-text">Verification</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              An independent site visit to confirm the arrangements and safety of a mobile crane
              lifting operation installing steel balcony units on a Caddick development in Manchester.
            </p>
          </div>
        </div>
      </section>

      {/* Fact sheet */}
      <section className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {factSheet.map((item) => (
              <div key={item.label}>
                <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-1">
                  {item.label}
                </div>
                <div className="text-white font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo + intro */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-slate-700/50">
              <Image
                src={HERO_IMAGE}
                alt="Mobile crane lifting a steel balcony unit into position at Chorlton Baths, Manchester, with the exclusion zone segregated from the live highway"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                The Brief
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Confirming a safe system of work in a constrained urban setting
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Caddick Construction were building a £14m extra care residential scheme on the site
                of the former Chorlton Baths, off Manchester Road in Chorlton — two five-storey
                blocks of around 50 apartments. The scheme follows HAPPI design principles, under
                which every apartment is given its own outdoor space, so prefabricated steel balcony
                units were being installed across both blocks. The units were lifted into position by
                mobile crane and fixed back to the structure by the steel fabricator&apos;s
                installation team.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We were asked to visit while the lifting operation was under way to confirm that the
                arrangements on the ground matched the approved lift plan, and that the operation was
                being carried out safely. The site sits on a constrained urban frontage, with a live
                highway, a cycle lane and pedestrian footways immediately adjacent to the working
                area — so the segregation of the public from the lifting operation was central to the
                visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we checked */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              On Site
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              What we verified on the day
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A verification visit checks that what was written in the lift plan is actually what is
              happening on the ground. We walked the operation against the plan and confirmed the
              following:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {checks.map((check) => (
              <div
                key={check}
                className="flex items-start bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50"
              >
                <CheckCircle className="w-6 h-6 text-amber-400 mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">{check}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Constraints / approach */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Constrained frontage</h3>
              <p className="text-gray-400 leading-relaxed">
                The crane was working on a tight urban frontage with limited room to set up. Crane
                position, outrigger spread and the slewing arc all had to be managed so the load never
                travelled over the public.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Public segregation</h3>
              <p className="text-gray-400 leading-relaxed">
                With a live highway, cycle lane and footway alongside, the exclusion zone and traffic
                management arrangements were checked to confirm pedestrians, cyclists and traffic were
                kept clear of the lift zone throughout.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                <ClipboardCheck className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Plan vs. reality</h3>
              <p className="text-gray-400 leading-relaxed">
                The approved lift plan was checked against the actual set-up — equipment, rigging,
                exclusion zone and team — to confirm the operation was being run as planned and in line
                with BS 7121 and LOLER 1998.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Outcome
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Confidence that the lift was being run as planned
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The visit gave the contractor and the fabricator independent confirmation that the
            lifting operation matched the approved lift plan and was being carried out safely, with
            the public properly segregated from the works. An independent set of eyes on a live
            lifting operation is one of the most effective ways of catching the gap between a plan on
            paper and what happens on the ground.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This is the kind of verification we provide for{' '}
            <Link href="/services/steel-erection" className="text-amber-400 hover:text-amber-300 underline">
              steel erection
            </Link>{' '}
            and{' '}
            <Link href="/services/mobile-crane-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
              mobile crane
            </Link>{' '}
            operations across the North West — alongside{' '}
            <Link href="/services/lift-plan-review" className="text-amber-400 hover:text-amber-300 underline">
              lift plan review and checking
            </Link>{' '}
            before work starts on site.
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {['Mobile crane', 'Steel balconies', 'Constrained urban site', 'Public segregation', 'Lift plan verification', 'BS 7121', 'LOLER 1998'].map((tag) => (
              <span
                key={tag}
                className="bg-slate-800/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-500 leading-relaxed">
            Photographed from the public highway. Published with the agreement of the parties
            involved; the steel fabricator is not named at their request.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Need a lifting operation verified?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            We carry out site verification visits and lift plan reviews for contractors across
            Manchester and the North West.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Discuss Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
