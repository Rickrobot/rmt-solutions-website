'use client'
import { Phone } from 'lucide-react'

/**
 * Mobile contact bar — Call and WhatsApp, fixed to the bottom of the screen
 * on phones and tablets (hidden from the lg breakpoint, where the header
 * carries the phone number and the quote button).
 *
 * WHY A BAR AND NOT FLOATING PILLS (Oct 2026 design review)
 *   The two stacked pills that were here sat on top of the page: on the home
 *   page the "Call Now" pill covered the "Request a Lift Plan Quote" button
 *   and the WhatsApp pill covered the text above it, and they did the same on
 *   every page at every scroll position. A full-width bar takes a fixed strip
 *   at the bottom instead, and the spacer in app/layout.js stops it covering
 *   the end of the footer. Both buttons are the same size, side by side.
 *
 * WhatsApp stays because site managers often prefer to send the load details,
 * a photo of the machine plate or the drawing without stopping for a call
 * (Jul 2026 conversion fix). Click tracking is handled site-wide by
 * <ConversionTracking />, which listens for tel: and wa.me clicks; both links
 * keep data-track-location="mobile_sticky_cta" so the events stay comparable
 * with the old buttons.
 *
 * The cookie banner sits above this bar (z-[60]) until a choice is made.
 */

// WhatsApp glyph (lucide-react ships no brand icons).
function WhatsAppIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function FloatingCallButton() {
  return (
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-50 border-t border-slate-800 bg-slate-950/95 backdrop-blur-md px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-2 gap-2 max-w-lg mx-auto">
        <a
          href="tel:+447803808093"
          data-track-location="mobile_sticky_cta"
          aria-label="Call RMT Solutions on 07803 808093"
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 py-3 font-semibold active:scale-[0.98] transition"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          <span>Call Ricky</span>
        </a>
        <a
          href="https://wa.me/447803808093?text=Hi%20Ricky%2C%20I%20need%20help%20with%20a%20lift%20plan."
          target="_blank"
          rel="noopener noreferrer"
          data-track-location="mobile_sticky_cta"
          aria-label="Message RMT Solutions on WhatsApp"
          className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-slate-950 py-3 font-semibold active:scale-[0.98] transition"
        >
          <WhatsAppIcon className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
