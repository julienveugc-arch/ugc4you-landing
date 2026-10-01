"use client";

import { useEffect, useRef, useState } from "react";
import { eur } from "@/site.config";

/** Compteurs animés (1,8 s, ease-out cubique) au premier passage à l'écran. */
export function GainsStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [g, setG] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setG(1);
      return;
    }
    let raf = 0;
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      const t0 = performance.now();
      const tick = (t: number) => {
        const x = Math.min(1, (t - t0) / 1800);
        setG(1 - Math.pow(1 - x, 3));
        if (x < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((es) => es.some((e) => e.isIntersecting) && start(), { threshold: 0.4 });
    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.9 && r.bottom > 0) start();
    };
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const pill = "flex items-baseline gap-2 border-2 border-line bg-night px-4 py-2.5";
  const num = "font-display text-[20px] font-extrabold tracking-[-.04em] text-brand tabular-nums";

  return (
    <div ref={ref} id="gains-stats" className="flex flex-col items-center gap-2.5 text-center">
      <div className="font-display text-[clamp(44px,13vw,72px)] leading-[.9] font-extrabold tracking-[-.06em] text-cream tabular-nums [text-shadow:6px_6px_0_var(--color-brand)] lg:text-[clamp(72px,8vw,120px)] lg:[text-shadow:10px_10px_0_var(--color-brand)]">
        {eur(Math.round(g * 15240))} €
      </div>
      <p className="mt-1.5 mb-0 max-w-[520px] text-[16px] leading-[1.45] text-balance text-muted">
        encaissés en 12 mois, à côté de mon taf, avec un téléphone.
      </p>
      <div className="mt-[14px] flex flex-wrap justify-center gap-2.5">
        <div className={pill}>
          <span className={num}>{Math.round(g * 140)}</span>
          <span className="text-[14px] text-muted">commandes livrées</span>
        </div>
        <div className={pill}>
          <span className={num}>5,0 / 5</span>
          <span className="text-[14px] text-muted">note moyenne</span>
        </div>
        <div className={pill}>
          <span className={num}>{Math.round(g * 100)} €</span>
          <span className="text-[14px] text-muted">de matériel · zéro pub</span>
        </div>
      </div>
    </div>
  );
}
