"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

interface Snowflake {
  id: number;
  left: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  drift: number;
}

function generateSnowflakes(count: number): Snowflake[] {
  const flakes: Snowflake[] = [];
  for (let i = 0; i < count; i++) {
    flakes.push({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 2,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 6,
      opacity: 0.3 + Math.random() * 0.5,
      drift: -20 + Math.random() * 40,
    });
  }
  return flakes;
}

export default function SnowField() {
  const [mounted, setMounted] = useState(false);
  const snowflakes = useMemo(() => generateSnowflakes(50), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-white"
          style={{
            left: flake.left,
            width: flake.size,
            height: flake.size,
            opacity: 0,
          }}
          animate={{
            y: ["-10vh", "110vh"],
            x: [0, flake.drift],
            opacity: [0, flake.opacity, flake.opacity, 0],
          }}
          transition={{
            duration: flake.duration,
            delay: flake.delay,
            repeat: Infinity,
            ease: "linear",
            times: [0, 0.1, 0.9, 1],
          }}
        />
      ))}
    </div>
  );
}
