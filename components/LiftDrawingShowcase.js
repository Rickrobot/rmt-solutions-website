import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { liftDrawingExamples } from '@/lib/liftDrawingExamples'

export default function LiftDrawingShowcase() {
  return (
    <section aria-labelledby="drawing-showcase-heading" className="py-20 bg-slate-900 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">See our drawing examples</p>
        <h2 id="drawing-showcase-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">Lift planning, made clear</h2>
        <p className="text-gray-300 text-lg max-w-3xl mb-10">Explore RMT lift plan drawings for steel erection, excavator lifting and transformer installation. See how the proposed lifting arrangement, working area and rigging are presented.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {liftDrawingExamples.map((example) => (
            <Link key={example.id} href={`${example.href}#drawing-examples`} className="group rounded-2xl overflow-hidden bg-slate-950 border border-slate-700 hover:border-amber-400 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400">
              <div className="bg-white p-2">
                <Image src={example.drawings[0].src} alt={example.drawings[0].alt} width={2382} height={1684} sizes="(max-width: 767px) 100vw, 33vw" className="w-full h-auto" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-white mb-3">{example.label}</h3>
                <p className="text-gray-400 leading-relaxed mb-5">{example.summary}</p>
                <span className="inline-flex items-center gap-2 text-amber-400 font-semibold">View drawing examples <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
