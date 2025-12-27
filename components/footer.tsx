export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Game Nights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
