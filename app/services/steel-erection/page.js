import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText, Layers, Ruler, Users } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  // Fix #6/#8, Jul 2026 SEO review: title now leads on "steel erection lift
  // plans" (the commercial term) and surfaces tandem lifts, which is the
  // differentiator and links through to the new tandem content.
  title: 'Steel Erection Lift Plans UK | Tandem Lifts',
  description: 'Lift planning for structural steel erection: fabrication drawing reviews, erection sequences, crane selection and tandem lifts, by a CPCS A61 AP.',
  keywords: ['steel erection', 'structural steel', 'steel frame', 'tandem lifts', 'crane selection', 'erection sequence'],
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/steel-erection',
  },
  openGraph: {
    title: 'Steel Erection Planning UK | Lift Plans',
    description: 'Complete lift planning for structural steel erection. Fabrication drawing reviews, erection sequences, crane selection, tandem lifts. CPCS Appointed Person services.',
    url: 'https://www.rmtsafetysolutions.com/services/steel-erection',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    images: ['/images/mobile-crane-steel-erection.webp'],
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Steel Erection Lift Planning',
  description: 'Complete lift planning for structural steel erection including fabrication drawing reviews, erection sequences, crane selection, and tandem lift coordination. CPCS Appointed Person services.',
  provider: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.rmtsafetysolutions.com/#business',
    name: 'RMT Solutions Ltd',
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Steel Erection Lift Planning',
  url: 'https://www.rmtsafetysolutions.com/services/steel-erection',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Steel Erection Planning Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Fabrication Drawing Review' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Erection Sequence Planning' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Crane Selection' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tandem Lift Coordination' } },
    ],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "What is steel erection planning?",
      "acceptedAnswer": { "@type": "Answer", "text": "Steel erection planning is the process of preparing a safe system of work for the lifting and installation of structural steelwork. It combines a lift plan, method statement, and risk assessment into an integrated document covering crane selection, rigging arrangements, sequence of erection, temporary stability, and the controls needed to manage risks to operatives and adjacent activities." }
    },
    {
      "@type": "Question",
      "name": "Do you need a lift plan for steel erection?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Steel erection involves multiple lifting operations, each of which must be planned under LOLER 1998 Regulation 8. In addition, BS 5531 (the British Standard for safety in erecting structural frames) requires a written method statement covering the erection sequence and temporary stability of the frame." }
    },
    {
      "@type": "Question",
      "name": "Who is the Appointed Person for steel erection?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Appointed Person for steel erection holds a CPCS A61 card and takes overall responsibility for planning the lifting operations. On most steel erection projects this person works alongside the structural engineer responsible for temporary stability, the steelwork contractor's site supervisor, and the principal contractor's temporary works coordinator." }
    },
    {
      "@type": "Question",
      "name": "How long before steel arrives on site should the lift plan be ready?",
      "acceptedAnswer": { "@type": "Answer", "text": "Lift plans and erection method statements should be issued, reviewed, and approved by the principal contractor at least 7 to 10 working days before steel deliveries begin. This allows time for review comments, clash detection with other trades, and pre-start briefings with the erection team." }
    },
    {
      "@type": "Question",
      "name": "When does steel erection need a tandem lift?",
      "acceptedAnswer": { "@type": "Answer", "text": "A tandem lift is used when a single crane cannot take the member safely — usually because the piece is too heavy at the required radius, too long to control on one hook, or has to be rotated from horizontal to vertical during the lift. Long trusses, plate girders and pre-assembled frames are the common cases. Tandem lifts are treated as complex lifts under BS 7121, each crane is derated (typically to 75 to 80 per cent of its chart capacity to allow for load sharing and out-of-plumb effects), and one person must have overall control of the operation." }
    },
    {
      "@type": "Question",
      "name": "Who is responsible for temporary stability during steel erection?",
      "acceptedAnswer": { "@type": "Answer", "text": "Temporary stability of the partially erected frame is a design responsibility, not a lifting one. It sits with the temporary works designer and is checked by the temporary works coordinator appointed under BS 5975. The Appointed Person plans how each piece gets into position safely; the erection sequence they plan to must come from, and be consistent with, that stability design. Where the two conflict, the stability design governs and the sequence is replanned around it." }
    },
    {
      "@type": "Question",
      "name": "What information do you need to plan a steel erection lift?",
      "acceptedAnswer": { "@type": "Answer", "text": "Fabrication and general arrangement drawings, the steel schedule with individual piece weights, the site layout showing crane access and hardstanding, any known ground conditions or underground services information, details of overhead obstructions and boundaries, and the intended erection sequence if the steelwork contractor has one. If piece weights are missing we can calculate them from the drawings, but confirmed fabricator weights are always preferable." }
    },
    {
      "@type": "Question",
      "name": "Can one lift plan cover a whole steel erection package?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usually a package needs a small set of plans rather than one document or one per piece. Repetitive picks made from the same crane position with similar weights and radii can be grouped under a single plan that defines the envelope of loads and radii it covers. Anything outside that envelope, plus every tandem lift, blind lift, lift over a live area and each crane relocation, needs its own plan. Grouping sensibly keeps the paperwork usable on site, which matters — a plan nobody reads controls nothing." }
    },
    {
      "@type": "Question",
      "name": "How much does steel erection lift planning cost?",
      "acceptedAnswer": { "@type": "Answer", "text": "Steel erection packages are quoted individually rather than at the fixed rates we publish for single-machine lift plans, because the work scales with the number of crane positions, the complexity of the sequence and whether tandem lifts are involved. Send the fabrication drawings and steel schedule and you will have a fixed-price quote within 4 working hours." }
    }
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
    { '@type': 'ListItem', position: 3, name: 'Steel Erection Planning', item: 'https://www.rmtsafetysolutions.com/services/steel-erection' },
  ],
}

export default function SteelErectionPage() {
  const services = [
    { icon: FileText, title: 'Fabrication Drawing Review', description: 'Analysis of steel fabrication drawings to identify weights, lift points, and erection requirements' },
    { icon: Layers, title: 'Erection Sequence Planning', description: 'Optimal erection sequence to maintain structural stability throughout the build' },
    { icon: Ruler, title: 'Crane Selection', description: 'Selection of appropriate mobile cranes based on lift weights, radii, and site constraints' },
    { icon: Users, title: 'Tandem Lift Coordination', description: 'Planning for dual crane lifts when single crane capacity is exceeded' },
  ]

  const projectTypes = [
    'Industrial warehouses and distribution centres',
    'Multi-storey commercial buildings',
    'Retail parks and shopping centres',
    'Sports stadiums and arenas',
    'Infrastructure projects',
    'Portal frame structures',
  ]

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <Image
            src="/images/mobile-crane-steel-erection.webp"
            alt="Steel erection with mobile crane"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Steel Erection Services
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              Steel Erection <span className="gradient-text">Lift Planning</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Complete lift planning for structural steel erection projects. From fabrication drawing 
              review through to crane selection and tandem lift coordination.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="What We Do"
            title="Steel Erection Planning Services"
            description="Comprehensive lift planning to ensure your steel erection project runs safely and efficiently"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                Project Types
              </span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Steel Structures We Plan
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                We provide lift planning for steel erection projects of all sizes, from small portal
                frames to large multi-storey structures — see our{' '}
                <Link href="/case-studies/chorlton-baths-balcony-lift" className="text-amber-400 hover:text-amber-300 underline">
                  balcony lift verification at Chorlton Baths, Manchester
                </Link>{' '}
                for an example of a recent steel installation we attended on site. For the planning
                fundamentals, see the{' '}
                <Link href="/blog/common-lift-planning-mistakes" className="text-amber-400 hover:text-amber-300 underline">
                  most common lift planning mistakes
                </Link>{' '}
                and our comparison of{' '}
                <Link href="/blog/mobile-crane-vs-tower-crane" className="text-amber-400 hover:text-amber-300 underline">
                  mobile crane vs tower crane
                </Link>{' '}
                for steelwork.
              </p>
              <ul className="space-y-3">
                {projectTypes.map((type) => (
                  <li key={type} className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src="/images/mobile-crane-steel-erection.webp"
                alt="Mobile crane erecting steel frame"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Long-form body copy.
          Fix #8, Jul 2026 SEO review. This page was 437 words — the thinnest
          money page on the site, despite being in the main nav and promoted on
          the homepage, and running at under a third of the length of its
          sibling service pages. The sections below cover the parts of steel
          erection planning that buyers actually search for: sequencing,
          drawing review, crane selection and siting, tandem lifts, temporary
          stability and the documents that get issued. */}
      <section className="py-24 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Steel Erection Lift Planning Explained
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            What a steel erection lift plan has to get right
          </h2>

          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              Steel erection is not one lifting operation. A single portal frame job might involve
              two hundred individual picks; a multi-storey frame runs into the thousands. Every one
              of those is a lifting operation under{' '}
              <Link href="/blog/loler-acop-l113-explained" className="text-amber-400 hover:text-amber-300 underline">
                LOLER 1998
              </Link>{' '}
              Regulation 8, which means every one must be properly planned by a competent person,
              appropriately supervised, and carried out safely. The practical job of a steel erection
              lift plan is to do that across a whole package without producing a document nobody on
              site will ever read.
            </p>
            <p>
              The other thing that makes steel different from most lifting work is that the structure
              being built is not stable until it is finished. A column standing on four holding-down
              bolts is not a structure — it is a cantilever waiting for a reason to fall over. So the
              lift plan and the erection sequence are the same conversation. You cannot plan the picks
              without knowing the order, and the order is driven by when the frame becomes
              self-supporting.
            </p>

            <h3 className="font-display text-2xl font-bold text-white pt-6">
              Fabrication drawing review
            </h3>
            <p>
              Planning starts with the fabrication drawings and the steel schedule. We work through
              them to establish the weight of every piece, where its centre of gravity sits, and
              whether it has usable lifting points or needs a purpose-made arrangement. Long slender
              members — rafters, trusses, plate girders — often need a spreader beam or a two-point
              pick simply to stop them bending under their own weight while suspended.
            </p>
            <p>
              This stage catches problems that are cheap to solve on paper and expensive to solve on
              site. Missing or absent lifting lugs, pieces whose weight puts them outside the intended
              crane's chart at the radius they have to be placed at, and members that cannot be
              rotated from the delivery position into the erected position without fouling something
              are all routinely found here. Confirmed fabricator weights are always preferable to
              calculated ones, but we can derive them from the drawings where the schedule is
              incomplete.
            </p>

            <h3 className="font-display text-2xl font-bold text-white pt-6">
              Erection sequence and temporary stability
            </h3>
            <p>
              The erection sequence determines the order in which the frame goes up, when temporary
              bracing goes in, and when it can safely come out. Temporary stability is a design
              responsibility — it belongs to the temporary works designer and is signed off by the
              temporary works coordinator appointed under BS 5975, not by the Appointed Person. But
              the two have to agree. The sequence we plan the lifting around must be the sequence the
              stability design assumes, and where they conflict, the stability design governs and the
              lifting gets replanned around it.
            </p>
            <p>
              In practice the sequence also has to survive contact with the real programme. Steel
              rarely arrives in the order the drawings imply, deliveries get split, and other trades
              want the same ground the crane is standing on. A sequence that only works if everything
              goes to plan is not a sequence, and we build in the flexibility to reorder where the
              stability design allows it — and flag clearly where it does not.
            </p>

            <h3 className="font-display text-2xl font-bold text-white pt-6">
              Crane selection and siting
            </h3>
            <p>
              Crane selection follows from the heaviest pick at the greatest radius, not from the
              heaviest piece. A five-tonne member placed at 30 metres is a much bigger crane than a
              twelve-tonne member placed at eight. We work the load chart deductions properly —
              hook block, slings, spreader beams, lifting accessories — and plan to the net capacity
              rather than the headline figure. Our{' '}
              <Link href="/services/mobile-crane-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                mobile crane lift plans
              </Link>{' '}
              cover the same ground for standalone crane work.
            </p>
            <p>
              Siting is where most steel jobs actually get decided. Outrigger loads from a large
              mobile crane are concentrated and high, and the ground has to be verified as capable of
              taking them — made ground, backfilled service trenches, basement slabs and buried
              drainage are the usual culprits. The plan specifies mat or pad sizes derived from the
              bearing pressure, not from what happens to be on the wagon. Where access is genuinely
              tight, a{' '}
              <Link href="/services/tower-crane" className="text-amber-400 hover:text-amber-300 underline">
                tower crane
              </Link>{' '}
              may be the answer instead, and our comparison of{' '}
              <Link href="/blog/mobile-crane-vs-tower-crane" className="text-amber-400 hover:text-amber-300 underline">
                mobile crane versus tower crane
              </Link>{' '}
              sets out how that decision usually falls on steelwork.
            </p>

            <h3 className="font-display text-2xl font-bold text-white pt-6">
              Tandem and multi-crane lifts
            </h3>
            <p>
              Tandem lifts come up on steel more than on almost any other type of work — long trusses,
              pre-assembled frames, and pieces that have to be turned from horizontal to vertical
              mid-lift. A tandem lift is a complex lift under BS 7121 by definition. Both cranes are
              derated to allow for load sharing and out-of-plumb effects, one person holds overall
              control of the operation, and the communication arrangement has to be established and
              briefed before anything leaves the ground.
            </p>
            <p>
              The planning detail that gets missed most often is what happens if the lift has to stop
              part-way. A tandem lift that is halted with the load part-rotated is a materially
              different loading case from either the start or the end position, and the plan needs to
              say what the crews do in that situation rather than leaving them to improvise.
            </p>

            <h3 className="font-display text-2xl font-bold text-white pt-6">
              What you actually receive
            </h3>
            <p>
              For a typical steel package that means a set of lift plans covering each crane position
              and load envelope, an erection method statement setting out the sequence and the
              controls, the supporting risk assessment, crane position and radius drawings marked up
              on the site layout, exclusion zone arrangements, and the lifting accessory schedule.
              Everything is signed off by a CPCS A61 Appointed Person and written to the standard Tier
              1 principal contractors expect, because they are the people who review it.
            </p>
            <p>
              Plans should be with the principal contractor seven to ten working days before steel
              starts arriving. That is not a formality — it is the window in which review comments get
              resolved, clashes with other trades get spotted, and the erection team gets briefed
              properly. Packages that arrive the day before the first delivery are the ones that end
              up being replanned on the hard shoulder of the programme. If a reviewer does come back
              with comments on our documents, dealing with them is part of the fee, not an extra.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our Approach"
            title="How We Plan Steel Erection"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <div className="text-5xl font-display font-bold text-amber-500/30 mb-4">01</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Drawing Review</h3>
              <p className="text-gray-400">
                We review fabrication drawings to identify steel weights, lift points, and any 
                handling requirements for each piece.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <div className="text-5xl font-display font-bold text-amber-500/30 mb-4">02</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Sequence & Cranes</h3>
              <p className="text-gray-400">
                We plan the erection sequence and select appropriate mobile cranes based on 
                lift weights, radii, and site conditions.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <div className="text-5xl font-display font-bold text-amber-500/30 mb-4">03</div>
              <h3 className="font-display text-xl font-bold text-white mb-3">Lift Plans</h3>
              <p className="text-gray-400">
                We produce LOLER compliant lift plans for each crane position, including 
                tandem lifts where required.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — visible.
          Fix #2, Jul 2026 SEO review. This page emitted FAQPage structured data
          for four questions that appeared nowhere on the rendered page, which
          breaches Google's structured data policy and is manual-action
          eligible. The block below renders from faqSchema itself, so the markup
          and the visible copy stay in sync by construction. */}
      <section className="py-20 bg-slate-900 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            Steel erection lift planning FAQs
          </h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((item) => (
              <div
                key={item.name}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 sm:p-7"
              >
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-gray-400 leading-relaxed">{item.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm serviceName="Steel Erection Planning" heading="Get a quote for steel erection planning" />
        </div>
      </section>

      <RelatedServices currentSlug="steel-erection" />

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Planning a Steel Erection Project?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Send us your fabrication drawings and we'll provide a quote for comprehensive lift planning.
          </p>
          <Link href="/contact" className="btn-primary">
            Get a Quote
          </Link>
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
              We deliver steel erection planning UK-wide. Plans are produced remotely from Warrington; site visits are scheduled where the work requires it. Pick your nearest city or call <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">07803 808093</a> to discuss your project.
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

