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
      onWheel={(e) => e.stopPropagation()}
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        width: "420px",
        zIndex: 10,
        background: "rgba(237, 225, 200, 0.97)",
        backdropFilter: "blur(8px)",
        borderLeft: `3px solid ${color}`,
        padding: "60px 40px 40px",
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        boxShadow: "-12px 0 40px rgba(43,29,16,0.15)",
        overflowY: "auto",
      }}
    >
      {/* Top: journey header */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "11px",
            letterSpacing: "0.35em",
            color: color,
            textTransform: "uppercase",
            marginBottom: "12px",
          }}
        >
          {data.dateRange}
        </div>
        <div
          style={{
            fontFamily: "var(--font-italiana), serif",
            fontSize: "42px",
            color: "#1a1008",
            marginBottom: "16px",
            letterSpacing: "0.02em",
            lineHeight: 1.1,
          }}
        >
          {data.name}
        </div>
        <div
          style={{
            fontFamily: "var(--font-cormorant-garamond), serif",
            fontSize: "18px",
            fontStyle: "italic",
            color: "#5a4225",
            lineHeight: 1.6,
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
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "#8a7355",
            textTransform: "uppercase",
            marginBottom: "16px",
            borderBottom: "1px solid rgba(138, 115, 85, 0.2)",
            paddingBottom: "8px",
          }}
        >
          Route Sequence
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {route.cities.map((city, i) => (
            <div
              key={i}
              style={{
                fontFamily: "var(--font-im-fell-english), serif",
                fontSize: "16px",
                color: "#4a3520",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: color, flexShrink: 0 }} />
              {city}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom: songs */}
      <div>
        <div
          style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "11px",
            letterSpacing: "0.3em",
            color: "#8a7355",
            textTransform: "uppercase",
            marginBottom: "16px",
            borderBottom: "1px solid rgba(138, 115, 85, 0.2)",
            paddingBottom: "8px",
          }}
        >
          Songs Written
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {songs.map((song) => (
            <Link
              key={song.slug}
              href={`/song/${song.slug}`}
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                padding: "12px 16px",
                borderRadius: "4px",
                borderLeft: `3px solid ${color}`,
                background: `rgba(43,29,16,0.04)`,
                transition: "background 0.2s, transform 0.2s",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-italiana), serif",
                  fontSize: "20px",
                  color: "#1a1008",
                  marginBottom: "4px",
                }}
              >
                {song.title}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-courier-prime), monospace",
                  fontSize: "10px",
                  color: "#8a7355",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
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
          top: "20px",
          right: "24px",
          background: "rgba(43,29,16,0.06)",
          border: "none",
          borderRadius: "50%",
          width: "36px",
          height: "36px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "20px",
          color: "#8a7355",
          lineHeight: 1,
          transition: "background 0.2s, color 0.2s",
        }}
        aria-label="Close journey panel"
        onMouseOver={(e) => {
          e.currentTarget.style.background = "rgba(43,29,16,0.1)";
          e.currentTarget.style.color = "#4a3520";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.background = "rgba(43,29,16,0.06)";
          e.currentTarget.style.color = "#8a7355";
        }}
      >
        ×
      </button>
    </div>
  );
}
