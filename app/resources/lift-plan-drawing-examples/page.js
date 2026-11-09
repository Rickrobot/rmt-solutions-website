import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'
import LiftDrawingExamples from '@/components/LiftDrawingExamples'
import { liftDrawingExamples } from '@/lib/liftDrawingExamples'
import { liftPlanVideos, LIFT_PLAN_VIDEOS_PATH } from '@/lib/liftPlanVideos'

// Lift plan drawing examples hub (Nov 2026).
//
// Why this page exists: Search Console's image search report showed RMT
// drawings appearing for "lift plan drawing", "lifting plan example" and
// "crane lift plan" only on page 3 to page 9 of Google Images, because the
// drawings were spread one set per service page. This page puts every
// example drawing on one page whose title, headings and captions match
// those searches. Each set also stays on its own service page.

const SITE = 'https://www.rmtsafetysolutions.com'
const PATH = '/resources/lift-plan-drawing-examples'
const URL_ = `${SITE}${PATH}`

// the order the sets appear on this page: crane first, the weakest image search
const ORDER = ['mobile-crane', 'excavator-manhole', 'excavator', 'steel', 'lorry-loader', 'telehandler']
const SETS = ORDER.map((id) => liftDrawingExamples.find((e) => e.id === id)).filter(Boolean)
const FIRST = SETS[0].drawings[0]

export const metadata = {
  title: 'Lift Plan Drawing Examples | Crane, Excavator & More',
  description:
    'Example lift plan drawings from a CPCS Appointed Person: elevations, exclusion zone plans, rigging and 3D views for cranes, excavators and lorry loaders.',
  alternates: { canonical: URL_ },
  openGraph: {
    title: 'Lift Plan Drawing Examples | RMT Solutions',
    description:
      'Elevations, exclusion zone plans, rigging drawings and 3D views from real RMT lift plan drawing sets.',
    url: URL_,
    siteName: 'RMT Solutions - Lift Planning Specialists',
    images: [{ url: `${SITE}${FIRST.src}`, width: 2382, height: 1684, alt: FIRST.alt }],
  },
}

const pageSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${URL_}#webpage`,
      url: URL_,
      name: 'Lift plan drawing examples',
      description: metadata.description,
      primaryImageOfPage: { '@id': `${SITE}${FIRST.src}#image` },
      image: SETS.flatMap((s) => s.drawings.map((d) => ({ '@id': `${SITE}${d.src}#image` }))),
      isPartOf: { '@type': 'WebSite', name: 'RMT Solutions Ltd', url: SITE },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE}/resources` },
        { '@type': 'ListItem', position: 3, name: 'Lift plan drawing examples', item: URL_ },
      ],
    },
  ],
}

export default function LiftPlanDrawingExamplesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema).replace(/</g, '\\u003c') }} />
      <section className="relative pt-32 pb-16 overflow-hidden bg-slate-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/resources" className="hover:text-amber-400 transition">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Lift plan drawing examples</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Lift Plan Drawing <span className="gradient-text">Examples</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-6">
            Example lift plan drawings from RMT Solutions for mobile cranes, excavators, steel erection, lorry
            loaders and telehandlers. Each set shows the elevation, the exclusion zone plan and the rigging
            drawing a lift team is briefed from, drawn to the machine&apos;s real dimensions and the planned lift.
          </p>
          <p className="text-gray-400 leading-relaxed max-w-4xl mb-8">
            A good lift plan drawing answers the questions a site manager, slinger and operator will ask: where the
            machine stands, how far it reaches, how high the boom goes, where the barrier runs, who stands where and
            exactly what is under the hook. The figures on every sheet (radius, gross load, capacity and utilisation)
            come from the manufacturer&apos;s own duty chart, and the gross load includes the rigging, the hook block or
            the quick hitch.
          </p>
          <ul className="flex flex-wrap gap-3">
            {SETS.map((s) => (
              <li key={s.id}>
                <a href={`#examples-${s.id}`} className="inline-block rounded-full border border-slate-600 hover:border-amber-400 text-gray-200 hover:text-amber-400 px-4 py-2 text-sm font-semibold transition">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3D videos of two of these lifts (Nov 2026) */}
      <section aria-labelledby="lift-plan-videos-heading" className="py-14 bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="lift-plan-videos-heading" className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">Watch two of these lifts in 3D</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {liftPlanVideos.map((v) => (
              <Link key={v.slug} href={`${LIFT_PLAN_VIDEOS_PATH}/${v.slug}`} className="group flex gap-4 items-center rounded-2xl bg-slate-900 border border-slate-700 hover:border-amber-400 p-3 transition">
                <div className="relative w-40 shrink-0 aspect-video rounded-lg overflow-hidden">
                  <Image src={v.thumbnail} alt={v.title} fill sizes="160px" className="object-cover" />
                  <PlayCircle className="absolute inset-0 m-auto w-10 h-10 text-white/90 drop-shadow" aria-hidden="true" />
                </div>
                <span className="text-white font-semibold group-hover:text-amber-400 transition">{v.headline}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {SETS.map((s) => (
        <LiftDrawingExamples key={s.id} type={s.id} pageHref={PATH} anchor={`examples-${s.id}`} />
      ))}

      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-6">What each lift plan drawing shows</h2>
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p><strong className="text-white">Elevation (side view).</strong> The machine at the planned radius with its boom or arm solved to the real member lengths, the hook height, the maximum height of machine or load for overhead services, the tail swing and the load at the pick and the set-down.</p>
            <p><strong className="text-white">Plan (top view).</strong> The machine footprint, outriggers or tracks, the working radius, the tail swing and the exclusion zone barrier layout, with the slinger, lift supervisor and operator positions.</p>
            <p><strong className="text-white">Rigging drawing.</strong> Everything below the hook: the master link, the sling legs at their angle, the shackles and the load&apos;s lifting points, with each item&apos;s rating and mass and the gross load the duty chart is read against. To check a sling yourself, use the free <Link href="/resources/sling-angle-calculator" className="text-amber-400 hover:text-amber-300 underline">sling angle calculator</Link>.</p>
            <p><strong className="text-white">3D views.</strong> The same lift in three dimensions for the briefing, built from the same geometry as the elevation and plan. They are illustrative; the figured dimensions on the elevation and plan govern.</p>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mt-8">
            These are example drawings for fictional or anonymised jobs, marked as examples. They are not site
            instructions or approved plans for another lift: every lift needs a plan for the actual machine, load and site.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link href="/services/lift-plans" className="btn-primary inline-flex items-center gap-2">Get a lift plan written <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/resources/lift-plan-templates" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">Free lift plan templates <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
