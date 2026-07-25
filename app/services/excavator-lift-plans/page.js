import Image from 'next/image'
import Link from 'next/link'
import { Clock, ShieldCheck, FileCheck, PhoneCall, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Excavator Lift Plans UK | ISO 10567 & LOLER',
  description: 'CPCS Appointed Person excavator lift plans from £200 + VAT. LOLER 1998 and ISO 10567 compliant, delivered in 24–48 hours.',
  keywords: 'excavator lift plan, excavator lifting plan, excavator lift plans, lifting with excavator, excavator lift plan UK, excavator lifting operations, 360 excavator lift plan, excavator lifting capacity, LOLER excavator lifting, ISO 10567, CPCS appointed person',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/excavator-lift-plans',
  },
  openGraph: {
    title: 'Excavator Lift Plans UK | ISO 10567 & LOLER',
    description: 'CPCS Appointed Person excavator lift plans from £200 + VAT. Quote within 4 working hours, plan delivered in 24–48 hours.',
    url: 'https://www.rmtsafetysolutions.com/services/excavator-lift-plans',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

// JSON-LD Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Excavator Lift Plans',
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
    'Professional LOLER compliant excavator lift plans prepared by a CPCS Appointed Person. Plans for 180° and 360° excavators meeting ISO 10567 and BS 7121 standards. Quote within 4 working hours, plan delivered in 24–48 hours.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Lift Planning',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'GBP',
    price: '200',
    description: 'Fixed-fee excavator lift plan from £200 plus VAT.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can any excavator be used for lifting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Only excavators designed and equipped for lifting should be used. The machine needs a certified lifting point, a Rated Capacity Indicator (RCI) where capacity exceeds 1 tonne, a current thorough examination certificate that covers lifting duties, and a manufacturer's lifting capacity chart for the configuration on site.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a lift plan for every excavator lift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LOLER 1998 requires every lifting operation to be properly planned by a competent person. For routine, low-risk lifts a generic risk assessment and method statement may be enough. As soon as additional hazards exist (overhead services, excluded persons, complex loads, tandem lifts, exposed edges) a specific written lift plan is needed.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between digging capacity and lifting capacity?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Digging capacity is bucket breakout force in the bucket curl direction. Lifting capacity is the maximum suspended load the machine can safely handle at a given radius and lift point height. They are two completely different measurements — you cannot derive one from the other and you must never use digging specifications to plan a lift.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can you produce an excavator lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a typical single-machine excavator lift, we issue a quote within 4 working hours of receiving your enquiry and deliver the finished plan within 24–48 working hours. Urgent and same-day work is accommodated where possible — please call to confirm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you visit site, or can the plan be done remotely?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most excavator lift plans are produced remotely from drawings, photos, GA layouts and equipment specifications you provide. Site visits are arranged when the lift is high-risk, in a complex environment, or specifically requested by the principal contractor.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long is an excavator lift plan valid?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lift plan covers the specific lift or series of lifts it was prepared for, so long as the conditions on site stay the same. If the machine, attachments, load, location or ground conditions change materially, the plan must be reviewed and updated by a competent person.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is ISO 10567 and why does it matter for excavator lifting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ISO 10567:2013 (Earth-moving machinery — Lift capacity — Hydraulic excavators) defines how rated lift capacity is calculated: the lower of 75% of tipping load or 87% of hydraulic capacity. Manufacturer load charts use this standard, so reading them correctly — and applying the right deductions for hitches, slings and out-of-level conditions — is fundamental to a safe lift.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is an excavator lifting plan the same as an excavator lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. "Excavator lifting plan" and "excavator lift plan" are the same document — different wording for the written plan that covers lifting with an excavator. Whenever an excavator handles a suspended load on slings, chains or a lifting eye instead of digging, LOLER 1998 requires that plan, and we prepare it to ISO 10567 and BS 7121.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you cover the whole of the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work with contractors right across the UK from our base in Warrington, Cheshire. Remote desk-based plans can be issued anywhere in the country, and site visits are arranged when needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does an excavator need a LOLER thorough examination for lifting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. As soon as an excavator is used to lift a suspended load it is lifting equipment under LOLER 1998, so it needs a thorough examination by a competent person at least every 12 months, and the lifting accessories — chains, slings and the lifting eye — every 6 months. The lift plan should confirm the current examination certificate covers lifting duties, not just the machine.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does an excavator lift need a separate CPCS A62 lift supervisor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not always. Every excavator lifting operation must be supervised, but whether the supervisor must be a separate, dedicated CPCS A62 (or NPORS equivalent) holder depends on the lift category set by the Appointed Person. A basic lift can combine supervision with the A40 slinger/signaller (or the operator self-supervising) where that person is competent and authorised; an intermediate lift often needs a separate A62; a complex lift always needs a dedicated A62 and the roles must not be combined.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can the slinger/signaller also supervise an excavator lift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only on a genuinely basic lift, and only where the Appointed Person has reviewed and authorised it and the person is assessed as competent to supervise — not just to sling. The CPCS A40 card evidences slinging and signalling, not supervision. For intermediate and complex excavator lifts, provide a dedicated CPCS A62 lift supervisor. Some principal contractors require an A62 supervisor even on basic lifts, so check the client rules and lift plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is CPA lifting with excavators?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It refers to the Construction Plant-hire Association (CPA) good-practice guidance for using 360° excavators for object handling — "Lifting Operations with Excavators". It covers the lifting points, Rated Capacity Indicator and quick-hitch requirements, the load-chart deductions and the planning expectations, and a competent excavator lift plan is written in line with it alongside LOLER 1998, BS 7121 and ISO 10567.',
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
      name: 'Excavator Lift Plans',
      item: 'https://www.rmtsafetysolutions.com/services/excavator-lift-plans',
    },
  ],
}

export default function ExcavatorLiftPlansPage() {
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
            src="/images/services/excavator-lifting-hook-chains-uk.webp"
            alt="Excavator lifting hook with chain slings ready for lifting operation - Professional excavator lift plans UK"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
            CPCS Appointed Person A61 · LOLER 1998 · ISO 10567
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Excavator Lift Plans, UK
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Quote-on-application excavator lift plans prepared by a CPCS Appointed Person with
            35+ years of construction experience. Whenever you are lifting with an excavator —
            on slings, chains or a lifting eye rather than digging — LOLER 1998 requires a written
            plan. We produce ISO 10567 compliant excavator lifting plans for 180° and 360°
            machines, trusted by Tier 1 UK contractors.
          </p>

          {/* Response-time promise badges */}
          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 bg-amber-500 px-4 py-2 rounded-full">
              <span className="text-sm font-bold text-slate-900">Lift plans from £200 + VAT</span>
            </div>
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
              <span className="text-sm">Tier 1 contractor approved</span>
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
              <div className="text-sm text-slate-600">Years of construction experience</div>
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
            Why excavator lifting needs its own plan
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p>
              Excavators are now the default lifting machine on most UK construction sites — they
              are already there for muck-shifting, the operator can pick a load straight from the
              dig, and they fit into spaces a mobile crane never could. That convenience is why
              they account for a large share of recent UK lifting incidents.
            </p>
            <p>
              An excavator is a digging machine being used for a job it wasn&apos;t primarily
              designed for. Hydraulic capacity, tipping geometry, slew speed and the operator&apos;s
              line of sight all behave differently from a mobile crane, and the rules in BS 7121-1
              and ISO 10567 reflect that. The HSE and the Strategic Forum Plant Safety Group have
              flagged the same recurring hazards in incident data:
            </p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Rapid hydraulic movement',
                desc: 'Boom, dipper and slew can all move quickly enough to swing a suspended load into people or structures.',
              },
              {
                title: 'Coupled boom/dipper control',
                desc: 'Keeping a load vertical during placement requires the operator to coordinate two cylinders simultaneously.',
              },
              {
                title: 'Overridable RCI',
                desc: 'Unlike crane safe-load indicators, the rated capacity warning on most excavators can be muted by the operator.',
              },
              {
                title: 'Steeply variable capacity',
                desc: 'Lift capacity changes dramatically with radius, lift point height and over-front vs over-side orientation.',
              },
              {
                title: 'Track-bearing pressure',
                desc: 'Tracks distribute load very differently from outriggers — soft ground or near-edge work needs careful checking.',
              },
              {
                title: 'Quick-hitch and attachment risk',
                desc: 'Hitches reduce lifting capacity and, if used incorrectly, are a known cause of dropped buckets and loads.',
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
            A proper excavator lift plan addresses each of these risks in writing — load weight,
            radius, capacity check, ground bearing, exclusion zones, slinger/signaller arrangements
            and a documented method everyone has been briefed on. For a longer walk-through of how
            a plan is built, see our guide on{' '}
            <Link href="/blog/excavator-lift-plans-complete-guide" className="text-amber-600 hover:text-amber-700 underline">
              excavator lift plans
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
            What&apos;s included in your excavator lift plan
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Every excavator lift plan we issue is a complete pack — risk assessment, method
            statement, calculations and drawing in one place. It is briefed to your team, signed
            off by an Appointed Person and ready to drop into your CDM file.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Site assessment</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  'Ground bearing capacity evaluation against tracked-machine pressure',
                  'Overhead obstruction identification (lines, structures, scaffolds)',
                  'Underground services check — drains, utilities, voids, tanks',
                  'Access, egress and tracking-route planning',
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
                  'Excavator make, model and configuration cross-checked against load chart',
                  'Lifting attachment certification check (hook, eye, hitch)',
                  'Rated Capacity Indicator (RCI) verification — required over 1 tonne',
                  'Current thorough examination certificate covering lifting duties',
                  'Lifting accessories specification (chains, slings, shackles, WLLs)',
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
                  'Load weight including rigging and any attached fittings',
                  'Centre-of-gravity identification and slinging method',
                  'Lifting radius at pick and at place (worst-case)',
                  'Lift point height calculations (over-front and over-side)',
                  'Ground bearing pressure assessment vs allowable',
                  'Capacity verification against the manufacturer load chart, with deductions',
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
                  'Lift plan drawing (AutoCAD plan and elevation, exclusion zones marked)',
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
          src="/images/services/excavator-lifting-concrete-ring-construction.webp"
          alt="Excavator lowering concrete chamber ring into excavation - LOLER compliant lift planning"
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
                desc: 'Site location, machine make/model, load details, proposed lift positions, any known constraints. A few photos and a GA usually do it.',
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
                desc: 'Drawings, calculations, RA/MS and accessories schedule prepared by a CPCS Appointed Person. One revision included.',
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

      {/* Excavator Types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Excavator types we cover
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            From a 1.5-tonne mini in a back garden to an 80-tonne tracked machine on a Tier 1
            infrastructure job — if it&apos;s rated to lift, we&apos;ll plan the lift.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">360° tracked excavators</h3>
              <p className="text-slate-600 mb-4">
                The typical workhorse — full slew, tracks deployed, lifting from the bucket pin or
                lift eye on the dipper.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Over-front and over-side lifting envelopes</li>
                <li>• Pick-and-carry operations with capacity reductions</li>
                <li>• Boom and dipper arm length variants</li>
                <li>• Counterweight and track-width configurations</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">180° wheeled excavators</h3>
              <p className="text-slate-600 mb-4">
                Wheeled machines bring extra variables — every plan accounts for stability mode and
                stabiliser arrangement.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Stabiliser deployment configurations (front/rear/all-round)</li>
                <li>• Pad bearing pressure on the as-found ground</li>
                <li>• Stability during slew on rubber tyres</li>
                <li>• Working envelope vs travel envelope</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Excavators with quick hitches</h3>
              <p className="text-slate-600 mb-4">
                Quick hitches change capacity and add a recognised dropped-attachment risk — they
                must be specifically planned for.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Hitch certification and weight deduction</li>
                <li>• Lifting eye integrity and rated capacity</li>
                <li>• Manual vs semi-automatic vs fully-automatic</li>
                <li>• Daily check and pre-lift verification</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 10567 Compliance */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">ISO 10567 &amp; BS 7121-1: the standards we work to</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-3xl">
            All our excavator lift plans comply with{' '}
            <span className="font-semibold text-white">ISO 10567:2013</span> (Earth-moving
            machinery — Lift capacity — Hydraulic excavators) and{' '}
            <span className="font-semibold text-white">BS 7121-1</span> (Code of practice for safe
            use of cranes — General). Together these define how rated capacity is calculated and
            how a lift must be planned, supervised and reviewed.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Rated lift capacity</h3>
              <p className="text-slate-300 mb-4">
                Under ISO 10567, the maximum load an excavator can safely lift at a given radius
                and height is the lower of:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  75% of static tipping load
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                  87% of full hydraulic capacity
                </li>
              </ul>
              <p className="text-slate-400 text-sm mt-4">
                Whichever is the smaller — that is the figure that goes on the load chart.
              </p>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Reading the load chart</h3>
              <p className="text-slate-300 mb-4">
                Manufacturer charts only mean what they say if you read them with the right
                deductions. We account for:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• Boom length and dipper (arm) configuration</li>
                <li>• Counterweight fitted on the day</li>
                <li>• Track or stabiliser width (extended vs retracted)</li>
                <li>• Over-front vs over-side orientation</li>
                <li>• Quick hitch, lifting eye, and rigging weight</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-amber-400 font-medium">
            Result: accurate capacity assessments — not conservative guesswork that artificially
            limits the operation, and not optimistic shortcuts that put people at risk.
          </p>
        </div>
      </section>

      {/* When You Need Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            When do you need an excavator lift plan?
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl">
            Under LOLER 1998 Regulation 8, every lifting operation must be properly planned by a
            competent person. For excavator lifting, a written lift plan is needed when any of the
            following apply:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Lifting loads over 500 kg',
              'Lifting near overhead power lines or structures',
              'Lifting in confined spaces or restricted areas',
              'Tandem lifts using more than one machine',
              'Lifting over personnel or occupied areas',
              'Complex or non-routine lifts',
              'Lifts using a quick hitch or non-standard attachment',
              'Working close to excavations or trench edges',
              'When specified by your principal contractor',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg border border-slate-100">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <p className="mt-8 text-slate-600 italic">
            Even where a routine generic RAMS would do, having a documented lift plan demonstrates
            due diligence under LOLER and gives the lifting team something concrete to brief against.
            For more detail, see{' '}
            <Link href="/blog/when-do-you-need-lift-plan" className="text-amber-600 hover:text-amber-700 underline">
              when do you need a lift plan
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Lift Supervisor — when a CPCS A62 is required (excavator) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-14">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                When is a lift supervisor required for an excavator lift?
              </h2>
              <div className="prose prose-lg max-w-none text-slate-600 space-y-4">
                <p>
                  Every excavator lifting operation must be supervised. The moment an excavator
                  lifts and places a load on slings, chains or a lifting eye it is lifting equipment
                  under LOLER, and the lift has to be controlled on site. The real question is
                  whether that supervisor must be a{' '}
                  <strong>separate, dedicated person holding CPCS A62</strong> (or the NPORS
                  equivalent), or whether the role can be combined with another.
                </p>
                <p>
                  It&apos;s the <strong>lift category</strong> — basic, intermediate or complex —
                  that decides. Your{' '}
                  <Link href="/services/appointed-person" className="text-amber-600 hover:text-amber-700 underline">
                    CPCS Appointed Person (A61)
                  </Link>{' '}
                  sets the category from the risk assessment using the Complexity Index
                  (environment × load), and the higher it is, the more independent the supervision
                  has to be.
                </p>
              </div>
            </div>
            <div>
              <img
                src="/images/services/excavator-lift-supervisor-overseeing-uk.webp"
                alt="A construction supervisor in hi-vis and hard hat overseeing a 360° excavator on a UK construction site — an excavator lifting operation that must be planned and supervised under LOLER and BS 7121"
                width="1600"
                height="899"
                loading="lazy"
                className="rounded-xl shadow-sm w-full h-auto"
              />
            </div>
          </div>

          {/* Category cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: 'Basic',
                tag: 'Combined role allowed',
                headerClass: 'bg-emerald-600',
                headText: 'text-white',
                situation:
                  'Known-weight load with designated top lifting points and a central centre of gravity; the operator has clear sight of the load path; the load is lifted to and from the ground; no proximity hazards.',
                requirement:
                  'A separate supervisor is not necessarily required. The role may be combined with the slinger/signaller — or the operator self-supervising — within limits set by the Appointed Person, provided that person is competent to do so.',
              },
              {
                level: 'Intermediate',
                tag: 'Separate A62 often',
                headerClass: 'bg-amber-500',
                headText: 'text-slate-900',
                situation:
                  'Load of estimated weight or centre of gravity, or without designated lifting points; or the load is placed over an obstruction where the operator may not have a clear sight of the landing area.',
                requirement:
                  'Often yes — a separate lift supervisor may be required. The Appointed Person decides from the risk assessment.',
              },
              {
                level: 'Complex',
                tag: 'Dedicated A62 required',
                headerClass: 'bg-rose-600',
                headText: 'text-white',
                situation:
                  'Estimated weight and centre of gravity, no designated lifting points, or a load that contains fluids, is fragile or is unstable when landed; or placed without line of sight and near proximity hazards such as scaffolding or overhead power lines.',
                requirement:
                  'A dedicated, separately-appointed lift supervisor is mandatory. The roles must not be combined.',
              },
            ].map((cat) => (
              <div
                key={cat.level}
                className="flex flex-col rounded-xl border border-slate-200 bg-white overflow-hidden"
              >
                <div className={`${cat.headerClass} px-6 py-4 flex items-center justify-between`}>
                  <span className={`${cat.headText} text-lg font-bold`}>{cat.level}</span>
                  <span className={`${cat.headText} text-xs font-semibold uppercase tracking-wider opacity-90`}>
                    {cat.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                    Typical excavator lift
                  </p>
                  <p className="text-slate-600 mb-5">{cat.situation}</p>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 mb-2">
                    Lift supervisor requirement
                  </p>
                  <p className="font-medium text-slate-800">{cat.requirement}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Combining roles callout */}
          <div className="mt-10 rounded-xl border border-amber-200 bg-amber-50 p-8">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Can an A40 slinger/signaller supervise a basic excavator lift?
                </h3>
                <p className="text-slate-600 mb-4">
                  On a genuinely basic lift the supervisor role may be combined with the
                  slinger/signaller, so a separate CPCS A62 supervisor is not always required. The
                  A40 card evidences slinging and signalling, not supervision — so combining is only
                  acceptable where all of the following apply:
                </p>
                <ul className="space-y-2 text-slate-600 mb-4">
                  {[
                    'the lift is genuinely basic — known weight, designated top lifting points, a central centre of gravity, clear line of sight, lifted to and from the ground, and no proximity hazards;',
                    'the Appointed Person has reviewed and authorised the combined role;',
                    'the person is assessed as competent to supervise, not only to sling;',
                    'they work within the Appointed Person’s limits and lift plan, and have the authority to stop the lift.',
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-slate-600">
                  The card alone does not make it sufficient — it is the Appointed Person’s
                  competence assessment and sign-off that does. LOLER requires competence, not a
                  specific card, and some principal contractors require an A62 supervisor even on
                  basic lifts, so check the client rules and the lift plan.
                </p>
              </div>
            </div>
          </div>

          {/* The lifting team */}
          <div className="mt-14">
            <h3 className="text-2xl font-bold text-slate-900 mb-3">The excavator lifting team</h3>
            <p className="text-slate-600 mb-8 max-w-3xl">
              The recognised qualification for the supervisor is the CPCS A62 (or NPORS equivalent).
              A card is evidence of training, not a substitute for demonstrated competence, relevant
              excavator-lifting experience and written site authorisation.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  role: 'Appointed Person',
                  card: 'CPCS A61',
                  desc: 'Plans and categorises the lift, selects equipment and accessories, produces the lift plan and holds overall responsibility. May act as supervisor on lower-category lifts, or appoint a separate one.',
                },
                {
                  role: 'Lift supervisor',
                  card: 'CPCS A62',
                  desc: 'Directs the whole lift to the plan and has the authority to stop it. Needs genuine excavator-lifting experience — a crane-only background is not automatically sufficient.',
                },
                {
                  role: 'Excavator operator',
                  card: 'CPCS / NPORS',
                  desc: 'Trained and competent on the machine type, working in object-handling / lift mode with the rated capacity indicator (RCI) active and the correct lifting point fitted.',
                },
                {
                  role: 'Slinger / signaller',
                  card: 'CPCS A40',
                  desc: 'Slings the load and directs machine movement. On a basic lift this person may also be the lift supervisor — if competent and authorised by the Appointed Person.',
                },
              ].map((r) => (
                <div key={r.role} className="rounded-xl border border-slate-200 bg-white p-6">
                  <div className="inline-flex items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                    {r.card}
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">{r.role}</h4>
                  <p className="text-sm text-slate-600">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lift Plan Checking CTA */}
      <section className="py-16 bg-amber-500 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Already got a plan? We&apos;ll check it.</h2>
              <p className="text-slate-800 max-w-2xl">
                Independent Appointed Person review of subcontractor excavator lift plans —
                load-chart interpretation, ground bearing, slinging arrangement, exclusion zones
                and method. We tell you exactly what is missing and what needs amending before
                anyone goes near a load.
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
            Why contractors send their excavator lifts to us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Specialist, not generalist',
                desc: 'Lift planning is the whole business — not a sideline of a generalist H&S consultancy. Our Appointed Person has produced and signed off thousands of plans.',
              },
              {
                title: 'CPCS Appointed Person (A61)',
                desc: 'Plans are prepared by a current CPCS A61 cardholder, meeting the BS 7121-1 competence requirement for planning lifting operations.',
              },
              {
                title: 'Tier 1 contractor approved',
                desc: 'Trusted on live projects by leading UK contractors including Wates, Caddick and GMI — our plans are written to pass main-contractor scrutiny first time.',
              },
              {
                title: 'NEBOSH Diploma · CertIOSH · MIIRSM · TIFSM',
                desc: 'Construction-specific NEBOSH National Diploma, CertIOSH (Certified IOSH member), MIIRSM and TIFSM — the planning is grounded in proper risk assessment, not just box-ticking.',
              },
              {
                title: 'Fixed-fee, fast turnaround',
                desc: 'Quote in 4 working hours, plan in 24–48. No hourly drift, no surprise add-ons. One revision included as standard.',
              },
              {
                title: 'Software-enhanced accuracy',
                desc: 'AutoCAD for the lift drawing, LICCON and 3D Lift Plan for capacity modelling — output that looks the part and stands up to review.',
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
            Excavator lift plan FAQs
          </h2>

          <div className="space-y-6 max-w-4xl">
            {[
              {
                q: 'Can any excavator be used for lifting?',
                a: "Only excavators designed and equipped for lifting should be used. The machine needs a certified lifting point (hook on the bucket pin, or quick-hitch with lifting eye), a Rated Capacity Indicator (RCI) where capacity exceeds 1 tonne, a current thorough examination certificate that explicitly covers lifting duties, and a manufacturer's lifting capacity chart for the configuration on site.",
              },
              {
                q: "What's the difference between digging capacity and lifting capacity?",
                a: 'Digging capacity is bucket breakout force in the curl direction — useful for telling you how hard the machine can dig. Lifting capacity is the maximum suspended load the machine can safely handle at a given radius and lift point height, derived from ISO 10567 (75% tipping load or 87% hydraulic, whichever is lower). They are completely different measurements; you cannot use one to derive the other.',
              },
              {
                q: 'Do I need a lift plan for every excavator lift?',
                a: 'LOLER 1998 requires every lifting operation to be properly planned by a competent person. For routine, low-risk lifts a generic RAMS may be enough. As soon as additional hazards exist — overhead services, exclusion of other operatives, complex or oddly-shaped loads, tandem lifts, exposed edges, or anything specified by your principal contractor — a specific written lift plan is needed.',
              },
              {
                q: 'How fast can you produce an excavator lift plan?',
                a: 'For a typical single-machine lift we issue a quote within 4 working hours of receiving your enquiry, and deliver the finished plan within 24–48 working hours. Urgent and same-day work is accommodated where possible — please call to confirm.',
              },
              {
                q: 'Do you visit site, or can the plan be done remotely?',
                a: "Most excavator lift plans are produced remotely from the GA, photos, machine specs and load details you provide. Site visits are arranged when the lift is high-risk, in a complex environment, or specifically requested by the principal contractor. We'll tell you up-front which one your job needs.",
              },
              {
                q: 'How long is an excavator lift plan valid?',
                a: 'A lift plan covers the specific lift or series of lifts it was prepared for, so long as the conditions on site stay the same. If the machine, attachments, load, location or ground conditions change materially — even just a swap from a 30-tonner to a 35-tonner — the plan must be reviewed and updated by a competent person before the lift goes ahead.',
              },
              {
                q: 'Can I use the same lift plan on different sites?',
                a: 'No. Each lift plan is site-specific. Ground conditions, obstructions, exclusion zones and access will differ between sites, so the plan must be reassessed for the new location. Generic templates do not satisfy LOLER Regulation 8.',
              },
              {
                q: 'Will the plan be accepted by my principal contractor?',
                a: 'Yes — our plans are written to the standard expected by Tier 1 main contractors including Wates, Caddick and GMI, and routinely pass first-time review. If a specific reviewer does come back with comments, we handle the back-and-forth as part of the fixed fee.',
              },
              {
                q: 'What is ISO 10567 and why does it matter?',
                a: 'ISO 10567:2013 (Earth-moving machinery — Lift capacity — Hydraulic excavators) defines how rated lift capacity is calculated and presented on manufacturer load charts. Reading those charts correctly — and applying the right deductions for hitches, slings and out-of-level conditions — is fundamental to a safe excavator lift.',
              },
              {
                q: 'Is an excavator lifting plan the same as an excavator lift plan?',
                a: 'Yes. "Excavator lifting plan" and "excavator lift plan" are the same document — different wording for the written plan that covers lifting with an excavator. Whenever an excavator handles a suspended load on slings, chains or a lifting eye instead of digging, LOLER 1998 requires that plan, and we prepare it to ISO 10567 and BS 7121.',
              },
              {
                q: 'Do you cover the whole of the UK?',
                a: 'Yes. We work with contractors right across the UK from our base in Warrington, Cheshire. Remote desk-based plans can be issued anywhere in the country; site visits and follow-up briefings are arranged when needed.',
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

      {/* DIY templates callout */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Prefer to plan a straightforward lift yourself?</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              For simple, low-risk lifts you can start from our free, CPA/SFPSG-compliant{' '}
              <Link href="/resources/excavator-lift-plan-templates" className="text-amber-600 font-semibold underline">
                excavator lift plan template
              </Link>{' '}
              and risk assessment — built around CIG 0801, ready to adapt for your site. For complex,
              tandem, blind or near-capacity lifts, let us write it for you.
            </p>
            <Link
              href="/resources/excavator-lift-plan-templates"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-xl font-semibold transition"
            >
              Get the free excavator lift plan template →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — visible Q&A mirroring the FAQ schema above, so the answers
          appear on the page (PAA / featured-snippet capture) and the rendered
          copy stays in sync with the structured data it is generated from. */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Excavator lift plans — frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div
                key={item.name}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 sm:p-7"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{item.name}</h3>
                <p className="text-slate-300 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social proof (Jul 2026): verbatim client quote from /testimonials,
              placed beside the enquiry form — one strong quote next to the form
              measurably lifts submissions. */}
          <figure className="mb-8 bg-slate-800/40 border-l-4 border-amber-400 rounded-r-2xl p-6">
            <blockquote className="text-gray-300 italic leading-relaxed">
              &ldquo;Their thorough scrutiny of lifting documentation, rapid turnaround times and clear understanding of LOLER and wider UK regulatory requirements have significantly strengthened our safe-system-of-work processes and provided the project with a high level of confidence and operational assurance.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="text-white font-semibold">Andrew Pryce</span>
              <span className="text-gray-400"> — QHSE Manager, Sunel Group</span>
              <a href="/testimonials" className="text-amber-400 hover:text-amber-300 ml-2">More testimonials →</a>
            </figcaption>
          </figure>
          <InlineQuoteForm
            serviceName="Excavator Lift Plans"
            heading="Get a quote for your excavator lift plan"
          />
        </div>
      </section>

      <RelatedServices currentSlug="excavator-lift-plans" />

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Send the brief, get the plan</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            From £200 + VAT — fixed fee, no hourly drift. We&apos;ll come back to you the same
            working day.
          </p>

          <div className="bg-slate-800 p-8 rounded-xl max-w-2xl mx-auto mb-8 text-left">
            <h3 className="font-semibold mb-4 text-center">What we need from you:</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Site location and a GA / sketch layout</li>
              <li>• Excavator make, model, and configuration on site</li>
              <li>• Load details — weight, dimensions, lift points</li>
              <li>• Proposed pick and place positions</li>
              <li>• Any known hazards (services, edges, overhead lines)</li>
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
              { href: '/services/telehandler-lift-plans', title: 'Telehandler Lift Plans' },
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
              We deliver excavator lift plans UK-wide. Plans are produced remotely from Warrington; site visits are scheduled where the work requires it. Pick your nearest city or call <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">07803 808093</a> to discuss your project.
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
