import { HeroSection } from "./_components/hero-section";
import { ComingSoonSection } from "./_components/coming-soon-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ComingSoonSection />
    </main>
  );
}
