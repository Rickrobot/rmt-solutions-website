import Image from 'next/image'
import Link from 'next/link'
import { Award, Clock, Users, Shield, ArrowRight } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'About | CPCS Appointed Person with 35 Years Experience',
  description: 'Meet Ricky Marsh, CPCS Appointed Person (A61) with 35 years in UK construction. NEBOSH Diploma qualified, Graduate IOSH member. Professional lift planning services.',
}

export default function AboutPage() {
  const qualifications = [
    { icon: Award, title: 'CPCS Appointed Person A61', description: 'Qualified Appointed Person for lifting operations planning and supervision' },
    { icon: Shield, title: 'NEBOSH National Diploma', description: 'Advanced qualification in occupational health and safety management' },
    { icon: Users, title: 'Graduate IOSH', description: 'Member of the Institution of Occupational Safety and Health' },
    { icon: Clock, title: '35+ Years Experience', description: 'Decades of hands-on construction industry experience' },
  ]

  return (
    <>
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
