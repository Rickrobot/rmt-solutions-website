import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import SlingAngleCalculator from '@/components/SlingAngleCalculator'
import { LEEA_REF, WORKED_EXAMPLE as X } from '@/lib/slingLegs'

/*
 * Sling angle calculator (Nov 2026).
 *
 * Why: "sling angle calculator" searches are answered mostly by US sites using
 * US methods. This one uses the uniform load method UK slings are rated and
 * tagged by (LEEA COPSULE section 1.A5.4), so the answer is the figure a slinger
 * can check against the tag. The prose below the tool explains the method so
 * the page says something to a crawler and to anyone who would rather read.
 */

const BASE = 'https://www.rmtsafetysolutions.com'
const PATH = '/resources/sling-angle-calculator'
const URL_ = `${BASE}${PATH}`
const f = (v, dp) => v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp })

/* 40 characters; layout.js appends " | RMT Solutions". */
export const metadata = {
  title: 'Sling Angle & Leg Load Calculator (Free)',
  description:
    'Free sling angle calculator: leg angle, mode factor and the minimum WLL per leg for 1 to 4-leg slings, using the LEEA uniform load method.',
  alternates: { canonical: URL_ },
  openGraph: {
    title: 'Sling Angle & Leg Load Calculator',
    description:
      'Work out the leg angle and the minimum WLL each sling leg needs, the way UK slings are rated and tagged.',
    url: URL_,
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What is the uniform load method?',
    a: 'It is how multipurpose slings sold in the UK and Europe are rated and tagged. Instead of working out the load at every angle, the sling gets one rating for legs between 0° and 45° to the vertical and a lower one between 45° and 60°. A 2-leg sling is rated at 1.4 times a single leg up to 45° and 1.0 times from 45° to 60°; a 3- or 4-leg sling at 2.1 and 1.5 times.',
  },
  {
    q: 'Why does the sling rating drop as the angle increases?',
    a: 'Each leg pulls along its own line, so the wider the legs spread, the harder each one has to pull to hold up the same weight. At 60° to the vertical each leg of a 2-leg sling carries the whole weight of the load, even though there are two of them.',
  },
  {
    q: 'Can a sling be used above 60° to the vertical?',
    a: 'No. Slings have no rating above 60° to the vertical (120° included angle). Use longer legs, or a spreader or lifting beam, to bring the angle down.',
  },
  {
    q: 'Why is a 4-leg sling rated the same as a 3-leg sling?',
    a: 'Because the four legs rarely share the load equally. Under the uniform load method a 4-leg sling is rated as if only three legs carry the load, and some standards assume only two. A rigid load, legs of slightly different lengths or an offset centre of gravity can leave it hanging on two legs.',
  },
  {
    q: 'What about a choke hitch?',
    a: 'Choking a sling around the load reduces what it can lift. LEEA gives a mode factor of 0.8, so the sling can lift 80% of its straight-pull rating, and less again if the choke angle is tight.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${URL_}#webpage`,
      url: URL_,
      name: 'Sling angle and leg load calculator',
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
        { '@type': 'ListItem', position: 3, name: 'Sling angle calculator', item: URL_ },
      ],
    },
  ],
}

export default function SlingAngleCalculatorPage() {
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
            <span className="text-gray-300">Sling angle calculator</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Sling Angle &amp; Leg Load <span className="gradient-text">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            Work out the angle of the sling legs and the minimum working load limit each leg needs, for 1, 2, 3 and 4-leg
            slings. It uses the uniform load method that UK slings are rated and tagged by, from the LEEA Code of Practice,
            and was built by a CPCS A61 Appointed Person.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlingAngleCalculator />
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed space-y-6">
          <h2 className="font-display text-3xl font-bold text-white">How the calculation works</h2>
          <h3 className="text-xl font-semibold text-white">The leg angle</h3>
          <p>
            The angle that matters is between each leg and the vertical, which is half the included angle between two
            opposite legs. From the leg length and the distance in plan from the hook to each lifting point:
          </p>
          <p className="rounded-xl bg-slate-900 border border-slate-700 p-4 font-mono text-amber-300">
            sin (angle to vertical) = plan distance from hook to lifting point ÷ leg length
          </p>
          <p>
            For a 2-leg sling the plan distance is half the spacing between the two lifting points. For a 4-leg sling on a
            rectangle it is half the diagonal.
          </p>
          <h3 className="text-xl font-semibold text-white">The rating: uniform load method</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-slate-700 rounded-xl overflow-hidden">
              <thead className="bg-slate-900 text-white">
                <tr><th className="p-3">Sling</th><th className="p-3">0° to 45° to vertical</th><th className="p-3">45° to 60° to vertical</th></tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr><td className="p-3">1 leg</td><td className="p-3" colSpan={2}>1.0 × WLL of the leg (straight lift)</td></tr>
                <tr><td className="p-3">2 legs</td><td className="p-3">1.4 × WLL of one leg</td><td className="p-3">1.0 × WLL of one leg</td></tr>
                <tr><td className="p-3">3 and 4 legs</td><td className="p-3">2.1 × WLL of one leg</td><td className="p-3">1.5 × WLL of one leg</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            So the minimum WLL each leg needs is the load divided by the factor, and by a further 0.8 in a choke hitch. Above
            60° to the vertical there is no rating at all.
          </p>
          <h3 className="text-xl font-semibold text-white">The actual pull in each leg</h3>
          <p className="rounded-xl bg-slate-900 border border-slate-700 p-4 font-mono text-amber-300">
            Pull in each leg = load ÷ (number of legs carrying it × cos angle to vertical)
          </p>
          <p>
            The calculator shows this for information, and for 3 and 4-leg slings also the pull if only two legs end up
            carrying the load, which is what happens with a rigid load or legs of slightly different lengths.
          </p>

          <h2 className="font-display text-3xl font-bold text-white pt-6">Worked example</h2>
          <p>
            A {f(X.input.load, 0)} kg load is lifted on a 2-leg sling with {f(X.input.legLengthM, 1)} m legs to lifting
            points {f(X.input.spacingM, 1)} m apart.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Angle to vertical: sin⁻¹ ({f(X.input.spacingM / 2, 2)} ÷ {f(X.input.legLengthM, 1)}) = {f(X.betaDeg, 1)}°, an included angle of {f(X.included, 1)}°</li>
            <li>Within 0° to 45°, so the mode factor is {f(X.mode, 1)}</li>
            <li>Minimum WLL of each leg: {f(X.input.load, 0)} ÷ {f(X.mode, 1)} = {f(X.requiredLegWll, 0)} kg ({f(X.requiredLegWll / 1000, 2)} t)</li>
            <li>Actual pull in each leg: {f(X.input.load, 0)} ÷ (2 × cos {f(X.betaDeg, 1)}°) = {f(X.tensionAll, 0)} kg</li>
          </ul>
          <p className="text-sm text-gray-400">Illustrative figures only. Use the weights and dimensions for your own lift.</p>

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
            Source: LEEA, <a href={LEEA_REF.url} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">{LEEA_REF.title}</a>, {LEEA_REF.edition}, section {LEEA_REF.section}.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Want the rigging drawn for you?</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Every RMT lift plan includes a rigging drawing: the master link, each leg at its real angle, the shackles and
            the lifting points, with each item&apos;s rating and the gross load the duty is checked against.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/resources/lift-plan-drawing-examples" className="btn-primary inline-flex items-center gap-2">See example rigging drawings <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/resources/outrigger-mat-calculator" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">Outrigger mat calculator <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/resources/excavator-lift-capacity-calculator" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">Excavator lift calculator <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <a href="tel:07803808093" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3"><Phone className="w-5 h-5" aria-hidden="true" />07803 808093</a>
          </div>
        </div>
      </section>
    </>
  )
}
