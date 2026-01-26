import Image from 'next/image'
import Link from 'next/link'

export default function CaseStudyCard({ title, description, category, image, href }) {
  return (
    <article className="group bg-slate-800/30 rounded-3xl overflow-hidden border border-slate-700/50 card-hover">
      <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800" />
        )}
      </div>
      <div className="p-8">
        <span className="bg-amber-500/20 text-amber-400 text-xs font-semibold px-3 py-1 rounded-full">
          {category}
        </span>
        <h3 className="font-display text-xl font-bold text-white mt-4 mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>
        <Link href={href || '/case-studies'} className="text-amber-400 hover:text-amber-300 text-sm font-semibold">
          Read case study →
        </Link>
      </div>
    </article>
  )
}
