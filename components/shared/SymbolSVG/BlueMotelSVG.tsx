"use client";

/**
 * BlueMotelSVG — "DeSoto MOTEL" neon sign in electric blue.
 * Palm tree. Open door showing blue bedspread. Savannah beach behind. Guitar.
 */
export default function BlueMotelSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="DeSoto Motel neon sign with palm tree and beach">
      {/* Night sky */}
      <rect width="64" height="64" fill="#1a2030" opacity="0.2" rx="4" />

      {/* Beach / sand behind */}
      <path d="M 0 48 Q 32 46 64 48 L 64 64 L 0 64 Z" fill="#d4c090" opacity="0.2" />
      {/* Ocean hint */}
      <path d="M 0 44 Q 32 42 64 44 L 64 48 L 0 48 Z" fill="#3a6a8a" opacity="0.15" />

      {/* Motel building — modest */}
      <rect x="18" y="28" width="30" height="22" fill="#8a7a6a" opacity="0.35" />
      <rect x="18" y="26" width="30" height="3" fill="#6a5a4a" opacity="0.35" />

      {/* Open door — blue bedspread visible */}
      <rect x="30" y="36" width="8" height="14" fill="#1a1208" />
      <rect x="31" y="37" width="6" height="12" fill="#1f3a4a" opacity="0.6" />
      {/* Blue bedspread inside */}
      <rect x="32" y="42" width="4" height="3" fill="#3d6a82" opacity="0.7" />

      {/* Window */}
      <rect x="22" y="36" width="6" height="5" fill="#2a3a4a" opacity="0.4" />
      <line x1="25" y1="36" x2="25" y2="41" stroke="#4a5a6a" strokeWidth="0.3" />
      <line x1="22" y1="38.5" x2="28" y2="38.5" stroke="#4a5a6a" strokeWidth="0.3" />

      {/* DeSoto MOTEL neon sign */}
      <g transform="translate(33, 18)">
        {/* Sign background */}
        <rect x="-14" y="-8" width="28" height="16" fill="#0a0a14" stroke="#3d6a82" strokeWidth="1" rx="1" />
        {/* DeSoto text */}
        <text x="0" y="-2" textAnchor="middle" fontSize="4.5" fill="#3d6a82" fontFamily="serif" opacity="0.95" fontStyle="italic">
          DeSoto
        </text>
        {/* MOTEL text — larger, neon */}
        <text x="0" y="4" textAnchor="middle" fontSize="6" fill="#5a9aba" fontFamily="serif" fontWeight="bold">
          MOTEL
        </text>
        {/* Neon glow outer */}
        <rect x="-15" y="-9" width="30" height="18" fill="none" stroke="#3d6a82" strokeWidth="0.4" opacity="0.4" rx="2" />
        {/* Neon glow halo */}
        <rect x="-16" y="-10" width="32" height="20" fill="none" stroke="#5a9aba" strokeWidth="0.3" opacity="0.2" rx="3" />
        {/* Post */}
        <rect x="-1" y="8" width="2" height="10" fill="#4a3520" />
      </g>

      {/* Palm tree */}
      <g transform="translate(10, 24)">
        {/* Trunk */}
        <path d="M 0 0 Q 1 10 -1 26" stroke="#5a4020" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Fronds */}
        <path d="M 0 0 Q -8 -4 -12 2" stroke="#3a5a2a" strokeWidth="1.2" fill="none" />
        <path d="M 0 0 Q 8 -4 12 2" stroke="#3a5a2a" strokeWidth="1.2" fill="none" />
        <path d="M 0 0 Q -6 -8 -4 -4" stroke="#3a5a2a" strokeWidth="1.2" fill="none" />
        <path d="M 0 0 Q 6 -8 4 -4" stroke="#3a5a2a" strokeWidth="1.2" fill="none" />
        <path d="M 0 0 Q 0 -10 2 -6" stroke="#4a6a3a" strokeWidth="1" fill="none" />
      </g>

      {/* Guitar leaning against wall */}
      <g transform="translate(44, 40) rotate(10)" opacity="0.5">
        <ellipse cx="0" cy="4" rx="3" ry="4" fill="#6e4a20" />
        <circle cx="0" cy="4" r="1.2" fill="#1a1208" />
        <rect x="-0.6" y="-6" width="1.2" height="7" fill="#4a3520" />
      </g>
    </svg>
  );
}
