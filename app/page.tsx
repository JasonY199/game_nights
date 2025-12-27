import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dices, Users, Trophy, Rocket } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-purple-500/10 via-transparent to-blue-500/10" />

        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight pb-2">
              Game Nights
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-4">
              Track games, balances, and friendly competition - all in one
              place.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-muted-foreground mb-12">
              <span className="px-3 py-1 rounded-full bg-muted">Private</span>
              <span className="px-3 py-1 rounded-full bg-muted">
                Invite-only
              </span>
              <span className="px-3 py-1 rounded-full bg-muted">
                No real money
              </span>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <Card className="border-purple-500/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 mx-auto">
                    <Dices className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Track Games</CardTitle>
                  <CardDescription>
                    Log every game night and keep a complete history
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-blue-500/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <CardTitle className="text-lg">Manage Balances</CardTitle>
                  <CardDescription>
                    Keep track of who owes what in friendly games
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-purple-500/20">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 mx-auto">
                    <Trophy className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-lg">Compete</CardTitle>
                  <CardDescription>
                    See who&apos;s winning and climbing the leaderboard
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="border-t border-border/50 bg-background/50">
        <div className="container mx-auto px-4 py-20 md:py-28">
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
    </main>
  );
}
