import Link from 'next/link'
import { FileText, AlertTriangle, HelpCircle, BookOpen, Scale, Users, ArrowRight, Download } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'Free Lift Plan Templates & UK LOLER Guidance',
  description: 'Free downloadable lift plan templates, risk assessments and UK LOLER guidance for telehandlers, excavators and lorry-loaders. All aligned with BS 7121.',
  alternates: {
    canonical: 'https://www.rmtsafetysolutions.com/resources',
  },
  openGraph: {
    title: 'Free Lift Plan Templates & UK LOLER Guidance',
    description: 'Free downloadable lift plan templates, risk assessments and UK LOLER guidance.',
    url: 'https://www.rmtsafetysolutions.com/resources',
  },
}

export default function ResourcesPage() {
  const resources = [
    {
      icon: FileText,
      category: 'Guide',
      title: 'What is a Lift Plan? The Complete Guide',
      description: 'What a lift plan contains, when one is required under LOLER, who can write one, and how to get it right first time.',
      readTime: '10 min read',
      slug: 'what-is-a-lift-plan',
    },
    {
      icon: HelpCircle,
      category: 'Planning',
      title: 'When Do You Need a Lift Plan?',
      description: 'When a lift plan is legally required, what triggers LOLER compliance, and how to ensure your lifting operations are properly planned.',
      readTime: '6 min read',
      slug: 'when-do-you-need-lift-plan',
    },
    {
      icon: Users,
      category: 'Roles',
      title: 'CPCS Appointed Person: What They Do',
      description: 'Understanding the A61 Appointed Person role in UK construction. What they do, when you need one, and LOLER compliance requirements.',
      readTime: '9 min read',
      slug: 'cpcs-appointed-person-guide',
    },
    {
      icon: AlertTriangle,
      category: 'Safety',
      title: 'Common Lift Planning Mistakes',
      description: 'The most common lift planning mistakes UK contractors make and how to avoid them. Expert advice on LOLER compliance and safety.',
      readTime: '10 min read',
      slug: 'common-lift-planning-mistakes',
    },
    {
      icon: Scale,
      category: 'Compliance',
      title: 'Lift Plan Checking: Why Plans Get Rejected',
      description: 'What actually gets checked during a lift plan review, common rejection reasons, and how to get your plans approved first time.',
      readTime: '12 min read',
      slug: 'lift-plan-checking-what-gets-checked-and-why-plans-get-rejected',
    },
    {
      icon: BookOpen,
      category: 'Equipment',
      title: 'Excavator Lift Plans: Complete Guide',
      description: 'Complete guide to excavator lift plans under LOLER 1998. When a plan is needed, requirements, and compliance.',
      readTime: '8 min read',
      slug: 'excavator-lift-plans-complete-guide',
    },
  ]

  // FAQ JSON-LD — emits structured data for the FAQs below, so they can
  // surface as rich results in Google. The `faqs` array is the single
  // source of truth; the schema mirrors it.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [],
  }

  const faqs = [
    {
      question: 'What is a LOLER compliant lift plan?',
      answer: 'A LOLER compliant lift plan is a documented safe system of work that meets the requirements of the Lifting Operations and Lifting Equipment Regulations 1998. It must include risk assessment, method statement, load calculations, equipment selection, and site layout drawings.',
    },
    {
      question: 'When do I need an Appointed Person?',
      answer: 'An Appointed Person is required when lifting operations involve risk of the load striking a person, specialist knowledge is needed, mobile cranes are used, tandem lifts are required, or lifts occur near power lines or other hazards.',
    },
    {
      question: 'What qualifications does an Appointed Person need?',
      answer: 'There is no specific legal qualification requirement, but the person must be competent. In practice, most clients require CPCS A61 Appointed Person certification as evidence of competence.',
    },
    {
      question: 'How long does it take to produce a lift plan?',
      answer: 'Standard lift plans for excavators, telehandlers, and lorry loaders can be delivered within 24-48 hours. Mobile crane lift plans requiring site visits typically take 3-5 working days.',
    },
    {
      question: 'Do you cover the whole of the UK?',
      answer: 'Yes. We provide lift planning services to contractors across the entire UK. Remote services are available for standard equipment, with site visits included for mobile crane operations.',
    },
  ]

  // Populate the FAQ schema from the same source of truth as the on-page
  // FAQ block, so they cannot drift apart.
  faqJsonLd.mainEntity = faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  }))

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
      { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://www.rmtsafetysolutions.com/resources' },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Resources
            </span>
            <h1 className="font-display text-5xl sm:text-6xl font-bold text-white mb-6">
              LOLER Guidance & <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Free guidance on lift planning, LOLER compliance, and lifting operations in the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Free Templates — surfaces the actual template download pages
          referenced in the title and meta description. Without this block
          the resources page promises "free downloadable lift plan templates"
          but only links to blog articles, which is exactly what the SEO
          audit flagged. */}
      <section className="py-20 bg-slate-950 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              Free Downloads
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">
              Free Lift Plan Templates
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Downloadable LOLER and BS 7121 compliant lift plan templates for
              the equipment we plan most often. Each template ships with an
              example completion, a risk-assessment skeleton and a guidance
              walkthrough from a CPCS Appointed Person.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link
              href="/resources/excavator-lift-plan-templates"
              className="group bg-gradient-to-br from-amber-500/10 to-slate-900 border border-amber-500/30 hover:border-amber-400 rounded-2xl p-8 transition"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-5">
                <Download className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-400 transition mb-3">
                Excavator Lift Plan Template
              </h3>
              <p className="text-gray-400 leading-relaxed mb-5">
                LOLER and ISO 10567 compliant excavator lift plan template
                with worked example, capacity check and exclusion zone layout.
                Suitable for 180° and 360° machines.
              </p>
              <span className="inline-flex items-center text-amber-400 font-semibold">
                Download template
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
              </span>
            </Link>

            <Link
              href="/resources/telehandler-lift-plan-templates"
              className="group bg-gradient-to-br from-amber-500/10 to-slate-900 border border-amber-500/30 hover:border-amber-400 rounded-2xl p-8 transition"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center mb-5">
                <Download className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="font-display text-2xl font-bold text-white group-hover:text-amber-400 transition mb-3">
                Telehandler Lift Plan Template
              </h3>
              <p className="text-gray-400 leading-relaxed mb-5">
                LOLER compliant telehandler lift plan template for suspended
                loads, work platforms and specialist attachments. Includes
                A77C-aligned competence record fields.
              </p>
              <span className="inline-flex items-center text-amber-400 font-semibold">
                Download template
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Articles & Guides"
            title="Lift Planning Resources"
            description="Practical guidance to help you understand lift planning requirements"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <Link
                key={resource.slug}
                href={`/blog/${resource.slug}`}
                className="group block"
              >
                <article className="h-full bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50 card-hover">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center">
                      <resource.icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="text-gray-500 text-sm">{resource.readTime}</span>
                  </div>
                  <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
                    {resource.category}
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-2 mb-3 group-hover:text-amber-400 transition">
                    {resource.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">{resource.description}</p>
                  <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold group-hover:gap-3 transition-all">
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            description="Common questions about lift planning and LOLER compliance"
          />

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50"
              >
                <h3 className="font-display text-lg font-bold text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Need Help With Lift Planning?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Contact us for professional lift planning support from a CPCS Appointed Person.
          </p>
          <Link href="/contact" className="btn-primary">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
