'use client'

/**
 * Lift plan decision tool.
 *
 * This is the A4 flowchart at /downloads/lift-plan-decision-flowchart.pdf made
 * interactive, and it is deliberately NOT a language model. Every branch, every
 * trigger and every outcome sentence below is lifted from that sheet, which was
 * written by the Appointed Person whose name is on it. Nothing here is
 * generated, inferred or interpolated at runtime: the same answers always give
 * the same result, and that result can be checked against the printed sheet.
 *
 * That constraint is the whole point. This sits on the website of a CPCS A61
 * Appointed Person, in a trade governed by LOLER 1998, and a tool that could
 * invent a categorisation would be a liability dressed up as a feature.
 *
 * It categorises a lifting operation. It is not a lift plan and does not
 * pretend to be one — the result says so in as many words.
 */

import { useState } from 'react'
import Link from 'next/link'
import {
  AlertTriangle, CheckCircle2, FileText, Info, RotateCcw, ArrowRight, ArrowLeft,
} from 'lucide-react'
import { trackEvent } from '@/components/ConversionTracking'
/* Shared with the page, which builds the HowTo and FAQPage schema from the same
   labels. It lives in lib/ rather than here because a server component cannot
   map over an export from a 'use client' module. */
import { COMPLEX_TRIGGERS, EQUIPMENT_HINT } from '@/lib/liftPlanDecision'

export default function LiftPlanDecisionTool() {
  /* 'equipment' → 'triggers' → 'routine' → a result. Held as one step index
     plus the answers, so Back genuinely goes back rather than restarting. */
  const [step, setStep] = useState(0)
  const [isLifting, setIsLifting] = useState(null)
  const [ticked, setTicked] = useState([])
  const [routine, setRoutine] = useState(null)

  const reset = () => { setStep(0); setIsLifting(null); setTicked([]); setRoutine(null) }

  const toggle = (id) =>
    setTicked((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]))

  /* The outcome is a pure function of the answers — no state of its own, so it
     cannot drift out of step with what was actually ticked. */
  const outcome =
    isLifting === false ? 'none'
    : ticked.length > 0 ? 'complex'
    : routine === true ? 'basic'
    : routine === false ? 'standard'
    : null

  const finish = (result, extra = {}) =>
    trackEvent('lift_plan_decision_result', { result, ...extra })

  /* ------------------------------------------------------------- step 1 */
  if (step === 0) {
    return (
      <Shell step={1}>
        <Question>Is lifting equipment being used to lift or lower a load?</Question>
        <p className="text-gray-400 text-sm mb-7">{EQUIPMENT_HINT}</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Choice onClick={() => { setIsLifting(true); setStep(1) }}>Yes</Choice>
          <Choice
            variant="ghost"
            onClick={() => { setIsLifting(false); setStep(3); finish('not_lifting_equipment') }}
          >
            No
          </Choice>
        </div>
      </Shell>
    )
  }

  /* ------------------------------------------------------------- step 2 */
  if (step === 1) {
    return (
      <Shell step={2} onBack={() => { setStep(0); setTicked([]) }}>
        <Question>Does any of the following apply?</Question>
        <p className="text-gray-400 text-sm mb-6">
          One tick is enough — these are the BS 7121-1 complex-lift triggers. If none of
          them applies, leave them all unticked and carry on.
        </p>
        <ul className="space-y-2 mb-7">
          {COMPLEX_TRIGGERS.map((t) => {
            const on = ticked.includes(t.id)
            return (
              <li key={t.id}>
                <label
                  className={`flex items-start gap-3 p-4 rounded-xl border cursor-pointer transition ${
                    on
                      ? 'bg-amber-500/10 border-amber-500/50'
                      : 'bg-slate-800/40 border-slate-700/50 hover:border-slate-600'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() => toggle(t.id)}
                    className="mt-1 w-5 h-5 flex-none accent-amber-500"
                  />
                  <span className={on ? 'text-white' : 'text-gray-300'}>{t.label}</span>
                </label>
              </li>
            )
          })}
        </ul>
        <div className="flex flex-col sm:flex-row gap-3">
          {ticked.length > 0 ? (
            <Choice onClick={() => { setStep(3); finish('complex', { triggers: ticked.length }) }}>
              Continue — {ticked.length} {ticked.length === 1 ? 'trigger' : 'triggers'} ticked
            </Choice>
          ) : (
            <Choice onClick={() => setStep(2)}>None of these apply</Choice>
          )}
        </div>
      </Shell>
    )
  }

  /* ------------------------------------------------------------- step 3 */
  if (step === 2) {
    return (
      <Shell step={3} onBack={() => setStep(1)}>
        <Question>Is the lift routine and repetitive?</Question>
        <p className="text-gray-400 text-sm mb-7">
          Same machine, same load type, same conditions, already covered by a schedule of
          common lifts — for example repeat HIAB offloads to a set compound.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Choice onClick={() => { setRoutine(true); setStep(3); finish('basic') }}>Yes</Choice>
          <Choice variant="ghost" onClick={() => { setRoutine(false); setStep(3); finish('standard') }}>
            No
          </Choice>
        </div>
      </Shell>
    )
  }

  /* ------------------------------------------------------------- result */
  return <Result outcome={outcome} ticked={ticked} onReset={reset} />
}

/* ===================================================================== ui */

function Shell({ step, onBack, children }) {
  return (
    <div className="bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl border border-slate-700/50 p-6 sm:p-9">
      <div className="flex items-center gap-3 mb-6">
        {[1, 2, 3].map((n) => (
          <span
            key={n}
            className={`h-1.5 rounded-full transition-all ${
              n === step ? 'w-10 bg-amber-400' : n < step ? 'w-6 bg-amber-400/40' : 'w-6 bg-slate-700'
            }`}
            aria-hidden="true"
          />
        ))}
        <span className="text-gray-500 text-xs font-semibold tracking-wider uppercase ml-1">
          Step {step} of 3
        </span>
      </div>
      {children}
      {onBack && (
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-2 text-gray-400 hover:text-amber-400 text-sm transition"
        >
          <ArrowLeft className="w-4 h-4" aria-hidden="true" />
          Back
        </button>
      )}
    </div>
  )
}

const Question = ({ children }) => (
  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
    {children}
  </h2>
)

function Choice({ children, onClick, variant }) {
  const base =
    'flex-1 min-h-[56px] px-7 py-4 rounded-xl font-semibold transition text-center inline-flex items-center justify-center gap-2'
  return (
    <button
      onClick={onClick}
      className={
        variant === 'ghost'
          ? `${base} bg-slate-800 border border-slate-600 text-white hover:border-slate-500`
          : `${base} bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20`
      }
    >
      {children}
    </button>
  )
}

/* ================================================================= result */

/* Every word of the three outcomes is the printed flowchart's. The CTA under
   each one is chosen to match what the answer actually calls for rather than
   to funnel every visitor at the same button: somebody who has landed on
   "basic" needs a template, not a quote, and telling them otherwise is how a
   useful tool turns into a lead form nobody trusts. */
const OUTCOMES = {
  complex: {
    label: 'Complex lift',
    tone: 'stop',
    icon: AlertTriangle,
    lead:
      'A detailed, lift-specific written plan is required, prepared by an Appointed Person ' +
      'with competence appropriate to the lift — commonly CPCS A61 Advanced.',
    points: [
      'Expect the principal contractor to want the plan, the rigging arrangement and the load chart working days in advance — not on the morning of the lift.',
      'A generic plan is never sufficient for a complex lift.',
      'A complex lift usually needs a site visit, detailed calculations and close supervision.',
    ],
  },
  standard: {
    label: 'Standard lift',
    tone: 'warn',
    icon: FileText,
    lead:
      'A site-specific written lift plan by an Appointed Person, briefed to the whole ' +
      'lifting team before work starts.',
    points: [
      'This is where the great majority of commercial crane, excavator and lorry loader lifts sit.',
      'Site-specific means what it says: the plan is written against this site, this machine and this load.',
      'A lift supervisor normally oversees the operation on the ground.',
    ],
  },
  basic: {
    label: 'Basic lift',
    tone: 'ok',
    icon: CheckCircle2,
    lead:
      'A generic plan or schedule of common lifts may be used — but it must still be ' +
      'reviewed against the actual site first.',
    points: [
      'Basic does not mean unplanned. LOLER Regulation 8 still applies in full.',
      'A schedule of common lifts is not a lift plan until somebody has stood on the actual ground and signed it off.',
      'If anything about the site, the machine or the load changes, the lift is no longer routine and this answer no longer holds.',
    ],
  },
  none: {
    label: 'LOLER Regulation 8 does not apply',
    tone: 'muted',
    icon: Info,
    lead:
      'If no lifting equipment is being used to lift or lower a load, LOLER Regulation 8 ' +
      'does not apply to the operation.',
    points: [
      'Other duties almost certainly still do — PUWER, the Work at Height Regulations, manual handling and CDM 2015 among them.',
      'Lifting equipment is a broad term: cranes, telehandlers, lorry loaders, excavators lifting, gantries, hoists, and a MEWP carrying a load are all caught.',
      'If you are not sure whether what you are using counts, treat it as though it does and plan the operation.',
    ],
  },
}

const TONES = {
  stop:   { ring: 'border-red-500/40',    bg: 'bg-red-500/10',    text: 'text-red-400' },
  warn:   { ring: 'border-amber-500/40',  bg: 'bg-amber-500/10',  text: 'text-amber-400' },
  ok:     { ring: 'border-emerald-500/40',bg: 'bg-emerald-500/10',text: 'text-emerald-400' },
  muted:  { ring: 'border-slate-600',     bg: 'bg-slate-700/30',  text: 'text-gray-300' },
}

function Result({ outcome, ticked, onReset }) {
  const o = OUTCOMES[outcome]
  if (!o) return null
  const tone = TONES[o.tone]
  const Icon = o.icon
  const hit = COMPLEX_TRIGGERS.filter((t) => ticked.includes(t.id))

  return (
    <div className={`bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl border p-6 sm:p-9 ${tone.ring}`}>
      <div className="flex items-start gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-none ${tone.bg}`}>
          <Icon className={`w-6 h-6 ${tone.text}`} aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1">
            On the answers given
          </p>
          <h2 className={`font-display text-3xl sm:text-4xl font-bold ${tone.text} leading-tight`}>
            {o.label}
          </h2>
        </div>
      </div>

      <p className="text-lg text-gray-200 mb-6 leading-relaxed">{o.lead}</p>

      {/* Why, in the user's own ticks. A categorisation somebody cannot explain
          to their principal contractor is not much use to them. */}
      {hit.length > 0 && (
        <div className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-5 mb-6">
          <p className="text-white font-semibold mb-3">
            Because you ticked {hit.length === 1 ? 'this trigger' : `these ${hit.length} triggers`}:
          </p>
          <ul className="space-y-2">
            {hit.map((t) => (
              <li key={t.id} className="flex items-start gap-2.5 text-gray-300 text-sm">
                <span className="text-amber-400 mt-0.5 flex-none" aria-hidden="true">▸</span>
                {t.label}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm mt-4">
            One trigger is enough. Ticking more does not make the lift more complex than
            complex — it makes the plan longer.
          </p>
        </div>
      )}

      <ul className="space-y-3 mb-8">
        {o.points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-gray-300">
            <span className="text-amber-400 mt-1 flex-none" aria-hidden="true">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>

      {/* ------------------------------------------------- what to do next */}
      {outcome === 'complex' && (
        <Next
          primary={{ href: '/contact', label: 'Get a complex lift plan written' }}
          secondary={{ href: '/services/lift-plan-checking', label: 'Already have a plan? Have it checked' }}
          note="Independent CPCS A61 Appointed Person, 35 years in UK construction. Fixed price from £200 + VAT, 24–48 hour turnaround."
        />
      )}
      {outcome === 'standard' && (
        <Next
          primary={{ href: '/resources/lift-plan-templates', label: 'Start from the free lift plan template' }}
          secondary={{ href: '/contact', label: 'Or have it written for you — from £200' }}
          note="The template is a structured starting point, not a finished plan. It still has to be completed against this site by a competent person."
        />
      )}
      {outcome === 'basic' && (
        <Next
          primary={{ href: '/resources/lift-plan-templates', label: 'Download the free lift plan template' }}
          secondary={{ href: '/blog/basic-standard-complex-lifts', label: 'Read how the categories work' }}
          note="Equipment-specific templates — excavator, telehandler, lorry loader, mobile crane and overhead gantry — are on the resources page."
        />
      )}
      {outcome === 'none' && (
        <Next
          primary={{ href: '/blog/when-do-you-need-lift-plan', label: 'What LOLER does cover' }}
          secondary={{ href: '/contact', label: 'Ask if you are not sure' }}
        />
      )}

      {/* Shown on every outcome, including basic. It is the last line of the
          printed sheet and it is the honest one. */}
      <div className="mt-8 pt-6 border-t border-slate-700/50">
        <p className="text-gray-400 text-sm leading-relaxed">
          <strong className="text-white">In practice:</strong> most principal contractors
          require a written, site-specific lift plan for every lift regardless of category.
          If in doubt, write the plan — a rejected plan costs a day, an unplanned lift costs
          a great deal more.
        </p>
        <p className="text-gray-500 text-sm mt-4 leading-relaxed">
          This tool categorises a lifting operation against LOLER 1998 Regulation 8 and the
          BS 7121-1 complex-lift triggers. It is not a lift plan, it is not a risk assessment,
          and it does not replace the judgement of the competent person planning the work.
          The category is ultimately theirs to assign.
        </p>
      </div>

      <button
        onClick={onReset}
        className="mt-7 inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold transition"
      >
        <RotateCcw className="w-4 h-4" aria-hidden="true" />
        Start again
      </button>
    </div>
  )
}

function Next({ primary, secondary, note }) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href={primary.href}
          onClick={() => trackEvent('lift_plan_decision_cta', { target: primary.href })}
          className="flex-1 min-h-[56px] px-7 py-4 rounded-xl font-semibold bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 hover:from-amber-400 hover:to-amber-500 transition inline-flex items-center justify-center gap-2 text-center shadow-lg shadow-amber-500/20"
        >
          {primary.label}
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
        <Link
          href={secondary.href}
          onClick={() => trackEvent('lift_plan_decision_cta', { target: secondary.href })}
          className="flex-1 min-h-[56px] px-7 py-4 rounded-xl font-semibold bg-slate-800 border border-slate-600 text-white hover:border-slate-500 transition inline-flex items-center justify-center text-center"
        >
          {secondary.label}
        </Link>
      </div>
      {note && <p className="text-gray-500 text-sm mt-4">{note}</p>}
    </div>
  )
}
