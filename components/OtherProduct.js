import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { costs } from '@/lib/appPlans'

/**
 * The other thing sold from the same application.
 *
 * WHY THIS EXISTS
 *   Two products are sold from one application, and until now each page behaved
 *   as though it were the only one. Somebody who clicked Software saw lift
 *   planning and no sign that rigging existed; the rigging page mentioned lift
 *   planning only to say what was NOT included. The navigation listed the pair
 *   and the footer listed the pair — the pages themselves did not.
 *
 *   That matters commercially both ways round. A rigger who lands on the lift
 *   planning page from a search bounces rather than finding the £29 product
 *   that answers his question, and a planner on the rigging page never learns
 *   the rest of it exists.
 *
 * WHAT IT SAYS
 *   What the other product does, who it is for, what it costs and how its trial
 *   works — because those differ: lift planning is issued by hand with no card,
 *   rigging starts itself with a card and converts. One paragraph of each is
 *   enough to send the right person to the right page.
 *
 *   The price comes from Stripe through lib/appPlans, so it is either right or
 *   absent. Never typed in.
 */

const COPY = {
  liftplan: {
    eyebrow: 'Also from LiftPlan Studio',
    title: 'Lift planning — the whole document, not just the gear',
    href: '/lift-plan-software',
    body:
      'The lorry loader and its duty chart, the ALLMI calculation, ground bearing pressure and '
      + 'mats, the method and sequence, a 5 × 5 risk assessment, the 18-point compliance review '
      + 'and an A3 drawing set — issued as one document under your own name and logo.',
    who: 'For the Appointed Person who has a lorry loader plan to produce and defend.',
    /* LORRY LOADERS, AND NOT A WORD MORE.
       The application holds mobile crane and excavator data, and neither is in
       front of customers: both are owner-only while the compilation licence and
       the coverage are settled. Listing them here would sell a tab that does
       not appear after somebody pays. */
    points: [
      'More than 1,900 lorry loaders, 122 with full duty charts',
      'EL-01, PL-01 and RG-01 drawn to the machine’s published dimensions',
      'Works offline on site once installed',
    ],
    trial: '14-day trial. The account is set up by hand, usually the same working day — '
      + 'no card is taken and there is nothing to cancel.',
    cta: 'See the lift planning side',
  },
  rigging: {
    eyebrow: 'Also from LiftPlan Studio',
    title: 'Rigging — sold on its own, for people who rig more than they plan',
    href: '/rigging-software',
    body:
      'Sling legs worked by geometry with the centre of gravity where it actually is, rather than '
      + 'the load divided by the number of legs. Chain, wire rope, webbing and round slings, '
      + 'shackles, eyebolts and lifting beams, each rated from its own published table.',
    who: 'For the slinger, supervisor or engineer with a load in front of them and a question about the gear.',
    points: [
      'Mode factors from BS EN 818-4, 13414-1/-2 and 1492-1/-2, named on every result',
      'Angles to the vertical throughout, on screen and on the drawing',
      'PASS or FAIL with the utilisation, and RG-01 to issue',
    ],
    trial: '7-day trial you start yourself. Stripe takes your card and charges nothing for seven '
      + 'days; cancel inside them and you pay nothing at all.',
    cta: 'See the rigging tool',
  },
}

/**
 * @param {{ product: 'liftplan'|'rigging', plan: object|null }} props
 *   `plan` is whatever lib/appPlans returned for that product — null is fine
 *   and means the block simply does not quote a figure.
 */
export default function OtherProduct({ product, plan = null }) {
  const c = COPY[product]
  if (!c) return null

  return (
    <section className="py-20 bg-slate-900 border-y border-slate-800/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-8 sm:p-10">
          <p className="text-amber-400 text-sm font-semibold tracking-wide uppercase mb-3">
            {c.eyebrow}
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            {c.title}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="text-gray-400 leading-relaxed mb-4">{c.body}</p>
              <p className="text-gray-300 leading-relaxed">{c.who}</p>
            </div>

            <div>
              <ul className="space-y-3 mb-6">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-gray-300 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    {p}
                  </li>
                ))}
              </ul>

              <p className="text-white font-semibold mb-1">
                One seat, {costs(plan)}.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{c.trial}</p>

              <Link
                href={c.href}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
              >
                {c.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
