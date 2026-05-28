"use client";

/**
 * FurryGuitarSVG — Furry Lewis SEATED (amputee) with hat, guitar.
 * Beale Street neon behind. Jack Daniel's bottle. Deteriorated buildings.
 */
export default function FurryGuitarSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Furry Lewis seated with guitar on Beale Street">
      {/* Dark background — night scene */}
      <rect width="64" height="64" fill="#1a1208" opacity="0.2" rx="4" />

      {/* Buildings silhouette behind */}
      <g fill="#2b1d10" opacity="0.3">
        <rect x="2" y="14" width="12" height="50" />
        <rect x="16" y="18" width="10" height="46" />
        <rect x="40" y="12" width="14" height="52" />
        <rect x="56" y="16" width="8" height="48" />
      </g>

      {/* Beale Street neon sign — New Daisy Theatre */}
      <g transform="translate(46, 14)">
        <rect x="-8" y="-4" width="16" height="8" fill="#1a1208" stroke="#a83a48" strokeWidth="0.6" rx="1" />
        <text x="0" y="1" textAnchor="middle" fontSize="4" fill="#a83a48" fontFamily="serif" opacity="0.9">BEALE</text>
        {/* Neon glow */}
        <rect x="-9" y="-5" width="18" height="10" fill="none" stroke="#a83a48" strokeWidth="0.3" opacity="0.4" rx="2" />
      </g>

      {/* Furry Lewis — seated on chair */}
      <g transform="translate(26, 32)">
        {/* Chair */}
        <path d="M -6 12 L -6 20 M 6 12 L 6 20 M -6 12 L 6 12" stroke="#4a3520" strokeWidth="1" fill="none" />
        <path d="M -6 6 L -6 12 L 6 12 L 6 6" stroke="#4a3520" strokeWidth="0.8" fill="none" />

        {/* Legs — one leg (amputee), one prosthetic/pant fold */}
        <line x1="-2" y1="10" x2="-4" y2="18" stroke="#3a5a7a" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="10" x2="3" y2="14" stroke="#3a5a7a" strokeWidth="2" strokeLinecap="round" />

        {/* Body — denim */}
        <path d="M -4 0 L -5 10 L 5 10 L 4 0 Z" fill="#3a5a7a" />
        {/* Torso */}
        <path d="M -4 -6 L -4 0 L 4 0 L 4 -6 Z" fill="#4a6a8a" />

        {/* Arms — playing guitar */}
        <line x1="-4" y1="-4" x2="-8" y2="2" stroke="#5a3a20" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="-4" x2="10" y2="-2" stroke="#5a3a20" strokeWidth="1.5" strokeLinecap="round" />

        {/* Head */}
        <circle cx="0" cy="-10" r="4" fill="#5a3a20" />
        {/* Hat — felt fedora */}
        <path d="M -6 -12 Q -5 -16 0 -16 Q 5 -16 6 -12 L -6 -12 Z" fill="#2b1d10" />
        <rect x="-7" y="-12" width="14" height="1.5" fill="#2b1d10" rx="0.5" />
        {/* Face features */}
        <circle cx="-1.5" cy="-10" r="0.5" fill="#1a1208" />
        <circle cx="1.5" cy="-10" r="0.5" fill="#1a1208" />
        <path d="M -1 -8.5 Q 0 -7.5 1 -8.5" stroke="#1a1208" strokeWidth="0.4" fill="none" />

        {/* Guitar — acoustic */}
        <g transform="translate(8, -2) rotate(25)">
          <ellipse cx="0" cy="6" rx="5" ry="7" fill="#6e4a20" stroke="#4a3520" strokeWidth="0.5" />
          <circle cx="0" cy="6" r="2" fill="#1a1208" />
          <rect x="-1" y="-10" width="2" height="12" fill="#4a3520" />
          <rect x="-2" y="-12" width="4" height="3" fill="#2b1d10" />
          {/* Strings */}
          <line x1="-0.5" y1="-9" x2="-0.5" y2="12" stroke="#c89554" strokeWidth="0.25" />
          <line x1="0.5" y1="-9" x2="0.5" y2="12" stroke="#c89554" strokeWidth="0.25" />
        </g>
      </g>

      {/* Jack Daniel's bottle */}
      <g transform="translate(10, 48)" opacity="0.5">
        <rect x="-2" y="0" width="4" height="10" fill="#1a1208" rx="1" />
        <rect x="-1" y="-2" width="2" height="3" fill="#1a1208" />
        <rect x="-1.5" y="2" width="3" height="4" fill="#ede1c8" opacity="0.6" />
      </g>

      {/* Street/floor */}
      <line x1="0" y1="56" x2="64" y2="56" stroke="#4a3520" strokeWidth="0.5" opacity="0.3" />
    </svg>
  );
}
