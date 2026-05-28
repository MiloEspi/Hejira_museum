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

function formatCoord(lon: number, lat: number): string {
  const latDir = lat >= 0 ? "N" : "S";
  const lonDir = lon >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(1)}°${latDir} ${Math.abs(lon).toFixed(1)}°${lonDir}`;
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
        r="34"
        fill="url(#marker-halo)"
        opacity={isHovered ? 0.95 : 0.8}
        style={{ transition: "opacity 0.3s" }}
      />

      {/* Symbol SVG */}
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
          {SymbolComponent && <SymbolComponent size={52} />}
        </div>
      </foreignObject>

      {/* Song title label — larger, more legible */}
      <text
        y="44"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-italiana), serif",
          fontSize: "15px",
          fontWeight: 400,
          fill: "var(--ink)",
          letterSpacing: "0.04em",
          paintOrder: "stroke",
          stroke: "var(--paper)",
          strokeWidth: "3.5px",
          strokeLinejoin: "round",
        }}
      >
        {song.title}
      </text>

      {/* Coordinate label — always visible, subtle */}
      <text
        y="56"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "6px",
          fill: "var(--ink-faded)",
          letterSpacing: "0.08em",
          opacity: 0.7,
          paintOrder: "stroke",
          stroke: "var(--paper)",
          strokeWidth: "2px",
          strokeLinejoin: "round",
        }}
      >
        {formatCoord(song.coords[0], song.coords[1])}
      </text>

      {/* City label — shows on hover */}
      <text
        y="66"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-reenie-beanie), cursive",
          fontSize: "10px",
          fill: "var(--ink-soft)",
          letterSpacing: "0.02em",
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

      {/* marker-halo gradient is defined once in HejiraMap defs */}
    </motion.g>
  );
}
