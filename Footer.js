import Link from 'next/link'

export default function Footer() {
  const services = [
    { name: 'Lift Plan Writing', href: '/services/lift-plans' },
    { name: 'Excavator Lift Plans', href: '/services/lift-plans#excavator' },
    { name: 'Mobile Crane Lift Plans', href: '/services/lift-plans#mobile-crane' },
    { name: 'Tower Crane Contracts', href: '/services/tower-crane' },
    { name: 'Steel Erection Planning', href: '/services/steel-erection' },
  ]

  const qualifications = [
    'CPCS Appointed Person A61',
    'NEBOSH National Diploma',
    'Graduate IOSH',
    '35+ Years Experience',
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-slate-900 font-display font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-display font-bold text-white">RMT Solutions</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional lift planning services from a CPCS Appointed Person. LOLER compliant lift plans for contractors across the UK.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Lift Planning Services</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {services.map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-amber-400 transition">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Qualifications</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {qualifications.map((qual) => (
                <li key={qual}>{qual}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Contact</h4>
            <address className="not-italic space-y-3 text-gray-400 text-sm">
              <p>Warrington, Cheshire, UK</p>
              <p>
                <a href="mailto:info@rmtsolutions.co.uk" className="hover:text-amber-400 transition">
                  info@rmtsolutions.co.uk
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RMT Solutions Ltd. LOLER Compliant Lift Planning Services UK.
          </p>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/sitemap.xml" className="text-gray-500 hover:text-amber-400 transition text-sm">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
