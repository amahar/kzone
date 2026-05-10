import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/schedule")({
  head: () => ({ meta: [
    { title: "Class Schedule | K-Zone Taekwondo Manassas, VA" },
    { name: "description", content: "Weekly Taekwondo class schedule for Tiny Tigers, Juniors, Teens & Adults at K-Zone Taekwondo in Manassas, VA." },
  ]}),
  component: SchedulePage,
});

const programs = [
  {
    name: "Tiny Tigers",
    age: "Ages 4–6",
    desc: "Playful intro to Taekwondo focused on listening, balance, and basic kicks.",
    days: [
      { d: "Mon / Wed / Fri", t: "4:30 PM – 5:00 PM" },
      { d: "Saturday", t: "10:00 AM – 10:30 AM" },
    ],
  },
  {
    name: "Junior Class",
    age: "Ages 7–12",
    desc: "Structured curriculum: forms, sparring, fitness, and character development.",
    days: [
      { d: "Mon / Wed / Fri", t: "5:00 PM – 6:00 PM" },
      { d: "Tue / Thu", t: "5:30 PM – 6:30 PM" },
      { d: "Saturday", t: "10:30 AM – 11:30 AM" },
    ],
  },
  {
    name: "Teens & Adults",
    age: "Ages 13+",
    desc: "Advanced technique, conditioning, and traditional forms in a focused setting.",
    days: [
      { d: "Mon / Wed / Fri", t: "6:30 PM – 7:30 PM" },
      { d: "Tue / Thu", t: "6:30 PM – 7:30 PM" },
    ],
  },
  {
    name: "Black Belt Club",
    age: "By invitation",
    desc: "Elite training for committed students preparing for advanced ranks.",
    days: [
      { d: "Tue / Thu", t: "7:30 PM – 8:30 PM" },
    ],
  },
];

function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Class Schedule"
        title="Find a class that fits your week."
        description="Classes run Monday through Saturday. Programs are grouped by age and rank so every student is challenged at the right level."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                <span className="text-xs font-semibold text-brand uppercase tracking-wider">{p.age}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 divide-y divide-border border-t border-border">
                {p.days.map((d) => (
                  <li key={d.d + d.t} className="flex justify-between py-3 text-sm">
                    <span className="font-medium">{d.d}</span>
                    <span className="text-muted-foreground">{d.t}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-surface border border-border p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold">Not sure where to start?</h3>
            <p className="text-muted-foreground text-sm mt-1">We'll match your child to the right class — at no cost.</p>
          </div>
          <Link to="/free-trial" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-glow self-start md:self-auto">
            Book a free trial <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
