import Image from 'next/image'
import Link from 'next/link'
import { Download, Expand, ArrowRight } from 'lucide-react'
import { liftDrawingExamples } from '@/lib/liftDrawingExamples'

export default function LiftDrawingExamples({ type }) {
  const example = liftDrawingExamples.find((item) => item.id === type)
  const pageUrl = `https://www.rmtsafetysolutions.com${example.href}`
  const imageObjects = example.drawings.map((drawing) => ({
    '@type': 'ImageObject',
    '@id': `https://www.rmtsafetysolutions.com${drawing.src}#image`,
    contentUrl: `https://www.rmtsafetysolutions.com${drawing.src}`,
    url: `https://www.rmtsafetysolutions.com${drawing.src}`,
    name: drawing.title,
    caption: drawing.caption,
    description: drawing.alt,
    encodingFormat: 'image/webp',
    width: 2382,
    height: 1684,
    creator: { '@type': 'Organization', name: 'RMT Solutions Ltd', url: 'https://www.rmtsafetysolutions.com' },
    isPartOf: { '@id': `${pageUrl}#webpage` },
  }))
  const imageSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: example.title,
        primaryImageOfPage: { '@id': imageObjects[0]['@id'] },
        image: imageObjects.map((drawing) => ({ '@id': drawing['@id'] })),
      },
      ...imageObjects,
    ],
  }
  return (
    <section id="drawing-examples" aria-labelledby="drawing-examples-heading" className="scroll-mt-28 py-20 bg-slate-950 border-y border-slate-800">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageSchema).replace(/</g, '\\u003c') }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4">RMT drawing examples</p>
        <h2 id="drawing-examples-heading" className="font-display text-3xl sm:text-4xl font-bold text-white mb-5">{example.title}</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mb-8">{example.introduction}</p>
        <div className="flex flex-wrap gap-4 mb-10">
          <a href={`/downloads/lift-drawing-examples/${example.pdf}`} download className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 px-5 py-3 rounded-xl font-semibold transition"><Download className="w-5 h-5" aria-hidden="true" />Download drawing examples (PDF, {example.pages} pages)</a>
          <Link href="/contact" className="inline-flex items-center gap-2 text-amber-400 px-2 py-3 font-semibold hover:text-amber-300">Discuss your lift plan <ArrowRight className="w-5 h-5" aria-hidden="true" /></Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {example.drawings.map((drawing, index) => (
            <figure key={drawing.src} className={`rounded-2xl overflow-hidden bg-slate-900 border border-slate-700 ${index === 0 ? 'md:col-span-2' : ''}`}>
              <a href={drawing.src} target="_blank" rel="noopener noreferrer" aria-label={`Open full-size ${drawing.title.toLowerCase()} (new tab)`} className="block bg-white p-2 sm:p-4 focus-visible:outline focus-visible:outline-4 focus-visible:outline-amber-400">
                <Image src={drawing.src} alt={drawing.alt} width={2382} height={1684} sizes={index === 0 ? '(max-width: 1279px) 100vw, 1216px' : '(max-width: 767px) 100vw, 50vw'} className="w-full h-auto" />
              </a>
              <figcaption className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{drawing.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-3">{drawing.caption}</p>
                <a href={drawing.src} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold" aria-label={`Open full-size ${drawing.title.toLowerCase()} (new tab)`}><Expand className="w-4 h-4" aria-hidden="true" />Open full-size drawing</a>
              </figcaption>
            </figure>
          ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mt-8 max-w-4xl">These anonymised drawings show examples of RMT drawing presentation. They are not site instructions or approved plans for another lift. Each operation requires a plan for the actual equipment, load and site conditions.</p>
      </div>
    </section>
  )
}
