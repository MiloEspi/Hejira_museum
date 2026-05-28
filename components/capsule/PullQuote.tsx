"use client";

import { useEffect, useState } from "react";
import { BLACK_CROW_STORY } from "@/lib/capsule-data";

/**
 * PullQuote — Typewriter animation, word by word.
 * "In search of love and music / my whole life has been / illumination, corruption / and diving, diving, diving, diving"
 */
export default function PullQuote() {
  const [visibleWords, setVisibleWords] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const allWords = BLACK_CROW_STORY.heroQuote.lines
    .flatMap((line, lineIdx) => {
      const words = line.split(" ").map((w) => ({ word: w, lineBreakAfter: false }));
      if (lineIdx < BLACK_CROW_STORY.heroQuote.lines.length - 1) {
        words[words.length - 1].lineBreakAfter = true;
      }
      return words;
    });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    const el = document.getElementById("pull-quote-trigger");
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    if (visibleWords >= allWords.length) return;

    const timer = setTimeout(() => {
      setVisibleWords((v) => v + 1);
    }, 120);
    return () => clearTimeout(timer);
  }, [hasStarted, visibleWords, allWords.length]);

  return (
    <div className="capsule-quote" id="pull-quote-trigger">
      <div className="capsule-divider" style={{ marginBottom: "40px" }} />
      <p className="capsule-quote__text">
        &ldquo;{allWords.map((item, i) => (
          <span key={i}>
            <span
              className="capsule-quote__word"
              style={{
                opacity: i < visibleWords ? 1 : 0,
                transition: "opacity 0.3s ease",
              }}
            >
              {item.word}
            </span>
            {item.lineBreakAfter ? <br /> : " "}
          </span>
        ))}&rdquo;
      </p>
      <div className="capsule-divider" style={{ marginTop: "40px" }} />
    </div>
  );
}
