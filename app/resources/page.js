import Link from 'next/link'
import { FileText, AlertTriangle, HelpCircle, BookOpen, Scale, Users } from 'lucide-react'
import SectionHeader from '@/components/ui/SectionHeader'

export const metadata = {
  title: 'Resources | LOLER Guidance & Lift Planning Information',
  description: 'Free LOLER guidance, lift planning resources, and industry information from RMT Solutions. Learn about lift plan requirements, Appointed Person roles, and compliance.',
}

export default function ResourcesPage() {
  const resources = [
    {
      icon: FileText,
      category: 'Guide',
      title: 'How to Write a LOLER Compliant Lift Plan',
      description: 'Step-by-step guide to creating lift plans that meet LOLER 1998 requirements. Covers risk assessment, method statements, and documentation.',
      readTime: '10 min read',
    },
    {
      icon: Scale,
      category: 'Compliance',
      title: 'Understanding LOLER 1998 Requirements',
      description: 'Your legal obligations when planning and supervising lifting operations in the UK. What the regulations require and how to comply.',
      readTime: '8 min read',
    },
    {
      icon: HelpCircle,
      category: 'FAQ',
      title: 'When Do You Need an Appointed Person?',
      description: 'Clarifying when an Appointed Person is legally required for your lifting operations and what their responsibilities include.',
      readTime: '5 min read',
    },
    {
      icon: AlertTriangle,
      category: 'Safety',
      title: 'Common Lift Planning Mistakes to Avoid',
      description: 'Learn from common errors we see in lift plans submitted for review. Avoid delays and ensure your plans pass first time.',
      readTime: '7 min read',
    },
    {
      icon: BookOpen,
      category: 'Reference',
      title: 'BS 7121 Safe Use of Cranes Overview',
      description: 'An introduction to the BS 7121 series of standards and how they apply to crane operations in the UK.',
      readTime: '6 min read',
    },
    {
      icon: Users,
      category: 'Roles',
      title: 'Crane Supervisor vs Appointed Person',
      description: 'Understanding the difference between these two key roles in lifting operations and when each is required.',
      readTime: '5 min read',
    },
  ]

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

  return (
    <>
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
              <article
                key={resource.title}
                className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50 card-hover"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl flex items-center justify-center">
                    <resource.icon className="w-6 h-6 text-amber-400" />
                  </div>
                  <span className="text-gray-500 text-sm">{resource.readTime}</span>
                </div>
                <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
                  {resource.category}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-2 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-400 text-sm">{resource.description}</p>
              </article>
            ))}
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
