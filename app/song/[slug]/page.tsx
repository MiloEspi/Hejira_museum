"use client";

import { use } from "react";
import dynamic from "next/dynamic";
import { getSongBySlug } from "@/lib/songs-data";
import { getSongContent } from "@/lib/song-content";
import "@/styles/song-page.css";

const SongPageLayout = dynamic(
  () => import("@/components/song/SongPageLayout"),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ede1c8",
          fontFamily: "var(--font-courier-prime), monospace",
          fontSize: "10px",
          color: "rgba(110, 82, 53, 0.5)",
          letterSpacing: "0.3em",
          textTransform: "uppercase",
        }}
      >
        opening the journal...
      </div>
    ),
  }
);

export default function SongPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const song = getSongBySlug(slug);
  const content = getSongContent(slug);

  if (!song) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ede1c8",
          color: "#2b1d10",
          fontFamily: "var(--font-italiana), serif",
          fontSize: "24px",
        }}
      >
        Song not found
      </div>
    );
  }

  if (!content) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#ede1c8",
          color: "#2b1d10",
          gap: "16px",
        }}
      >
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
          color: "rgba(43, 29, 16, 0.5)",
        }}>
          This chapter is being written...
        </p>
        <a
          href="/the-map"
          style={{
            marginTop: "24px",
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "rgba(43, 29, 16, 0.5)",
            border: "1px solid rgba(43, 29, 16, 0.15)",
            padding: "10px 20px",
            borderRadius: "4px",
            textDecoration: "none",
          }}
        >
          ← back to the map
        </a>
      </div>
    );
  }

  return <SongPageLayout song={song} content={content} />;
}
