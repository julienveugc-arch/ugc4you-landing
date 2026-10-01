import { site } from "@/site.config";
import { brands, problems, reelVideos } from "@/lib/content";
import { Hl } from "./Hl";
import { Badge, H2, Kicker, Phone } from "./ui";
import { GainsStats } from "./GainsStats";

/* ─────────── Logos marques ─────────── */
export function Logos() {
  const row = [...brands, ...brands];
  return (
    <section className="flex flex-col gap-5 border-y border-line py-7">
      <div className="px-5 text-center text-[12px] font-bold tracking-[.2em] text-dim uppercase">
        Ils m’ont fait confiance cette année
      </div>
      <div className="w-full overflow-hidden">
        <div className="flex w-max animate-[marquee_30s_linear_infinite] gap-4 motion-reduce:animate-none sm:gap-6">
          {row.map((b, i) => (
            <div
              key={i}
              aria-hidden={i >= brands.length}
              className="box-border flex h-16 w-40 items-center justify-center border border-line bg-night px-5 py-3 sm:h-20 sm:w-[200px] sm:px-6 sm:py-4"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={b.src} alt={i < brands.length ? b.alt : ""} className="max-h-full max-w-full object-contain opacity-90" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── Problème ─────────── */
export function Probleme() {
  return (
    <section className="relative grid items-start gap-10 overflow-clip border-t border-line bg-night px-(--px) py-14 text-cream lg:grid-cols-[400px_1fr] lg:gap-16 lg:py-[72px]">
      <div className="flex flex-col gap-6 lg:sticky lg:top-[112px]">
        <Badge emoji="🎯">Tu te reconnais ?</Badge>
        <H2>
          Si tu te reconnais là-dedans, <Hl>c’est pour toi.</Hl>
        </H2>
      </div>
      <div className="flex flex-col">
        {problems.map((p, i) => (
          <div
            key={p.n}
            className={`grid grid-cols-[52px_1fr] items-center gap-4 py-6 sm:grid-cols-[80px_1fr_56px] sm:gap-8 sm:py-7 ${
              i < problems.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <div className="font-display text-[36px] leading-[.9] font-extrabold tracking-[-.06em] text-transparent [-webkit-text-stroke:2px_var(--color-brand)] sm:text-[48px]">
              {p.n}
            </div>
            <div className="flex flex-col gap-2.5">
              <div className="font-display text-[18px] leading-[1.1] font-bold tracking-[-.03em] text-balance sm:text-[22px]">
                {p.title}
              </div>
              <div className="max-w-[640px] text-[15px] leading-[1.55] text-muted">{p.text}</div>
            </div>
            <div className="hidden h-[72px] w-[72px] items-center justify-center border-3 border-cream bg-night text-[26px] leading-none shadow-[5px_5px_0_var(--color-brand)] sm:flex">
              {p.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────── Gains (captures) ─────────── */
export function Gains() {
  return (
    <section
      id="gains"
      className="bg-glow relative flex flex-col items-center gap-10 overflow-hidden border-t border-line px-(--px) py-14 lg:gap-12 lg:py-[72px]"
    >
      <div className="flex max-w-[820px] flex-col items-center gap-5 text-center">
        <Kicker>Mes résultats, 12 mois après</Kicker>
        <H2>
          Un an. <Hl>Voilà où j’en suis.</Hl>
        </H2>
      </div>
      <GainsStats />
      <div className="mt-2 grid w-full max-w-[1040px] gap-10 md:grid-cols-2">
        <Screen label="youdji.com · mes revenus" src={site.media.screenYoudji} shadow="brand" caption="Mon dashboard Youdji, tel quel. Pas de montage." placeholder="Capture youdji.com" />
        <Screen label="fiverr.com · mes revenus" src={site.media.screenFiverr} shadow="cream" caption="Mon dashboard Fiverr, tel quel. Pas de montage." placeholder="Capture fiverr.com" />
      </div>
    </section>
  );
}

function Screen({
  label,
  src,
  shadow,
  caption,
  placeholder,
}: {
  label: string;
  src: string;
  shadow: "brand" | "cream";
  caption: string;
  placeholder: string;
}) {
  return (
    <div className="flex min-w-0 flex-col gap-[14px] pr-2">
      <div
        className={`flex flex-col border-4 border-cream bg-deep ${
          shadow === "brand" ? "shadow-[8px_8px_0_var(--color-brand)]" : "shadow-[8px_8px_0_var(--color-cream)]"
        }`}
      >
        <div className="flex items-center justify-between gap-2 border-b-3 border-cream bg-night px-[14px] py-2.5">
          <div className="flex gap-1.5">
            <span className="h-[9px] w-[9px] rounded-full bg-[#FF5F57]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#FEBC2E]" />
            <span className="h-[9px] w-[9px] rounded-full bg-[#28C840]" />
          </div>
          <div className="truncate text-[11px] font-bold tracking-[.14em] text-muted uppercase">{label}</div>
          <span className="text-[13px] leading-none">🔒</span>
        </div>
        <div className="relative aspect-video overflow-hidden bg-panel">
          {src ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={src} alt={caption} className="absolute inset-0 h-full w-full object-cover object-top" />
          ) : (
            <div className="absolute inset-3 flex items-center justify-center border-2 border-dashed border-line text-[13px] text-dim">
              {placeholder}
            </div>
          )}
        </div>
      </div>
      <p className="m-0 text-[14px] leading-[1.45] text-muted">{caption}</p>
    </div>
  );
}

/* ─────────── Vidéos 9:16 (« Voici ce que je vends ») ─────────── */
const reelPose = [
  "z-[1] w-[190px] [transform:rotate(-8deg)_translate(28px,6px)] hover:[transform:rotate(-8deg)_translate(28px,-14px)]",
  "z-[3] w-[214px] [transform:translateY(-20px)] hover:[transform:translateY(-40px)]",
  "z-[3] w-[190px] [transform:rotate(8deg)_translate(-28px,6px)] hover:[transform:rotate(8deg)_translate(-28px,-14px)]",
];

export function Reel() {
  return (
    <section
      id="reel"
      className="relative flex flex-col gap-6 overflow-hidden border-t border-line bg-night px-(--px) py-14 text-cream lg:gap-10 lg:py-[72px]"
    >
      <div className="relative flex flex-col items-start gap-5 lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="flex max-w-[760px] flex-col gap-5">
          <Badge emoji="🎬">Voici ce que je vends</Badge>
          <H2>
            Ça, <Hl>je le vends 200 €.</Hl>
          </H2>
        </div>
        <p className="m-0 max-w-[380px] text-[15px] leading-[1.55] text-pretty text-muted">
          30 secondes, filmées dans mon salon avec mon téléphone. Les marques en redemandent. En semaine 3 tu sais faire pareil.
        </p>
      </div>
      {/* Même composition qu'en desktop, mise à l'échelle sur petits écrans */}
      <div className="relative h-[264px] sm:h-[340px] lg:h-[400px]">
        <div className="absolute inset-x-0 bottom-0 flex h-[400px] origin-bottom scale-[.64] items-end justify-center sm:scale-[.84] lg:scale-100">
          {reelVideos.map((v, i) => (
            <div
              key={v.brand}
              className={`relative aspect-[9/16] flex-none transition-transform duration-[350ms] ease-[ease] hover:z-[4] ${reelPose[i]}`}
            >
              <Phone
                src={site.media.reel[i]}
                placeholder={
                  <div className="absolute inset-3 flex flex-col items-center justify-center gap-1.5 rounded-2xl border-2 border-dashed border-[#3A3A3A] p-4 text-center text-[12px] text-muted">
                    <span className="text-[28px] leading-none">🎬</span>
                    <span className="font-bold">Vidéo {i + 1} · 9:16</span>
                    <span>à venir</span>
                  </div>
                }
                caption={
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 flex flex-col items-start gap-1.5 bg-[linear-gradient(transparent,rgba(14,14,14,.95))] p-3 text-cream">
                    <div className="flex max-w-full min-w-0 flex-col gap-0.5">
                      <span className="font-display text-[12px] font-bold whitespace-nowrap">{v.brand}</span>
                      <span className="truncate text-[11px] text-muted">{v.meta}</span>
                    </div>
                    <span className="border-2 border-cream px-[7px] py-[3px] text-[10px] font-bold tracking-[.08em] whitespace-nowrap uppercase">
                      {v.platform}
                    </span>
                  </div>
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
