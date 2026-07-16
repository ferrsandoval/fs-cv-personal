import type { CSSProperties } from "react";
import { useSite } from "../context/SiteContext";

const glassBtn: CSSProperties = {
  font: "600 15px var(--sf)",
  padding: "16px 26px",
  borderRadius: 999,
  background: "var(--surface)",
  color: "var(--text)",
  border: "1px solid var(--border)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
};

export function Contact() {
  const { t } = useSite();
  return (
    <section id="contact" style={{ position: "relative", padding: "110px 28px 130px", overflow: "hidden" }}>
      <div
        className="contact-orb"
        style={{
          position: "absolute",
          width: 520,
          height: 520,
          borderRadius: "50%",
          filter: "blur(80px)",
          background: "rgba(10,132,255,.28)",
          top: -120,
          left: "50%",
          marginLeft: -260,
          animation: "floaty 13s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div className="reveal" style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(34px,5.5vw,58px)", lineHeight: 1.05, letterSpacing: "-2px", fontWeight: 700, margin: 0, textWrap: "balance" }}>
          {t("contactTitle")}
        </h2>
        <p style={{ fontSize: 20, lineHeight: 1.5, color: "var(--muted)", margin: "22px 0 0" }}>{t("contactSub")}</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", marginTop: 38 }}>
          <a
            href="mailto:ferrsandoval@gmail.com"
            className="mag btn-primary rad-lg"
            style={{
              font: "600 15px var(--sf)",
              padding: "16px 30px",
              borderRadius: 999,
              background: "var(--accent)",
              color: "#fff",
              boxShadow: "0 14px 36px -10px rgba(10,132,255,.7)",
            }}
          >
            ferrsandoval@gmail.com
          </a>
          <a href="https://linkedin.com/in/ferrsandoval" target="_blank" rel="noreferrer" className="rad-lg bd-blur" style={glassBtn}>
            LinkedIn ↗
          </a>
          <a href="https://github.com/ferrsandoval" target="_blank" rel="noreferrer" className="rad-lg bd-blur" style={glassBtn}>
            GitHub ↗
          </a>
        </div>
        <div style={{ font: "500 13px var(--sf)", color: "var(--muted2)", marginTop: 50 }}>
          Hermosillo, Sonora · México — © 2026 Fernando Sandoval
        </div>
      </div>
    </section>
  );
}
