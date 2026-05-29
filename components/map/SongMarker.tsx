"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { Song } from "@/lib/songs-data";
import { SYMBOL_MAP } from "@/components/shared/SymbolSVG";

const JOURNEY_COLORS: Record<string, string> = {
  thunder: "#6b1f2a",
  guerin: "#1f3a4a",
  solo: "#8a5a2b",
};

interface SongMarkerProps {
  song: Song;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
  journeysActive?: boolean;
}

export default function SongMarker({
  song,
  isHovered,
  onHover,
  onLeave,
  journeysActive = false,
}: SongMarkerProps) {
  const router = useRouter();
  const SymbolComponent = SYMBOL_MAP[song.slug];
  const journeyColor = JOURNEY_COLORS[song.journey] || "#8a5a2b";

  const handleClick = () => {
    router.push(`/song/${song.slug}`);
  };

  // In journeysActive mode: render a small dot only
  if (journeysActive) {
    return (
      <motion.g
        style={{ cursor: "pointer", pointerEvents: "auto" }}
        onHoverStart={onHover}
        onHoverEnd={onLeave}
        onClick={handleClick}
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 400, damping: 22 }}
      >
        <circle cx="0" cy="0" r="6" fill={journeyColor} opacity={0.9} />
        <circle cx="0" cy="0" r="6" fill="none" stroke="var(--paper)" strokeWidth="1.5" opacity={0.6} />
      </motion.g>
    );
  }

  return (
    <motion.g
      style={{ cursor: "pointer", pointerEvents: "auto" }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onClick={handleClick}
      animate={{ scale: isHovered ? 1.4 : 1 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {/* Symbol SVG — larger */}
      <foreignObject x="-30" y="-30" width="60" height="60">
        <div
          style={{
            width: 60,
            height: 60,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {SymbolComponent && <SymbolComponent size={54} />}
        </div>
      </foreignObject>

      {/* Song title label */}
      <text
        y="38"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-italiana), serif",
          fontSize: "14px",
          fontWeight: 400,
          fill: "var(--ink)",
          letterSpacing: "0.04em",
          paintOrder: "stroke",
          stroke: "var(--paper)",
          strokeWidth: "3px",
          strokeLinejoin: "round",
        }}
      >
        {song.title}
      </text>

      {/* Hover preview panel */}
      <foreignObject
        x="36"
        y="-75"
        width="220"
        height="180"
        style={{
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.22s ease",
          pointerEvents: isHovered ? "auto" : "none",
          overflow: "visible",
        }}
      >
        <div
          style={{
            background: "rgba(237, 225, 200, 0.97)",
            border: `1.5px solid ${journeyColor}`,
            borderRadius: "4px",
            padding: "12px 14px 14px",
            boxShadow: "0 4px 18px rgba(43,29,16,0.22)",
            width: "220px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-italiana), serif",
              fontSize: "16px",
              color: "#1a1008",
              marginBottom: "4px",
              letterSpacing: "0.03em",
            }}
          >
            {song.title}
          </div>
          <div
            style={{
              fontFamily: "var(--font-cormorant-garamond), serif",
              fontSize: "12px",
              fontStyle: "italic",
              color: "#6a4e28",
              marginBottom: "8px",
            }}
          >
            {song.city}
          </div>
          <div
            style={{
              fontFamily: "var(--font-courier-prime), monospace",
              fontSize: "10px",
              color: "#8a7355",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "8px",
              borderTop: `1px solid rgba(196,162,101,0.3)`,
              paddingTop: "6px",
            }}
          >
            {song.duration} · track {song.trackNumber}
          </div>
          <div
            style={{
              fontFamily: "var(--font-im-fell-english), serif",
              fontSize: "12px",
              fontStyle: "italic",
              color: "#5a4225",
              lineHeight: 1.45,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            &ldquo;{song.highlightQuote}&rdquo;
          </div>
        </div>
      </foreignObject>
    </motion.g>
  );
}
