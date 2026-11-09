'use client'

/**
 * Outrigger load and mat bearing area calculator.
 *
 * Follows the three steps of TWf2022:02 (see lib/outriggerMat.js). Every
 * figure comes from the user: the maker's outrigger load or the crane's rigged
 * weight, the load, and the allowable bearing pressure from their ground
 * assessment. It holds no duties and no "ground type" presets, because the
 * guidance says published presumed values are unsuitable for most outrigger
 * assessments. The result says it is a preliminary check, not an assessment.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertTriangle, CheckCircle2, Info, RotateCcw } from 'lucide-react'
import { trackEvent } from '@/components/ConversionTracking'
import {
  RULE_MAX_CAPACITY_T, seventyFivePercentRule, tonnesToKn, knToTonnes,
  requiredArea, minSquareSide, minCircleDiameter, matArea, matPressure,
} from '@/lib/outriggerMat'

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

function Choice({ name, value, current, onChange, children }) {
  const on = current === value
  return (
    <label className={`flex gap-3 items-start rounded-xl border p-4 cursor-pointer transition ${on ? 'border-amber-400 bg-amber-400/10' : 'border-slate-700 hover:border-slate-500'}`}>
      <input type="radio" name={name} value={value} checked={on} onChange={() => onChange(value)} className="mt-1 accent-amber-400" />
      <span className="text-gray-200">{children}</span>
    </label>
  )
}

function Row({ label, value, strong }) {
  return (
    <div className="flex justify-between gap-4 py-2 border-b border-slate-800 last:border-0">
      <span className="text-gray-400">{label}</span>
      <span className={strong ? 'text-amber-400 font-bold text-lg' : 'text-white font-semibold'}>{value}</span>
    </div>
  )
}

export default function OutriggerMatCalculator() {
  const [method, setMethod] = useState('maker')
  const [makerLoad, setMakerLoad] = useState('')
  const [makerUnit, setMakerUnit] = useState('t')
  const [isAllTerrain, setIsAllTerrain] = useState(false)
  const [capacity, setCapacity] = useState('')
  const [rigged, setRigged] = useState('')
  const [load, setLoad] = useState('')
  const [accessories, setAccessories] = useState('')
  const [allowable, setAllowable] = useState('')
  const [shape, setShape] = useState('square')
  const [matL, setMatL] = useState('')
  const [matW, setMatW] = useState('')
  const [matKg, setMatKg] = useState('')
  const [tracked, setTracked] = useState(false)

  const reset = () => {
    setMethod('maker'); setMakerLoad(''); setMakerUnit('t'); setIsAllTerrain(false); setCapacity('')
    setRigged(''); setLoad(''); setAccessories(''); setAllowable(''); setShape('square')
    setMatL(''); setMatW(''); setMatKg('')
  }

  // ---- Step 1: maximum outrigger load (kN), or the reason there is none
  let loadKn = null
  let ruleProblem = null
  if (method === 'maker') {
    const v = num(makerLoad)
    if (pos(v)) loadKn = makerUnit === 't' ? tonnesToKn(v) : v
  } else {
    const cap = num(capacity), r = num(rigged), l = num(load), a = num(accessories) ?? 0
    const started = [capacity, rigged, load, accessories].some((s) => String(s).trim() !== '')
    if (!isAllTerrain) { if (started) ruleProblem = 'The 75% rule is only for all-terrain mobile cranes. For any other crane or machine, use the maker’s or supplier’s maximum outrigger load.' }
    else if (pos(cap) && cap > RULE_MAX_CAPACITY_T) ruleProblem = `The guidance recommends the 75% rule is not used for cranes over ${RULE_MAX_CAPACITY_T} t capacity. Get the outrigger loads from the crane supplier or a specific calculation.`
    else if (pos(cap) && pos(r) && pos(l) && a >= 0) loadKn = tonnesToKn(seventyFivePercentRule({ riggedCraneT: r, loadT: l, accessoriesT: a }))
  }

  // ---- Step 2: required bearing area
  const allow = num(allowable)
  const area = loadKn !== null && pos(allow) ? requiredArea(loadKn, allow) : null

  // ---- Optional mat check
  const L = num(matL), W = shape === 'rectangle' ? num(matW) : num(matL), kg = num(matKg)
  const mArea = area !== null && pos(L) && pos(W) ? matArea({ shape, lengthM: L, widthM: W }) : null
  const pressure = mArea !== null ? matPressure(loadKn, kg ?? 0, mArea) : null
  const ok = pressure !== null && pressure <= allow

  // one analytics event per visit, the first time a bearing area is shown
  const hasArea = area !== null
  useEffect(() => {
    if (hasArea && !tracked) {
      setTracked(true)
      trackEvent('outrigger_mat_calculated', { method })
    }
  }, [hasArea, tracked, method])

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="font-display text-2xl font-bold text-white">Outrigger mat calculator</h2>
        <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400">
          <RotateCcw className="w-4 h-4" aria-hidden="true" />Start again
        </button>
      </div>

      {/* Step 1 */}
      <fieldset className="mb-8">
        <legend className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Step 1: maximum outrigger load</legend>
        <div className="grid sm:grid-cols-2 gap-3 mb-5">
          <Choice name="method" value="maker" current={method} onChange={setMethod}>
            <strong className="text-white">I have the maker&apos;s or supplier&apos;s figure</strong>
            <span className="block text-sm text-gray-400">Best: from the crane supplier, the machine data sheet or the plate on the machine</span>
          </Choice>
          <Choice name="method" value="rule" current={method} onChange={setMethod}>
            <strong className="text-white">Estimate it with the 75% rule</strong>
            <span className="block text-sm text-gray-400">All-terrain mobile cranes up to {RULE_MAX_CAPACITY_T} t only</span>
          </Choice>
        </div>

        {method === 'maker' ? (
          <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-end">
            <Field id="maker-load" label="Maximum outrigger load" unit={makerUnit === 't' ? 'tonnes' : 'kN'} value={makerLoad} onChange={setMakerLoad} />
            <div className="flex rounded-xl overflow-hidden border border-slate-600" role="group" aria-label="Unit">
              {['t', 'kN'].map((u) => (
                <button key={u} type="button" onClick={() => setMakerUnit(u)} aria-pressed={makerUnit === u}
                  className={`px-5 py-3 font-semibold ${makerUnit === u ? 'bg-amber-400 text-slate-950' : 'bg-slate-950 text-gray-300'}`}>{u}</button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <label className="flex gap-3 items-start text-gray-200">
              <input type="checkbox" checked={isAllTerrain} onChange={(e) => setIsAllTerrain(e.target.checked)} className="mt-1 accent-amber-400" />
              <span>This is an all-terrain mobile crane</span>
            </label>
            <div className="grid sm:grid-cols-2 gap-4">
              <Field id="cap" label="Crane maximum rated capacity" unit="t" value={capacity} onChange={setCapacity} hint={`The rule is not for cranes over ${RULE_MAX_CAPACITY_T} t`} />
              <Field id="rigged" label="Gross weight of the rigged crane" unit="t" value={rigged} onChange={setRigged} hint="Including all counterweight fitted for this lift" />
              <Field id="load" label="Heaviest load to be lifted" unit="t" value={load} onChange={setLoad} />
              <Field id="acc" label="Hook block and lifting accessories" unit="t" value={accessories} onChange={setAccessories} hint="Hook block, slings, shackles, spreader beam" />
            </div>
          </div>
        )}
        {ruleProblem && (
          <p className="mt-4 flex gap-3 rounded-xl bg-red-500/10 border border-red-500/40 p-4 text-red-200"><AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />{ruleProblem}</p>
        )}
        {loadKn !== null && (
          <p className="mt-4 text-white">Maximum outrigger load: <strong className="text-amber-400">{f(loadKn, 1)} kN</strong> <span className="text-gray-400">({f(knToTonnes(loadKn), 2)} t)</span></p>
        )}
      </fieldset>

      {/* Step 2 */}
      <fieldset className="mb-8">
        <legend className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Step 2: required bearing area</legend>
        <Field id="allow" label="Allowable bearing pressure of the ground" unit="kN/m²" value={allowable} onChange={setAllowable}
          hint="From the ground or temporary works assessment for this position (kN/m² is the same as kPa)" />
        {area !== null && (
          <div className="mt-5 rounded-2xl bg-slate-950 border border-slate-700 p-5">
            <Row label="Minimum bearing area" value={`${f(area, 2)} m²`} strong />
            <Row label="Smallest square mat" value={`${f(minSquareSide(area), 2)} m × ${f(minSquareSide(area), 2)} m`} />
            <Row label="Smallest round mat" value={`${f(minCircleDiameter(area), 2)} m diameter`} />
          </div>
        )}
      </fieldset>

      {/* Mat check */}
      <fieldset className="mb-8">
        <legend className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-3">Check a mat (optional)</legend>
        <div className="flex flex-wrap gap-2 mb-4" role="group" aria-label="Mat shape">
          {['square', 'rectangle', 'circle'].map((s) => (
            <button key={s} type="button" onClick={() => setShape(s)} aria-pressed={shape === s}
              className={`px-4 py-2 rounded-full border text-sm font-semibold capitalize ${shape === s ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-600 text-gray-300'}`}>{s}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          <Field id="matl" label={shape === 'circle' ? 'Diameter' : shape === 'square' ? 'Side' : 'Length'} unit="m" value={matL} onChange={setMatL} />
          {shape === 'rectangle' && <Field id="matw" label="Width" unit="m" value={matW} onChange={setMatW} />}
          <Field id="matkg" label="Mat weight" unit="kg" value={matKg} onChange={setMatKg} hint="Optional; added to the load" />
        </div>
        {pressure !== null && (
          <div className={`mt-5 rounded-2xl border p-5 ${ok ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-red-500/50 bg-red-500/10'}`}>
            <Row label="Mat area" value={`${f(mArea, 2)} m²`} />
            <Row label="Average pressure under the mat" value={`${f(pressure, 1)} kN/m²`} strong />
            <Row label="Allowable bearing pressure" value={`${f(allow, 1)} kN/m²`} />
            <p className={`mt-3 flex gap-2 font-semibold ${ok ? 'text-emerald-300' : 'text-red-300'}`}>
              {ok ? <CheckCircle2 className="w-5 h-5 shrink-0" aria-hidden="true" /> : <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden="true" />}
              {ok ? `Big enough on area: ${f((pressure / allow) * 100, 0)}% of the allowable pressure.` : 'Too small: the pressure under this mat is above the allowable bearing pressure.'}
            </p>
          </div>
        )}
      </fieldset>

      {/* Step 3 */}
      <div className="rounded-2xl border border-amber-400/40 bg-amber-400/5 p-5">
        <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">Step 3: is the mat strong enough?</p>
        <p className="flex gap-3 text-gray-200 leading-relaxed">
          <Info className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" aria-hidden="true" />
          <span>
            Area is only half the check. The mat must also have a rated capacity at least equal to the maximum outrigger load,
            shown on an outrigger mat capacity certificate or by a temporary works assessment, and the outrigger must sit in the
            centre of it. A mat that is big enough can still bend or break and concentrate the load.
          </span>
        </p>
      </div>

      <p className="text-sm text-gray-400 leading-relaxed mt-6">
        A preliminary check, not a ground or temporary works assessment. Buried services, slopes, excavation edges, made
        ground and soft layers below the surface all need a competent engineer.{' '}
        <Link href="/contact" className="text-amber-400 hover:text-amber-300 font-semibold">Need the outrigger loads in a lift plan?</Link>
      </p>
    </div>
  )
}
