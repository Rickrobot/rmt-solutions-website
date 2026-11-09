/**
 * Crane wind speed for large-area loads: the arithmetic behind
 * /resources/crane-wind-speed-calculator (Nov 2026).
 *
 * Basis: EN 13000 mobile crane load charts assume the load has a wind area
 * (projected area x drag coefficient cw) of no more than 1.2 m2 per tonne.
 * Above that, the maximum permissible wind speed falls (Liebherr, "Influence
 * of wind on crane operation", section 5.2):
 *     v_max = v_chart x sqrt(1.2 m2/t x m_H / A_W),   A_W = A_P x c_w
 * m_H is the hoisted load in tonnes including the hook block and lifting
 * accessories. Speeds are 3-second gusts at the highest point of the crane.
 * At or below 1.2 m2/t the chart wind speed applies unchanged.
 * Checked against Liebherr's published examples: 65 t, 280 m2, 11.2 m/s ->
 * 5.9 m/s; 70 t, 110 m2, 9.0 m/s -> 7.9 m/s.
 */

export const REF_AREA_PER_T = 1.2

// Drag coefficient ranges from the Liebherr training document; the presets use
// the top of each range so the answer is on the safe side.
export const CW_PRESETS = [
  { id: 'plate', label: 'Flat panel, plate or box', cw: 2.0, range: '1.1 to 2.0' },
  { id: 'cylinder', label: 'Cylinder (tank, pipe, column)', cw: 1.0, range: '0.6 to 1.0' },
  { id: 'rotor', label: 'Wind turbine rotor blade', cw: 1.6, range: 'about 1.6' },
  { id: 'sphere', label: 'Sphere', cw: 0.4, range: '0.3 to 0.4' },
]

export const SOURCES = {
  liebherr: 'Liebherr-Werk Ehingen, Influence of wind on crane operation (training document), section 5.2',
  en13000: 'BS EN 13000, Cranes — Mobile cranes (1.2 m²/t load wind area reference)',
}

export const msToMph = (v) => v * 2.236936
export const msToKmh = (v) => v * 3.6

export function windArea(projectedM2, cw) {
  return projectedM2 * cw
}

export function permissibleWindSpeed({ chartMs, loadT, windAreaM2 }) {
  const ratio = windAreaM2 / loadT
  if (ratio <= REF_AREA_PER_T) return { ratio, vmax: chartMs, reduced: false }
  return { ratio, vmax: chartMs * Math.sqrt((REF_AREA_PER_T * loadT) / windAreaM2), reduced: true }
}

// Worked example shown on the page: a 6 m x 3 m cladding panel.
export const WORKED_EXAMPLE = (() => {
  const input = { panelL: 6, panelH: 3, cw: 2.0, loadT: 4.0, chartMs: 9.0 }
  const ap = input.panelL * input.panelH
  const aw = windArea(ap, input.cw)
  return { input, ap, aw, ...permissibleWindSpeed({ chartMs: input.chartMs, loadT: input.loadT, windAreaM2: aw }) }
})()
