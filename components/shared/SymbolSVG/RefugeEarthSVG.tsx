"use client";

/**
 * RefugeEarthSVG — Earth seen from space (Blue Marble).
 * Lone phone booth on empty road below. Rocky Mountains. "NEXT GAS 87 MILES" sign.
 */
export default function RefugeEarthSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Earth from space with phone booth on empty road">
      {/* Dark space */}
      <rect width="64" height="34" fill="#0a0a14" opacity="0.2" rx="4" />

      {/* Earth — Blue Marble */}
      <g transform="translate(32, 16)">
        <circle cx="0" cy="0" r="13" fill="#1f3a5a" />
        {/* Continents */}
        <path d="M -8 -4 Q -3 -8 2 -4 Q 4 -1 0 2 Q -5 0 -8 -4" fill="#3a6a3a" opacity="0.65" />
        <path d="M 4 3 Q 8 1 10 5 Q 7 8 4 6" fill="#3a6a3a" opacity="0.65" />
        <path d="M -6 4 Q -3 6 -1 8 Q -4 8 -6 4" fill="#3a6a3a" opacity="0.55" />
        {/* Clouds */}
        <path d="M -8 -1 Q -4 -3 0 -1 Q 4 -3 8 -1" stroke="#c8d6dd" strokeWidth="0.5" fill="none" opacity="0.4" />
        <path d="M -6 6 Q -2 4 2 6" stroke="#c8d6dd" strokeWidth="0.4" fill="none" opacity="0.3" />
        {/* Atmosphere glow */}
        <circle cx="0" cy="0" r="13" fill="none" stroke="#5a8ab0" strokeWidth="0.8" opacity="0.4" />
        <circle cx="0" cy="0" r="14.5" fill="none" stroke="#5a8ab0" strokeWidth="0.4" opacity="0.2" />
      </g>

      {/* Stars */}
      <circle cx="8" cy="6" r="0.5" fill="#ede1c8" opacity="0.6" />
      <circle cx="54" cy="8" r="0.4" fill="#ede1c8" opacity="0.5" />
      <circle cx="16" cy="22" r="0.3" fill="#ede1c8" opacity="0.4" />
      <circle cx="50" cy="18" r="0.4" fill="#ede1c8" opacity="0.5" />

      {/* Road — empty highway stretching to horizon */}
      <path d="M 26 64 L 30 40 L 34 40 L 38 64 Z" fill="#4a4a4a" opacity="0.3" />
      <line x1="32" y1="42" x2="32" y2="62" stroke="#d4c090" strokeWidth="0.4" strokeDasharray="2,3" opacity="0.4" />

      {/* Rocky Mountains in distance */}
      <g opacity="0.25">
        <path d="M 0 40 L 6 32 L 10 36 L 16 30 L 22 36 L 26 34 L 30 40 Z" fill="#6a7a6a" />
        <path d="M 34 40 L 38 34 L 44 30 L 50 36 L 56 32 L 60 36 L 64 40 Z" fill="#6a7a6a" />
        {/* Snow */}
        <path d="M 16 30 L 17 33 L 15 33 Z" fill="#d8d0c0" opacity="0.6" />
        <path d="M 44 30 L 45 33 L 43 33 Z" fill="#d8d0c0" opacity="0.6" />
      </g>

      {/* Phone booth */}
      <g transform="translate(22, 44)" opacity="0.5">
        <rect x="-2" y="-6" width="4" height="8" fill="#a83a48" opacity="0.6" />
        <rect x="-1.5" y="-5" width="3" height="5" fill="#c8d6dd" opacity="0.3" />
        <rect x="-0.3" y="-1" width="0.6" height="1.5" fill="#1a1208" />
      </g>

      {/* Road sign — "NEXT GAS 87 MILES" */}
      <g transform="translate(42, 44)" opacity="0.45">
        <line x1="0" y1="0" x2="0" y2="10" stroke="#4a4a4a" strokeWidth="0.8" />
        <rect x="-6" y="-3" width="12" height="4" fill="#2a5a2a" rx="0.5" />
        <text x="0" y="-0.5" textAnchor="middle" fontSize="2.2" fill="#ede1c8" fontFamily="monospace">NEXT GAS</text>
        <text x="0" y="1.5" textAnchor="middle" fontSize="1.8" fill="#ede1c8" fontFamily="monospace">87 MILES</text>
      </g>

      {/* Ground / desert */}
      <path d="M 0 54 Q 32 52 64 54 L 64 64 L 0 64 Z" fill="#8a7a5a" opacity="0.2" />
    </svg>
  );
}
