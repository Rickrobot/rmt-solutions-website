/**
 * The lift plan decision logic, as data.
 *
 * This lives in its own module with no 'use client' on it because both halves
 * of the feature need it and they run in different places: the page is a server
 * component (it builds the HowTo and FAQPage schema from these labels at build
 * time) and the tool is a client component (it renders them as checkboxes).
 * Exporting the array from the client module instead looks like it works and
 * then fails the build — every export from a 'use client' file is a client
 * reference, so calling .map() on it from the server throws.
 *
 * The content is the printed A4 flowchart at
 * /downloads/lift-plan-decision-flowchart.pdf, which was written by the
 * Appointed Person whose name is on it. Change it here and the tool, the page
 * copy and the structured data all move together — which is the point, because
 * three copies of a safety categorisation that can drift apart is how a site
 * ends up contradicting its own PDF.
 */

/* The ten BS 7121-1 complex-lift triggers, in the order and wording of the
   printed sheet. One tick is enough: they are ORed, never weighted, and there
   is no score. A trigger either applies or it does not. */
export const COMPLEX_TRIGGERS = [
  { id: 'tandem',   label: 'Two or more cranes lifting one load (tandem lift)' },
  { id: 'people',   label: 'Lifting people — man basket or personnel carrier' },
  { id: 'capacity', label: "Load is close to the machine's rated capacity" },
  { id: 'blind',    label: 'Blind lift — operator cannot see the load or landing area' },
  { id: 'over',     label: 'Lifting over a live road, railway, waterway or occupied building' },
  { id: 'services', label: 'Working near overhead power lines or live services' },
  { id: 'unknown',  label: 'Load weight or centre of gravity is unknown or awkward' },
  { id: 'ground',   label: 'Ground conditions unproven, made ground, or near an excavation' },
  { id: 'overlap',  label: 'Multiple machines with overlapping working radii' },
  { id: 'wind',     label: "Lifting in exceptional wind, or outside the manufacturer's chart" },
]

/* What counts as lifting equipment for the Regulation 8 question. */
export const EQUIPMENT_HINT =
  'Crane · telehandler · lorry loader (HIAB) · excavator lifting · gantry · hoist · MEWP carrying a load'

/* What each category requires, in the flowchart's own words. */
export const CATEGORIES = [
  {
    name: 'Basic lift',
    when: 'Routine and repetitive: same machine, same load type, same conditions, already covered by a schedule of common lifts.',
    rule: 'A generic plan or schedule of common lifts may be used — but it must still be reviewed against the actual site first.',
  },
  {
    name: 'Standard lift',
    when: 'No complex trigger applies, but the lift is not routine. The great majority of commercial lifts sit here.',
    rule: 'A site-specific written lift plan by an Appointed Person, briefed to the whole lifting team before work starts.',
  },
  {
    name: 'Complex lift',
    when: 'Any one of the ten BS 7121-1 triggers applies.',
    rule: 'A detailed, lift-specific written plan prepared by an Appointed Person with competence appropriate to the lift — commonly CPCS A61 Advanced. A generic plan is never sufficient.',
  },
]

/* The three rejection reasons from the foot of the printed sheet. */
export const REJECTION_REASONS = [
  {
    t: 'Generic plan, never site-checked',
    d: 'A schedule of common lifts is not a lift plan until someone has stood on the actual ground and signed it off.',
  },
  {
    t: 'Load weight taken on trust',
    d: '“About two tonne” is not a weight. Get it from the delivery note, the drawing or a calculation.',
  },
  {
    t: 'Capacity read at the wrong radius',
    d: 'Utilisation must be checked at the worst-case radius of the whole operation, with all deductions applied.',
  },
]
