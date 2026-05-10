import { ReactNode } from "react";

export function PageHero({ eyebrow, title, description, children }: { eyebrow?: string; title: string; description?: string; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient text-primary-foreground">
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,white_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        {eyebrow && <span className="inline-flex rounded-full bg-white/10 ring-1 ring-white/20 px-3 py-1 text-xs font-medium">{eyebrow}</span>}
        <h1 className="mt-4 font-display text-4xl md:text-5xl font-extrabold leading-tight text-balance max-w-3xl">{title}</h1>
        {description && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/80">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
