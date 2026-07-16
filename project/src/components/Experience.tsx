import { useSite } from "../context/SiteContext";
import { EXP } from "../data/content";
import { SectionHeader } from "./SectionHeader";
import type { Job } from "../types";

function ExpItem({ job }: { job: Job }) {
  const { t, pick } = useSite();
  return (
    <div className="reveal" style={{ position: "relative", marginBottom: 20 }}>
      <div
        className="timeline-node"
        style={{
          position: "absolute",
          left: -42,
          top: 6,
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "var(--bg)",
          border: "2px solid var(--accent)",
          zIndex: 2,
        }}
      />
      {job.current && (
        <div
          className="pulsering"
          style={{
            position: "absolute",
            left: -42,
            top: 6,
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "var(--accent)",
            animation: "pulseRing 2.4s ease-out infinite",
            zIndex: 1,
          }}
        />
      )}
      <div
        className="expcard rad-lg bd-blur surface-bg"
        style={{
          padding: "26px 30px",
          borderRadius: 20,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 11, marginBottom: 14 }}>
          <span
            className="exp-period rad-lg accent-soft-bg"
            style={{
              font: "600 11px var(--mono)",
              color: "var(--accent)",
              padding: "5px 11px",
              borderRadius: 999,
              background: "var(--accent-soft)",
              border: "1px solid var(--border)",
              letterSpacing: ".3px",
            }}
          >
            {job.period}
          </span>
          {job.current && (
            <span
              className="nowbadge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                font: "600 10px var(--mono)",
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: "#22c55e",
              }}
            >
              <span
                className="nowdot"
                style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 8px #22c55e" }}
              />
              {t("nowLabel")}
            </span>
          )}
          <span style={{ font: "500 12px var(--sf)", color: "var(--muted2)" }}>{job.place}</span>
        </div>
        <h3 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-.5px", margin: 0, lineHeight: 1.15 }}>{pick(job.role)}</h3>
        <div style={{ font: "600 14px var(--sf)", color: "var(--accent)", marginTop: 6 }}>{job.company}</div>
        <p style={{ fontSize: 15.5, lineHeight: 1.65, color: "var(--muted)", margin: "16px 0 0", maxWidth: 720 }}>{pick(job.desc)}</p>
      </div>
    </div>
  );
}

export function Experience() {
  const { t } = useSite();
  return (
    <section id="experience" style={{ maxWidth: 1000, margin: "0 auto", padding: "90px 28px" }}>
      <SectionHeader num="02" kicker={t("expKicker")} />
      <h2 className="reveal" style={{ fontSize: "clamp(30px,4vw,44px)", letterSpacing: "-1.4px", fontWeight: 700, margin: "0 0 44px" }}>
        {t("expTitle")}
      </h2>
      <div className="timeline-wrap" style={{ position: "relative", paddingLeft: 42 }}>
        <div
          className="timeline-line"
          style={{
            position: "absolute",
            left: 6,
            top: 10,
            bottom: 20,
            width: 2,
            background: "linear-gradient(var(--accent),var(--border) 90%)",
          }}
        />
        {EXP.map((job, i) => (
          <ExpItem key={i} job={job} />
        ))}
      </div>
    </section>
  );
}
