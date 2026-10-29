import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Database, Ruler, Box, FlaskConical, ClipboardCheck, ShieldCheck } from 'lucide-react'

const liftdraft = {
  src: '/images/our-software/liftdraft-3d-cad.webp',
  alt: 'Screenshot of LiftDraft, RMT Solutions\' own 2D and 3D CAD software, showing a 3D model of a mobile crane on outrigger mats lifting a load on four-leg slings',
  width: 1226,
  height: 853,
}

const renders = [
  {
    src: '/images/our-software/mobile-crane-3d.webp',
    alt: '3D view of a mobile crane on outrigger mats lifting a load on a spreader beam, with the slew and exclusion zones marked, from RMT lift planning software',
    label: 'Mobile cranes',
  },
  {
    src: '/images/our-software/lorry-loader-3d.webp',
    alt: '3D view of a lorry loader lifting a welfare cabin on four-leg slings, with stabilisers deployed on mats, from RMT lift planning software',
    label: 'Lorry loaders',
  },
  {
    src: '/images/our-software/telehandler-3d.webp',
    alt: '3D view of a telehandler carrying a palletised load on forks with the working radius marked, from RMT lift planning software',
    label: 'Telehandlers',
  },
  {
    src: '/images/our-software/excavator-3d.webp',
    alt: '3D model in LiftDraft of a tracked excavator lifting a trench drag box on a four-leg chain from the quick-hitch, with the bucket removed and set down',
    caption: '3D model in LiftDraft, bucket off and the drag box lifted from the quick-hitch',
    label: 'Excavators',
  },
]

const points = [
  {
    icon: Database,
    title: 'Manufacturer duty data',
    text: 'Capacities come from UK and EU manufacturer load charts, read for the exact machine and configuration.',
  },
  {
    icon: Ruler,
    title: '2D drawings to real dimensions',
    text: 'Elevation and plan drawings built from manufacturer dimensions, with the actual rigging gear, radius, slew and exclusion zone drawn in.',
  },
  {
    icon: Box,
    title: '3D modelling',
    text: 'The machine, load and rigging modelled in 3D in LiftDraft, our own CAD system, so the site team can see the lift before the machine arrives.',
  },
  {
    icon: FlaskConical,
    title: 'Tested safety figures',
    text: 'Radius, capacity, utilisation and ground bearing are tested against known results every time the software changes.',
  },
  {
    icon: ClipboardCheck,
    title: '19-point review',
    text: 'Every plan we check runs through our 19-point review against BS 7121 and LOLER, including environmental management.',
  },
  {
    icon: ShieldCheck,
    title: 'Appointed Person sign-off',
    text: 'Nothing leaves RMT until our CPCS A61 Appointed Person has checked it. The software does the arithmetic and the drawing. The AP makes the decisions.',
  },
]

export default function OurSoftware({ compact = false }) {
  if (compact) {
    return (
      <section aria-labelledby="our-software-teaser" className="py-20 bg-slate-950 border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Built in-house</p>
            <h2 id="our-software-teaser" className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
              Our own lift planning software
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              RMT plans and reviews lifts with software we built ourselves: manufacturer duty data, our own 2D and 3D CAD
              system, and full 3D models of mobile cranes, lorry loaders, telehandlers and excavators. Every plan is
              still checked and signed off by our Appointed Person.
            </p>
            <Link href="/services/lift-plans#our-software" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300">
              How we plan and review lifts <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-700">
            <Image src={liftdraft.src} alt={liftdraft.alt} width={liftdraft.width} height={liftdraft.height} sizes="(max-width: 1023px) 100vw, 50vw" className="w-full h-auto" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="our-software" aria-labelledby="our-software-heading" className="py-20 bg-slate-950 border-y border-slate-800 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">Built in-house</p>
        <h2 id="our-software-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">
          How RMT plans and reviews lifts
        </h2>
        <div className="max-w-3xl space-y-4 text-gray-300 text-lg leading-relaxed mb-12">
          <p>
            A lift plan is not something you type a description into and get back. We built our own lift planning
            and review software for mobile cranes, lorry loaders, telehandlers and excavators, so every figure in a
            plan traces back to the manufacturer&apos;s data and every drawing is to the machine&apos;s real dimensions.
            Our drawings are produced in LiftDraft, the 2D and 3D CAD system we built for lift planning.
          </p>
          <p>
            The software does the calculating and the drawing. A qualified Appointed Person does the thinking: the
            site, the ground, the people, the sequence and whether the lift should go ahead at all.
          </p>
        </div>

        <figure className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 mb-6">
          <Image src={liftdraft.src} alt={liftdraft.alt} width={liftdraft.width} height={liftdraft.height} sizes="(max-width: 1279px) 100vw, 1216px" className="w-full h-auto" />
          <figcaption className="px-5 py-3 text-sm text-gray-400">
            <span className="text-white font-semibold">LiftDraft</span>: the 2D and 3D CAD system we built, here modelling a mobile crane lift
          </figcaption>
        </figure>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {renders.map((r) => (
            <figure key={r.src} className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-700">
              <Image src={r.src} alt={r.alt} width={1600} height={900} sizes="(max-width: 639px) 100vw, 50vw" className="w-full h-auto" />
              <figcaption className="px-5 py-3 text-sm text-gray-400">
                <span className="text-white font-semibold">{r.label}</span>: {r.caption || <>3D view from RMT&apos;s lift planning software</>}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-slate-900 border border-slate-700/60 p-6">
              <Icon className="w-7 h-7 text-amber-400 mb-4" aria-hidden="true" />
              <h3 className="font-display text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 leading-relaxed">{text}</p>
            </div>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-8 max-w-3xl">
          3D views are for visual planning and briefing. Capacities, dimensions and ground bearing figures come from
          the manufacturer&apos;s published data for the exact machine and configuration.
        </p>
      </div>
    </section>
  )
}
