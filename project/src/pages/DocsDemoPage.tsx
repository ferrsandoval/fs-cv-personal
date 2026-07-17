import { useState } from "react";
import { PROJ } from "../data/content";
import { DemoShell } from "./DemoShell";

interface DocSample {
  id: string;
  file: string;
  folio: string;
  cliente: string;
  fecha: string;
  total: number;
  items: number;
}

const DOCS: DocSample[] = [
  { id: "inv1", file: "FACTURA_2451.PDF", folio: "A-2451", cliente: "AINSA S.A.", fecha: "2026-03-02", total: 128400, items: 3 },
  { id: "inv2", file: "FACTURA_2588.PDF", folio: "A-2588", cliente: "Grupo Ferretero MX", fecha: "2026-04-18", total: 64200, items: 5 },
  { id: "oc1", file: "ORDEN_COMPRA_118.PDF", folio: "OC-118", cliente: "Aceros del Norte", fecha: "2026-05-07", total: 212900, items: 8 },
];

function money(n: number) {
  return "$" + n.toLocaleString("en-US");
}

type Stage = "idle" | "processing" | "review" | "sent";

export function DocsDemoPage() {
  const project = PROJ.find((p) => p.slug === "docs")!;
  const [selected, setSelected] = useState<DocSample | null>(null);
  const [stage, setStage] = useState<Stage>("idle");
  const [fields, setFields] = useState({ folio: "", cliente: "", fecha: "", total: "" });

  function pick(doc: DocSample) {
    setSelected(doc);
    setStage("processing");
    setTimeout(() => {
      setFields({ folio: doc.folio, cliente: doc.cliente, fecha: doc.fecha, total: String(doc.total) });
      setStage("review");
    }, 1000);
  }

  function reset() {
    setSelected(null);
    setStage("idle");
  }

  const field = (label: string, key: keyof typeof fields) => (
    <div>
      <div style={{ font: "600 9.5px var(--mono)", color: "var(--muted2)", letterSpacing: ".4px", textTransform: "uppercase", marginBottom: 6 }}>
        {label}
      </div>
      <input
        className="demo-input"
        value={fields[key]}
        onChange={(e) => setFields((f) => ({ ...f, [key]: e.target.value }))}
        style={{
          width: "100%",
          font: "500 13.5px var(--mono)",
          color: "var(--text)",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 9,
          padding: "9px 11px",
          outline: "none",
        }}
      />
    </div>
  );

  return (
    <DemoShell project={project}>
      <h1 style={{ font: "700 clamp(24px,3.4vw,32px)/1.15 var(--sf)", letterSpacing: "-.8px", margin: 0 }}>Extracción de documentos — demo interactiva</h1>
      <p style={{ font: "400 15px/1.6 var(--sf)", color: "var(--muted)", margin: "10px 0 0", maxWidth: 580 }}>
        Elige un documento de muestra: el pipeline OCR + LLM lo "lee", extrae los campos clave y te deja revisarlos y corregirlos antes de mandarlos al ERP —
        el flujo humano-en-el-loop real de producción.
      </p>

      {stage === "idle" && (
        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {DOCS.map((d) => (
            <button
              key={d.id}
              className="demo-card"
              onClick={() => pick(d)}
              style={{
                textAlign: "left",
                padding: 16,
                borderRadius: 14,
                background: "var(--surface2)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                color: "var(--text)",
              }}
            >
              <div style={{ fontSize: 22 }}>📄</div>
              <div style={{ font: "600 12px var(--mono)", marginTop: 10, color: "var(--text)" }}>{d.file}</div>
              <div style={{ font: "400 11.5px var(--sf)", color: "var(--muted2)", marginTop: 4 }}>{d.cliente}</div>
            </button>
          ))}
        </div>
      )}

      {stage !== "idle" && selected && (
        <div style={{ marginTop: 24, display: "grid", gridTemplateColumns: "1fr auto 1.1fr", gap: 14, alignItems: "center" }}>
          <div
            className="demo-card"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 14,
              padding: 16,
              display: "flex",
              flexDirection: "column",
              gap: 9,
            }}
          >
            <div style={{ font: "600 10px var(--mono)", color: "var(--muted2)" }}>{selected.file}</div>
            <div className="skbar" style={{ height: 9, width: "80%" }} />
            <div className="skbar" style={{ height: 9, width: "60%" }} />
            <div
              style={{
                height: 9,
                width: "70%",
                borderRadius: 6,
                background: "var(--accent)",
                opacity: stage === "processing" ? 0.55 : 0.3,
              }}
            />
            <div className="skbar" style={{ height: 9, width: "50%" }} />
            <div className="skbar" style={{ height: 9, width: "66%" }} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: "var(--muted2)" }}>
            <span style={{ font: "600 9px var(--mono)" }}>OCR</span>
            <span style={{ fontSize: 15, color: "var(--accent)" }}>{stage === "processing" ? "⋯" : "→"}</span>
            <span style={{ font: "600 9px var(--mono)" }}>LLM</span>
          </div>

          {stage === "processing" && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)" }}>
              <span className="tdot" />
              <span className="tdot" style={{ animationDelay: ".2s" }} />
              <span className="tdot" style={{ animationDelay: ".4s" }} />
              <span style={{ font: "500 12.5px var(--sf)" }}>Extrayendo campos…</span>
            </div>
          )}

          {stage === "review" && (
            <div className="rise" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div style={{ font: "600 9px var(--mono)", color: "var(--accent)", letterSpacing: ".5px", textTransform: "uppercase" }}>
                Revisa y corrige antes de enviar
              </div>
              {field("Folio", "folio")}
              {field("Cliente", "cliente")}
              {field("Fecha", "fecha")}
              {field("Total ($)", "total")}
              <div style={{ display: "flex", gap: 10, marginTop: 4 }}>
                <button
                  className="demo-btn-primary"
                  onClick={() => setStage("sent")}
                  style={{
                    font: "600 13px var(--sf)",
                    padding: "10px 18px",
                    borderRadius: 999,
                    background: "var(--accent)",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Confirmar y enviar a ERP →
                </button>
                <button
                  onClick={reset}
                  style={{
                    font: "600 13px var(--sf)",
                    padding: "10px 18px",
                    borderRadius: 999,
                    background: "var(--surface)",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                    cursor: "pointer",
                  }}
                >
                  Otro documento
                </button>
              </div>
            </div>
          )}

          {stage === "sent" && (
            <div className="rise" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: 12,
                  background: "var(--accent-soft)",
                  border: "1px solid var(--border)",
                  font: "600 13.5px var(--sf)",
                  color: "var(--text)",
                }}
              >
                ✓ Enviado a ERP · folio {fields.folio} · {money(Number(fields.total) || 0)}
              </div>
              <button
                onClick={reset}
                style={{
                  alignSelf: "flex-start",
                  font: "600 13px var(--sf)",
                  padding: "10px 18px",
                  borderRadius: 999,
                  background: "var(--surface)",
                  color: "var(--text)",
                  border: "1px solid var(--border)",
                  cursor: "pointer",
                }}
              >
                Procesar otro documento
              </button>
            </div>
          )}
        </div>
      )}
    </DemoShell>
  );
}
