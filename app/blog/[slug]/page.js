import Link from 'next/link';
import { notFound } from 'next/navigation';

// Blog posts content
const blogPosts = {
  'what-is-loler-complete-guide': {
    title: 'What is LOLER? A Complete Guide for UK Contractors',
    description: 'Everything you need to know about LOLER regulations, compliance requirements, and why proper lift planning is essential for construction safety.',
    category: 'Compliance',
    readTime: '8 min read',
    date: 'January 28, 2026',
    image: '/images/warehouse-steel-erection.webp',
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

      <p>For lift planning, this typically means a CPCS Appointed Person who holds the A61 qualification. They have been trained to plan lifting operations, select appropriate equipment, calculate loads and capacities, and ensure operations comply with LOLER and BS 7121.</p>

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
        <li>Detailed written lift plans complying with LOLER Regulation 8</li>
        <li>Appointed Person contracts for ongoing compliance</li>
        <li>Review and checking of subcontractor lift plans</li>
        <li>Site visits and supervision where required</li>
        <li>Expert advice on equipment selection and planning</li>
      </ul>

      <h2>Common LOLER Questions</h2>

      <h3>Do I need a lift plan for an excavator?</h3>
      <p>Yes, if the excavator is being used for lifting rather than just digging. Once you attach lifting accessories (chains, slings), it becomes lifting equipment under LOLER and requires proper planning.</p>

      <h3>Who is responsible for LOLER compliance on site?</h3>
      <p>Ultimately, the duty holder—usually the main contractor or whoever controls the site. However, everyone involved has responsibilities, including equipment hirers, subcontractors, and operatives.</p>

      <h3>How long should I keep LOLER documentation?</h3>
      <p>Thorough examination reports must be kept until the next examination is completed. Lift plans should be kept for the duration of the project plus a reasonable period afterwards (typically 3-6 months minimum).</p>

      <h3>Can I do my own lift planning?</h3>
      <p>Only if you are competent to do so. For complex lifts, you need someone with appropriate training and qualifications—typically a CPCS Appointed Person A61.</p>

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
    description: 'Learn when a lift plan is legally required, what triggers LOLER compliance, and how to ensure your lifting operations are properly planned.',
    category: 'Planning',
    readTime: '6 min read',
    date: 'January 28, 2026',
    image: '/images/precast-concrete-lift.webp',
    content: `
      <p class="lead">One of the most common questions I get asked is: "Do I really need a lift plan for this?" The short answer is: yes, LOLER requires ALL lifting operations to be properly planned. But the level of planning detail varies depending on the complexity of the operation.</p>

      <h2>The Legal Requirement</h2>
      <p>LOLER Regulation 8 is crystal clear. It states that every lifting operation involving lifting equipment must be:</p>
      <ul>
        <li>Properly planned by a competent person</li>
        <li>Appropriately supervised</li>
        <li>Carried out in a safe manner</li>
      </ul>

      <p>Notice it says "every lifting operation"—not just the big ones, not just the complex ones. Every single one.</p>

      <h2>What "Properly Planned" Means</h2>
      <p>The HSE recognises that not every lift needs a 10-page written document. The planning should be proportionate to the risk. Let's break this down:</p>

      <h3>Simple, Routine Lifts</h3>
      <p>For straightforward, repetitive lifting operations that are low risk, planning might consist of:</p>
      <ul>
        <li>A toolbox talk explaining the operation</li>
        <li>Verbal instructions from a supervisor</li>
        <li>Reference to established safe systems of work</li>
        <li>Basic risk assessment</li>
      </ul>

      <p><strong>Examples:</strong> Regular pallet movements with a forklift, standard material handling with a telehandler, routine sling operations by trained staff.</p>

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

      <p>I always recommend a site visit for mobile crane work to assess ground conditions, access routes, and overhead hazards.</p>

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

      <p>For complex lifts, this typically means a <strong>CPCS Appointed Person (A61 qualification)</strong>. This is the industry-recognized standard for competence in lift planning.</p>

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
      <p>Depends on the equipment being delivered. A mini digger might be straightforward, but a 30-tonne excavator or generator definitely needs proper planning.</p>

      <h3>Scenario 4: Materials Handling on Site</h3>
      <p><strong>Need a lift plan?</strong> DEPENDS</p>
      <p>Routine materials handling with a telehandler or forklift by trained operators may only need a risk assessment and safe system of work. But anything unusual requires a proper plan.</p>

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
        <li><strong>Tower Crane Contracts:</strong> Ongoing Appointed Person support throughout your project</li>
        <li><strong>Mobile Crane Lift Plans:</strong> Including site visits and ground assessments</li>
        <li><strong>Excavator Lift Plans:</strong> Fast turnaround for pipeline and utilities work</li>
        <li><strong>Steel Erection Planning:</strong> Comprehensive planning for structural steel projects</li>
        <li><strong>Lift Plan Review:</strong> Checking subcontractor submissions for compliance</li>
      </ul>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Not Sure if You Need a Lift Plan?</h3>
        <p class="text-gray-300 mb-6">Get in touch for a free initial consultation. We'll review your requirements and advise on the best approach for LOLER compliance.</p>
        <a href="/contact" class="btn-primary inline-block">Contact Us Today</a>
      </div>
    `,
  },
  'mobile-crane-vs-tower-crane': {
    title: 'Mobile Crane vs Tower Crane: Which Should You Choose?',
    description: 'Understand the differences between mobile and tower cranes, when to use each type, and how to make the right choice for your project.',
    category: 'Equipment',
    readTime: '7 min read',
    date: 'January 28, 2026',
    image: '/images/residential-tower-crane.webp',
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

      <h3>✅ Best for:</h3>

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

      <h3>❌ Not ideal when:</h3>
      <ul>
        <li>You need continuous lifting operations over weeks/months</li>
        <li>Working in very tight spaces with no room for crane setup</li>
        <li>Ground conditions are poor (without expensive ground preparation)</li>
        <li>There's no access route for the crane to reach site</li>
        <li>Overhead power lines restrict crane movements</li>
      </ul>

      <h2>When to Use a Tower Crane</h2>

      <h3>✅ Best for:</h3>

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

      <h3>❌ Not ideal when:</h3>
      <ul>
        <li>Project duration is less than 4-6 weeks</li>
        <li>Only a few heavy lifts are required</li>
        <li>Site is too small to justify the installation cost</li>
        <li>You need to lift very heavy single items beyond tower crane capacity</li>
      </ul>

      <h2>Cost Comparison</h2>

      <h3>Mobile Cranes</h3>
      <p><strong>Typical costs (rough guide):</strong></p>
      <ul>
        <li>20-tonne mobile crane: £300-500/day</li>
        <li>50-tonne mobile crane: £600-900/day</li>
        <li>100-tonne+ all-terrain crane: £1,500-3,000/day</li>
        <li>Plus transport, setup time, and operator</li>
      </ul>

      <p><strong>One-off costs:</strong> Lift plan (£150-400), potential ground protection (£500+), traffic management if on public roads</p>

      <h3>Tower Cranes</h3>
      <p><strong>Typical costs:</strong></p>
      <ul>
        <li>Installation: £8,000-15,000</li>
        <li>Dismantling: £8,000-15,000</li>
        <li>Weekly rental: £800-1,500</li>
        <li>Operator: £600-800/week</li>
        <li>Foundation: £3,000-8,000</li>
      </ul>

      <p><strong>Ongoing costs:</strong> Appointed Person contract (£300-600/month), 8-weekly inspections (£300-500), lift plan reviews</p>

      <p><strong>Break-even point:</strong> Usually around 8-12 weeks. Beyond this, tower cranes become more economical than repeated mobile crane hires.</p>

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

      <p>Tower cranes have significantly more regulatory requirements, but these are spread over the project duration.</p>

      <h2>Practical Considerations</h2>

      <h3>Ground Conditions</h3>
      <p><strong>Mobile cranes:</strong> Need firm, level ground. Often require ground protection mats or crane pads. Poor ground = expensive preparation or bigger crane.</p>

      <p><strong>Tower cranes:</strong> Need a properly designed foundation, but once installed, ground conditions around the site matter less.</p>

      <h3>Weather Sensitivity</h3>
      <p><strong>Mobile cranes:</strong> More weather-sensitive. High winds reduce capacity and may stop work entirely. Rain affects ground conditions.</p>

      <p><strong>Tower cranes:</strong> Also affected by high winds but have specific operating wind speeds. Generally more consistent in varied weather.</p>

      <h3>Flexibility</h3>
      <p><strong>Mobile cranes:</strong> Ultimate flexibility—different crane for different lifts if needed. Can bring in specialized equipment.</p>

      <p><strong>Tower cranes:</strong> Fixed position limits some flexibility, but newer slewing and luffing cranes offer good coverage.</p>

      <h2>Real-World Examples</h2>

      <h3>Example 1: Industrial Warehouse (15,000m²)</h3>
      <p><strong>Choice:</strong> Mobile crane</p>
      <p><strong>Reason:</strong> 8-week steel erection program. One mobile crane positioned around the perimeter as steel progresses. More economical than tower crane installation for this duration.</p>

      <h3>Example 2: Residential Tower Block (18 months)</h3>
      <p><strong>Choice:</strong> Tower crane</p>
      <p><strong>Reason:</strong> Continuous lifting of concrete, formwork, rebar, and materials over 18 months. Tower crane essential for efficiency and cost control.</p>

      <h3>Example 3: Precast Car Park (12 weeks)</h3>
      <p><strong>Choice:</strong> Mobile crane</p>
      <p><strong>Reason:</strong> Heavy precast elements up to 12 tonnes, but project duration just at the break-even point. Mobile crane chosen for flexibility in positioning for each deck level.</p>

      <h3>Example 4: City Centre Office (24 months)</h3>
      <p><strong>Choice:</strong> 2 x Tower cranes</p>
      <p><strong>Reason:</strong> Restricted site, no room for mobile crane access, long project duration. Two tower cranes provide complete site coverage.</p>

      <h2>Making Your Decision</h2>
      <p>Use this decision tree:</p>

      <ol>
        <li><strong>Project duration less than 6 weeks?</strong> → Likely mobile crane</li>
        <li><strong>Project duration more than 12 weeks?</strong> → Likely tower crane</li>
        <li><strong>Between 6-12 weeks?</strong> → Depends on lift frequency and site access</li>
        <li><strong>Very heavy single lifts?</strong> → Likely mobile crane</li>
        <li><strong>Continuous daily lifting?</strong> → Likely tower crane</li>
        <li><strong>Restricted site access?</strong> → Likely tower crane</li>
        <li><strong>Good access and space?</strong> → Mobile crane viable</li>
      </ol>

      <h2>Can You Use Both?</h2>
      <p>Absolutely! Many projects use tower cranes for ongoing work and supplement with mobile cranes for specific heavy lifts. For example:</p>
      <ul>
        <li>Tower crane for daily materials handling</li>
        <li>Mobile crane to install plant on the roof</li>
        <li>Mobile crane to install the tower crane itself!</li>
      </ul>

      <h2>How RMT Solutions Can Help</h2>
      <p>Choosing the right crane is critical. We provide:</p>

      <ul>
        <li><strong>Crane Selection Advice:</strong> Independent recommendations based on your project</li>
        <li><strong>Cost-Benefit Analysis:</strong> Compare options to find the most economical solution</li>
        <li><strong>Lift Planning:</strong> Detailed plans for mobile crane operations</li>
        <li><strong>Tower Crane Contracts:</strong> Full Appointed Person support for tower crane projects</li>
        <li><strong>Hybrid Solutions:</strong> Planning for projects using both types</li>
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
    image: '/images/precast-concrete-lift.webp',
    content: `
      <p class="lead">Excavators are primarily designed for digging, but they're frequently used for lifting operations on UK construction sites. While this versatility makes them invaluable, it also creates legal obligations under LOLER 1998.</p>

      <h2>When Do You Need a Lift Plan for Excavator Operations?</h2>
      <p>Under LOLER 1998, any lifting operation must be properly planned by a competent person. For excavators, this means you need a formal lift plan whenever the machine is used to lift and move loads rather than just digging.</p>

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

      <h2>Ground Conditions for Excavator Lifting</h2>
      <p>Ground bearing capacity is critical for safe operations. An excavator under load applies significantly more pressure to the ground than during normal digging. The Appointed Person must assess soil type, proximity to excavations, and requirements for ground mats.</p>

      <h2>Supervision and Communication</h2>
      <p>Most excavator lifting operations require a trained slinger signaller who attaches the load, directs the operation using standard hand signals, and supervises safe execution.</p>

      <h2>When to Engage an Appointed Person</h2>
      <p>While simple excavator lifting operations might be planned by experienced site staff, engaging a CPCS Appointed Person provides legal compliance assurance, technical expertise, risk management, and professional documentation suitable for HSE inspection.</p>

      <div class="bg-slate-800/50 border border-amber-500/30 rounded-2xl p-8 my-12">
        <h3 class="text-amber-400 font-display text-2xl font-bold mb-4">Need an Excavator Lift Plan?</h3>
        <p class="text-gray-300 mb-6">RMT Solutions provides LOLER-compliant excavator lift plans from a CPCS Appointed Person with 35 years of construction industry experience.</p>
        <a href="/contact" class="btn-primary inline-block">Contact Us Today</a>
      </div>
    `,
  },
  'cpcs-appointed-person-guide': {
    title: 'CPCS Appointed Person: What They Do and Why You Need One',
    description: 'Understanding the CPCS Appointed Person role in UK construction. Learn what an A61 Appointed Person does, when you need one, and LOLER compliance requirements.',
    category: 'Compliance',
    readTime: '9 min read',
    date: 'January 31, 2026',
    image: '/images/mobile-crane-steel-erection.webp',
    content: `
      <p class="lead">The CPCS Appointed Person (A61) qualification is the gold standard for lifting operations planning in UK construction. This comprehensive guide explains everything contractors need to know about Appointed Persons.</p>

      <h2>What is a CPCS Appointed Person?</h2>
      <p>An Appointed Person is someone designated to plan lifting operations under LOLER 1998. The CPCS A61 card is the industry-recognized qualification demonstrating competence to fulfill this critical safety role.</p>

      <h2>CPCS A61 Qualification</h2>
      <p>The qualification is structured in two levels:</p>
      <ul>
        <li><strong>A61 Basic</strong> - Qualifies holders to plan routine lifts with mobile cranes, excavators, and telehandlers</li>
        <li><strong>A61 Advanced</strong> - Extends competence to tower cranes, tandem lifts, and complex operations requiring detailed engineering</li>
      </ul>

      <h2>When Do You Need an Appointed Person?</h2>
      <p>BS 7121-1 provides clear guidance. An Appointed Person must plan lifts when:</p>
      <ul>
        <li>Risk to persons exists from the load or equipment</li>
        <li>Specialist knowledge is required for load calculations or ground assessment</li>
        <li>Mobile cranes are used</li>
        <li>Multiple lifts are planned as part of a project</li>
      </ul>

      <p>On active construction sites, these criteria apply to almost all lifting operations.</p>

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
        <p class="text-gray-300 mb-6">RMT Solutions is run by Ricky Marsh, a CPCS Appointed Person (A61) with 35 years of construction industry experience and over 1,000 lift plans delivered.</p>
        <a href="/contact" class="btn-primary inline-block">Contact Us Today</a>
      </div>
    `,
  },
  'common-lift-planning-mistakes': {
    title: 'Common Lift Planning Mistakes (And How to Avoid Them)',
    description: 'Learn the most common lift planning mistakes UK contractors make and how to avoid them. Expert advice on LOLER compliance, safety, and professional lift planning.',
    category: 'Planning',
    readTime: '10 min read',
    date: 'January 31, 2026',
    image: '/images/warehouse-steel-erection.webp',
    content: `
      <p class="lead">After reviewing over 1,000 lift plans across 35 years in construction, certain mistakes appear repeatedly. This guide examines the most common lift planning errors and how to avoid them.</p>

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
        <p class="text-gray-300 mb-6">RMT Solutions provides LOLER-compliant lift planning from a CPCS Appointed Person with 35 years of experience. Professional planning, thorough documentation, and expert oversight.</p>
        <a href="/contact" class="btn-primary inline-block">Contact Us Today</a>
      </div>
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
    title: `${post.title} | RMT Solutions Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://www.rmtsafetysolutions.com/blog/${params.slug}`,
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

export default function BlogPost({ params }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <>
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
              <span>{post.date}</span>
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

          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden mb-12">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <div className="mt-16 bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-slate-900 font-display font-bold text-3xl">R</span>
              </div>
              <div>
                <h3 className="text-white font-display text-xl font-bold mb-2">Ricky Marsh</h3>
                <p className="text-gray-400 text-sm mb-4">
                  CPCS Appointed Person (A61) | NEBOSH National Diploma | Graduate IOSH
                </p>
                <p className="text-gray-400 text-sm">
                  With 35 years of construction industry experience, Ricky provides expert lift planning and compliance services to contractors across the UK. Specializing in LOLER compliant lift plans, tower crane contracts, and steel erection planning.
                </p>
              </div>
            </div>
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

      {/* Related Articles */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-white mb-8">More Articles</h2>
          <div className="text-gray-400">
            <Link href="/blog" className="text-amber-400 hover:text-amber-300 transition">
              View all articles →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
