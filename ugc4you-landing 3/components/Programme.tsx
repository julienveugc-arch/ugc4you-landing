"use client";

import { useId, useState } from "react";
import programme from "@/data/programme-data.json";
import { Collapse, PlusIcon } from "./Collapse";
import { Hl } from "./Hl";
import { Badge, H2 } from "./ui";

type Week = (typeof programme)[number];
const weeks: Week[] = programme;

/**
 * Programme en accordéon à deux niveaux :
 * clic sur une semaine → liste de ses modules ; clic sur un module → ses leçons.
 */
export function Programme() {
  const [ow, setOw] = useState<number | null>(null);
  const [om, setOm] = useState<string | null>(null);
  const base = useId();

  const toggleWeek = (i: number) => {
    setOw(ow === i ? null : i);
    setOm(null);
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
        <p className="m-0 max-w-[400px] text-[16px] leading-[1.55] text-pretty text-muted">Clique sur une semaine pour voir ce que tu apprends.</p>
      </div>

      <div className="mx-auto flex w-full max-w-[980px] flex-col gap-4 pr-2">
        {weeks.map((w, i) => {
          const on = ow === i;
          const id = `${base}-w${i}`;
          return (
            <div
              key={w.n}
              className={`border-4 transition-[border-color,box-shadow] duration-200 ${
                on ? "border-cream bg-deep shadow-[8px_8px_0_var(--color-brand)]" : "border-line bg-deep hover:border-cream"
              }`}
            >
              <button
                type="button"
                aria-expanded={on}
                aria-controls={id}
                onClick={() => toggleWeek(i)}
                className={`grid w-full cursor-pointer grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 px-4 py-4 text-left text-cream transition-colors duration-150 sm:gap-6 sm:px-6 sm:py-5 ${
                  on ? "bg-brand" : ""
                }`}
              >
                <span className="flex flex-col gap-0.5 leading-none">
                  <span className={`text-[10px] font-bold tracking-[.18em] uppercase ${on ? "text-cream/80" : "text-muted"}`}>Semaine</span>
                  <span className={`font-display text-[30px] font-extrabold tracking-[-.05em] sm:text-[36px] ${on ? "text-cream" : "text-brand"}`}>{w.n}</span>
                </span>
                <span className="flex min-w-0 flex-col gap-1">
                  <span className="font-display text-[16px] leading-[1.2] font-bold tracking-[-.02em] sm:text-[20px]">
                    {w.title} <span className="font-body">{w.emoji}</span>
                  </span>
                  <span className={`text-[12px] sm:text-[13px] ${on ? "text-cream/80" : "text-muted"}`}>{w.mods.length} modules</span>
                </span>
                <PlusIcon open={on} light={on} className="text-[30px]" />
              </button>

              <Collapse open={on} id={id}>
                <div className="flex flex-col">
                  {w.mods.map((m, j) => {
                    const k = `${i}-${j}`;
                    const mo = om === k;
                    const mid = `${base}-m${k}`;
                    return (
                      <div key={k} className="border-t border-line">
                        <button
                          type="button"
                          aria-expanded={mo}
                          aria-controls={mid}
                          onClick={() => setOm(mo ? null : k)}
                          className={`grid w-full cursor-pointer grid-cols-[36px_minmax(0,1fr)_auto] items-center gap-3 border-l-[5px] px-4 py-4 text-left text-cream transition-colors duration-150 hover:bg-card sm:grid-cols-[48px_minmax(0,1fr)_auto] sm:px-6 ${
                            mo ? "border-l-brand bg-card" : "border-l-transparent"
                          }`}
                        >
                          <span className="font-display text-[18px] leading-none font-extrabold tracking-[-.05em] text-brand sm:text-[20px]">{m.n}</span>
                          <span className="flex min-w-0 flex-col gap-0.5">
                            <span className="font-display text-[14px] leading-[1.25] font-bold tracking-[-.02em] sm:text-[15px]">{m.title}</span>
                            <span className="text-[12px] text-muted">{m.items.length} leçons</span>
                          </span>
                          <span
                            aria-hidden
                            className={`font-display text-[16px] leading-none font-extrabold transition-transform duration-250 ${mo ? "rotate-90 text-brand" : "text-muted"}`}
                          >
                            →
                          </span>
                        </button>
                        <Collapse open={mo} id={mid}>
                          <ol className="m-0 flex list-none flex-col gap-0 bg-night py-2 pr-4 pl-[56px] sm:pr-6 sm:pl-[78px]">
                            {m.items.map((t, n) => (
                              <li key={n} className="flex gap-3 py-2 text-[14px] leading-[1.45] text-cream sm:text-[15px]">
                                <span className="mt-[7px] h-1.5 w-1.5 flex-none bg-brand" />
                                <span>{t}</span>
                              </li>
                            ))}
                          </ol>
                        </Collapse>
                      </div>
                    );
                  })}
                  <div className="flex items-center gap-3 border-t border-line bg-night px-4 py-4 text-cream sm:px-6">
                    <span className="text-[18px] leading-none">🏁</span>
                    <span className="text-[13px] leading-[1.4]">
                      <span className="text-muted">Fin de semaine :</span> <span className="font-bold">{w.result}</span>
                    </span>
                  </div>
                </div>
              </Collapse>
            </div>
          );
        })}
      </div>
    </section>
  );
}
