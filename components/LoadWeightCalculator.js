'use client'

/**
 * Load weight calculator (see lib/loadWeight.js). A list of items - beams,
 * hollow sections, plate, concrete or a known weight - added up into the
 * weight of the lift. A preliminary estimate: a delivery note, drawing or
 * weighbridge ticket for the actual item comes first.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Info, Plus, RotateCcw, Trash2 } from 'lucide-react'
import { trackEvent } from '@/components/ConversionTracking'
import { CONCRETE, massFromDesignation, rhsMassPerMetre, chsMassPerMetre, plateMass, concreteMass } from '@/lib/loadWeight'

const num = (s) => {
  const v = parseFloat(String(s).replace(',', '.'))
  return Number.isFinite(v) ? v : null
}
const pos = (v) => v !== null && v > 0
const f = (v, dp) => v.toLocaleString('en-GB', { minimumFractionDigits: dp, maximumFractionDigits: dp })

const TYPES = {
  beam: { label: 'Beam, column or channel (UB, UC, PFC)', fields: [['designation', 'Serial size', '', 'e.g. 305x165x40'], ['length', 'Length', 'm'], ['qty', 'Quantity', 'no.']] },
  rhs: { label: 'Square or rectangular hollow section', fields: [['h', 'Depth', 'mm'], ['b', 'Width', 'mm'], ['t', 'Wall', 'mm'], ['length', 'Length', 'm'], ['qty', 'Quantity', 'no.']] },
  chs: { label: 'Circular hollow section', fields: [['d', 'Outside diameter', 'mm'], ['t', 'Wall', 'mm'], ['length', 'Length', 'm'], ['qty', 'Quantity', 'no.']] },
  plate: { label: 'Steel plate', fields: [['l', 'Length', 'm'], ['w', 'Width', 'm'], ['t', 'Thickness', 'mm'], ['qty', 'Quantity', 'no.']] },
  concrete: { label: 'Concrete or precast', fields: [['l', 'Length', 'm'], ['w', 'Width', 'm'], ['d', 'Depth', 'm'], ['qty', 'Quantity', 'no.']] },
  other: { label: 'Known weight (from a label, drawing or delivery note)', fields: [['kg', 'Weight each', 'kg'], ['qty', 'Quantity', 'no.']] },
}

let nextId = 1
const newItem = (type) => ({ id: nextId++, type, qty: '1', kind: 'reinforced' })

function rowWeight(it) {
  const q = num(it.qty) ?? 1
  if (!(q > 0)) return { kg: null }
  const g = (k) => num(it[k])
  switch (it.type) {
    case 'beam': {
      const kgm = massFromDesignation(it.designation)
      return kgm && pos(g('length')) ? { kg: kgm * g('length') * q, kgm } : { kg: null }
    }
    case 'rhs': {
      const kgm = rhsMassPerMetre(g('h'), g('b'), g('t'))
      return kgm && pos(g('length')) ? { kg: kgm * g('length') * q, kgm } : { kg: null, kgm }
    }
    case 'chs': {
      const kgm = chsMassPerMetre(g('d'), g('t'))
      return kgm && pos(g('length')) ? { kg: kgm * g('length') * q, kgm } : { kg: null, kgm }
    }
    case 'plate':
      return pos(g('l')) && pos(g('w')) && pos(g('t')) ? { kg: plateMass(g('l'), g('w'), g('t')) * q } : { kg: null }
    case 'concrete':
      return pos(g('l')) && pos(g('w')) && pos(g('d')) ? { kg: concreteMass(g('l'), g('w'), g('d'), it.kind) * q } : { kg: null }
    case 'other':
      return pos(g('kg')) ? { kg: g('kg') * q } : { kg: null }
    default:
      return { kg: null }
  }
}

export default function LoadWeightCalculator() {
  const [items, setItems] = useState(() => [newItem('beam')])
  const [allow, setAllow] = useState('')
  const [tracked, setTracked] = useState(false)

  const update = (id, key, value) => setItems((xs) => xs.map((x) => (x.id === id ? { ...x, [key]: value } : x)))
  const add = (type) => setItems((xs) => [...xs, newItem(type)])
  const remove = (id) => setItems((xs) => xs.filter((x) => x.id !== id))
  const reset = () => { setItems([newItem('beam')]); setAllow('') }

  const rows = items.map((it) => ({ it, ...rowWeight(it) }))
  const sum = rows.reduce((s, r) => s + (r.kg || 0), 0)
  const allowPct = num(allow) !== null && num(allow) >= 0 ? num(allow) : 0
  const total = sum * (1 + allowPct / 100)
  const any = rows.some((r) => r.kg)

  useEffect(() => {
    if (any && !tracked) {
      setTracked(true)
      trackEvent('load_weight_calculated', {})
    }
  }, [any, tracked])

  return (
    <div className="rounded-3xl border border-slate-700 bg-slate-900 p-6 sm:p-8 shadow-2xl">
      <div className="flex items-center justify-between gap-4 mb-6">
        <h2 className="font-display text-2xl font-bold text-white">Load weight calculator</h2>
        <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-amber-400">
          <RotateCcw className="w-4 h-4" aria-hidden="true" />Start again
        </button>
      </div>

      <div className="space-y-4">
        {rows.map(({ it, kg, kgm }, i) => (
          <div key={it.id} className="rounded-2xl border border-slate-700 bg-slate-950 p-4">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <label className="sr-only" htmlFor={`type-${it.id}`}>Item {i + 1} type</label>
              <select id={`type-${it.id}`} value={it.type} onChange={(e) => update(it.id, 'type', e.target.value)}
                className="bg-slate-900 border border-slate-600 rounded-xl px-3 py-2 text-white focus:border-amber-400 outline-none">
                {Object.entries(TYPES).map(([k, t]) => <option key={k} value={k}>{t.label}</option>)}
              </select>
              {items.length > 1 && (
                <button type="button" onClick={() => remove(it.id)} className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-red-300" aria-label={`Remove item ${i + 1}`}>
                  <Trash2 className="w-4 h-4" aria-hidden="true" />Remove
                </button>
              )}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              {TYPES[it.type].fields.map(([key, label, unit, placeholder]) => (
                <div key={key} className={key === 'designation' ? 'col-span-2' : ''}>
                  <label htmlFor={`${key}-${it.id}`} className="block text-xs font-semibold text-gray-300 mb-1">{label}{unit ? ` (${unit})` : ''}</label>
                  <input id={`${key}-${it.id}`} inputMode={key === 'designation' ? 'text' : 'decimal'} autoComplete="off" placeholder={placeholder}
                    value={it[key] ?? ''} onChange={(e) => update(it.id, key, e.target.value)}
                    className="w-full bg-slate-900 border border-slate-600 focus:border-amber-400 rounded-xl px-3 py-2 text-white outline-none" />
                </div>
              ))}
              {it.type === 'concrete' && (
                <div className="col-span-2 sm:col-span-3">
                  <label htmlFor={`kind-${it.id}`} className="block text-xs font-semibold text-gray-300 mb-1">Concrete</label>
                  <select id={`kind-${it.id}`} value={it.kind} onChange={(e) => update(it.id, 'kind', e.target.value)}
                    className="w-full bg-slate-900 border border-slate-600 rounded-xl px-3 py-2 text-white focus:border-amber-400 outline-none">
                    {Object.entries(CONCRETE).map(([k, c]) => <option key={k} value={k}>{c.label} ({f(c.kgm3, 0)} kg/m³)</option>)}
                  </select>
                </div>
              )}
            </div>
            <p className="mt-3 text-sm text-gray-400">
              {kgm ? `${f(kgm, 1)} kg/m` : ''}{kgm && kg ? ' · ' : ''}
              {kg ? <span className="text-white font-semibold">{f(kg, 0)} kg</span> : (it.type === 'beam' && it.designation && !massFromDesignation(it.designation) ? 'Enter the full serial size, e.g. 305x165x40' : '')}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mt-4">
        {Object.entries({ beam: 'Beam', rhs: 'Hollow section', plate: 'Plate', concrete: 'Concrete', other: 'Known weight' }).map(([k, label]) => (
          <button key={k} type="button" onClick={() => add(k)} className="inline-flex items-center gap-1 px-4 py-2 rounded-full border border-slate-600 text-sm text-gray-200 hover:border-amber-400 hover:text-amber-400">
            <Plus className="w-4 h-4" aria-hidden="true" />{label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-4 items-end">
        <div>
          <label htmlFor="allow" className="block text-sm font-semibold text-gray-200 mb-1">Allowance for fittings (%)</label>
          <input id="allow" inputMode="decimal" value={allow} onChange={(e) => setAllow(e.target.value)} placeholder="0"
            className="w-full bg-slate-950 border border-slate-600 focus:border-amber-400 rounded-xl px-4 py-3 text-white outline-none" />
          <p className="text-xs text-gray-400 mt-1">Cleats, end plates, bolts, lifting inserts, packing</p>
        </div>
        <div className="rounded-2xl border border-amber-400/50 bg-amber-400/10 p-5">
          <p className="text-gray-300 text-sm">Total weight of the load</p>
          <p className="text-amber-400 font-bold text-3xl">{f(total, 0)} kg</p>
          <p className="text-white font-semibold">{f(total / 1000, 2)} t{allowPct > 0 ? ` including ${f(allowPct, 0)}% allowance` : ''}</p>
        </div>
      </div>

      <p className="flex gap-3 text-sm text-gray-400 leading-relaxed mt-6">
        <Info className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" aria-hidden="true" />
        <span>
          An estimate from standard section sizes and densities. Use the weight on the delivery note, drawing or unit label
          where there is one, and add the lifting accessories and hook block or quick hitch for the gross load.{' '}
          <Link href="/resources/excavator-lift-capacity-calculator" className="text-amber-400 hover:text-amber-300 font-semibold">Check it against an excavator</Link>{' '}or{' '}
          <Link href="/services/lift-plans" className="text-amber-400 hover:text-amber-300 font-semibold">get a lift plan written</Link>.
        </span>
      </p>
    </div>
  )
}
