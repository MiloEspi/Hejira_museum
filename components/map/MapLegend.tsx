"use client";

import { JOURNEYS } from "@/lib/journey-data";
import type { JourneySlug } from "@/lib/songs-data";

interface MapLegendProps {
  visible: boolean;
  selectedJourney: JourneySlug | null;
  onSelectJourney: (slug: JourneySlug | null) => void;
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

const COLOR_MAP: Record<string, string> = {
  thunder: "#6b1f2a",
  guerin: "#1f3a4a",
  solo: "#8a5a2b",
};

export default function MapLegend({ visible, selectedJourney, onSelectJourney }: MapLegendProps) {
  return (
    <div
      className="absolute top-[80px] right-[36px] z-[7]"
      style={{
        background: "rgba(237, 225, 200, 0.88)",
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

      {JOURNEYS.map((j) => {
        const isSelected = selectedJourney === j.slug;
        const isDeselected = selectedJourney !== null && !isSelected;
        const color = COLOR_MAP[j.slug] || "#8a5a2b";

        return (
          <div
            key={j.slug}
            className="flex items-center gap-[10px]"
            onClick={() => onSelectJourney(isSelected ? null : (j.slug as JourneySlug))}
            style={{
              padding: "6px 8px",
              margin: "0 -8px",
              borderRadius: "3px",
              cursor: "pointer",
              opacity: isDeselected ? 0.35 : 1,
              background: isSelected ? `rgba(${color === "#6b1f2a" ? "107,31,42" : color === "#1f3a4a" ? "31,58,74" : "138,90,43"},0.08)` : "transparent",
              borderLeft: isSelected ? `3px solid ${color}` : "3px solid transparent",
              transition: "opacity 0.3s, background 0.25s, border-color 0.25s",
            }}
          >
            <div className="flex-shrink-0" style={SWATCH_STYLES[j.slug] || {}} />
            <div>
              <div
                style={{
                  fontFamily: "var(--font-im-fell-english), serif",
                  fontSize: "13px",
                  color: isSelected ? color : "var(--ink)",
                  fontStyle: "italic",
                  transition: "color 0.25s",
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
            {isSelected && (
              <div
                style={{
                  marginLeft: "auto",
                  fontFamily: "var(--font-courier-prime), monospace",
                  fontSize: "9px",
                  color: color,
                  letterSpacing: "0.1em",
                }}
              >
                ▸
              </div>
            )}
          </div>
        );
      })}

      <div
        style={{
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "8px",
          color: "var(--ink-faded)",
          marginTop: "10px",
          letterSpacing: "0.08em",
          opacity: 0.7,
        }}
      >
        click journey to explore
      </div>
    </div>
  );
}
