import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle, PlayCircle } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'
import CompanyFilm from '@/components/CompanyFilm'
import LiftPlanVideo from '@/components/LiftPlanVideo'
import LiftDrawingExamples from '@/components/LiftDrawingExamples'
import { liftPlanVideos, LIFT_PLAN_VIDEOS_PATH } from '@/lib/liftPlanVideos'

// Nov 2026 (Round 19): the drawings and 3D lift videos sold as a reason to
// choose RMT, not only shown as free resources. Ricky, 27 Nov 2026:
//   - drawings and a 3D video for EVERY lifting device, included in the
//     price of the plan (as the /services/lift-plans film already says);
//   - drawings and videos come only with lift plans RMT writes, never sold
//     on their own for someone else's plan.
// Searches this page is meant to win (GSC 26 Aug to 25 Nov 2026, all
// countries): "lift plan drawing" 319 impressions at 7.5, "crane lifting
// plan drawing" 108 at 10.7, "lifting plan drawing" 100 at 7.2, "3d lift
// plan" 50 at 14.4, "3d lift planning" 28 at 8.5. Until now only the
// /resources hubs answered them.

const PAGE_PATH = '/services/lift-plan-drawings-3d-videos'
const PAGE_URL = `https://www.rmtsafetysolutions.com${PAGE_PATH}`
const TITLE = 'Lift Plan Drawings & 3D Lift Videos'
const DESCRIPTION =
  'Elevation, plan, rigging and 3D drawings of the real machine and a 4K 3D video of the lift, with every RMT lift plan: cranes, HIABs, excavators and more.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'lift plan drawing, crane lifting plan drawing, lifting plan drawing, 3d lift plan, 3d lift planning, crane lift plan video, lift plan animation, rigging drawing, exclusion zone drawing',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} | RMT Solutions`,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: ['/images/videos/rmt-solutions-film-drawings-3d.webp'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lift Plan Drawings and 3D Lift Videos',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    telephone: '+447803808093',
  },
  description:
    'Elevation, plan, rigging and 3D drawings drawn to the machine’s real dimensions, and a 4K 3D video of the lift, supplied with every lift plan written by a CPCS A61 Appointed Person, for any lifting device.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Lift Planning',
  url: PAGE_URL,
}

// The drawing gallery on this page marks its ImageObjects isPartOf
// `${PAGE_URL}#webpage` (pageHref mode), so the page supplies that node.
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: TITLE,
  description: DESCRIPTION,
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Lift Plan Drawings & 3D Videos', item: PAGE_URL },
  ],
}

// The four sheets the RMT drawing engine issues for a lift.
const DRAWING_SHEETS = [
  {
    code: 'EL-01',
    name: 'Elevation',
    items: [
      'The machine, boom and hook or quick hitch drawn to the maker’s published dimensions',
      'Pick and landing radii, maximum height and tail swing',
      'The load, the building and any obstruction in the line of the lift',
    ],
  },
  {
    code: 'PL-01',
    name: 'Plan and exclusion zone',
    items: [
      'Outrigger or stabiliser base, slew path and working radius',
      'Barrier runs as they will be set out on site, not a circle on paper',
      'Site gridlines and every member of the lift team in position',
    ],
  },
  {
    code: 'RG-01',
    name: 'Rigging',
    items: [
      'The actual gear: master link, chain legs, shackles, hooks or slings',
      'Leg angles and leg tensions',
      'Gross load including the hook block and the lifting accessories',
    ],
  },
  {
    code: '3D-01',
    name: '3D view',
    items: [
      'The whole set-up in one picture anyone on site can read',
      'The same machine, load and positions as the other three sheets',
      'The view the 3D video is made from',
    ],
  },
]

const WHO_USES_IT = [
  {
    title: 'The lift team',
    text: 'The operator, slinger and supervisor watch the lift from set-up to set-down before the machine arrives. A short film briefs better than thirty pages, and everyone sees the same plan.',
  },
  {
    title: 'The principal contractor',
    text: 'The person approving the plan can see the machine position, the radii and the exclusion zone at a glance, instead of building the picture from tables. Fewer questions back, fewer resubmissions.',
  },
  {
    title: 'Your client and the tender',
    text: 'Show a client or a bid panel exactly how a difficult lift will be done: the machine, the set-up, the route of the load and the barriers, in your company’s colours.',
  },
  {
    title: 'The toolbox talk',
    text: 'Play the film at the pre-lift briefing and point at the drawings. The stop rules and the exclusion zone make sense when people can see them.',
  },
]

const PAGE_FAQS = [
  {
    q: 'Do the drawings and the 3D video cost extra?',
    a: 'No. Every lift plan RMT writes comes with the drawing set and a 4K 3D video of the lift, included in the price. Excavator, telehandler, forklift and lorry loader (HIAB) lift plans are £200 + VAT. Mobile crane and tower crane lift plans need a site visit, so they are quoted per job with the visit included.',
  },
  {
    q: 'Which machines can you draw and film?',
    a: 'Every lifting device we plan: mobile cranes, tower cranes, spider cranes, overhead and gantry cranes, lorry loaders (HIABs), excavators, telehandlers, forklifts and MEWPs. Each one is drawn from its own maker’s published dimensions, not a generic model.',
  },
  {
    q: 'Can you draw or film a lift plan someone else has written?',
    a: 'No. The drawings and videos are made from our own plan, from the same machine configuration, duties, radii and rigging we have checked, so they come only with lift plans RMT writes. If you already have a plan, our lift plan checking service reviews it.',
  },
  {
    q: 'Are the drawings to scale?',
    a: 'Yes. The machine, the boom and the rigging are drawn from the manufacturer’s published dimensions, and every duty comes from the manufacturer’s UK or European chart for that exact configuration. Nothing is sketched by eye.',
  },
  {
    q: 'Is the video a generic animation?',
    a: 'No. The video is made from the drawings of your lift: the same machine, set-up, load, radii, rigging and exclusion zone. If the plan changes, the drawings and the video change with it.',
  },
  {
    q: 'What format are the drawings in?',
    a: 'A3 drawing sheets as a vector PDF, kept small enough to email to the principal contractor and the plant hire company.',
  },
  {
    q: 'Can the drawings show our company branding?',
    a: 'Yes. Your logo goes on the plant and on the lift team’s clothing and helmets, so the drawings and the video look like your job, because they are.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PAGE_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

export default function LiftPlanDrawingsVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/lift-drawing-examples/mobile-crane-lift-plan-elevation-drawing.webp"
            alt="RMT mobile crane lift plan elevation drawing of a Liebherr LTM 1100-5.2 landing an air handling unit on a roof"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-medium mb-4">CPCS A61 Appointed Person &middot; drawn on our own software</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lift Plan Drawings &amp; 3D Lift Videos</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Every lift plan we write comes with a full drawing set and a 4K 3D video of the lift, whatever the machine:
            mobile and tower cranes, spider cranes, lorry loaders, excavators, telehandlers and more. The lift team, the
            principal contractor and your client see exactly how the lift will go before the machine arrives on site.
          </p>
          <div className="mb-6">
            <span className="inline-flex items-center bg-amber-500 text-slate-900 text-sm font-bold px-4 py-2 rounded-full">
              Drawings and 3D video included with every lift plan
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-8 py-3 rounded-lg transition-colors">
              Request a Quote
            </Link>
            <a href="tel:+447803808093" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Call: 07803 808093
            </a>
          </div>
        </div>
      </section>

      <CompanyFilm film="drawings-3d" path={PAGE_PATH} background="bg-slate-950" />

      {/* The drawing set */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">The drawing set: four sheets for every lift</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-3xl">
            Our drawings are produced by RMT&rsquo;s own lift drawing software from the plan itself, so every figure on a
            sheet is a figure we have checked. No sketches, no stock pictures of a crane that is not yours.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {DRAWING_SHEETS.map((sheet) => (
              <div key={sheet.code} className="bg-slate-800/40 p-6 rounded-xl">
                <p className="text-amber-400 font-mono text-sm font-semibold mb-1">{sheet.code}</p>
                <h3 className="text-lg font-semibold text-white mb-4">{sheet.name}</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  {sheet.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LiftPlanVideo slug="mobile-crane-lift-plan-3d" background="bg-slate-950" />

      {/* Drawn to the real machine */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Drawn to the real machine, not a cartoon of one</h2>
            <p className="text-gray-400 mb-6">
              The machine on your drawings is the machine on your plan: its chassis, outriggers or stabilisers, boom and
              counterweight drawn from the manufacturer&rsquo;s published dimensions, with the duty taken from the
              manufacturer&rsquo;s UK or European chart for that configuration. The 3D video is made from those same drawings, so the film and
              the paperwork never disagree.
            </p>
            <ul className="space-y-3 text-gray-300">
              {[
                'Mobile cranes set up to lift over the rear or the sides, outriggers on mats sized for the job',
                'Excavators lift from the quick hitch lifting eye, never with a bucket on',
                'Exclusion zone barriers drawn in straight runs, as they are set out on site',
                'Gridlines shown, so the drawing matches the site drawings',
                'The lift team drawn as real people, women and men, in your PPE and logo',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">What it costs</h3>
            <p className="text-gray-300 mb-4">
              <strong className="text-white">Included.</strong> The drawing set and the 4K 3D video come with every lift
              plan at no extra cost. Excavator, telehandler, forklift and lorry loader (HIAB) lift plans are &pound;200 +
              VAT. Mobile crane and tower crane lift plans need a site visit, so we quote each one per job with the visit
              included.
            </p>
            <p className="text-gray-300 mb-6">
              Drawings and videos are made from our own plans, so they come only with lift plans RMT writes. Already have
              a plan? Our{' '}
              <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">
                lift plan checking service
              </Link>{' '}
              reviews it.
            </p>
            <div className="flex flex-col gap-3">
              <Link href="/services/lift-plans" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
                Lift plan writing for every machine <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link href="/services/mobile-crane-lift-plans" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
                Mobile crane lift plans <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">Who it helps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHO_USES_IT.map((item) => (
              <div key={item.title} className="bg-slate-800/40 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every other 3D video, one card each, linking to its watch page */}
      <section id="more-3d-videos" aria-labelledby="more-3d-videos-heading" className="scroll-mt-28 py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="more-3d-videos-heading" className="text-3xl font-bold text-white mb-4">3D videos for every lifting device</h2>
          <p className="text-lg text-gray-400 mb-10 max-w-3xl">
            Tower cranes, spider cranes, lorry loaders, excavators, telehandlers and steel erection: each video is made
            from an RMT drawing set for that machine.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {liftPlanVideos
              .filter((v) => v.slug !== 'mobile-crane-lift-plan-3d')
              .map((v) => (
                <Link
                  key={v.slug}
                  href={`${LIFT_PLAN_VIDEOS_PATH}/${v.slug}`}
                  className="group rounded-2xl overflow-hidden bg-slate-950 border border-slate-700 hover:border-amber-400 transition"
                >
                  <div className="relative aspect-video">
                    <Image src={v.thumbnail} alt={v.title} fill sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover" />
                    <PlayCircle className="absolute inset-0 m-auto w-14 h-14 text-white/90 drop-shadow-lg" aria-hidden="true" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-white group-hover:text-amber-400 transition">{v.headline}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <LiftDrawingExamples type="mobile-crane" pageHref={PAGE_PATH} anchor="drawing-examples-mobile-crane" />

      {/* More examples */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 max-w-3xl">
            The examples on this page are example jobs on fictional sites, drawn and filmed exactly as a client job would
            be. See more in our{' '}
            <Link href="/resources/lift-plan-videos" className="text-amber-400 hover:text-amber-300 underline">
              3D lift plan videos
            </Link>{' '}
            and{' '}
            <Link href="/resources/lift-plan-drawing-examples" className="text-amber-400 hover:text-amber-300 underline">
              lift plan drawing examples
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {PAGE_FAQS.map((faq) => (
              <div key={faq.q} className="bg-slate-800/40 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName="Lift Plan with Drawings and 3D Video"
            heading="Get a quote for a lift plan with drawings and 3D video"
          />
        </div>
      </section>

      <RelatedServices currentSlug="lift-plan-drawings-3d-videos" />
    </>
  )
}
