import { HeroSection } from "./_components/hero-section";
import { ComingSoonSection } from "./_components/coming-soon-section";
import { LogoutToast } from "./_components/logout-toast";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <LogoutToast />
      <HeroSection />
      <ComingSoonSection />
    </main>
  );
}
