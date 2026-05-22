"use client";

import { JOURNEYS } from "@/lib/journey-data";

interface MapLegendProps {
  visible: boolean;
}

const SWATCH_STYLES: Record<string, React.CSSProperties> = {
  thunder: {
    width: "28px",
    height: "0px",
    borderTop: "2px dotted var(--thunder)",
    background: "transparent",
  },
  guerin: {
    width: "28px",
    height: "0px",
    borderTop: "2px dashed var(--guerin)",
    background: "transparent",
  },
  solo: {
    width: "28px",
    height: "2px",
    background: "var(--solo)",
  },
};

export default function MapLegend({ visible }: MapLegendProps) {
  return (
    <div
      className="absolute top-[80px] right-[36px] z-[7]"
      style={{
        background: "rgba(237, 225, 200, 0.85)",
        border: "1px solid rgba(46, 29, 16, 0.4)",
        padding: "14px 18px",
        borderRadius: "2px",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-6px)",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.4s, transform 0.4s",
        minWidth: "240px",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "9px",
          letterSpacing: "0.3em",
          color: "var(--ink-faded)",
          textTransform: "uppercase",
          marginBottom: "10px",
        }}
      >
        the three journeys
      </div>

      {JOURNEYS.map((j) => (
        <div
          key={j.slug}
          className="flex items-center gap-[10px]"
          style={{ padding: "6px 0" }}
        >
          <div className="flex-shrink-0" style={SWATCH_STYLES[j.slug] || {}} />
          <div>
            <div
              style={{
                fontFamily: "var(--font-im-fell-english), serif",
                fontSize: "13px",
                color: "var(--ink)",
                fontStyle: "italic",
              }}
            >
              {j.name}
            </div>
            <div
              style={{
                fontFamily: "var(--font-courier-prime), monospace",
                fontSize: "9px",
                color: "var(--ink-faded)",
                letterSpacing: "0.15em",
              }}
            >
              {j.dateRange.toUpperCase()}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
