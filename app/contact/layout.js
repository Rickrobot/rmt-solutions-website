// Contact page metadata.
//
// `app/contact/page.js` is a client component (it owns form state with
// useState), so it cannot export `metadata` directly. This route-segment
// layout sets the page-specific title, description and canonical instead,
// which Next.js applies to the contact page at build time.
//
// Without this file the contact page inherits the homepage title and the
// global canonical from `app/layout.js`, which is exactly what the SEO
// audit flagged.

export const metadata = {
  // Trimmed (Jun 2026): with the '| RMT Solutions' suffix the previous
  // 48-char title hit 64 chars and truncated in desktop SERPs.
  title: 'Contact — Lift Plan Quote in 4 Working Hours',
  description:
    'Contact RMT Solutions for LOLER compliant lift plans and Appointed Person services. Quote within 4 working hours. Call 07803 808093.',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/contact',
  },
  openGraph: {
    title: 'Contact RMT Solutions | Lift Plan Quote Within 4 Working Hours',
    description:
      'Get in touch for LOLER compliant lift plans from a CPCS Appointed Person. Quote within 4 working hours, plan delivered in 24\u201348 hours.',
    url: 'https://www.rmtsafetysolutions.com/contact',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

export default function ContactLayout({ children }) {
  return children
}
