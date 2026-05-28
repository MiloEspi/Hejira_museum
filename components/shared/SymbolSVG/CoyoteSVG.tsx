"use client";

/**
 * CoyoteSVG — Coyote standing in Saskatchewan prairie looking back.
 * Grain elevator silhouette behind. Full moon. Tall grass.
 * Style: explorer's journal / adventure book illustration.
 */
export default function CoyoteSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Coyote in Saskatchewan prairie">
      {/* Night sky */}
      <defs>
        <linearGradient id="prairie-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a2030" />
          <stop offset="60%" stopColor="#3a4050" />
          <stop offset="100%" stopColor="#6a6a5a" />
        </linearGradient>
      </defs>
      <rect width="64" height="40" fill="url(#prairie-sky)" opacity="0.35" rx="4" />

      {/* Full moon */}
      <circle cx="50" cy="12" r="7" fill="#ede1c8" opacity="0.8" />
      <circle cx="48" cy="11" r="1" fill="#d9c8a6" opacity="0.5" />
      <circle cx="51" cy="14" r="1.5" fill="#d9c8a6" opacity="0.4" />

      {/* Grain elevator silhouette — Saskatchewan landmark */}
      <g opacity="0.45">
        <rect x="8" y="22" width="8" height="20" fill="#2b1d10" />
        <rect x="10" y="16" width="4" height="8" fill="#2b1d10" />
        <path d="M 10 16 L 12 12 L 14 16 Z" fill="#2b1d10" />
        {/* Annex */}
        <rect x="16" y="30" width="5" height="12" fill="#2b1d10" />
        {/* Second elevator far */}
        <rect x="52" y="28" width="5" height="14" fill="#2b1d10" opacity="0.3" />
        <path d="M 52 28 L 54.5 24 L 57 28 Z" fill="#2b1d10" opacity="0.3" />
      </g>

      {/* Prairie ground */}
      <path d="M 0 42 Q 16 40 32 42 Q 48 44 64 42 L 64 64 L 0 64 Z" fill="#8a7a4a" opacity="0.3" />

      {/* Tall grass */}
      <g stroke="#6a6a3a" strokeWidth="0.7" fill="none" opacity="0.55">
        <path d="M 2 50 Q 3 44 4 42" />
        <path d="M 5 52 Q 6 46 8 43" />
        <path d="M 10 50 Q 11 45 12 42" />
        <path d="M 44 50 Q 45 44 46 41" />
        <path d="M 48 52 Q 49 46 50 43" />
        <path d="M 54 50 Q 55 45 56 42" />
        <path d="M 58 52 Q 59 47 60 44" />
        <path d="M 38 54 Q 39 49 40 46" />
        <path d="M 14 52 Q 15 47 16 44" />
      </g>

      {/* Coyote — standing, looking back */}
      <g transform="translate(30, 38)">
        {/* Body */}
        <ellipse cx="0" cy="0" rx="8" ry="4.5" fill="#8a6a3a" />
        {/* Belly lighter */}
        <ellipse cx="0" cy="1.5" rx="6" ry="2.5" fill="#a8884a" opacity="0.5" />
        {/* Head — turned back looking over shoulder */}
        <circle cx="-6" cy="-5" r="3.5" fill="#8a6a3a" />
        {/* Snout */}
        <ellipse cx="-9" cy="-4.5" rx="2.5" ry="1.8" fill="#9a7a4a" />
        <circle cx="-11" cy="-5" r="0.5" fill="#1a1208" />
        {/* Ears — pointed */}
        <path d="M -5 -8 L -3 -14 L -1 -8" fill="#8a6a3a" />
        <path d="M -8 -7 L -10 -13 L -6 -8" fill="#8a6a3a" />
        <path d="M -4 -9 L -3 -12 L -2 -9" fill="#a88050" opacity="0.5" />
        <path d="M -7 -8 L -9 -12 L -6.5 -8.5" fill="#a88050" opacity="0.5" />
        {/* Eye — glinting */}
        <circle cx="-7" cy="-5.5" r="1" fill="#c89554" />
        <circle cx="-6.7" cy="-5.7" r="0.4" fill="#0a0a0a" />
        {/* Front legs */}
        <line x1="-4" y1="4" x2="-5" y2="12" stroke="#6a5030" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="-1" y1="4" x2="-2" y2="12" stroke="#6a5030" strokeWidth="1.5" strokeLinecap="round" />
        {/* Back legs */}
        <line x1="5" y1="4" x2="6" y2="12" stroke="#6a5030" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="7" y1="3" x2="9" y2="12" stroke="#6a5030" strokeWidth="1.5" strokeLinecap="round" />
        {/* Tail — bushy, curving up */}
        <path d="M 8 -1 Q 14 -4 16 -8 Q 18 -12 16 -10 Q 14 -6 12 -2" stroke="#8a6a3a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M 15 -9 Q 17 -11 16 -8" stroke="#a88050" strokeWidth="1" fill="none" opacity="0.5" />
        {/* Fur texture on body */}
        <path d="M -3 -2 Q -1 -3 1 -2" stroke="#6a5030" strokeWidth="0.4" fill="none" />
        <path d="M 2 -1 Q 4 -2 6 -1" stroke="#6a5030" strokeWidth="0.4" fill="none" />
      </g>

      {/* Stars */}
      <circle cx="20" cy="8" r="0.5" fill="#ede1c8" opacity="0.6" />
      <circle cx="35" cy="5" r="0.4" fill="#ede1c8" opacity="0.5" />
      <circle cx="40" cy="10" r="0.3" fill="#ede1c8" opacity="0.4" />
    </svg>
  );
}
