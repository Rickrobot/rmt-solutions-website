/**
 * Outrigger load and mat bearing area: the arithmetic behind
 * /resources/outrigger-mat-calculator (Nov 2026).
 *
 * Method: Temporary Works Forum, "Assessment and management of outrigger
 * loading", TWf2022:02 (September 2022).
 *   Step 1  maximum outrigger load: the manufacturer's or supplier's published
 *           figure, or, for ALL-TERRAIN mobile cranes up to 160 t capacity only,
 *           the "75% rule" (paras 21-22): 75% of the gross weight of the rigged
 *           crane (including all counterweight) plus 100% of the hoisted load
 *           (including all accessories and the hook block).
 *   Step 2  minimum required bearing area = maximum outrigger load / allowable
 *           bearing pressure from the ground assessment (paras 24-40).
 *   Step 3  the mat itself must have a verified rated capacity (paras 41-52).
 *           Nothing here can check that, and the page says so.
 *
 * No duty, outrigger reaction or allowable bearing pressure is stored here:
 * every figure is typed in by the user from their own sources. Pure functions
 * so the page's worked example and the calculator always agree.
 */

export const G = 9.80665 // kN per tonne
export const RULE_MAX_CAPACITY_T = 160

export const TWF_REF = {
  title: 'Assessment and management of outrigger loading',
  ref: 'TWf2022:02',
  publisher: 'Temporary Works Forum',
  date: 'September 2022',
}

// 75% rule estimate of the maximum load on any one outrigger, in tonnes.
export function seventyFivePercentRule({ riggedCraneT, loadT, accessoriesT }) {
  return 0.75 * riggedCraneT + loadT + accessoriesT
}

export const tonnesToKn = (t) => t * G
export const knToTonnes = (kn) => kn / G

// Minimum required bearing area (m2) for an outrigger load (kN) on ground with
// an allowable bearing pressure (kN/m2).
export function requiredArea(loadKn, allowableKpa) {
  return loadKn / allowableKpa
}

// Smallest square side and circle diameter (m) giving that area, rounded UP to
// the next 10 mm so the size shown is never smaller than required.
const ceil10mm = (m) => Math.ceil(m * 100 - 1e-9) / 100
export const minSquareSide = (areaM2) => ceil10mm(Math.sqrt(areaM2))
export const minCircleDiameter = (areaM2) => ceil10mm(Math.sqrt((4 * areaM2) / Math.PI))

export function matArea({ shape, lengthM, widthM }) {
  if (shape === 'circle') return (Math.PI * lengthM * lengthM) / 4
  if (shape === 'square') return lengthM * lengthM
  return lengthM * widthM
}

// Average pressure under a mat (kN/m2): outrigger load plus the mat's own
// weight, spread uniformly over the mat area (TWf2022:02 para 29 assumes a
// uniform pressure).
export function matPressure(loadKn, matMassKg, areaM2) {
  return (loadKn + ((matMassKg || 0) / 1000) * G) / areaM2
}

// The worked example shown on the page, computed rather than typed.
export const WORKED_EXAMPLE = (() => {
  const input = { capacityT: 60, riggedCraneT: 48, loadT: 4.2, accessoriesT: 0.5, allowableKpa: 200, mat: { shape: 'square', lengthM: 1.5, widthM: 1.5, massKg: 300 } }
  const outT = seventyFivePercentRule(input)
  const outKn = tonnesToKn(outT)
  const area = requiredArea(outKn, input.allowableKpa)
  const mArea = matArea(input.mat)
  const pressure = matPressure(outKn, input.mat.massKg, mArea)
  return { input, outT, outKn, area, square: minSquareSide(area), circle: minCircleDiameter(area), mArea, pressure }
})()
