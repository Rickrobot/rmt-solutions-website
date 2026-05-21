import Link from 'next/link'

export const metadata = {
  title: 'Free Overhead & Gantry Crane Lift Plan Template | BS 7121-7',
  description: 'Download a free overhead, gantry and bridge crane lift plan template to BS 7121-7 and LOLER 1998. 11 fillable sections covering load, SWL, route, tandem lifts, accessories and team briefing. From a CPCS Appointed Person.',
  keywords: 'overhead crane lift plan template, gantry crane lift plan template, free overhead crane lift plan, EOT crane lift plan template, bridge crane lift plan, BS 7121-7 template, LOLER lift plan template, factory crane lift plan template, tandem lift plan template',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/overhead-gantry-crane-lift-plan-templates',
  },
  openGraph: {
    title: 'Free Overhead & Gantry Crane Lift Plan Template | BS 7121-7',
    description: 'Download a free overhead, gantry and bridge crane lift plan template to BS 7121-7 and LOLER 1998. From a CPCS Appointed Person.',
    url: 'https://www.rmtsafetysolutions.com/resources/overhead-gantry-crane-lift-plan-templates',
    type: 'website',
  },
}

export default function OverheadCraneTemplatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-medium mb-4">FREE TEMPLATE — BS 7121-7 &amp; LOLER 1998</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Overhead &amp; Gantry Crane Lift Plan Template
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            A professional lift plan template for overhead travelling (EOT), gantry, goliath, bridge
            and jib cranes — built to BS 7121-7 and LOLER 1998 by a CPCS Appointed Person with over
            35 years of experience. Download, customise and use on your factory, warehouse or
            fabrication-yard lifts — completely free.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/downloads/overhead-gantry-crane-lift-plan-template.docx"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Lift Plan Template (.docx)
            </a>
            <Link
              href="/services/overhead-gantry-crane-lift-plans"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-semibold transition"
            >
              Our Overhead Crane Service
            </Link>
          </div>
        </div>
      </section>

      {/* Why This Template */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Why Use This Template?</h2>
          <p className="text-slate-300 mb-12 max-w-3xl">
            Most lift plan templates online are written for mobile cranes on construction sites and
            ignore the hazards that actually matter for fixed factory cranes — loads carried over
            people, pendant operation, tandem lifts and runway loading. This template has been built
            specifically for overhead and gantry crane operations under BS 7121-7.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Built to BS 7121-7',
                desc: 'Every section reflects the safe use of overhead travelling cranes — routine vs non-routine lift categorisation, SWL verification, travel route and exclusion zones, and the load-share checks needed for tandem (twin-crane) lifts.',
              },
              {
                title: 'Overhead-specific hazards',
                desc: 'A pre-structured hazard table covers the risks generic templates miss: loads over personnel, load swing and side-pull, two-blocking, pendant blind spots, tandem-lift load shift and runway/structural overload.',
              },
              {
                title: 'Ready to use',
                desc: 'The template is in .docx format with fillable fields and tables throughout — crane details, load and utilisation, accessories register, team competence, method statement, schedule of lifts, change log and full authorisation block.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-slate-900 border border-slate-800 p-8 rounded-xl">
                <h3 className="text-xl font-semibold text-amber-400 mb-4">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template Detail */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-amber-400 font-medium mb-2">THE TEMPLATE</p>
              <h2 className="text-3xl font-bold text-white mb-6">
                Overhead Crane Lift Plan Template
              </h2>
              <p className="text-slate-300 mb-6">
                An 11-section lift plan template covering every aspect of an overhead, gantry or jib
                crane lifting operation. Designed to meet the requirements of LOLER 1998,
                BS 7121-1 and BS 7121-7 in full — and to be proportionate, so routine production
                lifts and one-off complex lifts are both handled correctly.
              </p>
              <a
                href="/downloads/overhead-gantry-crane-lift-plan-template.docx"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
              >
                Download Lift Plan Template (.docx)
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">What&apos;s Included:</h3>
              {[
                {
                  section: 'Section 0 — Categorisation & Justification',
                  detail: 'Confirm whether the lift is routine or non-routine and whether a specific written plan is required, with BS 7121-1 lift category.',
                },
                {
                  section: 'Sections 1–2 — Project & Crane Details',
                  detail: 'Site and bay details plus crane type (EOT / goliath / jib), SWL, span, control type, limit switches and current LOLER thorough examination.',
                },
                {
                  section: 'Section 3 — Load Details',
                  detail: 'Weight, dimensions, centre of gravity, lifting points, total weight including rigging, and load as a percentage of crane SWL (utilisation).',
                },
                {
                  section: 'Section 4 — Lifting Accessories',
                  detail: 'Register for slings, shackles, beams and below-the-hook devices with WLLs, IDs and examination status, plus sling-angle and spreader checks.',
                },
                {
                  section: 'Section 5 — Lifting Team & Competence',
                  detail: 'Appointed Person, Lift Supervisor, Operator and Slinger/Signaller with card and competence verification.',
                },
                {
                  section: 'Section 6 — Route & Loads Over People',
                  detail: 'Pick/set-down positions, travel route, occupied-area review, exclusion zones and the method for preventing loads travelling over persons.',
                },
                {
                  section: 'Section 7 — Hazard Identification',
                  detail: 'Overhead-crane-specific hazard table with control measures and residual-risk columns.',
                },
                {
                  section: 'Sections 8–9 — Method & Schedule',
                  detail: 'Step-by-step method statement with contingency, and a schedule of lifts with weight, SWL and utilisation.',
                },
                {
                  section: 'Sections 10–11 — Change Log & Authorisation',
                  detail: 'Change-management record, team briefing sign-off, and authorisation block for the competent person, Appointed Person and duty holder.',
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

      {/* Compliance Standards */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Standards &amp; Guidance Referenced
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { code: 'BS 7121-7', title: 'Safe Use of Cranes — Overhead Travelling Cranes' },
              { code: 'BS 7121-1', title: 'Code of Practice for Safe Use of Cranes — General' },
              { code: 'LOLER 1998', title: 'Lifting Operations and Lifting Equipment Regulations' },
              { code: 'PUWER 1998', title: 'Provision and Use of Work Equipment Regulations' },
              { code: 'HSWA 1974', title: 'Health and Safety at Work etc. Act' },
              { code: 'CDM 2015', title: 'Construction (Design and Management) Regulations' },
            ].map((ref) => (
              <div key={ref.code} className="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                <p className="text-amber-400 font-semibold text-sm">{ref.code}</p>
                <p className="text-slate-400 text-sm">{ref.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-amber-400 mb-4">Important Notice</h3>
            <p className="text-slate-300 mb-4">
              This template is provided as a starting point for your overhead and gantry crane
              lifting documentation. It is your responsibility to review, adapt and complete it for
              your specific facility, crane, load and conditions. A competent person — an Appointed
              Person where the lift is complex or a tandem lift — must prepare or review the
              completed plan before operations commence.
            </p>
            <p className="text-slate-300">
              As per BS 7121-7, BS 7121-1 and LOLER 1998, the user must ensure they properly risk
              assess and plan their own lifting operations to discharge their legal requirements. No
              liability is accepted for incidents resulting from the use of this template.
            </p>
          </div>
        </div>
      </section>

      {/* CTA — Professional Service */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need a Professional Overhead Crane Lift Plan?
          </h2>
          <p className="text-slate-800 mb-4 max-w-2xl mx-auto">
            This template is ideal for routine and straightforward lifts. For tandem (twin-crane)
            lifts, plant installation, maintenance lifts or anything near capacity — get a
            professional lift plan from a CPCS Appointed Person with 35 years of experience.
          </p>
          <p className="text-slate-700 mb-8">
            Fast turnaround. Manufacturer &amp; Tier 1 approved. BS 7121-7 and LOLER compliant.
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

      {/* Related Services */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Our Lift Plan Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/services/overhead-gantry-crane-lift-plans', title: 'Overhead & Gantry Crane Lift Plans' },
              { href: '/services/lift-plan-checking', title: 'Lift Plan Checking' },
              { href: '/services/lifting-operations-audit', title: 'Lifting Operations Audit' },
              { href: '/services/mobile-crane-lift-plans', title: 'Mobile Crane Lift Plans' },
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
            name: 'Free Overhead & Gantry Crane Lift Plan Template',
            description:
              'Download a free overhead, gantry and bridge crane lift plan template built to BS 7121-7 and LOLER 1998.',
            url: 'https://www.rmtsafetysolutions.com/resources/overhead-gantry-crane-lift-plan-templates',
            provider: {
              '@type': 'Organization',
              name: 'RMT Safety Solutions',
              url: 'https://www.rmtsafetysolutions.com',
            },
            mainEntity: [
              {
                '@type': 'DigitalDocument',
                name: 'Overhead & Gantry Crane Lift Plan Template',
                description:
                  'BS 7121-7 and LOLER 1998 compliant overhead crane lift plan template with 11 sections covering load, SWL, route, tandem lifts, accessories, method statement and team briefing.',
                encodingFormat: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                url: 'https://www.rmtsafetysolutions.com/downloads/overhead-gantry-crane-lift-plan-template.docx',
              },
            ],
          }),
        }}
      />
    </>
  )
}
