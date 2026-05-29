"use client";

interface JourneyToggleProps {
  active: boolean;
  onToggle: () => void;
}

export default function JourneyToggle({ active, onToggle }: JourneyToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="absolute top-[28px] right-[36px] z-[7] flex items-center gap-[10px] cursor-pointer select-none"
      style={{
        fontFamily: "var(--font-courier-prime), monospace",
        fontSize: "20px",
        fontWeight: "bold",
        letterSpacing: "0.2em",
        color: "var(--ink-faded)",
        textTransform: "uppercase",
        background: active ? "rgba(237, 225, 200, 0.95)" : "rgba(237, 225, 200, 0.85)",
        padding: "18px 36px",
        border: `3px solid ${active ? "var(--ink)" : "rgba(46, 29, 16, 0.3)"}`,
        borderRadius: "8px",
        transition: "all 0.3s",
        boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
      }}
    >
      <span>the three journeys</span>
      <div
        className="relative"
        style={{
          width: "60px",
          height: "30px",
          background: active ? "var(--ink)" : "rgba(46, 29, 16, 0.2)",
          borderRadius: "15px",
          transition: "background 0.3s",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            top: "4px",
            width: "22px",
            height: "22px",
            background: active ? "var(--paper)" : "var(--ink)",
            left: active ? "34px" : "4px",
            transition: "left 0.3s",
          }}
        />
      </div>
    </button>
  );
}
