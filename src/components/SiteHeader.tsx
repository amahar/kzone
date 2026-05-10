import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/schedule", label: "Schedule" },
  { to: "/camps", label: "Seasonal Camps" },
  { to: "/after-school", label: "After School" },
  { to: "/events", label: "Events" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-gradient text-brand-foreground font-display font-bold shadow-glow transition-transform group-hover:scale-105">
            K
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            K-Zone <span className="text-brand">Taekwondo</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-foreground bg-secondary" }}
              inactiveProps={{ className: "text-muted-foreground" }}
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors hover:text-foreground hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/free-trial"
            className="inline-flex items-center rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Free Trial Lesson
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 rounded-md hover:bg-secondary"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background reveal">
          <nav className="flex flex-col px-4 py-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-foreground bg-secondary" }}
                inactiveProps={{ className: "text-muted-foreground" }}
                className="px-3 py-3 rounded-md text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/free-trial"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-brand-gradient px-5 py-3 text-sm font-semibold text-brand-foreground shadow-glow"
            >
              Free Trial Lesson
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
