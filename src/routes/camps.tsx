import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Sun, Snowflake, Flower2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/camps")({
  head: () => ({ meta: [
    { title: "Seasonal Camps | K-Zone Taekwondo Manassas, VA" },
    { name: "description", content: "Summer, winter, and spring break Taekwondo camps in Manassas, VA. Daily training, games, field trips, and character building." },
  ]}),
  component: CampsPage,
});

const camps = [
  { icon: Sun, name: "Summer Camp", when: "June – August", desc: "9 weeks of full-day fun. Taekwondo, swim trips, parks, crafts, and weekly themes." },
  { icon: Flower2, name: "Spring Break Camp", when: "April", desc: "A full week of training, field trips, and character-building activities." },
  { icon: Snowflake, name: "Winter Break Camp", when: "December – January", desc: "Beat the cold with active days, indoor games, and Taekwondo training." },
];

function CampsPage() {
  return (
    <>
      <PageHero
        eyebrow="Seasonal Camps"
        title="Active days. Lifelong friendships."
        description="K-Zone seasonal camps keep kids moving, learning, and having a great time when school's out."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {camps.map((c) => (
            <div key={c.name} className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient text-brand-foreground shadow-glow">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">{c.name}</h3>
              <p className="text-xs font-semibold text-brand uppercase tracking-wider mt-1">{c.when}</p>
              <p className="mt-3 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl font-bold">What a camp day looks like</h2>
            <p className="mt-3 text-muted-foreground">Structured but fun — a balance of physical activity, learning, and creativity.</p>
            <ol className="mt-6 space-y-4">
              {[
                ["8:00 AM", "Drop-off & morning games"],
                ["10:00 AM", "Taekwondo training session"],
                ["12:00 PM", "Lunch & quiet time"],
                ["1:30 PM", "Field trip or themed activity"],
                ["4:00 PM", "Crafts, snacks & free play"],
                ["6:00 PM", "Pickup"],
              ].map(([time, label]) => (
                <li key={time} className="flex gap-4">
                  <span className="font-display font-bold text-brand w-20 shrink-0">{time}</span>
                  <span className="text-sm">{label}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-2xl bg-surface border border-border p-8">
            <h3 className="font-display text-xl font-bold">Reserve your spot</h3>
            <p className="mt-2 text-sm text-muted-foreground">Camps fill up quickly. Contact us for current dates, pricing, and registration.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-glow">
              Get camp details <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
