import Link from 'next/link'

export const metadata = {
  title: 'Free Excavator Lift Plan & Risk Assessment',
  // SEO audit (May 2026): trimmed from 218 chars to ~155 to avoid SERP truncation.
  description: 'Free CPA/SFPSG-compliant excavator lift plan template and risk assessment with 23 pre-populated hazards. From a CPCS Appointed Person, LOLER compliant.',
  keywords: 'excavator lift plan template, free lift plan template, excavator risk assessment template, CPA compliant lift plan, LOLER lift plan template, excavator lifting operations risk assessment, SFPSG excavator guidance, lift plan template download UK',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/excavator-lift-plan-templates',
  },
  openGraph: {
    title: 'Free Excavator Lift Plan Template & Risk Assessment | CPA Compliant',
    description: 'Download free CPA/SFPSG compliant excavator lift plan template and risk assessment with 23 pre-populated hazards. Professional templates from a CPCS Appointed Person.',
    url: 'https://www.rmtsafetysolutions.com/resources/excavator-lift-plan-templates',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Do I need a lift plan to lift with an excavator?',
    a: 'Yes. Under LOLER 1998 Regulation 8, every lifting operation must be planned by a competent person, properly supervised and carried out safely. Using an excavator as a crane ("object handling") is a lifting operation, so it requires a written excavator lift plan and a supporting risk assessment — which is exactly what these templates provide.',
  },
  {
    q: 'Can an excavator legally be used as a crane in the UK?',
    a: 'Yes, provided the machine is rated and equipped for object handling — typically a marked safe working load, check valves on the boom and dipper rams, a Rated Capacity Indicator (RCI) where required, and an available duties (lifting) chart. The CPA/SFPSG CIG 0801 guidance sets out the conditions in full, and the lift plan template includes a justification section so you can record why the excavator was a suitable choice.',
  },
  {
    q: 'What is the CPA/SFPSG CIG 0801 guidance?',
    a: 'CIG 0801 — "Guidance on the Use of Excavators as Cranes" (Fourth Revision, October 2018) — is the UK industry reference for planning excavator lifting operations. Generic crane lift plan templates do not cover its excavator-specific requirements, so every section of these templates maps directly to it.',
  },
  {
    q: 'Who can write or sign off an excavator lift plan?',
    a: 'A competent Appointed Person — in practice a CPCS A61 Appointed Person — should prepare or review the lift plan before the operation begins. These templates give you a compliant structure, but a competent person must complete and approve them for your specific site and lift. If you would rather have it done professionally, we offer an excavator lift plan service with a 24–48 hour turnaround.',
  },
  {
    q: 'How is an excavator lift plan different from a crane lift plan?',
    a: 'An excavator lift plan must address things a standard crane plan does not: justification for using an excavator at all, pick-and-carry provisions, lift-mode and RCI/overload-alarm management, quick-hitch safety, and the duties chart for the specific machine configuration. That is why an adapted crane template is not enough — these documents are built around CIG 0801 from the ground up.',
  },
  {
    q: 'Is this excavator lift plan template really free?',
    a: 'Yes — both the lift plan template and the risk assessment are free to download in editable Word (.docx) format. Download them, adapt them for your project and site conditions, and have a competent Appointed Person review the completed documents before lifting.',
  },
]

export default function ExcavatorTemplatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-medium mb-4">FREE TEMPLATES — CPA/SFPSG COMPLIANT</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Excavator Lift Plan Template &amp; Risk Assessment
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Professional, CPA/SFPSG compliant templates developed by a CPCS Appointed Person with
            over 35 years of construction industry experience. Download, customise, and use on your
            projects — completely free. Need a site-specific plan written for you? Our{' '}
            <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">
              lift planning services
            </Link>{' '}
            start from £150 with 24-48 hour turnaround.
          </p>
          <p className="text-sm text-slate-400 mb-8">
            Updated June 2026 · Aligned to the CPA/SFPSG CIG 0801 guidance (Fourth Revision)
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/downloads/excavator-lift-plan-template.docx"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Lift Plan Template
            </a>
            <a
              href="/downloads/excavator-risk-assessment-template.docx"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Risk Assessment
            </a>
          </div>
        </div>
      </section>

      {/* Why These Templates */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Why Use These Templates?</h2>
          <p className="text-slate-300 mb-12 max-w-3xl">
            Most excavator lift plan templates available online are generic, incomplete, or fail to
            address the specific requirements of the CPA/SFPSG Guidance on the Use of Excavators as
            Cranes (CIG 0801). These templates have been built from the ground up to address every
            requirement in the guidance — not adapted from a general crane lift plan.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Built to CPA/SFPSG CIG 0801',
                desc: 'Every section maps directly to the CPA/SFPSG guidance (Fourth Revision, October 2018). Includes excavator-specific requirements that generic lift plan templates miss entirely — justification for excavator use, pick and carry provisions, lift mode confirmation, and RCI/overload alarm management.',
              },
              {
                title: 'Fully Referenced Controls',
                desc: 'The risk assessment contains 23 hazard categories with control measures that reference specific CPA sections, LOLER regulations, BS 7121-1:2016, CDM 2015, PUWER 1998, and OPERC guidance. Not vague statements — precise, auditable controls.',
              },
              {
                title: 'Ready to Use',
                desc: 'Both templates are in .docx format. The lift plan has fillable fields for your project details. The risk assessment is pre-populated with initial and residual risk ratings using a 5×5 matrix — just review, adjust for your site-specific conditions, and print.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-amber-400 mb-4">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lift Plan Template Detail */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-amber-400 font-medium mb-2">TEMPLATE 1</p>
              <h2 className="text-3xl font-bold text-white mb-6">
                Excavator Lift Plan Template
              </h2>
              <p className="text-slate-300 mb-6">
                A comprehensive 12-section lift plan template covering every aspect of excavator
                lifting operations. Designed to meet the requirements of LOLER 1998, BS 7121-1:2016,
                CDM 2015, and the CPA/SFPSG guidance in full.
              </p>
              <a
                href="/downloads/excavator-lift-plan-template.docx"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
              >
                Download Lift Plan Template (.docx)
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">What&apos;s Included:</h3>
              {[
                {
                  section: 'Section 0 — Justification',
                  detail: 'Why an excavator has been selected over purpose-designed lifting equipment. The CPA\'s primary emphasis — an excavator should never be the default choice.',
                },
                {
                  section: 'Sections 1–2 — Documentation & Location',
                  detail: 'Supporting safe system of work documents, site address, and specific lift location details.',
                },
                {
                  section: 'Section 3 — Lifting Appliance',
                  detail: 'Make, model, configuration, safety systems (RCI, check valves, overload warning), duties chart reference, and thorough examination status.',
                },
                {
                  section: 'Section 4 — Ground Conditions',
                  detail: 'Separate tables for tracked and wheeled machines with bearing pressure calculations, mat/spreader requirements, and proximity to excavations.',
                },
                {
                  section: 'Section 5 — Competencies',
                  detail: 'CPCS/NPORS card requirements for AP, Lifting Supervisor (A62/N405), Operator (A58c/A59c), Slinger-Signaller (A40), and Vehicle Marshall (A73).',
                },
                {
                  section: 'Sections 6–8 — Comms, Hazards & Weather',
                  detail: 'Communication methods, 22 pre-populated proximity hazards with control fields, and weather monitoring requirements.',
                },
                {
                  section: 'Section 9 — Lifting Procedure',
                  detail: 'Written prompts guiding the sequence of operations, pick-up/set-down points, travel routes, exclusion zones, and contingency procedures.',
                },
                {
                  section: 'Section 10 — Schedule of Lifts',
                  detail: 'Lift description, category (per CPA Figure 3), load weight, radius, SWL, and utilisation percentage for each lift.',
                },
                {
                  section: 'Sections 11–12 — Change Management & Briefing',
                  detail: 'Change log and signature blocks for the entire lifting team.',
                },
                {
                  section: 'Appendix A — OPERC Hand Signals',
                  detail: 'All 19 excavator-specific hand signals from the OPERC Voluntary Code of Practice with full stance descriptions.',
                },
              ].map((item) => (
                <div key={item.section} className="border-l-2 border-amber-500/30 pl-4">
                  <p className="text-white font-medium">{item.section}</p>
                  <p className="text-slate-400 text-sm">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessment Detail */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1 space-y-4">
              <h3 className="text-lg font-semibold text-white">23 Pre-Populated Hazards Across 5 Categories:</h3>
              {[
                {
                  category: 'Planning (Hazards 1–4)',
                  items: 'Lift plan authoring, competency verification, equipment suitability justification, ground conditions and bearing pressure calculations.',
                },
                {
                  category: 'Delivery & Set-Up (Hazards 5–7)',
                  items: 'Appliance delivery to site, maintenance and daily pre-use checks (CPA Annex E), work adjacent to excavations.',
                },
                {
                  category: 'Machine Movement (Hazards 8–11)',
                  items: 'Travel without load, pick and carry operations with specific load charts, fork attachment operations loaded and unloaded.',
                },
                {
                  category: 'Lifting Activities (Hazards 12–21)',
                  items: 'Encroachment, delivery offloading, fall protection, operative positioning, hand signal communication, blind lifting, accessory failure, person/load interface for both suspended loads and fork tines.',
                },
                {
                  category: 'Environmental & Safety Systems (Hazards 22–23)',
                  items: 'Weather conditions and wind speed limits, RCI/overload alarm interference — including why early alarm sounding over the end is normal and must not be disabled.',
                },
              ].map((item) => (
                <div key={item.category} className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                  <p className="text-amber-400 font-semibold mb-2">{item.category}</p>
                  <p className="text-slate-300 text-sm">{item.items}</p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-amber-400 font-medium mb-2">TEMPLATE 2</p>
              <h2 className="text-3xl font-bold text-white mb-6">
                Excavator Lifting Operations Risk Assessment
              </h2>
              <p className="text-slate-300 mb-6">
                A fully populated activity risk assessment with 23 hazard categories specific to
                excavator lifting operations. Every control measure references the relevant CPA section,
                regulation, or standard. A4 landscape format with colour-coded 5×5 risk matrix.
              </p>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl mb-6">
                <h3 className="text-white font-semibold mb-3">Risk Rating Structure</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-center py-1 rounded bg-red-500/20 text-red-400 font-semibold">12–25</span>
                    <span className="text-slate-300">Unacceptable — do not proceed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-center py-1 rounded bg-amber-500/20 text-amber-400 font-semibold">5–10</span>
                    <span className="text-slate-300">Acceptable with controls in place</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-center py-1 rounded bg-green-500/20 text-green-400 font-semibold">1–4</span>
                    <span className="text-slate-300">Acceptable</span>
                  </div>
                </div>
              </div>
              <a
                href="/downloads/excavator-risk-assessment-template.docx"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
              >
                Download Risk Assessment (.docx)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Standards &amp; Guidance Referenced
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { code: 'CPA/SFPSG CIG 0801', title: 'Guidance on the Use of Excavators as Cranes (4th Rev, Oct 2018)' },
              { code: 'LOLER 1998', title: 'Lifting Operations and Lifting Equipment Regulations' },
              { code: 'BS 7121-1:2016', title: 'Code of Practice for Safe Use of Cranes' },
              { code: 'CDM 2015', title: 'Construction (Design and Management) Regulations' },
              { code: 'PUWER 1998', title: 'Provision and Use of Work Equipment Regulations' },
              { code: 'BS EN 474', title: 'Earth-Moving Machinery — Safety' },
              { code: 'OPERC VCOP', title: 'Hand Signals for Excavators Used as Cranes' },
              { code: 'CPA Ground Conditions', title: 'Guidance on Ground Conditions for Construction Equipment' },
              { code: 'CPA Quick Hitches', title: 'Guidance on the Safe Use of Quick Hitches on Excavators' },
            ].map((ref) => (
              <div
                key={ref.code}
                className="bg-slate-950 border border-slate-800 p-4 rounded-lg"
              >
                <p className="text-amber-400 font-semibold text-sm">{ref.code}</p>
                <p className="text-slate-400 text-sm">{ref.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Excavator Lift Plan FAQs</h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">{item.q}</h3>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Important Notice</h3>
            <p className="text-slate-300 mb-4">
              These templates are provided as a starting point for your excavator lifting operations
              documentation. It is your responsibility to review, adapt, and complete them for your
              specific project, site conditions, equipment, and lifting operations. A competent
              Appointed Person must prepare or review the completed lift plan before operations commence.
            </p>
            <p className="text-slate-300">
              As per BS 7121-1:2016, CDM 2015, and LOLER 1998, the user must ensure they properly risk
              assess and plan their own lifting operations to discharge their legal requirements. No
              liability is accepted for incidents resulting from the use of these templates.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — Professional Service */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need a Professional Lift Plan?
          </h2>
          <p className="text-slate-800 mb-4 max-w-2xl mx-auto">
            These templates are great for straightforward lifts. For complex operations, tandem lifts,
            blind lifts, or anything near capacity — use our{' '}
            <Link href="/services/lift-plans" className="underline font-semibold text-slate-900 hover:text-slate-700">
              professional lift planning services
            </Link>{' '}
            from a CPCS Appointed Person with 35 years of experience.
          </p>
          <p className="text-slate-700 mb-8">
            Fast turnaround. Tier 1 contractor approved. LOLER compliant.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition"
            >
              Get a Quote
            </Link>
            <a
              href="tel:+447803808093"
              className="bg-white/20 hover:bg-white/30 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
            >
              Call: 07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Further reading */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Further reading on excavator lifting</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { href: '/resources/excavator-rci-guide', title: 'Excavator RCI Requirements (RCI vs RCL)', desc: 'What UK law requires, the three tiers of device, and what to specify for lifts over 1 tonne.' },
              { href: '/resources/excavator-safety-devices', title: 'Excavator Safety Devices Explained', desc: 'A plain-English guide to every excavator safety device, lifting-specific and standard.' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-slate-950 border border-slate-800 hover:border-amber-400 p-6 rounded-xl transition"
              >
                <p className="text-white font-semibold mb-1">{item.title} →</p>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Our Excavator Lift Plan Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/services/excavator-lift-plans', title: 'Excavator Lift Plans' },
              { href: '/services/lift-plan-checking', title: 'Lift Plan Checking' },
              { href: '/services/lifting-operations-audit', title: 'Lifting Operations Audit' },
              { href: '/services/telehandler-lift-plans', title: 'Telehandler Lift Plans' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-slate-900 border border-slate-800 hover:border-amber-400 p-4 rounded-xl text-white font-medium transition"
              >
                {service.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: 'Free Excavator Lift Plan Template & Risk Assessment',
            description:
              'Download free CPA/SFPSG compliant excavator lift plan template and lifting operations risk assessment with 23 pre-populated hazards.',
            url: 'https://www.rmtsafetysolutions.com/resources/excavator-lift-plan-templates',
            dateModified: '2026-06-02',
            provider: {
              '@type': 'Organization',
              name: 'RMT Safety Solutions',
              url: 'https://www.rmtsafetysolutions.com',
            },
            mainEntity: [
              {
                '@type': 'DigitalDocument',
                name: 'Excavator Lift Plan Template',
                description:
                  'CPA/SFPSG compliant excavator lift plan template with 12 sections, OPERC hand signals appendix, and full regulatory references.',
                encodingFormat: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                url: 'https://www.rmtsafetysolutions.com/downloads/excavator-lift-plan-template.docx',
              },
              {
                '@type': 'DigitalDocument',
                name: 'Excavator Lifting Operations Risk Assessment',
                description:
                  'Fully populated risk assessment with 23 hazard categories, CPA-referenced control measures, and colour-coded 5×5 risk matrix.',
                encodingFormat: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                url: 'https://www.rmtsafetysolutions.com/downloads/excavator-risk-assessment-template.docx',
              },
            ],
          }),
        }}
      />

      {/* FAQPage Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: {
                '@type': 'Answer',
                text: item.a,
              },
            })),
          }),
        }}
      />
    </>
  )
}
