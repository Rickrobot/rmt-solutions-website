import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Phone, MapPin, Clock, CheckCircle, ArrowRight } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'

// Per-city content. Each entry is real, substantive copy — not a thin
// doorway page. Google rewards location pages that genuinely add value
// (local construction context, travel time, named projects, regional
// regulations) and penalises near-identical templated city pages.
//
// To add a city: add the slug + entry below, and update generateStaticParams.

const LOCATIONS = {
  manchester: {
    city: 'Manchester',
    region: 'Greater Manchester',
    metaTitle: 'Lift Plans Manchester | CPCS Appointed Person | RMT Solutions',
    metaDescription:
      'LOLER compliant lift plans across Manchester and Greater Manchester. CPCS Appointed Person services for tower crane, mobile crane, excavator and steel erection projects. Same-day quotes — call 07803 808093.',
    travelMinutes: 35,
    intro:
      "Manchester is one of the most active construction markets in the UK, with NOMA, Mayfield, Victoria North, ID Manchester, and the ongoing Town Hall refurbishment generating a constant flow of high-value lifting operations. We work with main contractors, tower crane operators, steel erectors and specialist plant hire firms across Greater Manchester delivering LOLER compliant lift plans, lift plan checking, and Appointed Person contracts.",
    detail:
      "Manchester sites bring their own specific challenges: dense city-centre footprints, listed buildings adjoining new builds, complex temporary works in basement boxes, and tight tower crane envelopes that need careful planning to keep loads within site boundaries and away from neighbouring rail and tram corridors. We are 35 minutes from Manchester city centre via the M62, which means we can attend most sites the same day if a survey is needed and turn around standard lift plans in 24-48 hours.",
    projects: [
      'Tower crane Appointed Person contract on a 22-storey residential development in Manchester city centre',
      'Lift plan reviews for a major industrial warehouse project off the M60',
      'Steel erection planning and review for a commercial office in MediaCityUK',
    ],
  },

  liverpool: {
    city: 'Liverpool',
    region: 'Merseyside',
    metaTitle: 'Lift Plans Liverpool | CPCS Appointed Person | RMT Solutions',
    metaDescription:
      'LOLER compliant lift plans across Liverpool and Merseyside. CPCS Appointed Person services for residential, commercial and infrastructure projects. Same-day quotes — call 07803 808093.',
    travelMinutes: 40,
    intro:
      "Liverpool has been one of the UK's most consistent construction markets since Liverpool Waters, the Knowledge Quarter, and the Anfield expansion drove a fresh wave of activity along the waterfront and into Wavertree. We provide lift planning, lift plan checking, and Appointed Person services across Liverpool, Wirral, Sefton, and the wider Merseyside region.",
    detail:
      "Liverpool's heritage estate brings particular planning constraints — proximity to listed buildings around the Three Graces, working over or near the docks, and tight programme demands on stadium and arena projects with public-facing event commitments. We are 40 minutes from Liverpool city centre via the M62 and M57, which makes same-day site attendance practical for urgent surveys and pre-lift briefings.",
    projects: [
      'Mobile crane lift plans for a residential development in the Baltic Triangle',
      'Tower crane compliance audits on a commercial scheme near Liverpool ONE',
      'Steel erection method statements for a logistics hub in Speke',
    ],
  },

  leeds: {
    city: 'Leeds',
    region: 'West Yorkshire',
    metaTitle: 'Lift Plans Leeds | CPCS Appointed Person | RMT Solutions',
    metaDescription:
      'LOLER compliant lift plans across Leeds and West Yorkshire. CPCS Appointed Person services for SOYO, South Bank, Aire Park and major Yorkshire infrastructure. Same-day quotes — call 07803 808093.',
    travelMinutes: 75,
    intro:
      "Leeds South Bank, SOYO, Aire Park, the Hunslet regeneration and the wider Channel 4 / HMRC-led commercial pipeline have made Leeds one of the strongest construction markets outside London. We provide lift planning and Appointed Person services across Leeds, Bradford, Wakefield, and the wider West Yorkshire region.",
    detail:
      "Leeds presents a mix of dense city-centre tower crane sites and high-volume infrastructure work along the M1 and A1 corridors. We are 75 minutes from central Leeds via the M62, and we maintain working relationships with several Yorkshire-based crane hire firms and steel erectors so we can build site context quickly on new projects.",
    projects: [
      'Lift plan checking service on a multi-tower residential scheme in Leeds South Bank',
      'Tandem crane lift plan for a precast concrete delivery on the A1 corridor',
      'Lifting operations audit for a logistics distribution centre in Wakefield',
    ],
  },

  birmingham: {
    city: 'Birmingham',
    region: 'West Midlands',
    metaTitle: 'Lift Plans Birmingham | CPCS Appointed Person | RMT Solutions',
    metaDescription:
      'LOLER compliant lift plans across Birmingham and the West Midlands. CPCS Appointed Person services for HS2, Paradise, Smithfield and Big City Plan projects. Same-day quotes — call 07803 808093.',
    travelMinutes: 100,
    intro:
      "Birmingham's Big City Plan, HS2 Curzon Street, Paradise, Smithfield, and the surrounding regeneration pipeline make the West Midlands one of the most lift-intensive construction markets in Europe right now. We provide lift planning, lift plan checking, and Appointed Person contracts across Birmingham, Coventry, Wolverhampton, and the wider West Midlands.",
    detail:
      "HS2 alone has driven a step change in lifting standards across the region, with main contractors increasingly demanding independent lift plan review and compliance audits as standard. We work with main contractors, specialist lifting firms, and steel erectors across the West Midlands, with site attendance typically achievable within 100 minutes via the M6 from our Warrington base.",
    projects: [
      'Independent lift plan checking for a Tier 1 HS2 contractor',
      'Tower crane Appointed Person contract on a Birmingham city-centre residential tower',
      'Steel erection planning for a logistics campus near Coventry',
    ],
  },

  london: {
    city: 'London',
    region: 'Greater London',
    metaTitle: 'Lift Plans London | CPCS Appointed Person | RMT Solutions',
    metaDescription:
      'LOLER compliant lift plans across London. CPCS Appointed Person services for residential, commercial, infrastructure, and city-centre projects. Same-day quotes — call 07803 808093.',
    travelMinutes: 180,
    intro:
      "London is the UK's most demanding lifting environment — dense city-centre footprints, complex temporary works, tower crane oversail agreements, listed building constraints, and a regulatory environment shaped by the HSE, Network Rail, TfL, and the boroughs. We provide lift planning, lift plan checking, and Appointed Person services for London-based main contractors, specialist lifting firms, and steel erectors.",
    detail:
      "London projects often require remote lift plan production turned around inside 24-48 hours, with site visits scheduled around critical lifts rather than as a default. We deliver full LOLER and BS 7121 compliance on London projects without imposing a London cost base on our fees, and we travel down for site surveys, complex pre-lift briefings, and audits as required.",
    projects: [
      'Lift plan checking service for a tower crane operating over a listed building in central London',
      'Mobile crane lift plans for façade installation on a Zone 1 office refurbishment',
      'Lifting operations audits for a Tier 1 contractor on multiple Crossrail-adjacent commercial schemes',
    ],
  },

  bristol: {
    city: 'Bristol',
    region: 'South West',
    metaTitle: 'Lift Plans Bristol | CPCS Appointed Person | RMT Solutions',
    metaDescription:
      'LOLER compliant lift plans across Bristol and the South West. CPCS Appointed Person services for Temple Quarter, Bristol Arena and major regional schemes. Same-day quotes — call 07803 808093.',
    travelMinutes: 180,
    intro:
      "Bristol's Temple Quarter regeneration, the YTL Arena scheme, the University of Bristol enterprise campus, and the surrounding South West construction pipeline have made the region one of the most active mid-sized markets in the UK. We provide lift planning and Appointed Person services across Bristol, Bath, and the wider South West.",
    detail:
      "We service Bristol projects with a combination of remote lift plan production and scheduled site visits for surveys, complex pre-lift briefings, and 8-weekly audits. Standard lift plans are turned around within 24-48 hours; complex operations and tandem lifts are quoted individually with fixed-price proposals.",
    projects: [
      'Lift plan reviews for a precast concrete supplier delivering across the South West',
      'Mobile crane lift plans for façade installation in central Bristol',
      'Steel erection planning for a logistics campus on the M5 corridor',
    ],
  },

  glasgow: {
    city: 'Glasgow',
    region: 'Scotland',
    metaTitle: 'Lift Plans Glasgow | CPCS Appointed Person | RMT Solutions',
    metaDescription:
      'LOLER compliant lift plans across Glasgow and the central belt. CPCS Appointed Person services for Buchanan Quarter, Sighthill, Glasgow Harbour and major Scottish infrastructure. Same-day quotes — call 07803 808093.',
    travelMinutes: 210,
    intro:
      "Glasgow's Buchanan Quarter, Sighthill regeneration, Glasgow Harbour, and the surrounding central-belt construction pipeline have made Scotland a strong mid-cycle market for lift planning services. We provide lift planning, lift plan checking, and Appointed Person services across Glasgow, Edinburgh, and the central belt.",
    detail:
      "Scottish construction sites operate to the same LOLER 1998 and BS 7121 standards as the rest of the UK, but local site conditions — Glasgow's tight city-centre access, the high-rise residential pipeline, and the city's significant tram and rail interface zones — drive the planning detail. We work with Scottish main contractors and specialist lifting firms on a remote-plus-site-visit model that keeps fees competitive.",
    projects: [
      'Tower crane Appointed Person contract on a Glasgow city-centre residential scheme',
      'Mobile crane lift plans for steel erection on a logistics campus near Glasgow Airport',
      'Lifting operations audits for a Tier 1 contractor across multiple Scottish projects',
    ],
  },

  edinburgh: {
    city: 'Edinburgh',
    region: 'Scotland',
    metaTitle: 'Lift Plans Edinburgh | CPCS Appointed Person | RMT Solutions',
    metaDescription:
      'LOLER compliant lift plans across Edinburgh and Lothian. CPCS Appointed Person services for St James Quarter, Granton Waterfront, Haymarket and listed-building work. Same-day quotes — call 07803 808093.',
    travelMinutes: 240,
    intro:
      "Edinburgh's St James Quarter, Granton Waterfront, Haymarket, and the surrounding listed-building refurbishment pipeline create a particularly demanding lift planning environment — tight city-centre tower crane envelopes, listed building constraints, and the city's UNESCO World Heritage status all driving careful planning detail. We provide lift planning and Appointed Person services across Edinburgh and Lothian.",
    detail:
      "Edinburgh sites often involve oversail of historic structures, tight access through Old Town and New Town streets, and significant rail and tram interface zones. We deliver LOLER and BS 7121 compliance on Edinburgh projects with a remote-plus-site-visit model, with site attendance scheduled around critical lifts and 8-weekly audits.",
    projects: [
      'Lift plan checking for a tower crane operating near a Category A listed building',
      'Mobile crane lift plans for façade installation on a New Town commercial refurbishment',
      'Steel erection planning for a logistics scheme at Edinburgh Park',
    ],
  },
}

const SERVICE_LINKS = [
  { slug: 'lift-plans',                title: 'Lift Plan Writing' },
  { slug: 'lift-plan-checking',        title: 'Lift Plan Checking' },
  { slug: 'lift-plan-review',          title: 'Lift Plan Review' },
  { slug: 'lifting-operations-audit',  title: 'Lifting Operations Audit' },
  { slug: 'tower-crane',               title: 'Tower Crane Contracts' },
  { slug: 'steel-erection',            title: 'Steel Erection Planning' },
  { slug: 'mobile-crane-lift-plans',   title: 'Mobile Crane Lift Plans' },
  { slug: 'excavator-lift-plans',      title: 'Excavator Lift Plans' },
  { slug: 'telehandler-lift-plans',    title: 'Telehandler Lift Plans' },
  { slug: 'lorry-loader-lift-plans',   title: 'Lorry Loader Lift Plans' },
  { slug: 'aerial-site-surveys',       title: 'Aerial Site Surveys' },
]

export async function generateStaticParams() {
  return Object.keys(LOCATIONS).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }) {
  const loc = LOCATIONS[params.slug]
  if (!loc) return { title: 'Location not found' }
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical: `https://www.rmtsafetysolutions.com/locations/${params.slug}` },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: `https://www.rmtsafetysolutions.com/locations/${params.slug}`,
    },
  }
}

export default function LocationPage({ params }) {
  const loc = LOCATIONS[params.slug]
  if (!loc) notFound()

  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `https://www.rmtsafetysolutions.com/locations/${params.slug}#business`,
    name: `RMT Solutions Ltd — Lift Planning Services in ${loc.city}`,
    description: loc.metaDescription,
    url: `https://www.rmtsafetysolutions.com/locations/${params.slug}`,
    telephone: '+447803808093',
    email: 'ricky@rmtsolutions.co.uk',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warrington',
      addressRegion: 'Cheshire',
      addressCountry: 'GB',
    },
    areaServed: { '@type': 'City', name: loc.city },
    knowsAbout: ['LOLER 1998', 'BS 7121', 'Lift Planning', 'Appointed Person', loc.city],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-slate-900">
        <div className="absolute inset-0 construction-pattern" />
        <div className="absolute inset-0 grid-bg" />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400 transition">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link href="/locations" className="text-gray-400 hover:text-amber-400 transition">Locations</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gray-500">{loc.city}</span>
          </nav>

          <div className="inline-flex items-center bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
            <MapPin className="w-4 h-4 text-amber-400 mr-2" />
            <span className="text-amber-400 text-sm font-semibold">{loc.region}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Lift Plans in <span className="gradient-text">{loc.city}</span>
          </h1>

          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
            LOLER compliant lift plans, lift plan checking and Appointed Person services for
            construction projects across {loc.city} and {loc.region}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="btn-primary flex items-center justify-center gap-2"
            >
              Request a Quote <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+447803808093" className="btn-secondary flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call 07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Why Us / Local Context */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-custom max-w-none">
            <h2 className="font-display text-3xl font-bold text-white mb-6">
              Lift planning across {loc.city}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">{loc.intro}</p>
            <p className="text-gray-300 text-lg leading-relaxed mb-10">{loc.detail}</p>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-8 mb-10">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <div className="text-white font-display text-xl font-bold mb-2">
                    {loc.travelMinutes} minutes from {loc.city}
                  </div>
                  <p className="text-gray-400 text-base">
                    From our Warrington base — practical for same-day site visits, surveys, and
                    pre-lift briefings. Standard lift plans turned around within 24-48 hours of
                    receiving project information.
                  </p>
                </div>
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-white mb-4">
              Recent {loc.city} project experience
            </h3>
            <ul className="space-y-3 mb-10 not-prose">
              {loc.projects.map((p) => (
                <li key={p} className="flex items-start gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Services available */}
      <section className="py-16 bg-slate-900/50 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-3">
            Services available in {loc.city}
          </h2>
          <p className="text-gray-400 mb-8">
            Every service we offer is available across {loc.region}.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SERVICE_LINKS.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="block bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-5 py-4 transition group"
              >
                <span className="text-white group-hover:text-amber-400 font-semibold transition flex items-center justify-between">
                  {s.title}
                  <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Inline form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName={`Lift Plans — ${loc.city}`}
            heading={`Get a quote for ${loc.city}`}
          />
        </div>
      </section>
    </>
  )
}
