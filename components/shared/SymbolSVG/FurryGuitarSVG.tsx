"use client";

export default function FurryGuitarSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Furry Lewis' guitar">
      {/* Old guitar leaning */}
      <g transform="translate(32, 34) rotate(-22)">
        {/* Body */}
        <ellipse cx="0" cy="10" rx="11" ry="14" fill="#6e4a20" />
        <ellipse cx="0" cy="10" rx="9" ry="12" fill="#8a5a2b" />
        {/* Sound hole */}
        <circle cx="0" cy="10" r="3.5" fill="#1a1208" />
        {/* Neck */}
        <rect x="-2" y="-18" width="4" height="20" fill="#4a3520" />
        {/* Headstock */}
        <rect x="-4" y="-22" width="8" height="6" fill="#2b1d10" />
        {/* Strings */}
        <line x1="-1" y1="-16" x2="-1" y2="22" stroke="#c89554" strokeWidth="0.4" />
        <line x1="0" y1="-16" x2="0" y2="22" stroke="#c89554" strokeWidth="0.4" />
        <line x1="1" y1="-16" x2="1" y2="22" stroke="#c89554" strokeWidth="0.4" />
      </g>
      {/* Neon hint */}
      <circle cx="14" cy="14" r="1.5" fill="#a83a48" opacity="0.7" />
    </svg>
  );
}
