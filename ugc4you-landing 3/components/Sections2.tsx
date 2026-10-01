import { installmentPrice, promoPct, site } from "@/site.config";
import { footerLinks, offerFeatures, reviewsA, reviewsB, type Review } from "@/lib/content";
import { Hl } from "./Hl";
import { Badge, H2, Logo } from "./ui";

/* ─────────── Témoignages ─────────── */
function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="flex flex-col gap-4 border-3 border-cream bg-night px-5 py-6 shadow-[8px_8px_0_var(--color-brand)] sm:px-7 sm:py-[26px]">
      <div className="flex gap-[3px]" aria-label="5 étoiles sur 5">
        {Array.from({ length: 5 }, (_, i) => (
          <span key={i} className="flex h-[22px] w-[22px] items-center justify-center bg-ok text-[13px] text-white">
            ★
          </span>
        ))}
      </div>
      <p className="m-0 text-[15px] leading-[1.55] text-pretty">“{r.quote}”</p>
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 flex-none overflow-hidden rounded-full border-2 border-cream bg-deep">
          {r.avatar && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={r.avatar} alt="" className="h-full w-full object-cover" />
          )}
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[15px] font-bold">{r.name}</span>
          <span className="text-[13px] text-muted">{r.meta}</span>
        </div>
        <span className="ml-auto text-[11px] font-bold tracking-[.06em] text-ok uppercase">✓ Vérifié</span>
      </div>
    </div>
  );
}

function ReviewRow({ items, reverse = false }: { items: Review[]; reverse?: boolean }) {
  // Liste répétée 4 fois (2 moitiés identiques) pour une boucle continue même sur grand écran.
  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex w-max gap-6 pt-1 pr-6 pb-3 hover:[animation-play-state:paused] motion-reduce:animate-none ${
          reverse ? "animate-[marqueeRev_55s_linear_infinite]" : "animate-[marquee_50s_linear_infinite]"
        }`}
      >
        {[...items, ...items, ...items, ...items].map((r, i) => (
          <div key={i} aria-hidden={i >= items.length} className="w-[300px] flex-none sm:w-[380px]">
            <ReviewCard r={r} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function Temoignages() {
  return (
    <section className="bg-glow relative flex flex-col gap-10 overflow-hidden border-t border-line py-14 lg:gap-12 lg:py-[72px]">
      <div className="flex flex-col items-start gap-6 px-(--px) lg:flex-row lg:items-end lg:justify-between lg:gap-10">
        <div className="flex max-w-[640px] flex-col gap-6">
          <Badge emoji="💬">Ils l’ont fait</Badge>
          <H2 id="avis">
            Ils ont signé. <Hl>À toi.</Hl>
          </H2>
          <p className="m-0 max-w-[520px] text-[16px] leading-[1.5] text-pretty text-muted">Un taf, un téléphone, jamais filmé. Un mois plus tard.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={site.trustpilotUrl}
            className="inline-flex items-center gap-4 border-3 border-cream bg-night px-5 py-[14px] text-cream no-underline shadow-[6px_6px_0_var(--color-ok)] transition-colors duration-150 hover:bg-cream hover:text-night"
          >
            <span className="flex items-center gap-1.5 text-[16px] font-bold">
              <span className="text-[17px] text-ok">★</span>Trustpilot
            </span>
            <span className="font-display text-[22px] font-extrabold tracking-[-.04em]">4,9</span>
            <span className="text-[14px] opacity-75">128 avis vérifiés →</span>
          </a>
          <a
            href="#prix"
            className="inline-flex border-3 border-cream bg-brand px-8 py-[18px] font-display text-[15px] font-bold text-cream no-underline shadow-[6px_6px_0_var(--color-cream)] transition-colors duration-150 hover:bg-cream hover:text-night"
          >
            Je me lance → {site.priceNow} €
          </a>
        </div>
      </div>
      <div className="relative flex flex-col gap-4">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-10 bg-[linear-gradient(90deg,#140E26,transparent)] sm:w-[120px]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] w-10 bg-[linear-gradient(270deg,#140E26,transparent)] sm:w-[120px]" />
        <ReviewRow items={reviewsA} />
        <ReviewRow items={reviewsB} reverse />
      </div>
    </section>
  );
}

/* ─────────── CTA final / prix ─────────── */
export function Prix() {
  return (
    <section
      id="prix"
      className="relative flex flex-col items-center gap-12 overflow-hidden border-y-4 border-cream bg-brand px-(--px) py-14 text-cream lg:gap-14 lg:py-[72px]"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(26,19,48,.55),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(244,241,234,.12)_1px,transparent_1px)] [background-size:5px_5px] mix-blend-overlay" />
      <div className="relative flex max-w-[1100px] flex-col items-center gap-[26px] text-center">
        <div className="flex justify-center">
          <Badge emoji="🎥" dark>
            La formation UGC4YOU
          </Badge>
        </div>
        <h2 className="m-0 font-display text-[30px] leading-[.98] font-extrabold tracking-[-.05em] text-balance text-cream sm:text-[36px] lg:text-[clamp(36px,3.6vw,54px)]">
          Dans un mois t’as un client. <Hl bg="#1A1330">Ou t’y penses encore.</Hl>
        </h2>
        <p className="m-0 max-w-[600px] text-[17px] leading-[1.5] text-pretty text-cream opacity-92">
          Tu as vu la méthode, les chiffres, les avis. Il reste une décision, et elle prend 2 minutes.
        </p>
      </div>

      <div className="relative mr-2.5 w-[calc(100%-10px)] max-w-[1160px] lg:mr-[18px] lg:w-[calc(100%-18px)] min-[1220px]:mr-0 min-[1220px]:w-full">
        <div className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-cream lg:translate-x-[18px] lg:translate-y-[18px]" />
        <div className="relative grid border-4 border-cream bg-night lg:grid-cols-[1.1fr_1fr]">
          <div className="flex flex-col gap-[22px] border-b-4 border-cream px-5 py-8 sm:px-12 sm:py-11 lg:border-r-4 lg:border-b-0">
            <div className="text-[12px] font-bold tracking-[.16em] text-muted uppercase">Ce que tu as en rejoignant</div>
            {offerFeatures.map((f) => (
              <div key={f} className="flex items-start gap-[14px] text-[16px] leading-[1.4] text-cream">
                <span className="mt-px flex h-6 w-6 flex-none items-center justify-center border-3 border-cream bg-brand text-[14px] font-extrabold text-cream">
                  ✓
                </span>
                <span>{f}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center gap-[22px] bg-deep px-5 py-8 sm:px-12 sm:py-11">
            <div className="inline-flex -rotate-2 items-center gap-2.5 self-start border-3 border-cream bg-ok px-3 py-2 font-display text-[13px] font-extrabold tracking-[-.01em] text-ok-ink shadow-[4px_4px_0_var(--color-cream)]">
              <span className="whitespace-nowrap">−{promoPct} % · offre de lancement</span>
            </div>
            <div className="flex flex-wrap items-baseline gap-4">
              <span className="font-display text-[64px] leading-[.85] font-extrabold tracking-[-.07em] text-cream [text-shadow:8px_8px_0_var(--color-brand)] lg:text-[clamp(56px,5.5vw,84px)]">
                {site.priceNow}
                <span className="text-[.45em]">€</span>
              </span>
              <span className="flex flex-col gap-0.5">
                <span className="font-display text-[22px] font-semibold text-dim line-through">{site.priceOld} €</span>
                <span className="text-[12px] text-muted">jusqu’au {site.closeDate}</span>
              </span>
            </div>
            <div className="text-[15px] leading-[1.5] text-muted">
              Paiement unique · ou {site.installments} × {installmentPrice} €
              <br />
              Remboursée dès ta 4e vidéo vendue.
            </div>
            <a
              href={site.checkoutUrl}
              className="mt-2 mr-2.5 border-4 border-cream bg-brand px-6 py-[18px] text-center font-display text-[15px] font-extrabold tracking-[-.02em] text-cream no-underline shadow-[10px_10px_0_var(--color-cream)] transition-[transform,background-color,color] duration-150 ease-[ease] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-cream hover:text-night sm:text-[16px] lg:mr-0"
            >
              Décrocher mon premier client →
            </a>
            <div className="mt-1.5 flex flex-col gap-2 text-center">
              <div className="text-[14px] text-cream">🛡️ 14 jours satisfait ou remboursé, sans condition</div>
              <div className="inline-flex items-center gap-2 self-center border-2 border-cream bg-brand px-[14px] py-2 text-[13px] font-bold text-cream sm:text-[14px]">
                <span className="sm:whitespace-nowrap">
                  ⏳ Ferme le {site.closeDate} · {site.seatsLeft} places restantes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Formateur ─────────── */
export function Formateur() {
  return (
    <section className="relative grid items-center gap-12 overflow-hidden border-t border-line bg-night px-(--px) py-14 text-cream lg:grid-cols-[400px_1fr] lg:gap-[72px] lg:py-[72px]">
      <div className="relative ml-[14px] aspect-[400/440] w-[calc(100%-14px)] max-w-[400px] lg:ml-0 lg:h-[440px] lg:w-[400px]">
        <div className="absolute inset-0 -translate-x-[14px] translate-y-[14px] bg-brand" />
        <div className="absolute inset-0 overflow-hidden border-4 border-cream bg-card">
          {site.media.portrait ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={site.media.portrait} alt="Julien, formateur UGC4YOU" className="h-full w-full object-cover" />
          ) : (
            <div className="absolute inset-4 flex items-center justify-center border-2 border-dashed border-line text-[13px] text-dim">
              Portrait à venir
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <Badge emoji="👋">Qui te forme</Badge>
        <H2 className="text-[28px] sm:text-[32px] lg:text-[36px]">C’est moi qui te forme.</H2>
        <p className="m-0 text-[16px] leading-[1.55] text-pretty text-muted">
          J&apos;ai commencé le UGC il y a un an avec mon téléphone, à côté de mon taf. J&apos;ai fait toutes les erreurs possibles les 3
          premiers mois. Après ça s&apos;est enchaîné : 60 marques, top performer Youdji et Fiverr. La formation c&apos;est le chemin sans
          les 3 mois d&apos;erreurs.
        </p>
        <div className="flex flex-wrap gap-3">
          <span className="border-2 border-cream px-[14px] py-2 text-[14px] font-bold">🤝 +60 marques</span>
          <span className="border-2 border-brand px-[14px] py-2 text-[14px] font-bold text-brand">🏆 Top performer Youdji &amp; Fiverr</span>
        </div>
        <div className="mt-2 font-display text-[16px] font-semibold text-brand">— Julien</div>
      </div>
    </section>
  );
}

/* ─────────── Bulle de contact ─────────── */
export function ChatBubble() {
  return (
    <a
      href={site.chatUrl}
      aria-label="Une question ?"
      className="fixed right-3 bottom-3 z-[60] flex items-center gap-3 rounded-full border border-[rgba(244,241,234,.35)] bg-[rgba(123,63,228,.22)] p-2.5 text-cream no-underline shadow-[0_10px_30px_rgba(0,0,0,.35),inset_0_1px_0_rgba(244,241,234,.25)] backdrop-blur-[18px] backdrop-saturate-[1.4] transition-[transform,background-color] duration-200 ease-[ease] hover:-translate-y-0.5 hover:bg-[rgba(123,63,228,.35)] sm:right-7 sm:bottom-7 sm:py-3 sm:pr-5 sm:pl-[14px]"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(244,241,234,.12)] text-[16px] leading-none">
        💬
        <span className="absolute -top-0.5 -right-0.5 h-[11px] w-[11px] rounded-full border-2 border-night bg-ok" />
      </span>
      <span className="hidden font-display text-[14px] font-bold tracking-[-.02em] whitespace-nowrap sm:inline">Une question ?</span>
    </a>
  );
}

/* ─────────── Footer ─────────── */
export function Footer() {
  const link = "text-muted no-underline transition-colors duration-150 hover:text-cream";
  return (
    <footer className="flex flex-col gap-7 border-t border-line px-(--px) pt-10 pb-[120px] text-[14px] text-dim">
      <div className="flex flex-wrap items-center justify-between gap-6">
        <Logo size="sm" />
        <div className="flex flex-wrap gap-x-7 gap-y-3">
          {footerLinks.map((l) => (
            <a key={l.label} href={l.href} className={link}>
              {l.label}
            </a>
          ))}
          <a href={`mailto:${site.contactEmail}`} className={link}>
            {site.contactEmail}
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-6 text-[13px]">
        <span>© 2026 UGC4YOU · Julien V. · Formation en ligne, accès à vie · Paiement sécurisé Stripe</span>
        <span>Les résultats présentés sont ceux du formateur et d’élèves. Ils ne constituent pas une garantie de revenus.</span>
      </div>
    </footer>
  );
}
