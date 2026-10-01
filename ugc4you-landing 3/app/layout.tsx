import type { Metadata, Viewport } from "next";
import "./globals.css";

// Polices chargées exactement comme dans la maquette (même lien Google Fonts, mêmes graisses statiques :
// Unbounded 500/600/800, Space Grotesk 400/500/700). Un « 700 » Unbounded s'affiche donc en 800, comme dans le design.
const fontsHref =
  "https://fonts.googleapis.com/css2?family=Unbounded:wght@500;600;800&family=Space+Grotesk:wght@400;500;700&display=swap";

export const metadata: Metadata = {
  title: "Formation UGC4YOU · Signe ton premier client UGC",
  description:
    "Formation en ligne, 4 semaines, à côté de ton taf. Zéro compétence vidéo demandée : trouve tes marques, signe, filme, encaisse.",
};

export const viewport: Viewport = { themeColor: "#1A1330" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={fontsHref} />
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
