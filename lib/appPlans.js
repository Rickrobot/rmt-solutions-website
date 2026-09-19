/**
 * What the two products cost, read from Stripe rather than typed into a page.
 *
 * WHY NOT JUST WRITE THE FIGURE IN THE COPY
 *   A price written into marketing copy is a price that will one day disagree
 *   with the one the card screen charges, and the customer finds out at the
 *   worst possible moment — which, on a page that has just told them a card
 *   will be taken, is worse than merely embarrassing. The application's
 *   /api/plans reads the figure from Stripe; change it in the Stripe dashboard
 *   and these pages follow within the hour.
 *
 * IT CHECKS WHAT IT WAS ANSWERED, NOT MERELY THAT IT WAS ANSWERED
 *   The first build of the rigging page quoted £110 a month. Nothing was wrong
 *   with the page: it asked for ?product=rigging and was answered by a
 *   deployment that predated products, which ignored the parameter and
 *   cheerfully returned the lift planning prices.
 *
 *   So a reply is only used when it says which product it is for and that is
 *   the product asked for. An old deployment does not say; a wrong one says the
 *   wrong thing; both end up as null here, and a page with null says nothing
 *   about a figure rather than the wrong one.
 *
 * WHEN IT IS READ
 *   At build time, and hourly after that. A failure is not an error — the price
 *   may genuinely not be set up yet — so callers must handle null and read
 *   perfectly well without a number in them.
 */

export const APP_URL = 'https://liftplanstudio.com'

/**
 * One click from this site into Stripe Checkout for a product.
 *
 * /start is a GET on the application: it creates the Checkout Session and
 * redirects into it. A link, rather than a form post — this site and the
 * application are different origins, and a button that needs CORS to work is a
 * button that silently does not.
 */
export const startUrl = (product, plan = 'monthly') =>
  `${APP_URL}/start?product=${encodeURIComponent(product)}&plan=${encodeURIComponent(plan)}`

/** Where a stranger can see the price and buy it the long way round. */
export const pricingUrl = (product) => `${APP_URL}/pricing?product=${encodeURIComponent(product)}`

const currency = (amount, code) =>
  new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: String(code || 'gbp').toUpperCase(),
    minimumFractionDigits: amount % 100 ? 2 : 0,
    maximumFractionDigits: amount % 100 ? 2 : 0,
  }).format(amount / 100)

/**
 * The monthly price for one product, or null when it cannot be had honestly.
 *
 * @param {'liftplan'|'rigging'} product
 * @returns {Promise<null | {
 *   product: string, price: string, amount: string, currency: string,
 *   yearly: string | null, trialDays: number,
 * }>}
 */
export async function planFor(product) {
  try {
    const r = await fetch(`${APP_URL}/api/plans?product=${encodeURIComponent(product)}`, {
      next: { revalidate: 3600 },
    })
    if (!r.ok) return null

    const d = await r.json()
    /* The guard the whole file exists for. */
    if (d?.product !== product) return null

    const plans = d.available ? (d.plans || []) : []
    const monthly = plans.find((p) => p.plan === 'monthly')
    if (!monthly?.amount) return null
    const yearly = plans.find((p) => p.plan === 'yearly')

    return {
      product,
      /* "£29" or "£29.50" — never a bare number with a symbol stuck on it. */
      price: currency(monthly.amount, monthly.currency),
      /* For JSON-LD, which wants the number on its own. */
      amount: (monthly.amount / 100).toFixed(2),
      currency: String(monthly.currency || 'gbp').toUpperCase(),
      yearly: yearly?.amount ? currency(yearly.amount, yearly.currency) : null,
      /* Days Stripe will run a card-up-front trial for. 0 means there is no
         such trial for this product and the page must not offer one. */
      trialDays: d.trialDays || 0,
    }
  } catch {
    return null
  }
}

/** What it renews at, in words, whether or not Stripe could be asked. */
export const renewsAt = (plan) =>
  plan ? `${plan.price} + VAT a month` : 'the monthly subscription price'

/** The price on its own, in words, for a sentence that is not about renewal. */
export const costs = (plan) => (plan ? `${plan.price} + VAT a month` : 'a monthly subscription')
