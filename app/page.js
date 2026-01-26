import Image from 'next/image'
import Link from 'next/link'
import { FileText, Building2, Layers, ArrowRight, CheckCircle } from 'lucide-react'
import ServiceCard from '@/components/ui/ServiceCard'
import StatCard from '@/components/ui/StatCard'
import CaseStudyCard from '@/components/ui/CaseStudyCard'
import SectionHeader from '@/components/ui/SectionHeader'

// JSON-LD Schema for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.rmtsafetysolutions.com/#business',
  name: 'RMT Solutions Ltd',
  alternateName: ['RMT Solutions', 'RMT Lift Planning'],
  description: 'Professional lift planning consultancy providing LOLER compliant lift plans, tower crane compliance contracts, steel erection planning, and excavator lift plans.',
  url: 'https://www.rmtsafetysolutions.com',
  email: 'ricky@rmtsolutions.co.uk',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Warrington',
    addressRegion: 'Cheshire',
    addressCountry: 'GB',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 53.39,
    longitude: -2.597,
  },
  areaServed: [
    { '@type': 'Country', name: 'United Kingdom' },
    { '@type': 'City', name: 'Manchester' },
    { '@type': 'City', name: 'Liverpool' },
    { '@type': 'City', name: 'Leeds' },
    { '@type': 'City', name: 'Birmingham' },
    { '@type': 'City', name: 'London' },
  ],
  founder: {
    '@type': 'Person',
    name: 'Ricky Marsh',
    jobTitle: 'CPCS Appointed Person (A61)',
  },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'CPCS Appointed Person A61' },
    { '@type': 'EducationalOccupationalCredential', name: 'NEBOSH National Diploma' },
    { '@type': 'EducationalOccupationalCredential', name: 'Graduate IOSH' },
  ],
  knowsAbout: ['LOLER 1998', 'Lifting Operations', 'Lift Planning', 'Tower Cranes', 'Mobile Cranes', 'Steel Erection', 'BS 7121'],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a LOLER compliant lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A LOLER compliant lift plan is a documented safe system of work for carrying out a lifting operation, as required by the Lifting Operations and Lifting Equipment Regulations 1998. It includes risk assessment, method statement, load calculations, equipment selection, and site layout drawings.',
      },
    },
    {
      '@type': 'Question',
      name: 'When do I need an Appointed Person for lifting operations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under LOLER and BS 7121, an Appointed Person should plan lifts where there is risk of equipment or load striking a person, specialist knowledge is needed, mobile cranes are used, tandem lifts are required, or lifts occur near power lines.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to produce a lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard lift plans for excavators and telehandlers can be delivered within 24-48 hours. Mobile crane lift plans requiring site visits may take 3-5 working days.',
      },
    },
  ],
}

export default function HomePage() {
  const services = [
    {
      title: 'Lift Plan Writing',
      description: 'LOLER compliant lift plans for all equipment. Excavator lift plans, telehandler lift plans, lorry loader lift plans, and mobile crane lift plans with fast turnaround.',
      features: ['Excavator lifting operations', 'Telehandler operations', 'Mobile crane lift plans', 'Lorry loader lift plans'],
      href: '/services/lift-plans',
      icon: FileText,
    },
    {
      title: 'Tower Crane Contracts',
      description: 'Ongoing Appointed Person contracts for tower crane compliance. 8-weekly audits, documentation management, and on-call support throughout your project.',
      features: ['8-weekly compliance audits', 'BS 7121 compliance', 'Documentation management', 'On-call AP support'],
      href: '/services/tower-crane',
      icon: Building2,
    },
    {
      title: 'Steel Erection Planning',
      description: 'Complete lift planning for structural steel erection. Fabrication drawing reviews, erection sequences, crane selection, and tandem lift coordination.',
      features: ['Fabrication drawing review', 'Erection sequence planning', 'Tandem lift coordination', 'Mobile crane selection'],
      href: '/services/steel-erection',
      icon: Layers,
    },
  ]

  const caseStudies = [
    {
      title: 'Industrial Warehouse',
      description: 'Complete lift planning for 15,000m² steel frame erection.',
      category: 'Steel Erection',
      image: '/images/mobile-crane-steel-erection.webp',
    },
    {
      title: 'Manchester Development',
      description: '18-month tower crane AP contract.',
      category: 'Tower Crane',
      image: null,
    },
    {
      title: 'Utility Pipeline',
      description: 'Series of excavator lift plans for 3km pipeline.',
      category: 'Excavator',
      image: null,
    },
  ]

  const stats = [
    { value: '40+', label: 'Fatal Injuries', sublabel: 'Per year from lifting operations' },
    { value: '£1M+', label: 'Potential Fines', sublabel: 'For LOLER non-compliance' },
    { value: '100%', label: 'AP Required', sublabel: 'For complex lifting operations' },
    { value: '70%', label: 'Of Incidents', sublabel: 'Result from poor planning' },
  ]

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <Image
            src="/images/mobile-crane-steel-erection.webp"
            alt="Mobile crane lifting steel at construction site - Professional LOLER compliant lift planning services UK"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2.5 mb-8">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse" />
                <span className="text-amber-400 text-sm font-semibold tracking-wide">
                  CPCS Appointed Person A61
                </span>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8">
                <span className="text-white">Professional</span>
                <br />
                <span className="gradient-text">Lift Planning</span>
                <br />
                <span className="text-white">Services UK</span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                <strong>LOLER compliant lift plans</strong> from a qualified Appointed Person with{' '}
                <strong>35 years construction industry experience</strong>. Tower crane contracts,
                steel erection planning, mobile crane and excavator lift plans.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary flex items-center justify-center group">
                  Request a Lift Plan Quote
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#services" className="btn-secondary text-center">
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="stat-card rounded-3xl p-10 border border-slate-700/50 amber-glow">
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center p-6 rounded-2xl bg-slate-800/30">
                    <div className="text-5xl font-display font-bold text-amber-400">35+</div>
                    <div className="text-gray-400 mt-2 font-medium">Years Experience</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-slate-800/30">
                    <div className="text-5xl font-display font-bold text-amber-400">1000+</div>
                    <div className="text-gray-400 mt-2 font-medium">Lift Plans Delivered</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-slate-800/30">
                    <div className="text-5xl font-display font-bold text-amber-400">100%</div>
                    <div className="text-gray-400 mt-2 font-medium">LOLER Compliant</div>
                  </div>
                  <div className="text-center p-6 rounded-2xl bg-slate-800/30">
                    <div className="text-5xl font-display font-bold text-amber-400">UK</div>
                    <div className="text-gray-400 mt-2 font-medium">Wide Coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Trusted By */}
      <section className="py-16 bg-slate-900 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm font-semibold tracking-widest uppercase mb-10">
            Trusted by leading UK contractors for lift planning
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 opacity-50">
            <span className="text-gray-600 font-display font-bold text-xl">TIER 1 CONTRACTOR</span>
            <span className="text-gray-600 font-display font-bold text-xl">MAIN CONTRACTOR</span>
            <span className="text-gray-600 font-display font-bold text-xl">CONSTRUCTION CO</span>
            <span className="text-gray-600 font-display font-bold text-xl">CIVIL ENGINEERS</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-slate-950 construction-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Lift Planning Services"
            title="LOLER Compliant Lift Plans"
            description="Professional lift planning services from a CPCS Appointed Person. Lift plans for excavators, telehandlers, lorry loaders, mobile cranes, tower cranes, and steel erection across the UK."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>

          {/* Lift Plan Checking */}
          <div className="mt-12 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-12 border border-slate-700/50">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                  For Tier 1 Contractors
                </span>
                <h3 className="font-display text-3xl font-bold text-white mb-4">
                  Lift Plan Checking Service
                </h3>
                <p className="text-gray-300 mb-6">
                  Independent Appointed Person review of lift plans submitted by subcontractors.
                  Ensure all lifting operations on your site are LOLER compliant before work begins.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Discuss your requirements
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-display font-bold text-amber-400">24hr</div>
                  <div className="text-gray-400 text-sm mt-1">Turnaround</div>
                </div>
                <div className="bg-slate-800/50 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-display font-bold text-amber-400">Expert</div>
                  <div className="text-gray-400 text-sm mt-1">AP Review</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Lift Planning Matters */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Proper Lift Planning Matters"
            title="UK Lifting Operations Safety"
            description="Proper lift planning is a legal requirement under LOLER 1998 and essential for construction site safety"
          />

          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Work
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
                Lift Planning Case Studies
              </h2>
            </div>
            <Link
              href="/case-studies"
              className="mt-6 md:mt-0 inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold"
            >
              View all case studies
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} {...study} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
            Need a Lift Plan?
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            Contact us today for a quote. LOLER compliant lift plans from a CPCS Appointed Person
            with 35 years experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Request a Quote
            </Link>
            <a href="mailto:ricky@rmtsolutions.co.uk" className="btn-secondary">
              Email Us
            </a>
          </div>
          <p className="text-gray-500 mt-10 text-sm">
            Based in Warrington, Cheshire • Serving contractors across the UK
          </p>
        </div>
      </section>
    </>
  )
}
