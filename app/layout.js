import './globals.css'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'
import Analytics from '@/components/Analytics'
import ConversionTracking from '@/components/ConversionTracking'

// PERFORMANCE FIX (SEO audit, May 2026):
// Fonts are now loaded with next/font/google instead of a CSS @import in
// globals.css. next/font self-hosts the font files at build time, which:
//   - removes the render-blocking request to fonts.googleapis.com that
//     previously delayed First Contentful Paint and Largest Contentful Paint,
//   - eliminates the layout shift (CLS) that happens while a webfont swaps in,
//   - removes a third-party connection (better privacy + one less DNS lookup).
// Each font exposes a CSS variable (--font-body / --font-display) which is
// consumed in globals.css and tailwind.config.js, so every existing
// `font-display` / `font-body` utility and `.font-display` class keeps working
// exactly as before — no markup changes needed anywhere else.
const bodyFont = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-body',
})

const displayFont = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
})

export const metadata = {
  metadataBase: new URL('https://www.rmtsafetysolutions.com'),
  title: {
    // Homepage uses `default` as-is (no template applied). All child pages
    // get the template appended automatically. Both kept ≤60 chars so they
    // render in full on Google desktop SERPs.
    default: 'LOLER Lift Plans UK | Appointed Person | RMT Solutions',
    template: '%s | RMT Solutions'
  },
  description: 'LOLER compliant lift plans from a CPCS Appointed Person with 35 years experience. Tower crane, mobile crane and excavator lift plans — UK-wide.',
  keywords: ['lift plans', 'lift planning', 'LOLER compliant', 'appointed person', 'CPCS A61', 'tower crane', 'steel erection', 'mobile crane lift plan', 'excavator lift plan', 'UK lift planning', 'Warrington', 'Manchester'],
  authors: [{ name: 'Ricky Marsh', url: 'https://www.rmtsafetysolutions.com' }],
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
    url: 'https://www.rmtsafetysolutions.com',
    siteName: 'RMT Solutions - Lift Planning Specialists',
    title: 'LOLER Lift Plans UK | Appointed Person | RMT Solutions',
    description: 'Professional lift planning from a CPCS Appointed Person with 35 years experience. Tower crane contracts, steel erection planning, excavator lift plans.',
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
    // Card type only (Jun 2026 fix). The previous title/description/images
    // here were inherited by every inner page, so blog posts and service
    // pages shared on X showed the homepage card instead of their own.
    // With only `card` set, X/Twitter falls back to each page's og:title,
    // og:description and og:image — which are correct everywhere.
    card: 'summary_large_image',
  },
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com',
  },
  verification: {
    google: 'eeLZ-jEjj3GZI9Oj5ynprEilSKWFjCk3eamJqs7B5L4',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="geo.region" content="GB-WRT" />
        <meta name="geo.placename" content="Warrington, Cheshire" />
        <meta name="geo.position" content="53.3900;-2.5970" />
        <meta name="ICBM" content="53.3900, -2.5970" />
      </head>
      <body className="bg-slate-950 text-gray-100">
        <Analytics />
        <ConversionTracking />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCallButton />
      </body>
    </html>
  )
}
