import Image from 'next/image'
import Link from 'next/link'
import { IMAGE_RIGHTS } from '@/lib/imageRights'

const SITE = 'https://www.rmtsafetysolutions.com'

/**
 * A worked example drawing shown near the top of each template page
 * (Nov 2026 image SEO round).
 *
 * WHY: the template pages have the best click-through rates on the site but
 * carried no image, so Google had nothing to show as a thumbnail beside them.
 * Each page now shows the matching RMT drawing or 3D model, opens it full
 * size on tap, uses it as the page's sharing image, and lists it in the
 * sitemap.
 *
 * `rmtOwned` adds the ImageObject rights metadata (see lib/imageRights.js).
 * Only set it for images RMT Solutions made: drawings, 3D renders, RMT's own
 * photographs. Leave it off for anything else.
 */
export default function TemplateDrawing({ src, width, height, alt, name, caption, href, linkText, rmtOwned = false }) {
  const schema = rmtOwned
    ? {
        '@context': 'https://schema.org',
        '@type': 'ImageObject',
        contentUrl: `${SITE}${src}`,
        url: `${SITE}${src}`,
        name,
        caption,
        width,
        height,
        ...IMAGE_RIGHTS,
      }
    : null

  return (
    <section className="py-12 bg-slate-950" aria-label={name}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <figure className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-700">
          <a href={src} target="_blank" rel="noopener">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="w-full h-auto"
            />
          </a>
          <figcaption className="px-5 py-3 text-sm text-gray-400">
            {caption}
            {href && (
              <>
                {' '}
                <Link href={href} className="text-amber-400 hover:text-amber-300 font-semibold">
                  {linkText}
                </Link>
              </>
            )}
          </figcaption>
        </figure>
      </div>
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
    </section>
  )
}
