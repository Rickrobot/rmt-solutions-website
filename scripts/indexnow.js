#!/usr/bin/env node
/**
 * IndexNow submission for rmtsafetysolutions.com
 *
 * What IndexNow is:
 *   A ping protocol. You tell the search engine a URL changed, instead of
 *   waiting for it to rediscover the change on its own crawl schedule.
 *   Supported by Bing, Yandex, Seznam and Naver — and, because Bing powers
 *   ChatGPT's web results, it is the fastest route into AI search too.
 *   Google does NOT participate; Google still relies on the sitemap and
 *   Search Console, so this does not replace either of those.
 *
 * How verification works:
 *   The key file at /<key>.txt must be reachable over HTTPS and contain
 *   exactly the key. The search engine fetches it to prove we control the
 *   domain. No account, no API token, no registration step.
 *
 * Usage:
 *   npm run indexnow                     # submit every URL in the sitemap
 *   npm run indexnow -- <url> [<url>...] # submit specific URLs
 *   npm run indexnow -- --dry-run        # show what would be sent
 *
 * Deliberately NOT wired into the build:
 *   Vercel builds on every push. Blasting all ~91 URLs at IndexNow on each
 *   deploy is exactly the abuse the protocol asks you to avoid, and repeated
 *   bulk submission of unchanged URLs can get a key throttled. Run this
 *   manually after a deploy that actually changed content, passing the URLs
 *   that changed. The no-argument bulk mode is for occasional use — a big
 *   content release like the RAMS trade pages, or after a site migration.
 */

const https = require('https');

const KEY = '69958e8b306948468008d221b0fac511';
const HOST = 'www.rmtsafetysolutions.com';
const ORIGIN = `https://${HOST}`;
const KEY_LOCATION = `${ORIGIN}/${KEY}.txt`;
const SITEMAP = `${ORIGIN}/sitemap.xml`;
const ENDPOINT = 'api.indexnow.org';

// IndexNow caps a single submission at 10,000 URLs.
const MAX_URLS = 10000;

const fetchText = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'rmt-indexnow/1.0' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return resolve(fetchText(res.headers.location));
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`GET ${url} -> HTTP ${res.statusCode}`));
        }
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (c) => (body += c));
        res.on('end', () => resolve(body));
      })
      .on('error', reject);
  });

async function urlsFromSitemap() {
  const xml = await fetchText(SITEMAP);
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  return [...new Set(locs)];
}

function submit(urlList) {
  const payload = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  });

  return new Promise((resolve, reject) => {
    const req = https.request(
      {
        hostname: ENDPOINT,
        path: '/indexnow',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(payload),
        },
      },
      (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', (c) => (body += c));
        res.on('end', () => resolve({ status: res.statusCode, body }));
      }
    );
    req.on('error', reject);
    req.write(payload);
    req.end();
  });
}

// Documented IndexNow response codes — worth surfacing plainly, because a
// silent 403 looks identical to success if you only check for "no error".
const MEANING = {
  200: 'OK — URLs received.',
  202: 'Accepted — URLs received, key validation pending. This is normal on a first submission.',
  400: 'Bad request — malformed payload.',
  403: 'Forbidden — key not valid, or the key file could not be fetched. Check the key file is live.',
  422: 'Unprocessable — a URL does not belong to this host, or the key does not match.',
  429: 'Too many requests — slow down; the key may be throttled for bulk-submitting unchanged URLs.',
};

(async () => {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const explicit = args.filter((a) => !a.startsWith('--'));

  let urls;
  if (explicit.length) {
    urls = explicit;
  } else {
    console.log(`No URLs given — reading ${SITEMAP}`);
    urls = await urlsFromSitemap();
  }

  const offHost = urls.filter((u) => !u.startsWith(`${ORIGIN}/`) && u !== ORIGIN);
  if (offHost.length) {
    console.error('These URLs are not on ' + HOST + ' and would cause a 422:');
    offHost.forEach((u) => console.error('  ' + u));
    process.exit(1);
  }

  if (urls.length > MAX_URLS) {
    console.error(`${urls.length} URLs exceeds the ${MAX_URLS} per-submission limit.`);
    process.exit(1);
  }

  console.log(`\n${urls.length} URL(s) to submit:`);
  urls.forEach((u) => console.log('  ' + u));

  if (dryRun) {
    console.log('\n--dry-run set. Nothing submitted.');
    return;
  }

  const { status, body } = await submit(urls);
  console.log(`\nIndexNow responded ${status} — ${MEANING[status] || 'Unrecognised status.'}`);
  if (body && body.trim()) console.log(body.trim());

  if (status !== 200 && status !== 202) process.exitCode = 1;
})().catch((err) => {
  console.error('IndexNow submission failed:', err.message);
  process.exit(1);
});
