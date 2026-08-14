import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Clock, ShieldCheck, PhoneCall, CheckCircle2, X, AlertTriangle, ArrowRight, Scale } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import { TRADES, TRADE_SLUGS } from '../trades'

const BASE = 'https://www.rmtsafetysolutions.com'

export async function generateStaticParams() {
  return TRADE_SLUGS.map((trade) => ({ trade }))
}

export async function generateMetadata({ params }) {
  const t = TRADES[params.trade]
  if (!t) return { title: 'Trade not found' }
  const url = `${BASE}/services/method-statements-rams/${params.trade}`
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    keywords: t.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDescription,
      url,
      images: ['/images/og-lift-planning.jpg'],
      siteName: 'RMT Solutions - Lift Planning Specialists',
      type: 'website',
    },
  }
}

export default function TradeRamsPage({ params }) {
  const t = TRADES[params.trade]
  if (!t) notFound()

  const url = `${BASE}/services/method-statements-rams/${params.trade}`

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${t.name} Method Statement & Risk Assessment Writing`,
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
      url: BASE,
    },
    description: t.metaDescription,
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
    serviceType: `${t.name} Method Statement and Risk Assessment Writing`,
    url,
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${BASE}/` },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE}/services` },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Method Statements & RAMS',
        item: `${BASE}/services/method-statements-rams`,
      },
      { '@type': 'ListItem', position: 4, name: t.name, item: url },
    ],
  }

  // Sibling trades for the cross-link block — keeps every trade page one hop
  // from the others, which is how the breadth signal actually propagates.
  const siblings = TRADE_SLUGS.filter((s) => s !== params.trade).slice(0, 6)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
          <nav className="text-sm text-slate-400 mb-6" aria-label="Breadcrumb">
            <Link href="/services" className="hover:text-amber-400">Services</Link>
            <span className="mx-2">/</span>
            <Link href="/services/method-statements-rams" className="hover:text-amber-400">
              Method Statements &amp; RAMS
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-300">{t.shortName}</span>
          </nav>

          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
            NEBOSH Diploma · CertIOSH · 35 Years UK Construction
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {t.name} Method Statements &amp; Risk Assessments
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">{t.intro}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-sm">24&ndash;48hr turnaround</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm">18-point compliance standard</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Resubmission included</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get a Quote
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

      {/* Activities covered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Activities covered</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            Each document is written for the specific activity, site and programme — not adapted
            from a template for the trade.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.activities.map((a) => (
              <div key={a} className="flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hazards + regs */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Hazards the assessment must address
              </h2>
              <ul className="space-y-3">
                {t.hazards.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-slate-700">
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Regulations that apply</h2>
              <div className="space-y-4">
                {t.regulations.map((r) => (
                  <div key={r.ref} className="bg-white border border-slate-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <Scale className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-semibold text-slate-900 block">{r.ref}</span>
                        <span className="text-slate-600 text-sm">{r.detail}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rejection reasons — the money section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Why {t.shortName.toLowerCase()} RAMS get rejected
          </h2>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl">
            These are the findings that come up repeatedly on the reviewing side for this trade. If
            your document has been returned, the reason is very likely in this list.
          </p>

          <div className="bg-rose-50 border border-rose-200 p-8 rounded-xl">
            <div className="grid md:grid-cols-2 gap-4">
              {t.rejectionReasons.map((r) => (
                <div key={r} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-rose-900">{r}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
            <p className="text-slate-800">
              <strong>Already been rejected?</strong> Send the document and the reviewer&apos;s
              comments. We diagnose exactly why it failed, rewrite it against your site information,
              and support the resubmission until it is accepted — at no extra charge.
            </p>
          </div>
        </div>
      </section>

      {/* Lifting interface */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">The lifting element people miss</h2>
          <p className="text-lg text-slate-300 max-w-3xl mb-6">{t.liftingNote}</p>
          <Link
            href={t.liftingLink.href}
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold"
          >
            See our {t.liftingLink.label}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <InlineQuoteForm
            serviceName={`${t.name} RAMS`}
            heading={`Get a quote for ${t.shortName.toLowerCase()} RAMS`}
          />
        </div>
      </section>

      {/* Sibling trades */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">Other trades we write for</h2>
          <p className="text-slate-600 mb-8 max-w-2xl">
            Method statements and risk assessments across the full range of construction activities.
          </p>
          <div className="flex flex-wrap gap-3">
            {siblings.map((s) => (
              <Link
                key={s}
                href={`/services/method-statements-rams/${s}`}
                className="bg-slate-100 hover:bg-amber-50 border border-slate-200 hover:border-amber-400 rounded-xl px-4 py-3 text-slate-700 hover:text-amber-700 font-medium text-sm transition"
              >
                {TRADES[s].shortName} →
              </Link>
            ))}
            <Link
              href="/services/method-statements-rams"
              className="bg-slate-900 hover:bg-slate-800 border border-slate-900 rounded-xl px-4 py-3 text-white font-medium text-sm transition"
            >
              All trades →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need {t.shortName.toLowerCase()} RAMS that get accepted?
          </h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Fixed price, quoted the same day, written to the standard principal contractors review
            against.
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
              <PhoneCall className="w-4 h-4" />
              07803 808093
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
