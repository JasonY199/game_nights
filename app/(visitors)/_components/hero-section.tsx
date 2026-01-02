"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dices, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: Dices,
    title: "Track Games",
    description: "Log every game night and keep a complete history",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
  {
    icon: Users,
    title: "Manage Balances",
    description: "Keep track of who owes what in friendly games",
    borderColor: "border-blue-500/20",
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-400",
  },
  {
    icon: Trophy,
    title: "Compete",
    description: "See who's winning and climbing the leaderboard",
    borderColor: "border-purple-500/20",
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-400",
  },
];

export function HeroSection() {
  return (
    <section className="relative flex-1 flex items-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10" />

      <div className="container relative mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Heading */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight pb-2 animate-gradient animate-fade-in-down animation-delay-0">
            Game Nights
          </h1>

          {/* Animated Subtitle */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 animate-fade-in-down animation-delay-200">
            Track games, balances, and friendly competition - all in one place.
          </p>

          {/* Animated Badges */}
          <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-12 animate-fade-in-down animation-delay-400">
            <span className="px-4 py-1.5 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-400/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] duration-300">
              Private
            </span>
            <span className="px-4 py-1.5 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-400/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] duration-300">
              Invite-only
            </span>
            <span className="px-4 py-1.5 rounded-full bg-linear-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm transition-all hover:scale-105 hover:border-purple-400/40 hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] duration-300">
              No real money
            </span>
          </div>

          {/* Feature Cards with Staggered Animations */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const delayClass = index === 0 ? 'animation-delay-600' : index === 1 ? 'animation-delay-750' : 'animation-delay-900';
              return (
                <Card
                  key={feature.title}
                  className={`border-purple-500/20 bg-linear-to-br from-purple-500/5 to-blue-500/5 backdrop-blur-sm hover:scale-105 hover:border-purple-400/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 animate-fade-in-down ${delayClass}`}
                >
                  <CardHeader>
                    <div
                      className={`w-12 h-12 rounded-lg ${feature.bgColor} border ${feature.borderColor} flex items-center justify-center mb-4 mx-auto transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]`}
                    >
                      <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                    </div>
                    <CardTitle className="font-heading text-lg">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
