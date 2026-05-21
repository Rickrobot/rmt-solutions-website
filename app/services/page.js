import Link from 'next/link'
import { Wrench, Phone, ArrowRight, CheckCircle, ClipboardCheck, Search, ShieldCheck, Building2, Plane } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'

// Services hub page — parent node for every /services/* leaf route.
//
// Why this exists:
//   1. Gives Google a single canonical "what we do" page to surface for
//      broad service queries ("crane lift planning services", "lift plan
//      writing UK"). Before this page existed, /services 404'd and the
//      11 leaf pages had no shared parent, hurting their topical cluster
//      signal.
//   2. Distributes internal link equity from the homepage / header
//      navigation down to each service leaf in a single hop.
//   3. Anchors the BreadcrumbList JSON-LD on every service leaf, which
//      currently points at https://www.rmtsafetysolutions.com/services
//      as position 2.
//
// Service data is intentionally duplicated here (rather than imported
// from each leaf route) to keep leaves self-contained, mirroring the
// pattern used by app/locations/page.js. If a service is added, removed
// or renamed, update both this file and the corresponding leaf page.

const SERVICES = [
  {
    slug: 'lift-plans',
    name: 'Lift Plan Writing',
    icon: ClipboardCheck,
    category: 'Core',
    blurb:
      'LOLER 1998 and BS 7121 compliant lift plans for excavators, telehandlers, lorry loaders and mobile cranes. CPCS Appointed Person sign-off, 24–48 hour turnaround.',
  },
  {
    slug: 'lift-plan-checking',
    name: 'Lift Plan Checking',
    icon: Search,
    category: 'Independent review',
    blurb:
      'Independent CPCS Appointed Person review of subcontractor lift plans. LOLER and BS 7121 check, Category A or B determination, clear written findings.',
  },
  {
    slug: 'lift-plan-review',
    name: 'Lift Plan Review',
    icon: ShieldCheck,
    category: 'Independent review',
    blurb:
      'Independent lift plan review against LOLER 1998, BS 7121 and industry best practice. Fast turnaround, paste-ready findings for your file.',
  },
  {
    slug: 'excavator-lift-plans',
    name: 'Excavator Lift Plans',
    icon: ClipboardCheck,
    category: 'By plant type',
    blurb:
      'CPCS Appointed Person excavator lift plans for 180° and 360° machines. LOLER 1998 and ISO 10567 compliant. Object handling kit, exclusion zones, ground bearing.',
  },
  {
    slug: 'telehandler-lift-plans',
    name: 'Telehandler Lift Plans',
    icon: ClipboardCheck,
    category: 'By plant type',
    blurb:
      'CPCS Appointed Person telehandler lift plans for suspended loads, work platforms and specialist attachments. LOLER 1998 compliant.',
  },
  {
    slug: 'lorry-loader-lift-plans',
    name: 'Lorry Loader Lift Plans',
    icon: ClipboardCheck,
    category: 'By plant type',
    blurb:
      'Professional lorry loader and HIAB crane lift plans for delivery operations and site lifting. LOLER compliant, 24-hour turnaround.',
  },
  {
    slug: 'mobile-crane-lift-plans',
    name: 'Mobile Crane Lift Plans',
    icon: ClipboardCheck,
    category: 'By plant type',
    blurb:
      'CPCS Appointed Person mobile crane lift plans for all duty types. LOLER 1998 and BS 7121 compliant. Plan delivered in 24–48 hours.',
  },
  {
    slug: 'overhead-gantry-crane-lift-plans',
    name: 'Overhead & Gantry Crane Lift Plans',
    icon: ClipboardCheck,
    category: 'By plant type',
    blurb:
      'Lift plans for overhead travelling (EOT), gantry, bridge and jib cranes in factories, warehouses and fabrication yards. LOLER 1998 and BS 7121-7 compliant, including tandem lifts.',
  },
  {
    slug: 'tower-crane',
    name: 'Tower Crane Contracts',
    icon: Building2,
    category: 'Ongoing contracts',
    blurb:
      'Tower crane appointed person contracts, oversail agreements, 8-weekly compliance audits and method statement maintenance through the lift of the project.',
  },
  {
    slug: 'steel-erection',
    name: 'Steel Erection Planning',
    icon: Wrench,
    category: 'Specialist',
    blurb:
      'Complete lift planning for structural steel erection. Fabrication drawing reviews, erection sequences, crane selection, tandem lifts. BS 5531 compliant.',
  },
  {
    slug: 'lifting-operations-audit',
    name: 'Lifting Operations Audit',
    icon: ShieldCheck,
    category: 'Specialist',
    blurb:
      'Independent lifting operations audit by a CPCS Appointed Person. Assess LOLER compliance, lifting equipment management and supervision arrangements.',
  },
  {
    slug: 'aerial-site-surveys',
    name: 'Aerial Site Surveys',
    icon: Plane,
    category: 'Specialist',
    blurb:
      'Aerial site surveys and construction photography from a CPCS Appointed Person with GVC drone pilot and CAA Operational Authorisation.',
  },
]

// Group services by category for the rendered grid. Order matters —
// "Core" first (the headline offer), then independent review, then by
// plant type, then ongoing and specialist work.
const CATEGORY_ORDER = ['Core', 'Independent review', 'By plant type', 'Ongoing contracts', 'Specialist']

export const metadata = {
  title: 'Lift Planning Services — CPCS Appointed Person | RMT Solutions',
  description:
    'CPCS Appointed Person lift planning services across the UK. Lift plan writing, independent lift plan checking, tower crane contracts, steel erection planning and aerial site surveys. Same-day quotes — call 07803 808093.',
  keywords: [
    'crane lift planning services',
    'lift plan writing service',
    'lift plan checking service',
    'cpcs appointed person services',
    'loler lift plan service',
    'tower crane appointed person',
    'steel erection lift plans',
    'lifting operations audit',
    'aerial site survey uk',
  ],
  openGraph: {
    title: 'Lift Planning Services — CPCS Appointed Person | RMT Solutions',
    description:
      'CPCS Appointed Person lift planning services across the UK. Lift plan writing, independent checking, tower crane contracts, steel erection planning and aerial site surveys.',
    url: 'https://www.rmtsafetysolutions.com/services',
    images: ['/images/og-lift-planning.jpg'],
  },
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services',
  },
}

// CollectionPage JSON-LD enumerating every service. Mirrors the
// structure used on /locations so Google sees a consistent parent/child
// schema pattern across the site.
const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Lift Planning Services',
  description:
    'CPCS Appointed Person lift planning services delivered by RMT Solutions Ltd: lift plan writing, independent lift plan checking, tower crane contracts, steel erection planning, lifting operations audits, and aerial site surveys.',
  url: 'https://www.rmtsafetysolutions.com/services',
  isPartOf: {
    '@type': 'WebSite',
    name: 'RMT Solutions Ltd',
    url: 'https://www.rmtsafetysolutions.com',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: SERVICES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: s.name,
      url: `https://www.rmtsafetysolutions.com/services/${s.slug}`,
    })),
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
  ],
}

export default function ServicesHub() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Services</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-6">
              <Wrench className="w-4 h-4" />
              CPCS Appointed Person • LOLER 1998 • BS 7121
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Lift planning services
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Everything we do is built around one job: producing lift plans that pass first time, stand up under independent review, and keep your site moving. From single excavator picks to multi-year tower crane contracts, every plan is signed off by a CPCS Appointed Person and written to LOLER 1998, BS 7121 and ISO 10567.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:+447803808093"
                className="inline-flex items-center px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-full transition"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call 07803 808093
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition"
              >
                Get a quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid grouped by category */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {CATEGORY_ORDER.map((category) => {
            const items = SERVICES.filter((s) => s.category === category)
            if (items.length === 0) return null
            return (
              <div key={category} className="mb-16 last:mb-0">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                  {category}
                </h2>
                <div className="h-1 w-12 bg-amber-500 rounded-full mb-8" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {items.map((s) => {
                    const Icon = s.icon
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group block bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-2xl p-6 transition"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-amber-400" />
                          </div>
                          <ArrowRight className="w-5 h-5 text-amber-400/60 group-hover:translate-x-1 group-hover:text-amber-400 transition" />
                        </div>
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-amber-400 transition mb-3">
                          {s.name}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {s.blurb}
                        </p>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* How we work */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                How we work
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Every service shares the same delivery model. You send us the project information (drawings, load schedule, site plan, crane choice if known), we work the plan up remotely, and we send it back in 24–48 hours with everything an HSE inspector or principal contractor would expect to see in a LOLER-compliant lifting documentation pack.
              </p>
              <ul className="space-y-3">
                {[
                  'CPCS Appointed Person (A61) sign-off on every plan',
                  'LOLER 1998, BS 7121 and ISO 10567 referenced throughout',
                  'Load chart verification with documented capacity margin',
                  'Ground bearing pressure calculations against site SI data',
                  'Exclusion zones, oversail and slew geometry shown to scale',
                  'Method statement, briefing pack and lift supervisor instructions',
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-4">Not sure which service you need?</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have a single lift coming up, you want <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">Lift Plan Writing</Link>. If a subcontractor has sent you a plan and you need a second pair of eyes on it before signing, that is <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">Lift Plan Checking</Link>.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                For a multi-year project with a tower crane in the ground, you need a <Link href="/services/tower-crane" className="text-amber-400 hover:text-amber-300 underline">Tower Crane Contract</Link> — that bundles the appointed person duty with rolling 8-weekly audits. For a structural steel package, <Link href="/services/steel-erection" className="text-amber-400 hover:text-amber-300 underline">Steel Erection Planning</Link> covers the sequence as well as the picks.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Still unsure? Call <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">07803 808093</a> and tell us what you are lifting — we will tell you in 5 minutes which service applies and quote a fixed price.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inline quote form */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName="Lift planning services — UK-wide"
            heading="Tell us what you are lifting — we will reply within 24 hours"
          />
        </div>
      </section>
    </>
  )
}
