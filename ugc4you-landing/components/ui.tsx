import type { ReactNode } from "react";

/** Logo « UGC4YOU » encadré. */
export function Logo({ size = "md" }: { size?: "sm" | "md" | "bar" }) {
  const box =
    size === "md"
      ? "border-3 px-3 py-[7px] text-[15px] shadow-[4px_4px_0_var(--color-brand)] bg-night sm:px-[14px] sm:py-2 sm:text-[17px] sm:shadow-[5px_5px_0_var(--color-brand)]"
      : size === "sm"
        ? "border-2 px-2.5 py-1.5 text-[14px]"
        : "text-[16px]";
  return (
    <div
      className={`flex items-center border-cream font-display leading-none font-extrabold tracking-[-.04em] text-cream ${box}`}
    >
      <span>UGC</span>
      <span className="text-brand">4</span>
      <span>YOU</span>
    </div>
  );
}

/** Étiquette violette type sticker (au-dessus des titres). */
export function Badge({ emoji, children, dark = false }: { emoji: string; children: ReactNode; dark?: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-3 self-start border-3 border-cream font-display text-[12px] leading-none font-bold tracking-[-.01em] text-cream shadow-[5px_5px_0_var(--color-cream)] ${
        dark ? "bg-night py-2 pr-[14px] pl-3" : "bg-brand py-[7px] pr-3 pl-2.5"
      }`}
    >
      <span className="text-[17px] leading-none">{emoji}</span>
      {children}
    </div>
  );
}

/** Petit sur-titre en capitales. */
export function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`text-[12px] font-bold tracking-[.2em] text-muted uppercase ${className}`}>{children}</div>
  );
}

/** Titre de section (34 px desktop, réduit sur mobile). */
export function H2({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <h2
      id={id}
      className={`m-0 font-display leading-none font-extrabold tracking-[-.04em] text-balance ${className || "text-[28px] lg:text-[34px]"}`}
    >
      {children}
    </h2>
  );
}

/** Vidéo muette en boucle (fond / vignettes 9:16). */
export function LoopVideo({ src, className = "" }: { src: string; className?: string }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
    />
  );
}

/** Téléphone 9:16 : ombre violette décalée, cadre arrondi, encoche, légende en bas. */
export function Phone({
  src,
  placeholder,
  caption,
}: {
  src?: string;
  placeholder: ReactNode;
  caption: ReactNode;
}) {
  return (
    <>
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-brand" />
      <div className="absolute inset-0 overflow-hidden rounded-[22px] border-3 border-cream bg-card">
        {src ? <LoopVideo src={src} /> : placeholder}
        <div className="pointer-events-none absolute top-[14px] left-1/2 h-4 w-[60px] -translate-x-1/2 rounded-[10px] bg-night" />
        {caption}
      </div>
    </>
  );
}
