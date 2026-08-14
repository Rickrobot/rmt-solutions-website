// Per-trade RAMS content for /services/method-statements-rams/[trade].
//
// Why this file exists:
//   A single "we cover all trades" page cannot rank for "roofing method
//   statement" AND "groundworks RAMS" AND "demolition method statement" —
//   Google needs a page per intent. More importantly, a chip labelled
//   "Roofing" proves nothing about competence; a page that discusses fragile
//   surfaces, edge protection and the Work at Height Regulations does.
//
//   Each entry below must carry genuine, trade-specific substance — the real
//   hazards, the regulations that actually apply, and the rejection patterns
//   seen on the reviewing side. Thin templated variants would be worse than
//   no page at all: Google treats near-identical pages as doorway pages, and
//   a subcontractor reading generic filler will not believe we know the trade.
//
// To add a trade: add an entry here. The route, sitemap and hub chips all
// derive from this object, so nothing else needs editing.

export const TRADES = {
  'groundworks': {
    name: 'Groundworks & Excavation',
    shortName: 'Groundworks',
    metaTitle: 'Groundworks Method Statement & RAMS Writing UK',
    metaDescription:
      'Bespoke groundworks and excavation method statements and risk assessments. Buried services, excavation support, confined spaces. Rejected RAMS rewritten — 24-48hr.',
    keywords:
      'groundworks method statement, excavation RAMS, groundworks risk assessment, excavation method statement, buried services method statement, HSG47, trench support RAMS, drainage method statement',
    intro:
      'Groundworks RAMS are rejected more often than almost any other trade, and usually for the same two reasons: the buried services regime is described generically rather than against the actual site drawings and scan results, and the excavation support arrangements are asserted rather than specified. Principal contractors scrutinise this package hard, because struck services and collapsed excavations are the incidents that kill people on their site.',
    activities: [
      'Bulk and reduced-level excavation',
      'Trench and pit excavation for drainage and foundations',
      'Buried service location, exposure and diversion',
      'Excavation support — trench boxes, sheeting, battering',
      'Drainage installation and connections',
      'Piling mats and working platforms',
      'Muckaway, tipping and stockpiling',
      'Backfill, compaction and reinstatement',
    ],
    hazards: [
      'Contact with buried services — electricity, gas, water, telecoms',
      'Excavation collapse and entrapment',
      'Persons and plant falling into excavations',
      'Plant / pedestrian interface and blind spots',
      'Confined space atmospheres in deep excavations and chambers',
      'Contaminated ground and hazardous substances',
      'Water ingress, flooding and unstable ground',
      'Undermining adjacent structures and foundations',
      'Overhead services during plant slewing and tipping',
    ],
    regulations: [
      { ref: 'CDM 2015', detail: 'Regulations 15 and 22 — contractor planning duties and specific requirements for excavations.' },
      { ref: 'HSG47', detail: 'Avoiding danger from underground services — the benchmark for the plan, locate, dig sequence.' },
      { ref: 'Confined Spaces Regulations 1997', detail: 'Applies to deep excavations, chambers and manholes where a specified risk exists.' },
      { ref: 'PUWER 1998', detail: 'Excavator and attachment suitability, inspection and operator competence.' },
      { ref: 'LOLER 1998', detail: 'Engages whenever the excavator is used for lifting — pipes, chambers, cages.' },
      { ref: 'BS 6031', detail: 'Code of practice for earthworks — support design and slope stability.' },
    ],
    rejectionReasons: [
      'Buried services covered by a generic paragraph with no reference to the actual C2 drawings, GPR survey or CAT scan regime',
      'No permit-to-dig arrangement, or one referenced but not described',
      'Excavation support described as "as required" rather than specified by depth, ground type and method',
      'No named competent person for inspecting excavations, and no inspection record referenced',
      'Confined space risk in deep excavations not identified at all',
      'Plant / pedestrian segregation asserted without a traffic management arrangement',
      'Ground investigation and contamination findings not referenced',
      'Lifting with the excavator not covered, despite the method describing pipe and chamber placement',
    ],
    liftingNote:
      'Groundworks method statements very often include lifting that the writer has not recognised as lifting — placing drainage pipes, chambers, headwalls or cages with an excavator brings the operation under LOLER 1998. That is a routine rejection point, and one we cover as a matter of course.',
    liftingLink: { href: '/services/excavator-lift-plans', label: 'excavator lift plans' },
  },

  'demolition': {
    name: 'Demolition & Soft Strip',
    shortName: 'Demolition',
    metaTitle: 'Demolition Method Statement & RAMS Writing UK',
    metaDescription:
      'Demolition and soft strip method statements and risk assessments to BS 6187. Asbestos, structural stability, exclusion zones. Rejected RAMS rewritten — 24-48hr.',
    keywords:
      'demolition method statement, demolition RAMS, soft strip method statement, BS 6187, demolition risk assessment, asbestos soft strip RAMS, structural demolition method statement',
    intro:
      'Demolition is the most heavily scrutinised RAMS package on most sites, and rightly so — the failure modes are catastrophic and often affect people well outside the working area. Principal contractors expect the document to demonstrate that a competent person has assessed structural stability and sequenced the works accordingly, not simply that the right machine has been booked.',
    activities: [
      'Pre-demolition asbestos and refurbishment survey review',
      'Soft strip of fixtures, fittings and non-structural elements',
      'Structural demolition — mechanical, high reach and progressive',
      'Facade retention and temporary propping interfaces',
      'Deconstruction and material segregation',
      'Service isolation, capping and disconnection',
      'Crushing, processing and material removal',
      'Site clearance and slab breakout',
    ],
    hazards: [
      'Premature or uncontrolled structural collapse',
      'Asbestos-containing materials disturbed during strip out',
      'Falls from height at open edges and floor openings',
      'Falling debris and material outside the exclusion zone',
      'Live services not isolated before works begin',
      'Silica dust, lead paint and other hazardous substances',
      'Plant stability on debris and unconsolidated ground',
      'Noise and vibration affecting operatives and neighbours',
      'Fire during hot works and from combustible arisings',
    ],
    regulations: [
      { ref: 'CDM 2015', detail: 'Regulation 20 — demolition or dismantling must be planned in writing before work begins.' },
      { ref: 'BS 6187:2011', detail: 'Code of practice for full and partial demolition — the reference standard for sequence and method.' },
      { ref: 'Control of Asbestos Regulations 2012', detail: 'Survey, licensed and non-licensed work, notification and NNLW classification.' },
      { ref: 'Work at Height Regulations 2005', detail: 'Open edges, floor openings and access during progressive demolition.' },
      { ref: 'COSHH 2002', detail: 'Silica, lead, and other substances liberated during breaking and stripping.' },
      { ref: 'Control of Noise at Work Regulations 2005', detail: 'Exposure assessment for breaking, crushing and processing.' },
    ],
    rejectionReasons: [
      'No reference to a structural survey or engineer’s demolition sequence, only a description of plant',
      'Asbestos survey referenced but findings not carried into the method or the risk assessment',
      'Exclusion zones stated as a distance with no justification against structure height or reach',
      'No written demolition plan as required by CDM 2015 Regulation 20 — the RAMS alone offered instead',
      'Service isolation described in the future tense with no permit or evidence route',
      'Progressive collapse and pre-weakening not addressed where high-reach plant is proposed',
      'Dust suppression mentioned without water supply, method or monitoring',
      'No arrangements for unexpected discovery of asbestos or unrecorded structures',
    ],
    liftingNote:
      'Where demolition involves controlled lifting of structural sections, precast panels or plant, that element engages LOLER 1998 and normally needs a written lift plan alongside the RAMS. We produce both as one package so the two documents actually agree with each other.',
    liftingLink: { href: '/services/lift-plans', label: 'lift plan writing' },
  },

  'roofing-work-at-height': {
    name: 'Roofing & Work at Height',
    shortName: 'Roofing & work at height',
    metaTitle: 'Roofing Method Statement & Work at Height RAMS UK',
    metaDescription:
      'Roofing and work at height method statements and risk assessments to HSG33. Fragile surfaces, edge protection, MEWPs, rescue plans. Rejected RAMS rewritten.',
    keywords:
      'roofing method statement, work at height RAMS, fragile roof method statement, HSG33, roofing risk assessment, edge protection method statement, MEWP RAMS, rescue plan work at height',
    intro:
      'Falls remain the largest single cause of construction fatalities in the UK, so work at height RAMS get read carefully and rejected readily. The two failure points that come up most are fragile surfaces treated as an afterthought, and rescue arrangements that amount to "call 999" — which is not a rescue plan and reviewers know it.',
    activities: [
      'Flat and pitched roof coverings',
      'Single ply, felt, liquid and hot melt systems',
      'Sheeting, cladding and rooflight installation',
      'Fragile roof access and replacement',
      'Roof-mounted plant installation and maintenance',
      'Edge protection and temporary safety systems',
      'Gutter, flashing and parapet works',
      'MEWP, tower and scaffold access to height',
    ],
    hazards: [
      'Falls from open edges, roof perimeters and leading edges',
      'Falls through fragile surfaces — rooflights, asbestos cement, degraded decking',
      'Falls through floor and roof openings',
      'Falling materials and tools striking those below',
      'Wind loading on sheets, membranes and personnel',
      'Hot works, torch-on systems and fire risk',
      'MEWP entrapment, overturning and rescue at height',
      'Manual handling of sheets and rolls at height',
      'Fragile or unverified anchor points for fall arrest',
    ],
    regulations: [
      { ref: 'Work at Height Regulations 2005', detail: 'The hierarchy — avoid, prevent, minimise — must be visibly applied, not just quoted.' },
      { ref: 'HSG33', detail: 'Health and safety in roof work — the reference guidance for fragile surfaces and roof access.' },
      { ref: 'CDM 2015', detail: 'Contractor planning duties and coordination with the principal contractor.' },
      { ref: 'PUWER 1998', detail: 'MEWPs, tower scaffolds and access equipment — suitability, inspection and competence.' },
      { ref: 'LOLER 1998', detail: 'MEWPs and any equipment lifting persons require thorough examination at six-monthly intervals.' },
      { ref: 'Regulatory Reform (Fire Safety) Order 2005', detail: 'Hot works, torch-on systems and fire watch arrangements.' },
    ],
    rejectionReasons: [
      'Fragile surfaces not identified, or identified without stating how they are protected or covered',
      'Fall arrest specified with no named anchor point, no anchor test evidence and no rescue plan',
      'Rescue arrangements stated as "emergency services will attend" — suspension trauma not addressed',
      'Collective protection dismissed in favour of harnesses with no justification against the hierarchy',
      'Wind speed limits not stated, or stated without the measurement method and stop trigger',
      'MEWP thorough examination and operator IPAF categories not evidenced',
      'No exclusion zone below the works for falling materials',
      'Hot works described without a permit, fire watch duration or extinguisher provision',
    ],
    liftingNote:
      'Loading out materials to roof level — by telehandler, lorry loader or crane — is a lifting operation under LOLER 1998 and needs planning by a competent person. It is one of the most commonly missed elements in an otherwise sound roofing RAMS.',
    liftingLink: { href: '/services/telehandler-lift-plans', label: 'telehandler lift plans' },
  },

  'mechanical-electrical': {
    name: 'Mechanical & Electrical Installation',
    shortName: 'M&E installation',
    metaTitle: 'M&E Method Statement & RAMS Writing UK | Electrical',
    metaDescription:
      'Mechanical and electrical installation method statements and risk assessments. Safe isolation, LOTO, plant lifts, pressure testing. Rejected RAMS rewritten — 24-48hr.',
    keywords:
      'M&E method statement, electrical method statement, mechanical installation RAMS, safe isolation method statement, HSG85, electrical risk assessment, plant room installation RAMS, lock off tag out',
    intro:
      'M&E subcontractors submit more RAMS than almost anyone else on a project, and they are frequently produced under time pressure by people who are excellent installers but have never sat on the reviewing side. The recurring rejection is safe isolation described in general terms rather than as a specific, auditable procedure with named competent persons.',
    activities: [
      'Containment, tray and basket installation',
      'Cable pulling, termination and testing',
      'Distribution board and switchgear installation',
      'Plant room mechanical installation',
      'Ductwork and pipework installation',
      'Sprinkler and wet riser installation',
      'Commissioning, energisation and pressure testing',
      'Rooftop and external plant installation',
    ],
    hazards: [
      'Contact with live conductors and stored energy',
      'Arc flash and burns during switching',
      'Inadvertent re-energisation during works',
      'Work at height on containment and plant runs',
      'Manual handling of cable drums, plant and ductwork',
      'Hot works during brazing, welding and soldering',
      'Confined spaces in plant rooms, risers and voids',
      'Pressure release during testing and commissioning',
      'Legionella risk during water system commissioning',
    ],
    regulations: [
      { ref: 'Electricity at Work Regulations 1989', detail: 'Regulations 12 to 14 — isolation, work on or near live conductors, and competence.' },
      { ref: 'HSG85', detail: 'Electricity at work: safe working practices — the benchmark for safe isolation procedure.' },
      { ref: 'BS 7671', detail: 'Wiring regulations — installation, inspection and testing requirements.' },
      { ref: 'CDM 2015', detail: 'Contractor planning duties and interface with other trades in shared spaces.' },
      { ref: 'Confined Spaces Regulations 1997', detail: 'Risers, ducts, plant rooms and voids where a specified risk exists.' },
      { ref: 'Pressure Systems Safety Regulations 2000', detail: 'Pressure testing and commissioning of systems.' },
    ],
    rejectionReasons: [
      'Safe isolation described generically with no reference to HSG85 and no lock-off / tag-out detail',
      'No named competent and authorised persons for isolation and switching',
      'Proving dead and the use of an approved voltage indicator not described',
      'Permit-to-work interface with the principal contractor not established',
      'Work at height on containment runs not covered because the document focuses on the electrical risk',
      'Hot works included in the method with no permit or fire watch arrangement',
      'Riser and void access not recognised as potential confined space',
      'Testing and commissioning phases absent — the RAMS stops at installation',
    ],
    liftingNote:
      'Rooftop plant, chillers, AHUs, transformers and packaged plant almost always arrive by crane. That lift needs planning under LOLER 1998 by a competent person, and a principal contractor will expect the lift plan and the M&E method statement to be consistent with each other.',
    liftingLink: { href: '/services/mobile-crane-lift-plans', label: 'mobile crane lift plans' },
  },

  'steel-erection': {
    name: 'Steel Erection',
    shortName: 'Steel erection',
    metaTitle: 'Steel Erection Method Statement & RAMS Writing UK',
    metaDescription:
      'Structural steel erection method statements and risk assessments to BS 5531. Erection sequence, temporary stability, connection access. Rejected RAMS rewritten.',
    keywords:
      'steel erection method statement, steelwork RAMS, BS 5531, structural steel risk assessment, steel erection sequence method statement, steelwork safety method statement',
    intro:
      'Steel erection sits at the intersection of work at height, lifting operations and temporary structural stability, which is why the RAMS is scrutinised by both the site team and often the structural engineer. The most common rejection is a method statement that describes the picks but not the stability of the frame between them.',
    activities: [
      'Setting out and holding-down bolt verification',
      'Column, beam and bracing erection',
      'Temporary bracing and stability arrangements',
      'Connection access — MEWPs, nets and fall arrest',
      'Bolting up, torquing and final alignment',
      'Metal decking and shear stud installation',
      'Secondary steelwork and edge protection',
      'Tandem and complex picks',
    ],
    hazards: [
      'Frame instability before bracing is complete',
      'Falls from height during connection and decking',
      'Falling loads, tools and connection components',
      'Crane overturning and ground bearing failure',
      'Load swing and side loading during erection',
      'Trapped and crushed hands during landing',
      'Wind loading on erected and partially braced frames',
      'Access difficulties for connectors at height',
    ],
    regulations: [
      { ref: 'BS 5531', detail: 'Code of practice for the safe erection of structural steelwork.' },
      { ref: 'Work at Height Regulations 2005', detail: 'Connection access, nets, MEWPs and the fall protection hierarchy.' },
      { ref: 'LOLER 1998', detail: 'Regulation 8 — every lifting operation planned by a competent person.' },
      { ref: 'BS 7121', detail: 'Safe use of cranes — planning, supervision and the Appointed Person role.' },
      { ref: 'CDM 2015', detail: 'Contractor duties and the temporary works coordination interface.' },
      { ref: 'PUWER 1998', detail: 'Erection plant, MEWPs and powered access equipment.' },
    ],
    rejectionReasons: [
      'Erection sequence described without reference to temporary stability between picks',
      'No temporary bracing detail, or bracing shown as the steelwork designer’s responsibility with no evidence',
      'Fall protection at connections defaulting to harnesses with no anchor detail or rescue plan',
      'Lift plan and method statement inconsistent — different crane, radius or sequence in each',
      'Wind speed limits absent, despite erected frames being wind-sensitive',
      'No verification of holding-down bolts, base plates or foundation readiness',
      'Decking and edge protection sequence not described',
      'Tandem picks mentioned without load share calculation or crane derating',
    ],
    liftingNote:
      'Steel erection is a lifting operation as much as a steelwork operation. We produce the RAMS and the lift plan together as a CPCS A61 Appointed Person, which removes the single most common rejection point — the two documents contradicting each other.',
    liftingLink: { href: '/services/steel-erection', label: 'steel erection planning' },
  },

  'concrete-works': {
    name: 'Concrete Works & Temporary Works',
    shortName: 'Concrete & temporary works',
    metaTitle: 'Concrete & Temporary Works Method Statement | RAMS UK',
    metaDescription:
      'Concrete, formwork and temporary works method statements and risk assessments to BS 5975. Falsework, pours, striking times. Rejected RAMS rewritten — 24-48hr.',
    keywords:
      'concrete method statement, formwork RAMS, temporary works method statement, BS 5975, falsework method statement, concrete pour risk assessment, striking times method statement',
    intro:
      'Concrete and temporary works RAMS fail most often on the interface with the temporary works procedure — reviewers look for evidence that a Temporary Works Coordinator has been engaged and that designs, checks and permits to load and strike are built into the sequence. A method statement that treats formwork as just another material rarely survives review.',
    activities: [
      'Formwork and falsework erection and striking',
      'Reinforcement fixing and placement',
      'Concrete placement — pump, skip and direct discharge',
      'Slipform and jumpform operations',
      'Precast erection and grouting',
      'Curing, testing and finishing',
      'Post-tensioning operations',
      'Temporary works propping and back-propping',
    ],
    hazards: [
      'Formwork or falsework collapse during pour',
      'Premature striking before design strength achieved',
      'Falls from height at edges, voids and rising formwork',
      'Concrete pump line blockage and whipping',
      'Cement burns, dermatitis and eye injury',
      'Silica dust from cutting, grinding and scabbling',
      'Reinforcement impalement and protruding bars',
      'Manual handling of formwork panels and rebar',
      'Post-tensioning strand release and stressing zone risk',
    ],
    regulations: [
      { ref: 'BS 5975', detail: 'Code of practice for temporary works procedures — TWC and TWS roles, design and permits.' },
      { ref: 'CDM 2015', detail: 'Contractor planning duties and structural stability requirements.' },
      { ref: 'Work at Height Regulations 2005', detail: 'Edge protection at slab edges, voids and rising formwork.' },
      { ref: 'COSHH 2002', detail: 'Cement, silica dust, release agents and admixtures.' },
      { ref: 'PUWER 1998', detail: 'Concrete pumps, vibrators, power floats and cutting equipment.' },
      { ref: 'LOLER 1998', detail: 'Skips, formwork panels and precast units lifted into position.' },
    ],
    rejectionReasons: [
      'No reference to the temporary works register, design brief or TWC sign-off',
      'Striking times stated as fixed periods with no reference to cube results or design',
      'Permit to load and permit to strike not built into the sequence',
      'Pour rate and pressure not addressed against the formwork design',
      'Silica dust from cutting and scabbling not assessed under COSHH',
      'Edge protection at rising slab edges described generically',
      'Concrete pump siting, outrigger loading and ground bearing not covered',
      'Back-propping arrangements missing where floors are loaded early',
    ],
    liftingNote:
      'Skips, formwork panels, rebar cages and precast units are all lifted, which brings LOLER 1998 into play. Where the RAMS describes craneage we produce the accompanying lift plan so the two documents agree.',
    liftingLink: { href: '/services/lift-plans', label: 'lift plan writing' },
  },

  'cladding-facades': {
    name: 'Cladding & Facades',
    shortName: 'Cladding & facade',
    metaTitle: 'Cladding & Facade Method Statement & RAMS Writing UK',
    metaDescription:
      'Cladding, curtain walling and facade method statements and risk assessments. Panel lifts, access, fire performance, wind loading. Rejected RAMS rewritten.',
    keywords:
      'cladding method statement, facade RAMS, curtain walling method statement, cladding risk assessment, panel installation method statement, rainscreen RAMS',
    intro:
      'Facade work draws close attention post-Grenfell, and reviewers now expect the RAMS to address material specification and fire performance during construction alongside the physical installation risk. Panel handling at height in wind is the operational risk that gets picked apart.',
    activities: [
      'Curtain walling and unitised panel installation',
      'Rainscreen and rendered facade systems',
      'Insulation and cavity barrier installation',
      'SFS framing and sheathing board',
      'Window and glazing installation',
      'Panel lifting, positioning and fixing',
      'Mast climber, MEWP and cradle access',
      'Sealing, weathering and remedial works',
    ],
    hazards: [
      'Falls from height at open facades and leading edges',
      'Dropped panels, glazing and components',
      'Wind loading on large panels during handling',
      'Glazing breakage and cutting injury',
      'Mast climber and cradle failure or entrapment',
      'Manual handling of heavy and awkward units',
      'Fire risk from combustible materials during construction',
      'Vacuum lifter failure during glazing installation',
      'Interface with scaffold and other trades at the facade',
    ],
    regulations: [
      { ref: 'Work at Height Regulations 2005', detail: 'Access selection, edge protection and the fall protection hierarchy.' },
      { ref: 'CDM 2015', detail: 'Contractor duties and coordination at the facade interface.' },
      { ref: 'LOLER 1998', detail: 'Panel lifts, vacuum lifters, mast climbers and cradles.' },
      { ref: 'PUWER 1998', detail: 'Mast climbers, MEWPs and powered access — inspection and competence.' },
      { ref: 'Regulatory Reform (Fire Safety) Order 2005', detail: 'Fire performance and combustible materials during the construction phase.' },
      { ref: 'BS 8213 / BS 6262', detail: 'Window installation and glazing safety practice.' },
    ],
    rejectionReasons: [
      'Wind limits for panel handling not stated, or stated with no measurement method',
      'Vacuum lifter used without reference to LOLER thorough examination or failure mode',
      'Mast climber and cradle inspection regime not evidenced',
      'Dropped-object prevention limited to "tools will be tethered" with no exclusion zone',
      'Fire strategy for combustible materials during construction not addressed',
      'Panel weights and lifting arrangements absent from the method',
      'Interface with the scaffold contractor undefined',
      'Rescue from mast climber or cradle not planned',
    ],
    liftingNote:
      'Facade panels, glazing units and curtain walling cassettes are lifted into position — usually by crane or vacuum lifter, often in wind-sensitive conditions. That element needs planning under LOLER 1998 by a competent person and is a routine rejection point when omitted.',
    liftingLink: { href: '/services/mobile-crane-lift-plans', label: 'mobile crane lift plans' },
  },

  'confined-spaces': {
    name: 'Confined Space Working',
    shortName: 'Confined spaces',
    metaTitle: 'Confined Space Method Statement & RAMS Writing UK',
    metaDescription:
      'Confined space method statements and risk assessments to L101. Atmospheric monitoring, entry permits, rescue arrangements. Rejected RAMS rewritten — 24-48hr.',
    keywords:
      'confined space method statement, confined space RAMS, L101, confined space risk assessment, entry permit method statement, confined space rescue plan',
    intro:
      'Confined space RAMS are rejected on rescue arrangements more than anything else. The Confined Spaces Regulations require suitable and sufficient arrangements for rescue to be in place before entry, and a document that names no rescue team, no equipment and no trigger will not be accepted by any competent reviewer.',
    activities: [
      'Chambers, manholes and drainage systems',
      'Tanks, vessels and silos',
      'Deep excavations meeting confined space criteria',
      'Risers, ducts, voids and roof spaces',
      'Basements and undercroft areas',
      'Sewer and culvert entry',
      'Plant rooms with restricted access',
      'Inspection, cleaning and maintenance entries',
    ],
    hazards: [
      'Oxygen deficiency or enrichment',
      'Flammable and explosive atmospheres',
      'Toxic gases — hydrogen sulphide, carbon monoxide, methane',
      'Engulfment by liquids, grain or free-flowing solids',
      'Restricted access impeding escape and rescue',
      'Heat stress in unventilated spaces',
      'Drowning and rising water levels',
      'Isolation failure and inadvertent introduction of substances',
      'Rescuer casualties — the majority of confined space deaths',
    ],
    regulations: [
      { ref: 'Confined Spaces Regulations 1997', detail: 'Avoid entry where reasonably practicable; safe system of work and rescue arrangements if not.' },
      { ref: 'L101', detail: 'Safe work in confined spaces — the ACOP and the reviewing benchmark.' },
      { ref: 'CDM 2015', detail: 'Contractor planning duties and coordination with the principal contractor.' },
      { ref: 'DSEAR 2002', detail: 'Where flammable or explosive atmospheres may be present.' },
      { ref: 'COSHH 2002', detail: 'Substances present in or introduced into the space.' },
      { ref: 'PUWER / LOLER', detail: 'Tripods, winches and man-riding equipment used for entry and retrieval.' },
    ],
    rejectionReasons: [
      'Rescue arrangements limited to calling the emergency services — not a suitable arrangement under the Regulations',
      'No named rescue team, equipment list or rescue trigger',
      'Atmospheric monitoring stated without gas types, alarm levels or continuous-versus-spot detail',
      'No entry permit system, or one referenced but not included',
      'Top-man or attendant role not named and not given authority to abort',
      'Isolation of inflows and services not described',
      'Escape breathing apparatus not specified where the risk assessment implies it',
      'Space not properly classified — treated as a general work area',
    ],
    liftingNote:
      'Tripods, davits and winches used for entry and retrieval are lifting equipment for lifting persons under LOLER 1998, which brings a six-monthly thorough examination requirement and a higher factor of safety. That is frequently missed.',
    liftingLink: { href: '/services/lift-plans', label: 'lift plan writing' },
  },

  'site-logistics': {
    name: 'Site Logistics & Deliveries',
    shortName: 'Site logistics',
    metaTitle: 'Site Logistics Method Statement & Traffic RAMS UK',
    metaDescription:
      'Site logistics, delivery and traffic management method statements and risk assessments. Vehicle-pedestrian segregation, offloading, banksman. Rejected RAMS rewritten.',
    keywords:
      'site logistics method statement, traffic management RAMS, delivery method statement, vehicle pedestrian segregation, banksman method statement, site traffic risk assessment',
    intro:
      'Logistics RAMS are often treated as an administrative formality and then rejected because the vehicle-pedestrian interface is asserted rather than designed. Reviewers want to see a traffic management arrangement that reflects the actual site layout at the actual phase of works.',
    activities: [
      'Delivery scheduling and booking systems',
      'Vehicle routing, marshalling and turning',
      'Offloading by crane, forklift and lorry loader',
      'Material distribution and storage',
      'Waste segregation and removal',
      'Pedestrian route management',
      'Temporary works to hardstanding and access routes',
      'Site security and gate control',
    ],
    hazards: [
      'Vehicle striking pedestrians on site',
      'Reversing vehicles and blind spots',
      'Load instability during offloading',
      'Vehicle overturning on soft or uneven ground',
      'Falls from vehicles during sheeting and unsheeting',
      'Public interface at site entrances and on the highway',
      'Overhead services on delivery routes',
      'Manual handling during distribution',
    ],
    regulations: [
      { ref: 'CDM 2015', detail: 'Regulation 27 — traffic routes and vehicle-pedestrian segregation.' },
      { ref: 'Workplace Transport (HSG136)', detail: 'Safe workplace transport — the benchmark guidance for site traffic.' },
      { ref: 'LOLER 1998', detail: 'Offloading by lorry loader, forklift or crane is a lifting operation.' },
      { ref: 'PUWER 1998', detail: 'Site vehicles, forklifts and telehandlers — suitability and driver competence.' },
      { ref: 'Chapter 8 / NRSWA', detail: 'Where works affect the public highway.' },
      { ref: 'Road Traffic Act', detail: 'Vehicles entering and leaving the site, and wheel wash requirements.' },
    ],
    rejectionReasons: [
      'No traffic management plan or site layout drawing accompanying the method statement',
      'Segregation described in words with no physical barrier arrangement specified',
      'Banksman and marshal roles not named or trained-competence not evidenced',
      'Reversing described as "avoided where possible" with no turning arrangement designed',
      'Offloading described without recognising it as a lifting operation under LOLER',
      'Public highway interface not addressed where vehicles queue or reverse from the road',
      'Ground bearing for delivery vehicles and crane offloading not considered',
      'No arrangement for out-of-hours or unbooked deliveries',
    ],
    liftingNote:
      'Offloading is the part reviewers most often find missing. A delivery lifted off by lorry loader, telehandler or forklift is a lifting operation under LOLER 1998 and needs planning by a competent person — generic delivery lift plans cover repetitive deliveries efficiently.',
    liftingLink: { href: '/services/lorry-loader-lift-plans', label: 'lorry loader lift plans' },
  },

  'scaffolding': {
    name: 'Scaffolding & Temporary Access',
    shortName: 'Scaffolding',
    metaTitle: 'Scaffolding Method Statement & RAMS Writing UK | SG4',
    metaDescription:
      'Scaffolding method statements and risk assessments to TG20 and SG4. Design, loading, inspection, ties. Rejected RAMS rewritten and supported to acceptance.',
    keywords:
      'scaffolding method statement, scaffold RAMS, SG4, TG20, scaffolding risk assessment, scaffold erection method statement, scaffold inspection method statement',
    intro:
      'Scaffolding RAMS are reviewed against a well-established industry standard, which means gaps are obvious. The most common rejection is a document that does not make clear whether the scaffold is TG20 compliant or requires a bespoke design — and if bespoke, who designed it and to what loading class.',
    activities: [
      'Scaffold design, erection and dismantling',
      'Tube and fitting and system scaffold',
      'Loading bays and material platforms',
      'Temporary roofs and encapsulation',
      'Edge protection and crash decks',
      'Mobile tower erection',
      'Scaffold alteration and adaptation',
      'Statutory inspection and handover',
    ],
    hazards: [
      'Falls during erection, alteration and dismantling',
      'Scaffold collapse from inadequate ties or overloading',
      'Falling components and materials',
      'Instability during partial erection',
      'Wind loading on sheeted and encapsulated scaffolds',
      'Manual handling of tube, fittings and boards',
      'Contact with overhead services and structures',
      'Unauthorised alteration by other trades',
    ],
    regulations: [
      { ref: 'Work at Height Regulations 2005', detail: 'Regulation 12 — inspection requirements and the fall protection hierarchy.' },
      { ref: 'SG4 (NASC)', detail: 'Preventing falls in scaffolding operations — the industry benchmark for erection method.' },
      { ref: 'TG20 (NASC)', detail: 'Good practice guidance for tube and fitting scaffolds and compliance sheets.' },
      { ref: 'CDM 2015', detail: 'Temporary works coordination and contractor planning duties.' },
      { ref: 'BS 5975', detail: 'Temporary works procedures where a bespoke design is required.' },
      { ref: 'BS EN 12811', detail: 'Performance requirements and design for access scaffolds.' },
    ],
    rejectionReasons: [
      'No statement of whether the scaffold is TG20 compliant or bespoke designed',
      'Bespoke design referenced with no designer named and no design check evidenced',
      'Loading class not stated against the intended use',
      'Tie pattern and tie testing regime not described',
      'SG4 compliant erection method not evidenced — advance guardrail or harness use unclear',
      'Inspection regime not stated, or handover certificate arrangement missing',
      'No control against unauthorised alteration by following trades',
      'Ground bearing and sole plate arrangements not addressed',
    ],
    liftingNote:
      'Where scaffold materials are lifted by crane or telehandler — loading bays, temporary roofs, encapsulation panels — the lifting element falls under LOLER 1998 and needs planning by a competent person alongside the scaffold RAMS.',
    liftingLink: { href: '/services/telehandler-lift-plans', label: 'telehandler lift plans' },
  },

  'fit-out-finishes': {
    name: 'Fit-Out & Finishes',
    shortName: 'Fit-out & finishes',
    metaTitle: 'Fit-Out Method Statement & RAMS Writing UK',
    metaDescription:
      'Fit-out and finishes method statements and risk assessments. Dust, COSHH, hot works, occupied premises. Rejected RAMS rewritten and supported to acceptance.',
    keywords:
      'fit out method statement, finishes RAMS, dry lining method statement, fit out risk assessment, joinery method statement, occupied premises RAMS, decorating method statement',
    intro:
      'Fit-out RAMS are frequently rejected as generic because the activity feels low risk to the writer. Reviewers see it differently: silica and wood dust exposure, hot works in completed buildings, and working alongside a live occupied environment are all significant, and all commonly under-assessed.',
    activities: [
      'Partitioning, dry lining and ceilings',
      'Joinery and second fix carpentry',
      'Flooring, tiling and screeding',
      'Painting, decorating and coatings',
      'Furniture, fixtures and equipment installation',
      'Cutting, chasing and drilling',
      'Works in occupied and live environments',
      'Snagging and remedial works',
    ],
    hazards: [
      'Silica dust from cutting and chasing masonry',
      'Wood dust from cutting and sanding',
      'Hazardous substances in paints, adhesives and sealants',
      'Work at height from steps, towers and podiums',
      'Hot works and fire in near-complete buildings',
      'Manual handling of boards, doors and furniture',
      'Hand-arm vibration from power tools',
      'Interface with building occupants and the public',
      'Noise in enclosed and reverberant spaces',
    ],
    regulations: [
      { ref: 'COSHH 2002', detail: 'Silica, wood dust, isocyanates in coatings, adhesives and sealants.' },
      { ref: 'Work at Height Regulations 2005', detail: 'Podiums, towers and steps — often the only access used.' },
      { ref: 'Control of Vibration at Work Regulations 2005', detail: 'HAVS exposure from cutting, chasing and fixing.' },
      { ref: 'CDM 2015', detail: 'Contractor duties and interface with occupiers and other trades.' },
      { ref: 'Regulatory Reform (Fire Safety) Order 2005', detail: 'Hot works and fire precautions in completed and occupied buildings.' },
      { ref: 'Control of Noise at Work Regulations 2005', detail: 'Exposure in enclosed spaces during cutting and fixing.' },
    ],
    rejectionReasons: [
      'Silica dust from cutting and chasing not assessed — the single most common fit-out omission',
      'On-tool extraction or water suppression not specified against the actual tools listed',
      'RPE specified without face-fit testing arrangement',
      'Hot works in a near-complete building with no permit or fire watch',
      'Work at height limited to "steps will be used" with no equipment selection rationale',
      'HAVS exposure and trigger-time limits not addressed',
      'Occupied premises interface — noise, dust, access — not covered',
      'COSHH assessments referenced but not attached for the substances actually used',
    ],
    liftingNote:
      'Fit-out materials loaded to upper floors by telehandler, hoist or crane bring LOLER 1998 into play. Where the method statement describes material distribution to height, the lifting element needs planning by a competent person.',
    liftingLink: { href: '/services/telehandler-lift-plans', label: 'telehandler lift plans' },
  },

  'plant-operations': {
    name: 'Plant & Machinery Operations',
    shortName: 'Plant operations',
    metaTitle: 'Plant Operations Method Statement & RAMS Writing UK',
    metaDescription:
      'Construction plant and machinery method statements and risk assessments. Operator competence, exclusion zones, LOLER interface. Rejected RAMS rewritten.',
    keywords:
      'plant method statement, machinery RAMS, plant operations risk assessment, excavator method statement, telehandler method statement, plant operator competence RAMS',
    intro:
      'Plant RAMS are rejected when they describe the machine rather than the operation. Reviewers want the exclusion zone, the segregation arrangement, the named competent operators with current cards, and — where the plant lifts anything at all — recognition that LOLER 1998 applies.',
    activities: [
      'Excavator and 360° machine operations',
      'Telehandler and forklift operations',
      'Dumper and dozer operations',
      'Piling rig and drilling operations',
      'Road-going and site plant movements',
      'Attachment changing and quick hitch use',
      'Refuelling, maintenance and inspection',
      'Plant lifting operations',
    ],
    hazards: [
      'Plant striking pedestrians and other operatives',
      'Plant overturning on slopes and soft ground',
      'Quick hitch failure and attachment release',
      'Contact with overhead and buried services',
      'Blind spots and restricted visibility',
      'Uncontrolled movement and runaway plant',
      'Crush injuries between plant and structures',
      'Noise, vibration and exhaust emissions',
      'Failure of lifting equipment and accessories',
    ],
    regulations: [
      { ref: 'PUWER 1998', detail: 'Suitability, inspection, maintenance and operator training and competence.' },
      { ref: 'LOLER 1998', detail: 'Regulation 8 — engages whenever plant is used to lift a load, including with an excavator.' },
      { ref: 'CDM 2015', detail: 'Regulation 27 — traffic routes and segregation of plant from people.' },
      { ref: 'ISO 10567', detail: 'Excavator lift capacity determination — the correct basis for object handling duties.' },
      { ref: 'HSG144 / HSG136', detail: 'Safe use of vehicles on construction sites and workplace transport.' },
      { ref: 'Control of Vibration at Work Regulations 2005', detail: 'Whole-body vibration exposure for operators.' },
    ],
    rejectionReasons: [
      'Lifting with plant not recognised as a lifting operation requiring a LOLER plan',
      'Operator competence stated as "trained" with no CPCS or NPORS category evidenced',
      'Exclusion zones stated without reference to machine reach or slew radius',
      'Quick hitch type and safety pin regime not described',
      'Thorough examination for the machine in lifting duties not referenced',
      'Object handling capacity taken from lifting capacity rather than ISO 10567 duties',
      'No segregation arrangement between plant and pedestrians',
      'Refuelling, maintenance and daily inspection regime absent',
    ],
    liftingNote:
      'This is where the two halves of what we do meet. Any plant used to lift a load — an excavator placing a pipe, a telehandler on hook duties — falls under LOLER 1998 and needs a written plan by a competent person. We produce both documents as a CPCS A61 Appointed Person.',
    liftingLink: { href: '/services/excavator-lift-plans', label: 'excavator lift plans' },
  },
}

export const TRADE_SLUGS = Object.keys(TRADES)
