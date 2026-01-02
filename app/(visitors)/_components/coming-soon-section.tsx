"use client";

import { Rocket } from "lucide-react";

export function ComingSoonSection() {
  return (
    <section className="flex-1 flex items-center border-t border-border/50 bg-background/50">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Animated Icon with Glow */}
          <div
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-purple-500/20 to-blue-500/20 mb-8 shadow-lg shadow-purple-500/20 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 animate-zoom-in animation-delay-1050"
          >
            <Rocket className="w-10 h-10 text-purple-400" />
          </div>

          {/* Animated Heading */}
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 animate-fade-in-down animation-delay-1200">
            Coming Soon
          </h2>

          {/* Animated Description */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-down animation-delay-1350">
            We&apos;re working hard to bring you the best game night tracking
            experience. Stay tuned for updates!
          </p>
        </div>
      </div>
    </section>
  );
}
