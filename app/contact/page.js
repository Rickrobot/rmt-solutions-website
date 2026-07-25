'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, FileCheck, PhoneCall } from 'lucide-react'
import { trackEvent as trackConversion } from '@/components/ConversionTracking'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    equipment: '',
    message: '',
  })

  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'ab804a58-66f9-44c4-8ad3-a2b6a2895839',
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'Not provided',
          company: formData.company || 'Not provided',
          service: formData.service || 'Not specified',
          equipment: formData.equipment || 'Not specified',
          message: formData.message,
          subject: `New Lift Plan Enquiry from ${formData.name}`,
        }),
      })

      const data = await response.json()

      if (data.success) {
        trackConversion('generate_lead', {
          lead_source: 'contact_page_form',
          form_name: 'contact_full',
          event_label: formData.service || 'Not specified',
          equipment: formData.equipment || 'Not specified',
        })
        setStatus('Thank you for your enquiry. We will be in touch within 4 working hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          equipment: '',
          message: '',
        })
      } else {
        trackConversion('form_submit_error', { form_name: 'contact_full', reason: 'web3forms_failure' })
        setStatus('Something went wrong. Please email us directly at ricky@rmtsolutions.co.uk')
      }
    } catch (error) {
      setStatus('Something went wrong. Please email us directly at ricky@rmtsolutions.co.uk')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // LocalBusiness / ContactPoint JSON-LD — gives Google an explicit, fully
  // structured contact record (phone, email, postal locality, opening hours,
  // service area) on the contact page itself. Distinct from the
  // ProfessionalService schema on the homepage: this one is anchored to the
  // contact URL so Sitelinks SERPs can pick it as a contact entry point.
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.rmtsafetysolutions.com/contact#localbusiness',
    name: 'RMT Solutions Ltd',
    image: 'https://www.rmtsafetysolutions.com/images/og-lift-planning.jpg',
    url: 'https://www.rmtsafetysolutions.com/contact',
    telephone: '+447803808093',
    email: 'ricky@rmtsolutions.co.uk',
    priceRange: '££',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warrington',
      addressRegion: 'Cheshire',
      addressCountry: 'GB',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 53.39,
      longitude: -2.597,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+447803808093',
        email: 'ricky@rmtsolutions.co.uk',
        contactType: 'customer service',
        areaServed: 'GB',
        availableLanguage: 'en-GB',
      },
    ],
    areaServed: { '@type': 'Country', name: 'United Kingdom' },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.rmtsafetysolutions.com/contact' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              Request a <span className="gradient-text">Lift Plan</span> Quote
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              Send the load, the machine and the site — we'll come back with a fixed price within
              4 working hours. Plans are typically delivered 24–48 hours after you confirm.
            </p>

            {/* Conversion fix (Jul 2026): the fastest enquiry a site manager can
                make is sending a photo of the drawing or the machine plate. On a
                UK site that means WhatsApp, so it leads here rather than sitting
                in the footer. Web3Forms file attachments are a paid feature, so
                WhatsApp is also how drawings actually reach us. */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/447803808093?text=Hi%20Ricky%2C%20I%20need%20a%20lift%20plan.%20Here%20are%20the%20details%3A"
                target="_blank"
                rel="noopener noreferrer"
                data-track-location="contact_hero"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5b] text-white px-7 py-4 rounded-xl font-semibold shadow-lg shadow-emerald-500/25 transition"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send the drawing on WhatsApp
              </a>
              <a
                href="tel:+447803808093"
                data-track-location="contact_hero"
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-7 py-4 rounded-xl font-semibold shadow-lg shadow-amber-500/25 transition"
              >
                <Phone className="w-5 h-5" />
                Call 07803 808093
              </a>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              Photograph the drawing, the machine plate or the RAMS and send it straight over —
              no need to type it all out.
            </p>
          </div>
        </div>
      </section>

      {/* What happens next — removes the fear of an open-ended consultancy
          engagement, which is the main reason a PM hesitates to enquire. */}
      <section className="py-16 bg-slate-900/50 border-y border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-white mb-10 text-center">
            What happens after you get in touch
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Send, step: '01', title: 'You send the details', body: 'Load weight and dimensions, the machine, the site and the dates. A photo of the drawing or a rough description is enough to start.' },
              { icon: PhoneCall, step: '02', title: 'Ricky replies within 4 working hours', body: 'A fixed written price — not an hourly rate, and not an open-ended engagement. If anything is unclear he will call you rather than email back and forth.' },
              { icon: FileCheck, step: '03', title: 'Plan delivered in 24–48 hours', body: 'Written and signed off by a CPCS A61 Appointed Person. Revisions arising from principal contractor review are included.' },
            ].map(({ icon: Icon, step, title, body }) => (
              <div key={step} className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-amber-400 font-display font-bold">{step}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 md:p-10 border border-slate-700/50">
                {/* Proof above the form (Jul 2026). The testimonials page was the
                    strongest sales asset on the site and was sitting in a silo on
                    128 impressions. This pull-quote speaks to programme risk — the
                    thing a PM requesting a quote actually worries about. */}
                <figure className="mb-8 bg-slate-900/60 border-l-4 border-amber-500 rounded-r-xl p-6">
                  <blockquote className="text-gray-200 leading-relaxed italic">
                    &ldquo;RMT Solutions always provide comments and approvals quickly so that any
                    issues can be sorted out and the programme of works maintained on site.&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-sm">
                    <span className="text-white font-semibold">Tom Herd</span>
                    <span className="text-gray-400"> — Project Manager, Caddick Construction</span>
                    <Link href="/testimonials" className="block mt-2 text-amber-400 hover:text-amber-300 underline">
                      Read more from Caddick, Wates and Sunel Group →
                    </Link>
                  </figcaption>
                </figure>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-sm text-gray-400">
                  <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-amber-400" />Constructionline Gold</span>
                  <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-amber-400" />CPCS A61 Appointed Person</span>
                  <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-amber-400" />1,000+ lift plans delivered</span>
                </div>

                <h2 className="font-display text-2xl font-bold text-white mb-2">
                  Tell us about your project
                </h2>
                <p className="text-gray-400 text-sm mb-8">
                  Just three fields are required — the rest help us prepare a faster, more accurate quote.
                  Got a drawing, RAMS or an existing lift plan?{' '}
                  <a
                    href="https://wa.me/447803808093?text=Hi%20Ricky%2C%20I%20have%20a%20drawing%20to%20send%20over%20for%20a%20lift%20plan%20quote."
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-location="contact_form_intro"
                    className="text-amber-400 hover:text-amber-300 underline font-semibold"
                  >
                    Send it on WhatsApp
                  </a>{' '}
                  — it is quicker than typing it out. Prefer to talk?{' '}
                  <a href="tel:+447803808093" data-track-location="contact_form_intro" className="text-amber-400 hover:text-amber-300 underline font-semibold">
                    Call 07803 808093
                  </a>.
                </p>

                {status && (
                  <div className="mb-8 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400">
                    {status}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-gray-300 font-medium mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-gray-300 font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-gray-300 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-gray-300 font-medium mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-gray-300 font-medium mb-2">
                        Service Required
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition"
                      >
                        <option value="">Select a service</option>
                        <option value="lift-plan">Lift Plan Writing</option>
                        <option value="lift-plan-checking">Lift Plan Checking</option>
                        <option value="tower-crane">Tower Crane Contract</option>
                        <option value="steel-erection">Steel Erection Planning</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="equipment" className="block text-gray-300 font-medium mb-2">
                        Equipment Type
                      </label>
                      <select
                        id="equipment"
                        name="equipment"
                        value={formData.equipment}
                        onChange={handleChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition"
                      >
                        <option value="">Select equipment</option>
                        <option value="excavator">Excavator</option>
                        <option value="telehandler">Telehandler</option>
                        <option value="lorry-loader">Lorry Loader</option>
                        <option value="mobile-crane">Mobile Crane</option>
                        <option value="tower-crane">Tower Crane</option>
                        <option value="multiple">Multiple Types</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-gray-300 font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="A few lines is plenty — equipment type, site location, rough timescale. We'll come back with questions if we need them."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Enquiry — We Reply Within 4 Working Hours'}
                  </button>
                  <p className="text-center text-gray-500 text-xs mt-4">
                    Your details stay private. We never share enquiries with third parties.
                  </p>

                  {/* Internal links (Jul 2026): this page previously had none at all,
                      which both wasted its link equity and left anyone still deciding
                      with nowhere to go. */}
                  <div className="mt-8 pt-6 border-t border-slate-700/50">
                    <p className="text-gray-400 text-sm mb-3">Not ready to enquire yet?</p>
                    <ul className="grid sm:grid-cols-2 gap-2 text-sm">
                      <li><Link href="/case-studies/caddick-tawd-valley-junction-4" className="text-amber-400 hover:text-amber-300 underline">See a Caddick project case study</Link></li>
                      <li><Link href="/blog/lift-plan-cost-uk" className="text-amber-400 hover:text-amber-300 underline">What a lift plan costs in the UK</Link></li>
                      <li><Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">Lift planning services</Link></li>
                      <li><Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">Independent lift plan checking</Link></li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Response Time Card */}
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-3xl p-8 border border-amber-500/30">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-amber-400 font-semibold">Fast Response</div>
                    <div className="text-white text-2xl font-display font-bold">4 Working Hours</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  We aim to respond to all enquiries within 4 working hours. Urgent requests? Call us directly.
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
                <h3 className="font-display text-xl font-bold text-white mb-6">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Email</div>
                      <a href="mailto:ricky@rmtsolutions.co.uk" className="text-white hover:text-amber-400 transition">
                        ricky@rmtsolutions.co.uk
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Phone</div>
                      <a href="tel:+447803808093" className="text-white hover:text-amber-400 transition">
                        07803 808093
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      {/* WhatsApp glyph — lucide-react ships no brand icons */}
                      <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">WhatsApp</div>
                      <a
                        href="https://wa.me/447803808093?text=Hi%20Ricky%2C%20I%20need%20help%20with%20a%20lift%20plan."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-amber-400 transition"
                      >
                        Message 07803 808093
                      </a>
                      <div className="text-gray-400 text-sm mt-1">Send load details, photos or drawings straight from site</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-700/50 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-gray-400 text-sm mb-1">Location</div>
                      <div className="text-white">Warrington, Cheshire, UK</div>
                      <div className="text-gray-400 text-sm mt-1">Serving contractors across the UK</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Qualifications */}
              <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
                <h3 className="font-display text-xl font-bold text-white mb-4">Qualifications</h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    CPCS Appointed Person A61 (Reg: 40389279)
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    NEBOSH National Diploma
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    CertIOSH
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    MIIRSM
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    TIFSM
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    35+ Years Experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map — Warrington office location. An embedded map on the contact
          page reinforces the LocalBusiness schema with a visual signal, gives
          Google a hard textual association between the page and Warrington,
          and helps users orient before requesting a site visit. The iframe
          uses the no-key Google Maps embed (search variant), which is the
          standard pattern for static office locations. */}
      <section className="pb-24 bg-slate-950" aria-labelledby="office-location">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="office-location" className="font-display text-2xl font-bold text-white mb-6 text-center">
            Our Warrington Office
          </h2>
          <div className="rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
            <iframe
              src="https://www.google.com/maps?q=Warrington%2C+Cheshire%2C+UK&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="RMT Solutions office location in Warrington, Cheshire"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Based at the M62/M6 junction — 35 minutes from Manchester, 40 from Liverpool, UK-wide service.
          </p>
        </div>
      </section>
    </>
  )
}
