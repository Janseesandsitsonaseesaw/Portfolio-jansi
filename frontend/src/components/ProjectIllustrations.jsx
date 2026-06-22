/**
 * Tiny engraved-style illustrations per project, line-art only,
 * each loosely themed to the project's domain.
 */

export function POSIllustration({ className }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <rect x="10" y="20" width="100" height="60" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <rect x="10" y="20" width="100" height="14" fill="none" stroke="#1A1A1A" strokeWidth="1" />
      <line x1="22" y1="44" x2="70" y2="44" stroke="#1A1A1A" strokeWidth="1" />
      <line x1="22" y1="54" x2="70" y2="54" stroke="#1A1A1A" strokeWidth="1" />
      <line x1="22" y1="64" x2="55" y2="64" stroke="#1A1A1A" strokeWidth="1" />
      <rect x="80" y="42" width="20" height="28" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <line x1="84" y1="48" x2="96" y2="48" stroke="#1A1A1A" strokeWidth="1" />
      <line x1="84" y1="54" x2="96" y2="54" stroke="#1A1A1A" strokeWidth="1" />
      <line x1="84" y1="60" x2="92" y2="60" stroke="#1A1A1A" strokeWidth="1" />
    </svg>
  )
}

export function QueryIllustration({ className }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <ellipse cx="60" cy="28" rx="38" ry="10" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M22 28 V70 A38 10 0 0 0 98 70 V28" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <path d="M22 49 A38 10 0 0 0 98 49" fill="none" stroke="#1A1A1A" strokeWidth="1" />
      <path d="M70 60 L88 78 M84 60 L66 78" stroke="#1A1A1A" strokeWidth="2" />
    </svg>
  )
}

export function HotelIllustration({ className }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <rect x="20" y="30" width="80" height="50" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      {[0, 1, 2].map((row) =>
        [0, 1, 2, 3].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={30 + col * 16}
            y={38 + row * 14}
            width="10"
            height="9"
            fill="none"
            stroke="#1A1A1A"
            strokeWidth="1"
          />
        ))
      )}
      <polygon points="20,30 60,12 100,30" fill="none" stroke="#1A1A1A" strokeWidth="2" />
    </svg>
  )
}

export function DesktopOSIllustration({ className }) {
  return (
    <svg viewBox="0 0 120 100" className={className} aria-hidden="true">
      <rect x="14" y="16" width="50" height="36" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <line x1="14" y1="24" x2="64" y2="24" stroke="#1A1A1A" strokeWidth="1" />
      <rect x="40" y="34" width="66" height="44" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <line x1="40" y1="44" x2="106" y2="44" stroke="#1A1A1A" strokeWidth="1" />
      <circle cx="46" cy="39" r="1.6" fill="#1A1A1A" />
      <circle cx="52" cy="39" r="1.6" fill="#1A1A1A" />
      <line x1="48" y1="84" x2="80" y2="84" stroke="#1A1A1A" strokeWidth="2" />
    </svg>
  )
}
