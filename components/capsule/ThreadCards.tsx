"use client";

import { useRouter } from "next/navigation";
import { BLACK_CROW_THREADS } from "@/lib/capsule-data";

/**
 * ThreadCards — Three connection cards to Amelia, Hejira, Coyote.
 * Color line on top. Hover elevation + pulsing color line.
 */
export default function ThreadCards() {
  const router = useRouter();

  return (
    <div className="capsule-threads">
      <div className="capsule-section-header">Threads to Other Songs</div>
      <div className="capsule-threads__grid">
        {BLACK_CROW_THREADS.map((thread) => (
          <div
            key={thread.targetSlug}
            className="capsule-threads__card"
            onClick={() => router.push(`/song/${thread.targetSlug}`)}
            role="link"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") router.push(`/song/${thread.targetSlug}`); }}
          >
            <div
              className="capsule-threads__color-line"
              style={{ background: thread.color }}
            />
            <div className="capsule-threads__card-body">
              <div className="capsule-threads__card-arrow">→ thread</div>
              <div className="capsule-threads__card-title">{thread.targetTitle}</div>
              <div className="capsule-threads__card-core">&ldquo;{thread.emotionalCore}&rdquo;</div>
              <div className="capsule-threads__card-text">{thread.bridgeText}</div>
              <div className="capsule-threads__card-quote">
                &ldquo;{thread.fragmentQuote}&rdquo;
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
