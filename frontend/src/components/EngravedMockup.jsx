/**
 * Engraved-style illustration of a browser window containing a stylized
 * "code/dashboard" composition, rendered as line-art + crosshatching to
 * mimic an old newspaper woodcut/engraving rather than a screenshot.
 * Pure SVG, no raster images — stays crisp at any size and matches the
 * "Catch of the Day" engraving treatment from the brief.
 */
export default function EngravedMockup({ className = '' }) {
  return (
    <svg
      viewBox="0 0 520 360"
      className={className}
      role="img"
      aria-label="Engraved illustration of a software portfolio website displayed in a browser window"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="crosshatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#1A1A1A" strokeWidth="0.6" />
        </pattern>
        <pattern id="crosshatch2" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke="#1A1A1A" strokeWidth="0.5" />
        </pattern>
        <pattern id="dots" width="4" height="4" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.7" fill="#1A1A1A" />
        </pattern>
      </defs>

      {/* Outer browser frame */}
      <rect x="20" y="20" width="480" height="320" fill="none" stroke="#1A1A1A" strokeWidth="3" />

      {/* Browser chrome bar */}
      <rect x="20" y="20" width="480" height="34" fill="none" stroke="#1A1A1A" strokeWidth="2" />
      <circle cx="40" cy="37" r="5" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <circle cx="58" cy="37" r="5" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <circle cx="76" cy="37" r="5" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <rect x="110" y="29" width="280" height="16" fill="none" stroke="#1A1A1A" strokeWidth="1" />
      <text x="118" y="41" fontFamily="IBM Plex Mono, monospace" fontSize="8" fill="#1A1A1A" letterSpacing="1">
        jansidoshi.dev
      </text>

      {/* Sidebar */}
      <rect x="20" y="54" width="86" height="286" fill="url(#crosshatch)" opacity="0.5" />
      <rect x="20" y="54" width="86" height="286" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="34" y={78 + i * 38} width="58" height="10" fill="#FAF8F2" stroke="#1A1A1A" strokeWidth="1" />
      ))}

      {/* Main headline block */}
      <line x1="124" y1="84" x2="380" y2="84" stroke="#1A1A1A" strokeWidth="3" />
      <line x1="124" y1="100" x2="340" y2="100" stroke="#1A1A1A" strokeWidth="3" />
      <line x1="124" y1="122" x2="470" y2="122" stroke="#1A1A1A" strokeWidth="1" />
      <line x1="124" y1="134" x2="470" y2="134" stroke="#1A1A1A" strokeWidth="1" />
      <line x1="124" y1="146" x2="410" y2="146" stroke="#1A1A1A" strokeWidth="1" />

      {/* Code-ish panel with crosshatch shading */}
      <rect x="124" y="168" width="170" height="140" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <rect x="124" y="168" width="170" height="22" fill="url(#crosshatch2)" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line
          key={i}
          x1="136"
          y1={206 + i * 16}
          x2={136 + (i % 3 === 0 ? 130 : 90)}
          y2={206 + i * 16}
          stroke="#1A1A1A"
          strokeWidth="1"
        />
      ))}

      {/* Stat / chart card */}
      <rect x="306" y="168" width="164" height="140" fill="none" stroke="#1A1A1A" strokeWidth="1.5" />
      <polyline
        points="318,280 344,250 368,262 392,224 416,238 440,196 458,210"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="2"
      />
      {[318, 344, 368, 392, 416, 440, 458].map((x, i) => (
        <circle key={i} cx={x} cy={[280, 250, 262, 224, 238, 196, 210][i]} r="2.4" fill="#1A1A1A" />
      ))}
      <rect x="306" y="168" width="164" height="18" fill="url(#dots)" opacity="0.6" />
    </svg>
  )
}
