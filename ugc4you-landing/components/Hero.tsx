import { site } from "@/site.config";
import { navLinks } from "@/lib/content";
import { Hl } from "./Hl";
import { HeroVideo } from "./HeroVideo";
import { LoopVideo, Logo } from "./ui";

const proofLabel = "text-[10px] font-bold tracking-[.18em] uppercase";
const proofIcon =
  "flex h-9 w-9 flex-none items-center justify-center border-2 border-cream text-[16px] leading-none";

export function Hero() {
  return (
    <header className="relative flex flex-col overflow-hidden bg-night lg:min-h-[780px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_65%_at_50%_30%,rgba(123,63,228,.6),transparent_70%),radial-gradient(ellipse_45%_35%_at_90%_95%,rgba(123,63,228,.38),transparent_70%),radial-gradient(ellipse_35%_30%_at_5%_80%,rgba(123,63,228,.3),transparent_70%)]" />
      {site.media.heroBg && (
        <div className="absolute inset-0 scale-[1.06]">
          <LoopVideo src={site.media.heroBg} />
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(14,14,14,.72)_0%,rgba(14,14,14,.55)_45%,rgba(20,20,20,.92)_100%)] backdrop-blur-[6px] backdrop-saturate-[1.2]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(244,241,234,.06)_1px,transparent_1px)] [background-size:4px_4px] mix-blend-overlay" />

      <nav className="relative flex items-center justify-between gap-4 px-(--px) py-[22px]">
        <Logo />
        <div className="hidden gap-9 text-[15px] font-medium lg:flex">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-cream no-underline transition-colors duration-150 hover:text-brand">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#prix"
          className="border-3 border-cream bg-brand px-4 py-[11px] font-display text-[11px] font-semibold tracking-[-.02em] text-cream no-underline shadow-[4px_4px_0_var(--color-cream)] transition-colors duration-150 hover:bg-cream hover:text-night sm:px-6 sm:py-[14px] sm:text-[13px] sm:shadow-[5px_5px_0_var(--color-cream)]"
        >
          <span className="sm:hidden">Rejoindre</span>
          <span className="hidden sm:inline">Rejoindre la formation</span>
        </a>
      </nav>

      <div className="relative flex flex-1 flex-col items-center justify-center gap-5 px-5 pt-6 pb-14 text-center sm:gap-7 sm:px-8 lg:px-[clamp(48px,8vw,200px)] lg:pt-10 lg:pb-[72px]">
        <h1 className="m-0 max-w-[1200px] font-display text-[30px] leading-[.98] font-extrabold tracking-[-.05em] text-balance [text-shadow:0_4px_40px_rgba(0,0,0,.5)] sm:text-[36px] lg:text-[clamp(36px,3.3vw,52px)]">
          Comment signer ton premier client UGC{" "}
          <Hl auto delay={0.35}>
            en quelques semaines.
          </Hl>
        </h1>
        <p className="m-0 max-w-[640px] text-[16px] leading-[1.5] text-pretty text-muted">
          Formation en ligne, 4 semaines, à côté de ton taf. Zéro compétence vidéo demandée. Je te montre en 1 minute.
        </p>

        <HeroVideo />

        {/* Bandeau de preuves */}
        <div className="relative mt-7 mr-2 grid w-[calc(100%-8px)] grid-cols-2 border-3 border-cream bg-night text-left shadow-[8px_8px_0_var(--color-brand)] lg:mr-0 lg:inline-flex lg:w-auto lg:items-stretch">
          <ProofItem icon="🏆" label="Top performer" className="border-r border-b border-line lg:border-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://youdji.com/assets/brand/logo/logo-white.svg" alt="Youdji" className="block h-5 w-auto" />
          </ProofItem>
          <div className="hidden w-px bg-line lg:my-2.5 lg:block" />
          <ProofItem icon="🏆" label="Top performer" className="border-b border-line lg:border-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/18/Fiverr_Logo_09.2020.svg"
              alt="Fiverr"
              className="block h-5 w-auto brightness-0 invert"
            />
          </ProofItem>
          <div className="hidden w-px bg-line lg:my-2.5 lg:block" />
          <ProofItem icon="🤝" label="Depuis un an" className="border-r border-line lg:border-0">
            <span className="font-display text-[16px] font-extrabold tracking-[-.04em]">+60 marques</span>
          </ProofItem>
          <div className="flex items-center gap-2.5 bg-brand px-3 py-3 sm:gap-[14px] sm:px-6 sm:py-4 lg:border-l-3 lg:border-cream">
            <span className={`${proofIcon} bg-[rgba(14,14,14,.35)]`}>💸</span>
            <div className="flex flex-col gap-[5px] leading-none">
              <span className={`${proofLabel} text-[rgba(244,241,234,.75)]`}>Rentabilisée</span>
              <span className="font-display text-[12px] leading-[1.15] font-extrabold tracking-[-.03em] sm:text-[15px] sm:leading-none">
                Dès tes 3 premières vidéos
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ProofItem({
  icon,
  label,
  children,
  className = "",
}: {
  icon: string;
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-2.5 px-3 py-3 sm:gap-[14px] sm:px-6 sm:py-4 ${className}`}>
      <span className={`${proofIcon} bg-deep`}>{icon}</span>
      <div className="flex flex-col gap-[5px] leading-none">
        <span className={`${proofLabel} text-muted`}>{label}</span>
        {children}
      </div>
    </div>
  );
}
