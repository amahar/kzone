import { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-foreground">
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_2px,transparent_2px)] [background-size:40px_40px]" />
      <div aria-hidden className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-fun-yellow opacity-60 blur-2xl float" />
      <div aria-hidden className="absolute bottom-0 -left-10 h-44 w-44 rounded-full bg-fun-pink opacity-50 blur-2xl float" style={{ animationDelay: "1s" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {eyebrow && <span className="inline-flex rounded-full bg-white/70 backdrop-blur ring-1 ring-white/60 px-3 py-1 text-xs font-semibold">{eyebrow}</span>}
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold leading-tight text-balance max-w-3xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-foreground/80">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
