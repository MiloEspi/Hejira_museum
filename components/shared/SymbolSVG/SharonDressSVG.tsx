"use client";

/**
 * SharonDressSVG — Mandolin + wedding dress in storefront window.
 * Staten Island ferry in distance. Manhattan skyline with Twin Towers (1976).
 */
export default function SharonDressSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Wedding dress and mandolin in storefront with Twin Towers skyline">
      {/* Sky */}
      <rect width="64" height="64" fill="#8aaac0" opacity="0.15" rx="4" />

      {/* Manhattan skyline with Twin Towers — distant */}
      <g transform="translate(40, 8)" opacity="0.25">
        <rect x="-2" y="0" width="3" height="18" fill="#4a4a5a" />
        <rect x="3" y="0" width="3" height="18" fill="#4a4a5a" />
        <rect x="-6" y="8" width="3" height="10" fill="#4a4a5a" />
        <rect x="8" y="6" width="2" height="12" fill="#4a4a5a" />
        <rect x="11" y="10" width="3" height="8" fill="#4a4a5a" />
        <rect x="-10" y="12" width="3" height="6" fill="#4a4a5a" />
      </g>

      {/* Water — bay */}
      <path d="M 0 28 L 64 28 L 64 36 L 0 36 Z" fill="#5a7a8a" opacity="0.15" />

      {/* Staten Island Ferry — small */}
      <g transform="translate(48, 30)" opacity="0.35">
        <path d="M -5 0 L 5 0 L 4 3 L -4 3 Z" fill="#c89554" />
        <rect x="-2" y="-3" width="4" height="3" fill="#ede1c8" />
        <line x1="0" y1="-3" x2="0" y2="-5" stroke="#4a3520" strokeWidth="0.5" />
      </g>

      {/* Storefront window */}
      <rect x="6" y="30" width="30" height="30" fill="#ede1c8" opacity="0.3" stroke="#4a3520" strokeWidth="0.8" />
      <line x1="6" y1="30" x2="36" y2="30" stroke="#4a3520" strokeWidth="1.2" />

      {/* Wedding dress on mannequin */}
      <g transform="translate(16, 36)">
        {/* Stand */}
        <line x1="0" y1="18" x2="0" y2="22" stroke="#4a3520" strokeWidth="0.8" />
        <ellipse cx="0" cy="22" rx="4" ry="1" fill="#4a3520" opacity="0.5" />
        {/* Neck */}
        <rect x="-1" y="-2" width="2" height="4" fill="#6e5235" />
        {/* Dress — white with lace detail */}
        <path d="M -2 2 L 2 2 L 4 6 L 8 18 L -8 18 L -4 6 Z" fill="#ede1c8" stroke="#b8a87e" strokeWidth="0.4" />
        {/* Lace patterns */}
        <path d="M -4 8 Q 0 10 4 8" stroke="#b8a87e" strokeWidth="0.4" fill="none" strokeDasharray="1,1" />
        <path d="M -6 12 Q 0 15 6 12" stroke="#b8a87e" strokeWidth="0.4" fill="none" strokeDasharray="1,1" />
        <path d="M -7 16 Q 0 18 7 16" stroke="#b8a87e" strokeWidth="0.4" fill="none" strokeDasharray="1,1" />
        {/* Bodice detail */}
        <path d="M -2 2 L 0 5 L 2 2" stroke="#b8a87e" strokeWidth="0.3" fill="none" />
      </g>

      {/* Gibson K-4 Mandolin — leaning nearby */}
      <g transform="translate(30, 40) rotate(15)">
        {/* Body — pear shaped */}
        <ellipse cx="0" cy="4" rx="4" ry="5" fill="#6e4a20" stroke="#4a3520" strokeWidth="0.4" />
        <circle cx="0" cy="4" r="1.5" fill="#1a1208" />
        {/* Neck */}
        <rect x="-0.8" y="-8" width="1.6" height="8" fill="#4a3520" />
        {/* Headstock — scrolled */}
        <path d="M -1.5 -10 Q -2 -12 0 -12 Q 2 -12 1.5 -10" fill="#2b1d10" />
        {/* Strings */}
        <line x1="-0.3" y1="-8" x2="-0.3" y2="8" stroke="#c89554" strokeWidth="0.2" />
        <line x1="0.3" y1="-8" x2="0.3" y2="8" stroke="#c89554" strokeWidth="0.2" />
      </g>

      {/* Window reflection hints */}
      <line x1="8" y1="32" x2="14" y2="36" stroke="#ede1c8" strokeWidth="0.4" opacity="0.3" />
      <line x1="30" y1="34" x2="34" y2="38" stroke="#ede1c8" strokeWidth="0.4" opacity="0.3" />
    </svg>
  );
}
