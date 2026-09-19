import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, X, Database, FileCheck, PencilRuler,
  ShieldCheck, Clock, Boxes, Building2,
} from 'lucide-react'
import TrialRequestForm from '@/components/TrialRequestForm'

const APP_URL = 'https://liftplanstudio.com'

/*
 * Titles: layout.js appends " | RMT Solutions" (16 chars) and holds every page
 * to 60 including it. 34 + 16 = 50.
 *
 * The search terms here are not the lift planning ones, and it is worth being
 * clear why. Somebody looking for lift plan software has a document to produce.
 * Somebody looking for this has a load in front of them and a question about
 * the gear — "sling angle calculator", "sling load calculator", "WLL
 * calculator", "lifting gear calculator". Those are shorter, more numerous and
 * far more competitive, and most of what ranks for them is a free
 * single-purpose widget.
 *
 * So the copy does not fight them on being a calculator. It leads on the thing
 * the widgets do not do: work the legs by geometry when the centre of gravity
 * is off centre, name the table every factor came from, and produce a drawing
 * somebody can issue.
 */
export const metadata = {
  title: 'Rigging Software & Sling Calculator',
  /* 154 characters. The 7-day trial earns the click and has to survive the
     truncation, so it goes last and short. */
  description:
    'Rigging software that works sling legs by geometry, not a flat factor. Slings, shackles and beams to BS EN, an A3 rigging drawing, PASS or FAIL. 7-day trial.',
  keywords:
    'rigging software, sling angle calculator, sling load calculator, lifting sling calculator, WLL calculator, lifting gear calculator, rigging calculator UK, sling angle factor, centre of gravity lifting calculator, BS EN 13414 calculator, BS EN 1492 sling calculator, lifting beam calculator',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/rigging-software',
  },
  openGraph: {
    title: 'Rigging Software & Sling Calculator | LiftPlan Studio',
    description:
      'Sling legs worked by geometry with the centre of gravity where it actually is. Gear from the EN range, an A3 rigging drawing, and the table behind every figure. 7-day trial.',
    /* A slung precast unit rather than the generic site card: this page is
       about what happens between the hook and the load. */
    images: ['/images/precast-concrete-lift.webp'],
    url: 'https://www.rmtsafetysolutions.com/rigging-software',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

/* --------------------------------------------------------------- schema */

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LiftPlan Studio — Rigging',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web browser (Windows, macOS, iPadOS, Android)',
  url: APP_URL,
  description:
    'Rigging software for UK lifting operations. Works sling leg tensions by geometry with the centre of gravity where it actually is, selects slings, shackles, master links and lifting beams against the BS EN tables, checks the arrangement and issues an A3 rigging drawing.',
  author: {
    '@type': 'Organization',
    name: 'RMT Solutions Ltd',
    url: 'https://www.rmtsafetysolutions.com',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    description: 'One seat. 7-day trial available on request, no card required.',
    url: `${APP_URL}/pricing.html`,
  },
  featureList: [
    'Sling leg tensions worked by geometry, not a flat mode factor',
    'Centre of gravity offset carried through to the governing leg',
    'Mode factors from BS EN 818-4, BS EN 13414-1/-2 and BS EN 1492-1/-2',
    'Straight, choke, double-wrap choke and basket hitches',
    'Slings, shackles, master links and hooks from the EN range',
    'Modulift MOD beams read from the maker’s own tables',
    'FP McCann and Marshalls precast units with their published lifting points',
    'Excavation support systems — trench boxes, shields, slide rail, frames',
    'PASS or FAIL with the utilisation and the mode factor used',
    'A3 rigging drawing (RG-01) with the gear drawn as gear',
  ],
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Rigging Software',
      item: 'https://www.rmtsafetysolutions.com/rigging-software',
    },
  ],
}

/* Single source of truth for the FAQs — rendered on the page AND used to build
   the FAQPage JSON-LD below. Add questions here only. */
const PAGE_FAQS = [
  {
    q: 'What does it do that a sling angle calculator does not?',
    a: 'It puts the centre of gravity where it actually is. The usual method takes the load, divides it by the number of legs and applies a factor for the angle — which assumes the load is shared as the legs are arranged. Move the centre of gravity off centre and it is not. Take 6 tonnes on two legs at 30 degrees with pick centres of 4 m: the uniform method gives 4.29 tonnes a leg, and the geometry gives 4.68 tonnes on the leg nearer the centre of gravity. That is 9% more on the leg that governs, and it is the leg that fails.',
  },
  {
    q: 'Which standards are the figures worked to?',
    a: 'Mode factors come from BS EN 818-4 Table 3 for chain, BS EN 13414-1 Tables 3 and 4 with BS EN 13414-2 Annex A for wire rope, BS EN 1492-1 Table 3 for webbing and BS EN 1492-2 Table 2 for round slings. Shackles are to BS EN 13889 and LEEA COPSULE Section 18, beams to BS EN 13155 and the maker’s own span and angle rating. The planning duty behind it is BS 7121-1:2016 clause 4.3.2(l) and LOLER 1998 regulation 8. Every result names the table it came from, so it can be checked rather than believed.',
  },
  {
    q: 'Angles to the vertical or to the horizontal?',
    a: 'To the vertical, throughout, because that is how BS EN 818-4, BS EN 13414-1 and BS EN 1492-1 tabulate them. It is said on screen and printed on the drawing, because half the arguments about sling angles are two people using the same number to mean different things.',
  },
  {
    q: 'Is it a lift plan?',
    a: 'No. It answers the rigging question — what the gear sees, whether it is within its rating and what to order. A lift plan is the whole document: the machine, its duty chart, the ground, the method, the risk assessment and the review. If you need those, the lift planning side of the same application produces them, or I write them as a service.',
  },
  {
    q: 'What gear does it know?',
    a: 'Slings, shackles, master links and hooks across the EN range — Green Pin, Crosby and Gunnebo among them, and grade 10 chain sets. Modulift MOD beams are read from Modulift’s own tables, and any other beam can be entered by hand from its rating plate. You enter the sling set weight off the tag, because that is the figure on the gear in front of you rather than one from a catalogue.',
  },
  {
    q: 'Does it handle precast?',
    a: 'Yes, and it is the part that saves the most time. FP McCann and Marshalls units come in with their published weights, their lifting points and the maker’s own slinging instructions, so the arrangement starts from what the manufacturer says rather than from a measurement off a drawing. Excavation support is in there too — trench and drag boxes, manhole boxes, shields, slide rail, trench sheets, piles, frames and braces.',
  },
  {
    q: 'There is an AI adviser. Does it do the arithmetic?',
    a: 'No, and it is built so it cannot. The adviser is optional and it does one thing: weigh up the slinging arrangements a rigger would consider and say which suits your job and why. Every number on the screen and on the drawing comes from the standards tables and the geometry. No output from a language model reaches a calculation, ever — that is a rule the application is written around, not a setting.',
  },
  {
    q: 'What comes out at the end?',
    a: 'A PASS or a FAIL with the utilisation and the mode factor used, the sling length to order, and RG-01 — an A3 rigging drawing with the gear drawn as gear rather than as boxes and straight lines: master link, chain legs, safety-lock hooks, shackles and round slings. It prints to PDF under your own branding. Where a check produces a warning rather than a failure, the Appointed Person has to accept it by name before the job is complete.',
  },
  {
    q: 'How does the 7-day trial work?',
    a: 'You ask for it with the form on this page and the account is set up by hand, usually the same working day. You get an email with your sign-in details. It opens straight onto the rigging side with everything switched on, runs for seven days and then stops on its own. No card is taken and there is nothing to cancel.',
  },
  {
    q: 'Does it replace the Appointed Person or the slinger?',
    a: 'No. It works the figures, names their source and draws the arrangement. Whether the lift is safe is a competent person’s judgement and it stays with them — and the gear’s own tag and certificate govern over anything on a screen. Where a figure is not tabulated the application refuses and says so rather than producing something that looks like an answer.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PAGE_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

/* --------------------------------------------------------------- content */

const STEPS = [
  {
    icon: Boxes,
    title: 'R1 · The load',
    body: 'Weight, size and shape — box, cylinder, pipe, a Blue Book section or a steel frame member. A shape can work the weight out for you, and it is marked as calculated so nobody mistakes it for a weighed figure.',
  },
  {
    icon: PencilRuler,
    title: 'R2 · The arrangement',
    body: 'Straight, choke, double-wrap choke or basket. Lifting points, the height from the hook to the load, and the centre of gravity where it actually sits. The sling length to order comes out of it.',
  },
  {
    icon: Database,
    title: 'R3 · The gear',
    body: 'Slings, shackles, master link and hooks from the EN range — Green Pin, Crosby, Gunnebo, grade 10 chain sets. The sling set weight goes in off the tag.',
  },
  {
    icon: ShieldCheck,
    title: 'R4 · Beams and spreaders',
    body: 'A Modulift MOD beam read from Modulift’s own tables, or any beam entered from its rating plate. Top sling angle and length checked against the beam’s span rating.',
  },
  {
    icon: CheckCircle2,
    title: 'The result',
    body: 'PASS or FAIL, the utilisation, and the mode factor used with the table it came from. A warning is not a pass: the Appointed Person accepts it by name or the job does not complete.',
  },
  {
    icon: FileCheck,
    title: 'R7 · The drawing',
    body: 'RG-01, an A3 sheet to print or save as PDF, with the gear drawn as gear — master link, chain legs, safety-lock hooks, shackles, round slings — under your own branding.',
  },
]

const TRIAL_STEPS = [
  {
    n: '1',
    title: 'Ask on this page',
    body: 'Name, company, email. Tell me what you sling and with what if you like — it means your gear can be ready when you sign in.',
  },
  {
    n: '2',
    title: 'I set the account up by hand',
    body: 'Usually the same working day. You get an email with your sign-in details. It opens straight onto the rigging side.',
  },
  {
    n: '3',
    title: 'Seven days, everything on',
    body: 'No cut-down version and no watermark across your work. Rig real loads with it. It stops on its own — no card was taken, so there is nothing to cancel.',
  },
]

export default function RiggingSoftwarePage() {
  return (
    <div className="bg-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ------------------------------------------------------------ hero */}
      <section className="relative pt-32 pb-20 bg-slate-950 construction-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
                <Clock className="w-4 h-4" />
                7-day trial · no card
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Rigging software that works the legs, not just the weight
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                Most sling calculators divide the load by the number of legs and
                apply a factor for the angle. That assumes the load is shared the way
                the legs are arranged. Put the centre of gravity off centre and it is
                not — and the leg that carries more is the one that fails.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                This works every leg by geometry, names the BS EN table behind every
                factor, and draws the arrangement as an A3 sheet you can issue. Built
                by a CPCS A61 Appointed Person as part of LiftPlan Studio, and sold on
                its own for people who rig more than they plan.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#trial"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-7 py-4 rounded-xl font-semibold transition"
                >
                  Try it for 7 days
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-slate-700 hover:border-amber-500 text-white px-7 py-4 rounded-xl font-semibold transition"
                >
                  See the application
                </a>
              </div>
            </div>

            <div id="trial" className="scroll-mt-28">
              <TrialRequestForm product="rigging" idPrefix="rig-hero" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ the 9% that matters */}
      <section className="py-20 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            The same lift, worked two ways
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            Six tonnes, two legs at 30&deg; to the vertical, pick centres 4 m, and the
            centre of gravity a metre off centre — which is an ordinary precast unit, not
            an awkward one.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950/60 rounded-2xl p-7 border border-slate-800">
              <div className="flex items-center gap-2 text-red-400 font-semibold mb-4">
                <X className="w-5 h-5" /> Uniform load method
              </div>
              <p className="font-display text-4xl font-bold text-white mb-2">4.29 t</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                a leg. The load divided by two, with the angle factor applied. It is the
                method behind nearly every free calculator, and it is correct only while
                the centre of gravity is in the middle.
              </p>
            </div>
            <div className="bg-slate-950/60 rounded-2xl p-7 border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-4">
                <CheckCircle2 className="w-5 h-5" /> By geometry
              </div>
              <p className="font-display text-4xl font-bold text-white mb-2">4.68 t</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                on the leg nearer the centre of gravity. Nine per cent more, on the leg
                that governs the whole arrangement. The far leg is flatter and carries
                less — which is why the average looks fine.
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-sm mt-8 leading-relaxed">
            Nine per cent is not a rounding error when a sling is at 85% utilisation. It
            is the difference between a set that is inside its rating and a set that is
            not, and nothing on the tag tells you which — because the tag does not know
            where you put the hook.
          </p>
        </div>
      </section>

      {/* -------------------------------------------------------- the machine */}
      <section className="bg-slate-950 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <figure className="relative rounded-2xl overflow-hidden border border-slate-800">
            <Image
              src="/images/precast-concrete-lift.webp"
              alt="A precast concrete unit slung on a multi-leg chain set and lifted on a construction site, with the legs at an angle to the vertical and the load level"
              width={1920}
              height={960}
              priority
              className="w-full h-auto"
            />
            <figcaption
              className="p-5 bg-slate-900/60 md:bg-transparent md:p-8 md:absolute md:inset-x-0 md:bottom-0
                         md:bg-gradient-to-t md:from-slate-950 md:via-slate-950/80 md:to-transparent"
            >
              <p className="text-white font-display text-lg sm:text-xl font-bold max-w-3xl">
                This is the part of the lift with the least paperwork behind it.
              </p>
              <p className="text-gray-300 text-sm sm:text-base max-w-3xl mt-1">
                The crane gets a duty chart and a plan. The gear between the hook and the
                load gets a glance at a tag and somebody&rsquo;s experience — which is
                usually right, and is very hard to defend afterwards when it is not.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ------------------------------------------------------------- steps */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            What it asks, and what it gives back
          </h2>
          <p className="text-gray-400 mb-12 leading-relaxed max-w-3xl">
            Eight steps, in the order a rigger works. You can stop at the answer or carry
            on to the drawing.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((s) => {
              const Icon = s.icon
              return (
                <div
                  key={s.title}
                  className="bg-slate-900/60 rounded-2xl p-7 border border-slate-800"
                >
                  <Icon className="w-8 h-8 text-amber-400 mb-5" />
                  <h3 className="font-display text-lg font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* --------------------------------------------------------- standards */}
      <section className="py-20 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
            Every figure names the table it came from
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Not &ldquo;worked to BS EN&rdquo; in a footer. Each result carries the clause
            behind it, so a reviewer can check it instead of taking it on trust — and so
            can you, three months later, when somebody asks why that leg was rated at
            that figure.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm">
            {[
              'BS EN 818-4 Table 3 — chain slings',
              'BS EN 13414-1 Tables 3 & 4 — wire rope',
              'BS EN 13414-2 Annex A — wire rope in use',
              'BS EN 1492-1 Table 3 — webbing slings',
              'BS EN 1492-2 Table 2 — round slings',
              'BS EN 13889 — shackles',
              'BS EN 13155 — lifting beams',
              'LEEA COPSULE Section 18 — safe use',
              'BS 7121-1:2016 cl. 4.3.2(l) — planning',
              'LOLER 1998 regulation 8 — the duty',
            ].map((t) => (
              <li
                key={t}
                className="flex items-start gap-2 text-gray-300 bg-slate-950/60 border border-slate-800 rounded-xl px-4 py-3"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                {t}
              </li>
            ))}
          </ul>
          <p className="text-gray-400 text-sm mt-8 leading-relaxed">
            Angles are to the vertical throughout, because that is how the standards
            tabulate them. It says so on screen and it prints on the drawing.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------ trial */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Seven days, set up by hand
          </h2>
          <p className="text-gray-400 mb-12 leading-relaxed max-w-3xl">
            There is no self-service sign-up, deliberately. Every account is set up
            personally, which means a short conversation about what you rig rather than a
            password and an empty screen.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {TRIAL_STEPS.map((s) => (
              <div key={s.n} className="bg-slate-900/60 rounded-2xl p-7 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-900 font-display font-bold text-lg flex items-center justify-center mb-5">
                  {s.n}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-slate-900/60 border border-slate-800 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm">
              Rigging is sold on its own, and it is also part of the full application
              alongside lift planning.{' '}
              <Link
                href="/lift-plan-software"
                className="text-amber-400 hover:text-amber-300 font-semibold"
              >
                The lift planning side is here
              </Link>
              . Nothing is charged during the trial and it does not roll into a
              subscription on its own.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- honesty */}
      <section className="py-20 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 sm:p-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
              What it will not do
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-white">It will not decide the lift is safe.</strong>{' '}
                That is a competent person&rsquo;s judgement and it stays with them. The
                gear&rsquo;s own tag and certificate govern over anything on a screen.
              </p>
              <p>
                <strong className="text-white">It will not invent a factor.</strong> Where
                the standards do not tabulate something — a choke hitch on chain, an angle
                past the end of the table — it says so and refuses rather than producing a
                number that looks like an answer.
              </p>
              <p>
                <strong className="text-white">It will not let AI near the arithmetic.</strong>{' '}
                The adviser weighs up which arrangement suits a job. Every figure comes
                from the standards tables and the geometry, and no output from a language
                model reaches a calculation.
              </p>
              <p>
                <strong className="text-white">It is not a lift plan.</strong> It answers
                the rigging question. If you need the machine, the ground, the method and
                the review as one issued document,{' '}
                <Link href="/lift-plan-software" className="text-amber-400 hover:text-amber-300">
                  the lift planning side does that
                </Link>{' '}
                — or{' '}
                <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300">
                  I write them as a service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FAQ */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Questions people actually ask
          </h2>
          <div className="space-y-4">
            {PAGE_FAQS.map((f) => (
              <details
                key={f.q}
                className="group bg-slate-900/60 border border-slate-800 rounded-xl p-6 open:border-amber-500/30"
              >
                <summary className="font-display text-lg font-semibold text-white cursor-pointer list-none flex items-start justify-between gap-4">
                  {f.q}
                  <span className="text-amber-400 shrink-0 transition-transform group-open:rotate-45 text-2xl leading-none">
                    +
                  </span>
                </summary>
                <p className="text-gray-400 mt-4 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- CTA */}
      <section className="py-24 bg-slate-900 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Building2 className="w-10 h-10 text-amber-400 mx-auto mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Put your own awkward load through it
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Seven days, everything switched on, no card. Take a load you have rigged
              before, one with the centre of gravity somewhere unhelpful, and see whether
              the figures match what you used.
            </p>
          </div>
          <TrialRequestForm product="rigging" idPrefix="rig-foot" />
        </div>
      </section>
    </div>
  )
}
