import { useState } from "react";
import { useSite } from "../context/SiteContext";

/** Placeholder photo drop-slot standing in for the design's image-slot component. */
export function PhotoSlot({ placeholder }: { placeholder?: string }) {
  const { lang } = useSite();
  const [src, setSrc] = useState<string | null>(null);
  const label = placeholder ?? (lang === "es" ? "Arrastra tu foto" : "Drag your photo");

  const onFile = (file?: File) => {
    if (!file || !file.type.startsWith("image/")) return;
    setSrc(URL.createObjectURL(file));
  };

  if (src) {
    return <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />;
  }

  return (
    <label
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        onFile(e.dataTransfer.files?.[0]);
      }}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        cursor: "pointer",
        color: "var(--muted2)",
        font: "500 13px var(--sf)",
        textAlign: "center",
        padding: 20,
      }}
    >
      <input type="file" accept="image/*" hidden onChange={(e) => onFile(e.target.files?.[0] ?? undefined)} />
      <span style={{ fontSize: 30, opacity: 0.5 }}>◆</span>
      {label}
    </label>
  );
}
