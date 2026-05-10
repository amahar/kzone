import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Bus, BookOpen, Trophy, Apple, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/after-school")({
  head: () => ({ meta: [
    { title: "After School Care | K-Zone Taekwondo Manassas, VA" },
    { name: "description", content: "After-school pickup, homework help, snacks, and Taekwondo training in Manassas, VA. A safe, productive afternoon for your child." },
  ]}),
  component: AfterSchool,
});

function AfterSchool() {
  return (
    <>
      <PageHero
        eyebrow="After School Care"
        title="A productive afternoon, every day."
        description="We pick up your child from school and turn the rest of the day into something they look forward to — homework, snacks, Taekwondo, and play."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Bus, t: "School Pickup", d: "Safe transportation from local elementary schools." },
            { icon: Apple, t: "Snacks Provided", d: "Healthy snacks to refuel after a long school day." },
            { icon: BookOpen, t: "Homework Help", d: "Guided study time with patient, attentive coaches." },
            { icon: Trophy, t: "Taekwondo Training", d: "Daily class included — no extra trip required." },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <b.icon className="h-7 w-7 text-brand" />
              <h3 className="mt-4 font-semibold">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-hero-gradient text-primary-foreground p-10 md:p-14 shadow-elegant relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-gradient opacity-30 blur-3xl" />
          <div className="relative grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="font-display text-3xl font-bold text-balance">Schools we currently pick up from</h2>
              <p className="mt-3 text-primary-foreground/80">We coordinate with several local elementary schools. Don't see yours? Reach out — we may be able to add it.</p>
              <ul className="mt-6 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-primary-foreground/90">
                <li>• Baldwin Elementary</li>
                <li>• Haydon Elementary</li>
                <li>• Round Elementary</li>
                <li>• Weems Elementary</li>
                <li>• Mayfield Intermediate</li>
                <li>• ...and more</li>
              </ul>
            </div>
            <div className="self-center">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-glow">
                Ask about your school <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
