import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import CraneWindCalculator from '@/components/CraneWindCalculator'
import { REF_AREA_PER_T, CW_PRESETS, SOURCES, WORKED_EXAMPLE as X, msToMph } from '@/lib/craneWind'

/*
 * Crane wind speed calculator (Nov 2026).
 *
 * Why: cladding panels, formwork, AHUs and roof sheets catch far more wind
 * than a mobile crane load chart allows for, and the reduced wind speed is
 * rarely worked out on site. This uses the EN 13000 1.2 m2/t reference and the
 * formula in Liebherr's wind training document, checked against Liebherr's own
 * published examples. Links into the crane wind speed blog post and the mobile
 * crane lift plan page.
 */

const BASE = 'https://www.rmtsafetysolutions.com'
const PATH = '/resources/crane-wind-speed-calculator'
const URL_ = `${BASE}${PATH}`
const f = (v, dp) => v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp })

/* 38 characters; layout.js appends " | RMT Solutions". */
export const metadata = {
  title: 'Crane Wind Speed Calculator (EN 13000)',
  description:
    'Free crane wind speed calculator: the reduced maximum wind speed for large-area loads such as cladding panels, from the load chart and wind area.',
  alternates: { canonical: URL_ },
  openGraph: {
    title: 'Crane Wind Speed Calculator for Large-Area Loads',
    description:
      'Work out the maximum wind speed for a load that catches more wind than the crane load chart allows for.',
    url: URL_,
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'What wind speed is on a crane load chart?',
    a: 'Mobile crane load charts built to EN 13000 give a maximum wind speed, often 9 m/s (20 mph) though some charts allow more. It is a 3-second gust speed at the highest point of the crane, and it only applies to loads whose wind area is no more than 1.2 m² per tonne.',
  },
  {
    q: 'Why do large panels need a lower wind speed?',
    a: 'Wind force rises with the area it hits and with the square of the wind speed. A light load with a big face, like a cladding panel, formwork or a roof sheet bundle, can catch several times the wind the chart allows for, so the wind speed has to come down to keep the force on the crane within what the chart was calculated for.',
  },
  {
    q: 'How do I work out the wind area of a load?',
    a: 'Multiply the largest face that could turn into the wind (length × height) by the drag coefficient for its shape: about 1.1 to 2.0 for a flat panel or box, 0.6 to 1.0 for a cylinder. Load suppliers sometimes give the figure, and their figure should be used when they do.',
  },
  {
    q: 'Is the forecast wind speed the same as the wind at the boom head?',
    a: 'No. Wind is stronger with height and gusts are stronger than the average speed, so the gust at the top of a long boom is often well above a ground-level forecast. Use the crane’s anemometer and gust forecasts for the working height.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${URL_}#webpage`,
      url: URL_,
      name: 'Crane wind speed calculator',
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
        { '@type': 'ListItem', position: 3, name: 'Crane wind speed calculator', item: URL_ },
      ],
    },
  ],
}

export default function CraneWindSpeedCalculatorPage() {
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
            <span className="text-gray-300">Crane wind speed calculator</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Crane Wind Speed <span className="gradient-text">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            Cladding panels, formwork, air handling units and roof sheets catch far more wind than a mobile crane load chart
            allows for. Work out the reduced maximum wind speed for your load, using the EN 13000 reference the charts are
            built on. Built by a CPCS A61 Appointed Person.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <CraneWindCalculator />
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed space-y-6">
          <h2 className="font-display text-3xl font-bold text-white">How the calculation works</h2>
          <p>
            Mobile crane load charts to EN 13000 are calculated for a load with a wind area of {f(REF_AREA_PER_T, 1)} m² per
            tonne, including its drag coefficient. A load that catches more wind than that puts more force on the crane at the
            same wind speed, so the wind speed has to come down:
          </p>
          <p className="rounded-xl bg-slate-900 border border-slate-700 p-4 font-mono text-amber-300">
            v<sub>max</sub> = v<sub>chart</sub> × √(1.2 × hoisted load in t ÷ wind area in m²)
          </p>
          <p>
            Wind area = largest face area × drag coefficient (cw). The 1.2 is the fixed reference in the standard, not a
            drag coefficient, and does not change. When the wind area is 1.2 m²/t or less, the chart wind speed applies.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border border-slate-700">
              <thead className="bg-slate-900 text-white"><tr><th className="p-3">Shape</th><th className="p-3">Typical cw</th></tr></thead>
              <tbody className="divide-y divide-slate-800">
                {CW_PRESETS.map((p) => <tr key={p.id}><td className="p-3">{p.label}</td><td className="p-3">{p.range}</td></tr>)}
              </tbody>
            </table>
          </div>

          <h2 className="font-display text-3xl font-bold text-white pt-6">Worked example</h2>
          <p>
            A {X.input.panelL} m × {X.input.panelH} m cladding panel weighing {f(X.input.loadT, 1)} t with its lifting
            accessories, on a crane whose chart allows {f(X.input.chartMs, 1)} m/s.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Wind area: {X.ap} m² × {f(X.input.cw, 1)} = {X.aw} m², or {f(X.ratio, 1)} m² per tonne, far above 1.2</li>
            <li>Maximum wind speed: {f(X.input.chartMs, 1)} × √(1.2 × {f(X.input.loadT, 1)} ÷ {X.aw}) = {f(X.vmax, 1)} m/s, about {f(msToMph(X.vmax), 0)} mph</li>
          </ul>
          <p>
            So this panel must not be lifted in gusts above about {f(X.vmax, 1)} m/s, little more than a light breeze, even though the chart
            says {f(X.input.chartMs, 1)} m/s.
          </p>
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
          <p>
            More on wind limits for every type of lifting equipment:{' '}
            <Link href="/blog/crane-wind-speed-limits" className="text-amber-400 hover:text-amber-300 underline">crane wind speed limits explained</Link>.
          </p>
          <p className="text-sm text-gray-400 pt-4">Sources: {SOURCES.en13000}; {SOURCES.liebherr}.</p>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Lifting panels or other large-area loads?</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            RMT crane lift plans set the wind limit for the actual load, not just the chart figure, alongside the duty,
            outrigger loads and exclusion zone, written by a CPCS A61 Appointed Person.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services/mobile-crane-lift-plans" className="btn-primary inline-flex items-center gap-2">Mobile crane lift plans <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/resources/outrigger-mat-calculator" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">Outrigger mat calculator <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/resources/load-weight-calculator" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">Load weight calculator <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <a href="tel:07803808093" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3"><Phone className="w-5 h-5" aria-hidden="true" />07803 808093</a>
          </div>
        </div>
      </section>
    </>
  )
}
