import Link from 'next/link'
import InlineQuoteForm from '@/components/InlineQuoteForm'

// GC14 resource page (competitor battle plan, Jun 2026).
//
// Why this page exists: the "lift plan template" SERPs are dominated by
// the GC14 ecosystem — CITB's official PDF plus US form-mill sites
// (pdfFiller, SignNow, CocoSign) that wrap the same form behind paid
// subscriptions with zero guidance. Nobody ranking explains the form or
// offers a free editable alternative with real Appointed Person
// guidance. This page captures that demand honestly: explain GC14,
// link the official CITB copy (never rehost it — CITB copyright),
// and offer our own original template as the free editable alternative.

export const metadata = {
  title: 'GC14 Lift Plan Template + Free Alternative',
  description:
    'What the CITB GC14 lift plan form is, how to complete it section by section, and a free editable GC14-style template (Word) from a CPCS Appointed Person.',
  keywords:
    'gc14 lift plan, gc14 lift plan template, gc14 form, gc14 lift plan citb, citb lift plan template, gc14 template word, gc14 lift plan template free download, ge700 lift plan form',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/gc14-lift-plan-template',
  },
  openGraph: {
    title: 'GC14 Lift Plan Form Explained + Free Editable Alternative',
    description:
      'The CITB GC14 lift plan form explained section by section by a CPCS A61 Appointed Person — plus a free editable Word alternative with no signup.',
    url: 'https://www.rmtsafetysolutions.com/resources/gc14-lift-plan-template',
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
      name: 'What is the GC14 lift plan form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'GC14 is a blank lift plan form published by CITB (the Construction Industry Training Board) as part of its GE700 Construction Site Safety publication. It gives a structured format for recording a lifting operation plan — the lift details, equipment, load, lifting accessories, ground conditions, hazards and personnel. It is a recording form, not guidance: it does not tell you how to plan the lift, and it must be completed by a competent person.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the GC14 form mandatory for lift plans in the UK?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. No specific form is mandatory. LOLER 1998 Regulation 8 requires every lifting operation to be properly planned by a competent person, but it does not prescribe a format. GC14 is one widely recognised format; bespoke formats from Appointed Persons and crane companies are equally acceptable provided they address all the risks of the operation. Principal contractors accept any competent, complete format.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I download the official GC14 form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The official GC14 form is published by CITB within its GE700 Construction Site Safety materials, and CITB hosts a PDF copy on citb.co.uk. Beware of third-party form websites that wrap the same CITB form behind paid subscriptions — the original is CITB copyright, and paying a US form site to download a UK training body form adds nothing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get a GC14-style lift plan template in Word?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'CITB publishes GC14 as a PDF rather than an editable Word document. If you want an editable template covering the same ground, our free generic lift plan template is an original Word document structured the same way — lift details and sign-off, categorisation, equipment, load, accessories with WLLs, radius and capacity verification, ground conditions, hazards, personnel, procedure and briefing record — aligned with LOLER 1998 and BS 7121, with no email signup.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who can complete a GC14 lift plan form?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The same competence rules apply regardless of the form used: under LOLER 1998 the plan must be prepared by a competent person with adequate training, knowledge and experience. For Basic lifts that may be a competent site supervisor; for Standard and Complex lifts UK industry practice expects a CPCS A61 Appointed Person to prepare or approve the plan.',
      },
    },
  ],
}

export default function Gc14LiftPlanTemplate() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-slate-950 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-amber-400 font-medium mb-4">CITB Form Explained — Plus a Free Editable Alternative</p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              The GC14 Lift Plan Form, Explained
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              GC14 is the CITB lift plan form most UK site managers recognise — and most websites
              offering it either charge for a free document or hand you a blank form with no
              guidance. This page explains what GC14 is, how a CPCS A61 Appointed Person actually
              completes each section, and gives you a{' '}
              <Link href="/resources/lift-plan-templates" className="text-amber-400 hover:text-amber-300 underline">
                free editable Word alternative
              </Link>{' '}
              with no signup.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#alternative" className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition">
                Free Editable Template
              </a>
              <Link href="/services/lift-plans" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold transition border border-slate-700">
                Have It Written For You →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is GC14 */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">What is GC14?</h2>
          <div className="max-w-3xl space-y-4 text-slate-300">
            <p>
              GC14 is a blank lift plan form published by <strong>CITB</strong> (the Construction
              Industry Training Board) as part of its GE700 <em>Construction Site Safety</em>{' '}
              publication. It provides a structured format for recording the plan for a lifting
              operation — equipment, load, lifting accessories, ground conditions, hazards and
              personnel — and it is one of the most widely recognised lift plan formats on UK
              sites.
            </p>
            <p>
              Two things GC14 is <strong>not</strong>: it is not mandatory (LOLER 1998 Regulation 8
              requires competent planning, not a particular form — see our guide to{' '}
              <Link href="/blog/what-is-a-lift-plan" className="text-amber-400 hover:text-amber-300 underline">
                what a lift plan is
              </Link>
              ), and it is not guidance. The form tells you <em>what</em> to record, not <em>how</em>{' '}
              to plan the lift. A blank GC14 completed by someone without the competence LOLER
              requires is not a lift plan — it is paperwork.
            </p>
            <p>
              The official form is CITB copyright, so we do not rehost it here. You can find the
              original PDF on{' '}
              <a href="https://www.citb.co.uk/" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 underline">
                citb.co.uk
              </a>
              . Be wary of third-party "form filler" websites offering GC14 downloads — several
              wrap the same free CITB form behind paid subscriptions while adding no guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Section-by-section guidance */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Completing a GC14-Style Lift Plan — Appointed Person Guidance
          </h2>
          <p className="text-slate-300 max-w-3xl mb-12">
            Whatever format you use — GC14 or any equivalent — these are the sections that
            decide whether the plan passes a principal contractor&apos;s review. Guidance from
            reviewing hundreds of subcontractor submissions:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Lift details & categorisation',
                desc: 'Identify the operation precisely and categorise it (Basic / Standard / Complex under BS 7121). The category drives everything else — under-categorising a lift is the fastest route to rejection.',
              },
              {
                title: 'Lifting appliance',
                desc: 'Make, model and exact configuration — boom length, counterweight, outriggers or stabilisers. State the duty chart used and confirm the thorough examination certificate is current (LOLER Reg 9). Missing or expired certs are a top-three rejection cause.',
              },
              {
                title: 'Load & gross load',
                desc: 'Weight with its source (weighed, documented or calculated), dimensions, centre of gravity, lift points — and the gross load including every lifting accessory. Forgetting accessory weight is the most common calculation error we see.',
              },
              {
                title: 'Lifting accessories',
                desc: 'Schedule every sling, shackle and beam with its WLL, ID and examination date. Accessories need thorough examination at least every 6 months.',
              },
              {
                title: 'Radius & capacity verification',
                desc: 'Rated capacity at the maximum working radius against gross load, expressed as percentage utilisation. Plan for the worst-case radius, not the best. Keep utilisation at or below 80% for routine lifts unless explicitly justified.',
              },
              {
                title: 'Ground, hazards & exclusion zones',
                desc: 'Ground bearing capacity and matting at the standing position; services, voids and excavations; overhead lines, structures and the public; exclusion zone arrangements with named enforcement.',
              },
              {
                title: 'Personnel & communications',
                desc: 'Named Appointed Person, lift supervisor, operator and slinger/signaller with card numbers — plus the communication method. Anonymous role boxes get questioned; named, carded people do not.',
              },
              {
                title: 'Procedure, briefing & sign-off',
                desc: 'A step-by-step lift sequence, emergency arrangements, and a briefing record every involved person signs. An unsigned plan is treated as an unbriefed plan.',
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

      {/* The free alternative */}
      <section id="alternative" className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            A Free, Editable GC14-Style Alternative
          </h2>
          <p className="text-slate-300 max-w-3xl mb-8">
            CITB publishes GC14 as a PDF. If you want an editable Word document covering the same
            ground — with the BS 7121 lift categorisation built in — download our original
            template. Free, no email, reusable across projects.
          </p>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 px-4 text-amber-400 font-semibold">Option</th>
                  <th className="py-4 px-4 text-amber-400 font-semibold">Cost</th>
                  <th className="py-4 px-4 text-amber-400 font-semibold">Format</th>
                  <th className="py-4 px-4 text-amber-400 font-semibold">Guidance included</th>
                </tr>
              </thead>
              <tbody className="text-slate-300 text-sm">
                <tr className="border-b border-slate-800 hover:bg-slate-900/50">
                  <td className="py-3 px-4 text-white">Official CITB GC14</td>
                  <td className="py-3 px-4">Free (via CITB)</td>
                  <td className="py-3 px-4">PDF (blank form)</td>
                  <td className="py-3 px-4">None — recording form only</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-900/50">
                  <td className="py-3 px-4 text-white">Third-party form-filler sites</td>
                  <td className="py-3 px-4">Paid subscription</td>
                  <td className="py-3 px-4">Online editor</td>
                  <td className="py-3 px-4">None — same CITB form, paywalled</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-900/50">
                  <td className="py-3 px-4 text-white">RMT generic lift plan template</td>
                  <td className="py-3 px-4">Free, no signup</td>
                  <td className="py-3 px-4">Editable Word (.docx)</td>
                  <td className="py-3 px-4">Completion notes + this page, by a CPCS A61 AP</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="/downloads/lift-plan-template.docx"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download the Free Template (.docx)
            </a>
            <Link href="/resources/lift-plan-templates" className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl font-semibold transition border border-slate-700">
              Template Guide & Equipment Versions →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">GC14 Questions, Answered</h2>
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
            serviceName="Lift Plan (from GC14 page)"
            heading="Rather have it written by the Appointed Person? Plans from £200, 24-48h turnaround"
          />
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related Resources &amp; Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/resources/lift-plan-templates', title: 'Free Lift Plan Template' },
              { href: '/blog/lift-plan-cost-uk', title: 'Lift Plan Costs Explained' },
              { href: '/blog/what-is-a-lift-plan', title: 'What is a Lift Plan?' },
              { href: '/services/lift-plans', title: 'Lift Plan Writing Service' },
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
