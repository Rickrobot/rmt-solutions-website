export default function StatCard({ value, label, sublabel }) {
  return (
    <div className="stat-card rounded-2xl p-8 text-center border border-slate-700/50">
      <div className="text-5xl font-display font-bold text-amber-400 mb-2">{value}</div>
      <div className="text-white font-semibold mb-1">{label}</div>
      {sublabel && <div className="text-gray-500 text-sm">{sublabel}</div>}
    </div>
  )
}
