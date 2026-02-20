'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)

  const services = [
    { name: 'Lift Plan Writing', href: '/services/lift-plans' },
    { name: 'Excavator Lift Plans', href: '/services/excavator-lift-plans' },
    { name: 'Telehandler Lift Plans', href: '/services/telehandler-lift-plans' },
    { name: 'Lorry Loader Lift Plans', href: '/services/lorry-loader-lift-plans' },
    { name: 'Mobile Crane Lift Plans', href: '/services/mobile-crane-lift-plans' },
    { name: 'Tower Crane Contracts', href: '/services/tower-crane' },
    { name: 'Steel Erection Planning', href: '/services/steel-erection' },
    { name: 'Lift Plan Checking', href: '/services/lift-plan-checking' },
    { name: 'Lifting Operations Audit', href: '/services/lifting-operations-audit' },
  ]

  const resources = [
    { name: 'Resources Overview', href: '/resources' },
    { name: 'Excavator Lift Plan Templates', href: '/resources/excavator-lift-plan-templates' },
    { name: 'Telehandler Lift Plan Templates', href: '/resources/telehandler-lift-plan-templates' },
  ]

  const navigation = [
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-slate-900 font-display font-bold text-2xl">R</span>
            </div>
            <div>
              <span className="text-xl font-display font-bold text-white">RMT Solutions</span>
              <span className="hidden sm:block text-xs text-gray-500 tracking-wider uppercase">
                Lift Planning Specialists
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="flex items-center text-gray-400 hover:text-amber-400 transition font-medium py-6">
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 pt-0 w-64">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-4 py-2 text-gray-400 hover:text-amber-400 hover:bg-slate-800/50 transition"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-amber-400 transition font-medium"
              >
                {item.name}
              </Link>
            ))}

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center text-gray-400 hover:text-amber-400 transition font-medium py-6">
                Resources
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              
              {resourcesOpen && (
                <div className="absolute top-full right-0 pt-0 w-64">
                  <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-xl py-2">
                    {resources.map((resource) => (
                      <Link
                        key={resource.name}
                        href={resource.href}
                        className="block px-4 py-2 text-gray-400 hover:text-amber-400 hover:bg-slate-800/50 transition"
                      >
                        {resource.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-900 px-6 py-3 rounded-xl font-semibold transition shadow-lg shadow-amber-500/20"
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
            <div className="flex flex-col space-y-2">
              {/* Mobile Services Accordion */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center justify-between text-gray-400 hover:text-amber-400 transition font-medium px-4 py-2"
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="pl-6 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-gray-500 hover:text-amber-400 transition px-4 py-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}

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

              {/* Mobile Resources Accordion */}
              <button
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="flex items-center justify-between text-gray-400 hover:text-amber-400 transition font-medium px-4 py-2"
              >
                Resources
                <ChevronDown className={`w-4 h-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {resourcesOpen && (
                <div className="pl-6 space-y-1">
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      className="block text-gray-500 hover:text-amber-400 transition px-4 py-2 text-sm"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 px-6 py-3 rounded-xl font-semibold text-center mx-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
