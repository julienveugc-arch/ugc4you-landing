"use client";

import { useRef } from "react";
import { site } from "@/site.config";
import { students } from "@/lib/content";
import { Hl } from "./Hl";
import { H2, Kicker, Phone } from "./ui";

const arrow =
  "flex h-11 w-11 cursor-pointer items-center justify-center border-3 border-cream font-display text-[16px] font-extrabold transition-colors duration-150";

/** Bande horizontale de 10 vidéos élèves 9:16 : flèches + swipe natif (scroll-snap). */
export function Eleves() {
  const track = useRef<HTMLDivElement>(null);
  const scroll = (d: number) => {
    const t = track.current;
    if (!t) return;
    const card = t.firstElementChild as HTMLElement | null;
    const step = card ? card.offsetWidth + 44 : 244;
    t.scrollBy({ left: d * step * (t.clientWidth < 640 ? 1 : 2), behavior: "smooth" });
  };

  return (
    <section
      id="eleves"
      className="bg-glow relative flex flex-col gap-8 overflow-hidden border-t border-line pt-14 pb-12 text-cream lg:gap-10 lg:pt-[72px] lg:pb-16"
    >
      <div className="flex flex-col items-start gap-5 px-(--px) lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="flex max-w-[760px] flex-col gap-5">
          <Kicker>Leurs premières vidéos vendues</Kicker>
          <H2>
            Ils n’avaient jamais filmé. <Hl>Regarde ce qu’ils vendent.</Hl>
          </H2>
        </div>
        <div className="flex w-full flex-none items-center justify-between gap-5 lg:w-auto">
          <span className="text-[14px] text-muted">{students.length} vidéos d’élèves</span>
          <div className="flex gap-2">
            <button type="button" aria-label="Vidéos précédentes" onClick={() => scroll(-1)} className={`${arrow} bg-night text-cream hover:bg-brand`}>
              ←
            </button>
            <button
              type="button"
              aria-label="Vidéos suivantes"
              onClick={() => scroll(1)}
              className={`${arrow} bg-brand text-cream shadow-[4px_4px_0_var(--color-cream)] hover:bg-cream hover:text-night`}
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Bandeau de texte géant en fond, qui défile */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden">
          <div className="flex w-max animate-[marquee_40s_linear_infinite] motion-reduce:animate-none">
            {[0, 1].map((k) => (
              <span
                key={k}
                className="pr-10 font-display text-[90px] leading-none font-extrabold tracking-[-.05em] whitespace-nowrap text-transparent uppercase opacity-40 [-webkit-text-stroke:2px_var(--color-brand)] sm:text-[150px]"
              >
                Premières ventes ✦ Premières ventes ✦ Premières ventes ✦
              </span>
            ))}
          </div>
        </div>

        <div
          ref={track}
          className="no-scrollbar relative flex snap-x snap-mandatory scroll-px-(--px) gap-11 overflow-x-auto scroll-smooth px-(--px) pt-8 pb-14 [-webkit-overflow-scrolling:touch] sm:gap-12"
        >
          {students.map((s, i) => (
            <div
              key={i}
              className={`flex w-[176px] flex-none snap-start flex-col gap-[14px] sm:w-[210px] ${
                i % 2 ? "translate-y-8 rotate-[1.5deg]" : "-rotate-[1.5deg]"
              }`}
            >
              <div className="relative aspect-[9/16] transition-transform duration-300 ease-[ease] hover:-translate-y-2 hover:rotate-0">
                <Phone
                  src={site.media.students[i]}
                  placeholder={
                    <div className="absolute inset-3 flex flex-col items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-line p-4 text-center text-[12px] text-muted">
                      <span className="text-[28px] leading-none">🎥</span>
                      <span className="font-bold whitespace-nowrap">Vidéo élève {i + 1}</span>
                      <span>Vidéo 9:16 à venir</span>
                    </div>
                  }
                  caption={
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-[linear-gradient(transparent,rgba(14,14,14,.95))] px-[14px] pt-8 pb-4 text-cream">
                      <span className="font-display text-[13px] font-bold">{s.name}</span>
                      <span className="text-[12px] text-muted">{s.meta}</span>
                    </div>
                  }
                />
                <span className="absolute -top-3 -right-3 z-[2] flex rotate-6 flex-col items-center border-3 border-cream bg-ok px-2.5 py-1.5 font-display leading-none text-ok-ink shadow-[3px_3px_0_var(--color-night)]">
                  <span className="text-[8px] font-bold tracking-[.12em] uppercase">Vendue</span>
                  <span className="text-[16px] font-extrabold tracking-[-.03em] whitespace-nowrap">{s.price}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
