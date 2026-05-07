import Link from 'next/link'

export default function Footer() {
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

  // Locations linked from the footer. Order: regional flagships first (the
  // pages we most want to rank), then geographic logic. This matches the
  // /locations hub's CITIES order exactly so internal anchor text stays
  // consistent across the site.
  //
  // Anchor text uses "Crane Lift Plan [city]" rather than "Lift Plans [city]"
  // because Google interprets "lift plans Manchester" as elevator services.
  // Crane-prefixed anchors give the location pages a much better chance of
  // ranking for actual crane/LOLER lift planning intent.
  const locations = [
    { name: 'Crane Lift Plan Manchester',  href: '/locations/manchester' },
    { name: 'Crane Lift Plan Liverpool',   href: '/locations/liverpool' },
    { name: 'Crane Lift Plan Salford',     href: '/locations/salford' },
    { name: 'Crane Lift Plan Stockport',   href: '/locations/stockport' },
    { name: 'Crane Lift Plan Trafford',    href: '/locations/trafford' },
    { name: 'Crane Lift Plan Wirral',      href: '/locations/wirral' },
    { name: 'Crane Lift Plan Leeds',       href: '/locations/leeds' },
    { name: 'Crane Lift Plan Birmingham',  href: '/locations/birmingham' },
    { name: 'Crane Lift Plan London',      href: '/locations/london' },
    { name: 'All UK locations',            href: '/locations' },
  ]

  const qualifications = [
    'CPCS Appointed Person A61',
    'NEBOSH National Diploma',
    'CertIOSH',
    'MIIRSM',
    'TIFSM',
    '35+ Years Experience',
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                <span className="text-slate-900 font-display font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-display font-bold text-white">RMT Solutions</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional lift planning services from a CPCS Appointed Person. LOLER compliant lift plans for contractors across the UK — based in Warrington, working across Manchester, Liverpool and the North West.
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

          {/* Locations */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Locations Served</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {locations.map((location) => (
                <li key={location.name}>
                  <Link href={location.href} className="hover:text-amber-400 transition">
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Qualifications + Contact */}
          <div>
            <h4 className="text-white font-display font-semibold mb-6">Qualifications</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {qualifications.map((qual) => (
                <li key={qual}>{qual}</li>
              ))}
            </ul>

            <h4 className="text-white font-display font-semibold mt-8 mb-6">Contact</h4>
            <address className="not-italic space-y-3 text-gray-400 text-sm">
              <p>RMT Solutions Ltd<br />Warrington, Cheshire, UK</p>
              <p>
                <a href="mailto:ricky@rmtsolutions.co.uk" className="hover:text-amber-400 transition">
                  ricky@rmtsolutions.co.uk
                </a>
              </p>
              <p>
                <a href="tel:+447803808093" className="hover:text-amber-400 transition">
                  07803 808093
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Service-area band — sitewide geographic signal that surfaces on
            every page. Plain prose is preferred over a tag-cloud because
            Google reads sentence context as more authoritative than lists. */}
        <div className="border-t border-slate-800 pt-8 pb-2">
          <p className="text-gray-500 text-sm leading-relaxed text-center max-w-4xl mx-auto">
            Serving construction sites across Manchester, Liverpool, Warrington, Salford,
            Stockport, Trafford, Bolton, Wigan, St Helens, Knowsley, Wirral, Birkenhead,
            Sefton, Widnes, Runcorn, Chester and the wider North West — with same-day site
            attendance practical across the M62 and M6 corridors.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 mt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} RMT Solutions Ltd. LOLER Compliant Lift Planning Services UK.
          </p>
          <nav className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/locations" className="text-gray-500 hover:text-amber-400 transition text-sm">
              Locations
            </Link>
            <Link href="/sitemap.xml" className="text-gray-500 hover:text-amber-400 transition text-sm">
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
