'use client'

/**
 * Sling angle and leg load calculator (uniform load method, LEEA COPSULE
 * section 1.A5.4 - see lib/slingLegs.js). The user supplies the load and the
 * geometry; the result is the minimum single-leg WLL to look for on the sling
 * tag, with leg tensions for information. A preliminary check, not a rigging
 * design, and the result says so.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AlertTriangle, CheckCircle2, Info, RotateCcw } from 'lucide-react'
import { trackEvent } from '@/components/ConversionTracking'
import { MAX_ANGLE, angleFromGeometry, planRadius, solve } from '@/lib/slingLegs'

const num = (s) => {
  const v = parseFloat(String(s).replace(',', '.'))
  return Number.isFinite(v) ? v : null
}
const pos = (v) => v !== null && v > 0
const f = (v, dp) => v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp })
const kgT = (kg) => `${f(kg, 0)} kg (${f(kg / 1000, 2)} t)`

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

function Pills({ label, options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={label}>
      {options.map(([v, text]) => (
        <button key={v} type="button" onClick={() => onChange(v)} aria-pressed={value === v}
          className={`px-4 py-2 rounded-full border text-sm font-semibold ${value === v ? 'border-amber-400 bg-amber-400 text-slate-950' : 'border-slate-600 text-gray-300 hover:border-slate-400'}`}>{text}</button>
      ))}
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

export default function SlingAngleCalculator() {
  const [load, setLoad] = useState('')
  const [legs, setLegs] = useState(2)
  const [mode, setMode] = useState('geometry')
  const [angleType, setAngleType] = useState('vertical')
  const [angle, setAngle] = useState('')
  const [legLength, setLegLength] = useState('')
  const [spacing, setSpacing] = useState('')
  const [radius, setRadius] = useState('')
  const [rectL, setRectL] = useState('')
  const [rectW, setRectW] = useState('')
  const [choke, setChoke] = useState(false)
  const [tracked, setTracked] = useState(false)

  const reset = () => {
    setLoad(''); setLegs(2); setMode('geometry'); setAngleType('vertical'); setAngle(''); setLegLength('')
    setSpacing(''); setRadius(''); setRectL(''); setRectW(''); setChoke(false)
  }

  // ---- angle of each leg to the vertical
  let beta = null
  let geomProblem = null
  if (legs === 1) beta = 0
  else if (mode === 'angle') {
    const a = num(angle)
    if (a !== null && a >= 0) beta = angleType === 'vertical' ? a : a / 2
  } else {
    const L = num(legLength)
    const r = legs === 2 ? (pos(num(spacing)) ? planRadius(2, { spacingM: num(spacing) }) : null)
      : legs === 3 ? (pos(num(radius)) ? planRadius(3, { radiusM: num(radius) }) : null)
      : (pos(num(rectL)) && num(rectW) !== null && num(rectW) >= 0 ? planRadius(4, { lengthM: num(rectL), widthM: num(rectW) }) : null)
    if (pos(L) && r !== null) {
      beta = angleFromGeometry(L, r)
      if (beta === null) geomProblem = 'The legs are too short to reach the lifting points from the hook. Use longer legs.'
    }
  }

  const W = num(load)
  const res = pos(W) && beta !== null ? solve({ load: W, legs, betaDeg: beta, choke }) : null

  const hasResult = res !== null && !res.over60
  useEffect(() => {
    if (hasResult && !tracked) {
      setTracked(true)
      trackEvent('sling_angle_calculated', { legs })
    }
  }, [hasResult, tracked, legs])

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="font-display text-2xl font-bold text-white">Sling angle calculator</h2>
        <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400">
          <RotateCcw className="w-4 h-4" aria-hidden="true" />Start again
        </button>
      </div>

      <div className="space-y-6">
        <Field id="load" label="Weight of the load" unit="kg" value={load} onChange={setLoad}
          hint="Include anything hung below the sling, such as a spreader beam or shackles at the load" />

        <div>
          <p className="text-sm font-semibold text-gray-200 mb-2">Number of sling legs</p>
          <Pills label="Number of legs" value={legs} onChange={setLegs} options={[[1, '1 leg'], [2, '2 legs'], [3, '3 legs'], [4, '4 legs']]} />
        </div>

        {legs > 1 && (
          <div className="space-y-4">
            <Pills label="How to give the angle" value={mode} onChange={setMode}
              options={[['geometry', 'Leg length and lifting points'], ['angle', 'I know the angle']]} />
            {mode === 'angle' ? (
              <div className="grid sm:grid-cols-[1fr_auto] gap-4 items-end">
                <Field id="angle" label={angleType === 'vertical' ? 'Angle of each leg to the vertical' : 'Included angle between opposite legs'} unit="°" value={angle} onChange={setAngle} />
                <Pills label="Angle type" value={angleType} onChange={setAngleType} options={[['vertical', 'To vertical'], ['included', 'Included']]} />
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-4">
                <Field id="leglen" label="Leg length, hook to lifting point" unit="m" value={legLength} onChange={setLegLength}
                  hint="Bearing point of the master link to the bearing point at the load" />
                {legs === 2 && <Field id="spacing" label="Distance between the two lifting points" unit="m" value={spacing} onChange={setSpacing} />}
                {legs === 3 && <Field id="radius" label="Distance from the centre to each lifting point" unit="m" value={radius} onChange={setRadius} hint="Points equally spaced round the hook" />}
                {legs === 4 && <>
                  <Field id="rl" label="Lifting points: length apart" unit="m" value={rectL} onChange={setRectL} />
                  <Field id="rw" label="Lifting points: width apart" unit="m" value={rectW} onChange={setRectW} hint="Points at the corners of a rectangle, hook over the centre" />
                </>}
              </div>
            )}
          </div>
        )}

        <label className="flex gap-3 items-start text-gray-200">
          <input type="checkbox" checked={choke} onChange={(e) => setChoke(e.target.checked)} className="mt-1 accent-amber-400" />
          <span>Legs used in a choke hitch <span className="text-gray-400">(reduces the rating to 80%)</span></span>
        </label>
      </div>

      {geomProblem && (
        <p className="mt-6 flex gap-3 rounded-xl bg-red-500/10 border border-red-500/40 p-4 text-red-200"><AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />{geomProblem}</p>
      )}

      {res && res.over60 && (
        <div className="mt-6 rounded-2xl border border-red-500/50 bg-red-500/10 p-5 text-red-200">
          <p className="flex gap-3 font-semibold"><AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
            The legs are at {f(res.betaDeg, 1)}° to the vertical ({f(res.included, 1)}° included). Slings have no rating above {MAX_ANGLE}° to the vertical.</p>
          <p className="mt-2 text-red-100">Use longer legs or a spreader or lifting beam to bring the angle down.</p>
        </div>
      )}

      {hasResult && (
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl bg-slate-950 border border-slate-700 p-5">
            {legs > 1 && <Row label="Angle of each leg to the vertical" value={`${f(res.betaDeg, 1)}° (${f(res.included, 1)}° included)`} />}
            <Row label="Mode factor (uniform load method)" value={f(res.mode, 2)} />
            <Row label="Minimum WLL of each leg" value={kgT(res.requiredLegWll)} strong />
          </div>
          <p className="flex gap-2 text-emerald-300"><CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
            <span>Each leg needs a single-leg WLL of at least {f(res.requiredLegWll / 1000, 2)} t. {legs === 1 ? 'Check' : 'On a multi-leg sling, check'} the tag shows at least {f(W / 1000 / (choke ? 0.8 : 1), 2)} t for {legs === 1 ? 'a straight lift' : res.betaDeg > 45 ? `${legs}-leg use at 45° to 60°` : `${legs}-leg use at 0° to 45°`}{choke ? ', so that 80% of it still covers the load in a choke hitch' : ''}.</span></p>
          {legs > 1 && res.betaDeg > 45 && (
            <p className="flex gap-2 text-amber-300"><AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />Between 45° and 60° the sling&apos;s rating drops. Longer legs would bring it back to the 0° to 45° rating.</p>
          )}
          {legs > 1 && (
            <div className="rounded-2xl bg-slate-950 border border-slate-700 p-5">
              <p className="text-sm text-gray-400 mb-2">Actual pull in each leg, for information</p>
              <Row label={`If all ${legs} legs share the load equally`} value={kgT(res.tensionAll)} />
              {res.tensionTwo !== null && <Row label="If only two legs carry it" value={kgT(res.tensionTwo)} />}
              {legs >= 3 && <p className="text-xs text-gray-400 mt-2">A rigid load, uneven legs or an offset centre of gravity can leave a 3- or 4-leg sling hanging on two legs.</p>}
            </div>
          )}
        </div>
      )}

      <p className="flex gap-3 text-sm text-gray-400 leading-relaxed mt-6">
        <Info className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" aria-hidden="true" />
        <span>
          A preliminary check for slings with equal legs and the hook over the centre of gravity. Unequal legs, an offset centre
          of gravity, sharp edges, the master link, shackles and the load&apos;s lifting points all need checking too.{' '}
          <Link href="/contact" className="text-amber-400 hover:text-amber-300 font-semibold">Need the rigging designed in a lift plan?</Link>
        </span>
      </p>
    </div>
  )
}
