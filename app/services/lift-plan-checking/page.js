
import Image from 'next/image'
import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Lift Plan Checking Service UK | Independent AP Review | RMT Solutions',
  description: 'Independent Appointed Person lift plan checking service for tier 1 contractors. Ensure subcontractor lift plans are LOLER compliant before work begins. Fast 24hr review.',
  keywords: 'lift plan checking service, lift plan review, appointed person lift plan check, LOLER lift plan review, independent lift plan verification',
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lift Plan Checking Service',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    telephone: '+447803808093',
  },
  description: 'Independent Appointed Person review of lift plans for tier 1 contractors. Verify subcontractor lift plans are LOLER compliant before work begins.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "What is lift plan checking?",
      "acceptedAnswer": { "@type": "Answer", "text": "Lift plan checking is the independent review of a lift plan prepared by another party — typically a subcontractor, crane hire firm, or third-party Appointed Person — to confirm it is technically correct, LOLER and BS 7121 compliant, and fit for the specific site conditions. The output is a written review with findings, recommendations, and a Category A (acceptable) or Category B (not acceptable as submitted) determination." }
    },
    {
      "@type": "Question",
      "name": "Why do lift plans get rejected?",
      "acceptedAnswer": { "@type": "Answer", "text": "The most common reasons lift plans get rejected are inaccurate or unverified load weights, wrong machine configuration on the load chart, capacity utilisation above the project threshold, missing thorough examination certificates, no site-specific hazard assessment, incorrect rigging calculations or sling angles, missing personnel competencies, and inadequate consideration of ground bearing pressure." }
    },
    {
      "@type": "Question",
      "name": "How long does lift plan checking take?",
      "acceptedAnswer": { "@type": "Answer", "text": "Standard lift plan checking turnaround is 24 to 48 hours from receipt of a complete plan. Complex plans involving tandem lifts, contract lifts, or significant site-specific risks may take 3 to 5 working days. Same-day reviews can be arranged for urgent operations." }
    },
    {
      "@type": "Question",
      "name": "What's the difference between lift plan checking and lift plan review?",
      "acceptedAnswer": { "@type": "Answer", "text": "The terms are often used interchangeably. Both involve an independent competent person assessing a lift plan for technical compliance and site suitability. Some clients reserve 'review' for a higher-level acceptance check by their Appointed Person, and 'checking' for the detailed technical line-by-line audit. Either way, the deliverable is a written record with findings and a clear pass/fail determination." }
    }
  ],
}


export default function LiftPlanCheckingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/lift-plan-checking-clipboard-inspection.webp"
            alt="Construction professionals reviewing lift plan documentation - Independent lift plan checking service"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-medium mb-4">For Tier 1 Contractors</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lift Plan Checking Service</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Independent Appointed Person review of lift plans submitted by subcontractors, crane hire companies, 
            and suppliers. We ensure every lifting operation on your site is LOLER compliant before work begins.
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
            <div><span className="text-blue-400 font-bold text-2xl">Expert</span><br />AP Review</div>
            <div><span className="text-blue-400 font-bold text-2xl">Tier 1</span><br />Approved</div>
          </div>
        </div>
      </section>

      {/* Why You Need This */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why You Need Independent Lift Plan Checking</h2>
          <p className="text-lg text-slate-600 mb-8">
            As a principal contractor, you have duties under CDM 2015 to ensure safe systems of work on your site. 
            This includes the lifting operations carried out by your subcontractors and suppliers.
          </p>
          <p className="text-lg text-slate-600 mb-8">
            But how do you know if the lift plans you receive are actually adequate?
          </p>

          <div className="bg-red-50 border border-red-200 p-8 rounded-xl mb-8">
            <h3 className="text-xl font-semibold text-red-800 mb-4">Common Problems We Find</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Incorrect capacity readings from load charts',
                'Ground bearing not properly assessed',
                'Wrong crane configuration specified',
                'Risk assessments missing key hazards',
                "Method statements that don't match the lift plan",
                "Rigging arrangements that won't work",
                'Lifting accessories undersized or incorrect',
              ].map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">✗</span>
                  <span className="text-red-800">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 font-medium text-lg">
            A lift plan that looks professional can still contain fundamental errors. Independent checking catches 
            problems before they become incidents.
          </p>
        </div>
      </section>

      {/* What We Review */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What We Review</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Technical Accuracy</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Crane/equipment capacity verified against manufacturer data</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Load weight and centre of gravity correctly assessed</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Radii and heights properly calculated</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Configuration (boom length, counterweight, etc.) appropriate</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Ground bearing loads calculated and addressed</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Regulatory Compliance</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>LOLER requirements met</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>BS 7121 principles applied (where relevant)</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Equipment thorough examination referenced</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Lifting accessories properly specified</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Risk Assessment Quality</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>All foreseeable hazards identified</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Control measures adequate</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Residual risk acceptable</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Site-specific factors addressed</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Method Statement Workability</h3>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Step-by-step procedure logical and complete</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Matches the lift plan drawing</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Roles and responsibilities clear</li>
                <li className="flex items-start gap-3"><span className="text-blue-600">✓</span>Communication arrangements specified</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What You Receive */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What You Receive</h2>

          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">Check Report</h3>
            <p className="text-slate-600 mb-6">A clear summary identifying:</p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-100 p-4 rounded-lg text-center">
                <span className="text-green-700 font-bold text-lg">Approved</span>
              </div>
              <div className="bg-yellow-100 p-4 rounded-lg text-center">
                <span className="text-yellow-700 font-bold text-lg">Approved with Comments</span>
              </div>
              <div className="bg-red-100 p-4 rounded-lg text-center">
                <span className="text-red-700 font-bold text-lg">Not Approved</span>
              </div>
            </div>

            <ul className="mt-6 space-y-2 text-slate-600">
              <li>• Issues found with explanations</li>
              <li>• Required amendments</li>
              <li>• Recommendations for improvement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">The Checking Process</h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Submission', desc: 'You send us the lift plan package: lift plan drawing, risk assessment, method statement, and equipment certificates.' },
              { step: '2', title: 'Review', desc: 'Our CPCS Appointed Person reviews the complete package, verifies calculations, and assesses adequacy.' },
              { step: '3', title: 'Report', desc: 'You receive a clear check report within 24 hours with approval status and detailed findings.' },
              { step: '4', title: 'Re-submission', desc: 'If amendments are required, the subcontractor revises and resubmits for verification.' },
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

      {/* Who Uses This */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Who Uses This Service?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Tier 1 Main Contractors</h3>
              <p className="text-slate-600 mb-4">
                You're receiving lift plans from multiple subcontractors and suppliers daily.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>✓ Confidence that lifting operations are properly planned</li>
                <li>✓ Documented due diligence</li>
                <li>✓ Reduced risk of incidents and enforcement action</li>
                <li>✓ Consistent standards across all subcontractors</li>
              </ul>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Project Managers</h3>
              <p className="text-slate-600 mb-4">
                You need to sign off lift plans but may not have the technical expertise to verify the detail.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>✓ Expert review supporting your approval decisions</li>
                <li>✓ Clear reports you can understand and act on</li>
                <li>✓ Technical backup when challenging subcontractor submissions</li>
              </ul>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Health & Safety Managers</h3>
              <p className="text-slate-600 mb-4">
                You're responsible for site safety but can't be an expert in every discipline.
              </p>
              <ul className="text-slate-600 space-y-2">
                <li>✓ Specialist lift planning expertise on tap</li>
                <li>✓ Independent verification of subcontractor competence</li>
                <li>✓ Evidence of robust checking systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Good vs Poor */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What Makes a Good Lift Plan?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Through thousands of lift plan reviews, we've identified what separates good lift plans from poor ones:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Good Lift Plans Have:</h3>
              <ul className="space-y-3 text-green-800">
                <li className="flex items-start gap-3"><span className="text-green-600">✓</span>Clear drawings showing equipment position, radii, and load path to scale</li>
                <li className="flex items-start gap-3"><span className="text-green-600">✓</span>Verified capacity with specific duty chart references</li>
                <li className="flex items-start gap-3"><span className="text-green-600">✓</span>Ground assessment addressing actual site conditions</li>
                <li className="flex items-start gap-3"><span className="text-green-600">✓</span>Complete risk assessments covering equipment-specific and site-specific hazards</li>
                <li className="flex items-start gap-3"><span className="text-green-600">✓</span>Workable method statements that match the drawing</li>
              </ul>
            </div>

            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-red-800 mb-4">Poor Lift Plans Often Have:</h3>
              <ul className="space-y-3 text-red-800">
                <li className="flex items-start gap-3"><span className="text-red-600">✗</span>Generic content copied without site-specific adaptation</li>
                <li className="flex items-start gap-3"><span className="text-red-600">✗</span>Missing calculations or "calculations available on request"</li>
                <li className="flex items-start gap-3"><span className="text-red-600">✗</span>Assumed ground conditions without verification requirements</li>
                <li className="flex items-start gap-3"><span className="text-red-600">✗</span>Incomplete risk assessments missing obvious hazards</li>
                <li className="flex items-start gap-3"><span className="text-red-600">✗</span>Method statements that don't provide useful guidance</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-slate-700 font-medium">
            We don't just check boxes - we assess whether the lift plan will actually work safely on your site.
          </p>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Service Options</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Per-Plan Checking</h3>
              <p className="text-slate-600 mb-4">Individual lift plan reviews charged per submission. Ideal for:</p>
              <ul className="text-slate-600 space-y-2">
                <li>• Occasional checking requirements</li>
                <li>• Specific complex lifts</li>
                <li>• Projects with few lifting operations</li>
              </ul>
            </div>

            <div className="border-2 border-blue-500 p-8 rounded-xl bg-blue-50">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Retained Service</h3>
              <p className="text-slate-600 mb-4">Agreed monthly fee for unlimited lift plan checking. Ideal for:</p>
              <ul className="text-slate-600 space-y-2">
                <li>• Large projects with frequent submissions</li>
                <li>• Multi-site operations</li>
                <li>• Long-term contractor relationships</li>
              </ul>
            </div>

            <div className="border-2 border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">On-Site Presence</h3>
              <p className="text-slate-600 mb-4">CPCS Appointed Person attendance at your site for:</p>
              <ul className="text-slate-600 space-y-2">
                <li>• Real-time lift plan review</li>
                <li>• Pre-lift briefings</li>
                <li>• Complex operation supervision</li>
                <li>• Lifting operations audits</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium">
              Contact us to discuss the right option for your project →
            </Link>
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
                q: 'How quickly can you turn around a lift plan check?',
                a: 'Standard service is 24 hours from receipt of complete documentation. Urgent same-day review is available for critical path operations - just let us know when you submit.',
              },
              {
                q: 'What if a lift plan fails your check?',
                a: "We provide a clear report explaining what's wrong and what's needed to fix it. The subcontractor amends their submission and resubmits. We verify the amendments (included in the original check fee for straightforward issues).",
              },
              {
                q: 'Do you check lift plans from all crane companies?',
                a: "Yes. We're independent of any crane hire company, so we review submissions from any supplier objectively. Some crane companies provide better documentation than others - we assess each submission on its merits.",
              },
              {
                q: 'What if I disagree with my subcontractor about a lift plan?',
                a: 'We can provide independent assessment and, if needed, explain our findings directly to your subcontractor. Having an independent expert view often resolves disputes efficiently.',
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
          <InlineQuoteForm serviceName="Lift Plan Checking" heading="Get a quote for lift plan checking" />
        </div>
      </section>

      <RelatedServices currentSlug="lift-plan-checking" />

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your lift plan checking requirements.
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
    </>
  )
}
