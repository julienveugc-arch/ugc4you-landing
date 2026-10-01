"use client";

import { useId, useState } from "react";
import { faqLeft, faqRight } from "@/lib/content";
import { Hl } from "./Hl";
import { Badge, H2 } from "./ui";

/** FAQ en accordéon : un seul item ouvert à la fois, transition de hauteur ~250 ms. */
export function Faq() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (k: string) => setOpen((o) => (o === k ? null : k));

  return (
    <section
      id="faq"
      className="bg-glow relative flex flex-col items-center gap-10 overflow-hidden border-t border-line px-(--px) py-14 lg:py-[72px]"
    >
      <div className="flex max-w-[760px] flex-col items-center gap-5 text-center">
        <div className="flex justify-center">
          <Badge emoji="❓">Les questions qu’on me pose tout le temps</Badge>
        </div>
        <H2 className="text-[28px] sm:text-[32px] lg:text-[36px]">
          Tout ce qui te fait hésiter, <Hl>en vrai.</Hl>
        </H2>
        <p className="m-0 text-[16px] leading-[1.5] text-muted">
          Si la tienne n’est pas là, écris-moi avec la bulle en bas à droite.
        </p>
      </div>
      <div className="grid w-full max-w-[1200px] items-start gap-x-6 gap-y-3 lg:grid-cols-2">
        {[faqLeft, faqRight].map((col, c) => (
          <div key={c} className="flex flex-col gap-3">
            {col.map((f, i) => {
              const k = `${c}-${i}`;
              return <FaqItem key={k} q={f.q} a={f.a} open={open === k} onToggle={() => toggle(k)} />;
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div className="border-2 border-line bg-night px-4 sm:px-6">
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left font-display text-[15px] leading-[1.3] font-semibold tracking-[-.02em] text-cream transition-colors duration-150 hover:text-brand sm:text-[16px]"
        >
          <span>{q}</span>
          <span
            className={`flex-none font-display text-[22px] leading-none font-extrabold text-brand transition-transform duration-250 ${open ? "rotate-45" : ""}`}
          >
            +
          </span>
        </button>
      </h3>
      <div
        id={id}
        role="region"
        className={`grid transition-[grid-template-rows] duration-250 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden" inert={!open}>
          <p className="m-0 pb-[22px] text-[15px] leading-[1.55] text-pretty text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}
