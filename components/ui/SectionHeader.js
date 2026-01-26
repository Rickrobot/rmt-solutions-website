export default function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  const alignmentClasses = {
    center: 'text-center',
    left: 'text-left',
  }

  return (
    <header className={`mb-16 ${alignmentClasses[align]}`}>
      {eyebrow && (
        <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-4 block">
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-6">{title}</h2>
      {description && (
        <p className={`text-gray-400 text-lg ${align === 'center' ? 'max-w-3xl mx-auto' : 'max-w-3xl'}`}>
          {description}
        </p>
      )}
    </header>
  )
}
