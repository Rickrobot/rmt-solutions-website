
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Telehandler Lift Plans UK | LOLER Compliant | RMT Solutions',
  description: 'Professional telehandler lift plans from a CPCS Appointed Person. LOLER compliant plans for all telehandler lifting operations. Fast 24hr turnaround. UK-wide service.',
  keywords: 'telehandler lift plan, telehandler lifting operations, telescopic handler lift plan, forklift lift plan, LOLER telehandler',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Telehandler Lift Plans',
  provider: { '@type': 'LocalBusiness', name: 'RMT Solutions', telephone: '+447803808093' },
  description: 'Professional LOLER compliant telehandler lift plans prepared by a CPCS Appointed Person.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

export default function TelehandlerLiftPlansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/precast-concrete-lift.webp"
            alt="Telehandler lifting precast concrete on UK construction site - LOLER compliant telehandler lift plans"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-medium mb-4">CPCS Appointed Person A61</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Telehandler Lift Plans UK</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Professional telehandler lift plans prepared by a CPCS Appointed Person with 35+ years of construction 
            experience. LOLER compliant lift plans for all telescopic handler lifting operations.
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

      {/* Understanding */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Understanding Telehandler Lifting Operations</h2>
          <p className="text-lg text-slate-600 mb-8">
            Telehandlers are among the most versatile machines on UK construction sites. Beyond handling palletised 
            materials, they're frequently used for suspended loads, personnel access, and specialist attachments.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Lifting with suspended loads using hooks or lifting jibs', 'Personnel access using approved MEWPs', 
              'Placing materials at height', 'Lifting with brick grabs, block clamps'].map((item) => (
              <div key={item} className="bg-slate-50 p-6 rounded-xl"><p className="text-slate-700">{item}</p></div>
            ))}
          </div>
          <p className="mt-8 text-slate-700 font-medium">
            A professional lift plan ensures your telehandler operations are calculated correctly and executed safely.
          </p>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Complete Lift Planning Package</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Machine Verification', items: ['Telehandler specification review', 'Attachment capacity verification', 'Thorough examination certificate check', 'Load chart analysis'] },
              { title: 'Site Assessment', items: ['Ground condition evaluation', 'Gradient and slope analysis', 'Overhead obstruction identification', 'Exclusion zone determination'] },
              { title: 'Lift Calculations', items: ['Load weight including attachment', 'Required reach at pick and place', 'Capacity verification at all points', 'Stability assessment'] },
              { title: 'Documentation', items: ['Scale lift plan drawing', 'Risk assessment', 'Method statement', 'Operator briefing template'] },
            ].map((section) => (
              <div key={section.title} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-3 text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3"><span className="text-blue-600">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When You Need */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">When You Need a Telehandler Lift Plan</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Suspended Loads', desc: 'Any lifting with hooks, chains, or slings attached to a lifting jib requires documented planning.' },
              { title: 'Personnel Lifting', desc: 'Using a telehandler-mounted work platform (MEWP) for accessing heights.' },
              { title: 'Near Capacity Operations', desc: "When loads approach the machine's rated capacity at the required radius." },
              { title: 'Complex Site Conditions', desc: 'Slopes, restricted access, overhead obstructions, or proximity to excavations.' },
            ].map((item) => (
              <div key={item.title} className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Variable Capacity */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Variable Capacity Challenges</h2>
          <p className="text-slate-300 mb-8">
            Unlike cranes with predictable load charts, telehandler capacity changes dramatically based on 
            boom extension, lift height, attachment fitted, and ground slope.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl">
              <h3 className="text-lg font-semibold mb-4">Attachment Derating</h3>
              <table className="w-full text-sm">
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-700"><td className="py-2">Standard forks</td><td>As per load chart</td></tr>
                  <tr className="border-b border-slate-700"><td className="py-2">Crane jib</td><td>Significant reduction</td></tr>
                  <tr className="border-b border-slate-700"><td className="py-2">Work platform</td><td>Reduced per MEWP rating</td></tr>
                  <tr><td className="py-2">Rotating forks</td><td>Reduced capacity</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-slate-300 mb-4">We calculate capacity at every critical point in your lift:</p>
              <ul className="text-slate-300 space-y-2">
                <li>• Boom extension effects</li>
                <li>• Lift height stability impact</li>
                <li>• Ground slope calculations</li>
                <li>• Attachment-specific derating</li>
              </ul>
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
              { q: 'Do all telehandler lifts need a lift plan?', a: 'LOLER requires all lifting operations to be planned. For routine handling with forks, a generic risk assessment may suffice. For suspended loads or personnel lifting, a specific lift plan should be prepared.' },
              { q: "Can I use the telehandler's load chart instead of a lift plan?", a: "The load chart shows machine capacity - it doesn't constitute a lift plan. A lift plan addresses the specific lift including site conditions, hazards, and procedures." },
              { q: 'What certification does a telehandler need for lifting?', a: 'The telehandler must have a current thorough examination certificate under LOLER. Attachments (jibs, work platforms) also require thorough examination.' },
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
          <h2 className="text-3xl font-bold mb-4">Get Your Telehandler Lift Plan</h2>
          <p className="text-blue-100 mb-8">24-hour turnaround available.</p>
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

      {/* Related */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8">Related Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/services/excavator-lift-plans', title: 'Excavator Lift Plans' },
              { href: '/services/mobile-crane-lift-plans', title: 'Mobile Crane Lift Plans' },
              { href: '/services/lorry-loader-lift-plans', title: 'Lorry Loader Lift Plans' },
              { href: '/services/lift-plan-checking', title: 'Lift Plan Checking' },
            ].map((s) => (
              <Link key={s.href} href={s.href} className="bg-slate-50 hover:bg-slate-100 p-4 rounded-lg text-slate-900 font-medium transition-colors">
                {s.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
