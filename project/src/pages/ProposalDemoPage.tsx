import { useState, type CSSProperties } from "react";
import { PROJ } from "../data/content";
import { DemoShell } from "./DemoShell";

interface Equipment {
  id: string;
  label: string;
  unit: number;
}

const CATALOG: Equipment[] = [
  { id: "bomba", label: "Bomba centrífuga industrial 15HP", unit: 460 },
  { id: "tanque", label: "Tanque INOX 304", unit: 1250 },
  { id: "mesa", label: "Mesa de trabajo industrial", unit: 380 },
  { id: "campana", label: "Campana extractora", unit: 890 },
];

interface LineItem {
  label: string;
  qty: string;
  price: number;
}

interface Proposal {
  number: string;
  seconds: number;
  items: LineItem[];
  total: number;
}

function money(n: number) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function generate(equipmentId: string, qty: number, deliveryDays: number, install: boolean, warranty: boolean): Proposal {
  const eq = CATALOG.find((c) => c.id === equipmentId)!;
  const subtotal = eq.unit * qty;
  const items: LineItem[] = [{ label: eq.label, qty: `×${qty}`, price: subtotal }];

  if (install) {
    const fee = Math.round(subtotal * 0.12);
    items.push({ label: "Instalación + puesta en marcha", qty: "1", price: fee });
  }
  if (warranty) {
    const fee = Math.round(subtotal * 0.05) + 400;
    items.push({ label: "Garantía extendida 24 meses", qty: "1", price: fee });
  }
  if (deliveryDays < 10) {
    const fee = Math.round(subtotal * 0.06);
    items.push({ label: "Entrega urgente (< 10 días)", qty: "1", price: fee });
  }

  const total = items.reduce((s, i) => s + i.price, 0);
  return { number: "#" + Math.floor(1000 + Math.random() * 9000), seconds: 12 + Math.floor(Math.random() * 40), items, total };
}

export function ProposalDemoPage() {
  const project = PROJ.find((p) => p.slug === "proposals")!;
  const [equipmentId, setEquipmentId] = useState(CATALOG[0].id);
  const [qty, setQty] = useState(10);
  const [deliveryDays, setDeliveryDays] = useState(15);
  const [install, setInstall] = useState(true);
  const [warranty, setWarranty] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [proposal, setProposal] = useState<Proposal | null>(null);

  function handleGenerate() {
    setGenerating(true);
    setProposal(null);
    setTimeout(() => {
      setProposal(generate(equipmentId, Math.max(1, qty), Math.max(1, deliveryDays), install, warranty));
      setGenerating(false);
    }, 900);
  }

  const field: CSSProperties = {
    width: "100%",
    font: "400 13.5px var(--sf)",
    color: "var(--text)",
    background: "var(--surface)",
    border: "1px solid var(--border)",
    borderRadius: 10,
    padding: "10px 12px",
    outline: "none",
  };
  const label: CSSProperties = {
    display: "block",
    font: "600 10.5px var(--mono)",
    color: "var(--muted2)",
    letterSpacing: ".4px",
    textTransform: "uppercase",
    marginBottom: 7,
  };

  return (
    <DemoShell project={project}>
      <h1 style={{ font: "700 clamp(24px,3.4vw,32px)/1.15 var(--sf)", letterSpacing: "-.8px", margin: 0 }}>Generador de propuestas — demo interactiva</h1>
      <p style={{ font: "400 15px/1.6 var(--sf)", color: "var(--muted)", margin: "10px 0 0", maxWidth: 560 }}>
        Define el requerimiento y genera una cotización real: el motor calcula precios, instalación, garantía y recargo por entrega urgente a partir de un
        catálogo y reglas de negocio, igual que en producción.
      </p>

      <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 20, alignItems: "start" }}>
        <div
          className="demo-card"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            padding: 20,
            borderRadius: 18,
            border: "1px solid var(--border)",
            background: "var(--surface2)",
          }}
        >
          <div>
            <label style={label}>Equipo</label>
            <select className="demo-input" value={equipmentId} onChange={(e) => setEquipmentId(e.target.value)} style={field}>
              {CATALOG.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.label} — {money(c.unit)}/u
                </option>
              ))}
            </select>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <div>
              <label style={label}>Cantidad</label>
              <input className="demo-input" type="number" min={1} value={qty} onChange={(e) => setQty(Number(e.target.value))} style={field} />
            </div>
            <div>
              <label style={label}>Entrega (días)</label>
              <input
                className="demo-input"
                type="number"
                min={1}
                value={deliveryDays}
                onChange={(e) => setDeliveryDays(Number(e.target.value))}
                style={field}
              />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 9, font: "500 13px var(--sf)", color: "var(--text)", cursor: "pointer" }}>
              <input type="checkbox" checked={install} onChange={(e) => setInstall(e.target.checked)} />
              Incluir instalación (+12%)
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 9, font: "500 13px var(--sf)", color: "var(--text)", cursor: "pointer" }}>
              <input type="checkbox" checked={warranty} onChange={(e) => setWarranty(e.target.checked)} />
              Garantía extendida 24m (+5% + $400)
            </label>
          </div>
          <button
            className="demo-btn-primary"
            onClick={handleGenerate}
            disabled={generating}
            style={{
              marginTop: 4,
              font: "600 14px var(--sf)",
              padding: "13px 20px",
              borderRadius: 999,
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              cursor: generating ? "default" : "pointer",
              opacity: generating ? 0.7 : 1,
            }}
          >
            {generating ? "Generando…" : proposal ? "Generar de nuevo" : "Generar propuesta"}
          </button>
        </div>

        <div
          className="demo-card"
          style={{
            borderRadius: 18,
            border: "1px solid var(--border)",
            background: "var(--surface2)",
            padding: 20,
            minHeight: 280,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {generating && (
            <div style={{ margin: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: 10, color: "var(--muted)" }}>
              <div style={{ display: "flex", gap: 5 }}>
                <span className="tdot" />
                <span className="tdot" style={{ animationDelay: ".2s" }} />
                <span className="tdot" style={{ animationDelay: ".4s" }} />
              </div>
              <span style={{ font: "500 12.5px var(--sf)" }}>Calculando cotización…</span>
            </div>
          )}

          {!generating && !proposal && (
            <div style={{ margin: "auto", textAlign: "center", color: "var(--muted2)", font: "400 13.5px/1.6 var(--sf)" }}>
              Completa el requerimiento y presiona "Generar propuesta".
            </div>
          )}

          {!generating && proposal && (
            <div className="rise" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ font: "700 13px var(--sf)" }}>PROPUESTA {proposal.number}</div>
                <span
                  style={{
                    font: "600 10px var(--mono)",
                    color: "var(--accent)",
                    background: "var(--accent-soft)",
                    padding: "4px 9px",
                    borderRadius: 6,
                  }}
                >
                  ⚡ {proposal.seconds}s
                </span>
              </div>
              <div style={{ marginTop: 14, display: "flex", flexDirection: "column" }}>
                {proposal.items.map((it, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 8,
                      font: "500 12.5px var(--sf)",
                      padding: "9px 0",
                      borderBottom: "1px solid var(--border2)",
                    }}
                  >
                    <span style={{ color: "var(--text)" }}>{it.label}</span>
                    <span style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: "var(--muted2)", fontFamily: "var(--mono)" }}>{it.qty}</span>
                      <span style={{ color: "var(--accent)", fontFamily: "var(--mono)", fontWeight: 600, minWidth: 70, textAlign: "right" }}>
                        {money(it.price)}
                      </span>
                    </span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: "auto", display: "flex", justifyContent: "space-between", paddingTop: 14, borderTop: "1px solid var(--border)" }}>
                <span style={{ font: "600 13px var(--sf)", color: "var(--muted2)" }}>Total</span>
                <span style={{ font: "700 17px var(--mono)", color: "var(--accent)" }}>{money(proposal.total)}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </DemoShell>
  );
}
