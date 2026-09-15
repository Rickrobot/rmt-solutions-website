import Link from 'next/link'
import { Download, ScrollText, ShieldCheck, ArrowRight } from 'lucide-react'
import LiftPlanDecisionTool from '@/components/LiftPlanDecisionTool'
import { COMPLEX_TRIGGERS, CATEGORIES, REJECTION_REASONS } from '@/lib/liftPlanDecision'

/*
 * Why this page exists.
 *
 * Search Console, September 2026: the site takes 167,061 impressions at 1.12%
 * CTR. The question-shaped queries — "do you need a lift plan for every lift",
 * "when planning a lift what is the first thing you should do" — rank at an
 * average position of 6.96 and convert at 0.33%, because Google answers them
 * in an AI Overview and the searcher never arrives. Explaining the answer
 * better does not fix that; the explanation is exactly what is being taken.
 *
 * What an AI Overview cannot hand somebody is a thing that does the work. The
 * four /resources/* template pages run at 2.4–4.3% CTR against that 1.12% site
 * average for precisely this reason. This is the same move applied to the
 * flowchart: the same logic, as a tool rather than a paragraph.
 *
 * The prose below the tool is not filler. It is there so the page still says
 * something to a crawler — and to anyone who would rather read than click —
 * because a page whose entire content is "Step 1 of 3" teaches a search engine
 * nothing and earns no citation.
 */

/* 40 characters. layout.js appends " | RMT Solutions" (16) and holds every
   page to 60 including it. */
export const metadata = {
  title: 'Do I Need a Lift Plan? Free Decision Tool',
  /* 154 characters. The tool is what earns the click — an explanation has
     nothing left to offer on these queries. */
  description:
    'Free decision tool: answer three questions and get the LOLER 1998 answer — basic, standard or complex lift. Built by a CPCS A61 Appointed Person.',
  keywords:
    'do i need a lift plan, when do you need a lift plan, do you need a lift plan for every lift, lift plan decision tool, lift plan checker, is a lift plan required, complex lift definition, basic standard complex lift, LOLER regulation 8, BS 7121 lift categories, lift categorisation',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/lift-plan-decision-tool',
  },
  openGraph: {
    title: 'Do I Need a Lift Plan? Free Decision Tool',
    description:
      'Three questions, and you have the LOLER answer — basic, standard or complex. The BS 7121-1 complex-lift triggers, from a working CPCS A61 Appointed Person.',
    url: 'https://www.rmtsafetysolutions.com/resources/lift-plan-decision-tool',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const BASE = 'https://www.rmtsafetysolutions.com'

/* HowTo rather than FAQPage for the flow itself: it is a procedure with an
   order, and describing it as anything else would be schema that does not match
   the page. The FAQs are marked up separately below. */
const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to decide whether a lifting operation needs a written lift plan',
  description:
    'Categorise a lifting operation under LOLER 1998 Regulation 8 and BS 7121-1 as a basic, standard or complex lift.',
  totalTime: 'PT2M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Establish whether LOLER Regulation 8 applies',
      text: 'Check whether lifting equipment is being used to lift or lower a load — a crane, telehandler, lorry loader, excavator lifting, gantry, hoist, or a MEWP carrying a load. If it is, LOLER 1998 Regulation 8 requires the operation to be properly planned by a competent person.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Check the BS 7121-1 complex-lift triggers',
      text: `Check the operation against the ten complex-lift triggers: ${COMPLEX_TRIGGERS.map((t) => t.label.toLowerCase()).join('; ')}. If any one of them applies, the lift is complex.`,
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Decide whether the lift is routine and repetitive',
      text: 'If no complex trigger applies, ask whether the lift is routine and repetitive — same machine, same load type, same conditions, already covered by a schedule of common lifts. If it is, it is a basic lift. If it is not, it is a standard lift.',
    },
  ],
}

const faqs = [
  {
    q: 'Do you need a lift plan for every lift?',
    a: 'Yes. LOLER 1998 Regulation 8 requires every lifting operation involving lifting equipment to be properly planned by a competent person, appropriately supervised and carried out in a safe manner. Neither requirement is qualified by the size of the load or the value of the job. The question is never whether to plan — only how much detail the operation demands.',
  },
  {
    q: 'What makes a lift complex?',
    a: `A lift is complex if any one of the BS 7121-1 triggers applies: ${COMPLEX_TRIGGERS.map((t) => t.label.toLowerCase()).join('; ')}. One is enough — they are not weighted or scored. A modest load can be a complex lift because of where and how it is being lifted.`,
  },
  {
    q: 'What is the difference between a basic, standard and complex lift?',
    a: 'A basic lift is routine and repetitive, and a generic plan or schedule of common lifts may be used — provided it is reviewed against the actual site first. A standard lift needs a site-specific written lift plan by an Appointed Person, briefed to the whole lifting team before work starts. A complex lift needs a detailed, lift-specific written plan prepared by an Appointed Person with competence appropriate to the lift, commonly CPCS A61 Advanced. A generic plan is never sufficient for a complex lift.',
  },
  {
    q: 'When planning a lift, what is the first thing you should do?',
    a: 'Establish that LOLER Regulation 8 applies and appoint a competent person to plan the operation. Everything else — the load weight, the machine, the radius, the ground — follows from that appointment, because the plan is only valid if the person producing it is competent to produce it.',
  },
  {
    q: 'Is this tool a lift plan?',
    a: 'No. It categorises a lifting operation so you know what level of planning the law expects. It is not a lift plan, not a risk assessment, and it does not replace the judgement of the competent person planning the work. The category is ultimately theirs to assign.',
  },
  {
    q: 'Can a generic lift plan be used?',
    a: 'Only for a basic lift, and only once it has been reviewed against the actual site. A schedule of common lifts is not a lift plan until somebody has stood on the ground and signed it off. For a complex lift a generic plan is never sufficient.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: `${BASE}/resources` },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Lift plan decision tool',
      item: `${BASE}/resources/lift-plan-decision-tool`,
    },
  ],
}

export default function LiftPlanDecisionToolPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* ------------------------------------------------------------ hero */}
      <section className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-12">
          <p className="text-amber-400 font-medium mb-4 text-sm tracking-wider uppercase">
            Free tool — LOLER 1998 &amp; BS 7121-1
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Do I need a lift plan?
          </h1>
          {/* The direct answer first, before any context. It is the honest
              answer, it is the one people are searching for, and leading with
              it is what gets a passage quoted rather than skimmed. */}
          <p className="text-xl text-slate-300 leading-relaxed mb-4">
            Yes — <strong className="text-white">every</strong> lifting operation needs to be
            planned. LOLER 1998 Regulation 8 does not qualify that by the size of the load or
            the value of the job. What changes with the risk is how much plan, and who has to
            write it.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Three questions below will tell you whether yours is a basic, standard or complex
            lift, and what each one requires. It takes about a minute, nothing is stored, and
            there is no sign-up.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ tool */}
      <section className="bg-slate-950 py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <LiftPlanDecisionTool />
        </div>
      </section>

      {/* -------------------------------------------------------- the logic */}
      <section className="bg-slate-950 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-4">
            What LOLER Regulation 8 actually requires
          </h2>
          <blockquote className="border-l-2 border-amber-500 pl-5 text-slate-300 text-lg leading-relaxed mb-4">
            Every employer shall ensure that every lifting operation involving lifting equipment
            is properly planned by a competent person, appropriately supervised, and carried out
            in a safe manner.
          </blockquote>
          <p className="text-slate-400 mb-12 leading-relaxed">
            Note the words: <em className="text-white not-italic font-medium">every lifting
            operation</em>, and <em className="text-white not-italic font-medium">competent
            person</em>. Neither is qualified by the size of the load or the value of the job.
          </p>

          <h2 className="font-display text-3xl font-bold text-white mb-6">
            The ten complex-lift triggers
          </h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            One tick is enough. These are not weighted and there is no score — if any single one
            of them applies, the lift is complex. A modest load can be a complex lift because of
            where and how it is being lifted; the site moves a lift up a category on its own.
          </p>
          <ol className="grid sm:grid-cols-2 gap-3 mb-14">
            {COMPLEX_TRIGGERS.map((t, i) => (
              <li
                key={t.id}
                className="flex items-start gap-3 bg-slate-900/60 border border-slate-800 rounded-xl p-4"
              >
                <span className="text-amber-400 font-bold text-sm flex-none w-5 pt-0.5">
                  {i + 1}
                </span>
                <span className="text-slate-300 text-sm leading-relaxed">{t.label}</span>
              </li>
            ))}
          </ol>

          <h2 className="font-display text-3xl font-bold text-white mb-6">
            Basic, standard and complex — what each one requires
          </h2>
          <div className="space-y-4 mb-14">
            {CATEGORIES.map((c) => (
              <div
                key={c.name}
                className="bg-gradient-to-b from-slate-800/40 to-slate-900/40 border border-slate-700/50 rounded-2xl p-6"
              >
                <h3 className="font-display text-xl font-bold text-amber-400 mb-2">{c.name}</h3>
                <p className="text-slate-500 text-sm mb-3">{c.when}</p>
                <p className="text-slate-300 leading-relaxed">{c.rule}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-3xl font-bold text-white mb-6">
            Three things that get plans rejected
          </h2>
          <p className="text-slate-400 mb-6 leading-relaxed">
            From reviewing lift plans submitted to tier 1 principal contractors — these are the
            three that come back most often.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-14">
            {REJECTION_REASONS.map((r, i) => (
              <div key={r.t} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <span className="text-amber-400 font-bold text-2xl font-display">{i + 1}</span>
                <h3 className="text-white font-semibold mt-2 mb-2 leading-tight">{r.t}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{r.d}</p>
              </div>
            ))}
          </div>

          {/* --------------------------------------------------------- faq */}
          <h2 className="font-display text-3xl font-bold text-white mb-6">
            Questions people ask
          </h2>
          <div className="space-y-3 mb-14">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group bg-slate-900/60 border border-slate-800 rounded-2xl p-5 open:border-slate-700"
              >
                {/* min-h-11 is 44px. These are the only tappable things on the
                    page that were under it on a phone — a 28px accordion row
                    is a miss waiting to happen with a gloved thumb. */}
                <summary className="text-white font-semibold cursor-pointer list-none flex items-start gap-3 min-h-11 py-1.5">
                  <span className="text-amber-400 flex-none transition-transform group-open:rotate-90" aria-hidden="true">
                    ▸
                  </span>
                  {f.q}
                </summary>
                <p className="text-slate-400 mt-3 leading-relaxed pl-6">{f.a}</p>
              </details>
            ))}
          </div>

          {/* ------------------------------------------------------- links */}
          <div className="grid sm:grid-cols-3 gap-4">
            <a
              href="/downloads/lift-plan-decision-flowchart.pdf"
              className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition group"
            >
              <Download className="w-6 h-6 text-amber-400 mb-3" aria-hidden="true" />
              <h3 className="text-white font-semibold mb-1 group-hover:text-amber-400 transition">
                The same thing on one page
              </h3>
              <p className="text-slate-400 text-sm">
                The printable A4 flowchart. Pin it up in the site cabin.
              </p>
            </a>
            <Link
              href="/resources/lift-plan-templates"
              className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition group"
            >
              <ScrollText className="w-6 h-6 text-amber-400 mb-3" aria-hidden="true" />
              <h3 className="text-white font-semibold mb-1 group-hover:text-amber-400 transition">
                Free lift plan templates
              </h3>
              <p className="text-slate-400 text-sm">
                Generic, excavator, telehandler, lorry loader, crane and gantry.
              </p>
            </Link>
            <Link
              href="/services/lift-plans"
              className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition group"
            >
              <ShieldCheck className="w-6 h-6 text-amber-400 mb-3" aria-hidden="true" />
              <h3 className="text-white font-semibold mb-1 group-hover:text-amber-400 transition">
                Have it written for you
              </h3>
              <p className="text-slate-400 text-sm">
                CPCS A61 Appointed Person, from £200 + VAT, 24–48 hours.
              </p>
            </Link>
          </div>

          <p className="text-slate-500 text-sm mt-10 leading-relaxed">
            Written and maintained by Michael Marsh, CPCS A61 Appointed Person (registration
            40389279), RMT Solutions Ltd — 35 years in UK lifting operations. The logic on this
            page follows LOLER 1998 Regulation 8 and the complex-lift triggers in
            BS 7121-1:2016. See also{' '}
            <Link href="/blog/when-do-you-need-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
              when you need a lift plan
            </Link>{' '}
            and{' '}
            <Link href="/blog/basic-standard-complex-lifts" className="text-amber-400 hover:text-amber-300 underline">
              the lift categories explained
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}
