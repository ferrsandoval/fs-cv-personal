import { useMemo, useState } from "react";
import { PROJ } from "../data/content";
import { DemoShell } from "./DemoShell";

interface Item {
  name: string;
  category: string;
  specs: string[];
}

const CATALOG: Item[] = [
  { name: "Tanque INOX 304 · 500L", category: "Almacenamiento", specs: ["inox", "304", "500l", "sanitario"] },
  { name: "Tanque INOX 316 · 1000L", category: "Almacenamiento", specs: ["inox", "316", "1000l", "sanitario"] },
  { name: "Mesa de trabajo industrial", category: "Mobiliario", specs: ["acero", "mesa", "trabajo"] },
  { name: "Campana extractora 2m", category: "Ventilación", specs: ["ventilacion", "extraccion", "cocina"] },
  { name: "Bomba centrífuga 15HP", category: "Bombeo", specs: ["bomba", "centrifuga", "15hp", "industrial"] },
  { name: "Bomba centrífuga 30HP", category: "Bombeo", specs: ["bomba", "centrifuga", "30hp", "industrial"] },
  { name: "Estante metálico reforzado", category: "Almacenamiento", specs: ["estante", "metal", "carga"] },
  { name: "Freidora industrial doble", category: "Cocina", specs: ["freidora", "cocina", "gas"] },
  { name: "Rack de enfriamiento", category: "Refrigeración", specs: ["rack", "frio", "refrigeracion"] },
  { name: "Panel de control eléctrico", category: "Eléctrico", specs: ["panel", "electrico", "control"] },
];

const CATEGORIES = Array.from(new Set(CATALOG.map((c) => c.category)));

export function AinsaDemoPage() {
  const project = PROJ.find((p) => p.slug === "ainsa")!;
  const [query, setQuery] = useState("");
  const [activeCats, setActiveCats] = useState<string[]>([]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CATALOG.filter((item) => {
      const matchesCat = activeCats.length === 0 || activeCats.includes(item.category);
      if (!matchesCat) return false;
      if (!q) return true;
      const haystack = (item.name + " " + item.category + " " + item.specs.join(" ")).toLowerCase();
      return haystack.includes(q);
    });
  }, [query, activeCats]);

  function toggleCat(cat: string) {
    setActiveCats((cs) => (cs.includes(cat) ? cs.filter((c) => c !== cat) : [...cs, cat]));
  }

  return (
    <DemoShell project={project}>
      <h1 style={{ font: "700 clamp(24px,3.4vw,32px)/1.15 var(--sf)", letterSpacing: "-.8px", margin: 0 }}>Catálogo AINSA — demo interactiva</h1>
      <p style={{ font: "400 15px/1.6 var(--sf)", color: "var(--muted)", margin: "10px 0 0", maxWidth: 580 }}>
        Búsqueda real por nombre, categoría o especificación técnica sobre un catálogo de muestra — filtra igual que la búsqueda avanzada de producción.
      </p>

      <div style={{ marginTop: 24 }}>
        <input
          className="demo-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔎 Buscar por especificación técnica… (ej. inox, bomba, 15hp)"
          style={{
            width: "100%",
            font: "500 14px var(--sf)",
            color: "var(--text)",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 12,
            padding: "13px 16px",
            outline: "none",
          }}
        />
        <div style={{ display: "flex", gap: 7, flexWrap: "wrap", marginTop: 12 }}>
          {CATEGORIES.map((cat) => {
            const active = activeCats.includes(cat);
            return (
              <button
                key={cat}
                className="demo-chip"
                onClick={() => toggleCat(cat)}
                style={{
                  font: "600 11px var(--mono)",
                  padding: "7px 13px",
                  borderRadius: 999,
                  cursor: "pointer",
                  background: active ? "var(--accent)" : "var(--surface2)",
                  color: active ? "#fff" : "var(--muted)",
                  border: active ? "1px solid var(--accent)" : "1px solid var(--border2)",
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
        <div style={{ font: "600 11px var(--mono)", color: "var(--muted2)", marginTop: 14 }}>{results.length} resultados</div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 10 }}>
          {results.map((item) => (
            <div key={item.name} className="demo-card" style={{ borderRadius: 14, border: "1px solid var(--border)", background: "var(--surface2)", padding: 14 }}>
              <div
                style={{
                  font: "600 9px var(--mono)",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  letterSpacing: ".3px",
                }}
              >
                {item.category}
              </div>
              <div style={{ font: "600 13px var(--sf)", marginTop: 5 }}>{item.name}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 9 }}>
                {item.specs.map((s) => (
                  <span
                    key={s}
                    style={{
                      font: "500 9.5px var(--mono)",
                      color: "var(--muted2)",
                      padding: "3px 7px",
                      borderRadius: 6,
                      background: "var(--surface)",
                      border: "1px solid var(--border2)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
          {results.length === 0 && (
            <div style={{ gridColumn: "1/-1", padding: "30px 0", textAlign: "center", color: "var(--muted2)", font: "400 13.5px var(--sf)" }}>
              Sin resultados para esta búsqueda.
            </div>
          )}
        </div>
      </div>
    </DemoShell>
  );
}
