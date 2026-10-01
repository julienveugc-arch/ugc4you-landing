import type { ReactNode } from "react";

/** Zone repliable : transition de hauteur ~250 ms, contenu inerte quand fermé. */
export function Collapse({ open, id, children }: { open: boolean; id?: string; children: ReactNode }) {
  return (
    <div
      id={id}
      role="region"
      className={`grid transition-[grid-template-rows] duration-250 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
    >
      <div className="min-h-0 overflow-hidden" inert={!open}>
        {children}
      </div>
    </div>
  );
}

/** Signe + qui pivote en × quand c'est ouvert. */
export function PlusIcon({ open, light = false, className = "" }: { open: boolean; light?: boolean; className?: string }) {
  return (
    <span
      aria-hidden
      className={`flex-none font-display leading-none font-extrabold transition-transform duration-250 ${light ? "text-cream" : "text-brand"} ${open ? "rotate-45" : ""} ${className}`}
    >
      +
    </span>
  );
}
