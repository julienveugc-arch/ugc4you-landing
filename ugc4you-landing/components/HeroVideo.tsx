"use client";

import { useState } from "react";
import { site } from "@/site.config";

/** Vidéo de présentation 16:9 : vignette + bouton lecture, puis lecteur avec contrôles au clic. */
export function HeroVideo() {
  const src = site.media.heroVideo;
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative mt-2 aspect-video w-[calc(100%-14px)] max-w-full self-start sm:self-center lg:w-[min(880px,64vw)]">
      <div className="absolute inset-0 translate-x-[14px] translate-y-[14px] bg-brand" />
      <div className="absolute inset-0 overflow-hidden border-4 border-cream [background:radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(123,63,228,.1),transparent_70%),#140E26]">
        {src && playing ? (
          <video src={src} autoPlay controls playsInline className="absolute inset-0 h-full w-full bg-black object-contain" />
        ) : (
          <button
            type="button"
            onClick={() => src && setPlaying(true)}
            aria-label="Lire la vidéo de présentation"
            className={`absolute inset-0 block h-full w-full ${src ? "cursor-pointer" : "cursor-default"}`}
          >
            {site.media.heroPoster && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={site.media.heroPoster} alt="" className="absolute inset-0 h-full w-full object-cover" />
            )}
            <span className="pointer-events-none absolute top-1/2 left-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[rgba(244,241,234,.94)] shadow-[0_0_0_9px_rgba(123,63,228,.35)] sm:h-[88px] sm:w-[88px] sm:shadow-[0_0_0_12px_rgba(123,63,228,.35)]">
              <span className="ml-1.5 h-0 w-0 border-y-[13px] border-l-[21px] border-y-transparent border-l-night sm:ml-2 sm:border-y-[17px] sm:border-l-[28px]" />
            </span>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-[linear-gradient(transparent,rgba(14,14,14,.95))] px-3 py-2.5 text-left sm:px-[22px] sm:py-[18px]">
              <span className="font-display text-[11px] leading-tight font-bold sm:text-[15px]">
                Comment j&apos;ai signé 60 marques en un an, sans savoir filmer
              </span>
              <span className="flex-none border-2 border-cream px-[9px] py-[5px] text-[10px] font-bold tracking-[.1em] text-cream sm:text-[12px]">
                ▶ 1 MIN
              </span>
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
