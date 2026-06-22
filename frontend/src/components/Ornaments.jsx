/** Small line-art engraved ornaments, used sparingly as section marks. */

export function SealOrnament({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="44" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="36" fill="none" stroke="#1A1A1A" strokeWidth="1" />
      {Array.from({ length: 16 }).map((_, i) => {
        const angle = (i * Math.PI) / 8
        const x1 = 50 + 36 * Math.cos(angle)
        const y1 = 50 + 36 * Math.sin(angle)
        const x2 = 50 + 44 * Math.cos(angle)
        const y2 = 50 + 44 * Math.sin(angle)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1A1A1A" strokeWidth="1" />
      })}
      <polygon points="50,18 56,50 50,82 44,50" fill="#1A1A1A" />
      <polygon points="18,50 50,44 82,50 50,56" fill="none" stroke="#1A1A1A" strokeWidth="1" />
      <text x="50" y="50" textAnchor="middle" dominantBaseline="central" fontFamily="IBM Plex Mono, monospace" fontSize="9" fill="#FAF8F2">
        JD
      </text>
    </svg>
  )
}

export function GearOrnament({ className = '' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-hidden="true">
      <circle cx="40" cy="40" r="14" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i * Math.PI) / 5
        const x1 = 40 + 18 * Math.cos(angle)
        const y1 = 40 + 18 * Math.sin(angle)
        const x2 = 40 + 26 * Math.cos(angle)
        const y2 = 40 + 26 * Math.sin(angle)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1A1A1A" strokeWidth="2" />
      })}
    </svg>
  )
}

export function LaurelDivider({ className = '' }) {
  return (
    <svg viewBox="0 0 200 24" className={className} aria-hidden="true">
      <line x1="0" y1="12" x2="80" y2="12" stroke="#1A1A1A" strokeWidth="1" />
      <line x1="120" y1="12" x2="200" y2="12" stroke="#1A1A1A" strokeWidth="1" />
      <circle cx="100" cy="12" r="4" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <circle cx="100" cy="12" r="1.2" fill="#1A1A1A" />
    </svg>
  )
}
