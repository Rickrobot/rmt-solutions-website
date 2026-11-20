import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import GatedDownload from '@/components/GatedDownload'

// Free forklift lift plan template (Nov 2026 website review, section 6.1).
// Targets "forklift lifting plan" / "forklift lift plan" / "forklift lift plan
// template", which were landing on the generic template page. The template
// (public/downloads/forklift-lift-plan-template.docx) is built on LOLER 1998,
// ACOP L113, ACOP L117 and the manufacturer's instructions; BS 7121 lift
// categories are deliberately left out because a forklift is not a crane.

export const metadata = {
  title: 'Free Forklift Lift Plan Template (Word) UK',
  description: 'Free forklift lift plan template in Word for counterbalance and rough-terrain forklifts: capacity check, route, hazards and method statement.',
  keywords: 'forklift lift plan template, forklift lifting plan template, forklift lifting plan, fork lift truck lift plan template, forklift risk assessment template, LOLER forklift template',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/forklift-lift-plan-templates',
  },
  openGraph: {
    title: 'Free Forklift Lift Plan Template (Word) UK',
    description: 'Free Word forklift lift plan template for counterbalance and rough-terrain masted forklifts, from a CPCS Appointed Person.',
    url: 'https://www.rmtsafetysolutions.com/resources/forklift-lift-plan-templates',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Do I need a lift plan for forklift operations?',
    a: 'LOLER 1998 requires every lifting operation to be properly planned by a competent person, and a forklift lifting or lowering a load is lifting equipment under LOLER. Routine pallet handling is usually covered by the employer’s risk assessment and safe system of work. A specific written plan is needed for out-of-the-ordinary work: loads near capacity, offset or long loads, machinery moves, fork-mounted jibs, lifts over suspended floors, or when a principal contractor asks for one.',
  },
  {
    q: 'Does this template work for any make of forklift?',
    a: 'Yes. It has fields for the make, model, serial number, capacity plate, load centre, mast type and attachments, so it works for any counterbalance or rough-terrain masted forklift sold in the UK. Every capacity figure must come from the manufacturer’s data for that truck and attachment.',
  },
  {
    q: 'Why does the template not use BS 7121 lift categories?',
    a: 'BS 7121 is the code of practice for the safe use of cranes. A forklift is not a crane, so the template is built on LOLER 1998, the ACOP L113 on lifting equipment, ACOP L117 on rider-operated lift trucks and the manufacturer’s instructions instead.',
  },
  {
    q: 'Who should complete a forklift lift plan?',
    a: 'A competent person who understands the truck, the load and the site. For higher-risk work such as machinery moves, fork-mounted jib lifts or lifts over suspended floors, many principal contractors expect the plan to be prepared by a CPCS or NPORS Appointed Person.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const downloadSchema = {
  '@context': 'https://schema.org',
  '@type': 'DigitalDocument',
  name: 'Forklift Lift Plan Template',
  description: 'Free Word lift plan template for counterbalance and rough-terrain masted forklift trucks.',
  url: 'https://www.rmtsafetysolutions.com/downloads/forklift-lift-plan-template.docx',
  encodingFormat: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com/' },
    { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.rmtsafetysolutions.com/resources' },
    { '@type': 'ListItem', position: 3, name: 'Forklift Lift Plan Template', item: 'https://www.rmtsafetysolutions.com/resources/forklift-lift-plan-templates' },
  ],
}

const sections = [
  ['1. Scope of work', 'Project, site, contractor, dates and where the work happens: warehouse floor, construction site or loading area.'],
  ['2. Type of operation', 'Fork-carried load, fork-mounted jib, vehicle loading or machinery move, with what the template does not cover.'],
  ['3. Truck details', 'Truck type, capacity plate, load centre, mast, thorough examination, PUWER inspection and daily pre-use checks.'],
  ['4. Load details', 'Weight and its source, dimensions, centre of gravity and actual load centre, and load condition.'],
  ['5. Capacity check', 'Rated capacity at the actual load centre and height, gross load, utilisation and a clear lift / do-not-lift result.'],
  ['6. Forks and attachments', 'Fork rating and extensions, clamps and rotators, and a full section for fork-mounted jibs with an accessories schedule.'],
  ['7. Ground, floor and route', 'Surface, gradients, suspended floors and ramps, front-axle load, overhead clearances and power lines.'],
  ['8. Vehicle loading', 'Driver safe area, vehicle stability, load shift, restraint and loading-bay controls.'],
  ['9. Personnel', 'Operator, slinger/signaller and marshaller, with card or training details and briefing ticks.'],
  ['10. Hazards and controls', 'Fifteen forklift hazards already listed with control measures, plus blank rows for your site.'],
  ['11. Method statement', 'An eleven-step sequence from pre-use checks to parking up, with space for site-specific steps.'],
  ['12–15. Layout, emergencies, briefing and sign-off', 'A full-page layout box, emergency procedures, briefing signatures and authorisation.'],
]

export default function ForkliftLiftPlanTemplates() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(downloadSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4">Free Download — Word (.docx)</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Forklift Lift Plan Template
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              A free, editable lift plan template for counterbalance and rough-terrain masted forklift
              trucks, prepared by a CPCS Appointed Person with 35 years of construction experience. It
              covers the capacity check, route and floor checks, vehicle loading, hazards, method
              statement and briefing record. Need one written for you instead? Our{' '}
              <Link href="/services/forklift-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                forklift lift plans
              </Link>{' '}
              start from £200 + VAT with a 24–48 hour turnaround.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="/downloads/forklift-lift-plan-template.docx"
                className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
              >
                Download the Template (.docx)
              </a>
              <Link
                href="/services/forklift-lift-plans"
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold transition border border-slate-700"
              >
                Have it written for you →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's in it */}
      <section id="template" className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">What the template covers</h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            Eight pages, fifteen sections, ready to fill in on screen or print. Planned under LOLER 1998
            Regulation 8, ACOP L113, ACOP L117 and the manufacturer&apos;s instructions.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map(([title, desc]) => (
              <div key={title} className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm">{desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <a
              href="/downloads/forklift-lift-plan-template.docx"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Forklift Lift Plan Template (.docx)
            </a>
          </div>
        </div>
      </section>

      {/* When a specific plan is needed */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">When to use the template, and when to get help</h2>
          <p className="text-slate-300 max-w-3xl mb-10">
            The template suits most forklift lifting on site and in the workplace. Some jobs need more
            than a form: they need someone to check the numbers.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 px-4 text-amber-400 font-semibold">Operation</th>
                  <th className="py-4 px-4 text-amber-400 font-semibold">Template</th>
                  <th className="py-4 px-4 text-amber-400 font-semibold">Watch for</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 text-sm">
                {[
                  ['Palletised loads on standard forks', 'Suitable', 'Load centre within the capacity plate figure'],
                  ['Loading and unloading lorries', 'Suitable', 'Driver safe area, load shift, vehicle stability'],
                  ['Long, offset or awkward loads', 'Suitable with care', 'Capacity at the real load centre, from the maker’s chart'],
                  ['Fork-mounted jib or hook', 'Suitable with care', 'Combined truck and jib capacity; trained slinger'],
                  ['Machinery moves', 'Get it checked', 'Confirmed weight and centre of gravity; floor loading'],
                  ['Lifts over suspended floors or mezzanines', 'Get it checked', 'Front-axle load against the floor capacity'],
                  ['Two forklifts on one load', 'Not covered', 'Needs a specific plan by a competent person'],
                  ['Lifting people', 'Not covered', 'Never on forks; HSE guidance on exceptional use only'],
                ].map(([op, use, watch]) => (
                  <tr key={op} className="border-b border-slate-800">
                    <td className="py-3 px-4 text-white">{op}</td>
                    <td className="py-3 px-4">
                      <span
                        className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                          use === 'Suitable'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : use === 'Suitable with care'
                              ? 'bg-amber-500/10 text-amber-400'
                              : 'bg-red-500/10 text-red-400'
                        }`}
                      >
                        {use}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-400">{watch}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Important notes</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">A template is a starting point</h3>
              <p className="text-slate-300 text-sm">
                Every lift is different. The person completing the template must be competent to judge
                the truck, the load and the site, and every capacity figure must come from the
                manufacturer&apos;s data for that truck and attachment. For machinery moves, jib lifts
                or lifts over suspended floors, consider our{' '}
                <Link href="/services/forklift-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                  forklift lift planning service
                </Link>
                .
              </p>
            </div>
            <div className="bg-amber-500/5 border border-amber-500/20 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-amber-400 mb-3">The rules behind it</h3>
              <p className="text-slate-300 text-sm">
                LOLER 1998 (planning, and thorough examination of the mast, chains, forks and
                attachments at least every 12 months or per a written scheme), PUWER 1998 for brakes,
                steering and tyres, ACOP L113 and ACOP L117. BS 7121 is the crane code and is not
                used for forklift work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Frequently asked questions</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-slate-800 pb-6">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-slate-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quote form */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName="Forklift Lift Plan (from templates page)"
            heading="Want this written for your site instead? Plans from £200 + VAT, 24-48h turnaround"
          />
        </div>
      </section>

      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <GatedDownload />
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related resources and services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/services/forklift-lift-plans', title: 'Forklift Lift Plans Service' },
              { href: '/resources/telehandler-lift-plan-templates', title: 'Telehandler Lift Plan Templates' },
              { href: '/resources/lift-plan-templates', title: 'All Lift Plan Templates' },
              { href: '/resources/load-weight-calculator', title: 'Load Weight Calculator' },
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
