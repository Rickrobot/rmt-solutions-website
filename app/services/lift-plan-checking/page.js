import Link from 'next/link';

export const metadata = {
  title: 'Lift Plan Checking Service | Independent AP Review | RMT Solutions',
  description: 'Independent lift plan checking service for tier 1 contractors. CPCS Appointed Person review of subcontractor lift plans to ensure LOLER compliance before work begins. Fast turnaround, thorough review.',
  openGraph: {
    title: 'Lift Plan Checking Service | Independent AP Review | RMT Solutions',
    description: 'Independent lift plan checking service for tier 1 contractors. CPCS Appointed Person review of subcontractor lift plans for LOLER compliance.',
    url: 'https://www.rmtsafetysolutions.com/services/lift-plan-checking',
  },
};

export default function LiftPlanChecking() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern"></div>
          <div className="absolute inset-0 grid-bg"></div>
        </div>
        <div className="hero-overlay absolute inset-0"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400 transition">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gray-500">Lift Plan Checking</span>
          </nav>

          <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6">
            For Tier 1 Contractors
          </span>

          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Lift Plan Checking Service
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mb-8">
            Independent Appointed Person review of lift plans submitted by subcontractors. Ensure every lifting operation on your site is LOLER compliant before work begins. Fast turnaround from a CPCS A61 qualified professional.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="btn-primary inline-block">
              Discuss Your Requirements
            </Link>
          </div>
        </div>
      </section>

      {/* Why You Need This */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">The Problem</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4">
              Why Subcontractor Lift Plans Need Checking
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="prose-custom">
              <p className="text-gray-300 text-lg mb-6">
                As a principal contractor, you are legally responsible for ensuring that all lifting operations on your site are properly planned under LOLER. When subcontractors submit lift plans, you need confidence that those plans are compliant, technically sound, and safe to execute.
              </p>
              <p className="text-gray-300 text-lg mb-6">
                The reality is that many subcontractor lift plans contain errors. After reviewing over 1,000 lift plans, the most common problems include incorrect load chart references, missing ground bearing assessments, inadequate rigging specifications, and plans that are generic templates rather than site-specific documents.
              </p>
              <p className="text-gray-300 text-lg">
                An independent lift plan check by a qualified Appointed Person catches these issues before they become problems on site. It protects your workers, demonstrates due diligence, and provides the audit trail that HSE inspectors expect to see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Check */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Our Review</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4">
              What We Check in Every Lift Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-white font-display text-xl font-bold mb-4">Load Information</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Load weights verified against manufacturer data or calculation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Centre of gravity correctly identified for asymmetric loads</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Weight of all lifting accessories included in total load</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-white font-display text-xl font-bold mb-4">Equipment &amp; Capacity</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Correct load chart used for the specific machine configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Capacity checked at actual working radius, not minimum radius</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Equipment suitable for the operation with adequate safety margin</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-white font-display text-xl font-bold mb-4">Ground &amp; Stability</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Ground bearing capacity assessed for operating position</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Outrigger/stabiliser loads calculated and spreading specified</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Proximity to excavations and soft ground considered</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-white font-display text-xl font-bold mb-4">Hazards &amp; Safety</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Overhead hazards identified with correct clearance distances</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Exclusion zones defined and appropriate for the operation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Communication, supervision, and emergency procedures adequate</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-white font-display text-xl font-bold mb-4">Rigging &amp; Accessories</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Sling capacities adequate for load weight and angle</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Rigging arrangement suitable for load geometry</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Thorough examination certificates current for all accessories</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-white font-display text-xl font-bold mb-4">Documentation &amp; Compliance</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Plan meets LOLER Regulation 8 requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Plan prepared by someone demonstrably competent</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  <span>Site-specific rather than generic template</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Process</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4">
              How Our Checking Service Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-amber-400 font-display text-5xl font-bold mb-4">01</div>
              <h3 className="text-white font-display text-lg font-bold mb-2">Submit</h3>
              <p className="text-gray-400 text-sm">Subcontractor submits their lift plan to you. You forward it to us by email for independent review.</p>
            </div>
            <div className="text-center">
              <div className="text-amber-400 font-display text-5xl font-bold mb-4">02</div>
              <h3 className="text-white font-display text-lg font-bold mb-2">Review</h3>
              <p className="text-gray-400 text-sm">We conduct a thorough technical review against LOLER requirements, checking every element of the plan.</p>
            </div>
            <div className="text-center">
              <div className="text-amber-400 font-display text-5xl font-bold mb-4">03</div>
              <h3 className="text-white font-display text-lg font-bold mb-2">Report</h3>
              <p className="text-gray-400 text-sm">You receive a clear written assessment — approved, approved with comments, or rejected with specific reasons.</p>
            </div>
            <div className="text-center">
              <div className="text-amber-400 font-display text-5xl font-bold mb-4">04</div>
              <h3 className="text-white font-display text-lg font-bold mb-2">Resolve</h3>
              <p className="text-gray-400 text-sm">If issues are found, we work with you and the subcontractor to resolve them before the lift proceeds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues Found */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">What We Find</span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4">
                Common Issues We Catch
              </h2>
            </div>

            <div className="space-y-4">
              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex items-start gap-4">
                <svg className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <div>
                  <h3 className="text-white font-bold mb-1">Wrong load chart configuration</h3>
                  <p className="text-gray-400 text-sm">Capacity shown for stabilisers fully deployed when the site only allows partial deployment. Machine appears to have capacity when it actually does not.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex items-start gap-4">
                <svg className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <div>
                  <h3 className="text-white font-bold mb-1">No ground bearing assessment</h3>
                  <p className="text-gray-400 text-sm">Plan assumes firm ground without any assessment. On construction sites with made-up ground, backfilled trenches, or underground services, this is a serious oversight.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex items-start gap-4">
                <svg className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <div>
                  <h3 className="text-white font-bold mb-1">Generic template not site-specific</h3>
                  <p className="text-gray-400 text-sm">Same lift plan used for every site with only the project name changed. No reference to actual site conditions, specific hazards, or the particular equipment being used.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex items-start gap-4">
                <svg className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <div>
                  <h3 className="text-white font-bold mb-1">Rigging weight not included in total load</h3>
                  <p className="text-gray-400 text-sm">Load weight stated but slings, shackles, and other rigging not added. On operations close to capacity, this omission can mean the machine is overloaded.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 flex items-start gap-4">
                <svg className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                <div>
                  <h3 className="text-white font-bold mb-1">Missing or expired thorough examination certificates</h3>
                  <p className="text-gray-400 text-sm">Lifting accessories referenced in the plan but no current thorough examination documentation provided. A direct breach of LOLER Regulation 9.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Options */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-amber-400 text-sm font-semibold tracking-wider uppercase">Options</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-4">
              How to Engage Our Checking Service
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8">
              <h3 className="text-amber-400 font-display text-xl font-bold mb-4">Ad-Hoc Checking</h3>
              <p className="text-gray-400 mb-4">Submit lift plans as and when they arrive. We review each one individually and return our assessment, typically within 24 hours.</p>
              <p className="text-gray-400 text-sm">Ideal for contractors who receive lift plans occasionally or need a one-off review for a specific project.</p>
            </div>

            <div className="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8">
              <h3 className="text-amber-400 font-display text-xl font-bold mb-4">Ongoing Contract</h3>
              <p className="text-gray-400 mb-4">A retained service where we review all lift plans submitted to your site for the duration of the project. Fixed monthly fee covering unlimited plan reviews.</p>
              <p className="text-gray-400 text-sm">Ideal for tier 1 contractors managing multiple subcontractors and high volumes of lift plans across one or more projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Lift Plans Checked?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Get in touch to discuss your requirements. Whether you need a single plan reviewed or ongoing checking for a major project, we provide fast, thorough, independent assessment.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary inline-block">
              Discuss Your Requirements
            </Link>
            <Link href="mailto:ricky@rmtsolutions.co.uk" className="text-amber-400 hover:text-amber-300 transition inline-flex items-center gap-2 px-6 py-3">
              Email Us
            </Link>
          </div>
          <p className="text-gray-500 text-sm mt-6">Based in Warrington, Cheshire • Serving contractors across the UK</p>
        </div>
      </section>
    </>
  );
}

