"use client";

import { useRef, useState } from "react";
import programme from "@/data/programme-data.json";
import { Hl } from "./Hl";
import { Badge, H2 } from "./ui";

type Week = (typeof programme)[number];
const weeks: Week[] = programme;
const totalMods = weeks.reduce((a, w) => a + w.mods.length, 0);

/** Lecteur de programme : onglets semaine, liste des modules, détail du module ouvert. */
export function Programme() {
  const [wi, setWi] = useState(0);
  const [om, setOm] = useState(0);
  const detailRef = useRef<HTMLDivElement>(null);

  const cur = weeks[wi];
  const cm = cur.mods[om] ?? cur.mods[0];
  const lastInWeek = om >= cur.mods.length - 1;
  const lastWeek = wi >= weeks.length - 1;
  const nextLabel = lastInWeek ? (lastWeek ? "Voir le prix" : "Semaine suivante") : "Module suivant";

  // Sur mobile le détail est sous la liste : on le ramène à l'écran après un choix.
  const revealDetail = () => {
    if (window.innerWidth >= 1024) return;
    requestAnimationFrame(() => detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
  };

  const pickWeek = (i: number) => {
    setWi(i);
    setOm(0);
  };
  const next = () => {
    if (!lastInWeek) setOm(om + 1);
    else if (!lastWeek) pickWeek(wi + 1);
    else {
      const p = document.getElementById("prix");
      if (p) window.scrollTo({ top: p.getBoundingClientRect().top + window.scrollY - 40, behavior: "smooth" });
      return;
    }
    revealDetail();
  };

  return (
    <section
      id="programme"
      className="relative flex flex-col gap-10 overflow-hidden border-t border-line bg-night px-(--px) pt-16 pb-[72px] text-cream lg:gap-12 lg:pt-20 lg:pb-[88px]"
    >
      <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="flex max-w-[820px] flex-col gap-5">
          <Badge emoji="📚">Qu’y a-t-il dans la formation ?</Badge>
          <H2 className="text-[28px] sm:text-[32px] lg:text-[clamp(32px,3vw,44px)]">
            10 modules. 4 semaines. <Hl>Ton premier client.</Hl>
          </H2>
        </div>
        <p className="m-0 max-w-[400px] text-[16px] leading-[1.55] text-pretty text-muted">
          Une semaine = un objectif concret. Choisis une semaine, puis un module : tu vois exactement ce que tu apprends, leçon par leçon.
        </p>
      </div>

      <div className="flex flex-col">
        {/* Onglets semaine : défilement horizontal sur mobile, grille de 4 en desktop */}
        <div
          role="tablist"
          aria-label="Semaines"
          className="no-scrollbar relative z-[1] -mx-(--px) -mb-1 flex snap-x snap-mandatory gap-2.5 overflow-x-auto scroll-px-(--px) px-(--px) lg:mx-0 lg:grid lg:snap-none lg:grid-cols-4 lg:overflow-visible lg:px-3"
        >
          {weeks.map((w, i) => {
            const on = i === wi;
            return (
              <button
                key={w.n}
                type="button"
                role="tab"
                aria-selected={on}
                onClick={() => pickWeek(i)}
                className={`grid w-[220px] flex-none cursor-pointer snap-start grid-cols-[auto_minmax(0,1fr)] items-center gap-[14px] border-4 border-b-0 px-[18px] pt-4 pb-5 text-left text-cream transition-[transform,background-color] duration-150 hover:bg-brand lg:w-auto ${
                  on ? "border-cream bg-brand" : "border-line bg-deep"
                }`}
              >
                <span className="flex flex-col gap-0.5 leading-none">
                  <span className={`text-[10px] font-bold tracking-[.18em] uppercase ${on ? "text-cream/80" : "text-muted"}`}>Semaine</span>
                  <span className={`font-display text-[26px] font-extrabold tracking-[-.05em] ${on ? "text-cream" : "text-brand"}`}>{w.n}</span>
                </span>
                <span className="flex min-w-0 flex-col gap-[3px]">
                  <span className="font-display text-[13px] leading-[1.2] font-bold tracking-[-.02em] [overflow-wrap:anywhere]">{w.title}</span>
                  <span className={`text-[12px] leading-[1.3] whitespace-nowrap ${on ? "text-cream/80" : "text-muted"}`}>
                    {w.mods.length} modules · {w.emoji}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative mr-3 min-w-0 lg:mr-0">
          <div className="absolute inset-0 translate-x-3 translate-y-3 bg-brand" />
          <div className="relative grid border-4 border-cream bg-deep lg:min-h-[560px] lg:grid-cols-[340px_1fr]">
            {/* Liste des modules */}
            <div className="flex flex-col border-b-4 border-cream bg-night lg:border-r-4 lg:border-b-0">
              <div className="flex flex-col gap-1.5 border-b border-line px-5 pt-6 pb-[18px] sm:px-6">
                <span className="text-[11px] font-bold tracking-[.18em] text-brand uppercase">
                  Semaine {cur.n} · {cur.title}
                </span>
                <span className="text-[14px] leading-[1.45] text-muted">{cur.sub}</span>
              </div>
              {cur.mods.map((m, i) => {
                const on = om === i;
                return (
                  <button
                    key={`${wi}-${i}`}
                    type="button"
                    aria-pressed={on}
                    onClick={() => {
                      setOm(i);
                      revealDetail();
                    }}
                    style={{ animationDelay: `${i * 0.06}s` }}
                    className={`anim-modin grid cursor-pointer grid-cols-[44px_1fr_14px] items-center gap-[14px] border-b border-l-[5px] border-b-line px-5 py-[18px] text-left text-cream hover:bg-card sm:px-6 ${
                      on ? "border-l-brand bg-deep" : "border-l-transparent"
                    }`}
                  >
                    <span className={`font-display text-[20px] leading-none font-extrabold tracking-[-.05em] ${on ? "text-cream" : "text-brand"}`}>{m.n}</span>
                    <span className="flex min-w-0 flex-col gap-1">
                      <span className="font-display text-[14px] leading-[1.25] font-bold tracking-[-.02em]">{m.title}</span>
                      <span className="text-[12px] text-muted">{m.items.length} leçons</span>
                    </span>
                    <span className={`font-display text-[16px] leading-none font-extrabold ${on ? "text-brand" : "text-line"}`}>→</span>
                  </button>
                );
              })}
              <div className="mt-auto flex items-start gap-3 bg-brand px-5 py-5 text-cream sm:px-6">
                <span className="text-[18px] leading-[1.2]">🏁</span>
                <div className="flex flex-col gap-[3px]">
                  <span className="text-[10px] font-bold tracking-[.16em] uppercase opacity-85">Livrable de fin de semaine</span>
                  <span className="font-display text-[14px] leading-[1.3] font-bold tracking-[-.02em]">{cur.result}</span>
                </div>
              </div>
            </div>

            {/* Détail du module */}
            <div
              ref={detailRef}
              key={`${wi}-${om}`}
              className="anim-modin flex min-w-0 scroll-mt-4 flex-col gap-7 px-5 py-8 sm:px-8 lg:px-11 lg:py-10"
            >
              <div className="flex flex-col gap-3">
                <span className="text-[11px] font-bold tracking-[.18em] text-brand uppercase">
                  Module {cm.n} · {cm.items.length} leçons
                </span>
                <span className="font-display text-[24px] leading-[1.05] font-extrabold tracking-[-.04em] text-balance sm:text-[30px]">{cm.title}</span>
                <span className="max-w-[560px] text-[16px] leading-[1.5] text-pretty text-muted">{cm.sub}</span>
              </div>
              <ol className="m-0 flex list-none flex-col border-t-3 border-cream p-0">
                {cm.items.map((t, j) => (
                  <li
                    key={j}
                    style={{ animationDelay: `${j * 0.05}s`, animationDuration: ".4s" }}
                    className="anim-modin grid grid-cols-[32px_1fr] items-baseline gap-3 border-b border-line py-4 sm:grid-cols-[40px_1fr] sm:gap-4"
                  >
                    <span className="font-display text-[13px] font-extrabold tracking-[-.02em] text-brand">{String(j + 1).padStart(2, "0")}</span>
                    <span className="text-[16px] leading-[1.45] text-cream">{t}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-4">
                <span className="text-[13px] text-dim">
                  Module {cm.n} sur {totalMods}
                </span>
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex cursor-pointer items-center gap-2.5 border-3 border-cream bg-night px-[18px] py-3 font-display text-[12px] font-bold tracking-[-.01em] text-cream shadow-[5px_5px_0_var(--color-brand)] transition-colors duration-150 hover:bg-brand"
                >
                  {nextLabel} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
