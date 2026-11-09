'use client'

/**
 * Crane wind speed calculator for large-area loads (see lib/craneWind.js).
 * The user gives the hoisted load, its wind area and the wind speed on the
 * crane's own load chart; the result is the reduced maximum gust speed for
 * that load. A preliminary check: the crane's load chart book governs.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertTriangle, CheckCircle2, Info, RotateCcw } from 'lucide-react'
import { trackEvent } from '@/components/ConversionTracking'
import { REF_AREA_PER_T, CW_PRESETS, windArea, permissibleWindSpeed, msToMph, msToKmh } from '@/lib/craneWind'

const num = (s) => {
  const v = parseFloat(String(s).replace(',', '.'))
  return Number.isFinite(v) ? v : null
}
const pos = (v) => v !== null && v > 0
const f = (v, dp) => v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp })
const speeds = (v) => `${f(v, 1)} m/s (${f(msToMph(v), 0)} mph, ${f(msToKmh(v), 0)} km/h)`

function Field({ id, label, unit, value, onChange, hint }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-200 mb-1">{label}</label>
      <div className="flex rounded-xl overflow-hidden border border-slate-600 focus-within:border-amber-400 bg-slate-950">
        <input id={id} inputMode="decimal" autoComplete="off" value={value} onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-4 py-3 text-white outline-none" />
        {unit && <span className="px-4 py-3 text-gray-400 bg-slate-900 border-l border-slate-700 whitespace-nowrap">{unit}</span>}
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

export default function CraneWindCalculator() {
  const [load, setLoad] = useState('')
  const [areaMode, setAreaMode] = useState('projected')
  const [ap, setAp] = useState('')
  const [cw, setCw] = useState('2.0')
  const [aw, setAw] = useState('')
  const [chart, setChart] = useState('9')
  const [tracked, setTracked] = useState(false)

  const reset = () => { setLoad(''); setAreaMode('projected'); setAp(''); setCw('2.0'); setAw(''); setChart('9') }

  const L = num(load), C = num(chart)
  const area = areaMode === 'projected' ? (pos(num(ap)) && pos(num(cw)) ? windArea(num(ap), num(cw)) : null) : (pos(num(aw)) ? num(aw) : null)
  const res = pos(L) && pos(C) && area !== null ? permissibleWindSpeed({ chartMs: C, loadT: L, windAreaM2: area }) : null

  const hasRes = res !== null
  useEffect(() => {
    if (hasRes && !tracked) {
      setTracked(true)
      trackEvent('crane_wind_calculated', {})
    }
  }, [hasRes, tracked])

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="font-display text-2xl font-bold text-white">Crane wind speed calculator</h2>
        <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400">
          <RotateCcw className="w-4 h-4" aria-hidden="true" />Start again
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Field id="load" label="Hoisted load" unit="t" value={load} onChange={setLoad}
          hint="The load plus the hook block and lifting accessories" />
        <Field id="chart" label="Maximum wind speed on the load chart" unit="m/s" value={chart} onChange={setChart}
          hint="From the crane's load chart for this configuration (often 9 m/s, some charts higher)" />
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-gray-200 mb-2">Wind area of the load</p>
        <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="How to give the wind area">
          {[['projected', 'Face area and shape'], ['aw', 'I have the wind area (incl. cw)']].map(([v, t]) => (
            <button key={v} type="button" onClick={() => setAreaMode(v)} aria-pressed={areaMode === v}
              className={`px-4 py-2 rounded-full border text-sm font-semibold ${areaMode === v ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-600 text-gray-300 hover:border-slate-400'}`}>{t}</button>
          ))}
        </div>
        {areaMode === 'projected' ? (
          <div className="space-y-4">
            <Field id="ap" label="Largest face area exposed to the wind" unit="m²" value={ap} onChange={setAp}
              hint="Length × height of the biggest side the wind could hit, e.g. a 6 m × 3 m panel = 18 m²" />
            <div>
              <p className="text-sm font-semibold text-gray-200 mb-2">Drag coefficient (cw)</p>
              <div className="flex flex-wrap gap-2 mb-3">
                {CW_PRESETS.map((p) => (
                  <button key={p.id} type="button" onClick={() => setCw(String(p.cw))} aria-pressed={num(cw) === p.cw}
                    className={`px-3 py-2 rounded-xl border text-sm text-left ${num(cw) === p.cw ? 'border-amber-400 bg-amber-400/15 text-white' : 'border-slate-600 text-gray-300 hover:border-slate-400'}`}>
                    {p.label} <span className="text-gray-400">({p.range})</span>
                  </button>
                ))}
              </div>
              <Field id="cw" label="cw used" unit="" value={cw} onChange={setCw} hint="Use the load supplier's figure if they give one" />
            </div>
          </div>
        ) : (
          <Field id="aw" label="Wind area including cw" unit="m²" value={aw} onChange={setAw} hint="Projected area × drag coefficient, e.g. from the load supplier" />
        )}
      </div>

      {res && (
        <div className={`mt-6 rounded-2xl border p-5 ${res.reduced ? 'border-amber-400/60 bg-amber-400/10' : 'border-emerald-500/50 bg-emerald-500/10'}`}>
          <Row label="Wind area of the load" value={`${f(area, 1)} m²`} />
          <Row label="Wind area per tonne" value={`${f(res.ratio, 2)} m²/t (chart assumes ${f(REF_AREA_PER_T, 1)})`} />
          <Row label="Maximum gust speed for this load" value={speeds(res.vmax)} strong />
          <p className={`mt-3 flex gap-2 font-semibold ${res.reduced ? 'text-amber-300' : 'text-emerald-300'}`}>
            {res.reduced ? <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" /> : <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />}
            <span>
              {res.reduced
                ? `This load catches more wind than the chart allows for. Stop lifting it in gusts above ${f(res.vmax, 1)} m/s, not the ${f(C, 1)} m/s on the chart.`
                : `Within the 1.2 m²/t the chart allows for, so the chart wind speed of ${f(C, 1)} m/s applies.`}
            </span>
          </p>
        </div>
      )}

      <p className="flex gap-3 text-sm text-gray-400 leading-relaxed mt-6">
        <Info className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" aria-hidden="true" />
        <span>
          For mobile cranes with EN 13000 load charts. Wind speeds are 3-second gusts at the top of the boom, which are higher
          than forecast speeds at ground level. The crane&apos;s own load chart book and wind diagrams govern.{' '}
          <Link href="/services/mobile-crane-lift-plans" className="text-amber-400 hover:text-amber-300 font-semibold">Need a crane lift plan?</Link>
        </span>
      </p>
    </div>
  )
}
