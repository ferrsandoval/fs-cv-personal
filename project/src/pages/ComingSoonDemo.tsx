import { useSite } from "../context/SiteContext";
import { MockPreview } from "../components/ModalMocks";
import type { Project } from "../types";
import { DemoShell } from "./DemoShell";

export function ComingSoonDemo({ project }: { project: Project }) {
  const { t, pick } = useSite();
  return (
    <DemoShell project={project}>
      <div
        className="demo-card"
        style={{
          borderRadius: 20,
          overflow: "hidden",
          border: "1px solid var(--border)",
          background: "var(--surface2)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 7, padding: "12px 14px", borderBottom: "1px solid var(--border2)" }}>
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
          <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
          <span style={{ marginLeft: 10, font: "600 10px var(--mono)", color: "var(--muted2)", letterSpacing: ".6px", textTransform: "uppercase" }}>
            {t("demoLabel")}
          </span>
        </div>
        <MockPreview mock={project.mock} />
      </div>
      <div
        style={{
          marginTop: 24,
          padding: "18px 20px",
          borderRadius: 16,
          background: "var(--accent-soft)",
          border: "1px solid var(--border)",
        }}
      >
        <div style={{ font: "700 15px var(--sf)", color: "var(--text)" }}>🚧 {t("comingSoon")}</div>
        <p style={{ font: "400 13.5px/1.6 var(--sf)", color: "var(--muted)", margin: "8px 0 0" }}>{t("comingSoonSub")}</p>
      </div>
      <p style={{ font: "400 16px/1.7 var(--sf)", color: "var(--muted)", margin: "26px 0 0" }}>{pick(project.longDesc)}</p>
    </DemoShell>
  );
}
