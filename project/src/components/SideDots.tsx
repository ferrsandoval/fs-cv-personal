import type { CSSProperties } from "react";

const SECTIONS = ["top", "about", "experience", "projects", "skills", "contact"];

const dotStyle: CSSProperties = {
  width: 9,
  height: 9,
  borderRadius: "50%",
  border: "1.5px solid var(--muted2)",
  transition: "all .3s",
};

export function SideDots() {
  return (
    <div
      className="sidedots"
      style={{
        position: "fixed",
        right: 20,
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 90,
        display: "flex",
        flexDirection: "column",
        gap: 15,
        alignItems: "center",
      }}
    >
      {SECTIONS.map((s) => (
        <a key={s} href={`#${s}`} className="sdot" data-sec={s} style={dotStyle} />
      ))}
    </div>
  );
}
