import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Building2, FileText, ShieldCheck, MapPin, Award, ClipboardCheck } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'CPCS A61 Appointed Person Services UK',
  description:
    'Hire a CPCS A61 Appointed Person for your lifting operations: 35 years of experience, LOLER 1998 and BS 7121 compliant. UK-wide, fast turnaround.',
  keywords: [
    'cpcs a61 appointed person',
    'appointed person',
    'appointed person services',
    'a61 appointed person',
    'cpcs appointed person',
    'appointed person lifting operations',
    'appointed person for lifting operations',
    'who can write a lift plan',
    'lift planning experts',
  ],
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/appointed-person',
  },
  openGraph: {
    title: 'CPCS A61 Appointed Person Services UK',
    description:
      'Hire a CPCS A61 Appointed Person (Reg 40389279) for your lifting operations. 35 years of construction experience, LOLER 1998 and BS 7121 compliant, UK-wide.',
    url: 'https://www.rmtsafetysolutions.com/services/appointed-person',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    images: ['/images/services/appointed-person-reviewing-lift-plan-uk.webp'],
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'CPCS A61 Appointed Person Services',
  description:
    'CPCS A61 Appointed Person services for construction lifting operations — planning lifting operations, selecting equipment, producing and signing off lift plans, and supervising compliance to LOLER 1998 and BS 7121.',
  provider: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.rmtsafetysolutions.com/#business',
    name: 'RMT Solutions Ltd',
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Appointed Person for Lifting Operations',
  url: 'https://www.rmtsafetysolutions.com/services/appointed-person',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a CPCS A61 Appointed Person do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A CPCS A61 Appointed Person takes overall responsibility for the safe planning of a lifting operation under LOLER 1998 Regulation 8 and BS 7121. That means assessing the site and the load, selecting suitable lifting equipment, verifying its capacity, producing the written lift plan, defining exclusion zones and supervision, and appointing and briefing the lift supervisor and slinger/signaller. The Appointed Person owns the plan — not the crane operator and not the site manager.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do you need an Appointed Person?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LOLER 1998 requires every lifting operation to be properly planned by a competent person and appropriately supervised. For crane and construction lifting operations under BS 7121 that competent person is a CPCS A61 Appointed Person. In practice you need one whenever a lift is anything beyond the most routine repetitive operation, and Tier 1 contractors increasingly require a named Appointed Person on every lifting activity as a matter of policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can write a lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lift plan must be prepared by a competent person with the training and experience to plan the operation, select the right equipment and assess the site-specific hazards. For crane and construction lifting that is normally a CPCS A61 Appointed Person. The competence of the person writing the plan matters far more than the template used.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you act as our Appointed Person across the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide Appointed Person services UK-wide, working on a remote-plus-site-visit basis that keeps fees competitive. Lift plans are produced remotely and turned around in 24 to 48 hours, with site attendance scheduled for surveys, complex pre-lift briefings and audits. Same-day site attendance is practical across the North West from our Warrington base.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between an Appointed Person and a lift supervisor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Appointed Person plans the lifting operation and produces the lift plan. The lift supervisor (CPCS A62) carries that plan out on the day, supervising the crew and stopping the lift if conditions change. The Appointed Person appoints and briefs the supervisor, but the two roles are distinct and should not be combined on anything other than the simplest operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I hire an Appointed Person without hiring a crane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — and it is often the most economical route. Crane hire companies typically supply an Appointed Person only as part of a contract lift package. If you already have your machine and operator arranged — under CPA crane hire, or using your own excavator, telehandler or lorry loader — an independent Appointed Person provides exactly the planning competence LOLER requires, with no equipment bundled in and no incentive to sell you a bigger crane.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does an Appointed Person cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RMT Solutions works on fixed fees rather than open-ended day rates: lift plans from £200 with the planning competence included, and site attendance, surveys and audits quoted as fixed prices per visit. For ongoing tower crane contracts we agree a project rate covering plan reviews, audits and named AP cover — so the cost is known before any work starts.',
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
    { '@type': 'ListItem', position: 3, name: 'Appointed Person', item: 'https://www.rmtsafetysolutions.com/services/appointed-person' },
  ],
}

export default function AppointedPersonPage() {
  const duties = [
    'Plan the lifting operation end to end and select suitable lifting equipment',
    'Assess the site — ground conditions, access, overhead and underground services, adjacent activities',
    'Verify equipment capacity against the manufacturer load chart for the exact configuration',
    'Produce the written lift plan and method statement under LOLER 1998 and BS 7121',
    'Define exclusion zones around the swept volume of the load and the supervision arrangements',
    'Appoint and brief the lift supervisor, slinger/signaller and crane operator',
    'Confirm LOLER thorough examination and certification is current for all lifting equipment',
    'Review and sign off the documentation pack for the file and the principal contractor',
  ]

  const whenYouNeed = [
    {
      title: 'Any planned lifting operation',
      description:
        'LOLER 1998 Regulation 8 requires every lifting operation to be planned by a competent person. For crane and construction lifts that competent person is a CPCS A61 Appointed Person.',
    },
    {
      title: 'Tier 1 contractor requirements',
      description:
        'Most main contractors now require a named Appointed Person on every lifting activity. We hold the A61 ticket and the wider safety qualifications to satisfy that requirement.',
    },
    {
      title: 'Ongoing tower crane contracts',
      description:
        'A tower crane on site needs a standing Appointed Person through the lift of the project, with 8-weekly audits and documentation maintenance. That is a dedicated contract we run regularly.',
    },
    {
      title: 'Independent review of someone else’s plan',
      description:
        'Where a subcontractor or crane hire firm provides a lift plan, an Appointed Person can review it against LOLER and BS 7121 before you accept it on your site.',
    },
  ]

  const process = [
    { step: '01', title: 'Enquiry', description: 'Tell us the lifting operation, the site and the programme.' },
    { step: '02', title: 'Quote', description: 'Fixed-price quote within 4 working hours, with the scope agreed up front.' },
    { step: '03', title: 'Plan & appoint', description: 'We plan the operation, produce the lift plan and act as your Appointed Person.' },
    { step: '04', title: 'Support', description: 'On-call AP support, pre-lift briefings and audits through the operation.' },
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
            src="/images/services/appointed-person-reviewing-lift-plan-uk.webp"
            alt="CPCS A61 Appointed Person reviewing a lift plan on a UK construction site"
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
            <span className="text-gray-300">Appointed Person</span>
          </nav>
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Appointed Person Services
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              CPCS A61 <span className="gradient-text">Appointed Person</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Under LOLER 1998 every lifting operation must be planned by a competent person. We provide
              that competent person — a CPCS A61 Appointed Person with 35 years in UK construction —
              planning your lifting operations, producing the lift plan and signing it off to LOLER 1998
              and BS 7121. UK-wide, with a quote inside 4 working hours.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* What an AP does + credentials */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                The Role
              </span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                What a CPCS A61 Appointed Person does
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                The Appointed Person carries overall responsibility for the safe planning of a lifting
                operation under LOLER 1998 Regulation 8 and BS 7121 — not the crane operator, and not
                the site manager. For the full background, see our guide to the{' '}
                <Link href="/blog/cpcs-appointed-person-guide" className="text-amber-400 hover:text-amber-300 underline">
                  CPCS A61 Appointed Person role
                </Link>{' '}
                and{' '}
                <Link href="/blog/when-do-you-need-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                  when you need a lift plan
                </Link>
                .
              </p>
              <ul className="space-y-4">
                {duties.map((item) => (
                  <li key={item} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 border border-slate-700/50">
              <Award className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                A genuinely qualified Appointed Person
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                RMT Solutions is run by Ricky Marsh, a CPCS A61 Appointed Person (registration 40389279)
                with 35 years of UK construction experience. The A61 ticket is backed by a NEBOSH National
                Diploma, CertIOSH, MIIRSM and TIFSM — so the person planning your lift holds both the
                lifting competence and the wider health and safety qualifications a principal contractor
                expects to see.
              </p>
              <ul className="space-y-3 mb-6">
                {['CPCS A61 Appointed Person — Reg 40389279', 'NEBOSH National Diploma', 'CertIOSH, MIIRSM, TIFSM', '35 years in UK construction'].map((c) => (
                  <li key={c} className="flex items-start text-gray-300">
                    <ShieldCheck className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about" className="inline-flex items-center text-amber-400 font-semibold hover:text-amber-300 transition">
                More about RMT Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Independent positioning — battle plan phase 2 (Jun 2026).
          The "contract appointed person" SERP is owned by crane hire
          companies who supply an AP only as part of a contract lift.
          Their structural weakness is the conflict of interest and the
          buyer they cannot serve: someone who already has the plant and
          needs only the planning competence. This section owns that
          framing and the "hire an appointed person" intent. */}
      <section className="py-24 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Independent — Not a Crane Hire Upsell
            </span>
            <h2 className="font-display text-4xl font-bold text-white mb-6">
              Hire an Independent Appointed Person
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Most Appointed Person services in the UK are sold by crane hire companies as part of
              a contract lift — the crane, operator and AP come as a package, priced accordingly.
              That is the right product when you want the crane company to carry the lifting risk.
              But if you already have your machine and operator arranged — under CPA crane hire, or
              using your own excavator, telehandler or lorry loader — you do not need the package.
              You need the planning competence.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              As an independent Appointed Person, RMT Solutions has no crane to sell you and no
              hire fleet to keep busy. The advice on equipment selection is impartial, the lift
              plan works with the plant you already have, and the fee is fixed —{' '}
              <Link href="/blog/lift-plan-cost-uk" className="text-amber-400 hover:text-amber-300 underline">
                plans from £200
              </Link>
              , agreed before any work starts. Based in Warrington with same-day site attendance
              across Manchester, Liverpool and the North West, and remote lift planning UK-wide.
            </p>
            <ul className="space-y-3 text-gray-300">
              {[
                'No conflict of interest — independent of all crane hire and plant companies',
                'Works alongside your existing CPA crane hire arrangements',
                'Fixed fees agreed up front, not open-ended day rates',
                'One named, accountable A61 Appointed Person from enquiry to sign-off',
              ].map((point) => (
                <li key={point} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* When you need an AP */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="When You Need One"
            title="When to appoint an Appointed Person"
            description="From a single planned lift to a standing tower crane contract."
          />
          <div className="grid md:grid-cols-2 gap-8">
            {whenYouNeed.map((item) => (
              <article
                key={item.title}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ClipboardCheck className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
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
            title="Appointing your Appointed Person"
            description="A clear route from enquiry to a planned, signed-off lifting operation."
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

      {/* Guide callout — inbound link to the AP blog guide */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <FileText className="w-8 h-8 text-amber-400 flex-shrink-0 mt-1" />
              <div>
                <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2 block">
                  Background reading
                </span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
                  Duties, training and the A61 in detail
                </h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Our{' '}
                  <Link
                    href="/blog/cpcs-appointed-person-guide"
                    className="text-amber-400 hover:text-amber-300 underline"
                  >
                    CPCS A61 Appointed Person guide
                  </Link>{' '}
                  covers the full duties under LOLER 1998 and BS 7121, the training routes to the A61
                  ticket, and exactly when the law requires you to appoint one — useful context before
                  you bring an Appointed Person onto a project.
                </p>
                <Link
                  href="/blog/cpcs-appointed-person-guide"
                  className="inline-flex items-center text-amber-400 font-semibold hover:text-amber-300 transition"
                >
                  Read the guide
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — visible content mirroring the FAQ schema above, so the answers
          appear on the page (Google rewards visible FAQ content and can surface
          it in "People also ask" / featured snippets). Rendered from the same
          faqSchema source so the markup and the visible copy never drift apart. */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Common Questions"
            title="Appointed Person — your questions answered"
            description="The questions UK contractors ask most before appointing a CPCS A61 Appointed Person."
          />
          <div className="space-y-6">
            {faqSchema.mainEntity.map((item) => (
              <article
                key={item.name}
                className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 rounded-2xl p-6 sm:p-8 border border-slate-700/50"
              >
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-300 leading-relaxed">{item.acceptedAnswer.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social proof (Jul 2026): verbatim client quote from /testimonials,
              placed beside the enquiry form — one strong quote next to the form
              measurably lifts submissions. */}
          <figure className="mb-8 bg-slate-800/40 border-l-4 border-amber-400 rounded-r-2xl p-6">
            <blockquote className="text-gray-300 italic leading-relaxed">
              &ldquo;When contractors are unable to provide suitable lift plans themselves, RMT Solutions are willing to produce lift plans for the works, again on a quick turnaround, so that progress of works is not affected. I would highly recommend RMT Solutions to anyone wanting a capable, professional company to work with&hellip;&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="text-white font-semibold">Tom Herd</span>
              <span className="text-gray-400"> — Project Manager, Caddick Construction</span>
              <a href="/testimonials" className="text-amber-400 hover:text-amber-300 ml-2">More testimonials →</a>
            </figcaption>
          </figure>
          <InlineQuoteForm serviceName="Appointed Person" heading="Get a quote for Appointed Person services" />
        </div>
      </section>

      <RelatedServices currentSlug="appointed-person" />

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Need an Appointed Person?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Get a fixed-price quote from a CPCS A61 Appointed Person. We cover lifting operations across
            the UK. Need the plan written for a specific machine? See our{' '}
            <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">
              lift plan writing service
            </Link>{' '}
            or independent{' '}
            <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">
              lift plan checking
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
