import Link from 'next/link'
import { ArrowRight, Phone, PlayCircle } from 'lucide-react'
import ExcavatorLiftCalculator from '@/components/ExcavatorLiftCalculator'
import { SOURCES, DEFAULT_LIMIT_PCT, WORKED_EXAMPLE as X } from '@/lib/excavatorLift'

/*
 * Excavator lift capacity calculator (Nov 2026).
 *
 * Why: excavator lifting is the site's strongest service, and "excavator lift
 * capacity" searches are answered by US sites and maker brochures that leave
 * the quick hitch out. This one uses UK practice (CPA CIG 0801: the hitch is
 * part of the load) and RMT's own method, holds no charts, and links into the
 * excavator lift plan page, the manhole ring video and the drawing examples.
 */

const BASE = 'https://www.rmtsafetysolutions.com'
const PATH = '/resources/excavator-lift-capacity-calculator'
const URL_ = `${BASE}${PATH}`
const f = (v, dp) => v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp })

/* 41 characters; layout.js appends " | RMT Solutions". */
export const metadata = {
  title: 'Excavator Lift Capacity Calculator (Free)',
  description:
    'Free excavator lift calculator: gross load with the quick hitch and accessories, utilisation of the maker’s ISO 10567 chart, and the most you can lift.',
  alternates: { canonical: URL_ },
  openGraph: {
    title: 'Excavator Lift Capacity & Utilisation Calculator',
    description:
      'Check an excavator lift against the maker’s rated lift capacity chart, with the quick hitch and lifting accessories counted in.',
    url: URL_,
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'How is an excavator’s lift capacity worked out?',
    a: 'Manufacturers rate excavators to ISO 10567. The figure in each cell of the lift capacity chart is the smaller of 75% of the load that would tip the machine and 87% of what the hydraulics can lift at that radius and height. Figures marked with an asterisk are limited by the hydraulics rather than stability.',
  },
  {
    q: 'Do I add the quick hitch to the load?',
    a: 'Yes. The CPA guidance on lifting with excavators says the quick hitch, and any bucket or accessory left on, has to be added to the load when checking it against the rated capacity, and the makers’ chart notes say the same for slings and lifting devices. Charts generally exclude the bucket and hitch, so they come off the capacity or, the same thing, go on the load.',
  },
  {
    q: 'Can I lift with the bucket on?',
    a: 'RMT plans every excavator lift with the bucket removed, lifting from the quick hitch lifting eye or another rated lifting point. The CPA guidance says the bucket should be removed where possible, and if anything stays on, its full weight is part of the load.',
  },
  {
    q: 'Why is the capacity lower over the side?',
    a: 'A tracked excavator is more stable along its tracks than across them, so most charts give lower figures over the side. If the load will slew round, use the over-side figure. Blades, stabilisers, counterweight and the arm fitted all change the chart too, so use the one for the machine as it is set up.',
  },
  {
    q: 'What safety devices does an excavator need for lifting?',
    a: 'A rated capacity table in the cab, a load hooking device or rated lifting point, and, where the rated capacity is over 1 tonne or the overturning moment over 40,000 Nm, a boom lowering control device (hose burst valves) and an overload warning device. The warning only warns: it can be muted and does not stop the lift.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${URL_}#webpage`,
      url: URL_,
      name: 'Excavator lift capacity calculator',
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
        { '@type': 'ListItem', position: 3, name: 'Excavator lift capacity calculator', item: URL_ },
      ],
    },
  ],
}

export default function ExcavatorLiftCapacityCalculatorPage() {
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
            <span className="text-gray-300">Excavator lift capacity calculator</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Excavator Lift Capacity <span className="gradient-text">Calculator</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl">
            Check an excavator lift against the manufacturer&apos;s rated lift capacity chart, with the quick hitch and
            lifting accessories counted in, the way a lift plan does it. Built by a CPCS A61 Appointed Person who writes and
            reviews excavator lift plans.
          </p>
        </div>
      </section>

      <section className="bg-slate-900 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ExcavatorLiftCalculator />
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-300 leading-relaxed space-y-6">
          <h2 className="font-display text-3xl font-bold text-white">How the calculation works</h2>
          <h3 className="text-xl font-semibold text-white">1. Read the capacity from the maker&apos;s chart</h3>
          <p>
            Find the column for the radius from the slew centre to the load and the row for the height of the lift point,
            on the chart for the boom and arm fitted, the counterweight, the undercarriage and blade position, over the
            front or over the side. Under ISO 10567 that figure is already the smaller of 75% of the tipping load and 87% of
            the hydraulic lift capacity. A blank cell means no lifting at that point.
          </p>
          <h3 className="text-xl font-semibold text-white">2. Work out the gross load</h3>
          <p className="rounded-xl bg-slate-900 border border-slate-700 p-4 font-mono text-amber-300">
            Gross load = load + lifting accessories + quick hitch
          </p>
          <p>
            The charts generally exclude the bucket and the hitch, and the CPA guidance says the hitch has to be added to the
            load. RMT plans every lift with the bucket off; if any bucket or attachment stays on, its weight goes in too.
          </p>
          <h3 className="text-xl font-semibold text-white">3. Check the utilisation</h3>
          <p className="rounded-xl bg-slate-900 border border-slate-700 p-4 font-mono text-amber-300">
            Utilisation = gross load ÷ chart capacity × 100%
          </p>
          <p>
            RMT plans excavator lifts to no more than {DEFAULT_LIMIT_PCT}% unless the site sets a lower limit; railway and
            some client sites do. Over 100% the lift must not be made with that machine at that radius.
          </p>

          <h2 className="font-display text-3xl font-bold text-white pt-6">Worked example</h2>
          <p>
            An excavator lowers a {f(X.input.loadKg, 0)} kg concrete chamber ring into a manhole box at 6.0 m radius, on a
            3-leg chain weighing {X.input.accessoriesKg} kg from a {X.input.hitchKg} kg quick hitch, bucket off. The maker&apos;s
            chart gives {f(X.input.chartKg, 0)} kg at that radius and height.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Gross load: {f(X.input.loadKg, 0)} + {X.input.accessoriesKg} + {X.input.hitchKg} = {f(X.gross, 0)} kg</li>
            <li>Utilisation: {f(X.gross, 0)} ÷ {f(X.input.chartKg, 0)} = {f(X.util, 1)}%, within {DEFAULT_LIMIT_PCT}%</li>
            <li>Heaviest load within {DEFAULT_LIMIT_PCT}%: {f(X.input.chartKg, 0)} × 0.9 − {X.input.accessoriesKg + X.input.hitchKg} = {f(X.maxNet, 0)} kg</li>
          </ul>
          <p>
            <Link href="/resources/lift-plan-videos/excavator-manhole-ring-lift-plan-3d" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
              <PlayCircle className="w-5 h-5" aria-hidden="true" />Watch this lift in 3D
            </Link>
          </p>
          <p className="text-sm text-gray-400">Illustrative figures only. Use the weights and the chart for your own machine.</p>

          <h2 className="font-display text-3xl font-bold text-white pt-6">Questions</h2>
          <div className="space-y-5">
            {faqs.map((x) => (
              <div key={x.q}>
                <h3 className="text-lg font-semibold text-white mb-1">{x.q}</h3>
                <p>{x.a}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 pt-4">Sources: {SOURCES.iso}; {SOURCES.cpa}; {SOURCES.sfpsg}.</p>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Need the lift planned properly?</h2>
          <p className="text-gray-300 leading-relaxed mb-8">
            RMT excavator lift plans check the duty on the maker&apos;s chart for the machine as configured, and come with an
            elevation, an exclusion zone plan and a rigging drawing, written by a CPCS A61 Appointed Person.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/services/excavator-lift-plans" className="btn-primary inline-flex items-center gap-2">Excavator lift plans <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/resources/sling-angle-calculator" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">Sling angle calculator <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <a href="tel:07803808093" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3"><Phone className="w-5 h-5" aria-hidden="true" />07803 808093</a>
          </div>
        </div>
      </section>
    </>
  )
}
