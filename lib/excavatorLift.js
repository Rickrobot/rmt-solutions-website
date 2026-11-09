/**
 * Excavator lift utilisation: the arithmetic behind
 * /resources/excavator-lift-capacity-calculator (Nov 2026).
 *
 * Basis:
 *  - ISO 10567: the maker's rated lift capacity is the smaller of 75% of the
 *    tipping load and 87% of the hydraulic lift capacity. The user reads it
 *    from the maker's chart; nothing here holds a chart.
 *  - CPA CIG 0801 "Guidance on Lifting Operations in Construction When Using
 *    Excavators" (Rev 2, March 2009): the quick hitch, and any bucket or
 *    accessory left on, is added to the load when checking the rated capacity.
 *  - RMT's own planning method: gross load (load + lifting accessories +
 *    quick hitch) / chart capacity, bucket off, against a 90% utilisation
 *    ceiling unless the site sets a stricter one.
 *
 * Pure functions, so the page's worked example and the calculator agree.
 */

export const DEFAULT_LIMIT_PCT = 90

export const SOURCES = {
  iso: 'ISO 10567, Earth-moving machinery — Hydraulic excavators — Lift capacity',
  cpa: 'CPA CIG 0801, Guidance on Lifting Operations in Construction When Using Excavators, Rev 2, March 2009',
  sfpsg: 'Strategic Forum Plant Safety Group, Lifting Operations with 180° and 360° Excavators, 2018',
}

export function grossLoad({ loadKg, accessoriesKg, hitchKg }) {
  return loadKg + (accessoriesKg || 0) + (hitchKg || 0)
}

export function utilisationPct(grossKg, chartKg) {
  return (grossKg / chartKg) * 100
}

// The heaviest load that keeps the lift within the limit, once the hitch and
// accessories are taken off.
export function maxNetLoad({ chartKg, limitPct, accessoriesKg, hitchKg }) {
  return chartKg * (limitPct / 100) - (accessoriesKg || 0) - (hitchKg || 0)
}

export function verdict(utilPct, limitPct) {
  if (utilPct > 100 + 1e-9) return 'over-chart'
  if (utilPct > limitPct + 1e-9) return 'over-limit'
  return 'ok'
}

// Worked example shown on the page, computed rather than typed. Same lift as
// the RMT manhole ring video: gross 2,065 kg against 4,850 kg at 6.0 m.
export const WORKED_EXAMPLE = (() => {
  const input = { loadKg: 1760, accessoriesKg: 45, hitchKg: 260, chartKg: 4850, limitPct: DEFAULT_LIMIT_PCT }
  const gross = grossLoad(input)
  const util = utilisationPct(gross, input.chartKg)
  return { input, gross, util, maxNet: maxNetLoad(input) }
})()
