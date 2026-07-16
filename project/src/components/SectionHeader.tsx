export function SectionHeader({ num, kicker, mb = 18 }: { num: string; kicker: string; mb?: number }) {
  return (
    <div className="reveal" style={{ display: "flex", alignItems: "flex-end", gap: 18, marginBottom: mb }}>
      <span
        className="sectionnum"
        style={{
          fontSize: "clamp(56px,8vw,86px)",
          fontWeight: 800,
          lineHeight: 0.7,
          letterSpacing: "-4px",
          color: "transparent",
          WebkitTextStroke: "1.5px var(--border)",
        }}
      >
        {num}
      </span>
      <span
        style={{
          font: "600 12px var(--mono)",
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          color: "var(--accent)",
          paddingBottom: 9,
        }}
      >
        {kicker}
      </span>
    </div>
  );
}
