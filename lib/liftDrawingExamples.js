const image = (name, title, caption, alt) => ({
  src: `/images/lift-drawing-examples/${name}.webp`, title, caption, alt,
})

export const liftDrawingExamples = [
  {
    id: 'steel', title: 'Steel erection lift plan drawings',
    label: 'Steel erection', href: '/services/steel-erection',
    summary: 'See the lifting arrangement, structural cross-section and rafter rigging in an example steel erection drawing set.',
    introduction: 'These steel erection planning drawings show how the crane arrangement, steelwork geometry and rigging details can be brought together in a clear drawing package. The different views help the lifting team understand the proposed operation and the relationship between the crane, load and structure.',
    pdf: 'steel-erection-drawing-examples.pdf', pages: 3,
    drawings: [
      image('steel-erection-3d', 'Steel erection lifting arrangement', 'A three-dimensional view of the proposed crane and steelwork arrangement, helping the team visualise the lift within the building frame.', 'RMT steel erection lift plan drawing showing a crane and steel building frame in three dimensions'),
      image('steel-erection-section', 'Structural cross-section', 'A section view showing the relationship between the proposed lifting arrangement and the steel structure.', 'RMT steel erection cross-section drawing showing the crane and structural steelwork'),
      image('steel-erection-rigging', 'Rafter rigging detail', 'A supporting rigging drawing showing the proposed lifting arrangement for a steel rafter.', 'RMT steel rafter rigging drawing showing lifting accessories and their arrangement'),
    ],
  },
  {
    id: 'excavator', title: 'Excavator lift plan drawings',
    label: 'Excavator lifting', href: '/services/excavator-lift-plans',
    summary: 'Explore a JCB 140X lifting example with an elevation, exclusion-zone plan and rigging detail.',
    introduction: 'This JCB 140X LC example illustrates the proposed lifting arrangement for a trench box. The elevation, plan view and rigging detail communicate different parts of the operation: machine and load position, working area and exclusion zone, and the connection between the load and lifting accessories.',
    pdf: 'excavator-drawing-examples.pdf', pages: 3,
    drawings: [
      image('excavator-elevation', 'JCB 140X lifting elevation', 'The side elevation shows the proposed excavator and trench-box arrangement, with the lifting geometry presented alongside the load.', 'RMT excavator lift drawing showing a JCB 140X LC lifting a trench box'),
      image('excavator-plan', 'Working area and exclusion zone', 'The plan view shows the proposed working area and exclusion zone in relation to the excavator and lifting operation.', 'RMT excavator plan drawing showing the machine layout and marked exclusion zone'),
      image('excavator-rigging', 'Trench-box rigging detail', 'The rigging detail sets out the proposed lifting accessories and connections for the trench-box load.', 'RMT excavator rigging drawing showing trench-box lifting connections'),
    ],
  },
  {
    id: 'lorry-loader', title: 'Transformer installation lift plan drawings',
    label: 'Lorry loader / transformer installation', href: '/services/lorry-loader-lift-plans',
    summary: 'View the Fassi F905R.2 transformer installation example, including positioning, rigging and lifting-point details.',
    introduction: 'This lorry loader planning example covers the proposed offloading and positioning of two transformer units onto plinths using a Fassi F905R.2. The drawing set brings together the crane and load arrangement, plan view, rigging and lifting-point details so the proposed sequence can be understood and briefed.',
    pdf: 'transformer-lorry-loader-drawing-examples.pdf', pages: 4,
    drawings: [
      image('transformer-elevation', 'Transformer installation elevation', 'The elevation shows the proposed Fassi lorry loader arrangement for lifting and positioning the transformer units.', 'RMT transformer installation elevation showing a Fassi F905R.2 lorry loader and transformer loads'),
      image('transformer-plan', 'Lorry loader positioning plan', 'The plan view shows the proposed vehicle, crane and transformer positions for the installation arrangement.', 'RMT transformer installation plan showing lorry loader positioning and transformer placement'),
      image('transformer-rigging', 'Transformer rigging arrangement', 'The rigging sheet shows the proposed lifting accessories and arrangement for handling the transformer units.', 'RMT transformer rigging drawing showing lifting accessories and transformer connections'),
      image('transformer-lifting-points', 'Lifting-point details', 'A closer view of the transformer lifting-point details supports the proposed rigging arrangement.', 'RMT transformer drawing showing lifting-point and rigging connection details'),
    ],
  },
  {
    id: 'telehandler', title: 'Telehandler lift plan drawings',
    label: 'Telehandler lifting', href: '/services/telehandler-lift-plans',
    summary: 'See JCB 540-140 drawings for trailer unloading, material handling, scaffold loading bays and wide loads.',
    introduction: 'This JCB 540-140 Hi-Viz example shows how material-handling operations can be presented in a detailed telehandler drawing package. The drawings cover trailer unloading, travel and stacking, scaffold loading bays, wide and special loads, and the unloading and laydown area. They distinguish fork duties from the separately specified hook arrangement.',
    pdf: 'telehandler-drawing-examples.pdf', pages: 4,
    drawings: [
      image('telehandler-unloading-travel-stacking', 'Unloading, travel and stacking', 'Three elevation views illustrate the proposed trailer-unloading set-up, low travel position and stacking arrangement, with numbered briefing callouts.', 'RMT JCB 540-140 telehandler drawing showing trailer unloading, low travel and stacking arrangements'),
      image('telehandler-scaffold-loading-bays', 'Scaffold loading bay arrangement', 'The elevation relates the proposed telehandler positions to scaffold loading levels and highlights the need to check the receiving bay design.', 'RMT telehandler elevation showing proposed reach and scaffold loading bay levels'),
      image('telehandler-wide-special-loads', 'Wide and special loads', 'Separate views show wide loads on forks, a tipping skip, kentledge and a fork-mounted hook arrangement. Each duty needs its own equipment and load checks.', 'RMT telehandler drawing showing wide loads, tipping skip, kentledge and fork-mounted hook duties'),
      image('telehandler-unloading-laydown-plan', 'Unloading and laydown plan', 'The plan view brings together the proposed delivery vehicle, telehandler working positions, exclusion zone and laydown areas.', 'RMT telehandler plan drawing showing delivery vehicle positioning, unloading exclusion zone and laydown areas'),
    ],
  },
]

// Date these public examples and their landing-page galleries were published.
export const LIFT_DRAWINGS_PUBLISHED = '2026-10-06'
