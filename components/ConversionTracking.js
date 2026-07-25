'use client'

import { useEffect } from 'react'

/**
 * ConversionTracking — site-wide conversion event tracking.
 *
 * Added Jul 2026 following the SEO/conversion review, which found that GA4
 * and Clarity were installed but only ever recorded pageviews. There was no
 * way to answer the question that actually matters: which pages produce
 * enquiries? Traffic was measurable; conversion was not.
 *
 * WHY A DELEGATED LISTENER RATHER THAN PER-LINK onClick HANDLERS
 * The site has 50+ `tel:` links, 25+ template download links, plus WhatsApp
 * and mailto links spread across ~30 files. Wiring an onClick to each one
 * would mean a large, fragile diff, would force several server components to
 * become client components, and would silently miss any link added later.
 * One capture-phase listener on `document` catches every current and future
 * link with no per-link code.
 *
 * EVENTS EMITTED
 *   generate_lead      enquiry form submitted successfully (GA4 recommended event)
 *   phone_call         a `tel:` link was clicked
 *   whatsapp_click     a wa.me link was clicked
 *   email_click        a `mailto:` link was clicked
 *   template_download  a file under /downloads/ was clicked
 *
 * Note on `template_download`: GA4 Enhanced Measurement already auto-fires a
 * `file_download` event for .pdf/.docx if that setting is enabled. A distinct
 * name is used here deliberately so the two never double-count, and so the
 * template funnel can be reported on separately from incidental downloads.
 *
 * Every event also tags the Microsoft Clarity session, which makes session
 * recordings filterable by conversion — you can watch exactly what a visitor
 * did before they called.
 *
 * All calls are defensive no-ops when analytics is absent (local dev, ad
 * blockers, consent tooling), so this can never throw in the render path.
 */

/** Fire a conversion event to GA4 and tag the Clarity session. */
export function trackEvent(name, params = {}) {
  if (typeof window === 'undefined') return

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, {
        event_category: 'conversion',
        page_path: window.location.pathname,
        ...params,
      })
    }
    // Tag the Clarity session so recordings can be filtered by conversion.
    if (typeof window.clarity === 'function') {
      window.clarity('event', name)
    }
  } catch {
    // Analytics must never break the page.
  }
}

export default function ConversionTracking() {
  useEffect(() => {
    function onClick(e) {
      const link = e.target?.closest?.('a[href]')
      if (!link) return

      const href = link.getAttribute('href') || ''
      // Optional: components can label where the click came from, e.g. the
      // sticky mobile CTA sets data-track-location="mobile_sticky_cta".
      const location = link.getAttribute('data-track-location') || 'inline'
      const label = (link.textContent || '').trim().slice(0, 60)

      if (href.startsWith('tel:')) {
        trackEvent('phone_call', {
          event_label: label || href.replace('tel:', ''),
          link_location: location,
        })
        return
      }

      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        trackEvent('whatsapp_click', {
          event_label: label || 'whatsapp',
          link_location: location,
        })
        return
      }

      if (href.startsWith('mailto:')) {
        trackEvent('email_click', {
          event_label: href.replace('mailto:', ''),
          link_location: location,
        })
        return
      }

      if (href.includes('/downloads/')) {
        const file = href.split('/').pop() || href
        trackEvent('template_download', {
          event_label: file,
          file_name: file,
          file_extension: file.includes('.') ? file.split('.').pop() : 'unknown',
          link_location: location,
        })
      }
    }

    // Capture phase: fires even when a child element (icon, span) is the
    // actual click target, and before any navigation begins.
    document.addEventListener('click', onClick, true)
    return () => document.removeEventListener('click', onClick, true)
  }, [])

  return null
}
