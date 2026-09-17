import Link from 'next/link'
import CookieChoice from '@/components/CookieChoice'

/**
 * The privacy notice for this website.
 *
 * Separate from the LiftPlan Studio notice at liftplanstudio.com/privacy, and
 * deliberately so: that one covers a signed-in product with accounts and
 * subscriptions, this one covers a marketing site with four enquiry forms.
 * One document trying to be both would be accurate about neither.
 *
 * Every factual claim here was written from the code: the forms in
 * app/contact, components/InlineQuoteForm, components/GatedDownload and
 * components/TrialRequestForm, the analytics in components/Analytics, and the
 * consent gate in lib/consent. If a form changes, this page changes with it.
 */

export const metadata = {
  title: 'Privacy Notice',
  description:
    'What RMT Solutions Ltd collects when you use this website, why, how long it is kept, who else sees it, and what you can require us to do about it.',
  alternates: { canonical: 'https://www.rmtsafetysolutions.com/privacy' },
  openGraph: {
    title: 'Privacy Notice | RMT Solutions',
    description:
      'What we collect when you use this website, why, how long we keep it, and your rights under the UK GDPR.',
    url: 'https://www.rmtsafetysolutions.com/privacy',
  },
}

const EFFECTIVE = '17 September 2026'

function Section({ n, title, children }) {
  return (
    <section className="mt-12">
      <h2 className="text-xl sm:text-2xl font-display font-bold text-white">
        <span className="text-gray-500 mr-2">{n}.</span>
        {title}
      </h2>
      <div className="mt-4 space-y-4 text-gray-300 text-[15px] leading-relaxed">{children}</div>
    </section>
  )
}

function Row({ label, children }) {
  return (
    <div className="border-t border-slate-800 py-4 sm:grid sm:grid-cols-3 sm:gap-6">
      <p className="text-white font-semibold text-sm sm:text-[15px]">{label}</p>
      <div className="sm:col-span-2 mt-1 sm:mt-0">{children}</div>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <div className="bg-slate-950">
      {/* pt-32 rather than py-16: the site header is `fixed` and 80px tall, so
          every first section on this site clears it with pt-32. Anything less
          puts the first line of the page underneath the navigation. */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">

        <p className="text-gray-500 text-sm">RMT Solutions Ltd</p>
        <h1 className="mt-1 text-3xl sm:text-4xl font-display font-bold text-white">Privacy Notice</h1>
        <p className="mt-2 text-gray-400 text-sm">
          For this website. Effective {EFFECTIVE}.
        </p>

        <div className="mt-8 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
          <p className="text-white font-display font-semibold">The short version</p>
          <ul className="mt-3 space-y-2 text-gray-300 text-[15px] leading-relaxed list-disc pl-5">
            <li>
              If you fill in a form, we get your name, your email address and what you wrote,
              so that we can answer you. That is the whole of it.
            </li>
            <li>
              Nothing tracks you until you say it can. Analytics does not load unless you agree,
              and you can change your mind on this page.
            </li>
            <li>
              We have no mailing list, we send no marketing email, and we sell nothing about you
              to anybody.
            </li>
          </ul>
        </div>

        <Section n={1} title="Who we are">
          <p>
            RMT Solutions Ltd, company number 08338653, registered office 6 Carr Green, Lowton,
            Warrington, England, WA3 1EQ, is the controller of the personal data described here.
            VAT registration number GB 126050355.
          </p>
          <p>
            We are registered with the Information Commissioner as a data controller under
            reference <strong className="text-white">ZC250006</strong>, and our entry is on the
            public register of fee payers at ico.org.uk/register. That means the data protection
            fee has been paid and the Commissioner knows who we are. It is not an approval of
            anything in this notice and should not be read as one.
          </p>
          <p>
            Write to us at{' '}
            <a href="mailto:ricky@rmtsolutions.co.uk" className="text-amber-400 hover:text-amber-300 underline">
              ricky@rmtsolutions.co.uk
            </a>{' '}
            or telephone 07803 808093. Anything in this notice &mdash; a question, a request under
            section 8, or a complaint &mdash; goes there.
          </p>
        </Section>

        <Section n={2} title="What this notice covers">
          <p>
            This website, and what happens when you use it. It covers the enquiry forms, the
            template downloads, the trial request form and the analytics.
          </p>
          <p>
            It does not cover <strong className="text-white">LiftPlan Studio</strong>, the software
            we sell. That has accounts, subscriptions and its own notice, at{' '}
            <a
              href="https://liftplanstudio.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              liftplanstudio.com/privacy
            </a>
            . Requesting a trial from this site is covered here; using the product is covered there.
          </p>
          <p>
            It also does not cover the lift plans and safety documents we produce for clients. Those
            are governed by the engagement we agree with the client, not by this page.
          </p>
        </Section>

        <Section n={3} title="What we collect">
          <p>Four things, and three of them only happen because you chose to send them.</p>

          <div className="mt-6">
            <Row label="Enquiry and quote forms">
              <p>
                The contact form and the quote forms on our service pages collect your name and
                email address, your telephone number and company if you give them, which service
                and equipment you are asking about, and the message you write.
              </p>
            </Row>
            <Row label="Template downloads">
              <p>
                Some resources ask for a name and an email address before the file downloads. We
                also record which template it was. Two fields, and no newsletter.
              </p>
            </Row>
            <Row label="LiftPlan Studio trial requests">
              <p>
                Name, email address, telephone number, company, your role, and a description of
                what you lift or which machines you use.
              </p>
            </Row>
            <Row label="Analytics, but only if you agree">
              <p>
                Google Analytics 4 counts visits and tells us which pages lead to enquiries.
                Microsoft Clarity records what happens on the page &mdash; where a pointer moved,
                what was clicked, where somebody gave up on a form &mdash; so we can see what is
                confusing. Neither loads unless you say yes, and section 7 explains the choice.
              </p>
              <p className="mt-2">
                We never send either of them your name or your email address. What they hold is a
                browser, not a person we can name.
              </p>
            </Row>
            <Row label="Server logs">
              <p>
                Our host keeps short-lived operational logs of requests to the site, which include
                IP addresses. That happens for every website and is how a server is run and
                protected; we do not use those logs to identify anybody.
              </p>
            </Row>
          </div>
        </Section>

        <Section n={4} title="Why we hold it, and the lawful basis">
          <p>
            <strong className="text-white">Answering you.</strong> Where you send an enquiry, a
            quote request or a trial request, we process it under Article 6(1)(b) of the UK GDPR
            &mdash; steps taken at your request before entering a contract &mdash; and, where no
            contract follows, under Article 6(1)(f), our legitimate interest in replying to
            somebody who asked us a question.
          </p>
          <p>
            <strong className="text-white">Template downloads.</strong> Article 6(1)(f), our
            legitimate interest in knowing which of our resources are actually used. If you would
            rather have the file without the form, email us and we will send it.
          </p>
          <p>
            <strong className="text-white">Analytics.</strong> Your consent, under Article 6(1)(a),
            and regulation 6 of the Privacy and Electronic Communications Regulations 2003 for the
            cookies themselves. No consent, no analytics &mdash; the scripts are not on the page at
            all until you agree.
          </p>
          <p>
            <strong className="text-white">Server logs and site security.</strong> Article 6(1)(f),
            our legitimate interest in keeping the site up and defended.
          </p>
          <p>
            <strong className="text-white">Invoices and accounts</strong>, where an enquiry becomes
            work: Article 6(1)(c), our legal obligations under the Companies Act 2006 and the Value
            Added Tax Act 1994.
          </p>
          <p>
            We rely on consent for the analytics and for nothing else. We do not profile anybody, we
            have no mailing list, and we do not send marketing email. If we ever want to email you
            about something other than the thing you contacted us about, we will ask first.
          </p>
        </Section>

        <Section n={5} title="How long we keep it">
          <div className="mt-2">
            <Row label="Enquiries that go nowhere">
              <p>Three years from our last contact with you, then deleted.</p>
            </Row>
            <Row label="Enquiries that become work">
              <p>
                Six years after that work ends. Six years is the limitation period for a contract
                claim under the Limitation Act 1980 and the period for which accounting records
                must be kept.
              </p>
            </Row>
            <Row label="Template download records">
              <p>Three years.</p>
            </Row>
            <Row label="Your cookie choice">
              <p>
                Six months, then we ask again. Consent given once is not consent forever. It is kept
                in your browser&rsquo;s own storage on your device, not in a cookie and not on our
                server, so it never reaches us.
              </p>
            </Row>
            <Row label="Analytics">
              <p>
                Held by Google and Microsoft under the retention settings on our accounts with them.
                Neither holds your name or email address, because we never send one.
              </p>
            </Row>
          </div>
        </Section>

        <Section n={6} title="Who else sees it">
          <p>Four companies, each doing one job. That is the whole list.</p>
          <div className="mt-2">
            <Row label="Web3Forms">
              <p>
                Delivers what you type in a form to our inbox. The form does not store your message
                on this website: it is passed to Web3Forms, which emails it to
                ricky@rmtsolutions.co.uk, and we hold it in our email as section 5 describes.
              </p>
            </Row>
            <Row label="Vercel">
              <p>Hosts the site, serves the pages, and keeps the operational logs in section 3.</p>
            </Row>
            <Row label="Google">
              <p>Google Analytics 4, only where you have agreed.</p>
            </Row>
            <Row label="Microsoft">
              <p>
                Microsoft Clarity, only where you have agreed. Clarity sets cookies on its own
                domain as well as ours; those are on Microsoft&rsquo;s domain and no script of ours
                can delete them, so clear them in your browser if you want them gone.
              </p>
            </Row>
          </div>
          <p>
            We may also disclose personal data where the law or a regulator requires it, or to our
            professional advisers, auditors or insurers where they need it to advise us.
          </p>
          <p>
            Some of those providers process data outside the United Kingdom. Where they do, the
            transfer relies on the safeguards permitted by Article 46 of the UK GDPR &mdash; in
            practice the International Data Transfer Agreement, or the UK Addendum to the European
            Commission&rsquo;s standard contractual clauses &mdash; under each provider&rsquo;s own
            data processing terms. Ask and we will tell you which applies to which.
          </p>
        </Section>

        <Section n={7} title="Cookies, and your choice">
          <p>
            Nothing on this site sets a cookie until you agree to it. There is no cookie that has to
            be there for the site to work, so there is nothing you cannot refuse.
          </p>
          <p>
            If you agree, Google Analytics sets cookies beginning <code className="text-amber-300">_ga</code>{' '}
            to recognise a returning browser, and Microsoft Clarity sets{' '}
            <code className="text-amber-300">_clck</code> and <code className="text-amber-300">_clsk</code>{' '}
            to tie a session recording together. If you refuse, none of them is set, because neither
            script is loaded.
          </p>
          <p>
            Your answer is remembered in your browser&rsquo;s own storage on this device. It is not a
            cookie, it is never sent to us, and clearing your browsing data forgets it &mdash; in
            which case we will ask again.
          </p>
          <p>
            Changing your mind takes effect immediately. Withdrawing consent also deletes the
            analytics cookies we can reach and reloads the page, because a script that has already
            run is still in the page until it does.
          </p>
          <div className="mt-6">
            <CookieChoice />
          </div>
        </Section>

        <Section n={8} title="Your rights">
          <p>Under the UK GDPR you have the right to:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li>be told what we hold about you and be given a copy of it (Article 15);</li>
            <li>have anything inaccurate corrected and anything incomplete completed (Article 16);</li>
            <li>have it erased where one of the grounds in Article 17 applies;</li>
            <li>
              have our use of it restricted while a dispute about its accuracy or our grounds is
              resolved (Article 18);
            </li>
            <li>
              receive what you gave us in a structured, commonly used, machine-readable form, and
              have it sent to another controller where that is technically feasible (Article 20);
            </li>
            <li>
              object to anything we do on the basis of legitimate interests (Article 21); and
            </li>
            <li>withdraw consent to analytics at any time, which section 7 does in one click.</li>
          </ul>
          <p>
            To exercise any of them, email ricky@rmtsolutions.co.uk. We will answer within one
            month. Where a request is complex the law allows us up to two further months, and we
            will tell you inside the first month if we are taking them and why.
          </p>
          <p>
            We may need to satisfy ourselves that you are who you say you are before we hand over a
            copy of somebody&rsquo;s data. We will do that by asking something only you could
            answer. We will not ask you to send us a passport or a driving licence, and you should
            not send us one.
          </p>
          <p>There is no charge, unless a request is manifestly unfounded or excessive.</p>
        </Section>

        <Section n={9} title="Complaints">
          <p>
            If you think we have got something wrong, tell us first at ricky@rmtsolutions.co.uk. It
            is the fastest way to have it put right and we would rather hear it.
          </p>
          <p>
            You may complain to the Information Commissioner&rsquo;s Office at any time, and you do
            not have to come to us first. Information Commissioner&rsquo;s Office, Wycliffe House,
            Water Lane, Wilmslow, Cheshire SK9 5AF. Telephone 0303 123 1113. ico.org.uk.
          </p>
          <p>
            Complaining to the Commissioner does not affect any other remedy you have, including a
            claim in court under Article 82 of the UK GDPR.
          </p>
        </Section>

        <Section n={10} title="Changes to this notice">
          <p>
            This notice is dated. Where a change materially affects how we use personal data we
            already hold, we will say so here and, where we hold an address for you and the change
            matters to you, by email.
          </p>
          <p>
            Earlier versions are available on request.
          </p>
        </Section>

        <div className="mt-16 border-t border-slate-800 pt-8">
          <p className="text-gray-500 text-sm">
            RMT Solutions Ltd &mdash; company number 08338653, registered office 6 Carr Green,
            Lowton, Warrington, England, WA3 1EQ. ICO registration ZC250006.
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
