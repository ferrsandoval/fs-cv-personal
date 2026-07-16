export type Lang = "es" | "en";
export type Theme = "dark" | "light";
export type Style = "aurora" | "editorial" | "neon" | "brutal";
export type ProjectMock = "chat" | "doc" | "list" | "chart" | "terminal" | "grid";

export type Localized = string | { es: string; en: string };

export interface Job {
  period: string;
  company: string;
  place: string;
  current?: boolean;
  role: Localized;
  desc: Localized;
}

export interface Project {
  icon: string;
  mock: ProjectMock;
  name: Localized;
  desc: Localized;
  longDesc: Localized;
  tags: string[];
}

export interface SkillCategory {
  icon: string;
  name: Localized;
  items: Localized[];
}

export interface Stat {
  value?: number;
  suffix?: string;
  text?: Localized;
  label: Localized;
}
