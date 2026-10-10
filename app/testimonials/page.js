import Link from 'next/link'
import { Quote, Star, ArrowRight } from 'lucide-react'
import { testimonials } from '@/lib/testimonials'

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

// Testimonials data lives in lib/testimonials.js so the home page and
// service pages can quote the same verbatim words.

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
