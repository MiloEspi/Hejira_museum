"use client";

import { ReactNode } from "react";

/**
 * Cuaderno.tsx — The paper notebook wrapper for the map.
 * Provides the paper texture, burnt edges, coffee stains, binding shadow,
 * and the overall "worn travel journal" aesthetic.
 */
export default function Cuaderno({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex items-center justify-center min-h-screen p-[2vh_2vw]"
      style={{
        background: "radial-gradient(ellipse at center, #4a3a22 0%, #2a1f10 80%)",
      }}
    >
      <div
        className="relative overflow-hidden"
        style={{
          width: "min(1400px, 96vw)",
          height: "min(820px, 94vh)",
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, var(--paper) 0%, var(--paper-deep) 75%, var(--paper-shadow) 100%)",
          boxShadow: `
            0 0 0 1px rgba(0,0,0,0.4),
            0 30px 80px rgba(0,0,0,0.8),
            inset 0 0 80px rgba(120, 90, 50, 0.18),
            inset 0 0 200px rgba(80, 50, 20, 0.12)
          `,
          borderRadius: "4px",
          transform: "rotate(-0.3deg)",
        }}
      >
        {/* Paper texture overlay (stains, grain) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 30%, rgba(110,82,53,0.08) 0%, transparent 40%),
              radial-gradient(circle at 80% 70%, rgba(110,82,53,0.06) 0%, transparent 40%),
              radial-gradient(circle at 50% 50%, transparent 30%, rgba(110,82,53,0.04) 100%)
            `,
            mixBlendMode: "multiply",
          }}
        />

        {/* Paper grain via SVG feTurbulence */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.4 0 0 0 0 0.3 0 0 0 0 0.15 0 0 0 0.15 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>")`,
            opacity: 0.35,
            mixBlendMode: "multiply",
          }}
        />

        {/* Binding shadow on left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[30px] pointer-events-none z-10"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.25), transparent)",
          }}
        />

        {/* Burnt edges */}
        <BurntEdge className="top-[-10px] left-[-10px] w-[200px] h-[120px]" />
        <BurntEdge className="top-[-10px] right-[-10px] w-[180px] h-[100px]" />
        <BurntEdge className="bottom-[-10px] left-[-10px] w-[220px] h-[140px]" />
        <BurntEdge className="bottom-[-10px] right-[-10px] w-[200px] h-[130px]" />

        {/* Coffee stains */}
        <CoffeeStain className="top-[200px] right-[200px]" size={80} rotation={20} />
        <CoffeeStain className="bottom-[220px] left-[280px]" size={50} rotation={0} />

        {/* Map header */}
        <div className="absolute top-[18px] left-1/2 -translate-x-1/2 text-center z-[6] pointer-events-none">
          <div
            style={{
              fontFamily: "var(--font-italiana), serif",
              fontSize: "42px",
              fontWeight: 400,
              color: "var(--ink)",
              letterSpacing: "0.12em",
              lineHeight: 1,
            }}
          >
            Hejira
          </div>
          <div
            style={{
              fontFamily: "var(--font-reenie-beanie), cursive",
              fontSize: "22px",
              color: "var(--ink-soft)",
              marginTop: "6px",
              letterSpacing: "0.02em",
            }}
          >
            a map of three journeys
          </div>
          <div
            style={{
              fontFamily: "var(--font-courier-prime), monospace",
              fontSize: "10px",
              color: "var(--ink-faded)",
              letterSpacing: "0.5em",
              marginTop: "6px",
            }}
          >
            — 1975 / 1976 —
          </div>
        </div>

        {/* Decorative scribbles */}
        <Scribble
          className="top-[90px] left-[40px]"
          rotation={-4}
          text={`"the road became a\nmetaphor for my life"`}
        />
        <Scribble
          className="bottom-[80px] left-[40px]"
          rotation={3}
          text={`from the Arabic hijrah —\nexodus, departure`}
        />
        <Scribble
          className="top-[95px] right-[40px]"
          rotation={2}
          text={`written mostly in the car\nbetween Maine and L.A.`}
          align="right"
        />

        {/* Content (map, markers, etc.) */}
        {children}
      </div>
    </div>
  );
}

function BurntEdge({ className }: { className: string }) {
  return (
    <div
      className={`absolute pointer-events-none z-[5] ${className}`}
      style={{
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(60, 35, 15, 0.4) 100%)",
      }}
    />
  );
}

function CoffeeStain({ className, size, rotation }: { className: string; size: number; rotation: number }) {
  return (
    <div
      className={`absolute pointer-events-none z-[2] rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(ellipse at center, transparent 30%, rgba(101, 67, 33, 0.15) 60%, rgba(101, 67, 33, 0.25) 70%, transparent 75%)`,
        transform: `rotate(${rotation}deg)`,
      }}
    />
  );
}

function Scribble({
  className,
  rotation,
  text,
  align = "left",
}: {
  className: string;
  rotation: number;
  text: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`absolute pointer-events-none z-[3] ${className}`}
      style={{
        fontFamily: "var(--font-reenie-beanie), cursive",
        color: "var(--ink-faded)",
        fontSize: "14px",
        fontStyle: "italic",
        opacity: 0.65,
        lineHeight: 1.3,
        maxWidth: "200px",
        transform: `rotate(${rotation}deg)`,
        textAlign: align,
        whiteSpace: "pre-line",
      }}
    >
      {text}
    </div>
  );
}
