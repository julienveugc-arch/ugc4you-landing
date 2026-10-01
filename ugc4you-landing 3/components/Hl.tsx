"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Surlignage violet animé derrière les mots-clés d'un titre.
 * - `auto` : joue au montage (hero), avec un délai.
 * - sinon : joue quand le mot entre à l'écran (IntersectionObserver, seuil 0,4),
 *   avec des filets de sécurité (scroll + minuteur) pour qu'aucun texte ne reste caché.
 */
export function Hl({
  children,
  bg,
  auto = false,
  delay = 0,
}: {
  children: ReactNode;
  bg?: string;
  auto?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [state, setState] = useState<"idle" | "play">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const play = () => setState("play");
    if (auto || !("IntersectionObserver" in window)) return play();

    const inView = (k = 1) => {
      // Visible ou déjà dépassé (saut d'ancre) : on joue pour ne jamais laisser de texte caché.
      return el.getBoundingClientRect().top < window.innerHeight * k;
    };
    const io = new IntersectionObserver(
      (es) => {
        if (es.some((e) => e.isIntersecting)) cleanup(true);
      },
      { threshold: 0.4 },
    );
    const onScroll = () => inView() && cleanup(true);
    const timer = window.setTimeout(() => inView(1.5) && cleanup(true), 2500);
    function cleanup(fire: boolean) {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
      if (fire) play();
    }
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => cleanup(false);
  }, [auto]);

  const d1 = auto ? delay + 0.15 : 0.1;
  const d2 = auto ? delay + 0.45 : 0.4;
  return (
    <span
      ref={ref}
      className="hl"
      data-state={state}
      style={
        {
          "--hl-bg": bg,
          "--hl-d1": `${d1}s`,
          "--hl-d2": `${d2}s`,
        } as React.CSSProperties
      }
    >
      {children}
    </span>
  );
}
