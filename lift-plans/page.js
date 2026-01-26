import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, FileText, Truck, Shovel, Building2 } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'Lift Plans | Excavator, Telehandler, Mobile Crane Lift Plans',
  description: 'LOLER compliant lift plans for excavators, telehandlers, lorry loaders, and mobile cranes. Professional lift plan writing service from a CPCS Appointed Person. Fast turnaround, UK-wide.',
  keywords: ['lift plans', 'excavator lift plan', 'telehandler lift plan', 'mobile crane lift plan', 'lorry loader lift plan', 'LOLER compliant'],
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
    { step: '02', title: 'Quote', description: 'We provide a competitive quote within 24 hours' },
    { step: '03', title: 'Information', description: 'You provide equipment specs, load details, and site information' },
    { step: '04', title: 'Delivery', description: 'We deliver your LOLER compliant lift plan' },
  ]

  return (
    <>
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
              Lift Planning Services
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              LOLER Compliant <span className="gradient-text">Lift Plans</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Professional lift plan writing for excavators, telehandlers, lorry loaders, and mobile cranes. 
              Fast turnaround from a CPCS Appointed Person with 35 years experience.
            </p>
            <Link href="/contact" className="btn-primary inline-flex items-center">
              Get a Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
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
                you need for safe lifting operations.
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
    </>
  )
}
