import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Aerial Site Surveys UK | Drone Photography',
  description: 'Aerial site surveys and construction photography from a CPCS Appointed Person with GVC drone pilot and CAA Operational Authorisation.',
  keywords: 'aerial site survey, drone survey lift planning, drone survey construction site, construction site photography, aerial survey crane planning, UAV site survey UK, construction progress photography, site photography contractor, GVC drone pilot, CAA operational authorisation',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/aerial-site-surveys',
  },
  openGraph: {
    title: 'Aerial Site Surveys UK | Drone Photography',
    description: 'Aerial site surveys and construction site photography for lift planning and progress monitoring. CPCS Appointed Person with GVC and CAA Operational Authorisation.',
    url: 'https://www.rmtsafetysolutions.com/services/aerial-site-surveys',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Aerial Surveys & Construction Site Photography',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    telephone: '+447803808093',
  },
  description: 'Aerial site surveys and construction site photography to support lift planning, crane positioning, progress monitoring, and project documentation. Conducted by a CPCS Appointed Person with GVC qualification and CAA Operational Authorisation.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does a drone survey help with lift planning?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A drone survey provides accurate overhead imagery of the site showing access routes, ground conditions, overhead obstructions, adjacent structures, and potential crane positions. This data directly informs the lift plan, producing more accurate and site-specific documentation than working from drawings or third-party photographs alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you licensed to fly drones on construction sites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We hold a GVC (General VLOS Certificate) and CAA Operational Authorisation, which permits us to fly in congested areas including active construction sites. All flights are conducted in compliance with current UK drone regulations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you fly drones near tower cranes and other construction equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our CAA Operational Authorisation covers flight in congested areas. All flights near construction equipment are planned with appropriate risk assessments, and we coordinate with site management to ensure safe operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer ground-level site photography as well as aerial?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide both aerial and ground-level construction site photography. Because we hold CPCS, NEBOSH, and CSCS qualifications, we can work safely and independently on live construction sites without requiring an escort or additional supervision.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of the UK do you cover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide aerial surveys and site photography across the UK. Based in Warrington, Cheshire, we can attend sites nationwide.',
      },
    },
  ],
}

// BreadcrumbList JSON-LD — Home > Services > {service}. Unlocks
// breadcrumb rendering in mobile SERPs and matches the structured-
// data depth used on /about, /contact and /locations/[slug].
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Aerial Site Surveys', item: 'https://www.rmtsafetysolutions.com/services/aerial-site-surveys' },
  ],
}

export default function AerialSiteSurveysPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-medium mb-4">Aerial &amp; Ground-Level</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Aerial Surveys &amp; Site Photography</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Aerial site surveys and construction site photography from someone who understands 
            construction sites — not just cameras. Drone and ground-level photography for lift planning, 
            progress monitoring, safety documentation, and project records. Conducted by a CPCS 
            Appointed Person with GVC qualification and CAA Operational Authorisation.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Request a Quote
            </Link>
            <a href="tel:+447803808093" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Call: 07803 808093
            </a>
          </div>
          <div className="flex flex-wrap gap-8 text-sm">
            <div><span className="text-blue-400 font-bold text-2xl">GVC</span><br />Qualified Pilot</div>
            <div><span className="text-blue-400 font-bold text-2xl">CAA</span><br />Operational Authorisation</div>
            <div><span className="text-blue-400 font-bold text-2xl">CPCS A61</span><br />Appointed Person</div>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Our Service Is Different</h2>
          <p className="text-lg text-slate-600 mb-6">
            Most drone and photography companies can take pictures of a construction site. What they 
            cannot do is look at that site through the eyes of someone with 35 years of construction 
            experience and understand what they are looking at.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            We are not a photography company that occasionally works on construction sites. We are a 
            lift planning consultancy that offers aerial surveys and site photography as a natural 
            extension of the work we already do. We hold the site qualifications to work safely and 
            independently on live construction sites — CPCS, NEBOSH, CSCS — so we do not need an 
            escort, we do not need a site induction explaining what a crane is, and we do not create 
            additional management overhead for your site team.
          </p>
          <p className="text-lg text-slate-600">
            The result is photography and survey data captured by someone who knows what matters 
            on a construction site — because we work on them every day.
          </p>
        </div>
      </section>

      {/* Two Services */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What We Offer</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-blue-500">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Aerial Surveys</h3>
              <p className="text-slate-600 mb-6">
                Drone-based aerial surveys of construction sites using high-resolution imagery. 
                Particularly valuable for lift planning, where overhead views of the site reveal 
                information that is difficult or impossible to assess from ground level.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>High-resolution overhead site imagery</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Crane access routes and setup positions</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Overhead obstructions and hazard identification</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Ground conditions assessment from above</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Tower crane jib zones and overlapping areas</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Site progress overview and comparison over time</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border-2 border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Site Photography</h3>
              <p className="text-slate-600 mb-6">
                Ground-level construction site photography for project documentation, progress 
                records, safety evidence, and stakeholder reporting. Professional quality from 
                someone who can work independently on a live site.
              </p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Construction progress photography</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Lifting operations documentation</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Safety and compliance evidence capture</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Pre-lift site condition records</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Stakeholder and client progress reports</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Combined aerial and ground-level packages</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Supports Lift Planning */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How Aerial Surveys Support Lift Planning</h2>
          <p className="text-lg text-slate-600 mb-8">
            When we conduct an aerial survey for lift planning, we are not simply capturing images. We are
            assessing the site from the perspective of someone who will plan or review lifting operations on it.
            We know what to look for because we know what a lift plan needs — see our guide to{' '}
            <Link href="/blog/what-is-a-lift-plan" className="text-blue-600 hover:text-blue-700 underline">
              what a lift plan is
            </Link>{' '}
            and the{' '}
            <Link href="/blog/common-lift-planning-mistakes" className="text-blue-600 hover:text-blue-700 underline">
              common lift planning mistakes
            </Link>{' '}
            a good site survey helps you avoid.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Writing Lift Plans</h3>
              <p className="text-slate-600 mb-4">
                When we write a lift plan for a site we have not physically visited, the aerial survey 
                provides the site-specific data that makes the plan accurate and practical. We can see 
                actual conditions rather than relying on drawings that may be out of date.
              </p>
              <Link href="/services/lift-plans" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Lift plan writing service →
              </Link>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Reviewing Lift Plans</h3>
              <p className="text-slate-600 mb-4">
                When reviewing a submitted lift plan, aerial imagery allows us to verify whether the 
                plan reflects actual site conditions. If a plan shows clear access but the survey shows 
                a congested site, that discrepancy needs addressing before the lift proceeds.
              </p>
              <Link href="/services/lift-plan-review" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Lift plan review service →
              </Link>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Tower Crane Projects</h3>
              <p className="text-slate-600 mb-4">
                On long-duration tower crane contracts, periodic aerial surveys track how the site 
                changes — new structures, additional cranes, changing access routes. This ensures 
                lift planning keeps pace with reality on the ground.
              </p>
              <Link href="/services/tower-crane" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Tower crane contracts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Capture - Aerial */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What We Capture — Aerial</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Site Layout &amp; Access</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Overhead imagery showing actual site layout and working areas</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Crane access routes and potential setup positions</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Vehicle access constraints and turning areas</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Material storage and laydown areas</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Obstructions &amp; Hazards</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Overhead power lines, their routes and approximate heights</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Adjacent structures, buildings, and scaffolding</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Tower crane jib positions and overlapping zones</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Trees, boundary walls, and other fixed obstructions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Ground Conditions</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Visual assessment of ground at planned operating positions</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Evidence of made-up ground, backfilled trenches, or soft areas</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Drainage routes and areas prone to waterlogging</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Surface conditions for outrigger and stabiliser positions</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Lifting Operation Context</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Load pick-up and landing positions relative to site features</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Exclusion zone requirements based on actual conditions</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Pedestrian and vehicle routes that may be affected</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Proximity of occupied areas and public spaces</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Site Photography Uses */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Construction Site Photography</h2>
          <p className="text-lg text-slate-600 mb-8">
            Ground-level site photography for clients who need professional documentation of their 
            construction projects. Because we already hold the qualifications and site experience to 
            work on live construction sites, we can attend your site and work independently without 
            creating additional management burden for your team.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Progress documentation',
                desc: 'Regular photographic records of construction progress for client reporting, stakeholder updates, and project archives. Scheduled visits at agreed intervals to maintain a consistent visual record.',
              },
              {
                title: 'Lifting operations records',
                desc: 'Photographic evidence of lifting operations as they happen — crane setup, rigging, lift execution, and completion. Useful for compliance records, training material, and demonstrating safe working practices.',
              },
              {
                title: 'Pre-lift site conditions',
                desc: 'Photographic record of site conditions before a lifting operation takes place. Provides evidence of ground conditions, access arrangements, and exclusion zones as documented in the lift plan.',
              },
              {
                title: 'Safety and compliance evidence',
                desc: 'Photographs documenting safety arrangements, signage, exclusion zones, PPE compliance, and general site conditions. Supporting evidence for audits, inspections, and client assurance requirements.',
              },
              {
                title: 'Combined aerial and ground packages',
                desc: 'Aerial drone photography and ground-level photography delivered together in a single site visit. Provides a complete visual record of the site from every angle.',
              },
              {
                title: 'Ad-hoc and incident documentation',
                desc: 'One-off site visits to capture specific conditions, record an incident scene, or document a particular operation. Available at short notice when you need a qualified person on site with a camera.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">The Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Brief', desc: 'You tell us what you need — aerial survey data for lift planning, progress photography, or a combined package. We tailor the visit to capture exactly what you require.' },
              { step: '2', title: 'Permissions', desc: 'We handle all drone flight permissions, airspace checks, and risk assessments. We coordinate with your site team to agree timing and any operational constraints.' },
              { step: '3', title: 'Site Visit', desc: 'We attend site and conduct the aerial survey and/or ground-level photography. No escort required — we hold the qualifications to work independently on your site.' },
              { step: '4', title: 'Delivery', desc: 'You receive the survey data and photographs — annotated where relevant, organised by area or operation, and delivered within 24 hours of the site visit.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Use */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">When an Aerial Survey Adds Most Value</h2>
          <p className="text-lg text-slate-600 mb-8">
            Not every lifting operation needs a drone survey. For straightforward operations on 
            well-documented sites, conventional information is usually sufficient. But there are 
            situations where aerial survey data materially improves the quality of the lift plan.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Complex or congested sites', desc: 'Where multiple cranes, structures, and operations are in close proximity and accurate spatial information is critical to safe planning.' },
              { title: 'Sites that have changed since the drawings were produced', desc: 'Construction sites evolve constantly. An aerial survey shows the site as it is now, not as it was when the drawings were last updated.' },
              { title: 'Remote lift planning', desc: 'When the lift plan is being written off-site, aerial survey data provides the site-specific information that would otherwise require a physical visit.' },
              { title: 'Tower crane installations and dismantles', desc: 'Aerial imagery before a crane arrives helps confirm the planned position, access route, and any obstructions not obvious from ground level.' },
              { title: 'Tandem lifts and multi-crane operations', desc: 'Operations involving multiple machines working in close proximity require precise understanding of the spatial relationships on site.' },
              { title: 'Disputes or verification', desc: 'When a submitted lift plan does not appear to reflect actual site conditions, aerial imagery provides objective evidence to resolve the question.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Qualifications &amp; Authorisations</h2>
          <p className="text-lg text-slate-600 mb-8">
            Our aerial surveys and site photography are conducted by someone who holds both the 
            drone qualifications required by the CAA and the construction industry qualifications 
            needed to work safely on live sites. This means no escorts, no additional supervision, 
            and no delays while someone explains the site to an outsider.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Drone &amp; Photography</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>GVC (General VLOS Certificate) qualified pilot</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>CAA Operational Authorisation — flight in congested areas including active construction sites</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Full public liability insurance for drone operations</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Construction Industry</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>CPCS Appointed Person (A61) — Reg: 40389279</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>35+ years construction industry experience</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>NEBOSH National Diploma</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>CertIOSH · MIIRSM · TIFSM</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'How does a drone survey help with lift planning?',
                a: 'A drone survey provides accurate overhead imagery of the site showing access routes, ground conditions, overhead obstructions, adjacent structures, and potential crane positions. This data directly informs the lift plan, producing more accurate and site-specific documentation than working from drawings or third-party photographs alone.',
              },
              {
                q: 'Are you licensed to fly drones on construction sites?',
                a: 'Yes. We hold a GVC (General VLOS Certificate) and CAA Operational Authorisation, which permits us to fly in congested areas including active construction sites. All flights are conducted in compliance with current UK drone regulations.',
              },
              {
                q: 'Can you fly drones near tower cranes and other construction equipment?',
                a: 'Yes. Our CAA Operational Authorisation covers flight in congested areas. All flights near construction equipment are planned with appropriate risk assessments, and we coordinate with site management to ensure safe operations. Tower crane jib positions and other overhead equipment are factored into every flight plan.',
              },
              {
                q: 'Do you offer ground-level photography as well as aerial?',
                a: 'Yes. We provide both aerial drone photography and ground-level construction site photography. Because we hold CPCS, NEBOSH, and CSCS qualifications, we can work safely and independently on live construction sites without requiring an escort or additional supervision.',
              },
              {
                q: 'Can the aerial survey be combined with lift plan writing or review?',
                a: 'Yes, and this is where the service delivers the most value. Because the person conducting the survey is also the Appointed Person writing or reviewing the lift plan, the survey data feeds directly into the planning process with no loss of information or misinterpretation between separate parties.',
              },
              {
                q: 'What areas of the UK do you cover?',
                a: 'We provide aerial surveys and site photography across the UK. Based in Warrington, Cheshire, we attend sites nationwide.',
              },
              {
                q: 'How long does a survey take?',
                a: 'Most site surveys can be completed in a few hours, including setup, flight, and ground-level photography. The exact duration depends on the size of the site and the scope of what needs to be captured. All data is typically delivered within 24 hours of the site visit.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm serviceName="Aerial Site Surveys" heading="Get a quote for aerial site surveys" />
        </div>
      </section>

      <RelatedServices currentSlug="aerial-site-surveys" />

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Aerial Surveys or Site Photography?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your requirements. Whether you need drone survey data for a 
            lift plan, progress photography for a long-term project, or a combined package, we 
            provide the site intelligence your project needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors">
              Request a Quote
            </Link>
            <a href="tel:+447803808093" className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Call: 07803 808093
            </a>
          </div>
        </div>
      </section>
      {/* Available across the UK — reciprocates the inbound links from /locations/* */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Available across the UK
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We deliver aerial site surveys UK-wide. Plans are produced remotely from Warrington; site visits are scheduled where the work requires it. Pick your nearest city or call <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">07803 808093</a> to discuss your project.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
              <Link
                key="warrington"
                href="/locations/warrington"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Warrington →
              </Link>
              <Link
                key="manchester"
                href="/locations/manchester"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Manchester →
              </Link>
              <Link
                key="liverpool"
                href="/locations/liverpool"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Liverpool →
              </Link>
              <Link
                key="leeds"
                href="/locations/leeds"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Leeds →
              </Link>
              <Link
                key="birmingham"
                href="/locations/birmingham"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Birmingham →
              </Link>
              <Link
                key="london"
                href="/locations/london"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                London →
              </Link>
              <Link
                key="bristol"
                href="/locations/bristol"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Bristol →
              </Link>
              <Link
                key="glasgow"
                href="/locations/glasgow"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Glasgow →
              </Link>
              <Link
                key="edinburgh"
                href="/locations/edinburgh"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Edinburgh →
              </Link>
          </div>
        </div>
      </section>

    </>
  )
}
