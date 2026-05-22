"use client";

export default function CoyoteSVG({ size = 64 }: { size?: number }) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} aria-label="Coyote in a diner">
      {/* Coyote silhouette sitting */}
      <path
        d="M 14 46 Q 12 42 14 38 L 18 34 L 22 36 L 20 30 Q 22 24 28 22 L 32 18 Q 34 14 38 14 Q 42 14 42 18 L 44 20 Q 46 18 48 20 L 48 24 L 46 28 L 50 36 Q 54 42 52 48 L 48 50 L 18 50 Z"
        fill="#2b1d10"
      />
      {/* Ear */}
      <path d="M 36 14 L 38 8 L 42 14 Z" fill="#2b1d10" />
      {/* Eye glint */}
      <circle cx="40" cy="20" r="1.2" fill="#c89554" />
      {/* Tail */}
      <path
        d="M 14 42 Q 8 44 6 48"
        stroke="#2b1d10"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
