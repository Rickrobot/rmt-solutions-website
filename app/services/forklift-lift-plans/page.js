import Link from 'next/link'
import { Clock, ShieldCheck, FileCheck, PhoneCall, CheckCircle2, ArrowRight, Download } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'
import ProofStrip from '@/components/ProofStrip'

// Forklift lift plans (Nov 2026 website review, section 6.1).
// Search Console, UK, 21 Oct – 17 Nov 2026: "forklift lifting plan" 55
// impressions at position 5.5 and "forklift lift plan" 50 at 7.9, both landing
// on the generic template page because no forklift page existed.
//
// Planning basis: a forklift is not a crane, so BS 7121 and its lift
// categories are deliberately NOT applied here. The page and the template rest
// on LOLER 1998, ACOP L113, ACOP L117 and the manufacturer's instructions.

export const metadata = {
  title: 'Forklift Lift Plans UK | From £200 + VAT',
  description: 'Forklift lift plans by a CPCS Appointed Person: machinery moves, vehicle loading and fork-mounted jibs. LOLER compliant, from £200 + VAT.',
  keywords: 'forklift lift plan, forklift lifting plan, fork lift truck lift plan, counterbalance forklift lift plan, rough terrain forklift lift plan, machinery move lift plan, LOLER forklift',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/forklift-lift-plans',
  },
  openGraph: {
    title: 'Forklift Lift Plans UK | From £200 + VAT',
    description: 'Forklift lift plans by a CPCS Appointed Person for counterbalance and rough-terrain forklifts. Quote within 4 working hours.',
    url: 'https://www.rmtsafetysolutions.com/services/forklift-lift-plans',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const faqs = [
  {
    q: 'Does a forklift need a lift plan?',
    a: 'LOLER 1998 requires every lifting operation to be properly planned by a competent person, and a forklift lifting or lowering a load is lifting equipment under LOLER. A routine pallet move is normally covered by the employer’s risk assessment and safe system of work. A specific written lift plan is needed when something about the job is out of the ordinary: a load near the truck’s capacity, an offset centre of gravity, a machinery move, a fork-mounted jib, a lift over a suspended floor, or a principal contractor who asks for one.',
  },
  {
    q: 'Does LOLER apply to forklift trucks?',
    a: 'Yes. When a forklift lifts or lowers a load it is lifting equipment under LOLER 1998, and it is also work equipment under PUWER 1998. HSE treats the two sets of regulations as applying together: LOLER for the lifting parts, PUWER for safety items such as brakes, steering and tyres.',
  },
  {
    q: 'How often does a forklift need a thorough examination?',
    a: 'HSE guidance is that the lifting chains, forks, mast and cylinders and fork attachments are thoroughly examined at least every 12 months, or at the intervals set by a written scheme of examination. Lifting accessories, such as slings used with a fork-mounted jib, are examined every 6 months. Equipment used to lift people is also examined every 6 months.',
  },
  {
    q: 'Which card does a forklift operator need?',
    a: 'There is no single legal card. CPCS A16 covers industrial counterbalance forklifts and CPCS A14 covers rough-terrain masted forklifts; NPORS, RTITB, AITT and ITSSAR-accredited training are also widely accepted. ACOP L117 expects three stages of training (basic, specific job and familiarisation on the truck being used) and the employer’s written authorisation to operate. Check what the principal contractor accepts on site.',
  },
  {
    q: 'Can a forklift lift a suspended load?',
    a: 'Only with a fork-mounted jib or hook attachment designed for it, examined, secured to the truck as the manufacturer specifies, and used within the combined capacity for that truck and attachment. The load must be slung by a trained slinger/signaller, controlled with tag lines and kept low. The capacity is usually well below the truck’s fork rating, so it must be taken from the manufacturer’s data, never assumed.',
  },
  {
    q: 'Can people be lifted on a forklift?',
    a: 'Never on the forks, on a pallet or in a loose cage. HSE guidance allows a non-integrated working platform on a forklift only in exceptional circumstances. In almost every case a MEWP is the right machine for working at height.',
  },
  {
    q: 'If the job uses a forklift and a crane, does each need its own plan?',
    a: 'Yes. Each lifting device gets its own lift plan, because each machine has its own capacity, set-up and hazards. A single plan covering several machines is hard to read on site and is routinely rejected by principal contractors.',
  },
  {
    q: 'How much does a forklift lift plan cost and how quickly can I have it?',
    a: 'Forklift lift plans start at £200 + VAT, fixed price. We quote within 4 working hours and normally deliver within 24–48 working hours of receiving the full job information. Plans are written remotely from the information you send: the truck make and model, the load weight and dimensions, photographs and a sketch or drawing of the route.',
  },
]

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Forklift Lift Plans',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warrington',
      addressRegion: 'Cheshire',
      addressCountry: 'UK',
    },
    telephone: '+447803808093',
    url: 'https://www.rmtsafetysolutions.com',
  },
  description:
    'LOLER compliant lift plans for counterbalance and rough-terrain masted forklift trucks, prepared by a CPCS Appointed Person: machinery moves, vehicle loading, fork-mounted jibs and lifts over suspended floors.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Lift Planning',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'GBP',
    price: '200',
    description: 'Fixed-fee forklift lift plan from £200 plus VAT.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Forklift Lift Plans', item: 'https://www.rmtsafetysolutions.com/services/forklift-lift-plans' },
  ],
}

export default function ForkliftLiftPlansPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
            CPCS Appointed Person A61 · LOLER 1998 · ACOP L117
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Forklift Lift Plans, UK</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Lift plans for counterbalance and rough-terrain masted forklifts, written by a CPCS
            Appointed Person with 35 years of construction experience. Machinery moves, vehicle
            loading, fork-mounted jibs and lifts over suspended floors, planned to LOLER 1998.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 bg-amber-500 px-4 py-2 rounded-full">
              <span className="text-sm font-bold text-slate-900">Lift plans from £200 + VAT</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Quote in 4 working hours</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <FileCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Plan delivered in 24–48 hours</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Written remotely, UK-wide</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+447803808093"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              07803 808093
            </a>
          </div>
        </div>
      </section>
      <ProofStrip id="achonu" price="Forklift lift plans from £200 + VAT" />

      {/* When a written plan is needed */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">When forklift work needs a written lift plan</h2>
          <div className="prose prose-lg max-w-none text-gray-400">
            <p>
              A forklift lifting or lowering a load is lifting equipment under LOLER 1998, and every
              lifting operation has to be properly planned by a competent person. For a routine pallet
              move that planning is usually the employer&apos;s risk assessment and safe system of work.
              A specific written lift plan is needed when the job is out of the ordinary: a heavy or
              awkward load, a load whose centre of gravity is not where the capacity plate assumes, an
              attachment that changes the truck&apos;s rating, or ground and floors that may not take
              the weight.
            </p>
            <p>
              A forklift is not a crane, so we do not apply BS 7121 lift categories to forklift work.
              Our forklift plans are built on LOLER 1998, the ACOP L113 on safe use of lifting
              equipment, ACOP L117 on rider-operated lift trucks and the manufacturer&apos;s
              instructions for the truck and its attachments.
            </p>
          </div>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Machinery and equipment moves', desc: 'Presses, CNC machines, generators, transformers and plant, where the weight and centre of gravity have to be confirmed before anything is lifted.' },
              { title: 'Loading and unloading vehicles', desc: 'Delivery bays and site deliveries: driver safe area, vehicle stability, load shift and pedestrian segregation.' },
              { title: 'Fork-mounted jibs and hooks', desc: 'Suspended loads on a forklift, with the combined truck and jib capacity, slinging and tag-line control planned in.' },
              { title: 'Long and offset loads', desc: 'Steel, timber, pipe and precast where the load centre sits further out than the capacity plate assumes.' },
              { title: 'Suspended floors and mezzanines', desc: 'Front-axle loads checked against the floor, slab, ramp or dock leveller the truck will cross.' },
              { title: 'Principal contractor request', desc: 'When the main contractor wants a written lift plan in the RAMS package before the truck starts work.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">What&apos;s in your forklift lift plan</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl">
            One complete pack, signed off by a CPCS Appointed Person and ready for your RAMS file.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Truck and attachment verification',
                items: [
                  'Make, model and capacity plate checked against the attachments fitted',
                  'Thorough examination report covering mast, chains, forks and attachments',
                  'Fork rating, fork extensions and their limits',
                  'Jib or hook attachment SWL and combined capacity, where used',
                  'Operator training, familiarisation and authorisation',
                ],
              },
              {
                title: 'Load and capacity',
                items: [
                  'Load weight from a reliable source, never an unchecked estimate',
                  'Centre of gravity and actual load centre',
                  'Capacity at that load centre and lift height, from the manufacturer’s data',
                  'Utilisation against the limit for the job',
                  'Lifting accessories schedule for jib work',
                ],
              },
              {
                title: 'Route, floor and ground',
                items: [
                  'Route surface, gradients and turning space',
                  'Suspended floors, mezzanines, ramps and dock levellers',
                  'Overhead clearances: doors, beams, sprinklers and cables',
                  'Pedestrian segregation in straight barrier runs',
                  'Vehicle loading arrangements where needed',
                ],
              },
              {
                title: 'Documentation pack',
                items: [
                  'Scale drawings of the route, pick and place positions',
                  'Risk assessment listing every hazard and its controls',
                  'Method statement with the sequence of operations',
                  'Emergency procedures and briefing record',
                  'PDF ready for principal contractor review',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="bg-slate-800/40 p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
                <ul className="space-y-3 text-gray-400">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity plate */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">The capacity plate is only the start</h2>
          <p className="text-slate-300 mb-8 max-w-3xl text-lg">
            A forklift&apos;s rated capacity holds only at the load centre on its plate, with the mast
            vertical, on firm level ground and with the attachment the plate was issued for. Change
            any of those and the safe capacity changes. We take every figure from the
            manufacturer&apos;s data for that exact truck and attachment, never from a rule of thumb.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h3 className="text-lg font-semibold mb-4">What changes the capacity</h3>
              <table className="w-full text-sm">
                <tbody className="text-slate-300">
                  {[
                    ['Standard forks, load at plate load centre', 'Per capacity plate'],
                    ['Load centre further out (long or offset load)', 'Reduced: load-centre chart'],
                    ['Fork extensions', 'Reduced: maker’s data'],
                    ['Clamp, rotator or positioner', 'Per combined plate'],
                    ['Fork-mounted jib or hook', 'Jib SWL at the hook position used'],
                    ['Lifting to full mast height', 'May be reduced at height'],
                  ].map(([k, v], i, arr) => (
                    <tr key={k} className={i < arr.length - 1 ? 'border-b border-slate-700' : ''}>
                      <td className="py-3 pr-4">{k}</td>
                      <td className="text-amber-400 text-right">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-slate-300 mb-4">Every forklift plan we write checks:</p>
              <ul className="text-slate-300 space-y-3">
                {[
                  'That the capacity plate matches the attachment actually fitted',
                  'The real load centre, measured from the fork face to the centre of gravity',
                  'Capacity at the lift height needed, not just at ground level',
                  'Front-axle load against any floor, slab or ramp on the route',
                  'Gradients: loads carried on the uphill side, no turning on slopes',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Competence and examination */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">Operators, examinations and the rules that apply</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { tag: 'CPCS A16 / A14', title: 'Forklift operator', desc: 'A16 for industrial counterbalance trucks, A14 for rough-terrain masted trucks, or NPORS, RTITB, AITT or ITSSAR-accredited training. Plus job-specific training, familiarisation and written authorisation (ACOP L117).' },
              { tag: 'LOLER Reg 9', title: 'Thorough examination', desc: 'Lifting chains, forks, mast and attachments examined at least every 12 months, or as a written scheme of examination sets out.' },
              { tag: 'PUWER 1998', title: 'Safety inspection', desc: 'Brakes, steering, tyres and the other safety items inspected under PUWER, alongside the LOLER examination.' },
              { tag: 'CPCS A40', title: 'Slinger / signaller', desc: 'For fork-mounted jib work, the load is slung and released by a trained slinger/signaller (or NPORS equivalent). Accessories examined every 6 months.' },
            ].map((r) => (
              <div key={r.title} className="rounded-xl border border-slate-700/50 p-6">
                <div className="inline-flex items-center rounded-full bg-slate-950 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  {r.tag}
                </div>
                <h3 className="font-semibold text-white mb-2">{r.title}</h3>
                <p className="text-sm text-gray-400">{r.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-xl border border-amber-500/30 bg-amber-500/10 p-6">
            <p className="text-gray-300">
              <strong className="text-white">Lifting people:</strong> never on the forks, on a pallet or in a
              loose cage. HSE guidance allows a non-integrated working platform on a forklift only in
              exceptional circumstances. For work at height, plan a MEWP instead.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">How it works and how fast</h2>
          <p className="text-lg text-gray-400 mb-12 max-w-3xl">
            From £200 + VAT, fixed fee. Each lifting device gets its own plan, so a job that uses a
            forklift and a crane gets two plans, each one clear enough to brief from.
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'You send the brief', desc: 'Truck make and model, attachment, load weight and dimensions, photos, and a sketch or drawing of the route, pick and place.', badge: '5-min job' },
              { step: '2', title: 'We quote', desc: 'Fixed-fee quote within 4 working hours, with the scope and delivery date confirmed.', badge: '≤ 4 hrs' },
              { step: '3', title: 'Plan produced', desc: 'Capacity check, drawings, risk assessment and method statement prepared by a CPCS Appointed Person.', badge: '24–48 hrs' },
              { step: '4', title: 'Briefing and sign-off', desc: 'Plan issued as a PDF. We answer reviewer queries from your principal contractor.', badge: 'Same day' },
            ].map((item) => (
              <div key={item.step} className="relative bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                <div className="absolute -top-3 left-6 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                  Step {item.step}
                </div>
                <h3 className="font-semibold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                <div className="inline-flex items-center gap-1 text-xs text-amber-400 font-semibold">
                  <Clock className="w-3 h-3" />
                  {item.badge}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Template */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-700/50 bg-slate-800/40 p-8 md:flex md:items-center md:justify-between gap-8">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-3">Writing it yourself? Use our free template</h2>
              <p className="text-gray-400 max-w-2xl">
                Our free forklift lift plan template in Word covers the capacity check, route and floor
                checks, vehicle loading, hazards, method statement and briefing record.
              </p>
            </div>
            <Link
              href="/resources/forklift-lift-plan-templates"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Free forklift lift plan template
            </Link>
          </div>
        </div>
      </section>

      {/* Lift plan checking CTA */}
      <section className="py-16 bg-amber-500 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Already got a plan? We&apos;ll check it.</h2>
              <p className="text-slate-800 max-w-2xl">
                Independent Appointed Person review of a subcontractor&apos;s forklift lift plan:
                capacity at the real load centre, attachments, floor loading, segregation and method.
              </p>
            </div>
            <Link
              href="/services/lift-plan-checking"
              className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap inline-flex items-center gap-2"
            >
              Lift plan checking
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Forklift lift plan FAQs</h2>
          <div className="space-y-6 max-w-4xl">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50">
                <h3 className="text-lg font-semibold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm serviceName="Forklift Lift Plans" heading="Get a quote for your forklift lift plan" />
        </div>
      </section>

      <RelatedServices currentSlug="forklift-lift-plans" />

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Send the brief, get the plan</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            From £200 + VAT, fixed fee. We&apos;ll come back to you the same working day.
          </p>
          <div className="bg-slate-800 p-8 rounded-xl max-w-2xl mx-auto mb-8 text-left">
            <h3 className="font-semibold mb-4 text-center">What we need from you:</h3>
            <ul className="text-slate-300 space-y-2">
              <li>• Site address and a sketch or drawing of the route</li>
              <li>• Forklift make and model, and any attachment fitted</li>
              <li>• Load weight, dimensions and centre of gravity if known</li>
              <li>• Photos of the load, the truck&apos;s capacity plate and the route</li>
              <li>• Floors, ramps or vehicles involved</li>
              <li>• Date of the operation</li>
            </ul>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+447803808093"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Available across the UK */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">Available across the UK</h2>
            <p className="text-gray-400 leading-relaxed">
              We write forklift lift plans UK-wide, remotely from the information you send. Pick your
              nearest city or call{' '}
              <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">07803 808093</a>{' '}
              to discuss your job.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              ['/locations/warrington', 'Warrington →'],
              ['/locations/manchester', 'Manchester →'],
              ['/locations/liverpool', 'Liverpool →'],
              ['/locations', 'All areas we cover →'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
