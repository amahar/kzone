import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, ShieldCheck, Sparkles, Users, Star, Calendar, Sun, Backpack } from "lucide-react";
import heroImg from "@/assets/hero-kick.jpg";
import kidsImg from "@/assets/kids-class.jpg";
import instructorImg from "@/assets/instructor.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "K-Zone Taekwondo | Manassas, VA — Confidence, Discipline, Strength" },
      { name: "description", content: "Kukkiwon-certified Taekwondo for kids and families in Manassas, VA. Build confidence, focus, and strength. Book a free trial lesson." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero-gradient text-foreground">
        <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_2px,transparent_2px)] [background-size:40px_40px]" />
        <div aria-hidden className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-fun-yellow opacity-70 blur-2xl float" />
        <div aria-hidden className="absolute top-1/3 -right-12 h-48 w-48 rounded-full bg-fun-pink opacity-60 blur-2xl float" style={{ animationDelay: "1s" }} />
        <div aria-hidden className="absolute bottom-10 left-1/3 h-32 w-32 rounded-full bg-fun-mint opacity-70 blur-2xl float" style={{ animationDelay: "2s" }} />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur px-3 py-1 text-xs font-semibold ring-1 ring-white/60 text-foreground">
              <Sparkles className="h-3.5 w-3.5 text-brand" /> Manassas, Virginia
            </span>
            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-balance text-foreground">
              Kick, Learn,<br />
              <span className="bg-brand-gradient bg-clip-text text-transparent">Have a Blast!</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-foreground/80">
              A bright, friendly dojang where kids build confidence, make friends, and grow into focused, respectful little leaders — through traditional Taekwondo and tons of fun.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/free-trial"
                className="group inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-bold text-brand-foreground shadow-glow transition-transform hover:-translate-y-0.5"
              >
                Claim Your Free Trial
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/schedule"
                className="inline-flex items-center rounded-full border-2 border-foreground/15 bg-white/70 backdrop-blur px-6 py-3 text-sm font-bold text-foreground hover:bg-white transition-colors"
              >
                View Schedule
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "20+", l: "Years teaching" },
                { n: "500+", l: "Students trained" },
                { n: "5★", l: "Parent reviews" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-2xl font-bold text-foreground">{s.n}</div>
                  <div className="text-xs text-foreground/60">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative fade-up" style={{ animationDelay: "150ms" }}>
            <div className="absolute -inset-4 bg-fun-gradient opacity-50 blur-3xl rounded-full" />
            <img
              src={heroImg}
              alt="Young Taekwondo student performing a high side kick"
              width={1536}
              height={1024}
              className="relative rounded-3xl shadow-elegant ring-4 ring-white/70 object-cover w-full aspect-[4/3]"
            />
            <div aria-hidden className="absolute -top-4 -right-4 h-16 w-16 rounded-2xl bg-fun-yellow shadow-glow wiggle grid place-items-center text-2xl">⭐</div>
            <div aria-hidden className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full bg-fun-mint shadow-elegant bounce-soft grid place-items-center text-2xl">🥋</div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Officially affiliated with:</span>
          <span>Kukkiwon — World Taekwondo HQ</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>World Taekwondo Federation</span>
          <span className="hidden sm:inline text-border">•</span>
          <span>USA Taekwondo</span>
        </div>
      </section>

      {/* WHY US */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Why families choose us</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">More than martial arts — a foundation for life.</h2>
          <p className="mt-4 text-muted-foreground">
            Our curriculum blends traditional Taekwondo with modern teaching to grow both skill and character.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, t: "Safe & Structured", d: "A clean, supportive dojang where every student feels welcome and learns at their own pace.", color: "bg-fun-mint" },
            { icon: Award, t: "Certified Instruction", d: "Kukkiwon-certified Black Belt instructors with decades of combined teaching experience.", color: "bg-fun-yellow" },
            { icon: Users, t: "Family Community", d: "Programs for ages 4 through adult — siblings, parents, and friends all train together.", color: "bg-fun-pink" },
          ].map((f) => (
            <div
              key={t(f.t)}
              className="group relative rounded-3xl border-2 border-border bg-card p-7 hover-pop hover:shadow-elegant"
            >
              <div className={`grid h-14 w-14 place-items-center rounded-2xl ${f.color} text-foreground shadow-elegant`}>
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display font-bold text-xl">{f.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-surface py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand">Programs</span>
              <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold">Programs for every age and goal.</h2>
            </div>
            <Link to="/schedule" className="text-sm font-semibold text-brand hover:underline underline-offset-4 inline-flex items-center gap-1">
              See full schedule <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Calendar, t: "Taekwondo Classes", d: "Group classes by age and rank — focus, fitness, and forms.", to: "/schedule", color: "bg-fun-mint" },
              { icon: Sun, t: "Seasonal Camps", d: "Summer, winter, and spring break camps packed with fun.", to: "/camps", color: "bg-fun-yellow" },
              { icon: Backpack, t: "After-School Care", d: "Pickup, homework help, and Taekwondo training in one.", to: "/after-school", color: "bg-fun-purple" },
            ].map((p) => (
              <Link
                key={p.t}
                to={p.to}
                className="group rounded-3xl bg-card border-2 border-border p-7 hover-pop hover:shadow-elegant"
              >
                <div className={`grid h-14 w-14 place-items-center rounded-2xl ${p.color} shadow-elegant`}>
                  <p.icon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="mt-5 font-display font-bold text-xl">{p.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MASTER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <img
          src={instructorImg}
          alt="K-Zone Taekwondo master training a student"
          loading="lazy"
          width={1280}
          height={896}
          className="rounded-3xl shadow-elegant aspect-[4/3] object-cover"
        />
        <div>
          <span className="text-xs font-semibold uppercase tracking-wider text-brand">Meet your master</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-balance">
            Traditional values. Modern teaching.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Master instruction rooted in respect and authenticity — focused on bringing out the best in every student. From their first stripe to their black belt, we walk alongside families every step of the way.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Kukkiwon-certified Black Belt instruction",
              "Age-appropriate curriculum from ages 4+",
              "Character-first teaching: respect, focus, perseverance",
            ].map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-brand/10 text-brand">✓</span>
                <span>{i}</span>
              </li>
            ))}
          </ul>
          <Link to="/free-trial" className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background hover:opacity-90 transition">
            Schedule a free trial <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-fun-gradient py-20 md:py-28 relative overflow-hidden">
        <div aria-hidden className="absolute top-10 left-10 text-6xl wiggle">🥋</div>
        <div aria-hidden className="absolute bottom-10 right-10 text-6xl wiggle" style={{ animationDelay: "1s" }}>⭐</div>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="flex justify-center gap-1 text-brand">
            {[...Array(5)].map((_, i) => (<Star key={i} className="h-6 w-6 fill-current" />))}
          </div>
          <blockquote className="mt-6 font-display text-2xl md:text-3xl font-bold leading-snug text-balance text-foreground">
            "My kids have grown so much in confidence and discipline since starting at K-Zone. The instructors truly care — it feels like family."
          </blockquote>
          <div className="mt-6 text-sm font-semibold text-foreground/70">— Parent of two students, Manassas</div>
          <div className="mt-8">
            <Link to="/reviews" className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-bold text-background hover:opacity-90 transition">
              Read more reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-hero-gradient p-10 md:p-16 text-foreground shadow-elegant ring-2 ring-white/60">
          <div aria-hidden className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fun-yellow opacity-60 blur-3xl float" />
          <div aria-hidden className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-fun-pink opacity-50 blur-3xl float" style={{ animationDelay: "1.5s" }} />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-balance">Start with a free trial — no commitment.</h2>
              <p className="mt-3 text-foreground/80">Come visit, meet the team, and try a class. Find out why families love training with us.</p>
            </div>
            <div className="md:justify-self-end">
              <img src={kidsImg} alt="Happy K-Zone Taekwondo students" loading="lazy" width={1280} height={896} className="hidden md:block rounded-2xl aspect-[4/3] object-cover w-80 shadow-elegant ring-4 ring-white/70" />
              <Link to="/free-trial" className="mt-6 md:mt-4 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-7 py-3.5 text-sm font-bold text-brand-foreground shadow-glow hover:-translate-y-0.5 transition-transform">
                Book Free Trial <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function t(s: string) { return s; }
