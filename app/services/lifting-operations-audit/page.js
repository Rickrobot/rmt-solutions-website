
import Image from 'next/image'
import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Lifting Operations Audit | LOLER Compliance',
  description: 'Independent lifting operations audit by a CPCS Appointed Person. Assess LOLER compliance and lifting equipment management. Detailed reports.',
  keywords: 'lifting operations audit, LOLER compliance audit, crane audit, lifting equipment audit, construction site lifting audit',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/lifting-operations-audit',
  },
  openGraph: {
    title: 'Lifting Operations Audit | LOLER Compliance',
    description: 'Independent lifting operations audit by a CPCS Appointed Person. Assess LOLER compliance and lifting equipment management.',
    url: 'https://www.rmtsafetysolutions.com/services/lifting-operations-audit',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lifting Operations Audit',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    telephone: '+447803808093',
  },
  description: 'Independent lifting operations audit assessing LOLER compliance, lift planning quality, equipment management, and working practices.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      "name": "What is a lifting operations audit?",
      "acceptedAnswer": { "@type": "Answer", "text": "A lifting operations audit is a systematic compliance review of how lifting is being managed on a construction site. It examines the lift plans in use, the competence of personnel, the condition and certification of equipment and accessories, the effectiveness of supervision, and the alignment between paperwork and what is actually happening on the ground. It produces a written report with findings, recommendations, and a remedial action plan." }
    },
    {
      "@type": "Question",
      "name": "How often should lifting operations be audited?",
      "acceptedAnswer": { "@type": "Answer", "text": "BS 7121 recommends regular planned audits of lifting operations throughout the project lifetime. Industry best practice on major construction sites is an 8-weekly audit cycle, with additional audits triggered by significant changes — new operators, new lift types, new adjacent activities, or following any incident or near miss." }
    },
    {
      "@type": "Question",
      "name": "Who can carry out a lifting operations audit?",
      "acceptedAnswer": { "@type": "Answer", "text": "Lifting operations audits should be carried out by a competent person — typically a CPCS Appointed Person (A61) with current site experience and an understanding of BS 7121, LOLER 1998, and the project's specific lifting risks. Independent third-party auditors are often preferred because they are not subject to the project's commercial pressures." }
    },
    {
      "@type": "Question",
      "name": "What gets checked during a lifting operations audit?",
      "acceptedAnswer": { "@type": "Answer", "text": "A typical audit covers: lift plans in use against actual operations, thorough examination certificates for all equipment and accessories, operator and slinger competencies, briefings and toolbox talk records, supervision arrangements, near-miss and incident records, ground conditions, exclusion zones, communications, weather monitoring, and the Lifting Coordinator's records of routine lifts." }
    }
  ],
}


export default function LiftingOperationsAuditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/loler-compliance-regulations-standards.webp"
            alt="LOLER compliance requirements standards and regulations - Lifting operations audit UK"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-blue-400 font-medium mb-4">CPCS Appointed Person A61</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lifting Operations Audit</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Independent assessment of your lifting operations, procedures, and compliance. We evaluate how well 
            your organisation manages lifting activities against LOLER, BS 7121, and industry best practice.
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

      {/* Why Audit */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Audit Your Lifting Operations?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Lifting operations remain one of the highest-risk activities in construction. The consequences of 
            failure are severe - serious injuries, fatalities, significant equipment damage, and prosecution.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Objective Assessment', desc: 'An external expert view of your lifting arrangements, free from internal assumptions and familiarity blindness.' },
              { title: 'Gap Identification', desc: 'Systematic identification of weaknesses in your systems before they result in incidents.' },
              { title: 'Benchmarking', desc: 'Comparison against regulatory requirements, industry standards, and best practice.' },
              { title: 'Improvement Roadmap', desc: 'Prioritised recommendations for strengthening your lifting operations.' },
              { title: 'Due Diligence Evidence', desc: 'Documented evidence of proactive safety management - valuable for client prequalification and any regulatory scrutiny.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Assess */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What We Assess</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Governance & Management',
                items: ['Lifting operations policy and procedures', 'Roles and responsibilities', 'Competence arrangements', 'Supervision structures'],
              },
              {
                title: 'Lift Planning',
                items: ['Lift plan quality and completeness', 'Appointed Person arrangements', 'Plan checking and approval processes', 'Documentation management'],
              },
              {
                title: 'Equipment Management',
                items: ['Lifting equipment register', 'Thorough examination arrangements', 'Maintenance and inspection regimes', 'Defect reporting and rectification'],
              },
              {
                title: 'Lifting Accessories',
                items: ['Accessories inventory and control', 'Examination and certification', 'Storage and maintenance', 'Issue and return procedures'],
              },
              {
                title: 'Operational Practices',
                items: ['Pre-use checks', 'Briefings and communication', 'Slinger/signaller deployment', 'Exclusion zones and barriers'],
              },
              {
                title: 'Training & Competence',
                items: ['Operator qualifications', 'Appointed Person competence', 'Slinger/signaller certification', 'Ongoing training and development'],
              },
            ].map((section) => (
              <div key={section.title} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-2 text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-blue-600 mt-0.5">•</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Audit Types</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Desktop Audit</h3>
              <p className="text-slate-600">
                Review of your documented procedures, lift plans, certificates, and records. Identifies gaps 
                in your management system.
              </p>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Site Audit</h3>
              <p className="text-slate-600">
                Physical inspection of lifting operations, equipment condition, and working practices. 
                Verifies that documented procedures are being followed.
              </p>
            </div>

            <div className="border-2 border-blue-500 p-8 rounded-xl bg-blue-50">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Combined Audit</h3>
              <p className="text-slate-600">
                Both desktop and site elements for comprehensive assessment. Our recommended approach for 
                maximum insight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">The Audit Process</h2>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Scoping', desc: 'We discuss your operations and agree the audit scope - sites, equipment, procedures, focus areas.' },
              { step: '2', title: 'Document Review', desc: 'We review procedures, sample lift plans, equipment registers, certificates, and training records.' },
              { step: '3', title: 'Site Inspection', desc: 'We observe active lifting operations, equipment condition, and working practices.' },
              { step: '4', title: 'Report', desc: 'Comprehensive report with executive summary, detailed findings, and prioritised recommendations.' },
              { step: '5', title: 'Debrief', desc: 'Discussion of findings and recommendations with your team.' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">What We Look For</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Lift Planning Quality</h3>
              <p className="text-slate-600 mb-4">We assess whether your lift plans:</p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>• Address all LOLER requirements</li>
                <li>• Contain accurate calculations</li>
                <li>• Include adequate risk assessment</li>
                <li>• Provide workable method statements</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 font-medium mb-2">Common findings:</p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Lift plans not site-specific</li>
                  <li>• Calculations not verified</li>
                  <li>• Inadequate ground bearing assessment</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Equipment Management</h3>
              <p className="text-slate-600 mb-4">We verify:</p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>• All lifting equipment is registered</li>
                <li>• Thorough examinations are current</li>
                <li>• Defects are reported and actioned</li>
                <li>• Accessories are properly controlled</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 font-medium mb-2">Common findings:</p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Equipment used without current examination</li>
                  <li>• Defect reports not actioned</li>
                  <li>• Certificates not available on site</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Competence Arrangements</h3>
              <p className="text-slate-600 mb-4">We check:</p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>• Operators hold appropriate qualifications</li>
                <li>• Appointed Persons meet BS 7121 requirements</li>
                <li>• Slingers/signallers are certified</li>
                <li>• Training is current and documented</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 font-medium mb-2">Common findings:</p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Expired or inappropriate qualifications</li>
                  <li>• No evidence of AP competence</li>
                  <li>• Training records incomplete</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Working Practices</h3>
              <p className="text-slate-600 mb-4">We observe:</p>
              <ul className="text-slate-600 space-y-2 mb-6">
                <li>• Pre-lift briefings conducted</li>
                <li>• Lift plans communicated to lifting team</li>
                <li>• Exclusion zones established</li>
                <li>• Supervision adequate</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 font-medium mb-2">Common findings:</p>
                <ul className="text-red-700 text-sm space-y-1">
                  <li>• Briefings rushed or skipped</li>
                  <li>• Exclusion zones not maintained</li>
                  <li>• Supervision absent or inadequate</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Who Needs a Lifting Operations Audit?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Principal Contractors', desc: 'Verify that your lifting operations management meets regulatory requirements and client expectations.' },
              { title: 'Subcontractors', desc: 'Demonstrate to clients that your lifting arrangements are robust and compliant.' },
              { title: 'Crane Hire Companies', desc: 'Assure customers of your operational standards and identify improvement opportunities.' },
              { title: 'Following Incidents', desc: 'Understand what went wrong and how to prevent recurrence.' },
              { title: 'Seeking Accreditation', desc: 'Evidence robust lifting arrangements for ISO, contractor prequalification, or supply chain membership.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
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
                q: 'How long does an audit take?',
                a: "It depends on scope. A single site desktop audit might take a day. A comprehensive multi-site audit with site visits could take a week. We'll agree timescales during scoping.",
              },
              {
                q: 'How disruptive is a site audit?',
                a: 'We observe normal operations without interfering. We may ask questions of supervisors and operators, but aim to minimise impact on productivity.',
              },
              {
                q: 'What if you find serious issues?',
                a: "We'll discuss significant concerns with you immediately rather than waiting for the final report. Safety issues that pose imminent risk should be addressed straight away.",
              },
              {
                q: 'How often should we be audited?',
                a: 'Annual audits are common for organisations with significant lifting operations. More frequent auditing may be appropriate for high-risk projects or following incidents.',
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
          <InlineQuoteForm serviceName="Lifting Operations Audit" heading="Get a quote for lifting operations audit" />
        </div>
      </section>

      <RelatedServices currentSlug="lifting-operations-audit" />

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Started</h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us to discuss your lifting operations audit requirements.
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
              { href: '/services/lift-plan-checking', title: 'Lift Plan Checking' },
              { href: '/services/tower-crane', title: 'Tower Crane Contracts' },
              { href: '/services/excavator-lift-plans', title: 'Excavator Lift Plans' },
              { href: '/services/mobile-crane-lift-plans', title: 'Mobile Crane Lift Plans' },
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
