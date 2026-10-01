"use client";

import { useState } from "react";
import { eur, site } from "@/site.config";
import { Hl } from "./Hl";
import { H2, Kicker } from "./ui";

const prices: [number, string][] = [
  [150, "débutant"],
  [200, "tarif bas"],
  [300, "après 3 mois"],
];
const signed = (n: number) => `${n < 0 ? "− " : "+ "}${eur(Math.abs(n))} €`;

/** Calculateur de rentabilité : blocs gris = remboursement de la formation, verts = profit. */
export function Calculateur() {
  const [n, setN] = useState(3);
  const [p, setP] = useState(200);
  const price = site.priceNow;

  const nb = Math.ceil(price / p); // point de bascule
  const m1 = n * p - price;
  const m3 = n * p * 3 - price;
  const done = n >= nb;
  const payback = nb <= n ? `dès la ${nb}${nb === 1 ? "re" : "e"} vidéo, mois 1.` : `en ${Math.ceil(nb / n)} mois, à ce rythme.`;
  const blocks = Array.from({ length: Math.max(n, nb) }, (_, i) => ({ sold: i < n, pay: i < nb }));

  return (
    <section
      id="calcul"
      className="grid items-center gap-12 border-t border-line [background:radial-gradient(ellipse_70%_60%_at_80%_50%,rgba(123,63,228,.22),transparent_70%),#140E26] px-(--px) py-16 text-cream lg:grid-cols-[1fr_1.1fr] lg:gap-[72px] lg:py-20"
    >
      <div className="flex flex-col gap-[22px]">
        <Kicker>Fais le calcul</Kicker>
        <H2 className="text-[28px] text-cream sm:text-[32px] lg:text-[clamp(32px,3vw,42px)]">
          Remboursée dès le premier mois. <Hl>Après, c’est pour toi.</Hl>
        </H2>
        <p className="m-0 max-w-[480px] text-[17px] leading-[1.5] text-pretty text-muted">
          Bouge le curseur. C’est toi qui choisis le rythme, à côté de ton taf. Les prix sont ceux du bas du marché.
        </p>
        <div className="mt-2 flex flex-col gap-1.5" aria-live="polite">
          <span className="text-[12px] font-bold tracking-[.16em] text-brand uppercase">La formation est remboursée</span>
          <span
            className={`font-display text-[26px] leading-none font-extrabold tracking-[-.04em] sm:text-[34px] ${done ? "text-ok" : "text-cream"}`}
          >
            {payback}
          </span>
        </div>
        <a
          href="#prix"
          className="mt-2 inline-flex self-start border-3 border-cream bg-brand px-[26px] py-4 font-display text-[15px] font-bold tracking-[-.02em] text-cream no-underline shadow-[8px_8px_0_var(--color-cream)] transition-colors duration-150 hover:bg-cream hover:text-night"
        >
          Décrocher mon premier client
        </a>
      </div>

      <div className="relative mr-[14px] lg:mr-0">
        <div className="absolute inset-0 translate-x-[14px] translate-y-[14px] bg-brand" />
        <div className="relative flex flex-col gap-[30px] border-4 border-cream bg-night px-5 py-7 sm:px-10 sm:py-9">
          <div className="flex flex-col gap-[14px]">
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor="calc-n" className="text-[15px] text-muted">
                Vidéos vendues par mois
              </label>
              <span className="font-display text-[28px] font-extrabold tracking-[-.04em] text-brand tabular-nums">{n}</span>
            </div>
            <input
              id="calc-n"
              type="range"
              min={1}
              max={8}
              step={1}
              value={n}
              onChange={(e) => setN(+e.target.value)}
              className="h-1.5 w-full cursor-pointer accent-brand"
            />
            <div className="flex justify-between text-[12px] text-dim">
              <span>1 · tranquille</span>
              <span>8 · sérieux</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[15px] text-muted">Prix par vidéo</span>
            <div className="grid grid-cols-3 gap-2.5">
              {prices.map(([v, hint]) => {
                const on = v === p;
                return (
                  <button
                    key={v}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setP(v)}
                    className={`flex cursor-pointer flex-col items-center gap-[3px] border-3 px-2 py-3 text-center font-display text-[15px] font-bold tracking-[-.02em] text-cream ${
                      on ? "border-cream bg-brand" : "border-line bg-transparent"
                    }`}
                  >
                    <span>{v} €</span>
                    <span className={`font-body text-[11px] font-medium ${on ? "text-cream/85" : "text-dim"}`}>{hint}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t-3 border-cream pt-6">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
              <span className="text-[13px] font-bold tracking-[.14em] text-muted uppercase">Mois 1 · les {price} € de la formation</span>
              <span className="flex gap-[14px] text-[12px] text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 border-2 border-line bg-card" />
                  rembourse la formation
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 bg-ok" />
                  dans ta poche
                </span>
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {blocks.map(({ sold, pay }, i) => (
                <div
                  key={i}
                  className={`flex h-[52px] min-w-[52px] flex-[1_1_0] flex-col items-center justify-center gap-0.5 border-2 font-display text-[11px] font-bold transition-[background-color,border-color] duration-300 ${
                    !sold
                      ? "border-line bg-transparent text-dim"
                      : pay
                        ? "border-line bg-card text-muted"
                        : "border-ok bg-ok text-ok-ink"
                  }`}
                >
                  <span>{!sold ? "—" : pay ? `${p} €` : `+${p} €`}</span>
                  <span className={`font-body text-[9px] font-bold tracking-[.08em] uppercase ${pay ? "text-dim" : "text-ok-ink/75"}`}>
                    {!sold ? "" : pay ? "rembourse" : "bénéf"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-2.5 sm:grid-cols-2">
            <div
              className={`flex flex-col gap-1.5 border-2 px-5 py-[18px] transition-[background-color,border-color] duration-300 ${
                m1 < 0 ? "border-line bg-deep" : "border-ok bg-ok"
              }`}
            >
              <span className={`text-[12px] font-bold tracking-[.14em] uppercase ${m1 < 0 ? "text-muted" : "text-ok-ink/75"}`}>Net à 1 mois</span>
              <span className={`font-display text-[28px] leading-none font-extrabold tracking-[-.04em] tabular-nums ${m1 < 0 ? "text-muted" : "text-ok-ink"}`}>
                {signed(m1)}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 border-2 border-ok bg-ok px-5 py-[18px]">
              <span className="text-[12px] font-bold tracking-[.14em] text-ok-ink uppercase opacity-75">Dans ta poche à 3 mois</span>
              <span className="font-display text-[28px] leading-none font-extrabold tracking-[-.04em] text-ok-ink tabular-nums">{signed(m3)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
