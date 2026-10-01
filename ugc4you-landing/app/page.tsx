import { Hero } from "@/components/Hero";
import { Gains, Logos, Methode, Probleme, Reel } from "@/components/Sections1";
import { Programme } from "@/components/Programme";
import { Calculateur } from "@/components/Calculateur";
import { Eleves } from "@/components/Eleves";
import { ChatBubble, Footer, Formateur, Prix, Temoignages } from "@/components/Sections2";
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
      <Formateur />
      <CaptureEmail />
      <StickyBar />
      <ChatBubble />
      <Footer />
    </div>
  );
}
