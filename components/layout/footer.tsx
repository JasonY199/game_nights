import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center gap-4">
          {/* Footer Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              About
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Contact
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              Update Log
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Game Nights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
