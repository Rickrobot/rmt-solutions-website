# Plugin skills built in this repo

These are skills for the `rmt-solutions` Claude plugin, not part of the website.
Next.js never imports this folder, so it has no effect on the site or its build.

| Skill | What it does |
|---|---|
| `rmt-quote` | Turns an enquiry into a fixed-price quotation PDF on RMT letterhead and an email ready to send, behind the credit-watch gate. Logs every quote and tracks follow-ups, win rate and the 4-hour promise. |

## Installing `rmt-quote`

1. Copy `rmt-quote/` into the plugin's `skills/` folder, beside `rmt-document-register`.
   It uses the plugin's shared letterhead (`assets/design/rmt_design.py`) and the AP signature.
2. Add its row to the plugin README's skills table, raise the plugin version, and release
   as usual (rmt-build-standards: plugin release gates).
3. Run `python3 skills/rmt-quote/scripts/quote.py --self-test`. It should report 28 passed.
4. **Before the first real quote**, confirm the three terms listed under `unconfirmed` in
   `references/price-book.json`, then empty that list:
   - `quote_validity_days`: 30
   - `payment_terms_days`: 30
   - `working_hours`: 08:00 to 17:00 (the 4-hour clock runs inside these)
5. Give a price, or leave it per job, for each service at `null` in the price book.
   A null is fine: the quote then asks for that job's figure every time.
