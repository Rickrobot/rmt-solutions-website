/**
 * Sling leg angle and load: the arithmetic behind
 * /resources/sling-angle-calculator (Nov 2026).
 *
 * Method: LEEA Code of Practice for the Safe Use of Lifting Equipment
 * (COPSULE), Edition 10, section 1.A5.4 "Principles for the Selection of
 * Slings" - the uniform load method used to rate and mark multipurpose
 * slings to the BS EN 818-4 / BS EN 13414-1 / BS EN 1492 family:
 *   1 leg                1.0 x WLL of one leg
 *   2 leg   0-45 deg     1.4      45-60 deg  1.0
 *   3/4 leg 0-45 deg     2.1      45-60 deg  1.5
 * Angles are measured from the vertical (half the included angle). There is
 * no rating above 60 degrees. A choke hitch takes a further 0.8 (LEEA mode
 * factor tables). The leg tensions shown are plain trigonometry, for
 * information: rigid loads on 3- and 4-leg slings may hang on two legs.
 *
 * Pure functions, so the page's worked example and the calculator agree.
 */

export const LEEA_REF = {
  title: 'Code of Practice for the Safe Use of Lifting Equipment (COPSULE)',
  edition: 'Edition 10',
  section: '1.A5.4 Principles for the Selection of Slings',
  url: 'https://copsule.leeaint.com/copsule/en-GB/latest/id-3cb996a1-acca-4c6d-95a8-136d5c1ea596.html',
}

export const MAX_ANGLE = 60
export const CHOKE_FACTOR = 0.8
const rad = (d) => (d * Math.PI) / 180
const deg = (r) => (r * 180) / Math.PI

// Uniform load method mode factor, or null when above 60 degrees.
export function modeFactor(legs, betaDeg) {
  if (betaDeg > MAX_ANGLE + 1e-9) return null
  if (legs === 1) return 1
  const wide = betaDeg > 45 + 1e-9
  if (legs === 2) return wide ? 1.0 : 1.4
  return wide ? 1.5 : 2.1
}

// Angle of each leg to the vertical from its length and the plan distance
// between the hook centre-line and the lifting point. Null if impossible.
export function angleFromGeometry(legLengthM, planRadiusM) {
  if (!(legLengthM > 0) || !(planRadiusM >= 0) || planRadiusM >= legLengthM) return null
  return deg(Math.asin(planRadiusM / legLengthM))
}

// Plan radius from the lifting point layout.
//   2 leg: spacing between the two points / 2
//   3 leg: points equally spaced on a circle, given its radius
//   4 leg: rectangle length x width -> half the diagonal
export function planRadius(legs, { spacingM, radiusM, lengthM, widthM }) {
  if (legs === 2) return spacingM / 2
  if (legs === 3) return radiusM
  if (legs === 4) return Math.sqrt(lengthM * lengthM + widthM * widthM) / 2
  return 0
}

// Tension in each loaded leg (same units as the load) if `sharing` legs
// carry it equally.
export function legTension(load, sharing, betaDeg) {
  return load / (sharing * Math.cos(rad(betaDeg)))
}

export function solve({ load, legs, betaDeg, choke }) {
  const m0 = modeFactor(legs, betaDeg)
  if (m0 === null) return { over60: true, betaDeg, included: 2 * betaDeg }
  const m = choke ? m0 * CHOKE_FACTOR : m0
  return {
    over60: false,
    betaDeg,
    included: legs === 1 ? 0 : 2 * betaDeg,
    mode: m,
    requiredLegWll: load / m,
    tensionAll: legs === 1 ? load : legTension(load, legs, betaDeg),
    tensionTwo: legs >= 3 ? legTension(load, 2, betaDeg) : null,
  }
}

// Worked example shown on the page, computed rather than typed.
export const WORKED_EXAMPLE = (() => {
  const input = { load: 3000, legs: 2, spacingM: 3.0, legLengthM: 2.5 }
  const betaDeg = angleFromGeometry(input.legLengthM, planRadius(2, { spacingM: input.spacingM }))
  return { input, ...solve({ load: input.load, legs: 2, betaDeg, choke: false }) }
})()
