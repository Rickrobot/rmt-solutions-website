'use client'

import { useState } from 'react'
import { Send, Phone } from 'lucide-react'
import { trackEvent as trackConversion } from '@/components/ConversionTracking'

const WEB3FORMS_ACCESS_KEY = 'ab804a58-66f9-44c4-8ad3-a2b6a2895839'

/**
 * InlineQuoteForm — compact 3-field enquiry form for service pages.
 *
 * Props:
 *   serviceName?: string  Used in the email subject line (defaults to "General Enquiry")
 *   heading?: string      Form heading (defaults to "Quick quote")
 *   compact?: boolean     If true, lays fields on a single row at md+
 *
 * Required fields: name, email, brief.
 * Submits to Web3Forms — same backend as /contact.
 * Tracks GA4 events: generate_lead on success, form_submit_error on failure.
 * `generate_lead` is GA4's recommended lead event — mark it as a Key Event in
 * GA4 so it reports as a conversion. `serviceName` is passed through so leads
 * can be attributed to the service page that produced them.
 */
export default function InlineQuoteForm({
  serviceName = 'General Enquiry',
  heading = 'Get a quick quote',
  compact = false,
}) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', brief: '', company_website: '' })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const trackEvent = (eventName, params = {}) =>
    trackConversion(eventName, { event_label: serviceName, form_name: 'inline_quote', ...params })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Honeypot: real users never see or fill this field. If it is populated,
    // the submission is a bot — silently drop it. Humans are never blocked.
    if (formData.company_website) {
      return
    }
    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          message: formData.brief,
          subject: `[${serviceName}] Inline form enquiry from ${formData.name}`,
          source: `Inline form — ${serviceName}`,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        setStatus('Thanks — we will be in touch within 4 working hours.')
        setFormData({ name: '', email: '', phone: '', brief: '', company_website: '' })
        trackEvent('generate_lead', { lead_source: 'inline_quote_form' })
      } else {
        setStatus('Something went wrong. Please call 07803 808093 or email ricky@rmtsolutions.co.uk')
        trackEvent('form_submit_error', { reason: 'web3forms_failure' })
      }
    } catch (error) {
      setStatus('Something went wrong. Please call 07803 808093 or email ricky@rmtsolutions.co.uk')
      trackEvent('form_submit_error', { reason: 'network' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-amber-500/40 text-center">
        <div className="text-amber-400 font-display text-2xl font-bold mb-3">Thanks — message received</div>
        <p className="text-gray-300 mb-4">
          We aim to respond within 4 working hours. Need it sooner?
        </p>
        <a
          href="tel:+447803808093"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
        >
          <Phone className="w-4 h-4" />
          Call 07803 808093
        </a>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
      <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{heading}</h3>
        <a
          href="tel:+447803808093"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm whitespace-nowrap"
        >
          <Phone className="w-4 h-4" />
          07803 808093
        </a>
      </div>
      <p className="text-gray-400 text-sm mb-5">
        3 fields, 30 seconds. We reply within 4 working hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot — hidden from real users; traps bots that auto-fill every field. Do not remove. */}
        <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}>
          <label htmlFor={`inline-company-website-${serviceName}`}>Company website (leave blank)</label>
          <input
            type="text"
            id={`inline-company-website-${serviceName}`}
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company_website}
            onChange={handleChange}
          />
        </div>
        <div className={compact ? 'grid md:grid-cols-2 gap-4' : 'space-y-4'}>
          <div>
            <label htmlFor={`inline-name-${serviceName}`} className="sr-only">Your name</label>
            <input
              type="text"
              id={`inline-name-${serviceName}`}
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
              placeholder="Your name *"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition"
            />
          </div>
          <div>
            <label htmlFor={`inline-email-${serviceName}`} className="sr-only">Email address</label>
            <input
              type="email"
              id={`inline-email-${serviceName}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
              placeholder="Email address *"
              className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition"
            />
          </div>
        </div>

        <div>
          <label htmlFor={`inline-phone-${serviceName}`} className="sr-only">Phone (optional)</label>
          <input
            type="tel"
            id={`inline-phone-${serviceName}`}
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            autoComplete="tel"
            placeholder="Phone (optional — for a quicker callback)"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition"
          />
        </div>

        <div>
          <label htmlFor={`inline-brief-${serviceName}`} className="sr-only">Brief description</label>
          <textarea
            id={`inline-brief-${serviceName}`}
            name="brief"
            value={formData.brief}
            onChange={handleChange}
            required
            rows={3}
            placeholder="A line or two about your project — equipment, site location, timescale *"
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition resize-none"
          />
        </div>

        {status && !submitted && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
            {status}
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 font-semibold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
          {isSubmitting ? 'Sending…' : 'Send enquiry'}
        </button>

        <p className="text-center text-gray-500 text-xs">
          Your details stay private. We never share enquiries with third parties.
        </p>
      </form>
    </div>
  )
}
