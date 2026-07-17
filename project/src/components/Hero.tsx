import { useRef } from "react";
import { useSite } from "../context/SiteContext";
import { useConstellation } from "../hooks/useConstellation";
import { STATS } from "../data/content";

function StatCard({ stat }: { stat: (typeof STATS)[number] }) {
  const { pick } = useSite();
  const isCounter = stat.value != null;
  return (
    <div
      className="statcard rad-lg bd-blur has-shadow surface-bg"
      style={{
        minWidth: 210,
        flex: 1,
        padding: "22px 24px",
        borderRadius: 20,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        textAlign: "left",
      }}
    >
      <div
        className="counter"
        data-target={isCounter ? String(stat.value) : undefined}
        data-suffix={stat.suffix || ""}
        style={{
          fontSize: "clamp(26px,3.2vw,34px)",
          fontWeight: 700,
          letterSpacing: "-1px",
          lineHeight: 1.05,
          background: "linear-gradient(120deg,var(--text),var(--accent))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {isCounter ? "0" : pick(stat.text!)}
      </div>
      <div style={{ font: "500 12.5px var(--sf)", color: "var(--muted)", marginTop: 9, lineHeight: 1.45 }}>
        {pick(stat.label)}
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useSite();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useConstellation(canvasRef);

  return (
    <header
      id="top"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "120px 24px 80px",
        overflow: "hidden",
      }}
    >
      <div
        className="hero-bg"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(120% 120% at 50% -10%,var(--bg2) 0%,var(--bg) 58%)",
          pointerEvents: "none",
        }}
      />
      <div
        className="orb1"
        style={{
          position: "absolute",
          width: 560,
          height: 560,
          borderRadius: "50%",
          filter: "blur(75px)",
          background: "rgba(var(--accent-rgb),.4)",
          top: -140,
          left: "50%",
          marginLeft: -280,
          animation: "floaty 12s ease-in-out infinite,hueDrift 18s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <div
        className="orb2"
        style={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          filter: "blur(75px)",
          background: "rgba(94,92,230,.26)",
          bottom: -60,
          left: -40,
          animation: "floaty2 14s ease-in-out infinite,hueDrift 22s ease-in-out infinite",
          pointerEvents: "none",
        }}
      />
      <canvas
        ref={canvasRef}
        className="constellation"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1, pointerEvents: "none", opacity: 0.9 }}
      />
      <div
        className="mglow"
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(340px 340px at var(--mx,50%) var(--my,38%),rgba(var(--accent-rgb),.16),transparent 70%)",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <div
        className="hero-inner"
        style={{ position: "relative", zIndex: 5, maxWidth: 760, display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <div
          className="rise rad-lg"
          style={{
            animationDelay: ".05s",
            font: "600 11px var(--mono)",
            letterSpacing: "1.4px",
            textTransform: "uppercase",
            color: "var(--accent)",
            padding: "8px 15px",
            borderRadius: 999,
            background: "var(--accent-soft)",
            border: "1px solid var(--border)",
          }}
        >
          {t("heroKicker")}
        </div>
        <h1
          className="rise grad-text"
          style={{
            animationDelay: ".12s",
            fontSize: "clamp(48px,9vw,88px)",
            lineHeight: 0.97,
            letterSpacing: "-2.5px",
            fontWeight: 700,
            margin: "24px 0 0",
          }}
        >
          Fernando
          <br />
          Sandoval
        </h1>
        <div className="rise" style={{ animationDelay: ".2s", font: "500 15px var(--sf)", color: "var(--muted)", marginTop: 20, letterSpacing: ".2px" }}>
          {t("heroSub")}
        </div>
        <p
          className="rise"
          style={{
            animationDelay: ".28s",
            fontSize: "clamp(17px,2.2vw,21px)",
            lineHeight: 1.5,
            color: "var(--muted)",
            maxWidth: 600,
            margin: "22px 0 0",
            fontWeight: 400,
          }}
        >
          {t("heroTag")}
        </p>
        <div
          className="rise"
          style={{ animationDelay: ".36s", display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap", justifyContent: "center" }}
        >
          <a
            href="#projects"
            className="mag btn-primary rad-lg"
            style={{
              font: "600 15px var(--sf)",
              padding: "15px 28px",
              borderRadius: 999,
              background: "var(--accent)",
              color: "#fff",
              boxShadow: "0 12px 34px -10px rgba(var(--accent-rgb),.7)",
            }}
          >
            {t("heroCta1")}
          </a>
          <a
            href="#contact"
            className="mag rad-lg bd-blur"
            style={{
              font: "600 15px var(--sf)",
              padding: "15px 28px",
              borderRadius: 999,
              background: "var(--surface)",
              color: "var(--text)",
              border: "1px solid var(--border)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
            }}
          >
            {t("heroCta2")}
          </a>
        </div>
      </div>

      <div
        className="rise hero-stats"
        style={{
          animationDelay: ".5s",
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 14,
          marginTop: 64,
          maxWidth: 820,
        }}
      >
        {STATS.map((s, i) => (
          <StatCard key={i} stat={s} />
        ))}
      </div>
    </header>
  );
}
