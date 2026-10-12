import Link from 'next/link'

/**
 * Image licence — the terms RMT Solutions Ltd's own drawings and photographs
 * are published under.
 *
 * Exists because Google's image metadata (ImageObject `license` and
 * `acquireLicensePage`, set in lib/imageRights.js) has to point at a real page
 * that states the terms and says how to ask for permission. The
 * "request-permission" anchor below is the acquireLicensePage target — keep
 * the id if the section is reworded.
 */

export const metadata = {
  title: 'Image Licence',
  description:
    'The terms RMT Solutions Ltd publishes its lift plan drawings and photographs under, what you can do without asking, and how to request permission to reuse an image.',
  alternates: { canonical: 'https://www.rmtsafetysolutions.com/image-licence' },
  openGraph: {
    title: 'Image Licence | RMT Solutions',
    description:
      'How RMT Solutions Ltd’s drawings and photographs may be used, and how to ask permission to reuse one.',
    url: 'https://www.rmtsafetysolutions.com/image-licence',
  },
}

const EFFECTIVE = '12 October 2026'

function Section({ n, id, title, children }) {
  return (
    <section id={id} className="mt-12 scroll-mt-28">
      <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
        <span className="text-gray-500 mr-2">{n}.</span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-gray-300 text-[15px] leading-relaxed">{children}</div>
    </section>
  )
}

export default function ImageLicencePage() {
  return (
    <div className="bg-slate-950">
      {/* pt-32: the fixed site header is 80px tall — see app/privacy. */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">

        <p className="text-gray-500 text-sm">RMT Solutions Ltd</p>
        <h1 className="mt-1 text-3xl sm:text-4xl font-display font-bold text-white">Image Licence</h1>
        <p className="mt-2 text-gray-400 text-sm">
          For the drawings and photographs on this website. Effective {EFFECTIVE}.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
          <p className="text-white font-display font-semibold">The short version</p>
          <ul className="mt-3 space-y-2 text-gray-300 text-[15px] leading-relaxed list-disc pl-5">
            <li>
              The lift plan drawings and our own photographs on this site belong to RMT Solutions
              Ltd. All rights are reserved.
            </li>
            <li>You are welcome to link to any page, or share a link to it.</li>
            <li>
              Copying or reusing an image needs our written permission first. Ask us &mdash; details
              are in section 4.
            </li>
          </ul>
        </div>

        <Section n={1} title="Who owns the images">
          <p>
            Unless an image says otherwise, the lift plan drawings, diagrams and photographs
            published on rmtsafetysolutions.com were produced by RMT Solutions Ltd and are
            &copy; RMT Solutions Ltd. All rights reserved.
          </p>
          <p>
            Logos, trade marks and product names shown on the site &mdash; including client names,
            accreditation marks and the names of equipment manufacturers &mdash; belong to their
            respective owners. Nothing on this page grants any right to use them.
          </p>
        </Section>

        <Section n={2} title="What you can do without asking">
          <ul className="list-disc pl-5 space-y-2">
            <li>View the images on this website.</li>
            <li>
              Link to any page on this website, including sharing that link by email or on social
              media, where the platform shows its own preview of the page.
            </li>
          </ul>
        </Section>

        <Section n={3} title="What needs our permission">
          <p>
            Anything else. In particular, copying, downloading for reuse, editing, tracing or
            republishing any drawing or photograph &mdash; including in your own lift plans,
            method statements, RAMS, tender submissions, presentations, training material or
            websites &mdash; needs written permission from RMT Solutions Ltd before you use it.
          </p>
          <p>
            This page covers images published on this website. Drawings issued to a client as part
            of a lift plan or other paid work are covered by the terms of that job.
          </p>
        </Section>

        <Section n={4} id="request-permission" title="How to request permission">
          <p>
            Email{' '}
            <a href="mailto:ricky@rmtsolutions.co.uk?subject=Image%20licence%20request" className="text-amber-400 hover:text-amber-300 underline">
              ricky@rmtsolutions.co.uk
            </a>{' '}
            or telephone 07803 808093, and tell us:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>which image you would like to use (the page address, or a link to the image);</li>
            <li>where and how it will be used; and</li>
            <li>for how long.</li>
          </ul>
          <p>
            We will reply with whether the image can be used and on what terms. Permission is only
            given in writing, and only for the use it describes.
          </p>
          <p>
            Where we do give permission, please credit the image as{' '}
            <strong className="text-white">&ldquo;&copy; RMT Solutions Ltd&rdquo;</strong>.
          </p>
        </Section>

        <div className="mt-16 border-t border-slate-800 pt-8">
          <p className="text-gray-500 text-sm">
            RMT Solutions Ltd &mdash; company number 08338653, registered office 6 Carr Green,
            Lowton, Warrington, England, WA3 1EQ.
          </p>
          <p className="mt-3 text-sm">
            <Link href="/contact" className="text-amber-400 hover:text-amber-300 underline">
              Contact us
            </Link>
          </p>
        </div>

      </div>
    </div>
  )
}
