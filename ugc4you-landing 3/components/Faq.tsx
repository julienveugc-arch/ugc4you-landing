"use client";

import { useId, useState } from "react";
import { faqLeft, faqRight } from "@/lib/content";
import { Collapse, PlusIcon } from "./Collapse";
import { Hl } from "./Hl";
import { Badge, H2 } from "./ui";

const faqs = [...faqLeft, ...faqRight];

/** FAQ à deux niveaux : un clic affiche les questions, un clic sur une question affiche sa réponse. */
export function Faq() {
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState<number | null>(null);
  const listId = useId();

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
        <p className="m-0 text-[16px] leading-[1.5] text-muted">Si la tienne n’est pas là, écris-moi avec la bulle en bas à droite.</p>
      </div>

      <div className="flex w-full max-w-[860px] flex-col">
        <button
          type="button"
          aria-expanded={shown}
          aria-controls={listId}
          onClick={() => {
            setShown(!shown);
            setOpen(null);
          }}
          className={`mr-2 flex cursor-pointer items-center justify-between gap-4 border-4 border-cream px-5 py-5 text-left font-display text-[16px] font-bold tracking-[-.02em] text-cream shadow-[8px_8px_0_var(--color-brand)] transition-colors duration-150 sm:px-7 sm:text-[18px] ${
            shown ? "bg-brand" : "bg-night hover:bg-brand"
          }`}
        >
          <span>{shown ? "Masquer les questions" : `Voir les ${faqs.length} questions`}</span>
          <PlusIcon open={shown} light className="text-[30px]" />
        </button>

        <Collapse open={shown} id={listId}>
          <div className="mr-2 flex flex-col gap-3 pt-6">
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? null : i)} />
            ))}
          </div>
        </Collapse>
      </div>
    </section>
  );
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const id = useId();
  return (
    <div className={`border-2 bg-night px-4 transition-colors duration-150 sm:px-6 ${open ? "border-brand" : "border-line"}`}>
      <h3 className="m-0">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={id}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-center justify-between gap-5 py-5 text-left font-display text-[15px] leading-[1.3] font-semibold tracking-[-.02em] text-cream transition-colors duration-150 hover:text-brand sm:text-[16px]"
        >
          <span>{q}</span>
          <PlusIcon open={open} className="text-[22px]" />
        </button>
      </h3>
      <Collapse open={open} id={id}>
        <p className="m-0 pb-[22px] text-[15px] leading-[1.55] text-pretty text-muted">{a}</p>
      </Collapse>
    </div>
  );
}
