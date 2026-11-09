import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MapPin, Truck, Gauge, ShieldCheck } from 'lucide-react'
import { SITE, caseStudyArticle, caseStudyBreadcrumb } from '@/lib/caseStudyLayout'

// Anonymised case study (Nov 2026). Facts are taken from the issued lift
// plans (Rev A, 14 Oct 2026); acceptance by the joint venture was confirmed
// by Ricky Marsh. The client and the joint venture are not named.
const URL = `${SITE}/case-studies/hs2-lorry-loader-lift-plans`
const HERO = {
  src: '/images/case-studies/hs2-lorry-loader-lift-plan.webp',
  width: 1600,
  height: 900,
  caption: 'RMT example lorry loader plan drawing: the vehicle at its standing, stabiliser spreads, slew paths, farthest reach and the exclusion zone',
}
const OG = '/images/case-studies/hs2-lorry-loader-lift-plan-og.jpg'

export const metadata = {
  title: 'HS2 Lorry Loader Lift Plans | Case Study',
  description:
    'Case study: lorry loader lift plans for a tyre-fitting specialist on HS2, rewritten to BS 7121-4, ALLMI and the joint venture’s standards, now accepted and in use.',
  keywords: [
    'HS2 lift plan',
    'lorry loader lift plan case study',
    'HIAB lift plan HS2',
    'BS 7121-4 lift plan',
    'ALLMI lift plan',
    'generic lift plan lorry loader',
    'van mounted crane lift plan',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Lorry Loader Lift Plans Rewritten for HS2 | Case Study',
    description:
      'Two vehicle-mounted cranes, earthmover tyres up to 600 kg, and plans written to the standard the tier 1 joint venture reviews against. Accepted and in use on HS2 sites.',
    url: URL,
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'article',
    images: [{ url: `${SITE}${OG}`, width: 1200, height: 630, alt: HERO.caption }],
  },
}

const articleJsonLd = caseStudyArticle({
  url: URL,
  headline: 'Lorry loader lift plans rewritten for a tyre-fitting specialist on HS2',
  description:
    'RMT Solutions rewrote the lift plans for a tyre-fitting specialist servicing earthmoving plant on HS2: a knuckle-boom loader crane on a 32 t rigid and a loader crane on a 3.5 t van. The plans were written to BS 7121-4, ALLMI and the tier 1 joint venture’s own standards, and are accepted and in use on HS2 sites.',
  image: HERO,
  about: 'Lorry loader lifting operations: tyre handling for earthmoving plant on HS2',
  date: '2026-11-09',
  region: 'England',
})
const breadcrumbJsonLd = caseStudyBreadcrumb({ url: URL, name: 'HS2 Lorry Loader Lift Plans' })

const facts = [
  { label: 'Project', value: 'HS2 main works civils' },
  { label: 'Client', value: 'Tyre-fitting specialist (name withheld)' },
  { label: 'Principal contractor', value: 'Tier 1 joint venture' },
  { label: 'Machines', value: 'HMF 3000 K5 on a 32 t rigid; Hyva HA 22 E3 on a 3.5 t van' },
  { label: 'Loads', value: 'Earthmover tyres up to 600 kg' },
  { label: 'RMT role', value: 'Lift plans and Appointed Person' },
]

const planned = [
  'One plan per vehicle and crane, restricted to that machine and configuration, so nobody can borrow a plan for a crane it was not written for',
  'BS 7121-4 (lorry loaders) as the governing standard, with ALLMI’s code of practice and lift planning method',
  'The joint venture’s own vehicle immobilisation and release standard and its approved cards guidance, written into the safe system of work',
  'A generic plan for a repetitive lift with a purpose-built attachment, as BS 7121-4 allows, stepping up to an Intermediate lift and back to the Appointed Person when the pre-lift check finds an overhead line, an excavation, a slope or any other proximity hazard',
  'Duties read from the manufacturers’ published duty charts for each crane',
  'Ground bearing under the stabiliser mats checked by the ALLMI method',
  'Elevation and plan drawings to scale, the manufacturers’ data, COSHH, a risk assessment, pre-lift verification hold points and a briefing sheet',
  'A six-month review date, or sooner on any change of machine, attachment, load or method',
]

const lifts = [
  {
    icon: Truck,
    title: 'Truck-mounted crane',
    text: 'HMF 3000 K5 knuckle-boom on a 32 t 8×4 rigid, with a hydraulic tyre handler. Governing lift: a tyre up to 600 kg plus the handler, 1,390 kg in all, at 12.0 m radius: 81.8% of the published duty against a 90% ceiling. Ground bearing 179 kPa against 200 kPa allowable on 1.0 m mats.',
  },
  {
    icon: Gauge,
    title: 'Van-mounted crane',
    text: 'Hyva HA 22 E3 on a 3.5 t service van, lifting tyres with a bead hook. Governing lift: a tyre up to 545 kg at 2.31 m radius on the first hydraulic extension: 73.5% of the published duty against a 90% ceiling.',
  },
  {
    icon: ShieldCheck,
    title: 'Written to be reviewed',
    text: 'Each plan carries our 19-point assurance map and sets out the hold points the lift team must close on the day, before the first lift.',
  },
]

export default function Hs2LorryLoaderCaseStudy() {
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
              <span className="text-gray-300">HS2 Lorry Loader Lift Plans</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">Lorry Loader</span>
              <span className="inline-flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-1.5 text-amber-400" />
                HS2 main works sites
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Lorry Loader Plans <span className="gradient-text">Rewritten for HS2</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A tyre-fitting specialist needed its lift plans brought up to the standard the tier 1
              joint venture reviews against. Both plans are now accepted and in use on HS2 sites.
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
                Our public example lorry loader plan drawing. This job&apos;s own drawings follow the
                same standard but carry the client&apos;s details, so they are not shown.
              </figcaption>
            </figure>
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">The Brief</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                Plans that would stand up to a tier 1 review
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                The client services the tyres on earthmoving plant across HS2 sites. Tyres up to
                600 kg are removed, handled and refitted using two vehicle-mounted cranes: a
                knuckle-boom loader crane with a hydraulic tyre handler on a 32 t rigid, and a smaller
                loader crane on a 3.5 t service van.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Their existing lift plans needed rewriting to the standard the joint venture running
                the works reviews against before the work could carry on. We rewrote both plans from
                the ground up and acted as Appointed Person.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">The Plans</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">What we put in them</h2>
            <p className="text-gray-300 leading-relaxed">
              A tier 1 reviewer checks a lorry loader plan against the right standard, the
              manufacturer&apos;s data and their own site rules. We wrote to all three.
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
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">The Numbers</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">Two cranes, two governing lifts</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {lifts.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">Outcome</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">Accepted and in use on HS2</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Both plans were accepted by the joint venture and are in use on HS2 sites. Because each
            one is generic for its vehicle but tells the lift team exactly when to stop and call the
            Appointed Person, the client can work across sites without a new plan for every visit.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We write{' '}
            <Link href="/services/lorry-loader-lift-plans" className="text-amber-400 hover:text-amber-300 underline">lorry loader lift plans</Link>{' '}
            to BS 7121-4 and ALLMI for HIAB, loader crane and van-mounted crane operators, and{' '}
            <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">review lift plans</Link>{' '}
            for principal contractors. There is more on how we work in{' '}
            <Link href="/blog/rmt-lift-planning-software-development" className="text-amber-400 hover:text-amber-300 underline">our software and drawings</Link>.
          </p>
          <div className="mt-10 flex flex-wrap gap-2">
            {['Lorry loader', 'Van-mounted crane', 'HS2', 'Tier 1 joint venture', 'BS 7121-4', 'ALLMI', 'LOLER 1998'].map((tag) => (
              <span key={tag} className="bg-slate-800/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-slate-700/50">{tag}</span>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-500 leading-relaxed">
            The client and the joint venture are not named. Figures are taken from the issued lift
            plans. The drawing shown is one of our public examples, not this job.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">Lift plans bounced by your principal contractor?</h2>
          <p className="text-gray-400 text-xl mb-10">
            Send us what you have. We&apos;ll rewrite it to the standard it is reviewed against, at a fixed price.
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
