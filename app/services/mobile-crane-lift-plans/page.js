import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText, Layers, Ruler, Users } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Steel Erection Planning UK | Lift Plans',
  description: 'Complete lift planning for structural steel erection. Fabrication drawing reviews, erection sequences, crane selection, tandem lifts. CPCS Appointed Person services.',
  keywords: ['steel erection', 'structural steel', 'steel frame', 'tandem lifts', 'crane selection', 'erection sequence'],
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/steel-erection',
  },
  openGraph: {
    title: 'Steel Erection Planning UK | Lift Plans',
    description: 'Complete lift planning for structural steel erection. Fabrication drawing reviews, erection sequences, crane selection, tandem lifts. CPCS Appointed Person services.',
    url: 'https://www.rmtsafetysolutions.com/services/steel-erection',
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
    }
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
                frames to large multi-storey structures.
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
    </>
  )
}

