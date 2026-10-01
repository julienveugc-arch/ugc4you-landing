import { Hero } from "@/components/Hero";
import { Gains, Logos, Probleme, Reel } from "@/components/Sections1";
import { Methode } from "@/components/Methode";
import { Programme } from "@/components/Programme";
import { Calculateur } from "@/components/Calculateur";
import { Eleves } from "@/components/Eleves";
import { ChatBubble, Footer, Prix, Temoignages } from "@/components/Sections2";
import { Faq } from "@/components/Faq";
import { CaptureEmail, StickyBar } from "@/components/Interactive";

export default function Page() {
  return (
    <div className="relative w-full overflow-clip bg-night">
      <Hero />
      <Logos />
      <Probleme />
      <Gains />
      <Reel />
      <Methode />
      <Programme />
      <Calculateur />
      <Eleves />
      <Temoignages />
      <Faq />
      <Prix />
      <CaptureEmail />
      <StickyBar />
      <ChatBubble />
      <Footer />
    </div>
  );
}
