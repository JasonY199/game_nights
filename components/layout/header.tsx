import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 backdrop-blur-lg bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
          Game Nights
        </Link>

        {/* Login Button */}
        <Button
          variant="outline"
          className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/5"
          asChild
        >
          <Link href="/login">Login</Link>
        </Button>
      </div>
    </header>
  );
}
