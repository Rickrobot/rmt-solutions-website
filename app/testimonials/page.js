import Link from 'next/link'
import { Quote, Star, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Client Testimonials | What UK Contractors Say About RMT Solutions',
  description:
    'Independent testimonials from Caddick Construction project managers and Sunel Group site teams on RMT Solutions Ltd lift plan reviews, written lift plans and LOLER-compliant lifting documentation.',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials | What UK Contractors Say About RMT Solutions',
    description:
      'Independent testimonials from Caddick Construction project managers and Sunel Group site teams on RMT Solutions Ltd lift plan reviews, written lift plans and LOLER-compliant lifting documentation.',
    url: 'https://www.rmtsafetysolutions.com/testimonials',
    type: 'website',
  },
}

// Testimonials data — verbatim quotes from email replies received in
// response to the 28 May 2026 testimonial-request campaign. Quotes are
// reproduced as supplied; Buckley's quote has two minor typos corrected
// (changers→changes, complaint→compliant) in line with house style for
// published testimonials. Pryce supplied a long structured Q&A; the
// website surfaces the short pull-quote with a link to the full response
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
    datePublished: '2026-05-28',
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
    datePublished: '2026-05-28',
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
    datePublished: '2026-05-28',
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
    datePublished: '2026-05-28',
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
    datePublished: '2026-05-28',
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
// published reviews. Five 5-star reviews → 5.0 average.
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
              site managers and a QHSE manager working on live UK construction projects between 2024
              and 2026. Each quote is reproduced as it was sent, with only minor typographical
              corrections in line with normal published-testimonial conventions.
            </p>
            <p>
              The work referenced covers the full range of RMT Solutions{' '}
              <Link href="/services/lift-plan-review" className="text-amber-400 hover:text-amber-300 underline">
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
              insurer assurance and turnaround time is available on request — contact us via the{' '}
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
