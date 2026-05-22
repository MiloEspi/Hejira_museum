"use client";

export default function BlueMotelSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Blue neon motel sign">
      <g transform="translate(32, 32)">
        {/* Neon sign */}
        <rect x="-16" y="-12" width="32" height="18" fill="#1a1208" stroke="#1f3a4a" strokeWidth="1.5" />
        <text
          x="0"
          y="-2"
          textAnchor="middle"
          fontFamily="var(--font-italiana), serif"
          fontSize="11"
          fill="#3d6a82"
        >
          MOTEL
        </text>
        {/* Glow effect */}
        <rect x="-17" y="-13" width="34" height="20" fill="none" stroke="#3d6a82" strokeWidth="0.5" opacity="0.5" />
        {/* Post */}
        <rect x="-1" y="6" width="2" height="14" fill="#4a3520" />
        {/* Palm tree */}
        <line x1="-22" y1="20" x2="-22" y2="6" stroke="#2b1d10" strokeWidth="1.5" />
        <path
          d="M -22 6 Q -28 2 -30 6 M -22 6 Q -16 2 -14 6 M -22 6 Q -26 0 -22 -2 M -22 6 Q -18 0 -22 -2"
          stroke="#4a5a2b"
          strokeWidth="1"
          fill="none"
        />
      </g>
    </svg>
  );
}
