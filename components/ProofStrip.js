import Link from 'next/link'
import { Quote, ShieldCheck, BadgeCheck, PoundSterling, Clock } from 'lucide-react'
import { getTestimonial, testimonials } from '@/lib/testimonials'

/**
 * A named client quote and three facts, placed directly under a page's hero.
 *
 * WHY (Oct 2026 design review)
 *   The site's strongest asset is fifteen named testimonials from Caddick,
 *   Wates, Sunel and DGS site and H&S managers, but they sat on one page that
 *   few visitors reach. A contractor deciding whether to pick up the phone
 *   decides in the first screen or two, so one relevant quote now sits there
 *   on every lifting service page. The words are verbatim from
 *   lib/testimonials.js (see pullQuotes), never paraphrased.
 *
 * Props
 *   id     testimonial id from lib/testimonials.js
 *   price  optional published starting price, e.g. "Excavator lift plans from £200 + VAT".
 *          Without it the third fact is the four-hour fixed-price quote.
 */
export default function ProofStrip({ id, price }) {
  const t = getTestimonial(id)
  const facts = [
    { icon: BadgeCheck, text: 'CPCS A61 Appointed Person' },
    { icon: ShieldCheck, text: 'Constructionline Gold member' },
    price
      ? { icon: PoundSterling, text: price }
      : { icon: Clock, text: 'Fixed-price quote within 4 working hours' },
  ]
  return (
    <section aria-label="What clients say" className="bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-12 items-center">
        <figure className="flex gap-4">
          <Quote className="hidden sm:block w-8 h-8 text-amber-400 flex-shrink-0 mt-1" aria-hidden="true" />
          <div>
            <blockquote className="text-gray-100 text-base sm:text-lg leading-relaxed">
              &ldquo;{t.pull}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-gray-400">
              <span className="text-white font-semibold">{t.name}</span>
              {' '}&mdash; {t.role}, {t.company}
              <Link href="/testimonials" className="block sm:inline sm:ml-3 mt-1 sm:mt-0 text-amber-400 hover:text-amber-300 font-semibold">
                Read all {testimonials.length} client reviews &rarr;
              </Link>
            </figcaption>
          </div>
        </figure>
        <ul className="flex flex-wrap lg:flex-col gap-2 lg:gap-3">
          {facts.map(({ icon: Icon, text }) => (
            <li key={text} className="inline-flex items-center gap-2 rounded-full lg:rounded-xl border border-slate-700/60 bg-slate-800/50 px-3 py-1.5 lg:px-4 lg:py-2 text-xs sm:text-sm text-gray-200 whitespace-nowrap">
              <Icon className="w-4 h-4 text-amber-400 flex-shrink-0" aria-hidden="true" />
              {text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
