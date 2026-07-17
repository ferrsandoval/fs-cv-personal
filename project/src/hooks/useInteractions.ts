import { useEffect } from "react";

/** Scroll-reveal with staggered siblings. */
export function useReveal(dep?: unknown) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => {
      const parent = el.parentElement;
      if (parent) {
        const sibs = Array.from(parent.children).filter((c) => c.classList.contains("reveal"));
        const i = sibs.indexOf(el);
        if (i > 0) el.style.transitionDelay = Math.min(i, 7) * 0.07 + "s";
      }
      io.observe(el);
    });
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);
}

/** Animated count-up for `.counter[data-target]`. */
export function useCounters(dep?: unknown) {
  useEffect(() => {
    const cs = document.querySelectorAll<HTMLElement>(".counter");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          io.unobserve(e.target);
          const el = e.target as HTMLElement;
          if (!el.dataset.target) return;
          const target = parseFloat(el.dataset.target) || 0;
          const suf = el.dataset.suffix || "";
          const dur = 1400;
          const t0 = performance.now();
          const step = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const ease = 1 - Math.pow(1 - p, 3);
            el.textContent = Math.round(target * ease).toLocaleString("en-US") + suf;
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    cs.forEach((c) => io.observe(c));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);
}

/** Magnetic hover translation for `.mag` buttons. */
export function useMagnetic(dep?: unknown) {
  useEffect(() => {
    const btns = Array.from(document.querySelectorAll<HTMLElement>(".mag"));
    const cleanups: Array<() => void> = [];
    btns.forEach((btn) => {
      btn.style.transition = "transform .28s cubic-bezier(.16,1,.3,1)";
      const move = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        btn.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${
          (e.clientY - r.top - r.height / 2) * 0.35
        }px) scale(1.04)`;
      };
      const leave = () => {
        btn.style.transform = "";
      };
      btn.addEventListener("mousemove", move);
      btn.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        btn.removeEventListener("mousemove", move);
        btn.removeEventListener("mouseleave", leave);
      });
    });
    return () => cleanups.forEach((c) => c());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);
}

/** 3D tilt + glow for `.projcard`. */
export function useTilt(dep?: unknown) {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".projcard"));
    const cleanups: Array<() => void> = [];
    cards.forEach((card) => {
      const cg = card.querySelector<HTMLElement>(".cardglow");
      let rect: DOMRect | null = null;
      const enter = () => {
        rect = card.getBoundingClientRect();
      };
      const move = (e: MouseEvent) => {
        const r = rect ?? card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width;
        const py = (e.clientY - r.top) / r.height;
        card.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 8}deg) rotateY(${
          (px - 0.5) * 8
        }deg) translateY(-4px)`;
        card.style.boxShadow = "0 26px 60px -24px rgba(var(--accent-rgb),.4)";
        card.style.borderColor = "rgba(var(--accent-rgb),.4)";
        if (cg) {
          cg.style.opacity = "1";
          cg.style.setProperty("--gx", `${e.clientX - r.left}px`);
          cg.style.setProperty("--gy", `${e.clientY - r.top}px`);
        }
      };
      const leave = () => {
        rect = null;
        card.style.transform = "";
        card.style.boxShadow = "";
        card.style.borderColor = "";
        if (cg) cg.style.opacity = "0";
      };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", enter);
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    });
    return () => cleanups.forEach((c) => c());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep]);
}

/** Scroll progress bar + parallax orbs. */
export function useScrollFx() {
  useEffect(() => {
    const orb1 = document.querySelector<HTMLElement>(".orb1");
    const orb2 = document.querySelector<HTMLElement>(".orb2");
    const bar = document.querySelector<HTMLElement>(".progressbar");
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (orb1) orb1.style.transform = `translateY(${y * 0.22}px)`;
      if (orb2) orb2.style.transform = `translateY(${y * -0.12}px)`;
      if (bar) {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        bar.style.width = (h > 0 ? Math.min(100, (y / h) * 100) : 0) + "%";
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
}

/** Hero mouse-follow glow gradient. */
export function useHeroGlow() {
  useEffect(() => {
    const glow = document.querySelector<HTMLElement>(".mglow");
    const header = document.querySelector<HTMLElement>("#top");
    if (!header || !glow) return;
    const move = (e: MouseEvent) => {
      const r = header.getBoundingClientRect();
      glow.style.setProperty("--mx", ((e.clientX - r.left) / r.width) * 100 + "%");
      glow.style.setProperty("--my", ((e.clientY - r.top) / r.height) * 100 + "%");
    };
    header.addEventListener("mousemove", move);
    return () => header.removeEventListener("mousemove", move);
  }, []);
}

/** Side-dot active-section tracking. */
export function useSectionDots() {
  useEffect(() => {
    const dots = Array.from(document.querySelectorAll<HTMLElement>(".sdot"));
    const secIds = ["top", "about", "experience", "projects", "skills", "contact"];
    const setActive = (id: string) => dots.forEach((d) => d.classList.toggle("active", d.dataset.sec === id));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -45% 0px" }
    );
    secIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    setActive("top");
    return () => io.disconnect();
  }, []);
}
