"use client";

import { useEffect, useRef } from "react";
import { BLACK_CROW_STORY } from "@/lib/capsule-data";

/**
 * StoryColumn — Editorial text about Black Crow.
 * Scroll-triggered fade-in blocks. Joni quotes with gold left border.
 * Photoshoot connection section.
 */
export default function StoryColumn() {
  const paragraphRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    paragraphRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className="capsule-section-header">How the Song Came to Be</div>

      {BLACK_CROW_STORY.storyParagraphs.map((para, i) => (
        <div
          key={i}
          ref={(el) => { paragraphRefs.current[i] = el; }}
          className="capsule-story__paragraph"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`,
          }}
        >
          {para}
        </div>
      ))}

      {/* Joni quote — gold border */}
      <div
        ref={(el) => { paragraphRefs.current[BLACK_CROW_STORY.storyParagraphs.length] = el; }}
        className="capsule-story__joni-quote"
        style={{
          opacity: 0,
          transform: "translateY(24px)",
          transition: "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
        }}
      >
        &ldquo;{BLACK_CROW_STORY.joniQuote}&rdquo;
      </div>

      {/* Photoshoot connection */}
      <div style={{ marginTop: "48px" }}>
        <div className="capsule-section-header">The Photoshoot Connection</div>
        <div
          ref={(el) => { paragraphRefs.current[BLACK_CROW_STORY.storyParagraphs.length + 1] = el; }}
          className="capsule-story__paragraph"
          style={{
            opacity: 0,
            transform: "translateY(24px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
          }}
        >
          {BLACK_CROW_STORY.photoshootConnection}
        </div>
      </div>
    </div>
  );
}
