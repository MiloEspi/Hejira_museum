"use client";

/**
 * HejiraSnowflakeSVG — Joni skating on frozen Lake Mendota.
 * Cape open like wings. Detailed snowflake overlay. Grey midwest sky.
 * Tiny Joel Bernstein photographer silhouette in the distance.
 */
export default function HejiraSnowflakeSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Joni skating on frozen lake with snowflake">
      {/* Grey winter sky */}
      <rect width="64" height="36" fill="#8a9098" opacity="0.2" rx="4" />

      {/* Frozen lake surface */}
      <path d="M 0 36 L 64 36 L 64 64 L 0 64 Z" fill="#c8d6dd" opacity="0.25" />
      {/* Ice cracks */}
      <g stroke="#9aacb8" strokeWidth="0.3" fill="none" opacity="0.4">
        <path d="M 10 44 L 20 42 L 30 46" />
        <path d="M 40 40 L 50 44 L 58 42" />
        <path d="M 15 52 L 28 50 L 35 54" />
      </g>

      {/* Joni skating — silhouette with cape as wings */}
      <g transform="translate(32, 40)">
        {/* Shadow on ice */}
        <ellipse cx="0" cy="10" rx="8" ry="1.5" fill="#0a0a0a" opacity="0.15" />
        {/* Legs — skating pose */}
        <line x1="-1" y1="4" x2="-4" y2="9" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
        <line x1="1" y1="4" x2="5" y2="8" stroke="#0a0a0a" strokeWidth="1.2" strokeLinecap="round" />
        {/* Body */}
        <line x1="0" y1="-2" x2="0" y2="4" stroke="#0a0a0a" strokeWidth="1.5" strokeLinecap="round" />
        {/* Head */}
        <circle cx="0" cy="-4" r="2" fill="#0a0a0a" />
        {/* Cape — spread like wings / crow in flight */}
        <path d="M -1 0 Q -10 -6 -16 -2 Q -14 0 -10 1 Q -6 2 -1 1" fill="#0a0a0a" opacity="0.8" />
        <path d="M 1 0 Q 10 -6 16 -2 Q 14 0 10 1 Q 6 2 1 1" fill="#0a0a0a" opacity="0.8" />
        {/* Cape billowing detail */}
        <path d="M -12 -1 Q -14 -3 -16 -2" stroke="#1a1a1a" strokeWidth="0.4" fill="none" />
        <path d="M 12 -1 Q 14 -3 16 -2" stroke="#1a1a1a" strokeWidth="0.4" fill="none" />
      </g>

      {/* Joel Bernstein — tiny photographer silhouette in distance */}
      <g transform="translate(52, 36)" opacity="0.35">
        <circle cx="0" cy="-2" r="1" fill="#0a0a0a" />
        <line x1="0" y1="-1" x2="0" y2="2" stroke="#0a0a0a" strokeWidth="0.8" />
        <rect x="0.5" y="-2.5" width="2" height="1.5" fill="#0a0a0a" /> {/* camera */}
      </g>

      {/* Snowflake overlay — detailed, crystalline */}
      <g transform="translate(32, 18)" stroke="#2b1d10" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.55">
        {/* Main axes */}
        <line x1="0" y1="-12" x2="0" y2="12" />
        <line x1="-10.4" y1="-6" x2="10.4" y2="6" />
        <line x1="-10.4" y1="6" x2="10.4" y2="-6" />
        {/* Branches */}
        <path d="M 0 -12 L -2 -9 M 0 -12 L 2 -9" />
        <path d="M 0 12 L -2 9 M 0 12 L 2 9" />
        <path d="M -10.4 -6 L -8 -7 M -10.4 -6 L -9 -4" />
        <path d="M 10.4 6 L 8 7 M 10.4 6 L 9 4" />
        <path d="M -10.4 6 L -8 7 M -10.4 6 L -9 4" />
        <path d="M 10.4 -6 L 8 -7 M 10.4 -6 L 9 -4" />
        {/* Inner crystal */}
        <circle cx="0" cy="0" r="3" strokeWidth="0.5" strokeDasharray="1.5,1.5" />
      </g>

      {/* Distant tree line */}
      <g opacity="0.2">
        <path d="M 0 36 Q 4 33 8 36 Q 12 33 16 36 Q 20 34 24 36 Q 28 33 32 36 Q 36 34 40 36 Q 44 33 48 36 Q 52 34 56 36 Q 60 33 64 36" fill="#4a5a4a" />
      </g>
    </svg>
  );
}
