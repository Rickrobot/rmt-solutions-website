import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'

// Mobile crane template page (competitor battle plan, Jun 2026).
//
// Why this page exists: "crane lift plan template" was RMT's weakest
// template keyword (~pos 14) because no dedicated crane asset existed —
// the SERP is held by global software vendors (Sitemate, Procore,
// SafetyCulture) whose "free" templates are trial- or lead-gen-gated and
// US/OSHA-framed. This page mirrors the telehandler playbook that won
// that keyword: genuinely free Word + PDF-free download, BS 7121-1/-3
// specificity, named AP authorship, honest guidance on when a template
// is NOT enough (which for mobile cranes is most of the time — that
// honesty is also the conversion path to the £200+ service).

export const metadata = {
  title: 'Free Mobile Crane Lift Plan Template UK',
  description:
    'Download a free mobile crane lift plan template (Word) — BS 7121 aligned with outrigger loading, ground bearing, duty chart and slew clearance sections.',
  keywords:
    'mobile crane lift plan template, crane lift plan template, crane lift plan template uk, mobile crane lifting plan template, crane lifting plan template free download, lift plan template crane, BS 7121 crane lift plan',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/mobile-crane-lift-plan-templates',
  },
  openGraph: {
    title: 'Free Mobile Crane Lift Plan Template UK | BS 7121 Aligned',
    description:
      'Free editable mobile crane lift plan template covering outrigger loads, ground bearing, duty chart verification, slew clearances and CPCS personnel — from a CPCS A61 Appointed Person.',
    url: 'https://www.rmtsafetysolutions.com/resources/mobile-crane-lift-plan-templates',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does every mobile crane lift need a written lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In practice, yes. LOLER 1998 requires every lifting operation to be properly planned by a competent person, and mobile crane work is rarely routine — the standing position, ground conditions, configuration and loads change site to site. UK industry practice under BS 7121 treats most mobile crane operations as Standard or Complex lifts requiring a site-specific written plan prepared by an Appointed Person.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between crane hire and a contract lift?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under CPA crane hire conditions, you hire the crane and operator but YOUR organisation must supply the Appointed Person, plan the lift and carry the lifting risk. Under a CPA contract lift, the crane company plans the operation, supplies the Appointed Person and carries the principal risks. If you are completing this template yourself, you are operating under crane hire — make sure you genuinely have the competence LOLER requires.',
      },
    },
    {
      '@type': 'Question',
      name: 'What must a mobile crane lift plan include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The crane details and configuration (boom length, counterweight, outrigger spread) with the exact duty chart, outrigger loads and ground bearing verification with mat sizes, the gross load including hook block and rigging weight, capacity verification at the worst-case radius with percentage utilisation, slew and tail-swing clearances, proximity hazards including power lines (HSE GS6), named CPCS personnel (AP, crane supervisor, operator, slinger), wind limits, the lift sequence, and a signed briefing record.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why must the hook block be included in the load calculation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Crane duty charts state gross capacity — and the hook block, hoist rope allowance and all rigging count against it. A 110-tonne crane with a 1.2-tonne hook block and 800kg of rigging has 2 tonnes less available capacity than the chart number at that radius. Omitting the hook block is one of the most common errors found when lift plans are independently checked.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I use a professional instead of this template?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use a professional Appointed Person whenever the lift is Standard or Complex: near-capacity picks, poor or unverified ground, restricted sites with slew limitations, lifts near power lines or over occupied areas, tandem lifts, or whenever a principal contractor must approve the plan. A professional mobile crane lift plan with a site visit typically costs £250 to £500 — a fraction of one hour of crane standing time lost to a rejected plan.',
      },
    },
  ],
}

const documentSchema = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  name: 'Mobile Crane Lift Plan Template (UK)',
  description:
    'Free editable Word mobile crane lift plan template aligned with LOLER 1998, BS 7121-1:2016 and BS 7121-3. Fifteen sections including outrigger loading, ground bearing and duty chart verification.',
  url: 'https://www.rmtsafetysolutions.com/resources/mobile-crane-lift-plan-templates',
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

export default function MobileCraneLiftPlanTemplates() {
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
            <p className="text-amber-400 font-medium mb-4">Free Download — No Email, No Trial, No Signup</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Mobile Crane Lift Plan Template
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              A free, editable mobile crane lift plan template for UK operations — aligned with
              LOLER 1998, BS 7121-1:2016 and BS 7121-3, with the sections crane plans live or die
              by: outrigger loading, ground bearing, duty chart verification and slew clearances.
              Prepared by a CPCS A61 Appointed Person. Need it written for you with a site visit?
              Our{' '}
              <Link href="/services/mobile-crane-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                mobile crane lift plan service
              </Link>{' '}
              covers that.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#download" className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition">
                Download Template
              </a>
              <Link href="/services/mobile-crane-lift-plans" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold transition border border-slate-700">
                Professional Crane Plans →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Honest framing: hire vs contract lift */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Before You Start: Crane Hire or Contract Lift?
          </h2>
          <div className="max-w-3xl space-y-4 text-slate-300">
            <p>
              This template is for organisations working under <strong>CPA crane hire</strong>{' '}
              conditions — where you hire the crane and operator, and <em>your</em> organisation
              must supply the Appointed Person, plan the lift and carry the lifting risk. If you
              have bought a <strong>contract lift</strong>, the crane company plans the operation
              and provides this document; you should be reviewing their plan, not writing your own.
            </p>
            <p>
              And a straight answer most template pages avoid: mobile crane operations are rarely
              Basic lifts. Ground, access, configuration and loads change on every site, which is
              why BS 7121 practice treats most mobile crane work as Standard or Complex — needing a
              site-specific plan from a competent{' '}
              <Link href="/blog/cpcs-appointed-person-guide" className="text-amber-400 hover:text-amber-300 underline">
                Appointed Person
              </Link>
              . Use this template for genuinely routine, repeat operations within your competence;
              use a professional for everything else. Our guide on{' '}
              <Link href="/blog/when-do-you-need-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                when you need a lift plan
              </Link>{' '}
              draws the line in detail.
            </p>
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Download the Template</h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            An editable Word document (.docx) you can customise with your company details and
            reuse. Fifteen sections from lift categorisation and contract basis through outrigger
            loading to a signed briefing record. Genuinely free — no email address, no software
            trial.
          </p>

          <div className="bg-gradient-to-r from-slate-800 to-slate-800/50 border border-slate-700 rounded-xl p-8">
            <div className="md:flex md:items-start md:justify-between gap-8">
              <div className="flex-1 mb-6 md:mb-0">
                <div className="inline-block bg-amber-500/10 text-amber-400 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  Mobile Cranes — Wheeled &amp; Crawler
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Mobile Crane Lift Plan — LOLER 1998, BS 7121-1 &amp; -3 Aligned
                </h3>
                <p className="text-slate-300 mb-4">
                  Built around the same structure we use for professional crane plans, including
                  the crane-specific checks that generic templates miss.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="text-white font-medium mb-2">What&apos;s Included:</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>✓ Lift categorisation + crane hire vs contract lift basis</li>
                      <li>✓ Crane configuration and duty chart reference</li>
                      <li>✓ Outrigger loads, mat sizes and ground bearing check</li>
                      <li>✓ Gross load including hook block and rigging</li>
                      <li>✓ Capacity verification at worst-case radius (% utilisation)</li>
                      <li>✓ Slew, tail-swing and power line clearances (GS6)</li>
                      <li>✓ CPCS personnel roles (A61, A62, operator, A40)</li>
                      <li>✓ Wind limits, lift sequence, emergency arrangements</li>
                      <li>✓ Briefing / sign-off record</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-2">Suitable For:</h4>
                    <ul className="text-slate-400 text-sm space-y-1">
                      <li>• Routine, repeat crane operations under crane hire</li>
                      <li>• Documenting Basic-category lifts</li>
                      <li>• Reviewing a crane company&apos;s contract lift plan</li>
                      <li>• Training and toolbox talk material</li>
                      <li>• Any crane make — Liebherr, Grove, Tadano, Kato</li>
                    </ul>
                  </div>
                </div>
                <a
                  href="/downloads/mobile-crane-lift-plan-template.docx"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Mobile Crane Template (.docx)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crane-specific pitfalls */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            The Four Checks That Decide a Crane Plan
          </h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            From independently checking subcontractor crane plans, these are the sections that
            most often fail review — get these right and the rest usually follows.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Ground bearing vs outrigger load',
                desc: 'The single most consequential check. Maximum outrigger load (from manufacturer data, not guesswork) divided by mat area must not exceed the allowable bearing capacity — confirmed with the principal contractor or temporary works coordinator where ground is uncertain, made-up or near excavations.',
              },
              {
                title: 'The right duty chart',
                desc: 'Capacity depends on the exact configuration: boom length, counterweight fitted, outrigger spread (full vs intermediate), and whether a fly jib is rigged. Quoting the headline crane capacity instead of the chart figure for the actual configuration is an instant rejection.',
              },
              {
                title: 'Gross load honesty',
                desc: 'Hook block, hoist rope allowance and every accessory count against chart capacity. Two tonnes of block and rigging on a tight pick is the difference between 78% and 95% utilisation.',
              },
              {
                title: 'Worst-case radius',
                desc: 'Verify at the maximum radius the operation could reach — including the set position and any repositioning — not the flattering pick radius. If the operator might need another metre, plan for it now.',
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

      {/* Important Notes */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Important Notes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Most Crane Lifts Need More Than a Template</h3>
              <p className="text-slate-300 text-sm">
                We say this against our own download: mobile crane operations are rarely Basic
                lifts, and a template completed without genuine competence will not survive a
                principal contractor&apos;s review. For Standard and Complex lifts use our{' '}
                <Link href="/services/mobile-crane-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                  professional mobile crane lift plan service
                </Link>{' '}
                — site visit included, typically £250–£500. See{' '}
                <Link href="/blog/lift-plan-cost-uk" className="text-amber-400 hover:text-amber-300 underline">
                  what lift plans cost
                </Link>{' '}
                for full pricing.
              </p>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">Regulatory Compliance</h3>
              <p className="text-slate-300 text-sm">
                Designed to satisfy the planning requirements of LOLER 1998 and align with BS
                7121-1:2016 and BS 7121-3 for mobile cranes. Compliance depends on the competence
                of the person completing the plan and the accuracy of the configuration, load and
                ground information entered. Crane plans submitted to principal contractors are
                routinely{' '}
                <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">
                  independently checked
                </Link>{' '}
                before lifting is approved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-900">
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
      <section className="py-16 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName="Mobile Crane Lift Plan (from templates page)"
            heading="Need it written with a site visit? Mobile crane plans £250-£500, 3-5 days"
          />
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Resources &amp; Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/services/mobile-crane-lift-plans', title: 'Mobile Crane Lift Plans Service' },
              { href: '/resources/lift-plan-templates', title: 'Generic Lift Plan Template' },
              { href: '/blog/mobile-crane-vs-tower-crane', title: 'Mobile Crane vs Tower Crane' },
              { href: '/blog/lift-plan-cost-uk', title: 'Lift Plan Costs Explained' },
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
