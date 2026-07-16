const ROW1 = ["RAG", "LLMs", "Embeddings", "Monte Carlo", "FastAPI", "React", "Python", "Ollama", "OCR", "Power BI", "PostgreSQL", "AWS"];
const ROW2 = ["Operaciones", "Cocinas Industriales", "KPIs", "Pronóstico de demanda", "Automatización", "ERP", "Sitios corporativos", "Data Pipelines"];

function Item({ text, alt }: { text: string; alt?: boolean }) {
  return (
    <span className={alt ? "mq-item alt" : "mq-item"}>
      {text}
      <span className="mq-dot"> · </span>
    </span>
  );
}

export function Marquee() {
  return (
    <div
      className="marquee-mask"
      style={{
        position: "relative",
        padding: "26px 0",
        borderTop: "1px solid var(--border2)",
        borderBottom: "1px solid var(--border2)",
        overflow: "hidden",
        background: "var(--surface2)",
        WebkitMaskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
        maskImage: "linear-gradient(90deg,transparent,#000 12%,#000 88%,transparent)",
      }}
    >
      <div className="mq-track">
        {[...ROW1, ...ROW1].map((t, i) => (
          <Item key={i} text={t} />
        ))}
      </div>
      <div className="mq-track rev" style={{ marginTop: 14 }}>
        {[...ROW2, ...ROW2].map((t, i) => (
          <Item key={i} text={t} alt />
        ))}
      </div>
    </div>
  );
}
