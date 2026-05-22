"use client";

export default function HejiraSnowflakeSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Snowflake over lace">
      <g transform="translate(32, 32)">
        {/* Lace circle base */}
        <circle cx="0" cy="0" r="20" stroke="#6e5235" strokeWidth="0.5" fill="none" opacity="0.4" />
        <circle cx="0" cy="0" r="14" stroke="#6e5235" strokeWidth="0.4" fill="none" opacity="0.5" strokeDasharray="2,2" />
        {/* Snowflake */}
        <g stroke="#2b1d10" strokeWidth="1.5" strokeLinecap="round" fill="none">
          <line x1="0" y1="-18" x2="0" y2="18" />
          <line x1="-15.6" y1="-9" x2="15.6" y2="9" />
          <line x1="-15.6" y1="9" x2="15.6" y2="-9" />
          {/* Branches */}
          <path d="M 0 -18 L -3 -14 M 0 -18 L 3 -14" />
          <path d="M 0 18 L -3 14 M 0 18 L 3 14" />
          <path d="M -15.6 -9 L -12 -10 M -15.6 -9 L -13 -6" />
          <path d="M 15.6 9 L 12 10 M 15.6 9 L 13 6" />
          <path d="M -15.6 9 L -12 10 M -15.6 9 L -13 6" />
          <path d="M 15.6 -9 L 12 -10 M 15.6 -9 L 13 -6" />
        </g>
      </g>
    </svg>
  );
}
