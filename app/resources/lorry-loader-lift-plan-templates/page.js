import Link from 'next/link'

export const metadata = {
  title: 'Free Lorry Loader Lift Plan Template (HIAB)',
  description: 'Free lorry loader / HIAB lift plan template. 17-section, BS 7121-4 compliant, ALLMI-aligned, with pre-populated hazards and a 5×5 risk matrix.',
  keywords: 'lorry loader lift plan template, HIAB lift plan template, free lorry loader lift plan, ALLMI lift plan template, BS 7121-4 lorry loader, lorry mounted crane lift plan, loader crane lift plan, HIAB risk assessment template, LOLER lorry loader lift plan, lift plan template download UK',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/lorry-loader-lift-plan-templates',
  },
  openGraph: {
    title: 'Free Lorry Loader Lift Plan Template (HIAB)',
    description: 'Download a free 17-section lorry loader / HIAB lift plan template, BS 7121-4 and ALLMI aligned, with 12 pre-populated hazards and a 5×5 risk matrix.',
    url: 'https://www.rmtsafetysolutions.com/resources/lorry-loader-lift-plan-templates',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
    images: [
      {
        url: 'https://www.rmtsafetysolutions.com/images/precast-concrete-lift.webp',
        width: 1200,
        height: 630,
        alt: 'Lorry loader (HIAB) vehicle-mounted crane lifting a precast load on a UK construction site',
      },
    ],
  },
}

export default function LorryLoaderTemplatesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-medium mb-4">FREE TEMPLATE — BS 7121-4 &amp; ALLMI ALIGNED</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Lorry Loader Lift Plan Template (HIAB / Loader Crane)
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            A universal lorry loader lift plan template that scales from Basic through Intermediate to
            Complex lifts. Written by a CPCS Appointed Person with 35+ years of construction experience
            and graded against a 17-point lift plan review covering BS 7121-1, BS 7121-4, LOLER 1998,
            ALLMI and CDM 2015. Download, customise, and use on your projects — completely free.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/downloads/lorry-loader-lift-plan-template.docx"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Lift Plan Template (.docx)
            </a>
            <a
              href="/downloads/lorry-loader-lift-plan-template.pdf"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Preview (.pdf)
            </a>
          </div>
        </div>
      </section>

      {/* Why This Template */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Why Use This Template?</h2>
          <p className="text-slate-300 mb-12 max-w-3xl">
            Most lorry loader lift plan templates floating around the industry are repurposed mobile
            crane plans with the word &quot;HIAB&quot; pasted into the equipment section. They miss the parts
            that matter for a lorry-mounted loader crane: stabiliser reaction and pad calculations
            against actual ground bearing data, ALLMI Lift Plan Calculator integration, lorry-loader-
            specific hazards (truck overturn, jib stowage, kerbside delivery), and BS 7121-4 — the
            standard that actually applies. This template has been written from a clean sheet against
            those requirements and graded against a 17-point review. For the full background on
            when a plan is required and how lorry loader operations are planned, see our{' '}
            <Link href="/blog/lorry-loader-lift-plans-guide" className="text-amber-400 hover:text-amber-300 underline">
              complete guide to lorry loader lift plans
            </Link>.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Universal — Basic / Intermediate / Complex',
                desc: 'One template that scales. Categorise the lift under BS 7121-1 Section 6, then complete only the sections that apply — every section is either filled in or explicitly marked &quot;N/A — reason&quot;. No deletion of structure, no missed review points.',
              },
              {
                title: 'Built to BS 7121-4 & ALLMI',
                desc: 'Every section is tagged with its P01–P17 review point (Scope, Categorisation, Lifting Appliance, Lifting Accessories, Duties & Capacities, Load Details, Utilisation, Personnel, Site Preparation, Stabiliser Loading, Environment, Hazards, Risk Assessment, Attachments, Communication, HS&W Standards). Integrates directly with the free ALLMI Lift Plan Calculator.',
              },
              {
                title: 'Pre-Populated Risk Register',
                desc: 'Section 14 ships with 12 pre-populated lorry-loader hazards and a baseline set of controls, scored against a Tier-1-standard 5×5 risk matrix with initial and residual risk ratings. AMBER / RED residual risk triggers senior sign-off automatically.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-slate-900 border border-slate-800 p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-amber-400 mb-4">{item.title}</h3>
                <p
                  className="text-slate-300"
                  dangerouslySetInnerHTML={{ __html: item.desc }}
                />
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
              <p className="text-amber-400 font-medium mb-2">WHAT&apos;S IN THE TEMPLATE</p>
              <h2 className="text-3xl font-bold text-white mb-6">
                17-Section Lorry Loader Lift Plan
              </h2>
              <p className="text-slate-300 mb-6">
                A comprehensive 17-section lift plan template covering every aspect of lorry loader
                (HIAB / Palfinger / Fassi / Atlas / PM) lifting operations. Designed against BS 7121-1
                Section 6, BS 7121-4:2010+A1:2013, LOLER 1998, PUWER 1998, CDM 2015, the ALLMI Code of
                Practice for the Safe Use of Lorry Loaders, and HSE GS6 for overhead lines.
              </p>
              <a
                href="/downloads/lorry-loader-lift-plan-template.docx"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
              >
                Download Lift Plan Template (.docx)
              </a>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">17-Section Structure (P01–P17):</h3>
              {[
                {
                  section: 'Cover, Revision History & How-to-Use',
                  detail: 'Document control table, Standing Rules, revision history, authoring workflow and template conventions. AP details captured at review stage.',
                },
                {
                  section: 'Section 1 — Scope of Work (P01)',
                  detail: 'Description of works, location on site, methodology summary and sequence of lifts. Anchors the rest of the plan.',
                },
                {
                  section: 'Section 2 — Lift Categorisation (P02)',
                  detail: 'Basic / Intermediate / Complex categorisation under BS 7121-1 Section 6 and BS 7121-4. Justification + reference required — no unticked boxes.',
                },
                {
                  section: 'Sections 3–5 — Loader, Appliance & Accessories (P03–P05)',
                  detail: 'Make / model / serial of the lorry loader, condition and safety system check (overload protection, stability monitoring, jib stowage), and a full lifting accessories register with sling angles ≤ 30° and BS EN 818-4 mode factors.',
                },
                {
                  section: 'Section 6 — Duties & Capacities (P06)',
                  detail: 'Worst-case capacity at radius for each lift. Built to integrate with the free ALLMI Lift Plan Calculator (.xlsm), or run manually with chart-lookup working shown.',
                },
                {
                  section: 'Section 7 — Load Details (P07)',
                  detail: 'Load weights with mandatory source (manufacturer data sheet, weighbridge ticket, or calculation with working). Stated weight without source = automatic rejection at review.',
                },
                {
                  section: 'Section 8 — Utilisation Check (P08)',
                  detail: 'Utilisation % against an explicit threshold — 90% default, 80% Tier-1 framework standard, 50% for complex / lifting persons / unstable loads. Critical checks for rigging weight and worst-case radius.',
                },
                {
                  section: 'Sections 9–10 — Personnel & Site Prep (P09–P10)',
                  detail: 'AP details (CPCS A61 / ALLMI), Lift Supervisor, Slinger-Signaller, Operator card type. Site preparation, access, exclusion zones and pre-lift walk.',
                },
                {
                  section: 'Section 11 — Stabiliser Loading & Ground Conditions (P11)',
                  detail: 'Worst-case stabiliser reaction, pad area, point load vs. allowable ground bearing pressure. Spreader pad / mat specification by dimension and material — not &quot;adequate pads&quot;.',
                },
                {
                  section: 'Sections 12–13 — Environment & Proximity Hazards (P12–P13)',
                  detail: 'Weather and wind speed limits, overhead lines (GS6), buried services, proximity to excavations, traffic management, kerbside delivery, public interface.',
                },
                {
                  section: 'Section 14 — Risk Assessment (P14)',
                  detail: '5×5 risk matrix (Tier-1 contractor standard) with 12 pre-populated lorry-loader hazards: truck overturn, stabiliser failure, jib stowage, sling failure, dropped load, snag on overhead lines, public interface, kerbside operation, and more. Initial + residual scoring, senior sign-off triggered by AMBER / RED.',
                },
                {
                  section: 'Section 15 — Attachments (P15)',
                  detail: 'Tick-list of supporting documents — load chart, data sheet, site drawing, exclusion zone drawing, ALLMI calculator PDF output, GS6 calc, permit pack, hand signals chart.',
                },
                {
                  section: 'Sections 16–17 — Communication & HS&W (P16–P17)',
                  detail: 'Communication method, BS 7121 hand signals, and a confirmation tick-list against LOLER, PUWER, BS 7121-1 & -4, CDM 2015, HSWA 1974, the ALLMI Code of Practice, GS6, and the PC&apos;s site-specific lift plan.',
                },
                {
                  section: 'Pre-Lift Internal Check & Sign-off',
                  detail: 'Principal Contractor on-day verification block (LOLER certs, accessory certs, operative cards verified on the day) plus AP sign-off block. Standing Rules built in.',
                },
              ].map((item) => (
                <div key={item.section} className="border-l-2 border-amber-500/30 pl-4">
                  <p
                    className="text-white font-medium"
                    dangerouslySetInnerHTML={{ __html: item.section }}
                  />
                  <p
                    className="text-slate-400 text-sm"
                    dangerouslySetInnerHTML={{ __html: item.detail }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Risk Register Detail */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1 space-y-4">
              <h3 className="text-lg font-semibold text-white">12 Pre-Populated Hazards — review and adapt:</h3>
              {[
                {
                  category: 'Stability & Set-Up',
                  items: 'Lorry overturn during deployment, stabiliser sinkage / pad failure, jib stowage incidents during travel mode, set-up on uneven or soft ground.',
                },
                {
                  category: 'Load & Rigging',
                  items: 'Dropped load, sling / chain / shackle failure, sling angle exceeding 30°, unsecured load on the bed during travel, load shift during slewing.',
                },
                {
                  category: 'Proximity Hazards',
                  items: 'Overhead power lines (GS6 exclusion zones), buried services, work adjacent to excavations, kerbside delivery with public footpath / carriageway interface.',
                },
                {
                  category: 'Personnel & Communication',
                  items: 'Operator visibility / blind lifts, miscommunication between operator and Slinger-Signaller, untrained banksman, exclusion zone breach by site personnel or members of the public.',
                },
                {
                  category: 'Environmental & Equipment',
                  items: 'Wind speed exceedance, overload alarm / capacity limiter interference, hydraulic failure / hose burst, defective or out-of-date LOLER certs not caught on-day.',
                },
              ].map((item) => (
                <div key={item.category} className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                  <p className="text-amber-400 font-semibold mb-2">{item.category}</p>
                  <p className="text-slate-300 text-sm">{item.items}</p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-amber-400 font-medium mb-2">RISK ASSESSMENT REGISTER</p>
              <h2 className="text-3xl font-bold text-white mb-6">
                5×5 Matrix with Initial &amp; Residual Scoring
              </h2>
              <p className="text-slate-300 mb-6">
                Section 14 is a fully populated lorry-loader risk register using a Tier-1 standard 5×5
                matrix (Severity × Likelihood). Each hazard is scored twice — once for initial risk
                (existing controls only) and once for residual risk (after additional controls). The
                residual score drives the sign-off requirement: any AMBER or RED residual rating
                triggers senior sign-off before the lift can proceed.
              </p>
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-xl mb-6">
                <h3 className="text-white font-semibold mb-3">Action Levels (Residual)</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-center py-1 rounded bg-red-500/20 text-red-400 font-semibold">16–25</span>
                    <span className="text-slate-300">RED — do not proceed; redesign lift</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-center py-1 rounded bg-amber-500/20 text-amber-400 font-semibold">10–15</span>
                    <span className="text-slate-300">AMBER — senior sign-off required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-center py-1 rounded bg-yellow-400/20 text-yellow-300 font-semibold">5–9</span>
                    <span className="text-slate-300">YELLOW — AP sign-off, monitor</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-16 text-center py-1 rounded bg-green-500/20 text-green-400 font-semibold">1–4</span>
                    <span className="text-slate-300">GREEN — acceptable, proceed</span>
                  </div>
                </div>
              </div>
              <a
                href="/downloads/lorry-loader-lift-plan-template.docx"
                className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
              >
                Download Template (.docx)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ALLMI Integration */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-amber-400 font-medium mb-2">ALLMI INTEGRATION</p>
            <h2 className="text-3xl font-bold text-white mb-6">
              Designed to Run Alongside the ALLMI Lift Plan Calculator
            </h2>
            <p className="text-slate-300 mb-4">
              The Association of Lorry Loader Manufacturers and Importers (ALLMI) publishes a free Lift
              Plan Calculator (.xlsm) which is the industry standard tool for sizing a lorry loader lift
              against capacity at radius. Section 6 of this template is built around that calculator —
              run the calculator, attach the PDF output, and transcribe the worst-case figures into
              Section 6.2.
            </p>
            <p className="text-slate-300">
              For lifts where the ALLMI calculator is not used, Section 6.3 captures the chart-lookup
              working manually — capacity figure, row / column reference, rigging weight, total
              suspended load, and utilisation percentage. Either way, the figures sit in one consistent
              format that a 17-point reviewer can audit in a single pass.
            </p>
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
              { code: 'BS 7121-1:2016', title: 'Safe Use of Cranes — Part 1: General' },
              { code: 'BS 7121-4:2010+A1:2013', title: 'Safe Use of Cranes — Part 4: Lorry Loaders' },
              { code: 'LOLER 1998', title: 'Lifting Operations and Lifting Equipment Regulations' },
              { code: 'PUWER 1998', title: 'Provision and Use of Work Equipment Regulations' },
              { code: 'CDM 2015', title: 'Construction (Design and Management) Regulations' },
              { code: 'HSWA 1974', title: 'Health and Safety at Work etc. Act' },
              { code: 'ALLMI Code of Practice', title: 'Safe Use of Lorry Loaders' },
              { code: 'HSE GS6', title: 'Avoidance of Danger from Overhead Power Lines' },
              { code: 'BS EN 818-4', title: 'Short Link Chain for Lifting — Sling Mode Factors' },
            ].map((ref) => (
              <div
                key={ref.code}
                className="bg-slate-900 border border-slate-800 p-4 rounded-lg"
              >
                <p className="text-amber-400 font-semibold text-sm">{ref.code}</p>
                <p className="text-slate-400 text-sm">{ref.title}</p>
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
              This template is provided as a starting point for your lorry loader lifting operations
              documentation. It is your responsibility to review, adapt, and complete it for your
              specific project, vehicle, loader crane, load, site conditions and lifting operations. A
              competent Appointed Person must prepare or review the completed lift plan before
              operations commence — AP name, card type and registration number are required at review
              stage; AP signature, lifting appliance serial number, LOLER thorough examination
              certificates and named operative card numbers are on-day verifications by the Principal
              Contractor.
            </p>
            <p className="text-slate-300">
              As per BS 7121-1:2016, BS 7121-4:2010+A1:2013, CDM 2015 and LOLER 1998, the user must
              ensure they properly risk assess and plan their own lifting operations to discharge their
              legal duties. No liability is accepted for incidents resulting from the use of this
              template.
            </p>
          </div>
        </div>
      </section>

      {/* Worked example — battle plan phase 2 (Jun 2026). The HIAB SERP
          is held by incidental PDFs and document dumps; a concrete worked
          example is the depth signal none of them have. */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Worked Example: A Typical HIAB Delivery Lift
          </h2>
          <p className="text-slate-300 max-w-3xl mb-10">
            How the template plays out on the most common lorry loader operation in UK
            construction — delivering palletised materials over a site hoarding.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'The operation',
                desc: 'A 26-tonne lorry loader delivering two packs of blockwork (1.4 tonnes each) over a 2.4m hoarding to a laydown area 7.5m from the vehicle centreline. Brick grab attachment, kerbside setup on a live residential street.',
              },
              {
                title: 'Capacity check',
                desc: 'Crane rated 2.05 tonnes at 8m on the manufacturer chart with stabilisers fully deployed. Gross load: 1.4t pack + 0.31t brick grab = 1.71 tonnes at a worst-case 7.8m radius — 83% utilisation. Acceptable for a planned, supervised delivery, but tight enough that part-deployed stabilisers or a longer reach would kill it. That maths is exactly what the template forces you to write down.',
              },
              {
                title: 'The controls that matter',
                desc: 'Stabilisers fully deployed on mats (footpath build-up unverified), pedestrian exclusion with barriers and a banksman on the footway, no slewing over the occupied carriageway, pack lifted 300mm and paused to confirm stability before the main slew, wind checked against the 0.8m² pack face.',
              },
              {
                title: 'What gets it rejected',
                desc: 'The versions of this lift that fail review: chart figure quoted for full stabiliser deployment while the kerbside leg is part-deployed, brick grab weight missing from the gross load, no thorough-examination date for the grab, and "banksman as required" instead of a named slinger/signaller. All four are fields in the template.',
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

      {/* FAQ — captures long-tail and "People also ask" style queries
          (do you need a lift plan for a HIAB, which standard applies, who can
          write one). FAQPage JSON-LD is emitted at the foot of the page. */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Lorry Loader Lift Plan Template — FAQs</h2>
          <div className="space-y-6">
            {[
              {
                q: 'Do you need a lift plan for a lorry loader / HIAB?',
                a: 'Yes. Under LOLER 1998 every lifting operation must be planned by a competent person, and that includes routine lorry loader and HIAB deliveries. The level of detail should be proportionate to the risk, but a plan is required whenever the crane lifts and moves a load — including offloading materials to the ground.',
              },
              {
                q: 'Which standard applies to lorry loader lift plans?',
                a: 'BS 7121-4:2010+A1:2013 (Safe use of cranes — Part 4: Lorry loaders) sits alongside the general BS 7121-1:2016, LOLER 1998, PUWER 1998 and the ALLMI Code of Practice for the Safe Use of Lorry Loaders. This template is structured against all of them.',
              },
              {
                q: 'Is this lorry loader lift plan template really free?',
                a: 'Yes — the template is free to download and use on your projects in Microsoft Word (.docx) format, with a PDF preview also available. It is provided as a starting point; you must adapt and complete it for your specific vehicle, load, site and lifting operation.',
              },
              {
                q: 'Who can write or sign off a lorry loader lift plan?',
                a: 'The plan must be prepared or reviewed by a competent person — in practice a CPCS or ALLMI Appointed Person. The lorry loader operator typically holds CPCS A36 (or the ALLMI equivalent). AP name, card type and registration number are required at review stage, and operative card numbers are verified on the day by the Principal Contractor.',
              },
              {
                q: 'What is the difference between a Basic and a Complex lorry loader lift?',
                a: 'A Basic lift is low-risk and routine; a Complex lift involves higher-risk factors such as tandem lifts, lifts over the public highway, proximity to overhead lines, or loads close to the loader\u2019s capacity. This universal template scales across Basic, Intermediate and Complex — you categorise the lift in Section 2 under BS 7121-1 Section 6 and complete the sections that apply.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-slate-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Professional Service */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Need a Professional Lorry Loader Lift Plan?
          </h2>
          <p className="text-slate-800 mb-4 max-w-2xl mx-auto">
            This template is great for straightforward Basic lifts. For Intermediate or Complex lifts —
            tandem loader lifts, kerbside deliveries near overhead lines, lifts over the public highway,
            or anything sitting close to the loader&apos;s capacity envelope — get a professional lift plan
            from a CPCS Appointed Person with 35 years of experience.
          </p>
          <p className="text-slate-700 mb-8">
            Fast turnaround. Tier 1 contractor approved. LOLER and BS 7121-4 compliant.
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
          <h2 className="text-2xl font-bold text-white mb-8">Our Lorry Loader &amp; Related Services</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { href: '/services/lorry-loader-lift-plans', title: 'Lorry Loader Lift Plans' },
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

      {/* Related Templates */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Other Free Lift Plan Templates</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link
              href="/resources/excavator-lift-plan-templates"
              className="bg-slate-950 border border-slate-800 hover:border-amber-400 p-6 rounded-xl text-white font-medium transition"
            >
              <p className="text-amber-400 text-sm font-semibold mb-1">EXCAVATOR</p>
              Excavator Lift Plan Template &amp; Risk Assessment →
            </Link>
            <Link
              href="/resources/telehandler-lift-plan-templates"
              className="bg-slate-950 border border-slate-800 hover:border-amber-400 p-6 rounded-xl text-white font-medium transition"
            >
              <p className="text-amber-400 text-sm font-semibold mb-1">TELEHANDLER</p>
              Telehandler Lift Plan Template (Fork-Carried &amp; Underslung) →
            </Link>
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
            name: 'Free Lorry Loader Lift Plan Template (.docx)',
            description:
              'Download a free 17-section lorry loader / HIAB lift plan template, BS 7121-4 and ALLMI aligned, with 12 pre-populated hazards and a 5×5 risk matrix.',
            url: 'https://www.rmtsafetysolutions.com/resources/lorry-loader-lift-plan-templates',
            provider: {
              '@type': 'Organization',
              name: 'RMT Safety Solutions',
              url: 'https://www.rmtsafetysolutions.com',
            },
            mainEntity: [
              {
                '@type': 'DigitalDocument',
                name: 'Lorry Loader Lift Plan Template',
                description:
                  '17-section universal lorry loader / HIAB lift plan template (Basic / Intermediate / Complex), BS 7121-1 & BS 7121-4 compliant, ALLMI-aligned, with 12 pre-populated hazards and 5×5 risk matrix.',
                encodingFormat:
                  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
                url: 'https://www.rmtsafetysolutions.com/downloads/lorry-loader-lift-plan-template.docx',
              },
            ],
          }),
        }}
      />

      {/* FAQPage — mirrors the on-page FAQ block above as structured data. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Do you need a lift plan for a lorry loader / HIAB?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. Under LOLER 1998 every lifting operation must be planned by a competent person, and that includes routine lorry loader and HIAB deliveries. The level of detail should be proportionate to the risk, but a plan is required whenever the crane lifts and moves a load — including offloading materials to the ground.',
                },
              },
              {
                '@type': 'Question',
                name: 'Which standard applies to lorry loader lift plans?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'BS 7121-4:2010+A1:2013 (Safe use of cranes — Part 4: Lorry loaders) sits alongside the general BS 7121-1:2016, LOLER 1998, PUWER 1998 and the ALLMI Code of Practice for the Safe Use of Lorry Loaders.',
                },
              },
              {
                '@type': 'Question',
                name: 'Is this lorry loader lift plan template really free?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes — the template is free to download and use on your projects in Microsoft Word (.docx) format, with a PDF preview also available. It is provided as a starting point; you must adapt and complete it for your specific vehicle, load, site and lifting operation.',
                },
              },
              {
                '@type': 'Question',
                name: 'Who can write or sign off a lorry loader lift plan?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The plan must be prepared or reviewed by a competent person — in practice a CPCS or ALLMI Appointed Person. The lorry loader operator typically holds CPCS A36 or the ALLMI equivalent. AP name, card type and registration number are required at review stage.',
                },
              },
              {
                '@type': 'Question',
                name: 'What is the difference between a Basic and a Complex lorry loader lift?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A Basic lift is low-risk and routine; a Complex lift involves higher-risk factors such as tandem lifts, lifts over the public highway, proximity to overhead lines, or loads close to the loader\u2019s capacity. This universal template scales across Basic, Intermediate and Complex.',
                },
              },
            ],
          }),
        }}
      />

      {/* BreadcrumbList — mirrors the breadcrumbs on the excavator and
          telehandler template pages so the URL stays eligible for the
          breadcrumb rich result in Google Search. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
              { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.rmtsafetysolutions.com/resources' },
              { '@type': 'ListItem', position: 3, name: 'Lorry Loader Lift Plan Templates', item: 'https://www.rmtsafetysolutions.com/resources/lorry-loader-lift-plan-templates' },
            ],
          }),
        }}
      />
    </>
  )
}
