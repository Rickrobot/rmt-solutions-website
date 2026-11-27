import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'
import CompanyFilm from '@/components/CompanyFilm'

// Nov 2026 (Round 20): training films as a service. Ricky, 27 Nov 2026:
//   - offer minimum standards films, site induction films, toolbox talk
//     films and lift briefing films (the last already included with every
//     RMT lift plan, so cross-linked rather than sold here);
//   - quoted per job, no price shown;
//   - no client films shown: the existing minimum standards series is a
//     client's own branded work. The RMT-branded example, the loading and
//     offloading training film (YouTube gf3TR630gPw, uploaded 27 Nov 2026),
//     is the companyFilms entry 'loading-offloading'.
// Search demand for these terms is close to nil in GSC, so this page is for
// sending to contractors directly and for visitors already on the site.

const PAGE_PATH = '/services/minimum-standards-training-videos'
const PAGE_URL = `https://www.rmtsafetysolutions.com${PAGE_PATH}`
const TITLE = 'Minimum Standards & Training Videos'
const DESCRIPTION =
  'Construction training videos made to your own minimum standards: site inductions, toolbox talks and lifting films in 4K, in your branding, with voice-over.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords:
    'minimum standards video, construction training video, site induction video, toolbox talk video, health and safety training animation, lifting operations training video, exclusion zone training video',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: `${TITLE} | RMT Solutions`,
    description: DESCRIPTION,
    url: PAGE_URL,
    images: ['/images/videos/rmt-loading-offloading-training-film.webp'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Minimum Standards and Training Videos',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    telephone: '+447803808093',
  },
  description:
    'Animated 4K training videos made to a contractor’s own health, safety and environmental minimum standards: minimum standards films, site induction films and toolbox talk films, in the client’s branding with a professional voice-over, checked by a CPCS A61 Appointed Person.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Health and Safety Training Video Production',
  url: PAGE_URL,
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Minimum Standards & Training Videos', item: PAGE_URL },
  ],
}

const FILM_TYPES = [
  {
    title: 'Minimum standards films',
    text: 'One short film for each section of your own health, safety and environmental minimum standards, so the rule in the document and the picture on the screen say the same thing.',
    items: ['Made from your document, section by section', 'Your section numbers and wording', 'Shown as it must be done, and what is not permitted'],
  },
  {
    title: 'Site induction films',
    text: 'A branded induction for your company or a single site: the site rules, the welfare, the traffic routes and the high-risk activities, the same every time it is played.',
    items: ['Your logo, your PPE, your site rules', 'The same message for every new starter', 'Short enough to hold attention'],
  },
  {
    title: 'Toolbox talk films',
    text: 'Short films on one hazard at a time, for the supervisor to play at the start of a shift and talk around.',
    items: ['Lifting operations and exclusion zones', 'Plant and people segregation, red zones', 'Loading, offloading and working near plant'],
  },
  {
    title: 'Lift briefing films',
    text: 'A 3D video of the actual lift, from set-up to set-down, for the lift team to watch before the machine arrives.',
    items: ['Included with every RMT lift plan', 'Made from the plan’s own drawings', 'Any lifting device'],
    link: { href: '/services/lift-plan-drawings-3d-videos', label: 'Drawings and 3D videos with every lift plan' },
  },
]

const STEPS = [
  {
    title: 'Send us the standard',
    text: 'Your minimum standards document, induction content or the hazard you want covered, in writing. We come back with a quote within 4 working hours.',
  },
  {
    title: 'Script in plain English',
    text: 'We write the voice-over script from your wording. Abbreviations are spoken in full, so nobody on site is left guessing. You approve the script before we build anything.',
  },
  {
    title: 'Built in 3D, in your branding',
    text: 'The scenes are built with the same 3D tools as our lift plan videos: your logo on the plant and the PPE, and a workforce of women and men who look like real people.',
  },
  {
    title: 'Voice-over and music',
    text: 'A professional voice-over and a backing track you approve, so the film sounds as good as it looks.',
  },
  {
    title: 'Checked and delivered in 4K',
    text: 'Every method shown is checked by a CPCS A61 Appointed Person with 35 years in lifting before the film goes to you, in 4K.',
  },
]

const PAGE_FAQS = [
  {
    q: 'Can you make films of our own minimum standards?',
    a: 'Yes. That is what this service is for. Send us your minimum standards document and we make a film for each section you choose, using your own section numbers and wording.',
  },
  {
    q: 'Will the films carry our branding?',
    a: 'Yes. Your logo goes on the plant, the hoarding and the lift team’s clothing and helmets, and the films open and close on your branding.',
  },
  {
    q: 'What topics can you cover?',
    a: 'Our strongest ground is lifting operations and plant: exclusion zones, red zones around plant, loading and offloading, lifting with excavators, telehandlers and lorry loaders, and practices that are not permitted on site. We also make site induction films covering your general site rules.',
  },
  {
    q: 'Who checks that what the film shows is right?',
    a: 'Every method shown is checked by a CPCS A61 Appointed Person with 35 years in lifting operations and an NCRQ Level 6 Diploma in Applied Health and Safety. The film shows the work done the right way, not a cartoon of it.',
  },
  {
    q: 'How much does a film cost?',
    a: 'Each job is quoted on what it involves: one film, a series covering a whole minimum standards document, or an induction. Send us the content in writing and we will reply with a fixed quote within 4 working hours.',
  },
  {
    q: 'Do I need a separate film for a lift plan?',
    a: 'No. Every lift plan RMT writes already comes with a 3D video of that lift, made from the plan’s own drawings, at no extra cost.',
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

export default function MinimumStandardsTrainingVideosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/videos/rmt-loading-offloading-training-film.webp"
            alt="Still from the RMT Solutions loading and offloading training film: an excavator lifting a concrete block off a flatbed lorry inside an exclusion zone"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-medium mb-4">Made to your standards &middot; checked by a CPCS A61 Appointed Person</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Minimum Standards &amp; Training Videos</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Animated training films made to your own minimum standards, site rules and toolbox talks. Every film is
            built in 3D in your branding, with a professional voice-over, and shows the work done the way your standard
            says it must be done.
          </p>
          <div className="mb-6">
            <span className="inline-flex items-center bg-amber-500 text-slate-900 text-sm font-bold px-4 py-2 rounded-full">
              Your standards, your branding, 4K with voice-over
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

      {/* Why */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">A standard nobody reads cannot keep anyone safe</h2>
            <p className="text-gray-400 mb-4">
              Minimum standards documents are written carefully and read rarely. On site, people learn from what they
              see: the toolbox talk, the induction, the way the last job was done. A two-minute film that shows the
              exclusion zone set out properly, or the red zone around a working excavator, does more than another page
              in the induction pack.
            </p>
            <p className="text-gray-400">
              We are already producing a minimum standards series for a tier 1 main contractor, one film per section of
              their document. The same service is open to any contractor: watch our own loading and offloading
              film below to see what one looks like.
            </p>
          </div>
          <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-white mb-4">What makes them work on site</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                'Shows the correct method, checked by a CPCS A61 Appointed Person',
                'Your logo on the plant, the hoarding and the PPE',
                'A workforce of women and men who look like real people',
                'Plain English voice-over, abbreviations spoken in full',
                'Short films, one subject each, easy to play at a briefing',
                '4K, so it holds up on a welfare cabin screen or a projector',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Four kinds of film */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">Four kinds of film</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FILM_TYPES.map((film) => (
              <div key={film.title} className="bg-slate-800/40 p-6 rounded-xl flex flex-col">
                <h3 className="text-xl font-semibold text-white mb-3">{film.title}</h3>
                <p className="text-gray-400 mb-4">{film.text}</p>
                <ul className="space-y-2 text-gray-400 text-sm mb-4">
                  {film.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                {film.link && (
                  <Link href={film.link.href} className="mt-auto inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
                    {film.link.label} <ArrowRight className="w-5 h-5" aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our own example training film (RMT branded, fictional site) */}
      <CompanyFilm film="loading-offloading" path={PAGE_PATH} background="bg-slate-950" />

      {/* How a film is made */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-10">How a film is made</h2>
          <ol className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {STEPS.map((step, i) => (
              <li key={step.title} className="bg-slate-800/40 p-6 rounded-xl">
                <p className="text-amber-400 font-bold text-2xl mb-2">{i + 1}</p>
                <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="text-gray-400 mt-10 max-w-3xl">
            <strong className="text-white">Price:</strong> quoted per job, whether that is one film, a full minimum
            standards series or a site induction. See our{' '}
            <Link href="/resources/lift-plan-videos" className="text-amber-400 hover:text-amber-300 underline">
              3D lift plan videos
            </Link>{' '}
            for more of our 3D work.
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
            serviceName="Minimum Standards & Training Videos"
            heading="Get a quote for minimum standards or training videos"
          />
        </div>
      </section>

      <RelatedServices currentSlug="minimum-standards-training-videos" />
    </>
  )
}
