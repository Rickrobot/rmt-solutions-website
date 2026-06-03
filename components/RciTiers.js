'use client'

import { useEffect, useRef, useState } from 'react'
import { Bell, Gauge, Hand, ArrowRight } from 'lucide-react'

const tiers = [
  {
    badge: 'Tier 1 · legal minimum',
    name: 'Overload warning device',
    sub: "Alarms, doesn't stop the machine",
    lvl: '34%',
    Icon: Bell,
    accent: 'text-slate-400',
    bar: 'bg-slate-500',
    cardDelay: '0.05s',
    barDelay: '0.5s',
  },
  {
    badge: 'Tier 2 · best practice',
    name: 'Rated Capacity Indicator (RCI)',
    sub: 'Live load, radius and height',
    lvl: '67%',
    Icon: Gauge,
    accent: 'text-amber-400',
    bar: 'bg-amber-500',
    cardDelay: '0.35s',
    barDelay: '0.8s',
  },
  {
    badge: 'Tier 3 · proximity work',
    name: 'Rated Capacity Limiter (RCL)',
    sub: 'Physically cuts the motion',
    lvl: '100%',
    Icon: Hand,
    accent: 'text-emerald-400',
    bar: 'bg-emerald-500',
    cardDelay: '0.65s',
    barDelay: '1.1s',
    pulse: true,
  },
]

const css = `
@keyframes rciRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes rciGrow{from{width:0}to{width:var(--lvl)}}
@keyframes rciPulse{0%,100%{opacity:1}50%{opacity:.5}}
.rci-init{opacity:0}
.rci-in{animation:rciRise .6s ease forwards}
.rci-bar{width:0}
.rci-bar-in{animation:rciGrow 1s ease forwards}
.rci-pulse-on{animation:rciPulse 2.2s ease-in-out 1.4s infinite}
@media(prefers-reduced-motion:reduce){
  .rci-init{opacity:1!important}
  .rci-in{animation:none!important}
  .rci-bar,.rci-bar-in{width:var(--lvl)!important;animation:none!important}
  .rci-pulse-on{animation:none!important}
}
`

export default function RciTiers() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ob = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true)
          ob.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  return (
    <div ref={ref} className="mb-10">
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="flex flex-wrap items-stretch justify-center gap-3">
        {tiers.map((t, i) => (
          <div key={t.name} className="flex items-stretch">
            <div
              className={`rci-init bg-slate-900 border border-slate-800 rounded-xl p-5 w-full sm:w-52 ${inView ? 'rci-in' : ''}`}
              style={{ animationDelay: t.cardDelay }}
            >
              <t.Icon
                className={`w-6 h-6 ${t.accent} ${t.pulse ? 'rci-pulse-on' : ''}`}
                aria-hidden="true"
              />
              <p className={`text-xs mt-3 mb-1 ${t.accent}`}>{t.badge}</p>
              <p className="text-white font-medium leading-tight">{t.name}</p>
              <p className="text-slate-400 text-sm mt-1">{t.sub}</p>
              <div className="h-1.5 rounded-full bg-slate-800 mt-3 overflow-hidden">
                <div
                  className={`h-full rounded-full ${t.bar} rci-bar ${inView ? 'rci-bar-in' : ''}`}
                  style={{ '--lvl': t.lvl, animationDelay: t.barDelay }}
                />
              </div>
            </div>
            {i < tiers.length - 1 && (
              <div className="hidden sm:flex items-center px-1 text-slate-600" aria-hidden="true">
                <ArrowRight className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
