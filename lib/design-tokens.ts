export const tokens = {
  color: {
    paper: {
      base: "#ede1c8",
      deep: "#d9c8a6",
      shadow: "#b8a47e",
      burn: "#6e4a20",
    },
    ink: {
      base: "#2b1d10",
      soft: "#4a3520",
      faded: "#6e5235",
    },
    bodyBg: "#2a1f10",
    journey: {
      thunder: { base: "#6b1f2a", glow: "#a83a48" },
      guerin: { base: "#1f3a4a", glow: "#3d6a82" },
      solo: { base: "#8a5a2b", glow: "#c89554" },
    },
    capsule: {
      crowBlack: "#0a0a0a",
      iceBlue: "#c8d6dd",
      iceWhite: "#e8eef0",
    },
    region: {
      pnw: "#7a9466",
      sw: "#c89554",
      rockies: "#9a7a55",
      plains: "#d8c074",
      midwest: "#a8a45a",
      north: "#8aa4b8",
      ne: "#9a7a5a",
      south: "#7a8a4a",
      texas: "#b89464",
      florida: "#6a9464",
    },
  },
  font: {
    display: "var(--font-italiana), serif",
    body: "var(--font-im-fell-english), serif",
    bodyAlt: "var(--font-cormorant-garamond), serif",
    mono: "var(--font-courier-prime), monospace",
    hand: "var(--font-reenie-beanie), cursive",
    handSignature: "var(--font-homemade-apple), cursive",
  },
} as const;

export type DesignTokens = typeof tokens;
