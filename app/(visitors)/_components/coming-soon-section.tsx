import { Rocket } from "lucide-react";

export function ComingSoonSection() {
  return (
    <section className="border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-purple-500/20 to-blue-500/20 mb-8 shadow-lg shadow-purple-500/20">
            <Rocket className="w-10 h-10 text-purple-400" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">Coming Soon</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            We&apos;re working hard to bring you the best game night tracking
            experience. Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
}
