import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, X, Database, FileCheck, PencilRuler, WifiOff,
  ShieldCheck, Clock, Boxes, Building2,
} from 'lucide-react'
import TrialRequestForm from '@/components/TrialRequestForm'

const APP_URL = 'https://liftplanstudio.com'

export const metadata = {
  title: 'Lift Plan Software for Lorry Loaders | LiftPlan Studio | 14-Day Trial',
  description:
    'Lift planning software for lorry loaders, built by a CPCS A61 Appointed Person. Duty charts, the ALLMI method, an 18-point compliance review and a full A3 drawing pack. 14-day trial, no card.',
  keywords:
    'lift plan software, lift planning software, lorry loader lift plan software, HIAB lift plan software, ALLMI lift plan software, lift plan generator, lifting plan software UK, crane lift planning software, LOLER lift plan software, appointed person software',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/lift-plan-software',
  },
  openGraph: {
    title: 'Lift Plan Software for Lorry Loaders | LiftPlan Studio',
    description:
      'Duty charts, the ALLMI method, an 18-point compliance review and a full A3 drawing pack. Written by a working Appointed Person. 14-day trial, no card.',
    url: 'https://www.rmtsafetysolutions.com/lift-plan-software',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

/* --------------------------------------------------------------- schema */

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'LiftPlan Studio',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web browser (Windows, macOS, iPadOS, Android)',
  url: APP_URL,
  description:
    'Lift planning software for lorry loaders. Holds a duty-chart database of more than 1,900 machines, works the ALLMI calculation method in full, produces an 18-point compliance review and issues a complete lift plan pack with A3 general arrangement drawings.',
  author: {
    '@type': 'Organization',
    name: 'RMT Solutions Ltd',
    url: 'https://www.rmtsafetysolutions.com',
  },
  offers: {
    '@type': 'Offer',
    priceCurrency: 'GBP',
    availability: 'https://schema.org/InStock',
    description: 'One seat, monthly or yearly. 14-day trial available on request, no card required.',
    url: `${APP_URL}/pricing.html`,
  },
  featureList: [
    'Duty-chart database of more than 1,900 lorry loaders',
    'The ALLMI calculation method in full',
    'Rated capacity at radius with the manufacturer chart reference',
    'Load and lifting tackle catalogue',
    'Editable 5 x 5 risk assessment',
    '18-point compliance review with a Category A or B determination',
    'A3 general arrangement, plan and rigging drawings',
    'Ground bearing pressure and mat sizing',
    'Works offline on site',
    'Your own branding on every document',
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
      name: 'Lift Plan Software',
      item: 'https://www.rmtsafetysolutions.com/lift-plan-software',
    },
  ],
}

/* Single source of truth for the FAQs — rendered on the page AND used to build
   the FAQPage JSON-LD below. Add questions here only. */
const PAGE_FAQS = [
  {
    q: 'How does the 14-day trial work?',
    a: 'You ask for it using the form on this page and the account is set up by hand, usually the same working day. You get an email with your sign-in details. The trial runs for 14 days with everything switched on — there is no cut-down version — and then it stops on its own. No card is taken at any point and there is nothing to cancel.',
  },
  {
    q: 'Why do I have to ask rather than just sign up?',
    a: 'Because every account is set up personally while the product is new. It takes a few minutes and it means you get a short conversation about what you lift and on what, rather than a password and an empty screen. It also means your machines can be checked before you start.',
  },
  {
    q: 'What machines does it cover?',
    a: 'Lorry loaders — Fassi, Palfinger, HIAB, Effer, Atlas, Kennis, Maxilift and Cormach among them, more than 1,900 in total. Some carry full published duty charts and stabiliser geometry; others hold moments, outreach and weights. The application says which it holds for any machine you pick, and it says so plainly rather than filling a gap with an assumption.',
  },
  {
    q: 'Does it work on site with no signal?',
    a: 'Yes. It installs to the device and the whole application, including the machine database, works with no connection. That was a requirement rather than a feature: a lift plan gets opened in a compound with no signal, and software that locks you out at that moment is worse than the paperwork it replaced.',
  },
  {
    q: 'Is the output mine to issue?',
    a: 'Yes. The application ships unbranded — you put your own company name, logo, address and accent colour in on first run, and that branding appears on every document and in the title block of every drawing. The packs you produce are your documents, issued under your name and your competence.',
  },
  {
    q: 'Does it replace the Appointed Person?',
    a: 'No, and it is built so it cannot pretend to. It does the arithmetic, holds the published figures and produces the paperwork. Deciding whether a lift is safe is a competent person’s judgement and stays with them. Where a figure is not published the application refuses and says so rather than producing a number, and the load chart fitted to the actual machine always governs.',
  },
  {
    q: 'What do I get at the end of a plan?',
    a: 'A complete pack: cover, job details, the appliance and its duties, the schedule of loads, rigging, ground bearing and mats, the method and sequence of operations, a 5 x 5 risk assessment, the 18-point compliance review, pre-lift checks and a briefing and attendance sheet — plus A3 general arrangement, plan and rigging drawings. It prints to PDF and every sheet carries the document number, revision and issue reference.',
  },
  {
    q: 'What does it cost after the trial?',
    a: 'One seat, billed monthly or yearly, with unlimited plans and unlimited machines on that seat. Current prices are on the pricing page in the application itself. Nobody is charged anything during the trial and the trial does not roll into a subscription by itself.',
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

/* ---------------------------------------------------------------- content */

const FEATURES = [
  {
    icon: Database,
    title: 'More than 1,900 lorry loaders',
    body: 'Fassi, Palfinger, HIAB, Effer, Atlas, Kennis, Maxilift, Cormach. Duty charts, moments, outreach, stabiliser geometry and published ground pressures where the manufacturer publishes them — and a plain statement of what is missing where they do not.',
  },
  {
    icon: FileCheck,
    title: 'The ALLMI method, in full',
    body: 'Not a simplified version of it. Gross load, tackle, dynamic factor, the moment at radius and the utilisation against your own ceiling, each step shown so it can be checked rather than taken on trust.',
  },
  {
    icon: ShieldCheck,
    title: 'An 18-point compliance review',
    body: 'The plan is checked against the same 18 points used on independent reviews, and comes out as Category A or Category B with every finding named. You see what a reviewer would see before you issue it, not afterwards.',
  },
  {
    icon: PencilRuler,
    title: 'A3 drawings, drawn to scale',
    body: 'General arrangement, plan view and rigging detail, with the machine drawn to its published dimensions, the radius and exclusion zone set out, and your title block on every sheet. Not a sketch and not a clip-art crane.',
  },
  {
    icon: Boxes,
    title: 'Loads, tackle and ground',
    body: 'A catalogue of loads with verified weights, dimensions, slinging notes and wind limits, the lifting tackle to go with them, and ground bearing pressure with mat sizing worked from the ALLMI calculation.',
  },
  {
    icon: WifiOff,
    title: 'Works with no signal',
    body: 'Installs to the device and runs offline — machine database included. A plan opened in a compound with no bars still opens.',
  },
]

const TRIAL_STEPS = [
  {
    n: '1',
    title: 'Ask for the trial',
    body: 'The form below takes under a minute. Tell me what you lift and on what, and your machines can be ready before you start.',
  },
  {
    n: '2',
    title: 'I set the account up by hand',
    body: 'Usually the same working day. You get an email with your sign-in details and a short note on where to start.',
  },
  {
    n: '3',
    title: '14 days, everything switched on',
    body: 'No cut-down version and no watermark across your work. Plan real lifts with it. It stops on its own at the end — no card was taken, so there is nothing to cancel.',
  },
]

export default function LiftPlanSoftwarePage() {
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
                14-day trial · no card
              </div>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Lift planning software for lorry loaders
              </h1>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                LiftPlan Studio does the duty chart, the ALLMI calculation, the risk
                assessment, the drawings and the whole document pack — and it is written
                the way a lift plan has to be defended, by somebody who writes them for a
                living.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Built by a CPCS A61 Appointed Person out of 35 years of doing this on
                real jobs for tier 1 contractors. It holds published figures and shows its
                working. Where a figure is not published it says so and refuses, because a
                number nobody published is the one that ends up in an investigation.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#trial"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-7 py-4 rounded-xl font-semibold transition"
                >
                  Try it for 14 days
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
              <TrialRequestForm />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- what it replaces */}
      <section className="py-20 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            It came out of a spreadsheet, because most lift planning still is one
          </h2>
          <p className="text-gray-400 mb-10 leading-relaxed">
            LiftPlan Studio started as a replacement for one contractor&rsquo;s lift
            planning workbook — the same data and the same maths, rebuilt as something
            that could be checked, revised and defended. If any of the left-hand column
            looks familiar, that is who it was built for.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-950/60 rounded-2xl p-7 border border-slate-800">
              <div className="flex items-center gap-2 text-red-400 font-semibold mb-4">
                <X className="w-5 h-5" /> How it usually goes
              </div>
              <ul className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <li>A duty chart read off a photograph of a laminated card</li>
                <li>Last job&rsquo;s plan, saved over, with a site name changed</li>
                <li>Drawings sketched in Word, or not drawn at all</li>
                <li>Utilisation worked out on a phone calculator</li>
                <li>No document number, no revision, no record of what was issued</li>
                <li>Rejected by the principal contractor, and reworked twice</li>
              </ul>
            </div>
            <div className="bg-slate-950/60 rounded-2xl p-7 border border-amber-500/30">
              <div className="flex items-center gap-2 text-amber-400 font-semibold mb-4">
                <CheckCircle2 className="w-5 h-5" /> How it goes with this
              </div>
              <ul className="space-y-3 text-gray-300 text-sm leading-relaxed">
                <li>The published duty point, with the chart reference beside it</li>
                <li>A new plan started from a previous one, dates and names blank</li>
                <li>A3 general arrangement, plan and rigging drawings to scale</li>
                <li>The ALLMI calculation, every step shown</li>
                <li>Document number, revision and issue reference on every sheet</li>
                <li>The 18-point review run before you issue it, not after</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- what it does */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            What it does
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
            One seat, unlimited plans, unlimited machines.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="bg-slate-900/60 rounded-2xl p-7 border border-slate-800 hover:border-amber-500/40 transition"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-5">
                  <f.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ how the trial works */}
      <section className="py-24 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            How the 14 days work
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
            Everything switched on, nothing taken from you, and it ends by itself.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {TRIAL_STEPS.map((s) => (
              <div key={s.n} className="bg-slate-950/60 rounded-2xl p-7 border border-slate-800">
                <div className="w-10 h-10 rounded-lg bg-amber-500 text-slate-900 font-display font-bold text-lg flex items-center justify-center mb-5">
                  {s.n}
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 bg-slate-950/60 border border-slate-800 rounded-2xl p-6 text-center">
            <p className="text-gray-400 text-sm">
              After the trial it is one seat, monthly or yearly, with unlimited plans.{' '}
              <a
                href={`${APP_URL}/pricing.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 font-semibold"
              >
                Current prices are here
              </a>
              . Nothing is charged during the trial and it does not roll into a
              subscription on its own.
            </p>
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- honesty */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 sm:p-10">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-5">
              What it will not do
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                <strong className="text-white">It will not decide the lift is safe.</strong>{' '}
                That is a competent person&rsquo;s judgement and it stays with them. The
                application does the arithmetic, holds the published figures and produces
                the paperwork — it does not sign anything.
              </p>
              <p>
                <strong className="text-white">It will not invent a figure.</strong> Where
                a manufacturer publishes nothing, the application says so and refuses
                rather than interpolating something that looks like an answer. The load
                chart fitted to the actual machine always governs, and where the two
                disagree the machine is right.
              </p>
              <p>
                <strong className="text-white">It is for lorry loaders.</strong> Not
                mobile cranes, not tower cranes, not excavators in object handling. If you
                need those planned,{' '}
                <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300">
                  I write those plans as a service
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FAQ */}
      <section className="py-24 bg-slate-900 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
            Questions people actually ask
          </h2>
          <div className="space-y-4">
            {PAGE_FAQS.map((f) => (
              <details
                key={f.q}
                className="group bg-slate-950/60 border border-slate-800 rounded-xl p-6 open:border-amber-500/30"
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
      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <Building2 className="w-10 h-10 text-amber-400 mx-auto mb-5" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
              Have a look at it on your own jobs
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Fourteen days, everything switched on, no card. Plan a real lift with it and
              see whether the pack that comes out is one you would put your name to.
            </p>
          </div>
          <TrialRequestForm heading="Request your 14-day trial" />
        </div>
      </section>
    </div>
  )
}
