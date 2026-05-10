import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Calendar, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({ meta: [
    { title: "Events | K-Zone Taekwondo Manassas, VA" },
    { name: "description", content: "Belt tests, tournaments, demos, and family events at K-Zone Taekwondo in Manassas, VA." },
  ]}),
  component: EventsPage,
});

const events = [
  { date: "Coming soon", title: "Belt Promotion Test", desc: "Quarterly testing — students demonstrate forms, technique, and breaking." },
  { date: "Coming soon", title: "In-House Tournament", desc: "Friendly sparring and forms competition for all rank levels." },
  { date: "Coming soon", title: "Parents' Night Demo", desc: "A showcase of student progress and a Q&A with your master." },
  { date: "Coming soon", title: "Community Demo Team", desc: "Our team performs at schools and local events around Manassas." },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="More than classes — a community."
        description="Belt tests, tournaments, demos, and family events keep the dojang energized year-round."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((e) => (
            <div key={e.title} className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="flex items-center gap-2 text-xs font-semibold text-brand uppercase tracking-wider">
                <Calendar className="h-4 w-4" /> {e.date}
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold">{e.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{e.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:bg-secondary">
            Ask about upcoming dates <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
