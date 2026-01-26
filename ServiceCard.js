import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function ServiceCard({ title, description, features, href, icon: Icon }) {
  return (
    <article className="group bg-gradient-to-b from-slate-800/50 to-slate-900/50 rounded-3xl p-8 border border-slate-700/50 card-hover">
      <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
        {Icon && <Icon className="w-8 h-8 text-amber-400" />}
      </div>
      
      <h3 className="font-display text-2xl font-bold text-white mb-4">{title}</h3>
      
      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
      
      {features && (
        <ul className="space-y-3 text-gray-300 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-5 h-5 text-amber-400 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <Link
        href={href}
        className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold group-hover:translate-x-2 transition-transform"
      >
        Learn more
        <ArrowRight className="w-5 h-5 ml-2" />
      </Link>
    </article>
  )
}
