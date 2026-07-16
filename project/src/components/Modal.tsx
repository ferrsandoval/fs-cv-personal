import { useEffect } from "react";
import { useSite } from "../context/SiteContext";
import { PROJ } from "../data/content";
import { MockPreview } from "./ModalMocks";

export function Modal() {
  const { openIdx, closeModal, pick, t } = useSite();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [closeModal]);

  if (openIdx == null) return null;
  const p = PROJ[openIdx];

  return (
    <div
      onClick={closeModal}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        background: "rgba(4,6,10,.62)",
        backdropFilter: "blur(9px)",
        WebkitBackdropFilter: "blur(9px)",
        animation: "backdropFade .3s ease both",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "min(640px,100%)",
          maxHeight: "88vh",
          overflowY: "auto",
          borderRadius: 26,
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          boxShadow: "0 40px 110px -30px rgba(0,0,0,.75)",
          animation: "modalIn .45s cubic-bezier(.16,1,.3,1) both",
        }}
      >
        <button
          onClick={closeModal}
          aria-label="cerrar"
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            zIndex: 5,
            width: 34,
            height: 34,
            borderRadius: "50%",
            border: "1px solid var(--border)",
            background: "var(--surface)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            color: "var(--text)",
            fontSize: 15,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </button>
        <div
          style={{
            margin: "20px 20px 0",
            borderRadius: 18,
            overflow: "hidden",
            border: "1px solid var(--border)",
            background: "var(--surface2)",
            position: "relative",
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
          <MockPreview mock={p.mock} />
        </div>
        <div style={{ padding: "24px 30px 30px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 48,
                height: 48,
                flex: "none",
                borderRadius: 14,
                background: "var(--accent-soft)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
              }}
            >
              {p.icon}
            </div>
            <h3 style={{ fontSize: 23, fontWeight: 700, letterSpacing: "-.6px", margin: 0, lineHeight: 1.15 }}>{pick(p.name)}</h3>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: 16 }}>
            {p.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  font: "600 10.5px var(--mono)",
                  color: "var(--accent)",
                  padding: "6px 11px",
                  borderRadius: 8,
                  background: "var(--accent-soft)",
                  border: "1px solid var(--border)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: "var(--muted)", margin: "20px 0 0" }}>{pick(p.longDesc)}</p>
          <div style={{ display: "flex", gap: 12, marginTop: 26, flexWrap: "wrap" }}>
            <a
              href="#contact"
              onClick={closeModal}
              style={{ font: "600 14px var(--sf)", padding: "13px 24px", borderRadius: 999, background: "var(--accent)", color: "#fff" }}
            >
              {t("askDemo")}
            </a>
            <button
              onClick={closeModal}
              style={{
                font: "600 14px var(--sf)",
                padding: "13px 24px",
                borderRadius: 999,
                background: "var(--surface)",
                color: "var(--text)",
                border: "1px solid var(--border)",
                cursor: "pointer",
              }}
            >
              {t("closeWord")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
