'use client'

import { useEffect, useRef, useState } from 'react'
import { FileCheck, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, RefreshCw } from 'lucide-react'

const css = `
@keyframes lcRise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes lcPulse{0%,100%{opacity:1}50%{opacity:.55}}
.lc-init{opacity:0}
.lc-in{animation:lcRise .6s ease forwards}
.lc-pulse-on{animation:lcPulse 2.2s ease-in-out 1.2s infinite}
@media(prefers-reduced-motion:reduce){
  .lc-init{opacity:1!important}
  .lc-in{animation:none!important}
  .lc-pulse-on{animation:none!important}
}
`

export default function LiftCheckFlow() {
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
      { threshold: 0.25 }
    )
    ob.observe(el)
    return () => ob.disconnect()
  }, [])

  const card = (delay) =>
    `lc-init ${inView ? 'lc-in' : ''} bg-white border rounded-xl p-5 shadow-sm w-full sm:w-56`

  return (
    <div ref={ref}>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div className="flex flex-wrap items-center justify-center gap-3">
        {/* Submit */}
        <div className={`${card()} border-slate-200`} style={{ animationDelay: '0.05s' }}>
          <FileCheck className="w-6 h-6 text-slate-500" aria-hidden="true" />
          <p className="text-xs mt-3 mb-1 text-slate-500">Step 1</p>
          <p className="text-slate-900 font-medium leading-tight">Submit a complete plan</p>
          <p className="text-slate-600 text-sm mt-1">Drawing, RAMS, certs, competencies</p>
        </div>

        <div className="hidden sm:flex items-center text-slate-300" aria-hidden="true">
          <ArrowRight className="w-5 h-5" />
        </div>

        {/* Review */}
        <div className={`${card()} border-amber-200`} style={{ animationDelay: '0.3s' }}>
          <ShieldCheck className={`w-6 h-6 text-amber-500 ${inView ? 'lc-pulse-on' : ''}`} aria-hidden="true" />
          <p className="text-xs mt-3 mb-1 text-amber-600">Step 2</p>
          <p className="text-slate-900 font-medium leading-tight">18-point review</p>
          <p className="text-slate-600 text-sm mt-1">LOLER 1998 · BS 7121 · ISO 10567</p>
        </div>

        <div className="hidden sm:flex items-center text-slate-300" aria-hidden="true">
          <ArrowRight className="w-5 h-5" />
        </div>

        {/* Outcomes */}
        <div className="flex flex-col gap-3 w-full sm:w-60">
          <div className={`${card().replace('sm:w-56', '')} border-emerald-200`} style={{ animationDelay: '0.55s' }}>
            <CheckCircle2 className="w-6 h-6 text-emerald-600" aria-hidden="true" />
            <p className="text-xs mt-3 mb-1 text-emerald-700">Category A</p>
            <p className="text-slate-900 font-medium leading-tight">Acceptable — lift proceeds</p>
          </div>
          <div className={`${card().replace('sm:w-56', '')} border-rose-200`} style={{ animationDelay: '0.75s' }}>
            <AlertTriangle className="w-6 h-6 text-rose-600" aria-hidden="true" />
            <p className="text-xs mt-3 mb-1 text-rose-700">Category B</p>
            <p className="text-slate-900 font-medium leading-tight">Findings &amp; required amendments</p>
            <p className="text-slate-600 text-sm mt-2 flex items-center gap-1.5">
              <RefreshCw className="w-4 h-4 text-slate-400" aria-hidden="true" />
              Revise and resubmit for verification
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
