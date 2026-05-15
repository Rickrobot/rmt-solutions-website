import Image from 'next/image'
import Link from 'next/link'
import { Clock, ShieldCheck, FileCheck, PhoneCall, CheckCircle2, X, ArrowRight } from 'lucide-react'
import InlineQuoteForm from '@/components/InlineQuoteForm'
import RelatedServices from '@/components/RelatedServices'

export const metadata = {
  title: 'Lift Plan Checking Service UK | Independent AP Review',
  description: 'Independent CPCS Appointed Person review of subcontractor lift plans. LOLER & BS 7121 check, Category A/B determination, 24–48 hour turnaround.',
  keywords: 'lift plan checking service, lift plan review, appointed person lift plan check, LOLER lift plan review, independent lift plan verification, category A lift plan, category B lift plan',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/services/lift-plan-checking',
  },
  openGraph: {
    title: 'Lift Plan Checking Service UK | Independent AP Review',
    description: 'Independent CPCS Appointed Person review of subcontractor lift plans. LOLER & BS 7121 compliance check, 24–48 hour turnaround.',
    url: 'https://www.rmtsafetysolutions.com/services/lift-plan-checking',
    type: 'website',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Lift Plan Checking Service',
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
    'Independent CPCS Appointed Person review of subcontractor lift plans. Verifies LOLER and BS 7121 compliance, technical accuracy, and site suitability. Category A or Category B determination delivered within 24–48 hours.',
  areaServed: { '@type': 'Country', name: 'United Kingdom' },
  serviceType: 'Lift Plan Review',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    priceCurrency: 'GBP',
    description: 'Per-plan, retained-service or on-site checking. Quote on application.',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is lift plan checking?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lift plan checking is the independent review of a lift plan prepared by another party — typically a subcontractor, crane hire firm, or third-party Appointed Person — to confirm it is technically correct, LOLER and BS 7121 compliant, and fit for the specific site conditions. The output is a written review with findings, recommendations, and a Category A (acceptable) or Category B (not acceptable as submitted) determination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do lift plans get rejected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common reasons lift plans get rejected are inaccurate or unverified load weights, wrong machine configuration on the load chart, capacity utilisation above the project threshold, missing thorough examination certificates, no site-specific hazard assessment, incorrect rigging calculations or sling angles, missing personnel competencies, and inadequate consideration of ground bearing pressure.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does lift plan checking take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard lift plan checking turnaround is 24 to 48 hours from receipt of a complete plan. Complex plans involving tandem lifts, contract lifts, or significant site-specific risks may take 3 to 5 working days. Same-day reviews can be arranged for urgent operations.',
      },
    },
    {
      '@type': 'Question',
      name: "What's the difference between lift plan checking and lift plan review?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The terms are often used interchangeably. Both involve an independent competent person assessing a lift plan for technical compliance and site suitability. Some clients reserve 'review' for a higher-level acceptance check by their Appointed Person, and 'checking' for the detailed technical line-by-line audit. Either way, the deliverable is a written record with findings and a clear pass/fail determination.",
      },
    },
    {
      '@type': 'Question',
      name: 'What does Category A and Category B mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Category A means the lift plan is acceptable as submitted and the lift can proceed. Category B means the plan is not acceptable as submitted — the report sets out specific findings and what must be amended before the lift can go ahead. The submitter then revises and resubmits for verification, which is included in the original check fee for straightforward issues.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents do you need to check a lift plan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete submission includes the lift plan drawing, risk assessment, method statement, load chart extract for the proposed configuration, equipment thorough examination certificates, lifting accessories certification, and named personnel with their CPCS or equivalent competencies. Missing documents are themselves a finding — we will list what is needed to complete the review.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you independent of the crane companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We are not part of any crane hire company, plant supplier or contractor group, so submissions from any supplier are reviewed objectively on their merits. Some crane companies produce excellent documentation; others routinely fall short. The check identifies which is which without fear or favour.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer a retained checking service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. For larger projects with frequent submissions or multi-site operations we offer a retained service at an agreed monthly fee covering unlimited lift plan checks, with an SLA on turnaround. This is normally more cost-effective than per-plan checking once you are receiving more than four to six plans a month.',
      },
    },
  ],
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
      name: 'Lift Plan Checking Service',
      item: 'https://www.rmtsafetysolutions.com/services/lift-plan-checking',
    },
  ],
}

export default function LiftPlanCheckingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/services/lift-plan-checking-clipboard-inspection.webp"
            alt="Construction professionals reviewing lift plan documentation - Independent lift plan checking service"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
            For Tier 1 Contractors · CPCS Appointed Person A61 · LOLER 1998
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Lift Plan Checking Service</h1>
          <p className="text-xl text-slate-300 max-w-3xl mb-8">
            Independent Appointed Person review of lift plans submitted by subcontractors, crane
            hire companies, and suppliers. Every lifting operation on your site, LOLER and BS 7121
            compliant, before work begins.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="text-sm">24-hour turnaround</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <FileCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Cat A / Cat B determination</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full border border-white/20">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-sm">Independent &amp; impartial</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
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

      {/* Trust strip */}
      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-900">35+</div>
              <div className="text-sm text-slate-600">Years of construction experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">CPCS A61</div>
              <div className="text-sm text-slate-600">Appointed Person, current card</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">NEBOSH</div>
              <div className="text-sm text-slate-600">Construction Diploma · CertIOSH</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-900">UK-wide</div>
              <div className="text-sm text-slate-600">Remote and on-site coverage</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You Need This */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why independent lift plan checking matters</h2>
          <div className="prose prose-lg max-w-none text-slate-600 mb-8">
            <p>
              As a principal contractor under CDM 2015 you have duties to ensure safe systems of
              work on your site — including the lifting operations carried out by your
              subcontractors and suppliers. The question is: how do you know the lift plans you
              receive are actually adequate?
            </p>
            <p>
              A lift plan that looks professional can still contain fundamental errors. Independent
              checking catches them before they become incidents. We&apos;ve produced reviews on
              thousands of plans — these are the failure patterns we see most often:
            </p>
          </div>

          <div className="bg-rose-50 border border-rose-200 p-8 rounded-xl mb-8">
            <h3 className="text-xl font-semibold text-rose-900 mb-4">Common problems we find</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Incorrect capacity readings from load charts',
                'Ground bearing not properly assessed',
                'Wrong crane configuration specified',
                'Risk assessments missing key hazards',
                "Method statements that don't match the lift plan",
                "Rigging arrangements that won't work as drawn",
                'Lifting accessories undersized or wrong WLL',
                'No CDM-relevant interface check (services, exclusions)',
              ].map((problem) => (
                <div key={problem} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="text-rose-900">{problem}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 font-medium text-lg">
            Independent checking is the cheapest insurance you can buy on a lift. For deeper
            background see our blog on{' '}
            <Link href="/blog/lift-plan-checking-what-gets-checked-and-why-plans-get-rejected" className="text-amber-600 hover:text-amber-700 underline">
              what gets checked and why plans get rejected
            </Link>
            .
          </p>
        </div>
      </section>

      {/* What We Review */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What we review</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Our review runs the full 17-point methodology against BS 7121, LOLER 1998, ISO 10567
            and the project&apos;s own standing rules. Every check returns a written finding.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Technical accuracy',
                items: [
                  'Crane / equipment capacity verified against manufacturer data',
                  'Load weight and centre of gravity correctly assessed',
                  'Radii and lift heights properly calculated',
                  'Configuration (boom length, counterweight, hitch) appropriate',
                  'Ground bearing loads calculated and addressed',
                  'Percentage utilisation against project threshold',
                ],
              },
              {
                title: 'Regulatory compliance',
                items: [
                  'LOLER 1998 Regulation 8 met',
                  'BS 7121 principles applied',
                  'ISO 10567 used correctly for excavator duties',
                  'Equipment thorough examination referenced and current',
                  'Lifting accessories properly specified with WLL evidence',
                  'Personnel competencies named and verified',
                ],
              },
              {
                title: 'Risk assessment quality',
                items: [
                  'All foreseeable hazards identified',
                  'Site-specific factors (services, edges, neighbours)',
                  'Control measures adequate, proportionate and workable',
                  'Residual risk acceptable',
                  'Weather limits and stop conditions clear',
                ],
              },
              {
                title: 'Method statement workability',
                items: [
                  'Step-by-step procedure logical and complete',
                  'Matches the lift plan drawing',
                  'Roles and responsibilities clear (AP, LS, Crane Sup, Op, Slinger)',
                  'Communication arrangements specified',
                  'Emergency and stop-work procedures',
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

      {/* What You Receive */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What you receive</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            A formal written check report — clear status, every finding documented, every required
            amendment listed. Designed to drop straight into your CDM file and to brief the
            submitter without ambiguity.
          </p>

          <div className="bg-slate-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">Possible outcomes</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-100 p-6 rounded-lg">
                <span className="text-emerald-700 font-bold text-lg block mb-2">Category A — Acceptable</span>
                <p className="text-emerald-900 text-sm">
                  Plan is technically correct, compliant and site-suitable. Lift can proceed. Any
                  minor advisory comments are listed for the submitter&apos;s information.
                </p>
              </div>
              <div className="bg-rose-100 p-6 rounded-lg">
                <span className="text-rose-700 font-bold text-lg block mb-2">Category B — Not acceptable</span>
                <p className="text-rose-900 text-sm">
                  Plan must be amended before the lift can go ahead. Each finding is set out with
                  the standard reference and what is required to close it. Resubmission verification
                  is included in the fee.
                </p>
              </div>
            </div>

            <ul className="mt-8 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                Issues found with explanations and BS 7121 / LOLER references
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                Required amendments — what must change for Category A
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                Recommendations — improvements that would strengthen the plan
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                Reviewer name, CPCS A61 card number, and signed sign-off
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">How it works — and how fast</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-3xl">
            Submit a complete plan, get a formal written review with a Category A / Category B
            determination back inside 24 working hours.
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Submission',
                desc: 'You forward the lift plan package — drawing, RA/MS, load chart, equipment certs, accessories certs, named personnel.',
                badge: '5-min job',
              },
              {
                step: '2',
                title: 'Review',
                desc: 'Our CPCS A61 Appointed Person runs the full 17-point methodology against BS 7121, LOLER and project-specific rules.',
                badge: 'Same day',
              },
              {
                step: '3',
                title: 'Report',
                desc: 'Written check report issued — Category A or Category B, every finding documented, amendments listed.',
                badge: '24 hrs',
              },
              {
                step: '4',
                title: 'Re-submission',
                desc: 'If Category B, the submitter revises and resubmits. We verify the amendments — included in the original check fee.',
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
            Complex tandem and contract lifts may take 3–5 working days. Same-day reviews are
            arranged for critical-path operations on request.
          </p>
        </div>
      </section>

      {/* Who Uses This */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Who uses this service?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Tier 1 main contractors</h3>
              <p className="text-slate-600 mb-4">
                Receiving lift plans from multiple subcontractors and suppliers daily. You need
                consistency, defensibility, and zero surprises.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Confidence that lifting operations are properly planned</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Documented due diligence under CDM 2015</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Reduced risk of incidents and HSE intervention</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Consistent standards across all subcontractors</li>
              </ul>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Project managers</h3>
              <p className="text-slate-600 mb-4">
                Signing off lift plans without being a lifting specialist. You need expert backup
                to support your approval decisions.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Expert review behind your approval signature</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Plain-language reports you can act on</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Technical backup when challenging submissions</li>
              </ul>
            </div>

            <div className="border border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Health &amp; Safety managers</h3>
              <p className="text-slate-600 mb-4">
                Responsible for site safety but can&apos;t be expert in every discipline. You need
                a specialist on tap.
              </p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Specialist lift planning expertise on call</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Independent verification of subcontractor competence</li>
                <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />Evidence of robust checking systems for audit</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Good vs Poor */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What separates a good lift plan from a poor one</h2>
          <p className="text-lg text-slate-600 mb-8 max-w-3xl">
            Through thousands of reviews these are the patterns that come up again and again. We
            don&apos;t just check boxes — we assess whether the plan will actually work safely on
            your site.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 p-8 rounded-xl border border-emerald-200">
              <h3 className="text-xl font-semibold text-emerald-900 mb-4">Good lift plans have</h3>
              <ul className="space-y-3 text-emerald-900">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />Clear scale drawings showing equipment position, radii, and load path</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />Verified capacity with specific duty chart references</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />Ground assessment addressing actual site conditions</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />Site-specific risk assessment with proportionate controls</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />Workable method statements that match the drawing</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />Named, competent personnel with current cards</li>
              </ul>
            </div>

            <div className="bg-rose-50 p-8 rounded-xl border border-rose-200">
              <h3 className="text-xl font-semibold text-rose-900 mb-4">Poor lift plans often have</h3>
              <ul className="space-y-3 text-rose-900">
                <li className="flex items-start gap-3"><X className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />Generic content copied without site-specific adaptation</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />Missing calculations or &ldquo;available on request&rdquo;</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />Assumed ground conditions without verification</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />Risk assessments missing obvious hazards</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />Method statements that don&apos;t provide useful guidance</li>
                <li className="flex items-start gap-3"><X className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />Personnel listed without verifiable competencies</li>
              </ul>
            </div>
          </div>

          <p className="mt-8 text-slate-600">
            For more on common rejection patterns see our blog on{' '}
            <Link href="/blog/common-lift-planning-mistakes" className="text-amber-600 hover:text-amber-700 underline">
              common lift planning mistakes
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Service options</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-3xl">
            Three ways to engage — pick whichever fits the shape of your project.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="border-2 border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Per-plan checking</h3>
              <p className="text-slate-500 text-sm mb-4">Quote on application</p>
              <p className="text-slate-600 mb-4">Individual reviews charged per submission. Best for:</p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Occasional checking requirements</li>
                <li>• Specific complex or one-off lifts</li>
                <li>• Projects with few lifting operations</li>
              </ul>
            </div>

            <div className="border-2 border-amber-500 p-8 rounded-xl bg-amber-50 relative">
              <div className="absolute -top-3 left-6 bg-amber-500 text-slate-900 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded">
                Most popular
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2 mt-2">Retained service</h3>
              <p className="text-slate-500 text-sm mb-4">Agreed monthly fee</p>
              <p className="text-slate-600 mb-4">Unlimited lift plan checks at a fixed monthly rate. Best for:</p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Large projects with frequent submissions</li>
                <li>• Multi-site operations</li>
                <li>• Long-term contractor relationships</li>
                <li>• SLA-backed turnaround commitments</li>
              </ul>
            </div>

            <div className="border-2 border-slate-200 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">On-site presence</h3>
              <p className="text-slate-500 text-sm mb-4">Day rate</p>
              <p className="text-slate-600 mb-4">CPCS A61 Appointed Person attending your site. Best for:</p>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Real-time lift plan review</li>
                <li>• Pre-lift briefings</li>
                <li>• Complex operation supervision</li>
                <li>• Lifting operations audits</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/contact" className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center gap-2">
              Discuss the right option for your project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Why contractors send their checking to us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Genuinely independent',
                desc: 'Not part of any crane hire group, plant supplier or subcontractor. Submissions reviewed objectively, every time.',
              },
              {
                title: 'CPCS Appointed Person (A61)',
                desc: 'Reviews carried out by a current CPCS A61 cardholder, meeting the BS 7121-1 competence requirement.',
              },
              {
                title: 'Tier 1 contractor approved',
                desc: 'Trusted on live projects by leading UK contractors including Wates, Caddick and GMI.',
              },
              {
                title: 'NEBOSH Diploma · CertIOSH · MIIRSM · TIFSM',
                desc: 'Construction-specific NEBOSH National Diploma, CertIOSH (Certified IOSH member), MIIRSM and TIFSM behind every finding.',
              },
              {
                title: '17-point methodology',
                desc: 'Structured review (P01–P17) against BS 7121, LOLER 1998 and ISO 10567. No misses, no opinion-driven feedback.',
              },
              {
                title: 'Defensible reports',
                desc: 'Every finding referenced to a standard or project rule. Reports designed to drop into your CDM file and stand up to HSE scrutiny.',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-slate-200 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Lift plan checking FAQs</h2>

          <div className="space-y-6 max-w-4xl">
            {[
              {
                q: 'What is lift plan checking?',
                a: 'Lift plan checking is the independent review of a lift plan prepared by another party — typically a subcontractor, crane hire firm or third-party Appointed Person — to confirm it is technically correct, LOLER and BS 7121 compliant, and fit for the specific site conditions. The output is a written review with findings, recommendations and a Category A (acceptable) or Category B (not acceptable as submitted) determination.',
              },
              {
                q: 'How quickly can you turn a check around?',
                a: 'Standard turnaround is 24–48 working hours from receipt of a complete submission. Urgent same-day reviews are arranged for critical-path operations — let us know when you submit. Complex tandem and contract lifts may take 3–5 working days.',
              },
              {
                q: 'What if a lift plan fails your check (Category B)?',
                a: 'You receive a clear report explaining what is wrong and what is needed to fix it. The subcontractor amends and resubmits. We verify the amendments — included in the original check fee for straightforward issues.',
              },
              {
                q: 'What does Category A and Category B mean?',
                a: 'Category A means the plan is acceptable as submitted and the lift can proceed. Category B means the plan is not acceptable as submitted — every finding is set out with the standard reference and what must change for acceptance.',
              },
              {
                q: 'Why do lift plans get rejected?',
                a: 'The most common reasons are inaccurate or unverified load weights, wrong machine configuration on the load chart, capacity utilisation above the project threshold, missing thorough examination certificates, no site-specific hazard assessment, incorrect rigging or sling angles, missing personnel competencies, and inadequate ground-bearing assessment.',
              },
              {
                q: 'What documents do you need to check a lift plan?',
                a: 'A complete submission includes the lift plan drawing, risk assessment, method statement, load chart extract for the proposed configuration, equipment thorough examination certificates, lifting accessories certification, and named personnel with their CPCS or equivalent competencies. Missing documents are themselves a finding.',
              },
              {
                q: 'Do you check lift plans from all crane companies?',
                a: 'Yes. We are independent of any crane hire company, so submissions from any supplier are reviewed on their merits. Some suppliers produce excellent documentation; others routinely fall short. The check identifies which is which without fear or favour.',
              },
              {
                q: 'Do you offer a retained service?',
                a: 'Yes. For larger projects with frequent submissions or multi-site operations we offer a retained service at an agreed monthly fee covering unlimited checks, with an SLA on turnaround. Normally more cost-effective once you are receiving more than 4–6 plans a month.',
              },
              {
                q: 'What if I disagree with my subcontractor about a lift plan?',
                a: 'We can provide independent assessment and, if needed, explain our findings directly to your subcontractor. Having an independent expert view typically resolves disputes far more efficiently than internal back-and-forth.',
              },
              {
                q: 'Will the check report stand up to HSE scrutiny?',
                a: 'Yes. Each report is signed off by a CPCS A61 Appointed Person, references the relevant standard for every finding, and is designed to drop into your CDM file as evidence of due diligence under CDM 2015 and LOLER 1998.',
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-slate-50 p-6 rounded-xl border border-slate-200">
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
          <InlineQuoteForm
            serviceName="Lift Plan Checking"
            heading="Get a quote for lift plan checking"
          />
        </div>
      </section>

      <RelatedServices currentSlug="lift-plan-checking" />

      {/* CTA */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Send the plan, get the check</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Submit a complete plan, get a formal Category A / Category B determination back inside
            24 working hours.
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
    </>
  )
}
