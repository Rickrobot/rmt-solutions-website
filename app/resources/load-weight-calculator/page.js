import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import LoadWeightCalculator from '@/components/LoadWeightCalculator'
import { CONCRETE, STEEL_DENSITY, WORKED_EXAMPLE as X } from '@/lib/loadWeight'

/*
 * Load weight calculator (Nov 2026).
 *
 * Why: every lift plan starts with the weight of the load, and "steel beam
 * weight" searches bring exactly the people who plan
 * lifts: steel erectors, groundworkers and site managers. Standard section
 * sizes and EN 1991-1-1 densities only; no product tables are reproduced.
 */

const BASE = 'https://www.rmtsafetysolutions.com'
const PATH = '/resources/load-weight-calculator'
const URL_ = `${BASE}${PATH}`
const f = (v, dp) => v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp })

/* 39 characters; layout.js appends " | RMT Solutions". */
export const metadata = {
  title: 'Steel Beam & Concrete Weight Calculator',
  description:
    'Free load weight calculator for lift planning: UB, UC and PFC beams, hollow sections, plate and concrete, added up into the weight of the lift.',
  alternates: { canonical: URL_ },
  openGraph: {
    title: 'Steel Beam & Concrete Weight Calculator for Lift Planning',
    description:
      'Work out the weight of steel beams, hollow sections, plate and concrete, and add them up into the load for a lift plan.',
    url: URL_,
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'How do I find the weight of a steel beam?',
    a: 'For UK universal beams, universal columns and parallel flange channels, the last figure in the serial size is the mass per metre. A 305 x 165 x 40 UB weighs 40 kg per metre, so a 7.5 m length weighs 300 kg. Add the cleats, end plates and bolts.',
  },
  {
    q: 'How heavy is concrete per cubic metre?',
    a: `Eurocode EN 1991-1-1 gives 24 kN/m³ for plain concrete, 25 kN/m³ for reinforced concrete and 1 kN/m³ more while it is wet. As mass, that is about ${f(CONCRETE.plain.kgm3, 0)}, ${f(CONCRETE.reinforced.kgm3, 0)} and ${f(CONCRETE.wet.kgm3, 0)} kg per cubic metre. A full 1 m³ skip of wet concrete weighs over 2.6 tonnes before the skip itself.`,
  },
  {
    q: 'How is the weight of a hollow section worked out?',
    a: 'From its cross-sectional area. For hot-finished square and rectangular hollow sections BS EN 10210-2 sets the corner radii, 1.5 times the wall thickness outside and 1.0 times inside, which gives the area and so the mass per metre at 7,850 kg/m³. A 100 x 100 x 5 SHS works out at 14.7 kg/m, the same as the published tables.',
  },
  {
    q: 'Should I use the calculated weight in a lift plan?',
    a: 'Use the weight on the drawing, delivery note or unit label where there is one, and use the calculator to check it. Then add the lifting accessories and the hook block or quick hitch to get the gross load the machine’s duty is checked against.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${URL_}#webpage`,
      url: URL_,
      name: 'Steel beam and concrete weight calculator',
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
        { '@type': 'ListItem', position: 3, name: 'Load weight calculator', item: URL_ },
      ],
    },
  ],
}

export default function LoadWeightCalculatorPage() {
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
            <span className="text-gray-300">Load weight calculator</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Steel Beam &amp; Concrete <span className="gradient-text">Weight Calculator</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            Work out the weight of a lift: universal beams and columns, channels, hollow sections, steel plate and concrete,
            added up item by item. Every lift plan starts with the weight of the load, and this takes the guessing out of it.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoadWeightCalculator />
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed space-y-6">
          <h2 className="font-display text-3xl font-bold text-white">How the weights are worked out</h2>
          <h3 className="text-xl font-semibold text-white">Beams, columns and channels</h3>
          <p>
            UK sections to BS 4-1 are named by their size and mass: the last figure of the serial size is the mass per metre.
            A 203 x 203 x 46 UC weighs 46 kg/m; a 305 x 165 x 40 UB weighs 40 kg/m. Weight = mass per metre × length.
          </p>
          <h3 className="text-xl font-semibold text-white">Hollow sections</h3>
          <p className="rounded-xl bg-slate-900 border border-slate-700 p-4 font-mono text-amber-300">
            SHS / RHS area = 2t(B + H − 2t) − (4 − π)(r<sub>o</sub>² − r<sub>i</sub>²), with r<sub>o</sub> = 1.5t and r<sub>i</sub> = t
          </p>
          <p>
            These are the corner radii BS EN 10210-2 sets for hot-finished sections. Area × {f(STEEL_DENSITY, 0)} kg/m³ gives the
            mass per metre. Circular sections use area = πt(D − t). Cold-formed sections have bigger corners and come out a
            little lighter, so the figure here is on the safe side.
          </p>
          <h3 className="text-xl font-semibold text-white">Plate and concrete</h3>
          <p>
            Volume × density: steel {f(STEEL_DENSITY, 0)} kg/m³, and concrete from EN 1991-1-1 at{' '}
            {f(CONCRETE.plain.kgm3, 0)} kg/m³ plain, {f(CONCRETE.reinforced.kgm3, 0)} kg/m³ reinforced or precast and{' '}
            {f(CONCRETE.wet.kgm3, 0)} kg/m³ wet.
          </p>

          <h2 className="font-display text-3xl font-bold text-white pt-6">Worked example</h2>
          <p>A lift of steel and a precast slab:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>{X.beams.qty} × {X.beams.designation} UB at {f(X.beams.length, 1)} m: 40 × {f(X.beams.length, 1)} × {X.beams.qty} = {f(X.beamKg, 0)} kg</li>
            <li>{X.shs.qty} × {X.shs.h} x {X.shs.b} x {X.shs.t} SHS at {f(X.shs.length, 1)} m: {f(X.shsKgm, 1)} kg/m × {f(X.shs.length, 1)} × {X.shs.qty} = {f(X.shsKg, 0)} kg</li>
            <li>1 precast slab {f(X.slab.l, 1)} × {f(X.slab.w, 1)} × {f(X.slab.d, 2)} m: {f(X.slab.l * X.slab.w * X.slab.d, 2)} m³ × {f(CONCRETE.reinforced.kgm3, 0)} = {f(X.slabKg, 0)} kg</li>
            <li>Total: {f(X.total, 0)} kg ({f(X.total / 1000, 2)} t), before the lifting accessories</li>
          </ul>
          <p className="text-sm text-gray-400">Illustrative figures only.</p>

          <h2 className="font-display text-3xl font-bold text-white pt-6">Questions</h2>
          <div className="space-y-5">
            {faqs.map((x) => (
              <div key={x.q}>
                <h3 className="text-lg font-semibold text-white mb-1">{x.q}</h3>
                <p>{x.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 pt-4">Sources: BS 4-1 serial sizes; BS EN 10210-2 hot-finished hollow sections; EN 1991-1-1 Annex A densities.</p>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Got the weight? Plan the lift.</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            Every RMT lift plan states the gross load, item by item, and checks it against the manufacturer&apos;s chart for the
            machine as configured, written by a CPCS A61 Appointed Person.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services/lift-plans" className="btn-primary inline-flex items-center gap-2">Get a lift plan written <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/resources/excavator-lift-capacity-calculator" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">Excavator lift calculator <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/resources/sling-angle-calculator" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">Sling angle calculator <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <a href="tel:07803808093" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3"><Phone className="w-5 h-5" aria-hidden="true" />07803 808093</a>
          </div>
        </div>
      </section>
    </>
  )
}
