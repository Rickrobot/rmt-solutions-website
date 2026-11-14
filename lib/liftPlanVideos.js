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
    // 4K remake from the same plan (14/11/2026); the old 32-second clip was wMi5sEyQtZo
    youtubeId: '3J1mctZtIuY',
    shortId: 'Ft0izRCwVkM',
    service: 'mobile-crane',
    serviceHref: '/services/mobile-crane-lift-plans',
    serviceLabel: 'Mobile crane lift plans',
    drawingsAnchor: '/resources/lift-plan-drawing-examples#examples-mobile-crane',
    title: 'Mobile Crane Lift Plan in 3D: Rooftop Plant Lift, Set-Up to Landing',
    headline: 'Mobile crane lift plan example: set-up to a rooftop landing in 3D',
    metaTitle: 'Mobile Crane Lift Plan Example in 3D',
    metaDescription:
      'A 76-second 4K video of an RMT mobile crane lift plan: a Liebherr LTM 1100-5.2 sets up, lifts a 4,200 kg unit and lands it on a roof at 44.7%.',
    description:
      'A 4K film from an RMT Solutions mobile crane lift plan (example job). A Liebherr LTM 1100-5.2 sets its outriggers down on mats, raises, slews and telescopes its boom, and picks a 4,200 kg air handling unit off the delivery vehicle at 9 m radius on a 4-leg chain. The unit is hoisted clear of the roof edge protection, the crane luffs out to the 16 m landing radius on the signaller’s jib-down signal and lowers it onto the roof, at 44.7% utilisation of the Liebherr duty chart.',
    thumbnail: '/images/videos/mobile-crane-lift-plan-3d-video.webp',
    duration: 'PT1M16S',
    uploadDate: '2026-11-14T07:25:00+00:00',
    figures: [
      ['Crane', 'Liebherr LTM 1100-5.2'],
      ['Configuration', '22.7 m main boom, 11.5 t counterweight, 7.36 x 7.00 m outrigger base'],
      ['Load', '4,200 kg air handling unit'],
      ['Gross load', '4,691 kg including the hook block and 4-leg chain'],
      ['Lift', 'Picked off the vehicle at 9 m, luffed out to land on the roof at 16 m'],
      ['Duty', '10.5 t on the Liebherr duty chart at the 16 m landing radius'],
      ['Utilisation', '44.7%'],
    ],
    chapters: [
      ['0:00', 'Example mobile crane lift plan in 3D: outriggers down on mats'],
      ['0:09', 'Crane set-up: boom raised, slewed to the lift and telescoped'],
      ['0:21', 'Hook down to the unit, master link on, slack taken up'],
      ['0:37', 'Slinger clear, unit lifted off the vehicle and over the roof edge protection'],
      ['0:54', 'Jib down: luffed out from 9 m to the 16 m landing radius'],
      ['1:06', 'Lowered onto the roof'],
    ],
  },
  {
    slug: 'excavator-manhole-ring-lift-plan-3d',
    // 4K remake from the same plan (14/11/2026); the old clip was KlJdCd7L2os
    youtubeId: 'jXreupn1uX8',
    shortId: 'o5L6eKf9tWY',
    service: 'excavator',
    serviceHref: '/services/excavator-lift-plans',
    serviceLabel: 'Excavator lift plans',
    drawingsAnchor: '/resources/lift-plan-drawing-examples#examples-excavator-manhole',
    title: 'Excavator Lift Plan in 3D: Manhole Ring into a Manhole Box',
    headline: 'Excavator lift plan example: lowering a manhole ring into a manhole box',
    metaTitle: 'Excavator Lift Plan Example: Manhole Ring',
    metaDescription:
      'A 32-second 4K video of an RMT excavator lift plan: a Cat 320 GC, bucket off, lowering a 1,760 kg chamber ring into a manhole box at 42.7% utilisation.',
    description:
      'A 4K film from an RMT Solutions excavator lift plan (example job). A Cat 320 GC with the bucket off lifts a 1,760 kg chamber ring from the quick hitch lifting eye on a 3-leg chain, slews it round at 6.0 m radius and lowers it into a steel manhole box with edge protection, onto the ring already in place, at 42.7% utilisation of the Caterpillar lift capacity chart.',
    thumbnail: '/images/videos/excavator-manhole-ring-lift-plan-3d-video.webp',
    duration: 'PT32S',
    uploadDate: '2026-11-14T07:30:00+00:00',
    figures: [
      ['Excavator', 'Cat 320 GC, bucket off, lifting from the quick hitch eye'],
      ['Load', '1,760 kg concrete chamber ring (Marshalls DN1800 x 1000)'],
      ['Gross load', '2,069 kg including the quick hitch, eye shackle and 3-leg chain'],
      ['Duty', '4,850 kg on the Caterpillar lift capacity chart at 6.0 m radius'],
      ['Utilisation', '42.7%'],
      ['Set-down', 'Into a manhole box with edge protection, inside the exclusion zone'],
    ],
    chapters: [
      ['0:00', 'Example excavator lift plan in 3D: the ring rigged on a 3-leg chain'],
      ['0:10', 'Lifted from the quick hitch eye and slewed to the manhole box at 6.0 m'],
      ['0:20', 'Lowered into the manhole box onto the ring below'],
    ],
  },
  {
    slug: 'telehandler-steel-lift-plan-3d',
    // 4K remake from the same plan (14/11/2026); the old 42-second clip was 4cmF00VQ_nA
    youtubeId: 'qOZiQFeOCFM',
    shortId: 'Bi9pNT5u6Hw',
    service: 'telehandler',
    serviceHref: '/services/telehandler-lift-plans',
    serviceLabel: 'Telehandler lift plans',
    // The hub's telehandler examples are a different job, so the link says so
    drawingsAnchor: '/resources/lift-plan-drawing-examples#examples-telehandler',
    drawingsLabel: 'See telehandler drawing examples',
    title: 'Telehandler Lift Plan in 3D: Steel off the Wagon to the Crane, Stage by Stage',
    headline: 'Telehandler lift plan example: steel from the wagon to the crane, stage by stage',
    metaTitle: 'Telehandler Lift Plan Example in 3D',
    metaDescription:
      'A 72-second 4K video of an RMT telehandler lift plan: a JCB 540-170 takes 841 kg of steel off the wagon, to the laydown and into the crane’s reach.',
    description:
      'A 4K film from an RMT Solutions telehandler lift plan (example job), stage by stage. A JCB 540-170 on forks lifts 2 x UB 406x178x60 at 7.0 m (841 kg) clear of the delivery vehicle’s bed and backs straight off, goes through the opened barrier to the steel laydown, then takes the steel to the staging point inside a Liebherr LTM 1090-4.2’s 16 m reach, sets it down and backs the forks out.',
    thumbnail: '/images/videos/telehandler-steel-lift-plan-3d-video.webp',
    duration: 'PT1M12S',
    uploadDate: '2026-11-14T07:43:00+00:00',
    figures: [
      ['Telehandler', 'JCB 540-170 on forks, working on its tyres'],
      ['Load', '2 x UB 406x178x60 at 7.0 m: 841 kg'],
      ['Reach', '2.0 m from the front tyre face'],
      ['Capacity', 'JCB rates 1,000 kg out to 5.68 m reach on tyres'],
      ['Stages', 'Off the delivery vehicle, to the steel laydown, to the crane’s staging point'],
      ['Crane', 'Liebherr LTM 1090-4.2: 16 m reach, 6.7 t at 16 m on its duty chart'],
    ],
    chapters: [
      ['0:00', 'Stage 1: a JCB 540-170 lifts 2 x UB 406x178x60 (841 kg) off the delivery vehicle and backs off'],
      ['0:20', 'Stage 2: through the barrier to the steel laydown'],
      ['0:43', 'Stage 3: to the crane’s staging point, set down and forks out'],
    ],
  },
  {
    slug: 'lorry-loader-cabin-lift-plan-3d',
    youtubeId: 'DcLbJ6X78SE',
    shortId: '6zRUXq-9NTk',
    service: 'lorry-loader',
    serviceHref: '/services/lorry-loader-lift-plans',
    serviceLabel: 'Lorry loader lift plans',
    // The hub's lorry loader examples are a different job, so the link says so
    drawingsAnchor: '/resources/lift-plan-drawing-examples#examples-lorry-loader',
    drawingsLabel: 'See lorry loader drawing examples',
    title: 'Lorry Loader (HIAB) Lift Plan Example: Cabin Lift in 3D',
    headline: 'Lorry loader lift plan example: a HIAB lifting a welfare cabin off its bed',
    metaTitle: 'Lorry Loader (HIAB) Lift Plan Example in 3D',
    metaDescription:
      'A 32-second 3D video of an RMT lorry loader lift plan: a Fassi F545RA.2.26 lifting a 2,145 kg welfare cabin on a 4-leg chain at 52.1% utilisation.',
    description:
      'A 3D view from an RMT Solutions lorry loader lift plan (example job). A Fassi F545RA.2.26 loader crane, stabilisers down on mats, lifts a 2,145 kg welfare cabin off its bed on a 4-leg chain and sets it down behind the wagon at 10.15 m, at 52.1% utilisation of the Fassi duty chart.',
    thumbnail: '/images/videos/lorry-loader-cabin-lift-plan-3d-video.webp',
    duration: 'PT32S',
    uploadDate: '2026-11-10T20:40:00+00:00',
    figures: [
      ['Loader crane', 'Fassi F545RA.2.26, behind-cab knuckle boom, working over the rear'],
      ['Load', '16 ft welfare cabin, 2,145 kg (published weight)'],
      ['Gross load', '2,190 kg including the 4-leg chain, direct to the four lifting points'],
      ['Duty', '4,200 kg on Fassi chart DE15852 at the 10.15 m published duty point'],
      ['Utilisation', '52.1%'],
      ['Set-up', 'Stabilisers down on mats, exclusion zone barrier, loader crane operator and slinger / signaller'],
    ],
    chapters: [
      ['0:00', 'The lift in 3D, drawn from an RMT lorry loader lift plan'],
      ['0:05', 'The loader crane: Fassi F545RA.2.26, behind-cab knuckle boom, stabilisers down on mats'],
      ['0:10', 'The load: a 2,145 kg welfare cabin, gross load 2,190 kg on a 4-leg chain to the four lifting points'],
      ['0:16', 'The duty check: 4,200 kg at 10.15 m on Fassi chart DE15852, 52.1% utilisation'],
      ['0:21', 'The exclusion zone barrier layout, loader crane operator and slinger / signaller'],
      ['0:28', 'Lift plans by a CPCS A61 Appointed Person'],
    ],
  },
  {
    slug: 'steel-erection-lift-plan-3d',
    // 4K remake from the same plan (13/11/2026); the old 32-second clip was Kgj5C6VnNmE
    youtubeId: 'BbO2ErzZgJo',
    shortId: 'EQJ3SZKU7b0',
    service: 'steel-erection',
    serviceHref: '/services/steel-erection',
    serviceLabel: 'Steel erection lift plans',
    // The hub's steel examples are a different job, so the link says so
    drawingsAnchor: '/resources/lift-plan-drawing-examples#examples-steel',
    drawingsLabel: 'See steel erection drawing examples',
    title: 'Steel Erection Lift Plan in 3D: Mobile Crane Set-Up to Bolted Beam',
    headline: 'Steel erection lift plan example: a mobile crane erecting a steel frame',
    metaTitle: 'Steel Erection Lift Plan Example in 3D',
    metaDescription:
      'An 86-second 4K video of an RMT steel erection lift plan: crane set-up, slinging, the lift at 17.3% utilisation and bolting from access platforms.',
    description:
      'Part 2 of the steel delivery example, in 4K: the whole lift from an RMT Solutions steel erection lift plan (example job). A Liebherr LTM 1090-4.2, working over the side on mats, raises, slews and telescopes its boom, the hook comes down to a UB 406x178x60 at the telehandler’s staging point and the slinger hooks on to two load rings through the top flange. The beam is lifted at 16 m radius, slewed to the connection at the 24 m landing radius at 17.3% utilisation of the Liebherr duty chart, lowered on and bolted from the access platforms, bolts by hand first and then the impact wrench.',
    thumbnail: '/images/videos/steel-erection-lift-plan-3d-video.webp',
    duration: 'PT1M26S',
    uploadDate: '2026-11-13T23:16:00+00:00',
    figures: [
      ['Crane', 'Liebherr LTM 1090-4.2, working over the side, outriggers on mats'],
      ['Configuration', '30.0 m main boom, 22.5 t counterweight'],
      ['Load', 'UB 406x178x60, 7.0 m, 421 kg'],
      ['Rigging', 'Two RUD VLBG-PLUS M20 load rings through the top flange at 200 mm centres, 2-leg chain with 3 m legs'],
      ['Gross load', '760 kg including the rigging and the hook block'],
      ['Duty', '4.4 t on the Liebherr chart at the 24 m landing radius'],
      ['Utilisation', '17.3%'],
    ],
    chapters: [
      ['0:00', 'Example steel erection lift plan in 3D'],
      ['0:09', 'Crane set-up: boom raised, slewed to the lift and telescoped'],
      ['0:21', 'Hook down to the beam, master link on, slack taken up'],
      ['0:37', 'Slinger clear, beam lifted at 16 m radius'],
      ['0:54', 'Slewed to the connection at 24 m radius and lowered on'],
      ['1:06', 'Bolted from the access platforms: bolts by hand, then the impact wrench'],
    ],
  },
  {
    slug: 'spider-crane-lift-plan-3d',
    youtubeId: 'k1nBfjiUt0Q',
    service: 'spider-crane',
    serviceHref: '/services/lift-plans',
    serviceLabel: 'Lift plans for every machine',
    title: 'Spider Crane Lift Plan in 3D: Air Handling Unit Lift and Unhooking',
    headline: 'Spider crane lift plan example: an air handling unit lift in 3D',
    metaTitle: 'Spider Crane Lift Plan Example in 3D',
    metaDescription:
      'A 69-second 4K video of an RMT spider crane lift plan: a Maeda MC305C-3 lifting an 800 kg air handling unit at 4.0 m, 57.8% utilisation.',
    description:
      'A 4K film from an RMT Solutions spider crane lift plan (example job). A Maeda MC305C-3 spider crane, outriggers at their maximum spread, lifts an 800 kg air handling unit on a 2-leg round sling at 4.0 m radius, slews it 50 degrees and lowers it to the set-down, at 57.8% utilisation of Maeda\u2019s rated total load chart. The slinger / signaller signals each movement, then walks in once the slack is off and unhooks both legs.',
    thumbnail: '/images/videos/spider-crane-lift-plan-3d-video.webp',
    duration: 'PT1M9S',
    uploadDate: '2026-11-14T07:46:00+00:00',
    figures: [
      ['Crane', 'Maeda MC305C-3 spider crane, 8.1 m boom, outriggers at maximum (4.8 m base)'],
      ['Load', '800 kg air handling unit'],
      ['Gross load', '832 kg including the hook and rigging'],
      ['Duty', '1.44 t on Maeda\u2019s rated total load chart at 4.0 m radius'],
      ['Utilisation', '57.8%'],
      ['Rigging', '2-leg round sling, unhooked by the slinger once the load is landed and the legs are slack'],
    ],
    chapters: [
      ['0:00', 'Example spider crane lift plan in 3D: slinger clear of the load'],
      ['0:10', 'Lifted at 4.0 m radius and slewed 50 degrees'],
      ['0:26', 'Lowered to the set-down'],
      ['0:36', 'Slack off, the slinger unhooks both legs'],
      ['0:59', 'Slinger clear: lift complete'],
    ],
  },
  {
    slug: 'mobile-tower-crane-lift-plan-3d',
    youtubeId: 'UuAF5W3U4y0',
    service: 'tower-crane',
    serviceHref: '/services/tower-crane',
    serviceLabel: 'Tower crane lift plans',
    title: 'Mobile Tower Crane Lift Plan in 3D: Precast Stair Flight at 24 m',
    headline: 'Mobile tower crane lift plan example: a precast stair flight at 24 m in 3D',
    metaTitle: 'Mobile Tower Crane Lift Plan Example in 3D',
    metaDescription:
      'A 70-second 4K video of an RMT mobile tower crane lift plan: a Spierings SK597-AT4 lifting a 1,800 kg stair flight at 24 m, 56.0% utilisation.',
    description:
      'A 4K film from an RMT Solutions mobile tower crane lift plan (example job). A Spierings SK597-AT4 self-erecting mobile tower crane, rigged with its 48 m jib on its 6.925 x 7.00 m outrigger base, lifts a 1,800 kg precast concrete stair flight off the delivery trailer at 24 m radius on a 2-leg chain, slews it 50 degrees and lowers it to the set-down, at 56.0% utilisation of Spierings\u2019 load chart. The slinger / signaller signals from her position clear of the load\u2019s path, then unhooks both legs once the slack is off.',
    thumbnail: '/images/videos/mobile-tower-crane-lift-plan-3d-video.webp',
    duration: 'PT1M10S',
    uploadDate: '2026-11-14T07:49:00+00:00',
    figures: [
      ['Crane', 'Spierings SK597-AT4 mobile tower crane, 48 m jib, 26 m under-jib height'],
      ['Set-up', '6.925 x 7.00 m outrigger base on mats'],
      ['Load', '1,800 kg precast concrete stair flight'],
      ['Gross load', '1,817 kg including the 2-leg 10 mm grade 10 chain and shackles'],
      ['Duty', '3,245 kg on Spierings\u2019 load chart at the 24 m published point'],
      ['Utilisation', '56.0%'],
    ],
    chapters: [
      ['0:00', 'Example mobile tower crane lift plan in 3D: slinger to her position'],
      ['0:13', 'Lifted at 24 m radius and slewed 50 degrees'],
      ['0:25', 'Lowered to the set-down'],
      ['0:35', 'Slack off, the slinger unhooks both legs'],
      ['1:00', 'Slinger clear: lift complete'],
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
      // ISO 8601 duration, e.g. PT32S or PT1M26S
      const dur = video.duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/) || []
      const total = Number(dur[1] || 0) * 3600 + Number(dur[2] || 0) * 60 + Number(dur[3] || 0)
      const end = next ? toSec(next[0]) : total
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
