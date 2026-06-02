import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  ShieldCheck,
  ClipboardCheck,
  Building2,
  Factory,
  Plane,
} from 'lucide-react'

const SITE = 'https://www.rmtsafetysolutions.com'
const URL = `${SITE}/case-studies/caddick-tawd-valley-junction-4`
const HERO_IMAGE = '/images/caddick-tawd-valley-junction-4-hero.jpg'
const AERIAL_IMAGE = '/images/caddick-tawd-valley-junction-4-aerial.jpg'

export const metadata = {
  title: 'Caddick Tawd Valley Junction 4 | Case Study',
  // ~155 chars — keeps the SERP snippet from being truncated by Google.
  description:
    'Independent lift plan reviews for all lifting activities on Caddick Construction\'s Tawd Valley Junction 4 industrial scheme at White Moss, Skelmersdale.',
  keywords: [
    'Caddick Construction Tawd Valley',
    'Junction 4 Skelmersdale lift plan review',
    'White Moss Business Park lift planning',
    'industrial cladding lift plan',
    'steel erection lift plan review North West',
    'BS 7121 lift plan review',
    'LOLER 1998 compliance',
    'drone aerial site survey construction',
    'West Lancashire construction lift planning',
    'Tawd Valley Developments',
  ],
  alternates: {
    canonical: URL,
  },
  openGraph: {
    title: 'Caddick Tawd Valley Junction 4 | Lift Plan Reviews, Skelmersdale',
    description:
      'RMT Solutions has provided lift plan reviews for all lifting activities on Caddick Construction\'s Tawd Valley Junction 4 industrial scheme — 45 units, 100,000 sq ft, off the M58 at Skelmersdale.',
    url: URL,
    type: 'article',
    images: [
      {
        url: `${SITE}${HERO_IMAGE}`,
        width: 1200,
        height: 630,
        alt: 'Aerial drone view of Caddick Construction\'s Tawd Valley Junction 4 industrial scheme at White Moss Business Park, Skelmersdale',
      },
    ],
  },
}

// Article JSON-LD — gives the case study a hard authorship + publisher
// association, an explicit image, location and subject. Reinforces the
// E-E-A-T "Experience" signal (real, named project work) and makes the
// page eligible for richer SERP treatment.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline:
    'Caddick Construction Tawd Valley Junction 4 — Lift Plan Reviews, Skelmersdale',
  description:
    'RMT Solutions has provided lift plan reviews for all lifting activities on Caddick Construction\'s Tawd Valley Developments Junction 4 industrial scheme at White Moss Business Park, Skelmersdale — a £14m, 45-unit, 100,000 sq ft scheme off Junction 4 of the M58. The page is illustrated with aerial drone imagery captured by RMT showing the scale of the construction site.',
  image: {
    '@type': 'ImageObject',
    url: `${SITE}${HERO_IMAGE}`,
    width: 1200,
    height: 630,
    caption:
      'Aerial drone view of Caddick Construction\'s Tawd Valley Junction 4 scheme, White Moss Business Park, Skelmersdale',
  },
  about:
    'Lift plan review for steel erection and industrial cladding works on a 45-unit business park',
  datePublished: '2026-05-28',
  dateModified: '2026-05-28',
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
    name: 'White Moss Business Park, Junction 4 of the M58, Skelmersdale',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'White Moss Road South, White Moss Business Park',
      addressLocality: 'Skelmersdale',
      addressRegion: 'West Lancashire',
      postalCode: 'WN8',
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
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Case Studies',
      item: `${SITE}/case-studies`,
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Caddick Tawd Valley Junction 4, Skelmersdale',
      item: URL,
    },
  ],
}

export default function CaddickTawdValleyJunction4Page() {
  const factSheet = [
    { label: 'Project', value: 'Tawd Valley Junction 4, White Moss' },
    { label: 'Location', value: 'Skelmersdale, West Lancashire (M58 J4)' },
    { label: 'Main contractor', value: 'Caddick Construction' },
    { label: 'Developer', value: 'Tawd Valley Developments Ltd' },
    { label: 'Scheme', value: '£14m · 45 units · 100,000 sq ft' },
    { label: 'RMT role', value: 'Lift plan reviews — all lifting activities' },
  ]

  const checks = [
    'Crane selection, configuration and percentage utilisation against the heaviest pick',
    'Ground bearing pressures, outrigger spread and mat / pad sizing on the working area',
    'Rigging arrangements, lift accessories and below-the-hook equipment certification',
    'Exclusion zones and segregation from following trades, M&E, and adjacent works',
    'Wind speed limits, weather criteria and stop-work triggers for cladding lifts',
    'Slinger / signaller and Appointed Person arrangements against BS 7121',
    'RAMS, permits and LOLER 1998 documentation against the approved lift plan',
    'Interfaces with MEWPs, mobile elevating work platforms and man-riding operations',
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
            alt="Aerial drone photograph of Caddick Construction's Tawd Valley Junction 4 industrial scheme at White Moss Business Park, Skelmersdale, showing the scale of the 45-unit, 100,000 sq ft development off the M58"
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
              <Link href="/" className="hover:text-amber-400 transition">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                href="/case-studies"
                className="hover:text-amber-400 transition"
              >
                Case Studies
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-300">
                Caddick Tawd Valley Junction 4
              </span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                Steel Erection &amp; Cladding
              </span>
              <span className="inline-flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-1.5 text-amber-400" />
                White Moss Business Park, Skelmersdale
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Caddick Tawd Valley Junction 4 —{' '}
              <span className="gradient-text">Lift Plan Reviews</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              RMT Solutions has provided lift plan reviews for{' '}
              <strong className="text-white">all lifting activities</strong> on
              Caddick Construction&apos;s Tawd Valley Junction 4 industrial
              scheme at White Moss Business Park, Skelmersdale — a £14m, 45-unit,
              100,000 sq ft development for Tawd Valley Developments off Junction
              4 of the M58.
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
                src={AERIAL_IMAGE}
                alt="Drone aerial site survey of the Caddick Construction Tawd Valley Junction 4 scheme, Skelmersdale — showing portal-frame industrial units with steel erection complete and cladding works underway"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                The Brief
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Independent lift plan reviews across the full Junction 4 scheme
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Caddick Construction is delivering the Tawd Valley Junction 4
                industrial scheme at White Moss Business Park, Skelmersdale, for
                Tawd Valley Developments Ltd — the wholly-owned development arm
                of West Lancashire Borough Council. The £14m scheme provides 45
                new business units totalling just over 100,000 sq ft (units from
                150 m² to 321 m²) and sits immediately off Junction 4 of the
                M58. It is the first contract awarded by Tawd Valley
                Developments under the wider £150–200m Skelmersdale town centre
                masterplan.
              </p>
              <p className="text-gray-300 leading-relaxed">
                RMT Solutions has been engaged to{' '}
                <Link
                  href="/services/lift-plan-review"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  review the lift plans
                </Link>{' '}
                for every lifting activity on site — from the heavy structural
                steel picks during frame erection through to the cladding lifts
                currently under way. The aerial drone imagery on this page was
                captured by RMT during the works as part of our{' '}
                <Link
                  href="/services/aerial-site-surveys"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  aerial site survey
                </Link>{' '}
                offering and is used to evidence crane positioning, exclusion
                zones and the scale of the construction footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase update — steel done, cladding under way */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Current Phase
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Steel erection complete — cladding works under way
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The structural{' '}
              <Link
                href="/services/steel-erection"
                className="text-amber-400 hover:text-amber-300 underline"
              >
                steel erection
              </Link>{' '}
              phase has been completed across all 45 portal-frame units, and
              the cladding works are now under way. This shifts the lifting
              profile from heavy single-pick structural members to lighter but
              more numerous, height-sensitive lifts — cladding cassettes,
              insulation packs, roof sheets, gutter sections and ancillary
              plant. Wind exposure off the M58 motorway corridor is a recurring
              constraint we review against each plan, alongside the interfaces
              with following trades behind partially clad elevations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                <Factory className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Portal-frame estate
              </h3>
              <p className="text-gray-400 leading-relaxed">
                45 industrial units in repeated portal-frame bays mean the lift
                plans are largely standardised, with elevation- and
                location-specific addenda for each plot rather than a new plan
                from scratch.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                Wind &amp; weather criteria
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Cladding cassettes are large, light and sail-like. Every plan
                is reviewed for explicit wind-speed stop-work triggers, panel
                weights, sail areas and weather hold criteria during the lift.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                <ClipboardCheck className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-3">
                BS 7121 &amp; LOLER 1998
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Each lift plan is reviewed against{' '}
                <Link
                  href="/blog/what-is-bs-7121-complete-guide"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  BS 7121
                </Link>{' '}
                and{' '}
                <Link
                  href="/blog/what-is-loler-complete-guide"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  LOLER 1998
                </Link>{' '}
                — categorising each pick and confirming Appointed Person,
                permit and RAMS arrangements before work starts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we reviewed */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              The Review
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              What every lift plan is checked against
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Every lift plan submitted by the contractor and its subcontractors
              for the Tawd Valley Junction 4 scheme is independently reviewed by
              RMT against the following criteria. Plans are returned with a
              determination and, where required, paste-ready findings for the
              contractor to action before work proceeds:
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

      {/* Drone imagery section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                Aerial Drone Imagery
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Evidencing the scale of the site from the air
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The photographs on this page were taken by RMT Solutions using
                our own drone during the lift plan review work at the Caddick
                Tawd Valley Junction 4 site. Aerial imagery is particularly
                useful at industrial scale: a single frame captures crane
                positioning, the spread of the 45-unit plot, exclusion zones,
                site access from the M58 and the relationship of the works to
                neighbouring properties.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We routinely fold drone imagery into our{' '}
                <Link
                  href="/services/aerial-site-surveys"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  aerial site surveys
                </Link>{' '}
                and{' '}
                <Link
                  href="/services/lifting-operations-audit"
                  className="text-amber-400 hover:text-amber-300 underline"
                >
                  lifting operations audits
                </Link>{' '}
                so contractors get an objective, dated visual record alongside
                the written review.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-700/50">
                <Image
                  src={HERO_IMAGE}
                  alt="Aerial drone view of Caddick Construction Tawd Valley Junction 4 portal-frame industrial units, Skelmersdale"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border border-slate-700/50">
                <Image
                  src={AERIAL_IMAGE}
                  alt="Drone photograph showing scale of the White Moss Business Park scheme off the M58, Skelmersdale"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Outcome / related services */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Outcome
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Confidence that every lift on the scheme has been independently reviewed
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            By routing every lift plan through an independent review, Caddick
            Construction can demonstrate that the lifting activities on the Tawd
            Valley Junction 4 site have been scrutinised against BS 7121,
            LOLER 1998 and the relevant manufacturer data before work proceeds.
            The arrangement covers the full breadth of the lifting profile —
            from the heaviest steel picks through to the lighter, more
            numerous, wind-sensitive cladding lifts now under way.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This is the kind of work we deliver across the North West for
            contractors building portal-frame industrial schemes. Our other
            related services include{' '}
            <Link
              href="/services/lift-plan-review"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              lift plan review and checking
            </Link>
            ,{' '}
            <Link
              href="/services/mobile-crane-lift-plans"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              mobile crane lift plans
            </Link>
            ,{' '}
            <Link
              href="/services/steel-erection"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              steel erection planning
            </Link>
            ,{' '}
            <Link
              href="/services/lifting-operations-audit"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              lifting operations audits
            </Link>{' '}
            and{' '}
            <Link
              href="/services/aerial-site-surveys"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              aerial drone site surveys
            </Link>
            .
          </p>

          <p className="mt-6 text-gray-300 leading-relaxed">
            See our other Caddick Construction reference work in the{' '}
            <Link
              href="/case-studies/chorlton-baths-balcony-lift"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              Chorlton Baths balcony lift verification case study
            </Link>
            , or read our explainers on{' '}
            <Link
              href="/blog/lifting-operations-audit-what-to-expect"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              what to expect from a lifting operations audit
            </Link>{' '}
            and{' '}
            <Link
              href="/blog/what-does-a-lift-plan-checking-service-involve"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              what a lift plan checking service involves
            </Link>
            .
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              'Caddick Construction',
              'Tawd Valley Developments',
              'Junction 4 M58',
              'White Moss Business Park',
              'Skelmersdale',
              'West Lancashire',
              'Steel erection',
              'Industrial cladding',
              'Portal frame',
              'Drone aerial survey',
              'BS 7121',
              'LOLER 1998',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-slate-800/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-500 leading-relaxed">
            Aerial drone photography captured by RMT Solutions during the
            review work. Published with the agreement of the parties involved.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
            <Plane className="w-7 h-7 text-amber-400" />
          </div>
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Need lift plan reviews for your scheme?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            We provide independent lift plan reviews, lifting operations audits
            and aerial drone site surveys for contractors across the North West
            and the wider UK.
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
