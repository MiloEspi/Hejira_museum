"use client";

export default function StrangeBoySVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="70s skateboard on sand">
      {/* Skateboard 70s style */}
      <g transform="translate(32, 32) rotate(-8)">
        <ellipse cx="0" cy="0" rx="22" ry="4" fill="#8a5a2b" />
        <ellipse cx="0" cy="-1" rx="22" ry="3" fill="#c89554" />
        {/* Wheels */}
        <circle cx="-14" cy="6" r="3" fill="#1a1208" />
        <circle cx="14" cy="6" r="3" fill="#1a1208" />
        <circle cx="-14" cy="6" r="1.2" fill="#6e4a20" />
        <circle cx="14" cy="6" r="1.2" fill="#6e4a20" />
      </g>
      {/* Gull */}
      <path d="M 8 14 Q 12 11 16 14 Q 12 13 8 14" stroke="#4a3520" strokeWidth="1" fill="none" />
    </svg>
  );
}
