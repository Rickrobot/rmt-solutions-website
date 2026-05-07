import Link from 'next/link'
import CaseStudiesGrid from '@/components/CaseStudiesGrid'

export const metadata = {
  title: 'Case Studies | Lift Planning Projects',
  description: 'Lift planning case studies from RMT Solutions. Tower crane contracts, steel erection projects, mobile crane lifts, and excavator operations across the UK.',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies | Lift Planning Projects',
    description: 'Lift planning case studies from RMT Solutions across the UK.',
    url: 'https://www.rmtsafetysolutions.com/case-studies',
  },
}

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Our Work
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              Lift Planning <span className="gradient-text">Case Studies</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Examples of lift planning projects we've delivered for contractors across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CaseStudiesGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Have a Similar Project?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Get in touch to discuss your lift planning requirements.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  )
}
