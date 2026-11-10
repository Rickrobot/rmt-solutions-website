import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { liftPlanVideos, videoObject, LIFT_PLAN_VIDEOS_PATH } from '@/lib/liftPlanVideos'

// The YouTube player for one 3D lift plan video. Used on the watch page
// (bare player) and, as a section, on service pages and the drawing hub.
// The player is YouTube's privacy-enhanced (no-cookie) embed, so no YouTube
// cookies are set until the visitor plays the video.
export function VideoPlayer({ video, priority = false }) {
  return (
    <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0`}
        title={video.title}
        loading={priority ? 'eager' : 'lazy'}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  )
}

export function videoSchema(video) {
  return { '@context': 'https://schema.org', ...videoObject(video) }
}

// Section for a page that is not the video's own watch page.
export default function LiftPlanVideo({ slug, background = 'bg-slate-900' }) {
  const video = liftPlanVideos.find((v) => v.slug === slug)
  if (!video) return null
  const watchHref = `${LIFT_PLAN_VIDEOS_PATH}/${video.slug}`
  return (
    <section id={`video-${video.slug}`} aria-labelledby={`video-${video.slug}-heading`} className={`scroll-mt-28 py-20 ${background}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema(video)).replace(/</g, '\\u003c') }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3">
          <VideoPlayer video={video} />
        </div>
        <div className="lg:col-span-2">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Lift plan in 3D</p>
          <h2 id={`video-${video.slug}-heading`} className="font-display text-3xl font-bold text-white mb-5">{video.headline}</h2>
          <p className="text-gray-300 leading-relaxed mb-6">{video.description}</p>
          <div className="flex flex-col gap-3">
            <Link href={watchHref} className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
              <PlayCircle className="w-5 h-5" aria-hidden="true" />Watch with the lift figures and chapters
            </Link>
            <Link href={video.drawingsAnchor} className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
              {video.drawingsLabel || 'See the drawings it was made from'} <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
