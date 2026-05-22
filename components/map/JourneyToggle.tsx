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
        fontSize: "9px",
        letterSpacing: "0.25em",
        color: "var(--ink-faded)",
        textTransform: "uppercase",
        background: active ? "rgba(237, 225, 200, 0.9)" : "rgba(237, 225, 200, 0.6)",
        padding: "8px 14px",
        border: `1px solid ${active ? "var(--ink)" : "rgba(46, 29, 16, 0.3)"}`,
        borderRadius: "2px",
        transition: "all 0.3s",
      }}
    >
      <span>the three journeys</span>
      <div
        className="relative"
        style={{
          width: "28px",
          height: "14px",
          background: active ? "var(--ink)" : "rgba(46, 29, 16, 0.2)",
          borderRadius: "7px",
          transition: "background 0.3s",
        }}
      >
        <div
          className="absolute top-[2px] rounded-full"
          style={{
            width: "10px",
            height: "10px",
            background: active ? "var(--paper)" : "var(--ink)",
            left: active ? "16px" : "2px",
            transition: "left 0.3s",
          }}
        />
      </div>
    </button>
  );
}
