import Link from 'next/link'
import { Clock, ShieldCheck, FileCheck, PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Telehandler Lift Plans UK | LOLER Compliant',
  description: 'CPCS Appointed Person telehandler lift plans for suspended loads, work platforms and specialist attachments. LOLER 1998 compliant.',
  keywords: 'telehandler lift plan, telehandler lifting operations, telescopic handler lift plan, telehandler suspended load, A77C, LOLER telehandler, CPCS appointed person',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/telehandler-lift-plans',
  },
  openGraph: {
    title: 'Telehandler Lift Plans UK | LOLER Compliant',
    description: 'CPCS Appointed Person telehandler lift plans for suspended loads, work platforms and specialist attachments. Quote within 4 working hours, plan in 24–48 hours.',
    url: 'https://www.rmtsafetysolutions.com/services/telehandler-lift-plans',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Telehandler Lift Plans',
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
    'Professional LOLER compliant telehandler lift plans prepared by a CPCS Appointed Person. Suspended-load and specialist-attachment lifts planned to BS 7121 principles. Quote within 4 working hours, plan delivered in 24–48 hours.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Lift Planning',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'GBP',
    description: 'Fixed-fee telehandler lift plan, quoted on application after a brief scoping call.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can a telehandler be used as a crane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, but only when the telehandler is fitted with a certified lifting hook attachment, has a current thorough examination certificate covering crane duties, and the operation is planned as a lifting operation under LOLER. The operator also needs the supplementary 'lifting suspended loads' endorsement on top of their A77C/A17 telehandler card.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do telehandler suspended-load lifts need a lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Whenever a telehandler is used to lift a suspended load — anything attached by slings, chains, or a hook — LOLER 1998 requires the operation to be planned by a competent person. Lifts on forks (palletised loads, brick packs) are not classed as crane duties, but any suspended load is and must be planned in writing.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between forks and a hook on a telehandler?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Forks carry the load directly on the carriage as a fixed weight. A hook attachment introduces a suspended load that can swing, lift dynamically, and apply additional forces to the boom. Telehandler load charts for hook duties are different (and usually significantly lower) than for fork duties, and the operation falls under LOLER as a lifting operation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which CPCS card does a telehandler operator need for lifting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The base card is CPCS A77C (telescopic handler 360°) or A17 (telescopic handler all-types). For suspended-load lifting (hook duties) the operator also needs the supplementary 'lifting suspended loads' endorsement, plus a current thorough examination on the lifting attachment.",
      },
    },
    {
      '@type': 'Question',
      name: 'How fast can you produce a telehandler lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For a typical single-machine telehandler lift we issue a quote within 4 working hours of receiving your enquiry, and deliver the finished plan within 24–48 working hours. Urgent and same-day work is accommodated where possible — please call to confirm.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do all telehandler lifts need a lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "LOLER requires every lifting operation to be planned by a competent person. For routine fork-handling of palletised loads a generic risk assessment may be enough. For suspended-load lifting, work-platform use (MEWP), or any lift near operatives, structures or services, a specific written lift plan is needed.",
      },
    },
    {
      '@type': 'Question',
      name: "Can I use the telehandler's load chart instead of a lift plan?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "No. The load chart shows what the machine is rated to lift in ideal conditions — it doesn't constitute a lift plan. A lift plan addresses the specific lift on the specific site, including site conditions, sequencing, hazards, communications and personnel. The load chart is one input to the plan, not the plan itself.",
      },
    },
    {
      '@type': 'Question',
      name: 'What certification does a telehandler need for lifting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The telehandler itself must have a current thorough examination certificate under LOLER. Any attachment used for lifting (jib, hook, work platform) also requires its own thorough examination. Carriage-mounted lifting eyes need a current LOLER report covering the lifting duty, not just the fork-truck duty.',
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
      name: 'Telehandler Lift Plans',
      item: 'https://www.rmtsafetysolutions.com/services/telehandler-lift-plans',
    },
  ],
}

export default function TelehandlerLiftPlansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
            CPCS Appointed Person A61 · LOLER 1998 · BS 7121 principles
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Telehandler Lift Plans, UK</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Quote-on-application telehandler lift plans prepared by a CPCS Appointed Person with
            35+ years of construction experience. LOLER 1998 compliant — covering suspended loads,
            work-platform duties and specialist attachments.
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

      {/* Understanding */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Telehandler lifting — when it&apos;s a LOLER lift</h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p>
              Telehandlers are the most versatile machines on UK construction sites — moving brick
              packs at first fix, then lifting steel and trusses, then offering a work platform for
              high-level repairs. The flip side of that versatility is that the rules change
              depending on what the machine is being used for.
            </p>
            <p>
              Routine fork-handling of palletised loads (brick packs, kit, formwork) is not a LOLER
              lifting operation. As soon as the load is suspended — hook, lifting jib, slings,
              chains — or the machine is being used as a MEWP for personnel, the operation falls
              under LOLER 1998 and needs a written lift plan.
            </p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Suspended loads — hook, jib, sling, chain',
              'Telehandler-mounted work platforms (MEWP)',
              'Placing materials at height (steel, trusses, plant)',
              'Brick grabs, block clamps, rotating attachments',
            ].map((item) => (
              <div key={item} className="bg-slate-50 p-6 rounded-xl">
                <p className="text-slate-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-600">
            For background reading see our guides on{' '}
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What&apos;s in your telehandler lift plan</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            One complete pack — drawing, calcs, RA/MS and accessories schedule, signed off by an
            Appointed Person and ready to drop into your CDM file.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Machine verification',
                items: [
                  'Telehandler make, model and capacity verified',
                  'Attachment certification (jib, hook, MEWP cage)',
                  'Thorough examination certificate covering lifting duty',
                  'Load chart analysis for the duty in question',
                  'Operator card and lifting endorsement check',
                ],
              },
              {
                title: 'Site assessment',
                items: [
                  'Ground condition evaluation under tyre footprint',
                  'Gradient and slope analysis',
                  'Overhead obstruction identification',
                  'Exclusion zone determination',
                  'Access, egress and travel-with-load route',
                ],
              },
              {
                title: 'Lift calculations',
                items: [
                  'Load weight including attachment and rigging',
                  'Required reach at pick and place (worst case)',
                  'Capacity check at every critical point on the chart',
                  'Stability assessment (stabilisers vs travel mode)',
                  'Boom extension and lift-height effects',
                ],
              },
              {
                title: 'Documentation pack',
                items: [
                  'Scale lift plan drawing',
                  'Risk assessment with site-specific control measures',
                  'Method statement with sequence of operations',
                  'Lifting accessories schedule with WLL evidence',
                  'Operator briefing template ready to sign',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-3 text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
                desc: 'Site location, telehandler make/model, attachment, load details, proposed pick/place positions. A photo of the machine and a sketch usually do it.',
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
                desc: 'Drawing, calcs, RA/MS and accessories schedule prepared by a CPCS Appointed Person. One revision included as standard.',
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
        </div>
      </section>

      {/* When You Need */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">When you need a telehandler lift plan</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Suspended loads',
                desc: 'Any lift using a hook, chain, sling or lifting jib — load is suspended, dynamic forces apply, LOLER kicks in.',
              },
              {
                title: 'Personnel lifting (MEWP)',
                desc: 'Telehandler-mounted work platforms used for accessing height. Specific MEWP rating, derated capacity, anchor points.',
              },
              {
                title: 'Near-capacity operations',
                desc: 'Loads approaching the rated capacity at the working radius. Small errors in weight or radius become big problems.',
              },
              {
                title: 'Complex site conditions',
                desc: 'Slopes, restricted access, overhead obstructions, soft ground or proximity to excavations and edges.',
              },
              {
                title: 'Specialist attachments',
                desc: 'Brick grabs, block clamps, rotating forks, plate clamps — different rated capacities, different failure modes.',
              },
              {
                title: 'Principal contractor request',
                desc: 'When your main contractor requires a written lift plan as part of their site-specific RAMS package.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white p-8 rounded-xl border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variable Capacity */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Variable capacity — why telehandler planning is harder than it looks</h2>
          <p className="text-slate-300 mb-8 max-w-3xl text-lg">
            Unlike cranes with relatively predictable load charts, telehandler capacity changes
            dramatically with boom extension, lift height, attachment fitted and machine attitude.
            Reading the chart correctly — and applying the right deductions — is the heart of the job.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold mb-4">Attachment derating</h3>
              <table className="w-full text-sm">
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Standard forks</td>
                    <td className="text-amber-400 text-right">Per load chart</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Crane jib / hook</td>
                    <td className="text-amber-400 text-right">Significant reduction</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Work platform (MEWP)</td>
                    <td className="text-amber-400 text-right">Per MEWP rating</td>
                  </tr>
                  <tr className="border-b border-slate-700">
                    <td className="py-3">Rotating forks</td>
                    <td className="text-amber-400 text-right">Reduced capacity</td>
                  </tr>
                  <tr>
                    <td className="py-3">Block / brick grab</td>
                    <td className="text-amber-400 text-right">Per attachment plate</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-slate-300 mb-4">We calculate capacity at every critical point in your lift:</p>
              <ul className="text-slate-300 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Boom extension and lift-height effects on stability</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Stabiliser vs free-on-wheels mode for the planned radius</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Ground slope and machine attitude</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Attachment-specific derating from the manufacturer&apos;s plate</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>Travel-with-load reductions where pick-and-carry is used</span>
                </li>
              </ul>
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
                Independent Appointed Person review of subcontractor telehandler lift plans —
                load chart interpretation, attachment derating, ground bearing, slinging
                arrangement and method.
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Why contractors send their telehandler lifts to us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Specialist, not generalist',
                desc: 'Lift planning is the whole business — not a sideline of a generalist H&S consultancy. Thousands of plans signed off, including a lot of telehandler suspended-load duties.',
              },
              {
                title: 'CPCS Appointed Person (A61)',
                desc: 'Plans prepared by a current CPCS A61 cardholder, meeting the BS 7121-1 competence requirement for planning lifting operations.',
              },
              {
                title: 'Tier 1 contractor approved',
                desc: 'Trusted by leading UK contractors including Wates, Caddick and GMI — written to pass main-contractor scrutiny first time.',
              },
              {
                title: 'NEBOSH Diploma · CertIOSH · MIIRSM · TIFSM',
                desc: 'Construction-specific NEBOSH National Diploma, CertIOSH (Certified IOSH member), MIIRSM and TIFSM. Risk assessment grounded in proper methodology.',
              },
              {
                title: 'Fixed-fee, fast turnaround',
                desc: 'Quote in 4 working hours, plan in 24–48. No hourly drift, no surprise add-ons. One revision included as standard.',
              },
              {
                title: 'Software-enhanced accuracy',
                desc: 'AutoCAD for the lift drawing, manufacturer-data-driven capacity modelling — output that looks the part and stands up to review.',
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
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Telehandler lift plan FAQs</h2>
          <div className="space-y-6 max-w-4xl">
            {[
              {
                q: 'Can a telehandler be used as a crane?',
                a: "Yes, but only when the telehandler is fitted with a certified lifting hook attachment, has a current thorough examination certificate covering crane duties, and the operation is planned as a lifting operation under LOLER. The operator also needs the supplementary 'lifting suspended loads' endorsement on top of their A77C/A17 telehandler card.",
              },
              {
                q: 'Do telehandler suspended-load lifts need a lift plan?',
                a: 'Yes. Whenever a telehandler is used to lift a suspended load — anything attached by slings, chains or a hook — LOLER 1998 requires the operation to be planned by a competent person. Lifts on forks (palletised loads, brick packs) are not classed as crane duties, but any suspended load is and must be planned in writing.',
              },
              {
                q: "What's the difference between forks and a hook on a telehandler?",
                a: 'Forks carry the load directly on the carriage as a fixed weight. A hook attachment introduces a suspended load that can swing, lift dynamically, and apply additional forces to the boom. Telehandler load charts for hook duties are different (and usually significantly lower) than for fork duties, and the operation falls under LOLER as a lifting operation.',
              },
              {
                q: 'Which CPCS card does a telehandler operator need for lifting?',
                a: "The base card is CPCS A77C (telescopic handler 360°) or A17 (telescopic handler all-types). For suspended-load lifting (hook duties) the operator also needs the supplementary 'lifting suspended loads' endorsement, plus a current thorough examination on the lifting attachment.",
              },
              {
                q: 'How fast can you produce a telehandler lift plan?',
                a: 'For a typical single-machine telehandler lift we issue a quote within 4 working hours of receiving your enquiry, and deliver the finished plan within 24–48 working hours. Urgent and same-day work is accommodated where possible — please call to confirm.',
              },
              {
                q: 'Do all telehandler lifts need a lift plan?',
                a: "LOLER requires every lifting operation to be planned by a competent person. For routine fork-handling of palletised loads a generic risk assessment may be enough. For suspended-load lifting, work-platform use, or any lift near operatives, structures or services, a specific written lift plan is needed.",
              },
              {
                q: "Can I use the telehandler's load chart instead of a lift plan?",
                a: "No. The load chart shows what the machine is rated to lift in ideal conditions — it doesn't constitute a lift plan. A lift plan addresses the specific lift on the specific site, including site conditions, sequencing, hazards, communications and personnel. The load chart is one input to the plan, not the plan itself.",
              },
              {
                q: 'What certification does a telehandler need for lifting?',
                a: 'The telehandler itself must have a current thorough examination certificate under LOLER. Any attachment used for lifting (jib, hook, work platform) also requires its own thorough examination. Carriage-mounted lifting eyes need a current LOLER report covering the lifting duty, not just the fork-truck duty.',
              },
              {
                q: 'Do you cover MEWP / work-platform duty plans?',
                a: 'Yes. Telehandler-mounted work platforms are themselves a lifting operation — separate rated capacity, separate attachment certification, anchor-point requirements, and emergency-rescue planning all need to be covered. We produce work-platform-duty plans alongside or instead of suspended-load plans.',
              },
              {
                q: 'Will the plan be accepted by my principal contractor?',
                a: 'Yes. Our plans are written to the standard expected by Tier 1 main contractors including Wates, Caddick and GMI, and routinely pass first-time review. If a specific reviewer comes back with comments, we handle the back-and-forth as part of the fixed fee.',
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
            serviceName="Telehandler Lift Plans"
            heading="Get a quote for your telehandler lift plan"
          />
        </div>
      </section>

      <RelatedServices currentSlug="telehandler-lift-plans" />

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
              <li>• Site location and a sketch / GA</li>
              <li>• Telehandler make, model, attachment fitted</li>
              <li>• Load details — weight, dimensions, lift points</li>
              <li>• Proposed pick and place, radius and height</li>
              <li>• Any known hazards (services, edges, slopes)</li>
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

      {/* Related */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/services/excavator-lift-plans', title: 'Excavator Lift Plans' },
              { href: '/services/mobile-crane-lift-plans', title: 'Mobile Crane Lift Plans' },
              { href: '/services/lorry-loader-lift-plans', title: 'Lorry Loader Lift Plans' },
              { href: '/services/lift-plan-checking', title: 'Lift Plan Checking' },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="bg-slate-50 hover:bg-slate-100 p-4 rounded-lg text-slate-900 font-medium transition-colors"
              >
                {s.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
