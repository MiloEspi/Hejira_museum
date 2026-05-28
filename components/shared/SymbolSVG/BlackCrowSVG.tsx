"use client";

/**
 * BlackCrowSVG — Crow perched on cedar branch with BC mountains behind.
 * Golden eye. Joni's cape flowing below like the woman and the bird are one.
 * Style: illustrated adventure book / explorer's journal.
 */
export default function BlackCrowSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Black crow on cedar branch over BC mountains">
      {/* Sky gradient */}
      <defs>
        <linearGradient id="bc-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a9aaa" />
          <stop offset="100%" stopColor="#c4bca0" />
        </linearGradient>
      </defs>
      <rect width="64" height="64" fill="url(#bc-sky)" opacity="0.3" rx="4" />

      {/* Mountains — escarpada BC coast */}
      <path d="M 0 42 L 8 22 L 14 30 L 20 18 L 26 28 L 32 14 L 38 26 L 44 20 L 50 28 L 56 16 L 64 34 L 64 42 Z" fill="#4a5a3a" opacity="0.5" />
      <path d="M 0 44 L 10 28 L 16 34 L 24 24 L 30 32 L 38 22 L 46 30 L 54 24 L 64 38 L 64 44 Z" fill="#5a6a4a" opacity="0.45" />
      {/* Snow caps */}
      <path d="M 20 18 L 22 22 L 18 22 Z" fill="#d8d0c0" opacity="0.6" />
      <path d="M 32 14 L 34 18 L 30 18 Z" fill="#d8d0c0" opacity="0.6" />
      <path d="M 56 16 L 58 20 L 54 20 Z" fill="#d8d0c0" opacity="0.6" />

      {/* Conifer trees — cedar/fir */}
      <g opacity="0.5">
        <path d="M 6 42 L 8 34 L 10 42 Z" fill="#3a4a2a" />
        <path d="M 12 44 L 15 32 L 18 44 Z" fill="#3a4a2a" />
        <path d="M 50 42 L 52 36 L 54 42 Z" fill="#3a4a2a" />
        <path d="M 56 44 L 58 38 L 60 44 Z" fill="#3a4a2a" />
      </g>

      {/* Cedar branch — crow's perch */}
      <path
        d="M 14 36 Q 24 34 34 32 Q 42 31 50 33"
        stroke="#5a3a20"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Branch details */}
      <path d="M 20 33 L 18 30 M 22 33 L 24 29 M 28 32 L 26 28 M 30 32 L 32 28" stroke="#4a5a3a" strokeWidth="0.8" fill="none" />
      <path d="M 36 31 L 34 28 M 38 31 L 40 27 M 42 32 L 44 28" stroke="#4a5a3a" strokeWidth="0.8" fill="none" />

      {/* Crow — perched, detailed */}
      <g transform="translate(32, 28)">
        {/* Body */}
        <ellipse cx="0" cy="0" rx="7" ry="5" fill="#0a0a0a" />
        {/* Head */}
        <circle cx="7" cy="-4" r="3.5" fill="#0a0a0a" />
        {/* Beak — sharp, defined */}
        <path d="M 10.5 -4 L 16 -3 L 10.5 -2 Z" fill="#1a1a1a" />
        <line x1="10.5" y1="-3.5" x2="14" y2="-3" stroke="#2a2a2a" strokeWidth="0.3" />
        {/* Eye — golden */}
        <circle cx="8.5" cy="-4.5" r="1" fill="#c89554" />
        <circle cx="8.8" cy="-4.7" r="0.4" fill="#0a0a0a" />
        {/* Wing — folded */}
        <path d="M -2 -2 Q -8 -4 -10 0 Q -8 2 -6 2 Q -3 1 -2 -2" fill="#1a1a1a" />
        {/* Wing feather detail */}
        <line x1="-6" y1="-1" x2="-9" y2="-2" stroke="#2a2a2a" strokeWidth="0.5" />
        <line x1="-4" y1="0" x2="-7" y2="-1" stroke="#2a2a2a" strokeWidth="0.5" />
        {/* Tail */}
        <path d="M -7 0 L -12 3 L -10 0 L -7 -1 Z" fill="#0a0a0a" />
        {/* Feet on branch */}
        <path d="M -2 5 L -3 7 L -5 7 M -2 5 L -1 7 L 1 7" stroke="#1a1208" strokeWidth="0.8" fill="none" />
        <path d="M 3 5 L 2 7 L 0 7 M 3 5 L 4 7 L 6 7" stroke="#1a1208" strokeWidth="0.8" fill="none" />
        {/* Breast feather texture */}
        <path d="M 3 0 Q 5 2 3 3" stroke="#2a2a2a" strokeWidth="0.4" fill="none" />
        <path d="M 1 1 Q 3 3 1 4" stroke="#2a2a2a" strokeWidth="0.4" fill="none" />
      </g>

      {/* Joni's cape — flowing below the crow, like they're one entity */}
      <path
        d="M 26 38 Q 28 42 24 48 Q 20 54 22 58 M 38 38 Q 36 42 40 48 Q 44 54 42 58"
        stroke="#0a0a0a"
        strokeWidth="1.2"
        fill="none"
        opacity="0.6"
      />
      <path
        d="M 26 38 Q 32 44 38 38 Q 36 46 32 50 Q 28 46 26 38"
        fill="#0a0a0a"
        opacity="0.25"
      />

      {/* Fog / mist at base */}
      <ellipse cx="32" cy="56" rx="28" ry="6" fill="#c4bca0" opacity="0.25" />
    </svg>
  );
}
