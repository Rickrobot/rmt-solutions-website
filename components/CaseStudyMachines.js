import { Wrench } from 'lucide-react'

// Every machine named in the lift plans RMT wrote or reviewed on a project
// (Nov 2026, Ricky: case studies list all the makes and models so they come
// up when someone searches for that machine). Taken from the plans and RMT's
// reviews on file for each job, never from memory; machines a plan only
// mentioned in passing (brochure families, engines, templates) are left out.
//
// groups: [{ type: 'Mobile cranes', items: ['Liebherr LTM 1060-3.1', ...], note? }]
export const machineKeywords = (groups) => groups.flatMap((g) => g.items.map((i) => i.split(' (')[0]))

export default function CaseStudyMachines({ groups, intro, background = 'bg-slate-900' }) {
  return (
    <section className={`py-24 ${background}`} aria-labelledby="machines-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
            Machines on this project
          </span>
          <h2 id="machines-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Every make and model we planned or reviewed
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {intro ||
              'The lifting equipment named in the lift plans we wrote and reviewed on this project, by make and model. Every duty was checked against that machine’s own published chart.'}
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((g) => (
            <div key={g.type} className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50">
              <div className="flex items-center mb-5">
                <Wrench className="w-5 h-5 text-amber-400 mr-3" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-white">{g.type}</h3>
              </div>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="text-gray-300 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
              {g.note && <p className="mt-4 text-sm text-gray-500 leading-relaxed">{g.note}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
