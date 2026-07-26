import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText, Truck, Shovel, Building2, HelpCircle } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  // SEO fix (Jun 2026): differentiated from the homepage, which targets the
  // same "lift plans UK / lift planning" head terms and was cannibalising this
  // page (GSC: homepage ranked for "lift planning services UK"; this page sat
  // at pos ~33 with 2,112 impressions). This page now owns the commercial
  // query "lift planning services" (227 impressions, 0 clicks, pos ~20).
  // `absolute` skips the layout's brand suffix so the £200 price hook stays
  // visible within the ~60-char SERP limit.
  title: { absolute: 'Lift Planning Services UK | Lift Plans from £200' },
  description: 'Expert lift planning services for UK construction. LOLER-compliant lift plans from a CPCS Appointed Person — fixed prices from £200, 24-48 hour turnaround.',
  keywords: ['lift planning services', 'lift planning experts', 'lift plan', 'lift plans', 'lift planning', 'lift planner', 'lift plan writing', 'lifting plan', 'lifting plans', 'excavator lift plan', 'telehandler lift plan', 'mobile crane lift plan', 'lorry loader lift plan', 'LOLER compliant'],
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/lift-plans',
  },
  openGraph: {
    title: 'Lift Planning Services UK | Lift Plans from £200',
    description: 'Expert lift planning services from a CPCS Appointed Person. LOLER compliant lift plans for excavators, telehandlers, lorry loaders, mobile and tower cranes. Fixed prices, UK-wide.',
    url: 'https://www.rmtsafetysolutions.com/services/lift-plans',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    images: ['/images/mobile-crane-steel-erection.webp'],
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lift Planning Services',
  description: 'Professional lift plan writing for excavators, telehandlers, lorry loaders, and mobile cranes. LOLER compliant lift plans from a CPCS Appointed Person with fast turnaround, UK-wide.',
  provider: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.rmtsafetysolutions.com/#business',
    name: 'RMT Solutions Ltd',
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Lift Plan Writing',
  url: 'https://www.rmtsafetysolutions.com/services/lift-plans',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Lift Plan Services by Equipment Type',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Excavator Lift Plans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Telehandler Lift Plans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lorry Loader Lift Plans' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Crane Lift Plans' } },
    ],
  },
}

// FAQ content — single source of truth. The visible FAQ section below and
// the FAQPage JSON-LD are both generated from this array, so the structured
// data always matches the on-page content (a requirement of Google's
// FAQ rich-result guidelines).
const faqs = [
  {
    q: 'What is a lift plan and when do I need one?',
    a: 'A lift plan is a documented plan for a lifting operation, setting out how a load will be lifted safely, the equipment used, the risks and the control measures. Under LOLER 1998, every lifting operation must be properly planned by a competent person. The level of detail scales with risk — routine lifts need a simple plan, while complex or non-routine lifts need a detailed written lift plan from a CPCS Appointed Person.',
  },
  {
    q: 'How much does a lift plan cost?',
    a: 'Lift plan costs depend on complexity. A simple excavator or telehandler lift plan with a generic site assessment typically costs £200 to £300. Mobile crane and lorry loader lift plans usually fall in the £250 to £500 range. Complex multi-pick operations, tandem lifts, contract lifts, or plans needing a site visit can cost £500 to £1,500. We provide a fixed price on every enquiry — no hourly billing.',
  },
  {
    q: 'How long does it take to write a lift plan?',
    a: 'Standard excavator and telehandler lift plans are delivered within 24 to 48 hours of receiving the project information. Mobile crane and lorry loader plans usually take 2 to 5 working days depending on complexity. Plans requiring a site visit are agreed case by case. Urgent same-day plans can be arranged where the load and site information is already available.',
  },
  {
    q: 'Who writes your lift plans?',
    a: 'Every lift plan is written by a CPCS Appointed Person (A61) with 35 years of construction industry experience. The Appointed Person is the competent person required under LOLER and BS 7121 to plan lifting operations — selecting the equipment, verifying capacity against the load chart, and assessing the site-specific hazards.',
  },
  {
    q: 'What information do you need to write a lift plan?',
    a: 'To prepare a compliant lift plan we need: the load (weight, dimensions, lift points), the lifting equipment proposed (make, model, configuration), the site (address, ground conditions, overhead and underground services, adjacent activities), the operation (start position, end position, working radius, any obstructions), and the project (principal contractor, dates, communication route to the site team).',
  },
  {
    q: 'Do you need a site visit to write a lift plan?',
    a: 'For straightforward lifts with good site information and clear photographs or drawings, a site visit is not always required. For complex operations — tandem lifts, lifts near live infrastructure, lifts on poor ground, or anything outside routine practice — a site visit is recommended and is included in the quoted price. We discuss this on every enquiry before agreeing the scope.',
  },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
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
    { '@type': 'ListItem', position: 3, name: 'Lift Plan Writing', item: 'https://www.rmtsafetysolutions.com/services/lift-plans' },
  ],
}

export default function LiftPlansPage() {
  const equipmentTypes = [
    {
      id: 'excavator',
      icon: Shovel,
      title: 'Excavator Lift Plans',
      description: 'LOLER compliant lift plans for excavator lifting operations. Suitable for pipe laying, trench box handling, and general lifting duties.',
      features: ['Capacity calculations', 'Radius limitations', 'Ground conditions assessment', 'Lifting accessory specifications'],
      delivery: 'Remote service - 24-48 hour turnaround',
    },
    {
      id: 'telehandler',
      icon: Truck,
      title: 'Telehandler Lift Plans',
      description: 'Professional lift plans for telehandler operations including load placement, materials handling, and suspended loads.',
      features: ['Load chart analysis', 'Boom configuration', 'Stability assessment', 'Operating zone definition'],
      delivery: 'Remote service - 24-48 hour turnaround',
    },
    {
      id: 'lorry-loader',
      icon: Truck,
      title: 'Lorry Loader Lift Plans',
      description: 'Comprehensive lift plans for lorry loader crane operations, including hiab deliveries and material offloading.',
      features: ['Outrigger positioning', 'Load moment calculations', 'Delivery zone planning', 'Safe working load verification'],
      delivery: 'Remote service - 24-48 hour turnaround',
    },
    {
      id: 'mobile-crane',
      icon: Building2,
      title: 'Mobile Crane Lift Plans',
      description: 'Detailed lift plans for mobile crane operations. Site visit included to assess ground conditions and access requirements.',
      features: ['Ground bearing assessment', 'Duty calculations', 'Rigging arrangements', 'Exclusion zone planning'],
      delivery: 'Site visit included - 3-5 working days',
    },
  ]

  const process = [
    { step: '01', title: 'Enquiry', description: 'Tell us about your lifting operation and requirements' },
    { step: '02', title: 'Quote', description: 'We provide a competitive quote within 4 working hours' },
    { step: '03', title: 'Information', description: 'You provide equipment specs, load details, and site information' },
    { step: '04', title: 'Delivery', description: 'We deliver your LOLER compliant lift plan' },
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
            alt="Mobile crane lift planning"
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
              LOLER Compliant Lift Plans
            </span>
            {/* This page now owns the head term "lift planning services UK"
                outright (Jul 2026 SEO review, fix #1) — the homepage and
                /services H1s were retargeted away from it. */}
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              Lift Planning <span className="gradient-text">Services UK</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Expert lift planning services for excavators, telehandlers, lorry loaders, and mobile cranes.
              Fixed prices from £200 and fast turnaround from a CPCS Appointed Person with 35 years experience.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pillar intro — keyword-rich body copy targeting the high-volume
          head terms: "lift plan", "lift plans", "lift planning",
          "lift planner". Written as genuine, useful prose, not stuffed. */}
      <section className="py-20 bg-slate-900 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Lift Planning Explained
          </span>
          {/* H2 rewritten (Jul 2026 SEO review, fix #1). Was "Professional Lift
              Planning Services, UK-Wide" — a verbatim restatement of the old
              homepage H1, which meant this page carried the collision internally
              as well. The H2 now frames the section as an explainer rather than
              repeating the H1's target term. */}
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            What a lift plan is, and what you get from us
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              A <strong className="text-white">lift plan</strong> is the documented plan for a lifting
              operation — it sets out how a load will be lifted safely, the equipment used, the risks
              involved and the control measures required. Under the Lifting Operations and Lifting
              Equipment Regulations 1998 (LOLER), every lifting operation must be properly planned by a
              competent person before it takes place. Our <strong className="text-white">lift planning
              services</strong> give you that plan, written, checked and ready to sign off on site. If you are new
              to the topic, our guides explain{' '}
              <Link href="/blog/what-is-a-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                what a lift plan is
              </Link>{' '}
              and{' '}
              <Link href="/blog/when-do-you-need-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                when you need one
              </Link>.
            </p>
            <p>
              We write <strong className="text-white">lift plans</strong> (also called{' '}
              <strong className="text-white">lifting plans</strong>) for every type of lifting
              operation in UK construction — from a single excavator pick to a multi-crane tandem lift.
              Each plan is produced by a qualified{' '}
              <strong className="text-white">lift planner</strong> &mdash; a CPCS Appointed Person (A61) with
              35 years of site experience &mdash; so the radius and capacity calculations, rigging
              arrangement, ground bearing assessment and site-specific hazards are all addressed to
              LOLER 1998 and{' '}
              <Link href="/blog/what-is-bs-7121-complete-guide" className="text-amber-400 hover:text-amber-300 underline">
                BS 7121
              </Link>{' '}
              best practice.
            </p>
            <p>
              Whether you need a one-off lift plan, a batch of plans for a programme of works, or an{' '}
              <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">
                independent check of plans
              </Link>{' '}
              submitted by your subcontractors, you are dealing directly with the lift planning expert
              who writes them. No call centres, no hourly billing — a fixed price and a fast turnaround
              on every enquiry. For a full breakdown of pricing, see our guide to{' '}
              <Link href="/blog/lift-plan-cost-uk" className="text-amber-400 hover:text-amber-300 underline">
                how much a lift plan costs
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Equipment Types"
            title="Lift Plans for All Equipment"
            description="We provide LOLER compliant lift plans for a wide range of lifting equipment used in UK construction."
          />

          <div className="grid md:grid-cols-2 gap-8">
            {equipmentTypes.map((equipment) => (
              <article
                key={equipment.id}
                id={equipment.id}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <equipment.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-white">{equipment.title}</h3>
                    <p className="text-amber-400 text-sm mt-1">{equipment.delivery}</p>
                  </div>
                </div>

                <p className="text-gray-400 mb-6">{equipment.description}</p>

                <h4 className="text-white font-semibold mb-3">Included in your lift plan:</h4>
                <ul className="space-y-2 text-gray-300">
                  {equipment.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How It Works"
            title="Our Lift Plan Process"
            description="A straightforward process to get your LOLER compliant lift plan"
          />

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-slate-700 -translate-x-4" />
                )}
                <div className="text-6xl font-display font-bold text-amber-500/20 mb-4">{item.step}</div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                What's Included
              </span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                Comprehensive Lift Plan Documentation
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Every lift plan we produce is fully LOLER compliant and includes all the documentation
                you need for safe lifting operations. New to lift planning? Start with our guides on{' '}
                <Link href="/blog/what-is-a-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                  what a lift plan is
                </Link>{' '}
                and{' '}
                <Link href="/blog/when-do-you-need-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                  when you need one
                </Link>.
              </p>
              <ul className="space-y-4">
                {[
                  'Risk assessment specific to your operation',
                  'Detailed method statement',
                  'Load and capacity calculations',
                  'Equipment specifications and selection',
                  'Site layout and exclusion zones',
                  'Lifting accessory requirements',
                  'Communication and signalling arrangements',
                  'Emergency procedures',
                ].map((item) => (
                  <li key={item} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 border border-slate-700/50">
              <FileText className="w-16 h-16 text-amber-400 mb-6" />
              <h3 className="font-display text-2xl font-bold text-white mb-4">
                LOLER 1998 Compliant
              </h3>
              <p className="text-gray-400 mb-6">
                All lift plans meet the requirements of the Lifting Operations and Lifting Equipment 
                Regulations 1998 and follow BS 7121 best practice guidance.
              </p>
              <Link href="/contact" className="btn-primary inline-flex items-center">
                Request a Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Inline quick-quote form */}
      {/* FAQ — visible Q&A that mirrors the FAQPage JSON-LD above, so the
          structured data is backed by on-page content (Google requirement)
          and the answers can be quoted directly by AI answer engines. */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Lift Plan FAQs"
            title="Lift Plan &amp; Lift Planning Questions"
            description="Common questions about our lift plans, lift planning service, costs and turnaround."
          />
          <div className="space-y-5">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 open:border-amber-500/40 transition"
              >
                <summary className="flex items-start justify-between cursor-pointer list-none">
                  <span className="flex items-start text-white font-semibold text-lg">
                    <HelpCircle className="w-5 h-5 text-amber-400 mr-3 mt-1 flex-shrink-0" />
                    {faq.q}
                  </span>
                  <ArrowRight className="w-5 h-5 text-amber-400 ml-4 mt-1 flex-shrink-0 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-gray-300 leading-relaxed mt-4 pl-8">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social proof (Jul 2026): verbatim client quote from /testimonials,
              placed beside the enquiry form — one strong quote next to the form
              measurably lifts submissions. */}
          <figure className="mb-8 bg-slate-800/40 border-l-4 border-amber-400 rounded-r-2xl p-6">
            <blockquote className="text-gray-300 italic leading-relaxed">
              &ldquo;I have been consistently impressed with the high quality and prompt turnaround of Ricky&rsquo;s lift plans and appraisals. On certain occasions, we have relied on him at the last minute, and he has always responded with professionalism, helpfulness, and urgency.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="text-white font-semibold">Louis Musetti</span>
              <span className="text-gray-400"> — Site Manager, Caddick Construction</span>
              <a href="/testimonials" className="text-amber-400 hover:text-amber-300 ml-2">More testimonials →</a>
            </figcaption>
          </figure>
          <InlineQuoteForm serviceName="Lift Plan Writing" heading="Get a quote for lift plan writing" />
        </div>
      </section>

      <RelatedServices currentSlug="lift-plans" />

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Need a Lift Plan?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Get in touch for a competitive quote. Fast turnaround on all lift plans.
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
              We deliver lift plan writing UK-wide. Plans are produced remotely from Warrington; site visits are scheduled where the work requires it. Pick your nearest city or call <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">07803 808093</a> to discuss your project.
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
