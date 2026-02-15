
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Mobile Crane Lift Plans UK | LOLER Compliant | RMT Solutions',
  description: 'Professional mobile crane lift plans from a CPCS Appointed Person. LOLER and BS 7121 compliant plans for all mobile crane operations. Tier 1 contractor approved.',
  keywords: 'mobile crane lift plan UK, crane lift plan, mobile crane lifting operations, BS 7121 lift plan, contract lift planning',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Mobile Crane Lift Plans',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    telephone: '+447803808093',
  },
  description: 'Professional LOLER and BS 7121 compliant mobile crane lift plans prepared by a CPCS Appointed Person.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

export default function MobileCraneLiftPlansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/mobile-crane-lifting-precast-concrete.webp"
            alt="Mobile crane lifting precast concrete beam on construction site - BS 7121 compliant lift planning UK"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-medium mb-4">CPCS Appointed Person A61</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Mobile Crane Lift Plans UK</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Professional mobile crane lift plans prepared by a CPCS Appointed Person with over 35 years 
            of construction industry experience. LOLER and BS 7121 compliant lift plans for all mobile 
            crane operations, from routine site lifts to complex tandem operations.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Request a Quote
            </Link>
            <a href="tel:+447803808093" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Call: 07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Lift Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Mobile Crane Lift Planning</h2>
          <p className="text-lg text-slate-600 mb-8">
            BS 7121-1 Code of Practice for Safe Use of Cranes identifies three categories of lift:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Basic Lifts</h3>
              <p className="text-slate-600">
                Straightforward lifts within crane capacity with no additional hazards. May be planned 
                by the crane operator with appropriate training and experience.
              </p>
            </div>
            <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Intermediate Lifts</h3>
              <p className="text-slate-600">
                Lifts with one or more complicating factors requiring additional planning. Should involve 
                a competent lift planner with knowledge of the specific hazards.
              </p>
            </div>
            <div className="border-l-4 border-red-500 bg-red-50 p-6 rounded-r-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Complex Lifts</h3>
              <p className="text-slate-600">
                Lifts requiring detailed engineering assessment, tandem operations, or unusual methods. 
                Must be planned by an Appointed Person with relevant expertise.
              </p>
            </div>
          </div>

          <p className="mt-8 text-slate-600 font-medium">
            We provide professional lift planning across all categories, ensuring your mobile crane 
            operations are properly documented and safely executed.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Comprehensive Planning Package</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Crane Selection Verification</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Capacity assessment at required radius and height</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Configuration specification (main boom, luffing jib, extensions)</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Counterweight requirements</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Ground bearing calculations for outrigger loads</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Load Assessment</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Load weight verification including rigging</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Centre of gravity determination</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Lifting point identification</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Rigging arrangement design</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Site Assessment</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Ground condition evaluation</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Outrigger pad positioning</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Overhead clearances and obstructions</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Underground services</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Access route assessment</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Documentation</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Detailed lift plan drawing (AutoCAD)</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Duty chart extract showing selected configuration</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Risk assessment and method statement</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Lifting accessories schedule and checklists</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Crane Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Mobile Crane Types We Cover</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">All Terrain Cranes</h3>
              <p className="text-slate-600 mb-4">
                The most common mobile crane type on UK construction sites. We plan lifts for all 
                manufacturers and capacities:
              </p>
              <ul className="text-slate-600 space-y-1">
                <li>• Liebherr</li>
                <li>• Tadano/Demag</li>
                <li>• Grove</li>
                <li>• Terex</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Rough Terrain Cranes</h3>
              <p className="text-slate-600">
                Pick-and-carry operations and work on unprepared ground. Our plans address travel with 
                load considerations, ground condition requirements, and reduced capacity when mobile.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Crawler Cranes</h3>
              <p className="text-slate-600">
                For heavy lifts, long-term site presence, or operations requiring superior stability. 
                Including track bearing pressure calculations and assembly/disassembly planning.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Mobile Tower Cranes</h3>
              <p className="text-slate-600">
                Self-erecting and mobile tower crane planning including slewing radius considerations, 
                outrigger loading, and working envelope assessment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tandem Lifts */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Tandem and Multi-Crane Lifts</h2>
          <p className="text-slate-300 mb-8">
            Some lifts require multiple cranes working together. These complex operations demand detailed planning.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Tandem Lift Planning</h3>
              <p className="text-slate-300 mb-4">When two cranes share a load:</p>
              <ul className="text-slate-300 space-y-2">
                <li><strong>Load Distribution</strong> - Centre of gravity analysis, load share calculations, sling geometry design</li>
                <li><strong>Crane Selection</strong> - Matched capacity at required radii, similar slewing speeds</li>
                <li><strong>Coordination</strong> - Communication protocols, synchronised movement procedures</li>
                <li><strong>Additional Safeguards</strong> - Enhanced supervision, increased safety factors</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Multi-Crane Operations</h3>
              <p className="text-slate-300 mb-4">When multiple cranes work in proximity:</p>
              <ul className="text-slate-300 space-y-2">
                <li><strong>Clash Analysis</strong> - Boom sweep envelopes, load paths, sequencing to avoid conflict</li>
                <li><strong>Coordination</strong> - Communication systems, movement priorities, supervisor responsibilities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Lift vs CPA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Contract Lift vs CPA Hire</h2>
          <p className="text-lg text-slate-600 mb-8">
            Understanding the distinction is important for responsibility allocation:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Contract Lift</h3>
              <p className="text-slate-600 mb-4">The crane supplier provides:</p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• The crane</li>
                <li>• The operator</li>
                <li>• The Appointed Person/lift planning</li>
                <li>• Full responsibility for the lift</li>
              </ul>
              <p className="text-slate-700 font-medium">
                Ideal when you need a complete lifting solution and want single-point accountability.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">CPA Hire (Customer Hires Crane)</h3>
              <p className="text-slate-600 mb-4">The crane supplier provides the crane and operator. The customer provides:</p>
              <ul className="text-slate-600 space-y-2 mb-4">
                <li>• The Appointed Person/lift planning</li>
                <li>• Slinger/signallers</li>
                <li>• Responsibility for the lifting operation</li>
              </ul>
              <p className="text-blue-600 font-medium">
                We provide Appointed Person services and lift planning for CPA hire arrangements.
              </p>
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
                q: 'How far in advance should I order a lift plan?',
                a: 'For standard lifts, 48 hours is usually sufficient. Complex lifts, tandem operations, or those requiring crane selection advice should be discussed earlier - ideally at tender stage for major projects.',
              },
              {
                q: 'Can you help with crane selection?',
                a: "Yes. If you describe your lift requirements, we can advise on appropriate crane type and capacity. We'll optimise the selection for your specific site conditions and lift requirements.",
              },
              {
                q: 'Do you attend site for complex lifts?',
                a: 'Where required, we can provide on-site Appointed Person presence for complex or critical lifts. This includes final briefings, pre-lift checks, and supervision of the lifting operation.',
              },
              {
                q: 'What about crane erection and dismantling?',
                a: 'Crane assembly and disassembly (particularly for large mobile cranes and crawlers) are lifting operations requiring proper planning. We provide lift plans for crane build operations.',
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

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Mobile Crane Lift Plan</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your mobile crane lift planning requirements.
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

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/services/tower-crane', title: 'Tower Crane Contracts' },
              { href: '/services/steel-erection', title: 'Steel Erection Planning' },
              { href: '/services/excavator-lift-plans', title: 'Excavator Lift Plans' },
              { href: '/services/lift-plan-checking', title: 'Lift Plan Checking' },
            ].map((service) => (
              <Link key={service.href} href={service.href} className="bg-slate-50 hover:bg-slate-100 p-4 rounded-lg text-slate-900 font-medium transition-colors">
                {service.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
