"use client";

import Link from "next/link";
import type { JourneySlug } from "@/lib/songs-data";
import { JOURNEYS } from "@/lib/journey-data";
import { SONGS, getSongsByJourney } from "@/lib/songs-data";
import { ROUTES } from "@/lib/routes-coords";

interface Props {
  journey: JourneySlug;
  onClose: () => void;
}

const COLOR_MAP: Record<string, string> = {
  thunder: "#6b1f2a",
  guerin: "#1f3a4a",
  solo: "#8a5a2b",
};

export default function JourneyDetailPanel({ journey, onClose }: Props) {
  const data = JOURNEYS.find((j) => j.slug === journey);
  const route = ROUTES.find((r) => r.journey === journey);
  const songs = getSongsByJourney(journey);
  if (!data || !route) return null;

  const color = COLOR_MAP[journey] || "#8a5a2b";

  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        background: "rgba(237, 225, 200, 0.97)",
        backdropFilter: "blur(6px)",
        borderTop: `2px solid ${color}`,
        padding: "14px 28px 16px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
        boxShadow: "0 -8px 32px rgba(43,29,16,0.18)",
      }}
    >
      {/* Left: journey header */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "8px",
            letterSpacing: "0.35em",
            color: color,
            textTransform: "uppercase",
            marginBottom: "4px",
          }}
        >
          {data.dateRange}
        </div>
        <div
          style={{
            fontFamily: "var(--font-italiana), serif",
            fontSize: "20px",
            color: "#1a1008",
            marginBottom: "6px",
            letterSpacing: "0.04em",
          }}
        >
          {data.name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-cormorant-garamond), serif",
            fontSize: "12px",
            fontStyle: "italic",
            color: "#5a4225",
            lineHeight: 1.55,
          }}
        >
          {data.description}
        </div>
      </div>

      {/* Middle: waypoints */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "8px",
            letterSpacing: "0.3em",
            color: "#8a7355",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Route
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "2px", maxHeight: "110px", overflowY: "auto" }}>
          {route.cities.map((city, i) => (
            <div
              key={i}
              style={{
                fontFamily: "var(--font-im-fell-english), serif",
                fontSize: "11px",
                color: "#4a3520",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: color, flexShrink: 0 }} />
              {city}
            </div>
          ))}
        </div>
      </div>

      {/* Right: songs */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "8px",
            letterSpacing: "0.3em",
            color: "#8a7355",
            textTransform: "uppercase",
            marginBottom: "8px",
          }}
        >
          Songs
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          {songs.map((song) => (
            <Link
              key={song.slug}
              href={`/song/${song.slug}`}
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                padding: "4px 6px",
                borderRadius: "3px",
                borderLeft: `2px solid ${color}`,
                background: `rgba(43,29,16,0.03)`,
                transition: "background 0.2s",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-italiana), serif",
                  fontSize: "13px",
                  color: "#1a1008",
                }}
              >
                {song.title}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-courier-prime), monospace",
                  fontSize: "8px",
                  color: "#8a7355",
                  letterSpacing: "0.1em",
                }}
              >
                {song.city}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "14px",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "16px",
          color: "#8a7355",
          lineHeight: 1,
          padding: "2px 4px",
        }}
        aria-label="Close journey panel"
      >
        ×
      </button>
    </div>
  );
}
