"use client";

import { useState } from "react";
import { eur, site } from "@/site.config";
import { Hl } from "./Hl";
import { H2, Kicker } from "./ui";

const VIDEO_PRICE = 150; // prix d'une vidéo pour un débutant
const MAX = 10;

/** Calculateur : combien de vidéos à 150 € pour rembourser la formation. */
export function Calculateur() {
  const price = site.priceNow;
  const nb = Math.ceil(price / VIDEO_PRICE); // vidéos nécessaires pour rembourser
  const [n, setN] = useState(2);

  const total = n * VIDEO_PRICE;
  const done = total >= price;
  const left = nb - n;
  const pct = Math.min(100, (total / price) * 100);

  return (
    <section
      id="calcul"
      className="grid items-center gap-12 border-t border-line [background:radial-gradient(ellipse_70%_60%_at_80%_50%,rgba(123,63,228,.22),transparent_70%),#140E26] px-(--px) py-16 text-cream lg:grid-cols-[1fr_1.1fr] lg:gap-[72px] lg:py-20"
    >
      <div className="flex flex-col gap-[22px]">
        <Kicker>Fais le calcul</Kicker>
        <H2 className="text-[28px] text-cream sm:text-[32px] lg:text-[clamp(32px,3vw,42px)]">
          Remboursée en {nb} vidéos. <Hl>Après, c’est pour toi.</Hl>
        </H2>
        <p className="m-0 max-w-[480px] text-[17px] leading-[1.5] text-pretty text-muted">
          Une vidéo UGC se vend {VIDEO_PRICE} € quand tu débutes. Bouge le
          curseur pour voir combien de vidéos il te faut pour rembourser les{" "}
          {price} € de la formation.
        </p>
        <a
          href="#prix"
          className="mt-2 inline-flex self-start border-3 border-cream bg-brand px-[26px] py-4 font-display text-[15px] font-bold tracking-[-.02em] text-cream no-underline shadow-[8px_8px_0_var(--color-cream)] transition-colors duration-150 hover:bg-cream hover:text-night"
        >
          Décrocher mon premier client
        </a>
      </div>

      <div className="relative mr-[14px] lg:mr-0">
        <div className="absolute inset-0 translate-x-[14px] translate-y-[14px] bg-brand" />
        <div className="relative flex flex-col gap-7 border-4 border-cream bg-night px-5 py-7 sm:px-10 sm:py-9">
          {/* Curseur */}
          <div className="flex flex-col gap-[14px]">
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="calc-n" className="text-[15px] text-muted">
                Vidéos vendues à {VIDEO_PRICE} €
              </label>
              <span className="font-display text-[34px] leading-none font-extrabold tracking-[-.04em] text-brand tabular-nums">
                {n}
              </span>
            </div>
            <input
              id="calc-n"
              type="range"
              min={1}
              max={MAX}
              step={1}
              value={n}
              onChange={(e) => setN(+e.target.value)}
              className="h-2 w-full cursor-pointer accent-brand"
            />
          </div>

          {/* Une case par vidéo */}
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {Array.from({ length: MAX }, (_, i) => {
                const sold = i < n;
                const pay = i < nb;
                return (
                  <div
                    key={i}
                    className={`flex h-[52px] flex-col items-center justify-center gap-0.5 border-2 font-display text-[12px] font-bold transition-[background-color,border-color,color] duration-300 ${
                      !sold
                        ? "border-line border-dashed text-dim"
                        : pay
                          ? "border-cream bg-card text-cream"
                          : "border-ok bg-ok text-ok-ink"
                    }`}
                  >
                    <span className="text-[16px] leading-none">🎬</span>
                    <span>{i + 1}</span>
                  </div>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[12px] text-muted">
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 border-2 border-cream bg-card" />
                rembourse la formation
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 bg-ok" />
                dans ta poche
              </span>
            </div>
          </div>

          {/* Jauge vers les 500 € */}
          <div className="flex flex-col gap-2.5 border-t-3 border-cream pt-6">
            <div className="flex items-baseline justify-between gap-4">
              <span className="text-[14px] text-muted">
                {n} × {VIDEO_PRICE} € =
              </span>
              <span className="font-display text-[30px] leading-none font-extrabold tracking-[-.04em] tabular-nums">
                {eur(total)} €
              </span>
            </div>
            <div className="relative h-4 border-2 border-cream bg-deep">
              <div
                className={`h-full transition-[width,background-color] duration-300 ${done ? "bg-ok" : "bg-brand"}`}
                style={{ width: `${pct}%` }}
              />
            </div>
            <div className="flex justify-between text-[12px] text-dim">
              <span>0 €</span>
              <span>Formation : {price} €</span>
            </div>
          </div>

          {/* Verdict */}
          <div
            aria-live="polite"
            className={`flex items-center gap-3 border-2 px-5 py-[18px] transition-[background-color,border-color] duration-300 ${
              done
                ? "border-ok bg-ok text-ok-ink"
                : "border-line bg-deep text-cream"
            }`}
          >
            <span className="text-[26px] leading-none">
              {done ? "✅" : "⏳"}
            </span>
            <span className="font-display text-[16px] leading-[1.25] font-bold tracking-[-.02em] sm:text-[18px]">
              {done ? (
                <>
                  Formation remboursée.
                  {total > price && (
                    <> + {eur(total - price)} € dans ta poche.</>
                  )}
                </>
              ) : (
                <>
                  Encore {left} vidéo{left > 1 ? "s" : ""} et ta formation est
                  remboursée.
                </>
              )}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
