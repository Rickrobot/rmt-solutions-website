'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'
import { readConsent, subscribe } from '@/lib/consent'

/**
 * Analytics — Google Analytics 4 and Microsoft Clarity, and ONLY after a yes.
 *
 * WHAT CHANGED, AND WHY IT HAD TO
 *   This component used to render both scripts on every page load. Neither is
 *   strictly necessary for anything a visitor came here to do, so regulation 6
 *   of the Privacy and Electronic Communications Regulations 2003 required
 *   consent first and was not getting it. Clarity in particular is a session
 *   recorder: it reproduces what somebody did on the page, which is a long way
 *   past counting visits.
 *
 *   The gate is the render itself. There is no measurement running in a
 *   "denied" state waiting to be switched on, because a script that is in the
 *   page is a script that can set a cookie, whatever flag is set beside it.
 *
 * ENV VARS (must be NEXT_PUBLIC_ prefixed to be available client-side):
 *   NEXT_PUBLIC_GA_MEASUREMENT_ID  e.g. G-XXXXXXXXXX
 *   NEXT_PUBLIC_CLARITY_PROJECT_ID e.g. abcd1234ef
 *
 * If neither is set (local dev) nothing is rendered whatever the visitor said.
 */
export default function Analytics() {
  const [granted, setGranted] = useState(false)

  /* Starts false and is only ever raised by the browser. A visitor whose
     storage cannot be read is treated as not having agreed, which is the
     direction this has to fail in. */
  useEffect(() => {
    setGranted(readConsent() === 'granted')
    return subscribe(state => setGranted(state === 'granted'))
  }, [])

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID

  if (!granted) return null

  return (
    <>
      {gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('js', new Date());
              gtag('config', '${gaId}', {
                page_path: window.location.pathname,
                anonymize_ip: true,
              });
            `}
          </Script>
        </>
      )}

      {clarityId && (
        <Script id="clarity-init" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      )}
    </>
  )
}
