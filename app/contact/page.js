'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'

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

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, this would submit to your backend or email service
    setStatus('Thank you for your enquiry. We will be in touch within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      equipment: '',
      message: '',
    })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
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
            <p className="text-xl text-gray-300 leading-relaxed">
              Tell us about your project and we'll provide a competitive quote for your lift planning 
              requirements. Fast response guaranteed.
            </p>
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
                <h2 className="font-display text-2xl font-bold text-white mb-8">
                  Project Details
                </h2>

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
                        Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
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
                      rows={5}
                      placeholder="Please describe your lifting operation requirements, including location, timescales, and any specific challenges..."
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Enquiry
                  </button>
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
                    <div className="text-white text-2xl font-display font-bold">Within 24 Hours</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">
                  We aim to respond to all enquiries within 24 hours. Urgent requests? Call us directly.
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
                      <a href="mailto:info@rmtsolutions.co.uk" className="text-white hover:text-amber-400 transition">
                        info@rmtsolutions.co.uk
                      </a>
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
                    CPCS Appointed Person A61
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    NEBOSH National Diploma
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-amber-400 rounded-full mr-3" />
                    Graduate IOSH
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
    </>
  )
}
