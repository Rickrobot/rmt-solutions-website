import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import InlineQuoteForm from '@/components/InlineQuoteForm';
import { blogLeadImageSet } from '@/lib/blogLeadImages';

import { blogPosts } from '@/lib/blogPosts';


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
      // og:image falls back to the site card when a post has no hero image —
      // without this, links shared into WhatsApp and Teams render as bare text.
      images: [post.image || '/images/og-lift-planning.jpg'],
      siteName: 'RMT Solutions - Lift Planning Specialists',
      type: 'article',
    },
    // Explicit per-post X/Twitter card — previously the root layout's
    // homepage card values leaked onto every post share.
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image || '/images/og-lift-planning.jpg'],
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
  'lifting-people-man-baskets': [
    {
      q: 'Is it legal to lift people with a crane in the UK?',
      a: 'Only in exceptional circumstances. LOLER 1998 and the L113 ACOP permit carrying people on equipment designed for lifting loads only where purpose-designed access — a MEWP, scaffold, hoist or rope access — is not practicable, the risk assessment supports it, a purpose-designed man-riding carrier is used, and the machine is authorised and configured for personnel lifting.',
    },
    {
      q: 'How often does a man basket need a thorough examination?',
      a: 'Every 6 months — the interval for any lifting equipment used to lift people, which also applies to the crane or telehandler doing the man-riding. A machine carrying a 12-month report older than 6 months is not compliant for personnel lifting even though it remains compliant for ordinary load lifting.',
    },
    {
      q: 'Can you lift people with a telehandler?',
      a: 'Only using an integrated or manufacturer-approved personnel platform, with the manufacturer’s authorisation, the correct load chart for the platform, and the full LOLER Regulation 5 controls — and only where safer access is impracticable. Carrying anyone on the forks, on a pallet or in a materials cage is never lawful.',
    },
    {
      q: 'Does a man-riding lift need a special lift plan?',
      a: 'Yes. Personnel lifting is always treated as a complex lift planned by an experienced Appointed Person. Beyond the standard contents, the plan must record why safer access was impracticable, the carrier’s documentation, the de-rated capacity check, trial lift arrangements, communication and emergency-lowering procedures, a workable rescue plan and tightened weather limits.',
    },
  ],
  'cdm-2015-lifting-operations': [
    {
      q: 'Who is responsible for lifting operations on a construction site?',
      a: 'Both duties run at once. Under LOLER, the contractor carrying out the lift must have it planned by a competent person — normally an Appointed Person producing a lift plan. Under CDM 2015 Regulation 13, the principal contractor must plan, manage and monitor the construction phase, which includes coordinating and checking lifting operations carried out by subcontractors.',
    },
    {
      q: 'Does the principal contractor have to check subcontractor lift plans?',
      a: 'In practice, yes. CDM 2015 requires the PC to manage and monitor high-risk work on their site, and accepting lifting documentation unreviewed does not discharge that duty. The review must be done by someone with lifting competence — many principal contractors use an independent Appointed Person as their lift plan reviewer.',
    },
    {
      q: 'Should the construction phase plan cover lifting operations?',
      a: 'Yes, on any site with meaningful lifting. The construction phase plan should set out how lifting will be managed: who reviews and approves lift plans, submission timescales, crane coordination arrangements, permit-to-lift systems and exclusion zone principles. A CPP that ignores lifting on a crane-heavy site is a standard enforcement finding.',
    },
    {
      q: 'What lifting records should a principal contractor keep?',
      a: 'A register of lift plans received, reviewed and approved with named reviewers and dates; recorded comments and re-submissions; permit-to-lift records; thorough examination certificates checked for machines and accessories; briefing records; and periodic lifting operation audit reports with closed-out actions. This is the evidence trail examined after any incident.',
    },
  ],
  'loler-thorough-examination-guide': [
    {
      q: 'Is LOLER 6 or 12 months?',
      a: 'Both, depending on the equipment. Lifting accessories (chains, slings, shackles, spreader beams) and any equipment used to lift people must be thoroughly examined at least every 6 months. Other lifting equipment — cranes, excavators used for lifting, telehandlers, lorry loaders — needs examination at least every 12 months. A written scheme of examination drawn up by a competent person can set different intervals based on risk.',
    },
    {
      q: 'What is a LOLER certificate?',
      a: 'Strictly it is a "report of thorough examination" — the word certificate appears nowhere in LOLER. Schedule 1 of the regulations prescribes its contents: identification of the equipment, the examination date, the safe working load, any defects found, and the date by which the next thorough examination is due. Reports must be kept available for inspection.',
    },
    {
      q: 'Who can carry out a LOLER thorough examination?',
      a: 'A competent person — someone with the practical and theoretical knowledge and experience to detect defects and assess how significant they are, with enough independence to make impartial decisions. In practice most UK contractors use their insurer’s engineering surveyors or a specialist inspection company rather than their own fitters.',
    },
    {
      q: 'Does an excavator need a LOLER thorough examination?',
      a: 'Yes, if it is used for lifting. An excavator doing object handling is lifting equipment and needs a thorough examination at least every 12 months — while the chains and slings it lifts with are accessories needing examination every 6 months. An excavator that only digs is outside LOLER, though PUWER maintenance duties still apply.',
    },
  ],
  'bs-7121-hand-signals': [
    {
      q: 'What are the standard crane hand signals in the UK?',
      a: 'The UK standard signals come from the Health and Safety (Safety Signs and Signals) Regulations 1996: start/attention (both arms out, palms forward), stop (right arm up, palm forward), emergency stop (both arms up, palms forward), raise (right arm up, hand circling), lower (arm down, hand circling), move forwards/backwards (forearms beckoning or pushing), and left/right (arm extended horizontally, given from the signaller’s point of view).',
    },
    {
      q: 'Who can give signals to a crane operator?',
      a: 'One identified, trained slinger/signaller per lift — the operator takes instructions from that person only. The single exception is the emergency stop, which anyone on site can give and the operator must obey immediately. The signalling arrangement is set in the lift plan and confirmed at the pre-lift briefing.',
    },
    {
      q: 'Are hand signals or radios better for lifting operations?',
      a: 'Radios are standard for blind lifts and congested sites, using a dedicated channel and agreed phrases — continuous commands while movement is required, silence meaning stop. Hand signals remain the universal backup every operator is trained to read, and the agreed fallback if radios fail. The lift plan should state which method applies and what happens if communication is lost: the lift stops.',
    },
    {
      q: 'Is there a free crane hand signals poster?',
      a: 'Yes — we publish a free printable A4 poster of the standard UK crane hand signals, with no sign-up required, alongside our free lift plan templates. Print it and pin it in the site cabin, welfare unit or crane cab.',
    },
  ],
  'crane-wind-speed-limits': [
    {
      q: 'What is the maximum wind speed for crane operations in the UK?',
      a: 'There is no single legal limit — the manufacturer’s load chart for the machine and configuration governs. Typical in-service limits are around 9–14 m/s (20–31 mph) for mobile cranes and around 20 m/s (45 mph) for tower cranes, with lower figures for long booms, luffing configurations and loads with large sail area. The lift plan should state the operational limit for the specific lift.',
    },
    {
      q: 'What wind speed stops a telehandler lifting suspended loads?',
      a: 'Check the object-handling section of the manufacturer’s manual — suspended-load duties are commonly restricted to around 10 m/s, lower than the machine’s general operating limits. Suspended loads swing and sail in wind in a way palletised loads on forks do not.',
    },
    {
      q: 'Do you use average wind speed or gusts for lifting?',
      a: 'Gusts. A 9 m/s mean wind with 15 m/s gusts must be treated as a 15 m/s condition, because the gust is what arrives mid-lift. Measure at height rather than at ground level — wind speed at a 50m boom tip is typically 1.3–1.5 times the ground reading — and treat forecasts as planning input, site anemometer readings as fact.',
    },
    {
      q: 'Why do large flat loads have lower wind limits?',
      a: 'Because the wind force on the load grows with its surface area. Cladding panels, formwork tables and roof sheets act as sails: they load the crane sideways, swing, and become uncontrollable on tag lines well below the machine’s chart limit. Manufacturers publish de-rating tables or maximum sail areas, and a competent lift plan sets a reduced operational wind limit for such loads.',
    },
  ],
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
  // Merged in from the retired duplicate post (Jul 2026) — these two
  // questions were the only genuinely unique content on that page.
  'lift-plan-checking-what-gets-checked-and-why-plans-get-rejected': [
    {
      q: 'Can the lift plan checker also write lift plans?',
      a: 'Yes. An Appointed Person providing a checking service can also write lift plans where required, for example for complex operations where the subcontractor does not have the competence to plan the lift themselves. However, it is good practice to maintain a separation between writing and checking where possible, so that plans receive genuinely independent review.',
    },
    {
      q: 'What qualifications should the lift plan checker have?',
      a: 'The checker must be a competent person under LOLER. For crane and construction lifting operations this means a CPCS Appointed Person (A61) as a minimum. Additional qualifications such as NEBOSH or IOSH membership demonstrate broader health and safety competence, and practical experience across different equipment types is equally important.',
    },
    {
      q: 'Does every lift on site need a reviewed plan?',
      a: 'Under LOLER, every lifting operation must be planned. Whether every plan needs independent review depends on the risk profile of the project and your organisation\u2019s procedures. Many tier 1 contractors require all lift plans to be reviewed by an Appointed Person before any lifting work proceeds. The safest approach is to review everything.',
    },
  ],
  'cpa-hire-vs-contract-lift-appointed-person': [
    {
      q: 'Do I need my own Appointed Person for CPA crane hire?',
      a: 'Yes. Under the CPA Model Conditions the crane company supplies the crane and the operator only. The CPA Supplementary Conditions for Mobile Cranes state that BS 7121 makes the Hirer responsible for being in overall control of the lifting operation and for providing a suitably trained and experienced Appointed Person. If you have no CPCS A61 holder available, you either engage an external Appointed Person or move to a contract lift.',
    },
    {
      q: 'Who provides the Appointed Person on a contract lift?',
      a: 'The crane company. Under the CPA Conditions for Contract Lifting Services the crane company appoints the AP, produces the lift plan, selects the crane, supervises the operation and carries the associated liability. That is the substance of what the higher contract lift rate pays for.',
    },
    {
      q: 'Can I hire a crane without an Appointed Person at all?',
      a: 'No lifting operation can lawfully go ahead without being planned by a competent person — LOLER 1998 Regulation 8 applies regardless of the commercial arrangement. You can hire the crane without the crane company providing an AP, which is exactly what CPA hire is, but somebody competent still has to plan the lift. In practice the principal contractor will ask for the lift plan at pre-start and the crane will stand until one exists.',
    },
    {
      q: 'Is a contract lift always the safer option?',
      a: 'It transfers responsibility, which is not the same as making the lift safer. A contract lift is usually the right call where the lift is complex or high-consequence, or where you have no competent AP. For a straightforward pick where an independent Appointed Person plans it properly, CPA hire is not less safe — the same standards apply and the same competence is required. What changes is who is liable if it goes wrong.',
    },
    {
      q: 'How do I tell whether my quote is CPA hire or a contract lift?',
      a: 'Look at which conditions the quote names: \'CPA Model Conditions for the Hiring of Plant\' is hire, \'CPA Conditions for Contract Lifting Services\' is a contract lift. If the quote does not mention an Appointed Person and only prices crane, operator and transport, it is a hire rate. The most direct test is to ask the supplier who is producing the lift plan.',
    },
    {
      q: 'Who is liable if the crane is damaged during CPA hire?',
      a: 'The hirer, in most circumstances. Clause 13(b) of the CPA Model Conditions makes the Hirer liable for loss of or damage to the Plant throughout the hire period. It is worth confirming that your insurance actually covers hired-in plant to crane values before the crane arrives, rather than after.',
    },
    {
      q: 'Is the crane operator my responsibility under CPA hire?',
      a: 'For the purposes of operating the crane, effectively yes. Clause 8(a) of the CPA Model Conditions provides that an operator supplied by the owner is regarded as the servant or agent of the Hirer for all purposes connected with working the plant, and that the Hirer is solely responsible for claims arising from its operation. The operator remains employed and paid by the crane company, but during the hire they work under your direction.',
    },
    {
      q: 'Can I use an independent Appointed Person instead of paying for a contract lift?',
      a: 'Yes, and for straightforward lifts it is a common arrangement. You take the CPA hire rate and engage an external CPCS A61 Appointed Person to plan the lift, categorise it, specify the rigging and exclusion zones and sign it off. It suits contractors who lift regularly but not often enough to employ an AP. For complex, blind or high-consequence lifts a contract lift is usually the better answer.',
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
  const POSTS_WITH_INLINE_FAQ = new Set([])
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
    // Lead image in 16:9, 4:3 and 1:1 (Google Article image guidance), then
    // the original. Crops come from scripts/blog-lead-images.py; a post can
    // set its own schemaImages instead.
    image: [...new Set(post.schemaImages || [...blogLeadImageSet(params.slug), post.image])].map(
      (src) => `https://www.rmtsafetysolutions.com${src}`
    ),
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
                  CPCS A61 Appointed Person | NEBOSH Diploma | CertIOSH | MIIRSM | TIFSM
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
