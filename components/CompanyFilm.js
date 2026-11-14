import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'
import YouTubeFacade from '@/components/YouTubeFacade'

// The RMT Solutions company film (Nov 2026): 92 seconds on what RMT does and
// why it is quick - its own software, engine drawings, 3D lift animation and
// the 19-point review. On the RMT Solutions YouTube channel; the page shows the
// thumbnail and loads YouTube's no-cookie player only when play is pressed.
const SITE = 'https://www.rmtsafetysolutions.com'

export const companyFilm = {
  youtubeId: '7XPn0ZuGCoQ',
  title: 'RMT Solutions | Lift Plans, Lift Plan Reviews, Drawings and 3D Animation for UK Contractors',
  description:
    'RMT Solutions plans, draws and checks lifting operations for contractors across the UK, on its own software: more than 11.5 million published manufacturer duty points across 563 cranes, never interpolated. Lift plans from a CPCS A61 Appointed Person with 35 years in lifting, 19-point reviews against BS 7121 and LOLER 1998, engineering drawings to scale and full 3D lift animation.',
  thumbnail: '/images/videos/rmt-solutions-company-film.webp',
  duration: 'PT1M32S',
  uploadDate: '2026-11-14T11:15:00+00:00',
  chapters: [
    ['0:00', 'Every lift starts with a plan'],
    ['0:10', 'RMT Solutions'],
    ['0:21', 'Our own software'],
    ['0:34', 'Every lifting device'],
    ['0:40', 'Engineering drawings'],
    ['0:50', 'Full 3D lift animation'],
    ['0:59', '19-point lift plan review'],
    ['1:11', '24-hour reviews, 48-hour lift plans'],
    ['1:24', 'Get in touch'],
  ],
}

function schema(v) {
  const toSec = (t) => t.split(':').reduce((m, s) => m * 60 + Number(s), 0)
  const total = 92
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    '@id': `${SITE}/#company-film`,
    name: v.title,
    description: v.description,
    thumbnailUrl: [`${SITE}${v.thumbnail}`, `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`],
    uploadDate: v.uploadDate,
    duration: v.duration,
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    inLanguage: 'en-GB',
    isFamilyFriendly: true,
    publisher: {
      '@type': 'Organization',
      name: 'RMT Solutions Ltd',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/images/og-lift-planning.jpg` },
    },
    hasPart: v.chapters.map(([time, name], i) => {
      const next = v.chapters[i + 1]
      return {
        '@type': 'Clip',
        name,
        startOffset: toSec(time),
        endOffset: next ? toSec(next[0]) : total,
        url: `https://www.youtube.com/watch?v=${v.youtubeId}&t=${toSec(time)}`,
      }
    }),
  }
}

export default function CompanyFilm() {
  const v = companyFilm
  return (
    <section id="company-film" aria-labelledby="company-film-heading" className="scroll-mt-28 py-16 sm:py-20 bg-slate-950">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(v)).replace(/</g, '\\u003c') }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
            <YouTubeFacade youtubeId={v.youtubeId} title={v.title} thumbnail={v.thumbnail} />
          </div>
        </div>
        <div className="lg:col-span-2">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">See how we work</p>
          <h2 id="company-film-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
            Lift plans, reviews, drawings and 3D, on our own software
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Every duty in an RMT plan or review is a published manufacturer figure, read straight from our own database of more than
            11.5 million duty points across 563 cranes. Never interpolated. That is why we can turn round lift plan reviews within
            24 hours and new lift plans within 48.
          </p>
          <p className="text-gray-500 text-sm mb-6">Working days, from receipt of full job information. 1 min 32 s.</p>
          <div className="flex flex-col gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
              Request a quote <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Link>
            <a href={`https://www.youtube.com/watch?v=${v.youtubeId}`} className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-semibold" rel="noopener">
              <PlayCircle className="w-5 h-5" aria-hidden="true" />Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
