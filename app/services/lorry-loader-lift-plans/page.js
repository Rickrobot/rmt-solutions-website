
import Image from 'next/image'
import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Lorry Loader Lift Plans UK | HIAB Lift Plans',
  description: 'Professional lorry loader lift plans from a CPCS Appointed Person. LOLER compliant HIAB crane plans for delivery operations and site lifting. 24hr turnaround.',
  keywords: 'lorry loader lift plan, HIAB lift plan, lorry mounted crane lift plan, loader crane lift plan, ALLMI lift plan',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/lorry-loader-lift-plans',
  },
  openGraph: {
    title: 'Lorry Loader Lift Plans UK | HIAB Lift Plans',
    description: 'Professional lorry loader lift plans from a CPCS Appointed Person. LOLER compliant HIAB crane plans for delivery operations and site lifting.',
    url: 'https://www.rmtsafetysolutions.com/services/lorry-loader-lift-plans',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lorry Loader Lift Plans',
  alternateName: 'HIAB Lift Plans',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    telephone: '+447803808093',
  },
  description: 'Professional LOLER compliant lorry loader lift plans for HIAB, Palfinger, Fassi and all loader crane operations.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "Do lorry loaders need lift plans?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Every lifting operation involving a lorry loader (HIAB) must be planned under LOLER 1998. This includes routine deliveries to construction sites where the lorry loader is used to offload bricks, blocks, scaffolding, or steel. The plan can be a generic plan covering routine deliveries, but specific lifts — over a building, into an excavation, near power lines — need a specific plan." }
    },
    {
      "@type": "Question",
      "name": "What CPCS card does a lorry loader operator need?",
      "acceptedAnswer": { "@type": "Answer", "text": "A CPCS A36 (Lorry Loader) card is the standard competence card for lorry loader operations in the UK construction industry. ALLMI also issue a recognised lorry loader operator certificate. The operator must hold the appropriate card for the size and type of crane fitted to the vehicle." }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a HIAB and a lorry loader?",
      "acceptedAnswer": { "@type": "Answer", "text": "HIAB is a brand name (Hiab AB, Sweden) that has become a generic term for any vehicle-mounted articulated crane. The correct technical term is 'lorry loader' or 'vehicle-mounted articulated crane'. Other major manufacturers include Palfinger, Fassi, Effer, and Atlas. Regardless of brand, all are governed by the same LOLER and BS 7121 requirements." }
    },
    {
      "@type": "Question",
      "name": "Are HGV-mounted cranes covered by LOLER?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. LOLER 1998 applies to all lifting equipment used at work, including vehicle-mounted cranes operating on construction sites. The lorry loader requires a thorough examination certificate every 12 months for general lifting duties, or every 6 months if used to lift people. The lifting operation itself must be planned by a competent person." }
    }
  ],
}


export default function LorryLoaderLiftPlansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/lorry-loader-hiab-delivery-construction-site.webp"
            alt="Lorry loader crane delivering materials to UK construction site - Professional HIAB lift plans"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-medium mb-4">CPCS Appointed Person A61</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lorry Loader Lift Plans UK</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Professional lorry loader lift plans from a CPCS Appointed Person with over 35 years of construction 
            industry experience. LOLER compliant plans for HIAB, Palfinger, Fassi, Atlas, and all lorry mounted crane operations.
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

      {/* When Full Plans Required */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Lorry Loader Lifting Operations</h2>
          <p className="text-lg text-slate-600 mb-8">
            Lorry loaders (also known as lorry mounted cranes, loader cranes, or often generically called "HIABs") 
            are essential for construction deliveries and on-site material handling. While many operations are routine, 
            they still fall under LOLER 1998 and require proper planning.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">When Full Lift Plans Are Required</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">•</span>Complex or heavy lifts approaching machine capacity</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">•</span>Lifts near overhead lines or other obstructions</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">•</span>Tandem lifts using multiple cranes</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">•</span>Lifts over or near people</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">•</span>Confined space deliveries with restricted access</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">•</span>When specified by the site principal contractor</li>
              </ul>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">When Generic Assessments May Suffice</h3>
              <p className="text-slate-600 mb-4">For routine delivery operations with experienced operators, a generic risk assessment may be appropriate, provided:</p>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>The lift is straightforward and well within capacity</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Ground conditions are suitable</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>No overhead or adjacent hazards exist</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>The operator is trained and competent (ALLMI/CPCS qualified)</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-8 text-slate-600 italic font-medium">
            When in doubt, document it. Our lift plan service gives you certainty.
          </p>
        </div>
      </section>

      {/* What We Provide */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Our Lorry Loader Lift Plan Service</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Vehicle & Crane Assessment',
                items: ['Lorry loader specification verification', 'Crane capacity at required configuration', 'Stabiliser outreach requirements', 'Remote control operation considerations'],
              },
              {
                title: 'Load Assessment',
                items: ['Load weight verification', 'Centre of gravity determination', 'Rigging arrangement specification', 'Lifting accessories requirements'],
              },
              {
                title: 'Site Assessment',
                items: ['Ground bearing capacity', 'Stabiliser pad positioning', 'Overhead clearances', 'Adjacent hazards', 'Vehicle positioning'],
              },
              {
                title: 'Documentation Package',
                items: ['Lift plan drawing showing crane position and radii', 'Risk assessment', 'Method statement', 'Lifting accessories schedule', 'Pre-lift checklist'],
              },
            ].map((section) => (
              <div key={section.title} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-2 text-slate-600 text-sm">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Crane Manufacturers We Cover</h2>
          <p className="text-lg text-slate-600 mb-8">
            We prepare lift plans for all knuckle boom crane manufacturers commonly used on UK construction sites:
          </p>
          <div className="flex flex-wrap gap-4">
            {['HIAB', 'Palfinger', 'Fassi', 'Atlas', 'HMF', 'Cormach', 'PM'].map((brand) => (
              <span key={brand} className="bg-slate-100 px-6 py-3 rounded-lg font-semibold text-slate-700">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ground Bearing */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">Ground Bearing and Stabiliser Loads</h2>
          <p className="text-slate-300 mb-8">
            Lorry loaders concentrate significant loads through their stabiliser legs. Proper assessment is essential.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Stabiliser Point Loads</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Maximum stabiliser reaction force</li>
                <li>• Ground bearing pressure with specified pads</li>
                <li>• Spreader pad sizing requirements</li>
                <li>• Ground preparation needs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Ground Condition Assessment</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Made ground vs natural ground</li>
                <li>• Proximity to excavations or trenches</li>
                <li>• Underground services</li>
                <li>• Drainage chambers and manholes</li>
                <li>• Slope and gradient</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Pad & Mat Requirements</h3>
              <ul className="text-slate-300 space-y-2">
                <li>• Timber mat sizes</li>
                <li>• Steel spreader plate requirements</li>
                <li>• Proprietary pad systems</li>
                <li>• Multiple layer arrangements</li>
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
              {
                q: 'Do all HIAB deliveries need a lift plan?',
                a: 'Not all, but many do. Routine deliveries to prepared areas with competent operators may be covered by generic assessments. Complex lifts, heavy loads, restricted sites, or principal contractor requirements warrant specific lift plans.',
              },
              {
                q: 'Who is responsible for the lift plan - the haulier or the site?',
                a: 'Under LOLER, the employer of the person doing the lifting has primary responsibility. In practice, this is often the haulage company or crane hire provider. However, principal contractors have duties to ensure safe systems of work on their sites and may require lift plans as a condition of delivery.',
              },
              {
                q: 'What qualifications should a lorry loader operator have?',
                a: 'Operators should hold ALLMI or CPCS certification for lorry loader operation. Slinger/signaller duties require appropriate slinger/signaller certification.',
              },
              {
                q: 'Can lorry loaders be used for tandem lifting?',
                a: 'Yes, but tandem lifts with lorry loaders require careful planning. Both machines must be rated for the partial load, and coordination is critical. Specific tandem lift plans are essential.',
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

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm serviceName="Lorry Loader Lift Plans" heading="Get a quote for lorry loader lift plans" />
        </div>
      </section>

      <RelatedServices currentSlug="lorry-loader-lift-plans" />

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Lorry Loader Lift Plan</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your lorry loader lift planning requirements. 24-hour turnaround available.
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
              { href: '/services/mobile-crane-lift-plans', title: 'Mobile Crane Lift Plans' },
              { href: '/services/excavator-lift-plans', title: 'Excavator Lift Plans' },
              { href: '/services/telehandler-lift-plans', title: 'Telehandler Lift Plans' },
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
