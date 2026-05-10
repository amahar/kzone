import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Star, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({ meta: [
    { title: "Reviews | K-Zone Taekwondo Manassas, VA" },
    { name: "description", content: "What parents and students say about K-Zone Taekwondo in Manassas, VA." },
  ]}),
  component: ReviewsPage,
});

const reviews = [
  { name: "Jessica M.", role: "Parent of two", text: "My kids have grown so much in confidence and discipline. The instructors truly care — it feels like family." },
  { name: "David K.", role: "Adult student", text: "Top-tier instruction in a welcoming, no-ego environment. I look forward to every class." },
  { name: "Priya S.", role: "Parent", text: "The summer camp was incredible — my son still talks about it months later. Highly recommend." },
  { name: "Marcus T.", role: "Parent", text: "After-school care is a lifesaver. He gets homework done, eats a snack, trains, and comes home happy." },
  { name: "Linda R.", role: "Parent", text: "Master is patient and structured. Our daughter went from shy to confident in just a few months." },
  { name: "Anthony B.", role: "Teen student", text: "Best decision I've made. The training is real and the people are great." },
];

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reviews"
        title="Loved by families across Manassas."
        description="Read what students and parents have to say about training at K-Zone Taekwondo."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:shadow-elegant flex flex-col">
              <div className="flex gap-1 text-brand">
                {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed flex-1">"{r.text}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-semibold">{r.name}</div>
                <div className="text-muted-foreground text-xs">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-14 text-center">
          <Link to="/free-trial" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-glow">
            Try a class for yourself <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
