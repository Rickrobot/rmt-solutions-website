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
    { '@type': 'City', name: 'Manchester' },    { '@type': 'City', name: 'Liverpool' },
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
    },    {
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
    },    {
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
    },    {
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
          <Image            src="/images/mobile-crane-steel-erection.webp"
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
