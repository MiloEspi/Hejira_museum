"use client";

/**
 * MapDetails — Decorative map elements rendered inside the ComposableMap SVG.
 * Includes: Great Lakes (approximate), major rivers, mountain ranges, regional labels.
 * These are drawn as raw SVG elements positioned using projected coordinates
 * or relative to the map viewbox.
 */
export default function MapDetails() {
  return (
    <g>
      {/* Regional labels — handwritten style */}
      <g style={{ fontFamily: "var(--font-reenie-beanie), cursive" }} fill="#5a3a20" opacity="0.55">
        <text x="100" y="200" fontSize="16" transform="rotate(-3, 100, 200)">
          pacific NW
        </text>
        <text x="155" y="370" fontSize="18" transform="rotate(-5, 155, 370)">
          the desert southwest
        </text>
        <text x="240" y="260" fontSize="14" transform="rotate(-80, 240, 260)" opacity="0.45">
          the rockies
        </text>
        <text x="410" y="290" fontSize="20">
          the plains
        </text>
        <text x="590" y="160" fontSize="16">
          great lakes · winter
        </text>
        <text x="630" y="420" fontSize="16" transform="rotate(2, 630, 420)">
          the deep south
        </text>
        <text x="830" y="210" fontSize="15" transform="rotate(-4, 830, 210)">
          new england
        </text>
        <text x="410" y="450" fontSize="16" transform="rotate(-2, 410, 450)">
          texas
        </text>
        <text x="720" y="530" fontSize="14">
          florida
        </text>
      </g>

      {/* City dots — small ink marks */}
      <g fill="#3d2818" opacity="0.6">
        {/* Memphis */}
        <circle cx="635" cy="380" r="2" />
        <text x="643" y="378" fontFamily="var(--font-courier-prime), monospace" fontSize="7" fill="#3d2818">Memphis</text>

        {/* New York */}
        <circle cx="870" cy="240" r="2" />
        <text x="845" y="236" fontFamily="var(--font-courier-prime), monospace" fontSize="7" fill="#3d2818">New York</text>

        {/* Madison */}
        <circle cx="600" cy="195" r="2" />
        <text x="608" y="192" fontFamily="var(--font-courier-prime), monospace" fontSize="7" fill="#3d2818">Madison</text>

        {/* L.A. */}
        <circle cx="115" cy="365" r="2" />
        <text x="95" y="362" fontFamily="var(--font-courier-prime), monospace" fontSize="7" fill="#3d2818">L.A.</text>

        {/* Boston */}
        <circle cx="895" cy="218" r="2" />
        <text x="870" y="214" fontFamily="var(--font-courier-prime), monospace" fontSize="7" fill="#3d2818" opacity="0.7">Boston</text>
      </g>

      {/* Mountain ranges — small triangular marks */}
      <g stroke="#3d2818" strokeWidth="0.7" fill="none" opacity="0.4">
        {/* Rockies */}
        <path d="M 235 200 L 240 192 L 245 200 M 248 215 L 254 206 L 260 215" />
        <path d="M 240 230 L 247 222 L 254 230 M 258 245 L 266 236 L 274 245" />
        <path d="M 250 260 L 258 251 L 266 260" />
        {/* Appalachians */}
        <path d="M 760 280 L 766 272 L 772 280 M 768 295 L 775 286 L 782 295" />
        <path d="M 765 310 L 772 302 L 779 310" />
      </g>

      {/* Major rivers — subtle blue-grey curves */}
      <g stroke="#5a7a90" strokeWidth="0.8" fill="none" opacity="0.4">
        {/* Mississippi (approximate) */}
        <path d="M 570 170 Q 565 250 575 330 Q 580 400 570 470 Q 565 510 580 560" />
        {/* Missouri */}
        <path d="M 575 330 Q 510 305 450 280 Q 380 255 320 240" />
      </g>
    </g>
  );
}
