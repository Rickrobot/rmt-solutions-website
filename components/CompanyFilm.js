import Link from 'next/link'
import { ArrowRight, PlayCircle } from 'lucide-react'
import YouTubeFacade from '@/components/YouTubeFacade'

// RMT Solutions company films (Nov 2026), on the RMT Solutions YouTube channel:
// the 92-second hero film and four service films. Each page shows the film's
// thumbnail and loads YouTube's no-cookie player only when play is pressed.
// <CompanyFilm film="hero" path="/" /> - `path` is the page the film sits on,
// used for the VideoObject markup.
const SITE = 'https://www.rmtsafetysolutions.com'
const SMALL_PRINT = 'Working days, from receipt of full job information.'

export const companyFilms = {
  hero: {
    youtubeId: '7XPn0ZuGCoQ',
    title: 'RMT Solutions | Lift Plans, Lift Plan Reviews, Drawings and 3D Animation for UK Contractors',
    description:
      'RMT Solutions plans, draws and checks lifting operations for contractors across the UK, on its own software: more than 11.5 million published manufacturer duty points across 563 cranes, never interpolated. Lift plans from a CPCS A61 Appointed Person with 35 years in lifting, 19-point reviews against BS 7121 and LOLER 1998, engineering drawings to scale and full 3D lift animation.',
    thumbnail: '/images/videos/rmt-solutions-company-film.webp',
    seconds: 92,
    uploadDate: '2026-11-14T11:15:00+00:00',
    eyebrow: 'See how we work',
    heading: 'Lift plans, reviews, drawings and 3D, on our own software',
    text: 'Every duty in an RMT plan or review is a published manufacturer figure, read straight from our own database of more than 11.5 million duty points across 563 cranes. Never interpolated. That is why we can turn round lift plan reviews within 24 hours and new lift plans within 48.',
    note: SMALL_PRINT,
    chapters: [
      ['0:00', 'Every lift starts with a plan'], ['0:10', 'RMT Solutions'], ['0:21', 'Our own software'],
      ['0:34', 'Every lifting device'], ['0:40', 'Engineering drawings'], ['0:50', 'Full 3D lift animation'],
      ['0:59', '19-point lift plan review'], ['1:11', '24-hour reviews, 48-hour lift plans'], ['1:24', 'Get in touch'],
    ],
  },
  'lift-plans': {
    youtubeId: 'ORX5iT04VFg',
    title: 'Lift Plans for Every Lifting Device, Written by a CPCS A61 Appointed Person | RMT Solutions',
    description:
      'RMT Solutions writes lift plans for mobile cranes, tower cranes, lorry loaders, spider cranes, excavators, telehandlers and MEWPs. Every duty comes from the manufacturer’s published chart, checked by our own software and never interpolated, and every plan comes with engineering drawings and a 3D animation of the lift.',
    thumbnail: '/images/videos/rmt-solutions-film-lift-plans.webp',
    seconds: 46,
    uploadDate: '2026-11-14T11:35:00+00:00',
    eyebrow: 'Lift plans in 46 seconds',
    heading: 'Every lifting device, planned by a CPCS A61 Appointed Person',
    text: 'Every duty comes from the manufacturer’s published chart, checked by our own software. Each plan comes with engineering drawings to scale and a 3D animation of the lift. New lift plans within 48 hours.',
    note: SMALL_PRINT,
  },
  reviews: {
    youtubeId: 'R6ZhCOJq1qQ',
    title: '19-Point Lift Plan Review: BS 7121, LOLER and the Maker’s Data, Back in 24 Hours | RMT Solutions',
    description:
      'The RMT Solutions 19-point lift plan review checks a lift plan against BS 7121, LOLER 1998 and the manufacturer’s own data: every duty, radius and accessory, the ground, the people and the environment, with a clear CAT A or CAT B decision and findings the team can act on.',
    thumbnail: '/images/videos/rmt-solutions-film-reviews.webp',
    seconds: 40,
    uploadDate: '2026-11-14T11:35:00+00:00',
    eyebrow: 'The review in 40 seconds',
    heading: 'A clear CAT A or CAT B decision, back within 24 hours',
    text: 'Every duty, radius and accessory, the ground, the people and the environment, checked against BS 7121, LOLER 1998 and the manufacturer’s own data, with findings your team can act on.',
    note: SMALL_PRINT,
  },
  'drawings-3d': {
    youtubeId: 'abtRaUGoBFk',
    title: 'Lift Plan Drawings and 3D Lift Animation, Solved From Real Machine Geometry | RMT Solutions',
    description:
      'Elevation, plan and rigging drawings solved from the machine’s real geometry, to scale, on every RMT lift plan, then the whole lift animated in 3D from setting up to set-down, so the operator, slinger and supervisor all see the same plan before the first lift.',
    thumbnail: '/images/videos/rmt-solutions-film-drawings-3d.webp',
    seconds: 36,
    uploadDate: '2026-11-14T11:35:00+00:00',
    eyebrow: 'Drawings and 3D in 36 seconds',
    heading: 'Drawings to scale, and the whole lift in 3D',
    text: 'Elevation, plan and rigging drawings solved from the machine’s real geometry, then the lift animated from setting up to set-down, so the operator, the slinger and the supervisor all see one plan.',
  },
  software: {
    youtubeId: 'Raa8ZUuuIqk',
    title: '11.5 Million Published Crane Duties, Never Interpolated: RMT’s Own Lift Planning Software',
    description:
      'RMT Solutions built its own software for lifting: 11.5 million published manufacturer duty points across 563 cranes from 12 manufacturers, plus lorry loaders, excavators and telehandlers. Every figure is a published point, read directly with the chart referenced, never interpolated.',
    thumbnail: '/images/videos/rmt-solutions-film-software.webp',
    seconds: 38,
    uploadDate: '2026-11-14T11:35:00+00:00',
    eyebrow: 'Our software in 38 seconds',
    heading: '11.5 million published crane duties. Never interpolated.',
    text: 'Every figure in an RMT plan or review is a published point from the manufacturer’s chart, read directly with the chart referenced. It is why we are fast, and why our numbers stand up.',
  },
}

const iso = (s) => `PT${Math.floor(s / 60) ? Math.floor(s / 60) + 'M' : ''}${s % 60 ? (s % 60) + 'S' : ''}`

function schema(v, path) {
  const toSec = (t) => t.split(':').reduce((m, s) => m * 60 + Number(s), 0)
  const o = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.title,
    description: v.description,
    thumbnailUrl: [`${SITE}${v.thumbnail}`, `https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`],
    uploadDate: v.uploadDate,
    duration: iso(v.seconds),
    embedUrl: `https://www.youtube.com/embed/${v.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    url: `${SITE}${path}`,
    inLanguage: 'en-GB',
    isFamilyFriendly: true,
    publisher: {
      '@type': 'Organization',
      name: 'RMT Solutions Ltd',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/images/og-lift-planning.jpg` },
    },
  }
  if (v.chapters) {
    o.hasPart = v.chapters.map(([time, name], i) => {
      const next = v.chapters[i + 1]
      return { '@type': 'Clip', name, startOffset: toSec(time), endOffset: next ? toSec(next[0]) : v.seconds,
        url: `https://www.youtube.com/watch?v=${v.youtubeId}&t=${toSec(time)}` }
    })
  }
  return o
}

export default function CompanyFilm({ film = 'hero', path = '/', background = 'bg-slate-950' }) {
  const v = companyFilms[film]
  if (!v) return null
  const mins = Math.floor(v.seconds / 60), secs = v.seconds % 60
  return (
    <section id={`film-${film}`} aria-labelledby={`film-${film}-heading`} className={`scroll-mt-28 py-16 sm:py-20 ${background}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema(v, path)).replace(/</g, '\\u003c') }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-700 bg-slate-950 shadow-2xl">
            <YouTubeFacade youtubeId={v.youtubeId} title={v.title} thumbnail={v.thumbnail} />
          </div>
        </div>
        <div className="lg:col-span-2">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">{v.eyebrow}</p>
          <h2 id={`film-${film}-heading`} className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">{v.heading}</h2>
          <p className="text-gray-300 leading-relaxed mb-4">{v.text}</p>
          <p className="text-gray-500 text-sm mb-6">{v.note ? v.note + ' ' : ''}{mins ? `${mins} min ` : ''}{secs} s.</p>
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
