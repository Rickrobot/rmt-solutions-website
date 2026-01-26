import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  metadataBase: new URL('https://www.rmtsolutions.co.uk'),
  title: {
    default: 'Lift Plans UK | LOLER Compliant Lift Planning | Appointed Person | RMT Solutions',
    template: '%s | RMT Solutions'
  },
  description: 'Professional LOLER compliant lift plans from CPCS Appointed Person with 35 years experience. Lift plan writing, tower crane contracts, steel erection planning, excavator lift plans. UK-wide service from Warrington.',
  keywords: ['lift plans', 'lift planning', 'LOLER compliant', 'appointed person', 'CPCS A61', 'tower crane', 'steel erection', 'mobile crane lift plan', 'excavator lift plan', 'UK lift planning', 'Warrington', 'Manchester'],
  authors: [{ name: 'Ricky Marsh', url: 'https://www.rmtsolutions.co.uk' }],
  creator: 'RMT Solutions Ltd',
  publisher: 'RMT Solutions Ltd',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.rmtsolutions.co.uk',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    title: 'Lift Plans UK | LOLER Compliant Lift Planning | RMT Solutions',
    description: 'Professional lift planning from a CPCS Appointed Person. Tower crane contracts, steel erection planning, excavator lift plans. 35 years experience.',
    images: [
      {
        url: '/images/og-lift-planning.jpg',
        width: 1200,
        height: 630,
        alt: 'RMT Solutions - Professional Lift Planning Services UK',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lift Plans UK | LOLER Compliant Lift Planning',
    description: 'Professional lift planning from a CPCS Appointed Person with 35 years experience.',
    images: ['/images/og-lift-planning.jpg'],
  },
  alternates: {
    canonical: 'https://www.rmtsolutions.co.uk',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="geo.region" content="GB-WRT" />
        <meta name="geo.placename" content="Warrington, Cheshire" />
        <meta name="geo.position" content="53.3900;-2.5970" />
        <meta name="ICBM" content="53.3900, -2.5970" />
      </head>
      <body className="bg-slate-950 text-gray-100">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
