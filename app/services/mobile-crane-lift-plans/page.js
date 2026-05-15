import Image from 'next/image'
import Link from 'next/link'
import { Clock, ShieldCheck, FileCheck, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Mobile Crane Lift Plans UK | LOLER & BS 7121 Compliant',
  description: 'CPCS Appointed Person mobile crane lift plans for all duty types. LOLER 1998 and BS 7121 compliant. Plan delivered in 24–48 hours.',
  keywords: 'mobile crane lift plan UK, crane lift plan, mobile crane lifting operations, BS 7121 lift plan, contract lift planning, CPCS appointed person, tandem lift plan',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/mobile-crane-lift-plans',
  },
  openGraph: {
    title: 'Mobile Crane Lift Plans UK | LOLER & BS 7121 Compliant',
    description: 'CPCS Appointed Person mobile crane lift plans for all duty types. Quote within 4 working hours, plan delivered in 24–48 hours.',
    url: 'https://www.rmtsafetysolutions.com/services/mobile-crane-lift-plans',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Crane Lift Plans',
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
    'Professional LOLER and BS 7121 compliant mobile crane lift plans prepared by a CPCS Appointed Person. Quote within 4 working hours, plan delivered in 24–48 hours.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Lift Planning',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'GBP',
    description: 'Fixed-fee mobile crane lift plan, quoted on application after a brief scoping call.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When do you need a lift plan for a mobile crane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under LOLER 1998 every lifting operation involving a mobile crane must be planned by a competent person. That covers everything from a routine offload to a complex tandem lift — the depth of planning should be proportionate to the risk, but the requirement to plan is universal.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a mobile crane lift plan include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A compliant mobile crane lift plan includes verified load weight, crane selection and configuration with the manufacturer's load chart, percentage utilisation calculation, rigging arrangement and sling angles, ground bearing pressure under outriggers, a site layout drawing with exclusion zones, hazard identification, weather limits, and named personnel — Appointed Person, Lift Supervisor, Crane Supervisor, Operator and Slinger/Signaller.",
      },
    },
    {
      '@type': 'Question',
      name: 'Who is qualified to write a mobile crane lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lift plans for mobile cranes must be prepared by a competent person. Under BS 7121 and CPCS that is typically a CPCS A61 Appointed Person with the training, experience and judgement to plan the specific type of lift involved. For complex or tandem operations, additional engineering input may also be needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can you produce a mobile crane lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a typical single-machine lift we issue a quote within 4 working hours of receiving your enquiry, and deliver the finished plan within 24–48 working hours. Tandem and contract lifts may take 3–5 working days. Same-day work is accommodated where possible — please call to confirm.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a contract lift and a CPA hire?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In a contract lift the crane supplier provides the crane, operator, Appointed Person and full responsibility for the lift. In a CPA hire the supplier provides the crane and operator only — the customer is responsible for planning the lift, providing slingers/signallers and accepting overall responsibility for the lifting operation. We provide AP services and lift planning for CPA hire arrangements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you help with crane selection?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Send us your lift requirements (load, radius, height, site constraints) and we will advise on appropriate crane type, capacity and configuration before you go to hire. It's much cheaper to get the selection right at quotation than to find out the wrong crane has turned up on site.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do you attend site for complex lifts?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Where required we provide on-site Appointed Person presence for complex or critical lifts, including the pre-lift briefing, final checks and supervision of the lifting operation itself. Most jobs are planned remotely from your GA, photos and equipment specs — we will tell you up-front which approach yours needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will the plan be accepted by my principal contractor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our plans are written to the standard expected by Tier 1 main contractors including Wates, Caddick and GMI, and routinely pass first-time review. If a specific reviewer comes back with comments, we handle the back-and-forth as part of the fixed fee.',
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
      name: 'Mobile Crane Lift Plans',
      item: 'https://www.rmtsafetysolutions.com/services/mobile-crane-lift-plans',
    },
  ],
}

export default function MobileCraneLiftPlansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/mobile-crane-lifting-precast-concrete.webp"
            alt="Mobile crane lifting precast concrete beam on construction site - BS 7121 compliant lift planning UK"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
            CPCS Appointed Person A61 · LOLER 1998 · BS 7121
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Crane Lift Plans, UK</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Quote-on-application mobile crane lift plans prepared by a CPCS Appointed Person with
            35+ years of construction experience. LOLER 1998 and BS 7121 compliant — from routine
            offloads through to complex tandem and contract lifts.
          </p>

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

      {/* Lift Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Mobile crane lift planning under BS 7121
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl">
            BS 7121-1 (Code of practice for safe use of cranes) recognises three categories of
            mobile crane lift. The depth of planning should match the category — but every lift
            still needs to be planned in writing.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-emerald-500 bg-emerald-50 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Basic lifts</h3>
              <p className="text-slate-700">
                Routine, well-within-capacity lifts with no additional hazards. Can be planned by a
                competent crane operator with appropriate training.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 bg-amber-50 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Intermediate lifts</h3>
              <p className="text-slate-700">
                Lifts with one or more complicating factors — restricted access, blind lifts,
                proximity to people or structures. Need a competent lift planner with knowledge of
                the specific hazards.
              </p>
            </div>
            <div className="border-l-4 border-rose-500 bg-rose-50 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Complex lifts</h3>
              <p className="text-slate-700">
                Tandem operations, lifts requiring engineering assessment, novel methods, or work
                near live infrastructure. Must be planned by an Appointed Person with relevant
                expertise.
              </p>
            </div>
          </div>

          <p className="mt-8 text-slate-600">
            We plan lifts across all three categories — and if you&apos;re not sure which yours
            falls into, that&apos;s the first thing we&apos;ll tell you. For background reading see{' '}
            <Link href="/blog/what-is-a-lift-plan" className="text-amber-600 hover:text-amber-700 underline">
              what is a lift plan
            </Link>{' '}
            and{' '}
            <Link href="/blog/when-do-you-need-lift-plan" className="text-amber-600 hover:text-amber-700 underline">
              when do you need a lift plan
            </Link>
            .
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            What&apos;s included in your mobile crane lift plan
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Every plan we issue is a complete, briefable pack — drawing, calculations, RA/MS and
            accessories schedule in one place, signed off by an Appointed Person and ready to drop
            into your CDM file.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Crane selection &amp; verification</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  'Capacity at required radius and lift point height',
                  'Configuration: main boom, luffing jib, fly, extensions',
                  'Counterweight specification and matching',
                  'Outrigger pad load calculation vs ground bearing capacity',
                  'Percentage utilisation against project threshold',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Load assessment</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  'Verified load weight (with rigging)',
                  'Centre of gravity identification and slinging method',
                  'Lifting point identification and integrity',
                  'Rigging arrangement design (chains/round slings/spreader)',
                  'Sling angles, WLL evidence and reduction factors',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Site assessment</h3>
              <ul className="space-y-3 text-slate-600">
                {[
                  'Ground condition evaluation against outrigger loads',
                  'Outrigger pad positioning and bog mat strategy',
                  'Overhead clearances and structures',
                  'Underground services and voids',
                  'Access route, set-up and decommissioning sequence',
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
                  'Lift plan drawing (AutoCAD plan and elevation, exclusion zones)',
                  'Duty chart extract showing the selected configuration',
                  'Risk assessment and method statement',
                  'Lifting accessories schedule with WLL evidence',
                  'Pre-lift checklist and toolbox-talk record',
                  'Briefing template ready for Lift Supervisor / Operator / Slinger sign-off',
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

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works — and how fast</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Quote-on-application, fixed fee, no hourly drift. Send the brief and we&apos;ll come
            back to you the same working day.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'You send the brief',
                desc: 'Site location, crane and load details, proposed pick/place positions, any known constraints. A GA and a few photos usually do it.',
                badge: '5-min job',
              },
              {
                step: '2',
                title: 'We quote',
                desc: 'Fixed-fee quote returned within 4 working hours, with a clear scope, delivery date and a recommended crane configuration if needed.',
                badge: '≤ 4 hrs',
              },
              {
                step: '3',
                title: 'Plan produced',
                desc: 'Drawings, calcs, RA/MS and accessories schedule prepared by a CPCS Appointed Person. One revision included as standard.',
                badge: '24–48 hrs',
              },
              {
                step: '4',
                title: 'Briefing & sign-off',
                desc: 'Plan issued in PDF + editable formats. We support your team through briefing and any reviewer queries — no extra charge.',
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
            Tandem and contract lifts may take 3–5 working days. Urgent or same-day work is
            accommodated where possible — call{' '}
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Mobile crane types we cover</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">All-Terrain cranes</h3>
              <p className="text-slate-600 mb-4 text-sm">
                The default mobile crane on UK sites. Liebherr, Tadano/Demag, Grove, Terex — all
                manufacturers and capacities planned.
              </p>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>• Telescopic main boom and luffing jibs</li>
                <li>• Up to 1,200 t and beyond</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Rough-Terrain cranes</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Pick-and-carry on unprepared ground. Capacity reductions when mobile and ground
                conditions are critical.
              </p>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>• Travel-with-load assessments</li>
                <li>• Off-road ground bearing checks</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Crawler cranes</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Heavy lifts and long-term site presence. Track bearing pressure calcs and
                assembly/disassembly planning included.
              </p>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>• Track bearing across the full envelope</li>
                <li>• Build-up / break-down lift plans</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Mobile self-erecting</h3>
              <p className="text-slate-600 mb-4 text-sm">
                Self-erecting and city-class mobile tower cranes. Slewing radius, outrigger loading
                and full working envelope planning.
              </p>
              <ul className="text-slate-600 space-y-1 text-sm">
                <li>• Working envelope vs neighbours</li>
                <li>• Erection and out-of-service config</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tandem & multi-crane */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Tandem &amp; multi-crane operations</h2>
          <p className="text-slate-300 mb-8 max-w-3xl text-lg">
            Some lifts simply cannot be done with one crane. Tandem and multi-crane operations are
            BS 7121-1 complex lifts and demand engineered planning — share-of-load analysis, sling
            geometry, synchronised motion and a much sharper supervision regime.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Tandem lift planning</h3>
              <p className="text-slate-300 mb-4">When two cranes share a single load:</p>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-white">Load distribution</strong> — centre of gravity, share-of-load calcs, sling geometry design</li>
                <li><strong className="text-white">Crane selection</strong> — matched capacity at the working radii, similar slew speeds, comparable boom angles</li>
                <li><strong className="text-white">Coordination</strong> — communications protocol, synchronised motion procedure</li>
                <li><strong className="text-white">Supervision</strong> — enhanced safety factors, dedicated Lift Supervisor, briefing of all operatives</li>
              </ul>
            </div>

            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-4">Multi-crane operations</h3>
              <p className="text-slate-300 mb-4">When multiple cranes work in proximity (but not on the same load):</p>
              <ul className="text-slate-300 space-y-2">
                <li><strong className="text-white">Clash analysis</strong> — boom-sweep envelopes, load paths, sequencing to avoid conflict</li>
                <li><strong className="text-white">Coordination</strong> — shared comms, movement priorities, who has right of way</li>
                <li><strong className="text-white">Out-of-service</strong> — wind tip-back direction and parking arrangements</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Lift vs CPA Hire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Contract lift vs CPA hire</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl">
            Knowing which arrangement you&apos;re actually buying is fundamental to who carries
            responsibility on the day.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-8 rounded-xl border border-amber-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contract lift</h3>
              <p className="text-slate-600 mb-4">The crane supplier provides:</p>
              <ul className="text-slate-700 space-y-2 mb-4">
                <li>• The crane</li>
                <li>• The operator</li>
                <li>• The Appointed Person and lift planning</li>
                <li>• Slingers and signallers</li>
                <li>• Full responsibility for the lift</li>
              </ul>
              <p className="text-slate-700 font-medium">
                Single-point accountability. Best when you want the supplier to own the whole
                lifting operation.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">CPA hire</h3>
              <p className="text-slate-600 mb-4">The crane supplier provides crane and operator only. The customer provides:</p>
              <ul className="text-slate-700 space-y-2 mb-4">
                <li>• The Appointed Person and lift planning</li>
                <li>• Slingers and signallers</li>
                <li>• Overall responsibility for the lifting operation</li>
              </ul>
              <p className="text-amber-700 font-medium">
                We provide AP services and lift planning for CPA hire arrangements — including
                on-site supervision where needed.
              </p>
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
                Independent Appointed Person review of subcontractor crane lift plans —
                load-chart interpretation, ground bearing, slinging arrangement, exclusion zones
                and method. We tell you exactly what is missing before anyone goes near a load.
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Why contractors send their crane lifts to us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Specialist, not generalist',
                desc: 'Lift planning is the whole business — not a sideline of a generalist H&S consultancy. The Appointed Person on your job has produced and signed off thousands of plans.',
              },
              {
                title: 'CPCS Appointed Person (A61)',
                desc: 'Plans are prepared by a current CPCS A61 cardholder, meeting the BS 7121-1 competence requirement for planning lifting operations.',
              },
              {
                title: 'Tier 1 contractor approved',
                desc: 'Trusted on live projects by leading UK contractors including Wates, Caddick and GMI — written to pass main-contractor scrutiny first time.',
              },
              {
                title: 'NEBOSH Diploma · CertIOSH · MIIRSM · TIFSM',
                desc: 'Construction-specific NEBOSH National Diploma, CertIOSH (Certified IOSH member), MIIRSM and TIFSM. Planning is grounded in proper risk assessment, not box-ticking.',
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

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Mobile crane lift plan FAQs</h2>

          <div className="space-y-6 max-w-4xl">
            {[
              {
                q: 'When do I need a lift plan for a mobile crane?',
                a: 'Under LOLER 1998 every lifting operation involving a mobile crane must be planned by a competent person. That covers everything from a routine offload to a complex tandem lift — the depth of planning should be proportionate to the risk, but the requirement to plan in writing is universal.',
              },
              {
                q: 'What does a mobile crane lift plan include?',
                a: "A compliant plan includes verified load weight, crane selection and configuration with the manufacturer's load chart, percentage utilisation, rigging arrangement and sling angles, ground bearing pressure under outriggers, a site layout drawing with exclusion zones, hazard identification, weather limits, and named personnel — Appointed Person, Lift Supervisor, Crane Supervisor, Operator and Slinger/Signaller.",
              },
              {
                q: 'Who is qualified to write a mobile crane lift plan?',
                a: 'Lift plans must be prepared by a competent person — under BS 7121 and CPCS that is typically a CPCS A61 Appointed Person with the training, experience and judgement to plan the specific type of lift involved.',
              },
              {
                q: 'How fast can you produce a mobile crane lift plan?',
                a: 'For a typical single-machine lift we issue a quote within 4 working hours and deliver the finished plan in 24–48 working hours. Tandem and contract lifts may take 3–5 working days. Urgent and same-day work is accommodated where possible — please call to confirm.',
              },
              {
                q: 'How far in advance should I order a lift plan?',
                a: 'For standard lifts, 48 hours is usually plenty. Complex or tandem operations are best discussed earlier — ideally at tender stage so crane selection, ground bearing strategy and access are pinned down before you commit.',
              },
              {
                q: 'Can you help with crane selection?',
                a: "Yes. Send us your lift requirements (load, radius, height, site constraints) and we'll advise on appropriate crane type, capacity and configuration before you go to hire. Cheaper to get the selection right at quotation than to find out the wrong crane has turned up on site.",
              },
              {
                q: "What's the difference between contract lift and CPA hire?",
                a: 'In a contract lift the supplier provides the crane, operator, AP and full responsibility. In a CPA hire the supplier provides crane and operator only — the customer is responsible for planning the lift, slingers/signallers and overall responsibility. We provide AP services and lift planning for CPA hire arrangements.',
              },
              {
                q: 'Do you attend site for complex lifts?',
                a: 'Where required we provide on-site Appointed Person presence — pre-lift briefing, final checks and supervision of the lifting operation itself. Most jobs are planned remotely from the GA, photos and equipment specs.',
              },
              {
                q: 'What about crane build-up and break-down?',
                a: 'Crane assembly and disassembly (especially for large mobile cranes and crawlers) are themselves lifting operations and require their own lift plan. We produce build-up / break-down plans alongside the main lift plan when needed.',
              },
              {
                q: 'Will the plan be accepted by my principal contractor?',
                a: "Yes. Our plans are written to the standard expected by Tier 1 main contractors including Wates, Caddick and GMI, and routinely pass first-time review. If a specific reviewer comes back with comments, we handle the back-and-forth as part of the fixed fee — there's no extra charge for revisions on review feedback.",
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
            serviceName="Mobile Crane Lift Plans"
            heading="Get a quote for your mobile crane lift plan"
          />
        </div>
      </section>

      <RelatedServices currentSlug="mobile-crane-lift-plans" />

      {/* CTA */}
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
              <li>• Crane proposed (or ask us to recommend)</li>
              <li>• Load details — weight, dimensions, lift points</li>
              <li>• Pick and place positions, radius and height</li>
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
              { href: '/services/tower-crane', title: 'Tower Crane Contracts' },
              { href: '/services/steel-erection', title: 'Steel Erection Planning' },
              { href: '/services/excavator-lift-plans', title: 'Excavator Lift Plans' },
              { href: '/services/lift-plan-checking', title: 'Lift Plan Checking' },
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
