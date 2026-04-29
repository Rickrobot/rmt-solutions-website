'use client'
import { Phone } from 'lucide-react'

/**
 * Sticky mobile-only call button.
 * Fixed bottom-right; visible only below the lg breakpoint to avoid
 * overlapping the desktop header phone CTA.
 *
 * Tracks a GA4 event when clicked (if window.gtag is available).
 */
export default function FloatingCallButton() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'click_phone_floating', {
        event_category: 'engagement',
        event_label: 'mobile_sticky_cta',
      })
    }
  }

  return (
    <a
      href="tel:+447803808093"
      onClick={handleClick}
      aria-label="Call RMT Solutions on 07803 808093"
      className="lg:hidden fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-5 py-3 rounded-full font-semibold shadow-2xl shadow-amber-500/40 active:scale-95 transition"
    >
      <Phone className="w-5 h-5" />
      <span>Call Now</span>
    </a>
  )
}
