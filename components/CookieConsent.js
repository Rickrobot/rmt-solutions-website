'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { readConsent, writeConsent, clearAnalyticsCookies, subscribe } from '@/lib/consent'

/**
 * The cookie banner.
 *
 * WHAT MAKES THIS ONE LAWFUL AND MOST OF THEM NOT
 *   Three things, and all three are easy to get wrong:
 *
 *   1. Nothing is set before a choice is made. components/Analytics.js does
 *      not render the GA4 or Clarity scripts until consent exists, so this is
 *      a gate rather than a notification that the gate was already open.
 *
 *   2. Refusing is exactly as easy as agreeing. Two buttons, same size, same
 *      row, no "manage preferences" maze behind which the refusal hides. The
 *      ICO has been explicit that a prominent Accept beside a buried Reject
 *      is not a free choice, and a choice that is not free is not consent.
 *
 *   3. It can be changed afterwards. Withdrawal has to be as easy as giving,
 *      so there is a link in the footer that brings this back, and taking
 *      consent away deletes the cookies and reloads rather than merely
 *      recording a preference nobody acts on.
 *
 * WHY IT RENDERS NOTHING ON THE SERVER
 *   The decision lives in localStorage, which the server cannot see. Guessing
 *   on the server and correcting on the client would flash a banner at people
 *   who settled this months ago. `ready` holds the render until the browser
 *   has actually looked.
 *
 * WHY IT DOES NOT PUSH THE PAGE DOWN
 *   Fixed to the bottom, so nothing reflows when it appears and nothing moves
 *   under a thumb that was already reaching for a button.
 */
export default function CookieConsent() {
  const [ready, setReady] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(readConsent() === null)
    setReady(true)
    /* The footer link resets the decision; that fires the same event. */
    return subscribe(state => setOpen(state === null))
  }, [])

  if (!ready || !open) return null

  const accept = () => { writeConsent('granted'); setOpen(false) }

  const reject = () => {
    /* If the scripts already ran under an earlier yes, they are in the page
       and their cookies are on the device. Recording the refusal without
       clearing up would make this banner a decoration. */
    const hadAnalytics = typeof window !== 'undefined' &&
      (typeof window.gtag === 'function' || typeof window.clarity === 'function')
    writeConsent('denied')
    clearAnalyticsCookies()
    setOpen(false)
    if (hadAnalytics) window.location.reload()
  }

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-heading"
      className="fixed inset-x-0 bottom-0 z-[60] p-3 sm:p-4"
    >
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-700 bg-slate-900/95 backdrop-blur p-5 shadow-2xl">
        <p id="cookie-consent-heading" className="text-white font-display font-semibold mb-2">
          Cookies on this site
        </p>
        <p className="text-gray-300 text-sm leading-relaxed">
          We would like to use Google Analytics and Microsoft Clarity to see which pages
          are useful and where people get stuck. Clarity records what you do on the page.
          Neither is needed for the site to work, so neither runs unless you say yes.{' '}
          <Link href="/privacy" className="text-amber-400 hover:text-amber-300 underline">
            What we collect and why
          </Link>.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <button
            type="button"
            onClick={accept}
            className="flex-1 sm:flex-none sm:min-w-[160px] rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Yes, that&apos;s fine
          </button>
          {/* Deliberately the same size and weight as the button above it. A
              quieter Reject is the commonest way a banner stops being consent. */}
          <button
            type="button"
            onClick={reject}
            className="flex-1 sm:flex-none sm:min-w-[160px] rounded-xl border border-slate-600 bg-slate-800 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            No, thank you
          </button>
        </div>
      </div>
    </div>
  )
}
