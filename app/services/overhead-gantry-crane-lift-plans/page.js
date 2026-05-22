import Image from 'next/image'
import Link from 'next/link'
import { Clock, ShieldCheck, FileCheck, PhoneCall, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Overhead & Gantry Crane Lift Plans UK | BS 7121-7 & LOLER',
  description: 'CPCS Appointed Person lift plans for overhead travelling, gantry and bridge cranes in factories and warehouses. BS 7121-7 and LOLER 1998 compliant. Plan delivered in 24–48 hours.',
  keywords: 'overhead crane lift plan, gantry crane lift plan, overhead travelling crane lift plan, EOT crane lift plan, bridge crane lift plan, factory crane lift plan, BS 7121-7, LOLER overhead crane, jib crane lift plan, warehouse crane lifting',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/overhead-gantry-crane-lift-plans',
  },
  openGraph: {
    title: 'Overhead & Gantry Crane Lift Plans UK | BS 7121-7 & LOLER',
    description: 'CPCS Appointed Person lift plans for overhead travelling, gantry and bridge cranes. Quote within 4 working hours, plan delivered in 24–48 hours.',
    url: 'https://www.rmtsafetysolutions.com/services/overhead-gantry-crane-lift-plans',
    type: 'website',
  },
}

// JSON-LD Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Overhead & Gantry Crane Lift Plans',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warrington',
      addressRegion: 'Cheshire',
      addressCountry: 'UK',
    },
    telephone: '+447803808093',
    url: 'https://www.rmtsafetysolutions.com',
  },
  description:
    'Professional LOLER compliant lift plans for overhead travelling, gantry, bridge and jib cranes prepared by a CPCS Appointed Person. Plans for factory, warehouse and fabrication-yard lifting meeting BS 7121-7 and BS 7121-1 standards. Quote within 4 working hours, plan delivered in 24–48 hours.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Lift Planning',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'GBP',
    description: 'Fixed-fee overhead and gantry crane lift plan, quoted on application after a brief scoping call.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a lift plan for an overhead crane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. LOLER 1998 Regulation 8 applies to every lifting operation, including those carried out with a fixed overhead travelling, gantry, bridge or jib crane. Routine, repetitive production lifts can usually be covered by a generic lift plan and a safe system of work, but non-routine lifts — heavy or awkward loads, tandem lifts using two cranes, lifting over occupied areas, plant installation or maintenance lifts — need a specific written lift plan prepared by a competent person.",
      },
    },
    {
      '@type': 'Question',
      name: 'What is BS 7121-7 and how does it apply to factory cranes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BS 7121-7 is the part of the BS 7121 series covering the safe use of overhead travelling cranes — the bridge, gantry and overhead cranes installed in factories, warehouses, fabrication shops, steel mills and engineering workshops. It sits alongside BS 7121-1 (general code of practice) and sets out the planning, examination, operation and maintenance requirements specific to fixed overhead lifting equipment.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between an overhead crane, a gantry crane and a bridge crane?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An overhead travelling crane (often called an EOT crane) runs on elevated runway beams fixed to the building structure. A gantry crane carries its own supporting legs that travel on rails at floor level, so it does not load the building. A semi-goliath has one leg and one elevated runway. A bridge crane is the general term for the bridge-and-hoist arrangement common to all of them. Each configuration imposes different loadings and demands different planning checks — but all are covered by BS 7121-7 and LOLER.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you need a lift plan for a jib or pillar crane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Jib cranes, pillar cranes and wall-mounted slewing jibs are lifting equipment under LOLER and lifting operations using them must be planned by a competent person. For light, repetitive workshop lifts a generic plan is normally proportionate; for heavier or non-standard lifts a specific written plan is appropriate.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can you produce an overhead crane lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a typical factory or warehouse overhead-crane lift, we issue a quote within 4 working hours of receiving your enquiry and deliver the finished plan within 24–48 working hours. Urgent and same-day work is accommodated where possible — please call to confirm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you visit site, or can the plan be done remotely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Many overhead and gantry crane lift plans are produced remotely from the crane data plate, runway/structural information, load details and photos you provide. Site visits are arranged for tandem lifts, plant installation, lifts over occupied production areas or where the principal contractor or duty holder requests an on-site assessment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the same overhead crane lift plan be reused for repeated production lifts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For genuinely repetitive lifts of similar loads in an unchanging environment, a generic lift plan and a documented safe system of work can cover a series of operations — that is exactly how routine production lifting is managed under BS 7121-7. As soon as the load, the route, the lifting accessories or the conditions change materially, the plan must be reviewed and updated by a competent person.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a tandem lift with two overhead cranes need a special plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tandem (multi-crane) lifts are high-risk operations and always require a specific written lift plan. The plan must address load sharing between the cranes, synchronised travel and hoist, the de-rating that applies to each crane, communication and signalling, and a competent appointed person to supervise. This is one of the situations BS 7121-7 specifically flags for detailed planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you cover the whole of the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work with manufacturers, contractors and facilities teams right across the UK from our base in Warrington, Cheshire. Remote desk-based plans can be issued anywhere in the country, and site visits are arranged when needed.',
      },
    },
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Overhead & Gantry Crane Lift Plans',
      item: 'https://www.rmtsafetysolutions.com/services/overhead-gantry-crane-lift-plans',
    },
  ],
}

export default function OverheadGantryCraneLiftPlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/overhead-gantry-crane-factory-uk.webp"
            alt="Overhead travelling gantry crane lifting a steel load inside a factory - Professional overhead crane lift plans UK"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
            CPCS Appointed Person A61 · LOLER 1998 · BS 7121-7
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Overhead &amp; Gantry Crane Lift Plans, UK
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Quote-on-application lift plans for overhead travelling, gantry, bridge and jib cranes,
            prepared by a CPCS Appointed Person with 35+ years of experience. LOLER 1998 and
            BS 7121-7 compliant plans for factories, warehouses and fabrication yards — trusted by
            UK manufacturers and Tier 1 contractors.
          </p>

          {/* Response-time promise badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Quote in 4 working hours</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <FileCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Plan delivered in 24–48 hours</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Manufacturer &amp; Tier 1 approved</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+447803808093"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-900">35+</div>
              <div className="text-sm text-slate-600">Years of construction &amp; lifting experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">CPCS A61</div>
              <div className="text-sm text-slate-600">Appointed Person, current card</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">NEBOSH</div>
              <div className="text-sm text-slate-600">Construction Diploma · CertIOSH</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">UK-wide</div>
              <div className="text-sm text-slate-600">Remote and on-site coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why overhead and gantry crane lifting needs proper planning
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p>
              Overhead travelling cranes, gantries and bridge cranes are the backbone of lifting in
              UK factories, warehouses, fabrication shops, steel stockholders and engineering
              workshops. Because they are fixed plant that staff use every day, it&apos;s easy to
              treat them as &quot;just part of the building&quot; — and that&apos;s exactly where the
              risk creeps in. A fixed overhead crane is still lifting equipment under LOLER 1998, and
              the lifting operations carried out with it must be planned by a competent person.
            </p>
            <p>
              The hazards are different from a mobile crane on a construction site, but they are no
              less serious. BS 7121-7 (safe use of overhead travelling cranes) and BS 7121-1 set out
              how these operations should be planned and supervised. The recurring problems the HSE
              sees with factory crane incidents include:
            </p>
          </div>
          <figure className="mt-8">
            <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden">
              <Image
                src="/images/services/overhead-gantry-cranes-steel-processing-workshop-uk.webp"
                alt="Yellow Street overhead travelling bridge cranes on runway rails above a roller-conveyor line in a UK steel-processing and fabrication workshop — fixed overhead lifting equipment that must be planned under LOLER 1998 and BS 7121-7"
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-sm text-slate-500">
              Overhead travelling bridge cranes serving a roller-conveyor line in a UK steel-processing
              workshop — the kind of fixed factory lifting equipment covered by BS 7121-7 and LOLER 1998.
            </figcaption>
          </figure>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Loads carried over people',
                desc: 'Production areas are busy and occupied — routing a suspended load over walkways, machinery or workstations is a leading cause of factory crane injuries.',
              },
              {
                title: 'Pendant and radio control habits',
                desc: 'Operators walk with the load on a pendant or radio remote; complacency, poor sightlines and walking backwards create crush and trip hazards.',
              },
              {
                title: 'Load swing and snatch loading',
                desc: 'Side-pulling, dragging loads and sudden starts/stops induce swing and shock loading the crane was never rated for.',
              },
              {
                title: 'Two-block and over-hoist',
                desc: 'Running the hook block into the crab or end stops can overload the rope and hoist if limit switches are defeated or faulty.',
              },
              {
                title: 'Tandem (twin-crane) lifts',
                desc: 'Lifting one load on two cranes shares and shifts load unpredictably and demands synchronised, de-rated, supervised operation.',
              },
              {
                title: 'Runway and structure loading',
                desc: 'Overhead cranes load the building structure or their own gantry legs; wheel loads, end-stop forces and maintenance lifts all need checking.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 p-6 rounded-lg">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-600">
            A proper overhead crane lift plan deals with each of these in writing — load weight and
            centre of gravity, SWL verification, lifting accessories, travel route and exclusion
            zones, slinger/signaller arrangements and a method everyone has been briefed on. For
            background on how a plan is built and when one is required, see{' '}
            <Link href="/blog/overhead-crane-lift-plan-guide" className="text-amber-600 hover:text-amber-700 underline">
              do you need a lift plan for an overhead crane
            </Link>{' '}
            and the broader{' '}
            <Link href="/blog/what-is-a-lift-plan" className="text-amber-600 hover:text-amber-700 underline">
              what is a lift plan
            </Link>{' '}
            article.
          </p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What&apos;s included in your overhead crane lift plan
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Every lift plan we issue is a complete pack — risk assessment, method statement,
            calculations and arrangement drawing in one place. It is briefed to your team, signed
            off by an Appointed Person and ready to drop into your safety file or CDM documentation.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Crane &amp; environment assessment</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  'Crane type, span, SWL and configuration confirmed from the data plate',
                  'Travel route, walkways and occupied-area review (loads over people)',
                  'Runway, gantry-leg or structural loading considerations',
                  'Headroom, hook approach and adjacent-obstruction check',
                  'Exclusion-zone determination and barrier strategy',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Equipment verification</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  'Crane SWL and current LOLER thorough examination certificate',
                  'Hoist, rope/chain and limit-switch (over-hoist) condition',
                  'Lifting accessories specification — chains, slings, shackles, beams, WLLs',
                  'Below-the-hook devices (spreader/lifting beams, magnets, vacuum lifters)',
                  'Pre-use check and competent operator/slinger confirmation',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Lift calculations</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  'Load weight including rigging and below-the-hook equipment',
                  'Centre-of-gravity identification and slinging method',
                  'Verification that load stays within crane SWL (and de-rated SWL for tandem lifts)',
                  'Lifting accessory WLL checks against sling angles and lift configuration',
                  'Load-share calculation for twin-crane / tandem operations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Documentation pack</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  'Lift plan arrangement drawing with travel route and exclusion zones marked',
                  'Risk assessment with site-specific control measures',
                  'Method statement with sequence of operations',
                  'Lifting accessories schedule with WLL evidence',
                  'Pre-lift checklist and toolbox-talk record',
                  'Briefing template ready for your slinger/banksman/operator sign-off',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-80">
        <Image
          src="/images/services/overhead-crane-steel-fabrication-lift.webp"
          alt="Overhead bridge crane lifting fabricated steel in an engineering workshop - LOLER compliant lift planning"
          fill
          className="object-cover"
        />
      </section>

      {/* Process / Response time promise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            How it works — and how fast
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Quote-on-application, no sign-up, no hidden fees. Send the brief and we&apos;ll come
            back to you the same working day.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'You send the brief',
                desc: 'Crane data plate / SWL, span and type, load details, the lift or travel route, and any constraints. A few photos and a floor-plan sketch usually do it.',
                badge: '5-min job',
              },
              {
                step: '2',
                title: 'We quote',
                desc: 'Fixed-fee quote returned within 4 working hours, with a clear scope and a confirmed delivery date.',
                badge: '≤ 4 hrs',
              },
              {
                step: '3',
                title: 'Plan produced',
                desc: 'Arrangement drawing, calculations, RA/MS and accessories schedule prepared by a CPCS Appointed Person. One revision included.',
                badge: '24–48 hrs',
              },
              {
                step: '4',
                title: 'Briefing & sign-off',
                desc: 'Plan issued in PDF + editable formats. We support your team through briefing and any reviewer queries.',
                badge: 'Same day',
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-slate-50 p-6 rounded-xl border border-slate-200">
                <div className="absolute -top-3 left-6 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                  Step {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mt-2 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{item.desc}</p>
                <div className="inline-flex items-center gap-1 text-xs text-amber-700 font-semibold">
                  <Clock className="w-3 h-3" />
                  {item.badge}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-slate-600 italic">
            Urgent or same-day work is accommodated where possible — call{' '}
            <a href="tel:+447803808093" className="text-amber-600 hover:text-amber-700 font-semibold">
              07803 808093
            </a>{' '}
            and we&apos;ll tell you straight whether it can be done.
          </p>
        </div>
      </section>

      {/* Crane Types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Overhead crane types we cover
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            From a 1-tonne workshop jib to a 50-tonne twin-girder EOT crane in a steel mill — if
            it&apos;s a fixed lifting machine, we&apos;ll plan the lift.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Overhead travelling (EOT) cranes</h3>
              <p className="text-slate-600 mb-4">
                Single- and double-girder bridge cranes running on building-mounted runway beams —
                the standard factory and fabrication-shop crane.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Pendant and radio-control operation</li>
                <li>• Cross-travel, long-travel and hoist envelopes</li>
                <li>• Loads-over-people routing and exclusion zones</li>
                <li>• Runway and end-stop loading considerations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Goliath &amp; gantry cranes</h3>
              <p className="text-slate-600 mb-4">
                Self-supporting goliath and semi-goliath gantries that travel on floor or yard
                rails — common in stockyards, precast plants and laydown areas.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Rail and wheel-loading checks</li>
                <li>• Outdoor wind and weather considerations</li>
                <li>• Long-load and out-of-balance handling</li>
                <li>• Travel route and pedestrian segregation</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Jib, pillar &amp; bespoke cranes</h3>
              <p className="text-slate-600 mb-4">
                Slewing jib cranes, wall-mounted and pillar cranes, plus tandem lifts and
                below-the-hook lifting beams that need specific planning.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Slewing radius and SWL-at-reach checks</li>
                <li>• Spreader and lifting-beam configurations</li>
                <li>• Twin-crane / tandem lift load sharing</li>
                <li>• Plant installation and maintenance lifts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BS 7121-7 Compliance */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">BS 7121-7 &amp; LOLER 1998: the standards we work to</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-3xl">
            All our overhead and gantry crane lift plans comply with{' '}
            <span className="font-semibold text-white">BS 7121-7</span> (safe use of overhead
            travelling cranes), the general code{' '}
            <span className="font-semibold text-white">BS 7121-1</span>, and{' '}
            <span className="font-semibold text-white">LOLER 1998</span>. Together these define how a
            lift must be planned, supervised, examined and recorded.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Routine vs non-routine lifts</h3>
              <p className="text-slate-300 mb-4">
                BS 7121-7 distinguishes between repetitive production lifting and lifts that need
                their own written plan. We help you draw the line correctly:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  Generic plan + safe system of work for routine lifts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  Specific written plan for non-routine and high-risk lifts
                </li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">
                Getting this proportionate keeps production moving while staying compliant.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">What the plan must address</h3>
              <p className="text-slate-300 mb-4">
                Under LOLER Regulation 8 and BS 7121-7, a competent person plans the operation. Our
                plans cover:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• Load weight, centre of gravity and SWL margin</li>
                <li>• Lifting accessories and below-the-hook devices</li>
                <li>• Travel route, exclusion zones and loads over people</li>
                <li>• Tandem-lift load sharing and crane de-rating</li>
                <li>• Roles: appointed person, supervisor, operator, slinger</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-amber-400 font-medium">
            Result: plans that are proportionate to the risk — robust enough for an HSE inspector or
            client auditor, practical enough to keep your production line running.
          </p>
        </div>
      </section>

      {/* When You Need Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            When do you need an overhead crane lift plan?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl">
            Under LOLER 1998 Regulation 8, every lifting operation must be properly planned by a
            competent person. For overhead, gantry and jib cranes, a specific written lift plan is
            needed when any of the following apply:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Tandem lifts using two or more cranes',
              'Lifting over occupied production areas or walkways',
              'Heavy or awkward one-off loads near the crane SWL',
              'Plant, machinery or die installation and removal',
              'Crane maintenance and component-change lifts',
              'Lifts using spreader or lifting beams',
              'Non-routine loads with an unusual centre of gravity',
              'New process, new product or a changed lift route',
              'When specified by your duty holder or principal contractor',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-slate-600 italic">
            Even where a routine generic plan would do, having documented evidence demonstrates due
            diligence under LOLER and gives the lifting team something concrete to brief against.
            For more detail, see{' '}
            <Link href="/blog/when-do-you-need-lift-plan" className="text-amber-600 hover:text-amber-700 underline">
              when do you need a lift plan
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Lift Plan Checking CTA */}
      <section className="py-16 bg-amber-500 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Already got a plan? We&apos;ll check it.</h2>
              <p className="text-slate-800 max-w-2xl">
                Independent Appointed Person review of overhead and gantry crane lift plans — SWL
                margins, lifting accessories, travel route, tandem-lift load sharing and method. We
                tell you exactly what is missing and what needs amending before anyone goes near a
                load.
              </p>
            </div>
            <Link
              href="/services/lift-plan-checking"
              className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center gap-2"
            >
              Lift plan checking
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Why manufacturers send their overhead crane lifts to us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Specialist, not generalist',
                desc: 'Lift planning is the whole business — not a sideline of a generalist H&S consultancy. Our Appointed Person has produced and signed off thousands of plans.',
              },
              {
                title: 'CPCS Appointed Person (A61)',
                desc: 'Plans are prepared by a current CPCS A61 cardholder, meeting the BS 7121 competence requirement for planning lifting operations.',
              },
              {
                title: 'Factory & Tier 1 approved',
                desc: 'Trusted on live projects by UK manufacturers and leading contractors including Wates, Caddick and GMI — our plans are written to pass duty-holder and main-contractor scrutiny first time.',
              },
              {
                title: 'NEBOSH Diploma · CertIOSH · MIIRSM · TIFSM',
                desc: 'Construction-specific NEBOSH National Diploma, CertIOSH, MIIRSM and TIFSM — the planning is grounded in proper risk assessment, not just box-ticking.',
              },
              {
                title: 'Fixed-fee, fast turnaround',
                desc: 'Quote in 4 working hours, plan in 24–48. No hourly drift, no surprise add-ons. One revision included as standard.',
              },
              {
                title: 'Software-enhanced accuracy',
                desc: 'AutoCAD for the arrangement drawing and load modelling for capacity and load-share checks — output that looks the part and stands up to review.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-slate-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Overhead &amp; gantry crane lift plan FAQs
          </h2>

          <div className="space-y-6 max-w-4xl">
            {[
              {
                q: 'Do I need a lift plan for an overhead crane?',
                a: 'Yes. LOLER 1998 Regulation 8 applies to every lifting operation, including those carried out with a fixed overhead travelling, gantry, bridge or jib crane. Routine, repetitive production lifts can usually be covered by a generic lift plan and a safe system of work, but non-routine lifts — heavy or awkward loads, tandem lifts using two cranes, lifting over occupied areas, plant installation or maintenance lifts — need a specific written lift plan prepared by a competent person.',
              },
              {
                q: 'What is BS 7121-7 and how does it apply to factory cranes?',
                a: 'BS 7121-7 is the part of the BS 7121 series covering the safe use of overhead travelling cranes — the bridge, gantry and overhead cranes installed in factories, warehouses, fabrication shops, steel mills and engineering workshops. It sits alongside BS 7121-1 (general code of practice) and sets out the planning, examination, operation and maintenance requirements specific to fixed overhead lifting equipment.',
              },
              {
                q: "What's the difference between an overhead crane, a gantry crane and a bridge crane?",
                a: 'An overhead travelling crane (often called an EOT crane) runs on elevated runway beams fixed to the building structure. A gantry crane carries its own supporting legs that travel on rails at floor level, so it does not load the building. A semi-goliath has one leg and one elevated runway. A bridge crane is the general term for the bridge-and-hoist arrangement common to all of them. Each configuration imposes different loadings and demands different planning checks — but all are covered by BS 7121-7 and LOLER.',
              },
              {
                q: 'Do you need a lift plan for a jib or pillar crane?',
                a: 'Jib cranes, pillar cranes and wall-mounted slewing jibs are lifting equipment under LOLER and lifting operations using them must be planned by a competent person. For light, repetitive workshop lifts a generic plan is normally proportionate; for heavier or non-standard lifts a specific written plan is appropriate.',
              },
              {
                q: 'How fast can you produce an overhead crane lift plan?',
                a: 'For a typical factory or warehouse overhead-crane lift, we issue a quote within 4 working hours of receiving your enquiry and deliver the finished plan within 24–48 working hours. Urgent and same-day work is accommodated where possible — please call to confirm.',
              },
              {
                q: 'Do you visit site, or can the plan be done remotely?',
                a: 'Many overhead and gantry crane lift plans are produced remotely from the crane data plate, runway/structural information, load details and photos you provide. Site visits are arranged for tandem lifts, plant installation, lifts over occupied production areas or where the principal contractor or duty holder requests an on-site assessment.',
              },
              {
                q: 'Can the same overhead crane lift plan be reused for repeated production lifts?',
                a: 'For genuinely repetitive lifts of similar loads in an unchanging environment, a generic lift plan and a documented safe system of work can cover a series of operations — that is exactly how routine production lifting is managed under BS 7121-7. As soon as the load, the route, the lifting accessories or the conditions change materially, the plan must be reviewed and updated by a competent person.',
              },
              {
                q: 'Does a tandem lift with two overhead cranes need a special plan?',
                a: 'Yes. Tandem (multi-crane) lifts are high-risk operations and always require a specific written lift plan. The plan must address load sharing between the cranes, synchronised travel and hoist, the de-rating that applies to each crane, communication and signalling, and a competent appointed person to supervise. This is one of the situations BS 7121-7 specifically flags for detailed planning.',
              },
              {
                q: 'Do you cover the whole of the UK?',
                a: 'Yes. We work with manufacturers, contractors and facilities teams right across the UK from our base in Warrington, Cheshire. Remote desk-based plans can be issued anywhere in the country; site visits and follow-up briefings are arranged when needed.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName="Overhead & Gantry Crane Lift Plans"
            heading="Get a quote for your overhead crane lift plan"
          />
        </div>
      </section>

      <RelatedServices currentSlug="overhead-gantry-crane-lift-plans" />

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Send the brief, get the plan</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Quote-on-application — fixed fee, no hourly drift. We&apos;ll come back to you the same
            working day.
          </p>

          <div className="bg-slate-800 p-8 rounded-xl max-w-2xl mx-auto mb-8 text-left">
            <h3 className="font-semibold mb-4 text-center">What we need from you:</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Crane data plate / SWL, span and type (EOT, goliath, jib)</li>
              <li>• A floor-plan sketch and the lift / travel route</li>
              <li>• Load details — weight, dimensions, lift points</li>
              <li>• Lifting accessories and below-the-hook equipment available</li>
              <li>• Any known hazards (occupied areas, obstructions, headroom)</li>
              <li>• Required date for the lift</li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+447803808093"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/services/mobile-crane-lift-plans', title: 'Mobile Crane Lift Plans' },
              { href: '/services/excavator-lift-plans', title: 'Excavator Lift Plans' },
              { href: '/services/lift-plan-checking', title: 'Lift Plan Checking Service' },
              { href: '/services/tower-crane', title: 'Tower Crane Contracts' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-slate-50 hover:bg-slate-100 p-4 rounded-lg text-slate-900 font-medium transition-colors"
              >
                {service.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Available across the UK — reciprocates the inbound links from /locations/* */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Available across the UK
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We deliver overhead and gantry crane lift plans UK-wide. Plans are produced remotely from Warrington; site visits are scheduled where the work requires it. Pick your nearest city or call <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">07803 808093</a> to discuss your project.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
              <Link
                key="warrington"
                href="/locations/warrington"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Warrington →
              </Link>
              <Link
                key="manchester"
                href="/locations/manchester"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Manchester →
              </Link>
              <Link
                key="liverpool"
                href="/locations/liverpool"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Liverpool →
              </Link>
              <Link
                key="leeds"
                href="/locations/leeds"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Leeds →
              </Link>
              <Link
                key="birmingham"
                href="/locations/birmingham"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Birmingham →
              </Link>
              <Link
                key="london"
                href="/locations/london"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                London →
              </Link>
              <Link
                key="bristol"
                href="/locations/bristol"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Bristol →
              </Link>
              <Link
                key="glasgow"
                href="/locations/glasgow"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Glasgow →
              </Link>
              <Link
                key="edinburgh"
                href="/locations/edinburgh"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Edinburgh →
              </Link>
          </div>
        </div>
      </section>

    </>
  )
}
