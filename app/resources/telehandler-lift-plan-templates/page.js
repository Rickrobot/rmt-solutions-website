import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'

export const metadata = {
  title: 'Free Telehandler Lift Plan Templates UK',
  description: 'Download free telehandler lift plan templates for fork-carried and underslung/suspended loads. LOLER compliant, from a CPCS Appointed Person.',
  keywords: 'telehandler lift plan template, telehandler lift plan template UK, telescopic handler lift plan template, telehandler lifting template free download, LOLER telehandler template',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/telehandler-lift-plan-templates',
  },
  openGraph: {
    title: 'Free Telehandler Lift Plan Templates UK | LOLER Compliant',
    description: 'Download free LOLER-compliant telehandler lift plan templates for suspended load and fork-carried operations. Prepared by a CPCS Appointed Person with 35+ years experience.',
    url: 'https://www.rmtsafetysolutions.com/resources/telehandler-lift-plan-templates',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do I need a lift plan for telehandler operations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Under LOLER 1998, every lifting operation must be properly planned by a competent person. This applies to telehandlers performing both suspended load lifts (using slings, chains, or lifting accessories) and fork-carried load operations where the load is elevated above ground level. The only exception is routine fork operations at low level, though even these benefit from documented planning.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a suspended load and fork-carried load telehandler lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A suspended load lift plan covers operations where loads are attached below the boom using slings, chains, shackles, or other lifting accessories — the telehandler is essentially being used as a crane. A fork-carried load lift plan covers operations where materials are carried on forks, brick grabs, or other carriage-mounted attachments. Each type has different capacity considerations, risk profiles, and regulatory requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use these templates for any telehandler make and model?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. These templates are designed to work with any make and model of telehandler including JCB, Manitou, Merlo, Bobcat, Caterpillar, Liebherr, and others. The templates include fields for recording machine-specific data such as make, model, serial number, SWL, boom configuration, and attachment details.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who should complete a telehandler lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under BS 7121 and LOLER 1998, lift plans should be prepared by a competent person — typically a CPCS Appointed Person (A61) for complex or higher-risk lifts. For routine operations using these templates, a competent site supervisor with appropriate training and experience may complete the plan, provided they understand the machine capabilities, load characteristics, and site-specific hazards.',
      },
    },
  ],
}

const downloadSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free Telehandler Lift Plan Templates',
  description: 'Download free LOLER-compliant telehandler lift plan templates for UK construction operations.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    telephone: '+447803808093',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warrington',
      addressRegion: 'Cheshire',
      addressCountry: 'GB',
    },
  },
}

export default function TelehandlerLiftPlanTemplates() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4">Free Download — LOLER Compliant Templates</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Telehandler Lift Plan Templates
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Two professionally prepared telehandler lift plan templates covering both suspended load
              and fork-carried load operations. Designed by a CPCS Appointed Person with 35+ years of
              construction industry experience. Ready to download and use on site. Need one written for
              you instead? Our{' '}
              <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                lift planning services
              </Link>{' '}
              start from £200 with 24-48 hour turnaround.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#templates" className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition">
                Download Templates
              </a>
              <Link href="/services/telehandler-lift-plans" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold transition border border-slate-700">
                Professional Lift Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Two Templates */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Why Two Separate Templates?</h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            Telehandlers are unique among lifting equipment because they perform two fundamentally different 
            types of lifting operation, each with distinct hazard profiles, capacity considerations, and 
            regulatory requirements. Using a single generic template for both operation types leads to 
            incomplete planning and missed hazards. These templates address that problem.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <div className="bg-amber-500/10 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Suspended Load Operations</h3>
              <p className="text-slate-300 mb-4">
                For when the telehandler is used as a crane — lifting loads with slings, chains, shackles, 
                and lifting accessories attached below the boom or jib. This is the higher-risk operation 
                type and requires detailed capacity verification at the specific radius and height.
              </p>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Lifting jib/hook attachment capacity verification
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Sling and lifting accessory assessment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Radius and height calculations at pick and place
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Exclusion zone planning for suspended loads
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Wind speed limitations and weather considerations
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <div className="bg-amber-500/10 text-amber-400 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Fork-Carried Load Operations</h3>
              <p className="text-slate-300 mb-4">
                For when materials are carried on forks, brick grabs, block clamps, or other 
                carriage-mounted attachments. While generally lower risk than suspended loads, these 
                operations still require proper planning — particularly for elevated loads, fork extensions, 
                and loads that change the centre of gravity.
              </p>
              <ul className="text-slate-400 space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Load centre distance calculations
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Fork extension derating factors
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Attachment capacity verification
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Travel with load assessment
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 mt-1">•</span>
                  Gradient and ground condition evaluation
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Download Templates Section */}
      <section id="templates" className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Download Your Templates</h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            Both templates are provided as editable Word documents (.docx) that you can customise with 
            your company details and use on any project. Each template includes a comprehensive lift plan, 
            integrated risk assessment, and method statement.
          </p>

          {/* Template 1: Underslung/Suspended */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-xl p-8 mb-8">
            <div className="md:flex md:items-start md:justify-between gap-8">
              <div className="flex-1 mb-6 md:mb-0">
                <div className="inline-block bg-amber-500/10 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Template 1 — Crane Duties
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Telehandler Lift Plan — Underslung / Suspended Load Operations
                </h3>
                <p className="text-slate-300 mb-4">
                  Comprehensive lift plan template for telehandler operations where loads are lifted using 
                  slings, chains, and lifting accessories attached below the boom. Covers all aspects of 
                  using a telehandler as a crane under LOLER 1998 and BS 7121.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-white font-medium mb-2">What&apos;s Included:</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>✓ Lift plan with machine details and configuration</li>
                      <li>✓ Load weight and lifting geometry calculations</li>
                      <li>✓ Lifting accessory schedule and verification</li>
                      <li>✓ Ground conditions and stabiliser assessment</li>
                      <li>✓ Hazard identification checklist</li>
                      <li>✓ Risk assessment with control measures</li>
                      <li>✓ Method statement and lift sequence</li>
                      <li>✓ Personnel roles and responsibilities</li>
                      <li>✓ Operator briefing record</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Suitable For:</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Lifting with hook/jib attachments</li>
                      <li>• Steel erection using telehandlers</li>
                      <li>• Precast concrete placement</li>
                      <li>• Plant and equipment positioning</li>
                      <li>• Pipe and ducting installation</li>
                      <li>• Any suspended load operation</li>
                    </ul>
                  </div>
                </div>
                <a
                  href="/downloads/telehandler-lift-plan-template-underslung.docx"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Suspended Load Template (.docx)
                </a>
              </div>
            </div>
          </div>

          {/* Template 2: Fork-Carried */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <div className="md:flex md:items-start md:justify-between gap-8">
              <div className="flex-1 mb-6 md:mb-0">
                <div className="inline-block bg-amber-500/10 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Template 2 — Fork / Attachment Operations
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Telehandler Lift Plan — Fork-Carried Load Operations
                </h3>
                <p className="text-slate-300 mb-4">
                  Comprehensive lift plan template for telehandler operations where materials are carried 
                  on forks or carriage-mounted attachments. Addresses the specific capacity, stability, 
                  and operational considerations unique to fork-carried loads at height.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-white font-medium mb-2">What&apos;s Included:</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>✓ Load chart verification for fork operations</li>
                      <li>✓ Load centre distance calculations</li>
                      <li>✓ Fork extension derating assessment</li>
                      <li>✓ Attachment compatibility verification</li>
                      <li>✓ Travel with load assessment form</li>
                      <li>✓ Ground and gradient evaluation</li>
                      <li>✓ Risk assessment with control measures</li>
                      <li>✓ Method statement and sequence of operations</li>
                      <li>✓ Pre-operation inspection checklist</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Suitable For:</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Palletised material placement at height</li>
                      <li>• Brick and block distribution</li>
                      <li>• Roof material delivery</li>
                      <li>• Scaffold material handling</li>
                      <li>• Plant and equipment loading/unloading</li>
                      <li>• Any fork-carried elevated load</li>
                    </ul>
                  </div>
                </div>
                <a
                  href="/downloads/telehandler-lift-plan-template-fork-carried.docx"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Fork-Carried Load Template (.docx)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Each Template Covers */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">What These Templates Cover</h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            Both templates follow the same systematic structure but with content tailored to the specific 
            operation type. Each template provides a complete documented planning package that satisfies 
            LOLER 1998 requirements.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Lift Plan',
                desc: 'Machine specification and configuration, load details and weights, lifting geometry (radius, height, boom angle), capacity verification against manufacturer load charts, ground conditions, stabiliser deployment, and environmental considerations.',
              },
              {
                title: 'Risk Assessment',
                desc: 'Structured hazard identification covering proximity hazards (power lines, excavations, structures), load hazards (instability, sharp edges, centre of gravity), site hazards (ground conditions, gradients, access), and operational hazards (weather, visibility, communications).',
              },
              {
                title: 'Method Statement',
                desc: 'Step-by-step lift sequence from machine setup through load attachment, lifting, travel (where applicable), placement, and load release. Includes personnel positions, communication protocols, emergency procedures, and post-operation actions.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When to Use Each Template */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">When to Use Each Template</h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            Choosing the correct template depends on how the load is attached to the telehandler. If in 
            doubt, the suspended load template provides more comprehensive coverage and is the safer choice.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 px-4 text-amber-400 font-semibold">Operation</th>
                  <th className="py-4 px-4 text-amber-400 font-semibold">Template</th>
                  <th className="py-4 px-4 text-amber-400 font-semibold">Key Consideration</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 text-sm">
                {[
                  ['Lifting with hook/jib below boom', 'Suspended Load', 'Full crane duty — capacity varies significantly with radius and height'],
                  ['Lifting with slings and shackles', 'Suspended Load', 'Accessory derating, sling angles, and D:d ratio must be assessed'],
                  ['Personnel lifting (MEWP basket)', 'Suspended Load', 'Additional 2:1 safety factor required, specific regulatory requirements'],
                  ['Palletised loads on standard forks', 'Fork-Carried', 'Load centre distance is critical — affects rated capacity'],
                  ['Materials on fork extensions', 'Fork-Carried', 'Fork extensions reduce capacity — derating must be calculated'],
                  ['Brick grabs / block clamps', 'Fork-Carried', 'Attachment weight reduces net capacity for the load'],
                  ['Placing loads at height on forks', 'Fork-Carried', 'Boom extension reduces capacity — verify against load chart'],
                  ['Travelling with elevated load', 'Fork-Carried', 'Route gradient, surface conditions, and speed restrictions apply'],
                ].map(([operation, template, consideration], i) => (
                  <tr key={i} className="border-b border-slate-800 hover:bg-slate-900/50">
                    <td className="py-3 px-4 text-white">{operation}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                        template === 'Suspended Load' 
                          ? 'bg-red-500/10 text-red-400' 
                          : 'bg-blue-500/10 text-blue-400'
                      }`}>
                        {template}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-400">{consideration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Important Notes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Templates Are a Starting Point</h3>
              <p className="text-slate-300 text-sm">
                These templates provide a professional framework for documenting telehandler lift plans. 
                However, every lifting operation is unique. The person completing the template must be 
                competent to assess the specific conditions, verify the calculations, and determine whether
                additional planning is required. For complex lifts, tandem operations, or high-risk
                environments, consider using our{' '}
                <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                  professional lift planning services
                </Link>.
              </p>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Regulatory Compliance</h3>
              <p className="text-slate-300 text-sm">
                These templates are designed to satisfy the planning requirements of LOLER 1998 
                (Lifting Operations and Lifting Equipment Regulations) and align with BS 7121 
                (Code of Practice for the Safe Use of Cranes). However, compliance ultimately depends on 
                the competence of the person completing the plan, the accuracy of the information entered, 
                and the adequacy of the control measures specified for the specific operation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="border-b border-slate-800 pb-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.name}</h3>
                <p className="text-slate-400">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quote form — conversion fix (Jun 2026): this page takes more
          search traffic than any service page but previously had no enquiry
          form, so visitors had to click through to /contact. */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName="Telehandler Lift Plan (from templates page)"
            heading="Want this written for your site instead? Plans from £200, 24-48h turnaround"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Professional Telehandler Lift Plan?</h2>
          <p className="text-slate-800 mb-3 max-w-2xl mx-auto">
            These templates work well for routine operations. For complex lifts, near-capacity operations, 
            tandem lifting, or when you need a qualified Appointed Person to prepare or review your plan — 
            contact us for a professional telehandler lift planning service.
          </p>
          <p className="text-slate-700 mb-8">24-hour turnaround available.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition">
              Request a Quote
            </Link>
            <a href="tel:+447803808093" className="bg-white/20 hover:bg-white/30 text-slate-900 px-8 py-3 rounded-xl font-semibold transition">
              Call: 07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Resources & Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/resources/lift-plan-templates', title: 'Generic Lift Plan Template' },
              { href: '/resources/excavator-lift-plan-templates', title: 'Excavator Lift Plan Templates' },
              { href: '/services/telehandler-lift-plans', title: 'Telehandler Lift Plans Service' },
              { href: '/blog/what-is-a-lift-plan', title: 'What is a Lift Plan?' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="bg-slate-900 border border-slate-800 hover:border-amber-400 p-4 rounded-xl text-white font-medium transition"
              >
                {link.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
