import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Layers, Phone, AlertTriangle, Ruler } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

// Tandem and multi-crane lift plans.
//
// New page, Jul 2026 SEO review (build item #3). Page 1 for "tandem lift plan"
// is two US crane companies, an RSSB rail code of practice and a European FEM
// PDF. There is no UK commercial page for tandem lifts at all — the emptiest
// SERP found in the entire review. Adjacent terms ("two crane lift plan",
// "dual crane lift procedure", "multi crane lift plan UK") are equally
// unclaimed.
//
// This page is written technical-first on purpose. The buyer for a tandem lift
// plan is not shopping on price; they are trying to work out whether the person
// they are about to engage actually understands load transfer, derating and
// synchronised control. Depth is the conversion mechanism here.

export const metadata = {
  title: 'Tandem Lift Plans UK | Two Crane Lifts',
  description:
    'Tandem and multi-crane lift plans by a CPCS A61 Appointed Person. Load sharing, crane derating and synchronised control to BS 7121. UK-wide.',
  keywords: [
    'tandem lift plan',
    'two crane lift plan',
    'dual crane lift procedure',
    'multi crane lift plan UK',
    'tandem lifting operations',
    'two crane lift load sharing calculation',
    'complex lift plan',
    'multiple crane lift BS 7121',
  ],
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/tandem-lift-plans',
  },
  openGraph: {
    title: 'Tandem & Multi-Crane Lift Plans UK | RMT Solutions',
    description:
      'Tandem and multi-crane lift plans by a CPCS A61 Appointed Person. Load sharing, derating and synchronised control to BS 7121 and LOLER 1998.',
    url: 'https://www.rmtsafetysolutions.com/services/tandem-lift-plans',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    images: ['/images/mobile-crane-steel-erection.webp'],
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tandem and Multi-Crane Lift Plans',
  description:
    'Lift plans for tandem and multi-crane lifting operations, covering load sharing, crane derating, synchronised control and side loading, prepared by a CPCS A61 Appointed Person to BS 7121 and LOLER 1998.',
  provider: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.rmtsafetysolutions.com/#business',
    name: 'RMT Solutions Ltd',
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Tandem Lift Planning',
  url: 'https://www.rmtsafetysolutions.com/services/tandem-lift-plans',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tandem and Multi-Crane Lift Planning',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tandem Lift Plan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Multi-Crane Lift Plan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Load Share Calculation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Upending and Turning Operations' } },
    ],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Tandem & Multi-Crane Lift Plans', item: 'https://www.rmtsafetysolutions.com/services/tandem-lift-plans' },
  ],
}

// Single source of truth for this page's FAQs — rendered on the page AND
// used to build the FAQPage JSON-LD below. Add questions here only.
const PAGE_FAQS = [
  {
    q: 'What is a tandem lift?',
    a: 'A tandem lift is a lifting operation where a single load is shared between two cranes or lifting machines working together. Multi-crane lifts extend the same principle to three or more. It is used where one crane cannot take the load safely at the radius required, where the item is too long to control on a single hook, or where the load has to be turned or upended during the lift.',
  },
  {
    q: 'Does a tandem lift need a written lift plan?',
    a: 'Yes, without exception. The Approved Code of Practice supporting LOLER 1998 states that a written plan should exist where two or more items of lifting equipment are used simultaneously. BS 7121 also treats multiple-crane lifting as a complex lift, which requires planning by an Appointed Person with the competence to match. There is no version of a tandem lift that is covered by a generic plan.',
  },
  {
    q: 'How much do you derate the cranes for a tandem lift?',
    a: 'BS 7121-1 states that where all the factors cannot be accurately evaluated, an appropriate down-rating should be applied to all the cranes involved — commonly 20 per cent or more in practice. Many planners work to roughly a 20 per cent allowance for two cranes and larger allowances again for three or more, because the more machines involved the less predictable the share becomes. The figure is a planning judgement based on the specific lift, not a fixed number to be applied blindly.',
  },
  {
    q: 'Why does the load on each crane change during the lift?',
    a: 'Because the geometry changes. If the two hoists run at even slightly different speeds the load tilts, and weight transfers towards the lower hook. The same happens when the load is turned or upended, when the slings are not symmetric about the centre of gravity, or when one crane slews or travels marginally ahead of the other. Rated capacity indicators cannot prevent this — an RCI protects its own crane, it does not know the other machine exists.',
  },
  {
    q: 'Who is in charge of a tandem lift?',
    a: 'One person, and that has to be unambiguous before anything leaves the ground. The Appointed Person plans the operation; a single lift supervisor holds control on the day and gives every instruction. Crane operators take direction from that one person only. Split or shared control is the single most dangerous arrangement possible on a tandem lift, because the machines can be given conflicting instructions at the moment when synchronisation matters most.',
  },
  {
    q: 'What causes side loading on a tandem lift, and why does it matter?',
    a: 'Side loading happens when the hoist rope is not vertical, which puts a lateral force into a boom designed to carry load in line. On a tandem lift it usually arises from the two cranes drifting apart or towards each other as the load moves, or from one machine leading the other. Cranes have very little tolerance for side loading and it is a recognised cause of structural failure, so keeping the ropes plumb throughout is a planning requirement rather than an operator skill.',
  },
  {
    q: 'What do you need from us to plan a tandem lift?',
    a: 'The load: confirmed weight, dimensions, centre of gravity, and the lifting points available. The site: layout, crane standing positions, hardstanding and ground information, and anything overhead or adjacent. The operation: where the load starts, where it finishes, and whether it changes orientation on the way. And the cranes, if already selected. Where a site visit is warranted we will say so — most tandem lifts benefit from one.',
  },
  {
    q: 'How long does a tandem lift plan take, and what does it cost?',
    a: 'Typically 3 to 5 working days, because the load share calculations, crane positioning and rigging arrangement have to be worked through properly and a site visit is often justified. Tandem and multi-crane work is quoted individually rather than at the fixed rates we publish for single-machine plans, since the effort scales with the complexity of the operation. You will have a fixed-price quote within 4 working hours of sending the details.',
  },
  {
    q: 'Can two different cranes of different capacities be used?',
    a: 'Yes, and it is common. What matters is that each crane is working within its derated capacity for its own share of the load at its own radius, not that the two machines match. Mismatched hoist speeds are the practical problem rather than mismatched capacities — differing line speeds are a frequent cause of the load going out of level, so the plan has to address how the operators keep the movement synchronised.',
  },
  {
    q: 'Would a contract lift be better than planning it ourselves?',
    a: 'Often, yes, and it is worth saying so plainly. For a genuinely complex tandem lift a contract lift places the whole operation and its liability with the crane company. Where an independent plan makes more sense is when you already have the cranes arranged, when you want a second competent opinion on a plan a crane company has produced, or when the tandem lift is one part of a larger package such as a steel erection sequence.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PAGE_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const CITIES = [
  ['warrington', 'Warrington'],
  ['manchester', 'Manchester'],
  ['liverpool', 'Liverpool'],
  ['leeds', 'Leeds'],
  ['birmingham', 'Birmingham'],
  ['london', 'London'],
  ['bristol', 'Bristol'],
  ['glasgow', 'Glasgow'],
  ['edinburgh', 'Edinburgh'],
]

export default function TandemLiftPlansPage() {
  const whenNeeded = [
    'The load exceeds one crane’s derated capacity at the radius required',
    'A long member cannot be controlled on a single hook',
    'The load must be turned or upended during the lift',
    'Access prevents a single crane getting close enough for a one-hook pick',
    'Two smaller cranes are the only machines that will physically fit the site',
  ]

  const planCovers = [
    'Load share calculation for each crane at each stage of the lift',
    'Derating applied to every machine involved',
    'Crane selection, standing positions and radii',
    'Ground bearing pressure, including compounding where cranes stand close',
    'Rigging arrangement, spreader beams and sling angles',
    'Synchronisation and the sequence of permitted movements',
    'Communication protocol and who holds control',
    'Exclusion zones and the abort position if the lift has to stop part-way',
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <Image
            src="/images/mobile-crane-steel-erection.webp"
            alt="Mobile cranes lifting structural steel on a UK construction site — tandem and multi-crane lift planning"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400 transition">Home</Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link href="/services" className="text-gray-400 hover:text-amber-400 transition">Services</Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gray-500">Tandem &amp; Multi-Crane</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Complex Lifts — BS 7121
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Tandem &amp; <span className="gradient-text">Multi-Crane Lift Plans</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Two cranes on one load is not two lifts. It is one operation with a load share that
              moves as the geometry changes. Planned properly by a CPCS A61 Appointed Person with 35
              years of UK site experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary flex items-center justify-center group">
                Discuss your lift
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+447803808093"
                className="btn-secondary flex items-center justify-center gap-2"
                aria-label="Call RMT Solutions on 07803 808093"
              >
                <Phone className="w-5 h-5" />
                Call 07803 808093
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why it is different */}
      <section className="py-20 bg-slate-950 border-y border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Why Tandem Lifts Are Different
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            The load does not stay where you put it
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              The instinct on a two-crane lift is to halve the weight and check each machine against
              its chart. That calculation is the starting point, and on its own it is not enough,
              because the split between the two cranes is not fixed. It moves during the lift.
            </p>
            <p>
              If the two hoists run at even marginally different line speeds, the load tilts and
              weight transfers towards the lower hook. The same thing happens when the item is turned
              or upended, when the slings are not symmetric about the centre of gravity, or when one
              crane slews or travels slightly ahead of the other. A load that was evenly shared at the
              start of the lift can be significantly out of balance by the middle of it.
            </p>
            <p>
              Rated capacity indicators do not protect you here. An RCI monitors its own crane. It has
              no idea the other machine exists, and it cannot see weight arriving from across the
              lift. By the time it reacts, the transfer has already happened.
            </p>
            <p>
              That is why <strong className="text-white">BS 7121-1</strong> requires that where all
              the factors cannot be accurately evaluated, an appropriate down-rating is applied to all
              the cranes involved — commonly 20 per cent or more. It is also why the standard treats
              multiple-crane lifting as a{' '}
              <Link href="/blog/basic-standard-complex-lifts" className="text-amber-400 hover:text-amber-300 underline">
                complex lift
              </Link>
              , with the planning competence that category demands.
            </p>
          </div>
        </div>
      </section>

      {/* Legal position */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            A written plan is not optional
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              <Link href="/blog/loler-acop-l113-explained" className="text-amber-400 hover:text-amber-300 underline">
                L113
              </Link>
              , the Approved Code of Practice supporting LOLER 1998, is explicit that a written plan
              should exist where two or more items of lifting equipment are used simultaneously. There
              is no reading of the guidance under which a tandem lift is covered by a{' '}
              <Link href="/blog/generic-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                generic plan
              </Link>{' '}
              or a schedule of common lifts.
            </p>
            <p>
              In practice this is rarely the argument. Principal contractors know a tandem lift when
              they see one and will ask for the plan. The problem is more often that the plan produced
              treats the operation as two single lifts happening near each other, which is precisely
              the misunderstanding that makes tandem lifts go wrong.
            </p>
          </div>
        </div>
      </section>

      {/* When you need one */}
      <section className="py-20 bg-slate-950 border-y border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            When a tandem lift is the right answer
          </h2>
          <ul className="space-y-4 mb-10">
            {whenNeeded.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-300 text-lg">
                <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-300 leading-relaxed text-lg">
            The most common of these in UK construction is{' '}
            <Link href="/services/steel-erection" className="text-amber-400 hover:text-amber-300 underline">
              structural steel erection
            </Link>{' '}
            — long trusses, plate girders and pre-assembled frames that have to be lifted level and
            then rotated into position. Precast concrete panel erection and the upending of tanks,
            vessels and columns are the next most frequent.
          </p>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6 mt-8">
            <p className="text-gray-200 leading-relaxed">
              <strong className="text-white">Worth asking first:</strong> can one bigger crane do it?
              A tandem lift is always the more complex option, and where a single larger machine will
              physically fit and reach, that is usually the safer and cheaper answer. Part of planning
              a tandem lift is confirming it is genuinely necessary.
            </p>
          </div>
        </div>
      </section>

      {/* What the plan covers */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Layers className="w-7 h-7 text-amber-400" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              What the plan covers
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-4 mb-10">
            {planCovers.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-300 bg-slate-800/40 border border-slate-700/50 rounded-xl p-4"
              >
                <Ruler className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="font-display text-2xl font-bold text-white mb-4">Side loading</h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            A crane boom is designed to carry load in line. When the hoist rope is not vertical, a
            lateral force goes into the boom, and cranes have very little tolerance for it. On a
            tandem lift the ropes go out of plumb when the two machines drift apart or towards each
            other as the load moves — which they will, unless the plan says how they are kept
            together. Keeping the ropes vertical throughout is a planning requirement, not something
            to leave to operator judgement on the day.
          </p>

          <h3 className="font-display text-2xl font-bold text-white mb-4">
            Ground pressures compound
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Two cranes standing close together do not each load the ground in isolation. The pressure
            bulbs beneath adjacent outriggers overlap, and the ground sees more than either machine
            imposes on its own. On made ground, over basements, or near service trenches this is the
            detail that gets missed, and it is why mat sizing on a tandem lift is worked from the
            combined case rather than crane by crane.
          </p>

          <h3 className="font-display text-2xl font-bold text-white mb-4">One person in control</h3>
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            The Appointed Person plans the operation. On the day, one lift supervisor holds control
            and gives every instruction, and the crane operators take direction from that person
            alone. This is not a formality. Split control on a tandem lift means two machines can
            receive conflicting instructions at the exact moment synchronisation matters most. The
            plan names who holds control, states the communication method — usually radios, because
            hand signals across two crane cabs are unreliable — and permits one motion at a time.
          </p>

          <h3 className="font-display text-2xl font-bold text-white mb-4">
            The abort position
          </h3>
          <p className="text-gray-300 leading-relaxed text-lg">
            The detail most often missing from tandem lift plans written by people who do not do them
            regularly. A lift halted with the load part-rotated is a different loading case from
            either the start or the finish, and it is exactly the point at which something has already
            gone wrong. The plan has to say where the load can be safely held, what each crane does,
            and how the operation is recovered — decided in advance, not improvised with a load in
            the air.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            Tandem lift plans — common questions
          </h2>
          <div className="space-y-4">
            {PAGE_FAQS.map((faq) => (
              <div
                key={faq.q}
                className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 sm:p-7"
              >
                <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName="Tandem / Multi-Crane Lift Plan"
            heading="Get a quote for a tandem lift plan"
          />
        </div>
      </section>

      <RelatedServices currentSlug="tandem-lift-plans" />

      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <AlertTriangle className="w-10 h-10 text-amber-400" />
          </div>
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Planning a two-crane lift?
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            Send the load details, the drawings and the site layout, and you will have a fixed-price
            quote within 4 working hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get a quote
            </Link>
            <a
              href="tel:+447803808093"
              className="btn-secondary flex items-center justify-center gap-2"
              aria-label="Call RMT Solutions on 07803 808093"
            >
              <Phone className="w-5 h-5" />
              07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Available across the UK */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Tandem lift planning across the UK
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Tandem and multi-crane operations usually justify a site visit, and we travel for them.
              Pick your nearest city, or call{' '}
              <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">
                07803 808093
              </a>{' '}
              to talk the lift through first.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {CITIES.map(([slug, name]) => (
              <Link
                key={slug}
                href={`/locations/${slug}`}
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                {name} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
