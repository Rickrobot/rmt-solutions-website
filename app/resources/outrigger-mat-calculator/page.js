import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import OutriggerMatCalculator from '@/components/OutriggerMatCalculator'
import { TWF_REF, WORKED_EXAMPLE as X, RULE_MAX_CAPACITY_T } from '@/lib/outriggerMat'

/*
 * Outrigger mat calculator (Nov 2026).
 *
 * Why: contractors search for outrigger mat sizes and ground bearing pressure
 * and find crude calculators with "ground type" presets. This one follows the
 * Temporary Works Forum method (TWf2022:02) step by step, holds no duties or
 * presumed bearing pressures, and is honest about what it cannot check (the
 * mat's own capacity). Like the decision tool, the prose below it is there so
 * the page says something to a crawler and to anyone who would rather read.
 */

const BASE = 'https://www.rmtsafetysolutions.com'
const PATH = '/resources/outrigger-mat-calculator'
const URL_ = `${BASE}${PATH}`
const f = (v, dp) => v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp })

/* 41 characters; layout.js appends " | RMT Solutions". */
export const metadata = {
  title: 'Outrigger Mat & Ground Bearing Calculator',
  description:
    'Free outrigger mat calculator: maximum outrigger load (maker’s figure or the 75% rule), required bearing area and mat pressure, to TWf2022:02.',
  alternates: { canonical: URL_ },
  openGraph: {
    title: 'Outrigger Mat Size & Ground Bearing Pressure Calculator',
    description:
      'Work out the maximum outrigger load, the minimum bearing area and the pressure under a mat, following the Temporary Works Forum method.',
    url: URL_,
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What is the 75% rule for outrigger loads?',
    a: `It is a rule of thumb, taught on the CPCS A61 Appointed Person course, for estimating the maximum load on one outrigger of an all-terrain mobile crane: 75% of the gross weight of the rigged crane, including all counterweight, plus 100% of the hoisted load, including the hook block and all lifting accessories. The Temporary Works Forum recommends it is not used for cranes over ${RULE_MAX_CAPACITY_T} t capacity, and that for cranes up to ${RULE_MAX_CAPACITY_T} t the result is compared with the values in CIRIA C703; where the rule gives more, the loads should be worked out by specific calculation.`,
  },
  {
    q: 'Can I use the 75% rule for a lorry loader, MEWP or concrete pump?',
    a: 'No. TWf2022:02 says equivalent rules of thumb for other cranes and plant are not well developed and should only be used by competent temporary works designers. Use the maximum outrigger load published by the manufacturer (ALLMI and several manufacturers publish them, and it is often marked on the machine).',
  },
  {
    q: 'Where does the allowable bearing pressure come from?',
    a: 'From a ground or temporary works assessment for the actual position, usually by a competent civil, structural or geotechnical engineer. Published values can be used only in simple, low-risk situations by a competent Appointed Person or Temporary Works Coordinator. BS 5975 Table 18 is for buried foundations, and the guidance says it is unsuitable for most outrigger loading assessments.',
  },
  {
    q: 'If the mat is big enough, is it safe?',
    a: 'Not on its own. The mat must also be strong and stiff enough to spread the maximum outrigger load over its whole area, shown by a rated capacity on an outrigger mat capacity certificate or by a temporary works assessment, and the outrigger must sit in the centre of the mat. The guidance warns that it is wrong to assume a mat only has to be large enough.',
  },
  {
    q: 'What is the difference between kN/m² and kPa?',
    a: 'None: 1 kN/m² is 1 kPa. One tonne of load is 9.81 kN, so 10 t on 1 m² is about 98 kN/m².',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${URL_}#webpage`,
      url: URL_,
      name: 'Outrigger mat and ground bearing pressure calculator',
      description: metadata.description,
      isPartOf: { '@type': 'WebSite', name: 'RMT Solutions Ltd', url: BASE },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: `${BASE}/resources` },
        { '@type': 'ListItem', position: 3, name: 'Outrigger mat calculator', item: URL_ },
      ],
    },
  ],
}

export default function OutriggerMatCalculatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <section className="pt-32 pb-10 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/resources" className="hover:text-amber-400 transition">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Outrigger mat calculator</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Outrigger Mat Size &amp; Ground Bearing <span className="gradient-text">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            Work out the maximum outrigger load, the minimum bearing area the ground needs and the pressure under the mat
            you plan to use. It follows the Temporary Works Forum guidance, {TWF_REF.title} ({TWF_REF.ref}), and was built
            by a CPCS A61 Appointed Person.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <OutriggerMatCalculator />
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed space-y-6">
          <h2 className="font-display text-3xl font-bold text-white">How the calculation works</h2>
          <p>
            Outrigger loading is temporary works. The Temporary Works Forum sets out three steps, and a mat is only right when
            all three are satisfied.
          </p>
          <h3 className="text-xl font-semibold text-white">Step 1: the maximum outrigger load</h3>
          <p>
            The most reliable figure is the one from the crane or plant supplier for the actual configuration, radius and slew
            range, or the maximum outrigger load published by the manufacturer. For all-terrain mobile cranes up to{' '}
            {RULE_MAX_CAPACITY_T} t capacity, the 75% rule gives a quick, usually cautious estimate:
          </p>
          <p className="rounded-xl bg-slate-900 border border-slate-700 p-4 font-mono text-amber-300">
            Maximum outrigger load = 0.75 × rigged crane weight + load + hook block and accessories
          </p>
          <p>
            The rigged crane weight includes all the counterweight fitted for the lift. The rule is not for lorry loaders,
            MEWPs, concrete pumps or cranes over {RULE_MAX_CAPACITY_T} t, and where it gives more than the values in CIRIA
            C703 the loads should be worked out by specific calculation, which is often smaller and saves an oversized mat.
          </p>
          <h3 className="text-xl font-semibold text-white">Step 2: the minimum bearing area</h3>
          <p className="rounded-xl bg-slate-900 border border-slate-700 p-4 font-mono text-amber-300">
            Minimum bearing area (m²) = maximum outrigger load (kN) ÷ allowable bearing pressure (kN/m²)
          </p>
          <p>
            The allowable bearing pressure comes from the ground or temporary works assessment for that position. That is
            why this calculator has no &quot;ground type&quot; list: presumed values from tables such as BS 5975 Table 18 are
            written for buried foundations and the guidance says they are unsuitable for most outrigger assessments.
          </p>
          <h3 className="text-xl font-semibold text-white">Step 3: a mat strong enough to spread the load</h3>
          <p>
            The mat must have a rated capacity at least equal to the maximum outrigger load and an area at least equal to the
            minimum bearing area, shown on an outrigger mat capacity certificate or by a temporary works assessment, with the
            outrigger set in its centre. Timber sleepers, plastic pads and steel mats all bend; a mat that is large enough but
            too flexible puts most of the load under the foot.
          </p>

          <h2 className="font-display text-3xl font-bold text-white pt-6">Worked example</h2>
          <p>
            A {X.input.capacityT} t all-terrain crane, rigged for the lift at {X.input.riggedCraneT} t with its counterweight,
            lifts a {f(X.input.loadT, 1)} t load with {f(X.input.accessoriesT, 1)} t of hook block and lifting accessories.
            The ground assessment gives an allowable bearing pressure of {X.input.allowableKpa} kN/m².
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maximum outrigger load: 0.75 × {X.input.riggedCraneT} + {f(X.input.loadT, 1)} + {f(X.input.accessoriesT, 1)} = {f(X.outT, 2)} t, or {f(X.outKn, 1)} kN</li>
            <li>Minimum bearing area: {f(X.outKn, 1)} ÷ {X.input.allowableKpa} = {f(X.area, 2)} m², so at least {f(X.square, 2)} m square or {f(X.circle, 2)} m diameter</li>
            <li>A {f(X.input.mat.lengthM, 1)} m × {f(X.input.mat.widthM, 1)} m mat weighing {X.input.mat.massKg} kg gives {f(X.pressure, 1)} kN/m² over {f(X.mArea, 2)} m², within the {X.input.allowableKpa} kN/m² allowable, provided its certificate shows a rated capacity of at least {f(X.outT, 1)} t</li>
          </ul>
          <p className="text-sm text-gray-400">Illustrative figures only. Use the weights and ground information for your own lift.</p>

          <h2 className="font-display text-3xl font-bold text-white pt-6">Questions</h2>
          <div className="space-y-5">
            {faqs.map((x) => (
              <div key={x.q}>
                <h3 className="text-lg font-semibold text-white mb-1">{x.q}</h3>
                <p>{x.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 pt-4">
            Source: Temporary Works Forum, {TWF_REF.title}, {TWF_REF.ref}, {TWF_REF.date}.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Want the outrigger loads worked out for you?</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Every RMT mobile crane lift plan includes the outrigger loads for the actual configuration, the mat specification
            and an exclusion zone drawing, written by a CPCS A61 Appointed Person.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services/mobile-crane-lift-plans" className="btn-primary inline-flex items-center gap-2">Mobile crane lift plans <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/resources/lift-plan-decision-tool" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">Do I need a lift plan? <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <a href="tel:07803808093" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3"><Phone className="w-5 h-5" aria-hidden="true" />07803 808093</a>
          </div>
        </div>
      </section>
    </>
  )
}
