import type { CSSProperties } from "react";
import type { ProjectMock } from "../types";

const stage: CSSProperties = {
  height: 236,
  padding: 18,
  background: "radial-gradient(120% 120% at 88% -10%,var(--accent-soft),transparent 55%)",
  overflow: "hidden",
};

function ChatMock() {
  return (
    <div style={{ ...stage, display: "flex", flexDirection: "column", gap: 10 }}>
      <div
        style={{
          alignSelf: "flex-end",
          maxWidth: "74%",
          background: "var(--accent)",
          color: "#fff",
          padding: "10px 14px",
          borderRadius: "15px 15px 4px 15px",
          font: "500 12.5px/1.4 var(--sf)",
        }}
      >
        ¿Cuál es la política de garantía para equipo industrial?
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          maxWidth: "86%",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          padding: "11px 14px",
          borderRadius: "15px 15px 15px 4px",
          font: "400 12.5px/1.55 var(--sf)",
          color: "var(--text)",
        }}
      >
        La garantía estándar es de 12 meses sobre defectos de fabricación, con cobertura de refacciones.
        <div style={{ marginTop: 9, display: "flex", gap: 6, flexWrap: "wrap" }}>
          <span style={cite}>📄 manual_garantias.pdf · p.4</span>
          <span style={cite}>📄 políticas.pdf · p.11</span>
        </div>
      </div>
      <div
        style={{
          alignSelf: "flex-start",
          display: "flex",
          gap: 5,
          padding: "9px 13px",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 15,
        }}
      >
        <span className="tdot" />
        <span className="tdot" style={{ animationDelay: ".2s" }} />
        <span className="tdot" style={{ animationDelay: ".4s" }} />
      </div>
    </div>
  );
}

const cite: CSSProperties = {
  font: "600 9.5px var(--mono)",
  color: "var(--accent)",
  padding: "4px 8px",
  borderRadius: 6,
  background: "var(--accent-soft)",
  border: "1px solid var(--border)",
};

function DocMock() {
  const kv = (k: string, v: string, accent = false) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: 8,
        font: "500 11px var(--sf)",
        padding: "8px 11px",
        borderRadius: 9,
        background: accent ? "var(--accent-soft)" : "var(--surface)",
        border: "1px solid var(--border)",
      }}
    >
      <span style={{ color: "var(--muted2)" }}>{k}</span>
      <span style={{ color: accent ? "var(--accent)" : "var(--text)", fontWeight: accent ? 600 : undefined, fontFamily: accent ? undefined : "var(--mono)" }}>
        {v}
      </span>
    </div>
  );
  return (
    <div style={{ ...stage, display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 16, alignItems: "center" }}>
      <div
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 12,
          padding: 14,
          display: "flex",
          flexDirection: "column",
          gap: 8,
          boxShadow: "0 10px 24px -14px rgba(0,0,0,.4)",
        }}
      >
        <div style={{ font: "600 9px var(--mono)", color: "var(--muted2)", letterSpacing: ".5px" }}>FACTURA_2451.PDF</div>
        <div className="skbar" style={{ height: 9, width: "80%" }} />
        <div className="skbar" style={{ height: 9, width: "60%" }} />
        <div style={{ height: 9, width: "70%", borderRadius: 6, background: "var(--accent)", opacity: 0.55 }} />
        <div className="skbar" style={{ height: 9, width: "50%" }} />
        <div className="skbar" style={{ height: 9, width: "66%" }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ font: "600 9px var(--mono)", color: "var(--accent)", letterSpacing: ".6px", textTransform: "uppercase" }}>✓ Datos extraídos</div>
        {kv("Folio", "A-2451")}
        {kv("Cliente", "AINSA S.A.")}
        {kv("Total", "$128,400")}
        {kv("Estado", "→ ERP ✓", true)}
      </div>
    </div>
  );
}

function ListMock() {
  const row = (name: string, w: string, score: string, color: string, dim = false) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 11,
        padding: "9px 12px",
        borderRadius: 11,
        background: "var(--surface)",
        border: "1px solid var(--border)",
        opacity: dim ? 0.6 : 1,
      }}
    >
      <span style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--accent-soft)", border: "1px solid var(--border)", flex: "none" }} />
      <div style={{ flex: 1 }}>
        <div style={{ font: "600 11.5px var(--sf)" }}>{name}</div>
        <div className="skbar" style={{ height: 6, width: w, marginTop: 5 }} />
      </div>
      <span style={{ font: "700 11px var(--mono)", color }}>{score}</span>
    </div>
  );
  return (
    <div style={{ ...stage, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ font: "600 9px var(--mono)", color: "var(--muted2)", letterSpacing: ".6px", textTransform: "uppercase", marginBottom: 2 }}>
        Prospectos priorizados
      </div>
      {row("Grupo Ferretero MX", "60%", "92 · Alto", "#22c55e")}
      {row("Aceros del Norte", "48%", "86 · Alto", "#22c55e")}
      {row("Cocinas Industriales SA", "40%", "61 · Medio", "#f59e0b")}
      {row("Distribuidora Sur", "30%", "34 · Bajo", "var(--muted2)", true)}
    </div>
  );
}

function ChartMock() {
  const bar = (flag: string, name: string, w: string, pct: string, delay?: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: 10, font: "600 11px var(--sf)" }}>
      <span style={{ width: 74, flex: "none" }}>
        {flag} {name}
      </span>
      <div style={{ flex: 1, height: 14, borderRadius: 7, background: "var(--surface2)", overflow: "hidden" }}>
        <div
          className="mkbar"
          style={{ height: "100%", width: w, background: "linear-gradient(90deg,var(--accent),#5e5ce6)", borderRadius: 7, animationDelay: delay }}
        />
      </div>
      <span style={{ fontFamily: "var(--mono)", color: "var(--accent)", width: 44, textAlign: "right" }}>{pct}</span>
    </div>
  );
  return (
    <div style={{ ...stage, display: "flex", flexDirection: "column", gap: 11 }}>
      <div style={{ font: "600 9px var(--mono)", color: "var(--muted2)", letterSpacing: ".6px", textTransform: "uppercase" }}>
        Probabilidad de título · 40k simulaciones Monte Carlo
      </div>
      {bar("🇧🇷", "Brasil", "78%", "18.4%")}
      {bar("🇫🇷", "Francia", "64%", "15.2%", ".1s")}
      {bar("🇦🇷", "Argentina", "58%", "13.9%", ".2s")}
      {bar("🇪🇸", "España", "47%", "11.1%", ".3s")}
      <div style={{ font: "500 10px var(--mono)", color: "var(--muted2)", marginTop: 2 }}>Poisson · Elo · Dixon-Coles · Kelly</div>
    </div>
  );
}

function TerminalMock() {
  return (
    <div style={{ height: 236, padding: "16px 18px", background: "#080b12", font: "12px/1.75 var(--mono)", color: "#c9d4e5", overflow: "hidden" }}>
      <div style={{ color: "#22c55e" }}>➜ ~ ollama run qwen2.5:32b</div>
      <div style={{ color: "#7fb2ff", marginTop: 2 }}>&gt;&gt;&gt; Resume el reporte de inventario Q2</div>
      <div style={{ marginTop: 6, color: "#c9d4e5" }}>
        El inventario cerró en <span style={{ color: "#fff" }}>1,240</span> SKUs, con
      </div>
      <div style={{ color: "#c9d4e5" }}>
        rotación de <span style={{ color: "#fff" }}>4.2x</span> y <span style={{ color: "#fff" }}>18</span> productos en
      </div>
      <div style={{ color: "#c9d4e5" }}>
        punto de reorden.
        <span style={{ display: "inline-block", width: 8, height: 14, background: "#7fb2ff", marginLeft: 3, verticalAlign: -2, animation: "blink 1s step-end infinite" }} />
      </div>
      <div style={{ marginTop: 10, fontSize: 10, color: "#5b6b85" }}>100% local · 0 tokens enviados a la nube · Mac Mini M4</div>
    </div>
  );
}

function GridMock() {
  const card = (name: string, w: string, delay?: string) => (
    <div style={{ borderRadius: 11, border: "1px solid var(--border)", background: "var(--surface)", overflow: "hidden" }}>
      <div className="skbar" style={{ height: 52, width: "100%", borderRadius: 0, animationDelay: delay }} />
      <div style={{ padding: 9 }}>
        <div style={{ font: "600 10px var(--sf)" }}>{name}</div>
        <div className="skbar" style={{ height: 6, width: w, marginTop: 6 }} />
      </div>
    </div>
  );
  return (
    <div style={{ ...stage, padding: "16px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "9px 13px",
          borderRadius: 10,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          font: "500 11.5px var(--sf)",
          color: "var(--muted2)",
        }}
      >
        🔎 Buscar por especificación técnica…
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}>
        {card("Tanque INOX 304", "60%")}
        {card("Mesa de trabajo", "70%", ".15s")}
        {card("Campana extractora", "55%", ".3s")}
      </div>
      <div style={{ font: "500 10px var(--mono)", color: "var(--muted2)" }}>React · TypeScript · Tailwind · CMS-ready</div>
    </div>
  );
}

export function MockPreview({ mock }: { mock: ProjectMock }) {
  switch (mock) {
    case "chat":
      return <ChatMock />;
    case "doc":
      return <DocMock />;
    case "list":
      return <ListMock />;
    case "chart":
      return <ChartMock />;
    case "terminal":
      return <TerminalMock />;
    case "grid":
      return <GridMock />;
  }
}
