import { useState } from "react";
import { PROJ } from "../data/content";
import { DemoShell } from "./DemoShell";

interface Lead {
  id: number;
  name: string;
  score: number;
}

const SIGNALS = [
  { key: "email", label: "Respondió el email de seguimiento", points: 20 },
  { key: "visits", label: "Visitó el sitio 3+ veces esta semana", points: 15 },
  { key: "quote", label: "Solicitó cotización formal", points: 30 },
  { key: "size", label: "Empresa con 50+ empleados", points: 15 },
] as const;

type SignalKey = (typeof SIGNALS)[number]["key"];

function tierOf(score: number) {
  if (score >= 80) return { label: "Alto", color: "#22c55e" };
  if (score >= 50) return { label: "Medio", color: "#f59e0b" };
  return { label: "Bajo", color: "var(--muted2)" };
}

const INITIAL: Lead[] = [
  { id: 1, name: "Grupo Ferretero MX", score: 92 },
  { id: 2, name: "Aceros del Norte", score: 86 },
  { id: 3, name: "Cocinas Industriales SA", score: 61 },
  { id: 4, name: "Distribuidora Sur", score: 34 },
];

export function LeadsDemoPage() {
  const project = PROJ.find((p) => p.slug === "leads")!;
  const [leads, setLeads] = useState<Lead[]>(INITIAL);
  const [name, setName] = useState("");
  const [signals, setSignals] = useState<Record<SignalKey, boolean>>({ email: false, visits: false, quote: false, size: false });
  const [lastAddedId, setLastAddedId] = useState<number | null>(null);

  const score = Math.min(100, 20 + SIGNALS.reduce((s, sig) => s + (signals[sig.key] ? sig.points : 0), 0));

  function addLead() {
    if (!name.trim()) return;
    const id = Date.now();
    setLeads((ls) => [...ls, { id, name: name.trim(), score }].sort((a, b) => b.score - a.score));
    setLastAddedId(id);
    setName("");
    setSignals({ email: false, visits: false, quote: false, size: false });
  }

  return (
    <DemoShell project={project}>
      <h1 style={{ font: "700 clamp(24px,3.4vw,32px)/1.15 var(--sf)", letterSpacing: "-.8px", margin: 0 }}>Clasificación de leads — demo interactiva</h1>
      <p style={{ font: "400 15px/1.6 var(--sf)", color: "var(--muted)", margin: "10px 0 0", maxWidth: 580 }}>
        Agrega un prospecto y marca sus señales de intención de compra — el motor calcula el score en vivo con las mismas reglas de negocio que prioriza al
        equipo comercial, y lo inserta en el ranking en el lugar que le corresponde.
      </p>

      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 20, alignItems: "start" }}>
        <div
          className="demo-card"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            padding: 20,
            borderRadius: 18,
            border: "1px solid var(--border)",
            background: "var(--surface2)",
          }}
        >
          <div>
            <div style={{ font: "600 10.5px var(--mono)", color: "var(--muted2)", letterSpacing: ".4px", textTransform: "uppercase", marginBottom: 7 }}>
              Nombre del prospecto
            </div>
            <input
              className="demo-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej. Refrigeración del Pacífico"
              style={{
                width: "100%",
                font: "400 13.5px var(--sf)",
                color: "var(--text)",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "10px 12px",
                outline: "none",
              }}
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 9 }}>
            {SIGNALS.map((sig) => (
              <label
                key={sig.key}
                style={{ display: "flex", alignItems: "center", gap: 9, font: "500 12.5px var(--sf)", color: "var(--text)", cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  checked={signals[sig.key]}
                  onChange={(e) => setSignals((s) => ({ ...s, [sig.key]: e.target.checked }))}
                />
                {sig.label} <span style={{ color: "var(--muted2)", fontFamily: "var(--mono)", fontSize: 11 }}>+{sig.points}</span>
              </label>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 6, borderTop: "1px solid var(--border2)" }}>
            <span style={{ font: "600 11.5px var(--sf)", color: "var(--muted)" }}>Score en vivo</span>
            <span style={{ font: "700 16px var(--mono)", color: tierOf(score).color }}>
              {score} · {tierOf(score).label}
            </span>
          </div>
          <button
            className="demo-btn-primary"
            onClick={addLead}
            disabled={!name.trim()}
            style={{
              font: "600 14px var(--sf)",
              padding: "12px 20px",
              borderRadius: 999,
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              cursor: name.trim() ? "pointer" : "default",
              opacity: name.trim() ? 1 : 0.5,
            }}
          >
            Agregar al ranking
          </button>
        </div>

        <div
          className="demo-card"
          style={{
            padding: 20,
            borderRadius: 18,
            border: "1px solid var(--border)",
            background: "var(--surface2)",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          <div style={{ font: "600 9px var(--mono)", color: "var(--muted2)", letterSpacing: ".6px", textTransform: "uppercase", marginBottom: 2 }}>
            Prospectos priorizados ({leads.length})
          </div>
          {leads.map((lead, i) => {
            const tier = tierOf(lead.score);
            return (
              <div
                key={lead.id}
                className={lead.id === lastAddedId ? "rise" : undefined}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 11,
                  padding: "9px 12px",
                  borderRadius: 11,
                  background: "var(--surface)",
                  border: lead.id === lastAddedId ? "1px solid var(--accent)" : "1px solid var(--border)",
                }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: "var(--accent-soft)",
                    border: "1px solid var(--border)",
                    flex: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    font: "700 9.5px var(--mono)",
                    color: "var(--accent)",
                  }}
                >
                  {i + 1}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ font: "600 12px var(--sf)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{lead.name}</div>
                  <div style={{ height: 5, width: "100%", borderRadius: 999, background: "var(--surface2)", marginTop: 6, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: `${lead.score}%`, borderRadius: 999, background: tier.color }} />
                  </div>
                </div>
                <span style={{ font: "700 11px var(--mono)", color: tier.color, flex: "none" }}>
                  {lead.score} · {tier.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </DemoShell>
  );
}
