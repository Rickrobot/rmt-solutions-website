import Link from 'next/link'
import { ArrowRight, CheckCircle, Calendar, FileCheck, Phone, Shield } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'Tower Crane Contracts | Appointed Person Compliance Services',
  description: 'Ongoing tower crane Appointed Person contracts with 8-weekly audits, documentation management, and on-call support. LOLER and BS 7121 compliance for UK construction sites.',
  keywords: ['tower crane', 'appointed person', 'crane compliance', 'tower crane contract', 'BS 7121', 'crane audits'],
}

export default function TowerCranePage() {
  const contractIncludes = [
    { icon: Calendar, title: '8-Weekly Audits', description: 'Regular compliance audits to maintain BS 7121 standards throughout your project' },
    { icon: FileCheck, title: 'Documentation Management', description: 'We manage all crane documentation, certificates, and compliance records' },
    { icon: Phone, title: 'On-Call AP Support', description: 'Access to Appointed Person support when you need it for specialist lifts' },
    { icon: Shield, title: 'Lift Plan Review', description: 'Review and approval of all lift plans submitted by subcontractors' },
  ]

  const auditChecklist = [
    'Tower crane operator competency verification',
    'Slinger/signaller competency checks',
    'Crane documentation review (LOLER, insurance, maintenance)',
    'Weekly inspection records',
    'Lifting accessory inspection and certification',
    'Safe systems of work review',
    'Exclusion zone compliance',
    'Communication arrangements',
    'Emergency procedures',
    'Schedule of common lifts review',
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
              Tower Crane Services
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              Tower Crane <span className="gradient-text">Compliance Contracts</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Ongoing Appointed Person contracts for tower crane operations. We ensure your lifting 
              operations remain LOLER and BS 7121 compliant throughout your project.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Discuss Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contract Includes"
            title="Comprehensive AP Support"
            description="Everything you need to maintain lifting compliance on your tower crane project"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {contractIncludes.map((item) => (
              <div
                key={item.title}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Checklist */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                8-Weekly Audits
              </span>
              <h2 className="font-display text-4xl font-bold text-white mb-6">
                What We Check
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Our 8-weekly audits cover all aspects of your tower crane operations to ensure 
                ongoing compliance with LOLER and BS 7121.
              </p>
              <ul className="space-y-3">
                {auditChecklist.map((item) => (
                  <li key={item} className="flex items-start text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 border border-slate-700/50">
              <h3 className="font-display text-2xl font-bold text-white mb-6">
                Contract Duration
              </h3>
              <p className="text-gray-400 mb-8">
                Tower crane contracts typically run for the duration of your project, from crane 
                erection through to dismantling. We offer flexible arrangements to suit your needs.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-gray-300">Typical contract length</span>
                  <span className="text-amber-400 font-semibold">12-18 months</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-slate-700">
                  <span className="text-gray-300">Audit frequency</span>
                  <span className="text-amber-400 font-semibold">8 weeks</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">On-call support</span>
                  <span className="text-amber-400 font-semibold">Included</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Starting a Tower Crane Project?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Let's discuss your Appointed Person requirements and how we can support your project.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
