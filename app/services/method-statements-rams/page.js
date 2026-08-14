import Image from 'next/image'
import Link from 'next/link'
import { Clock, ShieldCheck, FileCheck, PhoneCall, CheckCircle2, X, AlertTriangle, RefreshCw } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Method Statement & RAMS Writing UK | Rejected RAMS Fixed',
  description:
    'Had your RAMS rejected by the principal contractor? Bespoke method statements and risk assessments written by a NEBOSH Diploma / CertIOSH consultant who checks documents for tier 1 contractors. 24-48hr turnaround.',
  keywords:
    'method statement writing service, RAMS writing service, risk assessment method statement, RAMS rejected, why RAMS get rejected, bespoke method statement UK, construction RAMS, method statement rewrite, RAMS resubmission, principal contractor RAMS approval, site specific RAMS, CDM 2015 method statement',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/method-statements-rams',
  },
  openGraph: {
    title: 'Method Statement & RAMS Writing UK | Rejected RAMS Fixed',
    description:
      'Bespoke method statements and risk assessments written to pass principal contractor review. Rejection recovery a speciality. 24-48hr turnaround.',
    url: 'https://www.rmtsafetysolutions.com/services/method-statements-rams',
    images: ['/images/og-lift-planning.jpg'],
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Method Statement & Risk Assessment (RAMS) Writing',
  provider: {
    '@type': 'LocalBusiness',
    name: 'RMT Solutions',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warrington',
      addressRegion: 'Cheshire',
      addressCountry: 'UK',
    },
    telephone: '+447803808093',
    url: 'https://www.rmtsafetysolutions.com',
  },
  description:
    'Bespoke construction method statements and risk assessments written to pass principal contractor review. Specialist in rejection recovery — rewriting RAMS that have been returned by the main contractor. Every document quality assured against an 18-point compliance standard by a NEBOSH Diploma, CertIOSH consultant with 35 years in UK construction.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Method Statement and Risk Assessment Writing',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'GBP',
    description:
      'Rejection review with written findings, full bespoke rewrite, or new RAMS written from scratch. Resubmission support included until accepted.',
  },
}

// Single source of truth for this page's FAQs — rendered on the page AND
// used to build the FAQPage JSON-LD below. Add questions here only.
// (See the note on app/services/lift-plan-checking/page.js — visible FAQs and
// JSON-LD must not drift apart, so the schema is derived from this array.)
const PAGE_FAQS = [
  {
    q: 'Why do RAMS get rejected by principal contractors?',
    a: 'The most common reason by far is that the document is generic — written for the trade rather than for the site. Principal contractors reject RAMS for: no site-specific hazards (the actual access, services, neighbours and interfaces on that job), a method statement whose sequence does not match how the work will really be done, risk assessments with generic controls and no residual risk rating, missing or out-of-date competencies and training records, no COSHH assessment where substances are used, no reference to the principal contractor’s own site rules or construction phase plan, missing emergency and rescue arrangements, and unsigned or undated documents with no revision control. A document can look professional and still fail every one of those tests.',
  },
  {
    q: 'My RAMS has been rejected twice — can you fix it?',
    a: 'Yes, that is the core of this service. Send the document you submitted and the rejection comments you were given. We identify why it failed, rewrite it properly against the site information, and issue a version built to be accepted. If the principal contractor comes back with further comments, we address them at no extra charge until the document is accepted.',
  },
  {
    q: 'How quickly can you turn a rejected RAMS around?',
    a: 'Standard turnaround is 24 to 48 working hours from receipt of the document, the rejection comments and the site information. Where work is already stood down and labour is waiting, call 07803 808093 rather than emailing — same-day turnaround is often possible where the information is available.',
  },
  {
    q: 'What is the difference between a risk assessment and a method statement?',
    a: 'A risk assessment identifies the hazards in an activity, who might be harmed, and the control measures that reduce the risk to an acceptable level. A method statement sets out, step by step, how the work will actually be carried out safely — sequence, plant, personnel, supervision and emergency arrangements. Together they are usually called RAMS. A principal contractor expects the two to be consistent: controls identified in the risk assessment must appear in the method, and the method must not introduce activities the risk assessment never considered.',
  },
  {
    q: 'How is this different from a RAMS template or an AI RAMS generator?',
    a: 'Templates and AI tools produce a generic document quickly, which is exactly what principal contractors are rejecting in growing numbers. They cannot see your site, your access constraints, your interfaces with other trades, or the main contractor’s own standing rules. This service produces a site-specific document written from your actual job information, then quality assured against the same 18-point compliance standard used when reviewing submissions on behalf of tier 1 contractors.',
  },
  {
    q: 'What information do you need to write a RAMS?',
    a: 'The scope of works, the site address and programme dates, the plant and equipment being used, the substances involved if any, the number and competency of operatives, any drawings or site layout information you hold, and the principal contractor’s site rules or construction phase plan if you have been issued with them. If a document has already been rejected, also send the rejection comments. Where information is missing we will tell you what we need rather than making an assumption and hoping it passes.',
  },
  {
    q: 'Do you write RAMS for trades other than lifting?',
    a: 'Yes. Method statements and risk assessments are written across construction trades and activities — groundworks, demolition and soft strip, steelwork and cladding, roofing, concrete works, mechanical and electrical installation, temporary works, plant operations, working at height, confined spaces and site logistics. Lifting operations are a specialism, not a limit.',
  },
  {
    q: 'Who writes the documents?',
    a: 'Ricky Marsh — NEBOSH National Diploma, CertIOSH, MIIRSM, CPCS A61 Appointed Person, with 35 years in UK construction including time as a contracts manager. That reviewing-side experience is the point: these documents are written by someone who has spent years on the other side of the desk deciding whether submissions were good enough.',
  },
  {
    q: 'Will you deal with the principal contractor directly?',
    a: 'If you want us to, yes. Where a document has bounced more than once it is often quicker for us to speak to the reviewer directly, establish exactly what they need to see, and close it out. Many subcontractors prefer this — it removes the back-and-forth and gets the job moving.',
  },
  {
    q: 'Can you review our RAMS before we submit it?',
    a: 'Yes, and it is usually the cheapest option. A pre-submission review returns written findings against the 18-point standard so you can correct problems in private rather than having the document bounced back through the site team. It protects your standing with the main contractor, which matters on the next job as much as this one.',
  },
  {
    q: 'How much does a bespoke RAMS cost?',
    a: 'It depends on the complexity of the activity and how much information already exists. A pre-submission review with written findings is the lowest cost option; a full bespoke rewrite of a rejected document sits above that; a complete RAMS written from scratch for a complex or high-risk activity is quoted individually. Every quote is fixed-price and agreed before work starts — no hourly surprises. Call 07803 808093 or send the scope for a same-day quote.',
  },
  {
    q: 'Do you provide RAMS review for principal contractors as well?',
    a: 'Yes. The same 18-point standard is applied on the reviewing side for main contractors receiving subcontractor submissions — the direct equivalent of our lift plan checking service, applied to the wider RAMS package. To avoid any conflict, we do not write documents for subcontractors on projects where we hold the reviewing role.',
  },
  {
    q: 'Is a method statement a legal requirement?',
    a: 'The Management of Health and Safety at Work Regulations 1999 require a suitable and sufficient risk assessment, and CDM 2015 requires contractors to plan, manage and monitor their work so it is carried out without risks to health and safety. A written method statement is the normal way of demonstrating that for construction work, and principal contractors require one as a condition of access under their CDM duties. In practice, no accepted RAMS means no start on site.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PAGE_FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com/' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.rmtsafetysolutions.com/services' },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Method Statements & Risk Assessments',
      item: 'https://www.rmtsafetysolutions.com/services/method-statements-rams',
    },
  ],
}

export default function MethodStatementsRamsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/lift-planning-site-desk-review-uk.webp"
            alt="Construction safety consultant reviewing method statement and risk assessment documentation on site"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
            NEBOSH Diploma · CertIOSH · 35 Years UK Construction
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Method Statements &amp; Risk Assessments That Get Accepted
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Bespoke RAMS written for your site, not pulled from a template. If the principal
            contractor has already rejected yours, send it over with their comments — rewriting
            rejected documents and getting them through is what this service is built for.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-sm">24&ndash;48hr turnaround</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <RefreshCw className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Resubmission included until accepted</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm">18-point compliance standard</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Us Your Rejected RAMS
            </Link>
            <a
              href="tel:+447803808093"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-900">35+</div>
              <div className="text-sm text-slate-600">Years of construction experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">NEBOSH</div>
              <div className="text-sm text-slate-600">National Diploma · CertIOSH · MIIRSM</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">Tier 1</div>
              <div className="text-sm text-slate-600">Trusted to review submissions</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">UK-wide</div>
              <div className="text-sm text-slate-600">Documents produced remotely</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why RAMS get rejected — primary search target */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Why RAMS get rejected by principal contractors
          </h2>
          <div className="prose prose-lg max-w-none text-slate-600 mb-8">
            <p>
              Almost every rejected RAMS fails for the same underlying reason: the document
              describes the <em>trade</em>, not the <em>job</em>. It could have been submitted on
              any site in the country, and the reviewer can tell within a page.
            </p>
            <p>
              That problem is getting worse, not better. Template packs and AI RAMS generators
              produce documents quickly and cheaply, and they read plausibly — but they cannot see
              your access constraints, your interfaces with other trades, the services in the
              ground, or the principal contractor&apos;s own standing rules. Site teams are
              receiving more of these every month, and rejecting more of them.
            </p>
            <p>These are the findings that come up again and again on the reviewing side:</p>
          </div>

          <div className="bg-rose-50 border border-rose-200 p-8 rounded-xl mb-8">
            <h3 className="text-xl font-semibold text-rose-900 mb-4">Common reasons for rejection</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Generic content with no site-specific hazards identified',
                'Method sequence does not reflect how the work will actually be done',
                'Controls in the risk assessment missing from the method statement',
                'No residual risk rating after controls applied',
                'Competencies, cards and training records missing or expired',
                'No COSHH assessment where substances are used',
                'Emergency and rescue arrangements absent or generic',
                "No reference to the principal contractor's site rules or phase plan",
                'Plant and equipment listed without inspection or certification evidence',
                'Unsigned, undated, or no revision control on the document',
                'Interfaces with other trades and site logistics not addressed',
                'Named supervisor and lines of responsibility unclear',
              ].map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-rose-900">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-slate-800">
                <strong>The cost of a rejection is rarely the document.</strong> It is the labour
                standing down, the programme slipping, and the main contractor forming a view about
                whether you are worth engaging next time. Getting it right at the second attempt
                matters more than the fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 18-point standard */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Written to the standard used to review them
          </h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Every document produced here is quality assured against the same 18-point compliance
            standard applied when reviewing submissions on behalf of principal contractors. That is
            the difference between a document that reads well and a document that clears review —
            it is written by someone who has spent years deciding whether submissions were good
            enough.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Site specificity',
                items: [
                  'Actual site address, programme dates and working hours',
                  'Access, egress and delivery routes as they exist on that job',
                  'Buried and overhead services identified and addressed',
                  'Interfaces with other trades and site logistics',
                  'Neighbouring occupiers, boundaries and public interface',
                ],
              },
              {
                title: 'Regulatory compliance',
                items: [
                  'CDM 2015 contractor duties addressed',
                  'MHSWR 1999 suitable and sufficient risk assessment',
                  'Activity-specific regulations applied (LOLER, WAH, COSHH, PUWER)',
                  'Principal contractor site rules and phase plan referenced',
                  'Statutory inspection and certification evidence cited',
                ],
              },
              {
                title: 'Risk assessment quality',
                items: [
                  'All foreseeable hazards identified for the actual activity',
                  'Controls proportionate, workable and specific',
                  'Initial and residual risk ratings shown',
                  'Vulnerable persons and third parties considered',
                  'Stop-work triggers and weather limits stated',
                ],
              },
              {
                title: 'Method workability',
                items: [
                  'Step-by-step sequence that matches how work is really done',
                  'Every control from the risk assessment carried into the method',
                  'Plant, equipment and materials specified with certification',
                  'Named supervision and clear lines of responsibility',
                  'Emergency, rescue and first aid arrangements',
                  'Signed, dated and under revision control',
                ],
              },
            ].map((section) => (
              <div key={section.title} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{section.title}</h3>
                <ul className="space-y-3 text-slate-600">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three ways in */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Three ways to use this service</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Every engagement is fixed-price and agreed before work starts. Send the scope and you
            will have a quote the same day.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-amber-400 p-8 rounded-xl relative bg-amber-50/40">
              <div className="absolute -top-3 left-6 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                Most urgent
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3 mt-2">Rejection recovery</h3>
              <p className="text-slate-600 mb-4">
                Your RAMS has been returned by the principal contractor and work cannot start. Send
                the document and their comments — we diagnose why it failed and rewrite it to be
                accepted.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Written diagnosis of every rejection point</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Full rewrite against your site information</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Resubmission support until accepted</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />We can deal with the reviewer directly</li>
              </ul>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Pre-submission review</h3>
              <p className="text-slate-600 mb-4">
                You have a document but you are not confident it will pass. We review it against the
                18-point standard and return written findings so you can fix it in private.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Lowest-cost option</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Findings you can action yourself</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Protects your standing with the main contractor</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Upgrade to a full rewrite if needed</li>
              </ul>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Written from scratch</h3>
              <p className="text-slate-600 mb-4">
                No document yet, or the activity is complex, high-risk or unfamiliar. We write the
                full RAMS package from your scope and site information.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Risk assessment and method statement as one package</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />COSHH assessments where substances are used</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Issued in your branding, under revision control</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Lifting operations planned by a CPCS A61 AP</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">How it works — and how fast</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl">
            From a rejected document to an accepted one, typically inside 48 working hours.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Send it over',
                desc: 'Email the rejected document, the reviewer’s comments and whatever site information you hold. If you have nothing yet, send the scope of works.',
                badge: '5-min job',
              },
              {
                step: '2',
                title: 'Diagnosis',
                desc: 'We establish exactly why it failed and what the principal contractor needs to see. If anything is missing we tell you before we start writing.',
                badge: 'Same day',
              },
              {
                step: '3',
                title: 'Written & QA’d',
                desc: 'The document is written site-specific, then run through the full 18-point compliance standard before it leaves us. You receive it ready to submit.',
                badge: '24–48 hrs',
              },
              {
                step: '4',
                title: 'Until accepted',
                desc: 'If further comments come back, we address them. Resubmission support is included in the fee — we are not finished until the document is accepted.',
                badge: 'No extra charge',
              },
            ].map((item) => (
              <div key={item.step} className="relative bg-slate-800/50 p-6 rounded-xl border border-slate-700">
                <div className="absolute -top-3 left-6 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                  Step {item.step}
                </div>
                <h3 className="font-semibold text-white mt-2 mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm mb-4">{item.desc}</p>
                <div className="inline-flex items-center gap-1 text-xs text-amber-400 font-semibold">
                  <Clock className="w-3 h-3" />
                  {item.badge}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-slate-300 italic">
            Work already stood down? Call{' '}
            <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">
              07803 808093
            </a>{' '}
            rather than emailing — same-day turnaround is often possible.
          </p>
        </div>
      </section>

      {/* Trades covered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Trades and activities covered</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            Lifting operations are a specialism, not a limit. Method statements and risk assessments
            are written across construction activities.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              'Groundworks & excavation',
              'Demolition & soft strip',
              'Steel erection',
              'Cladding & envelope',
              'Roofing',
              'Concrete works',
              'Mechanical & electrical',
              'Temporary works',
              'Working at height',
              'Confined spaces',
              'Plant & vehicle operations',
              'Lifting operations',
              'Site logistics & deliveries',
              'Scaffolding interface',
              'Asbestos-aware works',
              'Fit-out & finishes',
            ].map((trade) => (
              <span
                key={trade}
                className="bg-slate-100 border border-slate-200 rounded-xl px-4 py-2 text-slate-700 text-sm font-medium"
              >
                {trade}
              </span>
            ))}
          </div>
          <p className="mt-8 text-slate-700">
            Lifting operations RAMS are produced by a CPCS A61 Appointed Person and can be paired
            with a full{' '}
            <Link href="/services/lift-plans" className="text-amber-600 hover:text-amber-700 underline">
              LOLER compliant lift plan
            </Link>
            . For background see our guide to{' '}
            <Link
              href="/blog/lifting-method-statements-rams-guide"
              className="text-amber-600 hover:text-amber-700 underline"
            >
              lifting method statements and RAMS
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Who uses this */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Who uses this service?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Subcontractors</h3>
              <p className="text-slate-600 mb-4">
                You are good at the work but the paperwork keeps bouncing, and every rejection costs
                you days you cannot recover.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Documents that clear review first time</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Labour on site instead of standing down</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Reputation protected with the main contractor</li>
              </ul>
            </div>

            <div className="border border-slate-200 bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Small and growing contractors</h3>
              <p className="text-slate-600 mb-4">
                No in-house health and safety resource, but tier 1 clients expect tier 1 paperwork
                from day one.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Competent-person capability without a salary</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Documents issued in your own branding</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Credibility on PQQs and prequalification</li>
              </ul>
            </div>

            <div className="border border-slate-200 bg-white p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Principal contractors</h3>
              <p className="text-slate-600 mb-4">
                Drowning in subcontractor submissions of wildly varying quality, and needing a
                consistent, defensible standard applied to all of them.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Independent review against a fixed standard</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Documented due diligence under CDM 2015</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Retained arrangements available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What you receive</h2>
          <p className="text-lg text-slate-600 mb-10 max-w-3xl">
            A complete, submission-ready package in editable and PDF format, issued in your own
            branding where you want it.
          </p>

          <div className="bg-slate-50 p-8 rounded-xl">
            <ul className="grid md:grid-cols-2 gap-4 text-slate-700">
              {[
                'Site-specific risk assessment with initial and residual risk ratings',
                'Step-by-step method statement matching the actual sequence of work',
                'COSHH assessments where substances are used',
                'Plant, equipment and lifting accessory schedules with certification references',
                'Named personnel, competencies and supervision arrangements',
                'Emergency, rescue and first aid arrangements',
                'Revision control, signature blocks and issue record',
                'Author and reviewer identified separately on the face of the document',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <FileCheck className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            Method statement &amp; RAMS FAQs
          </h2>

          <div className="space-y-6 max-w-4xl">
            {PAGE_FAQS.map((faq) => (
              <div key={faq.q} className="bg-white p-6 rounded-xl border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inline quick-quote form */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <figure className="mb-8 bg-slate-800/40 border-l-4 border-amber-400 rounded-r-2xl p-6">
            <blockquote className="text-gray-300 italic leading-relaxed">
              &ldquo;I have always found the service they provide to be first class in regards of
              appraising lifting plans to ensure that lifts on site are designed, planned, and fit
              for purpose. The service is always concise and helpful for the issuer and the
              turnaround is always prompt&hellip; I would have no hesitation in recommending RMT
              Solutions.&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="text-white font-semibold">Kevin Duffy</span>
              <span className="text-gray-400"> — Senior Project Manager, Caddick Construction</span>
              <a href="/testimonials" className="text-amber-400 hover:text-amber-300 ml-2">
                More testimonials →
              </a>
            </figcaption>
          </figure>
          <InlineQuoteForm
            serviceName="Method Statements & RAMS"
            heading="Send us your RAMS for a same-day quote"
          />
        </div>
      </section>

      <RelatedServices currentSlug="method-statements-rams" />

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Rejected RAMS holding up the job?</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Send the document and the reviewer&apos;s comments. You will have a fixed-price quote
            the same day and a rewritten document inside 48 working hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-400 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request a Quote
            </Link>
            <a
              href="tel:+447803808093"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              07803 808093
            </a>
          </div>
        </div>
      </section>

      {/* Available across the UK */}
      <section className="py-16 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              Available across the UK
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Method statements and risk assessments are produced remotely from Warrington and
              delivered UK-wide. Site visits are arranged where the activity requires it. Pick your
              nearest city or call{' '}
              <a href="tel:+447803808093" className="text-amber-400 hover:text-amber-300 underline">
                07803 808093
              </a>{' '}
              to discuss your project.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              ['warrington', 'Warrington'],
              ['manchester', 'Manchester'],
              ['liverpool', 'Liverpool'],
              ['leeds', 'Leeds'],
              ['birmingham', 'Birmingham'],
              ['london', 'London'],
              ['bristol', 'Bristol'],
              ['glasgow', 'Glasgow'],
              ['edinburgh', 'Edinburgh'],
            ].map(([slug, label]) => (
              <Link
                key={slug}
                href={`/locations/${slug}`}
                className="bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/50 hover:border-amber-500/40 rounded-xl px-4 py-3 text-gray-200 hover:text-amber-400 font-medium text-sm transition"
              >
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
