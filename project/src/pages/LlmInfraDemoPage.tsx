import { useEffect, useRef, useState } from "react";
import { PROJ } from "../data/content";
import { DemoShell } from "./DemoShell";

interface Entry {
  keywords: string[];
  answer: string;
}

const RESPONSES: Entry[] = [
  {
    keywords: ["inventario", "sku", "stock"],
    answer: "El inventario cerró en 1,240 SKUs, con rotación de 4.2x y 18 productos en punto de reorden.",
  },
  {
    keywords: ["venta", "ventas", "ingreso", "ingresos"],
    answer: "Ventas del mes: $1.84M MXN, +12% vs. mes anterior. Top categoría: bombas industriales (31% del total).",
  },
  {
    keywords: ["rotacion", "rotación"],
    answer: "Rotación promedio de inventario: 4.2x anual. Por debajo del objetivo (5.0x) en la categoría de tanques INOX.",
  },
  {
    keywords: ["reorden", "reabasto", "comprar"],
    answer: "18 productos están en punto de reorden. Prioridad alta: bomba centrífuga 15HP (quedan 3 unidades, demanda semanal ~5).",
  },
];

const FALLBACK = "No tengo ese dato indexado en esta demo local. Prueba con: inventario, ventas, rotación o punto de reorden.";

function answerFor(q: string) {
  const s = q.toLowerCase();
  for (const r of RESPONSES) {
    if (r.keywords.some((k) => s.includes(k))) return r.answer;
  }
  return FALLBACK;
}

interface Line {
  kind: "prompt" | "answer";
  text: string;
}

export function LlmInfraDemoPage() {
  const project = PROJ.find((p) => p.slug === "llm-infra")!;
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [lines, busy]);

  function run(q: string) {
    const query = q.trim();
    if (!query || busy) return;
    setLines((l) => [...l, { kind: "prompt", text: query }]);
    setInput("");
    setBusy(true);
    setTimeout(() => {
      setLines((l) => [...l, { kind: "answer", text: answerFor(query) }]);
      setBusy(false);
    }, 500 + Math.random() * 500);
  }

  return (
    <DemoShell project={project}>
      <h1 style={{ font: "700 clamp(24px,3.4vw,32px)/1.15 var(--sf)", letterSpacing: "-.8px", margin: 0 }}>LLM privado — demo interactiva</h1>
      <p style={{ font: "400 15px/1.6 var(--sf)", color: "var(--muted)", margin: "10px 0 0", maxWidth: 580 }}>
        Pregúntale al modelo local sobre inventario, ventas, rotación o reorden — corre 100% en el navegador para esta demo, simulando la latencia real de
        Qwen2.5 32B sobre Ollama en el Mac Mini M4.
      </p>

      <div
        className="demo-card"
        style={{
          marginTop: 24,
          borderRadius: 18,
          overflow: "hidden",
          border: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "10px 14px",
            background: "#080b12",
            borderBottom: "1px solid rgba(255,255,255,.08)",
            fontSize: 10,
            color: "#5b6b85",
            font: "10px var(--mono)",
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#22c55e" }} />
          qwen2.5:32b cargado · 19.2 GB VRAM · 100% local
        </div>
        <div ref={scrollRef} style={{ height: 300, overflowY: "auto", padding: "14px 18px", background: "#080b12", font: "12px/1.75 var(--mono)" }}>
          {lines.length === 0 && !busy && <div style={{ color: "#5b6b85" }}>➜ ~ ollama run qwen2.5:32b</div>}
          {lines.map((l, i) =>
            l.kind === "prompt" ? (
              <div key={i} style={{ color: "#7fb2ff", marginTop: i === 0 ? 0 : 8 }}>
                &gt;&gt;&gt; {l.text}
              </div>
            ) : (
              <div key={i} style={{ color: "#c9d4e5", marginTop: 4 }}>
                {l.text}
              </div>
            )
          )}
          {busy && (
            <div style={{ color: "#c9d4e5", marginTop: 8, display: "flex", gap: 5, alignItems: "center" }}>
              <span className="tdot" style={{ background: "#7fb2ff" }} />
              <span className="tdot" style={{ background: "#7fb2ff", animationDelay: ".2s" }} />
              <span className="tdot" style={{ background: "#7fb2ff", animationDelay: ".4s" }} />
            </div>
          )}
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            run(input);
          }}
          style={{ display: "flex", gap: 8, padding: 12, background: "#080b12", borderTop: "1px solid rgba(255,255,255,.08)" }}
        >
          <span style={{ color: "#22c55e", font: "13px var(--mono)", alignSelf: "center" }}>➜</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="pregunta sobre inventario, ventas, rotación…"
            style={{
              flex: 1,
              font: "13px var(--mono)",
              color: "#eafcff",
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          />
          <button
            type="submit"
            className="demo-btn-primary"
            disabled={busy || !input.trim()}
            style={{
              font: "600 12px var(--sf)",
              padding: "8px 16px",
              borderRadius: 8,
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              cursor: busy || !input.trim() ? "default" : "pointer",
              opacity: busy || !input.trim() ? 0.5 : 1,
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </DemoShell>
  );
}
