export function ProgressBar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        zIndex: 200,
        background: "transparent",
        pointerEvents: "none",
      }}
    >
      <div
        className="progressbar"
        style={{
          height: "100%",
          width: "0%",
          background: "linear-gradient(90deg,var(--accent),#5e5ce6)",
          boxShadow: "0 0 12px rgba(10,132,255,.6)",
        }}
      />
    </div>
  );
}
