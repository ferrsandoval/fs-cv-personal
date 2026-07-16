import { useSite } from "../context/SiteContext";
import { PROJ } from "../data/content";
import { SectionHeader } from "./SectionHeader";
import type { Project } from "../types";

function ProjCard({ project, idx }: { project: Project; idx: number }) {
  const { t, pick, openProject } = useSite();
  return (
    <div
      className="reveal tilt projcard rad-lg bd-blur surface-bg"
      onClick={() => openProject(idx)}
      style={{
        position: "relative",
        height: "100%",
        minHeight: 230,
        padding: "28px 26px 24px",
        borderRadius: 24,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        overflow: "hidden",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="cardglow"
        style={{
          position: "absolute",
          width: 300,
          height: 300,
          borderRadius: "50%",
          filter: "blur(60px)",
          background: "rgba(10,132,255,.16)",
          top: "var(--gy,-60%)",
          left: "var(--gx,-30%)",
          opacity: 0,
          transition: "opacity .4s",
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", height: "100%" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div
            className="projicon rad-sm accent-soft-bg"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 13,
              background: "var(--accent-soft)",
              border: "1px solid var(--border)",
              fontSize: 20,
              animation: "floatSoft 4s ease-in-out infinite",
            }}
          >
            {project.icon}
          </div>
          <span className="projnum" style={{ font: "600 11px var(--mono)", color: "var(--muted2)", letterSpacing: "1px" }}>
            {"0" + (idx + 1)}
          </span>
        </div>
        <h3 style={{ fontSize: 19, fontWeight: 600, letterSpacing: "-.4px", margin: "20px 0 0", lineHeight: 1.2 }}>{pick(project.name)}</h3>
        <p className="projdesc" style={{ fontSize: 14.5, lineHeight: 1.55, color: "var(--muted)", margin: "12px 0 0" }}>
          {pick(project.desc)}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: "auto", paddingTop: 18 }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rad-sm surface2-bg"
              style={{
                font: "600 10.5px var(--mono)",
                color: "var(--muted)",
                padding: "5px 10px",
                borderRadius: 8,
                background: "var(--surface2)",
                border: "1px solid var(--border2)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="seemore" style={{ marginTop: 16, font: "600 12px var(--sf)", color: "var(--accent)", display: "flex", alignItems: "center", gap: 6 }}>
          {t("seeMore")} →
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { t } = useSite();
  return (
    <section id="projects" style={{ maxWidth: 1160, margin: "0 auto", padding: "90px 28px" }}>
      <SectionHeader num="03" kicker={t("projKicker")} />
      <h2 className="reveal" style={{ fontSize: "clamp(30px,4vw,44px)", letterSpacing: "-1.4px", fontWeight: 700, margin: "0 0 12px" }}>
        {t("projTitle")}
      </h2>
      <div className="reveal" style={{ margin: "0 0 34px" }}>
        <p style={{ fontSize: 17, color: "var(--muted)", margin: 0, maxWidth: 620 }}>{t("projSub")}</p>
      </div>
      <div className="proj-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, gridAutoRows: "1fr" }}>
        {PROJ.map((p, i) => (
          <ProjCard key={i} project={p} idx={i} />
        ))}
      </div>
    </section>
  );
}
