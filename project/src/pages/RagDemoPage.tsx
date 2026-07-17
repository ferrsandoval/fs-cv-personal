import { useEffect, useRef, useState } from "react";
import { PROJ } from "../data/content";
import { DemoShell } from "./DemoShell";

interface QAEntry {
  keywords: string[];
  answer: string;
  cites: string[];
}

const QA: QAEntry[] = [
  {
    keywords: ["garantia", "garantía", "warranty", "defecto"],
    answer:
      "La garantía estándar es de 12 meses sobre defectos de fabricación, con cobertura de refacciones. Equipos con mantenimiento certificado pueden extenderla a 24 meses.",
    cites: ["manual_garantias.pdf · p.4", "políticas.pdf · p.11"],
  },
  {
    keywords: ["entrega", "tiempo", "envio", "envío", "cuando", "cuándo", "dias", "días"],
    answer:
      "El tiempo de entrega estándar es de 10 a 15 días hábiles para equipo en stock, y de 25 a 30 días para pedidos sobre especificación.",
    cites: ["politica_logistica.pdf · p.2"],
  },
  {
    keywords: ["devolucion", "devolución", "cambio", "regresar", "reembolso"],
    answer: "Aceptamos devoluciones dentro de los primeros 15 días si el equipo no ha sido instalado, con un cargo de reposición del 10%.",
    cites: ["políticas.pdf · p.7"],
  },
  {
    keywords: ["pago", "precio", "cotizacion", "cotización", "factura", "credito", "crédito"],
    answer:
      "Manejamos pagos a 30/60 días para clientes con crédito aprobado, o anticipo del 50% para pedidos nuevos. Para una cotización exacta usa el generador de propuestas.",
    cites: ["condiciones_comerciales.pdf · p.1"],
  },
  {
    keywords: ["instalacion", "instalación", "montaje", "puesta"],
    answer: "La instalación puede incluirse como servicio adicional; nuestro equipo técnico certificado la agenda dentro de los 5 días posteriores a la entrega.",
    cites: ["manual_garantias.pdf · p.9"],
  },
];

const FALLBACK = "No encontré eso exactamente en la documentación indexada de esta demo. Prueba con: garantía, tiempo de entrega, devoluciones, pagos o instalación.";

const SUGGESTIONS = ["¿Cuál es la garantía?", "¿Tiempo de entrega?", "¿Puedo hacer devoluciones?", "¿Cómo funciona el pago?"];

function answerFor(question: string): { text: string; cites: string[] } {
  const q = question.toLowerCase();
  let best: QAEntry | null = null;
  let bestScore = 0;
  for (const entry of QA) {
    const score = entry.keywords.filter((k) => q.includes(k)).length;
    if (score > bestScore) {
      bestScore = score;
      best = entry;
    }
  }
  return best ? { text: best.answer, cites: best.cites } : { text: FALLBACK, cites: [] };
}

interface Message {
  role: "user" | "bot";
  text: string;
  cites?: string[];
}

export function RagDemoPage() {
  const project = PROJ.find((p) => p.slug === "rag")!;
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: "Hola, soy el asistente RAG de demo. Pregúntame sobre garantías, tiempos de entrega, devoluciones, pagos o instalación — respondo con lo que tengo indexado.",
    },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, thinking]);

  function send(text: string) {
    const q = text.trim();
    if (!q || thinking) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setInput("");
    setThinking(true);
    const delay = 550 + Math.random() * 500;
    setTimeout(() => {
      const { text: answer, cites } = answerFor(q);
      setMessages((m) => [...m, { role: "bot", text: answer, cites }]);
      setThinking(false);
    }, delay);
  }

  return (
    <DemoShell project={project}>
      <h1 style={{ font: "700 clamp(24px,3.4vw,32px)/1.15 var(--sf)", letterSpacing: "-.8px", margin: 0 }}>Asistente RAG — demo interactiva</h1>
      <p style={{ font: "400 15px/1.6 var(--sf)", color: "var(--muted)", margin: "10px 0 0", maxWidth: 560 }}>
        Escribe una pregunta real. El motor busca en un set de documentos de demo (garantías, logística, políticas) y responde citando la fuente — igual que
        en producción, solo que aquí la base de conocimiento es más chica.
      </p>

      <div
        className="demo-card"
        style={{
          marginTop: 24,
          borderRadius: 20,
          border: "1px solid var(--border)",
          background: "var(--surface2)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: 460,
        }}
      >
        <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: 18, display: "flex", flexDirection: "column", gap: 12 }}>
          {messages.map((m, i) => (
            <div
              key={i}
              style={{
                alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                maxWidth: "78%",
                background: m.role === "user" ? "var(--accent)" : "var(--surface)",
                color: m.role === "user" ? "#fff" : "var(--text)",
                border: m.role === "user" ? "none" : "1px solid var(--border)",
                padding: "11px 15px",
                borderRadius: m.role === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                font: "400 13.5px/1.55 var(--sf)",
              }}
            >
              {m.text}
              {!!m.cites?.length && (
                <div style={{ marginTop: 9, display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {m.cites.map((c) => (
                    <span
                      key={c}
                      className="demo-chip"
                      style={{
                        font: "600 9.5px var(--mono)",
                        color: "var(--accent)",
                        padding: "4px 8px",
                        borderRadius: 6,
                        background: "var(--accent-soft)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      📄 {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
          {thinking && (
            <div
              style={{
                alignSelf: "flex-start",
                display: "flex",
                gap: 5,
                padding: "10px 14px",
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 16,
              }}
            >
              <span className="tdot" />
              <span className="tdot" style={{ animationDelay: ".2s" }} />
              <span className="tdot" style={{ animationDelay: ".4s" }} />
            </div>
          )}
        </div>

        <div style={{ display: "flex", gap: 7, padding: 12, flexWrap: "wrap", borderTop: "1px solid var(--border2)" }}>
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              className="demo-chip"
              onClick={() => send(s)}
              disabled={thinking}
              style={{
                font: "500 11.5px var(--sf)",
                color: "var(--muted)",
                padding: "7px 12px",
                borderRadius: 999,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                cursor: thinking ? "default" : "pointer",
                opacity: thinking ? 0.5 : 1,
              }}
            >
              {s}
            </button>
          ))}
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          style={{ display: "flex", gap: 10, padding: 14, borderTop: "1px solid var(--border2)" }}
        >
          <input
            className="demo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe tu pregunta…"
            style={{
              flex: 1,
              font: "400 14px var(--sf)",
              color: "var(--text)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 999,
              padding: "12px 18px",
              outline: "none",
            }}
          />
          <button
            type="submit"
            className="demo-btn-primary"
            disabled={thinking || !input.trim()}
            style={{
              font: "600 14px var(--sf)",
              padding: "12px 22px",
              borderRadius: 999,
              background: "var(--accent)",
              color: "#fff",
              border: "none",
              cursor: thinking || !input.trim() ? "default" : "pointer",
              opacity: thinking || !input.trim() ? 0.6 : 1,
              flex: "none",
            }}
          >
            Enviar
          </button>
        </form>
      </div>
    </DemoShell>
  );
}
