'use client'

import { useEffect, useState } from 'react'
import { readConsent, resetConsent, writeConsent, clearAnalyticsCookies, subscribe } from '@/lib/consent'

/**
 * The control that makes withdrawal as easy as consent.
 *
 * Article 7(3) of the UK GDPR requires that taking consent back is as easy as
 * giving it. A banner with two buttons and no way back afterwards fails that,
 * and it is the commonest defect in otherwise well-meant cookie notices.
 *
 * So this says what the visitor currently chose, in words rather than a
 * toggle whose state you have to infer, and offers the opposite.
 */
export default function CookieChoice() {
  const [state, setState] = useState(undefined)

  useEffect(() => {
    setState(readConsent())
    return subscribe(setState)
  }, [])

  /* Nothing on the server and nothing before the browser has looked, so the
     page never shows a choice the visitor did not make. */
  if (state === undefined) return null

  const withdraw = () => {
    const hadAnalytics = typeof window.gtag === 'function' || typeof window.clarity === 'function'
    writeConsent('denied')
    clearAnalyticsCookies()
    if (hadAnalytics) window.location.reload()
  }

  const said = state === 'granted'
    ? 'You have agreed to analytics cookies on this device.'
    : state === 'denied'
      ? 'You have refused analytics cookies on this device. Nothing is running.'
      : 'You have not been asked yet on this device, or your answer has expired.'

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6">
      <p className="text-white font-display font-semibold mb-2">Your current choice</p>
      <p className="text-gray-300 text-sm leading-relaxed">{said}</p>
      <div className="mt-4 flex flex-col sm:flex-row gap-3">
        {state === 'granted' && (
          <button
            type="button"
            onClick={withdraw}
            className="rounded-xl border border-slate-600 bg-slate-800 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
          >
            Withdraw it and delete the cookies
          </button>
        )}
        {state !== 'granted' && (
          <button
            type="button"
            onClick={() => writeConsent('granted')}
            className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-slate-900 transition hover:bg-amber-400"
          >
            Allow analytics cookies
          </button>
        )}
        <button
          type="button"
          onClick={resetConsent}
          className="rounded-xl border border-slate-700 px-5 py-3 font-semibold text-gray-300 transition hover:bg-slate-800"
        >
          Ask me again
        </button>
      </div>
    </div>
  )
}
