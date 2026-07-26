import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle,
  MapPin,
  ShieldCheck,
  ClipboardCheck,
  Building2,
  Home,
} from 'lucide-react'

const SITE = 'https://www.rmtsafetysolutions.com'
const URL = `${SITE}/case-studies/rivington-chase-horwich-loco-works`
const HERO_IMAGE = '/images/rivington-chase-horwich-hero.jpg'
const AERIAL_IMAGE = '/images/rivington-chase-horwich-aerial.jpg'

// Paste the YouTube video ID here after uploading (the part after "watch?v=").
// While this is empty the page shows the aerial still in place of the embed,
// so the page is never broken. Set it, commit and push to switch on the video.
const VIDEO_ID = 'SWiyDu49WyM'

export const metadata = {
  title: { absolute: 'Rivington Chase, Horwich — Lift Planning | RMT Solutions' },
  description:
    'Appointed Person and independent lift plan reviews for Caddick Construction at Rivington Chase, Horwich — 116 homes on the former Horwich Loco Works site.',
  keywords: [
    'Rivington Chase Horwich',
    'Horwich Loco Works regeneration',
    'Caddick Construction Horwich',
    'lift plan reviews Bolton',
    'Appointed Person Greater Manchester',
    'affordable housing lift planning',
    'BS 7121 LOLER lift plan',
    'Bolton at Home',
    'Irwell Valley Homes',
    'crane and excavator lift plans',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Rivington Chase, Horwich — Lift Planning Case Study',
    description:
      'RMT Solutions has supported Caddick Construction with Appointed Person duties and independent lift plan reviews at Rivington Chase, Horwich — 116 affordable homes on the former Horwich Locomotive Works.',
    url: URL,
    siteName: 'RMT Solutions - Lift Planning Specialists',
    type: 'article',
    images: [
      {
        url: `${SITE}${HERO_IMAGE}`,
        width: 1920,
        height: 1080,
        alt: "Aerial drone view of Caddick Construction's Rivington Chase development on the former Horwich Loco Works, Horwich",
      },
    ],
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Rivington Chase, Horwich — Lift Planning on the Former Horwich Loco Works',
  description:
    'RMT Solutions supports Caddick Construction with Appointed Person duties, independent crane and excavator lift plan reviews against BS 7121, LOLER 1998 and ISO 10567, and site-specific lift plans at Rivington Chase, Horwich — 116 affordable homes for Bolton at Home and Irwell Valley Homes on the former Horwich Locomotive Works, part of a wider £262m regeneration.',
  image: {
    '@type': 'ImageObject',
    url: `${SITE}${HERO_IMAGE}`,
    width: 1920,
    height: 1080,
    caption:
      "Aerial drone view of Caddick Construction's Rivington Chase development, former Horwich Loco Works, Horwich",
  },
  about: 'Appointed Person duties and lift plan reviews for an affordable housing development',
  datePublished: '2026-06-03',
  dateModified: '2026-06-03',
  author: { '@type': 'Organization', name: 'RMT Solutions Ltd', url: SITE },
  publisher: {
    '@type': 'Organization',
    name: 'RMT Solutions Ltd',
    url: SITE,
    logo: { '@type': 'ImageObject', url: `${SITE}/images/rmt-logo-publisher.png` },
  },
  contentLocation: {
    '@type': 'Place',
    name: 'Rivington Chase, former Horwich Loco Works, Horwich',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Horwich',
      addressRegion: 'Bolton, Greater Manchester',
      addressCountry: 'GB',
    },
  },
  isPartOf: {
    '@type': 'CollectionPage',
    name: 'Lift Planning Case Studies',
    url: `${SITE}/case-studies`,
  },
  mainEntityOfPage: URL,
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
    { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SITE}/case-studies` },
    { '@type': 'ListItem', position: 3, name: 'Rivington Chase, Horwich', item: URL },
  ],
}

export default function RivingtonChaseCaseStudyPage() {
  const factSheet = [
    { label: 'Project', value: 'Rivington Chase, former Horwich Loco Works' },
    { label: 'Location', value: 'Horwich, Bolton, Greater Manchester' },
    { label: 'Main contractor', value: 'Caddick Construction' },
    { label: 'Clients', value: 'Bolton at Home · Irwell Valley Homes' },
    { label: 'Scheme', value: '116 affordable homes · part of £262m regeneration' },
    { label: 'RMT role', value: 'Appointed Person · lift plan reviews · lift plans' },
  ]

  const support = [
    {
      Icon: ShieldCheck,
      title: 'Appointed Person & lifting advice',
      body: 'Acting as Appointed Person and providing day-to-day lifting advice so operations stay safe and the programme keeps moving.',
    },
    {
      Icon: ClipboardCheck,
      title: 'Independent lift plan reviews',
      body: 'Reviewing the crane and excavator lift plans against BS 7121, LOLER 1998 and ISO 10567 — with clear findings before work proceeds.',
    },
    {
      Icon: Home,
      title: 'Site-specific lift plans',
      body: 'Writing clear, site-specific lift plans the crews can actually work to, matched to the conditions and equipment on the ground.',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900">
          <Image
            src={HERO_IMAGE}
            alt="Aerial drone photograph of Caddick Construction's Rivington Chase development at the former Horwich Loco Works, Horwich — new affordable homes under construction"
            fill
            priority
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 construction-pattern" />
          <div className="absolute inset-0 grid-bg" />
        </div>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="text-sm text-gray-400 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-400 transition">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/case-studies" className="hover:text-amber-400 transition">Case Studies</Link>
              <span className="mx-2">/</span>
              <span className="text-gray-300">Rivington Chase, Horwich</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
                Appointed Person &amp; Lift Plan Reviews
              </span>
              <span className="inline-flex items-center text-gray-400 text-sm">
                <MapPin className="w-4 h-4 mr-1.5 text-amber-400" />
                Former Horwich Loco Works, Horwich
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Rivington Chase, Horwich —{' '}
              <span className="gradient-text">Lifting Operations Support</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              RMT Solutions has supported{' '}
              <strong className="text-white">Caddick Construction</strong> on the lifting side of
              Rivington Chase, Horwich — 116 affordable homes for Bolton at Home and Irwell Valley
              Homes, built on the former Horwich Locomotive Works as part of a wider £262m
              regeneration.
            </p>
          </div>
        </div>
      </section>

      {/* Fact sheet */}
      <section className="py-12 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {factSheet.map((item) => (
              <div key={item.label}>
                <div className="text-amber-400 text-xs font-semibold tracking-widest uppercase mb-1">
                  {item.label}
                </div>
                <div className="text-white font-medium">{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video / aerial */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              On Site
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              A view over Rivington Chase from the air
            </h2>
            <p className="text-gray-300 leading-relaxed">
              The former Horwich Loco Works is a site with real history — and this regeneration is
              bringing much-needed homes back to the area. The footage below shows the scale of the
              scheme as it takes shape.
            </p>
          </div>
          {VIDEO_ID ? (
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-700/50">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${VIDEO_ID}`}
                title="Rivington Chase, Horwich — aerial site tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative aspect-video rounded-3xl overflow-hidden border border-slate-700/50">
              <Image
                src={AERIAL_IMAGE}
                alt="Aerial drone view of the Rivington Chase affordable housing development, former Horwich Loco Works, Horwich"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </section>

      {/* How we supported */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              The Support
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              How RMT supported Caddick on the lifting side
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We have been pleased to support Caddick from the outset. In practice, that has meant
              three things — keeping operations safe and on programme, scrutinising the documentation
              independently, and producing plans the crews can actually work to.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {support.map((s) => (
              <div key={s.title} className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
                <div className="w-14 h-14 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <s.Icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Context / heritage */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[420px] rounded-3xl overflow-hidden border border-slate-700/50">
              <Image
                src={AERIAL_IMAGE}
                alt="Rows of new affordable homes at Rivington Chase, Horwich, with the heritage Loco Works buildings beyond"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
                The Project
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
                116 affordable homes on a site with real history
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Caddick Construction is delivering 116 affordable homes at Rivington Chase on behalf
                of Bolton at Home and Irwell Valley Homes. The development sits on the former Horwich
                Locomotive Works and forms part of a wider £262m regeneration bringing new homes back
                to the area.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Good lifting planning is the work that quietly keeps a site safe and on programme. We
                provide{' '}
                <Link href="/services/appointed-person" className="text-amber-400 hover:text-amber-300 underline">
                  Appointed Person
                </Link>{' '}
                cover,{' '}
                <Link href="/services/lift-plan-checking" className="text-amber-400 hover:text-amber-300 underline">
                  independent lift plan checking
                </Link>{' '}
                and{' '}
                <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 underline">
                  site-specific lift plans
                </Link>{' '}
                — and it is a privilege to do it alongside a team that takes it as seriously as
                Caddick does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What every plan is checked against */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
              The Review
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              What the crane and excavator lift plans are checked against
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Crane and excavator selection, configuration and utilisation against the heaviest pick',
              'Ground bearing pressures, outrigger or track loads and mat / pad sizing',
              'Object-handling criteria for excavator lifts — RCI, check valves and load chart (ISO 10567)',
              'Rigging arrangements, lifting accessories and below-the-hook certification',
              'Exclusion zones and segregation from following trades and the public realm',
              'Wind limits, weather criteria and stop-work triggers',
              'Slinger / signaller and Appointed Person arrangements against BS 7121',
              'RAMS, permits and LOLER 1998 documentation against the approved plan',
            ].map((check) => (
              <div
                key={check}
                className="flex items-start bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-2xl p-6 border border-slate-700/50"
              >
                <CheckCircle className="w-6 h-6 text-amber-400 mr-4 flex-shrink-0 mt-0.5" />
                <p className="text-gray-300">{check}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcome / related */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Outcome
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Lifting that quietly keeps the site safe and on programme
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            None of this is glamorous, and that is rather the point. By combining an Appointed Person
            on call, independent review of every crane and excavator lift plan, and clear
            site-specific plans, the lifting operations at Rivington Chase are planned, scrutinised
            and documented against{' '}
            <Link href="/blog/what-is-bs-7121-complete-guide" className="text-amber-400 hover:text-amber-300 underline">
              BS 7121
            </Link>{' '}
            and{' '}
            <Link href="/blog/what-is-loler-complete-guide" className="text-amber-400 hover:text-amber-300 underline">
              LOLER 1998
            </Link>{' '}
            before work proceeds.
          </p>
          <p className="text-gray-300 leading-relaxed">
            This is the kind of work we deliver for contractors across the North West — including{' '}
            <Link href="/services/excavator-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
              excavator lift plans
            </Link>
            ,{' '}
            <Link href="/services/mobile-crane-lift-plans" className="text-amber-400 hover:text-amber-300 underline">
              mobile crane lift plans
            </Link>{' '}
            and{' '}
            <Link href="/services/lifting-operations-audit" className="text-amber-400 hover:text-amber-300 underline">
              lifting operations audits
            </Link>
            . See our other Caddick reference work in the{' '}
            <Link href="/case-studies/caddick-tawd-valley-junction-4" className="text-amber-400 hover:text-amber-300 underline">
              Tawd Valley Junction 4 case study
            </Link>
            .
          </p>

          <div className="mt-10 flex flex-wrap gap-2">
            {[
              'Caddick Construction',
              'Rivington Chase',
              'Horwich Loco Works',
              'Horwich',
              'Bolton',
              'Greater Manchester',
              'Bolton at Home',
              'Irwell Valley Homes',
              'Affordable housing',
              'Appointed Person',
              'BS 7121',
              'LOLER 1998',
            ].map((tag) => (
              <span
                key={tag}
                className="bg-slate-800/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-xs text-gray-500 leading-relaxed">
            Aerial drone footage and stills captured by RMT Solutions. Published with the agreement of
            the parties involved.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 mx-auto bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6">
            <Building2 className="w-7 h-7 text-amber-400" />
          </div>
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Lifting operations coming up?
          </h2>
          <p className="text-gray-400 text-xl mb-10">
            Whether you want a second pair of eyes on the plans, or someone to write them and act as
            your Appointed Person, I&apos;m always happy to talk.
          </p>
          <Link href="/contact" className="btn-primary inline-flex items-center">
            Discuss Your Project
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  )
}
