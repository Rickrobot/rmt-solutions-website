import './globals.css'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingCallButton from '@/components/FloatingCallButton'
import Analytics from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'
import ConversionTracking from '@/components/ConversionTracking'
// Vercel Speed Insights (Nov 2026): real-visitor Core Web Vitals. Cookieless and
// collects no personal data, so it sits outside the consent gate in Analytics.
import { SpeedInsights } from '@vercel/speed-insights/next'
// Vercel Web Analytics (Nov 2026): cookieless visit counts, so the site has a true
// visitor number again. GA4 only counts visitors who accept cookies (consent gate
// live 17 Sep 2026), which made traffic look as if it had collapsed.
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'

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
    //
    // CANNIBALISATION FIX (Aug 2026 GSC review):
    // The previous default — 'LOLER Lift Plans UK | Appointed Person | RMT
    // Solutions' — targeted the same head terms as /services/lift-plans
    // ('Lift Planning Services UK | Lift Plans from £200'). Google split the
    // signal and ranked neither: the homepage sat at pos 18.7 (2,452 imps)
    // while the money page sat at pos 30.8 with 4,415 imps and 5 clicks.
    // The homepage now leads on brand, credential and trust, ceding the
    // commercial head terms outright to the service page.
    // Oct 2026: lift plans back in. The homepage holds every external link the
    // site has, and with no service words in its title it asked to rank for
    // nothing commercial. Brand stays first (it ranks ~#2.6 for "rmt
    // solutions"); "Lift Planning Services" stays with /services/lift-plans.
    default: 'RMT Solutions | Lift Plans & CPCS Appointed Person, UK-Wide',
    template: '%s | RMT Solutions'
  },
  // 10 Nov 2026: the homepage sits at position 6 for "lift planning
  // services" (86 imps, 0 clicks). The title stays brand-first (see above);
  // the description now carries the phrase so Google bolds it.
  description: 'Independent lift planning services from a CPCS A61 Appointed Person, 35 years on UK sites. Lift plans, plan checks and lifting audits, 24-48hr turnaround.',
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
    title: 'RMT Solutions | Lift Plans & CPCS Appointed Person, UK-Wide',
    description: 'Independent CPCS A61 Appointed Person with 35 years on UK construction sites. Lift plans, lift plan checking and lifting operations audits, UK-wide.',
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
        {/* Room for the mobile contact bar, so it never covers the end of the
            footer. Same height as the bar; nothing on large screens. */}
        <div aria-hidden="true" className="lg:hidden h-[calc(4.25rem+env(safe-area-inset-bottom))]" />
        <FloatingCallButton />
        <CookieConsent />
        <SpeedInsights />
        <VercelAnalytics />
      </body>
    </html>
  )
}
