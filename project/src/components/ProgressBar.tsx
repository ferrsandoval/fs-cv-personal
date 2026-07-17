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
          background: "var(--accent)",
          boxShadow: "0 0 12px rgba(var(--accent-rgb),.6)",
        }}
      />
    </div>
  );
}
