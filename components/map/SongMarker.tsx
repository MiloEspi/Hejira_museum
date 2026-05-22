"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import type { Song } from "@/lib/songs-data";
import { SYMBOL_MAP } from "@/components/shared/SymbolSVG";

interface SongMarkerProps {
  song: Song;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

export default function SongMarker({ song, isHovered, onHover, onLeave }: SongMarkerProps) {
  const router = useRouter();
  const SymbolComponent = SYMBOL_MAP[song.slug];

  const handleClick = () => {
    router.push(`/song/${song.slug}`);
  };

  return (
    <motion.g
      style={{ cursor: "pointer" }}
      onHoverStart={onHover}
      onHoverEnd={onLeave}
      onClick={handleClick}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Halo — radial glow behind symbol */}
      <circle
        cx="0"
        cy="0"
        r="32"
        fill="url(#marker-halo)"
        opacity={isHovered ? 0.95 : 0.8}
        style={{ transition: "opacity 0.3s" }}
      />

      {/* Symbol SVG */}
      <foreignObject x="-28" y="-28" width="56" height="56">
        <div
          style={{
            width: 56,
            height: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {SymbolComponent && <SymbolComponent size={48} />}
        </div>
      </foreignObject>

      {/* Song label (handwritten) */}
      <text
        y="44"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-reenie-beanie), cursive",
          fontSize: "18px",
          fill: "var(--ink)",
          letterSpacing: "0.02em",
          paintOrder: "stroke",
          stroke: "var(--paper)",
          strokeWidth: "3px",
          strokeLinejoin: "round",
        }}
      >
        {song.title}
      </text>

      {/* City label — shows on hover */}
      <text
        y="58"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "7px",
          fill: "var(--ink)",
          letterSpacing: "0.2em",
          textTransform: "uppercase" as const,
          opacity: isHovered ? 1 : 0,
          transform: isHovered ? "translateY(0)" : "translateY(-4px)",
          transition: "opacity 0.3s, transform 0.3s",
          paintOrder: "stroke",
          stroke: "var(--paper)",
          strokeWidth: "2px",
          strokeLinejoin: "round",
        }}
      >
        {song.city}
      </text>

      {/* Marker halo gradient definition */}
      <defs>
        <radialGradient id="marker-halo">
          <stop offset="0%" stopColor="var(--paper)" stopOpacity="0.85" />
          <stop offset="55%" stopColor="var(--paper)" stopOpacity="0.5" />
          <stop offset="100%" stopColor="var(--paper)" stopOpacity="0" />
        </radialGradient>
      </defs>
    </motion.g>
  );
}
