'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Services', href: '/#services' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'About', href: '/about' },
    { name: 'Resources', href: '/resources' },
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
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-400 hover:text-amber-400 transition font-medium"
              >
                {item.name}
              </Link>
            ))}
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
            <div className="flex flex-col space-y-4">
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
