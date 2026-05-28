"use client";

import { useState, useRef, useEffect } from "react";

/**
 * AudioPlayer — Waveform visualization with play/pause.
 * Fake animated waveform that pulses (no actual mp3 yet).
 */
export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const barsRef = useRef<HTMLDivElement>(null);

  // Generate random bar heights for visual variety
  const barCount = 48;
  const barHeights = useRef(
    Array.from({ length: barCount }, () => 0.15 + Math.random() * 0.85)
  ).current;

  useEffect(() => {
    if (!barsRef.current) return;
    const bars = barsRef.current.querySelectorAll<HTMLDivElement>(".capsule-audio__bar");
    bars.forEach((bar, i) => {
      if (isPlaying) {
        bar.style.animationPlayState = "running";
        bar.style.animationDelay = `${(i * 0.04) % 1.2}s`;
      } else {
        bar.style.animationPlayState = "paused";
      }
    });
  }, [isPlaying]);

  return (
    <div className="capsule-audio">
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        {/* Play/Pause button */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            border: "1px solid rgba(200,214,221,0.2)",
            background: "rgba(255,255,255,0.05)",
            color: "#c8d6dd",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "border-color 0.3s",
          }}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <rect x="2" y="1" width="3" height="12" rx="1" />
              <rect x="9" y="1" width="3" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <path d="M 3 1 L 12 7 L 3 13 Z" />
            </svg>
          )}
        </button>

        {/* Track info */}
        <div style={{ flexShrink: 0 }}>
          <div style={{
            fontFamily: "var(--font-im-fell-english), serif",
            fontSize: "14px",
            color: "rgba(232,238,240,0.8)",
          }}>
            Black Crow
          </div>
          <div style={{
            fontFamily: "var(--font-courier-prime), monospace",
            fontSize: "9px",
            color: "rgba(200,214,221,0.35)",
            letterSpacing: "0.1em",
          }}>
            SAMPLE · 4:20
          </div>
        </div>

        {/* Waveform */}
        <div className="capsule-audio__waveform" ref={barsRef} style={{ flex: 1 }}>
          {barHeights.map((h, i) => (
            <div
              key={i}
              className="capsule-audio__bar"
              style={{
                height: `${h * 100}%`,
                animationDuration: `${0.8 + Math.random() * 0.8}s`,
                animationDelay: `${(i * 0.04) % 1.2}s`,
                animationPlayState: isPlaying ? "running" : "paused",
                opacity: isPlaying ? 0.9 : 0.4,
                transition: "opacity 0.3s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
