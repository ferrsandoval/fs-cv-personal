import type { CSSProperties } from "react";
import { useSite } from "../context/SiteContext";
import { PhotoSlot } from "./PhotoSlot";
import { SectionHeader } from "./SectionHeader";

const factRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 9,
  font: "500 13.5px var(--sf)",
  color: "var(--muted)",
};

const para: CSSProperties = { fontSize: 19, lineHeight: 1.6, color: "var(--muted)" };

export function About() {
  const { t } = useSite();

  return (
    <section id="about" style={{ maxWidth: 1080, margin: "0 auto", padding: "110px 28px 90px" }}>
      <SectionHeader num="01" kicker={t("aboutKicker")} mb={26} />
      <div
        className="about-grid"
        style={{ display: "grid", gridTemplateColumns: "minmax(240px,320px) 1fr", gap: 56, alignItems: "start" }}
      >
        <div className="reveal" style={{ position: "relative" }}>
          <div
            className="rad-lg has-shadow surface-bg"
            style={{
              position: "relative",
              aspectRatio: "4/5",
              borderRadius: 26,
              overflow: "hidden",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              boxShadow: "var(--shadow)",
            }}
          >
            <PhotoSlot />
          </div>
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 9 }}>
            <div style={factRow}>
              <span style={{ color: "var(--accent)" }}>◆</span>
              {t("locLabel")}
            </div>
            <div style={factRow}>
              <span style={{ color: "var(--accent)" }}>◆</span>
              Ing. Mecatrónica · 10+ {t("yearsWord")}
            </div>
          </div>
        </div>
        <div className="reveal" style={{ transitionDelay: ".1s" }}>
          <h2
            style={{
              fontSize: "clamp(30px,4vw,44px)",
              lineHeight: 1.08,
              letterSpacing: "-1.4px",
              fontWeight: 700,
              margin: "0 0 8px",
              textWrap: "balance",
            }}
          >
            {t("aboutTitle")}
          </h2>
          <p style={{ ...para, margin: "22px 0 0" }}>{t("aboutP1")}</p>
          <p style={{ ...para, margin: "20px 0 0" }}>{t("aboutP2")}</p>
          <div
            className="accent-soft-bg rad-lg"
            style={{
              margin: "28px 0 0",
              padding: "22px 26px",
              borderRadius: 20,
              background: "var(--accent-soft)",
              border: "1px solid var(--border)",
            }}
          >
            <p style={{ fontSize: 19, lineHeight: 1.55, color: "var(--text)", margin: 0, fontWeight: 500 }}>{t("aboutQuote")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
