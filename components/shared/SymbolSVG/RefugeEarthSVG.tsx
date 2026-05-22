"use client";

export default function RefugeEarthSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Earth from space">
      <g transform="translate(32, 32)">
        {/* Earth */}
        <circle cx="0" cy="0" r="18" fill="#1f3a4a" />
        {/* Continents abstract */}
        <path d="M -10 -6 Q -4 -10 2 -6 Q 4 -2 0 2 Q -6 0 -10 -6" fill="#4a6a3a" opacity="0.7" />
        <path d="M 4 4 Q 10 2 12 8 Q 8 12 4 8" fill="#4a6a3a" opacity="0.7" />
        <path d="M -8 6 Q -4 8 -2 12 Q -6 12 -8 6" fill="#4a6a3a" opacity="0.7" />
        {/* Atmosphere glow */}
        <circle cx="0" cy="0" r="18" fill="none" stroke="#c8d6dd" strokeWidth="0.6" opacity="0.5" />
        <circle cx="0" cy="0" r="20" fill="none" stroke="#c8d6dd" strokeWidth="0.3" opacity="0.3" />
        {/* Stars around */}
        <circle cx="-22" cy="-18" r="0.6" fill="#ede1c8" />
        <circle cx="22" cy="-20" r="0.5" fill="#ede1c8" />
        <circle cx="20" cy="20" r="0.7" fill="#ede1c8" />
        <circle cx="-24" cy="14" r="0.5" fill="#ede1c8" />
      </g>
    </svg>
  );
}
