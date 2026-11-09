import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MapPin, FileCheck, Repeat, ShieldCheck } from 'lucide-react'
import { SITE, caseStudyArticle, caseStudyBreadcrumb } from '@/lib/caseStudyLayout'

// Anonymised case study (Nov 2026). Facts are taken from the issued lift
// plan (Rev C, 26 Oct 2026); the outcome was confirmed by Ricky Marsh.
// Client, principal contractor and site names are withheld.
const URL = `${SITE}/case-studies/rising-main-excavator-lift-plan`
const HERO = {
  src: '/images/case-studies/pipeline-excavator-lift-plan.webp',
  width: 1600,
  height: 900,
  caption: 'RMT example drawing: a midi excavator lifting from the quick-hitch lifting eye with the bucket off, radius and heights marked',
}
const OG = '/images/case-studies/pipeline-excavator-lift-plan-og.jpg'

export const metadata = {
  title: 'Rising Main Excavator Lift Plan | Case Study',
  description:
    'Case study: excavator lift plan for a 400 mm PE rising main at a wastewater works, covering three machines and revised twice in six days as the site changed.',
  keywords: [
    'excavator lift plan case study',
    'pipeline excavator lift plan',
    'rising main pipe laying lift plan',
    'excavator lifting PE pipe',
    'water industry lift plan',
    'CPA CIG 0801 lift plan',
    'appointed person pipeline contractor',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Excavator Lift Plan for a 400 mm Rising Main | Case Study',
    description:
      'One lift plan for three possible midi excavators, nine lift types and welded pipe strings, revised twice before the start date. Every lift completed safely.',
    url: URL,
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'article',
    images: [{ url: `${SITE}${OG}`, width: 1200, height: 630, alt: HERO.caption }],
  },
}

const articleJsonLd = caseStudyArticle({
  url: URL,
  headline: 'Excavator lift plan for a 400 mm rising main at a wastewater works',
  description:
    'RMT Solutions wrote the lift plan and acted as Appointed Person for a pipeline contractor laying about 135 m of 400 mm PE rising main at a wastewater treatment works, with one plan covering three possible midi excavators. The plan was revised twice in six days as the site changed, and every lift was completed safely.',
  image: HERO,
  about: 'Excavator lifting operations: pipe laying at a wastewater treatment works',
  date: '2026-11-09',
  region: 'Lancashire',
})
const breadcrumbJsonLd = caseStudyBreadcrumb({ url: URL, name: 'Rising Main Excavator Lift Plan' })

const facts = [
  { label: 'Project', value: '135 m of 400 mm PE rising main' },
  { label: 'Site', value: 'Wastewater treatment works, Lancashire' },
  { label: 'Client', value: 'Pipeline contractor (name withheld)' },
  { label: 'Machines', value: 'JCB 85Z-2, 86C-2 or 90Z-2' },
  { label: 'Lifts', value: '9 lift types, up to 1,268 kg' },
  { label: 'RMT role', value: 'Lift plan and Appointed Person' },
]

const planned = [
  'One plan for all three midi excavators the hire company might send, with every lift checked on each machine over the side through 360° and over the front, and the reach and height left over',
  'Every load built up from the item, the lifting accessories and the quick hitch. Heaviest total load 1,268 kg; highest utilisation 65.5% of the manufacturer’s chart against an 80% ceiling',
  'Welded pipe strings: what the machine really lifts when a string is picked, and a quick-hitch eye rated at least 1,200 kg because a string pick hangs 1,173 kg from it',
  'The bucket off for every lift, with loads lifted from the rated quick-hitch lifting eye only',
  'Pick and carry limited to 50% of the blade-up chart',
  'A register of the lifting accessories on site and six rigging sets drawn as the actual kit, each with its certificate',
  'Ground, trench and temporary works, exclusion zones, environmental controls and COSHH for diesel and hydraulic oil',
  'Hold points to close before the first lift, daily pre-use checks and a briefing record for the lift team',
  'A3 drawings in the order of the job: unloading, moving to the weld station and lifting into position',
]

const revisions = [
  {
    icon: FileCheck,
    rev: 'Rev A · 20 October',
    text: 'First issue for use, covering all nine lift types on any of the three machines.',
  },
  {
    icon: Repeat,
    rev: 'Rev B · 23 October',
    text: 'After the site review: confirmed no spreader beam, lifting beam or roundsling would be used, and took the bucket off for every lift. Loads, utilisation, ground bearing and drawings were all recalculated.',
  },
  {
    icon: ShieldCheck,
    rev: 'Rev C · 26 October',
    text: 'Issued on the start date, after the contractor changed its lifting kit and lift supervisor. Accessory register, rigging sets and certificates redone; lifts extended to 360° and over the front; drawings redrawn as a sequence.',
  },
]

export default function RisingMainCaseStudy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <Image src={HERO.src} alt={HERO.caption} fill priority className="object-cover opacity-20" />
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-400 transition">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/case-studies" className="hover:text-amber-400 transition">Case Studies</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-300">Rising Main Excavator Lift Plan</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">Excavator</span>
              <span className="inline-flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-1.5 text-amber-400" />
                Wastewater treatment works, Lancashire
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rising Main <span className="gradient-text">Excavator Lifts</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              One lift plan for three possible machines, nine lift types and welded pipe strings,
              revised twice in six days as the site changed, and reissued on the start date.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {facts.map((f) => (
              <div key={f.label}>
                <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-1">{f.label}</div>
                <div className="text-white font-medium">{f.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <figure className="rounded-3xl overflow-hidden border border-slate-700/50 bg-white">
              <a href={HERO.src} target="_blank" rel="noopener">
                <Image src={HERO.src} alt={HERO.caption} width={HERO.width} height={HERO.height} sizes="(max-width: 1024px) 100vw, 600px" className="w-full h-auto" />
              </a>
              <figcaption className="px-5 py-3 text-sm text-gray-400 bg-slate-900">
                Our public example excavator drawing. This job&apos;s own drawings follow the same
                standard but carry the client&apos;s details, so they are not shown.
              </figcaption>
            </figure>
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">The Brief</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Pipe laying with whichever midi excavator turned up
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A pipeline contractor working for a principal contractor at a wastewater treatment
                works was laying about 135 m of 400 mm PE100 rising main in trenches dug by others.
                The pipe was butt-fusion jointed into strings, with blank flanges at each end. A midi
                excavator would unload the pipe, the fusion machine, the generator and the fittings,
                carry them to the weld station, and lower the welded strings into the trench.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The contractor did not know which machine the hire company would send: a JCB 85Z-2,
                86C-2 or 90Z-2. We wrote the lift plan and acted as Appointed Person, to CPA CIG 0801
                (excavators used as cranes), BS 7121-1 and LOLER 1998 regulation 8.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">The Plan</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">What the plan covered</h2>
            <p className="text-gray-300 leading-relaxed">
              A plan written to be used on the bank, not filed. Every figure traces back to the
              manufacturer&apos;s published data and the certificates for the kit on site.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {planned.map((p) => (
              <div key={p} className="flex items-start bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50">
                <CheckCircle className="w-6 h-6 text-amber-400 mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">{p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Changes on Site</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">Three revisions in six days</h2>
            <p className="text-gray-300 leading-relaxed">
              Sites change, and a lift plan has to keep up. Each change was worked through the
              figures and the drawings, not just noted, so the plan on the bank always matched the
              kit and the people actually there.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {revisions.map(({ icon: Icon, rev, text }) => (
              <div key={rev} className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{rev}</h3>
                <p className="text-gray-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Outcome</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">Every lift completed safely</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            The work went ahead on the Rev C plan and every lift was completed safely. Because the
            plan already covered all three machines and every lift in both directions, the
            contractor could start with whichever excavator arrived, without waiting for a rewrite.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We write{' '}
            <Link href="/services/excavator-lift-plans" className="text-amber-400 hover:text-amber-300 underline">excavator lift plans</Link>{' '}
            for pipeline, utilities and groundworks contractors across the UK, and act as their{' '}
            <Link href="/services/appointed-person" className="text-amber-400 hover:text-amber-300 underline">Appointed Person</Link>{' '}
            where they have none of their own. There is more on how we work in{' '}
            <Link href="/blog/rmt-lift-planning-software-development" className="text-amber-400 hover:text-amber-300 underline">our software and drawings</Link>.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Excavator', 'Pipe laying', 'Water industry', 'Welded PE strings', 'CPA CIG 0801', 'BS 7121-1', 'LOLER 1998'].map((tag) => (
              <span key={tag} className="bg-slate-800/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-slate-700/50">{tag}</span>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-500 leading-relaxed">
            Client, principal contractor and site names are withheld. Figures are taken from the
            issued lift plan. The drawing shown is one of our public examples, not this job.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Got an excavator lift coming up?</h2>
          <p className="text-gray-400 text-xl mb-10">
            Send us the job, the machines and the loads. Fixed price, quoted within four working hours.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Discuss Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
