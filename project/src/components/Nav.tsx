import type { CSSProperties } from "react";
import { useSite } from "../context/SiteContext";

const linkStyle: CSSProperties = {
  font: "500 13px var(--sf)",
  color: "var(--muted)",
  padding: "7px 12px",
  borderRadius: 999,
};

const pillBtn: CSSProperties = {
  font: "600 11px var(--mono)",
  color: "var(--text)",
  padding: "7px 12px",
  borderRadius: 999,
  background: "var(--surface)",
  border: "1px solid var(--border)",
  cursor: "pointer",
  whiteSpace: "nowrap",
};

export function Nav() {
  const { t, cycleStyle, toggleLang, toggleTheme, styleIcon, styleLabel, langLabel, themeIcon } = useSite();

  return (
    <nav
      style={{
        position: "fixed",
        top: 22,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: 8,
        padding: "9px 10px 9px 20px",
        borderRadius: 999,
        background: "var(--navbg)",
        backdropFilter: "blur(26px) saturate(1.7)",
        WebkitBackdropFilter: "blur(26px) saturate(1.7)",
        border: "1px solid var(--border)",
        boxShadow: "var(--shadow)",
        maxWidth: "calc(100vw - 32px)",
      }}
    >
      <a href="#top" style={{ font: "700 14px var(--sf)", letterSpacing: ".2px", color: "var(--text)", marginRight: 8 }}>
        FS
      </a>
      <div style={{ display: "flex", gap: 4, alignItems: "center", whiteSpace: "nowrap" }} className="navlinks">
        <a href="#about" style={linkStyle}>
          {t("navAbout")}
        </a>
        <a href="#experience" style={linkStyle}>
          {t("navExp")}
        </a>
        <a href="#projects" style={linkStyle}>
          {t("navProjects")}
        </a>
        <a href="#contact" style={linkStyle}>
          {t("navContact")}
        </a>
      </div>
      <div style={{ width: 1, height: 20, background: "var(--border)", margin: "0 4px" }} />
      <button
        onClick={cycleStyle}
        aria-label="visual style"
        title="Cambiar estilo visual"
        className="bd1"
        style={{ ...pillBtn, display: "flex", alignItems: "center", gap: 6 }}
      >
        <span style={{ color: "var(--accent)", fontSize: 12 }}>{styleIcon}</span>
        {styleLabel}
      </button>
      <button onClick={toggleLang} className="bd1" style={{ ...pillBtn, padding: "7px 11px" }}>
        {langLabel}
      </button>
      <button
        onClick={toggleTheme}
        aria-label="theme"
        className="bd1"
        style={{
          fontSize: 15,
          width: 34,
          height: 34,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 999,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          cursor: "pointer",
          color: "var(--text)",
        }}
      >
        {themeIcon}
      </button>
    </nav>
  );
}
