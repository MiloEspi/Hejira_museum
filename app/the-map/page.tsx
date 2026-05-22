"use client";

import dynamic from "next/dynamic";
import Cuaderno from "@/components/map/Cuaderno";

// Dynamically import HejiraMap to avoid SSR issues with react-simple-maps
const HejiraMap = dynamic(() => import("@/components/map/HejiraMap"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        fontFamily: "var(--font-courier-prime), monospace",
        fontSize: "10px",
        color: "var(--ink-faded)",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
      }}
    >
      tracing the routes...
    </div>
  ),
});

export default function TheMapPage() {
  return (
    <Cuaderno>
      <HejiraMap />
    </Cuaderno>
  );
}
