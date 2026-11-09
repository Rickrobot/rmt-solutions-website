/**
 * Load weight: the arithmetic behind /resources/load-weight-calculator
 * (Nov 2026). Published standard data only, no product tables copied:
 *
 *  - UK beams, columns and channels (UB, UC, PFC, BS 4-1): the third figure in
 *    the serial size is the nominal mass per metre (305 x 165 x 40 = 40 kg/m).
 *  - Hot-finished hollow sections (BS EN 10210-2): area from the standard's
 *    corner radii, outside 1.5t and inside 1.0t:
 *      SHS/RHS  A = 2t(B + H - 2t) - (4 - pi)(ro^2 - ri^2)
 *      CHS      A = pi t (D - t)
 *    Checked: 100 x 100 x 5 SHS = 18.73 cm2, 14.70 kg/m (published 18.7, 14.7).
 *    Cold-formed sections (BS EN 10219) have larger corners, so this slightly
 *    overstates them, which is the safe side for a lift.
 *  - Densities from EN 1991-1-1 Annex A, converted to mass with g and rounded
 *    up: steel 78.5 kN/m3 -> 7,850 kg/m3; plain concrete 24 kN/m3 -> 2,450;
 *    reinforced 25 kN/m3 -> 2,550; wet reinforced (+1 kN/m3) -> 2,650.
 */

export const STEEL_DENSITY = 7850
export const CONCRETE = {
  plain: { label: 'Plain concrete', kgm3: 2450 },
  reinforced: { label: 'Reinforced or precast concrete', kgm3: 2550 },
  wet: { label: 'Wet concrete (skip or bucket)', kgm3: 2650 },
}

// "305x165x40", "UB 305 x 165 x 40", "203x203x46 UC" -> 40 / 46
export function massFromDesignation(text) {
  const nums = String(text || '').replace(/,/g, '.').match(/\d+(\.\d+)?/g)
  if (!nums || nums.length < 3) return null
  const m = parseFloat(nums[2])
  return m > 0 ? m : null
}

// kg/m of a hot-finished rectangular/square hollow section, sizes in mm
export function rhsMassPerMetre(hMm, bMm, tMm) {
  if (!(hMm > 0 && bMm > 0 && tMm > 0) || 2 * tMm >= Math.min(hMm, bMm)) return null
  const ro = 1.5 * tMm, ri = tMm
  const aMm2 = 2 * tMm * (bMm + hMm - 2 * tMm) - (4 - Math.PI) * (ro * ro - ri * ri)
  return (aMm2 / 1e6) * STEEL_DENSITY
}

// kg/m of a circular hollow section, sizes in mm
export function chsMassPerMetre(dMm, tMm) {
  if (!(dMm > 0 && tMm > 0) || 2 * tMm >= dMm) return null
  return ((Math.PI * tMm * (dMm - tMm)) / 1e6) * STEEL_DENSITY
}

// kg of a steel plate, length and width in m, thickness in mm
export const plateMass = (lM, wM, tMm) => lM * wM * (tMm / 1000) * STEEL_DENSITY

// kg of a concrete block or slab, dimensions in m
export const concreteMass = (lM, wM, dM, kind) => lM * wM * dM * CONCRETE[kind].kgm3

// Worked example shown on the page, computed rather than typed.
export const WORKED_EXAMPLE = (() => {
  const beams = { designation: '305x165x40', length: 7.5, qty: 6 }
  const beamKg = massFromDesignation(beams.designation) * beams.length * beams.qty
  const slab = { l: 3.0, w: 1.2, d: 0.15, kind: 'reinforced' }
  const slabKg = concreteMass(slab.l, slab.w, slab.d, slab.kind)
  const shs = { h: 100, b: 100, t: 5, length: 3.0, qty: 4 }
  const shsKgm = rhsMassPerMetre(shs.h, shs.b, shs.t)
  const shsKg = shsKgm * shs.length * shs.qty
  return { beams, beamKg, slab, slabKg, shs, shsKgm, shsKg, total: beamKg + slabKg + shsKg }
})()
