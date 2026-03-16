import Link from 'next/link'

export const metadata = {
  title: 'Lift Plan Review Service | Independent LOLER Compliance Review | RMT Solutions',
  description: 'Independent lift plan review by a CPCS Appointed Person. We review your lift plans against LOLER, BS 7121, and industry best practice before work begins. Fast turnaround, clear feedback.',
  keywords: [
    'lift plan review',
    'lift plan review service',
    'lifting plan review',
    'crane lift plan review',
    'independent lift plan review',
    'lift plan review UK',
    'LOLER lift plan review',
    'lift plan assessment',
    'lift plan compliance review',
    'lifting operations review',
    'appointed person lift plan review',
    'construction lift plan review',
  ],
  openGraph: {
    title: 'Lift Plan Review Service | Independent LOLER Compliance Review | RMT Solutions',
    description: 'Independent lift plan review by a CPCS Appointed Person. We review your lift plans against LOLER, BS 7121, and industry best practice before work begins.',
    type: 'website',
    url: 'https://www.rmtsafetysolutions.com/services/lift-plan-review',
  },
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/lift-plan-review',
  },
}

function CheckIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ArrowRightIcon({ className = "w-5 h-5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

function ShieldIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function ClipboardIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
    </svg>
  )
}

function AlertIcon({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
  )
}

export default function LiftPlanReviewPage() {
  return (
    <>
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Lift Plan Review Service",
            "description": "Independent lift plan review by a CPCS Appointed Person. We review lift plans against LOLER, BS 7121, and industry best practice to confirm they are compliant and safe to execute.",
            "provider": {
              "@type": "Organization",
              "name": "RMT Solutions Ltd",
              "url": "https://www.rmtsafetysolutions.com",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Warrington",
                "addressRegion": "Cheshire",
                "addressCountry": "GB"
              }
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "serviceType": "Lift Plan Review",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Lift Plan Review Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ad-Hoc Lift Plan Review"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Ongoing Lift Plan Review Contract"
                  }
                }
              ]
            }
          })
        }}
      />

      {/* Hero */}
      <section className="section bg-gradient-to-b from-slate-900/50 to-slate-950 relative overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-slate-300">Lift Plan Review</span>
            </nav>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50 mb-6">
              <span className="text-sm text-slate-400">For Contractors & Subcontractors</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Lift Plan Review Service
            </h1>
            <p className="text-xl text-slate-400 mb-8">
              Independent review of your lift plans by a CPCS Appointed Person before work begins. 
              We assess every plan against LOLER, BS 7121, and current industry best practice — identifying 
              deficiencies, confirming compliance, and giving you confidence that the lifting operation 
              can proceed safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                Discuss Your Requirements
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link href="#review-process" className="btn-secondary">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Review */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Why Have Your Lift Plans Independently Reviewed?
            </h2>
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-slate-400 mb-4 text-lg">
                A lift plan is only as good as the information it contains and the competence of the person 
                who prepared it. Even experienced planners make errors — wrong load chart configurations, 
                missing ground bearing assessments, rigging weights omitted from total load calculations, 
                or plans that are generic templates rather than site-specific documents.
              </p>
              <p className="text-slate-400 mb-4">
                An independent lift plan review provides a second pair of qualified eyes on every plan 
                before the lifting operation takes place. It is not about catching people out — it is about 
                catching errors before they become incidents. A lift plan that looks complete on paper can 
                still contain critical deficiencies that only become apparent when someone with the right 
                experience reviews it in detail.
              </p>
              <p className="text-slate-400 mb-6">
                Under LOLER Regulation 8, every lifting operation must be properly planned by a competent 
                person. For principal contractors managing multiple subcontractors, an independent review 
                demonstrates that you have exercised due diligence in verifying the quality of lift plans 
                submitted to your site. For subcontractors, having your plans reviewed before submission 
                reduces the risk of rejection, delays, and the reputational damage that comes with 
                submitting non-compliant work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="section bg-slate-900/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Who Benefits from a Lift Plan Review?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl">
            
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <ShieldIcon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Principal Contractors</h3>
              </div>
              <p className="text-slate-400 mb-4">
                You are legally responsible for ensuring that all lifting operations on your site are properly 
                planned. When subcontractors submit lift plans, you need an independent, qualified review 
                to confirm those plans are technically sound and LOLER compliant.
              </p>
              <ul className="space-y-2">
                {[
                  'Demonstrates due diligence to the HSE',
                  'Catches errors before they reach site',
                  'Provides a documented audit trail of every review',
                  'Reduces the risk of lifting incidents on your project',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckIcon className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center">
                  <ClipboardIcon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-semibold text-white">Subcontractors</h3>
              </div>
              <p className="text-slate-400 mb-4">
                If you write your own lift plans, having them independently reviewed before submission 
                to the principal contractor means they are more likely to be accepted first time — avoiding 
                delays, rework, and the cost of standing time while issues are resolved.
              </p>
              <ul className="space-y-2">
                {[
                  'Get plans right before submission to the main contractor',
                  'Avoid rejection and the delays that follow',
                  'Improve the quality of your lift planning over time',
                  'Build confidence with tier 1 clients through consistently compliant work',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckIcon className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Review */}
      <section className="section">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What We Review</h2>
          <p className="text-slate-400 mb-8 max-w-3xl">
            Every lift plan review is a thorough, line-by-line assessment of the plan against LOLER requirements, 
            BS 7121 guidance, and current industry best practice. We review lift plans for all types of 
            lifting equipment used in UK construction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {[
              {
                title: 'Load Data Verification',
                desc: 'Load weights cross-referenced against manufacturer data, delivery documentation, or calculation. Centre of gravity identified. Weight of all lifting accessories included in total suspended load.',
              },
              {
                title: 'Equipment & Capacity',
                desc: 'Correct load chart used for the specific machine make, model, and configuration. Capacity verified at the actual working radius with adequate safety margin.',
              },
              {
                title: 'Ground Conditions',
                desc: 'Ground bearing capacity assessed for the operating position. Outrigger and stabiliser loads calculated. Load-spreading measures specified where required.',
              },
              {
                title: 'Rigging Arrangement',
                desc: 'Sling type, size, and configuration appropriate for the load. Sling angles checked. Sling capacities adequate at the working angle. Thorough examination certificates current.',
              },
              {
                title: 'Site-Specific Hazards',
                desc: 'Overhead hazards, underground services, adjacent structures, exclusion zones, pedestrian and vehicle movements, weather limitations all identified and addressed.',
              },
              {
                title: 'Regulatory Compliance',
                desc: 'Plan meets LOLER Regulation 8 requirements. Prepared by a demonstrably competent person. BS 7121 principles applied. Documentation complete and site-specific.',
              },
            ].map((item, i) => (
              <div key={i} className="p-5 bg-slate-900/50 rounded-lg border border-slate-800">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="section bg-slate-900/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Equipment Types We Review</h2>
          <p className="text-slate-400 mb-8 max-w-3xl">
            We review lift plans for all types of lifting equipment commonly used on UK construction sites. 
            Each equipment type has its own specific technical considerations, and our reviews are tailored accordingly.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl">
            {[
              {
                title: 'Excavator Lift Plans',
                desc: 'ISO 10567 capacity verification, duty chart checks, track configuration, and lifting mode confirmation.',
                link: '/services/excavator-lift-plans',
              },
              {
                title: 'Telehandler Lift Plans',
                desc: 'Stabiliser deployment, load chart for specific attachment, boom extension limits, and ground conditions.',
                link: '/services/telehandler-lift-plans',
              },
              {
                title: 'Lorry Loader / HIAB Plans',
                desc: 'Stabiliser reaction forces, vehicle positioning, multiple delivery point assessments, and operator visibility.',
                link: '/services/lorry-loader-lift-plans',
              },
              {
                title: 'Mobile Crane Lift Plans',
                desc: 'Configuration-specific load charts, counterweight, boom length, outrigger extension, and ground bearing pressures.',
                link: '/services/mobile-crane-lift-plans',
              },
              {
                title: 'Tower Crane Lift Plans',
                desc: 'Free-standing and tied configurations, overlapping jib zones, foundation loads, and climb sequence planning.',
                link: '/services/tower-crane',
              },
              {
                title: 'Steel Erection Plans',
                desc: 'Fabrication drawing review, erection sequence, temporary stability, and connection methodology.',
                link: '/services/steel-erection',
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="p-5 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-amber-500/30 transition-colors group"
              >
                <h3 className="text-white font-semibold mb-2 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Review Process */}
      <section id="review-process" className="section">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Our Review Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl">
            {[
              {
                step: '01',
                title: 'Submit the Plan',
                desc: 'Send us the lift plan by email along with any supporting documentation — load charts, site drawings, thorough examination certificates.',
              },
              {
                step: '02',
                title: 'Technical Review',
                desc: 'We conduct a detailed technical review, assessing every element of the plan against LOLER, BS 7121, and industry best practice.',
              },
              {
                step: '03',
                title: 'Written Assessment',
                desc: 'You receive a clear written assessment — approved, approved with observations, or not approved with specific reasons and recommendations.',
              },
              {
                step: '04',
                title: 'Resolution Support',
                desc: 'If the plan requires amendment, we provide specific guidance on what needs to change and can review the revised plan to confirm compliance.',
              },
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-4xl font-bold text-amber-500/20 mb-3">{item.step}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Deficiencies */}
      <section className="section bg-slate-900/30">
        <div className="container-custom">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertIcon className="w-7 h-7 text-amber-500" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Common Deficiencies We Find</h2>
            </div>
            <p className="text-slate-400 mb-8">
              After reviewing thousands of lift plans over 35 years, certain deficiencies appear repeatedly. 
              These are not minor formatting issues — they are errors that could directly affect the safety 
              of the lifting operation.
            </p>

            <div className="space-y-4">
              {[
                {
                  title: 'Incorrect load chart configuration',
                  desc: 'The plan shows capacity for a machine configuration that does not match what will actually be on site. Different boom lengths, counterweight options, or outrigger extensions produce entirely different load charts. Using the wrong chart means the capacity figures in the plan are meaningless.',
                },
                {
                  title: 'Load weight inaccuracies',
                  desc: 'Estimated weights instead of verified weights. Rigging and lifting accessories not included in the total suspended load. On lifts operating at higher duty percentages, these omissions can mean the difference between a safe lift and an overloaded machine.',
                },
                {
                  title: 'No ground bearing assessment',
                  desc: 'The plan assumes firm, level ground without any assessment of actual conditions. Construction sites are rarely firm and level — made-up ground, backfilled trenches, underground drainage, and variable soil conditions are the norm, not the exception.',
                },
                {
                  title: 'Generic plans reused across sites',
                  desc: 'The same lift plan submitted for multiple sites with only the project name changed. No reference to the actual site layout, specific overhead or underground hazards, access constraints, or the particular equipment being used on that project.',
                },
                {
                  title: 'Inadequate consideration of the landing',
                  desc: 'Plans that detail how the load will be picked up but give minimal attention to how it will be landed, positioned, and released. The landing phase is often the most hazardous part of the operation, particularly in congested areas or at height.',
                },
                {
                  title: 'Missing or expired documentation',
                  desc: 'Thorough examination certificates not provided, expired, or not matching the actual equipment identified in the plan. A direct breach of LOLER Regulation 9 that leaves the operation exposed.',
                },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-slate-900/50 rounded-lg border border-slate-800">
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Review vs Checking - Differentiation / Internal Link */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Lift Plan Review vs Lift Plan Checking
            </h2>
            <div className="prose prose-invert prose-slate max-w-none">
              <p className="text-slate-400 mb-4">
                In practice, the terms "lift plan review" and "lift plan checking" are used interchangeably 
                across the UK construction industry. Both refer to the independent assessment of a lift plan 
                by a qualified person to confirm it is technically sound, LOLER compliant, and safe to execute.
              </p>
              <p className="text-slate-400 mb-4">
                At RMT Solutions, we provide both services. Our{' '}
                <Link href="/services/lift-plan-checking" className="text-amber-500 hover:text-amber-400 underline">
                  lift plan checking service
                </Link>{' '}
                is typically engaged by principal contractors who need every subcontractor lift plan 
                reviewed before work begins on site. Our lift plan review service covers the same technical 
                assessment and is available to any contractor — whether you are a tier 1 principal contractor, 
                a subcontractor preparing plans for submission, or a project manager who needs assurance 
                that your lifting operations are properly planned.
              </p>
              <p className="text-slate-400 mb-6">
                The assessment is the same. Every plan is reviewed line by line against LOLER requirements, 
                BS 7121 guidance, and the practical realities of the lifting operation described. The outcome 
                is a clear written assessment that either confirms the plan is compliant or identifies exactly 
                what needs to change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="section bg-slate-900/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Engagement Options</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">Ad-Hoc Review</h3>
              <p className="text-slate-400 mb-4">
                Submit individual lift plans as and when required. Each plan is reviewed and returned 
                with a written assessment, typically within 24 hours.
              </p>
              <p className="text-slate-400 text-sm">
                Suitable for contractors who need occasional reviews, one-off projects, or subcontractors 
                who want their plans independently assessed before submission.
              </p>
            </div>

            <div className="card border-amber-500/20">
              <h3 className="text-xl font-semibold text-white mb-4">Retained Review Contract</h3>
              <p className="text-slate-400 mb-4">
                An ongoing arrangement where we review all lift plans for the duration of your project. 
                Fixed monthly fee covering unlimited reviews with priority turnaround.
              </p>
              <p className="text-slate-400 text-sm">
                Suitable for principal contractors managing multiple subcontractors across one or more 
                sites, or any project with a high volume of lifting operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="section">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Qualifications & Experience</h2>
            <p className="text-slate-400 mb-6">
              All lift plan reviews are carried out by Ricky Marsh, Director of RMT Solutions Ltd. 
              Every review is conducted by someone who has both the qualifications and the practical 
              experience to assess whether a lift plan will work safely on site — not just whether it 
              meets a paperwork standard.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'CPCS Appointed Person (A61)',
                '35+ years construction industry experience',
                'NEBOSH National Diploma',
                'Graduate IOSH',
                'Thousands of lift plans reviewed',
                'Experience across all equipment types',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                  <CheckIcon className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section for SEO */}
      <section className="section bg-slate-900/30">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {[
                {
                  q: 'What is a lift plan review?',
                  a: 'A lift plan review is an independent assessment of a lift plan by a qualified person — typically a CPCS Appointed Person — to confirm that the plan is technically sound, compliant with LOLER and BS 7121, and safe to execute. The reviewer checks every element of the plan including load data, equipment capacity, rigging arrangement, ground conditions, and site-specific hazards.',
                },
                {
                  q: 'Is a lift plan review a legal requirement?',
                  a: 'LOLER requires that every lifting operation is properly planned by a competent person. While the regulations do not specifically mandate an independent review, principal contractors have a duty under CDM 2015 to ensure that subcontractor work on their site is safe and compliant. An independent lift plan review is the most practical way to discharge that duty for lifting operations.',
                },
                {
                  q: 'How quickly can you review a lift plan?',
                  a: 'Most lift plans are reviewed and returned within 24 hours of receipt. For retained contract clients, priority turnaround is available where required. Complex operations involving tandem lifts, multiple crane configurations, or detailed structural assessments may require additional time.',
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
              ].map((item, i) => (
                <div key={i} className="p-5 bg-slate-900/50 rounded-lg border border-slate-800">
                  <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                  <p className="text-slate-400 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is a lift plan review?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A lift plan review is an independent assessment of a lift plan by a qualified person — typically a CPCS Appointed Person — to confirm that the plan is technically sound, compliant with LOLER and BS 7121, and safe to execute."
                }
              },
              {
                "@type": "Question",
                "name": "Is a lift plan review a legal requirement?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "LOLER requires that every lifting operation is properly planned by a competent person. While the regulations do not specifically mandate an independent review, principal contractors have a duty under CDM 2015 to ensure that subcontractor work on their site is safe and compliant."
                }
              },
              {
                "@type": "Question",
                "name": "How quickly can you review a lift plan?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most lift plans are reviewed and returned within 24 hours of receipt. For retained contract clients, priority turnaround is available where required."
                }
              },
              {
                "@type": "Question",
                "name": "What types of lift plan do you review?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We review lift plans for all types of lifting equipment used in UK construction — excavators, telehandlers, lorry loaders, mobile cranes, tower cranes, and overhead lifting equipment."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if a plan fails the review?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You receive a clear written assessment explaining exactly what is deficient and what needs to change. We can then review the amended plan to confirm the issues have been addressed."
                }
              },
              {
                "@type": "Question",
                "name": "Can subcontractors use your review service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Subcontractors who write their own lift plans can have them independently reviewed before submission to the principal contractor."
                }
              }
            ]
          })
        }}
      />

      {/* CTA */}
      <section className="section">
        <div className="container-custom">
          <div className="card border-amber-500/20 max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Need Lift Plans Reviewed?
            </h2>
            <p className="text-slate-400 mb-6 max-w-xl mx-auto">
              Get in touch to discuss your requirements. Whether you need a single lift plan reviewed 
              or ongoing review support for a major project, we provide fast, thorough, independent assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Discuss Your Requirements
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <a href="mailto:ricky@rmtsolutions.co.uk" className="btn-secondary">
                Email Us
              </a>
            </div>
            <p className="text-slate-500 text-sm mt-4">
              Based in Warrington, Cheshire · Serving contractors across the UK
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
