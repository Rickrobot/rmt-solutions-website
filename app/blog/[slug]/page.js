import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import InlineQuoteForm from '@/components/InlineQuoteForm';

// Blog posts content
const blogPosts = {
  // NEW (Jul 2026) — targets the "generic lift plan" query cluster (GSC:
  // "generic lift plan" 512 imps pos 9.1, "generic lift plan template" 136
  // imps, "schedule of common lifts" — all with no dedicated page).
  'generic-lift-plans': {
    title: 'Generic Lift Plans: When You Can Use One (UK Guide)',
    description: 'A generic lift plan is only acceptable for routine, repetitive, basic lifts — and even then it must be reviewed for each site. When one will do, and when it gets rejected.',
    keywords: 'generic lift plan, generic lift plan template, generic lifting plan, schedule of common lifts, basic lift plan, standard lift plan, repetitive lifts, generic RAMS lifting, site specific lift plan, when is a generic lift plan acceptable',
    category: 'Planning',
    readTime: '8 min read',
    date: 'July 8, 2026',
    dateModified: 'July 8, 2026',
    image: '/images/services/telehandler-suspended-load-lift-supervisor-uk.webp',
    imageAlt: 'Telehandler carrying out a routine suspended-load lift under supervision on a UK site — the kind of repetitive basic lift a generic lift plan can cover',
    content: `
      <p class="lead">"Can we just use a generic lift plan?" It is one of the most common questions subcontractors ask — usually about ten minutes after a principal contractor has rejected the generic plan they submitted. The honest answer is: sometimes, for a narrow band of routine lifting, a generic plan is perfectly acceptable and BS 7121 says as much. But most of the generic plans in circulation on UK sites are being used well outside that band, and they are the single most common reason lifting documents get bounced. This guide sets out exactly where the line is.</p>

      <h2>What is a Generic Lift Plan?</h2>
      <p>A generic lift plan is a pre-written planning document that covers a <em>type</em> of lifting operation rather than one specific lift on one specific site. It describes the equipment, method, roles and controls for a routine operation — say, offloading palletised materials with a telehandler — in a way intended to be reused across multiple lifts and, often, multiple sites.</p>
      <p>That is fundamentally different from a <a href="/blog/what-is-a-lift-plan">site-specific lift plan</a>, which addresses a particular load, a particular machine in a particular configuration, and the actual conditions and hazards of the place where the lift happens.</p>

      <h2>Are Generic Lift Plans Legal?</h2>
      <p>LOLER 1998 Regulation 8 requires every lifting operation to be properly planned by a competent person. It does not say the plan must be written from scratch every time. BS 7121-1:2016 — the code of practice for the safe use of cranes — explicitly recognises that <strong>basic lifts</strong> which are routine and repetitive can be covered by a generic plan, provided that:</p>
      <ul>
        <li>The plan was produced by a competent person — normally a <a href="/services/appointed-person">CPCS A61 Appointed Person</a></li>
        <li>It is <strong>reviewed before use at each new site or location</strong> to confirm the conditions match the plan's assumptions</li>
        <li>The lift genuinely stays within the plan's stated limits — load weight, equipment, radius, ground and environment</li>
        <li>Someone on site has the authority and competence to stop and escalate the moment the lift no longer fits the plan</li>
      </ul>
      <p>So a generic plan is not a shortcut around competent planning — it is the <em>output</em> of competent planning for a defined, repeatable operation. The legal duty to plan the lift never goes away; the generic document just discharges it for lifts that truly are identical in character.</p>

      <h2>When a Generic Lift Plan is Acceptable</h2>
      <p>In practice, a generic plan is defensible where all of the following hold:</p>
      <ul>
        <li><strong>The lift is basic</strong> under the BS 7121 categories — see our guide to <a href="/blog/basic-standard-complex-lifts">basic, standard and complex lifts</a></li>
        <li><strong>It is genuinely repetitive</strong> — same load type, same machine, same method, day after day</li>
        <li><strong>The environment is controlled and consistent</strong> — a fixed yard, a workshop, an established laydown area</li>
        <li><strong>Loads are well below capacity</strong> at the working radius, with healthy margin</li>
        <li><strong>No site-specific hazards</strong> — no overhead lines, no exclusion-zone conflicts, no public interface, no poor ground</li>
      </ul>
      <p>Classic examples: routine pallet and stillage handling in a builder's yard, repetitive telehandler offloading of standard deliveries, or an overhead gantry crane doing the same workshop lift on a fixed path all week.</p>

      <h2>When You Cannot Use One</h2>
      <p>A generic plan stops being acceptable the moment anything about the lift becomes site-specific or non-routine. Red lines include:</p>
      <ul>
        <li>Mobile crane operations — ground assessment and configuration are always site-specific</li>
        <li>Lifting near overhead power lines, railways, water, highways or the public</li>
        <li>Loads approaching the machine's capacity at radius, awkward loads, or unknown weights</li>
        <li>Tandem lifts, person lifts, blind lifts or anything <a href="/blog/basic-standard-complex-lifts">categorised as complex</a></li>
        <li>Ground that has not been assessed — temporary works, backfill, cellars, services</li>
        <li>A principal contractor whose procedures require site-specific plans (most tier 1 contractors do — <a href="/blog/lift-plan-checking-what-gets-checked-and-why-plans-get-rejected">generic paperwork is a leading rejection reason</a>)</li>
      </ul>

      <h2>What is a Schedule of Common Lifts?</h2>
      <p>A <strong>schedule of common lifts</strong> is the recognised, structured way to run generic planning properly. Instead of one vague catch-all document, the Appointed Person produces a schedule listing each routine lift type the site expects — load, weight range, equipment, accessories, method and limits — supported by a lift plan for each entry. Anything on the schedule can proceed under the standing plan; anything not on it triggers a specific plan before it happens.</p>
      <p>This is how tower crane sites manage the daily flow of repetitive lifts, and it is a far more defensible arrangement than a generic plan pulled off the shelf, because the boundary between "planned" and "needs planning" is explicit and written down.</p>

      <h2>Generic Lift Plan Templates</h2>
      <p>If what you actually need is a properly structured document to work from, we publish free, professionally structured <a href="/resources/lift-plan-templates">lift plan templates</a> for <a href="/resources/telehandler-lift-plan-templates">telehandlers</a>, <a href="/resources/excavator-lift-plan-templates">excavators</a>, <a href="/resources/lorry-loader-lift-plan-templates">lorry loaders</a> and <a href="/resources/mobile-crane-lift-plan-templates">mobile cranes</a>. A template is a starting structure, not a finished plan — it still needs completing by a competent person with the real numbers for your lift. That distinction is exactly the difference between a template and a generic plan misused.</p>

      <h2>The Bottom Line</h2>
      <p>Generic lift plans have a legitimate, narrow role: routine, repetitive, basic lifts in consistent conditions, produced by a competent person and reviewed at every new location. Outside that band, they are a false economy — a rejected plan costs you programme time, and an inadequate one costs far more. If you are not sure which side of the line your operation sits on, that uncertainty is itself the answer: get it planned properly.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need a Site-Specific Plan — or a Schedule of Common Lifts?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions writes LOLER-compliant lift plans from £200 with 24–48 hour turnaround, and can set up a schedule of common lifts for your site or yard. CPCS A61 Appointed Person, 35 years in UK construction.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote Today</a>
      </div>
    `,
  },
  // NEW (Jul 2026) — targets the lift plan software cluster (GSC: ~17
  // software/calculation queries, ~400 impressions, zero clicks, no page).
  'lift-plan-software-vs-appointed-person': {
    title: 'Lift Plan Software UK: What It Does & What It Can’t',
    description: 'Lift plan software helps with crane selection, load charts and rigging drawings — but it cannot discharge your LOLER duty to plan the lift. What the tools do, costs, and when to use a consultant instead.',
    keywords: 'lift plan software, lifting plan software, lift planning software, lift planner software, crane planning software, crane lift plan software, lifting plan calculation, 3d lift plan, free lift plan software, lift plan app, lift plan software uk',
    category: 'Planning',
    readTime: '9 min read',
    date: 'July 8, 2026',
    dateModified: 'July 8, 2026',
    image: '/images/services/lift-planning-site-desk-review-uk.webp',
    imageAlt: 'Lift planner working at a desk with drawings and a laptop — where lift plan software fits into the planning workflow',
    content: `
      <p class="lead">Search for "lift plan software" and you would think there is an app that takes a photo of your load and prints a LOLER-compliant lift plan. There isn't. What does exist is a range of genuinely useful planning tools — crane selection databases, 3D rigging studies, load chart calculators — that make a competent planner faster and their drawings better. This guide covers what the software actually does, roughly what it costs, the calculations behind any lift plan, and the question that matters legally: can software replace an Appointed Person? (Spoiler: no — and the reason is written into LOLER itself.)</p>

      <h2>What Lift Plan Software Actually Does</h2>
      <p>The established tools in the crane world are planning aids. Depending on the product, they will:</p>
      <ul>
        <li>Hold manufacturer load chart libraries so you can shortlist cranes with adequate capacity at your radius and configuration</li>
        <li>Model the lift in 2D/3D — crane position, boom clearances, slew paths, obstructions — and produce professional drawings for the plan pack</li>
        <li>Calculate outrigger point loads and mat sizes for ground assessment</li>
        <li>Generate rigging arrangements and check accessory working load limits</li>
      </ul>
      <p>Well-known examples include 3D Lift Plan, Liebherr's Crane Planner and similar manufacturer tools. For mobile crane work on congested sites, this modelling genuinely earns its keep — a clearance problem found on screen is vastly cheaper than one found on the day.</p>

      <h2>What the Software Cannot Do</h2>
      <p>LOLER 1998 Regulation 8 requires every lifting operation to be <strong>planned by a competent person</strong>. The duty attaches to a person, not a product. Software has no idea that:</p>
      <ul>
        <li>The "firm level ground" in the model is actually last month's backfill over a live sewer</li>
        <li>The load's stated weight came from a drawing revision that has since changed</li>
        <li>The laydown area doubles as the pedestrian route at 8am and 4pm</li>
        <li>The wind funnels between those two buildings at twice the forecast speed</li>
      </ul>
      <p>Every one of those is the kind of factor that causes real incidents, and every one comes from site knowledge and experience — the competence LOLER demands. Software output is only ever as good as its inputs, and judging the inputs is the job. That is why principal contractors reviewing a submission look past the glossy 3D drawing to <a href="/blog/lift-plan-checking-what-gets-checked-and-why-plans-get-rejected">who planned the lift and what they checked</a>.</p>

      <h2>Lifting Plan Calculations: The Numbers Behind Every Plan</h2>
      <p>Whether done in software or by hand, the core calculations in any lift plan are:</p>
      <ul>
        <li><strong>Gross load</strong> — load weight plus all rigging, hook block and attachments. Never the bare load alone.</li>
        <li><strong>Capacity at radius</strong> — the crane or machine's rated capacity from the load chart <em>in the actual configuration</em> (boom length, counterweight, outrigger spread), at the worst-case working radius.</li>
        <li><strong>Utilisation</strong> — gross load divided by capacity at radius, expressed as a percentage. Most UK contractors work to a maximum of around 80% for routine lifts; many tier 1 sites set lower thresholds for complex operations.</li>
        <li><strong>Ground bearing pressure</strong> — outrigger or track loads against the allowable bearing capacity of the ground, sizing mats accordingly.</li>
        <li><strong>Accessory ratings</strong> — sling angles and working load limits for every item in the rigging arrangement.</li>
      </ul>
      <p>If a plan you have been handed shows none of these numbers, it is not a lift plan — whatever software it came out of.</p>

      <h2>Software vs Appointed Person: Costs</h2>
      <p>Serious lift planning packages are sold on annual licences that typically run to four figures, before training time. That makes sense for crane hire companies and in-house Appointed Persons producing plans every week. If you need a handful of plans a year, the maths never works: a professionally written, site-specific plan from an independent <a href="/services/appointed-person">CPCS A61 Appointed Person</a> <a href="/blog/lift-plan-cost-uk">starts from £200</a>, with the competence, the site assessment and the accountability included.</p>

      <h2>Who Should Buy the Software?</h2>
      <ul>
        <li><strong>Crane hire and contract lift providers</strong> — producing plans daily, already employing Appointed Persons</li>
        <li><strong>Large contractors with in-house AP teams</strong> — the tools multiply an existing competence</li>
        <li><strong>Everyone else</strong> — you are almost certainly better served buying the finished plan than the tool that helps someone competent produce it</li>
      </ul>

      <h2>The Bottom Line</h2>
      <p>Lift plan software is a professional's aid, not a substitute for one. The law requires a competent person to plan your lift; the software just helps that person present and check their work. If you have the competence in-house, the tools are worth a look. If you don't, buy the plan, not the software — it is faster, cheaper at low volumes, and it actually discharges your LOLER duty.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Skip the Licence — Get the Plan</h3>
        <p class="text-gray-300 mb-6">Site-specific, LOLER-compliant lift plans written by a CPCS A61 Appointed Person from £200, typically turned around in 24–48 hours. Excavators, telehandlers, lorry loaders, mobile and tower cranes.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote Today</a>
      </div>
    `,
  },
  // NEW (Jul 2026) — Appointed Person content push. GSC shows the AP
  // cluster at 4,464 impressions / 2 clicks across 40 queries. These three
  // posts give the cluster dedicated coverage beyond the single guide:
  // duties/responsibilities, A61 Basic vs Advanced, and do-you-need-one.
  'appointed-person-duties-responsibilities': {
    title: 'Appointed Person Duties & Responsibilities (BS 7121)',
    description: 'The Appointed Person has overall control of a lifting operation. Their 10 duties under BS 7121 and LOLER 1998, what they are accountable for, and what they can delegate.',
    keywords: 'appointed person duties, appointed person responsibilities, appointed person lifting operations responsibilities, appointed person lifting operations, appointed person for lifting operations, loler appointed person, appointed person bs 7121, duties of an appointed person, lifting appointed person, appointed person accountability',
    category: 'Compliance',
    readTime: '8 min read',
    date: 'July 8, 2026',
    dateModified: 'July 8, 2026',
    image: '/images/services/excavator-lift-supervisor-overseeing-uk.webp',
    imageAlt: 'Appointed Person overseeing a lifting operation on a UK construction site — carrying the overall responsibility BS 7121 places on the role',
    content: `
      <p class="lead">BS 7121-1:2016 gives one individual overall control of every lifting operation: the Appointed Person. It is a role with real legal weight — if a lift goes wrong, the planning decisions land on the AP's desk first. Yet on many sites the role is misunderstood as "the person who signs the lift plan". This guide sets out what an Appointed Person is actually responsible for, duty by duty, what they remain accountable for even when they are not on site, and what they can legitimately delegate.</p>

      <h2>Where the Duties Come From</h2>
      <p>Two documents define the role. <strong>LOLER 1998 Regulation 8</strong> requires every lifting operation to be properly planned by a competent person, appropriately supervised, and carried out in a safe manner. <strong>BS 7121-1:2016</strong> — the code of practice for the safe use of cranes — names the Appointed Person as the individual with overall control of the lifting operation and describes what that control involves. On UK construction sites the competence is normally evidenced by the <a href="/blog/cpcs-appointed-person-guide">CPCS A61 card</a>.</p>

      <h2>The 10 Core Duties of an Appointed Person</h2>
      <ol>
        <li><strong>Assess the lifting operation</strong> — establish the load (weight, dimensions, centre of gravity, lifting points), the site conditions and the constraints before anything else is decided.</li>
        <li><strong>Categorise the lift</strong> — determine whether it is <a href="/blog/basic-standard-complex-lifts">basic, standard or complex</a>, which sets the depth of planning and supervision required.</li>
        <li><strong>Select the equipment</strong> — choose a machine with adequate rated capacity at the working radius in its actual configuration, plus suitable lifting accessories.</li>
        <li><strong>Produce the lift plan</strong> — prepare (or have prepared under their control) the <a href="/blog/what-is-a-lift-plan">written lift plan</a>, risk assessment and method statement.</li>
        <li><strong>Assess the ground</strong> — confirm ground bearing capacity, specify mats or spreaders, and deal with cellars, services and temporary works.</li>
        <li><strong>Appoint the team</strong> — name a competent lift supervisor, operator and slinger/signaller, and define who does what.</li>
        <li><strong>Establish communication</strong> — set the signalling method and what happens if communication is lost mid-lift.</li>
        <li><strong>Ensure equipment is certified</strong> — current LOLER thorough examinations for the machine and every accessory in the rigging arrangement.</li>
        <li><strong>Brief the team</strong> — make sure everyone involved understands the plan before the hook moves, and that changes on the day stop the lift until the plan is reviewed.</li>
        <li><strong>Review and learn</strong> — review the operation, near misses and changes, and update the plan or the schedule of common lifts accordingly.</li>
      </ol>

      <h2>What the Appointed Person Remains Accountable For</h2>
      <p>The AP does not need to stand and watch every lift — on a tower crane site doing dozens of lifts a day that would be impossible. But delegation of <em>presence</em> is not delegation of <em>responsibility</em>. The AP remains accountable for the planning, the categorisation, the equipment selection and the adequacy of the supervision arrangements. The lift supervisor executes the plan; the Appointed Person owns it. If a plan is signed off with the wrong load chart, the accountability does not transfer to whoever happened to be holding the radio.</p>

      <h2>In-House AP or Independent?</h2>
      <p>Larger contractors employ their own Appointed Persons. Everyone else borrows the competence — either from the crane hire company (as part of a contract lift), or from an independent consultant. Each route has trade-offs, which we cover in <a href="/blog/how-to-choose-a-lift-plan-provider">how to choose a lift plan provider</a>. The one thing you cannot do is proceed without the competence: an unplanned lift is a LOLER breach before the load even leaves the ground.</p>
      <p>RMT Solutions provides <a href="/services/appointed-person">independent CPCS A61 Appointed Person services</a> — lift planning, categorisation, and ongoing AP cover for projects that need the role filled without employing it full-time.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need an Appointed Person?</h3>
        <p class="text-gray-300 mb-6">Independent CPCS A61 Appointed Person with 35 years in UK construction. Lift plans from £200, project AP cover, and lifting operation audits — UK-wide.</p>
        <a href="/contact" class="btn-primary inline-block">Get in Touch Today</a>
      </div>
    `,
  },
  'cpcs-a61-basic-vs-advanced': {
    title: 'CPCS A61 Basic vs Advanced: Which Appointed Person Card?',
    description: 'The A61 Appointed Person card comes in two levels. What each course covers, the practical scenarios, which lifts each card holder can plan, and which your project needs.',
    keywords: 'cpcs a61, cpcs a61 appointed person, a61 appointed person, a61 basic, a61 advanced, a61 basic vs advanced, a61 appointed person practical scenarios, cpcs appointed persons lifting operations a61, a61 course, appointed person training, appointed person qualification',
    category: 'Compliance',
    readTime: '7 min read',
    date: 'July 8, 2026',
    dateModified: 'July 8, 2026',
    image: '/images/services/appointed-person-reviewing-lift-plan-uk.webp',
    imageAlt: 'CPCS A61 Appointed Person reviewing a lift plan on site — the qualification held at Basic or Advanced level',
    content: `
      <p class="lead">The CPCS A61 Appointed Person card is the recognised UK qualification for planning lifting operations — but it is not one card. A61 is awarded at two levels, <strong>Basic</strong> and <strong>Advanced</strong>, and the difference matters: it determines which lifting operations the holder is qualified to plan, and principal contractors increasingly check the level, not just the card. This guide explains what each level covers, what the courses and practical scenarios involve, and which one your project actually needs.</p>

      <h2>The Two Levels at a Glance</h2>
      <p><strong>A61 Basic</strong> qualifies the holder to plan <a href="/blog/basic-standard-complex-lifts">basic and standard lifts</a> — routine lifting with a single machine, well within capacity, in unexceptional conditions. Think telehandler offloading, excavator pipe-laying, straightforward lorry loader deliveries.</p>
      <p><strong>A61 Advanced</strong> qualifies the holder to plan the full range of lifting operations, including <strong>complex lifts</strong>: tandem and multi-crane lifts, lifts over live infrastructure, heavy or awkward loads, restricted sites, and contract lift management. Advanced is the level tier 1 contractors normally specify for anything beyond routine site lifting.</p>

      <h2>What the Courses Involve</h2>
      <p>Both routes combine classroom theory with practical planning exercises and a CPCS technical test. Candidates work through the legislation (LOLER 1998, PUWMA/PUWER, CDM 2015), BS 7121 planning methodology, load chart interpretation, ground assessment, and the production of a full lift plan. The <strong>practical scenarios</strong> are where the levels diverge: Basic candidates plan single-crane standard lifts; Advanced candidates are tested on complex scenarios — multiple cranes sharing a load, de-rating, lift-and-shift sequences, and operations where the plan must manage several trades around a live lift.</p>
      <p>Neither course manufactures competence on its own. The card evidences training and testing; BS 7121 is explicit that competence combines training with knowledge and <em>experience</em>. A freshly carded AP planning their first tandem lift unsupervised is exactly the situation the standard warns against.</p>

      <h2>Which Level Does Your Project Need?</h2>
      <ul>
        <li><strong>Routine plant and materials lifting</strong> (telehandler, excavator, lorry loader, well within capacity) — an A61 Basic holder can plan these.</li>
        <li><strong>Mobile crane operations</strong> — the categorisation decides it. A standard single-crane lift sits within Basic scope; anything complex needs Advanced.</li>
        <li><strong>Tandem lifts, lifts over live areas, heavy/awkward loads, tower crane schemes</strong> — A61 Advanced, with genuine experience behind the card.</li>
        <li><strong>Tender requirements</strong> — check the employer's requirements: many principal contractors now write "A61 Advanced" into contract preliminaries for crane work.</li>
      </ul>
      <p>The categorisation itself must be done competently — a lift wrongly classed as standard to keep it within a Basic card's scope is a planning failure in its own right. If in doubt, our guide to <a href="/blog/basic-standard-complex-lifts">lift categories</a> covers the factors that push a lift up a category.</p>

      <h2>Checking a Card</h2>
      <p>CPCS cards state the category and can be verified through the CPCS card checker. When reviewing a subcontractor's lift plan, checking the author's card level against the lift category is one of the first things an independent reviewer does — mismatches are one of the recurring findings in our <a href="/blog/lift-plan-checking-what-gets-checked-and-why-plans-get-rejected">lift plan checking work</a>.</p>

      <p>RMT Solutions holds CPCS A61 with 35 years of UK construction experience across excavator, telehandler, lorry loader, mobile and tower crane operations — see our <a href="/services/appointed-person">Appointed Person services</a> or the full <a href="/blog/cpcs-appointed-person-guide">CPCS A61 guide</a>.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need a Lift Planned to the Right Level?</h3>
        <p class="text-gray-300 mb-6">Site-specific lift plans from £200 with 24–48 hour turnaround, written by an experienced CPCS A61 Appointed Person. Complex lifts, tandem lifts and tower crane schemes quoted on request.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote Today</a>
      </div>
    `,
  },
  'do-you-need-an-appointed-person': {
    title: 'Do You Need an Appointed Person on Site? UK Rules',
    description: 'If lifting equipment operates on your site, someone competent must plan every lift — and on UK construction sites that means an Appointed Person. When the role is required and your options for filling it.',
    keywords: 'appointed person construction, what is an appointed person in construction, do you need an appointed person, appointed person crane, crane appointed person, appointed person services, when is an appointed person required, appointed person requirements, appointed person hire, in-house lifting plans',
    category: 'Compliance',
    readTime: '7 min read',
    date: 'July 8, 2026',
    dateModified: 'July 8, 2026',
    image: '/images/warehouse-steel-erection.webp',
    imageAlt: 'Steel erection lifting operations inside a UK warehouse project — the kind of site work that requires an Appointed Person to plan the lifts',
    content: `
      <p class="lead">Short answer: if lifting equipment is doing lifting operations on your site — a crane, an excavator lifting pipes, a telehandler on chains, a lorry loader making deliveries — then someone competent must plan those lifts, and on UK construction sites that competent person is, in practice, an Appointed Person. The longer answer is about <em>whose</em> Appointed Person, at what level, and how much of their time you actually need. That is what this guide covers.</p>

      <h2>What is an Appointed Person in Construction?</h2>
      <p>The Appointed Person (AP) is the individual named under BS 7121-1:2016 as having overall control of a lifting operation — the person who assesses the load and the site, categorises the lift, selects the equipment, produces the <a href="/blog/what-is-a-lift-plan">lift plan</a> and appoints the lifting team. LOLER 1998 Regulation 8 creates the underlying legal duty: every lifting operation must be planned by a competent person. On UK sites that competence is normally evidenced by the <a href="/blog/cpcs-appointed-person-guide">CPCS A61 card</a>. The full role is set out in our guide to <a href="/blog/appointed-person-duties-responsibilities">Appointed Person duties and responsibilities</a>.</p>

      <h2>When is an Appointed Person Required?</h2>
      <p>Strictly, LOLER requires competent <em>planning</em>, not a job title. But BS 7121 is the recognised way to meet that duty for crane and construction lifting, and BS 7121 is built around the AP role. In practice you need an Appointed Person whenever:</p>
      <ul>
        <li>A <strong>crane</strong> of any type operates on your site — mobile, tower, crawler or lorry loader</li>
        <li><strong>An excavator or telehandler lifts suspended loads</strong> — once it lifts rather than digs or forks, it is lifting equipment under LOLER and the operation needs planning like any crane lift</li>
        <li>You are the <strong>principal contractor</strong> and subcontractors carry out lifting — you need the competence to review and accept their plans, which is itself AP work (see our <a href="/services/lift-plan-checking">lift plan checking service</a>)</li>
        <li>A <strong>contract lift</strong> is being procured — the crane company provides the AP, but you still need enough competence on your side to specify the lift and check what you are buying</li>
      </ul>

      <h2>Common Misconceptions</h2>
      <p><strong>"The crane operator can plan it."</strong> No — operating and planning are separate competencies with separate roles under BS 7121. The operator executes within the plan; they do not write it.</p>
      <p><strong>"It's only a quick lift."</strong> Duration is irrelevant. A two-minute lift over a live footpath carries more planning obligation than an hour of routine yard work. See <a href="/blog/when-do-you-need-lift-plan">when you need a lift plan</a>.</p>
      <p><strong>"Our RAMS covers it."</strong> A generic RAMS is not a lift plan, and <a href="/blog/generic-lift-plans">generic paperwork</a> is the most common reason lifting documents get rejected by principal contractors.</p>

      <h2>Your Three Options for Filling the Role</h2>
      <ol>
        <li><strong>Employ one</strong> — right for contractors with continuous lifting across multiple projects. A full-time AP salary only pays for itself at volume.</li>
        <li><strong>Contract lift</strong> — the crane hire company's AP plans and takes the lifting risk. The most expensive per lift, and only covers <em>their</em> crane's operations.</li>
        <li><strong>Independent AP</strong> — a consultant plans your lifts, reviews subcontractor plans and provides project cover as needed. Pay for the competence only when you use it — from £200 per plan rather than a salary.</li>
      </ol>
      <p>The comparison is covered in depth in <a href="/blog/how-to-choose-a-lift-plan-provider">how to choose a lift plan provider</a>. RMT Solutions provides the independent option: <a href="/services/appointed-person">CPCS A61 Appointed Person services</a> with 35 years of UK construction experience, from single lift plans to ongoing project cover and <a href="/services/lifting-operations-audit">lifting operation audits</a>.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Not Sure If Your Site Needs an AP?</h3>
        <p class="text-gray-300 mb-6">Send over what you're lifting and how — a CPCS A61 Appointed Person will tell you what the operation needs, free, usually within four working hours.</p>
        <a href="/contact" class="btn-primary inline-block">Ask the Question — It's Free</a>
      </div>
    `,
  },
  // NEW (Jul 2026) — "translate the regulator" pair. HSE.gov.uk owns the
  // authority queries; these pages own the practical intent next to them.
  // Targets: "loler planning and risk assessment" (447 imps, pos 13, 0
  // clicks) and "hse lifting plan" (451 imps, pos 11, 0 clicks) +
  // "lifting plan template hse" (129).
  'loler-acop-l113-explained': {
    title: 'LOLER ACOP L113 Explained: Planning & Risk Assessment',
    description: 'L113 is the HSE’s Approved Code of Practice for LOLER 1998. What "ACOP status" means legally, what L113 says about planning and risk assessment, and how to comply in practice.',
    keywords: 'loler planning and risk assessment, l113, loler acop, loler approved code of practice, l113 loler, hse l113, loler regulation 8 planning, lifting operations risk assessment, loler code of practice, safe use of lifting equipment acop',
    category: 'Compliance',
    readTime: '9 min read',
    date: 'July 8, 2026',
    dateModified: 'July 8, 2026',
    image: '/images/services/loler-compliance-regulations-standards.webp',
    imageAlt: 'LOLER regulations and standards documents on a desk — the L113 Approved Code of Practice sits at the centre of UK lifting compliance',
    content: `
      <p class="lead">If you have ever tried to work out what LOLER actually requires you to <em>do</em>, you will have discovered that the regulations themselves are eleven short paragraphs of legal text. The practical detail lives somewhere else: <strong>L113, the HSE's Approved Code of Practice and guidance for LOLER 1998</strong> — full title "Safe use of lifting equipment". This guide explains what L113 is, the unusual legal weight an ACOP carries, and what it says about the two things sites get wrong most often: planning lifting operations and risk assessment.</p>

      <h2>What is L113?</h2>
      <p>L113 is the HSE's official companion document to the Lifting Operations and Lifting Equipment Regulations 1998. It reprints each regulation and follows it with two kinds of material: <strong>ACOP text</strong> (the Approved Code of Practice itself) and <strong>guidance</strong>. The distinction matters. The document is free to download from the HSE website, and if lifting equipment is used in your business, someone in your organisation should have read it.</p>

      <h2>What "ACOP Status" Actually Means</h2>
      <p>An Approved Code of Practice has a special legal status that ordinary guidance does not. If you are prosecuted for a breach of health and safety law and it is proved you did not follow the relevant ACOP, <strong>the court will find you at fault unless you can show you complied with the law in some other, equally effective way</strong>. Lawyers call this "semi-legal" status: the ACOP is not itself law, but ignoring it reverses the burden — you must prove your alternative approach was as good.</p>
      <p>In practice, that means L113 is the default standard a court, an HSE inspector, or a principal contractor's auditor will judge your lifting arrangements against. Departing from it is legally possible but commercially and evidentially brave.</p>

      <h2>What L113 Says About Planning</h2>
      <p>Regulation 8 requires every lifting operation to be properly planned by a competent person, appropriately supervised, and carried out in a safe manner. The ACOP text expands each phrase:</p>
      <ul>
        <li><strong>"Properly planned"</strong> — the plan must address the risks identified by risk assessment and identify the resources, procedures and responsibilities required. For routine, repetitive lifts the planning may only need to be done once, but it must be <em>reviewed</em> to check nothing has changed — the exact territory covered in our guide to <a href="/blog/generic-lift-plans">generic lift plans</a>.</li>
        <li><strong>"Competent person"</strong> — someone with adequate practical and theoretical knowledge and experience of the lifting operations to be planned. L113 does not name a qualification; UK construction fills the gap with the <a href="/blog/cpcs-appointed-person-guide">CPCS A61 Appointed Person</a>.</li>
        <li><strong>"Appropriately supervised"</strong> — supervision proportionate to the risk, by people with the authority to stop the work.</li>
      </ul>
      <p>L113 also lists the factors the plan should address — the weight and centre of gravity of the load, the working radius, the environment, the personnel — which map directly onto the <a href="/blog/what-is-a-lift-plan">nine parts of a lift plan</a>.</p>

      <h2>LOLER Planning and Risk Assessment: How They Fit Together</h2>
      <p>This is the point most sites muddle. LOLER does not contain a standalone duty to risk assess — that duty comes from the Management of Health and Safety at Work Regulations 1999. L113 makes the relationship explicit: the <strong>risk assessment identifies the hazards</strong> of the lifting operation, and the <strong>lift plan is the output of planning done to control them</strong>. They are not the same document and one cannot substitute for the other:</p>
      <ul>
        <li>The risk assessment asks: what could cause harm here — the load, the equipment, the ground, the people, the environment?</li>
        <li>The lift plan answers: here is precisely how this lift will be done so those risks are controlled — this machine, this configuration, this radius, this rigging, these people, this sequence.</li>
      </ul>
      <p>A generic risk assessment with no lift-specific planning fails Regulation 8; a lift plan with no underlying assessment of site-specific hazards fails the Management Regulations. Principal contractors reject submissions for both, usually bundled with the RAMS — see our guide to <a href="/blog/lifting-method-statements-rams-guide">lifting method statements and RAMS</a>.</p>

      <h2>The Other L113 Duties Worth Knowing</h2>
      <ul>
        <li><strong>Thorough examination (Regulations 9–10)</strong> — lifting equipment examined by a competent person at statutory intervals; accessories every 6 months where used to lift people or as accessories, equipment generally every 12. Covered in our <a href="/blog/what-is-loler-complete-guide">plain-English LOLER guide</a>.</li>
        <li><strong>Marking (Regulation 7)</strong> — safe working loads marked and legible.</li>
        <li><strong>Strength and stability (Regulation 4)</strong> — including the ground the machine stands on, which is why outrigger loadings and mats appear in every competent lift plan.</li>
      </ul>

      <h2>Complying in Practice</h2>
      <p>The gap between L113 and a compliant site is not knowledge — the document is free — it is application: someone competent turning "properly planned" into an actual plan for an actual lift. That is the work we do every day: site-specific <a href="/services/lift-plans">lift plans from £200</a>, <a href="/services/lift-plan-checking">independent plan checking</a>, and <a href="/services/lifting-operations-audit">lifting operation audits</a> that measure your arrangements against L113 and BS 7121 before an inspector or a principal contractor does.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Want Your Lifting Arrangements L113-Proof?</h3>
        <p class="text-gray-300 mb-6">A CPCS A61 Appointed Person with 35 years on UK sites will review your plans, RAMS and records against the ACOP — or write them properly from scratch. Fixed prices, 24–48 hour turnaround.</p>
        <a href="/contact" class="btn-primary inline-block">Get in Touch Today</a>
      </div>
    `,
  },
  'hse-lifting-plan-requirements': {
    title: 'HSE Lifting Plan Requirements: What Inspectors Look For',
    description: 'The HSE publishes no lifting plan template — it enforces LOLER Regulation 8. What HSE inspectors actually examine after an incident or site visit, and how to make your lifting plans stand up.',
    keywords: 'hse lifting plan, hse lifting plan template, lifting plan template hse, hse lift plan, hse lifting plan requirements, hse lifting operations, lifting plan requirements uk, hse inspector lifting operations, loler enforcement, hse crane lift plan',
    category: 'Compliance',
    readTime: '8 min read',
    date: 'July 8, 2026',
    dateModified: 'July 8, 2026',
    image: '/images/services/lift-plan-checking-clipboard-inspection.webp',
    imageAlt: 'Inspector reviewing lifting documentation on a clipboard at a UK construction site — the scrutiny a lifting plan must stand up to',
    content: `
      <p class="lead">Search "HSE lifting plan" and you might expect to find an official template on hse.gov.uk. There isn't one — and that surprises a lot of site managers. The HSE is the <em>enforcer</em>, not the form-provider: it sets the standard through LOLER 1998 and the L113 Approved Code of Practice, then judges whatever documents you produce against that standard. Having spent 35 years on the other side of that scrutiny, this guide covers what the HSE actually requires, what inspectors look for when they examine a lifting plan, and the failures that turn a site visit into an enforcement notice.</p>

      <h2>What the HSE Actually Requires</h2>
      <p>The legal requirement is LOLER 1998 Regulation 8: every lifting operation must be <strong>properly planned by a competent person, appropriately supervised, and carried out in a safe manner</strong>. The supporting detail sits in <a href="/blog/loler-acop-l113-explained">the L113 ACOP</a>, which has semi-legal status — depart from it and the burden falls on you to prove your approach was equally effective. Neither document prescribes a form, a layout or a logo. The HSE's question is never "did you use the right template?" — it is "can you demonstrate this lift was competently planned?"</p>

      <h2>Why There Is No HSE Lifting Plan Template</h2>
      <p>Deliberately. Lifting operations range from a telehandler moving pallets to a 750-tonne crawler crane over a live railway; one form cannot fit both, and a government-issued template would invite exactly the box-ticking L113 warns against. The recognised industry structure comes instead from BS 7121, and practical working documents from firms like ours — our free <a href="/resources/lift-plan-templates">lift plan templates</a> follow that structure for <a href="/resources/telehandler-lift-plan-templates">telehandlers</a>, <a href="/resources/excavator-lift-plan-templates">excavators</a>, <a href="/resources/lorry-loader-lift-plan-templates">lorry loaders</a> and <a href="/resources/mobile-crane-lift-plan-templates">mobile cranes</a>. A template is a starting structure; the competent person supplies the numbers and the judgement.</p>

      <h2>What an HSE Inspector Examines</h2>
      <p>Inspectors see lifting plans in two situations: proactive site inspections and post-incident investigations. In both, they test the same chain of evidence:</p>
      <ol>
        <li><strong>Who planned it?</strong> Name, competence and experience of the planner. An <a href="/blog/cpcs-appointed-person-guide">Appointed Person</a> with a card level matching the lift category answers this cleanly; "the operator sorted it" does not.</li>
        <li><strong>Was the load actually known?</strong> A confirmed weight with a source — drawing, delivery note, weighbridge — not an estimate. Underestimated loads sit behind a large share of lifting incidents.</li>
        <li><strong>Do the numbers stack up?</strong> Capacity at the working radius in the machine's real configuration, utilisation percentage, accessory ratings at the sling angles used — the <a href="/blog/lift-plan-software-vs-appointed-person">core lifting plan calculations</a>.</li>
        <li><strong>Was the ground assessed?</strong> Outrigger loads against allowable bearing pressure, mats specified, services and voids checked.</li>
        <li><strong>Does the paper match the site?</strong> The killer question. A plan describing firm level ground while the crane sits on backfill, or a "10m radius" lift executed at 14m, demonstrates the planning was theatre. Inspectors walk the lift and compare.</li>
        <li><strong>Were the people briefed and supervised?</strong> Signed briefing records, a named lift supervisor, and evidence the team could stop the lift if conditions changed.</li>
      </ol>

      <h2>Where Sites Fail</h2>
      <p>The recurring failures we see — and that appear throughout HSE enforcement action — are a <a href="/blog/generic-lift-plans">generic plan</a> doing site-specific work, plans written after the lift to satisfy paperwork, wrong load charts for the machine configuration, nobody on site able to say who the Appointed Person is, and lifts that changed on the day without the plan being reviewed. Every one is discoverable in ten minutes by an inspector, and every one is avoidable for less than the cost of the delay it causes — full breakdown in <a href="/blog/lift-plan-checking-what-gets-checked-and-why-plans-get-rejected">why lift plans get rejected</a>.</p>

      <h2>The Cost of Getting It Wrong</h2>
      <p>LOLER breaches are criminal offences. Enforcement ranges from improvement and prohibition notices (with fee-for-intervention charged at the inspector's hourly rate) to prosecution, where sentencing guidelines link fines to turnover — recent lifting-operation prosecutions have run to six and seven figures. Against that, a professionally written site-specific plan <a href="/blog/lift-plan-cost-uk">costs from £200</a>. The arithmetic is not close.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Make Your Lifting Plans Inspection-Ready</h3>
        <p class="text-gray-300 mb-6">Site-specific, LOLER-compliant lift plans from £200 in 24–48 hours, written by a CPCS A61 Appointed Person — or an independent audit of your existing arrangements before the HSE or your principal contractor looks first.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote Today</a>
      </div>
    `,
  },
  'basic-standard-complex-lifts': {
    title: 'Basic, Standard & Complex Lifts: Categories Explained',
    description: 'What makes a lift basic, standard or complex under BS 7121, what a critical lift is, and how the category changes the planning a lifting operation needs.',
    keywords: 'complex lift, complex lift definition, what is a complex lift, complex lifting operations, basic lift, standard lift, critical lift, what is a critical lift, lift categories, bs 7121 lift categories, when is a critical lift plan required',
    category: 'Lift Planning',
    readTime: '7 min read',
    date: 'June 29, 2026',
    dateModified: 'June 29, 2026',
    image: '/images/blog/bs7121-code-of-practice-crane-supervisor.webp',
    imageAlt: 'A crane supervisor reviewing a lift against BS 7121 on a UK construction site — categorising the lift as basic, standard or complex',
    content: `
      <p class="lead">Not every lift carries the same risk, and UK lifting practice reflects that by sorting lifting operations into categories — basic, standard and complex. The category drives how much planning a lift needs, who has to plan it, and how closely it must be supervised. This guide explains what each category means under BS 7121, what makes a lift "complex", what people mean by a "critical lift", and why getting the category right matters before any load leaves the ground.</p>

      <h2>What are lift categories?</h2>
      <p>The British Standard for the safe use of cranes, <a href="/blog/what-is-bs-7121-complete-guide">BS 7121</a>, groups lifting operations by complexity so the planning effort matches the risk. The same idea applies to lifting with any equipment, not just cranes: a routine, repetitive pick on firm ground needs far less than a heavy lift over a live road. Importantly, the category is set by the whole operation — the load, the equipment, the site and the surroundings — not by the size of the load alone.</p>

      <h2>Basic lifts</h2>
      <p>A basic lift is routine, repetitive and low-risk: a well-matched machine, a known load, firm and level ground, and clear space around the lift. Basic lifts still have to be planned under LOLER — but the plan can be straightforward, and a competent operator working to it may be enough without a separate person supervising every pick.</p>

      <h2>Standard lifts</h2>
      <p>A standard lift is the everyday lifting on most sites — more than routine, but within normal practice. It needs a written, site-specific <a href="/blog/what-is-a-lift-plan">lift plan</a> produced by a competent person, and usually a lift supervisor overseeing the operation on the ground. The great majority of commercial crane and excavator lifts fall here.</p>

      <h2>Complex lifts — what makes a lift complex?</h2>
      <p>A lift becomes complex when something about it takes it outside normal, routine practice. Common factors include:</p>
      <ul>
        <li>Two or more cranes sharing one load (a tandem or multiple-crane lift).</li>
        <li>Heavy, large, long or awkward loads, or loads with an uncertain centre of gravity.</li>
        <li>Lifting near or over people, live traffic, railways, or occupied buildings.</li>
        <li>Blind lifts, where the operator cannot see the load or the landing area.</li>
        <li>Lifting people, or lifting close to live electrical or other services.</li>
        <li>Poor or uncertain ground conditions, or restricted access and working space.</li>
      </ul>
      <p>A complex lift needs the fullest planning — often a site visit, detailed calculations, and close supervision — and should be planned by an experienced <a href="/services/appointed-person">Appointed Person</a>. A modest load can still be a complex lift because of where and how it is being lifted: the site can move a lift up a category on its own.</p>

      <h2>What is a critical lift?</h2>
      <p>"Critical lift" is a related term — used widely in industry and on some sites — for a lift where a failure would have serious consequences: high-value or irreplaceable loads, lifts over occupied areas or live plant, or operations where an incident would cause major harm or disruption. In UK practice a critical lift is generally treated as a complex lift and planned to the same high standard. The label matters less than the substance: identify what could go wrong, and plan to control it.</p>

      <h2>How the category changes the planning required</h2>
      <p>The category is not bureaucracy — it sets the level of competence and detail the law expects. As a lift moves from basic to standard to complex, the plan becomes more detailed, the competence required to produce it rises, and the supervision on site increases. Getting the category wrong in either direction is a problem: under-plan a complex lift and you create real danger; over-plan a basic one and you waste time. A guide on <a href="/blog/crane-lift-plan-requirements">what a crane lift plan must contain</a> shows how the detail scales, and our guide on <a href="/blog/when-do-you-need-lift-plan">when you need a lift plan</a> covers the threshold question.</p>

      <h2>Who decides the lift category?</h2>
      <p>The competent person planning the operation — normally a CPCS A61 Appointed Person — assesses the load, equipment, site and surroundings and assigns the category, then plans accordingly. That judgement is exactly the competence you are paying for: an experienced Appointed Person spots the factors that quietly turn a "simple" lift into a complex one.</p>

      <h2>How RMT Solutions can help</h2>
      <p>RMT Solutions categorises and plans lifting operations of every type as an independent CPCS A61 Appointed Person with 35 years in UK construction. Whether it is a routine pick or a complex multi-crane lift, we produce a plan matched to the actual risk — fixed prices from £200, with a quote inside four working hours. See our <a href="/services/lift-plans">lift planning service</a> for details.</p>
    `,
  },
  'lifting-with-excavators-loler': {
    title: 'Does an Excavator Need LOLER? Lifting With Excavators',
    description: 'When an excavator is used to lift, LOLER 1998 applies. What that means for thorough examination, object-handling kit, the CPA guidance and your lift plan.',
    keywords: 'lifting with excavators, does an excavator need a loler, cpa lifting with excavators, using an excavator as a crane, excavator object handling, excavator lifting regulations, excavator lifting points, 360 excavator lifting operations, excavator thorough examination, excavator rci',
    category: 'Compliance',
    readTime: '8 min read',
    date: 'June 29, 2026',
    dateModified: 'June 29, 2026',
    image: '/images/excavator-pipeline.webp',
    imageAlt: 'A 360-degree excavator lifting a pipe section on a UK construction site using a dedicated lifting point — object handling under LOLER 1998',
    content: `
      <p class="lead">The moment an excavator is used to lift and place a load — a pipe, a manhole ring, a trench box — rather than just dig, it becomes lifting equipment in the eyes of the law, and the Lifting Operations and Lifting Equipment Regulations 1998 (LOLER) apply in full. That has real consequences for the machine, the paperwork and the planning. This guide explains when LOLER applies to an excavator, what the machine must have fitted to lift legally, what the CPA guidance says, and why you still need a lift plan and an Appointed Person.</p>

      <h2>Can you legally use an excavator to lift?</h2>
      <p>Yes — provided the machine is suitable and equipped for it, and the operation is properly planned. Using a 360° excavator to handle objects is an established and accepted practice in UK construction, from pipe laying and drainage to handling precast units. But "object handling" is a different duty from excavating, and the law treats it differently. As soon as the excavator lifts a load using a chain, sling or lifting attachment, it is being used as lifting equipment and must meet the same legal standard as a crane doing the same job.</p>

      <h2>Does an excavator need a LOLER thorough examination?</h2>
      <p>Yes. Any excavator used for lifting operations is lifting equipment under <a href="/blog/what-is-loler-complete-guide">LOLER 1998</a> and must have a thorough examination by a competent person — generally at least every 12 months for lifting loads (more frequently if there is reason to, and the report kept available). The lifting accessories used with it — chains, slings, shackles, lifting eyes — must also be examined and certified. A machine that only ever digs does not need a LOLER thorough examination; the moment it is used to lift, it does.</p>

      <h2>What must an excavator have fitted to lift objects?</h2>
      <p>To lift objects safely and legally, an excavator generally needs to be set up for "object handling" rather than bare digging. In practice that means:</p>
      <ul>
        <li><strong>A dedicated lifting point</strong> — a certified lifting eye or shackle point, not the bucket teeth or a chain slung over the linkage.</li>
        <li><strong>Check valves (hose-burst protection)</strong> on the boom and dipper rams, so the load is held safely if a hydraulic hose fails.</li>
        <li><strong>An overload warning device / Rated Capacity Indicator (RCI)</strong> that alerts the operator before the safe object-handling capacity is exceeded. Our <a href="/resources/excavator-rci-guide">excavator RCI guide</a> and <a href="/resources/excavator-safety-devices">excavator safety devices</a> pages explain these in detail.</li>
        <li><strong>An object-handling rating chart</strong> for the machine, so capacity can be checked at the actual radius — the lifting figures are well below the digging forces the machine can exert.</li>
      </ul>
      <p>These requirements flow from LOLER, PUWER and the earth-moving machinery standard BS EN 474. A machine without them should not be used for lifting.</p>

      <h2>The CPA guidance on lifting with excavators</h2>
      <p>The Construction Plant-hire Association (CPA) publishes recognised industry guidance on the use of 360° excavators as cranes (often searched for as "CPA lifting with excavators"). It sets out the machine requirements, the competence of the people involved, and the planning expected for object-handling operations. It is the document most principal contractors will expect your lifting arrangements to be consistent with, alongside LOLER and the general lifting standard BS 7121 where relevant.</p>

      <h2>Do you still need a lift plan and an Appointed Person?</h2>
      <p>Yes. LOLER Regulation 8 requires every lifting operation to be planned by a competent person, regardless of whether the machine is a crane or an excavator. So an excavator lift needs a <a href="/blog/what-is-a-lift-plan">lift plan</a> just as a crane lift does, and for anything beyond the most routine handling that planning is normally done by a <a href="/services/appointed-person">CPCS A61 Appointed Person</a>. The plan addresses the load, the machine's object-handling capacity at the working radius, the lifting accessories, the ground, the exclusion zones and the roles on site. Our <a href="/blog/excavator-lift-plans-complete-guide">complete guide to excavator lift plans</a> walks through exactly what one should contain, and you can download an <a href="/resources/excavator-lift-plan-templates">excavator lift plan template</a> to see the structure.</p>

      <h2>Why a 360 excavator is not a crane</h2>
      <p>An excavator can lift, but it is not a crane, and its object-handling capacity is far lower than its digging capability suggests. Capacity must be read from the machine's object-handling chart at the actual radius and slew position — never assumed from the size of the machine. Stability, ground bearing and the position of the load relative to the tracks all matter, which is why the lift has to be planned rather than judged by eye. Treating a big excavator as if it were a big crane is one of the most common and most dangerous mistakes in site lifting.</p>

      <h2>How RMT Solutions can help</h2>
      <p>RMT Solutions writes site-specific excavator <a href="/services/lift-plans">lift plans</a> and provides independent Appointed Person cover as a CPCS A61 Appointed Person with 35 years in UK construction. We confirm the machine is correctly equipped for object handling, check the capacity against the object-handling chart, and produce a plan your principal contractor will accept — fixed prices from £200, with a quote inside four working hours. See our <a href="/services/excavator-lift-plans">excavator lift plan service</a> for details.</p>
    `,
  },
  'crane-lift-plan-requirements': {
    title: 'What is a Crane Lift Plan? Requirements & Contents',
    description: 'What a crane lift plan is, what it must contain under LOLER 1998 and BS 7121, when one is legally required, and who is competent to write it.',
    keywords: 'crane lift plan, what is a crane lift plan, crane lift plan requirements, crane lifting plan, lift plan for crane, mobile crane lift plan, crane lift plan contents, lifting plan for crane, when is a crane lift plan required, who writes a crane lift plan',
    category: 'Lift Planning',
    readTime: '9 min read',
    date: 'June 29, 2026',
    dateModified: 'June 29, 2026',
    image: '/images/precast-concrete-lift.webp',
    imageAlt: 'Mobile crane lifting a precast concrete unit on a UK construction site — a crane lifting operation carried out to an approved lift plan',
    content: `
      <p class="lead">A crane lift plan is the written document that sets out how a specific crane lifting operation will be carried out safely — the crane and its rated capacity, the load, the rigging, the site conditions and the people involved. Under LOLER 1998 every crane lift must be planned by a competent person, and for anything beyond the most routine, repetitive lift that planning has to be recorded in writing. This guide explains exactly what a crane lift plan is, what it must contain, when one is legally required, and who is qualified to produce it.</p>

      <h2>What is a crane lift plan?</h2>
      <p>A crane lift plan is a site-specific document that describes how a load will be lifted and moved safely using a crane. It is the crane-specific form of the general <a href="/blog/what-is-a-lift-plan">lift plan</a> required for every lifting operation under UK law. Rather than a generic form with the project name changed, a proper crane lift plan is built around the actual crane, the actual load and the actual site: it confirms the crane has enough capacity at the radius required, sets out how the load will be rigged, identifies the hazards around the lift, and defines who does what during the operation.</p>
      <p>The plan exists to answer one question before the lift starts: can this load be lifted safely with this crane, in this position, on this ground — and if so, exactly how? Everything in the document supports that judgement.</p>

      <h2>Is a crane lift plan a legal requirement?</h2>
      <p>Yes. Regulation 8 of the Lifting Operations and Lifting Equipment Regulations 1998 (LOLER) requires that every lifting operation is "properly planned by a competent person, appropriately supervised and carried out in a safe manner." For crane operations, the recognised code of practice for meeting that duty is <a href="/blog/what-is-bs-7121-complete-guide">BS 7121</a> — the British Standard for the safe use of cranes — which sets out planning, equipment selection, competence and supervision in detail.</p>
      <p>LOLER does not say every lift needs a thick written plan, but it does require every lift to be planned by a competent person. In practice, for the great majority of crane lifts on commercial sites — and certainly anything a principal contractor must approve — that planning has to be documented as a written crane lift plan.</p>

      <h2>What must a crane lift plan include?</h2>
      <p>The exact content scales with the complexity of the operation, but a thorough crane lift plan generally covers the following:</p>
      <ul>
        <li><strong>The load</strong> — weight, dimensions, centre of gravity and lifting points.</li>
        <li><strong>The crane</strong> — make, model and configuration, with the rated capacity confirmed against the load chart at the working radius required (the de-rated safe working load, not the headline figure).</li>
        <li><strong>Lifting accessories</strong> — slings, shackles, chains, beams and below-the-hook devices, each with a working load limit suitable for the load and the lifting angles.</li>
        <li><strong>The site</strong> — ground bearing conditions and outrigger loadings, access, overhead and underground services, and adjacent activities or structures.</li>
        <li><strong>The operation</strong> — pick and set-down positions, working radius, slewing arc, exclusion zones and the travel route of the load.</li>
        <li><strong>People and roles</strong> — the appointed person, lift supervisor, crane operator and slinger/signaller, and how they will communicate.</li>
        <li><strong>The supporting documents</strong> — a risk assessment and method statement (RAMS) covering the safe system of work, briefed to everyone involved.</li>
      </ul>
      <p>For a fuller breakdown of the anatomy of a plan regardless of equipment, see our guide to <a href="/blog/what-is-a-lift-plan">what a lift plan must contain</a>.</p>

      <h2>Basic, standard and complex crane lifts</h2>
      <p>BS 7121 recognises that not every lift carries the same risk, and the level of planning detail follows the <a href="/blog/basic-standard-complex-lifts">category of lift</a>:</p>
      <ul>
        <li><strong>Basic lifts</strong> — routine, repetitive, low-risk lifts that can be covered by a straightforward plan and a competent operator working to it.</li>
        <li><strong>Standard lifts</strong> — the everyday crane work on most sites, requiring a written, site-specific plan produced by a competent person.</li>
        <li><strong>Complex lifts</strong> — heavy loads, lifts near live infrastructure, poor ground, blind lifts, or operations using more than one crane (tandem lifts). These need the fullest planning, often a site visit, and close supervision.</li>
      </ul>
      <p>The same operation can move up a category because of the site, not just the load — a modest lift over a live road or alongside an occupied building is no longer "basic".</p>

      <h2>Who can write a crane lift plan?</h2>
      <p>The competent person who plans a crane lift is normally a <a href="/services/appointed-person">CPCS A61 Appointed Person</a>. The Appointed Person is responsible for assessing the operation, selecting the crane and accessories, verifying the capacity against the load chart, and producing and signing off the plan. They do not need to be on site for every lift, but they remain accountable for the planning and management of the operation.</p>
      <p>This is why a crane lift plan should never be a template completed by whoever is free — getting the competence right is the whole point of the document, and generic plans are the single most common reason lifting paperwork is rejected.</p>

      <h2>When is a crane lift plan required?</h2>
      <p>A written crane lift plan is required whenever a crane is used to lift and move a load on a commercial operation — which, in practice, is almost always. Even routine deliveries and standard picks need a plan; the document simply gets shorter and simpler as the risk drops. If you are unsure where your operation sits, our guide on <a href="/blog/when-do-you-need-lift-plan">when you need a lift plan</a> walks through the decision.</p>

      <h2>Crane lift plans by crane type</h2>
      <p>The principles are the same across crane types, but the detail differs. We produce crane lift plans for <a href="/services/mobile-crane-lift-plans">mobile cranes</a>, tower cranes, and <a href="/services/overhead-gantry-crane-lift-plans">overhead and gantry cranes</a>, as well as <a href="/services/lorry-loader-lift-plans">lorry loader (HIAB)</a> operations. If you are weighing up which crane suits the job, our comparison of a <a href="/blog/mobile-crane-vs-tower-crane">mobile crane versus a tower crane</a> is a useful starting point, and you can download a <a href="/resources/mobile-crane-lift-plan-templates">mobile crane lift plan template</a> to see the structure.</p>

      <h2>Why crane lift plans get rejected</h2>
      <p>Most rejections come down to the same handful of issues: a generic plan that is not specific to the site or machine, capacity taken from the headline figure rather than the de-rated load chart at the actual radius, missing ground bearing or outrigger loading information, or accessories that are not specified or rated for the load. An <a href="/services/lift-plan-checking">independent check of the plan</a> before it goes to the principal contractor catches these before they cost you a day on site.</p>

      <h2>How RMT Solutions can help</h2>
      <p>RMT Solutions writes site-specific crane <a href="/services/lift-plans">lift plans</a> as an independent CPCS A61 Appointed Person with 35 years in UK construction — no crane to sell you and no fleet to keep busy, so the equipment advice is impartial and the plan works with the kit you already have. Fixed prices from £200, with a quote inside four working hours. For a sense of the numbers, see our guide to <a href="/blog/lift-plan-cost-uk">how much a lift plan costs</a>, or get in touch for a quote on your operation.</p>
    `,
  },
  'how-to-choose-a-lift-plan-provider': {
    title: 'How to Choose a Lift Plan Provider (UK)',
    description: 'Crane-hire firm, contract-lift package or independent consultant? How the three ways to get a lift plan compare, what each costs, and how to choose.',
    keywords: 'how to choose a lift plan provider, lift plan provider, independent appointed person vs crane hire, contract lift vs appointed person, lift plan consultant uk, lift plan without hiring a crane, who can write a lift plan, independent lift planning',
    category: 'Services',
    readTime: '7 min read',
    date: 'June 17, 2026',
    dateModified: 'June 17, 2026',
    image: '/images/blog/deciding-if-lift-plan-needed-site-discussion.webp',
    imageAlt: 'Site managers discussing which lift plan provider to use on a UK construction site',
    content: `
      <p>There are three ways to get a lift plan for a UK construction site, and the cheapest, fastest and most appropriate one depends on a single question: do you need the crane as well, or just the plan? Choose the wrong route and you either pay for equipment you do not need, or end up with a generic plan a principal contractor rejects. This guide explains the three options, what each typically costs, and how to choose between them.</p>

      <h2>The three ways to get a lift plan</h2>
      <p>Whoever writes the plan, the law is the same: under LOLER 1998 every lifting operation must be planned by a competent person — normally a <a href="/services/appointed-person">CPCS A61 Appointed Person</a>. What differs is how you buy that competence:</p>
      <ul>
        <li><strong>From a crane hire company</strong>, bundled in with the crane you are hiring.</li>
        <li><strong>As a contract lift</strong>, where a provider takes on the whole operation and the risk.</li>
        <li><strong>From an independent consultant</strong>, who writes the plan without supplying any equipment.</li>
      </ul>

      <h2>Option 1 — A crane hire company (Appointed Person bundled in)</h2>
      <p>Most crane hire firms will supply an Appointed Person and a lift plan as part of hiring their crane. If you are hiring their crane anyway, that is convenient and the plan comes as part of the deal. The catch: the Appointed Person works for the company selling you the equipment, so the advice on what crane you need is not independent; the plan is tied to their fleet; and you usually cannot buy the plan on its own if you are not hiring the machine.</p>

      <h2>Option 2 — A contract lift (the full package)</h2>
      <p>Under a contract lift the provider takes responsibility for the entire operation — crane, operator, slinger/signaller, the plan, and crucially the lifting risk. It is the right choice when you want someone else to carry that risk and manage the lift end to end, for example a one-off heavy or complex lift. It is also the most expensive route, because you are paying for the equipment, the crew and the risk transfer, not just the planning.</p>

      <h2>Option 3 — An independent lift planning consultant</h2>
      <p>An independent consultant writes the lift plan and acts as your Appointed Person without supplying any equipment. This is the right route when you already have your plant and operator arranged — under CPA crane hire, or using your own excavator, telehandler or lorry loader — and you need the planning competence, not a crane. Because the consultant has no fleet to keep busy, the equipment advice is impartial, the plan works with the kit you already have, and the fee is fixed rather than buried in a day rate. It is also the route for an <a href="/services/lift-plan-checking">independent review</a> of a plan a subcontractor or crane hire firm has produced, because the reviewer has no stake in the equipment.</p>

      <h2>Quick comparison</h2>
      <ul>
        <li><strong>Crane hire AP:</strong> best when you are hiring their crane anyway. Convenient, but not independent and rarely sold separately.</li>
        <li><strong>Contract lift:</strong> best when you want the provider to own the risk and run the lift. The fullest service and the highest cost.</li>
        <li><strong>Independent consultant:</strong> best when you have the plant, or need an objective plan or review. Impartial, fixed-fee, works with your existing equipment.</li>
      </ul>

      <h2>Questions to ask before you appoint</h2>
      <ul>
        <li>Is the Appointed Person CPCS A61 qualified — and will that named person actually write your plan?</li>
        <li>Are they independent of the equipment supplier, or tied to a crane fleet?</li>
        <li>Is the fee fixed, or an open-ended day rate?</li>
        <li>What is the turnaround, and is a site visit included if one is needed?</li>
        <li>Will the plan be specific to your site and machine, or a template with the name changed? (Generic plans are the most common reason principal contractors reject lifting documentation.)</li>
      </ul>

      <h2>So which should you choose?</h2>
      <p>If you want the crane company to carry the lifting risk, take a contract lift. If you are already hiring their crane, their bundled Appointed Person is the convenient option. But if you have your own plant or a CPA crane hire arrangement and simply need a competent, compliant, site-specific plan — or you need an independent set of eyes on someone else's plan — an independent consultant is usually both the most economical and the most objective choice. For a sense of the numbers, see our guide to <a href="/blog/lift-plan-cost-uk">how much a lift plan costs</a>.</p>

      <h2>How RMT Solutions fits</h2>
      <p>RMT Solutions is the independent option: a CPCS A61 Appointed Person with 35 years in UK construction, no crane to sell you and no fleet to keep busy. We write site-specific <a href="/services/lift-plans">lift plans</a> for excavators, telehandlers, lorry loaders and mobile cranes, provide independent <a href="/services/appointed-person">Appointed Person</a> cover, and review plans others have produced — fixed prices from £200, with a quote inside four working hours. New to lift plans? Start with <a href="/blog/what-is-a-lift-plan">what a lift plan is</a> and when you need one.</p>
    `,
  },
  'lifting-method-statements-rams-guide': {
    title: 'Lifting Method Statements & RAMS: UK Guide',
    description: 'What a lifting method statement and RAMS must contain under LOLER 1998 and BS 7121, how they differ from a lift plan, and who is competent to write them.',
    keywords: 'lifting method statement, lift plan method statement, lifting plan method statement, rams lifting, method statement for lifting operations, lifting risk assessment, telehandler risk assessment example, safe system of work lifting, who writes lifting rams',
    category: 'Compliance',
    readTime: '7 min read',
    date: 'June 17, 2026',
    dateModified: 'June 17, 2026',
    image: '/images/blog/lift-plan-document-clipboard-site.webp',
    imageAlt: 'A lifting method statement and RAMS document on a clipboard on a UK construction site',
    content: `
      <p>Ask three people on a construction site what paperwork a lift needs and you will often get three different answers: a lift plan, a method statement, a risk assessment, or "the RAMS". They are related but not interchangeable — and principal contractors reject lifting documentation every week because the wrong document was supplied, or because a generic template was used where a written, site-specific plan was required.</p>

      <p>This guide explains what a lifting method statement and RAMS are, what the law requires, what a good one contains, and who is competent to write it.</p>

      <h2>Lifting method statement, RAMS and lift plan — what is the difference?</h2>
      <p>The terms describe different but overlapping documents:</p>
      <ul>
        <li><strong>Risk assessment</strong> — identifies the hazards of the lifting operation and the control measures needed. Required under the Management of Health and Safety at Work Regulations 1999.</li>
        <li><strong>Method statement</strong> — a step-by-step description of how the work will be carried out safely, putting the controls from the risk assessment into a practical sequence.</li>
        <li><strong>RAMS</strong> — simply the Risk Assessment and Method Statement combined into one document, which is how they are usually issued on site.</li>
        <li><strong>Lift plan</strong> — the specific planning document for a lifting operation required under LOLER 1998 Regulation 8. It carries the technical detail of the lift (loads, capacities, equipment configuration, rigging) and is normally produced or signed off by an <a href="/services/appointed-person">Appointed Person</a>.</li>
      </ul>
      <p>In practice the lift plan and the RAMS work together: the RAMS sets out the safe system of work for the activity, and the <a href="/blog/what-is-a-lift-plan">lift plan</a> provides the technical lifting detail inside it. For a routine, repetitive lift the two are often combined; for a complex lift they are separate, linked documents.</p>

      <h2>The legal basis: why you need one</h2>
      <p>Several pieces of UK law sit behind lifting documentation:</p>
      <ul>
        <li><strong>LOLER 1998, Regulation 8</strong> requires every lifting operation involving lifting equipment to be properly planned by a competent person, appropriately supervised and carried out safely.</li>
        <li><strong>The Management of Health and Safety at Work Regulations 1999</strong> require a suitable and sufficient risk assessment of the work.</li>
        <li><strong>The Health and Safety at Work etc. Act 1974</strong> places the overarching duty to protect, so far as is reasonably practicable, workers and others affected by the work.</li>
        <li><strong>CDM 2015</strong> requires the work to be planned, managed and monitored — which is why the principal contractor asks for your RAMS before you start.</li>
      </ul>
      <p><a href="/blog/what-is-bs-7121-complete-guide">BS 7121</a>, the code of practice for the safe use of cranes, is the recognised means of showing you have met these duties for crane and construction lifting.</p>

      <h2>What a lifting method statement should contain</h2>
      <p>A method statement for a lifting operation should be specific to the task, the equipment and the site — not a generic form with the company name changed. A competent one covers:</p>
      <ul>
        <li>A description of the lifting operation and the loads involved</li>
        <li>The lifting equipment and accessories selected, with capacities verified against the manufacturer's load chart for the exact configuration</li>
        <li>The sequence of operations, step by step, from delivery and rigging through to landing and de-rigging</li>
        <li>Ground conditions, outrigger or track loadings and any matting or crane pads required</li>
        <li>The exclusion zone around the swept area of the load, and how people are kept clear</li>
        <li>Roles and competence — Appointed Person, lift supervisor, crane or plant operator, slinger/signaller</li>
        <li>Site-specific hazards: overhead lines, underground services, adjacent activities, public interfaces, and wind or weather limits</li>
        <li>Communication arrangements and the emergency and rescue plan</li>
        <li>The supporting risk assessment and the lift plan it references</li>
      </ul>

      <h2>Who should write the RAMS for a lifting operation?</h2>
      <p>LOLER requires the lift to be planned by a <strong>competent person</strong> — someone with the training, knowledge and experience to plan the operation, select the right equipment and assess the site-specific hazards. For crane and construction lifting that is normally a <a href="/services/appointed-person">CPCS A61 Appointed Person</a>. A blank template completed by someone without that competence is one of the most common reasons RAMS are rejected: the document can look complete while the technical decisions behind it are wrong.</p>

      <h2>Why lifting RAMS get rejected</h2>
      <p>The usual reasons a principal contractor sends a RAMS back are avoidable:</p>
      <ul>
        <li>Generic content that clearly was not written for the actual lift or site</li>
        <li>No load weights, or capacities not checked against the load chart for the real configuration</li>
        <li>Missing exclusion zones, or no plan for keeping people clear of the load</li>
        <li>No named, competent Appointed Person, or competence not evidenced</li>
        <li>The risk assessment and method statement contradict each other, or the lift plan is missing</li>
      </ul>

      <h2>Free template or a written RAMS?</h2>
      <p>For routine, low-risk lifts completed by a competent person, a good template is a legitimate starting point — you can work from our free <a href="/resources/lift-plan-templates">lift plan templates</a>. For standard and complex lifts, or anywhere a principal contractor must approve the documentation, a written, site-specific RAMS and lift plan produced by a competent person is what the law requires — and what gets accepted first time.</p>

      <h2>How RMT Solutions can help</h2>
      <p>RMT Solutions is run by a CPCS A61 Appointed Person with 35 years in UK construction. We write site-specific lifting method statements, risk assessments and <a href="/services/lift-plans">lift plans</a> for excavators, telehandlers, lorry loaders and mobile cranes, and we provide independent <a href="/services/appointed-person">Appointed Person</a> cover — fixed prices from £200, with a quote inside four working hours. If a principal contractor has rejected your RAMS, or you want it right the first time, send us the details and we will turn it around in 24 to 48 hours.</p>
    `,
  },
  'lift-plan-cost-uk': {
    title: 'How Much Does a Lift Plan Cost? UK Prices 2026',
    description: 'UK lift plan costs: from £200 for excavator and telehandler plans; mobile crane and complex lifts quoted on request. What you pay and why.',
    keywords: 'lift plan cost, lift plan cost uk, how much does a lift plan cost, lifting plan cost, lift plan price, lift plan prices uk, appointed person day rate, contract lift cost, lift plan quote, how much is a lift plan',
    category: 'Services',
    readTime: '8 min read',
    date: 'June 11, 2026',
    dateModified: 'June 11, 2026',
    image: '/images/services/lift-planning-site-desk-review-uk.webp',
    imageAlt: 'Lift planner reviewing drawings and load calculations at a site desk — pricing up a UK lift plan',
    content: `
      <p class="lead">A professional lift plan in the UK typically starts from <strong>£200</strong>. Simple excavator and telehandler lift plans start from £200, lorry loader (HIAB) plans from £250, and mobile crane, complex and tandem operations are quoted individually after a brief scoping call. This guide breaks down exactly what you pay, what drives the price, and how to avoid paying twice for a plan that gets rejected.</p>

      <p>Very few providers publish lift plan prices, which makes budgeting harder than it should be. We publish ours. The figures below are the fixed prices we quote at RMT Solutions, and they are representative of what a competent, independent <a href="/blog/cpcs-appointed-person-guide">CPCS A61 Appointed Person</a> charges in the UK market in 2026.</p>

      <h2>Lift Plan Costs by Equipment Type</h2>

      <table>
        <thead>
          <tr><th>Lift plan type</th><th>Typical UK cost</th><th>Turnaround</th></tr>
        </thead>
        <tbody>
          <tr><td>Excavator lift plan</td><td>£200 – £300</td><td>24–48 hours</td></tr>
          <tr><td>Telehandler lift plan</td><td>£200 – £300</td><td>24–48 hours</td></tr>
          <tr><td>Lorry loader (HIAB) lift plan</td><td>£250 – £500</td><td>2–5 working days</td></tr>
          <tr><td>Mobile crane lift plan</td><td><a href="/contact">Request a quotation</a></td><td>3–5 working days</td></tr>
          <tr><td>Complex / tandem / multi-pick operations</td><td><a href="/contact">Request a quotation</a></td><td>Agreed per project</td></tr>
          <tr><td>Tower crane Appointed Person contract</td><td>Priced per project</td><td>Ongoing</td></tr>
        </tbody>
      </table>

      <p>All figures are fixed fees, not hourly rates. A fixed price matters more than it sounds: lift planning has a habit of growing extra correspondence — principal contractor comments, revised loads, a different machine turning up — and an hourly arrangement quietly turns each of those into billable time.</p>

      <h2>What Actually Drives the Price</h2>

      <h3>1. Complexity of the operation</h3>
      <p>The single biggest factor. A routine excavator pick with good ground and clear access is quick to verify. A near-capacity lift over a live carriageway with restricted slew needs significantly more calculation, drawing work, and hazard control — and the price reflects the planning hours and the responsibility being taken on.</p>

      <h3>2. Whether a site visit is needed</h3>
      <p>For straightforward lifts with good photographs, drawings and load information, a competent planner can work remotely — that keeps you at the bottom of the price range. Mobile crane work usually justifies a visit to assess ground conditions and access; where we quote one, it is included in the fixed price rather than billed on top.</p>

      <h3>3. The quality of your information</h3>
      <p>The fastest way to keep your cost down is to send complete information first time: load weight and dimensions, the machine make, model and configuration, site address and access details, and the principal contractor's requirements. Chasing missing load data is the most common cause of delay — and on hourly arrangements, of cost creep.</p>

      <h3>4. Urgency</h3>
      <p>Same-day and next-day plans are routinely achievable for standard equipment where the information is ready. Expect a premium for genuine emergencies, though at RMT we treat 24–48 hours as standard rather than a rush service.</p>

      <h2>The Three Ways to Get a Lift Plan — Costs Compared</h2>

      <h3>Independent lift planning consultancy — from £200 fixed</h3>
      <p>You deal directly with the Appointed Person who writes the plan, the fee is fixed, and the plan is independent of any equipment supplier. This is usually the most economical route when you already have your machine and operator arranged and need the planning competence LOLER requires.</p>

      <h3>Crane hire company Appointed Person — typically bundled into a contract lift</h3>
      <p>If you are buying a <strong>contract lift (CPA terms)</strong>, the crane company supplies the crane, operator and Appointed Person as a package, and the planning cost is wrapped into the overall contract price rather than itemised. A contract lift is the right answer when you want the crane company to carry the lifting risk — but if you already have the plant, paying for a bundled AP you did not need is an expensive way to get a document.</p>

      <h3>Do it yourself with a template — free, with a serious caveat</h3>
      <p>For routine, low-risk lifts, a competent person on your own team can complete a <a href="/resources/lift-plan-templates">free lift plan template</a> at no cost. The caveat is the word competent: under LOLER 1998 Regulation 8 the plan must be prepared by someone with adequate training, knowledge and experience — a blank form filled in by someone unqualified is not a lift plan, and principal contractors reject them daily. Our guide to <a href="/blog/when-do-you-need-lift-plan">when you need a lift plan</a> explains where the DIY route is legitimate and where it is not.</p>

      <h2>The Hidden Cost Nobody Budgets For: Rejection</h2>
      <p>On major projects, every subcontractor lift plan is <a href="/services/lift-plan-checking">checked by the principal contractor's Appointed Person</a> before lifting is approved. A cheap or templated plan that fails that check costs far more than the saving: resubmission delays, standing time for the machine and gang you booked, and a dent in your standing with the PC. Having reviewed hundreds of submissions, the most common rejection causes are wrong load charts, missing thorough-examination certificates, and capacity calculations that ignore accessory weight — all avoidable with competent planning the first time.</p>

      <h2>How to Get an Exact Price</h2>
      <p>Send the load details (weight, dimensions, lift points), the equipment (make, model, configuration), the site (address, access, ground), and the dates. Any competent provider should turn that into a fixed written quote within 24 hours — we do, with the plan itself typically delivered 24–48 hours after you confirm. You will find our full service details on the <a href="/services/lift-plans">lift plan writing service</a> page.</p>

      <h2>How RMT Solutions Prices Lift Plans</h2>
      <div class="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 my-8">
        <p class="text-gray-300 mb-6">Every plan is written by Ricky Marsh, a CPCS A61 Appointed Person with 35 years of construction experience and over 1,000 lift plans delivered. Fixed prices from £200, quoted within 24 hours, no hourly billing, and revisions arising from PC review included. We write <a href="/services/excavator-lift-plans">excavator</a>, <a href="/services/telehandler-lift-plans">telehandler</a>, <a href="/services/lorry-loader-lift-plans">lorry loader</a> and <a href="/services/mobile-crane-lift-plans">mobile crane lift plans</a> UK-wide.</p>
        <a href="/contact" class="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition">Get a fixed quote today</a>
      </div>
    `,
  },
  'what-is-bs-7121-complete-guide': {
    title: 'What is BS 7121? UK Guide to Safe Use of Cranes',
    description: 'BS 7121 is the British Standard for the safe use of cranes. Learn what each part covers, how it links to LOLER 1998, and what UK contractors need to comply.',
    keywords: 'bs 7121, what is bs 7121, bs 7121 part 1, bs 7121-1, bs 7121-3 mobile cranes, bs 7121-5 tower cranes, bs 7121-4 lorry loaders, safe use of cranes british standard, appointed person bs 7121, basic standard complex lift, lift categorisation, code of practice safe use of cranes',
    category: 'Compliance',
    readTime: '16 min read',
    date: 'May 19, 2026',
    dateModified: 'May 22, 2026',
    image: '/images/mobile-crane-steel-erection.webp',
    imageAlt: 'Mobile crane lifting a structural steel section during erection — operation governed by BS 7121 code of practice for safe use of cranes',
    content: `
      <p class="lead">If you have spent any time around UK lifting operations you will have seen "BS 7121" stamped across method statements, lift plans, tender returns, and contract specifications. It is referenced more frequently than almost any other technical standard in the industry — yet many of the people relying on it could not say with confidence what it actually contains, how its various parts fit together, or what its legal status really is. This guide explains BS 7121 in full: what it is, what each part covers, how it links to LOLER 1998, and what it means in practice for anyone planning or supervising crane operations on a UK site.</p>

      <h2>What is BS 7121?</h2>
      <p>BS 7121 is the British Standard for the safe use of cranes. Published by the British Standards Institution (BSI), it is the recognised UK code of practice covering every aspect of crane operations — planning, equipment selection, personnel competence, communication, supervision, and management. It is not a single document but a family of related standards, each addressing a different category of equipment or a different aspect of safe operation.</p>

      <p>The full series title is "Code of practice for safe use of cranes," and the standard has been the benchmark reference for the UK crane industry for decades. The current foundation document is BS 7121-1:2016, which sets out general principles applicable to all crane operations. The other parts then deal with specific equipment types — mobile cranes, tower cranes, lorry loaders, overhead cranes — or specific aspects such as inspection and testing.</p>

      <p>BS 7121 is published and maintained by BSI Standards Limited. It is developed and reviewed by committees made up of industry experts including crane manufacturers, hire companies, contractors, training bodies, the HSE, and trade associations such as the Construction Plant-hire Association (CPA). When changes occur in technology, regulation, or industry practice, the relevant parts are revised — which is why it is important to work to the current edition rather than an older one that may have been superseded.</p>

      <h2>The Legal Status of BS 7121</h2>
      <p>This is the question most often asked, and the answer matters: BS 7121 is not law. It is a voluntary standard, not a statutory instrument. There is no offence committed simply by failing to follow it. The actual statutory framework for lifting operations in the UK comes from the Health and Safety at Work etc. Act 1974 and the <a href="/blog/what-is-loler-complete-guide">Lifting Operations and Lifting Equipment Regulations 1998 (LOLER)</a>, supported by the Provision and Use of Work Equipment Regulations 1998 (PUWER) and the Construction (Design and Management) Regulations 2015.</p>

      <p>That said, BS 7121 is the recognised means of demonstrating compliance with those legal duties. LOLER Regulation 8 requires that every lifting operation is properly planned by a competent person, appropriately supervised, and carried out in a safe manner — but it does not prescribe how. BS 7121 fills that gap by setting out, in detail, what proper planning, supervision, and safe operation look like in practice.</p>

      <p>The HSE's Approved Code of Practice for LOLER (<a href="/blog/loler-acop-l113-explained">L113</a>) cross-refers to BS 7121, and the courts have consistently treated the standard as the benchmark of reasonable practice. In practical terms this means that if you can show your lifting operations were planned and managed in accordance with BS 7121, you have a strong defence in the event of an incident or enforcement action. If you cannot, you have a problem — because the prosecution or the HSE inspector will use the standard as the yardstick against which your operation is measured.</p>

      <p>Most tier 1 contractors and major clients now require BS 7121 compliance as a contractual condition. Tender returns are routinely rejected if they do not reference the standard. Prequalification questionnaires ask whether your lifting management system aligns with it. In effect, while it is not legally mandatory, BS 7121 has become commercially non-negotiable across UK construction.</p>

      <figure>
        <img src="/images/blog/bs7121-code-of-practice-crane-supervisor.webp" alt="A crane supervisor in hi-vis and hard hat standing safely beside a mobile crane with outriggers deployed and exclusion-zone barriers in place on a UK construction site" width="1600" height="1067" loading="lazy" />
        <figcaption>BS 7121 is the recognised UK code of practice for the safe use of cranes \u2014 the benchmark against which LOLER compliance is judged.</figcaption>
      </figure>

      <h2>The Structure of BS 7121: A Family of Standards</h2>
      <p>BS 7121 is best understood as a series of separately numbered parts that share a common framework but address different equipment types or different aspects of crane operation. The numbering is not always intuitive — there are gaps in the series, some parts have been withdrawn, and some standards have been moved between sub-parts and amendments over the years.</p>

      <p>The parts most relevant to UK construction and industrial lifting are described below. The dates given are the current published editions at the time of writing — always check that you are referencing the latest version before using the standard on a project.</p>

      <figure>
        <img src="/images/blog/bs7121-family-of-standards-diagram.svg" alt="Diagram of the BS 7121 family of standards: BS 7121-1:2016 General as the foundation, with equipment-specific parts including Part 2 inspection and thorough examination, Part 3 mobile cranes, Part 4 lorry loaders, Part 5 tower cranes, Part 7 overhead travelling cranes, Part 11 offshore cranes, Part 12 recovery vehicles, Part 13 hydraulic gantries and Part 14 side boom pipelayers" width="1600" height="1100" loading="lazy" />
        <figcaption>BS 7121 is a family of standards \u2014 Part 1 sets the general framework and each equipment-specific part builds on it.</figcaption>
      </figure>

      <h3>BS 7121-1:2016 — General</h3>
      <p>This is the foundation part of the series and the document everyone working with cranes should be familiar with. BS 7121-1:2016 sets out the general principles that apply to all crane operations regardless of equipment type. It defines the key roles in a lifting team, the planning duties of the Appointed Person, the categories of lift, the requirements for risk assessment and method statements, and the principles of supervision and communication.</p>

      <p>If you only ever read one part of BS 7121, Part 1 is the one. It contains the conceptual framework on which all the other parts build. The 2016 edition consolidated and updated earlier editions and is the version currently in force.</p>

      <h3>BS 7121-2 — Inspection, Testing and Thorough Examination</h3>
      <p>Part 2 is itself a multi-part series covering the inspection, testing, and thorough examination of cranes and lifting equipment. It is structured into sub-parts for different equipment types — mobile cranes, tower cranes, lorry loaders, overhead cranes, and so on — and it supports LOLER Regulation 9, which requires lifting equipment to be subject to thorough examination by a competent person at defined intervals.</p>

      <p>Part 2 is primarily aimed at the competent persons who carry out thorough examinations rather than at site users, but it is essential reading for anyone responsible for managing fleet compliance, planning maintenance programmes, or auditing lifting equipment certification on a project.</p>

      <h3>BS 7121-3:2017 — Mobile Cranes</h3>
      <p>Part 3 deals with the safe use of mobile cranes. It supplements Part 1 with specific guidance on the planning, setup, and operation of mobile cranes — from compact city cranes to large all-terrain machines and crawler cranes. It addresses ground bearing pressures, outrigger loadings, configuration selection, duty charts, and the management of dynamic effects during the lift.</p>

      <p>If your project involves mobile cranes, BS 7121-3 is the standard your Appointed Person should be working to alongside Part 1. The 2017 edition is the current version.</p>

      <h3>BS 7121-4:2010 — Lorry Loaders</h3>
      <p>Part 4 covers <a href="/blog/lorry-loader-lift-plans-guide">lorry-mounted loader cranes</a> — commonly referred to in the UK as HIABs, although HIAB is actually a brand name rather than a generic term. The standard addresses both the lifting of suspended loads and the use of lorry loaders for materials handling, and it deals with issues specific to vehicle-mounted equipment such as stabiliser deployment, vehicle stability, and operation from elevated cabs.</p>

      <p>Lorry loaders are involved in a disproportionately high number of lifting incidents in the UK, often because operators and site teams treat them as delivery equipment rather than as cranes. BS 7121-4 makes clear that they are cranes — and that the same planning, competence, and supervision requirements apply.</p>

      <h3>BS 7121-5:2019 — Tower Cranes</h3>
      <p>Part 5 addresses tower cranes. This is one of the most detailed parts of the series, reflecting the complexity and risk profile of tower crane operations. It covers planning, erection, climbing, dismantling, anti-collision systems, wind speed management, foundations, and the specific competence requirements for tower crane teams.</p>

      <p>For any project running a tower crane, BS 7121-5 is essential alongside Parts 1 and 2. It also forms the backbone of the Construction Plant-hire Association's tower crane interest group guidance, which most major hire companies have adopted as their operating baseline.</p>

      <h3>BS 7121-7 — Overhead Travelling Cranes</h3>
      <p>Part 7 covers overhead travelling cranes — the gantry and bridge cranes found in factories, warehouses, fabrication yards, and steel mills. It addresses planning, operation, maintenance, and the management of multiple-crane environments where two or more overhead cranes may be working in the same bay.</p>

      <h3>BS 7121-11 — Offshore Cranes</h3>
      <p>Part 11 covers cranes used in offshore environments — fixed and floating installations, vessels, and offshore structures. It deals with the additional hazards of marine operations including vessel motion, dynamic loadings, weather windows, and the interaction between crane and structure in moving conditions.</p>

      <h3>BS 7121-12 — Recovery Vehicles</h3>
      <p>Part 12 addresses the use of lifting equipment on recovery vehicles. While this is less commonly referenced in construction, it is relevant for fleet operators and plant recovery contractors.</p>

      <h3>BS 7121-13 — Hydraulic Gantries</h3>
      <p>Part 13 covers hydraulic lifting gantries — the modular lifting frames used for installing heavy machinery, transformers, and process plant in environments where a mobile or overhead crane cannot be used.</p>

      <h3>BS 7121-14 — Side Boom Pipelayers</h3>
      <p>Part 14 covers side boom pipelayers — specialised tracked machines used predominantly in pipeline construction. It addresses the unique stability considerations of side-boom lifting and the management of tandem and multi-machine pipelaying operations.</p>

      <p>Other parts have existed at various times — covering subjects such as articulated cranes and specific specialised equipment — and the series continues to evolve. The principle is always the same: Part 1 provides the general framework, and the equipment-specific parts deal with the particular considerations of each type of machine.</p>

      <h2>Key Concepts from BS 7121-1</h2>
      <p>Because Part 1 is the foundation document, it is worth examining the key concepts it introduces in more detail. These concepts run through every other part of the series and have become the working language of UK crane operations.</p>

      <h3>The Lifting Team and Defined Roles</h3>
      <p>BS 7121-1 defines the roles that together make up a lifting team. Each role has specific duties, competence requirements, and responsibilities. The principal roles are the Appointed Person, the Crane Supervisor (sometimes called the Lift Supervisor), the Crane Operator, and the Slinger/Signaller.</p>

      <p>This role-based structure is one of the most important contributions of BS 7121. It removes ambiguity about who is responsible for what during a lifting operation. On a well-managed site every person involved in a lift knows their role, knows the duties that come with it, and knows who they are responsible to and for.</p>

      <h3>The Appointed Person</h3>
      <p>The <a href="/blog/cpcs-appointed-person-guide">Appointed Person</a> is the role most associated with BS 7121, and the standard sets out the duties in detail. The Appointed Person is responsible for the overall planning and management of the lifting operation. This includes carrying out the risk assessment, preparing the lift plan, selecting the equipment and personnel, briefing the team, and ensuring that the operation is properly supervised.</p>

      <p>BS 7121-1 is clear that the Appointed Person must be competent — meaning that they have sufficient training, knowledge, experience, and authority to discharge the duties of the role. In UK construction this competence is typically demonstrated by holding a CPCS A61 Appointed Person card, although other qualifications can also serve. The Appointed Person does not have to be present on site for every lift, but they must remain accountable for the planning and management of every operation carried out under their authority.</p>

      <h3>The Crane Supervisor</h3>
      <p>The Crane Supervisor (Lift Supervisor) is present on site during the lifting operation. They are responsible for the safe execution of the lift as planned by the Appointed Person. This includes briefing the lifting team, checking that conditions match the plan, halting the lift if anything changes that takes it outside the parameters of the plan, and ensuring that the team works to the agreed sequence and exclusion zones.</p>

      <h3>The Crane Operator and the Slinger/Signaller</h3>
      <p>The Crane Operator is the person who physically controls the crane. They are responsible for operating the machine within its rated capacity, for carrying out daily pre-use checks, and for refusing to lift if they consider the operation unsafe.</p>

      <p>The Slinger/Signaller is responsible for attaching the load to the crane, selecting and inspecting the lifting accessories, directing the operator using agreed hand signals or radio, and ensuring that landing areas are clear and prepared. On many operations the same person performs both the slinging and signalling functions; on larger or more complex lifts they may be separated, or there may be multiple slingers under the direction of a banksman.</p>

      <h3>Lift Categorisation: Basic, Standard, and Complex</h3>
      <p>One of the most practically important concepts in BS 7121-1 is the categorisation of lifts into three classes — Basic, Standard, and Complex. The category determines the level of planning, supervision, and documentation required, and it gives the Appointed Person a structured way of matching the planning effort to the risk of the operation.</p>

      <p>A <strong>Basic Lift</strong> is a routine, repetitive lifting operation using a single crane with a known, well-defined load on a prepared site. Examples include daily materials handling with a tower crane, regular offloading at a delivery point, or moving palletised material in a workshop. Basic lifts can be covered by a generic written safe system of work or a schedule of common lifts that is approved by the Appointed Person, rather than requiring an individual lift plan for every operation.</p>

      <p>A <strong>Standard Lift</strong> is a one-off lifting operation that is not particularly complex but does require individual planning. Examples include the erection of a structural steel frame, the placement of precast units, or the offloading of a piece of plant. Standard lifts require an individual lift plan prepared by the Appointed Person, with a method statement and risk assessment specific to the operation.</p>

      <p>A <strong>Complex Lift</strong> is a lifting operation with significant risk or unusual features. Examples include tandem lifts using two or more cranes, lifts over occupied buildings or live infrastructure, lifts in proximity to overhead power lines, lifts of personnel, lifts at very high utilisation, and lifts where the load is asymmetric or its centre of gravity is uncertain. Complex lifts require detailed planning, scaled drawings, calculations of ground bearing pressures and rigging forces, specific wind speed limits, and additional levels of supervision and oversight.</p>

      <p>The categorisation is made by the Appointed Person. There is no rigid formula — it is a judgement based on the load, the equipment, the environment, and the consequences of failure. What matters is that the categorisation is made deliberately and documented, and that the level of planning matches the category.</p>

      <h3>Common Lifts and Schedules of Common Lifts</h3>
      <p>BS 7121-1 recognises that producing an individual lift plan for every routine operation on a busy site is neither practical nor proportionate. The concept of a schedule of common lifts — sometimes called a generic lift plan — allows the Appointed Person to plan and document a range of repetitive lifting operations within a single document, provided they fall within defined parameters.</p>

      <p>A schedule of common lifts typically covers daily materials handling with a tower crane, routine offloading at a defined delivery point, or repetitive operations such as panel hanging where the load type and lift parameters are known and consistent. Operations that fall outside the parameters of the schedule must have an individual lift plan prepared for them.</p>

      <h3>Risk Assessment and Method Statement</h3>
      <p>Every <a href="/blog/what-is-a-lift-plan">lift plan</a> prepared under BS 7121 must be supported by a risk assessment and a method statement. The risk assessment identifies the hazards of the operation and evaluates the risks. The method statement describes how the operation will be carried out safely. Together with the technical lift plan documentation — load weights, capacity calculations, rigging arrangements — these documents form the complete planning record for the operation.</p>

      <h2>Mobile Cranes and BS 7121-3</h2>
      <p>BS 7121-3 supplements Part 1 with specific guidance for mobile crane operations. Mobile cranes — all-terrain, rough-terrain, truck-mounted, and crawler — present specific planning challenges that the standard addresses in detail.</p>

      <p>Ground bearing pressure is one of the central concerns. A mobile crane on outriggers concentrates very high loads onto a small footprint, and the ground beneath the outrigger pads must be capable of supporting those loads. BS 7121-3 sets out the principles for calculating outrigger loads, assessing ground capacity, and selecting appropriate spreader mats or engineered foundations where ground conditions are inadequate.</p>

      <p>Configuration selection is another area. Mobile cranes can be operated in many different configurations — boom length, jib, counterweight, outrigger extension — and each configuration has its own duty chart. BS 7121-3 emphasises that the configuration selected must match the duty chart used in the lift plan and that any deviation invalidates the planning.</p>

      <p>Dynamic effects, slewing, travelling with loads, and the management of free-on-wheels operations are also covered. The standard is the reference point that a competent <a href="/blog/cpcs-appointed-person-guide">Appointed Person</a> should be applying when preparing a mobile crane lift plan.</p>

      <h2>Tower Cranes and BS 7121-5</h2>
      <p>BS 7121-5 is the most detailed part of the series and reflects the complexity of tower crane operations on UK construction sites. It addresses the full lifecycle of a tower crane on a project — from initial selection and foundation design, through erection, climbing, in-service operation, and dismantling.</p>

      <p>Anti-collision systems are now a major focus, particularly on multi-crane sites where the working envelopes of adjacent cranes overlap. BS 7121-5 sets out the principles for configuring and testing anti-collision and zoning systems, and the duties of the personnel responsible for them.</p>

      <p>Wind management is another central concern. Tower cranes are particularly vulnerable to wind, and the standard sets out the principles for managing wind during operation, during out-of-service periods, and during erection and dismantling. Anemometer calibration, wind speed limits, and the duties of the supervisor in monitoring conditions are all addressed.</p>

      <p>The standard also deals with the interaction between the tower crane and the wider site — load paths over occupied areas, exclusion zones, controlled lowering of small loads, and the management of multiple lifting teams sharing the same crane.</p>

      <h2>Lorry Loaders and BS 7121-4</h2>
      <p>BS 7121-4 addresses one of the most commonly misused categories of crane in UK construction. Lorry loaders are often treated as delivery equipment rather than as cranes, with the result that the same planning and competence standards applied to mobile and tower cranes are not always extended to them.</p>

      <p>The standard makes clear that a lorry loader is a crane and that all the principles of BS 7121-1 — competent Appointed Person, planning proportionate to risk, qualified operators and slinger/signallers, safe systems of work — apply. It then adds specific guidance on stabiliser deployment, vehicle stability, the use of remote control, and the particular hazards of operating from or near the vehicle cab.</p>

      <p>It is also important to recognise that the operator of a lorry loader on a UK construction site requires the correct CPCS or NPORS card, and the slinger/signaller — who is often the same delivery driver — must also be competent. Many incidents involving lorry loaders trace back to a failure to apply BS 7121 in the same way it would be applied to any other crane.</p>

      <h2>How BS 7121 Supports LOLER Compliance</h2>
      <p>Because the standard is not law but compliance with it satisfies the legal duties, it is worth being explicit about how the two interlock.</p>

      <p>LOLER Regulation 8(1) requires that every lifting operation is properly planned by a competent person, appropriately supervised, and carried out in a safe manner. BS 7121-1 tells you what proper planning, appropriate supervision, and safe operation look like — through the Appointed Person role, the lift categorisation system, the schedule of common lifts, and the risk assessment and method statement requirements.</p>

      <p>LOLER Regulation 9 requires thorough examination of lifting equipment at defined intervals. BS 7121-2 sets out how those examinations should be conducted and recorded, what the competent person should look at, and what the records should contain.</p>

      <p>LOLER also requires that lifting equipment is suitable, correctly positioned and installed, and clearly marked with its safe working load. The equipment-specific parts of BS 7121 — Parts 3, 4, 5, 7, and so on — provide the detailed guidance on how to achieve this for each type of machine.</p>

      <p>Working to BS 7121 does not by itself guarantee compliance with LOLER, because LOLER also imposes general management duties such as supervision, employee involvement, and management arrangements. But it goes a long way, and in the event of an incident or HSE inspection, demonstrating that you were working to the standard is the most effective way of showing that you discharged your legal duties competently.</p>

      <h2>Common Gaps Where Sites Fall Short of BS 7121</h2>
      <p>Having audited <a href="/blog/lifting-operations-audit-what-to-expect">lifting operations</a> on UK construction sites for many years, certain gaps between stated compliance with BS 7121 and actual practice on the ground appear repeatedly.</p>

      <p>The most common is the misuse of lift categorisation. Operations that should be classified as Standard or Complex are routinely treated as Basic and covered by a generic schedule of common lifts, with the result that no individual planning takes place. The schedule itself, when reviewed, often does not actually fit the operations being carried out under it.</p>

      <p>Another frequent gap is in the application of BS 7121-4 to lorry loader operations. Delivery vehicles arrive on site with no lift plan, the slinger/signaller role is taken by the driver without any formal competence check, and the lift proceeds as if it were a delivery rather than a lifting operation. This is one of the most common areas where the standard is referenced in tender documents but not actually applied on the ground.</p>

      <p>Lifting team profiles — the documented records confirming who holds which qualifications — are often incomplete or out of date. The standard expects competent personnel in every role, but if the records cannot demonstrate competence, the operation cannot be shown to comply.</p>

      <p>Anti-collision system management on multi-tower-crane sites is another area where actual practice often falls behind the standard. Zones are configured at the start of the job but not updated as the site progresses, and the responsibility for managing them is not clearly assigned to a competent person.</p>

      <p>Finally, the relationship between the Appointed Person and the Crane Supervisor is sometimes blurred. The standard is clear that these are distinct roles with distinct duties. On smaller projects the same person may discharge both, but the duties of each role must still be performed. Where neither is happening properly, the lifting operation is effectively unplanned and unsupervised regardless of who is named on the paperwork.</p>

      <h2>BS 7121 in Tenders and Contracts</h2>
      <p>BS 7121 references are now standard in UK construction contracts. Tender documents typically require bidders to confirm that their lifting management system complies with the standard, that their Appointed Persons are competent to the BS 7121-1 definition, and that their <a href="/blog/lift-plan-checking-what-gets-checked-and-why-plans-get-rejected">lift plans</a> will be prepared and approved in accordance with it.</p>

      <p>If you are responding to a tender that requires BS 7121 compliance, you need to be able to demonstrate it — not just claim it. This typically means producing a lifting management plan that maps your procedures to the relevant parts of the standard, identifying your Appointed Person and their qualifications, providing example lift plans, and confirming the arrangements for supervision and competence.</p>

      <p>On the other side of the table, if you are evaluating tender returns, claims of BS 7121 compliance should be tested. A bidder that cannot produce evidence of how they apply the standard in practice is probably treating it as a tick box rather than a working framework.</p>

      <h2>Current Editions and Keeping Up to Date</h2>
      <p>British Standards are updated periodically as technology, regulation, and practice evolve. The current editions of the principal parts of BS 7121 are:</p>

      <ul>
        <li><strong>BS 7121-1:2016</strong> — Code of practice for safe use of cranes: General</li>
        <li><strong>BS 7121-2 series</strong> — Inspection, testing and thorough examination, various sub-parts with different dates</li>
        <li><strong>BS 7121-3:2017</strong> — Mobile cranes</li>
        <li><strong>BS 7121-4:2010</strong> — Lorry loaders</li>
        <li><strong>BS 7121-5:2019</strong> — Tower cranes</li>
        <li><strong>BS 7121-7</strong> — Overhead travelling cranes (multiple sub-parts and amendments)</li>
        <li><strong>BS 7121-11</strong> — Offshore cranes (current edition as published by BSI)</li>
      </ul>

      <p>Always verify the current edition before using the standard on a project — BSI publishes the up-to-date list on its website. Working to a superseded edition is itself a gap in compliance, because the courts and the HSE will measure the operation against the current standard, not the one in force when your procedures were written.</p>

      <h2>How RMT Solutions Can Help</h2>
      <p>RMT Solutions provides BS 7121-compliant lift planning, <a href="/services/lift-plan-checking">lift plan checking</a>, and <a href="/services/lifting-operations-audit">lifting operations audit</a> services for principal contractors, subcontractors, and clients across the UK. All work is carried out by a CPCS Appointed Person with 35 years of construction industry experience, working to the current editions of BS 7121 and the supporting British Standards.</p>

      <p>We prepare <a href="/blog/what-is-a-lift-plan">lift plans</a> for all categories of lifting operation — Basic, Standard, and Complex — across the full range of equipment types including <a href="/blog/excavator-lift-plans-complete-guide">excavators</a>, <a href="/blog/telehandler-lift-plans-complete-guide">telehandlers</a>, <a href="/blog/lorry-loader-lift-plans-guide">lorry loaders</a>, mobile cranes, and tower cranes. We also provide independent review of subcontractor lift plans, lifting management plans for tender submissions, and on-site audits of lifting operations against BS 7121 requirements.</p>

      <p>Whether you need a single lift plan reviewed, a complete lifting management framework developed for a major project, or independent assurance that your site is operating in line with the standard, we can help.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need BS 7121 Compliant Lift Planning?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides BS 7121-compliant lift planning, plan checking, and lifting operations audits across the UK. All work carried out by a CPCS Appointed Person with 35 years of construction experience.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote</a>
      </div>

      <p><strong>About the Author:</strong> Ricky Marsh is a CPCS Appointed Person (A61) with 35 years of construction industry experience. He holds NEBOSH National Diploma, CertIOSH, MIIRSM and TIFSM qualifications, and provides lift planning, <a href="/services/lift-plan-checking">lift plan checking</a>, and <a href="/services/lifting-operations-audit">lifting operations audit</a> services to contractors across the UK through <a href="/">RMT Solutions</a>.</p>
    `,
  },
  'what-is-a-lift-plan': {
    // CTR fix (Jul 2026): this URL had 13,227 impressions at pos ~13 but a
    // 0.23% CTR. Title now leads with the 9-part contents + example angle
    // (the "lifting plan example/sample" query cluster, ~350 imps, has no
    // dedicated result) and the description opens with the answer.
    title: 'What is a Lift Plan? The 9 Parts, Example & LOLER Rules',
    description: 'A lift plan sets out how a load will be lifted safely — the load, machine, capacity at radius, rigging and site hazards. See all 9 parts with an example diagram.',
    keywords: 'what is a lift plan, what is a lifting plan, what is the lifting plan, lifting plan, lift plan, lift plan UK, LOLER lift plan, lift plan construction, lift plan contents, who writes a lift plan, lift plan document, crane lift plan, lifting operation plan, lifting plan example, example of a lift plan, sample lifting plan, lifting plan sample, lift plan details, what is lifting plan in safety',
    category: 'Compliance',
    readTime: '10 min read',
    date: 'February 11, 2026',
    dateModified: 'July 8, 2026',
    image: '/images/services/mobile-crane-lifting-precast-concrete.webp',
    imageAlt: 'Mobile crane lifting a precast concrete unit on a UK construction site — a typical lifting operation covered by a lift plan',
    content: `
      <p class="lead">A lift plan is one of the most important documents on any UK construction site \u2014 yet it remains one of the most misunderstood. Whether you are a principal contractor managing a major project, a subcontractor organising a steel delivery, or a site manager trying to keep operations moving safely, understanding what a lift plan is, what it should contain, and when you need one is fundamental to LOLER compliance and site safety.</p>

      <h2>What is a Lift Plan?</h2>
      <p>A lift plan is a documented plan for a lifting operation. It sets out how a load will be lifted safely from one position to another, identifying the equipment to be used, the risks involved, and the control measures required. Under the Lifting Operations and Lifting Equipment Regulations 1998 (LOLER), every lifting operation must be properly planned by a competent person before it takes place.</p>

      <p>A lift plan is not a generic risk assessment or a method statement, although it may incorporate elements of both. It is a specific document that addresses a specific lifting operation \u2014 the particular load, the particular machine, the particular site conditions, and the particular hazards present on the day. A lift plan written for one operation cannot simply be reused for another without being reviewed and updated to reflect the actual circumstances.</p>

      <p>The term "lift plan" is used across the UK construction industry, though you may also hear it referred to as a lifting plan, a <a href="/blog/crane-lift-plan-requirements">crane lift plan</a>, or a lifting operation plan. Regardless of the terminology, the legal requirement is the same: LOLER Regulation 8(1) states that every lifting operation shall be properly planned by a competent person, appropriately supervised, and carried out in a safe manner.</p>

      <figure>
        <img src="/images/blog/lift-plan-document-clipboard-site.webp" alt="A multi-page lift plan document on a clipboard beside a hard hat and hi-vis on a site table, with a mobile crane working in the background on a UK construction site" width="1600" height="1067" loading="lazy" />
        <figcaption>A lift plan is a specific, documented plan for a specific lifting operation \u2014 not a generic risk assessment reused from job to job.</figcaption>
      </figure>

      <h2>When Do You Need a Lift Plan?</h2>
      <p>The short answer is: whenever a lifting operation takes place. LOLER applies to all lifting operations carried out by all types of lifting equipment, not just cranes. This means a lift plan is required for operations involving:</p>

      <ul>
        <li><strong>Mobile cranes</strong> \u2014 all lifts, from routine offloading to complex tandem lifts</li>
        <li><strong>Tower cranes</strong> \u2014 all lifting operations on site, including materials handling and steel erection</li>
        <li><strong>Excavators used for lifting</strong> \u2014 whenever an excavator lifts a suspended load using slings, chains, or lifting accessories</li>
        <li><strong>Telehandlers on crane duties</strong> \u2014 when a telehandler lifts suspended loads rather than simply carrying materials on forks</li>
        <li><strong>Lorry loaders (HIABs)</strong> \u2014 all loading and unloading operations involving suspended loads</li>
        <li><strong>Overhead cranes and hoists</strong> \u2014 lifting operations in workshops, warehouses, and manufacturing environments</li>
        <li><strong>Lifting gantries and beam clamps</strong> \u2014 temporary lifting equipment used in confined spaces or for specific tasks</li>
      </ul>

      <p>A common misconception is that routine or simple lifts do not need a lift plan. This is incorrect. LOLER does not distinguish between complex and routine operations \u2014 all lifting operations must be planned. What varies is the level of detail required. A straightforward lift with a well-matched machine on firm, level ground needs less documentation than a complex tandem crane lift adjacent to a live railway, but both must be planned.</p>

      <p>The Health and Safety Executive's Approved Code of Practice (ACOP) for LOLER, known as L113, provides further guidance — our <a href="/blog/loler-acop-l113-explained">plain-English guide to L113</a> covers its legal status in full. It makes clear that the complexity of the plan should be proportionate to the risks involved, but the requirement for planning exists regardless.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-6 my-10">
        <p class="text-gray-300 m-0"><strong class="text-amber-400">Need a lift plan written?</strong> Site-specific, LOLER-compliant plans from £200 with 24–48 hour turnaround, by a CPCS A61 Appointed Person. <a href="/contact" class="text-amber-400 underline">Get a quote</a> or call <a href="tel:+447803808093" class="text-amber-400 underline">07803 808093</a>.</p>
      </div>

      <h2>What Does a Lift Plan Contain?</h2>
      <p>There is no single prescribed format for a lift plan. The HSE does not mandate a specific template, and different companies, crane hire firms, and Appointed Persons use different formats. What matters is that the plan addresses all the risks of the lifting operation and provides sufficient information for the lift to be carried out safely. If you want a structured starting point, you can <a href="/resources/lift-plan-templates">download our free lift plan template</a> — an editable Word document aligned with BS 7121.</p>

      <p>That said, a comprehensive lift plan will typically address the following areas.</p>

      <figure>
        <img src="/images/blog/anatomy-of-a-lift-plan-diagram.svg" alt="Diagram showing the nine elements of a LOLER-compliant lift plan: description of the operation, load details, equipment selection, radius and capacity, rigging arrangement, ground conditions, site-specific hazards, personnel and roles, and sequence of operations" width="1600" height="1060" loading="lazy" />
        <figcaption>The anatomy of a lift plan \u2014 the nine elements a competent person works through for every lifting operation under LOLER 1998.</figcaption>
      </figure>

      <h3>Description of the Lifting Operation</h3>
      <p>The plan should clearly describe what is being lifted, from where, to where, and why. This sounds obvious, but many deficient lift plans fail at this first hurdle \u2014 they describe the equipment being used but not the actual operation being performed. A good lift plan gives the reader a clear picture of the entire lifting sequence.</p>

      <h3>Load Details</h3>
      <p>Accurate information about the load is essential. The plan must record the weight of the load, its dimensions, the position of its centre of gravity, and any characteristics that could affect the lift. This includes factors such as wind loading on large flat panels, the risk of retained water in hollow sections, whether the load is rigid or flexible, and whether it could shift during lifting.</p>

      <p>The weight of all lifting accessories \u2014 slings, shackles, spreader beams, lifting frames \u2014 must be included in the total suspended load. Underestimating load weight is one of the most common causes of lifting incidents.</p>

      <h3>Lifting Equipment Selection</h3>
      <p>The plan must identify the specific machine to be used \u2014 not just "a 50 tonne crane" but the actual make, model, and configuration. This matters because lifting capacity varies significantly between machines of similar rated capacity depending on their boom length, counterweight configuration, and operating radius.</p>

      <p>The plan should confirm that the selected equipment has adequate capacity for the lift with an appropriate safety margin, and that it holds a current thorough examination certificate under LOLER Regulation 9.</p>

      <h3>Radius and Capacity Verification</h3>
      <p>This is the technical heart of most lift plans. The plan must demonstrate that the lifting equipment can safely handle the load at the working radius required. This involves reading the manufacturer's load chart for the specific machine configuration and comparing the rated capacity at the planned radius against the total suspended load.</p>

      <p>Industry practice is to express this as a percentage utilisation \u2014 for example, a 2 tonne load on a machine rated at 3 tonnes at the working radius gives 67% utilisation. Most companies and Appointed Persons work to a maximum of 80% utilisation for routine lifts, reserving higher utilisations for exceptional circumstances with additional controls in place.</p>

      <h3>Rigging Arrangement</h3>
      <p>The plan should describe how the load will be attached to the lifting equipment. This includes the type, size, and configuration of slings, the attachment points on the load, the sling angles, and the resulting forces in each leg. For complex or asymmetric loads, the rigging arrangement is critical to ensuring the load remains stable and balanced during the lift.</p>

      <h3>Ground Conditions</h3>
      <p>The ground on which the lifting equipment operates must be capable of supporting the imposed loads. The plan should assess ground bearing capacity at the machine's operating position and under outrigger or stabiliser pads. Where ground conditions are uncertain \u2014 such as on made-up ground, near excavations, or over underground services \u2014 specific measures such as timber mats, steel plates, or engineered foundations may be required.</p>

      <h3>Site-Specific Hazards</h3>
      <p>Every lift plan must identify and address the hazards present at the specific location. Common hazards include overhead power lines, underground services, adjacent structures, other plant and vehicle movements, pedestrian routes, and weather conditions. The plan should specify control measures for each identified hazard \u2014 for example, minimum approach distances to power lines, exclusion zones around the lift, and maximum wind speed limits.</p>

      <h3>Personnel</h3>
      <p>The plan must identify the key personnel involved in the lifting operation and their roles. This typically includes the Appointed Person who planned the lift, the crane supervisor or lift supervisor overseeing the operation on site, the crane or machine operator, and the slinger/signaller responsible for attaching loads and directing the operator. The communication method must also be specified \u2014 hand signals, radio, or direct verbal communication.</p>

      <h3>Sequence of Operations</h3>
      <p>For anything beyond the simplest lift, the plan should describe the sequence of operations step by step. This is particularly important for lifts involving multiple picks, repositioning of the crane, or coordination between different machines or trades. The sequence should address what happens at each stage, including how the load will be landed, released, and secured at its final position.</p>

      <h2>The CITB GC14 Form</h2>
      <p>Many people in the UK construction industry associate lift plans with the CITB form GC14, which is a widely used lift plan template. The GC14 provides a structured format that prompts the planner to address the key elements of a lifting operation, and it is a perfectly acceptable format for documenting a lift plan.</p>

      <p>However, it is important to understand that the GC14 is not mandatory. It is a tool, not a legal requirement. Other formats are equally acceptable provided they address all the necessary elements. Some Appointed Persons and crane companies use their own bespoke formats, which may be more detailed or better suited to specific types of operation. What matters is the content, not the template.</p>

      <p>It is also worth noting that simply filling in a GC14 form does not automatically make a lift plan compliant. A GC14 completed with inaccurate load weights, incorrect radius calculations, or without addressing site-specific hazards is no more compliant than having no plan at all. The form is only as good as the information it contains and the competence of the person completing it.</p>

      <h2>Who Can Write a Lift Plan?</h2>
      <p>LOLER requires that lifting operations are planned by a competent person. The regulations do not specify a particular qualification, but the person must have sufficient training, knowledge, experience, and ability to plan the specific type of lifting operation involved.</p>

      <p>In practice, for crane and complex lifting operations, this role is typically filled by an Appointed Person \u2014 a role defined in BS 7121 (the British Standard for safe use of cranes). Under the CPCS scheme, the Appointed Person holds an A61 card, which requires both theoretical knowledge and practical experience in lift planning.</p>

      <p>For simpler lifting operations \u2014 such as routine overhead crane lifts in a workshop \u2014 the competent person may be someone with relevant operational experience and training, even if they do not hold a formal Appointed Person qualification. The key test is whether the person has the competence to identify and manage the risks of the specific operation they are planning.</p>

      <p>What is clear is that lift planning should not be delegated to someone without the necessary competence simply because they are available. An inadequate lift plan prepared by an unqualified person is both a safety risk and a legal liability.</p>

      <h2>Lift Plans vs Method Statements vs Risk Assessments</h2>
      <p>There is sometimes confusion about the relationship between lift plans, method statements, and risk assessments. These are related but distinct documents.</p>

      <p>A <strong>risk assessment</strong> identifies the hazards associated with an activity and evaluates the risks. It is a broader document that may cover the entire lifting operation and its surrounding activities.</p>

      <p>A <strong>method statement</strong> (or safe system of work) describes how an activity will be carried out safely. It typically covers the step-by-step procedure, the equipment required, and the precautions to be taken.</p>

      <p>A <strong>lift plan</strong> specifically addresses the technical and safety requirements of the lifting operation itself. It incorporates elements of both risk assessment and method statement but focuses on the specific parameters of the lift \u2014 load weight, equipment capacity, rigging arrangement, radius, ground conditions, and so on.</p>

      <p>In practice, many organisations combine elements of all three into a single document. This is perfectly acceptable provided all the required information is captured. What is not acceptable is assuming that a generic risk assessment and method statement (RAMS) covers the lift planning requirement. LOLER specifically requires that each lifting operation is planned \u2014 a generic RAMS does not satisfy this requirement.</p>

      <h2>Common Problems with Lift Plans</h2>
      <p>Having reviewed thousands of lift plans over 35 years in the construction industry, certain problems appear repeatedly.</p>

      <h3>Inaccurate Load Weights</h3>
      <p>The single most fundamental piece of information in any lift plan is the weight of the load, yet it is frequently wrong. Estimated weights, weights taken from outdated drawings, or weights that omit the rigging and accessories can all lead to an understatement of the actual load. Where possible, load weights should be verified against manufacturer's data, delivery documentation, or by direct calculation.</p>

      <h3>Wrong Machine Configuration</h3>
      <p>Load charts are specific to particular machine configurations \u2014 boom length, counterweight, jib type, outrigger extension. Using a load chart that does not match the actual machine configuration on site is a common and dangerous error.</p>

      <h3>No Site-Specific Assessment</h3>
      <p>A lift plan must address the actual conditions at the actual site. Generic plans that could apply to any site are not compliant with LOLER. The plan must consider the specific ground conditions, overhead obstructions, underground services, adjacent activities, and other hazards present at the location where the lift will take place.</p>

      <h3>Missing Thorough Examination Records</h3>
      <p>Under LOLER, all lifting equipment and lifting accessories must have current thorough examination certificates. A lift plan should confirm that these are in place. Plans that omit this check leave the operation exposed to using equipment that has not been properly examined.</p>

      <h3>No Consideration of the Landing</h3>
      <p>Many lift plans focus on picking the load up but give insufficient attention to how it will be landed, positioned, and secured. The landing phase of a lift can be the most hazardous \u2014 particularly when loads are being placed in congested areas, at height, or where the operator has limited visibility.</p>

      <h2>How Detailed Does a Lift Plan Need to Be?</h2>
      <p>The level of detail in a lift plan should be proportionate to the complexity and risk of the operation. The HSE's ACOP for LOLER recognises this principle.</p>

      <p>For a straightforward lift \u2014 such as offloading materials from a lorry loader on firm, level ground with good access and no overhead hazards \u2014 the plan may be a relatively simple document confirming the load weight, machine capacity at the working radius, rigging arrangement, and basic precautions.</p>

      <p>For complex operations \u2014 tandem lifts, lifts near live services, lifts over occupied areas, or operations involving multiple machines working in close proximity \u2014 the plan must be correspondingly more detailed. It may include scaled drawings showing machine positions and load paths, detailed calculations of ground bearing pressures, specific wind speed limits, and a comprehensive sequence of operations with hold points and checks.</p>

      <p>The principle is that the plan must be sufficient for the lift to be carried out safely. If a competent person could not safely supervise the operation using only the information in the plan, the plan is not detailed enough.</p>

      <h2>Digital vs Paper Lift Plans</h2>
      <p>Traditionally, lift plans have been paper documents \u2014 often handwritten GC14 forms completed on site. While paper plans remain perfectly acceptable, the industry is increasingly moving towards digital lift planning.</p>

      <p>Digital lift plans can offer advantages in terms of accuracy, consistency, and record-keeping. Software tools can calculate capacities automatically, reduce transcription errors, and produce professional documents that are easier to review and archive. They also make it simpler to update plans when site conditions change.</p>

      <p>However, digital tools are only as good as the information entered into them and the competence of the person using them. A digital lift plan with incorrect data is no more compliant than a paper one with the same errors. The technology supports the planning process but does not replace the need for competent professional judgement.</p>

      <h2>The Cost of Getting It Wrong</h2>
      <p>Lifting operations remain one of the highest-risk activities in UK construction. The consequences of an inadequate lift plan range from delays and equipment damage to serious injuries and fatalities. Beyond the human cost, enforcement action by the HSE can result in improvement notices, prohibition notices, prosecution, and significant fines.</p>

      <p>Under the Sentencing Council guidelines for health and safety offences, fines for large organisations convicted of LOLER breaches can run into hundreds of thousands of pounds. For individuals, the consequences can include personal prosecution and, in the worst cases, imprisonment for gross negligence.</p>

      <p>Investing in proper lift planning is not a cost \u2014 it is a fundamental requirement of operating safely and legally in UK construction.</p>

      <h2>How RMT Solutions Can Help</h2>
      <p>Whether you need a lift plan written from scratch, an existing plan reviewed and checked, or ongoing lift planning support for a major project, RMT Solutions provides professional, LOLER-compliant lift planning services from a CPCS Appointed Person with 35 years of construction industry experience.</p>

      <p>We prepare lift plans for all types of lifting equipment \u2014 <a href="/blog/excavator-lift-plans-complete-guide">excavators</a>, <a href="/blog/telehandler-lift-plans-complete-guide">telehandlers</a>, <a href="/blog/lorry-loader-lift-plans-guide">lorry loaders</a>, tower cranes, and mobile cranes \u2014 and provide <a href="/services/lift-plan-checking">lift plan checking services</a> for tier 1 contractors who need submitted plans reviewed by a qualified Appointed Person.</p>

      <p>Working on a live project? See our <a href="/services/lift-plans">lift plan writing service</a> for site-specific, LOLER-compliant lift plans written by a CPCS Appointed Person.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need a Lift Plan?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides LOLER-compliant lift plans and lift plan checking services for UK construction. Fast turnaround from a CPCS Appointed Person with 35 years of experience.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote</a>
      </div>

      <p><strong>About the Author:</strong> Ricky Marsh is a CPCS Appointed Person (A61) with 35 years of construction industry experience. He holds NEBOSH National Diploma, CertIOSH, MIIRSM and TIFSM qualifications, and provides lift planning and lift plan checking services to contractors across the UK through <a href="/">RMT Solutions</a>.</p>
    `,
  },
  'what-does-a-lift-plan-checking-service-involve': {
    title: 'What Does a Lift Plan Checking Service Involve?',
    description: 'What does a lift plan checking service involve? Learn what gets checked, common rejection reasons, and how independent lift plan review improves site safety.',
    keywords: 'lift plan checking service, lift plan review, crane lift plan review, lift plan checker, lift plan audit, LOLER lift plan check, appointed person lift plan review, tier 1 contractor lift plan, subcontractor lift plan review, lift plan compliance check',
    category: 'Services',
    readTime: '9 min read',
    date: 'February 11, 2026',
    dateModified: 'February 11, 2026',
    image: '/images/services/lift-plan-checking-clipboard-inspection.webp',
    imageAlt: 'Lifting engineer reviewing a lift plan against a checklist — the document scrutiny carried out during a lift plan checking service',
    content: `
      <p class="lead">If you manage lifting operations on construction projects \u2014 particularly as a principal contractor or tier 1 main contractor \u2014 you will know that subcontractors are required to submit lift plans before carrying out any lifting work on your site. But how do you know whether those plans are actually any good? A lift plan checking service provides independent, competent review of submitted lift plans to ensure they are LOLER compliant, technically accurate, and safe to proceed.</p>

      <h2>Why Do Contractors Need a Lift Plan Checking Service?</h2>
      <p>Under LOLER 1998, the duty to ensure lifting operations are properly planned does not sit solely with the subcontractor performing the lift. As a principal contractor or main contractor under CDM 2015, you have a duty to ensure that lifting operations on your site are planned and carried out safely. If a subcontractor submits a deficient lift plan and you allow the lift to proceed, the responsibility is shared.</p>

      <p>The problem is that many site teams do not have the technical expertise to properly evaluate a lift plan. A site manager or project manager may be highly competent in their own discipline, but assessing whether a crane has adequate capacity at a given radius, whether the ground can support the outrigger loads, or whether the rigging arrangement is suitable for the load requires specialist knowledge.</p>

      <p>This is where a lift plan checking service comes in. By having an experienced Appointed Person independently review every lift plan submitted to your project, you ensure that deficient plans are identified and corrected before the lift takes place \u2014 not after something goes wrong.</p>

      <h2>What Gets Checked in a Lift Plan Review?</h2>
      <p>A thorough lift plan review examines every element of the submitted plan against the requirements of LOLER, relevant British Standards (particularly BS 7121 for crane operations), and industry best practice. The review is not a tick-box exercise \u2014 it is a technical assessment by a competent person who understands lifting operations from the ground up.</p>

      <h3>Load Weight Verification</h3>
      <p>The first and most fundamental check is whether the stated load weight is accurate. This includes verifying that the weight has been obtained from a reliable source \u2014 manufacturer's data, structural drawings, delivery documentation, or calculation \u2014 and that the weight of all lifting accessories (slings, shackles, spreader beams, lifting frames) has been included in the total suspended load.</p>

      <p>Inaccurate load weights are the single most common deficiency found during lift plan reviews. Estimated weights, weights taken from outdated information, or weights that omit the rigging are all regularly encountered. Even a small understatement of load weight can push a lift into an unsafe utilisation range.</p>

      <h3>Equipment Selection and Capacity</h3>
      <p>The review verifies that the selected lifting equipment \u2014 whether it is a mobile crane, excavator, telehandler, or lorry loader \u2014 has adequate capacity for the planned lift. This involves checking the manufacturer's load chart for the specific machine configuration against the planned working radius and confirming that the resulting utilisation is within acceptable limits.</p>

      <p>Common errors identified at this stage include using the wrong load chart for the machine configuration (for example, quoting capacity with a shorter boom than is actually fitted), calculating the radius incorrectly, or failing to account for factors that reduce capacity such as working on a slope or with partially deployed outriggers.</p>

      <h3>Rigging Assessment</h3>
      <p>The review checks that the proposed rigging arrangement is appropriate for the load. This includes verifying that sling types, sizes, and configurations are suitable, that sling angles are within acceptable limits, that the working load limit of each component in the rigging chain is adequate, and that the attachment points on the load are suitable for the forces involved.</p>

      <p>Rigging errors are particularly dangerous because they can cause the load to become unstable, shift, or detach during the lift. The review looks for common problems such as excessive sling angles (which dramatically increase the forces in each leg), mismatched sling lengths, inadequate attachment points, and failure to account for the load's centre of gravity.</p>

      <h3>Ground Conditions</h3>
      <p>For any lifting operation involving outriggers, stabilisers, or tracked equipment, the ground on which the machine operates must be assessed. The review checks that the lift plan has considered ground bearing capacity, proximity to excavations or soft ground, underground services, and the requirement for load-spreading measures beneath outrigger pads.</p>

      <p>Ground failure beneath a crane or lifting machine can have catastrophic consequences. The review ensures that this critical element has been properly addressed, not simply assumed.</p>

      <h3>Site-Specific Hazards</h3>
      <p>Every lifting operation takes place in a specific environment with specific hazards. The review checks that the plan has identified and addressed hazards including overhead power lines, underground services, adjacent structures and scaffolding, other plant and vehicle movements, pedestrian routes, and weather conditions.</p>

      <p>A common deficiency is the submission of generic lift plans that make no reference to the actual site conditions. A plan that does not mention the overhead power line running across the crane's operating area, or the open excavation adjacent to the outrigger position, is not a compliant plan regardless of how accurately the capacity calculations have been completed.</p>

      <h3>Personnel and Competence</h3>
      <p>The review checks that the plan identifies the key personnel involved in the lifting operation and confirms their competence. This includes verifying that operators hold appropriate CPCS or equivalent certification for the equipment they will be operating, and that slinger/signallers are properly trained and qualified.</p>

      <h3>Thorough Examination Status</h3>
      <p>Under LOLER Regulation 9, all lifting equipment and lifting accessories must have current thorough examination certificates. The review checks that the plan confirms this requirement has been met, or flags where certificates need to be verified before the lift can proceed.</p>

      <h2>What Happens When a Plan Fails the Review?</h2>
      <p>When a lift plan review identifies deficiencies, the plan is returned to the submitting contractor with clear feedback on what needs to be corrected. This is not about rejecting plans for the sake of it \u2014 it is about ensuring that every lift on your project is properly planned and safe to proceed.</p>

      <p>Common reasons for lift plans being returned include:</p>

      <ul>
        <li><strong>Inaccurate or unverified load weights</strong> \u2014 the most frequent issue, where load weights are estimated rather than confirmed from reliable sources</li>
        <li><strong>Incorrect capacity calculations</strong> \u2014 wrong load chart, wrong radius, or failing to deduct rigging weight from available capacity</li>
        <li><strong>Missing ground assessment</strong> \u2014 no consideration of ground bearing capacity beneath outriggers or stabilisers</li>
        <li><strong>No site-specific hazard identification</strong> \u2014 generic plans that do not address the actual conditions at the specific location</li>
        <li><strong>Inadequate rigging details</strong> \u2014 vague or incorrect information about sling types, sizes, and configurations</li>
        <li><strong>Missing or expired thorough examination certificates</strong> \u2014 equipment being proposed for use without current certification</li>
        <li><strong>Incomplete information</strong> \u2014 plans that leave critical fields blank or contain insufficient detail for the operation to be carried out safely</li>
      </ul>

      <p>In most cases, the issues can be resolved by the submitting contractor amending and resubmitting the plan. The goal is to get the plan right, not to create obstacles. An experienced lift plan checker will provide constructive feedback that helps subcontractors understand what is required and improve the quality of their future submissions.</p>

      <h2>How Does the Service Work in Practice?</h2>
      <p>For most tier 1 contractors, a lift plan checking service operates as an ongoing arrangement throughout the duration of a project or across multiple projects. The typical workflow is straightforward:</p>

      <p>Subcontractors submit their lift plans to the site team as normal. The site team forwards them to the Appointed Person providing the checking service \u2014 usually by email. The Appointed Person reviews the plan, typically within 24 hours for standard submissions, and returns it either approved or with comments identifying what needs to be corrected.</p>

      <p>For projects with high volumes of lifting operations \u2014 such as large-scale structural steel erection or precast concrete programmes \u2014 the checking service may review dozens of plans per week. The turnaround time and communication process should be agreed at the start of the arrangement to avoid delays to the construction programme.</p>

      <p>The service can operate entirely remotely. For the majority of lifting operations \u2014 excavators, telehandlers, lorry loaders, and standard crane lifts \u2014 the Appointed Person does not need to visit site to review the plan. The plan document, together with any supporting information such as site drawings and ground investigation reports, provides the information needed for a thorough review.</p>

      <h2>The Benefits for Tier 1 Contractors</h2>
      <p>A lift plan checking service provides several tangible benefits for main contractors and principal contractors.</p>

      <h3>LOLER Compliance</h3>
      <p>The most obvious benefit is compliance with your legal duties under LOLER. By having every submitted lift plan reviewed by a competent Appointed Person, you can demonstrate that you have taken reasonable steps to ensure lifting operations on your site are properly planned. This is critical in the event of an incident or HSE inspection.</p>

      <h3>Reduced Risk</h3>
      <p>Deficient lift plans that are identified and corrected before the lift takes place eliminate risks that would otherwise have been present during the operation. Over the course of a major project, a checking service may identify dozens of issues \u2014 any one of which could have led to an incident if the lift had proceeded as originally planned.</p>

      <h3>Improved Subcontractor Standards</h3>
      <p>Regular feedback from the checking service helps subcontractors improve the quality of their lift plans over time. Contractors who initially submit deficient plans often improve significantly once they understand what is expected. This creates a positive cycle where the standard of submissions improves as the project progresses.</p>

      <h3>Consistent Standards Across the Project</h3>
      <p>When multiple subcontractors are submitting lift plans to the same project, having a single Appointed Person reviewing all submissions ensures consistent standards are applied. Without this, the standard of lift planning can vary dramatically between different subcontractors, with some producing excellent plans and others producing plans that are barely adequate.</p>

      <h3>Specialist Knowledge Without the Overhead</h3>
      <p>Employing a full-time Appointed Person is not practical for most individual projects. A lift plan checking service gives you access to specialist lifting expertise on a flexible basis \u2014 you pay for the service when you need it, without the overhead of a permanent appointment.</p>

      <h2>What Makes a Good Lift Plan Checking Service?</h2>
      <p>Not all lift plan checking services are equal. The quality of the review depends entirely on the competence and experience of the person carrying it out. When selecting a provider, look for:</p>

      <ul>
        <li><strong>CPCS Appointed Person (A61) qualification</strong> \u2014 the recognised industry standard for lift planning competence</li>
        <li><strong>Broad operational experience</strong> \u2014 ideally covering the full range of lifting equipment, not just mobile cranes. Many projects involve a mix of cranes, excavators, telehandlers, and lorry loaders, and the checking service must be competent across all types</li>
        <li><strong>Construction industry background</strong> \u2014 understanding of how construction sites actually work, the pressures on subcontractors, and the practical realities of lifting operations in a site environment</li>
        <li><strong>Clear and constructive feedback</strong> \u2014 the service should help subcontractors improve, not simply reject plans without explanation</li>
        <li><strong>Reasonable turnaround times</strong> \u2014 lift plan reviews should not become a bottleneck in the construction programme</li>
      </ul>

      <h2>Common Questions About Lift Plan Checking</h2>

      <h3>Does every lift on site need a reviewed plan?</h3>
      <p>Under LOLER, every lifting operation must be planned. Whether every plan needs independent review depends on the risk profile of the project and your organisation's procedures. Many tier 1 contractors require all lift plans to be reviewed by an Appointed Person before any lifting work proceeds. Others may allow certain low-risk, routine operations to be managed under standing procedures with periodic audit. The safest approach is to review everything.</p>

      <h3>Can the lift plan checker also write lift plans?</h3>
      <p>Yes. An Appointed Person providing a checking service can also write lift plans where required \u2014 for example, for complex operations where the subcontractor does not have the competence to plan the lift themselves. However, it is good practice to maintain a separation between writing and checking where possible, so that plans receive genuinely independent review.</p>

      <h3>What qualifications should the checker have?</h3>
      <p>The checker must be a competent person under LOLER. For crane and construction lifting operations, this means a CPCS Appointed Person (A61) as a minimum. Additional qualifications such as NEBOSH or IOSH membership demonstrate broader health and safety competence. Practical experience across different equipment types and site conditions is equally important.</p>

      <h3>How quickly can plans be reviewed?</h3>
      <p>Standard turnaround is typically 24 hours for routine submissions. For urgent requirements \u2014 such as unplanned lifts or programme-critical operations \u2014 same-day review can usually be arranged. The key is establishing clear communication channels and expectations at the outset.</p>

      <h2>How RMT Solutions Can Help</h2>
      <p>RMT Solutions provides lift plan checking services to tier 1 contractors across the UK. With 35 years of construction industry experience and CPCS Appointed Person (A61) qualification, we review lift plans for all equipment types \u2014 mobile cranes, tower cranes, <a href="/blog/excavator-lift-plans-complete-guide">excavators</a>, <a href="/blog/telehandler-lift-plans-complete-guide">telehandlers</a>, and <a href="/blog/lorry-loader-lift-plans-guide">lorry loaders</a>.</p>

      <p>Our service is trusted by leading UK contractors including Wates, Caddick, and GMI Construction. We provide fast turnaround, clear and constructive feedback, and consistent standards across your projects.</p>

      <p>Whether you need a checking service for a single project or an ongoing arrangement across your portfolio, we can tailor the service to your requirements.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need a Lift Plan Checking Service?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides professional lift plan checking for tier 1 contractors across the UK. Trusted by Wates, Caddick, and GMI Construction. Fast turnaround from a CPCS Appointed Person with 35 years of experience.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote</a>
      </div>

      <p><strong>About the Author:</strong> Ricky Marsh is a CPCS Appointed Person (A61) with 35 years of construction industry experience. He holds NEBOSH National Diploma, CertIOSH, MIIRSM and TIFSM qualifications, and provides <a href="/services/lift-plan-checking">lift plan checking services</a> to tier 1 contractors across the UK through <a href="/">RMT Solutions</a>.</p>
    `,
  },  'what-is-loler-complete-guide': {
    title: 'LOLER 1998 Explained: A Plain-English Guide for UK Sites',
    description: 'LOLER 1998 in plain English: who it applies to, what counts as lifting equipment, thorough examination intervals, and the common compliance gaps on UK sites.',
    category: 'Compliance',
    readTime: '8 min read',
    date: 'January 28, 2026',
    dateModified: 'January 28, 2026',
    image: '/images/services/loler-thorough-examination-lifting-equipment-uk.webp',
    imageAlt: 'Competent person carrying out a LOLER thorough examination of lifting equipment on a UK site, inspecting a hook and chain sling for defects',
    content: `
      <p class="lead">The Lifting Operations and Lifting Equipment Regulations 1998 (LOLER) is one of the most important pieces of health and safety legislation affecting construction sites across the UK. If you're a contractor, site manager, or anyone involved in lifting operations, understanding LOLER isn't just about compliance—it's about keeping people safe.</p>

      <h2>What is LOLER?</h2>
      <p>LOLER is a set of regulations that came into force on 5 December 1998. They place duties on people and companies who own, operate, or have control over lifting equipment. The regulations cover all lifting equipment used at work, from the smallest hoist to the largest tower crane.</p>

      <p>The Health and Safety Executive (HSE) enforces LOLER, and the regulations work alongside other health and safety legislation including the Health and Safety at Work Act 1974 and the Provision and Use of Work Equipment Regulations 1998 (PUWER).</p>

      <h2>Who Does LOLER Apply To?</h2>
      <p>LOLER applies to:</p>
      <ul>
        <li>Employers who own or control lifting equipment</li>
        <li>Self-employed persons using lifting equipment</li>
        <li>Those who manage or control the use of lifting equipment</li>
      </ul>

      <p>In construction, this typically means main contractors, subcontractors, plant hire companies, and anyone responsible for coordinating lifting operations on site.</p>

      <h2>What Equipment is Covered?</h2>
      <p>LOLER covers all lifting equipment used at work, including:</p>
      <ul>
        <li>Tower cranes and mobile cranes</li>
        <li>Excavators used for lifting (not just digging)</li>
        <li>Hoists and lifts</li>
        <li>Telehandlers and forklift trucks</li>
        <li>Lifting accessories (slings, shackles, chains)</li>
        <li>Vehicle inspection hoists</li>
        <li>Any equipment designed for lifting or lowering loads</li>
      </ul>

      <h2>Key LOLER Requirements</h2>

      <h3>1. Strength and Stability (Regulation 4)</h3>
      <p>Lifting equipment must be of adequate strength and stability for each load. This is where proper lift planning becomes critical—you need to ensure the equipment is suitable for the task and that stability is maintained throughout the operation.</p>

      <h3>2. Lifting Equipment for Lifting Persons (Regulation 5)</h3>
      <p>If equipment is used to lift people, it must be marked accordingly and have additional safety features to prevent falling. This is particularly relevant for MEWPs (Mobile Elevating Work Platforms) and personnel hoists.</p>

      <h3>3. Positioning and Installation (Regulation 6)</h3>
      <p>Lifting equipment must be positioned and installed to minimise risk. For tower cranes, this includes proper foundation design and checks. For mobile cranes, it means proper ground conditions and setup on suitable bearing surfaces.</p>

      <h3>4. Marking of Lifting Equipment (Regulation 7)</h3>
      <p>Equipment must be clearly marked with its safe working load (SWL). Where it's not practicable to mark the equipment itself, the information must be kept with it.</p>

      <h3>5. Organisation of Lifting Operations (Regulation 8)</h3>
      <p>This is the "lift planning" requirement. Every lifting operation must be:</p>
      <ul>
        <li>Properly planned by a competent person</li>
        <li>Appropriately supervised</li>
        <li>Carried out in a safe manner</li>
      </ul>

      <p>This means you need a written lift plan for complex lifts, prepared by someone with the necessary knowledge and experience—typically a CPCS Appointed Person (A61).</p>

      <h3>6. Thorough Examination and Inspection (Regulation 9)</h3>
      <p>LOLER requires:</p>
      <ul>
        <li>Initial thorough examination before first use</li>
        <li>Thorough examination after installation and before use</li>
        <li>Periodic thorough examination (at least every 6 or 12 months)</li>
        <li>Thorough examination after exceptional circumstances</li>
      </ul>

      <h2>What is a "Competent Person"?</h2>
      <p>LOLER frequently refers to "competent persons." This means someone with sufficient training, experience, knowledge, and other qualities to enable them to properly assist in undertaking the measures needed to comply with the requirements.</p>

      <p>For lift planning, this typically means a <a href="/blog/cpcs-appointed-person-guide">CPCS Appointed Person who holds the A61 qualification</a>. They have been trained to plan lifting operations, select appropriate equipment, calculate loads and capacities, and ensure operations comply with LOLER and BS 7121.</p>

      <h2>When Do You Need a Lift Plan?</h2>
      <p>LOLER Regulation 8 requires ALL lifting operations to be properly planned. However, the complexity of the plan should match the complexity of the lift:</p>

      <ul>
        <li><strong>Simple, routine lifts:</strong> May only require a brief assessment and toolbox talk</li>
        <li><strong>Complex or non-routine lifts:</strong> Require a detailed written lift plan</li>
      </ul>

      <p>Factors that make a lift "complex" include:</p>
      <ul>
        <li>Heavy or awkwardly shaped loads</li>
        <li>Lifts near power lines or structures</li>
        <li>Tandem lifts (using two cranes)</li>
        <li>Lifts over live areas (roads, occupied buildings)</li>
        <li>Unfamiliar equipment or procedures</li>
        <li>Restricted working space</li>
      </ul>

      <h2>LOLER Enforcement and Penalties</h2>
      <p>The HSE takes LOLER very seriously. Breaches can result in:</p>
      <ul>
        <li>Improvement notices</li>
        <li>Prohibition notices (stopping work immediately)</li>
        <li>Prosecution</li>
        <li>Unlimited fines</li>
        <li>Imprisonment for serious breaches</li>
      </ul>

      <p>More importantly, failure to comply with LOLER puts lives at risk. Crane incidents often result in serious injuries or fatalities, and investigations almost always reveal inadequate planning or supervision.</p>

      <h2>How RMT Solutions Can Help</h2>
      <p>At RMT Solutions, we specialise in LOLER compliant lift planning. As a CPCS Appointed Person with 35 years of construction experience, I provide:</p>

      <ul>
        <li><a href="/services/lift-plans">Detailed written lift plans</a> complying with LOLER Regulation 8</li>
        <li><a href="/services/tower-crane">Appointed Person contracts</a> for ongoing compliance</li>
        <li><a href="/services/lift-plan-checking">Review and checking of subcontractor lift plans</a></li>
        <li>Site visits and supervision where required</li>
        <li>Expert advice on equipment selection and planning</li>
      </ul>

      <h2>Common LOLER Questions</h2>

      <h3>Do I need a lift plan for an excavator?</h3>
      <p>Yes, if the excavator is being used for lifting rather than just digging. Once you attach lifting accessories (chains, slings), it becomes lifting equipment under LOLER and requires proper planning. See our <a href="/blog/excavator-lift-plans-complete-guide">complete guide to excavator lift plans</a> for more detail.</p>

      <h3>Who is responsible for LOLER compliance on site?</h3>
      <p>Ultimately, the duty holder—usually the main contractor or whoever controls the site. However, everyone involved has responsibilities, including equipment hirers, subcontractors, and operatives.</p>

      <h3>How long should I keep LOLER documentation?</h3>
      <p>Thorough examination reports must be kept until the next examination is completed. Lift plans should be kept for the duration of the project plus a reasonable period afterwards (typically 3-6 months minimum).</p>

      <h3>Can I do my own lift planning?</h3>
      <p>Only if you are competent to do so. For complex lifts, you need someone with appropriate training and qualifications—typically a <a href="/blog/cpcs-appointed-person-guide">CPCS Appointed Person A61</a>.</p>

      <h2>Conclusion</h2>
      <p>LOLER compliance isn't optional—it's a legal requirement that protects lives. Proper lift planning by a competent person is the cornerstone of safe lifting operations.</p>

      <p>If you're unsure about your LOLER obligations or need professional lift planning services, get in touch. We can help ensure your lifting operations are safe, legal, and properly documented.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need LOLER Compliant Lift Plans?</h3>
        <p class="text-gray-300 mb-6">Get expert lift planning from a qualified CPCS Appointed Person. All plans comply with LOLER Regulation 8 and BS 7121.</p>
        <a href="/contact" class="btn-primary inline-block">Request a Quote</a>
      </div>
    `,
  },
  'when-do-you-need-lift-plan': {
    title: 'When Do You Need a Lift Plan? LOLER Requirements Explained',
    // CTR fix (Jun 2026): answer-first description with the decision-flowchart
    // hook — this URL had 8,425 impressions at position 8 but 1.25% CTR.
    description: 'Every lift must be planned under LOLER 1998 — but only complex lifts need a full written plan. Decision flowchart, real examples, and when a generic plan will do.',
    keywords: 'when do you need a lift plan, do you need a lift plan for every lift, when is a lift plan required, lift plan requirements, hse lifting plan, when planning a lift what is the first thing you should do, do you need a lift plan for a telehandler, lift plans are mandatory for, crane lift plan requirements, loler regulation 8',
    category: 'Planning',
    readTime: '8 min read',
    date: 'January 28, 2026',
    dateModified: 'July 8, 2026',
    image: '/images/services/excavator-lifting-concrete-ring-construction.webp',
    imageAlt: 'Excavator lifting a concrete ring into an excavation — an everyday operation that still requires a LOLER lift plan',
    content: `
      <p class="lead">One of the most common questions I get asked is: "Do I really need a lift plan for this?" The short answer is: yes, LOLER requires ALL lifting operations to be properly planned. But the level of planning detail varies depending on the complexity of the operation. If you are not sure what the document itself contains, start with our guide to <a href="/blog/what-is-a-lift-plan">what a lift plan is</a>.</p>

      <h2>The Legal Requirement</h2>
      <p>LOLER Regulation 8 is crystal clear. It states that every lifting operation involving lifting equipment must be:</p>
      <ul>
        <li>Properly planned by a competent person</li>
        <li>Appropriately supervised</li>
        <li>Carried out in a safe manner</li>
      </ul>

      <p>Notice it says "every lifting operation"—not just the big ones, not just the complex ones. Every single one.</p>

      <figure>
        <img src="/images/blog/deciding-if-lift-plan-needed-site-discussion.webp" alt="Two UK construction professionals in hi-vis and hard hats reviewing a lift plan together on site, one pointing toward a mobile crane, assessing what level of planning the lifting operation requires" width="1600" height="1067" loading="lazy" />
        <figcaption>LOLER applies to every lifting operation \u2014 the question is not whether to plan, but how much detail the operation demands.</figcaption>
      </figure>

      <h2>What "Properly Planned" Means</h2>
      <p>The HSE recognises that not every lift needs a 10-page written document. The planning should be proportionate to the risk. Let's break this down:</p>

      <figure>
        <img src="/images/blog/when-do-you-need-a-lift-plan-decision-flow.svg" alt="Decision-flow diagram: a lifting operation using lifting equipment triggers LOLER Regulation 8, which requires it to be planned by a competent person; if the lift is simple, routine and low-risk it needs proportionate planning such as a safe system of work or generic schedule, otherwise it needs a detailed written lift plan prepared by a CPCS Appointed Person" width="1600" height="1100" loading="lazy" />
        <figcaption>How the level of planning scales with risk \u2014 every lift must be planned, but only complex or non-routine lifts need a full written lift plan.</figcaption>
      </figure>

      <h3>Simple, Routine Lifts</h3>
      <p>For straightforward, repetitive lifting operations that are low risk, planning might consist of:</p>
      <ul>
        <li>A toolbox talk explaining the operation</li>
        <li>Verbal instructions from a supervisor</li>
        <li>Reference to established safe systems of work</li>
        <li>Basic risk assessment</li>
      </ul>

      <p><strong>Examples:</strong> Regular pallet movements with a forklift, standard material handling with a telehandler, routine sling operations by trained staff. For documenting routine lifts like these, our <a href="/resources/lift-plan-templates">free lift plan template</a> gives you a structured starting point.</p>

      <h3>Complex or Non-Routine Lifts</h3>
      <p>These require a detailed written lift plan prepared by a competent person (typically a CPCS Appointed Person). The plan should include:</p>
      <ul>
        <li>Load details (weight, dimensions, center of gravity)</li>
        <li>Equipment selection and configuration</li>
        <li>Site conditions and ground bearing capacity</li>
        <li>Lift sequence and methodology</li>
        <li>Radius and capacity calculations</li>
        <li>Exclusion zones and barriers</li>
        <li>Emergency procedures</li>
        <li>Supervision and communication methods</li>
      </ul>

      <h2>What Makes a Lift "Complex"?</h2>
      <p>Here are the key factors that trigger the need for a detailed written lift plan:</p>

      <h3>1. Load Characteristics</h3>
      <ul>
        <li>Loads over 1 tonne</li>
        <li>Awkwardly shaped or unbalanced loads</li>
        <li>Loads where the center of gravity is unclear</li>
        <li>Fragile or high-value items</li>
        <li>Loads that will swing or move during lifting</li>
      </ul>

      <h3>2. Site Conditions</h3>
      <ul>
        <li>Restricted working space</li>
        <li>Poor ground conditions</li>
        <li>Proximity to overhead power lines</li>
        <li>Working near boundaries or public areas</li>
        <li>Sloping or uneven ground</li>
        <li>Limited access routes</li>
      </ul>

      <h3>3. Equipment Factors</h3>
      <ul>
        <li>Using equipment near its maximum capacity</li>
        <li>Tandem lifts (two cranes working together)</li>
        <li>Long boom configurations</li>
        <li>Equipment working at steep angles</li>
        <li>Unfamiliar equipment or first-time use</li>
      </ul>

      <h3>4. Environmental Hazards</h3>
      <ul>
        <li>Lifts over occupied buildings or live roadways</li>
        <li>Working in adverse weather conditions</li>
        <li>Night working</li>
        <li>Work near railways or waterways</li>
        <li>Proximity to structures or services</li>
      </ul>

      <h3>5. Personnel Safety</h3>
      <ul>
        <li>Lifting people (requires specific equipment and planning)</li>
        <li>Multiple personnel involved in coordination</li>
        <li>Work requiring signaller/banksman</li>
        <li>Operations with limited visibility</li>
      </ul>

      <h2>Specific Equipment Requirements</h2>

      <h3>Tower Cranes</h3>
      <p><strong>Always require a written lift plan.</strong> Tower cranes are complex pieces of equipment operating over extended areas. Even routine lifts should be covered by:</p>
      <ul>
        <li>Appointed Person contract for the duration of the tower crane on site</li>
        <li>Regular 8-weekly audits and inspections</li>
        <li>Review of all lift plans submitted by subcontractors</li>
        <li>Method statements for installation and dismantling</li>
      </ul>

      <h3>Mobile Cranes</h3>
      <p><strong>Usually require a written lift plan.</strong> Mobile crane work is rarely "routine" because:</p>
      <ul>
        <li>Each site is different</li>
        <li>Ground conditions vary</li>
        <li>Load configurations change</li>
        <li>Access and positioning differ</li>
      </ul>

      <p>I always recommend a site visit for mobile crane work to assess ground conditions, access routes, and overhead hazards. For routine, repeat crane operations under crane hire, our <a href="/resources/mobile-crane-lift-plan-templates">free mobile crane lift plan template</a> provides the documented framework.</p>

      <h3>Excavators for Lifting</h3>
      <p><strong>Require a lift plan when used for lifting.</strong> Many people don't realize that the moment you attach lifting gear to an excavator, it becomes lifting equipment under LOLER. You need:</p>
      <ul>
        <li>Written lift plan (can be templated for repetitive work)</li>
        <li>Machine rated and marked for lifting</li>
        <li>Proper lifting points and accessories</li>
        <li>Operator trained in lifting operations</li>
      </ul>

      <h3>Telehandlers and Forklifts</h3>
      <p><strong>Simple lifts may not need written plans,</strong> but complex operations do. Consider a written plan when:</p>
      <ul>
        <li>Lifting loads over 1 tonne</li>
        <li>Working at height or on slopes</li>
        <li>Lifting awkward or unbalanced loads</li>
        <li>Operating in confined spaces</li>
      </ul>

      <h2>Who Can Write a Lift Plan?</h2>
      <p>LOLER requires lift plans to be prepared by a "competent person." This means someone with:</p>
      <ul>
        <li>Sufficient training in lifting operations</li>
        <li>Adequate knowledge of the equipment and regulations</li>
        <li>Practical experience in lift planning</li>
        <li>Understanding of load calculations and capacities</li>
      </ul>

      <p>For complex lifts, this typically means a <strong><a href="/blog/cpcs-appointed-person-guide">CPCS Appointed Person (A61 qualification)</a></strong>. This is the industry-recognized standard for competence in lift planning.</p>

      <h2>Common Scenarios Explained</h2>

      <h3>Scenario 1: Steel Frame Erection</h3>
      <p><strong>Need a lift plan?</strong> YES</p>
      <p>Steel erection involves heavy loads, often at height, with multiple lifts throughout the day. You need:</p>
      <ul>
        <li>Detailed lift plan covering the full erection sequence</li>
        <li>Crane selection and positioning plan</li>
        <li>Method statement for steelwork assembly</li>
        <li>Coordination between crane operator and steel erectors</li>
      </ul>

      <h3>Scenario 2: Precast Concrete Panels</h3>
      <p><strong>Need a lift plan?</strong> YES</p>
      <p>Precast elements are heavy and often require precise positioning. Planning should cover:</p>
      <ul>
        <li>Individual panel weights and lifting points</li>
        <li>Crane positioning for each lift</li>
        <li>Temporary propping and stability</li>
        <li>Ground bearing capacity</li>
      </ul>

      <h3>Scenario 3: Plant Delivery and Positioning</h3>
      <p><strong>Need a lift plan?</strong> USUALLY</p>
      <p>Depends on the equipment being delivered. A mini digger might be straightforward, but a 30-tonne excavator or generator definitely needs proper planning. For HIAB deliveries, our <a href="/resources/lorry-loader-lift-plan-templates">free lorry loader lift plan template</a> covers the standard delivery operation, including a worked example.</p>

      <h3>Scenario 4: Materials Handling on Site</h3>
      <p><strong>Need a lift plan?</strong> DEPENDS</p>
      <p>Routine materials handling with a telehandler or forklift by trained operators may only need a risk assessment and safe system of work — or a <a href="/blog/generic-lift-plans">generic lift plan</a>, which BS 7121 accepts for genuinely repetitive basic lifts. But anything unusual requires a proper site-specific plan.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-6 my-10">
        <p class="text-gray-300 m-0"><strong class="text-amber-400">Need an answer for your specific lift?</strong> Send the details over and a CPCS A61 Appointed Person will tell you what level of planning it needs — free, usually within four working hours. <a href="/contact" class="text-amber-400 underline">Get in touch</a> or call <a href="tel:+447803808093" class="text-amber-400 underline">07803 808093</a>.</p>
      </div>

      <h2>When Planning a Lift, What Is the First Thing You Should Do?</h2>
      <p>This is a favourite exam question on CPCS courses — and a genuinely useful one on site. The first thing you should do when planning a lift is <strong>assess the load</strong>: establish its weight, dimensions, centre of gravity and lifting points. Everything else in the plan flows from the load. You cannot select the machine, check capacity at radius, choose accessories or set exclusion zones until you know exactly what you are lifting.</p>
      <p>In practice the opening steps of any lift plan run in this order:</p>
      <ol>
        <li><strong>Assess the load</strong> — confirmed weight (not a guess), dimensions, centre of gravity, and certified lifting points.</li>
        <li><strong>Assess the site</strong> — ground conditions, access, overhead hazards, underground services, and adjacent activities.</li>
        <li><strong>Select the equipment</strong> — a machine with adequate rated capacity at the working radius, plus suitable accessories.</li>
        <li><strong>Appoint the people</strong> — a competent <a href="/services/appointed-person">Appointed Person</a> to plan, and a supervisor, operator and slinger/signaller to execute.</li>
      </ol>
      <p>If a plan lands on your desk that clearly hasn't started with the load — a "10-tonne-ish" weight, no centre of gravity, no lifting-point detail — treat that as a red flag for everything that follows.</p>

      <h2>What Does the HSE Expect a Lifting Plan to Cover?</h2>
      <p>The HSE does not publish an official lifting plan template — its expectation, set out in LOLER 1998 and the supporting Approved Code of Practice (L113), is that the <em>planning</em> is adequate for the risk. We cover the full inspection angle in <a href="/blog/hse-lifting-plan-requirements">HSE lifting plan requirements: what inspectors look for</a>. When HSE inspectors examine a lifting plan after an incident or during a site visit, they look for evidence that a competent person has genuinely considered:</p>
      <ul>
        <li>The load — weight, integrity, centre of gravity and attachment method</li>
        <li>The equipment — suitability, rated capacity at the working configuration, and current thorough examination</li>
        <li>The site — ground bearing capacity, proximity hazards, overhead lines and exclusion zones</li>
        <li>The people — named, competent personnel with defined roles</li>
        <li>The method — the sequence of the operation, communication arrangements, and what happens if something changes on the day</li>
      </ul>
      <p>A generic document with a company logo on it does not demonstrate any of that. This is exactly why plans get rejected by principal contractors — see our guide to <a href="/blog/lift-plan-checking-what-gets-checked-and-why-plans-get-rejected">why lift plans get rejected</a> for the common failures.</p>

      <h2>Consequences of Poor Planning</h2>
      <p>Inadequate lift planning can result in:</p>
      <ul>
        <li>Serious injuries or fatalities</li>
        <li>Equipment damage</li>
        <li>Project delays</li>
        <li>HSE enforcement action</li>
        <li>Prosecution and unlimited fines</li>
        <li>Reputational damage</li>
        <li>Insurance issues</li>
      </ul>

      <p>More importantly, people get hurt. Most crane incidents involve inadequate planning or supervision.</p>

      <h2>Best Practice Recommendations</h2>
      <p>Based on 35 years of experience, here's my advice:</p>

      <ol>
        <li><strong>When in doubt, write it out.</strong> If you're asking "do I need a plan?", you probably do.</li>
        <li><strong>Engage an Appointed Person early.</strong> Don't wait until the crane arrives on site.</li>
        <li><strong>Do a site visit for mobile crane work.</strong> Ground conditions and access can't be properly assessed from drawings.</li>
        <li><strong>Review all subcontractor lift plans.</strong> Just because they have a plan doesn't mean it's adequate.</li>
        <li><strong>Keep proper records.</strong> Document everything—it protects you legally and shows due diligence.</li>
      </ol>

      <h2>How RMT Solutions Can Help</h2>
      <p>We provide lift planning services for all types of lifting operations:</p>

      <ul>
        <li><strong><a href="/services/lift-plans">Lift Plan Writing:</a></strong> LOLER-compliant lift plans for excavators, telehandlers, lorry loaders and mobile cranes</li>
        <li><strong><a href="/services/tower-crane">Tower Crane Contracts:</a></strong> Ongoing Appointed Person support throughout your project</li>
        <li><strong><a href="/services/mobile-crane-lift-plans">Mobile Crane Lift Plans:</a></strong> Including site visits and ground assessments</li>
        <li><strong><a href="/services/excavator-lift-plans">Excavator Lift Plans:</a></strong> Fast turnaround for pipeline and utilities work</li>
        <li><strong><a href="/services/steel-erection">Steel Erection Planning:</a></strong> Comprehensive planning for structural steel projects</li>
        <li><strong><a href="/services/lift-plan-checking">Lift Plan Review:</a></strong> Checking subcontractor submissions for compliance</li>
      </ul>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Not Sure if You Need a Lift Plan?</h3>
        <p class="text-gray-300 mb-6">Get in touch for a free initial consultation. We'll review your requirements and advise on the best approach for LOLER compliance.</p>
        <a href="/contact" class="btn-primary inline-block">Contact Us Today</a>
      </div>
    `,
  },
  'mobile-crane-vs-tower-crane': {
    title: 'Mobile Crane vs Tower Crane: When to Use Each (UK Guide)',
    description: 'Mobile crane vs tower crane on a UK site? Compare reach, capacity, set-up time, cost and ground-bearing pressure to pick the right machine.',
    category: 'Equipment',
    readTime: '7 min read',
    date: 'January 28, 2026',
    dateModified: 'January 28, 2026',
    image: '/images/residential-tower-crane.webp',
    imageAlt: 'Tower crane operating above a UK residential development — comparison context for mobile vs tower crane selection',
    content: `
      <p class="lead">Choosing between a mobile crane and a tower crane is one of the most important decisions in construction planning. Get it wrong and you'll face delays, increased costs, and potential safety issues. Get it right and your project runs smoothly. Here's everything you need to know.</p>

      <h2>The Fundamental Difference</h2>

      <h3>Mobile Cranes</h3>
      <p>Mobile cranes are exactly what they sound like—cranes mounted on wheeled chassis that can travel between sites or positions. They include:</p>
      <ul>
        <li>All-terrain cranes (ATC)</li>
        <li>Rough-terrain cranes (RTC)</li>
        <li>Truck-mounted cranes</li>
        <li>Crawler cranes (track-mounted)</li>
      </ul>

      <p>They arrive on site, set up, complete the lifts, and leave—usually all in the same day or over a few days.</p>

      <h3>Tower Cranes</h3>
      <p>Tower cranes are fixed in position for the duration of a project. They consist of:</p>
      <ul>
        <li>A concrete foundation or base</li>
        <li>A vertical mast (tower)</li>
        <li>A horizontal jib (boom)</li>
        <li>Counterweights for stability</li>
      </ul>

      <p>They're installed for weeks or months, positioned to serve the entire site, and require specialist installation and dismantling.</p>

      <h2>When to Use a Mobile Crane</h2>

      <h3>Best for:</h3>

      <h4>1. Short-Duration Projects</h4>
      <p>If your lifting requirement is a day or two—such as a single steel frame erection, precast installation, or equipment placement—mobile cranes are perfect. You pay for the hours you use, not ongoing rental.</p>

      <h4>2. Single or Few Heavy Lifts</h4>
      <p>Mobile cranes excel at heavy-capacity lifts. Modern all-terrain cranes can lift hundreds of tonnes. If you need to place one heavy piece of equipment or a few large structural elements, mobile is usually the answer.</p>

      <h4>3. Variable Working Positions</h4>
      <p>Mobile cranes can relocate around the site. If you need to lift from different positions—say, placing equipment around the perimeter of a building—the crane can move between setups.</p>

      <h4>4. Sites with Good Access</h4>
      <p>If you have clear access routes, decent ground conditions, and space for crane setup, mobile cranes work brilliantly. They can reach over obstacles and work from positions outside the main construction area.</p>

      <h4>5. Budget-Conscious Projects</h4>
      <p>For short-term needs, mobile crane hire is more economical. You avoid the installation costs, foundation works, and long-term rental fees of tower cranes.</p>

      <h3>Not ideal when:</h3>
      <ul>
        <li>You need continuous lifting operations over weeks/months</li>
        <li>Working in very tight spaces with no room for crane setup</li>
        <li>Ground conditions are poor (without expensive ground preparation)</li>
        <li>There's no access route for the crane to reach site</li>
        <li>Overhead power lines restrict crane movements</li>
      </ul>

      <h2>When to Use a Tower Crane</h2>

      <h3>Best for:</h3>

      <h4>1. Long-Duration Projects</h4>
      <p>Multi-storey buildings, large residential developments, and major commercial projects spanning months benefit enormously from tower cranes. Despite the high installation cost, the daily rental rate is relatively low, making them economical over time.</p>

      <h4>2. High-Frequency Lifting</h4>
      <p>If you're lifting materials daily—concrete buckets, rebar cages, formwork, bricks, blocks—a tower crane becomes essential. It's positioned to serve the entire site and can operate continuously.</p>

      <h4>3. High-Rise Construction</h4>
      <p>Tower cranes are designed for vertical building work. They can "climb" as the building rises, maintaining lifting capacity at height. Mobile cranes become less efficient and more costly as buildings get taller.</p>

      <h4>4. Restricted Site Access</h4>
      <p>In city center sites with no room for mobile crane setup, tower cranes win. They require a relatively small footprint and can be installed within the building envelope or adjacent to it.</p>

      <h4>5. Multiple Subcontractors</h4>
      <p>Tower cranes serve the entire site. Different trades can use them throughout the project—groundwork teams for piling rigs, frame contractors for steel or concrete, MEP contractors for plant—making them versatile site assets.</p>

      <h3>Not ideal when:</h3>
      <ul>
        <li>Project duration is less than 4-6 weeks</li>
        <li>Only a few heavy lifts are required</li>
        <li>Site is too small to justify the installation cost</li>
        <li>You need to lift very heavy single items beyond tower crane capacity</li>
      </ul>

      <h2>Planning and Compliance</h2>

      <h3>Mobile Crane Requirements</h3>
      <ul>
        <li>Detailed lift plan for each operation</li>
        <li>Site visit to assess ground conditions</li>
        <li>Ground bearing capacity calculations</li>
        <li>Traffic management plan if working on/near roads</li>
        <li>Method statement for the lift</li>
        <li>Coordination with other site activities</li>
      </ul>

      <h3>Tower Crane Requirements</h3>
      <ul>
        <li>Foundation design and approval</li>
        <li>Installation and dismantling method statements</li>
        <li>Appointed Person contract for project duration</li>
        <li>8-weekly thorough examinations (LOLER)</li>
        <li>Review of all subcontractor lift plans</li>
        <li>Lift coordination procedures</li>
        <li>Regular audits and inspections</li>
      </ul>

      <h2>Making Your Decision</h2>
      <p>Use this decision tree:</p>

      <ol>
        <li><strong>Project duration less than 6 weeks?</strong> Likely mobile crane</li>
        <li><strong>Project duration more than 12 weeks?</strong> Likely tower crane</li>
        <li><strong>Between 6-12 weeks?</strong> Depends on lift frequency and site access</li>
        <li><strong>Very heavy single lifts?</strong> Likely mobile crane</li>
        <li><strong>Continuous daily lifting?</strong> Likely tower crane</li>
        <li><strong>Restricted site access?</strong> Likely tower crane</li>
        <li><strong>Good access and space?</strong> Mobile crane viable</li>
      </ol>

      <h2>How RMT Solutions Can Help</h2>
      <p>Choosing the right crane is critical. We provide:</p>

      <ul>
        <li><strong>Crane Selection Advice:</strong> Independent recommendations based on your project</li>
        <li><strong>Cost-Benefit Analysis:</strong> Compare options to find the most economical solution</li>
        <li><strong><a href="/services/mobile-crane-lift-plans">Mobile Crane Lift Plans:</a></strong> Detailed plans for mobile crane operations</li>
        <li><strong><a href="/services/tower-crane">Tower Crane Contracts:</a></strong> Full Appointed Person support for tower crane projects</li>
        <li><strong>Hybrid Solutions:</strong> Planning for projects using both types</li>
        <li><strong><a href="/resources/mobile-crane-lift-plan-templates">Free Mobile Crane Lift Plan Template:</a></strong> A BS 7121-aligned starting point for routine operations</li>
      </ul>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need Help Choosing?</h3>
        <p class="text-gray-300 mb-6">Get expert advice on crane selection for your project. We'll review your requirements and recommend the most suitable and cost-effective solution.</p>
        <a href="/contact" class="btn-primary inline-block">Request Advice</a>
      </div>
    `,
  },
  'excavator-lift-plans-complete-guide': {
    title: 'Excavator Lift Plans: A Complete Guide for UK Contractors',
    description: 'Complete guide to excavator lift plans under LOLER 1998. Learn when you need a lift plan for excavator lifting operations, requirements, and compliance.',
    category: 'Planning',
    readTime: '8 min read',
    date: 'January 31, 2026',
    dateModified: 'January 31, 2026',
    image: '/images/services/excavator-lifting-hook-chains-uk.webp',
    imageAlt: '360-degree excavator lifting a load on hook and chains on a UK site — a lifting operation that requires an excavator lift plan',
    content: `
      <p class="lead">Excavators are primarily designed for digging, but they're frequently used for lifting operations on UK construction sites. While this versatility makes them invaluable, it also creates legal obligations under LOLER 1998.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <p class="text-gray-300 mb-6">Need a site-specific excavator lift plan written for you and signed off by a CPCS A61 Appointed Person? Fixed fee from £200 + VAT, a quote within 4 working hours, and the plan delivered in 24–48 hours.</p>
        <a href="/services/excavator-lift-plans" class="inline-block bg-amber-500 hover:bg-amber-400 text-slate-900 px-6 py-3 rounded-xl font-semibold transition">Get an excavator lift plan — from £200 + VAT</a>
      </div>

      <h2>When Do You Need a Lift Plan for Excavator Operations?</h2>
      <p>Under LOLER 1998, any lifting operation must be properly planned by a competent person. For excavators, this means you need a formal lift plan whenever the machine is used to lift and move loads rather than just digging. For the regulatory side — whether <a href="/blog/lifting-with-excavators-loler">an excavator needs a LOLER thorough examination and what it must have fitted to lift</a> — see our guide to lifting with excavators.</p>

      <p>The key distinction is simple: if the excavator bucket is replaced with lifting equipment (chains, slings, shackles) or if you're using the bucket itself to lift rather than dig, you're conducting a lifting operation that requires planning under LOLER.</p>

      <h3>Common Excavator Lifting Operations</h3>
      <ul>
        <li><strong>Drainage and utilities work</strong> - Lifting concrete pipes, manholes, and precast chambers</li>
        <li><strong>Groundworks</strong> - Moving precast pads, kerb stones, and road gullies</li>
        <li><strong>General construction</strong> - Lifting materials to elevated areas and positioning steelwork</li>
        <li><strong>Demolition support</strong> - Controlled lifting of materials and equipment</li>
      </ul>

      <h2>Legal Requirements for Excavator Lifting</h2>
      <p>LOLER Regulation 8 requires that every lifting operation must be properly planned by a competent person, appropriately supervised, and carried out safely. For excavator lifting, this typically means engaging a CPCS Appointed Person.</p>

      <h2>What Must an Excavator Lift Plan Include?</h2>
      <p>A compliant excavator lift plan documents the safe system of work including:</p>
      <ul>
        <li>Excavator details and lifting capacity at various radii</li>
        <li>Specification of lifting accessories (chains, slings, shackles)</li>
        <li>Load description, weight, and centre of gravity</li>
        <li>Ground bearing capacity assessment</li>
        <li>Identification of overhead hazards and underground services</li>
        <li>Step-by-step lifting sequence</li>
        <li>Risk assessment and control measures</li>
      </ul>

      <h2>Understanding Excavator Lifting Capacity</h2>
      <p>Unlike mobile cranes with published lifting capacities, excavators have limited manufacturer guidance for lifting operations. Safe lifting capacity is typically 50-75% of the maximum theoretical capacity to account for dynamic effects, ground conditions, and wear.</p>

      <p>Reading capacity correctly relies on the machine's safety devices. See our reference on <a href="/resources/excavator-rci-guide">excavator RCI requirements (RCI vs RCL)</a> and our plain-English guide to <a href="/resources/excavator-safety-devices">excavator safety devices</a> for what the law requires and what to check before a lift.</p>

      <h2>Ground Conditions for Excavator Lifting</h2>
      <p>Ground bearing capacity is critical for safe operations. An excavator under load applies significantly more pressure to the ground than during normal digging. The Appointed Person must assess soil type, proximity to excavations, and requirements for ground mats.</p>

      <h2>Supervision and Communication</h2>
      <p>Most excavator lifting operations require a trained slinger signaller who attaches the load, directs the operation using standard hand signals, and supervises safe execution.</p>

      <h2>When to Engage an Appointed Person</h2>
      <p>While simple excavator lifting operations might be planned by experienced site staff, engaging a <a href="/blog/cpcs-appointed-person-guide">CPCS Appointed Person</a> provides legal compliance assurance, technical expertise, risk management, and professional documentation suitable for HSE inspection.</p>

      <p>For straightforward lifts you can plan yourself, download our free <a href="/resources/excavator-lift-plan-templates">excavator lift plan template</a> and risk assessment — built around the CPA/SFPSG CIG 0801 guidance and ready to adapt for your site.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need an Excavator Lift Plan?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides LOLER-compliant <a href="/services/excavator-lift-plans">excavator lift plans</a> from a CPCS Appointed Person with 35 years of construction industry experience.</p>
        <a href="/contact" class="btn-primary inline-block">Contact Us Today</a>
      </div>
    `,
  },
  'cpcs-appointed-person-guide': {
    title: 'CPCS A61 Appointed Person: Duties, Training & UK Lift Plans',
    description: 'CPCS A61 Appointed Person explained — duties under LOLER 1998 and BS 7121, training routes, A61 Basic vs Advanced, and when UK contractors must appoint one.',
    keywords: 'cpcs a61 appointed person, cpcs appointed person, a61 appointed person, appointed person for lifting operations, appointed person lifting operations, appointed person, cpcs a61, a61 advanced, a61 basic, lifting appointed person, appointed person duties, appointed person responsibilities, appointed person bs 7121, loler appointed person, lift planning experts, lift planning services',
    category: 'Compliance',
    readTime: '11 min read',
    date: 'January 31, 2026',
    dateModified: 'July 8, 2026',
    image: '/images/services/appointed-person-reviewing-lift-plan-uk.webp',
    imageAlt: 'CPCS A61 Appointed Person in hi-vis and hard hat reviewing a lift plan on a tablet on a UK construction site, with a mobile crane working in the background',
    content: `
      <p class="lead">The <strong>CPCS A61 Appointed Person</strong> qualification is the UK industry standard for planning and managing lifting operations. If your project involves cranes, telehandlers, excavators or any other lifting equipment, LOLER 1998 and BS 7121 require that the operation is planned by a competent person — and on UK construction sites, that competence is most often demonstrated by holding the CPCS A61 card. This guide explains what a CPCS Appointed Person actually does, the difference between A61 Basic and A61 Advanced, when you legally need to appoint one, and how to choose the right person for your project.</p>

      <h2>What is a CPCS A61 Appointed Person?</h2>
      <p>A <strong>CPCS Appointed Person</strong> — often shortened to "AP" or referred to simply as the <em>appointed person for lifting operations</em> — is the individual designated under LOLER 1998 Regulation 8 to plan a lifting operation, select the equipment and personnel, prepare the lift plan, and ensure the lift is properly supervised. The CPCS A61 card (issued by the Construction Plant Competence Scheme) is the industry-recognised qualification demonstrating that the holder is competent to fulfil this role.</p>
      <p>BS 7121-1:2016 — the British Standard for the safe use of cranes — names the Appointed Person as the individual with overall responsibility for the lifting operation. The role is referenced across every part of the BS 7121 family (mobile cranes, tower cranes, lorry loaders, overhead cranes) and is the cornerstone of LOLER compliance on UK sites. In short: if your operation needs a lift plan, it needs an Appointed Person to write it.</p>

      <h2>CPCS A61 Qualification: Basic vs Advanced</h2>
      <p>The CPCS A61 Appointed Person qualification is structured in two levels:</p>
      <ul>
        <li><strong>A61 Basic</strong> — Qualifies holders to plan routine lifts with mobile cranes, excavators, telehandlers and lorry loaders. Suitable for standard and most basic lifts as defined in BS 7121-1.</li>
        <li><strong>A61 Advanced</strong> — Extends competence to <a href="/blog/mobile-crane-vs-tower-crane">tower cranes</a>, tandem lifts, complex lifts and operations requiring detailed engineering calculation. Required for any operation BS 7121 classifies as a complex lift.</li>
      </ul>
      <p>To gain the card, candidates complete the CPCS theory and practical tests, plus an NVQ Level 4 in Controlling Lifting Operations — Planning Lifts. Cards are renewed every five years, with refresher testing required to maintain currency. For a full comparison of the two levels — what each course covers, the practical scenarios, and which lifts each card holder can plan — see our dedicated guide to <a href="/blog/cpcs-a61-basic-vs-advanced">A61 Basic vs Advanced</a>.</p>

      <h2>When Do You Need a CPCS Appointed Person?</h2>
      <p>The short answer is covered in depth in <a href="/blog/do-you-need-an-appointed-person">do you need an Appointed Person on site?</a> — the summary is below, and the role's full obligations are set out in <a href="/blog/appointed-person-duties-responsibilities">Appointed Person duties and responsibilities</a>.</p>
      <p>BS 7121-1 provides clear guidance. A CPCS A61 Appointed Person must plan lifts when any of the following apply:</p>
      <ul>
        <li>Risk to persons exists from the load or the equipment</li>
        <li>Specialist knowledge is required for load calculations, rigging design or ground assessment</li>
        <li>Mobile cranes, tower cranes or non-standard equipment configurations are involved</li>
        <li>Multiple lifts are planned as part of a project programme</li>
        <li>The lift falls into the "complex" category under BS 7121-1 (tandem lifts, blind lifts, lifts over occupied areas, lifts near power lines)</li>
      </ul>

      <p>On active construction sites, these criteria apply to almost every lifting operation — which is why a competent <a href="/services/appointed-person">CPCS Appointed Person</a> is now treated as a baseline requirement on tier 1 contractor sites, not an optional extra.</p>

      <h2>What Does an Appointed Person Actually Do?</h2>
      <p>The role extends beyond writing lift plans. Responsibilities include:</p>
      <ul>
        <li><strong>Pre-planning assessment</strong> - Site visits, information gathering, resource assessment</li>
        <li><strong>Creating lift plans</strong> - Equipment specification, load details, site layout, procedures, risk assessment</li>
        <li><strong>Supervision and oversight</strong> - Pre-lift briefings, monitoring compliance, authority to stop work</li>
      </ul>

      <h2>Benefits of Using a CPCS Appointed Person</h2>
      <h3>Legal Protection</h3>
      <ul>
        <li>Lifts planned by someone demonstrably competent</li>
        <li>Documentation meets regulatory requirements</li>
        <li>Evidence available for HSE inspections</li>
      </ul>

      <h3>Technical Expertise</h3>
      <ul>
        <li>Proper load calculations prevent overloading</li>
        <li>Ground conditions correctly assessed</li>
        <li>Appropriate equipment specified</li>
      </ul>

      <h3>Practical Experience</h3>
      <p>An experienced Appointed Person brings industry knowledge, problem-solving ability, and a professional network for specialist support.</p>

      <h2>How to Select an Appointed Person</h2>
      <p>Look for:</p>
      <ul>
        <li>Valid CPCS A61 card (blue or red)</li>
        <li>Relevant sector experience</li>
        <li>Clear communication and professional attributes</li>
        <li>Proactive safety culture</li>
      </ul>

      <h2>In-House vs Contracted Appointed Persons</h2>
      <p>Many contractors use a hybrid approach: in-house Appointed Persons for routine work with consultants for complex operations or peak demand periods.</p>

      <h2>The Future of Appointed Person Services</h2>
      <p>Technology is changing how Appointed Persons work through lift planning software, 3D modeling, and remote collaboration. Despite technological advancement, core skills—technical judgment, risk assessment, and practical planning—remain fundamentally human activities.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need an Appointed Person?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions is run by Ricky Marsh, a CPCS Appointed Person (A61) with 35 years of construction industry experience and over 1,000 lift plans delivered. We provide <a href="/services/appointed-person">CPCS A61 Appointed Person</a>, <a href="/services/lift-plans">lift plan writing</a>, <a href="/services/tower-crane">tower crane contracts</a>, and <a href="/services/lift-plan-checking">lift plan checking</a> services.</p>
        <a href="/contact" class="btn-primary inline-block">Contact Us Today</a>
      </div>
    `,
  },
  'common-lift-planning-mistakes': {
    title: 'Common Lift Planning Mistakes (And How to Avoid Them)',
    description: 'The most common lift planning mistakes UK contractors make, and how to avoid them. Expert advice on LOLER compliance, safety and lift planning.',
    category: 'Planning',
    readTime: '10 min read',
    date: 'January 31, 2026',
    dateModified: 'May 22, 2026',
    image: '/images/services/lift-planning-site-desk-review-uk.webp',
    imageAlt: 'Lifting team reviewing and marking up a lift plan on site — catching planning mistakes before the lift goes ahead',
    content: `
      <p class="lead">After reviewing over 1,000 lift plans across 35 years in construction, certain mistakes appear repeatedly. This guide examines the most common lift planning errors and how to avoid them.</p>

      <figure>
        <img src="/images/blog/lift-plan-rejected-red-pen-corrections.webp" alt="A printed lift plan on a site office desk marked up with red-pen corrections and circled notes, beside reading glasses and a hard hat \u2014 the kind of errors caught during an independent lift plan review" width="1600" height="1067" loading="lazy" />
        <figcaption>Most lift planning mistakes are avoidable \u2014 and the cheapest place to catch them is at the desk, before the plan ever reaches site.</figcaption>
      </figure>

      <figure>
        <img src="/images/blog/common-lift-planning-mistakes-overview.svg" alt="Overview graphic listing the eight most common lift planning mistakes: underestimating load weights, inadequate ground assessment, missing overhead hazards, inadequate communication planning, no plan for changing conditions, ignoring manufacturer load charts, poor rigging practices, and not documenting the plan" width="1600" height="920" loading="lazy" />
        <figcaption>The eight mistakes that appear again and again in lift plans \u2014 each one covered in detail below.</figcaption>
      </figure>

      <h2>Mistake 1: Underestimating Load Weights</h2>
      <p>The most fundamental error is not knowing what you're actually lifting. A 900mm diameter concrete pipe 3 meters long weighs approximately 2.5 tonnes—what appears manageable can quickly exceed equipment capacity.</p>

      <h3>How to Avoid It</h3>
      <ul>
        <li>Always verify weights from manufacturer data sheets</li>
        <li>Include weight of all lifting accessories</li>
        <li>Apply realistic contingency (typically 10-15%)</li>
        <li>Document weight sources with the lift plan</li>
      </ul>

      <h2>Mistake 2: Inadequate Ground Assessment</h2>
      <p>Ground conditions beneath lifting equipment are critical to stability, yet proper assessment is frequently overlooked. Visual assessment alone is insufficient.</p>

      <h3>How to Avoid It</h3>
      <ul>
        <li>Identify soil type and condition properly</li>
        <li>Calculate actual bearing pressures</li>
        <li>Use ground mats sized appropriately</li>
        <li>Maintain safe distances from excavations</li>
      </ul>

      <h2>Mistake 3: Failing to Identify Overhead Hazards</h2>
      <p>Overhead power lines and structures create exclusion zones. Failure to identify these has caused numerous fatalities in UK construction.</p>

      <h3>How to Avoid It</h3>
      <ul>
        <li>Walk the entire site looking specifically for overhead lines</li>
        <li>Apply HSE Guidance Note GS6 clearance distances</li>
        <li>Implement physical exclusion zone barriers</li>
        <li>Consider line diversion for major projects</li>
      </ul>

      <h2>Mistake 4: Inadequate Communication Planning</h2>
      <p>Even perfectly planned lifts fail without effective communication between all involved parties.</p>

      <h3>How to Avoid It</h3>
      <ul>
        <li>Brief all personnel before every complex lift</li>
        <li>Designate one person to communicate with operator</li>
        <li>Use standardized BS 7121 hand signals</li>
        <li>Test communications before lifting begins</li>
      </ul>

      <h2>Mistake 5: No Plan for Changing Conditions</h2>
      <p>Lift plans based on ideal conditions often fail to account for reality. Specify maximum wind speeds, define decision points, and build flexibility into plans.</p>

      <h2>Mistake 6: Ignoring Manufacturer Instructions</h2>
      <p>Equipment manufacturers provide load charts for good reason, yet these are frequently ignored. Always consult manufacturer data and stay within specified limits.</p>

      <h2>Mistake 7: Poor Rigging Practices</h2>
      <p>How loads are attached to lifting equipment is critical. Plan rigging in detail, understand sling angle effects, and inspect all rigging before use.</p>

      <h2>Mistake 8: Not Documenting the Plan</h2>
      <p>Even when operations are properly planned, failing to document creates compliance and safety issues. Document all non-routine lifts in writing.</p>

      <h2>Conclusion: Learning from Mistakes</h2>
      <p>Every mistake discussed here has caused real accidents, delays, and regulatory action in UK construction. The good news is every one is avoidable through proper training, careful planning, and adherence to best practices.</p>

      <p>Key themes: Competence matters. Documentation is essential. Details matter. For contractors serious about lifting safety, learning from others' mistakes is far less painful than repeating them.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Avoid These Mistakes</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides LOLER-compliant lift planning from a CPCS Appointed Person with 35 years of experience. We offer <a href="/services/lift-plans">professional lift plan writing</a> and <a href="/services/lift-plan-checking">independent lift plan checking</a> to ensure your operations are safe and compliant.</p>
        <a href="/contact" class="btn-primary inline-block">Contact Us Today</a>
      </div>
    `,
  },
  'telehandler-lift-plans-complete-guide': {
    title: 'Telehandler Lift Plans: A Complete Guide for UK Contractors',
    description: 'Complete guide to telehandler lift plans under LOLER 1998: fixed-frame and 360 slew machines, load charts, stabiliser requirements and compliance.',
    category: 'Planning',
    readTime: '9 min read',
    date: 'February 6, 2026',
    dateModified: 'June 11, 2026',
    image: '/images/services/telehandler-lift-plan-forks-uk.webp',
    imageAlt: 'JCB telehandler with boom raised on a UK construction site, set to lift a palletised load on its forks — work that requires a telehandler lift plan',
    content: `
      <p class="lead">Telehandlers are among the most versatile machines on UK construction sites. Originally designed as rough terrain forklifts, they are now routinely used for lifting and placing suspended loads — operations that bring them firmly within the scope of LOLER 1998. Despite this, telehandler lift plans remain one of the most commonly overlooked requirements in construction planning.</p>

      <h2>When Does a Telehandler Need a Lift Plan?</h2>
      <p>Under <a href="/blog/what-is-loler-complete-guide">LOLER 1998</a>, every lifting operation must be properly planned by a competent person, appropriately supervised, and carried out in a safe manner. A telehandler requires a formal lift plan whenever it is used for crane duties — that is, lifting and moving suspended loads using chains, slings, or other lifting accessories attached to the machine.</p>

      <p>Common telehandler lifting operations that require a lift plan include:</p>
      <ul>
        <li>Lifting steel beams, columns, or structural elements using a hook attachment</li>
        <li>Placing precast concrete units such as lintels, padstones, or cladding panels</li>
        <li>Lifting mechanical and electrical plant to height</li>
        <li>Placing materials on scaffolding or at elevated positions using suspended loads</li>
        <li>Any operation where a load is suspended from the telehandler using lifting accessories</li>
      </ul>

      <p>It is worth noting that routine materials handling — such as moving pallets on forks — does not normally require a formal lift plan, although a risk assessment is still needed. The distinction is whether the load is freely suspended from the machine. Once a load hangs from chains, slings, or a lifting beam attached to the telehandler, LOLER applies in full.</p>

      <h2>Fixed-Frame vs 360 Slew Telehandlers</h2>
      <p>One of the most important considerations in telehandler lift planning is the type of machine being used. Fixed-frame and 360 degree slew telehandlers have fundamentally different stability characteristics, and the lift plan must account for these differences.</p>

      <h3>Fixed-Frame Telehandlers</h3>
      <p>Fixed-frame telehandlers are the most common type found on UK construction sites. The boom is mounted on a chassis that does not rotate, meaning the entire machine must be repositioned to change the direction of the lift. Key planning considerations include:</p>
      <ul>
        <li><strong>Forward stability:</strong> The primary risk is forward tipping. The load chart is based on the load moment relative to the front axle tipping line</li>
        <li><strong>Boom extension and angle:</strong> Lifting capacity reduces significantly as the boom extends and lowers. A telehandler rated at 4 tonnes at minimum radius may only manage 1 tonne at full extension</li>
        <li><strong>Stabilisers:</strong> Many fixed-frame telehandlers have deployable stabilisers that significantly increase lifting capacity. The lift plan must specify whether stabilisers are deployed and confirm adequate ground conditions beneath them</li>
        <li><strong>Ground gradient:</strong> Fixed-frame machines are particularly sensitive to operating on slopes. The lift plan should specify maximum permissible gradients</li>
        <li><strong>Rear axle loading:</strong> When lifting heavy loads at extended radius, the rear axle can lose ground contact. This must be assessed</li>
      </ul>

      <h3>360 Degree Slew Telehandlers</h3>
      <p>360 degree slew telehandlers (also known as roto telehandlers) feature a rotating upper structure similar to an excavator. This provides much greater versatility but introduces additional planning complexity:</p>
      <ul>
        <li><strong>Multi-directional stability:</strong> Because the boom can slew through 360 degrees, the machine must be stable in all directions. Tipping can occur over the side as well as the front</li>
        <li><strong>Load charts vary with slew angle:</strong> Lifting capacity changes depending on the angle of the boom relative to the chassis. Over-the-front capacity is different from over-the-side capacity</li>
        <li><strong>Stabiliser configuration matters:</strong> Most 360 degree machines require all stabilisers fully deployed for crane duties. Partial deployment drastically reduces capacity and may not be permitted for suspended loads</li>
        <li><strong>Counterweight:</strong> Some 360 degree telehandlers have removable counterweight options that affect capacity. The lift plan must specify the counterweight configuration</li>
        <li><strong>Slew restriction:</strong> Where site conditions limit the safe slewing arc, the lift plan should define permitted slew angles</li>
      </ul>

      <h2>What Should a Telehandler Lift Plan Include?</h2>
      <p>A LOLER-compliant telehandler lift plan must address the specific risks of the operation. While the exact content varies with each lift, a thorough telehandler lift plan typically covers the following areas. (For the general anatomy of a plan regardless of equipment type, see <a href="/blog/what-is-a-lift-plan">what a lift plan must contain</a>.)</p>

      <h3>Machine Specification</h3>
      <p>The lift plan must identify the specific telehandler to be used, not just the generic type. This includes the make, model, maximum rated capacity, and boom configuration. It must also confirm that the machine is fitted with a suitable lifting attachment — typically a crane hook or dedicated lifting jib — and that this attachment is included in the machine's current thorough examination certificate under LOLER.</p>

      <h3>Load Details</h3>
      <p>Accurate load information is essential. The plan must record the weight of the load, its dimensions, the centre of gravity (particularly for asymmetric loads), and any factors that could affect the load during the lift such as wind loading on large flat panels or retained water in hollow sections. The weight of all lifting accessories — slings, shackles, spreader beams — must be included in the total suspended load.</p>

      <h3>Radius and Capacity Verification</h3>
      <p>This is where telehandler lift plans differ most from simple crane lift plans. The lift plan must demonstrate that the telehandler has adequate capacity at the actual working radius. For telehandlers, the working radius changes as the boom extends and raises, and small changes can have a dramatic effect on capacity.</p>

      <p>The plan should include a clear capacity check showing the manufacturer's rated capacity at the planned radius and boom configuration, the total load including rigging weight, and the resulting percentage utilisation. Industry best practice is to keep utilisation below 80% for routine lifts to provide a safety margin for dynamic loading effects.</p>

      <h3>Ground Conditions</h3>
      <p>Ground conditions are critical for telehandler operations. The lift plan must assess:</p>
      <ul>
        <li>Ground bearing capacity at the operating position and under each stabiliser pad</li>
        <li>Proximity to excavations, trenches, or soft ground that could affect stability</li>
        <li>Surface gradient and whether it falls within the machine's permitted operating limits</li>
        <li>Requirements for timber mats, steel plates, or other load-spreading measures under stabiliser pads</li>
        <li>Underground services, voids, or basements that could be affected by machine loading</li>
      </ul>

      <h3>Site-Specific Hazards</h3>
      <p>Every lift plan must address the hazards present at the specific location. For telehandler operations, common considerations include:</p>
      <ul>
        <li>Overhead power lines and minimum approach distances</li>
        <li>Adjacent structures, scaffolding, or other obstructions within the operating radius</li>
        <li>Other plant and vehicle movements in the area</li>
        <li>Pedestrian routes and exclusion zones beneath and around the lift</li>
        <li>Weather limitations — particularly wind speeds for large or high-surface-area loads</li>
      </ul>

      <h3>Personnel and Communication</h3>
      <p>The plan must identify the key personnel involved in the lift:</p>
      <ul>
        <li>The <a href="/blog/cpcs-appointed-person-guide">Appointed Person</a> responsible for planning the lift</li>
        <li>The lift supervisor overseeing the operation on site</li>
        <li>The telehandler operator, who must hold appropriate CPCS or equivalent certification</li>
        <li>The slinger/signaller(s) responsible for attaching loads and directing the operator</li>
        <li>The communication method to be used — hand signals, radio, or direct verbal where visibility allows</li>
      </ul>

      <h2>Common Mistakes in Telehandler Lift Plans</h2>
      <p>Having reviewed hundreds of telehandler lift plans submitted by subcontractors, certain <a href="/blog/common-lift-planning-mistakes">mistakes appear repeatedly</a>.</p>

      <h3>Using the Wrong Load Chart</h3>
      <p>This is the single most common error. Telehandler load charts vary significantly depending on the configuration — stabilisers deployed vs retracted, attachment type, counterweight fitted vs removed. Using the wrong chart can make a lift appear safe when it is actually beyond the machine's capacity. Always verify which load chart applies to the actual planned configuration.</p>

      <h3>Ignoring Attachment Weight</h3>
      <p>The weight of the lifting attachment itself — the crane hook, jib, or man basket frame — reduces the available capacity. A crane jib attachment can weigh several hundred kilograms. This must be deducted from the machine's rated capacity before assessing whether the load can be lifted safely.</p>

      <h3>Underestimating Radius</h3>
      <p>Telehandler operators sometimes need to extend the boom further than initially planned to reach the landing position. If the lift plan has been calculated at minimum radius with little margin, any additional extension can push the machine beyond its safe working load. Always plan for the maximum radius that might be needed, not the minimum.</p>

      <h3>Inadequate Ground Assessment</h3>
      <p>Telehandlers exert significant ground pressure through their stabiliser pads, particularly 360 degree slew machines lifting at extended radius. Failing to assess ground bearing capacity or provide adequate spreading mats is a common and potentially dangerous oversight.</p>

      <h3>No Thorough Examination for Lifting Accessories</h3>
      <p>When a telehandler is used for crane duties, the lifting attachment (hook, jib, etc.) becomes a lifting accessory under LOLER. It must have a current thorough examination certificate. Slings, shackles, and any other rigging equipment used must also be examined. Missing or expired certificates are a frequent finding during lift plan reviews.</p>

      <h2>CPCS Categories for Telehandler Operations</h2>
      <p>Operators must hold the correct CPCS card for the type of telehandler being used:</p>
      <ul>
        <li><strong>A17 — Telescopic Handler:</strong> Covers standard fixed-frame telehandlers</li>
        <li><strong>A17E — 360 Slew Telescopic Handler:</strong> Required for roto/360 degree slew machines. An A17 card alone is not sufficient for 360 degree machines</li>
      </ul>

      <p>For crane duties specifically, operators should also have training and assessment in the use of the specific lifting attachment fitted. This is often covered under the CPCS scheme but should be verified in the lift plan.</p>

      <h2>Thorough Examination Requirements</h2>
      <p>Under LOLER Regulation 9, telehandlers used for lifting operations must undergo thorough examination:</p>
      <ul>
        <li><strong>Before first use:</strong> Unless the machine has an EC Declaration of Conformity and has not been previously used for lifting</li>
        <li><strong>At regular intervals:</strong> At least every 12 months for the machine itself. Where lifting accessories are used (crane hook, jib, slings), these must be examined at least every 6 months</li>
        <li><strong>After exceptional circumstances:</strong> Following any incident, significant modification, or prolonged period out of service</li>
      </ul>

      <p>The lift plan should confirm that all thorough examination reports are current and that any defects identified have been rectified before the lift proceeds.</p>

      <h2>Planning Telehandler Lifts Near Structures</h2>
      <p>Telehandlers are frequently used for lifting operations in confined or congested areas — placing steelwork inside partially completed structures, lifting materials over hoarding, or working adjacent to occupied buildings. These lifts require particular attention in the plan.</p>

      <p>The boom's swept path must be assessed to ensure it can reach the required position without contacting structures. For 360 degree machines, the tail swing of the superstructure must be checked — it extends beyond the chassis and can strike adjacent walls, scaffolding, or vehicles. Minimum clearances should be specified in the plan, and banksmen positioned where the operator's visibility is restricted.</p>

      <h2>Wind Limitations for Telehandler Lifts</h2>
      <p>Wind is a significant factor for telehandler lifting operations. Unlike larger cranes, telehandlers have relatively low lifting capacity at extended radius, meaning even moderate wind loading on the load can consume a significant portion of the available capacity margin.</p>

      <p>The lift plan should specify a maximum wind speed for the operation. For loads with large surface areas — such as cladding panels, mesh reinforcement, or sheeting — lower wind limits may be necessary. As a general guideline, most telehandler crane duty operations should cease when sustained wind speeds exceed 20 mph, with lower limits for high-surface-area loads or operations at extended boom reach.</p>

      <h2>How RMT Solutions Can Help</h2>
      <p>Telehandler lift plans may seem straightforward, but the variables involved — machine configuration, attachment type, ground conditions, and site-specific hazards — make professional planning essential. An incorrect load chart selection or an overlooked ground condition can have serious consequences.</p>

      <p>RMT Solutions provides LOLER-compliant telehandler lift plans prepared by a CPCS Appointed Person with 35 years of construction industry experience. We handle both fixed-frame and 360 degree slew telehandler operations, with plans tailored to your specific machine, site conditions, and lifting requirements.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need a Telehandler Lift Plan?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides LOLER-compliant <a href="/services/telehandler-lift-plans">telehandler lift plans</a> for fixed-frame and 360 degree slew machines. Fast turnaround from a CPCS Appointed Person with 35 years of experience.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote</a>
      </div>
    `,
  },
  'lorry-loader-lift-plans-guide': {
    title: 'Lorry Loader (HIAB) Lift Plans: UK LOLER Guide',
    // CTR fix (Jun 2026): lead with the question searchers ask (do HIAB
    // deliveries need a plan?) rather than a table-of-contents summary.
    description: 'Yes — even routine HIAB deliveries need a lift plan under LOLER 1998. What it must cover: positioning, stabilisers, load charts, and who can write one.',
    category: 'Planning',
    readTime: '9 min read',
    date: 'February 6, 2026',
    dateModified: 'June 11, 2026',
    image: '/images/services/lorry-loader-hiab-delivery-construction-site.webp',
    imageAlt: 'Lorry loader (HIAB) offloading a delivery on a UK construction site — a vehicle-mounted crane operation requiring a lorry loader lift plan',
    content: `
      <p class="lead">Lorry loaders \u2014 commonly known by the brand name HIAB, though this is just one of several manufacturers \u2014 are truck-mounted cranes used extensively across UK construction for loading, unloading, and placing materials. Their convenience and availability make them one of the most frequently used pieces of lifting equipment on construction sites, yet lorry loader lift plans are among the most commonly deficient documents submitted for review.</p>

      <h2>When Does a Lorry Loader Need a Lift Plan?</h2>
      <p>Under <a href="/blog/what-is-loler-complete-guide">LOLER 1998</a>, every lifting operation must be properly planned by a competent person. For lorry loaders, this means a <a href="/blog/what-is-a-lift-plan">lift plan</a> is required whenever the crane is used to lift and move loads. This includes the most routine delivery operations that many contractors assume are too simple to plan.</p>

      <p>Operations that require a lorry loader lift plan include:</p>
      <ul>
        <li>Unloading materials from the delivery vehicle \u2014 steel, timber, precast units, plant, and equipment</li>
        <li>Loading materials or waste onto the vehicle for removal</li>
        <li>Placing materials at specific locations on site rather than simply offloading to the ground</li>
        <li>Lifting and positioning modular or prefabricated units</li>
        <li>Any operation where a load is suspended from the lorry loader crane</li>
      </ul>

      <p>A common misconception is that routine deliveries do not need lift plans because the lorry loader operator handles the lifting. This is incorrect. LOLER does not distinguish between routine and complex lifts \u2014 all lifting operations must be planned. The level of detail in the plan should be proportionate to the risk, but the requirement for planning exists regardless of how straightforward the lift appears.</p>

      <h2>Lorry Loader Configuration and Capacity</h2>
      <p>Understanding lorry loader configurations is essential for accurate lift planning. Unlike mobile cranes or telehandlers, lorry loaders have characteristics that are unique to truck-mounted equipment.</p>

      <h3>Crane Position on the Vehicle</h3>
      <p>Lorry loaders are typically mounted in one of two positions:</p>
      <ul>
        <li><strong>Behind-cab mounting:</strong> The most common arrangement, where the crane is mounted between the cab and the load bed. This provides the best stability for most operations but limits the crane\u2019s reach to the rear of the vehicle</li>
        <li><strong>Rear mounting:</strong> The crane is fitted at the rear of the chassis. This is common on vehicles used for specific applications such as skip loading or placing operations where access from the rear is preferred</li>
      </ul>

      <p>The crane position affects the stability characteristics and load chart of the machine. A behind-cab mounted crane lifting over the rear of the vehicle behaves differently from one lifting over the side, and the lift plan must account for the actual direction of lift.</p>

      <h3>Boom Type</h3>
      <p>Modern lorry loaders use hydraulic knuckle boom cranes with multiple extensions. The crane\u2019s capacity reduces with each extension section deployed, and the load chart must be read correctly for the actual boom configuration being used. Some lorry loaders are also fitted with fly jibs or manual extensions that further increase reach at reduced capacity \u2014 these must be specifically identified in the lift plan.</p>

      <h3>Stabiliser Systems</h3>
      <p>Lorry loader stabilisers come in several configurations, each with different effects on lifting capacity:</p>
      <ul>
        <li><strong>Full extension stabilisers:</strong> Legs extend to the sides of the vehicle, providing maximum stability. Most load charts show maximum capacity with stabilisers fully extended</li>
        <li><strong>Intermediate positions:</strong> Some stabiliser systems allow partial deployment. The load chart may show different capacities for different extension positions, but partial deployment always reduces capacity compared to full extension</li>
        <li><strong>No stabilisers (on tyres):</strong> Some lighter lorry loaders can operate without stabilisers for reduced loads. This dramatically reduces capacity and is only safe within the specific parameters shown on the relevant load chart</li>
      </ul>

      <p>The lift plan must specify the stabiliser configuration to be used and confirm that the load chart capacity is based on that specific configuration. Using the wrong stabiliser setting is a common cause of lorry loader incidents.</p>

      <h2>What Should a Lorry Loader Lift Plan Include?</h2>
      <p>A LOLER-compliant lorry loader lift plan must be proportionate to the risk involved, but should always address the following elements. If you want a head start, our <a href="/resources/lorry-loader-lift-plan-templates">free lorry loader lift plan template</a> sets out all 17 sections \u2014 aligned with BS 7121-4 and the ALLMI Code of Practice \u2014 with a pre-populated risk register you can adapt to your own operation.</p>

      <h3>Vehicle Positioning</h3>
      <p>Where the lorry parks on site is one of the most critical elements of a lorry loader lift plan, and is often the area given least attention. The plan must consider:</p>
      <ul>
        <li><strong>Ground conditions:</strong> The vehicle and stabiliser pads will impose significant loads on the ground. The plan must assess whether the ground can support these loads without subsidence. On made-up ground, near excavations, or over underground services, this assessment is critical</li>
        <li><strong>Level ground:</strong> Lorry loaders should ideally operate on level ground. Where this is not possible, the gradient must be within the manufacturer\u2019s permitted limits</li>
        <li><strong>Stabiliser footprint:</strong> Adequate space must be available for full stabiliser deployment. On narrow roads, adjacent to kerbs, or in confined site areas, full extension may not be possible \u2014 in which case, the reduced capacity must be used in the plan</li>
        <li><strong>Access and egress:</strong> The vehicle must be able to reach the offloading position and leave safely, including consideration of overhead obstructions and turning circles</li>
        <li><strong>Proximity to live traffic:</strong> Many lorry loader operations take place on or adjacent to public roads. Traffic management requirements must be addressed in the plan</li>
      </ul>

      <h3>Load Information</h3>
      <p>Accurate load data is essential. The plan must record:</p>
      <ul>
        <li>The weight of each item to be lifted, obtained from delivery documentation, manufacturer\u2019s data, or by calculation</li>
        <li>The dimensions and centre of gravity of the load</li>
        <li>The weight of all lifting accessories \u2014 slings, chains, shackles, spreader beams \u2014 which must be added to the load weight</li>
        <li>Whether multiple items are to be lifted simultaneously and the combined weight</li>
      </ul>

      <h3>Radius and Capacity Check</h3>
      <p>The lift plan must demonstrate that the lorry loader has adequate capacity at the working radius for each phase of the lift. For lorry loaders, the critical point is often the maximum radius \u2014 the furthest point the load must reach during the operation.</p>

      <p>Lorry loader capacity reduces dramatically with radius. A machine rated at 10 tonne-metres might lift 2,500kg at 4 metres radius but only 1,000kg at 10 metres. The plan must check capacity at the actual maximum radius required, not at minimum radius.</p>

      <p>Where multiple items are being offloaded to different positions, the plan should check capacity for the most onerous lift \u2014 typically the heaviest item at the greatest radius.</p>

      <h3>Ground Bearing Pressure</h3>
      <p>Lorry loader stabilisers can impose very high point loads on the ground. A fully loaded lorry with the crane lifting at extended radius can place several tonnes through each stabiliser pad. The lift plan must:</p>
      <ul>
        <li>Calculate the maximum stabiliser reaction forces based on the manufacturer\u2019s data</li>
        <li>Assess the ground bearing capacity at the planned operating position</li>
        <li>Specify load-spreading measures where necessary \u2014 typically timber mats or steel plates under the stabiliser pads</li>
        <li>Consider the effect of recent weather on ground conditions, particularly on unpaved surfaces</li>
      </ul>

      <h3>Hazard Assessment</h3>
      <p>Site-specific hazards must be identified and addressed. Common hazards for lorry loader operations include:</p>
      <ul>
        <li><strong>Overhead power lines:</strong> Lorry loader booms can reach considerable heights. Any overhead power lines within the working area or along the access route must be identified, with minimum approach distances calculated</li>
        <li><strong>Underground services:</strong> Stabiliser pad loads can damage shallow underground services. Service plans should be reviewed and trial holes considered where records are uncertain</li>
        <li><strong>Pedestrians and other workers:</strong> Exclusion zones must be established beneath and around the lift. On public roads, pedestrian management may be required</li>
        <li><strong>Other vehicles:</strong> On active construction sites or public roads, other vehicle movements must be managed during the lifting operation</li>
        <li><strong>Wind:</strong> Wind limits should be specified, particularly for loads with large surface areas</li>
      </ul>

      <h2>Lorry Loader Operations on Public Roads</h2>
      <p>Many lorry loader operations \u2014 particularly material deliveries \u2014 take place on or immediately adjacent to public highways. These operations introduce additional planning requirements.</p>

      <p>Traffic management must be arranged in accordance with Chapter 8 of the Traffic Signs Manual where the operation affects the public highway. This may require advance signing, temporary traffic signals, or a road closure depending on the nature and duration of the work. The lift plan should reference the traffic management plan and confirm that appropriate measures are in place before the lifting operation begins.</p>

      <p>Vehicle positioning on public roads is constrained by road width, adjacent properties, and the need to maintain traffic flow where possible. The lift plan must work within these constraints, which may mean accepting reduced stabiliser extension and therefore reduced lifting capacity.</p>

      <h2>Common Mistakes in Lorry Loader Lift Plans</h2>
      <p>From years of reviewing lorry loader lift plans submitted by subcontractors, these are the mistakes that appear most frequently.</p>

      <h3>No Plan at All</h3>
      <p>The most common problem is the complete absence of a lift plan. Many contractors treat lorry loader deliveries as routine operations that do not require planning. This is a direct breach of LOLER and leaves both the contractor and the principal contractor exposed to enforcement action.</p>

      <h3>Generic Plans Not Specific to the Site</h3>
      <p>Some operators carry a single generic lift plan that they use for every delivery regardless of the site. A lift plan must be specific to the actual operation \u2014 the site conditions, the loads being lifted, the vehicle position, and the hazards present. A plan that does not address the specific circumstances of the lift is not compliant with LOLER.</p>

      <h3>Using the Wrong Load Chart Configuration</h3>
      <p>Load charts for lorry loaders show different capacities for different stabiliser configurations and boom arrangements. Using the fully-extended stabiliser chart when the vehicle will be operating with stabilisers partially deployed \u2014 as is common on narrow roads \u2014 can result in the machine being overloaded.</p>

      <h3>Ignoring Vehicle Load Condition</h3>
      <p>The stability of a lorry loader changes as materials are offloaded from the vehicle. A fully loaded vehicle is more stable than an empty one when lifting from the opposite side to the crane. The lift plan should consider the vehicle\u2019s load condition at each stage of the offloading sequence, particularly for the final lifts when the vehicle is lightest.</p>

      <h3>No Ground Assessment</h3>
      <p>Failing to assess ground conditions beneath stabiliser pads is a frequent and potentially serious oversight. This is particularly dangerous on construction sites where ground has been recently excavated and backfilled, or where underground services or basements exist beneath the operating area.</p>

      <h2>Operator Competence</h2>
      <p>Lorry loader operators must hold appropriate competence certification. Under CPCS, the relevant category is:</p>
      <ul>
        <li><strong>A36 \u2014 Lorry Loader:</strong> The standard category for operating lorry-mounted cranes</li>
      </ul>

      <p>In addition to CPCS certification, operators should be familiar with the specific machine they are operating, including its load chart, stabiliser system, and any fitted safety systems such as rated capacity indicators (RCIs) or load moment indicators (LMIs). Many modern lorry loaders are fitted with sophisticated electronic management systems that limit operation within the safe working envelope \u2014 operators must understand how these systems function and must never override or disable them.</p>

      <h2>Thorough Examination and Inspection</h2>
      <p>Lorry loaders used for lifting must undergo thorough examination under LOLER Regulation 9:</p>
      <ul>
        <li><strong>The crane:</strong> Must be thoroughly examined at least every 12 months</li>
        <li><strong>Lifting accessories:</strong> All slings, chains, shackles, and other accessories used in conjunction with the lorry loader must be examined at least every 6 months</li>
        <li><strong>After installation or reassembly:</strong> Following any significant repair or modification to the crane</li>
      </ul>

      <p>In addition to thorough examination, the operator should conduct a pre-use check before each shift, inspecting the crane, stabilisers, hydraulic hoses, and controls for visible defects or damage. The lift plan should require confirmation that the pre-use check has been completed satisfactorily.</p>

      <h2>Planning Multi-Drop Deliveries</h2>
      <p>Many lorry loader operations involve multiple deliveries to different locations on the same site, or to multiple sites in a single day. Each offloading position is effectively a separate lifting operation and should be assessed individually.</p>

      <p>Where a lorry loader will operate at multiple positions on the same site, the lift plan can cover all positions provided each one is assessed for ground conditions, overhead hazards, vehicle positioning, and capacity at the required radius. A plan that only assesses one position and assumes all others are the same is inadequate.</p>

      <p>For regular repeat deliveries to the same site \u2014 such as ongoing steel or concrete deliveries during a construction programme \u2014 a standing lift plan can be prepared covering the standard offloading positions. This should be reviewed if site conditions change, and each delivery should still be confirmed against the plan before lifting commences.</p>

      <h2>How RMT Solutions Can Help</h2>
      <p>Lorry loader operations may be routine, but the planning requirements are not optional. Every delivery involving a lorry loader crane is a lifting operation under LOLER, and every one needs a plan. The consequences of getting it wrong range from HSE enforcement notices and fines to serious injuries and fatalities.</p>

      <p>RMT Solutions provides LOLER-compliant lorry loader lift plans prepared by a CPCS Appointed Person with 35 years of construction industry experience. Whether you need a one-off plan for a complex delivery or a standing plan for regular site deliveries, we ensure your operations are properly planned and compliant.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need a Lorry Loader Lift Plan?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides LOLER-compliant <a href="/services/lorry-loader-lift-plans">lorry loader lift plans</a> for all types of truck-mounted crane operations. Fast turnaround from a CPCS Appointed Person with 35 years of experience. Prefer to draft your own? Start from our <a href="/resources/lorry-loader-lift-plan-templates">free lorry loader lift plan template</a>.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote</a>
      </div>
    `,
  },

  'lift-plan-checking-what-gets-checked-and-why-plans-get-rejected': {
    title: 'Lift Plan Checking: What We Check & Why Plans Fail',
    description: 'What actually gets checked in a lift plan review? Learn why plans fail, the common rejection reasons, and how to get yours approved first time.',
    keywords: 'lift plan checking, lift plan review, lift plan checker, independent lift plan review, lift plan rejected, lift plan checking service, common lift plan mistakes, LOLER lift plan check, lift plan compliance, who checks lift plans, lift plan approval',
    category: 'Services',
    readTime: '12 min read',
    date: 'February 22, 2026',
    dateModified: 'February 22, 2026',
    image: '/images/services/loler-compliance-regulations-standards.webp',
    imageAlt: 'LOLER 1998 and BS 7121 standards underpinning lift plan checks — what gets verified when a lift plan is reviewed',
    content: `
      <p class="lead">A lift plan that looks complete can still be fundamentally wrong. Over 35 years reviewing lift plans for tier 1 contractors across the UK, I have seen the same problems appear thousands of times \u2014 plans that tick every box on the form but would not actually keep anyone safe on site. Plans where the numbers do not add up. Plans where the person who wrote them clearly never visited the site. Plans that would pass a cursory glance but fall apart the moment you start checking the detail.</p>

      <p>Lift plan checking is one of the most important \u2014 and most overlooked \u2014 parts of managing lifting operations on a construction site. This guide explains what lift plan checking actually involves, why it matters, what causes plans to fail, and how to make sure yours pass first time.</p>

      <h2>What is Lift Plan Checking?</h2>
      <p>Lift plan checking is the independent review of a lift plan by a competent person \u2014 typically a <a href="/blog/cpcs-appointed-person-guide">CPCS Appointed Person</a> \u2014 before the lifting operation takes place. The purpose is to verify that the plan is technically correct, that the calculations work, that the equipment is suitable, and that the risks have been properly identified and controlled.</p>

      <p>This is distinct from writing a lift plan. The person checking the plan did not produce it. They are reviewing someone else\u2019s work with fresh eyes and professional judgement. This independence is what gives the process its value \u2014 it catches errors, omissions, and assumptions that the original planner may have missed or taken for granted.</p>

      <p>On most major construction projects in the UK, particularly those managed by tier 1 contractors, every lift plan submitted by subcontractors must be checked and approved by the principal contractor\u2019s Appointed Person before any lifting can take place. This is not just good practice \u2014 it is how competent contractors discharge their duties under <a href="/blog/what-is-loler-complete-guide">LOLER</a> and CDM.</p>

      <h2>Why Does Lift Plan Checking Matter?</h2>

      <h3>The Legal Position</h3>
      <p>LOLER 1998 requires that every lifting operation is properly planned by a competent person. The regulations place duties on employers to ensure that lifting operations are carried out safely. For principal contractors on construction sites, CDM 2015 adds further duties to coordinate and manage health and safety, including the activities of subcontractors.</p>

      <p>When a subcontractor submits a lift plan for a crane lift, an excavator pick, or a lorry loader delivery, the principal contractor cannot simply accept it at face value. They have a duty to satisfy themselves that the plan is adequate. Independent checking by a qualified Appointed Person is how they meet that duty.</p>

      <p>If a lifting incident occurs and the subsequent investigation reveals that a deficient lift plan was accepted without proper review, the principal contractor faces significant legal exposure \u2014 regardless of who actually wrote the plan.</p>

      <h3>The Practical Reality</h3>
      <p>The quality of lift plans submitted on UK construction sites varies enormously. Some are produced by experienced Appointed Persons with detailed knowledge of the equipment, the regulations, and the site conditions. Others are produced by people who mean well but lack the technical competence to plan the lift properly. Some are template documents with minimal site-specific content. A few are essentially works of fiction.</p>

      <p>Without independent checking, there is no way to distinguish between a robust, well-considered plan and one that looks professional but contains fundamental errors. The checking process is the safety net that catches problems before they reach the site.</p>

      <h3>What the Checking Process Actually Involves</h3>
      <p>A proper lift plan check is not a box-ticking exercise. It is a technical review that examines whether the plan would actually work safely in practice. Here is what an experienced Appointed Person looks at when reviewing a submitted lift plan.</p>

      <h2>Load Information</h2>
      <p>The first thing to verify is the weight of the load. This sounds basic, but incorrect load weights are by far the most common error in lift plans submitted for review. The problems include:</p>

      <p><strong>Estimated weights rather than verified weights.</strong> A plan that states \u201cload weight approximately 2.5 tonnes\u201d is not adequate. The word \u201capproximately\u201d in a lift plan should raise immediate concerns. Load weights must be established from reliable sources \u2014 manufacturer\u2019s data, delivery documentation, engineering drawings, or direct calculation.</p>

      <p><strong>Omitted rigging weight.</strong> The total suspended load includes everything below the hook \u2014 the load itself plus all slings, shackles, spreader beams, lifting frames, and any other accessories. A plan that states the load weight but does not account for the rigging is understating the actual demand on the machine. On a heavy lift with a complex rigging arrangement, the rigging alone can weigh several hundred kilograms.</p>

      <p><strong>Weights taken from outdated information.</strong> Loads change. A precast unit that weighed 3.2 tonnes on the drawing may weigh 3.8 tonnes by the time it arrives on site if the specification has been revised. Delivery weights must be confirmed, not assumed from old data.</p>

      <p><strong>No consideration of retained water or other variables.</strong> Hollow steel sections, concrete products stored outdoors, and vessels or tanks can retain water that significantly increases the actual weight. A competent lift plan addresses this possibility.</p>

      <h2>Equipment Selection and Capacity</h2>
      <p>The plan must demonstrate that the selected machine can handle the load at the required radius with an appropriate safety margin. This is where many plans fail, because the person writing them either does not understand load charts or has used the wrong one.</p>

      <p><strong>Wrong machine configuration.</strong> A load chart is specific to a particular machine setup \u2014 boom length, counterweight, jib configuration, outrigger extension. A plan that quotes a capacity from a load chart that does not match the machine that will actually be on site is not just wrong, it is dangerous. When checking, the specific machine model and its configuration must be verified against the capacity figures quoted.</p>

      <p><strong>Radius measurement errors.</strong> The working radius is measured from the centre of rotation to the centre of the load, not to the boom tip, not to the hook, and not to the nearest edge of the load. Plans frequently state a radius that is too short, making it appear that the machine has more capacity than it actually does at the true working radius.</p>

      <p><strong>No allowance for dynamic effects.</strong> Load charts give static capacities. In practice, loads swing, wind acts on large flat surfaces, and sudden stops or starts impose additional forces. A plan that uses 100% of the machine\u2019s rated capacity with no margin for these effects is not safe.</p>

      <p><strong>Percentage utilisation not stated or too high.</strong> Industry practice is to express the demand on the machine as a percentage of its rated capacity at the working radius. Most tier 1 contractors and experienced Appointed Persons work to a maximum of 80% utilisation for routine lifts. A plan showing 95% utilisation for a straightforward lift should be questioned.</p>

      <h2>Rigging Arrangement</h2>
      <p>The rigging arrangement describes how the load is connected to the lifting equipment. A check will examine whether the sling type, size, and configuration are appropriate for the load, and whether the sling angles produce forces within the rated capacity of the slings.</p>

      <p><strong>Sling angles and their effect on capacity.</strong> As sling angles become steeper, the forces in each leg increase. A two-leg sling at 60 degrees to the horizontal has significantly reduced capacity compared to the same sling at 90 degrees. Plans that ignore sling angles or assume vertical slings when the geometry clearly requires angled slings are underestimating the forces involved.</p>

      <p><strong>Inappropriate sling selection.</strong> Different loads require different sling types. Wire rope slings, chain slings, and synthetic slings each have advantages and limitations. Using a synthetic sling on a load with sharp edges, for example, requires edge protection to prevent cutting. The plan should specify the sling type and confirm its suitability.</p>

      <p><strong>Attachment points.</strong> The plan must identify where and how the slings attach to the load. Purpose-designed lifting points are ideal, but many construction loads \u2014 steel beams, timber packs, plant and equipment \u2014 do not have them. The plan must address how the load will be slung safely and remain stable during the lift.</p>

      <h2>Ground Conditions</h2>
      <p>The ground on which lifting equipment operates must support the imposed loads. This is particularly critical for mobile cranes and excavators, where outrigger or track loads can be substantial.</p>

      <p><strong>Assumed rather than assessed ground conditions.</strong> A plan that states \u201cground conditions suitable\u201d without specifying what that means or how it was determined is inadequate. What type of ground? What is its bearing capacity? Has it been affected by recent excavation, backfilling, or weather?</p>

      <p><strong>No ground bearing pressure calculation.</strong> For mobile cranes, the outrigger loads can be calculated from the manufacturer\u2019s data. These loads must be compared against the ground\u2019s bearing capacity. If the ground cannot support the loads, additional measures \u2014 timber mats, steel plates, or engineered foundations \u2014 are required. The plan must address this.</p>

      <p><strong>Proximity to excavations.</strong> Operating lifting equipment near open excavations significantly affects ground stability. The plan must identify any excavations within the zone of influence and specify appropriate standoff distances or additional support measures.</p>

      <h2>Site-Specific Hazards</h2>
      <p>Every lifting operation takes place in a specific environment with specific hazards. A plan that could apply to any site without modification is, by definition, not site-specific and therefore not LOLER compliant.</p>

      <p><strong>Overhead hazards.</strong> Power lines, building structures, other cranes, and overhead services all impose constraints on lifting operations. The plan must identify any overhead hazards within the operating envelope of the machine and specify control measures \u2014 typically minimum approach distances, barriers, or isolation of services.</p>

      <p><strong>Underground services.</strong> Heavy lifting equipment imposes significant ground loads. Operating over underground services \u2014 drainage, utilities, culverts \u2014 without knowing their location and capacity is a risk that must be addressed in the plan.</p>

      <p><strong>Adjacent activities.</strong> Construction sites are busy places. Other trades working in the area, vehicle movements, pedestrian routes, and scaffold structures all need to be considered. The plan should specify exclusion zones and coordination arrangements.</p>

      <p><strong>Weather limitations.</strong> Wind is the most significant weather factor for lifting operations, but rain, ice, fog, and lightning all impose limitations. The plan should specify maximum wind speed limits for the operation and any other weather restrictions.</p>

      <h2>Risk Assessment</h2>
      <p>The risk assessment should identify all foreseeable hazards associated with the lifting operation and specify control measures for each. A check will examine whether the risk assessment is genuinely site-specific or whether it is a generic document that has been copied from a previous plan without adaptation.</p>

      <p><strong>Generic risk assessments.</strong> The most common failing is a risk assessment that lists standard hazards \u2014 working at height, manual handling, slips and trips \u2014 without addressing the specific risks of the actual lifting operation on the actual site. A risk assessment for a 50-tonne tandem crane lift adjacent to a live railway should look fundamentally different from one for a lorry loader offloading pallets of bricks.</p>

      <p><strong>Missing hazards.</strong> Risk assessments frequently omit hazards that are obvious to anyone who has visited the site. Overhead power lines not mentioned. Adjacent excavations not considered. Public access routes not addressed. These omissions suggest that the person who wrote the plan either did not visit the site or did not look carefully enough when they did.</p>

      <h2>Method Statement</h2>
      <p>The method statement describes how the lifting operation will be carried out. A check will examine whether it provides sufficient detail for the operation to be performed safely by the people who will actually be doing the work.</p>

      <p><strong>Insufficient detail.</strong> A method statement that says \u201cthe crane will lift the load from the delivery vehicle and place it in its final position\u201d tells the reader nothing useful. A proper method statement describes the sequence of operations step by step \u2014 where the crane will be positioned, how the load will be slung, the lift path, how the load will be landed and released, and what happens at each stage.</p>

      <p><strong>Does not match the lift plan drawing.</strong> The method statement and the lift plan drawing should tell the same story. If the method statement describes a lift sequence that does not correspond to the positions, radii, and movements shown on the drawing, something is wrong.</p>

      <p><strong>No consideration of the landing operation.</strong> Many method statements focus entirely on picking up the load and say little or nothing about how it will be landed, positioned, and secured. The landing phase is often the most hazardous part of the operation \u2014 the load is being placed in its final position, often in a congested area, with limited visibility and people working nearby.</p>

      <h2>Supporting Documentation</h2>
      <p>A complete lift plan submission includes supporting documents that the checker must verify.</p>

      <p><strong>Thorough examination certificates.</strong> Under LOLER, all lifting equipment and lifting accessories must have current thorough examination certificates. The checker will confirm that certificates are in date and cover the specific equipment referenced in the plan.</p>

      <p><strong>Operator qualifications.</strong> The plan should identify the operators and confirm they hold appropriate qualifications \u2014 CPCS cards for the relevant equipment categories.</p>

      <p><strong>Insurance documentation.</strong> For contract lifts and crane hire, the checker may verify that appropriate insurance is in place.</p>

      <h2>Common Reasons Lift Plans Get Rejected</h2>
      <p>Having checked thousands of lift plans, certain patterns of failure come up repeatedly. Understanding these helps anyone involved in producing lift plans to get them right before submission.</p>

      <h3>The Copy-and-Paste Plan</h3>
      <p>This is a plan that has been copied from a previous project with minimal adaptation. The site name and date have been changed, but the content \u2014 hazards, control measures, ground conditions, and sometimes even the load details \u2014 relate to a completely different site. These plans are easy to spot because the details do not match the actual project. They are rejected immediately.</p>

      <h3>The Template Without Substance</h3>
      <p>Some plans use a professional-looking template but contain minimal actual content. The headings are all there \u2014 Load Details, Equipment Selection, Risk Assessment \u2014 but the information under each heading is vague, generic, or incomplete. \u201cLoad weight: TBC\u201d is not a load weight. \u201cGround conditions: to be confirmed on site\u201d is not a ground assessment. Plans that defer critical information to the day of the lift have not actually planned anything.</p>

      <h3>The Over-Capacity Plan</h3>
      <p>Plans where the equipment is working at or very close to its rated capacity without adequate justification. A crane at 95% utilisation with no margin for wind, dynamic effects, or minor variations in load weight is not a safe plan. These are either rejected outright or returned with a requirement to demonstrate how the operation can be carried out within acceptable margins.</p>

      <h3>The Missing-Drawing Plan</h3>
      <p>A lift plan without a clear, dimensioned drawing showing the equipment position, working radius, load path, and site layout is incomplete. The drawing is not decoration \u2014 it is an essential part of the plan that allows the checker to verify the stated radii, identify potential conflicts with site features, and understand the sequence of operations. Text alone is not sufficient for anything beyond the simplest of lifts.</p>

      <h3>The Outdated-Information Plan</h3>
      <p>Plans based on superseded drawings, old site layouts, or equipment that is no longer on site. Construction sites change constantly \u2014 what was accurate last month may not be accurate today. Plans must reflect current conditions, not historical ones.</p>

      <h2>How to Get Your Lift Plan Approved First Time</h2>
      <p>If you are submitting lift plans for checking, here are the practical steps that will improve your approval rate.</p>

      <p><strong>Verify your load weights from reliable sources.</strong> Do not estimate. Use manufacturer\u2019s data, delivery documentation, or calculation. Include the weight of all rigging and accessories in your total suspended load.</p>

      <p><strong>Use the correct load chart for the actual machine.</strong> Confirm the specific model, boom length, counterweight, and configuration. Quote the capacity at the actual working radius and express it as a percentage utilisation.</p>

      <p><strong>Visit the site.</strong> Or if you cannot visit, get current photographs, a site plan, and specific information about ground conditions, overhead hazards, underground services, and adjacent activities. Do not produce a plan for a site you have never seen.</p>

      <p><strong>Make your risk assessment site-specific.</strong> Address the actual hazards at the actual location. If there are power lines, say so and specify the control measures. If the ground is made-up or near an excavation, address it.</p>

      <p><strong>Write a method statement that someone could actually follow.</strong> Describe the operation step by step. Include the landing and load release, not just the pick.</p>

      <p><strong>Include a clear, dimensioned drawing.</strong> Show the machine position, working radius, load path, exclusion zones, and relevant site features. Ensure the drawing matches the text.</p>

      <p><strong>Include all supporting documents.</strong> Thorough examination certificates, operator qualifications, and any other documentation required by the principal contractor\u2019s procedures.</p>

      <p><strong>Check your own work before submitting.</strong> Read through the plan as if you were reviewing someone else\u2019s work. Do the numbers add up? Does the method statement match the drawing? Have you addressed the specific hazards of this site?</p>

      <h2>Per-Plan Checking vs Retained Checking Service</h2>
      <p>For contractors who need lift plans checked regularly, there are typically two service models available.</p>

      <p><strong>Per-plan checking</strong> is charged per submission and suits organisations with occasional checking requirements or specific complex lifts that need independent review. The turnaround is typically 24-48 hours, with urgent reviews available when needed.</p>

      <p><strong>A retained checking service</strong> provides ongoing lift plan review for a project or across multiple projects. This works well for principal contractors managing large sites with frequent lifting operations, where multiple subcontractors submit plans on a regular basis. A retained Appointed Person becomes familiar with the site, the equipment, and the recurring operations, which improves both the speed and quality of the checking process.</p>

      <h2>The Difference Between Lift Plan Checking and a Lifting Operations Audit</h2>
      <p>These are related but distinct services. Lift plan checking is the review of individual lift plans before operations take place \u2014 it is a pre-operation control. A <a href="/services/lifting-operations-audit">lifting operations audit</a> is a broader assessment of how lifting operations are being managed across a site or project, examining procedures, documentation, equipment condition, personnel competence, and on-site practices. Both are important, but they serve different purposes.</p>

      <h2>How RMT Solutions Can Help</h2>
      <p>RMT Solutions provides <a href="/services/lift-plan-checking">lift plan checking services</a> to tier 1 contractors across the UK. With 35 years of construction industry experience and CPCS Appointed Person (A61) qualification, we review lift plans for all equipment types \u2014 mobile cranes, tower cranes, <a href="/blog/excavator-lift-plans-complete-guide">excavators</a>, <a href="/blog/telehandler-lift-plans-complete-guide">telehandlers</a>, and <a href="/blog/lorry-loader-lift-plans-guide">lorry loaders</a>.</p>

      <p>Whether you need individual plans reviewed or an ongoing retained checking service for a major project, we deliver fast turnaround, clear and constructive feedback, and consistent standards that protect your project and your people.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need Your Lift Plans Checked?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides professional lift plan checking for tier 1 contractors across the UK. Trusted by Wates, Caddick, and GMI Construction. Fast turnaround from a CPCS Appointed Person with 35 years of experience.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote</a>
      </div>

      <p><strong>About the Author:</strong> Ricky Marsh is a CPCS Appointed Person (A61) with 35 years of construction industry experience. He holds NEBOSH National Diploma, CertIOSH, MIIRSM and TIFSM qualifications, and provides <a href="/services/lift-plan-checking">lift plan checking services</a> to tier 1 contractors across the UK through <a href="/">RMT Solutions</a>.</p>
   `,
  },
  'lifting-operations-audit-what-to-expect': {
    title: 'Lifting Operations Audit: What Auditors Check & How to Pass',
    description: 'What an independent lifting operations auditor checks — RAMS, LOLER, supervision, equipment — and the most common reasons UK sites fail.',
    keywords: 'lifting operations audit, lifting operations audit UK, lifting audit construction, LOLER audit, site lifting audit, lifting operations inspection, crane audit, lifting equipment audit, lifting safety audit, construction lifting compliance',
    category: 'Services',
    readTime: '14 min read',
    date: 'February 23, 2026',
    dateModified: 'February 23, 2026',
    image: '/images/services/lifting-operations-audit-inspection-uk.webp',
    imageAlt: 'Independent auditor observing a tower crane lifting operation from behind the exclusion zone on a UK construction site, carrying out a lifting operations audit',
    content: `
      <p class="lead">A lifting operations audit is one of the most effective tools available to principal contractors and site managers for verifying that lifting activities on their projects are being managed safely and in compliance with LOLER 1998. Yet despite the term appearing regularly in construction contracts and tender documents, there is remarkably little practical guidance available on what a lifting operations audit actually involves, what the auditor examines, and what you should do to prepare for one.</p>

      <p>This guide explains the purpose, process, and practical reality of a lifting operations audit on a UK construction site — based on 35 years of experience conducting them.</p>

      <h2>What is a Lifting Operations Audit?</h2>
      <p>A lifting operations audit is an independent, systematic assessment of how lifting activities are being planned, managed, and carried out on a construction site. It is not a thorough examination of lifting equipment under LOLER Regulation 9 — that is a separate, specific inspection. An audit looks at the entire lifting management system: the documentation, the competence of the people involved, the condition and management of equipment, and the actual practices being followed on site.</p>

      <p>The purpose is to give the principal contractor or client an objective picture of the standard of lifting operations on their project. It identifies what is being done well, where there are gaps or non-compliances, and what needs to be corrected. A good audit is not a pass-or-fail exercise — it is a diagnostic tool that highlights both strengths and areas for improvement.</p>

      <p>Most tier 1 contractors now require periodic lifting operations audits on their major projects, either through their own internal procedures or as a contractual requirement. Some clients and CDM duty holders also commission audits as part of their assurance arrangements. The frequency varies — monthly audits are common on large projects with multiple cranes and complex lifting programmes, while smaller projects may have audits at key stages or on a quarterly basis.</p>

      <h2>Why Are Lifting Operations Audits Carried Out?</h2>

      <h3>Legal Compliance</h3>
      <p><a href="/blog/what-is-loler-complete-guide">LOLER 1998</a> requires that every lifting operation is properly planned by a competent person, appropriately supervised, and carried out in a safe manner. The CDM Regulations 2015 place duties on principal contractors to plan, manage, and monitor construction work — which includes lifting operations. An audit provides documented evidence that these duties are being discharged.</p>

      <h3>Risk Management</h3>
      <p>Lifting operations remain one of the highest-risk activities on construction sites. The HSE's enforcement data consistently shows that failures in lift planning, equipment management, and competence contribute to serious incidents. An independent audit identifies problems before they result in incidents — it is a proactive measure rather than a reactive one.</p>

      <h3>Supply Chain Assurance</h3>
      <p>On major projects, the principal contractor may have multiple subcontractors carrying out lifting operations with their own equipment and personnel. An audit provides assurance that all parties are meeting the required standards, not just the main contractor's own operations. This is particularly important where subcontractors are bringing their own cranes, excavators, telehandlers, or lorry loaders onto the project.</p>

      <h3>Client and Contractual Requirements</h3>
      <p>Many clients — particularly in sectors such as infrastructure, rail, and nuclear — require independent audits of lifting operations as a condition of contract. This reflects the high consequence nature of lifting failures in these environments.</p>

      <h2>What Does a Lifting Operations Audit Cover?</h2>
      <p>A comprehensive lifting operations audit examines the full scope of lifting management on a site. The specific areas covered will vary depending on the type of project, the equipment in use, and the scope agreed with the client, but a thorough audit will typically address all of the following.</p>

      <h3>Lift Plans and Planning Documentation</h3>
      <p>This is usually the starting point for any audit. The auditor will review the lift plans that are in place for the lifting operations being carried out on site. The review covers both the quality of the plans themselves and whether they are being followed in practice.</p>

      <p>Specific checks include whether lift plans exist for all lifting operations currently taking place — not just crane lifts but also <a href="/blog/excavator-lift-plans-complete-guide">excavator lifting operations</a>, <a href="/blog/telehandler-lift-plans-complete-guide">telehandler crane duties</a>, and <a href="/blog/lorry-loader-lift-plans-guide">lorry loader operations</a>. The auditor will verify that each plan is site-specific and addresses the actual conditions, loads, and equipment on the project rather than being a generic document recycled from a previous job.</p>

      <p>Load weights, working radii, and capacity calculations are checked for accuracy. The rigging arrangements described in the plans are assessed for suitability. Ground conditions, exclusion zones, and hazard controls are reviewed against the actual site conditions. The auditor also checks whether the plans have been prepared by a competent person — typically a <a href="/blog/cpcs-appointed-person-guide">CPCS Appointed Person</a> for crane and complex operations.</p>

      <p>A common finding is that lift plans exist but have not been updated to reflect changes on site. A plan written at tender stage may not account for an excavation that has been dug adjacent to the crane position, a scaffolding tower that has been erected in the load path, or a change in the weight of the load. The audit checks for this currency and relevance.</p>

      <h3>Schedules of Common Lifts</h3>
      <p>Many sites operate under a schedule of common lifts — a document that covers repetitive, routine lifting operations such as daily materials handling with a tower crane or regular offloading with a lorry loader. The audit will check that the schedule exists, that it has been approved by an Appointed Person, and that the actual operations being carried out fall within the scope of the schedule. Operations that exceed the parameters of the schedule — heavier loads, greater radii, different equipment — must have individual lift plans, and the audit verifies this.</p>

      <h3>Lifting Team Competence</h3>
      <p>The audit examines the qualifications, training, and competence of the personnel involved in lifting operations. This typically includes checking that Appointed Persons hold current CPCS A61 certification, crane supervisors and lift supervisors hold appropriate cards, crane and plant operators have the correct CPCS or NPORS categories for the equipment they are operating, and slinger/signallers hold current A17E or equivalent certification.</p>

      <p>The auditor will request to see the lifting team profiles — the documented records that confirm each person's role, qualifications, and card expiry dates. On well-managed sites, these profiles are maintained as part of the lifting management system and are readily available. On less well-managed sites, the auditor may find that operators are working with expired cards, that people are filling roles for which they are not qualified, or that there are no records at all.</p>

      <p>Beyond formal qualifications, the auditor will assess whether the personnel demonstrate practical competence in their roles. This includes observing whether slinger/signallers are using correct hand signals, whether operators are carrying out pre-use checks, and whether lift supervisors are actively managing the operations they are responsible for.</p>

      <h3>LOLER Documentation and Thorough Examinations</h3>
      <p>Every piece of lifting equipment and every lifting accessory on site must have a current thorough examination certificate under LOLER Regulation 9. The audit checks that these certificates exist, are current, and are available on site. This applies to all equipment — cranes, telehandlers, excavators used for lifting, lorry loaders, hoists, lifting beams, slings, shackles, chains, and any other lifting accessories.</p>

      <p>The auditor will also check that LOLER reports of thorough examination have been reviewed and that any defects identified have been actioned. It is not uncommon to find that thorough examination certificates exist but that no one on site has actually read them or addressed the defects noted by the competent person.</p>

      <p>Weekly and daily inspection records for lifting equipment are also reviewed. Under LOLER and PUWER, lifting equipment must be inspected at appropriate intervals by competent persons. For tower cranes, this typically means weekly inspections recorded on a standard form. For mobile cranes, excavators, and telehandlers, daily pre-use checks should be completed and recorded by the operator.</p>

      <h3>Lifting Accessories Management</h3>
      <p>The management of lifting accessories — slings, shackles, chains, eyebolts, lifting beams, spreader bars, and similar equipment — is a frequent area of concern on audits. The auditor will check that all accessories on site are identifiable, marked with their safe working load, and have current thorough examination certificates.</p>

      <p>Storage conditions are assessed — slings should be stored off the ground, away from sharp edges, chemicals, and heat sources. Damaged or defective accessories should be quarantined and removed from service. Colour coding systems, where used, should be current and consistently applied across the site.</p>

      <p>One of the most common audit findings relates to one-use slings and accessories that are left on site after use rather than being removed or destroyed. These items can be picked up and reused by other operatives who may not realise they are no longer certified for use.</p>

      <h3>On-Site Practices and Observations</h3>
      <p>A critical component of any lifting operations audit is direct observation of lifting activities as they are being carried out. Documentation can be perfect, but what matters is what actually happens on the ground.</p>

      <p>The auditor will observe whether lifting operations are being carried out in accordance with the lift plans, whether exclusion zones are established and maintained, whether tag lines are being used where specified, whether the lifting team is communicating effectively, and whether loads are being landed safely on suitable bearers or dunnage.</p>

      <p>Common practical findings include loads being landed directly on the ground rather than on bearers, exclusion zones not being maintained with physical barriers, operatives working under suspended loads, lifting operations being carried out without a lift plan in place, and poor communication between the crane operator and slinger/signaller.</p>

      <h3>Working at Height and Edge Protection</h3>
      <p>Where lifting operations involve slinger/signallers working at height — for example on delivery vehicles, at leading edges, or on partially completed structures — the audit will check that appropriate edge protection, access equipment, and fall prevention measures are in place. This is an area where lifting operations and working at height regulations intersect, and deficiencies are common.</p>

      <h3>Crane and Plant Setup</h3>
      <p>For tower cranes, the audit may check foundation records, base condition, anti-collision system settings, and anemometer calibration. For mobile cranes, outrigger setup and ground conditions are assessed. For excavators and telehandlers being used for lifting, the auditor will verify that the machines are configured correctly for the lifting duties described in the lift plans and that operators have the specific lifting endorsements required.</p>

      <h3>Communication and Briefings</h3>
      <p>Effective communication is essential for safe lifting operations. The audit will check whether daily briefings are being conducted for the lifting team, whether toolbox talks on lifting topics are being delivered, and whether there is a clear system for communicating changes to the lifting programme — such as changes to the lift sequence, equipment substitutions, or new hazards.</p>

      <h2>How is a Lifting Operations Audit Conducted?</h2>
      <p>A typical lifting operations audit follows a structured process.</p>

      <h3>Pre-Audit Preparation</h3>
      <p>Before arriving on site, the auditor will review any previous audit reports, the site lifting management plan, and any specific areas of concern raised by the client or principal contractor. This allows the audit to be targeted and efficient.</p>

      <h3>Document Review</h3>
      <p>The auditor will spend time in the site office reviewing documentation — lift plans, thorough examination certificates, inspection records, lifting team profiles, risk assessments, method statements, and training records. This is often the most time-consuming part of the audit, particularly on large projects with multiple lifting operations.</p>

      <h3>Site Walkround and Observations</h3>
      <p>The auditor will conduct a physical inspection of the site, observing lifting operations in progress, inspecting lifting equipment and accessories, checking storage arrangements, and assessing general conditions. This is where the documentary review is compared against actual practice.</p>

      <h3>Discussions with Site Personnel</h3>
      <p>The auditor will typically speak with the crane supervisor, lift supervisor, site manager, and operatives to understand how the lifting management system works in practice. These discussions are not interrogations — they are an opportunity to understand the site's approach and identify any gaps between intended and actual practice.</p>

      <h3>Findings and Reporting</h3>
      <p>Following the audit, the auditor produces a written report detailing the findings. Findings are typically categorised by severity — critical issues that require immediate action, significant findings that should be addressed within a defined timescale, and observations or recommendations for improvement.</p>

      <p>The report provides an objective record that the principal contractor can use to demonstrate compliance, track improvements, and hold subcontractors accountable for addressing deficiencies.</p>

      <h2>Common Audit Findings</h2>
      <p>Having conducted lifting operations audits on projects ranging from small refurbishment works to major infrastructure schemes, certain findings recur with remarkable consistency.</p>

      <p>Lift plans that are not site-specific or have not been updated to reflect current conditions are the single most common finding. Closely followed by expired or missing thorough examination certificates for lifting accessories — particularly slings and shackles that are brought on and off site by subcontractors.</p>

      <p>Incomplete lifting team profiles, where the records of who holds what qualifications are not maintained or are out of date, appear on the majority of audits. Missing or inadequate daily and weekly plant inspection records are another frequent finding, as are poor storage conditions for lifting accessories.</p>

      <p>On the practical side, the most common observations are inadequate exclusion zones, inconsistent use of tag lines, and loads being landed without suitable bearers. These are all issues that can be corrected quickly once identified, which is precisely the point of the audit.</p>

      <h2>How to Prepare for a Lifting Operations Audit</h2>
      <p>If you know an audit is scheduled, there are straightforward steps you can take to ensure your site is ready.</p>

      <p>Start by checking that all lift plans are current and reflect the actual operations taking place. If site conditions have changed since the plans were written — new excavations, additional structures, changes in access routes — the plans should be updated before the audit.</p>

      <p>Gather all thorough examination certificates for every piece of lifting equipment and every lifting accessory on site. Check the dates — certificates for accessories used to lift people must be renewed every six months, and all other lifting equipment certificates must be renewed at least every twelve months. Remove any equipment with expired certificates from service.</p>

      <p>Review your lifting team profiles and confirm that every person involved in lifting operations holds the correct, current qualifications for their role. If anyone's card has expired, they should not be carrying out that role until it is renewed.</p>

      <p>Check that daily and weekly inspection records are being completed consistently. Walk the site and check that lifting accessories are stored correctly, that colour coding is current, and that there are no damaged or unidentified accessories in use.</p>

      <p>Finally, brief your team. Everyone involved in lifting operations should understand what the audit is, why it is being carried out, and what the auditor will be looking at. An audit is not something to be feared — it is an opportunity to demonstrate good practice and to identify any areas where you can improve.</p>

      <h2>Lifting Operations Audit vs Lift Plan Checking</h2>
      <p>It is worth clarifying the distinction between a lifting operations audit and a <a href="/blog/lift-plan-checking-what-gets-checked-and-why-plans-get-rejected">lift plan checking service</a>. These are complementary but different activities.</p>

      <p>Lift plan checking is the review and approval of individual lift plans before lifting operations take place. It is a pre-operational activity focused on the technical adequacy of the planning documentation.</p>

      <p>A lifting operations audit is a broader assessment of the entire lifting management system on a site — documentation, competence, equipment management, and on-site practices. It includes checking lift plans but goes well beyond them to assess whether the system as a whole is functioning effectively.</p>

      <p>Most well-managed projects use both: <a href="/services/lift-plan-checking">lift plan checking</a> as an ongoing operational control, and periodic audits as a strategic assurance measure.</p>

      <h2>How RMT Solutions Can Help</h2>
      <p>RMT Solutions provides independent <a href="/services/lifting-operations-audit">lifting operations audits</a> for principal contractors, clients, and project managers across the UK. Our audits are conducted by a CPCS Appointed Person with 35 years of construction industry experience, providing you with an objective, practitioner-level assessment of the lifting standards on your project.</p>

      <p>We audit all types of lifting operations — tower cranes, mobile cranes, excavators, telehandlers, lorry loaders, hoists, and lifting accessories — and provide clear, actionable reports that identify both compliance issues and opportunities for improvement.</p>

      <p>Whether you need a one-off audit for assurance purposes or regular audits as part of your project lifting management plan, we can help.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need a Lifting Operations Audit?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides independent lifting operations audits for UK construction projects. Conducted by a CPCS Appointed Person with 35 years of experience.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote</a>
      </div>

      <p><strong>About the Author:</strong> Ricky Marsh is a CPCS Appointed Person (A61) with 35 years of construction industry experience. He holds NEBOSH National Diploma, CertIOSH, MIIRSM and TIFSM qualifications, and provides lift planning, <a href="/services/lift-plan-checking">lift plan checking</a>, and <a href="/services/lifting-operations-audit">lifting operations audit</a> services to contractors across the UK through <a href="/">RMT Solutions</a>.</p>
    `,
  },
  'overhead-crane-lift-plan-guide': {
    title: 'Overhead Crane Lift Plans: UK Guide (BS 7121-7)',
    description: 'Do overhead, gantry and bridge cranes need a lift plan? A UK guide to LOLER and BS 7121-7 — when a generic plan is enough and when you need a written one.',
    keywords: 'overhead crane lift plan, do you need a lift plan for an overhead crane, gantry crane lift plan, EOT crane lift plan, bridge crane lift plan, factory crane lift plan, BS 7121-7, LOLER overhead crane, tandem lift overhead crane, warehouse crane lifting, jib crane lift plan',
    category: 'Lift Planning',
    readTime: '13 min read',
    date: 'May 21, 2026',
    dateModified: 'May 22, 2026',
    image: '/images/services/overhead-gantry-crane-factory-uk.webp',
    imageAlt: 'Overhead travelling bridge crane lifting a steel load inside a UK factory — overhead crane lifting operation under LOLER and BS 7121-7',
    content: `
      <p class="lead">Mobile cranes get all the attention when people talk about lift plans, but the cranes that do most of the lifting in UK industry never leave the building. Overhead travelling cranes, gantries and bridge cranes lift millions of loads every day in factories, warehouses, fabrication shops, steel stockholders and engineering workshops — and because they are fixed plant that staff use constantly, the question of whether each lift needs a written lift plan is one of the most misunderstood areas in lifting safety. This guide answers it directly: when an overhead crane lift needs a specific written plan, when a generic plan is enough, and what the law and the standards actually require.</p>

      <h2>Does an overhead crane need a lift plan?</h2>
      <p>Yes — every lifting operation carried out with an overhead crane must be planned by a competent person. This is a legal requirement under the <a href="/blog/what-is-loler-complete-guide">Lifting Operations and Lifting Equipment Regulations 1998 (LOLER)</a>, Regulation 8, which applies to all lifting equipment regardless of whether it is a mobile crane on a construction site or a fixed overhead travelling crane bolted to a factory roof. There is no exemption for fixed plant.</p>

      <p>What people really mean when they ask the question, though, is usually: "Do I need a separate, written lift plan for every single lift?" And the honest answer is no — not in the way you would for a one-off mobile crane lift. LOLER and <a href="/blog/what-is-bs-7121-complete-guide">BS 7121</a> recognise that overhead cranes are used for large volumes of repetitive, routine lifting, and the planning required must be proportionate to the risk. The key is knowing where the line falls between a routine lift that a generic plan covers and a non-routine lift that needs its own specific written plan.</p>

      <h2>What the law and standards say</h2>
      <p>The legal duty comes from LOLER 1998. Regulation 8(1) requires that every lifting operation involving lifting equipment is "properly planned by a competent person, appropriately supervised and carried out in a safe manner." That duty applies to overhead cranes exactly as it does to any other crane.</p>

      <p>The recognised means of meeting that duty for overhead cranes is <strong>BS 7121-7</strong>, the part of the BS 7121 series dealing with the safe use of overhead travelling cranes. It sits underneath the general code of practice, <a href="/blog/what-is-bs-7121-complete-guide">BS 7121-1</a>, and addresses the planning, operation, examination and maintenance issues specific to bridge, gantry and overhead cranes in industrial settings. Like the rest of BS 7121, it is not law in itself — but it is the benchmark the HSE and the courts use to judge whether a lifting operation was properly planned, so in practice it is the standard you work to.</p>

      <h2>Routine lifts vs non-routine lifts</h2>
      <p>BS 7121-7 draws a sensible distinction between two kinds of overhead-crane lifting, and getting this right is the whole answer to "do I need a lift plan?"</p>

      <h3>Routine, repetitive lifts</h3>
      <p>Where the same kind of load is lifted in the same way, along the same route, in an unchanging environment — think a fabrication shop moving similar steel sections from a cutting bay to a welding bay all day — the lifting can be covered by a <em>generic lift plan</em> backed by a documented safe system of work. The competent person plans the activity once, the controls are built into how the bay operates, operators and slingers are trained and competent, and individual lifts do not each need a fresh written plan. This is entirely legitimate and is how the overwhelming majority of factory crane lifting is managed.</p>

      <figure>
        <img src="/images/blog/overhead-crane-steel-fabrication-workshop-uk.webp" alt="An overhead travelling bridge crane on its runway rails above a roller-conveyor line in a UK steel fabrication workshop \u2014 the kind of routine, repetitive overhead crane lifting covered by a generic lift plan" width="1600" height="1067" loading="lazy" />
        <figcaption>Routine overhead-crane lifting in a fabrication shop \u2014 the same loads moving the same way along the same route \u2014 can be covered by a generic lift plan and a documented safe system of work.</figcaption>
      </figure>

      <h3>Non-routine and higher-risk lifts</h3>
      <p>As soon as a lift falls outside the routine pattern, it needs its own specific written lift plan prepared by a competent person. The common triggers are:</p>

      <p>Tandem lifts using two or more cranes; lifting over occupied production areas or walkways; heavy or awkward one-off loads approaching the crane's safe working load; machinery, die or plant installation and removal; crane maintenance and component-change lifts; lifts using spreader or lifting beams; loads with an unusual or uncertain centre of gravity; and any lift specified by your duty holder or principal contractor. For a fuller treatment of the triggers across all equipment types, see <a href="/blog/when-do-you-need-lift-plan">when do you need a lift plan</a>.</p>

      <h2>The hazards that make overhead crane planning different</h2>
      <p>Overhead crane lifting carries a different hazard profile from a mobile crane, and the plan has to reflect it.</p>

      <p><strong>Loads carried over people.</strong> Factories and warehouses are occupied. The single biggest cause of serious overhead-crane injury is a suspended load travelling over walkways, workstations or machinery. Routing the load and segregating people is central to any overhead crane plan.</p>

      <p><strong>Pendant and radio control.</strong> Many overhead cranes are operated from the floor by an operator walking with the load on a pendant or radio remote. Walking backwards, poor sightlines and complacency create crush and trip hazards that the plan and safe system of work must control.</p>

      <p><strong>Load swing, side-pulling and snatch loading.</strong> Dragging a load sideways, sudden starts and stops, or trying to free a snagged load all impose forces the crane was never rated for. The plan confirms the crane is used only for vertical lifting within its SWL.</p>

      <p><strong>Two-blocking and over-hoist.</strong> Running the hook block into the crab can overload the rope and hoist. Limit switches must be working and never defeated.</p>

      <p><strong>Tandem (twin-crane) lifts.</strong> Lifting one load on two cranes shares and shifts the load unpredictably, requires synchronised travel and hoist, and de-rates each crane. These are always high-risk and always need a specific written plan with an appointed person supervising.</p>

      <h2>Overhead, gantry, bridge or jib — does the type matter?</h2>
      <p>All of them are lifting equipment under LOLER and all are covered by BS 7121-7, but the configuration changes the planning checks. An <strong>overhead travelling (EOT) crane</strong> runs on building-mounted runway beams, so its wheel loads and end-stop forces feed into the structure. A <strong>goliath or gantry crane</strong> carries its own legs on floor or yard rails, so rail and wheel loading and pedestrian segregation dominate. A <strong>jib or pillar crane</strong> introduces slewing radius and SWL-at-reach considerations. A competent person matches the plan to the machine — which is exactly what our <a href="/services/overhead-gantry-crane-lift-plans">overhead and gantry crane lift plan service</a> does.</p>

      <h2>What a good overhead crane lift plan contains</h2>
      <p>A specific written plan for an overhead crane lift should cover the load (weight, dimensions and centre of gravity), confirmation that it stays within the crane SWL — de-rated where two cranes share it — the lifting accessories and below-the-hook devices with their WLLs, the travel route and exclusion zones with particular attention to loads over people, the roles of appointed person, supervisor, operator and slinger, and a method statement and risk assessment everyone has been briefed on. For the general anatomy of a plan, see <a href="/blog/what-is-a-lift-plan">what is a lift plan</a>.</p>

      <h2>Who is competent to plan an overhead crane lift?</h2>
      <p>LOLER requires planning by a "competent person," and for non-routine and complex overhead-crane lifts that means someone with the training and experience to act as an appointed person — typically a <a href="/blog/cpcs-appointed-person-guide">CPCS Appointed Person (A61)</a>. For routine production lifting the competent person who establishes the generic plan and safe system of work needs the appropriate level of competence for the risk, but does not need to re-plan every lift.</p>

      <h2>How RMT Solutions can help</h2>
      <p>RMT Solutions prepares <a href="/services/overhead-gantry-crane-lift-plans">overhead and gantry crane lift plans</a> for manufacturers, fabricators and facilities teams across the UK — from single workshop jib cranes to twin-crane tandem lifts in steel mills. Plans are prepared by a CPCS Appointed Person to BS 7121-7 and LOLER 1998, quoted within 4 working hours and delivered in 24–48 hours. If you already have a plan, our <a href="/services/lift-plan-checking">lift plan checking service</a> gives you an independent appointed-person review before anyone goes near a load.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need an Overhead Crane Lift Plan?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions prepares LOLER and BS 7121-7 compliant lift plans for overhead, gantry, bridge and jib cranes across the UK. Prepared by a CPCS Appointed Person with 35 years of experience.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote</a>
      </div>

      <p><strong>About the Author:</strong> Ricky Marsh is a CPCS Appointed Person (A61) with 35 years of construction industry experience. He holds NEBOSH National Diploma, CertIOSH, MIIRSM and TIFSM qualifications, and provides lift planning, <a href="/services/lift-plan-checking">lift plan checking</a>, and <a href="/services/overhead-gantry-crane-lift-plans">overhead crane lift plan</a> services to contractors and manufacturers across the UK through <a href="/">RMT Solutions</a>.</p>
    `,
  },
};

// Generate metadata for each blog post
export async function generateMetadata({ params }) {
  const post = blogPosts[params.slug];
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    };
  }

  return {
    // SEO fix (Jun 2026): `absolute` stops the root layout's '%s | RMT Solutions'
    // template appending the 16-char brand suffix to blog titles. Post titles
    // were already near the 60-char SERP limit, so the suffix was pushing every
    // one into truncation. Brand adds no value in a blog SERP snippet; the
    // keywords do. This reclaims the full ~60 chars for the title text.
    title: { absolute: post.title },
    description: post.description,
    // Per-post keywords were defined in the data but never emitted —
    // every post previously inherited the homepage keyword list. Google
    // ignores the keywords meta either way; wired through for hygiene.
    keywords: post.keywords,
    alternates: {
      canonical: `https://www.rmtsafetysolutions.com/blog/${params.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.rmtsafetysolutions.com/blog/${params.slug}`,
      images: [post.image],
      type: 'article',
    },
    // Explicit per-post X/Twitter card — previously the root layout's
    // homepage card values leaked onto every post share.
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }));
}

// FAQPage structured data — only applied to posts that are genuinely
// structured as questions and answers. Each answer is drawn faithfully
// from the body content of the post itself, so the schema accurately
// reflects what is on the page (a requirement of Google's FAQ rich-result
// guidelines). This unlocks FAQ rich results in the SERP and makes the
// Q&A content far easier for AI answer engines to quote directly.
const faqData = {
  'loler-acop-l113-explained': [
    {
      q: 'What is L113?',
      a: 'L113 — "Safe use of lifting equipment" — is the HSE’s Approved Code of Practice and guidance for LOLER 1998. It reprints each regulation with ACOP text and practical guidance, and is the default standard courts, HSE inspectors and auditors judge lifting arrangements against. It is free to download from the HSE website.',
    },
    {
      q: 'Is an ACOP legally binding?',
      a: 'Not directly, but it has special legal status. If you are prosecuted for a health and safety breach and did not follow the relevant ACOP, the court will find you at fault unless you can prove you complied with the law in another, equally effective way. Ignoring an ACOP effectively reverses the burden of proof onto you.',
    },
    {
      q: 'Does LOLER require a risk assessment?',
      a: 'The risk assessment duty comes from the Management of Health and Safety at Work Regulations 1999 rather than LOLER itself. L113 explains how they fit together: the risk assessment identifies the hazards of the lifting operation, and the LOLER Regulation 8 planning — the lift plan — sets out how those risks will be controlled. One cannot substitute for the other.',
    },
    {
      q: 'Who counts as a competent person under L113?',
      a: 'Someone with adequate practical and theoretical knowledge and experience of the lifting operations being planned. L113 deliberately names no qualification; on UK construction sites the competence is normally evidenced by the CPCS A61 Appointed Person card combined with relevant experience.',
    },
  ],
  'hse-lifting-plan-requirements': [
    {
      q: 'Does the HSE have a lifting plan template?',
      a: 'No. The HSE publishes no official lifting plan template — deliberately, because one form cannot fit operations ranging from telehandler pallet moves to complex multi-crane lifts. It enforces the standard instead: LOLER Regulation 8 planning by a competent person, judged against the L113 ACOP. The recognised document structure comes from BS 7121.',
    },
    {
      q: 'What does the HSE require for a lifting plan?',
      a: 'Evidence that the lift was properly planned by a competent person, appropriately supervised, and carried out safely. In practice that means a named competent planner, a confirmed load weight, capacity verified at the working radius in the machine’s real configuration, ground assessment, site-specific hazards addressed, and a briefed, supervised lifting team.',
    },
    {
      q: 'What happens if the HSE finds an inadequate lifting plan?',
      a: 'Options range from improvement and prohibition notices — with fee-for-intervention charged for the inspector’s time — up to criminal prosecution. Sentencing guidelines link fines to company turnover, and lifting-operation prosecutions regularly reach six and seven figures. A prohibition notice also stops the lifting work immediately.',
    },
    {
      q: 'Do HSE inspectors check lifting plans on routine visits?',
      a: 'Yes. Lifting operations are a standing priority on construction inspections. An inspector will typically ask who the Appointed Person is, examine plans for lifts underway, and compare the paperwork with what is actually happening on site — a plan that does not match the real lift is treated as evidence the planning duty was not met.',
    },
  ],
  'appointed-person-duties-responsibilities': [
    {
      q: 'What are the duties of an Appointed Person?',
      a: 'Under BS 7121-1:2016 the Appointed Person has overall control of the lifting operation. Their duties include assessing the load and site, categorising the lift as basic, standard or complex, selecting the machine and accessories, producing the lift plan and risk assessment, assessing ground conditions, appointing a competent lifting team, establishing communication, confirming LOLER thorough examination certificates, briefing the team, and reviewing the operation.',
    },
    {
      q: 'Does the Appointed Person have to be on site during the lift?',
      a: 'Not necessarily. The Appointed Person can delegate supervision of the lift to a competent lift supervisor who executes the plan on the day. What cannot be delegated is responsibility: the AP remains accountable for the planning, the categorisation, the equipment selection and the adequacy of the supervision arrangements.',
    },
    {
      q: 'What is the difference between an Appointed Person and a lift supervisor?',
      a: 'The Appointed Person plans the lifting operation and has overall control of it; the lift supervisor directs the lift on site in accordance with that plan. The AP owns the planning decisions, while the supervisor manages execution — and stops the lift if conditions no longer match the plan.',
    },
    {
      q: 'Who appoints the Appointed Person?',
      a: 'The employing organisation — the contractor responsible for the lifting operation — formally appoints a competent person to the role. In a contract lift the crane company provides the Appointed Person; in a standard crane hire or with own plant, the duty sits with the contractor doing the lifting, who can employ the competence or bring in an independent AP.',
    },
  ],
  'cpcs-a61-basic-vs-advanced': [
    {
      q: 'What is the difference between A61 Basic and A61 Advanced?',
      a: 'A61 Basic qualifies the holder to plan basic and standard lifting operations — routine single-machine lifts well within capacity in unexceptional conditions. A61 Advanced covers the full range including complex lifts: tandem and multi-crane operations, lifts over live infrastructure, heavy or awkward loads, and contract lift management. Many tier 1 contractors specify Advanced for crane work.',
    },
    {
      q: 'How long does the CPCS A61 course take?',
      a: 'Course length varies by provider and level, but Appointed Person courses typically run around a week, combining classroom theory, practical planning scenarios and the CPCS technical tests. Achieving the competence the card is meant to evidence takes longer — BS 7121 treats competence as training plus knowledge plus experience.',
    },
    {
      q: 'Can an A61 Basic holder plan a mobile crane lift?',
      a: 'Yes, if the operation is genuinely a basic or standard lift — a single crane, comfortably within capacity, no complicating site factors. Once the lift is complex (tandem lifting, lifting over occupied areas, near-capacity loads, restricted sites), it falls to an A61 Advanced holder with appropriate experience.',
    },
    {
      q: 'How do you verify a CPCS A61 card?',
      a: 'CPCS cards carry the category and level, and can be checked through the official CPCS card checking service. When reviewing a lift plan, checking the author’s card level against the lift category is a standard step — a complex lift planned by a Basic card holder is a common reason plans get rejected.',
    },
  ],
  'do-you-need-an-appointed-person': [
    {
      q: 'What is an appointed person in construction?',
      a: 'The Appointed Person is the individual named under BS 7121-1:2016 as having overall control of a lifting operation. They assess the load and site, categorise the lift, select the equipment, produce the lift plan and appoint the lifting team. The role is how UK construction meets the LOLER 1998 requirement for every lifting operation to be planned by a competent person.',
    },
    {
      q: 'Is an appointed person a legal requirement?',
      a: 'LOLER 1998 legally requires every lifting operation to be planned by a competent person — it does not name a job title. BS 7121, the recognised code of practice for crane operations, meets that duty through the Appointed Person role. Following BS 7121 is how contractors demonstrate LOLER compliance, so in practice crane and construction lifting needs an AP.',
    },
    {
      q: 'Can the crane operator act as the appointed person?',
      a: 'No. Operating and planning are separate roles under BS 7121 with separate competencies. The operator carries out the lift within the plan; the Appointed Person produces and owns the plan. Combining the roles removes the independent planning judgement the standard is built on.',
    },
    {
      q: 'How much does an appointed person cost?',
      a: 'It depends on how you buy the competence. An independent Appointed Person typically charges from around £200 per lift plan, with day rates for site attendance and project cover. A contract lift builds the AP into the crane package at a premium. Employing a full-time AP only makes sense with continuous lifting operations across projects.',
    },
  ],
  'generic-lift-plans': [
    {
      q: 'Are generic lift plans acceptable?',
      a: 'Only for basic, routine, repetitive lifts in consistent conditions — and even then the plan must be produced by a competent person and reviewed before use at each new site or location. BS 7121-1:2016 recognises generic plans for basic lifts; for standard and complex lifts a site-specific plan is required, and most principal contractors will reject generic paperwork outright.',
    },
    {
      q: 'What is the difference between a generic and a site-specific lift plan?',
      a: 'A generic lift plan covers a type of routine lifting operation intended to be repeated, while a site-specific lift plan addresses one particular lift: the actual load and its confirmed weight, the actual machine and configuration, the capacity at the working radius, and the real ground conditions and hazards of the site on the day.',
    },
    {
      q: 'What is a schedule of common lifts?',
      a: 'A schedule of common lifts is a structured list, produced by an Appointed Person, of the routine lift types a site expects — each with its load range, equipment, method and limits, backed by a lift plan. Lifts on the schedule can proceed under the standing plan; anything outside it needs a specific plan before it takes place.',
    },
    {
      q: 'Do generic lift plans comply with LOLER?',
      a: 'They can, but only within narrow limits. LOLER Regulation 8 requires every lifting operation to be planned by a competent person. A generic plan discharges that duty only where the lift genuinely matches the plan — same operation, equipment and conditions — and the plan has been reviewed for the specific location. Used outside those limits, a generic plan does not demonstrate compliance.',
    },
  ],
  'lift-plan-software-vs-appointed-person': [
    {
      q: 'Is there software that writes lift plans?',
      a: 'Not in the sense most people hope. Established tools such as 3D Lift Plan and manufacturer crane planners help with crane selection, load charts, 3D clearance studies, rigging drawings and outrigger loadings — but they are planning aids for a competent person, not a substitute for one. No software can discharge the LOLER 1998 duty for a lifting operation to be planned by a competent person.',
    },
    {
      q: 'Can software replace an Appointed Person?',
      a: 'No. LOLER Regulation 8 places the planning duty on a competent person, and BS 7121 names the Appointed Person as responsible for the lifting operation. Software cannot assess ground conditions, verify load information, judge site-specific hazards or take accountability for the plan — those are exactly the elements of competence the law requires.',
    },
    {
      q: 'How do you calculate a lift plan?',
      a: 'The core calculations are: gross load (load plus all rigging and hook block); capacity at radius from the machine’s load chart in its actual configuration; utilisation (gross load as a percentage of capacity at radius, typically kept under about 80% for routine lifts); ground bearing pressure under outriggers or tracks against the allowable bearing capacity; and the working load limits of every lifting accessory at the sling angles used.',
    },
    {
      q: 'How much does lift plan software cost?',
      a: 'Professional lift planning packages are typically sold on annual licences running into the low thousands of pounds, plus training time. Unless you produce plans regularly with in-house competence, a professionally written site-specific lift plan — from £200 from an independent CPCS A61 Appointed Person — is usually the more economical and legally robust route.',
    },
  ],
  'basic-standard-complex-lifts': [
    {
      q: 'What is a complex lift?',
      a: 'A complex lift is a lifting operation that falls outside normal, routine practice — for example a tandem or multiple-crane lift, a heavy or awkward load, a blind lift, lifting over people or live traffic, lifting people, or lifting on poor ground or in restricted space. It needs the fullest planning, often a site visit, and close supervision, and should be planned by an experienced Appointed Person.',
    },
    {
      q: 'What is the difference between a basic, standard and complex lift?',
      a: 'A basic lift is routine, repetitive and low-risk and can be covered by a straightforward plan. A standard lift is everyday site lifting within normal practice and needs a written, site-specific lift plan and usually a lift supervisor. A complex lift falls outside routine practice and needs the fullest planning and supervision. The category is set by the whole operation, not the size of the load alone.',
    },
    {
      q: 'What is a critical lift?',
      a: 'A critical lift is one where a failure would have serious consequences — high-value or irreplaceable loads, lifts over occupied areas or live plant, or operations where an incident would cause major harm or disruption. In UK practice a critical lift is generally treated as a complex lift and planned to the same high standard.',
    },
    {
      q: 'Who decides the lift category?',
      a: 'The competent person planning the operation — normally a CPCS A61 Appointed Person — assesses the load, equipment, site and surroundings, assigns the category, and plans accordingly. Identifying the factors that turn a seemingly simple lift into a complex one is a core part of that competence.',
    },
  ],
  'lifting-with-excavators-loler': [
    {
      q: 'Does an excavator need a LOLER thorough examination?',
      a: 'Yes, if it is used for lifting. An excavator used to lift and place loads is lifting equipment under LOLER 1998 and must have a thorough examination by a competent person, generally at least every 12 months, with the lifting accessories examined and certified too. An excavator that only digs does not need a LOLER thorough examination.',
    },
    {
      q: 'Can you legally use an excavator to lift objects?',
      a: 'Yes, provided the machine is set up for object handling and the lift is properly planned. It needs a dedicated lifting point, hose-burst check valves on the boom and dipper rams, an overload warning device or RCI, and an object-handling rating chart. Lifting from the bucket or an unrated point is not acceptable.',
    },
    {
      q: 'What is the CPA guidance on lifting with excavators?',
      a: 'The Construction Plant-hire Association publishes recognised industry guidance on using 360-degree excavators as cranes, covering the machine requirements, the competence of the people involved, and the planning expected for object-handling operations. Most principal contractors expect excavator lifting arrangements to be consistent with it, alongside LOLER 1998.',
    },
    {
      q: 'Do you need a lift plan to lift with an excavator?',
      a: 'Yes. LOLER Regulation 8 requires every lifting operation to be planned by a competent person, whether the machine is a crane or an excavator. For anything beyond the most routine handling the plan is normally produced by a CPCS A61 Appointed Person, covering the load, the object-handling capacity at the working radius, the accessories, the ground and the roles on site.',
    },
  ],
  'crane-lift-plan-requirements': [
    {
      q: 'What is a crane lift plan?',
      a: 'A crane lift plan is a site-specific written document that sets out how a load will be lifted and moved safely using a crane. It confirms the crane has enough rated capacity at the working radius required, describes the load and rigging, identifies the site hazards, and defines the roles of the appointed person, supervisor, operator and slinger/signaller during the operation.',
    },
    {
      q: 'Is a crane lift plan a legal requirement?',
      a: 'Yes. Regulation 8 of LOLER 1998 requires every lifting operation to be properly planned by a competent person, appropriately supervised and carried out safely. For cranes, BS 7121 is the recognised code of practice for meeting that duty. For the great majority of commercial crane lifts that planning has to be recorded as a written crane lift plan.',
    },
    {
      q: 'What must a crane lift plan include?',
      a: 'A thorough crane lift plan covers the load (weight, dimensions, centre of gravity and lifting points), the crane (make, model and configuration with capacity confirmed against the de-rated load chart at the working radius), the lifting accessories and their working load limits, the site (ground bearing, outrigger loadings, services and adjacent activities), the operation (pick and set-down positions, radius, exclusion zones and travel route), the roles and communication, and a supporting risk assessment and method statement.',
    },
    {
      q: 'Who can write a crane lift plan?',
      a: 'A crane lift plan is normally produced by a CPCS A61 Appointed Person — the competent person required under LOLER 1998 to plan lifting operations. They select the crane and accessories, verify the capacity against the load chart, assess the site-specific hazards, and produce and sign off the plan.',
    },
    {
      q: 'When is a crane lift plan required?',
      a: 'A written crane lift plan is required whenever a crane is used to lift and move a load on a commercial operation — which in practice is almost always. Even routine deliveries and standard picks need a plan; the document simply becomes shorter and simpler as the risk drops, and fuller for complex or multi-crane lifts.',
    },
  ],
  'how-to-choose-a-lift-plan-provider': [
    {
      q: 'Can I get a lift plan without hiring a crane?',
      a: 'Yes. An independent lift planning consultant writes the plan and acts as your Appointed Person without supplying any equipment, so you can get a compliant lift plan when you already have your own plant or a CPA crane hire arrangement. Crane hire companies, by contrast, usually only supply a plan as part of hiring their machine.',
    },
    {
      q: 'Is an independent appointed person cheaper than a contract lift?',
      a: 'For the planning element, usually yes. A contract lift bundles the crane, operator, crew and risk transfer into the price, so it costs more than buying just the planning competence. If you already have the equipment and only need a competent, compliant plan, an independent appointed person on a fixed fee is normally the most economical route.',
    },
    {
      q: 'What is the difference between a crane-hire appointed person and an independent one?',
      a: 'A crane-hire Appointed Person works for the company supplying the crane, so their equipment advice is tied to that fleet and the plan usually comes only with the hire. An independent Appointed Person has no equipment to sell, gives impartial advice, works with whatever plant you already have, and can objectively review plans produced by others.',
    },
    {
      q: 'How do I know a lift plan provider is competent?',
      a: 'Check that the Appointed Person holds a current CPCS A61 card, that the named person actually writes your plan, that the fee is fixed rather than open-ended, and that the plan will be specific to your site and machine rather than a generic template. Generic, non-site-specific plans are the most common reason principal contractors reject lifting documentation.',
    },
  ],
  'lifting-method-statements-rams-guide': [
    {
      q: 'What does RAMS stand for in lifting?',
      a: 'RAMS stands for Risk Assessment and Method Statement. For a lifting operation it combines the assessment of the hazards and controls with a step-by-step description of how the lift will be carried out safely, usually issued as a single document and read alongside the lift plan required under LOLER 1998.',
    },
    {
      q: 'Is a lift plan the same as a method statement?',
      a: 'No. A method statement describes how the work will be done safely in sequence; a lift plan is the specific planning document required under LOLER 1998 Regulation 8 covering the technical detail of the lift — loads, capacities, equipment configuration and rigging. On simple lifts they are often combined; on complex lifts they are separate, linked documents.',
    },
    {
      q: 'Who can write a lifting method statement?',
      a: 'It must be prepared by a competent person with the training, knowledge and experience to plan the operation, select the equipment and assess the site-specific hazards. For crane and construction lifting that is normally a CPCS A61 Appointed Person.',
    },
    {
      q: 'Do I need both a method statement and a lift plan?',
      a: 'For most commercial lifting operations, yes. The risk assessment and method statement (RAMS) set out the safe system of work, and the lift plan provides the technical lifting detail required under LOLER 1998. A principal contractor will usually expect both before lifting work begins.',
    },
  ],
  'lift-plan-cost-uk': [
    {
      q: 'How much does a lift plan cost in the UK?',
      a: 'A professional lift plan in the UK starts from £200. Simple excavator and telehandler lift plans start from £200, lorry loader (HIAB) plans from £250, and mobile crane, complex and tandem operations are quoted individually after a brief scoping call.',
    },
    {
      q: 'Why are lift plans priced as fixed fees rather than hourly?',
      a: 'A fixed fee protects the buyer. Lift planning often generates follow-up work — principal contractor comments, revised load information, equipment changes — and under an hourly arrangement each of those becomes additional billable time. A fixed price agreed up front includes the normal back-and-forth of getting a plan approved.',
    },
    {
      q: 'Does the price include a site visit?',
      a: 'For straightforward lifts with good photographs, drawings and load information, a site visit is often unnecessary and the plan is produced remotely at the lower end of the price range. Where a visit is needed — typically mobile crane work — a reputable provider includes it in the quoted fixed price rather than billing it separately.',
    },
    {
      q: 'Is a free lift plan template a substitute for a paid lift plan?',
      a: 'Only for routine, low-risk lifts completed by a competent person. LOLER 1998 Regulation 8 requires every lifting operation to be planned by a person with adequate training, knowledge and experience. For standard and complex lifts, or where a principal contractor must approve the plan, a template completed by an unqualified person will usually be rejected.',
    },
    {
      q: 'How quickly can a lift plan be delivered?',
      a: 'Standard excavator and telehandler lift plans are typically delivered within 24 to 48 hours of receiving complete project information. Mobile crane and lorry loader plans usually take 2 to 5 working days. Urgent same-day plans are achievable where the load and site information is already available.',
    },
  ],
  'what-is-bs-7121-complete-guide': [
    {
      q: 'What is BS 7121?',
      a: 'BS 7121 is the British Standard for the safe use of cranes, published by BSI. It is the recognised UK code of practice covering every aspect of crane operations including planning, equipment selection, personnel competence, communication, supervision and management. It is a family of related standards rather than a single document.',
    },
    {
      q: 'Is BS 7121 a legal requirement?',
      a: 'No. BS 7121 is a voluntary standard, not law, so failing to follow it is not in itself an offence. However, it is the recognised means of demonstrating compliance with the legal duties under LOLER 1998 and the Health and Safety at Work etc. Act 1974, which require every lifting operation to be properly planned and carried out safely.',
    },
  ],
  'what-is-a-lift-plan': [
    {
      q: 'What is a lift plan?',
      a: 'A lift plan is a documented plan for a lifting operation. It sets out how a load will be lifted safely from one position to another, identifying the equipment to be used, the risks involved and the control measures required. Under LOLER 1998, every lifting operation must be properly planned by a competent person before it takes place.',
    },
    {
      q: 'Is the CITB GC14 form mandatory for a lift plan?',
      a: 'No. The GC14 is a widely used lift plan template, but it is a tool, not a legal requirement. Other formats are equally acceptable provided they address all the necessary elements. What matters is the content and the competence of the person completing it, not the template.',
    },
    {
      q: 'Who can write a lift plan?',
      a: 'A lift plan must be prepared by a competent person. For crane and construction lifting operations this typically means a CPCS Appointed Person (A61), who has the training and experience to plan the operation, select the right equipment and assess the site-specific hazards.',
    },
    {
      q: 'Is a lifting plan the same as a lift plan?',
      a: 'Yes. "Lifting plan" and "lift plan" are used interchangeably across the UK construction industry, and you may also see "crane lift plan" or "lifting operation plan". They all refer to the same thing: the documented plan for a lifting operation required under LOLER 1998. The terminology varies, but the legal requirement and the content do not.',
    },
  ],
  'when-do-you-need-lift-plan': [
    {
      q: 'When do you need a lift plan?',
      a: 'LOLER Regulation 8 requires every lifting operation involving lifting equipment to be properly planned by a competent person, appropriately supervised and carried out in a safe manner. So every lift needs planning, but the level of detail scales with risk: simple, routine, low-risk lifts may be covered by a safe system of work, while complex or non-routine lifts need a detailed written lift plan.',
    },
    {
      q: 'What makes a lift complex?',
      a: 'A lift is generally treated as complex where factors such as the load characteristics, site conditions, equipment configuration, environmental hazards or personnel safety raise the risk. Examples include tandem lifts, lifts over occupied areas, lifts near power lines, or lifts with restricted access. Complex lifts require a detailed written plan from a CPCS Appointed Person.',
    },
    {
      q: 'Do you need a lift plan for an excavator?',
      a: 'Yes, if the excavator is being used for lifting rather than just digging. Once lifting accessories such as chains or slings are attached, it becomes lifting equipment under LOLER and requires proper planning.',
    },
    {
      q: 'When planning a lift, what is the first thing you should do?',
      a: 'Assess the load. The first step in planning any lifting operation is establishing the load’s weight, dimensions, centre of gravity and lifting points, because every other planning decision — machine selection, capacity at radius, accessories, exclusion zones — depends on it. After the load, assess the site, select the equipment, and appoint competent people.',
    },
    {
      q: 'Does the HSE provide a lifting plan template?',
      a: 'No. The HSE does not publish an official lifting plan template. Its requirement, under LOLER 1998 and the L113 Approved Code of Practice, is that every lifting operation is properly planned by a competent person, with the detail proportionate to the risk. Inspectors look for evidence of genuine site-specific planning — not a particular form.',
    },
  ],
  'what-does-a-lift-plan-checking-service-involve': [
    {
      q: 'Does every lift on site need a reviewed plan?',
      a: 'Under LOLER, every lifting operation must be planned. Whether every plan needs independent review depends on the risk profile of the project and your organisation\u2019s procedures. Many tier 1 contractors require all lift plans to be reviewed by an Appointed Person before any lifting work proceeds. The safest approach is to review everything.',
    },
    {
      q: 'Can the lift plan checker also write lift plans?',
      a: 'Yes. An Appointed Person providing a checking service can also write lift plans where required, for example for complex operations where the subcontractor does not have the competence to plan the lift themselves. However, it is good practice to maintain a separation between writing and checking where possible, so that plans receive genuinely independent review.',
    },
    {
      q: 'What qualifications should the lift plan checker have?',
      a: 'The checker must be a competent person under LOLER. For crane and construction lifting operations this means a CPCS Appointed Person (A61) as a minimum. Additional qualifications such as NEBOSH or IOSH membership demonstrate broader health and safety competence, and practical experience across different equipment types is equally important.',
    },
    {
      q: 'How quickly can lift plans be reviewed?',
      a: 'Standard turnaround is typically 24 hours for routine submissions. For urgent requirements such as unplanned lifts or programme-critical operations, same-day review can usually be arranged. The key is establishing clear communication channels and expectations at the outset.',
    },
  ],
  'what-is-loler-complete-guide': [
    {
      q: 'Do I need a lift plan for an excavator?',
      a: 'Yes, if the excavator is being used for lifting rather than just digging. Once you attach lifting accessories such as chains or slings, it becomes lifting equipment under LOLER and requires proper planning.',
    },
    {
      q: 'Who is responsible for LOLER compliance on site?',
      a: 'Ultimately, the duty holder, usually the main contractor or whoever controls the site. However, everyone involved has responsibilities, including equipment hirers, subcontractors and operatives.',
    },
    {
      q: 'How long should I keep LOLER documentation?',
      a: 'Thorough examination reports must be kept until the next examination is completed. Lift plans should be kept for the duration of the project plus a reasonable period afterwards, typically three to six months minimum.',
    },
    {
      q: 'Can I do my own lift planning?',
      a: 'Only if you are competent to do so. For complex lifts you need someone with appropriate training and qualifications, typically a CPCS Appointed Person (A61).',
    },
  ],
  'cpcs-appointed-person-guide': [
    {
      q: 'What is a CPCS A61 Appointed Person?',
      a: 'A CPCS A61 Appointed Person is the individual designated under LOLER 1998 Regulation 8 to plan a lifting operation, select the equipment and personnel, prepare the lift plan and ensure the lift is properly supervised. The CPCS A61 card is the UK industry-recognised qualification demonstrating that the holder is competent to fulfil the role under BS 7121.',
    },
    {
      q: 'What is the difference between A61 Basic and A61 Advanced?',
      a: 'A61 Basic qualifies the holder to plan routine lifts with mobile cranes, excavators, telehandlers and lorry loaders — covering standard and most basic lifts as defined in BS 7121-1. A61 Advanced extends competence to tower cranes, tandem lifts, complex lifts and operations requiring detailed engineering calculation. Any lift classified as complex under BS 7121 should be planned by an A61 Advanced holder.',
    },
    {
      q: 'When do you legally need a CPCS Appointed Person?',
      a: 'LOLER 1998 Regulation 8 requires every lifting operation to be properly planned by a competent person. On UK construction sites, BS 7121-1 sets out that an Appointed Person should plan the lift whenever there is risk to persons, specialist knowledge is required, mobile or tower cranes are involved, or multiple lifts are planned as part of a project. In practice this applies to almost every commercial lifting operation.',
    },
    {
      q: 'Do I need an in-house Appointed Person or can I contract one in?',
      a: 'Both are valid. Many contractors use a hybrid approach — an in-house Appointed Person for routine work and a contracted CPCS A61 for complex operations, peak demand or independent lift plan review. Contracting brings specialist expertise without the overhead of a permanent in-house role and is often used by tier 1 contractors for high-risk or non-standard lifts.',
    },
    {
      q: 'How do you choose the right CPCS Appointed Person?',
      a: 'Look for a valid CPCS A61 card (blue or red), the right level for your operation (Basic vs Advanced), relevant sector experience for your project type, clear communication, and a proactive approach to safety. Ask for examples of lift plans they have written and check that they understand the specific equipment and environment your project involves.',
    },
  ],
};

// Related articles — same-category posts first (excluding the current
// post), then the most recently updated of the rest. Surfacing three real
// posts here (rather than a bare "view all" link) cross-links the blog
// internally: every post passes link equity to — and pulls readers into —
// its closest siblings. The list derives from the existing post data, so
// it maintains itself as posts are added. (SEO round 3, Jun 2026.)
function getRelatedPosts(currentSlug) {
  const current = blogPosts[currentSlug];
  const others = Object.entries(blogPosts).filter(([slug]) => slug !== currentSlug);
  const byFreshness = (a, b) =>
    new Date(b[1].dateModified || b[1].date) - new Date(a[1].dateModified || a[1].date);
  const sameCategory = others
    .filter(([, p]) => p.category === current.category)
    .sort(byFreshness);
  const rest = others
    .filter(([, p]) => p.category !== current.category)
    .sort(byFreshness);
  return [...sameCategory, ...rest].slice(0, 3);
}

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(params.slug);

  // FAQPage JSON-LD — rendered only for posts present in faqData above.
  const postFaqs = faqData[params.slug];
  // Some posts hand-write a "Common Questions" block in their body HTML; for
  // those we keep schema only and skip the rendered block below to avoid a
  // duplicate Q&A section. Every other FAQ post gets a visible FAQ section so
  // the answers appear on-page (PAA / featured-snippet capture) and the schema
  // matches visible content.
  const POSTS_WITH_INLINE_FAQ = new Set(['what-does-a-lift-plan-checking-service-involve'])
  const showVisibleFaqs = postFaqs && !POSTS_WITH_INLINE_FAQ.has(params.slug)
  const faqJsonLd = postFaqs
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: postFaqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }
    : null;

  // BlogPosting / Article structured data — Google uses this for article rich
  // results (author, date, reading time inline with the search snippet).
  //
  // Round-3 SEO fixes applied:
  //   - dateModified falls back to date but is now a separate field, so
  //     individual posts can be marked as revised without touching their
  //     original publication date. Google reads dateModified as a
  //     freshness signal independent of datePublished.
  //   - publisher.logo now references a proper 600x60 PNG at
  //     /images/rmt-logo-publisher.png (was /favicon.svg, which is too
  //     small and SVG-format — does not satisfy Article schema guidance).
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: [`https://www.rmtsafetysolutions.com${post.image}`],
    datePublished: new Date(post.date).toISOString(),
    dateModified: new Date(post.dateModified || post.date).toISOString(),
    author: {
      '@type': 'Person',
      name: 'Ricky Marsh',
      jobTitle: 'CPCS Appointed Person (A61)',
      url: 'https://www.rmtsafetysolutions.com/about',
    },
    publisher: {
      '@type': 'Organization',
      name: 'RMT Solutions Ltd',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.rmtsafetysolutions.com/images/rmt-logo-publisher.png',
        width: 600,
        height: 60,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.rmtsafetysolutions.com/blog/${params.slug}`,
    },
    articleSection: post.category,
    keywords: post.keywords,
  };

  // BreadcrumbList JSON-LD — Home > Blog > {Category} > {Post}. Mirrors
  // the visible breadcrumb nav and unlocks breadcrumb display in mobile
  // SERPs. Also matches the structural-data depth on /about, /contact
  // and /locations/[slug].
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.rmtsafetysolutions.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.rmtsafetysolutions.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.rmtsafetysolutions.com/blog/${params.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}

      {/* Hero Section */}
      <article className="relative pt-32 pb-20">
        <div className="absolute inset-0 bg-slate-900">
          <div className="absolute inset-0 construction-pattern"></div>
          <div className="absolute inset-0 grid-bg"></div>
        </div>
        <div className="hero-overlay absolute inset-0"></div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm">
            <Link href="/" className="text-gray-400 hover:text-amber-400 transition">
              Home
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <Link href="/blog" className="text-gray-400 hover:text-amber-400 transition">
              Blog
            </Link>
            <span className="text-gray-600 mx-2">/</span>
            <span className="text-gray-500">{post.category}</span>
          </nav>

          {/* Category Badge */}
          <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full inline-block mb-6">
            {post.category}
          </span>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-6 text-gray-400 text-sm mb-8">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {/* Freshness display (SEO round 3): when a post has been
                  revised, surface the revision date — it matches the
                  dateModified already emitted in the BlogPosting schema,
                  and a current date in the SERP snippet measurably helps
                  click-through vs a months-old publish date. */}
              <span>
                {post.dateModified && post.dateModified !== post.date
                  ? `Updated ${post.dateModified}`
                  : post.date}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span>Ricky Marsh</span>
            </div>
          </div>

          {/* Featured Image — Next.js Image with priority so the article
              hero is preloaded (it is virtually always the LCP element on
              a content page), explicit width/height reserves layout
              space (CLS protection), and the alt falls back to a
              constructed sentence if the post lacks an imageAlt field. */}
          <div className="rounded-3xl overflow-hidden mb-12 relative w-full aspect-[3/2]">
            <Image
              src={post.image}
              alt={post.imageAlt || `Featured image for ${post.title}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* FAQ — visible Q&A rendered from the same faqData that powers the
              FAQPage schema, so the answers appear on the page (Google rewards
              visible FAQ content and can surface it in "People also ask").
              Skipped for posts that already include a Common Questions block. */}
          {showVisibleFaqs && (
            <section className="mt-16" aria-label="Frequently asked questions">
              <h2 className="font-display text-3xl font-bold text-white mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
                {postFaqs.map((item) => (
                  <div
                    key={item.q}
                    className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 sm:p-7"
                  >
                    <h3 className="font-display text-lg sm:text-xl font-bold text-white mb-2">
                      {item.q}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Author Bio */}
          <div className="mt-16 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-slate-900 font-display font-bold text-3xl">R</span>
              </div>
              <div>
                <h3 className="text-white font-display text-xl font-bold mb-2">Ricky Marsh</h3>
                <p className="text-gray-400 text-sm mb-4">
                  CPCS Appointed Person (A61, Reg: 40389279) | NEBOSH National Diploma | CertIOSH | MIIRSM | TIFSM
                </p>
                <p className="text-gray-400 text-sm">
                  With 35 years of construction industry experience, Ricky provides expert lift planning and compliance services to contractors across the UK. Specializing in LOLER compliant lift plans, tower crane contracts, and steel erection planning.
                </p>
              </div>
            </div>
          </div>

          {/* Inline quote form — conversion fix (Jun 2026): blog posts carry
              most of the site's search traffic but previously had no enquiry
              form. One form here covers every post via the shared template. */}
          <div className="mt-12">
            <InlineQuoteForm
              serviceName={`Blog — ${post.title}`}
              heading="Need a lift plan written? Plans from £200, 24-48h turnaround"
            />
          </div>

          {/* Share Buttons */}
          <div className="mt-12 flex items-center justify-between">
            <Link href="/blog" className="text-amber-400 hover:text-amber-300 transition flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Articles — three real posts (same category first) instead
          of a bare "view all" link. Adds ~40 contextual internal links
          across the blog from the existing post data. (SEO round 3) */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <h2 className="font-display text-3xl font-bold text-white">More Articles</h2>
            <Link href="/blog" className="text-amber-400 hover:text-amber-300 transition text-sm whitespace-nowrap">
              View all articles →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map(([slug, related]) => (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="group bg-slate-800/50 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-amber-500/50 transition flex flex-col"
              >
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src={related.image}
                    alt={related.imageAlt || `Featured image for ${related.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 384px"
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-amber-400 text-xs font-semibold">{related.category}</span>
                  <h3 className="text-white font-display text-lg font-bold mt-2 mb-3 leading-snug group-hover:text-amber-400 transition">
                    {related.title}
                  </h3>
                  <p className="text-gray-400 text-sm flex-1">{related.description}</p>
                  <span className="text-gray-500 text-xs mt-4">{related.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
