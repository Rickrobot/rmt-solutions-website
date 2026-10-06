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
]
