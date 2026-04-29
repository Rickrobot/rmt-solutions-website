
import Image from 'next/image'
import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Excavator Lift Plans UK | LOLER Compliant | RMT Solutions',
  description: 'Professional excavator lift plans from a CPCS Appointed Person. ISO 10567 compliant lift plans for 180° and 360° excavators. Fast turnaround. Tier 1 contractor approved.',
  keywords: 'excavator lift plan UK, excavator lifting operations, 360 excavator lift plan, excavator lifting capacity, LOLER excavator lifting',
  openGraph: {
    title: 'Excavator Lift Plans UK | LOLER Compliant | RMT Solutions',
    description: 'Professional excavator lift plans from a CPCS Appointed Person. ISO 10567 compliant lift plans for 180° and 360° excavators.',
    url: 'https://www.rmtsafetysolutions.com/services/excavator-lift-plans',
    type: 'website',
  },
}

// JSON-LD Schema
const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Excavator Lift Plans',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warrington',
      addressRegion: 'Cheshire',
      addressCountry: 'UK',
    },
    telephone: '+447803808093',
  },
  description: 'Professional LOLER compliant excavator lift plans prepared by a CPCS Appointed Person. Plans for 180° and 360° excavators meeting ISO 10567 and BS 7121 standards.',
  areaServed: {
    '@type': 'Country',
    name: 'United Kingdom',
  },
  serviceType: 'Lift Planning',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can any excavator be used for lifting?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Only excavators designed and equipped for lifting operations should be used. The machine must have a certified lifting point, a Rated Capacity Indicator (RCI) for machines over 1 tonne capacity, current thorough examination certificate covering lifting duties, and manufacturer\'s lifting capacity chart.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a lift plan for every excavator lift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LOLER requires all lifting operations to be properly planned. For routine, low-risk lifts, a generic risk assessment and method statement may suffice. For any lift with additional hazards, a specific lift plan should be prepared.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between digging capacity and lifting capacity?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Digging capacity is the bucket breakout force. Lifting capacity is the maximum suspended load the machine can safely handle at a given radius. They are completely different measurements. You cannot use digging specifications to determine lifting capability.',
      },
    },
  ],
}

export default function ExcavatorLiftPlansPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/excavator-lifting-hook-chains-uk.webp"
            alt="Excavator lifting hook with chain slings ready for lifting operation - Professional excavator lift plans UK"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-medium mb-4">CPCS Appointed Person A61</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Excavator Lift Plans UK
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Professional excavator lift plans prepared by a CPCS Appointed Person with over 35 years 
            of construction industry experience. LOLER compliant plans for 180° and 360° excavators 
            across the UK, ensuring your lifting operations meet BS 7121 and ISO 10567 standards.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+447803808093"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Call: 07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Why You Need Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Why You Need a Professional Excavator Lift Plan
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p>
              Excavators are increasingly used for lifting operations on construction sites across the UK. 
              While convenient, lifting with excavators carries significant risks that differ from traditional 
              crane operations.
            </p>
            <p>
              The Health and Safety Executive and the Construction Plant-hire Association's Strategic Forum 
              Plant Safety Group have identified key hazards specific to excavator lifting:
            </p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Rapid hydraulic movements', desc: 'Fast articulation and slew speeds can cause load swing' },
              { title: 'Simultaneous boom and dipper operation', desc: 'Required to keep loads vertical during placement' },
              { title: 'Operator override capability', desc: 'Rated capacity warning devices can be muted, unlike crane systems' },
              { title: 'Variable lifting capacity', desc: 'Capacity changes dramatically as radius and boom position change' },
              { title: 'Ground condition sensitivity', desc: 'Track pressure distribution differs from crane outriggers' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-600">
            A professional lift plan addresses each of these risks through detailed planning, calculations, 
            and method statements specific to your excavator make, model, and site conditions.
          </p>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Our Excavator Lift Plan Service
          </h2>
          <p className="text-lg text-slate-600 mb-12">
            Every excavator lift plan we produce includes:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Site Assessment</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Ground bearing capacity evaluation
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Overhead obstruction identification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Underground services check
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Access and egress planning
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Exclusion zone determination
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Equipment Verification</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Excavator specification review (make, model, configuration)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Lifting attachment certification check
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Rated Capacity Indicator (RCI) verification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Thorough examination certificate review
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Lifting accessories specification
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Lift Calculations</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Load weight determination including rigging
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Centre of gravity identification
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Lifting radius at pick and place
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Lift point height calculations
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Ground bearing pressure assessment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Capacity verification against manufacturer's load charts
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Documentation Package</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Detailed lift plan drawing (AutoCAD)
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Risk assessment
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Method statement
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Lifting accessories schedule
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Pre-lift checklist
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1">✓</span>
                  Briefing record template
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Image Break */}
      <section className="relative h-80">
        <Image
          src="/images/services/excavator-lifting-concrete-ring-construction.webp"
          alt="Excavator lowering concrete chamber ring into excavation - LOLER compliant lift planning"
          fill
          className="object-cover"
        />
      </section>

      {/* Excavator Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Excavator Types We Cover
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">360° Tracked Excavators</h3>
              <p className="text-slate-600 mb-4">
                From 1.5 tonne mini excavators to 80+ tonne machines, we calculate lifting capacities 
                for all tracked excavator configurations.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Over-front lifting</li>
                <li>• Over-side lifting</li>
                <li>• Pick and carry operations</li>
                <li>• Various boom and dipper arm combinations</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">180° Wheeled Excavators</h3>
              <p className="text-slate-600 mb-4">
                Wheeled excavator lift plans require additional considerations for:
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Stabiliser deployment configurations</li>
                <li>• Ground bearing under stabiliser pads</li>
                <li>• Machine stability during slew</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Excavators with Quick Hitches</h3>
              <p className="text-slate-600 mb-4">
                Quick hitch systems affect lifting capacity and attachment security. We verify:
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>• Quick hitch certification</li>
                <li>• Deduction from rated capacity</li>
                <li>• Lifting point integrity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ISO 10567 Compliance */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">ISO 10567 Compliance</h2>
          <p className="text-slate-300 text-lg mb-8">
            All our excavator lift plans comply with ISO 10567:2013 (Earth-moving machinery — Lift capacity — 
            Hydraulic excavators), which defines:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Rated Lift Capacity</h3>
              <p className="text-slate-300">
                The maximum load an excavator can safely lift at a given radius and height, limited to:
              </p>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• 75% of tipping load, OR</li>
                <li>• 87% of hydraulic capacity</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Lift Capacity Charts</h3>
              <p className="text-slate-300 mb-4">
                We interpret manufacturer load charts correctly, accounting for:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>• Boom length configuration</li>
                <li>• Arm (dipper) length</li>
                <li>• Counterweight fitted</li>
                <li>• Track width (extended/retracted)</li>
                <li>• Over-front vs over-side lifting</li>
              </ul>
            </div>
          </div>
          
          <p className="mt-8 text-blue-400 font-medium">
            Our expertise means you get accurate capacity assessments, not conservative guesswork that 
            limits your operations unnecessarily.
          </p>
        </div>
      </section>

      {/* When You Need Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            When Do You Need an Excavator Lift Plan?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Under LOLER 1998 Regulation 8, every lifting operation must be properly planned by a competent person. 
            For excavator lifting, you need a formal lift plan when:
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Lifting loads over 500kg',
              'Lifting near overhead power lines or structures',
              'Lifting in confined spaces or restricted areas',
              'Tandem lifts with multiple machines',
              'Lifting over personnel or occupied areas',
              'Complex or non-routine lifts',
              'When specified by your principal contractor',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-slate-50 p-4 rounded-lg">
                <span className="text-blue-600 text-xl">✓</span>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="mt-8 text-slate-600 italic">
            Even for simpler lifts, having a documented plan demonstrates due diligence and provides essential 
            briefing information for your lifting team.
          </p>
        </div>
      </section>

      {/* Lift Plan Checking CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Excavator Lift Plan Checking Service</h2>
              <p className="text-blue-100 max-w-2xl">
                Already have lift plans from your subcontractors? We provide independent Appointed Person 
                review to ensure calculations are correct, load charts have been interpreted correctly, 
                and ground bearing has been properly assessed.
              </p>
            </div>
            <Link
              href="/services/lift-plan-checking"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Why Choose RMT Solutions for Excavator Lift Plans?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Specialist Expertise',
                desc: 'Unlike generalist health and safety consultancies, lift planning is our core business. We understand excavator operations from years of hands-on construction experience.',
              },
              {
                title: 'CPCS Appointed Person (A61)',
                desc: 'Our lift plans are prepared by a qualified Appointed Person with current CPCS certification, meeting BS 7121 requirements for competence in planning lifting operations.',
              },
              {
                title: 'Tier 1 Approved',
                desc: "We're trusted by leading UK contractors including Wates, Caddick, and GMI for their lift planning requirements.",
              },
              {
                title: 'Fast Turnaround',
                desc: 'Standard excavator lift plans delivered within 24-48 hours. Urgent requirements accommodated where possible.',
              },
              {
                title: 'Software-Enhanced Accuracy',
                desc: 'We use industry-leading tools including AutoCAD, LICCON, and 3D Lift Plan software to produce accurate, professional documentation.',
              },
            ].map((item) => (
              <div key={item.title} className="border border-slate-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {[
              {
                q: 'Can any excavator be used for lifting?',
                a: 'Only excavators designed and equipped for lifting operations should be used. The machine must have a certified lifting point (hook or quick hitch with lifting eye), a Rated Capacity Indicator (RCI) for machines over 1 tonne capacity, current thorough examination certificate covering lifting duties, and manufacturer\'s lifting capacity chart.',
              },
              {
                q: "What's the difference between digging capacity and lifting capacity?",
                a: "Digging capacity is the bucket breakout force. Lifting capacity is the maximum suspended load the machine can safely handle at a given radius. They're completely different measurements. You cannot use digging specifications to determine lifting capability.",
              },
              {
                q: 'Do I need a lift plan for every excavator lift?',
                a: 'LOLER requires all lifting operations to be properly planned. For routine, low-risk lifts, a generic risk assessment and method statement may suffice. For any lift with additional hazards, a specific lift plan should be prepared. When in doubt, document your planning.',
              },
              {
                q: 'How long is an excavator lift plan valid?',
                a: "A lift plan is valid for the specific lift or series of lifts it was prepared for, provided conditions don't change. If the excavator, load, location, or ground conditions change materially, the plan should be reviewed and updated.",
              },
              {
                q: 'Can I use the same lift plan on different sites?',
                a: 'No. Each lift plan is site-specific. Ground conditions, obstructions, and access will differ between sites, requiring fresh assessment and planning.',
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
          <InlineQuoteForm serviceName="Excavator Lift Plans" heading="Get a quote for excavator lift plans" />
        </div>
      </section>

      <RelatedServices currentSlug="excavator-lift-plans" />

      {/* CTA Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Your Excavator Lift Plan</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Contact us today for a competitive quote on your excavator lift plan requirements.
          </p>
          
          <div className="bg-slate-800 p-8 rounded-xl max-w-2xl mx-auto mb-8">
            <h3 className="font-semibold mb-4">What we need from you:</h3>
            <ul className="text-slate-300 text-left space-y-2">
              <li>• Site location and layout</li>
              <li>• Excavator make and model</li>
              <li>• Load details (weight, dimensions)</li>
              <li>• Proposed lifting positions</li>
              <li>• Any known hazards or constraints</li>
            </ul>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+447803808093"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Call: 07803 808093
            </a>
            <a
              href="mailto:ricky@rmtsolutions.co.uk"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Email Us
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
              { href: '/services/telehandler-lift-plans', title: 'Telehandler Lift Plans' },
              { href: '/services/lift-plan-checking', title: 'Lift Plan Checking Service' },
              { href: '/services/tower-crane', title: 'Tower Crane Contracts' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-slate-50 hover:bg-slate-100 p-4 rounded-lg text-slate-900 font-medium transition-colors"
              >
                {service.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
