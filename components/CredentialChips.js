/**
 * Ricky's professional memberships and qualifications, shown with his photo
 * (Oct 2026, at his request: the photo should show his IOSH and IIRSM
 * memberships). Post-nominals as text, with the full body named for
 * screen readers and on hover. Logos are not used: each body has its own
 * rules for members using its marks.
 */
const CREDENTIALS = [
  { short: 'CPCS A61', full: 'CPCS Appointed Person (A61)' },
  { short: 'NEBOSH Diploma', full: 'NEBOSH Diploma' },
  { short: 'CertIOSH', full: 'Certified Member of the Institution of Occupational Safety and Health (IOSH)' },
  { short: 'MIIRSM', full: 'Member of the International Institute of Risk and Safety Management (IIRSM)' },
]

export default function CredentialChips({ className = '', align = 'start' }) {
  return (
    <ul className={`flex flex-wrap gap-2 ${align === 'center' ? 'justify-center' : ''} ${className}`} aria-label="Qualifications and memberships">
      {CREDENTIALS.map((c) => (
        <li
          key={c.short}
          title={c.full}
          className="inline-flex items-center rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-300 whitespace-nowrap"
        >
          <span aria-hidden="true">{c.short}</span>
          <span className="sr-only">{c.full}</span>
        </li>
      ))}
    </ul>
  )
}
