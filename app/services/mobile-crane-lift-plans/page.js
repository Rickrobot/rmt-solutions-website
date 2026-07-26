import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Building2, FileText, ShieldCheck, MapPin } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Mobile Crane Lift Plans UK | BS 7121',
  // SEO audit (May 2026): trimmed from 231 chars to ~155 to avoid SERP
  // truncation while keeping the core keywords (mobile crane lift plans,
  // CPCS Appointed Person, LOLER, BS 7121).
  // Fix #6, Jul 2026 SEO review: was 158 chars, three over the limit.
  description:
    'CPCS Appointed Person mobile crane lift plans: load chart verification, ground bearing pressure and exclusion zones, to LOLER 1998 and BS 7121.',
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
    siteName: 'RMT Solutions - Lift Planning Specialists',
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

// Single source of truth for this page's FAQs — rendered on the page AND
// used to build the FAQPage JSON-LD below. Add questions here only.
const PAGE_FAQS = [
  {
    q: 'Does a 50 tonne crane lift 50 tonnes?',
    a: 'No. The tonnage in a crane name is its maximum capacity at minimum radius, on fully extended outriggers, with full counterweight, usually over the rear. At working radius with a longer boom the figure is far lower — and the hook block, rigging and any fly jib all deduct from it. The plan must show the net capacity for the actual configuration.',
  },
  {
    q: 'What is ground bearing pressure and why does it matter?',
    a: 'It is the load each outrigger imposes on the ground, measured in kPa. On outriggers the whole weight of the crane, counterweight and load is concentrated into four small pads, and during a slew one outrigger can carry a large share of it. If that pressure exceeds what the ground can carry, the outrigger sinks and the crane can overturn. It is the calculation most often missing or wrong in the plans we review.',
  },
  {
    q: 'What size crane mats do I need?',
    a: 'It depends on the peak outrigger reaction from the manufacturer data and the allowable bearing pressure of the ground. Divide the reaction by the allowable pressure to get the minimum area. A 589 kN reaction against 200 kPa allowable needs about 2.95 m² — roughly a 1.75 m square mat. The mat also has to be stiff enough to actually spread the load rather than punch through.',
  },
  {
    q: 'When is a mobile crane lift a complex lift?',
    a: 'Under BS 7121, tandem and multi-crane lifts, blind lifts, lifting over occupied buildings or the public, working near overhead power lines or railways, loads of unknown weight, overlapping crane radii and any lifting of people all point to the complex category. Complex lifts need an experienced Appointed Person and a fully site-specific written plan.',
  },
  {
    q: 'Do I still need a lift plan if the crane hire company is providing a contract lift?',
    a: 'Under a contract lift the crane hire company takes on the planning and supervision, and supplies the Appointed Person. That does not remove your duties as principal contractor under CDM 2015 to plan, manage and monitor lifting on your site. Most tier 1 contractors have the contract lift plan independently reviewed before accepting it — that is our lift plan checking service.',
  },
  {
    q: 'How much does a mobile crane lift plan cost?',
    a: 'Mobile crane plans typically fall in the £250–£500 range, with complex operations such as tandem lifts quoted individually and usually £500–£1,500. You get a fixed written price within 4 working hours of sending the details — no hourly billing, and revisions arising from principal contractor review are included.',
  },
  {
    q: 'How long does a mobile crane lift plan take?',
    a: 'Straightforward single-crane lifts are typically 3–5 working days from receiving complete information. Complex and tandem lifts take longer because they need engineering checks against the manufacturer load chart and independent review. If the lift is programme-critical, say so when you enquire and we will tell you honestly whether the date is achievable.',
  },
  {
    q: 'What information do you need to plan a mobile crane lift?',
    a: 'Load weight, dimensions and lifting points; the crane make, model and proposed configuration if already chosen; a site plan showing the set-up position and any constraints; ground investigation data or the allowable bearing pressure; details of overhead and underground services; and the intended dates. If some of that is missing we will tell you what matters most and what can wait.',
  },
  {
    q: 'What is a mobile crane lift plan?',
    a: 'A mobile crane lift plan is the documented safe system of work for a crane lifting operation, required under LOLER 1998 Regulation 8. It records the verified load, the crane configuration and its load chart capacity at the working radius, ground bearing pressure calculations, rigging arrangements, exclusion zones, and the method statement for the lift. It is prepared by a competent person — in practice a CPCS A61 Appointed Person.',
  },
  {
    q: 'Do you need a site visit to plan a mobile crane lift?',
    a: 'For mobile crane operations a site visit is usually included, because ground conditions, access, set-up position and proximity hazards have to be assessed on the ground rather than from drawings alone. Straightforward lifts with full site information and good photographs can sometimes be planned remotely, but we confirm the scope on every enquiry.',
  },
]

// FAQ structured data, generated from PAGE_FAQS above.
//
// Fix #2, Jul 2026 SEO review: this object used to be a hand-maintained literal
// separate from the visible FAQ list, and the two had drifted — questions were
// being emitted as JSON-LD that appeared nowhere on the rendered page, which
// breaches Google's structured data policy. Deriving it from the visible list
// makes that impossible by construction. Edit PAGE_FAQS, not this.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PAGE_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
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
    { step: '02', title: 'Quote', description: 'Fixed-price quote within 4 working hours, with the site-visit scope agreed up front.' },
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


      {/* Ground bearing pressure — the single most common failure in mobile
          crane lift plans, and the one that puts cranes on their side. Added
          Jul 2026: this page was 733 words and ranking for nothing across a
          1,523-impression / 0-click query cluster. */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Ground Bearing
            </span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              The calculation most crane lift plans get wrong
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              A mobile crane does not spread its weight the way a tracked machine does. Set up on
              outriggers, the weight of the crane, the counterweight and the load is concentrated into
              four small pads — and as the crane slews, a single outrigger can end up carrying a large
              share of the total. That is why ground failure under one outrigger is one of the most
              common causes of mobile crane overturning on UK sites.
            </p>
            <p className="text-gray-300 leading-relaxed">
              The figure that matters is not the crane&apos;s weight. It is the peak outrigger reaction
              from the manufacturer&apos;s documentation, divided by the area it is spread over, checked
              against what the ground can actually carry.
            </p>
          </div>

          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 sm:p-10">
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              A worked example
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Take a 100-tonne all-terrain crane where the manufacturer&apos;s outrigger load chart
                gives a peak reaction of <strong className="text-white">60 tonnes</strong> — roughly
                589 kN — through one corner at the worst slew position.
              </p>
              <ul className="space-y-3 pl-5 list-disc marker:text-amber-400">
                <li>
                  On the crane&apos;s own outrigger float, perhaps{' '}
                  <strong className="text-white">0.5 m²</strong>, that is about{' '}
                  <strong className="text-amber-400">1,180 kPa</strong> imposed on the ground.
                </li>
                <li>
                  Well-compacted granular fill might safely carry{' '}
                  <strong className="text-white">150–200 kPa</strong> — and that figure has to come
                  from ground investigation or the principal contractor&apos;s temporary works designer,
                  never from assumption.
                </li>
                <li>
                  So the float alone is roughly <strong className="text-amber-400">six times
                  over</strong> what the ground will take.
                </li>
                <li>
                  To bring it inside 200 kPa you need about{' '}
                  <strong className="text-white">2.95 m²</strong> of bearing area — a mat of roughly{' '}
                  <strong className="text-white">1.75 m × 1.75 m</strong> under each outrigger.
                </li>
              </ul>
              <p className="pt-2">
                And a mat only spreads load if it is stiff enough to do so. An undersized or flexible
                mat simply punches through and delivers very nearly the original pressure to the ground
                beneath it. Mat selection is part of the calculation, not an afterthought.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="font-display text-lg font-bold text-white mb-3">
                What else sits under the outriggers
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• Basements, cellars, culverts and drainage runs</li>
                <li>• Backfilled trenches and made ground</li>
                <li>• Buried services — the utility drawings rarely match reality</li>
                <li>• Excavations nearby: the crane must sit outside the zone of influence</li>
                <li>• Suspended slabs and podium decks, which need their own temporary works check</li>
              </ul>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
              <h3 className="font-display text-lg font-bold text-white mb-3">
                What we need to do the calculation
              </h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>• The crane make, model and proposed configuration</li>
                <li>• The manufacturer&apos;s outrigger load data for that machine</li>
                <li>• Allowable bearing pressure from the site investigation</li>
                <li>• The set-up position relative to any excavation or structure</li>
                <li>• What mats or spreader pads are actually available on site</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Duty chart interpretation — targets the "what is a crane lift plan" /
          "crane lift plan requirements" query cluster with the specific
          misunderstanding those searchers usually have. */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Duty Charts
            </span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              A 50-tonne crane does not lift 50 tonnes
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The tonnage in a crane&apos;s name is its maximum capacity at minimum radius, on fully
              extended outriggers, with full counterweight, usually slewing over the rear. Move any one
              of those variables and the number changes — often dramatically. A plan that quotes the
              headline tonnage rather than the figure for the actual configuration is the single most
              common reason a crane lift plan fails an independent review.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Every one of these changes the capacity
              </h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-3"><span className="text-amber-400">→</span><span><strong className="text-white">Radius</strong> — capacity falls away sharply as the load moves out</span></li>
                <li className="flex gap-3"><span className="text-amber-400">→</span><span><strong className="text-white">Boom length</strong> — a longer boom at the same radius lifts less</span></li>
                <li className="flex gap-3"><span className="text-amber-400">→</span><span><strong className="text-white">Counterweight fitted</strong> — the chart is per counterweight configuration</span></li>
                <li className="flex gap-3"><span className="text-amber-400">→</span><span><strong className="text-white">Outrigger extension</strong> — full, intermediate and retracted are separate charts</span></li>
                <li className="flex gap-3"><span className="text-amber-400">→</span><span><strong className="text-white">Slew sector</strong> — over-rear, over-side and 360° capacities differ</span></li>
                <li className="flex gap-3"><span className="text-amber-400">→</span><span><strong className="text-white">On outriggers or on wheels</strong> — free-on-wheels duties are far lower</span></li>
              </ul>
            </div>
            <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/50">
              <h3 className="font-display text-xl font-bold text-white mb-4">
                And these come off the top
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                The chart figure is gross. Everything hanging below the boom head is a deduction:
              </p>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex gap-3"><span className="text-amber-400">−</span><span>Hook block and any auxiliary hook</span></li>
                <li className="flex gap-3"><span className="text-amber-400">−</span><span>Slings, shackles, chains and spreader or lifting beams</span></li>
                <li className="flex gap-3"><span className="text-amber-400">−</span><span>Fly jib or extension — including when it is stowed alongside the boom</span></li>
                <li className="flex gap-3"><span className="text-amber-400">−</span><span>Any lifting attachment or handling frame</span></li>
              </ul>
              <p className="text-gray-400 text-sm mt-4">
                What is left is the net capacity. The load divided by that figure is your utilisation —
                and many principal contractors set a threshold (commonly around 75–80%) above which the
                lift gets additional scrutiny or is treated as complex.
              </p>
            </div>
          </div>

          <p className="text-gray-400 mt-8 max-w-3xl">
            Every plan we produce shows this calculation on the face of the document — the configuration
            assumed, the gross chart figure, the deductions, the net capacity and the resulting
            utilisation. If a plan you have been sent does not show its working, that is exactly what our{' '}
            <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">
              independent lift plan checking service
            </Link>{' '}
            is for.
          </p>
        </div>
      </section>

      {/* Complex lift triggers + exclusion zones */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                When a mobile crane lift becomes a complex lift
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Under BS 7121 the category of the lift drives how much planning it needs and who is
                competent to plan it. These push a mobile crane lift into the complex category:
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Tandem or multi-crane lifts sharing a single load</span></li>
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Blind lifts, where the operator cannot see the load or the landing area</span></li>
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Lifting over occupied buildings, live highways or the public</span></li>
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Working near overhead power lines or railway infrastructure</span></li>
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Loads of unknown or uncertain weight, or awkward centre of gravity</span></li>
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Multiple cranes with overlapping operating radii</span></li>
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Lifting people — see our guide to{' '}
                  <Link href="/blog/lifting-people-man-baskets" className="text-amber-400 hover:text-amber-300 underline">man basket rules</Link></span></li>
              </ul>
              <p className="text-gray-400 text-sm mt-6">
                Read more on{' '}
                <Link href="/blog/basic-standard-complex-lifts" className="text-amber-400 hover:text-amber-300 underline">
                  basic, standard and complex lift categories
                </Link>.
              </p>
            </div>

            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Exclusion zones are drawn around the load, not the crane
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A common shortcut is to draw the exclusion zone at the crane&apos;s operating radius. That
                is not enough. The zone has to account for the swept volume of the suspended load, the
                area the load could reach if it swung, and the ground it could reach if it fell.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Load dimensions and orientation through every part of the slew</span></li>
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Overhead power lines — HSE guidance note GS6 sets the clearance approach</span></li>
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Adjacent occupied buildings, scaffolds and other trades working below</span></li>
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Site boundaries, footpaths and the public interface</span></li>
                <li className="flex gap-3"><span className="text-amber-400 flex-shrink-0">•</span><span>Physical segregation and who enforces it during the lift</span></li>
              </ul>
              <p className="text-gray-400 text-sm mt-6">
                Wind is planned the same way — there is no single legal limit, the manufacturer&apos;s
                chart governs, and load sail area changes everything. See{' '}
                <Link href="/blog/crane-wind-speed-limits" className="text-amber-400 hover:text-amber-300 underline">
                  crane wind speed limits
                </Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visible FAQ — mirrors the FAQPage schema so the two match, which is a
          Google rich-result requirement. */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-12">
            Mobile crane lift plan FAQs
          </h2>
          <div className="space-y-6">
            {PAGE_FAQS.map((item) => (
              <div key={item.q} className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <h3 className="font-display text-lg font-bold text-white mb-3">{item.q}</h3>
                <p className="text-gray-400 leading-relaxed">{item.a}</p>
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
