"use client";

export default function SharonDressSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Wedding dress in storefront">
      <g transform="translate(32, 32)">
        {/* Dress */}
        <path
          d="M -2 -16 L 2 -16 L 4 -10 L 10 0 L 12 18 L -12 18 L -10 0 L -4 -10 Z"
          fill="#ede1c8"
          stroke="#4a3520"
          strokeWidth="0.8"
        />
        {/* Lace detail */}
        <path d="M -10 0 Q 0 4 10 0" stroke="#4a3520" strokeWidth="0.5" fill="none" strokeDasharray="1,1" />
        <path d="M -11 8 Q 0 12 11 8" stroke="#4a3520" strokeWidth="0.5" fill="none" strokeDasharray="1,1" />
        {/* Neck */}
        <rect x="-1.5" y="-22" width="3" height="6" fill="#6e5235" />
        {/* Stand */}
        <line x1="0" y1="18" x2="0" y2="26" stroke="#4a3520" strokeWidth="1" />
        <ellipse cx="0" cy="26" rx="6" ry="1.5" fill="#4a3520" />
      </g>
      {/* Ferry hint */}
      <path d="M 4 50 L 14 50 L 12 54 L 6 54 Z" fill="#1f3a4a" opacity="0.5" />
    </svg>
  );
}
