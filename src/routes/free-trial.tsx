import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { useState } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/free-trial")({
  head: () => ({ meta: [
    { title: "Free Trial Lesson | K-Zone Taekwondo Manassas, VA" },
    { name: "description", content: "Book your free Taekwondo trial lesson at K-Zone in Manassas, VA. No commitment — just come try a class." },
  ]}),
  component: TrialPage,
});

function TrialPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Free Trial Lesson"
        title="Try a class — on us."
        description="Tell us a little about your child and we'll reach out to schedule a free, no-pressure trial lesson."
      />
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid md:grid-cols-5 gap-10">
        <div className="md:col-span-2 space-y-5">
          <h2 className="font-display text-2xl font-bold">What to expect</h2>
          {[
            "A friendly tour of the dojang",
            "A 30-minute trial class with a certified instructor",
            "A short chat about goals and any questions",
            "Zero pressure — your call after that",
          ].map((i) => (
            <div key={i} className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
              <span className="text-sm">{i}</span>
            </div>
          ))}
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          className="md:col-span-3 rounded-2xl border border-border bg-card p-7 md:p-8 shadow-elegant space-y-5"
        >
          {submitted ? (
            <div className="text-center py-10">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-brand/10 text-brand">
                <CheckCircle2 className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold">Thank you!</h3>
              <p className="mt-2 text-muted-foreground text-sm">We'll be in touch within one business day to schedule your trial lesson.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Parent name" name="parent" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Student name" name="student" />
                <Field label="Student age" name="age" type="number" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Anything we should know?</label>
                <textarea name="notes" rows={4} className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              </div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-sm font-semibold text-brand-foreground shadow-glow hover:-translate-y-0.5 transition-transform">
                Request Free Trial <ArrowRight className="h-4 w-4" />
              </button>
              <p className="text-xs text-muted-foreground text-center">Or call us at <a href="tel:7033300700" className="text-brand font-semibold hover:underline">703-330-0700</a></p>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium mb-2">{label}{required && <span className="text-brand"> *</span>}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
