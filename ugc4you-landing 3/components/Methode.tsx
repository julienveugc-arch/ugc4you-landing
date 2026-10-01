"use client";

import { useId, useState } from "react";
import { steps } from "@/lib/content";
import { Collapse, PlusIcon } from "./Collapse";
import { Hl } from "./Hl";
import { H2, Kicker } from "./ui";

/** Les 4 étapes : seuls les titres sont visibles, un clic ouvre le détail (une étape à la fois). */
export function Methode() {
  const [open, setOpen] = useState<number | null>(null);
  const base = useId();

  return (
    <section id="methode" className="bg-glow flex flex-col gap-10 border-t border-line px-(--px) py-16 lg:py-20">
      <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="flex max-w-[720px] flex-col gap-[18px]">
          <Kicker>La méthode</Kicker>
          <H2>
            Les 4 étapes pour vendre, <Hl>dans le bon ordre.</Hl>
          </H2>
        </div>
        <p className="m-0 max-w-[400px] text-[15px] leading-[1.55] text-pretty text-muted">
          Tout le monde commence par filmer. Moi je te fais d’abord trouver le client et signer. Tu filmes quand t’es payé.
        </p>
      </div>
      <div className="grid items-start gap-4 pr-1.5 sm:grid-cols-2 sm:gap-[22px] lg:grid-cols-[repeat(4,minmax(0,1fr))]">
        {steps.map((s, i) => {
          const on = open === i;
          const id = `${base}-${i}`;
          return (
            <div
              key={s.n}
              className={`relative flex min-w-0 flex-col border-3 border-cream shadow-[6px_6px_0_var(--color-brand)] transition-colors duration-200 ${
                on ? "bg-deep" : "bg-night hover:bg-deep"
              }`}
            >
              <button
                type="button"
                aria-expanded={on}
                aria-controls={id}
                onClick={() => setOpen(on ? null : i)}
                className="flex w-full cursor-pointer flex-col gap-[14px] px-5 pt-5 pb-5 text-left text-cream sm:px-[26px] sm:pt-[26px]"
              >
                <span className="flex w-full items-center justify-between gap-3">
                  <span className="flex items-center gap-3">
                    <span className="font-display text-[40px] leading-[.85] font-extrabold tracking-[-.07em] text-brand">{s.n}</span>
                    <span className="text-[24px] leading-none">{s.icon}</span>
                  </span>
                  <PlusIcon open={on} className="text-[28px]" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold tracking-[.18em] text-muted uppercase">{s.kicker}</span>
                  <span className="font-display text-[18px] leading-[1.2] font-bold tracking-[-.02em] text-balance">{s.title}</span>
                </span>
              </button>
              <Collapse open={on} id={id}>
                <div className="flex flex-col gap-[14px] px-5 pb-6 sm:px-[26px]">
                  <p className="m-0 text-[14px] leading-[1.55] text-pretty text-muted">{s.text}</p>
                  <div className="flex items-start gap-2.5 border-t border-line pt-[14px]">
                    <span className="mt-0.5 flex h-[18px] w-[18px] flex-none items-center justify-center bg-brand text-[11px] font-extrabold text-cream">
                      ✓
                    </span>
                    <span className="text-[13px] leading-[1.45] text-cream">
                      <span className="text-muted">Tu repars avec :</span> {s.result}
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
