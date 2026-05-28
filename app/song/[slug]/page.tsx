"use client";

import { use } from "react";
import dynamic from "next/dynamic";
import { getSongBySlug } from "@/lib/songs-data";
import "@/styles/capsule.css";

// Dynamic import to avoid SSR issues
const CapsuleLayout = dynamic(
  () => import("@/components/capsule/CapsuleLayout"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "10px",
          color: "rgba(200,214,221,0.35)",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        entering the capsule...
      </div>
    ),
  }
);

export default function SongPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const song = getSongBySlug(slug);

  if (!song) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#e8eef0",
          fontFamily: "var(--font-italiana), serif",
          fontSize: "24px",
        }}
      >
        Song not found
      </div>
    );
  }

  // Full capsule implementation only for black-crow right now
  if (slug === "black-crow") {
    return <CapsuleLayout />;
  }

  // Placeholder for other songs
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0a0a",
        color: "#e8eef0",
        gap: "16px",
      }}
    >
      <div style={{
        fontFamily: "var(--font-courier-prime), monospace",
        fontSize: "10px",
        letterSpacing: "0.3em",
        color: "rgba(200,214,221,0.35)",
        textTransform: "uppercase",
      }}>
        — {song.trackNumber} / ix —
      </div>
      <h1 style={{
        fontFamily: "var(--font-italiana), serif",
        fontSize: "48px",
        fontWeight: 400,
        letterSpacing: "0.08em",
      }}>
        {song.title}
      </h1>
      <p style={{
        fontFamily: "var(--font-cormorant-garamond), serif",
        fontSize: "16px",
        fontStyle: "italic",
        color: "rgba(200,214,221,0.4)",
        maxWidth: "400px",
        textAlign: "center",
        lineHeight: 1.6,
      }}>
        This capsule is coming soon. For now, the Black Crow capsule serves as the prototype.
      </p>
      <a
        href="/the-map"
        style={{
          marginTop: "24px",
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "11px",
          letterSpacing: "0.15em",
          color: "rgba(200,214,221,0.4)",
          border: "1px solid rgba(200,214,221,0.1)",
          padding: "10px 20px",
          borderRadius: "4px",
          textDecoration: "none",
        }}
      >
        ← back to the cuaderno
      </a>
    </div>
  );
}
