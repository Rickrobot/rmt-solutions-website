import Image from 'next/image'
import Link from 'next/link'
import { Award, Clock, Users, Shield, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'About | CPCS Appointed Person, 35 Years',
  description: 'Meet Ricky Marsh, CPCS Appointed Person (A61, Reg 40389279) with 35 years in UK construction. NEBOSH Diploma, CertIOSH, MIIRSM, TIFSM.',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/about',
  },
  openGraph: {
    title: 'About | CPCS Appointed Person with 35 Years Experience',
    description: 'Meet Ricky Marsh, CPCS Appointed Person (A61, Reg 40389279) with 35 years in UK construction. NEBOSH Diploma, CertIOSH, MIIRSM, TIFSM.',
    url: 'https://www.rmtsafetysolutions.com/about',
    type: 'profile',
  },
}

// Person JSON-LD — explicitly identifies Ricky Marsh as a person entity
// to Google's Knowledge Graph, with full credential list and worksFor
// linkage back to the Organization defined on the homepage. The audit
// flagged the About page as a high-authority signal location that lacked
// person-level structured data.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.rmtsafetysolutions.com/about#person',
  name: 'Ricky Marsh',
  givenName: 'Ricky',
  familyName: 'Marsh',
  jobTitle: 'CPCS Appointed Person (A61)',
  description:
    'CPCS Appointed Person (A61, Reg 40389279) and founder of RMT Solutions Ltd, with 35 years of UK construction industry experience. NEBOSH National Diploma qualified, CertIOSH, MIIRSM and TIFSM.',
  url: 'https://www.rmtsafetysolutions.com/about',
  email: 'ricky@rmtsolutions.co.uk',
  telephone: '+447803808093',
  worksFor: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.rmtsafetysolutions.com/#business',
    name: 'RMT Solutions Ltd',
  },
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', name: 'CPCS Appointed Person A61', identifier: '40389279' },
    { '@type': 'EducationalOccupationalCredential', name: 'NEBOSH National Diploma' },
    { '@type': 'EducationalOccupationalCredential', name: 'CertIOSH (Certified Member, Institution of Occupational Safety and Health)' },
    { '@type': 'EducationalOccupationalCredential', name: 'MIIRSM (Member, International Institute of Risk and Safety Management)' },
    { '@type': 'EducationalOccupationalCredential', name: 'TIFSM (Technician Member, Institute of Fire Safety Managers)' },
    { '@type': 'EducationalOccupationalCredential', name: 'GVC Drone Pilot (CAA)' },
  ],
  knowsAbout: ['LOLER 1998', 'BS 7121', 'Lifting Operations', 'Tower Cranes', 'Mobile Cranes', 'Steel Erection', 'ISO 10567'],
  sameAs: [
    'https://www.linkedin.com/in/ricky-marsh-certiosh-tier-2-cfrar-mifsm-88b72680/',
  ],
}

// BreadcrumbList JSON-LD — gives Google the canonical position of this
// page in the site hierarchy. Pages further from the root benefit most
// from breadcrumb schema; About sits one level below the homepage.
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.rmtsafetysolutions.com/about' },
  ],
}

export default function AboutPage() {
  const qualifications = [
    { icon: Award, title: 'CPCS Appointed Person A61', description: 'Registration: 40389279. Qualified Appointed Person for lifting operations planning and supervision under LOLER 1998 and BS 7121.' },
    { icon: Shield, title: 'NEBOSH National Diploma', description: 'Advanced qualification in occupational health and safety management.' },
    { icon: Users, title: 'CertIOSH', description: 'Certified Member of the Institution of Occupational Safety and Health — IOSH\u2019s chartered-track grade reflecting demonstrated professional competence.' },
    { icon: Shield, title: 'MIIRSM', description: 'Member of the International Institute of Risk and Safety Management.' },
    { icon: Award, title: 'TIFSM', description: 'Technician Member of the Institute of Fire Safety Managers.' },
    { icon: Clock, title: '35+ Years Experience', description: 'Decades of hands-on construction industry experience across manufacturing, civils and tier-1 main contractor projects.' },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              About RMT Solutions
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              35 Years of <span className="gradient-text">Lift Planning</span> Expertise
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Professional lift planning consultancy led by a CPCS Appointed Person with extensive 
              experience across the UK construction industry.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Your Trusted Lift Planning Partner
              </h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  RMT Solutions was founded to provide contractors across the UK with professional, 
                  reliable lift planning services. With over 35 years of construction industry experience, 
                  we understand the practical challenges of lifting operations on site.
                </p>
                <p>
                  As a qualified CPCS Appointed Person (A61), I bring both the technical knowledge and 
                  hands-on experience needed to plan safe, efficient lifting operations. Whether you need 
                  a straightforward excavator lift plan or complex steel erection planning, we deliver 
                  LOLER compliant documentation that meets the highest standards.
                </p>
                <p>
                  We work with tier 1 contractors checking subcontractor lift plans, and directly with 
                  subcontractors who need professional lift planning support. Our goal is simple: to help 
                  you execute lifting operations safely and in full compliance with LOLER 1998.
                </p>
              </div>
              
              <div className="mt-10">
                <Link href="/contact" className="btn-primary inline-flex items-center">
                  Discuss Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Qualifications */}
            <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50">
              <h3 className="font-display text-2xl font-bold text-white mb-8">
                Qualifications & Credentials
              </h3>
              <div className="space-y-6">
                {qualifications.map((qual) => (
                  <div key={qual.title} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <qual.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{qual.title}</h4>
                      <p className="text-gray-400 text-sm">{qual.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Work — geographic context for SEO. The About page is a
          natural place for prose-driven local signals because Google reads
          biographical pages with extra weight when looking for entity
          locality. Mentions Warrington base, North West catchment, and the
          named tier-1 cities we travel UK-wide for. */}
      <section className="py-24 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Service Area
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
              Where We Work
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                RMT Solutions is based in Warrington, Cheshire — sat at the
                junction of the M62 and the M6, half an hour from central
                Manchester and forty minutes from Liverpool docks. That position
                is deliberate. It puts every major North West construction
                cluster within a single working day&apos;s reach: the Manchester
                city-centre tower pipeline, MediaCityUK and Salford Quays,
                Trafford Park&apos;s logistics estate, the Liverpool Waters and
                Wirral Waters regeneration zones, and the Cheshire industrial
                corridor through Widnes, Runcorn and Chester.
              </p>
              <p>
                For our North West catchment — Manchester, Salford, Stockport,
                Trafford, Bolton, Wigan, St Helens, Knowsley, Liverpool, the
                Wirral, Sefton, Widnes, Runcorn and Chester — same-day site
                attendance is standard, including unscheduled call-outs when
                lifts get re-scoped on the morning of the operation. We work
                across Greater Manchester and Merseyside as if they were a
                single patch, because operationally they are.
              </p>
              <p>
                Beyond the North West we travel UK-wide for tower crane
                Appointed Person contracts, complex mobile crane lifts and
                steel erection campaigns — Leeds, Birmingham, London, Bristol,
                Glasgow and Edinburgh are all on the regular schedule. For
                tower crane contracts the on-site cycle is typically eight-
                weekly, which makes longer travel practical without compromising
                response time when something needs attention between visits.
              </p>
              <p>
                If you&apos;re running a project in any of these areas and need
                LOLER compliant lift plans, an Appointed Person contract or
                independent lift plan checking,{' '}
                <Link href="/locations" className="text-amber-400 hover:text-amber-300 underline">
                  see all UK locations
                </Link>{' '}
                or{' '}
                <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline">
                  get in touch for a quote
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Why Choose RMT Solutions"
            title="What Sets Us Apart"
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <h3 className="font-display text-xl font-bold text-white mb-4">Fast Turnaround</h3>
              <p className="text-gray-400">
                Standard lift plans delivered within 24-48 hours. We understand that construction 
                projects move fast and delays cost money.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <h3 className="font-display text-xl font-bold text-white mb-4">Remote & On-Site</h3>
              <p className="text-gray-400">
                Excavator, telehandler and lorry loader lift plans produced remotely. Mobile crane 
                operations include site visits as standard.
              </p>
            </div>
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <h3 className="font-display text-xl font-bold text-white mb-4">100% LOLER Compliant</h3>
              <p className="text-gray-400">
                Every lift plan meets LOLER 1998 requirements and follows BS 7121 best practice. 
                No shortcuts, no compromises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Get in touch to discuss your lift planning requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  )
}
