import { useSite } from "../context/SiteContext";
import { SKILLS } from "../data/content";
import { SectionHeader } from "./SectionHeader";

export function Skills() {
  const { t, pick } = useSite();
  return (
    <section id="skills" style={{ maxWidth: 1080, margin: "0 auto", padding: "90px 28px" }}>
      <SectionHeader num="04" kicker={t("skillKicker")} />
      <h2 className="reveal" style={{ fontSize: "clamp(30px,4vw,44px)", letterSpacing: "-1.4px", fontWeight: 700, margin: "0 0 44px" }}>
        {t("skillTitle")}
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))", gap: 18 }}>
        {SKILLS.map((cat, i) => (
          <div
            key={i}
            className="reveal panel rad-lg surface-bg"
            style={{ padding: "26px 28px", borderRadius: 22, background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "-.3px",
                margin: "0 0 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <span style={{ color: "var(--accent)" }}>{cat.icon}</span>
              {pick(cat.name)}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {cat.items.map((it, j) => (
                <span
                  key={j}
                  className="rad-sm surface2-bg"
                  style={{
                    font: "500 12.5px var(--sf)",
                    color: "var(--muted)",
                    padding: "7px 12px",
                    borderRadius: 10,
                    background: "var(--surface2)",
                    border: "1px solid var(--border2)",
                  }}
                >
                  {pick(it)}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
