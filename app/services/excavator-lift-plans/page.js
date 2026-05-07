import Image from 'next/image'
import Link from 'next/link'
import { Clock, ShieldCheck, FileCheck, PhoneCall, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Excavator Lift Plans UK | LOLER & ISO 10567 Compliant',
  description: 'CPCS Appointed Person excavator lift plans for 180° and 360° machines. LOLER 1998 and ISO 10567 compliant. Quote within 4 working hours, plan delivered in 24–48 hours. Trusted by Tier 1 contractors.',
  keywords: 'excavator lift plan UK, excavator lifting operations, 360 excavator lift plan, excavator lifting capacity, LOLER excavator lifting, ISO 10567, CPCS appointed person',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/excavator-lift-plans',
  },
  openGraph: {
    title: 'Excavator Lift Plans UK | LOLER & ISO 10567 Compliant',
    description: 'CPCS Appointed Person excavator lift plans for 180° and 360° machines. Quote within 4 working hours, plan delivered in 24–48 hours.',
    url: 'https://www.rmtsafetysolutions.com/services/excavator-lift-plans',
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
    description: 'Fixed-fee excavator lift plan, quoted on application after a brief scoping call.',
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
      name: 'Do you cover the whole of the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We work with contractors right across the UK from our base in Warrington, Cheshire. Remote desk-based plans can be issued anywhere in the country, and site visits are arranged when needed.',
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
            35+ years of construction experience. LOLER 1998 and ISO 10567 compliant plans for
            180° and 360° machines, trusted by Tier 1 UK contractors.
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

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Quote-on-application — fixed fee, no hourly drift. We&apos;ll come back to you the same
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
    </>
  )
}
