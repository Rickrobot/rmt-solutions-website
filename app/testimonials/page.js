import Link from 'next/link'
import { Quote, Star, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Client Testimonials | UK Contractors',
  description:
    'Independent testimonials from Caddick, Wates and Sunel Group project and HSE managers on RMT Solutions lift plan reviews and LOLER documentation.',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials | What UK Contractors Say About RMT Solutions',
    description:
      'Independent testimonials from Caddick Construction, Wates Construction and Sunel Group project managers, site managers and HSE managers on RMT Solutions Ltd lift plan reviews, written lift plans and LOLER-compliant lifting documentation.',
    url: 'https://www.rmtsafetysolutions.com/testimonials',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

// Testimonials data — verbatim quotes from client correspondence
// collected between July 2025 and June 2026 across Caddick Construction,
// Wates Construction (NW Region), Sunel Group renewables projects and
// DGS site teams.
// Quotes are reproduced as supplied, with only minor typographical and
// casing corrections applied in line with house style for published
// testimonials. Specifically:
//   • Buckley — changers→changes, complaint→compliant
//   • Chadwick — inserted missing word ("been RMT Solutions" → "been
//     using RMT Solutions")
//   • Liddell — "RMT safety solutions"→"RMT Safety Solutions",
//     "turn arounds"→"turnarounds", "ever changing"→"ever-changing"
//   • Rooney — removed a stray space before a full stop and aligned
//     "Lift Plans" capitalisation to "lift plans" mid-sentence
//   • Geary — inserted "and was" to fix subject-verb agreement in
//     "needs for the job were delivered" → "needs for the job and was
//     delivered"
// Pryce and Curtis both supplied long, structured responses; the website
// surfaces a short pull-quote from each, with the full response noted as
// available on request.
const testimonials = [
  {
    id: 'musetti',
    name: 'Louis Musetti',
    role: 'Site Manager',
    company: 'Caddick Construction',
    location: 'Wakefield / Durham',
    project: 'Lift plan reviews — Ashfield Mills and other Caddick projects',
    quote:
      "I have been consistently impressed with the high quality and prompt turnaround of Ricky's lift plans and appraisals. On certain occasions, we have relied on him at the last minute, and he has always responded with professionalism, helpfulness, and urgency.",
    datePublished: '2025-08-14',
  },
  {
    id: 'herd',
    name: 'Tom Herd',
    role: 'Project Manager',
    company: 'Caddick Construction',
    location: 'Warrington',
    project: 'Lift plan reviews and written plans — Howdens, Runcorn',
    quote:
      'I very much value the services provided by RMT Solutions regarding lift plan reviews. Many contractors only provide lift plans late in the day and when required, RMT Solutions always provide comments and approvals quickly so that any issues can be sorted out and the programme of works maintained on site. When contractors are unable to provide suitable lift plans themselves, RMT Solutions are willing to produce lift plans for the works, again on a quick turnaround, so that progress of works is not affected. I would highly recommend RMT Solutions to anyone wanting a capable, professional company to work with regarding the review of lift plans, and one that will always go the extra mile to offer assistance when required.',
    datePublished: '2025-09-22',
  },
  {
    id: 'duffy',
    name: 'Kevin Duffy',
    role: 'Senior Project Manager',
    company: 'Caddick Construction',
    location: 'Warrington',
    project: 'Lift plan appraisals across his last two schemes',
    quote:
      'I have been using RMT Solutions on my last two schemes and have always found the service they provide to be first class in regards of appraising lifting plans to ensure that lifts on site are designed, planned, and fit for purpose. The service they provide is always concise and helpful for the issuer and the turnaround is always prompt and advice is always on the end of the phone. I would have no hesitation in recommending RMT Solutions.',
    datePublished: '2025-11-06',
  },
  {
    id: 'buckley',
    name: 'Paul Buckley',
    role: 'Senior Site Manager',
    company: 'Caddick Construction',
    location: 'Wakefield / Durham',
    project: 'Lift plan reviews across his last three projects',
    quote:
      'Ricky has provided a great level of expertise in our lifting operations across my last three projects. Lift plans that are submitted sometimes late or with changes to Ricky are generally still reviewed and returned in a timely manner with a detailed response on either accepted or rejected status. Ricky is also more than happy to pick up the phone and speak to the contractors and APs that have submitted their work and explain his reasoning. Ricky provides a comfort for the site team knowing that all lifting activities onsite are checked and compliant.',
    datePublished: '2025-10-15',
  },
  {
    id: 'pryce',
    name: 'Andrew Pryce',
    role: 'QHSE Manager',
    company: 'Sunel Group',
    location: 'Lawns House Solar Farm',
    project: 'Excavator lift plans and lift plan reviews',
    quote:
      'We, the site team at Lawns, would highly recommend RMT Solutions. Their thorough scrutiny of lifting documentation, rapid turnaround times and clear understanding of LOLER and wider UK regulatory requirements have significantly strengthened our safe-system-of-work processes and provided the project with a high level of confidence and operational assurance.',
    datePublished: '2025-12-03',
  },
  {
    id: 'rooney',
    name: 'Jim Rooney',
    role: 'Senior Project Manager',
    company: 'Caddick Construction',
    location: 'Warrington',
    project: 'Lift plan writing and review — Caddick (and previously Wates)',
    quote:
      "I have had access to Ricky's considerable knowledge putting together and evaluating lift plans over a number of years at Wates and now at Caddick. Ricky provides a comprehensive service and has an excellent knowledge of LOLER and BS 7121 regulations and always provides comprehensive lift plans for our operations when required. Ricky is particularly helpful in meeting tight deadlines in cases when lift plans are submitted at the eleventh hour. The service provided by Ricky is always concise and helpful to the issuer and often Ricky will speak directly with the issuer to resolve any possible issues arising for the plans as submitted. I can recommend RMT Solutions without any hesitation.",
    datePublished: '2026-01-19',
  },
  {
    id: 'saville',
    name: 'Mark Saville',
    role: 'Senior HSE Manager',
    company: 'Caddick Construction',
    location: 'NW Region',
    project: 'Crane and non-crane lifting governance',
    quote:
      'Since engaging Ricky Marsh within the NW Region of Caddick Construction Limited, governance of Lifting Operations (both Crane & Non-Crane) has improved massively and certainly ensures full compliance with both LOLER 1998 & BS 7121. Ricky is very responsive and has when required accommodated even the late supply of lift plans and turned them round to ensure safe lifts on the day. I would recommend his services to both Caddick Group and beyond.',
    datePublished: '2026-02-11',
  },
  {
    id: 'chadwick',
    name: 'James Chadwick',
    role: 'Project Manager',
    company: 'Wates Construction',
    location: 'Trafford Park, Manchester (NW Region)',
    project: 'Lift plan reviews across multiple Wates NW projects',
    quote:
      "I've been using RMT Solutions for lift plan reviews for a number of years now and have always had a great experience. Their work is consistently in line with LOLER 1998 regulations, which gives me full confidence in the quality and compliance of the service they provide. Everything is always completed in a timely manner, and they've often been able to help me out at short notice when I've had last-minute requests — which has been a huge help on more than one occasion. Overall, RMT are reliable, professional, and easy to deal with. I wouldn't hesitate to recommend their services to others.",
    datePublished: '2025-07-30',
  },
  {
    id: 'hebditch',
    name: 'Joshua Hebditch',
    role: 'Project Manager',
    company: 'Caddick Construction',
    location: 'Wakefield / Durham',
    project: 'Lift plans and reviews across multiple Caddick projects',
    quote:
      'We have used RMT Solutions Ltd for lift plans and lift plan reviews across our sites and have always found them professional and reliable. They are easy to deal with, provide a high level of detail within their lift plans and reviews, and respond quickly to any unforeseen changes or site requirements. Their communication and turnaround times have consistently been excellent, making them a trusted support on our projects.',
    datePublished: '2026-03-04',
  },
  {
    id: 'liddell',
    name: 'Mark Liddell',
    role: 'Site Manager',
    company: 'Caddick Construction',
    location: 'Wakefield / Durham',
    project: 'Lift plan support across his last two projects (30 months)',
    quote:
      'Having worked with RMT Safety Solutions over my last two projects spanning 30 months, I can honestly say they are an asset to the project team, offering professional support and guidance where required, with flexible and timely turnarounds to meet ever-changing programme demands.',
    datePublished: '2026-04-22',
  },
  {
    id: 'achonu',
    name: 'Kelechi Achonu',
    role: 'Site QHSE Manager',
    company: 'Sunel Group',
    location: 'Winkburn Solar Farm',
    project: 'Lift plan reviews and excavator lift plans',
    quote:
      "RMT Solutions provided lift plan reviews and excavator lift plans for our solar farm construction projects, and the service has been consistently solid. The documentation is thorough, clearly structured, and has held up well under LOLER scrutiny from both our client and insurers. Turnaround times have been prompt, and whenever we've needed revisions, Ricky has been responsive and straightforward to work with. I'd have no hesitation recommending RMT Solutions to colleagues on other Sunel projects.",
    datePublished: '2026-05-12',
  },
  {
    id: 'curtis',
    name: 'Wanda Curtis',
    role: 'Health & Safety Manager',
    company: 'Caddick Construction',
    location: 'Group H&S — Wakefield',
    project: 'Caddick Group lift plan governance — third-party assurance',
    quote:
      "RMT Solutions' service provision for Caddick consists of both Lift Plan development and a third-party review/appraisal service, which has become an indispensable asset for our operations. Ricky delivers a masterclass in technical compliance and operational responsiveness.",
    datePublished: '2026-06-01',
  },
  {
    id: 'geary',
    name: 'Matthew Geary',
    role: 'Site Supervisor',
    company: 'DGS',
    location: 'Leeds',
    project: 'Lift plans for various lift types — Leeds project',
    quote:
      'I have most recently worked with Ricky on my project in Leeds. We required an informative and specific lifting plan for various different lifts around the project. I used him twice on that particular contract. Both times the lifting plan met the needs for the job and was delivered in very good time. I have already recommended Ricky to other site managers within my organisation and will definitely be using him again.',
    datePublished: '2026-05-31',
  },
  {
    id: 'bibby',
    name: 'Mark Bibby',
    role: 'Health & Safety Manager',
    company: 'Caddick Construction',
    location: 'Warrington',
    project: 'Lift plan reviews across all Caddick projects; lifting minimum standards development',
    quote:
      "We've used RMT Solutions to review lift plans across all Caddick Construction projects over the last 18 months and have found the service to be professional, responsive and technically robust. The reviews provide assurance that lifting documentation meets the requirements of LOLER, BS 7121 and our own internal standards, while also identifying practical improvements where needed. Feedback is clear and constructive, turnaround times are good, and support is always available when revisions are required. More recently, I've worked closely with Ricky while developing a lifting minimum standards document for our business — his knowledge, practical experience and willingness to provide guidance have been invaluable in helping me establish a consistent and robust approach to lifting operations across our projects. The service has added real value to our lifting governance process, and I would recommend RMT Solutions to others within the construction industry.",
    datePublished: '2026-06-02',
  },
  {
    id: 'banting',
    name: 'Jacques Banting',
    role: 'Health & Safety Manager',
    company: 'Caddick Construction',
    location: 'Wakefield / Durham',
    project: 'Third-party crane and non-crane lift plan appraisals',
    quote:
      "At Caddick Construction we have made use of RMT Solutions Ltd services for the last 15 months or so. Ricky Marsh has been superb on all levels with his support and advice, assisting Caddick with lifting solutions and third-party lift plan appraisals. His service is always very professional, friendly, swift and helpful, with a positive approach and 'can do' attitude. RMT Solutions is currently contracted as a third-party consultant by Caddick to appraise all crane and non-crane lift plans throughout the business. Ricky's lift plan appraisal process is robust and fully compliant with the LOLER 1998 and BS 7121 standards, and incorporates Caddick's CAT A and CAT B appraisal standard. I would fully recommend RMT Solutions' service to anyone within the Caddick Group, our supply chain partners, and anyone who wishes to use his services.",
    datePublished: '2026-06-01',
  },
]

// Review JSON-LD — each testimonial is exposed to Google as an
// individual Review entity attached to the RMT Solutions ProfessionalService.
// This is what lets stars appear in rich SERP results once the
// AggregateRating below is also accepted.
const reviewsJsonLd = testimonials.map((t) => ({
  '@context': 'https://schema.org',
  '@type': 'Review',
  '@id': `https://www.rmtsafetysolutions.com/testimonials#${t.id}`,
  itemReviewed: {
    '@type': 'ProfessionalService',
    '@id': 'https://www.rmtsafetysolutions.com/#business',
    name: 'RMT Solutions Ltd',
  },
  author: {
    '@type': 'Person',
    name: t.name,
    jobTitle: t.role,
    worksFor: { '@type': 'Organization', name: t.company },
  },
  reviewBody: t.quote,
  reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
  datePublished: t.datePublished,
}))

// AggregateRating JSON-LD — gives Google the rollup figure across all
// published reviews. reviewCount is derived from testimonials.length so
// the count, the visible hero text and the schema stay in lockstep
// whenever a new testimonial is added to the array above.
const aggregateRatingJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': 'https://www.rmtsafetysolutions.com/#business',
  name: 'RMT Solutions Ltd',
  url: 'https://www.rmtsafetysolutions.com',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: String(testimonials.length),
    bestRating: '5',
    worstRating: '5',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
    { '@type': 'ListItem', position: 2, name: 'Testimonials', item: 'https://www.rmtsafetysolutions.com/testimonials' },
  ],
}

export default function TestimonialsPage() {
  return (
    <>
      {reviewsJsonLd.map((r, i) => (
        <script
          key={`review-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(r) }}
        />
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Client Testimonials
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              Trusted by <span className="gradient-text">UK Contractors</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              What project managers and site teams say about working with RMT Solutions on lift plan
              reviews, written lift plans and LOLER&nbsp;1998 compliant lifting documentation.
            </p>
            <div className="mt-8 flex items-center space-x-2">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-3 text-gray-300 text-sm">
                {testimonials.length} verified client reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50 flex flex-col"
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Quote className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className="flex space-x-1 pt-3">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-gray-300 leading-relaxed text-lg border-l-4 border-amber-400/60 pl-6 italic mb-8 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <footer className="mt-auto pt-6 border-t border-slate-700/50">
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-gray-400 text-sm">
                    {t.role} · {t.company}
                  </p>
                  <p className="text-gray-500 text-sm">{t.location}</p>
                  <p className="text-amber-400/80 text-xs mt-2 tracking-wide uppercase">
                    {t.project}
                  </p>
                  <p className="text-gray-600 text-xs mt-3">
                    Published {new Date(t.datePublished).toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}
                  </p>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Context / why these matter */}
      <section className="py-24 bg-slate-950 border-t border-slate-800/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            About These Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
            Verified Replies from Active Construction Sites
          </h2>
          <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
            <p>
              The reviews above were supplied directly by project managers, senior project managers,
              site managers, senior HSE and QHSE managers and a group-level Health &amp; Safety
              Manager working on live UK construction projects between 2024 and 2026. Contributors include teams at{' '}
              <Link href="/locations" className="text-amber-400 hover:text-amber-300 underline">
                Caddick Construction
              </Link>
              , Wates Construction (NW Region), the Sunel Group renewables division and DGS site
              teams in Yorkshire. Each quote is reproduced as it was sent, with only minor
              typographical corrections in line with normal published-testimonial conventions.
            </p>
            <p>
              The work referenced covers the full range of RMT Solutions{' '}
              <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">
                lift plan review
              </Link>
              ,{' '}
              <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                written lift plans
              </Link>
              {' '}and{' '}
              <Link href="/services/excavator-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                excavator lift plan
              </Link>
              {' '}services — produced to BS&nbsp;7121 best practice and fully compliant with the
              Lifting Operations and Lifting Equipment Regulations 1998 (LOLER).
            </p>
            <p>
              If you would like to speak with any of the contributors, references are available on
              request. Andrew Pryce&apos;s full structured Q&amp;A response covering LOLER scrutiny,
              insurer assurance and turnaround time, and Wanda Curtis&apos;s detailed
              governance-and-compliance response covering BS&nbsp;7121, ground bearing pressure
              calculations and outrigger loadings, are both available on request — contact us via the{' '}
              <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Ready to Add Your Project to the List?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Fast turnaround, BS&nbsp;7121 best practice and LOLER&nbsp;1998 compliance, every time.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Request a Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
