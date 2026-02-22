// ============================================================
// INSTRUCTIONS:
// 1. Save this file as "add-blog-post.js" in your project root
// 2. Open terminal in your project root
// 3. Run: node add-blog-post.js
// 4. It will update app/blog/[slug]/page.js automatically
// 5. Then: git add . && git commit -m "Add lift plan checking blog post" && git push
// ============================================================

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'app', 'blog', '[slug]', 'page.js');

// Read current file
let content = fs.readFileSync(filePath, 'utf8');

// The new blog post entry to insert
const newEntry = `
  'lift-plan-checking-what-gets-checked-and-why-plans-get-rejected': {
    title: 'Lift Plan Checking: What Gets Checked, Why Plans Get Rejected, and How to Get Yours Right First Time',
    description: 'What actually gets checked during a lift plan review? Learn what causes lift plans to fail, common rejection reasons, and how to get your plans approved first time from an Appointed Person with 35 years of experience.',
    keywords: 'lift plan checking, lift plan review, lift plan checker, independent lift plan review, lift plan rejected, lift plan checking service, common lift plan mistakes, LOLER lift plan check, lift plan compliance, who checks lift plans, lift plan approval',
    category: 'Services',
    readTime: '12 min read',
    date: 'February 22, 2026',
    image: '/images/precast-concrete-lift.webp',
    content: \`
      <p class="lead">A lift plan that looks complete can still be fundamentally wrong. Over 35 years reviewing lift plans for tier 1 contractors across the UK, I have seen the same problems appear thousands of times \\u2014 plans that tick every box on the form but would not actually keep anyone safe on site. Plans where the numbers do not add up. Plans where the person who wrote them clearly never visited the site. Plans that would pass a cursory glance but fall apart the moment you start checking the detail.</p>

      <p>Lift plan checking is one of the most important \\u2014 and most overlooked \\u2014 parts of managing lifting operations on a construction site. This guide explains what lift plan checking actually involves, why it matters, what causes plans to fail, and how to make sure yours pass first time.</p>

      <h2>What is Lift Plan Checking?</h2>
      <p>Lift plan checking is the independent review of a lift plan by a competent person \\u2014 typically a <a href="/blog/cpcs-appointed-person-guide">CPCS Appointed Person</a> \\u2014 before the lifting operation takes place. The purpose is to verify that the plan is technically correct, that the calculations work, that the equipment is suitable, and that the risks have been properly identified and controlled.</p>

      <p>This is distinct from writing a lift plan. The person checking the plan did not produce it. They are reviewing someone else\\u2019s work with fresh eyes and professional judgement. This independence is what gives the process its value \\u2014 it catches errors, omissions, and assumptions that the original planner may have missed or taken for granted.</p>

      <p>On most major construction projects in the UK, particularly those managed by tier 1 contractors, every lift plan submitted by subcontractors must be checked and approved by the principal contractor\\u2019s Appointed Person before any lifting can take place. This is not just good practice \\u2014 it is how competent contractors discharge their duties under <a href="/blog/what-is-loler-complete-guide">LOLER</a> and CDM.</p>

      <h2>Why Does Lift Plan Checking Matter?</h2>

      <h3>The Legal Position</h3>
      <p>LOLER 1998 requires that every lifting operation is properly planned by a competent person. The regulations place duties on employers to ensure that lifting operations are carried out safely. For principal contractors on construction sites, CDM 2015 adds further duties to coordinate and manage health and safety, including the activities of subcontractors.</p>

      <p>When a subcontractor submits a lift plan for a crane lift, an excavator pick, or a lorry loader delivery, the principal contractor cannot simply accept it at face value. They have a duty to satisfy themselves that the plan is adequate. Independent checking by a qualified Appointed Person is how they meet that duty.</p>

      <p>If a lifting incident occurs and the subsequent investigation reveals that a deficient lift plan was accepted without proper review, the principal contractor faces significant legal exposure \\u2014 regardless of who actually wrote the plan.</p>

      <h3>The Practical Reality</h3>
      <p>The quality of lift plans submitted on UK construction sites varies enormously. Some are produced by experienced Appointed Persons with detailed knowledge of the equipment, the regulations, and the site conditions. Others are produced by people who mean well but lack the technical competence to plan the lift properly. Some are template documents with minimal site-specific content. A few are essentially works of fiction.</p>

      <p>Without independent checking, there is no way to distinguish between a robust, well-considered plan and one that looks professional but contains fundamental errors. The checking process is the safety net that catches problems before they reach the site.</p>

      <h3>What the Checking Process Actually Involves</h3>
      <p>A proper lift plan check is not a box-ticking exercise. It is a technical review that examines whether the plan would actually work safely in practice. Here is what an experienced Appointed Person looks at when reviewing a submitted lift plan.</p>

      <h2>Load Information</h2>
      <p>The first thing to verify is the weight of the load. This sounds basic, but incorrect load weights are by far the most common error in lift plans submitted for review. The problems include:</p>

      <p><strong>Estimated weights rather than verified weights.</strong> A plan that states \\u201cload weight approximately 2.5 tonnes\\u201d is not adequate. The word \\u201capproximately\\u201d in a lift plan should raise immediate concerns. Load weights must be established from reliable sources \\u2014 manufacturer\\u2019s data, delivery documentation, engineering drawings, or direct calculation.</p>

      <p><strong>Omitted rigging weight.</strong> The total suspended load includes everything below the hook \\u2014 the load itself plus all slings, shackles, spreader beams, lifting frames, and any other accessories. A plan that states the load weight but does not account for the rigging is understating the actual demand on the machine. On a heavy lift with a complex rigging arrangement, the rigging alone can weigh several hundred kilograms.</p>

      <p><strong>Weights taken from outdated information.</strong> Loads change. A precast unit that weighed 3.2 tonnes on the drawing may weigh 3.8 tonnes by the time it arrives on site if the specification has been revised. Delivery weights must be confirmed, not assumed from old data.</p>

      <p><strong>No consideration of retained water or other variables.</strong> Hollow steel sections, concrete products stored outdoors, and vessels or tanks can retain water that significantly increases the actual weight. A competent lift plan addresses this possibility.</p>

      <h2>Equipment Selection and Capacity</h2>
      <p>The plan must demonstrate that the selected machine can handle the load at the required radius with an appropriate safety margin. This is where many plans fail, because the person writing them either does not understand load charts or has used the wrong one.</p>

      <p><strong>Wrong machine configuration.</strong> A load chart is specific to a particular machine setup \\u2014 boom length, counterweight, jib configuration, outrigger extension. A plan that quotes a capacity from a load chart that does not match the machine that will actually be on site is not just wrong, it is dangerous. When checking, the specific machine model and its configuration must be verified against the capacity figures quoted.</p>

      <p><strong>Radius measurement errors.</strong> The working radius is measured from the centre of rotation to the centre of the load, not to the boom tip, not to the hook, and not to the nearest edge of the load. Plans frequently state a radius that is too short, making it appear that the machine has more capacity than it actually does at the true working radius.</p>

      <p><strong>No allowance for dynamic effects.</strong> Load charts give static capacities. In practice, loads swing, wind acts on large flat surfaces, and sudden stops or starts impose additional forces. A plan that uses 100% of the machine\\u2019s rated capacity with no margin for these effects is not safe.</p>

      <p><strong>Percentage utilisation not stated or too high.</strong> Industry practice is to express the demand on the machine as a percentage of its rated capacity at the working radius. Most tier 1 contractors and experienced Appointed Persons work to a maximum of 80% utilisation for routine lifts. A plan showing 95% utilisation for a straightforward lift should be questioned.</p>

      <h2>Rigging Arrangement</h2>
      <p>The rigging arrangement describes how the load is connected to the lifting equipment. A check will examine whether the sling type, size, and configuration are appropriate for the load, and whether the sling angles produce forces within the rated capacity of the slings.</p>

      <p><strong>Sling angles and their effect on capacity.</strong> As sling angles become steeper, the forces in each leg increase. A two-leg sling at 60 degrees to the horizontal has significantly reduced capacity compared to the same sling at 90 degrees. Plans that ignore sling angles or assume vertical slings when the geometry clearly requires angled slings are underestimating the forces involved.</p>

      <p><strong>Inappropriate sling selection.</strong> Different loads require different sling types. Wire rope slings, chain slings, and synthetic slings each have advantages and limitations. Using a synthetic sling on a load with sharp edges, for example, requires edge protection to prevent cutting. The plan should specify the sling type and confirm its suitability.</p>

      <p><strong>Attachment points.</strong> The plan must identify where and how the slings attach to the load. Purpose-designed lifting points are ideal, but many construction loads \\u2014 steel beams, timber packs, plant and equipment \\u2014 do not have them. The plan must address how the load will be slung safely and remain stable during the lift.</p>

      <h2>Ground Conditions</h2>
      <p>The ground on which lifting equipment operates must support the imposed loads. This is particularly critical for mobile cranes and excavators, where outrigger or track loads can be substantial.</p>

      <p><strong>Assumed rather than assessed ground conditions.</strong> A plan that states \\u201cground conditions suitable\\u201d without specifying what that means or how it was determined is inadequate. What type of ground? What is its bearing capacity? Has it been affected by recent excavation, backfilling, or weather?</p>

      <p><strong>No ground bearing pressure calculation.</strong> For mobile cranes, the outrigger loads can be calculated from the manufacturer\\u2019s data. These loads must be compared against the ground\\u2019s bearing capacity. If the ground cannot support the loads, additional measures \\u2014 timber mats, steel plates, or engineered foundations \\u2014 are required. The plan must address this.</p>

      <p><strong>Proximity to excavations.</strong> Operating lifting equipment near open excavations significantly affects ground stability. The plan must identify any excavations within the zone of influence and specify appropriate standoff distances or additional support measures.</p>

      <h2>Site-Specific Hazards</h2>
      <p>Every lifting operation takes place in a specific environment with specific hazards. A plan that could apply to any site without modification is, by definition, not site-specific and therefore not LOLER compliant.</p>

      <p><strong>Overhead hazards.</strong> Power lines, building structures, other cranes, and overhead services all impose constraints on lifting operations. The plan must identify any overhead hazards within the operating envelope of the machine and specify control measures \\u2014 typically minimum approach distances, barriers, or isolation of services.</p>

      <p><strong>Underground services.</strong> Heavy lifting equipment imposes significant ground loads. Operating over underground services \\u2014 drainage, utilities, culverts \\u2014 without knowing their location and capacity is a risk that must be addressed in the plan.</p>

      <p><strong>Adjacent activities.</strong> Construction sites are busy places. Other trades working in the area, vehicle movements, pedestrian routes, and scaffold structures all need to be considered. The plan should specify exclusion zones and coordination arrangements.</p>

      <p><strong>Weather limitations.</strong> Wind is the most significant weather factor for lifting operations, but rain, ice, fog, and lightning all impose limitations. The plan should specify maximum wind speed limits for the operation and any other weather restrictions.</p>

      <h2>Risk Assessment</h2>
      <p>The risk assessment should identify all foreseeable hazards associated with the lifting operation and specify control measures for each. A check will examine whether the risk assessment is genuinely site-specific or whether it is a generic document that has been copied from a previous plan without adaptation.</p>

      <p><strong>Generic risk assessments.</strong> The most common failing is a risk assessment that lists standard hazards \\u2014 working at height, manual handling, slips and trips \\u2014 without addressing the specific risks of the actual lifting operation on the actual site. A risk assessment for a 50-tonne tandem crane lift adjacent to a live railway should look fundamentally different from one for a lorry loader offloading pallets of bricks.</p>

      <p><strong>Missing hazards.</strong> Risk assessments frequently omit hazards that are obvious to anyone who has visited the site. Overhead power lines not mentioned. Adjacent excavations not considered. Public access routes not addressed. These omissions suggest that the person who wrote the plan either did not visit the site or did not look carefully enough when they did.</p>

      <h2>Method Statement</h2>
      <p>The method statement describes how the lifting operation will be carried out. A check will examine whether it provides sufficient detail for the operation to be performed safely by the people who will actually be doing the work.</p>

      <p><strong>Insufficient detail.</strong> A method statement that says \\u201cthe crane will lift the load from the delivery vehicle and place it in its final position\\u201d tells the reader nothing useful. A proper method statement describes the sequence of operations step by step \\u2014 where the crane will be positioned, how the load will be slung, the lift path, how the load will be landed and released, and what happens at each stage.</p>

      <p><strong>Does not match the lift plan drawing.</strong> The method statement and the lift plan drawing should tell the same story. If the method statement describes a lift sequence that does not correspond to the positions, radii, and movements shown on the drawing, something is wrong.</p>

      <p><strong>No consideration of the landing operation.</strong> Many method statements focus entirely on picking up the load and say little or nothing about how it will be landed, positioned, and secured. The landing phase is often the most hazardous part of the operation \\u2014 the load is being placed in its final position, often in a congested area, with limited visibility and people working nearby.</p>

      <h2>Supporting Documentation</h2>
      <p>A complete lift plan submission includes supporting documents that the checker must verify.</p>

      <p><strong>Thorough examination certificates.</strong> Under LOLER, all lifting equipment and lifting accessories must have current thorough examination certificates. The checker will confirm that certificates are in date and cover the specific equipment referenced in the plan.</p>

      <p><strong>Operator qualifications.</strong> The plan should identify the operators and confirm they hold appropriate qualifications \\u2014 CPCS cards for the relevant equipment categories.</p>

      <p><strong>Insurance documentation.</strong> For contract lifts and crane hire, the checker may verify that appropriate insurance is in place.</p>

      <h2>Common Reasons Lift Plans Get Rejected</h2>
      <p>Having checked thousands of lift plans, certain patterns of failure come up repeatedly. Understanding these helps anyone involved in producing lift plans to get them right before submission.</p>

      <h3>The Copy-and-Paste Plan</h3>
      <p>This is a plan that has been copied from a previous project with minimal adaptation. The site name and date have been changed, but the content \\u2014 hazards, control measures, ground conditions, and sometimes even the load details \\u2014 relate to a completely different site. These plans are easy to spot because the details do not match the actual project. They are rejected immediately.</p>

      <h3>The Template Without Substance</h3>
      <p>Some plans use a professional-looking template but contain minimal actual content. The headings are all there \\u2014 Load Details, Equipment Selection, Risk Assessment \\u2014 but the information under each heading is vague, generic, or incomplete. \\u201cLoad weight: TBC\\u201d is not a load weight. \\u201cGround conditions: to be confirmed on site\\u201d is not a ground assessment. Plans that defer critical information to the day of the lift have not actually planned anything.</p>

      <h3>The Over-Capacity Plan</h3>
      <p>Plans where the equipment is working at or very close to its rated capacity without adequate justification. A crane at 95% utilisation with no margin for wind, dynamic effects, or minor variations in load weight is not a safe plan. These are either rejected outright or returned with a requirement to demonstrate how the operation can be carried out within acceptable margins.</p>

      <h3>The Missing-Drawing Plan</h3>
      <p>A lift plan without a clear, dimensioned drawing showing the equipment position, working radius, load path, and site layout is incomplete. The drawing is not decoration \\u2014 it is an essential part of the plan that allows the checker to verify the stated radii, identify potential conflicts with site features, and understand the sequence of operations. Text alone is not sufficient for anything beyond the simplest of lifts.</p>

      <h3>The Outdated-Information Plan</h3>
      <p>Plans based on superseded drawings, old site layouts, or equipment that is no longer on site. Construction sites change constantly \\u2014 what was accurate last month may not be accurate today. Plans must reflect current conditions, not historical ones.</p>

      <h2>How to Get Your Lift Plan Approved First Time</h2>
      <p>If you are submitting lift plans for checking, here are the practical steps that will improve your approval rate.</p>

      <p><strong>Verify your load weights from reliable sources.</strong> Do not estimate. Use manufacturer\\u2019s data, delivery documentation, or calculation. Include the weight of all rigging and accessories in your total suspended load.</p>

      <p><strong>Use the correct load chart for the actual machine.</strong> Confirm the specific model, boom length, counterweight, and configuration. Quote the capacity at the actual working radius and express it as a percentage utilisation.</p>

      <p><strong>Visit the site.</strong> Or if you cannot visit, get current photographs, a site plan, and specific information about ground conditions, overhead hazards, underground services, and adjacent activities. Do not produce a plan for a site you have never seen.</p>

      <p><strong>Make your risk assessment site-specific.</strong> Address the actual hazards at the actual location. If there are power lines, say so and specify the control measures. If the ground is made-up or near an excavation, address it.</p>

      <p><strong>Write a method statement that someone could actually follow.</strong> Describe the operation step by step. Include the landing and load release, not just the pick.</p>

      <p><strong>Include a clear, dimensioned drawing.</strong> Show the machine position, working radius, load path, exclusion zones, and relevant site features. Ensure the drawing matches the text.</p>

      <p><strong>Include all supporting documents.</strong> Thorough examination certificates, operator qualifications, and any other documentation required by the principal contractor\\u2019s procedures.</p>

      <p><strong>Check your own work before submitting.</strong> Read through the plan as if you were reviewing someone else\\u2019s work. Do the numbers add up? Does the method statement match the drawing? Have you addressed the specific hazards of this site?</p>

      <h2>Per-Plan Checking vs Retained Checking Service</h2>
      <p>For contractors who need lift plans checked regularly, there are typically two service models available.</p>

      <p><strong>Per-plan checking</strong> is charged per submission and suits organisations with occasional checking requirements or specific complex lifts that need independent review. The turnaround is typically 24-48 hours, with urgent reviews available when needed.</p>

      <p><strong>A retained checking service</strong> provides ongoing lift plan review for a project or across multiple projects. This works well for principal contractors managing large sites with frequent lifting operations, where multiple subcontractors submit plans on a regular basis. A retained Appointed Person becomes familiar with the site, the equipment, and the recurring operations, which improves both the speed and quality of the checking process.</p>

      <h2>The Difference Between Lift Plan Checking and a Lifting Operations Audit</h2>
      <p>These are related but distinct services. Lift plan checking is the review of individual lift plans before operations take place \\u2014 it is a pre-operation control. A <a href="/services/lifting-operations-audit">lifting operations audit</a> is a broader assessment of how lifting operations are being managed across a site or project, examining procedures, documentation, equipment condition, personnel competence, and on-site practices. Both are important, but they serve different purposes.</p>

      <h2>How RMT Solutions Can Help</h2>
      <p>RMT Solutions provides <a href="/services/lift-plan-checking">lift plan checking services</a> to tier 1 contractors across the UK. With 35 years of construction industry experience and CPCS Appointed Person (A61) qualification, we review lift plans for all equipment types \\u2014 mobile cranes, tower cranes, <a href="/blog/excavator-lift-plans-complete-guide">excavators</a>, <a href="/blog/telehandler-lift-plans-complete-guide">telehandlers</a>, and <a href="/blog/lorry-loader-lift-plans-guide">lorry loaders</a>.</p>

      <p>Whether you need individual plans reviewed or an ongoing retained checking service for a major project, we deliver fast turnaround, clear and constructive feedback, and consistent standards that protect your project and your people.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need Your Lift Plans Checked?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides professional lift plan checking for tier 1 contractors across the UK. Trusted by Wates, Caddick, and GMI Construction. Fast turnaround from a CPCS Appointed Person with 35 years of experience.</p>
        <a href="/contact" class="btn-primary inline-block">Get a Quote</a>
      </div>

      <p><strong>About the Author:</strong> Ricky Marsh is a CPCS Appointed Person (A61) with 35 years of construction industry experience. He holds NEBOSH National Diploma and Graduate IOSH qualifications, and provides <a href="/services/lift-plan-checking">lift plan checking services</a> to tier 1 contractors across the UK through <a href="/">RMT Solutions</a>.</p>
    \`,
  },`;

// Find the insertion point - right before the closing of blogPosts object
// We'll insert after the last blog post entry (lorry-loader-lift-plans-guide)
const insertMarker = "'lorry-loader-lift-plans-guide': {";
const insertIndex = content.indexOf(insertMarker);

if (insertIndex === -1) {
  console.error("ERROR: Could not find 'lorry-loader-lift-plans-guide' entry in the file.");
  console.error("Make sure you're running this from the project root directory.");
  process.exit(1);
}

// Find the end of the lorry-loader entry - look for the pattern that closes it
// We need to find the closing `},` for that entry, which comes before the `};` closing blogPosts
// Strategy: find the `};` that closes blogPosts, and insert before it

// Find where blogPosts closes - the pattern `};\n` after all entries
// We'll look for the generateMetadata function as a landmark
const metadataMarker = '// Generate metadata for each blog post';
const metadataIndex = content.indexOf(metadataMarker);

if (metadataIndex === -1) {
  console.error("ERROR: Could not find metadata generation section.");
  process.exit(1);
}

// Find the `};` that closes blogPosts - it's the last `};` before the metadata comment
const closingBrace = content.lastIndexOf('};', metadataIndex);

if (closingBrace === -1) {
  console.error("ERROR: Could not find closing brace of blogPosts.");
  process.exit(1);
}

// Insert the new entry before the `};`
const newContent = content.slice(0, closingBrace) + newEntry + '\n' + content.slice(closingBrace);

// Write the updated file
fs.writeFileSync(filePath, newContent, 'utf8');

console.log('✅ SUCCESS! New blog post added to app/blog/[slug]/page.js');
console.log('');
console.log('Slug: lift-plan-checking-what-gets-checked-and-why-plans-get-rejected');
console.log('URL:  /blog/lift-plan-checking-what-gets-checked-and-why-plans-get-rejected');
console.log('');
console.log('Next steps:');
console.log('1. git add .');
console.log('2. git commit -m "Add lift plan checking blog post"');
console.log('3. git push');
console.log('4. Submit the new URL to Google Search Console after Vercel deploys');
