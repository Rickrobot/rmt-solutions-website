import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Clock, Phone, AlertTriangle, FileText } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

// Same-day / urgent lift plans.
//
// New page, Jul 2026 SEO review. The SERP research found no exact-match
// competition anywhere in the UK for "same day lift plan", "urgent lift plan",
// "next day lift plan", "emergency appointed person" or "appointed person at
// short notice" — and these are the highest purchase-intent queries in the
// whole keyword set, because nobody types them idly. We were already picking up
// 6 of 10 results on some of them incidentally via the cost and services pages;
// this page is the dedicated landing page that should lock them.
//
// Tone note: the entire proposition here is credibility under time pressure, so
// the copy deliberately says what CANNOT be done same-day as well as what can.
// Overpromising on this page would be the fastest possible way to lose the
// customer it is designed to win.

export const metadata = {
  title: 'Same Day Lift Plans UK | Urgent AP Cover',
  description:
    'Need a lift plan today? Same-day and next-day LOLER compliant lift plans from a CPCS A61 Appointed Person. Call 07803 808093 for urgent cover.',
  keywords: [
    'same day lift plan',
    'urgent lift plan',
    'next day lift plan UK',
    'emergency appointed person',
    'appointed person at short notice',
    'out of hours lift plan',
    'weekend lift plan UK',
    'fast lift plan turnaround',
    'last minute lift plan',
  ],
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/urgent-lift-plans',
  },
  openGraph: {
    title: 'Same Day & Urgent Lift Plans UK | RMT Solutions',
    description:
      'Same-day and next-day LOLER compliant lift plans from a CPCS A61 Appointed Person. Emergency and out-of-hours AP cover across the UK.',
    url: 'https://www.rmtsafetysolutions.com/services/urgent-lift-plans',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    images: ['/images/og-lift-planning.jpg'],
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Same Day and Urgent Lift Plans',
  description:
    'Same-day, next-day and out-of-hours LOLER compliant lift plans and emergency Appointed Person cover from a CPCS A61 Appointed Person, delivered UK-wide.',
  provider: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.rmtsafetysolutions.com/#business',
    name: 'RMT Solutions Ltd',
  },
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Urgent Lift Planning',
  url: 'https://www.rmtsafetysolutions.com/services/urgent-lift-plans',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Urgent Lift Planning Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Same Day Lift Plan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Next Day Lift Plan' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Appointed Person Cover' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Out of Hours Lift Planning' } },
    ],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
    { '@type': 'ListItem', position: 3, name: 'Same Day & Urgent Lift Plans', item: 'https://www.rmtsafetysolutions.com/services/urgent-lift-plans' },
  ],
}

// Single source of truth for this page's FAQs — rendered on the page AND
// used to build the FAQPage JSON-LD below. Add questions here only.
const PAGE_FAQS = [
  {
    q: 'Can I really get a lift plan the same day?',
    a: 'Often, yes — but it depends on two things: what time you call, and whether you have the information. A straightforward excavator, telehandler or lorry loader plan phoned through before about 2pm, with the machine details, load weight and a site layout to hand, can usually be issued the same working day. Call 07803 808093 rather than emailing. If it cannot be done, you will be told that on the phone in the first two minutes rather than at 6pm.',
  },
  {
    q: 'What do you need from me to turn a plan around fast?',
    a: 'The machine make and model, the weight of the load and how it is being slung, the lift radius or a site layout showing where the machine and the load will be, photographs of the area, and any obstructions or overhead services. Confirmed weights matter most — a guessed load weight is the single most common reason an urgent plan stalls, because it cannot be signed off against a load chart.',
  },
  {
    q: 'Which lifts can NOT be turned around same day?',
    a: 'Anything that genuinely needs eyes on the ground before it can be signed off: tandem and multi-crane lifts, blind lifts, lifts over live highways, railways or occupied buildings, lifts near overhead power lines, and mobile crane operations where ground bearing pressure has to be verified rather than assumed. Those need 3-5 working days and usually a site visit. Being told this honestly on the phone is more use to you than a plan that gets rejected on Monday.',
  },
  {
    q: 'Do you charge extra for urgent work?',
    a: 'Standard prices apply to same-day and next-day work in almost every case — excavator and telehandler plans from £200 + VAT, lorry loader from £250 + VAT. Genuine out-of-hours work, meaning evenings and weekends, is agreed on the call before anything starts. You will not receive an invoice with a surcharge you were not told about.',
  },
  {
    q: 'Do you work evenings and weekends?',
    a: 'Where the job needs it, yes. Construction does not stop for weekend possessions, shutdown work or overnight deliveries, and a plan that arrives on Monday is no use for a Saturday lift. Out-of-hours availability is not guaranteed in advance — it depends on what else is running — so call and ask rather than assuming either way.',
  },
  {
    q: 'Can you provide an Appointed Person at short notice?',
    a: 'For planning and sign-off, usually yes — an external CPCS A61 Appointed Person can pick up the planning duty quickly, which is the common situation when a principal contractor asks for an AP you do not have. Physical attendance on site at short notice depends on distance: same-day attendance is practical within about 90 minutes of Warrington, which covers Manchester, Liverpool, Leeds and the North West. Further afield it is a scheduled visit.',
  },
  {
    q: 'My lift is tomorrow morning and the principal contractor has just asked for a plan. What now?',
    a: 'Call 07803 808093 now rather than emailing. Most of these turn out to be straightforward single-machine lifts that can be planned and issued the same afternoon. If yours is one of the complex cases that genuinely cannot be signed off overnight, you will be told immediately, along with what you would need to do to move the lift or reduce its scope so that it can go ahead safely.',
  },
  {
    q: 'Can you check a lift plan urgently rather than write one?',
    a: 'Yes. Independent lift plan checking is often faster than writing from scratch, because the work is already done and it is being verified rather than created. If a subcontractor has submitted a plan and you need a competent opinion on it before tomorrow, that is usually achievable same day.',
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

export default function UrgentLiftPlansPage() {
  const needFromYou = [
    'Machine make, model and configuration',
    'Confirmed load weight — not an estimate',
    'How the load is being slung or attached',
    'Lift radius, or a site layout marked up',
    'Photographs of the lift area',
    'Overhead services, obstructions and boundaries',
  ]

  const canDoToday = [
    'Excavator lift plans',
    'Telehandler lift plans',
    'Lorry loader and HIAB lift plans',
    'Urgent lift plan checking of a submitted plan',
    'A written AP opinion for a principal contractor',
  ]

  const needsLonger = [
    'Tandem and multi-crane lifts',
    'Blind lifts and lifts with no direct line of sight',
    'Lifts over live highways, railways or occupied buildings',
    'Lifting near overhead power lines',
    'Mobile crane lifts needing verified ground bearing pressure',
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero — phone number above the fold, because the entire point of this
          page is that the visitor is in a hurry and should be calling. */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <Image
            src="/images/mobile-crane-steel-erection.webp"
            alt="Mobile crane on a UK construction site — same-day and urgent LOLER compliant lift plans"
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
            <span className="text-gray-500">Same Day &amp; Urgent</span>
          </nav>

          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-2.5 mb-8">
              <span className="w-2 h-2 bg-amber-500 rounded-full mr-3 animate-pulse" />
              <span className="text-amber-400 text-sm font-semibold tracking-wide">
                Order before 2pm for same-day where possible
              </span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6 leading-[1.1]">
              Same-Day and <span className="gradient-text">Urgent Lift Plans</span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Lift tomorrow and no plan? A LOLER compliant lift plan, written and signed off by a
              CPCS A61 Appointed Person with 35 years on UK sites. Most straightforward plans are
              issued the same working day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+447803808093"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
                aria-label="Call RMT Solutions now on 07803 808093"
              >
                <Phone className="w-5 h-5" />
                Call 07803 808093 now
              </a>
              <Link href="/contact" className="btn-secondary flex items-center justify-center group">
                Send the details
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Call rather than email if the lift is imminent — you will speak to the Appointed Person,
              not a call handler.
            </p>
          </div>
        </div>
      </section>

      {/* The honest version */}
      <section className="py-20 bg-slate-950 border-y border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            What Same-Day Actually Means
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            The honest version, because you have not got time for the other one
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              Most urgent lift plan enquiries come from the same place. The principal contractor has
              asked for a plan you did not know you needed, the lift is booked, the plant is on hire,
              and somebody has just realised there is no Appointed Person on the job. It is Thursday
              afternoon and the lift is Friday.
            </p>
            <p>
              In the majority of those cases the answer is yes, and it is not dramatic — a single
              excavator or telehandler pick with a known weight and a clear area is a couple of hours
              of work for someone who does it every day. The plan is written, checked against the load
              chart, and issued ready for sign-off.
            </p>
            <p>
              But not every lift can be planned overnight, and the useful thing a competent Appointed
              Person can do for you at 4pm on a Thursday is tell you which one yours is. A plan that
              gets produced fast and then rejected by the reviewer on Friday morning has cost you the
              day you were trying to save.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <Clock className="w-6 h-6 text-amber-400" />
                <h3 className="font-display text-xl font-bold text-white">Usually same day</h3>
              </div>
              <ul className="space-y-3">
                {canDoToday.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-7">
              <div className="flex items-center gap-3 mb-5">
                <AlertTriangle className="w-6 h-6 text-amber-400" />
                <h3 className="font-display text-xl font-bold text-white">Needs 3-5 days</h3>
              </div>
              <ul className="space-y-3">
                {needsLonger.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-300">
                    <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-amber-400 font-bold text-center leading-5">
                      &middot;
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-400 text-sm mt-5 leading-relaxed">
                These need a site visit or engineering checks before anyone can responsibly sign them
                off. Call anyway — there is often a way to reduce the scope so part of the work goes
                ahead on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What we need */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Speed Up Your Own Job
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            What to have in front of you when you call
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Urgent plans stall on missing information far more often than on availability. Five
            minutes gathering this before you pick up the phone is usually the difference between a
            plan today and a plan tomorrow.
          </p>
          <ul className="grid sm:grid-cols-2 gap-4 mb-8">
            {needFromYou.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-gray-300 bg-slate-800/40 border border-slate-700/50 rounded-xl p-4"
              >
                <FileText className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
            <p className="text-gray-200 leading-relaxed">
              <strong className="text-white">The one that matters most:</strong> a confirmed load
              weight. Not &ldquo;about two tonne&rdquo;. A plan is a calculation against a load chart,
              and a guessed weight cannot be signed off — it is the single most common reason an
              urgent job slips a day.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency AP cover */}
      <section className="py-20 bg-slate-950 border-y border-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Emergency AP Cover
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            No Appointed Person, and a lift booked
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              This comes up most often on{' '}
              <Link href="/blog/cpa-hire-vs-contract-lift-appointed-person" className="text-amber-400 hover:text-amber-300 underline">
                CPA crane hire
              </Link>
              . Under a CPA agreement the crane company supplies the crane and the operator — and
              nothing else. Planning the lifting operation and appointing a competent Appointed Person
              stays with you as the hirer. Under a contract lift the crane company carries that duty
              instead. Plenty of people find out which one they signed up to about 48 hours before the
              crane arrives.
            </p>
            <p>
              An external CPCS A61 Appointed Person fills that gap. The planning duty can be picked up
              quickly, because it is the paperwork and the competence that the principal contractor
              is actually asking for. Site attendance is a separate question and depends on distance —
              same-day is practical within about 90 minutes of Warrington, which covers Manchester,
              Liverpool, Leeds and the wider North West.
            </p>
            <p>
              Your AP is off sick, has left, or their card has lapsed mid-project? Same answer, and it
              is worth calling before the gap becomes a stoppage.
            </p>
          </div>
        </div>
      </section>

      {/* Price */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Urgent does not mean an urgent price
          </h2>
          <div className="space-y-5 text-gray-300 leading-relaxed text-lg">
            <p>
              Standard prices apply to same-day and next-day work in almost every case — excavator and
              telehandler plans from £200 + VAT, lorry loader and HIAB from £250 + VAT, mobile crane
              and complex lifts quoted individually. We publish our prices, which most of this market
              does not, and there is no surcharge for being in a hurry.
            </p>
            <p>
              Genuine out-of-hours work — evenings, weekends, possession work — is agreed on the call
              before anything starts, in a figure, so there is nothing to argue about later. Full
              detail is in our guide to{' '}
              <Link href="/blog/lift-plan-cost-uk" className="text-amber-400 hover:text-amber-300 underline">
                what a lift plan costs in the UK
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* FAQ — rendered from PAGE_FAQS, which also generates the JSON-LD above. */}
      <section className="py-20 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            Urgent lift plans — common questions
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
            serviceName="Urgent / Same Day Lift Plan"
            heading="Send the details — or call 07803 808093"
          />
        </div>
      </section>

      <RelatedServices currentSlug="urgent-lift-plans" />

      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Lift tomorrow? Call now.
          </h2>
          <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
            You will get a straight answer on whether it can be done today, in the first two minutes
            of the call.
          </p>
          <a
            href="tel:+447803808093"
            className="btn-primary inline-flex items-center justify-center gap-2 text-lg"
            aria-label="Call RMT Solutions on 07803 808093"
          >
            <Phone className="w-5 h-5" />
            07803 808093
          </a>
          <p className="text-gray-400 mt-6 text-sm">
            Or email{' '}
            <a href="mailto:ricky@rmtsolutions.co.uk" className="text-amber-400 hover:text-amber-300 underline">
              ricky@rmtsolutions.co.uk
            </a>{' '}
            — though the phone is faster if the lift is imminent.
          </p>
        </div>
      </section>

      {/* Available across the UK — reciprocates the inbound links from /locations/* */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Urgent lift plans across the UK
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Plans are produced remotely and issued by email, so a same-day plan is same-day wherever
              the site is. Same-day <em>site attendance</em> is a different matter and is practical
              within about 90 minutes of Warrington. Pick your nearest city, or call{' '}
              <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">
                07803 808093
              </a>
              .
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
