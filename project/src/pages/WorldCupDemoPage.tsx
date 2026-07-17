import { useState } from "react";
import { PROJ } from "../data/content";
import { DemoShell } from "./DemoShell";

interface Team {
  id: string;
  flag: string;
  name: string;
  rating: number;
}

const TEAMS: Team[] = [
  { id: "BR", flag: "🇧🇷", name: "Brasil", rating: 2010 },
  { id: "FR", flag: "🇫🇷", name: "Francia", rating: 1990 },
  { id: "AR", flag: "🇦🇷", name: "Argentina", rating: 1985 },
  { id: "ES", flag: "🇪🇸", name: "España", rating: 1970 },
  { id: "DE", flag: "🇩🇪", name: "Alemania", rating: 1955 },
  { id: "PT", flag: "🇵🇹", name: "Portugal", rating: 1945 },
  { id: "MX", flag: "🇲🇽", name: "México", rating: 1790 },
  { id: "US", flag: "🇺🇸", name: "Estados Unidos", rating: 1810 },
];

function simulate(a: Team, b: Team) {
  const diff = a.rating - b.rating;
  const expA = 1 / (1 + Math.pow(10, -diff / 400));
  const pDraw = Math.max(0.16, 0.27 - Math.abs(diff) / 2600);
  const remaining = 1 - pDraw;
  const pA = remaining * expA;
  const pB = remaining * (1 - expA);
  const expGoalsA = 1.2 + Math.max(0, diff) / 500;
  const expGoalsB = 1.2 + Math.max(0, -diff) / 500;
  return { pA, pDraw, pB, scoreline: `${Math.round(expGoalsA)}–${Math.round(expGoalsB)}` };
}

export function WorldCupDemoPage() {
  const project = PROJ.find((p) => p.slug === "worldcup")!;
  const [aId, setAId] = useState("BR");
  const [bId, setBId] = useState("AR");
  const [result, setResult] = useState<ReturnType<typeof simulate> | null>(null);

  const teamA = TEAMS.find((t) => t.id === aId)!;
  const teamB = TEAMS.find((t) => t.id === bId)!;

  function run() {
    if (aId === bId) return;
    setResult(simulate(teamA, teamB));
  }

  const bar = (label: string, pct: number, color: string) => (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", font: "600 11.5px var(--sf)", marginBottom: 6 }}>
        <span>{label}</span>
        <span style={{ fontFamily: "var(--mono)", color }}>{(pct * 100).toFixed(1)}%</span>
      </div>
      <div style={{ height: 12, borderRadius: 6, background: "var(--surface2)", overflow: "hidden" }}>
        <div className="mkbar" style={{ height: "100%", width: `${pct * 100}%`, borderRadius: 6, background: color }} />
      </div>
    </div>
  );

  return (
    <DemoShell project={project}>
      <h1 style={{ font: "700 clamp(24px,3.4vw,32px)/1.15 var(--sf)", letterSpacing: "-.8px", margin: 0 }}>Prediction Engine — demo interactiva</h1>
      <p style={{ font: "400 15px/1.6 var(--sf)", color: "var(--muted)", margin: "10px 0 0", maxWidth: 580 }}>
        Elige dos selecciones: el motor calcula probabilidades de verdad a partir de un rating tipo Elo por equipo (versión simplificada del modelo
        Poisson + Elo + Dixon-Coles de producción, aquí sin la simulación Monte Carlo completa por ser una demo cliente-side).
      </p>

      <div style={{ marginTop: 24, display: "flex", gap: 14, alignItems: "flex-end", flexWrap: "wrap" }}>
        <div>
          <div style={{ font: "600 10px var(--mono)", color: "var(--muted2)", letterSpacing: ".4px", textTransform: "uppercase", marginBottom: 7 }}>
            Equipo A
          </div>
          <select
            className="demo-input"
            value={aId}
            onChange={(e) => setAId(e.target.value)}
            style={{
              font: "500 13.5px var(--sf)",
              color: "var(--text)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "10px 12px",
            }}
          >
            {TEAMS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.flag} {t.name} ({t.rating})
              </option>
            ))}
          </select>
        </div>
        <span style={{ font: "700 14px var(--mono)", color: "var(--muted2)", paddingBottom: 10 }}>vs</span>
        <div>
          <div style={{ font: "600 10px var(--mono)", color: "var(--muted2)", letterSpacing: ".4px", textTransform: "uppercase", marginBottom: 7 }}>
            Equipo B
          </div>
          <select
            className="demo-input"
            value={bId}
            onChange={(e) => setBId(e.target.value)}
            style={{
              font: "500 13.5px var(--sf)",
              color: "var(--text)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              padding: "10px 12px",
            }}
          >
            {TEAMS.map((t) => (
              <option key={t.id} value={t.id}>
                {t.flag} {t.name} ({t.rating})
              </option>
            ))}
          </select>
        </div>
        <button
          className="demo-btn-primary"
          onClick={run}
          disabled={aId === bId}
          style={{
            font: "600 14px var(--sf)",
            padding: "11px 22px",
            borderRadius: 999,
            background: "var(--accent)",
            color: "#fff",
            border: "none",
            cursor: aId === bId ? "default" : "pointer",
            opacity: aId === bId ? 0.5 : 1,
          }}
        >
          Simular partido
        </button>
      </div>
      {aId === bId && <p style={{ font: "500 12.5px var(--sf)", color: "#f59e0b", marginTop: 10 }}>Elige dos equipos distintos.</p>}

      {result && (
        <div
          className="rise demo-card"
          style={{ marginTop: 26, padding: 22, borderRadius: 18, border: "1px solid var(--border)", background: "var(--surface2)" }}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 20 }}>
            <span style={{ font: "700 16px var(--sf)" }}>
              {teamA.flag} {teamA.name}
            </span>
            <span style={{ font: "700 20px var(--mono)", color: "var(--accent)" }}>{result.scoreline}</span>
            <span style={{ font: "700 16px var(--sf)" }}>
              {teamB.flag} {teamB.name}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {bar(`Gana ${teamA.name}`, result.pA, "var(--accent)")}
            {bar("Empate", result.pDraw, "var(--muted2)")}
            {bar(`Gana ${teamB.name}`, result.pB, "rgba(var(--accent-rgb),.55)")}
          </div>
          <div style={{ font: "500 10.5px var(--mono)", color: "var(--muted2)", marginTop: 16 }}>
            Modelo: Elo expected score · diferencia de rating {teamA.rating - teamB.rating >= 0 ? "+" : ""}
            {teamA.rating - teamB.rating}
          </div>
        </div>
      )}
    </DemoShell>
  );
}
