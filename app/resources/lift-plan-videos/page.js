import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { liftPlanVideos, liftPlanVideoUrl, LIFT_PLAN_VIDEOS_PATH } from '@/lib/liftPlanVideos'

// Index of the 3D lift plan videos (Nov 2026). Each video has its own watch
// page; this page lists them so they sit one click from the resources hub.

const SITE = 'https://www.rmtsafetysolutions.com'
const URL_ = `${SITE}${LIFT_PLAN_VIDEOS_PATH}`

export const metadata = {
  title: 'Lift Plan Videos in 3D: Cranes, HIABs & More',
  description:
    '3D videos from RMT lift plans: cranes, an excavator, a telehandler, a HIAB cabin lift and steel erection, with the machine, load and duty for each.',
  alternates: { canonical: URL_ },
  openGraph: {
    title: 'Lift Plan Videos | RMT Solutions',
    description: 'Short 3D videos of RMT lift plan drawings for cranes, excavators, telehandlers, lorry loaders and steel erection.',
    url: URL_,
    siteName: 'RMT Solutions - Lift Planning Specialists',
    images: [{ url: `${SITE}${liftPlanVideos[0].thumbnail}`, width: 1280, height: 720, alt: liftPlanVideos[0].title }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${URL_}#webpage`,
      url: URL_,
      name: 'Lift plan videos',
      description: metadata.description,
      isPartOf: { '@type': 'WebSite', name: 'RMT Solutions Ltd', url: SITE },
      hasPart: liftPlanVideos.map((v) => ({ '@id': `${liftPlanVideoUrl(v)}#video` })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
        { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE}/resources` },
        { '@type': 'ListItem', position: 3, name: 'Lift plan videos', item: URL_ },
      ],
    },
  ],
}

export default function LiftPlanVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <section className="pt-32 pb-20 bg-slate-900 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/resources" className="hover:text-amber-400 transition">Resources</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Lift plan videos</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Lift Plan <span className="gradient-text">Videos</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mb-12">
            Short 3D videos made from RMT lift plan drawings. Each one walks round the lift and shows the machine,
            the load, the duty check and the exclusion zone, with the figures from the plan.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {liftPlanVideos.map((v) => (
              <Link key={v.slug} href={`${LIFT_PLAN_VIDEOS_PATH}/${v.slug}`} className="group rounded-2xl overflow-hidden bg-slate-950 border border-slate-700 hover:border-amber-400 transition">
                <div className="relative aspect-video">
                  <Image src={v.thumbnail} alt={v.title} fill sizes="(max-width: 767px) 100vw, 50vw" className="object-cover" />
                  <PlayCircle className="absolute inset-0 m-auto w-16 h-16 text-white/90 drop-shadow-lg" aria-hidden="true" />
                </div>
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-white group-hover:text-amber-400 transition mb-2">{v.headline}</h2>
                  <p className="text-gray-400 leading-relaxed mb-4">{v.metaDescription}</p>
                  <span className="inline-flex items-center gap-2 text-amber-400 font-semibold">Watch the video <ArrowRight className="w-5 h-5" aria-hidden="true" /></span>
                </div>
              </Link>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-12">
            <Link href="/resources/lift-plan-drawing-examples" className="btn-primary inline-flex items-center gap-2">Lift plan drawing examples <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href="/services/lift-plans" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">Get a lift plan written <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
          </div>
        </div>
      </section>
    </>
  )
}
