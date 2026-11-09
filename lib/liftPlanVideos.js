// 3D lift plan videos on the RMT Solutions Ltd YouTube channel (Nov 2026).
//
// Why: Google shows a video thumbnail in search only for a page whose main
// content is the video, so each video has its own watch page at
// /resources/lift-plan-videos/{slug}. The same videos are also embedded on
// their service pages and the drawing examples hub. Every figure below is
// taken from the RMT engine drawings the video was rendered from.
//
// To add a video: upload it to YouTube, add an entry here (youtubeId, the
// thumbnail in /public/images/videos, duration as ISO 8601) and push. The
// watch page, sitemap entry and schema are built from this list.

const SITE = 'https://www.rmtsafetysolutions.com'

export const LIFT_PLAN_VIDEOS_PATH = '/resources/lift-plan-videos'

export const liftPlanVideos = [
  {
    slug: 'mobile-crane-lift-plan-3d',
    youtubeId: 'wMi5sEyQtZo',
    shortId: 'Ft0izRCwVkM',
    service: 'mobile-crane',
    serviceHref: '/services/mobile-crane-lift-plans',
    serviceLabel: 'Mobile crane lift plans',
    drawingsAnchor: '/resources/lift-plan-drawing-examples#examples-mobile-crane',
    title: 'Mobile Crane Lift Plan Example in 3D',
    headline: 'Mobile crane lift plan example: a 3D walk round the lift',
    metaTitle: 'Mobile Crane Lift Plan Example in 3D',
    metaDescription:
      'A 32-second 3D video of an RMT mobile crane lift plan: a Liebherr LTM 1100-5.2 lifting a 4,200 kg unit at 44.7% utilisation, with the exclusion zone.',
    description:
      'A 3D view from an RMT Solutions mobile crane lift plan (example job). A Liebherr LTM 1100-5.2 lifts a 4,200 kg air handling unit off a delivery vehicle at a 16 m landing radius, at 44.7% utilisation of the Liebherr duty chart.',
    thumbnail: '/images/videos/mobile-crane-lift-plan-3d-video.webp',
    duration: 'PT32S',
    uploadDate: '2026-11-09T18:15:00+00:00',
    figures: [
      ['Crane', 'Liebherr LTM 1100-5.2'],
      ['Configuration', '22.7 m main boom, 11.5 t counterweight, 7.36 x 7.00 m outrigger base'],
      ['Load', '4,200 kg air handling unit'],
      ['Gross load', '4,691 kg including the hook block and 4-leg chain'],
      ['Duty', '10.5 t on the Liebherr duty chart at the 16 m landing radius'],
      ['Utilisation', '44.7%'],
    ],
    chapters: [
      ['0:00', 'The lift in 3D, drawn from an RMT mobile crane lift plan'],
      ['0:05', 'The crane: Liebherr LTM 1100-5.2 with a 22.7 m main boom, 11.5 t counterweight and 7.36 x 7.00 m outrigger base'],
      ['0:10', 'The load: a 4,200 kg air handling unit, gross load 4,691 kg with the hook block and 4-leg chain'],
      ['0:16', 'The duty check: 10.5 t at the 16 m landing radius, 44.7% utilisation'],
      ['0:21', 'The exclusion zone barrier layout, outrigger mats, slinger and lift supervisor'],
      ['0:28', 'Lift plans by a CPCS A61 Appointed Person'],
    ],
  },
  {
    slug: 'excavator-manhole-ring-lift-plan-3d',
    youtubeId: 'KlJdCd7L2os',
    shortId: 'o5L6eKf9tWY',
    service: 'excavator',
    serviceHref: '/services/excavator-lift-plans',
    serviceLabel: 'Excavator lift plans',
    drawingsAnchor: '/resources/lift-plan-drawing-examples#examples-excavator-manhole',
    title: 'Excavator Lift Plan Example: Manhole Ring in 3D',
    headline: 'Excavator lift plan example: lowering a manhole ring into a manhole box',
    metaTitle: 'Excavator Lift Plan Example: Manhole Ring',
    metaDescription:
      'A 32-second 3D video of an RMT excavator lift plan: a Cat 320 GC, bucket off, lowering a 1,760 kg chamber ring into a manhole box at 42.6% utilisation.',
    description:
      'A 3D view from an RMT Solutions excavator lift plan (example job). A Cat 320 GC with the bucket off lifts a 1,760 kg chamber ring from the quick hitch lifting eye at 6.0 m radius and lowers it into a supported excavation, at 42.6% utilisation of the Caterpillar lift capacity chart.',
    thumbnail: '/images/videos/excavator-manhole-ring-lift-plan-3d-video.webp',
    duration: 'PT32S',
    uploadDate: '2026-11-09T18:20:00+00:00',
    figures: [
      ['Excavator', 'Cat 320 GC, bucket off, lifting from the quick hitch eye'],
      ['Load', '1,760 kg concrete chamber ring'],
      ['Gross load', '2,065 kg including the quick hitch and 3-leg chain'],
      ['Duty', '4,850 kg on the Caterpillar lift capacity chart at 6.0 m radius'],
      ['Utilisation', '42.6%'],
      ['Set-down', 'Into a manhole box with edge protection, inside the exclusion zone'],
    ],
    chapters: [
      ['0:00', 'The lift in 3D, drawn from an RMT excavator lift plan'],
      ['0:05', 'The excavator: Cat 320 GC with the bucket off, lifting from the quick hitch eye at 6.0 m radius'],
      ['0:10', 'The load: a 1,760 kg chamber ring, gross load 2,065 kg with the quick hitch and 3-leg chain'],
      ['0:16', 'The duty check: 4,850 kg on the Caterpillar chart at 6.0 m, 42.6% utilisation'],
      ['0:21', 'Into a supported excavation: manhole box, edge protection and exclusion zone'],
      ['0:28', 'Lift plans by a CPCS A61 Appointed Person'],
    ],
  },
]

export function liftPlanVideoUrl(video) {
  return `${SITE}${LIFT_PLAN_VIDEOS_PATH}/${video.slug}`
}

// VideoObject for structured data. Every page that shows the video emits it;
// the watch page is the one Google is expected to index the video against.
export function videoObject(video) {
  const watchUrl = liftPlanVideoUrl(video)
  return {
    '@type': 'VideoObject',
    '@id': `${watchUrl}#video`,
    name: video.title,
    description: video.description,
    thumbnailUrl: [`${SITE}${video.thumbnail}`, `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`],
    uploadDate: video.uploadDate,
    duration: video.duration,
    embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
    contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
    url: watchUrl,
    inLanguage: 'en-GB',
    isFamilyFriendly: true,
    publisher: {
      '@type': 'Organization',
      name: 'RMT Solutions Ltd',
      url: SITE,
      logo: { '@type': 'ImageObject', url: `${SITE}/images/og-lift-planning.jpg` },
    },
    hasPart: video.chapters.map(([time, name], i) => {
      const toSec = (t) => t.split(':').reduce((m, s) => m * 60 + Number(s), 0)
      const start = toSec(time)
      const next = video.chapters[i + 1]
      const end = next ? toSec(next[0]) : 32
      return {
        '@type': 'Clip',
        name,
        startOffset: start,
        endOffset: end,
        url: `https://www.youtube.com/watch?v=${video.youtubeId}&t=${start}`,
      }
    }),
  }
}
