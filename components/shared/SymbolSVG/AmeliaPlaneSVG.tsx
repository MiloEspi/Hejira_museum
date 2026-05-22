"use client";

export default function AmeliaPlaneSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Amelia Earhart's Lockheed Vega">
      {/* Lockheed Vega style plane */}
      <g transform="translate(32, 32) rotate(-15)">
        {/* Fuselage */}
        <ellipse cx="0" cy="0" rx="22" ry="3" fill="#8a5a2b" />
        {/* Wings */}
        <path d="M -16 -1 L -2 -12 L 6 -12 L 2 -1 Z" fill="#a67340" />
        <path d="M -16 1 L -2 12 L 6 12 L 2 1 Z" fill="#6e4a20" />
        {/* Tail */}
        <path d="M 18 -1 L 22 -6 L 24 -1 L 24 1 L 22 6 L 18 1 Z" fill="#8a5a2b" />
        {/* Propeller */}
        <line x1="-22" y1="-6" x2="-22" y2="6" stroke="#2b1d10" strokeWidth="1.5" />
        <circle cx="-22" cy="0" r="2" fill="#2b1d10" />
        {/* Cockpit */}
        <ellipse cx="-4" cy="-1" rx="3" ry="1.5" fill="#1a1208" />
      </g>
      {/* Vapor trails */}
      <path d="M 50 18 Q 56 22 60 26" stroke="#c89554" strokeWidth="0.6" fill="none" opacity="0.7" />
      <path d="M 50 22 Q 56 26 60 30" stroke="#c89554" strokeWidth="0.6" fill="none" opacity="0.5" />
    </svg>
  );
}
