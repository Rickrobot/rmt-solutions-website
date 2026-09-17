/**
 * Whether this visitor has agreed to analytics cookies.
 *
 * WHY THIS EXISTS
 *   The site runs Google Analytics 4 and Microsoft Clarity. Neither is
 *   strictly necessary for anything a visitor came here to do, so regulation
 *   6 of the Privacy and Electronic Communications Regulations 2003 requires
 *   consent BEFORE either one is set — not a banner shown while the script is
 *   already running, which is the usual and useless arrangement.
 *
 *   So the scripts are not rendered at all until this module says yes.
 *   components/Analytics.js reads it; nothing else may set a cookie.
 *
 * WHY THE CHOICE IS STORED IN localStorage AND NOT A COOKIE
 *   A cookie recording a refusal is still a cookie. localStorage is exempt
 *   from the same objection in practice because nothing is transmitted, and
 *   the alternative — asking again on every page — would train people to
 *   click the first button to make it go away, which is not consent.
 *
 * WHY IT EXPIRES
 *   Consent given once is not consent forever. Six months is the shorter end
 *   of what the ICO treats as reasonable, and erring short costs a banner
 *   while erring long costs the lawfulness of the processing.
 */

export const STORAGE_KEY = 'rmt.cookie-consent.v1'
export const EVENT = 'rmt:cookie-consent'

/** How long a decision stands before we ask again. */
export const MAX_AGE_DAYS = 182

const DAY = 86_400_000

/**
 * The stored decision: 'granted', 'denied', or null when nobody has decided
 * or the decision has aged out.
 *
 * Everything here is wrapped, because localStorage throws rather than
 * returning nothing in a locked-down browser or a private window, and a
 * privacy control that crashes the page for privacy-conscious visitors would
 * be a poor joke.
 */
export function readConsent() {
  if (typeof window === 'undefined') return null
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const { state, at } = JSON.parse(raw)
    if (state !== 'granted' && state !== 'denied') return null
    if (!Number.isFinite(at) || Date.now() - at > MAX_AGE_DAYS * DAY) return null
    return state
  } catch {
    return null
  }
}

/**
 * Record a decision and tell the page about it.
 *
 * The event is what lets Analytics start without a reload when somebody says
 * yes. Going the other way needs more than an event — see below.
 */
export function writeConsent(state) {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ state, at: Date.now() }))
  } catch {
    /* A visitor who has blocked storage gets asked again next time, which is
       the safe way for this to fail: they are never treated as having agreed. */
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: state }))
}

/** Forget the decision, so the banner comes back. */
export function resetConsent() {
  if (typeof window === 'undefined') return
  try { window.localStorage.removeItem(STORAGE_KEY) } catch { /* as above */ }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: null }))
}

/**
 * Delete the cookies GA4 and Clarity set on this site.
 *
 * WHY WITHDRAWAL NEEDS THIS AND A RELOAD
 *   Once a script has run, un-rendering its <Script> tag does nothing: the
 *   code is in the page and the cookies are on the device. Telling somebody
 *   their withdrawal took effect while both are still there would be a lie
 *   told by a consent banner, which is worse than no banner.
 *
 *   So a withdrawal deletes what we can reach and reloads, and the reloaded
 *   page does not render the scripts at all.
 *
 * WHAT IT CANNOT REACH
 *   Cookies set on clarity.ms itself are on another origin and no script of
 *   ours can touch them. The privacy notice says so rather than implying a
 *   completeness this cannot deliver.
 */
export function clearAnalyticsCookies() {
  if (typeof document === 'undefined') return
  const names = document.cookie
    .split(';')
    .map(c => c.split('=')[0].trim())
    .filter(n => /^_ga/.test(n) || /^_gid$/.test(n) || /^_gat/.test(n) ||
                 /^_clck$/.test(n) || /^_clsk$/.test(n) || /^CLID$/.test(n))

  const host = window.location.hostname
  /* Both the exact host and the registrable domain: GA writes to ".example.com"
     and a delete scoped to "example.com" leaves it in place. */
  const domains = [undefined, host, `.${host}`, `.${host.replace(/^www\./, '')}`]
  const expired = 'Thu, 01 Jan 1970 00:00:00 GMT'

  for (const name of new Set(names)) {
    for (const domain of new Set(domains)) {
      document.cookie =
        `${name}=; expires=${expired}; path=/` + (domain ? `; domain=${domain}` : '')
    }
  }
}

/** Run `fn` whenever the decision changes, in this tab or another one. */
export function subscribe(fn) {
  if (typeof window === 'undefined') return () => {}
  const here = e => fn(e.detail ?? null)
  const elsewhere = e => { if (e.key === STORAGE_KEY) fn(readConsent()) }
  window.addEventListener(EVENT, here)
  window.addEventListener('storage', elsewhere)
  return () => {
    window.removeEventListener(EVENT, here)
    window.removeEventListener('storage', elsewhere)
  }
}
