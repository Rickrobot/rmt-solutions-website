import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Lift Plan Review UK | LOLER Compliance Check',
  description: 'Independent lift plan review by a CPCS Appointed Person against LOLER, BS 7121 and industry best practice. Fast turnaround, clear feedback.',
  keywords: 'lift plan review, lift plan review service, lifting plan review, crane lift plan review, independent lift plan review, lift plan review UK, LOLER lift plan review, lift plan assessment, appointed person lift plan review',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/lift-plan-review',
  },
  openGraph: {
    title: 'Lift Plan Review UK | LOLER Compliance Check',
    description: 'Independent lift plan review by a CPCS Appointed Person against LOLER, BS 7121, and industry best practice.',
    url: 'https://www.rmtsafetysolutions.com/services/lift-plan-review',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lift Plan Review Service',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    telephone: '+447803808093',
  },
  description: 'Independent lift plan review by a CPCS Appointed Person. We review lift plans against LOLER, BS 7121, and industry best practice to confirm they are compliant and safe to execute.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a lift plan review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A lift plan review is an independent assessment of a lift plan by a qualified person — typically a CPCS Appointed Person — to confirm that the plan is technically sound, compliant with LOLER and BS 7121, and safe to execute.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a lift plan review a legal requirement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'LOLER requires that every lifting operation is properly planned by a competent person. While the regulations do not specifically mandate an independent review, principal contractors have a duty under CDM 2015 to ensure that subcontractor work on their site is safe and compliant.',
      },
    },
    {
      '@type': 'Question',
      name: 'How quickly can you review a lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most lift plans are reviewed and returned within 24 hours of receipt. For retained contract clients, priority turnaround is available. Urgent same-day review is available for critical path operations.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of lift plan do you review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We review lift plans for all types of lifting equipment used in UK construction — excavators, telehandlers, lorry loaders, mobile cranes, tower cranes, and overhead lifting equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a plan fails the review?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You receive a clear written assessment explaining exactly what is deficient and what needs to change. We can then review the amended plan to confirm the issues have been addressed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can subcontractors use your review service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Subcontractors who write their own lift plans can have them independently reviewed before submission to the principal contractor, reducing the chance of rejection and project delays.',
      },
    },
  ],
}

// BreadcrumbList JSON-LD — Home > Services > {service}. Unlocks
// breadcrumb rendering in mobile SERPs and matches the structured-
// data depth used on /about, /contact and /locations/[slug].
const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Lift Plan Review', item: 'https://www.rmtsafetysolutions.com/services/lift-plan-review' },
  ],
}

export default function LiftPlanReviewPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-medium mb-4">For Contractors &amp; Subcontractors</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lift Plan Review Service</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Independent review of your lift plans by a CPCS Appointed Person before work begins. 
            We assess every plan against LOLER, BS 7121, and current industry best practice — identifying 
            deficiencies, confirming compliance, and giving you confidence that the lifting operation 
            can proceed safely.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Request a Quote
            </Link>
            <a href="tel:+447803808093" className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Call: 07803 808093
            </a>
          </div>
          <div className="flex flex-wrap gap-8 text-sm">
            <div><span className="text-blue-400 font-bold text-2xl">24hr</span><br />Turnaround</div>
            <div><span className="text-blue-400 font-bold text-2xl">CPCS A61</span><br />Appointed Person</div>
            <div><span className="text-blue-400 font-bold text-2xl">35 Years</span><br />Experience</div>
          </div>
        </div>
      </section>

      {/* Why Have Plans Reviewed */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Have Your Lift Plans Independently Reviewed?</h2>
          <p className="text-lg text-slate-600 mb-6">
            A lift plan is only as good as the information it contains and the competence of the person 
            who prepared it. Even experienced planners make errors — wrong load chart configurations, 
            missing ground bearing assessments, rigging weights omitted from total load calculations, 
            or plans that are generic templates rather than site-specific documents.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            An independent lift plan review provides a second pair of qualified eyes on every plan 
            before the lifting operation takes place. It is not about catching people out — it is about 
            catching errors before they become incidents.
          </p>
          <p className="text-lg text-slate-600">
            Under LOLER Regulation 8, every lifting operation must be properly planned by a competent 
            person. For principal contractors, an independent review demonstrates due diligence. For 
            subcontractors, having your plans reviewed before submission reduces the risk of rejection, 
            delays, and the cost of standing time while issues are resolved.
          </p>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Who Benefits from a Lift Plan Review?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Principal Contractors</h3>
              <p className="text-slate-600 mb-4">
                You are legally responsible for ensuring that all lifting operations on your site are properly 
                planned. When subcontractors submit lift plans, you need an independent, qualified review 
                to confirm those plans are technically sound and LOLER compliant.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Demonstrates due diligence to the HSE</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Catches errors before they reach site</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Provides a documented audit trail of every review</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Reduces the risk of lifting incidents on your project</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Subcontractors</h3>
              <p className="text-slate-600 mb-4">
                If you write your own lift plans, having them independently reviewed before submission 
                to the principal contractor means they are more likely to be accepted first time — avoiding 
                delays, rework, and the cost of standing time.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Get plans right before submission to the main contractor</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Avoid rejection and the delays that follow</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Improve the quality of your lift planning over time</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Build confidence with tier 1 clients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What We Review</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Load Data &amp; Capacity</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Load weights verified against manufacturer data or calculation</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Centre of gravity correctly identified for asymmetric loads</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Weight of all lifting accessories included in total suspended load</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Correct load chart used for the specific machine configuration</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Capacity verified at actual working radius with adequate safety margin</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Ground &amp; Stability</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Ground bearing capacity assessed for the operating position</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Outrigger and stabiliser loads calculated</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Load-spreading measures specified where required</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Proximity to excavations and soft ground considered</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Rigging &amp; Accessories</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Sling type, size, and configuration appropriate for the load</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Sling capacities adequate at the working angle</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Rigging arrangement suitable for load geometry</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Thorough examination certificates current for all accessories</li>
              </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Hazards &amp; Compliance</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>All site-specific hazards identified and addressed</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Exclusion zones defined and appropriate</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Plan meets LOLER Regulation 8 requirements</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Plan prepared by a demonstrably competent person</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Site-specific rather than generic template</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Equipment Types We Review</h2>
          <p className="text-lg text-slate-600 mb-8">
            We review lift plans for all types of lifting equipment commonly used on UK construction sites. 
            Each equipment type has its own specific technical considerations, and our reviews are tailored accordingly.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Excavator Lift Plans', desc: 'ISO 10567 capacity verification, duty chart checks, track configuration, and lifting mode confirmation.', href: '/services/excavator-lift-plans' },
              { name: 'Telehandler Lift Plans', desc: 'Stabiliser deployment, load chart for specific attachment, boom extension limits, and ground conditions.', href: '/services/telehandler-lift-plans' },
              { name: 'Lorry Loader / HIAB Plans', desc: 'Stabiliser reaction forces, vehicle positioning, multiple delivery point assessments, and operator visibility.', href: '/services/lorry-loader-lift-plans' },
              { name: 'Mobile Crane Lift Plans', desc: 'Configuration-specific load charts, counterweight, boom length, outrigger extension, and ground bearing pressures.', href: '/services/mobile-crane-lift-plans' },
              { name: 'Tower Crane Lift Plans', desc: 'Free-standing and tied configurations, overlapping jib zones, foundation loads, and climb sequence planning.', href: '/services/tower-crane' },
              { name: 'Steel Erection Plans', desc: 'Fabrication drawing review, erection sequence, temporary stability, and connection methodology.', href: '/services/steel-erection' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow group">
                <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.name}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Common Deficiencies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Common Deficiencies We Find</h2>
          <p className="text-lg text-slate-600 mb-8">
            After reviewing thousands of lift plans over 35 years, certain deficiencies appear repeatedly. 
            These are not minor formatting issues — they are errors that could directly affect the safety 
            of the lifting operation.
          </p>

          <div className="bg-red-50 border border-red-200 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Incorrect load chart configuration', desc: 'Capacity shown for a machine configuration that does not match what will actually be on site. Different boom lengths, counterweight options, or outrigger extensions produce entirely different load charts.' },
                { title: 'Load weight inaccuracies', desc: 'Estimated weights instead of verified weights. Rigging and lifting accessories not included in the total suspended load. On lifts at higher duty percentages, these omissions can mean the difference between a safe lift and an overloaded machine.' },
                { title: 'No ground bearing assessment', desc: 'Plan assumes firm, level ground without any assessment of actual conditions. Construction sites with made-up ground, backfilled trenches, or underground services require specific assessment.' },
                { title: 'Generic plans reused across sites', desc: 'The same lift plan submitted for multiple sites with only the project name changed. No reference to actual site conditions, specific hazards, or the particular equipment being used.' },
                { title: 'Inadequate consideration of the landing', desc: 'Plans that detail how the load will be picked up but give minimal attention to how it will be landed, positioned, and released. The landing phase is often the most hazardous.' },
                { title: 'Missing or expired documentation', desc: 'Thorough examination certificates not provided, expired, or not matching the actual equipment in the plan. A direct breach of LOLER Regulation 9.' },
              ].map((item) => (
                <div key={item.title}>
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 mt-1">✗</span>
                    <div>
                      <span className="text-red-800 font-semibold">{item.title}</span>
                      <p className="text-red-800 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">The Review Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Submit', desc: 'Send us the lift plan by email along with any supporting documentation — load charts, site drawings, thorough examination certificates.' },
              { step: '2', title: 'Review', desc: 'Our CPCS Appointed Person conducts a detailed technical review, assessing every element against LOLER, BS 7121, and industry best practice.' },
              { step: '3', title: 'Report', desc: 'You receive a clear written assessment within 24 hours — approved, approved with observations, or not approved with specific reasons.' },
              { step: '4', title: 'Resolve', desc: 'If the plan requires amendment, we provide specific guidance on what needs to change and can review the revised plan to confirm compliance.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What You Receive</h2>

          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Review Report</h3>
            <p className="text-slate-600 mb-6">A clear written assessment with one of three outcomes:</p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <span className="text-green-700 font-bold text-lg">Approved</span>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg text-center">
                <span className="text-yellow-700 font-bold text-lg">Approved with Observations</span>
              </div>
              <div className="bg-red-100 p-4 rounded-lg text-center">
                <span className="text-red-700 font-bold text-lg">Not Approved</span>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-slate-600">
              <li>• Specific issues identified with clear explanations</li>
              <li>• Required amendments detailed</li>
              <li>• Recommendations for improvement where applicable</li>
              <li>• Documented record for your compliance audit trail</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Lift Plan Review vs Checking */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Lift Plan Review vs Lift Plan Checking</h2>
          <p className="text-lg text-slate-600 mb-6">
            In practice, the terms "lift plan review" and "lift plan checking" are used interchangeably 
            across the UK construction industry. Both refer to the independent assessment of a lift plan 
            by a qualified person to confirm it is technically sound, LOLER compliant, and safe to execute.
          </p>
          <p className="text-lg text-slate-600 mb-6">
            Our{' '}
            <Link href="/services/lift-plan-checking" className="text-blue-600 hover:text-blue-700 underline">
              lift plan checking service
            </Link>{' '}
            is typically engaged by principal contractors who need every subcontractor lift plan 
            reviewed before work begins on site. Our lift plan review service covers the same technical 
            assessment and is available to any contractor — whether you are a tier 1 principal contractor, 
            a subcontractor preparing plans for submission, or a project manager who needs assurance 
            that your lifting operations are properly planned.
          </p>
          <p className="text-lg text-slate-600">
            The assessment is the same. Every plan is reviewed line by line against LOLER requirements, 
            BS 7121 guidance, and the practical realities of the lifting operation described.
          </p>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Service Options</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-2 border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Ad-Hoc Review</h3>
              <p className="text-slate-600 mb-4">
                Submit individual lift plans as and when required. Each plan is reviewed and returned 
                with a written assessment, typically within 24 hours.
              </p>
              <p className="text-slate-600 text-sm">
                Ideal for contractors who need occasional reviews, one-off projects, or subcontractors 
                who want their plans independently assessed before submission.
              </p>
            </div>

            <div className="border-2 border-blue-500 p-8 rounded-xl bg-blue-50">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Retained Review Contract</h3>
              <p className="text-slate-600 mb-4">
                An ongoing arrangement where we review all lift plans for the duration of your project. 
                Fixed monthly fee covering unlimited reviews with priority turnaround.
              </p>
              <p className="text-slate-600 text-sm">
                Ideal for principal contractors managing multiple subcontractors across one or more 
                sites, or any project with a high volume of lifting operations.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact us to discuss the right option for your project →
            </Link>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Qualifications &amp; Experience</h2>
          <p className="text-lg text-slate-600 mb-8">
            All lift plan reviews are carried out by Ricky Marsh, Director of RMT Solutions Ltd. 
            Every review is conducted by someone with both the qualifications and the practical 
            experience to assess whether a lift plan will work safely on site — not just whether it 
            meets a paperwork standard.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              'CPCS Appointed Person (A61) — Reg: 40389279',
              '35+ years construction industry experience',
              'NEBOSH National Diploma',
              'CertIOSH · MIIRSM · TIFSM',
              'Thousands of lift plans reviewed',
              'Experience across all equipment types',
            ].map((item) => (
              <div key={item} className="bg-white p-4 rounded-xl shadow-sm flex items-start gap-3">
                <span className="text-blue-600">✓</span>
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {[
              {
                q: 'What is a lift plan review?',
                a: 'A lift plan review is an independent assessment of a lift plan by a qualified person — typically a CPCS Appointed Person — to confirm that the plan is technically sound, compliant with LOLER and BS 7121, and safe to execute. The reviewer checks every element including load data, equipment capacity, rigging arrangement, ground conditions, and site-specific hazards.',
              },
              {
                q: 'Is a lift plan review a legal requirement?',
                a: 'LOLER requires that every lifting operation is properly planned by a competent person. While the regulations do not specifically mandate an independent review, principal contractors have a duty under CDM 2015 to ensure that subcontractor work on their site is safe and compliant. An independent lift plan review is the most practical way to discharge that duty for lifting operations.',
              },
              {
                q: 'How quickly can you review a lift plan?',
                a: 'Most lift plans are reviewed and returned within 24 hours of receipt. For retained contract clients, priority turnaround is available. Urgent same-day review is available for critical path operations — just let us know when you submit.',
              },
              {
                q: 'What types of lift plan do you review?',
                a: 'We review lift plans for all types of lifting equipment used in UK construction — excavators, telehandlers, lorry loaders, mobile cranes, tower cranes, and overhead lifting equipment. We also review steel erection plans and tandem lift plans.',
              },
              {
                q: 'What happens if a plan fails the review?',
                a: 'You receive a clear written assessment explaining exactly what is deficient and what needs to change. We can then review the amended plan to confirm the issues have been addressed. The objective is to get the plan right, not simply to reject it.',
              },
              {
                q: 'Can subcontractors use your review service?',
                a: 'Yes. Subcontractors who write their own lift plans can have them independently reviewed before submission to the principal contractor. This significantly reduces the chance of rejection and the project delays that follow.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-slate-50 p-6 rounded-xl">
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
          <InlineQuoteForm serviceName="Lift Plan Review" heading="Get a quote for lift plan review" />
        </div>
      </section>

      <RelatedServices currentSlug="lift-plan-review" />

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Lift Plans Reviewed?</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch to discuss your requirements. Whether you need a single lift plan reviewed 
            or ongoing review support for a major project, we provide fast, thorough, independent assessment.
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
      {/* Available across the UK — reciprocates the inbound links from /locations/* */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Available across the UK
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We deliver lift plan review UK-wide. Plans are produced remotely from Warrington; site visits are scheduled where the work requires it. Pick your nearest city or call <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">07803 808093</a> to discuss your project.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
              <Link
                key="warrington"
                href="/locations/warrington"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Warrington →
              </Link>
              <Link
                key="manchester"
                href="/locations/manchester"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Manchester →
              </Link>
              <Link
                key="liverpool"
                href="/locations/liverpool"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Liverpool →
              </Link>
              <Link
                key="leeds"
                href="/locations/leeds"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Leeds →
              </Link>
              <Link
                key="birmingham"
                href="/locations/birmingham"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Birmingham →
              </Link>
              <Link
                key="london"
                href="/locations/london"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                London →
              </Link>
              <Link
                key="bristol"
                href="/locations/bristol"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Bristol →
              </Link>
              <Link
                key="glasgow"
                href="/locations/glasgow"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Glasgow →
              </Link>
              <Link
                key="edinburgh"
                href="/locations/edinburgh"
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                Edinburgh →
              </Link>
          </div>
        </div>
      </section>

    </>
  )
}
