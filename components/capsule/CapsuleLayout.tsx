"use client";

import CapsuleNav from "./CapsuleNav";
import HeroAnimation from "./HeroAnimation";
import PullQuote from "./PullQuote";
import AudioPlayer from "./AudioPlayer";
import AnnotatedLyrics from "./AnnotatedLyrics";
import StoryColumn from "./StoryColumn";
import TechCards from "./TechCards";
import PhotoGallery from "./PhotoGallery";
import ThreadCards from "./ThreadCards";
import Link from "next/link";

/**
 * CapsuleLayout — Full Black Crow capsule page layout.
 * Hero → Quote → Audio → Lyrics+Story (two columns) → Tech → Gallery → Threads → Back
 */
export default function CapsuleLayout() {
  return (
    <div className="capsule-page">
      <CapsuleNav />

      {/* Hero: crow flying over frozen lake */}
      <HeroAnimation />

      {/* Pull quote: typewriter animation */}
      <PullQuote />

      {/* Audio player: waveform */}
      <AudioPlayer />

      {/* Two-column: lyrics + story */}
      <div className="capsule-columns">
        <AnnotatedLyrics />
        <StoryColumn />
      </div>

      {/* Tech cards */}
      <TechCards />

      {/* Photo gallery */}
      <PhotoGallery />

      {/* Thread connections */}
      <ThreadCards />

      {/* Bottom back button */}
      <div style={{
        textAlign: "center",
        padding: "60px 20px 80px",
      }}>
        <div className="capsule-divider" />
        <Link
          href="/the-map"
          style={{
            display: "inline-block",
            marginTop: "32px",
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "11px",
            letterSpacing: "0.15em",
            color: "rgba(200,214,221,0.4)",
            border: "1px solid rgba(200,214,221,0.1)",
            padding: "12px 24px",
            borderRadius: "4px",
            textDecoration: "none",
            transition: "color 0.3s, border-color 0.3s",
          }}
        >
          ← back to the cuaderno
        </Link>
      </div>
    </div>
  );
}
