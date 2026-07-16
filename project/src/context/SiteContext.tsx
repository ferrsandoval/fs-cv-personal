import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { L } from "../data/content";
import type { Lang, Localized, Style, Theme } from "../types";

const STYLES: Style[] = ["aurora", "editorial", "neon", "brutal"];

const STYLE_META: Record<Style, { es: string; en: string; icon: string }> = {
  aurora: { es: "Aurora", en: "Aurora", icon: "✦" },
  editorial: { es: "Editorial", en: "Editorial", icon: "❦" },
  neon: { es: "Neón", en: "Neon", icon: "⬡" },
  brutal: { es: "Brutal", en: "Brutal", icon: "▚" },
};

interface SiteContextValue {
  theme: Theme;
  lang: Lang;
  sty: Style;
  openIdx: number | null;
  toggleTheme: () => void;
  toggleLang: () => void;
  cycleStyle: () => void;
  openProject: (i: number) => void;
  closeModal: () => void;
  pick: (v: Localized) => string;
  t: (key: keyof typeof L) => string;
  styleLabel: string;
  styleIcon: string;
  langLabel: string;
  themeIcon: string;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [lang, setLang] = useState<Lang>("es");
  const [sty, setSty] = useState<Style>("aurora");
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleTheme = () => setTheme((s) => (s === "dark" ? "light" : "dark"));
  const toggleLang = () => setLang((s) => (s === "es" ? "en" : "es"));
  const cycleStyle = () => {
    const root = document.querySelector<HTMLElement>("[data-sty]");
    if (root) {
      root.classList.remove("sty-swap");
      void root.offsetWidth;
      root.classList.add("sty-swap");
      setTimeout(() => root.classList.remove("sty-swap"), 560);
    }
    setSty((s) => STYLES[(STYLES.indexOf(s) + 1) % STYLES.length]);
  };
  const openProject = (i: number) => {
    setOpenIdx(i);
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setOpenIdx(null);
    document.body.style.overflow = "";
  };

  const pick = (v: Localized) => (typeof v === "string" ? v : v[lang]);
  const t = (key: keyof typeof L) => pick(L[key]);

  const value = useMemo<SiteContextValue>(
    () => ({
      theme,
      lang,
      sty,
      openIdx,
      toggleTheme,
      toggleLang,
      cycleStyle,
      openProject,
      closeModal,
      pick,
      t,
      styleLabel: STYLE_META[sty][lang],
      styleIcon: STYLE_META[sty].icon,
      langLabel: lang === "es" ? "EN" : "ES",
      themeIcon: theme === "dark" ? "☀︎" : "☾",
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme, lang, sty, openIdx]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}
