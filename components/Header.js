'use client'
import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const dropdownRef = useRef(null)
  const timeoutRef = useRef(null)

  const services = [
    { name: 'CPCS A61 Appointed Person', href: '/services/appointed-person' },
    { name: 'Lift Plan Writing', href: '/services/lift-plans' },
    { name: 'Same Day & Urgent Lift Plans', href: '/services/urgent-lift-plans' },
    { name: 'Lift Plan Checking', href: '/services/lift-plan-checking' },
    { name: 'Method Statements & RAMS', href: '/services/method-statements-rams' },
    { name: 'Excavator Lift Plans', href: '/services/excavator-lift-plans' },
    { name: 'Telehandler Lift Plans', href: '/services/telehandler-lift-plans' },
    { name: 'Lorry Loader Lift Plans', href: '/services/lorry-loader-lift-plans' },
    { name: 'Mobile Crane Lift Plans', href: '/services/mobile-crane-lift-plans' },
    { name: 'Overhead & Gantry Crane Lift Plans', href: '/services/overhead-gantry-crane-lift-plans' },
    { name: 'Tower Crane Contracts', href: '/services/tower-crane' },
    { name: 'Tandem & Multi-Crane Lift Plans', href: '/services/tandem-lift-plans' },
    { name: 'Steel Erection Planning', href: '/services/steel-erection' },
    { name: 'Lifting Operations Audit', href: '/services/lifting-operations-audit' },
    { name: 'Aerial Site Surveys', href: '/services/aerial-site-surveys' },
  ]

  const navigation = [
    // The LiftPlan Studio software and rigging calculator links that sat here
    // were taken off the site in October 2026 — the site sells the consultancy
    // only. Their old URLs 301 to service pages (see next.config.js).
    { name: 'Locations', href: '/locations' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
  ]

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Hover handlers with delay to prevent accidental close
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 150)
  }

  return (
    <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo — the approved RMT Solutions vector master (Oct 2026). It was
              an orange "R" tile, so the website and the drawings on it carried
              two different brands. The master is navy and green, which would
              disappear on this dark bar, so it sits on a white plate rather
              than being recoloured. */}
          <Link href="/" className="flex items-center flex-shrink-0" aria-label="RMT Solutions — home">
            <span className="flex items-center bg-white rounded-xl px-2.5 py-1.5 shadow-lg shadow-black/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/rmt-logo.svg"
                alt="RMT Solutions — The Complete Lift Plan Company"
                width={402}
                height={144}
                className="h-10 sm:h-11 w-auto"
              />
            </span>
          </Link>

          {/* Desktop Navigation. Tighter gaps below xl so the phone number and
              the quote button stay on one line on a standard laptop screen. */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {/* Services Dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center gap-1 text-gray-400 hover:text-amber-400 transition font-medium whitespace-nowrap"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Panel.
                  Always in the HTML, hidden with CSS while closed (Oct 2026).
                  It used to be rendered only when opened, so the server HTML
                  of every page had no header links to any service page and
                  Google had to find them from the body and footer alone —
                  Search Console showed the Appointed Person and Excavator
                  pages as "URL is unknown to Google". display:none keeps the
                  closed menu out of the tab order and away from screen
                  readers exactly as before. */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 ${servicesOpen ? 'block' : 'hidden'}`}>
                  <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl shadow-black/40 p-2 min-w-[280px]">
                    <Link
                      href="/services"
                      className="flex items-center justify-between px-4 py-2.5 mb-2 rounded-lg bg-slate-800/50 text-amber-400 hover:text-amber-300 transition text-sm font-semibold"
                      onClick={() => setServicesOpen(false)}
                    >
                      All lift planning services
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                    {/* Primary Services */}
                    <div className="pb-2 mb-2 border-b border-slate-800">
                      {services.slice(0, 4).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center px-4 py-2.5 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-800/50 transition text-sm font-medium"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    {/* Equipment-Specific */}
                    <div className="pb-2 mb-2 border-b border-slate-800">
                      <span className="px-4 py-1.5 text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                        By Equipment
                      </span>
                      {services.slice(4, 8).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center px-4 py-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800/50 transition text-sm"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    {/* Specialist Services */}
                    <div>
                      <span className="px-4 py-1.5 text-xs text-slate-500 uppercase tracking-wider font-semibold block">
                        Specialist
                      </span>
                      {services.slice(8).map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-center px-4 py-2 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800/50 transition text-sm"
                          onClick={() => setServicesOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
              </div>
            </div>

            {/* Other Nav Links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-amber-400 transition font-medium whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}

            {/* Phone CTA — desktop */}
            <a
              href="tel:+447803808093"
              className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition font-semibold whitespace-nowrap"
              aria-label="Call RMT Solutions on 07803 808093"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">07803 808093</span>
              <span className="xl:hidden">Call</span>
            </a>

            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-5 py-3 rounded-xl font-semibold transition shadow-lg shadow-amber-500/20 whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-1">
              {/* Mobile Services Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full text-gray-400 hover:text-amber-400 transition font-medium px-4 py-2"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  aria-expanded={mobileServicesOpen}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileServicesOpen && (
                  <div className="pl-4 pb-2 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block text-slate-400 hover:text-amber-400 transition text-sm px-4 py-2 rounded-lg hover:bg-slate-800/50"
                        onClick={() => {
                          setMobileMenuOpen(false)
                          setMobileServicesOpen(false)
                        }}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Mobile Nav Links */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-amber-400 transition font-medium px-4 py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-2 px-4 space-y-2">
                {/* Phone CTA — mobile primary action */}
                <a
                  href="tel:+447803808093"
                  className="flex items-center justify-center gap-2 bg-slate-800 border border-amber-500/40 text-amber-400 px-6 py-3 rounded-xl font-semibold text-center hover:bg-slate-700 transition"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Call RMT Solutions on 07803 808093"
                >
                  <Phone className="w-4 h-4" />
                  Call 07803 808093
                </a>
                <Link
                  href="/contact"
                  className="block bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-6 py-3 rounded-xl font-semibold text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
