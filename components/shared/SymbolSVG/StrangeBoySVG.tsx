"use client";

/**
 * StrangeBoySVG — Young man on Maine rocky coastline looking at the sea.
 * Seagull above. Skateboard leaning on rocks. Cold grey Atlantic.
 * White B&B in background.
 */
export default function StrangeBoySVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Strange boy on Maine coast looking at the sea">
      {/* Grey Atlantic sky */}
      <rect width="64" height="64" fill="#8a9098" opacity="0.15" rx="4" />

      {/* Sea — grey-blue Atlantic */}
      <path d="M 0 34 Q 16 32 32 34 Q 48 36 64 34 L 64 44 L 0 44 Z" fill="#5a7a8a" opacity="0.3" />
      <path d="M 0 36 Q 16 34 32 36 Q 48 38 64 36 L 64 44 L 0 44 Z" fill="#6a8a9a" opacity="0.2" />
      {/* Wave lines */}
      <path d="M 0 38 Q 8 37 16 38 Q 24 39 32 38" stroke="#8aa0b0" strokeWidth="0.4" fill="none" opacity="0.4" />
      <path d="M 34 40 Q 42 39 50 40 Q 58 41 64 40" stroke="#8aa0b0" strokeWidth="0.4" fill="none" opacity="0.4" />

      {/* B&B — white clapboard in background */}
      <g transform="translate(50, 26)" opacity="0.35">
        <rect x="-6" y="-4" width="12" height="10" fill="#e8e0d0" />
        <path d="M -7 -4 L 0 -10 L 7 -4 Z" fill="#8a5a2b" />
        <rect x="-4" y="0" width="3" height="4" fill="#4a7aa0" opacity="0.5" />
        <rect x="1" y="0" width="3" height="4" fill="#4a7aa0" opacity="0.5" />
        <rect x="-1" y="2" width="2" height="4" fill="#6e4a20" />
      </g>

      {/* Rocky cliff / coastline */}
      <path d="M 0 44 L 4 40 L 10 42 L 16 38 L 22 40 L 28 36 L 34 40 L 40 38 L 46 42 L 52 40 L 58 42 L 64 40 L 64 64 L 0 64 Z" fill="#7a7060" opacity="0.4" />
      {/* Rock texture */}
      <path d="M 8 48 L 12 46 L 16 48" stroke="#5a5040" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M 36 46 L 40 44 L 44 46" stroke="#5a5040" strokeWidth="0.5" fill="none" opacity="0.3" />

      {/* Boy — standing on cliff looking out to sea */}
      <g transform="translate(24, 34)">
        {/* Legs */}
        <line x1="-1" y1="6" x2="-2" y2="14" stroke="#3a5a7a" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="1" y1="6" x2="2" y2="14" stroke="#3a5a7a" strokeWidth="1.5" strokeLinecap="round" />
        {/* Body — slim */}
        <line x1="0" y1="0" x2="0" y2="6" stroke="#6a8a5a" strokeWidth="2" strokeLinecap="round" />
        {/* Head — looking out to sea */}
        <circle cx="2" cy="-2" r="2.5" fill="#d4b88a" />
        {/* Light hair */}
        <path d="M 0 -4 Q 2 -5 4 -4 Q 5 -3 4 -2" fill="#c8b070" />
        {/* Arm pointing/hanging */}
        <line x1="-1" y1="1" x2="-4" y2="5" stroke="#d4b88a" strokeWidth="1" strokeLinecap="round" />
        <line x1="1" y1="1" x2="4" y2="4" stroke="#d4b88a" strokeWidth="1" strokeLinecap="round" />
      </g>

      {/* Skateboard leaning on rocks */}
      <g transform="translate(12, 46) rotate(-20)">
        <rect x="-8" y="-1.5" width="16" height="3" fill="#8a5a2b" rx="1.5" />
        <circle cx="-5" cy="3" r="1.5" fill="#1a1208" />
        <circle cx="5" cy="3" r="1.5" fill="#1a1208" />
      </g>

      {/* Seagull — flying */}
      <g transform="translate(38, 14)">
        <path d="M -6 2 Q -3 -2 0 0 Q 3 -2 6 2" stroke="#4a4a4a" strokeWidth="1" fill="none" />
        <circle cx="0" cy="0.5" r="0.8" fill="#e8e0d0" />
      </g>
      {/* Second gull further */}
      <path d="M 14 20 Q 16 18 18 20 Q 20 18 22 20" stroke="#6a6a6a" strokeWidth="0.6" fill="none" opacity="0.4" />
    </svg>
  );
}
