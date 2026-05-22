"use client";

export default function BlackCrowSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Black crow in flight">
      <g transform="translate(32, 32)">
        {/* Body */}
        <ellipse cx="0" cy="0" rx="6" ry="4" fill="#0a0a0a" />
        {/* Head */}
        <circle cx="6" cy="-3" r="3" fill="#0a0a0a" />
        {/* Beak */}
        <path d="M 9 -3 L 14 -2 L 9 -1 Z" fill="#0a0a0a" />
        {/* Eye */}
        <circle cx="7" cy="-3.5" r="0.5" fill="#c89554" />
        {/* Left wing */}
        <path d="M -3 -1 Q -16 -10 -22 -4 Q -18 -2 -14 -1 Q -10 0 -6 0 Z" fill="#0a0a0a" />
        {/* Right wing */}
        <path d="M 3 -1 Q 16 -10 22 -4 Q 18 -2 14 -1 Q 10 0 6 0 Z" fill="#0a0a0a" />
        {/* Tail */}
        <path d="M -6 0 L -10 4 L -8 1 L -6 2 Z" fill="#0a0a0a" />
        {/* Feather details */}
        <line x1="-12" y1="-3" x2="-14" y2="-6" stroke="#0a0a0a" strokeWidth="1" />
        <line x1="-16" y1="-3" x2="-18" y2="-6" stroke="#0a0a0a" strokeWidth="1" />
        <line x1="12" y1="-3" x2="14" y2="-6" stroke="#0a0a0a" strokeWidth="1" />
        <line x1="16" y1="-3" x2="18" y2="-6" stroke="#0a0a0a" strokeWidth="1" />
      </g>
    </svg>
  );
}
