import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  Database,
  FileCheck,
  MapPin,
  PhoneCall,
  Ruler,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import ProofStrip from '@/components/ProofStrip'
import OurSoftware from '@/components/OurSoftware'
import CredentialChips from '@/components/CredentialChips'
import CompanyFilm from '@/components/CompanyFilm'

// "Why choose RMT" page (Nov 2026).
//
// SEO TARGET: "independent lift planning consultant" / "lift planning
// consultancy UK" / "why choose RMT Solutions". No other page on the site
// targets the consultant/consultancy terms in its title, so this page does not
// compete with /services/lift-plans (lift plans, lift planning services) or
// /services/lift-plan-checking (lift plan checking, lift plan review). It is
// the full version of the short "why us" blocks on / and /about, which link
// here.
//
// Content rules for this page: no prices (Ricky, Nov 2026); the software is
// described as RMT's own bespoke software; client names only where a named
// testimonial backs them on /testimonials.

const PAGE_URL = 'https://www.rmtsafetysolutions.com/why-rmt-solutions'

export const metadata = {
  title: { absolute: 'Independent Lift Planning Consultant UK | Why Choose RMT' },
  description:
    'Why UK contractors choose RMT Solutions: an independent CPCS A61 Appointed Person, a 19-point lift plan review, traceable crane duties and life-like drawings.',
  keywords:
    'independent lift planning consultant, lift planning consultancy UK, lift plan consultant, independent appointed person, why choose RMT Solutions, lift plan review consultant, LOLER lift planning consultant',
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: 'Why Contractors Choose RMT Solutions for Lift Planning',
    description:
      'An independent CPCS A61 Appointed Person backed by our own planning and review software. Traceable duties, one standard on every plan, drawings the site team understands.',
    url: PAGE_URL,
    images: [
      {
        url: '/images/og-liftdraft-3d-cad.jpg',
        width: 1200,
        height: 630,
        alt: 'LiftDraft, the 3D CAD system RMT Solutions built for lift planning, modelling a mobile crane lift',
      },
    ],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const REASONS = [
  {
    icon: Database,
    title: 'Duties you can trace',
    text: 'Capacities come from 11.5 million published duty points across 563 cranes from 12 manufacturers. UK and European manufacturer sheets only, never interpolated, always with the maker’s table reference.',
  },
  {
    icon: ClipboardCheck,
    title: 'The same check, every time',
    text: 'Every plan goes through the same 19 points, from lift category to environmental management, against BS 7121, LOLER 1998 and ISO 10567. You get a clear CAT A or CAT B, whichever site it comes from.',
  },
  {
    icon: FileCheck,
    title: 'Findings that fix the plan',
    text: 'Each finding cites the BS 7121 or LOLER requirement and says what to change, so the subcontractor can paste it straight into the resubmission.',
  },
  {
    icon: Ruler,
    title: 'Drawings the site team understands',
    text: 'Elevation, plan, rigging and 3D drawings from our own drawing engine. Machines drawn to the manufacturer’s dimensions, real rigging gear and your branding on the plant and PPE, sent as small PDFs that email easily.',
  },
  {
    icon: MapPin,
    title: 'Hazards found at the desk',
    text: 'Every site is checked for overhead lines, railways, aerodromes, schools, water and mine shafts, with GS6, Network Rail and CAA notification checks, plus the planning conditions that affect the lift.',
  },
  {
    icon: ShieldCheck,
    title: 'Truly independent',
    text: 'We have no crane to sell you and no hire fleet to keep busy. The machine and method are chosen for your lift, not for our yard.',
  },
]

const COMPARISON = [
  { row: 'Every machine type, not just cranes', rmt: 'Yes', hire: 'Their own cranes', ap: 'Usually', tools: 'Mostly cranes' },
  { row: 'Independent of the plant supplier', rmt: 'Yes', hire: 'No', ap: 'Depends on employer', tools: 'No Appointed Person involved' },
  { row: 'Duties traced to published UK/EU charts', rmt: 'Yes, every time', hire: 'Own fleet', ap: 'Depends on the person', tools: 'Within each library' },
  { row: 'Same 19-point standard on every plan', rmt: 'Yes', hire: 'Own standard', ap: 'Varies', tools: 'No review' },
  { row: 'Life-like drawings, emailable PDFs', rmt: 'Yes', hire: 'CAD drawings', ap: 'Varies', tools: 'Varies' },
  { row: 'Compliance reporting across your projects', rmt: 'Yes, live dashboard', hire: 'No', ap: 'No', tools: 'No' },
  { row: 'Fixed fee per document', rmt: 'Yes', hire: 'Bundled into hire', ap: 'Day rate', tools: 'Licence fee, plus an AP' },
]

const CONTRACTOR_POINTS = [
  'Which companies and Appointed Persons fail review most often',
  'What plans fail on, coded across 25 failure categories',
  'How many resubmissions it took before approval',
  'Late submissions, with under five working days’ notice',
  'A page per site, with every reviewed and RMT-written plan',
  'Every plan and review numbered and revision-controlled for audit',
]

const SERVICES = [
  { title: 'Lift Plan Checking', href: '/services/lift-plan-checking', text: 'Independent review of subcontractor and crane hire lift plans, with a CAT A or CAT B determination.' },
  { title: 'Lift Plan Writing', href: '/services/lift-plans', text: 'Site-specific LOLER compliant lift plans with full drawings, for any machine.' },
  { title: 'CPCS A61 Appointed Person', href: '/services/appointed-person', text: 'A named Appointed Person for your lifting operations, UK-wide.' },
  { title: 'Tower Crane Contracts', href: '/services/tower-crane', text: 'Generic and specific plans, audits and on-call AP support for the life of the crane.' },
  { title: 'Tandem & Multi-Crane Lift Plans', href: '/services/tandem-lift-plans', text: 'Two or more cranes on one load, with de-rating and load-share checks to BS 7121-1.' },
  { title: 'Method Statements & RAMS', href: '/services/method-statements-rams', text: 'RAMS written to pass principal contractor review, from a NEBOSH Diploma holder.' },
  { title: 'Lifting Operations Audit', href: '/services/lifting-operations-audit', text: 'Checks of your lifting systems, supervision and equipment against LOLER and BS 7121.' },
  { title: 'Same Day & Urgent Lift Plans', href: '/services/urgent-lift-plans', text: 'Lift tomorrow and no plan? Same-day and next-day plans and short-notice AP cover.' },
]

const STEPS = [
  { n: '1', title: 'Send the plan', text: 'Email the lift plan or RAMS with the lift date. Five working days’ notice is ideal.' },
  { n: '2', title: 'We check 19 points', text: 'Duties, rigging, ground, proximity hazards, competence, supervision and environment, against the manufacturer’s data.' },
  { n: '3', title: 'CAT A or CAT B', text: 'A formal review sheet, typically within 24 to 48 hours, with findings ready to pass back.' },
  { n: '4', title: 'Resubmit at no charge', text: 'If a plan comes back CAT B, the corrected version is reviewed under the same fee.' },
]

// Single source of truth for this page's FAQs: rendered on the page AND used
// to build the FAQPage JSON-LD, so the two can never drift apart.
const PAGE_FAQS = [
  {
    q: 'Why use an independent lift planning consultant instead of the crane hire company?',
    a: 'A crane hire company plans lifts for the cranes it supplies. An independent consultant has no fleet to fill, so the machine and method are chosen for your lift. An independent Appointed Person can also check plans from any supplier on their merits, which is what a principal contractor needs under CDM 2015 and LOLER 1998.',
  },
  {
    q: 'What makes an RMT lift plan review different?',
    a: 'Every plan is checked against the same 19 points, covering BS 7121, LOLER 1998, ISO 10567 and environmental management. Duties are checked against the manufacturer’s published chart for the exact machine and configuration, and every finding states the requirement and what to change.',
  },
  {
    q: 'Where do your crane duties come from?',
    a: 'From a database of 11.5 million published duty points across 563 cranes from 12 manufacturers, built from UK and European manufacturer load charts. Duties are never interpolated between published points, and each one carries the maker’s table reference so it can be checked.',
  },
  {
    q: 'Which machines do you plan and review lifts for?',
    a: 'Mobile cranes, tower cranes, crawler and spider cranes, excavators, telehandlers, lorry loaders, overhead and gantry cranes, MEWPs and material lifts, including tandem and multi-crane lifts.',
  },
  {
    q: 'How quickly can you turn a plan around?',
    a: 'Lift plan reviews are typically returned within 24 to 48 hours of a complete submission. Same-day reviews and lift plans can be arranged for urgent operations, and every enquiry gets a fixed-price quote within four working hours.',
  },
  {
    q: 'Do you charge again when a rejected plan is resubmitted?',
    a: 'No. There is one fee per plan. If a plan comes back CAT B, the corrected version is reviewed under the original fee.',
  },
  {
    q: 'Who actually does the work?',
    a: 'Ricky Marsh, a CPCS A61 Appointed Person with 35 years in UK lifting operations, who holds the NEBOSH Diploma, CertIOSH and MIIRSM. Our software does the arithmetic and the drawing; nothing leaves RMT until he has checked and signed it off.',
  },
  {
    q: 'Do you work outside the North West?',
    a: 'Yes. Lift plans and reviews are delivered UK-wide from our Warrington office, with site visits arranged where the work needs them.',
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

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com/' },
    { '@type': 'ListItem', position: 2, name: 'Why Choose RMT', item: PAGE_URL },
  ],
}

// Ties the page to the business entity defined on the homepage (#business),
// so Google reads it as a page about that business rather than a new one.
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Why Contractors Choose RMT Solutions for Lift Planning',
  description:
    'Why UK contractors choose RMT Solutions: an independent CPCS A61 Appointed Person, a 19-point lift plan review, traceable crane duties and life-like drawings.',
  inLanguage: 'en-GB',
  isPartOf: { '@type': 'WebSite', url: 'https://www.rmtsafetysolutions.com' },
  about: { '@id': 'https://www.rmtsafetysolutions.com/#business' },
  breadcrumb: breadcrumbSchema,
}

export default function WhyRmtSolutionsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/appointed-person-reviewing-lift-plan-uk.webp"
            alt="CPCS Appointed Person reviewing a lift plan on a UK construction site"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-400 mb-6">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="hover:text-amber-400">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-slate-200">Why Choose RMT</li>
            </ol>
          </nav>
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
            Independent Lift Planning Consultant · CPCS A61 · UK-wide
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 max-w-4xl">
            Why contractors choose RMT Solutions for lift planning
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            An independent CPCS A61 Appointed Person with 35 years in UK lifting operations, backed by our own bespoke
            planning and review software. Every duty checked against the manufacturer&apos;s published chart. Every plan
            checked to the same standard. Every drawing showing the real machine and the real rigging.
          </p>
          <div className="flex flex-wrap gap-4 mb-10">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a fixed-price quote
            </Link>
            <a
              href="tel:+447803808093"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              07803 808093
            </a>
          </div>
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 border-t border-white/15 pt-8 max-w-5xl">
            {[
              { v: '24–48 hrs', l: 'Typical review turnaround' },
              { v: '19-point', l: 'Review on every plan, CAT A or CAT B' },
              { v: '11.5 million', l: 'Published crane duty points, never interpolated' },
              { v: '1,000+', l: 'Lift plans delivered' },
            ].map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-display text-3xl sm:text-4xl font-bold text-amber-400">{s.v}</dd>
                <dd className="text-sm text-slate-300 mt-1">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <ProofStrip id="saville" />

      {/* Six reasons */}
      <section aria-labelledby="reasons-heading" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">What you get</p>
          <h2 id="reasons-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
            Six reasons to use an independent lift planning consultant
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-12">
            We built our own planning and review software so that one experienced Appointed Person can give you the
            accuracy, consistency and evidence of a whole lift planning department.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REASONS.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-slate-900 border border-slate-700/60 p-6">
                <Icon className="w-7 h-7 text-amber-400 mb-4" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section aria-labelledby="compare-heading" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="compare-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
            How RMT compares with other ways to get a lift plan
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-10">
            Crane hire contract lifts, freelance Appointed Persons, templates and planning software each cover part of
            the job. RMT covers all of it.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-slate-700">
            <table className="w-full min-w-[760px] text-left text-sm sm:text-base">
              <caption className="sr-only">Comparison of RMT Solutions with other ways to get a lift plan</caption>
              <thead className="bg-slate-800 text-white">
                <tr>
                  <th scope="col" className="px-5 py-4 font-semibold">What you get</th>
                  <th scope="col" className="px-5 py-4 font-semibold text-amber-400">RMT Solutions</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Crane hire contract lift</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Freelance or agency AP</th>
                  <th scope="col" className="px-5 py-4 font-semibold">Templates and software</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-gray-300">
                {COMPARISON.map((r) => (
                  <tr key={r.row} className="bg-slate-950/60">
                    <th scope="row" className="px-5 py-4 font-medium text-white">{r.row}</th>
                    <td className="px-5 py-4 font-semibold text-amber-300">
                      <span className="inline-flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                        {r.rmt}
                      </span>
                    </td>
                    <td className="px-5 py-4">{r.hire}</td>
                    <td className="px-5 py-4">{r.ap}</td>
                    <td className="px-5 py-4">{r.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 max-w-3xl">
            Need the plant as well as the plan? A crane hire contract lift may suit you better. We can still check
            the crane company&apos;s plan independently. <Link href="/blog/cpa-hire-vs-contract-lift-appointed-person" className="text-amber-400 hover:text-amber-300 underline underline-offset-2">CPA hire vs contract lift explained</Link>.
          </p>
        </div>
      </section>

      {/* For main contractors */}
      <section aria-labelledby="contractors-heading" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">For principal contractors</p>
            <h2 id="contractors-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
              See which subcontractors are putting your lifts at risk
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Every review we carry out goes into a compliance register. Your safety team gets a live,
              password-protected dashboard across all your projects, so lifting governance is evidence, not opinion.
            </p>
          </div>
          <ul className="space-y-4">
            {CONTRACTOR_POINTS.map((p) => (
              <li key={p} className="flex gap-3 text-gray-200 text-lg leading-relaxed">
                <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CompanyFilm film="software" path="/why-rmt-solutions" background="bg-slate-950" />

      <OurSoftware compact />

      {/* Services hub */}
      <section aria-labelledby="services-heading" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="services-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            What we do
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group rounded-2xl bg-slate-950/60 border border-slate-700/60 hover:border-amber-500/50 p-6 transition"
              >
                <h3 className="font-display text-lg font-bold text-white group-hover:text-amber-400 mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.text}</p>
                <span className="inline-flex items-center gap-1 text-amber-400 text-sm font-semibold">
                  Find out more <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <p className="mt-8">
            <Link href="/services" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
              All lift planning services <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </p>
        </div>
      </section>

      {/* How a review works */}
      <section aria-labelledby="how-heading" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="how-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-10">
            How a lift plan review works
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map((s) => (
              <li key={s.n} className="rounded-2xl bg-slate-900 border border-slate-700/60 p-6">
                <span className="w-11 h-11 rounded-full bg-amber-500 text-slate-900 font-display font-bold text-lg flex items-center justify-center mb-4" aria-hidden="true">
                  {s.n}
                </span>
                <h3 className="font-display text-lg font-bold text-white mb-2">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Who you deal with */}
      <section aria-labelledby="who-heading" className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-[220px_1fr] gap-10 items-center">
          <div className="w-44 md:w-full rounded-2xl overflow-hidden border border-slate-700/60">
            <Image
              src="/images/ricky-marsh.webp"
              alt="Ricky Marsh, CPCS A61 Appointed Person and founder of RMT Solutions"
              width={896}
              height={1195}
              sizes="220px"
              className="w-full h-auto"
            />
          </div>
          <div>
            <h2 id="who-heading" className="font-display text-3xl font-bold text-white mb-4">
              You deal with the Appointed Person who signs off your plan
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              RMT Solutions is run by Ricky Marsh: CPCS A61 Appointed Person, NEBOSH Diploma, NEBOSH Certificate in Fire
              Safety, CertIOSH, MIIRSM and TIFSM, with 35 years in lifting operations. No call centres and no hand-offs.
            </p>
            <CredentialChips className="mb-5" />
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <Link href="/about" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
                About Ricky <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link href="/testimonials" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
                What clients say <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link href="/case-studies" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold">
                Case studies <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="faq-heading" className="font-display text-3xl font-bold text-white mb-12">
            Choosing a lift planning consultant: FAQs
          </h2>
          <div className="space-y-6 max-w-4xl">
            {PAGE_FAQS.map((faq) => (
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
          <figure className="mb-8 bg-slate-800/40 border-l-4 border-amber-400 rounded-r-2xl p-6">
            <blockquote className="text-gray-300 italic leading-relaxed">
              &ldquo;RMT Solutions always provide comments and approvals quickly so that any issues can be sorted out
              and the programme of works maintained on site.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="text-white font-semibold">Tom Herd</span>
              <span className="text-gray-400"> — Project Manager, Caddick Construction</span>
              <Link href="/testimonials" className="text-amber-400 hover:text-amber-300 underline underline-offset-2 ml-2">More testimonials →</Link>
            </figcaption>
          </figure>
          <InlineQuoteForm serviceName="Why Choose RMT" heading="Get a fixed-price quote" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Got a lift coming up?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Send the plan or the details and get a fixed-price quote within four working hours.
          </p>
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
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              07803 808093
            </a>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400">
            <BadgeCheck className="w-4 h-4 text-amber-400" aria-hidden="true" />
            Constructionline Gold member · UK-wide from Warrington
          </p>
        </div>
      </section>
    </>
  )
}
