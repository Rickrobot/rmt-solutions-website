import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

/**
 * RelatedServices — internal link block for service pages.
 *
 * Spreads link equity across the site by linking each service page to
 * 2-3 related services, which Google uses to understand topical
 * relationships and helps users discover adjacent offerings.
 *
 * Props:
 *   currentSlug: string  The slug of the current service (used to filter
 *                        out self-references)
 */
const ALL_SERVICES = {
  'appointed-person': {
    title: 'CPCS A61 Appointed Person',
    description: 'A named CPCS A61 Appointed Person for your lifting operations — planning, lift plans and sign-off to LOLER 1998 and BS 7121.',
  },
  'lift-plans': {
    title: 'Lift Plan Writing',
    description: 'LOLER compliant lift plans for excavators, telehandlers, mobile cranes and lorry loaders. 24-48 hour turnaround.',
  },
  'lift-plan-checking': {
    title: 'Lift Plan Checking',
    description: 'Independent technical review of lift plans submitted by subcontractors. Cat A or Cat B determination with paste-ready findings.',
  },
  // 'lift-plan-review' removed (Jul 2026 SEO review, fix #5) — the URL 301s to
  // lift-plan-checking, so linking to it from the related-services block sent
  // equity through a redirect on every service page that used it.
  'lifting-operations-audit': {
    title: 'Lifting Operations Audit',
    description: 'Site-based compliance audit covering plans, equipment certificates, supervision, and operator competence. 8-weekly cycle available.',
  },
  'tower-crane': {
    title: 'Tower Crane Contracts',
    description: 'Ongoing CPCS A61 Appointed Person contracts with 8-weekly audits, documentation management, and on-call AP support.',
  },
  'steel-erection': {
    title: 'Steel Erection Planning',
    description: 'Combined lift plan, method statement and risk assessment for structural steel erection. BS 5531 compliant.',
  },
  'excavator-lift-plans': {
    title: 'Excavator Lift Plans',
    description: 'LOLER compliant lift plans for 180° and 360° excavators. ISO 10567 capacity verification.',
  },
  'telehandler-lift-plans': {
    title: 'Telehandler Lift Plans',
    description: 'Suspended-load lift plans for telescopic handlers on hook duties. CPCS A77C compliant.',
  },
  'lorry-loader-lift-plans': {
    title: 'Lorry Loader Lift Plans',
    description: 'Site-specific lift plans for HIAB and vehicle-mounted articulated cranes. Generic delivery plans also available.',
  },
  'mobile-crane-lift-plans': {
    title: 'Mobile Crane Lift Plans',
    description: 'Lift plans for hire and contract lifts. Tandem and complex-pick experience across the UK.',
  },
  'overhead-gantry-crane-lift-plans': {
    title: 'Overhead & Gantry Crane Lift Plans',
    description: 'Lift plans for overhead travelling (EOT), gantry, bridge and jib cranes in factories and warehouses. BS 7121-7 compliant.',
  },
  'aerial-site-surveys': {
    title: 'Aerial Site Surveys',
    description: 'Drone-led pre-lift site surveys to verify ground conditions, overhead obstructions, and access routes.',
  },
}

// Curated related-service map. Each service points to 3 logical neighbours
// — by equipment type, by buyer journey, or by complementary deliverable.
const RELATED_MAP = {
  'appointed-person':          ['lift-plans', 'lift-plan-checking', 'tower-crane'],
  'lift-plans':                ['appointed-person', 'lift-plan-checking', 'excavator-lift-plans', 'mobile-crane-lift-plans'],
  'lift-plan-checking':        ['appointed-person', 'lift-plans', 'lifting-operations-audit', 'tower-crane'],
  'lifting-operations-audit':  ['tower-crane', 'lift-plan-checking', 'appointed-person'],
  'tower-crane':               ['appointed-person', 'lifting-operations-audit', 'mobile-crane-lift-plans', 'steel-erection'],
  'steel-erection':            ['tower-crane', 'mobile-crane-lift-plans', 'lift-plans'],
  'excavator-lift-plans':      ['lift-plans', 'telehandler-lift-plans', 'lift-plan-checking'],
  'telehandler-lift-plans':    ['excavator-lift-plans', 'lorry-loader-lift-plans', 'lift-plans'],
  'lorry-loader-lift-plans':   ['telehandler-lift-plans', 'mobile-crane-lift-plans', 'lift-plans'],
  'mobile-crane-lift-plans':   ['tower-crane', 'lift-plans', 'steel-erection'],
  'overhead-gantry-crane-lift-plans': ['lift-plans', 'lift-plan-checking', 'steel-erection'],
  'aerial-site-surveys':       ['lift-plans', 'mobile-crane-lift-plans', 'tower-crane'],
}

export default function RelatedServices({ currentSlug }) {
  const relatedSlugs = (RELATED_MAP[currentSlug] || []).filter((s) => s !== currentSlug)
  if (relatedSlugs.length === 0) return null

  return (
    <section className="py-16 bg-slate-900/50 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold text-white mb-3">Related services</h2>
        <p className="text-gray-400 mb-10 max-w-2xl">
          Most projects need more than one of these. Here's what often pairs with this service.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedSlugs.map((slug) => {
            const svc = ALL_SERVICES[slug]
            if (!svc) return null
            return (
              <Link
                key={slug}
                href={`/services/${slug}`}
                className="group block bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-2xl p-6 transition"
              >
                <h3 className="font-display text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition">
                  {svc.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {svc.description}
                </p>
                <span className="inline-flex items-center text-amber-400 font-semibold text-sm">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
