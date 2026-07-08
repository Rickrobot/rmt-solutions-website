import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'

// Generic lift plan template page (SEO round 3, Jun 2026).
//
// Why this page exists: Search Console shows ~900+ impressions/quarter of
// GENERIC template queries — "lift plan template" (pos 5.8), "lifting plan
// template" (pos 8.1), "lift plan template uk", "lifting plan template
// word", "generic/basic lift plan template", "lifting plan template hse" —
// all currently landing on the telehandler page because no generic page
// existed. This page targets the generic cluster head-on and routes
// equipment-specific intent to the four specific template pages.

export const metadata = {
  title: 'Free Lift Plan Template UK | Word Download',
  description:
    'Download a free generic lift plan template (Word) for UK lifting operations — aligned with LOLER 1998 and BS 7121, from a CPCS Appointed Person. All equipment.',
  keywords:
    'lift plan template, lifting plan template, lift plan template uk, lifting plan template word, generic lift plan template, basic lift plan template, crane lift plan template, free lift plan template download, lift plan template hse',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/lift-plan-templates',
  },
  openGraph: {
    title: 'Free Lift Plan Template UK | LOLER & BS 7121 Aligned',
    description:
      'Free generic lift plan template as an editable Word document. 15-section format covering categorisation, capacity verification, ground conditions and sign-off. Prepared by a CPCS Appointed Person.',
    url: 'https://www.rmtsafetysolutions.com/resources/lift-plan-templates',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is there an official HSE lift plan template?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The HSE does not publish an official lift plan template. The legal requirement comes from LOLER 1998 Regulation 8, which requires every lifting operation to be properly planned by a competent person — the format is not prescribed. In practice the industry works to BS 7121 (Code of Practice for the Safe Use of Cranes), and this free template follows that structure: lift categorisation, load and capacity verification, ground conditions, proximity hazards, personnel competencies, and a briefed sign-off record.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should a lift plan template include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A thorough lift plan template covers: lift categorisation (Basic, Standard or Complex under BS 7121), the supporting risk assessment and method statement references, the lifting appliance and its thorough examination status, load details including gross load with accessories, a lifting accessories schedule, radius and capacity verification with percentage utilisation, ground conditions, proximity hazards and exclusion zones, personnel and competencies, communications, weather limits, the step-by-step lifting procedure, emergency arrangements, change management, and a briefing record signed by everyone involved.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a generic lift plan template for any equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A generic template works for straightforward, routine lifts with any lifting appliance — crane, excavator, telehandler or lorry loader — because the planning logic (load, capacity at radius, ground, hazards, personnel) is the same. However, each equipment type has specific considerations a generic form cannot fully capture, such as load chart configuration for telehandlers or outrigger loadings for lorry loaders. For those, use our free equipment-specific templates, and for complex or near-capacity lifts have the plan written by a CPCS Appointed Person.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can complete a lift plan template?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under LOLER 1998 the plan must be prepared by a competent person — someone with adequate training, knowledge and practical experience of the equipment and the operation. For Basic lifts a competent site supervisor may complete the template. For Standard and Complex lifts, UK industry practice (and most principal contractors) require a CPCS A61 Appointed Person to prepare or approve the plan.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is a generic lift plan not enough?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A generic plan is not sufficient when the lift is Standard or Complex under BS 7121: lifts near capacity (above roughly 80% utilisation), tandem lifts, personnel lifting, loads over occupied areas or live infrastructure, poor ground, restricted sites, or unusual loads with offset centres of gravity. Those operations need a site-specific lift plan prepared by an Appointed Person — typically delivered in 24 to 48 hours from £200.',
      },
    },
  ],
}

const documentSchema = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  name: 'Generic Lift Plan Template (UK)',
  description:
    'Free editable Word lift plan template aligned with LOLER 1998 and BS 7121-1:2016. Fifteen sections from lift categorisation to briefing record.',
  url: 'https://www.rmtsafetysolutions.com/resources/lift-plan-templates',
  encodingFormat:
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
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

const equipmentTemplates = [
  {
    href: '/resources/mobile-crane-lift-plan-templates',
    title: 'Mobile Crane Lift Plan Template',
    desc: 'Outrigger loading, ground bearing, duty chart verification and slew clearances per BS 7121-3.',
  },
  {
    href: '/resources/telehandler-lift-plan-templates',
    title: 'Telehandler Lift Plan Templates',
    desc: 'Suspended load and fork-carried operations, with load chart configuration fields.',
  },
  {
    href: '/resources/excavator-lift-plan-templates',
    title: 'Excavator Lift Plan Template',
    desc: '180° and 360° machines, ISO 10567 capacity verification and RCI checks.',
  },
  {
    href: '/resources/lorry-loader-lift-plan-templates',
    title: 'Lorry Loader (HIAB) Lift Plan Template',
    desc: 'BS 7121-4 and ALLMI-aligned, with outrigger loading and delivery zone planning.',
  },
  {
    href: '/resources/overhead-gantry-crane-lift-plan-templates',
    title: 'Overhead & Gantry Crane Lift Plan Template',
    desc: 'BS 7121-7 EOT, gantry and jib cranes — travel routes and loads-over-people fields.',
  },
]

export default function LiftPlanTemplates() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(documentSchema) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4">Free Download — Editable Word Document</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Free Lift Plan Template (UK)
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              A generic lift plan template (also called a lifting plan template) for UK lifting
              operations — aligned with LOLER 1998 and BS 7121, and usable with any lifting
              appliance. Prepared by a CPCS Appointed Person with 35+ years of construction
              experience. Need one written for you instead? Our{' '}
              <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                lift plan writing service
              </Link>{' '}
              starts from £200 with 24-48 hour turnaround.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#download" className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition">
                Download Template
              </a>
              <Link href="/services/lift-plans" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold transition border border-slate-700">
                Professional Lift Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* No official HSE template — the answer searchers are looking for */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Is There a Standard UK Lift Plan Template?
          </h2>
          <div className="max-w-3xl space-y-4 text-slate-300">
            <p>
              No — the HSE does not publish an official lift plan template. The legal duty comes
              from <strong>LOLER 1998 Regulation 8</strong>: every lifting operation must be
              properly planned by a competent person, appropriately supervised, and carried out
              safely. The regulation tells you what planning must achieve, not what the document
              looks like.
            </p>
            <p>
              In practice, the UK industry works to <Link href="/blog/what-is-bs-7121-complete-guide" className="text-amber-400 hover:text-amber-300 underline">BS 7121</Link>,
              the Code of Practice for the Safe Use of Cranes, which categorises every lift as
              Basic, Standard or Complex and scales the planning detail accordingly. This free
              template follows that structure, so a completed copy stands up to scrutiny from a
              principal contractor&apos;s Appointed Person. If you are new to the topic, start with
              our guides to{' '}
              <Link href="/blog/what-is-a-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                what a lift plan is
              </Link>{' '}
              and{' '}
              <Link href="/blog/when-do-you-need-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                when you need one
              </Link>. Not sure whether a reusable document is even acceptable for your operation?
              Our guide to{' '}
              <Link href="/blog/generic-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                generic lift plans and when you can use one
              </Link>{' '}
              sets out exactly where BS 7121 draws the line.
            </p>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Download the Template</h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            Provided as an editable Word document (.docx) you can customise with your company
            details and reuse across projects. Fifteen sections take you from lift categorisation
            through capacity verification to a signed briefing record.
          </p>

          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <div className="md:flex md:items-start md:justify-between gap-8">
              <div className="flex-1 mb-6 md:mb-0">
                <div className="inline-block bg-amber-500/10 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Generic — All Lifting Equipment
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Lift Plan Template — LOLER 1998 &amp; BS 7121 Aligned
                </h3>
                <p className="text-slate-300 mb-4">
                  One systematic planning document for routine lifting operations with any
                  appliance — mobile crane, excavator, telehandler or lorry loader. Built around
                  the same structure we use for professional plans.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-white font-medium mb-2">What&apos;s Included:</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>✓ Lift categorisation (Basic / Standard / Complex)</li>
                      <li>✓ Appliance details and thorough examination check</li>
                      <li>✓ Load details and gross load calculation</li>
                      <li>✓ Lifting accessories schedule with WLLs</li>
                      <li>✓ Radius &amp; capacity verification (% utilisation)</li>
                      <li>✓ Ground conditions and proximity hazards</li>
                      <li>✓ Personnel, competencies and communications</li>
                      <li>✓ Step-by-step lifting procedure</li>
                      <li>✓ Briefing / sign-off record</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Suitable For:</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Routine, repetitive lifting operations</li>
                      <li>• Basic-category lifts under BS 7121</li>
                      <li>• Documenting a safe system of work</li>
                      <li>• Subcontractor plan submissions</li>
                      <li>• Toolbox talks and lift briefings</li>
                      <li>• Any equipment make or model</li>
                    </ul>
                  </div>
                </div>
                <a
                  href="/downloads/lift-plan-template.docx"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Lift Plan Template (.docx)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment-specific templates */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need an Equipment-Specific Template Instead?
          </h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            The generic template covers the planning fundamentals. If your operation centres on
            one machine type, the equipment-specific versions capture the details a generic form
            cannot — load chart configurations, stabiliser deployment, attachment derating and
            machine-specific checks.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {equipmentTemplates.map((tpl) => (
              <Link
                key={tpl.href}
                href={tpl.href}
                className="group bg-slate-800 border border-slate-700 hover:border-amber-400 rounded-xl p-6 transition"
              >
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition mb-2">
                  {tpl.title} →
                </h3>
                <p className="text-slate-400 text-sm">{tpl.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* When generic is enough */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            When Is a Generic Template Enough?
          </h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            BS 7121 scales planning with risk. Match the lift category to the right level of
            planning — and if in doubt, categorise upward.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 px-4 text-amber-400 font-semibold">Lift Category (BS 7121)</th>
                  <th className="py-4 px-4 text-amber-400 font-semibold">Typical Examples</th>
                  <th className="py-4 px-4 text-amber-400 font-semibold">Right Level of Planning</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 text-sm">
                <tr className="border-b border-slate-800 hover:bg-slate-900/50">
                  <td className="py-3 px-4 text-white">Basic</td>
                  <td className="py-3 px-4 text-slate-400">
                    Routine lifts, well within capacity, no significant hazards — repeat pallet
                    or materials movements
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-green-500/10 text-green-400">
                      This template
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-900/50">
                  <td className="py-3 px-4 text-white">Standard</td>
                  <td className="py-3 px-4 text-slate-400">
                    Significant hazards present — proximity to structures or services, awkward
                    loads, higher utilisation
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-amber-500/10 text-amber-400">
                      Site-specific plan by a competent person
                    </span>
                  </td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-900/50">
                  <td className="py-3 px-4 text-white">Complex</td>
                  <td className="py-3 px-4 text-slate-400">
                    Tandem lifts, personnel lifting, exceptional loads, lifts over occupied areas
                    or live infrastructure
                  </td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-red-500/10 text-red-400">
                      CPCS Appointed Person — professional plan
                    </span>
                  </td>
                </tr>
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
                A template provides the framework — it does not make the plan adequate. The person
                completing it must be competent to assess the specific load, equipment, ground and
                site conditions, and to verify the capacity calculation. For complex lifts,
                near-capacity operations or anything non-routine, use our{' '}
                <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                  professional lift planning service
                </Link>.
              </p>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Regulatory Compliance</h3>
              <p className="text-slate-300 text-sm">
                This template is designed to satisfy the planning requirements of LOLER 1998 and
                align with BS 7121-1:2016. Compliance ultimately depends on the competence of the
                person completing the plan, the accuracy of the information entered, and the
                adequacy of the control measures for the specific operation. Plans submitted to
                principal contractors are commonly{' '}
                <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">
                  checked by an independent Appointed Person
                </Link>{' '}
                before lifting is approved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
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

      {/* Inline quote form */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName="Lift Plan (from generic templates page)"
            heading="Want this written for your site instead? Plans from £200, 24-48h turnaround"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a Professional Lift Plan?</h2>
          <p className="text-slate-800 mb-3 max-w-2xl mx-auto">
            This template works well for routine, Basic-category operations. For Standard and
            Complex lifts — or when a principal contractor requires an Appointed Person&apos;s
            plan — we write site-specific lift plans for every equipment type, UK-wide.
          </p>
          <p className="text-slate-700 mb-8">From £200. 24-48 hour turnaround.</p>
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

      {/* Related */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Resources &amp; Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/blog/what-is-a-lift-plan', title: 'What is a Lift Plan?' },
              { href: '/blog/when-do-you-need-lift-plan', title: 'When Do You Need a Lift Plan?' },
              { href: '/services/lift-plans', title: 'Lift Plan Writing Service' },
              { href: '/services/lift-plan-checking', title: 'Lift Plan Checking' },
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
