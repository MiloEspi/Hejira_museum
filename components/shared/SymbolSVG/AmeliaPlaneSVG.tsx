"use client";

/**
 * AmeliaPlaneSVG — Lockheed Vega over desert with 6 vapor trails and saguaro cactus.
 */
export default function AmeliaPlaneSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Lockheed Vega over desert with six vapor trails">
      <rect width="64" height="64" fill="#4a7aa0" opacity="0.2" rx="4" />

      {/* Six vapor trails — 6 guitar strings */}
      <g stroke="#d0c4b0" strokeLinecap="round" fill="none">
        <path d="M 4 8 Q 20 10 36 14 Q 48 17 54 18" strokeWidth="0.6" opacity="0.7" />
        <path d="M 4 12 Q 18 14 34 18 Q 46 21 52 22" strokeWidth="0.6" opacity="0.6" />
        <path d="M 4 16 Q 16 18 32 22 Q 44 25 50 26" strokeWidth="0.6" opacity="0.5" />
        <path d="M 4 20 Q 14 22 30 26 Q 42 29 48 30" strokeWidth="0.6" opacity="0.45" />
        <path d="M 4 24 Q 12 26 28 30 Q 40 33 46 34" strokeWidth="0.5" opacity="0.4" />
        <path d="M 4 28 Q 10 30 26 34 Q 38 37 44 38" strokeWidth="0.5" opacity="0.35" />
      </g>

      {/* Lockheed Vega */}
      <g transform="translate(48, 16) rotate(-8)">
        <ellipse cx="0" cy="0" rx="8" ry="1.8" fill="#a67340" />
        <path d="M -4 -1.5 L -2 -6 L 4 -6 L 3 -1.5 Z" fill="#8a5a2b" />
        <path d="M -4 1.5 L -2 6 L 4 6 L 3 1.5 Z" fill="#6e4a20" />
        <path d="M 6 -0.8 L 9 -3 L 10 -0.5 L 10 0.5 L 9 3 L 6 0.8 Z" fill="#8a5a2b" />
        <line x1="-8" y1="-3" x2="-8" y2="3" stroke="#2b1d10" strokeWidth="1" />
        <circle cx="-8" cy="0" r="1" fill="#2b1d10" />
        <ellipse cx="-2" cy="-0.5" rx="1.5" ry="0.8" fill="#1a1208" />
      </g>

      {/* Desert floor */}
      <path d="M 0 50 Q 32 48 64 50 L 64 64 L 0 64 Z" fill="#d4a860" opacity="0.35" />

      {/* Saguaro cactus */}
      <g transform="translate(14, 44)" fill="#4a6a3a" opacity="0.6">
        <rect x="-1.5" y="0" width="3" height="16" rx="1.5" />
        <path d="M 1.5 6 Q 6 6 6 2" stroke="#4a6a3a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M -1.5 9 Q -5 9 -5 5" stroke="#4a6a3a" strokeWidth="2" fill="none" strokeLinecap="round" />
      </g>

      {/* Small cactus */}
      <g transform="translate(46, 50)" fill="#4a6a3a" opacity="0.4">
        <rect x="-1" y="0" width="2" height="10" rx="1" />
        <path d="M 1 4 Q 4 4 4 2" stroke="#4a6a3a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      </g>

      {/* Desert wildflowers */}
      <circle cx="26" cy="56" r="1" fill="#c86040" opacity="0.6" />
      <circle cx="38" cy="55" r="1" fill="#a85a80" opacity="0.6" />
      <circle cx="54" cy="57" r="0.9" fill="#d4a040" opacity="0.5" />
    </svg>
  );
}
