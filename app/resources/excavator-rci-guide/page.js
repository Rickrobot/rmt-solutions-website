import Link from 'next/link'
import RciTiers from '@/components/RciTiers'

export const metadata = {
  title: 'Excavator RCI Requirements (RCI vs RCL)',
  description:
    'When does an excavator need an RCI? UK legislation, the three tiers of device — overload warning, RCI and RCL — and what to require for lifts over 1 tonne.',
  keywords:
    'excavator RCI, rated capacity indicator excavator, do excavators need an RCI, RCI vs RCL, excavator lifting over 1 tonne, BS EN 474-5, ISO 8643, excavator load chart, rated capacity limiter, Xwatch, excavator check valve',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/excavator-rci-guide',
  },
  openGraph: {
    title: 'Excavator RCI Requirements: RCI vs RCL Explained',
    description:
      'UK legislation and the three tiers of excavator lifting device (overload warning, RCI, RCL), with a worked example. From a CPCS A61 Appointed Person.',
    url: 'https://www.rmtsafetysolutions.com/resources/excavator-rci-guide',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'article',
  },
}

const legislation = [
  {
    reg: 'LOLER 1998',
    text: 'The machine is now lifting equipment. Reg 4 (adequate strength and stability for each load), Reg 7 (marking of safe working load), Reg 8 (every lifting operation planned by a competent person, supervised and carried out safely), and Reg 9 (thorough examination — 12-monthly for the machine, 6-monthly for accessories).',
  },
  {
    reg: 'PUWER 1998',
    text: 'Suitability, maintenance, and the requirement for protective devices and warnings (Regs 4, 5 and 24).',
  },
  {
    reg: 'Supply of Machinery (Safety) Regs 2008',
    text: 'Forces the hardware onto new machines via the harmonised standards BS EN 474-1 / BS EN 474-5 and ISO 8643.',
  },
]

const tiers = [
  {
    tier: '1. Overload warning device',
    does: 'Audible or visual alarm when the rated capacity or load moment is reached. No live readout, and it does not stop the machine.',
    status: 'Legal minimum under BS EN 474-5 / ISO 8643. Rarely fitted alone on a genuine lifting machine.',
  },
  {
    tier: '2. Rated Capacity Indicator (RCI)',
    does: 'Live in-cab display of load on hook, radius, height and percentage of rated capacity against the programmed load chart; green to amber to red, with alarms around 90%. Indicates and warns — it does not cut motion.',
    status: "UK construction best-practice expectation — what a lift plan usually means by 'an RCI'. For example Xwatch RCI Lite / XW1, GKD, JFP, SMIE or Prolec.",
  },
  {
    tier: '3. Rated Capacity Limiter (RCL) + zone limiting',
    does: 'Everything the RCI does, plus it physically cuts or limits the machine motions to prevent the unsafe condition, with height, slew and zone / exclusion limiting.',
    status: 'Specified for proximity work (rail, highways, structures, overhead lines, confined slew). For example Xwatch XW2 (height) or XW5 (height + slew), and GKD equivalents.',
  },
]

const whatToRequire = [
  'Standard lift over 1 t: a calibrated RCI (Tier 2) showing live load, radius and height, plus check valves and a matching load chart.',
  'Proximity / exclusion-zone lift: an RCL (Tier 3) with height and slew limiting set to the zone.',
  'Dedicated lifting point: a lifting eye (not bucket teeth), a load-rated quick hitch or pinned bucket, and the attachment weight included in the rated capacity.',
]

const references = [
  'LOLER 1998; PUWER 1998; Supply of Machinery (Safety) Regulations 2008.',
  'BS EN 474-1 & BS EN 474-5 (hydraulic excavators); ISO 8643 (boom-lowering control); BS 7121 (safe use of cranes) — planning benchmark.',
  'SFPSG / CPA — Lifting Operations with 180° and 360° Excavators.',
  'HSE — LOLER Approved Code of Practice and guidance.',
]

const faqs = [
  {
    q: 'Does an excavator need an RCI to lift?',
    a: "Strictly, UK law (via BS EN 474-5 / ISO 8643) requires only an overload warning device once object-handling capacity exceeds 1,000 kg or the load moment exceeds 40,000 Nm, together with boom and dipper check valves and a load chart. In practice, UK construction best practice — and most contractors signing off a lift plan — expects a calibrated Rated Capacity Indicator (RCI) showing live load, radius and height.",
  },
  {
    q: 'What is the difference between an RCI and an RCL?',
    a: "An RCI (Rated Capacity Indicator) indicates and warns — it shows the load, radius, height and percentage of capacity and sounds an alarm, but it does not stop the machine. An RCL (Rated Capacity Limiter) does everything an RCI does and then physically cuts or limits the machine motions, with height, slew and zone limiting. RCLs are specified for proximity work near railways, highways, structures or overhead lines.",
  },
  {
    q: 'At what point does an excavator become lifting equipment?',
    a: 'As soon as an excavator is used to lift and move a suspended load — rather than excavate — it is lifting equipment under LOLER 1998, and the lifting operation must be planned by a competent person. The device requirements under BS EN 474-5 apply once object-handling capacity exceeds 1,000 kg or the load moment exceeds 40,000 Nm.',
  },
  {
    q: 'Is an overload warning device the same as an RCI?',
    a: "No. An overload warning device is only a buzzer or light that triggers at the safe maximum — no numbers, no radius, and it does not stop the machine. It is the legal minimum, not an RCI. An RCI is a live in-cab gauge of load, radius and height against the machine load chart.",
  },
]

export default function ExcavatorRciGuidePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-medium mb-4">EXCAVATOR LIFTING — TECHNICAL REFERENCE</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Rated Capacity Indicators (RCI) for Excavator Lifting Operations
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-4">
            A quick reference on what UK legislation actually requires, the three tiers of device —
            overload warning, RCI and RCL — and what to specify for lifts over 1 tonne.
          </p>
          <p className="text-sm text-slate-400 mb-8">
            By Ricky Marsh, CPCS A61 Appointed Person · Issued June 2026
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/downloads/excavator-rci-reference.pdf"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Reference (PDF)
            </a>
            <a
              href="/downloads/excavator-rci-reference.docx"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download (Word)
            </a>
          </div>
        </div>
      </section>

      {/* Bottom line */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-xl">
            <h2 className="text-xl font-bold text-amber-400 mb-3">The bottom line</h2>
            <p className="text-slate-300 mb-3">
              The law requires only an <strong>overload warning device</strong>. UK construction best
              practice requires a <strong>Rated Capacity Indicator (RCI)</strong> giving live load,
              radius and height. Proximity and exclusion-zone lifts require a{' '}
              <strong>Rated Capacity Limiter (RCL)</strong> with height and slew limiting.
            </p>
            <p className="text-slate-400 text-sm">
              Trigger threshold: object-handling capacity over 1,000 kg, or an overturning (load)
              moment over 40,000 Nm.
            </p>
          </div>
        </div>
      </section>

      {/* Legislation */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">What the legislation actually requires</h2>
          <p className="text-slate-300 mb-8">
            There is no UK regulation that names the &ldquo;RCI&rdquo; as a mandatory device. The
            requirement is built up from several instruments that bite once an excavator is used for
            lifting (object handling) rather than excavating:
          </p>
          <div className="space-y-4 mb-8">
            {legislation.map((item) => (
              <div key={item.reg} className="bg-slate-950 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">{item.reg}</h3>
                <p className="text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-300">
            Where object-handling capacity exceeds 1,000 kg or the load moment exceeds 40,000 Nm,
            BS EN 474-5 / ISO 8643 require: (a) an acoustic or visual overload warning device; (b) a
            boom/dipper load-holding (check / hose-burst) valve; and (c) a rated lifting capacity
            (load) chart. Note that (a) is only a warning — it need not display numbers, know the
            radius, or stop the machine.
          </p>
        </div>
      </section>

      {/* Three tiers table */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">The three tiers of device</h2>
          <RciTiers />
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="p-4 text-amber-400 font-semibold align-top w-1/4">Tier / device</th>
                  <th className="p-4 text-amber-400 font-semibold align-top">What it does</th>
                  <th className="p-4 text-amber-400 font-semibold align-top w-1/3">Status &amp; examples</th>
                </tr>
              </thead>
              <tbody>
                {tiers.map((t) => (
                  <tr key={t.tier} className="border-b border-slate-800 align-top">
                    <td className="p-4 text-white font-medium">{t.tier}</td>
                    <td className="p-4 text-slate-300">{t.does}</td>
                    <td className="p-4 text-slate-400 text-sm">{t.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* What to require + worked example */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">What to require</h2>
          <ul className="space-y-3 mb-10">
            {whatToRequire.map((item) => (
              <li key={item} className="flex gap-3 text-slate-300">
                <span className="text-amber-400 mt-1">▪</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-slate-950 border border-slate-800 p-8 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-3">Worked example</h3>
            <p className="text-slate-300">
              A 13 t 360° excavator slinging a 1.5 t drainage chamber is above 1 t, so EN 474 means it
              must at least have the overload warning device and check valves. To sign it off, the
              contractor will want a calibrated RCI showing the 1.5 t load against the chart at that
              radius. If the same lift is alongside a live railway or under overhead lines, specify an
              RCL (for example an Xwatch XW5) with slew and height limiting set to the exclusion zone.
            </p>
          </div>
        </div>
      </section>

      {/* Review stopper */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-500/10 border border-red-500/30 p-8 rounded-xl">
            <h3 className="text-xl font-bold text-red-400 mb-3">Review stopper</h3>
            <p className="text-slate-300">
              For any lift above 1 t, the absence of a functioning RCI or of hose-burst / check-valve
              protection should be treated as a review stopper. Older, imported or retrofitted machines
              may lack either — verify before sign-off.
            </p>
          </div>
        </div>
      </section>

      {/* References */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">Key references</h2>
          <ul className="space-y-3">
            {references.map((ref) => (
              <li key={ref} className="flex gap-3 text-slate-300">
                <span className="text-amber-400 mt-1">▪</span>
                <span>{ref}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Excavator RCI FAQs</h2>
          <div className="space-y-6">
            {faqs.map((item) => (
              <div key={item.q} className="bg-slate-900 border border-slate-800 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-amber-400 mb-2">{item.q}</h3>
                <p className="text-slate-300">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Download this reference</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Keep the RCI reference note on file or share it with your lifting team. Free to download
            and use — a competent Appointed Person should still review every lift plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/downloads/excavator-rci-reference.pdf"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Reference (PDF)
            </a>
            <a
              href="/downloads/excavator-rci-reference.docx"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download (Word)
            </a>
          </div>
        </div>
      </section>

      {/* Important notice */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-400 text-sm text-center">
            Guidance note for RMT lift plan reviews — not a substitute for the full regulations or a
            competent person&apos;s assessment. Always confirm the devices fitted match the specific
            machine and the task in the lift plan.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related excavator lifting resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/resources/excavator-lift-plan-templates', title: 'Free Excavator Lift Plan Template' },
              { href: '/resources/excavator-safety-devices', title: 'Excavator Safety Devices Explained' },
              { href: '/services/excavator-lift-plans', title: 'Excavator Lift Plan Service' },
              { href: '/blog/excavator-lift-plans-complete-guide', title: 'Excavator Lift Plans: Complete Guide' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-slate-950 border border-slate-800 hover:border-amber-400 p-5 rounded-xl text-white font-medium transition"
              >
                {item.title} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need an excavator lift plan reviewed or written?</h2>
          <p className="text-slate-800 mb-8 max-w-2xl mx-auto">
            From a CPCS A61 Appointed Person with 35 years of experience. LOLER compliant, Tier 1
            contractor approved, fast turnaround.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold transition">
              Get a Quote
            </Link>
            <a href="tel:+447803808093" className="bg-white/20 hover:bg-white/30 text-slate-900 px-8 py-3 rounded-xl font-semibold transition">
              Call: 07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Article schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Rated Capacity Indicators (RCI) for Excavator Lifting Operations',
            description:
              'UK legislation and the three tiers of excavator lifting device (overload warning, RCI, RCL), with a worked example.',
            url: 'https://www.rmtsafetysolutions.com/resources/excavator-rci-guide',
            datePublished: '2026-06-03',
            dateModified: '2026-06-03',
            author: {
              '@type': 'Person',
              name: 'Ricky Marsh',
              jobTitle: 'CPCS A61 Appointed Person',
              worksFor: { '@type': 'Organization', name: 'RMT Solutions Ltd' },
            },
            publisher: {
              '@type': 'Organization',
              name: 'RMT Solutions Ltd',
              url: 'https://www.rmtsafetysolutions.com',
            },
          }),
        }}
      />

      {/* FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map((item) => ({
              '@type': 'Question',
              name: item.q,
              acceptedAnswer: { '@type': 'Answer', text: item.a },
            })),
          }),
        }}
      />
    </>
  )
}
