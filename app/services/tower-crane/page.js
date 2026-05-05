import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  Calendar,
  FileCheck,
  Phone,
  Shield,
  Clock,
  ShieldCheck,
  PhoneCall,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Tower Crane Contracts UK | Appointed Person & 8-Weekly Audits',
  description:
    'Ongoing tower crane Appointed Person contracts under BS 7121-1 and LOLER 1998. 8-weekly audits, lift plan review, on-call AP support and full documentation pack. Tier 1 contractor approved.',
  keywords: [
    'tower crane contract',
    'tower crane appointed person',
    'tower crane AP',
    'BS 7121 tower crane',
    'LOLER tower crane',
    'tower crane audit',
    'tower crane lift plan',
    'CPCS A61 tower crane',
  ],
  alternates: { canonical: 'https://www.rmtsafetysolutions.com/services/tower-crane' },
  openGraph: {
    title: 'Tower Crane Contracts UK | Appointed Person & 8-Weekly Audits',
    description:
      'Ongoing tower crane Appointed Person contracts. 8-weekly audits, lift plan review, on-call AP support and full documentation pack.',
    url: 'https://www.rmtsafetysolutions.com/services/tower-crane',
    images: ['/images/residential-tower-crane.webp'],
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tower Crane Compliance Contracts',
  description:
    'Ongoing Appointed Person contracts for tower crane operations with 8-weekly audits, lift plan review, documentation management and on-call AP support. LOLER 1998 and BS 7121-1 compliance for UK construction sites.',
  provider: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.rmtsafetysolutions.com/#business',
    name: 'RMT Solutions Ltd',
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Tower Crane Appointed Person Contract',
  url: 'https://www.rmtsafetysolutions.com/services/tower-crane',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    description: 'Contract pricing scoped to project duration, crane count and audit cadence. Quote within 4 working hours.',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tower Crane Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: '8-Weekly Compliance Audits' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Crane Documentation Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'On-Call Appointed Person Support' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lift Plan Review and Approval' } },
    ],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a tower crane Appointed Person contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A tower crane Appointed Person (AP) contract is an ongoing engagement where an external CPCS A61 Appointed Person takes responsibility for planning lifting operations, auditing crane operations and managing compliance documentation throughout the lifetime of one or more tower cranes on a project. It typically includes 8-weekly site audits, lift plan review and on-call AP support for non-routine lifts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should tower cranes be audited?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'BS 7121-1 requires planned, recorded audits of tower crane operations. Industry best practice is an 8-weekly cycle through the project lifetime, with additional audits triggered by significant change — new operators, new lift types, new adjacent activities, or following any incident or near miss.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do tower cranes need a lift plan for every lift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every lifting operation must be planned under LOLER 1998 regulation 8, but tower crane planning is usually handled in three layers: a generic site lift plan covering routine repetitive lifts (materials in, formwork around, kit movements), specific lift plans for any operation outside the generic envelope, and tandem or specialist plans for complex operations.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between a tower crane LOLER inspection and an AP audit?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A LOLER thorough examination is a statutory engineering inspection of the crane itself, carried out by a competent examiner every 6 to 12 months depending on duty. An AP audit is a planning and compliance review of how lifting operations are being conducted — paperwork, lift plans, briefings, supervision, slinger competence, communications — and it sits alongside, not in place of, LOLER thorough examination.',
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can a non-routine lift plan be turned around mid-contract?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For contracted clients, non-routine lift plans are typically issued within 24 hours of receiving the brief, weights, drawings and lifting accessory information. Tandem lifts, contract lifts and unusually complex picks may take 3–5 working days because they need engineering checks against the manufacturer load chart and an independent review.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a tower crane contract priced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tower crane contracts are priced on a quote-only basis because every project differs in length, crane count, audit frequency, level of on-call support and documentation scope. Typical drivers are project duration, number of cranes, complexity of the lifts, and whether the client wants the AP to also act as Lifting Supervisor on tandem operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens during an 8-weekly audit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Appointed Person attends site, verifies operator and slinger/signaller competence, reviews LOLER and weekly inspection records, checks lifting accessories, walks the exclusion zones and communications, samples recent lift plans against actual operations and reviews the schedule of common lifts. The visit closes with a written audit report covering findings, corrective actions and a deadline for closure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you cover sites with multiple tower cranes or shared airspace?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Multi-crane sites need a coordinated lifting strategy covering anti-collision, slewing priorities, shared exclusion zones, pour windows and concurrent activity rules. We write the multi-crane management plan, audit it on the 8-weekly cycle and review specific lift plans where two or more cranes share airspace.',
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
      name: 'Tower Crane Contracts',
      item: 'https://www.rmtsafetysolutions.com/services/tower-crane',
    },
  ],
}

export default function TowerCranePage() {
  const heroPills = [
    { icon: Clock, label: 'Quote in 4 working hours' },
    { icon: ShieldCheck, label: 'CPCS A61 Appointed Person' },
    { icon: PhoneCall, label: 'On-call AP support included' },
  ]

  const trustBadges = [
    '35+ years lifting experience',
    'CPCS A61 Appointed Person',
    'NEBOSH Diploma · Grad IOSH',
    'UK-wide coverage',
  ]

  const contractIncludes = [
    {
      icon: Calendar,
      title: '8-weekly compliance audits',
      description:
        'Planned, recorded audits of operator competence, slinger/signaller competence, paperwork, lift plans, exclusion zones and communications. Each visit closes with a written report and corrective action deadlines.',
    },
    {
      icon: FileCheck,
      title: 'Documentation management',
      description:
        "We hold and version-control your tower crane LOLER certificates, weekly inspection sheets, accessory registers, generic lift plans and AP appointment letters — all in one place, ready for client or HSE scrutiny.",
    },
    {
      icon: Phone,
      title: 'On-call AP support',
      description:
        'Direct line to your named Appointed Person for non-routine lifts, design changes, near misses, incidents and external scrutiny. We pick up the phone — no ticket queue.',
    },
    {
      icon: Shield,
      title: 'Lift plan review & approval',
      description:
        'Specific lift plans submitted by trades, demolition contractors and specialist subcontractors are reviewed against the generic site plan envelope and signed off (or returned with comments) before any lift goes ahead.',
    },
  ]

  const auditChecklist = [
    'Tower crane operator competency verification',
    'Slinger/signaller competency checks',
    'Crane documentation review (LOLER, insurance, maintenance)',
    'Weekly inspection records',
    'Lifting accessory inspection and certification',
    'Safe systems of work review',
    'Exclusion zone compliance',
    'Communication arrangements',
    'Emergency procedures',
    'Schedule of common lifts review',
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Project scope & AP appointment',
      description:
        'Initial site visit, review of the construction programme, crane count and lift profile. We issue the formal AP appointment letter and the generic site lift plan.',
      tone: 'Week 0',
    },
    {
      number: '02',
      title: 'Erection sign-off & generic plan briefed',
      description:
        'AP attends erection or commissioning, signs off the handover paperwork, briefs the generic plan to the lifting team and seeds the audit schedule.',
      tone: 'Erection',
    },
    {
      number: '03',
      title: '8-weekly audits & on-call support',
      description:
        'Recurring audits, written reports, lift plan reviews and direct on-call AP support across the construction phase. Non-routine lift plans turned around in 24 hours.',
      tone: 'Project life',
    },
    {
      number: '04',
      title: 'Dismantle handover & close-out pack',
      description:
        'AP attends dismantle, signs off the handover and issues a project close-out documentation pack — audit reports, lift plans, accessory register and AP records — for your H&S file.',
      tone: 'Demobilisation',
    },
  ]

  const whyChoose = [
    {
      title: '35+ years of lifting under load',
      body: 'Site-experienced Appointed Person — not a paper-only consultancy. We have run lifting operations on Tier 1 main contractor sites for decades.',
    },
    {
      title: 'NEBOSH Construction Diploma · Grad IOSH',
      body: 'Audits and lift plan reviews are signed off by a chartered-track H&S practitioner with the academic backing to defend decisions to your client and the HSE.',
    },
    {
      title: 'Tier 1 contractor approved',
      body: 'Already pre-qualified and trusted by Wates, Caddick, GMI and other Tier 1 main contractors. Your client probably already knows our name.',
    },
    {
      title: 'Independent lift plan review',
      body: 'Specific lift plans from your trades and lift suppliers are checked against BS 7121-1, ISO 10567 and your generic site plan envelope — no rubber-stamping.',
    },
    {
      title: '17-point review methodology',
      body: 'Every plan we sign off is run through our 17-point review covering load data, crane configuration, ground bearing, accessories and rescue arrangements.',
    },
    {
      title: 'On-call, not a queue',
      body: "Direct line to your named AP. When site changes mid-pour, you don't want to log a ticket — you want a decision.",
    },
  ]

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
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
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Tower Crane Services · BS 7121-1 · LOLER 1998
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              Tower Crane <span className="gradient-text">Compliance Contracts</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Ongoing CPCS A61 Appointed Person contracts for tower crane operations.
              8-weekly audits, lift plan review, on-call AP support and a full documentation
              pack — so your lifting operations stay LOLER and BS 7121 compliant from
              erection through to dismantle.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {heroPills.map((pill) => (
                <span
                  key={pill.label}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/70 border border-slate-700 text-amber-300 text-sm font-semibold"
                >
                  <pill.icon className="w-4 h-4" />
                  {pill.label}
                </span>
              ))}
            </div>

            <Link href="/contact" className="btn-primary inline-flex items-center">
              Discuss your project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {trustBadges.map((b) => (
              <div key={b} className="flex items-center justify-center gap-2 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why a tower crane contract matters */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                Why a contract, not one-off plans
              </span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Tower cranes need an Appointed Person across the whole project — not just at the start
              </h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                LOLER 1998 regulation 8 requires every lifting operation to be properly
                planned by a competent person, appropriately supervised and carried out
                safely. On a tower crane site that is not a single document — it is a
                continuous regime of generic plans, specific plans, audits and competent
                supervision that has to track the live construction programme.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A standing AP contract gives your project one named, accountable
                Appointed Person from erection to dismantle. Lift plan reviews,
                competence checks, exclusion zone management and audit reports run on a
                planned cadence rather than reactively after a near miss.
              </p>
              <p className="text-gray-300 leading-relaxed">
                For more on what a lift plan must contain, see our guide on{' '}
                <Link href="/blog/what-is-a-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                  what a lift plan is
                </Link>{' '}
                and{' '}
                <Link href="/blog/when-do-you-need-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                  when you need one
                </Link>
                .
              </p>
            </div>

            <div className="bg-gradient-to-br from-rose-950/40 to-slate-900 rounded-3xl p-8 border border-rose-900/40">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-rose-400" />
                <h3 className="font-display text-xl font-bold text-white">
                  What goes wrong without a standing AP
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-rose-400 mr-3 mt-0.5 flex-shrink-0" />Lift plans rubber-stamped by suppliers with no independent review</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-rose-400 mr-3 mt-0.5 flex-shrink-0" />Operator and slinger competence not verified on rotation changes</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-rose-400 mr-3 mt-0.5 flex-shrink-0" />LOLER thorough examination dates slipping unnoticed</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-rose-400 mr-3 mt-0.5 flex-shrink-0" />Tandem and out-of-envelope lifts going ahead without a specific plan</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-rose-400 mr-3 mt-0.5 flex-shrink-0" />Exclusion zones quietly eroded as the building rises around the crane</li>
                <li className="flex items-start"><CheckCircle className="w-5 h-5 text-rose-400 mr-3 mt-0.5 flex-shrink-0" />Documentation gaps that can't be defended at HSE or client audit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contract Includes"
            title="Comprehensive Appointed Person Support"
            description="Everything you need to maintain lifting compliance on your tower crane project, scoped around your construction programme."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {contractIncludes.map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How a contract works */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How it works"
            title="From erection sign-off to dismantle close-out"
            description="A predictable, repeatable contract rhythm so your tower crane compliance is never the thing holding up the programme."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">
                  Step {step.number} · {step.tone}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Checklist */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                8-Weekly Audits
              </span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                What we check on every visit
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our 8-weekly audits cover the operational and documentary aspects of your
                tower crane operations to keep you on the right side of LOLER and BS 7121-1.
                Every audit closes with a written report, photographic evidence where
                relevant and a closure deadline against any corrective actions.
              </p>
              <ul className="space-y-3">
                {auditChecklist.map((item) => (
                  <li key={item} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 border border-slate-700/50">
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Contract structure
              </h3>
              <p className="text-gray-400 mb-8">
                Tower crane contracts typically run from erection through to dismantle.
                We scope each contract around the construction programme — crane count,
                audit frequency, lift complexity and the level of on-call support you
                want from the AP.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-gray-300">Typical contract length</span>
                  <span className="text-amber-400 font-semibold">12–18 months</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-gray-300">Audit frequency</span>
                  <span className="text-amber-400 font-semibold">8 weeks</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-gray-300">Non-routine lift plan turnaround</span>
                  <span className="text-amber-400 font-semibold">24 hours</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-gray-300">Tandem / contract lift plan</span>
                  <span className="text-amber-400 font-semibold">3–5 working days</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">On-call AP support</span>
                  <span className="text-amber-400 font-semibold">Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why contractors trust us */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why contractors trust us"
            title="Site-experienced, independent and pre-qualified"
            description="The reasons Tier 1 main contractors and developers ask for us by name on tower crane projects."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((c) => (
              <div
                key={c.title}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-6 h-6 text-amber-400" />
                  <h3 className="font-display text-lg font-bold text-white">{c.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQs"
            title="Tower crane Appointed Person — common questions"
            description="If your question isn't here, ask in the contact form below and we'll come back inside 4 working hours."
          />

          <div className="space-y-4">
            {[
              {
                q: 'What is a tower crane Appointed Person contract?',
                a: 'An ongoing engagement where a CPCS A61 Appointed Person plans, audits and signs off lifting operations on your tower crane project — from erection through to dismantle — including 8-weekly audits, lift plan review and on-call AP support.',
              },
              {
                q: 'How often should tower cranes be audited?',
                a: 'BS 7121-1 requires planned, recorded audits. Industry best practice is 8-weekly through the project life, with extra audits on rotation changes, new lift types, near misses or incidents.',
              },
              {
                q: 'Do tower cranes need a lift plan for every single lift?',
                a: 'Every lifting operation must be planned under LOLER 1998. Routine repetitive lifts are usually covered by a generic site lift plan; out-of-envelope lifts get a specific plan; tandem and complex picks get their own engineered plan.',
              },
              {
                q: "What's the difference between a LOLER inspection and an AP audit?",
                a: 'A LOLER thorough examination is a statutory engineering inspection of the crane itself, every 6–12 months. An AP audit reviews how lifting operations are being conducted — paperwork, plans, briefings, supervision, slingers, communications. The two sit alongside each other.',
              },
              {
                q: 'How fast can a non-routine lift plan be turned around?',
                a: 'For contracted clients we issue non-routine specific plans within 24 hours of receiving the brief, weights, drawings and accessory information. Tandem lifts and contract lifts take 3–5 working days because of engineering checks and independent review.',
              },
              {
                q: 'How is a tower crane contract priced?',
                a: 'Quote-only — every project differs in length, crane count, audit cadence, on-call support and documentation scope. Send the construction programme and basic crane info via the contact form and we will scope and quote within 4 working hours.',
              },
              {
                q: 'What happens during an 8-weekly audit?',
                a: 'AP attends site, verifies operator and slinger competence, reviews LOLER and weekly inspections, checks accessories, walks exclusion zones and communications, samples recent lift plans against actual operations and writes up a closure report with corrective actions.',
              },
              {
                q: 'Can you cover sites with multiple tower cranes?',
                a: 'Yes — multi-crane sites need a coordinated lifting strategy covering anti-collision, slewing priorities, shared exclusion zones and concurrent activity rules. We write the multi-crane management plan and audit it on the same 8-weekly cycle.',
              },
              {
                q: 'Will you act as Lifting Supervisor on tandem lifts as well?',
                a: 'On request, yes. Many clients ask the AP to also act as Lifting Supervisor on tandem and complex lifts so a single competent person owns both planning and execution. This is scoped into the contract up front.',
              },
              {
                q: 'What happens at dismantle?',
                a: 'AP attends dismantle, signs off the handover paperwork and issues a project close-out documentation pack — audit reports, lift plans, accessory register, AP records — for your H&S file and for handover to the client.',
              },
            ].map((f) => (
              <details
                key={f.q}
                className="group bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50"
              >
                <summary className="cursor-pointer flex items-center justify-between font-semibold text-white">
                  <span>{f.q}</span>
                  <ArrowRight className="w-5 h-5 text-amber-400 transition-transform group-open:rotate-90" />
                </summary>
                <p className="mt-4 text-gray-300 text-sm leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName="Tower Crane Contracts"
            heading="Get a quote for tower crane contracts"
          />
        </div>
      </section>

      <RelatedServices currentSlug="tower-crane" />

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Starting a tower crane project?
          </h2>
          <p className="text-gray-300 text-xl mb-8">
            Send the construction programme and basic crane info — we will scope and quote
            inside 4 working hours.
          </p>
          <div className="bg-slate-800/60 rounded-2xl p-6 border border-slate-700/60 text-left max-w-2xl mx-auto mb-10">
            <h3 className="font-display text-lg font-bold text-white mb-3">
              What we need from you
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />Project address, programme dates and main contractor</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />Number, make and model of tower cranes</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />Erection and dismantle dates (if known)</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />Anticipated lift profile — routine, tandem, façade, plant lifts</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />Whether multiple cranes share airspace</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />Audit cadence and on-call support requirements</li>
            </ul>
          </div>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Get in touch
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
