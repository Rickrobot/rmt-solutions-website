import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, Phone, Smartphone } from 'lucide-react'
import { VideoPlayer } from '@/components/LiftPlanVideo'
import { liftPlanVideos, liftPlanVideoUrl, videoObject, LIFT_PLAN_VIDEOS_PATH } from '@/lib/liftPlanVideos'

// Watch page for one 3D lift plan video (Nov 2026). The video is the first
// and main thing on the page, which is what Google needs before it will show
// a video thumbnail for the page in search results.

const SITE = 'https://www.rmtsafetysolutions.com'

export const dynamicParams = false

export function generateStaticParams() {
  return liftPlanVideos.map((v) => ({ slug: v.slug }))
}

function findVideo(slug) {
  return liftPlanVideos.find((v) => v.slug === slug)
}

export function generateMetadata({ params }) {
  const video = findVideo(params.slug)
  if (!video) return {}
  const url = liftPlanVideoUrl(video)
  return {
    title: { absolute: `${video.metaTitle} | RMT Solutions` },
    description: video.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: 'video.other',
      title: video.title,
      description: video.metaDescription,
      url,
      siteName: 'RMT Solutions - Lift Planning Specialists',
      images: [{ url: `${SITE}${video.thumbnail}`, width: 1280, height: 720, alt: video.title }],
      videos: [{ url: `https://www.youtube.com/embed/${video.youtubeId}`, width: 1280, height: 720 }],
    },
  }
}

export default function LiftPlanVideoPage({ params }) {
  const video = findVideo(params.slug)
  if (!video) notFound()
  const url = liftPlanVideoUrl(video)
  const others = liftPlanVideos.filter((v) => v.slug !== video.slug)
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: video.title,
        description: video.metaDescription,
        primaryImageOfPage: { '@type': 'ImageObject', url: `${SITE}${video.thumbnail}` },
        mainEntity: { '@id': `${url}#video` },
        isPartOf: { '@type': 'WebSite', name: 'RMT Solutions Ltd', url: SITE },
      },
      videoObject(video),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
          { '@type': 'ListItem', position: 2, name: 'Resources', item: `${SITE}/resources` },
          { '@type': 'ListItem', position: 3, name: 'Lift plan videos', item: `${SITE}${LIFT_PLAN_VIDEOS_PATH}` },
          { '@type': 'ListItem', position: 4, name: video.title, item: url },
        ],
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
      <section className="pt-32 pb-12 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/resources" className="hover:text-amber-400 transition">Resources</Link>
            <span className="mx-2">/</span>
            <Link href={LIFT_PLAN_VIDEOS_PATH} className="hover:text-amber-400 transition">Lift plan videos</Link>
          </nav>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-white mb-8">{video.headline}</h1>
          <VideoPlayer video={video} priority />
          <p className="text-xl text-gray-300 leading-relaxed mt-8">{video.description}</p>
          <p className="text-gray-400 leading-relaxed mt-4">
            The video is rendered from the same 3D model as the plan&apos;s drawings, so the machine, the radius and
            the load match the figures on the sheets.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-5">The lift in figures</h2>
            <dl className="divide-y divide-slate-800 border-y border-slate-800">
              {video.figures.map(([label, value]) => (
                <div key={label} className="py-3 grid grid-cols-3 gap-4">
                  <dt className="text-gray-400">{label}</dt>
                  <dd className="col-span-2 text-white">{value}</dd>
                </div>
              ))}
            </dl>
            {video.figures.some(([label]) => label === 'Utilisation') && (
              <p className="text-gray-400 text-sm leading-relaxed mt-4">
                Utilisation is the gross load, including all the lifting accessories, divided by the capacity on the
                manufacturer&apos;s chart for that configuration and radius.
              </p>
            )}
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold text-white mb-5">What the video shows</h2>
            <ol className="space-y-3">
              {video.chapters.map(([time, text]) => {
                const sec = time.split(':').reduce((m, s) => m * 60 + Number(s), 0)
                return (
                  <li key={time} className="flex gap-4">
                    <a href={`https://www.youtube.com/watch?v=${video.youtubeId}&t=${sec}s`} target="_blank" rel="noopener noreferrer" className="shrink-0 font-mono text-amber-400 hover:text-amber-300">{time}</a>
                    <span className="text-gray-300">{text}</span>
                  </li>
                )
              })}
            </ol>
            <a href={`https://www.youtube.com/shorts/${video.shortId}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold mt-6">
              <Smartphone className="w-5 h-5" aria-hidden="true" />Watch the vertical version on YouTube Shorts
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Every RMT lift plan comes with drawings like these</h2>
          <p className="text-gray-300 leading-relaxed mb-8 max-w-3xl">
            An elevation, an exclusion zone plan, a rigging drawing and 3D views, drawn to the machine&apos;s real
            dimensions and written by a CPCS A61 Appointed Person with 35 years in lifting operations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href={video.serviceHref} className="btn-primary inline-flex items-center gap-2">{video.serviceLabel} <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <Link href={video.drawingsAnchor} className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3">{video.drawingsLabel || 'See the drawing set'} <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
            <a href="tel:07803808093" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold px-2 py-3"><Phone className="w-5 h-5" aria-hidden="true" />07803 808093</a>
          </div>
          {others.length > 0 && (
            <div className="mt-12 border-t border-slate-800 pt-8">
              <h2 className="text-lg font-semibold text-white mb-3">More lift plan videos</h2>
              <ul className="space-y-2">
                {others.map((o) => (
                  <li key={o.slug}><Link href={`${LIFT_PLAN_VIDEOS_PATH}/${o.slug}`} className="text-amber-400 hover:text-amber-300">{o.headline}</Link></li>
                ))}
              </ul>
            </div>
          )}
          <p className="text-gray-500 text-sm leading-relaxed mt-10">
            Example job for illustration. It is not a site instruction or an approved plan for another lift: every
            lift needs a plan for the actual machine, load and site.
          </p>
        </div>
      </section>
    </>
  )
}
