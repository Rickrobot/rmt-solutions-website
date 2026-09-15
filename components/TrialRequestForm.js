'use client'

import { useState } from 'react'
import { Send, Phone, CheckCircle2 } from 'lucide-react'
import { trackEvent as trackConversion } from '@/components/ConversionTracking'

const WEB3FORMS_ACCESS_KEY = 'ab804a58-66f9-44c4-8ad3-a2b6a2895839'

/**
 * TrialRequestForm — request a 14-day trial of LiftPlan Studio.
 *
 * WHY THIS IS NOT A SIGN-UP FORM
 *
 * Accounts are issued by hand, one at a time. That is deliberate while the
 * product is new: every trial account is set up personally, which means the
 * person on the other end gets a short conversation about what they plan and on
 * what machines rather than a password and an empty screen. It also means this
 * form has to collect enough to actually create the account and have that
 * conversation — which is why it asks a little more than the three-field
 * enquiry form used on the service pages.
 *
 * No card is taken and none is asked for. Saying so on the form matters: a
 * "free trial" that wants card details is the thing most people have learned to
 * close the tab on.
 *
 * Submits to Web3Forms, the same backend as /contact, with a distinct subject
 * and source so trial requests can be filtered from lift-planning enquiries in
 * the inbox — they need a different response and usually a faster one.
 *
 * GA4: fires `generate_lead` on success with a trial-specific lead_source, so
 * software trials and consultancy leads can be told apart in reporting rather
 * than landing in one undifferentiated conversion count.
 */
export default function TrialRequestForm({ heading = 'Request your 14-day trial' }) {
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', role: '', machines: '', company_website: '',
  })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Honeypot: real users never see or fill this. Populated means a bot —
    // drop it silently. Humans are never blocked.
    if (formData.company_website) return

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
          subject: `[LiftPlan Studio TRIAL] ${formData.name}${formData.company ? ' — ' + formData.company : ''}`,
          source: 'LiftPlan Studio — 14-day trial request',
          message: [
            `Company: ${formData.company || 'Not provided'}`,
            `Role: ${formData.role || 'Not provided'}`,
            `Phone: ${formData.phone || 'Not provided'}`,
            '',
            'What they lift / machines in use:',
            formData.machines || 'Not provided',
          ].join('\n'),
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitted(true)
        trackConversion('generate_lead', {
          event_label: 'LiftPlan Studio trial',
          form_name: 'trial_request',
          lead_source: 'liftplan_studio_trial',
        })
      } else {
        setStatus('Something went wrong. Please call 07803 808093 or email ricky@rmtsolutions.co.uk')
        trackConversion('form_submit_error', { form_name: 'trial_request', reason: 'web3forms_failure' })
      }
    } catch (error) {
      setStatus('Something went wrong. Please call 07803 808093 or email ricky@rmtsolutions.co.uk')
      trackConversion('form_submit_error', { form_name: 'trial_request', reason: 'network' })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/60 rounded-2xl p-8 border border-amber-500/40">
        <div className="flex items-center gap-3 mb-4">
          <CheckCircle2 className="w-7 h-7 text-amber-400 shrink-0" />
          <div className="text-amber-400 font-display text-2xl font-bold">Request received</div>
        </div>
        <p className="text-gray-300 mb-3">
          Your account is set up by hand, usually the same working day. You will get an
          email with your sign-in details and a short note on getting started.
        </p>
        <p className="text-gray-400 text-sm mb-5">
          Nothing to pay and no card held. The trial runs for 14 days and stops on its
          own — there is nothing to cancel.
        </p>
        <a
          href="tel:+447803808093"
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
        >
          <Phone className="w-4 h-4" />
          Need it today? Call 07803 808093
        </a>
      </div>
    )
  }

  const field =
    'w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition'

  return (
    <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
      <div className="flex items-start justify-between gap-4 mb-2 flex-wrap">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-white">{heading}</h2>
        <a
          href="tel:+447803808093"
          className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm whitespace-nowrap"
        >
          <Phone className="w-4 h-4" />
          07803 808093
        </a>
      </div>
      <p className="text-gray-400 text-sm mb-5">
        No card, no direct debit, nothing to cancel. Accounts are set up by hand — usually
        the same working day.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot — hidden from real users; traps bots that fill every field. Do not remove. */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          <label htmlFor="trial-company-website">Company website (leave blank)</label>
          <input
            type="text"
            id="trial-company-website"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company_website}
            onChange={handleChange}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="trial-name" className="sr-only">Your name</label>
            <input type="text" id="trial-name" name="name" value={formData.name}
              onChange={handleChange} required autoComplete="name"
              placeholder="Your name *" className={field} />
          </div>
          <div>
            <label htmlFor="trial-company" className="sr-only">Company</label>
            <input type="text" id="trial-company" name="company" value={formData.company}
              onChange={handleChange} required autoComplete="organization"
              placeholder="Company *" className={field} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="trial-email" className="sr-only">Work email address</label>
            <input type="email" id="trial-email" name="email" value={formData.email}
              onChange={handleChange} required autoComplete="email"
              placeholder="Work email *" className={field} />
          </div>
          <div>
            <label htmlFor="trial-phone" className="sr-only">Phone</label>
            <input type="tel" id="trial-phone" name="phone" value={formData.phone}
              onChange={handleChange} autoComplete="tel"
              placeholder="Phone (optional)" className={field} />
          </div>
        </div>

        <div>
          <label htmlFor="trial-role" className="sr-only">Your role</label>
          <select id="trial-role" name="role" value={formData.role} onChange={handleChange}
            required className={field}>
            <option value="">Your role *</option>
            <option>Appointed Person</option>
            <option>Lift Supervisor</option>
            <option>Transport / fleet manager</option>
            <option>SHEQ / health and safety</option>
            <option>Contracts or site manager</option>
            <option>Owner / director</option>
            <option>Something else</option>
          </select>
        </div>

        <div>
          <label htmlFor="trial-machines" className="sr-only">What you lift and what with</label>
          <textarea id="trial-machines" name="machines" value={formData.machines}
            onChange={handleChange} rows={3}
            placeholder="What do you lift, and on what? (e.g. cabins and welfare units, Fassi F235 and a Palfinger PK 48002) — optional, but it lets me have your machines ready"
            className={`${field} resize-none`} />
        </div>

        {status && (
          <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
            {status}
          </div>
        )}

        <button type="submit" disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 disabled:cursor-not-allowed text-slate-900 px-6 py-4 rounded-xl font-semibold transition">
          {isSubmitting ? 'Sending…' : (<><Send className="w-4 h-4" /> Request the 14-day trial</>)}
        </button>

        <p className="text-gray-500 text-xs">
          Your details are used to set up the account and reply to you. They are not sold,
          and they are not passed to anybody else.
        </p>
      </form>
    </div>
  )
}
