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
  title: 'Contact | Lift Plan Quote Within 4 Working Hours',
  description:
    'Contact RMT Solutions for LOLER compliant lift plans, lift plan checking and Appointed Person services. Quote within 4 working hours, plan delivered in 24\u201348 hours. Call 07803 808093 or email ricky@rmtsolutions.co.uk.',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/contact',
  },
  openGraph: {
    title: 'Contact RMT Solutions | Lift Plan Quote Within 4 Working Hours',
    description:
      'Get in touch for LOLER compliant lift plans from a CPCS Appointed Person. Quote within 4 working hours, plan delivered in 24\u201348 hours.',
    url: 'https://www.rmtsafetysolutions.com/contact',
    type: 'website',
  },
}

export default function ContactLayout({ children }) {
  return children
}
