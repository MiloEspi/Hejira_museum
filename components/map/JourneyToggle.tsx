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
        fontSize: "14px",
        letterSpacing: "0.2em",
        color: "var(--ink-faded)",
        textTransform: "uppercase",
        background: active ? "rgba(237, 225, 200, 0.95)" : "rgba(237, 225, 200, 0.75)",
        padding: "12px 24px",
        border: `2px solid ${active ? "var(--ink)" : "rgba(46, 29, 16, 0.3)"}`,
        borderRadius: "4px",
        transition: "all 0.3s",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <span>the three journeys</span>
      <div
        className="relative"
        style={{
          width: "44px",
          height: "22px",
          background: active ? "var(--ink)" : "rgba(46, 29, 16, 0.2)",
          borderRadius: "11px",
          transition: "background 0.3s",
        }}
      >
        <div
          className="absolute top-[3px] rounded-full"
          style={{
            width: "16px",
            height: "16px",
            background: active ? "var(--paper)" : "var(--ink)",
            left: active ? "25px" : "3px",
            transition: "left 0.3s",
          }}
        />
      </div>
    </button>
  );
}
