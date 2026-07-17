import { useEffect, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useSite } from "../context/SiteContext";
import type { Project } from "../types";

export function DemoShell({ project, children }: { project: Project; children: ReactNode }) {
  const { t, pick } = useSite();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <div
        className="demo-topbar"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: 14,
          padding: "16px 24px",
          background: "var(--navbg)",
          backdropFilter: "blur(20px) saturate(1.6)",
          WebkitBackdropFilter: "blur(20px) saturate(1.6)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <Link
          to="/"
          className="demo-chip rad-lg bd1"
          style={{
            font: "600 12.5px var(--mono)",
            color: "var(--text)",
            padding: "9px 14px",
            borderRadius: 999,
            background: "var(--surface)",
            border: "1px solid var(--border)",
            whiteSpace: "nowrap",
          }}
        >
          {t("backToPortfolio")}
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: 0 }}>
          <span
            className="rad-sm"
            style={{
              width: 32,
              height: 32,
              flex: "none",
              borderRadius: 10,
              background: "var(--accent-soft)",
              border: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 16,
            }}
          >
            {project.icon}
          </span>
          <span
            style={{
              font: "600 14px var(--sf)",
              color: "var(--text)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {pick(project.name)}
          </span>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end" }}>
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="demo-chip"
              style={{
                font: "600 10px var(--mono)",
                color: "var(--accent)",
                padding: "5px 10px",
                borderRadius: 8,
                background: "var(--accent-soft)",
                border: "1px solid var(--border)",
                whiteSpace: "nowrap",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div style={{ flex: 1, padding: "36px 24px 80px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "min(880px,100%)" }}>{children}</div>
      </div>
    </div>
  );
}
