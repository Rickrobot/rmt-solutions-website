'use client'

/**
 * Excavator lift utilisation checker (see lib/excavatorLift.js). The user
 * types in every weight and the capacity from their own machine's chart; the
 * site holds no charts. A preliminary check, not a lift plan, and it says so.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertTriangle, CheckCircle2, ClipboardCheck, RotateCcw } from 'lucide-react'
import { trackEvent } from '@/components/ConversionTracking'
import { DEFAULT_LIMIT_PCT, grossLoad, utilisationPct, maxNetLoad, verdict } from '@/lib/excavatorLift'

const num = (s) => {
  const v = parseFloat(String(s).replace(',', '.'))
  return Number.isFinite(v) ? v : null
}
const pos = (v) => v !== null && v > 0
const f = (v, dp) => v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp })

function Field({ id, label, unit, value, onChange, hint }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-200 mb-1">{label}</label>
      <div className="flex rounded-xl overflow-hidden border border-slate-600 focus-within:border-amber-400 bg-slate-950">
        <input id={id} inputMode="decimal" autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-4 py-3 text-white outline-none" />
        <span className="px-4 py-3 text-gray-400 bg-slate-900 border-l border-slate-700 whitespace-nowrap">{unit}</span>
      </div>
      {hint && <p className="text-xs text-gray-400 mt-1">{hint}</p>}
    </div>
  )
}

function Row({ label, value, strong }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-slate-800 last:border-0">
      <span className="text-gray-400">{label}</span>
      <span className={`text-right ${strong ? 'text-amber-400 font-bold text-lg' : 'text-white font-semibold'}`}>{value}</span>
    </div>
  )
}

const CHECKS = [
  'Bucket removed: lift from the quick hitch lifting eye or another rated lifting point',
  'The rated lift capacity chart in the cab is for this boom, arm, counterweight and undercarriage',
  'Capacity read at the real radius and lift point height, over the side if the load slews round',
  'Overload warning device switched on, and boom lowering control (hose burst) valves fitted',
  'Quick hitch locked, its safety pin in, and within its thorough examination',
  'Firm, level ground, and the operator and slinger trained for excavator lifting',
]

export default function ExcavatorLiftCalculator() {
  const [load, setLoad] = useState('')
  const [acc, setAcc] = useState('')
  const [hitch, setHitch] = useState('')
  const [chart, setChart] = useState('')
  const [limit, setLimit] = useState(String(DEFAULT_LIMIT_PCT))
  const [tracked, setTracked] = useState(false)

  const reset = () => { setLoad(''); setAcc(''); setHitch(''); setChart(''); setLimit(String(DEFAULT_LIMIT_PCT)) }

  const L = num(load), A = num(acc) ?? 0, H = num(hitch) ?? 0, C = num(chart)
  const lim = pos(num(limit)) && num(limit) <= 100 ? num(limit) : DEFAULT_LIMIT_PCT
  const ready = pos(L) && pos(C) && A >= 0 && H >= 0
  const gross = ready ? grossLoad({ loadKg: L, accessoriesKg: A, hitchKg: H }) : null
  const util = ready ? utilisationPct(gross, C) : null
  const v = ready ? verdict(util, lim) : null
  const maxNet = ready ? maxNetLoad({ chartKg: C, limitPct: lim, accessoriesKg: A, hitchKg: H }) : null

  useEffect(() => {
    if (ready && !tracked) {
      setTracked(true)
      trackEvent('excavator_lift_calculated', {})
    }
  }, [ready, tracked])

  const tone = v === 'ok' ? 'border-emerald-500/50 bg-emerald-500/10' : v === 'over-limit' ? 'border-amber-400/60 bg-amber-400/10' : 'border-red-500/50 bg-red-500/10'

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="font-display text-2xl font-bold text-white">Excavator lift calculator</h2>
        <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400">
          <RotateCcw className="w-4 h-4" aria-hidden="true" />Start again
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="load" label="Weight of the load" unit="kg" value={load} onChange={setLoad} />
        <Field id="acc" label="Lifting accessories" unit="kg" value={acc} onChange={setAcc} hint="Chains or slings, master link, shackles, any spreader beam" />
        <Field id="hitch" label="Quick hitch" unit="kg" value={hitch} onChange={setHitch} hint="From the hitch plate or the maker's data. Bucket off." />
        <Field id="chart" label="Capacity from the maker's chart" unit="kg" value={chart} onChange={setChart}
          hint="At the lift point radius and height, for this machine's set-up" />
        <Field id="limit" label="Utilisation limit for this site" unit="%" value={limit} onChange={setLimit} hint={`RMT plans to ${DEFAULT_LIMIT_PCT}% unless the site sets a lower limit`} />
      </div>

      {ready && (
        <div className={`mt-6 rounded-2xl border p-5 ${tone}`}>
          <Row label="Gross load (load + accessories + quick hitch)" value={`${f(gross, 0)} kg`} />
          <Row label="Chart capacity" value={`${f(C, 0)} kg`} />
          <Row label="Utilisation" value={`${f(util, 1)}%`} strong />
          <Row label={`Heaviest load within ${f(lim, 0)}%`} value={maxNet > 0 ? `${f(Math.floor(maxNet), 0)} kg` : 'none'} />
          <p className={`mt-3 flex gap-2 font-semibold ${v === 'ok' ? 'text-emerald-300' : v === 'over-limit' ? 'text-amber-300' : 'text-red-300'}`}>
            {v === 'ok' ? <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" /> : <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />}
            <span>
              {v === 'ok' && `Within the ${f(lim, 0)}% limit, leaving ${f(C - gross, 0)} kg of chart capacity unused.`}
              {v === 'over-limit' && `Within the chart but over the ${f(lim, 0)}% limit. Reduce the radius or use a bigger machine, or have the Appointed Person review it before it goes ahead.`}
              {v === 'over-chart' && 'Over the rated capacity on the chart. This lift must not be made at this radius with this machine.'}
            </span>
          </p>
        </div>
      )}

      <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950 p-5">
        <p className="flex gap-2 items-center text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3"><ClipboardCheck className="w-5 h-5" aria-hidden="true" />Before the lift</p>
        <ul className="space-y-2 text-gray-300">
          {CHECKS.map((c) => (
            <li key={c} className="flex gap-2"><span className="text-amber-400" aria-hidden="true">•</span><span>{c}</span></li>
          ))}
        </ul>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mt-6">
        A preliminary check, not a lift plan. The ground, the exclusion zone, overhead services and the rigging all need
        planning too.{' '}
        <Link href="/services/excavator-lift-plans" className="text-amber-400 hover:text-amber-300 font-semibold">Need an excavator lift plan?</Link>
      </p>
    </div>
  )
}
