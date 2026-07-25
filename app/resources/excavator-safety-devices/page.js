import Link from 'next/link'

export const metadata = {
  title: 'Excavator Safety Devices Explained',
  description:
    'Plain-English guide to excavator safety devices — RCI, check valves, load chart, quick hitch, ROPS, FOPS and proximity systems — for lifting operations.',
  keywords:
    'excavator safety devices, excavator safety features, ROPS FOPS TOPS, excavator check valve, rated capacity indicator, load rated quick hitch, excavator proximity system, excavator lifting safety, what safety devices does an excavator need',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources/excavator-safety-devices',
  },
  openGraph: {
    title: 'Excavator Safety Devices Explained',
    description:
      'A plain-English explainer of every excavator safety device — lifting-specific and standard — from a CPCS A61 Appointed Person.',
    url: 'https://www.rmtsafetysolutions.com/resources/excavator-safety-devices',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'article',
  },
}

const liftingDevices = [
  {
    name: 'Overload warning device',
    sub: 'legal minimum',
    text: "Sounds a buzzer and/or shows a light the moment the load reaches the machine's safe maximum — a simple 'stop now' alert. No numbers, and it does not stop the machine. This is the legal minimum once an excavator lifts more than 1 tonne.",
  },
  {
    name: 'Rated Capacity Indicator (RCI)',
    sub: 'the gauge',
    text: 'A live in-cab screen showing how heavy the load is, how far out it is (radius), the height, and how close it is to the limit — usually green to amber to red with a beep near the edge. Like a fuel gauge for the lift: it tells the operator everything, but relies on them to act.',
  },
  {
    name: 'Rated Capacity Limiter (RCL)',
    sub: 'the gauge with teeth',
    text: 'The same live display as an RCI, but it physically stops or slows the machine before an overload can happen. Add-on height, slew and zone limiting set invisible walls — no raising past a set height, no swinging past a set point, no entering a no-go area. Used near power lines, railways and structures.',
  },
  {
    name: 'Boom & dipper check valves',
    sub: 'hose-burst / load-holding',
    text: 'A safety catch inside the hydraulic rams. A suspended load is normally held up by oil pressure; if a hose burst, that pressure would vanish and the load would crash down. These valves sense the loss and lock the oil, so the load holds or lowers slowly and safely.',
  },
  {
    name: 'Load (rated capacity) chart',
    sub: 'the rulebook',
    text: 'Not a gadget but a required reference — a table or graph showing how much this machine can safely lift at each distance and height. The further out and higher you reach, the less it can hold. The RCI is programmed against this chart.',
  },
  {
    name: 'Load-rated quick hitch & safety pin',
    sub: 'attachment lock',
    text: 'The quick hitch lets the operator swap buckets without leaving the cab; a load-rated one is certified strong enough to carry suspended loads. The safety pin is a second lock so an attachment cannot fall off even if the main mechanism failed — confirmed by a visual and/or audible check.',
  },
]

const standardDevices = [
  { name: 'ROPS', sub: 'Roll-Over Protective Structure', text: 'A reinforced cab frame that keeps its shape if the machine rolls or tips, protecting the operator from being crushed.' },
  { name: 'FOPS', sub: 'Falling-Object Protective Structure', text: 'A strengthened guard over the cab roof (and sometimes the front) to protect the operator from falling rock, debris or material when working near excavations or demolition.' },
  { name: 'TOPS', sub: 'Tip-Over Protective Structure', text: 'Protective framing specifically for the smaller mini excavators, which are more prone to tipping.' },
  { name: 'Operator protective guard / front screen', sub: '', text: "Bars or a screen across the front of the cab to stop the boom, debris or branches intruding into the operator's space." },
  { name: 'Hydraulic safety lock lever', sub: 'operator-presence lever', text: 'The lever by the left armrest that the operator lifts to get in and out. When raised, all hydraulic controls are dead, so the machine cannot move if a control is knocked while climbing in or out.' },
  { name: 'Seatbelt', sub: '', text: 'On a machine fitted with ROPS, the belt keeps the operator inside the protected zone of the cab during a rollover — which is where the ROPS can actually save them.' },
  { name: 'Travel / movement alarm', sub: '', text: "A beeper — increasingly a 'white-noise' broadband alarm that is easier to pinpoint — that sounds when the machine tracks or moves, warning people nearby." },
  { name: 'Rotating beacon / amber light', sub: '', text: 'Makes the machine clearly visible on a busy site so pedestrians and other plant can see it operating.' },
  { name: 'Cameras & mirrors', sub: '', text: "Rear-view and 360° bird's-eye camera systems, plus mirrors and Fresnel lenses, to remove the large blind spots around an excavator." },
  { name: 'Proximity / people-detection system', sub: 'plant–pedestrian', text: 'Radar sensors or RFID tags worn by workers detect a person entering the danger zone and warn the operator, the worker, or both — the main engineering control behind keeping people and machines apart.' },
  { name: 'Horn', sub: '', text: 'Operator-activated warning sounded before starting to move or slew.' },
  { name: 'Battery isolator / anti-start', sub: '', text: 'A switch that cuts all power for maintenance and to stop unauthorised use.' },
  { name: 'Emergency stop', sub: '', text: 'A button that shuts the machine down instantly in a crisis.' },
  { name: 'Fire suppression system', sub: 'larger machines', text: 'An automatic or manual system that discharges into the engine bay if a fire starts.' },
]

const faqs = [
  {
    q: 'What safety devices does an excavator need to lift a load?',
    a: 'Once an excavator lifts a suspended load over 1 tonne, BS EN 474-5 requires an overload warning device, boom and dipper check (hose-burst) valves, and a rated capacity (load) chart. UK best practice adds a calibrated Rated Capacity Indicator (RCI), and proximity lifts need a Rated Capacity Limiter (RCL). A load-rated quick hitch or pinned bucket and a proper lifting point are also expected.',
  },
  {
    q: 'What is the difference between ROPS and FOPS?',
    a: 'ROPS (Roll-Over Protective Structure) is a reinforced cab frame that keeps its shape if the machine rolls or tips, protecting the operator from being crushed. FOPS (Falling-Object Protective Structure) is a strengthened guard over the cab to protect against falling rock, debris or material. Mini excavators may also have TOPS (Tip-Over Protective Structure).',
  },
  {
    q: 'What does a check valve do on an excavator?',
    a: 'A boom and dipper check valve is a safety catch inside the hydraulic rams. A suspended load is held up by oil pressure; if a hose burst, that pressure would vanish and the load would drop. The check (hose-burst / load-holding) valve senses the loss and locks the oil, so the load holds or lowers slowly and safely. It is required once the machine is used for lifting.',
  },
]

function DeviceTable({ rows }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-slate-700">
            <th className="p-4 text-amber-400 font-semibold align-top w-1/3">Safety device</th>
            <th className="p-4 text-amber-400 font-semibold align-top">What it does — in plain terms</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((d) => (
            <tr key={d.name} className="border-b border-slate-800 align-top">
              <td className="p-4">
                <span className="text-white font-medium block">{d.name}</span>
                {d.sub ? <span className="text-amber-400/80 text-sm">{d.sub}</span> : null}
              </td>
              <td className="p-4 text-slate-300">{d.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ExcavatorSafetyDevicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-medium mb-4">EXCAVATOR LIFTING — PLAIN-ENGLISH GUIDE</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Excavator Safety Devices Explained</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-4">
            What each safety device on an excavator actually does, in everyday terms — the
            lifting-specific devices required once the machine lifts a suspended load over 1 tonne,
            and the standard devices fitted to the machine at all times.
          </p>
          <p className="text-sm text-slate-400 mb-8">
            By Ricky Marsh, CPCS A61 Appointed Person · Issued June 2026
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/downloads/excavator-safety-devices-explained.pdf"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Guide (PDF)
            </a>
            <a
              href="/downloads/excavator-safety-devices-explained.docx"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download (Word)
            </a>
          </div>
        </div>
      </section>

      {/* Lifting devices */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">1. Lifting safety devices</h2>
          <p className="text-slate-300 mb-8 max-w-3xl">
            Required specifically once an excavator is used to lift a suspended load over 1 tonne. See
            our companion guide on{' '}
            <Link href="/resources/excavator-rci-guide" className="text-amber-400 underline">
              excavator RCI requirements
            </Link>{' '}
            for the legislation behind these.
          </p>
          <DeviceTable rows={liftingDevices} />
        </div>
      </section>

      {/* Standard devices */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">2. Other standard safety devices on excavators</h2>
          <DeviceTable rows={standardDevices} />
        </div>
      </section>

      {/* Summary note */}
      <section className="py-12 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-xl">
            <p className="text-slate-300">
              The check valves and load chart are required specifically once the machine is used for
              lifting; ROPS, FOPS, alarms, guards, isolators and access provisions are standard on the
              machine at all times. Always confirm the devices fitted match the specific machine and
              the task in the lift plan.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Excavator Safety Device FAQs</h2>
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

      {/* Downloads */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Download this guide</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            A handy reference for site teams, toolbox talks and lift plan briefings. Free to download
            and share.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/downloads/excavator-safety-devices-explained.pdf"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download Guide (PDF)
            </a>
            <a
              href="/downloads/excavator-safety-devices-explained.docx"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-xl font-semibold transition"
            >
              Download (Word)
            </a>
          </div>
        </div>
      </section>

      {/* Important notice */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-slate-400 text-sm text-center">
            Plain-English guidance note for RMT lift plan reviews — not a substitute for the
            manufacturer&apos;s handbook or a competent person&apos;s assessment.
          </p>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">Related excavator lifting resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: '/resources/excavator-rci-guide', title: 'Excavator RCI Requirements (RCI vs RCL)' },
              { href: '/resources/excavator-lift-plan-templates', title: 'Free Excavator Lift Plan Template' },
              { href: '/services/excavator-lift-plans', title: 'Excavator Lift Plan Service' },
              { href: '/blog/excavator-lift-plans-complete-guide', title: 'Excavator Lift Plans: Complete Guide' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-slate-900 border border-slate-800 hover:border-amber-400 p-5 rounded-xl text-white font-medium transition"
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
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need an excavator lift plan?</h2>
          <p className="text-slate-800 mb-8 max-w-2xl mx-auto">
            Professional lift plans and reviews from a CPCS A61 Appointed Person with 35 years of
            experience. LOLER compliant, Tier 1 contractor approved.
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
            headline: 'Excavator Safety Devices Explained',
            description:
              'A plain-English explainer of every excavator safety device — lifting-specific and standard.',
            url: 'https://www.rmtsafetysolutions.com/resources/excavator-safety-devices',
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
