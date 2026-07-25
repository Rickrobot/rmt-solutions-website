'use client'

import { useState } from 'react'
import { Download, CheckCircle2, Mail } from 'lucide-react'
import { trackEvent as trackConversion } from '@/components/ConversionTracking'

const WEB3FORMS_ACCESS_KEY = 'ab804a58-66f9-44c4-8ad3-a2b6a2895839'

/**
 * GatedDownload — email capture in exchange for a higher-value asset.
 *
 * Added Jul 2026 following the SEO/conversion review. The /resources/ section
 * is the best-converting part of the site (2.70% CTR, 328 clicks/quarter) but
 * captured nothing: every template is a direct .docx link, so hundreds of
 * people with live lifting operations downloaded a file and left no trace.
 *
 * DESIGN DECISION — the free templates stay ungated.
 * Gating them would kill the rankings and links that make those pages work in
 * the first place. Instead this component sits alongside them and gates a
 * *different, higher-value* asset. Anyone who wants the completed professional
 * checklist is planning a real lift, which makes them a far better lead than a
 * generic template downloader.
 *
 * Delivery is client-side after a successful submit — no backend required. The
 * asset URL is discoverable by a determined visitor, which is true of virtually
 * every email gate; the point is qualification, not DRM.
 *
 * Props:
 *   assetName   Human label, used in the email subject and GA4 event
 *   assetFile   Path under /downloads/
 *   heading     Card heading
 *   description What they get, and why it is worth an email address
 */
export default function GatedDownload({
  assetName = 'Lift Plan Pre-Submission Checklist',
  assetFile = '/downloads/lift-plan-pre-submission-checklist.pdf',
  heading = 'Get the AP’s pre-submission checklist',
  description = 'The 22 checks a CPCS A61 Appointed Person runs before a lift plan is accepted — the same methodology we use on paid reviews. One page, printable for the site cabin.',
}) {
  const [formData, setFormData] = useState({ name: '', email: '', company_website: '' })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [unlocked, setUnlocked] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot: real users never see or fill this field.
    if (formData.company_website) {
      setUnlocked(true)
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
          subject: `[Resource download] ${assetName} — ${formData.name}`,
          message: `${formData.name} (${formData.email}) downloaded: ${assetName}`,
          source: `Gated asset — ${assetName}`,
        }),
      })
      const data = await response.json()

      if (data.success) {
        trackConversion('generate_lead', {
          lead_source: 'gated_asset',
          form_name: 'gated_download',
          event_label: assetName,
        })
        setUnlocked(true)
        // Start the download immediately — the visitor should never have to
        // hunt for it after handing over an email address.
        try {
          const a = document.createElement('a')
          a.href = assetFile
          a.download = ''
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
        } catch {
          /* the visible button below is the fallback */
        }
      } else {
        trackConversion('form_submit_error', { form_name: 'gated_download', reason: 'web3forms_failure' })
        setStatus('Something went wrong — you can still download it below.')
        setUnlocked(true)
      }
    } catch {
      // Never trap the asset behind a network failure.
      setStatus('Something went wrong — you can still download it below.')
      setUnlocked(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (unlocked) {
    return (
      <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/60 rounded-2xl p-6 sm:p-8 border border-amber-500/40">
        <div className="flex items-start gap-3 mb-4">
          <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-display text-xl font-bold text-white mb-1">Your download is ready</h3>
            <p className="text-gray-400 text-sm">
              {status || 'It should have started automatically. If not, use the button below.'}
            </p>
          </div>
        </div>
        <a
          href={assetFile}
          download
          className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition"
        >
          <Download className="w-4 h-4" />
          Download the checklist (PDF)
        </a>
        <p className="text-gray-500 text-xs mt-4">
          Got a plan you would rather have checked properly? Independent review with a Category A/B
          determination in 24–48 hours —{' '}
          <a href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">
            see the checking service
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-b from-slate-800/60 to-slate-900/60 rounded-2xl p-6 sm:p-8 border border-slate-700/50">
      <div className="flex items-start gap-3 mb-3">
        <Mail className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">{heading}</h3>
      </div>
      <p className="text-gray-300 text-sm mb-5 leading-relaxed">{description}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot — hidden from real users; traps bots that auto-fill every field. Do not remove. */}
        <div
          aria-hidden="true"
          style={{ position: 'absolute', left: '-9999px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden' }}
        >
          <label htmlFor={`gated-company-website-${assetName}`}>Company website (leave blank)</label>
          <input
            type="text"
            id={`gated-company-website-${assetName}`}
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company_website}
            onChange={handleChange}
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            aria-label="Your name"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition"
          />
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Work email"
            aria-label="Work email"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500 transition"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download className="w-5 h-5 mr-2" />
          {isSubmitting ? 'Sending...' : 'Send me the checklist'}
        </button>

        {status && <p className="text-amber-400 text-sm">{status}</p>}

        <p className="text-gray-500 text-xs text-center">
          Two fields, no newsletter. Your details stay private and we never share enquiries with third
          parties.
        </p>
      </form>
    </div>
  )
}
