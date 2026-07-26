
import Image from 'next/image'
import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  // CTR fix (Jul 2026): GSC shows "lifting operations site audit" at 453
  // impressions / position 5.7 with ZERO clicks. Title now matches the
  // query phrasing ("site audit") and the description leads with what the
  // auditor checks + a concrete deliverable.
  // Fix #6, Jul 2026 SEO review: the title rendered at 64 chars once the
  // "| RMT Solutions" template was appended, so Google truncated it; the
  // description was 180 chars, losing "with a prioritised findings report"
  // — the single most persuasive phrase in it. Both now sit inside the
  // limits with the deliverable still visible.
  title: 'Lifting Operations Audit UK | LOLER Audits',
  description: 'Independent lifting operations site audit by a CPCS A61 Appointed Person. Lift plans, LOLER records, supervision and equipment checked, prioritised report.',
  keywords: 'lifting operations audit, lifting operations site audit, LOLER compliance audit, crane audit, lifting equipment audit, construction site lifting audit, lifting operations management assurance, review of lifting plans',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/lifting-operations-audit',
  },
  openGraph: {
    title: 'Lifting Operations Audit UK | LOLER Audits',
    description: 'Independent site audit of your lifting operations by a CPCS A61 Appointed Person — lift plans, LOLER records, supervision and equipment checked.',
    url: 'https://www.rmtsafetysolutions.com/services/lifting-operations-audit',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
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

// Single source of truth for this page's FAQs — rendered on the page AND
// used to build the FAQPage JSON-LD below. Add questions here only.
const PAGE_FAQS = [
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
  {
    q: 'What is a lifting operations audit?',
    a: 'A lifting operations audit is a systematic compliance review of how lifting is being managed on a construction site. It examines the lift plans in use, the competence of personnel, the condition and certification of equipment and accessories, the effectiveness of supervision, and the alignment between paperwork and what is actually happening on the ground. It produces a written report with findings, recommendations, and a remedial action plan.',
  },
  {
    q: 'How often should lifting operations be audited?',
    a: 'BS 7121 recommends regular planned audits of lifting operations throughout the project lifetime. Industry best practice on major construction sites is an 8-weekly audit cycle, with additional audits triggered by significant changes — new operators, new lift types, new adjacent activities, or following any incident or near miss.',
  },
  {
    q: 'Who can carry out a lifting operations audit?',
    a: 'Lifting operations audits should be carried out by a competent person — typically a CPCS Appointed Person (A61) with current site experience and an understanding of BS 7121, LOLER 1998, and the project\'s specific lifting risks. Independent third-party auditors are often preferred because they are not subject to the project\'s commercial pressures.',
  },
  {
    q: 'What gets checked during a lifting operations audit?',
    a: 'A typical audit covers: lift plans in use against actual operations, thorough examination certificates for all equipment and accessories, operator and slinger competencies, briefings and toolbox talk records, supervision arrangements, near-miss and incident records, ground conditions, exclusion zones, communications, weather monitoring, and the Lifting Coordinator\'s records of routine lifts.',
  },
]

// FAQ structured data, generated from PAGE_FAQS above.
//
// Fix #2, Jul 2026 SEO review: this object used to be a hand-maintained literal
// separate from the visible FAQ list, and the two had drifted — questions were
// being emitted as JSON-LD that appeared nowhere on the rendered page, which
// breaches Google's structured data policy. Deriving it from the visible list
// makes that impossible by construction. Edit PAGE_FAQS, not this.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PAGE_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
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
    { '@type': 'ListItem', position: 3, name: 'Lifting Operations Audit', item: 'https://www.rmtsafetysolutions.com/services/lifting-operations-audit' },
  ],
}

export default function LiftingOperationsAuditPage() {
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
            For a walk-through of the process, see{' '}
            <Link href="/services/lifting-operations-audit" className="text-blue-600 hover:text-blue-700 underline">
              what to expect from a lifting operations audit
            </Link>, and our{' '}
            <Link href="/blog/what-is-loler-complete-guide" className="text-blue-600 hover:text-blue-700 underline">
              complete guide to LOLER
            </Link>{' '}
            covers the regulations we audit against.
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

      {/* Long-form body copy, merged in from /services/lifting-operations-audit.
          Fix #3, Jul 2026 SEO review. That post ran to 3,017 words against this
          page's 996 and targeted the identical term, so the informational page
          was outranking the page that actually sells the service. The substance
          now lives here and the blog URL 301s to this page (see next.config.js).
          The audit-vs-thorough-examination section below is deliberate: Google
          currently resolves "lifting operations audit" to LOLER thorough
          examination, and no competitor has noticed the intent confusion. */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            What a lifting operations audit actually involves
          </h2>

          <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
            <p>
              A lifting operations audit is an independent, systematic assessment of how lifting
              activities are being planned, managed and carried out on a site. It looks at the whole
              lifting management system — the documentation, the competence of the people involved,
              the condition and management of the equipment, and what is actually happening on the
              ground as opposed to what the paperwork says should be happening.
            </p>
            <p>
              The purpose is to give the principal contractor or client an objective picture of the
              standard of lifting on their project. A good audit is not a pass-or-fail exercise. It is
              a diagnostic that says what is being done well, where the gaps are, and what needs
              correcting — with the findings prioritised so the serious items are unmistakable.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 pt-6">
              Audit versus LOLER thorough examination — they are not the same thing
            </h3>
            <p>
              This is the single most common confusion in this area, and it is worth being precise
              about because contractors regularly commission one when their client wanted the other.
            </p>
            <p>
              A <strong>LOLER thorough examination</strong> is a statutory engineering inspection of a
              specific piece of <em>lifting equipment</em>, carried out by a competent examiner under
              LOLER Regulation 9, at intervals of 6 or 12 months depending on what the equipment does.
              It produces a report on the condition of that machine or accessory. It says nothing
              whatsoever about whether your lifts are being planned properly.
            </p>
            <p>
              A <strong>lifting operations audit</strong> examines the <em>management system</em> — lift
              plans, supervision, competence, briefings, exclusion zones, records, and observed
              practice. It has no statutory interval; the frequency is driven by risk and by contract.
              Neither one substitutes for the other. A site can have a perfect set of thorough
              examination reports and still be planning its lifts badly, and that combination is
              exactly what an audit is designed to surface. See our guide to{' '}
              <Link href="/blog/loler-thorough-examination-guide" className="text-blue-600 hover:text-blue-700 underline">
                LOLER thorough examinations
              </Link>{' '}
              for the equipment side.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 pt-6">
              What gets checked
            </h3>
            <p>
              Documentation is the starting point. The auditor reviews the lift plans in place for the
              operations actually happening on site — not just crane lifts, but{' '}
              <Link href="/services/excavator-lift-plans" className="text-blue-600 hover:text-blue-700 underline">
                excavator lifting
              </Link>
              ,{' '}
              <Link href="/services/telehandler-lift-plans" className="text-blue-600 hover:text-blue-700 underline">
                telehandler crane duties
              </Link>{' '}
              and{' '}
              <Link href="/services/lorry-loader-lift-plans" className="text-blue-600 hover:text-blue-700 underline">
                lorry loader deliveries
              </Link>
              , which are the operations most often found running with no plan at all. Each plan is
              checked for whether it is genuinely site-specific rather than a generic document
              recycled from a previous job, and whether it matches the conditions, loads and equipment
              actually present.
            </p>
            <p>
              Beyond the plans: thorough examination reports for every item of lifting equipment and
              accessory on site, and whether any have expired. Competence evidence for the Appointed
              Person, lift supervisors, slinger-signallers and operators, and whether the card levels
              held actually match the lifts being carried out. The lifting accessory register, colour
              coding and quarantine arrangements. Briefing records. Then the walkround — exclusion
              zones as they exist rather than as drawn, crane and plant set-up, outrigger and mat
              arrangements, ground conditions, communication in practice, and edge protection where
              lifting and work at height overlap.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 pt-6">
              What comes up again and again
            </h3>
            <p>
              After enough of these, the failure patterns repeat. Generic lift plans presented as
              site-specific. Plans that were technically correct when written but no longer describe
              what is happening, because the machine changed, the load changed, or the crane moved.
              Thorough examination certificates that have quietly expired on accessories rather than
              on the crane itself, because the accessories are the things nobody owns. Exclusion zones
              marked out at the start of the week and eroded by Thursday. Subcontractors lifting under
              the principal contractor's plan without ever having been briefed on it. And the most
              common of all: lifting operations that everybody on site regards as too routine to need
              a plan, which is not a judgement LOLER allows anyone to make.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 pt-6">
              How to prepare
            </h3>
            <p>
              Have the paperwork in one place before the auditor arrives — lift plans, thorough
              examination reports, the accessory register, competence cards and briefing records. Not
              because a tidy file scores points, but because time spent hunting for documents is time
              not spent on site, and the walkround is where the value is. Tell your subcontractors the
              audit is happening. Do not stage-manage the site: an audit of a site pretending to be
              something it is not tells you nothing you can use, and experienced auditors can tell.
            </p>
            <p>
              Findings are reported with a priority rating so you can act on the serious items
              immediately. Anything posing imminent risk gets raised with you on the day rather than
              held back for the written report — that is not a courtesy, it is the point.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 pt-6">
              Audit or lift plan check — which do you need?
            </h3>
            <p>
              If the question is <em>"is this specific lift plan any good?"</em>, that is{' '}
              <Link href="/services/lift-plan-checking" className="text-blue-600 hover:text-blue-700 underline">
                lift plan checking
              </Link>{' '}
              — a document-level review of one submission, usually turned round in 24 to 48 hours.
              If the question is <em>"is lifting being managed properly on this project?"</em>, that is
              an audit — a site-level assessment of the whole system. Principal contractors reviewing
              subcontractor submissions want the first. Clients and CDM duty holders seeking assurance
              want the second. Plenty of projects need both, on different cycles.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {PAGE_FAQS.map((faq) => (
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
      {/* Available across the UK — reciprocates the inbound links from /locations/* */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Available across the UK
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We deliver lifting operations audits UK-wide. Plans are produced remotely from Warrington; site visits are scheduled where the work requires it. Pick your nearest city or call <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">07803 808093</a> to discuss your project.
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
