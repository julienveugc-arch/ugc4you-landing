"use client";

import { useEffect, useState, type FormEvent } from "react";
import { site } from "@/site.config";
import { Hl } from "./Hl";
import { Badge, H2, Logo } from "./ui";

/* ─────────── Capture email ─────────── */
export function CaptureEmail() {
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (site.leadEndpoint) {
      setBusy(true);
      try {
        await fetch(site.leadEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      } finally {
        setBusy(false);
      }
    }
    setSent(true);
  }

  const input =
    "border-3 border-cream bg-card px-4 py-[14px] font-body text-[16px] text-cream outline-none placeholder:text-muted focus:border-brand";

  return (
    <section className="bg-glow grid items-center gap-10 border-t border-line px-(--px) py-14 text-cream lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:py-[72px]">
      <div className="flex flex-col gap-5">
        <Badge emoji="🎁">Pas encore sûr ?</Badge>
        <H2 className="text-[24px] lg:text-[26px]">
          Pas prêt aujourd’hui ? <Hl>Reçois le guide détaillé par mail.</Hl>
        </H2>
        <p className="m-0 max-w-[560px] text-[15px] leading-[1.55] text-pretty text-muted">
          Le programme complet, module par module, ce que tu produis chaque semaine et comment se passe l’accès. Tu le reçois dans la minute.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="mr-2 flex flex-col gap-[14px] border-4 border-cream bg-night p-5 shadow-[8px_8px_0_var(--color-brand)] sm:p-8 lg:mr-0"
      >
        {sent ? (
          <div className="flex flex-col gap-2 py-3 text-center" role="status">
            <div className="text-[40px]">📬</div>
            <div className="font-display text-[22px] font-extrabold tracking-[-.03em]">C’est parti.</div>
            <div className="text-[15px] text-muted">Vérifie ta boîte mail (et les spams). Le guide arrive.</div>
          </div>
        ) : (
          <>
            <input name="firstname" required placeholder="Ton prénom" aria-label="Ton prénom" autoComplete="given-name" className={input} />
            <input name="email" type="email" required placeholder="Ton email" aria-label="Ton email" autoComplete="email" className={input} />
            <button
              type="submit"
              disabled={busy}
              className="mt-1.5 cursor-pointer border-3 border-cream bg-cream p-[18px] font-display text-[15px] font-bold text-night transition-colors duration-150 hover:border-brand hover:bg-brand disabled:opacity-60"
            >
              Recevoir le guide →
            </button>
            <div className="text-center text-[12px] text-muted">Zéro spam. Tu te désinscris en un clic.</div>
          </>
        )}
      </form>
    </section>
  );
}

/* ─────────── Barre CTA collante ─────────── */
export function StickyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const prix = document.getElementById("prix");
      const r = prix?.getBoundingClientRect();
      const nearPrix = !!r && r.top < window.innerHeight * 0.8 && r.bottom > 0;
      setShow(window.scrollY > 900 && !nearPrix);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      inert={!show}
      aria-hidden={!show}
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center pr-[76px] pb-3 pl-3 transition-[transform,opacity] duration-400 ease-[ease] sm:pr-[220px] sm:pb-5 sm:pl-6 ${
        show ? "translate-y-0 opacity-100" : "translate-y-[120px] opacity-0"
      }`}
    >
      <div className="pointer-events-auto flex w-full items-center justify-between gap-3 border-3 border-cream [background:radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(123,63,228,.1),transparent_70%),#140E26] py-2 pr-2 pl-3 shadow-[6px_6px_0_var(--color-brand)] sm:w-auto sm:justify-start sm:gap-7 sm:py-[14px] sm:pr-[14px] sm:pl-6 sm:shadow-[8px_8px_0_var(--color-brand)]">
        <div className="hidden md:block">
          <Logo size="bar" />
        </div>
        <div className="hidden flex-col gap-0.5 leading-[1.2] lg:flex">
          <span className="text-[14px] font-bold">Formation complète · accès à vie</span>
          <span className="text-[12px] text-muted">Garantie 14 jours</span>
        </div>
        <div className="font-display text-[20px] leading-none font-extrabold tracking-[-.04em] whitespace-nowrap sm:text-[26px]">
          {site.priceNow} €
          <span className="ml-2 text-[12px] font-semibold text-dim line-through sm:text-[13px]">{site.priceOld} €</span>
        </div>
        <a
          href="#prix"
          className="border-3 border-cream bg-brand px-4 py-3 font-display text-[13px] font-bold whitespace-nowrap text-cream no-underline transition-colors duration-150 hover:bg-cream hover:text-night sm:px-[26px] sm:py-4 sm:text-[14px]"
        >
          Je me lance 🚀
        </a>
      </div>
    </div>
  );
}
