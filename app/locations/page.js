import Link from 'next/link'
import { MapPin, Phone, ArrowRight, Clock, CheckCircle } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'

// Locations hub page — index of every city served. Acts as the parent
// node in the /locations/* page tree, distributes link equity to each
// city page, and gives Google a single canonical "where we work" page
// to surface for broad geographic queries.
//
// City data is intentionally duplicated here (rather than imported from
// the [slug] route) to keep the dynamic route as a self-contained leaf —
// this is a Next.js convention that avoids cross-route imports. If a
// city is added or removed, update both this file and
// app/locations/[slug]/page.js.

const CITIES = [
  {
    slug: 'warrington',
    city: 'Warrington',
    region: 'Cheshire',
    travelMinutes: 5,
    blurb: 'Our home patch — the Omega logistics campus, Birchwood industrial estate, Stadium Quarter regeneration and town-centre framework drive consistent same-day lift planning work across the M62/M6 corridor.',
  },
  {
    slug: 'manchester',
    city: 'Manchester',
    region: 'Greater Manchester',
    travelMinutes: 35,
    blurb: 'NOMA, Mayfield, Victoria North, ID Manchester and the Town Hall refurbishment make Manchester one of the most active lift planning markets in the UK.',
  },
  {
    slug: 'salford',
    city: 'Salford',
    region: 'Greater Manchester',
    travelMinutes: 30,
    blurb: 'MediaCityUK, Salford Quays, the New Bailey and the wider Salford Crescent regeneration zone keep Salford among the busiest lift planning markets in Greater Manchester.',
  },
  {
    slug: 'stockport',
    city: 'Stockport',
    region: 'Greater Manchester',
    travelMinutes: 45,
    blurb: 'Stockport town centre regeneration, the Mayoral Development Corporation pipeline and major data centre and industrial schemes drive sustained lifting work across the borough.',
  },
  {
    slug: 'trafford',
    city: 'Trafford',
    region: 'Greater Manchester',
    travelMinutes: 30,
    blurb: 'Trafford Park, the Trafford Centre regeneration and a heavy logistics-warehouse pipeline make Trafford one of the highest-volume lifting markets in the North West.',
  },
  {
    slug: 'liverpool',
    city: 'Liverpool',
    region: 'Merseyside',
    travelMinutes: 40,
    blurb: 'Liverpool Waters, the Knowledge Quarter and the Anfield expansion drive consistent demand for LOLER compliant lift plans across Merseyside.',
  },
  {
    slug: 'wirral',
    city: 'Wirral',
    region: 'Merseyside',
    travelMinutes: 50,
    blurb: 'Wirral Waters — Peel L&P\'s multi-decade dockside masterplan — together with the Birkenhead and Liscard regeneration pipeline make Wirral a strong and growing lift planning market.',
  },
  {
    slug: 'leeds',
    city: 'Leeds',
    region: 'West Yorkshire',
    travelMinutes: 75,
    blurb: 'SOYO, South Bank, Aire Park and the Hunslet regeneration have made Leeds one of the strongest construction markets outside London.',
  },
  {
    slug: 'birmingham',
    city: 'Birmingham',
    region: 'West Midlands',
    travelMinutes: 100,
    blurb: 'HS2 Curzon Street, Paradise, Smithfield and the Big City Plan put the West Midlands among the most lift-intensive regions in Europe.',
  },
  {
    slug: 'london',
    city: 'London',
    region: 'Greater London',
    travelMinutes: 180,
    blurb: 'Tower crane oversail agreements, listed building constraints and the most demanding regulatory environment in the UK — handled remotely with site attendance for critical lifts.',
  },
  {
    slug: 'bristol',
    city: 'Bristol',
    region: 'South West',
    travelMinutes: 180,
    blurb: 'Temple Quarter, the YTL Arena and the University of Bristol enterprise campus drive a steady stream of lifting work across the South West.',
  },
  {
    slug: 'glasgow',
    city: 'Glasgow',
    region: 'Scotland',
    travelMinutes: 210,
    blurb: 'Buchanan Quarter, Sighthill regeneration and Glasgow Harbour anchor a strong central-belt market — same LOLER and BS 7121 standards as the rest of the UK.',
  },
  {
    slug: 'edinburgh',
    city: 'Edinburgh',
    region: 'Scotland',
    travelMinutes: 240,
    blurb: 'St James Quarter, Granton Waterfront and the city\'s UNESCO World Heritage status drive particularly demanding lift planning detail across Edinburgh and Lothian.',
  },
]

export const metadata = {
  title: 'Crane Lift Plan Services Across the UK',
  description:
    'CPCS Appointed Person services and LOLER-compliant crane lift plans across Warrington, Manchester, Liverpool, Leeds, Birmingham, London and Glasgow.',
  keywords: [
    'crane lift plan uk',
    'crane lift plan manchester',
    'crane lift plan liverpool',
    'crane lift plan leeds',
    'crane lift plan birmingham',
    'crane lift plan london',
    'loler lift plan uk',
    'cpcs appointed person uk',
    'cpcs appointed person manchester',
    'cpcs appointed person liverpool',
    'loler appointed person',
  ],
  openGraph: {
    title: 'Crane Lift Plan Services Across the UK',
    description:
      'CPCS Appointed Person services and LOLER compliant crane lift plans across the UK. Manchester, Liverpool, Leeds, Birmingham, London, Bristol, Glasgow and Edinburgh.',
    url: 'https://www.rmtsafetysolutions.com/locations',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    images: ['/images/mobile-crane-steel-erection.webp'],
  },
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/locations',
  },
}

const collectionJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Lift Planning Services Across the UK',
  description:
    'Cities and regions served by RMT Solutions Ltd for LOLER compliant lift planning, lift plan checking, and CPCS Appointed Person services.',
  url: 'https://www.rmtsafetysolutions.com/locations',
  isPartOf: {
    '@type': 'WebSite',
    name: 'RMT Solutions Ltd',
    url: 'https://www.rmtsafetysolutions.com',
  },
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: CITIES.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: `Lift Plans ${c.city}`,
      url: `https://www.rmtsafetysolutions.com/locations/${c.slug}`,
    })),
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Locations', item: 'https://www.rmtsafetysolutions.com/locations' },
  ],
}

export default function LocationsHub() {
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
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-amber-400 transition">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Locations</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              UK-wide service from Warrington
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Crane Lift Plan Services Across the UK
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              We deliver LOLER compliant crane lift plans, lift plan checking, and CPCS Appointed Person contracts across the UK. Standard plans are produced remotely and turned around in 24-48 hours; site visits are scheduled for surveys, complex pre-lift briefings, and 8-weekly compliance audits.
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

      {/* Cities grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Cities and regions served</h2>
            <p className="text-gray-400 leading-relaxed">
              We work UK-wide. The cities below are markets where we have repeat clients, established crane hire relationships, and direct project experience. If your project is somewhere else, we still cover it — get in touch and we will quote a fixed price.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                href={`/locations/${c.slug}`}
                className="group block bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-2xl p-6 transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-400 transition">
                    {c.city}
                  </h3>
                  <MapPin className="w-5 h-5 text-amber-400/70" />
                </div>
                <p className="text-sm text-gray-500 mb-3">{c.region}</p>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {c.blurb}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <span className="inline-flex items-center text-xs text-gray-400">
                    <Clock className="w-4 h-4 mr-1.5" />
                    ~{c.travelMinutes} min from Warrington
                  </span>
                  <span className="inline-flex items-center text-amber-400 font-semibold text-sm">
                    Crane lift plans {c.city}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                What we deliver, wherever your site is
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Every project gets the same standard regardless of location. We work to LOLER 1998, BS 7121, BS 5531 and ISO 10567 across every city — what changes by region is the local context (oversail agreements, listed building constraints, access routes, and which crane hire firms operate in the area), not the compliance baseline.
              </p>
              <ul className="space-y-3">
                {[
                  'LOLER compliant lift plans for excavators, telehandlers, lorry loaders, and mobile cranes',
                  'Independent lift plan checking with Cat A or Cat B determination',
                  'CPCS Appointed Person contracts with 8-weekly compliance audits',
                  'Steel erection planning to BS 5531',
                  'Tandem and complex-pick lift plans with full ground bearing pressure analysis',
                  'Aerial site surveys for ground conditions, overhead obstructions and access routes',
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold text-white mb-4">How the remote model works</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Most of the lift planning work itself is desk-based — capacity verification, ground bearing pressure calculations, exclusion zone geometry, and method statement drafting. We produce that remotely from Warrington, which is how we keep fees competitive and turnaround fast.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Site attendance is scheduled around the work that actually requires it: pre-lift surveys for tandem or complex picks, oversail and exclusion zone walkthroughs, critical-lift briefings, and 8-weekly compliance audits on long-running contracts.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Travel times from our Warrington base range from 35 minutes (Manchester) to 240 minutes (Edinburgh). Same-day site attendance is practical across the North West and feasible into the Midlands; further afield we plan visits 48-72 hours ahead.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inline quote form */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName="Lift Plans — UK-wide"
            heading="Tell us where your site is — we will reply within 4 working hours"
          />
        </div>
      </section>
    </>
  )
}
