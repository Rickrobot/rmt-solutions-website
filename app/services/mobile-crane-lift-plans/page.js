import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Building2, FileText, ShieldCheck, MapPin } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Mobile Crane Lift Plans UK | LOLER & BS 7121 Compliant',
  // SEO audit (May 2026): trimmed from 231 chars to ~155 to avoid SERP
  // truncation while keeping the core keywords (mobile crane lift plans,
  // CPCS Appointed Person, LOLER, BS 7121).
  description:
    'CPCS Appointed Person mobile crane lift plans for all duty types: load chart verification, ground bearing calculations and exclusion zones to LOLER & BS 7121.',
  keywords: [
    'mobile crane lift plan',
    'mobile crane lift plans',
    'crane lift plan',
    'all terrain crane lift plan',
    'CPCS appointed person',
    'BS 7121 lift plan',
    'LOLER compliant lift plan',
  ],
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/mobile-crane-lift-plans',
  },
  openGraph: {
    title: 'Mobile Crane Lift Plans UK | LOLER & BS 7121 Compliant',
    description:
      'CPCS Appointed Person mobile crane lift plans for all duty types. Configuration-specific load charts, ground bearing calculations and exclusion zones to LOLER 1998 and BS 7121.',
    url: 'https://www.rmtsafetysolutions.com/services/mobile-crane-lift-plans',
    images: ['/images/mobile-crane-steel-erection.webp'],
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Crane Lift Plans',
  description:
    'CPCS Appointed Person mobile crane lift plans for all duty types — configuration-specific load chart verification, ground bearing pressure calculations, rigging design and exclusion zones to LOLER 1998 and BS 7121.',
  provider: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.rmtsafetysolutions.com/#business',
    name: 'RMT Solutions Ltd',
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Mobile Crane Lift Planning',
  url: 'https://www.rmtsafetysolutions.com/services/mobile-crane-lift-plans',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a mobile crane lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mobile crane lift plan is the documented safe system of work for a crane lifting operation, required under LOLER 1998 Regulation 8. It records the verified load, the crane configuration and its load chart capacity at the working radius, ground bearing pressure calculations, rigging arrangements, exclusion zones, and the method statement for the lift. It is prepared by a competent person — in practice a CPCS A61 Appointed Person.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a site visit to plan a mobile crane lift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For mobile crane operations a site visit is usually included, because ground conditions, access, set-up position and proximity hazards have to be assessed on the ground rather than from drawings alone. Straightforward lifts with full site information and good photographs can sometimes be planned remotely, but we confirm the scope on every enquiry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a mobile crane lift plan take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mobile crane lift plans are typically delivered within 3 to 5 working days, depending on complexity and whether a site visit is required. Urgent and critical-path lifts can be prioritised — call to discuss timescales.',
      },
    },
    {
      '@type': 'Question',
      name: 'What information do you need to plan a mobile crane lift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We need the load (verified weight, dimensions and lift points), the proposed crane (make, model, counterweight and boom configuration if known), the site (address, ground conditions, access, overhead and underground services, adjacent activities) and the operation (pick and set-down positions, working radius and any obstructions). If the crane is not yet chosen we will recommend a suitable machine and duty.',
      },
    },
  ],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Mobile Crane Lift Plans', item: 'https://www.rmtsafetysolutions.com/services/mobile-crane-lift-plans' },
  ],
}

export default function MobileCraneLiftPlansPage() {
  const included = [
    'Configuration-specific load chart verification with documented capacity margin',
    'Ground bearing pressure calculations against site investigation data',
    'Outrigger and crane mat / spreader requirements',
    'Rigging design — slings, shackles and lifting beams with capacities at the working angle',
    'Exclusion zones drawn around the swept volume of the load, not just the crane base',
    'Set-up position, access route and travel path assessment',
    'Method statement and lift supervisor briefing pack',
    'Proximity hazard assessment — overhead lines, structures, public and live highways',
  ]

  const dutyTypes = [
    {
      title: 'Standard single-crane lifts',
      description:
        'Routine picks with one mobile crane — precast units, plant, modules and steelwork. Load chart verified for the exact configuration on the day.',
    },
    {
      title: 'Tandem and multi-crane lifts',
      description:
        'Two or more cranes sharing a load. We calculate the share on each crane through the lift, account for dynamic effects and define the supervision and signalling arrangements.',
    },
    {
      title: 'Contract lift support',
      description:
        'Where a crane hire company provides a contract lift, we can act as your independent eyes — reviewing their plan against LOLER and BS 7121 before you accept it on your site.',
    },
    {
      title: 'Constrained and public-facing sites',
      description:
        'Urban frontages, live highways and occupied buildings alongside the lift. Exclusion zones, public segregation and traffic management planned to keep the operation inside the site.',
    },
  ]

  const process = [
    { step: '01', title: 'Enquiry', description: 'Tell us the load, the site and the crane if it is already chosen.' },
    { step: '02', title: 'Quote', description: 'Fixed-price quote within 24 hours, with the site-visit scope agreed up front.' },
    { step: '03', title: 'Survey & plan', description: 'Site visit where needed, then full plan worked up with verified calculations.' },
    { step: '04', title: 'Delivery', description: 'LOLER and BS 7121 compliant lift plan, ready for your file and site team.' },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <Image
            src="/images/mobile-crane-steel-erection.webp"
            alt="Mobile crane lifting operation on a UK construction site"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/services" className="hover:text-amber-400 transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Mobile Crane Lift Plans</span>
          </nav>
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Lift Planning Services
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              Mobile Crane <span className="gradient-text">Lift Plans</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              CPCS Appointed Person mobile crane lift plans for all duty types — single picks, tandem
              lifts and contract-lift support. Every plan is built on a verified load chart and written
              to LOLER 1998 and BS 7121, with a site visit included where the operation needs it.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                What's Included
              </span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                What goes into a mobile crane lift plan
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                A mobile crane lift plan is not a generic template with the site name changed. Every
                plan we produce is specific to the load, the machine and the ground it stands on, and
                includes everything an HSE inspector or principal contractor expects to see in a
                LOLER-compliant lifting documentation pack. Not sure which machine suits your lift? See{' '}
                <Link href="/blog/mobile-crane-vs-tower-crane" className="text-amber-400 hover:text-amber-300 underline">
                  mobile crane vs tower crane
                </Link>, or read{' '}
                <Link href="/blog/what-is-a-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                  what a lift plan is
                </Link>{' '}
                for the fundamentals.
              </p>
              <ul className="space-y-4">
                {included.map((item) => (
                  <li key={item} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 border border-slate-700/50">
              <ShieldCheck className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                Verified against the load chart — every time
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                The most common reason a crane lift plan fails an independent review is that the
                capacity has not been checked against the actual configuration. A 50t crane on full
                outriggers at 12m radius does not lift 50t — it lifts whatever the manufacturer's load
                chart says for that exact set-up. We show that calculation on every plan. If you want a
                second pair of eyes on a plan you have already received, that is our{' '}
                <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">
                  lift plan checking service
                </Link>
                .
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Duty types */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Duty Types"
            title="Mobile crane lifts we plan"
            description="From a single routine pick to a tandem lift on a constrained urban frontage."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {dutyTypes.map((duty) => (
              <article
                key={duty.title}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{duty.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{duty.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How It Works"
            title="Our mobile crane lift plan process"
            description="A clear route from enquiry to a plan your site team can work to."
          />
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-slate-700 -translate-x-4" />
                )}
                <div className="text-6xl font-display font-bold text-amber-500/20 mb-4">{item.step}</div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study callout — inbound link to the Chorlton Baths mobile crane lift */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
                  Mobile crane in practice
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                  See a mobile crane lift we verified on site
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our{' '}
                  <Link
                    href="/case-studies/chorlton-baths-balcony-lift"
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    Chorlton Baths balcony lift case study
                  </Link>{' '}
                  shows what a mobile crane operation looks like when it is planned and checked
                  properly — steel balcony units lifted into place on a constrained urban frontage in
                  Manchester, with a live highway alongside and the public segregated from the lift.
                </p>
                <Link
                  href="/case-studies/chorlton-baths-balcony-lift"
                  className="inline-flex items-center text-amber-400 font-semibold hover:text-amber-300 transition"
                >
                  Read the case study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inline quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm serviceName="Mobile Crane Lift Plan" heading="Get a quote for a mobile crane lift plan" />
        </div>
      </section>

      <RelatedServices currentSlug="mobile-crane-lift-plans" />

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Planning a mobile crane lift?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Get a fixed-price quote from a CPCS Appointed Person. We cover mobile crane lifts across
            the UK, with same-day site attendance practical across the North West — including{' '}
            <Link href="/locations/manchester" className="text-amber-400 hover:text-amber-300 underline">
              Manchester
            </Link>
            . Need plain lift plan writing for other plant? See our{' '}
            <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">
              lift plan writing service
            </Link>
            .
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            Get a Quote
          </Link>
        </div>
      </section>
    </>
  )
}
