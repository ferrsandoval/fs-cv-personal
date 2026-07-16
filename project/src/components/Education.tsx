import { useSite } from "../context/SiteContext";
import { CERTS } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  const { t } = useSite();
  return (
    <section id="education" style={{ maxWidth: 1000, margin: "0 auto", padding: "90px 28px" }}>
      <SectionHeader num="05" kicker={t("eduKicker")} />
      <h2 className="reveal" style={{ fontSize: "clamp(30px,4vw,44px)", letterSpacing: "-1.4px", fontWeight: 700, margin: "0 0 40px" }}>
        {t("eduTitle")}
      </h2>
      <div
        className="reveal panel rad-lg surface-bg"
        style={{ padding: "32px 34px", borderRadius: 24, background: "var(--surface)", border: "1px solid var(--border)" }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "baseline", gap: 12 }}>
          <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-.5px", margin: 0 }}>{t("eduDegree")}</h3>
          <span
            className="rad-lg accent-soft-bg"
            style={{
              font: "600 12px var(--mono)",
              color: "var(--accent)",
              padding: "5px 11px",
              borderRadius: 999,
              background: "var(--accent-soft)",
              border: "1px solid var(--border)",
            }}
          >
            {t("eduHonor")}
          </span>
        </div>
        <div style={{ font: "500 14px var(--sf)", color: "var(--muted)", marginTop: 8 }}>{t("eduSchool")}</div>
        <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--muted)", margin: "18px 0 0" }}>
          <strong style={{ color: "var(--text)", fontWeight: 600 }}>{t("thesisWord")}:</strong> {t("eduThesis")}
        </p>
      </div>
      <div
        className="reveal panel rad-lg surface2-bg"
        style={{ marginTop: 16, padding: "28px 34px", borderRadius: 24, background: "var(--surface2)", border: "1px solid var(--border)" }}
      >
        <div style={{ font: "600 12px var(--mono)", color: "var(--muted2)", letterSpacing: ".5px", textTransform: "uppercase", marginBottom: 16 }}>
          {t("certWord")}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
          {CERTS.map((c) => (
            <span
              key={c}
              className="rad-sm surface-bg"
              style={{
                font: "500 13px var(--sf)",
                color: "var(--muted)",
                padding: "8px 14px",
                borderRadius: 11,
                background: "var(--surface)",
                border: "1px solid var(--border2)",
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
