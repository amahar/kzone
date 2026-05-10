import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Location & Contact | K-Zone Taekwondo Manassas, VA" },
    { name: "description", content: "Visit K-Zone Taekwondo at 10165 Hastings Drive, Manassas, VA 20110. Call 703-330-0700 or email kzonetkd@gmail.com." },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Visit Us"
        title="We'd love to meet you."
        description="Stop by, call, or send us a note — we're happy to answer questions and show you around the dojang."
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-20 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="font-display text-2xl font-bold">Get in touch</h2>
          <ul className="mt-6 space-y-5">
            <li className="flex gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0"><MapPin className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-muted-foreground text-sm">10165 Hastings Drive<br />Manassas, VA 20110</div>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">Phone</div>
                <a href="tel:7033300700" className="text-muted-foreground text-sm hover:text-brand">703-330-0700</a>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">Email</div>
                <a href="mailto:kzonetkd@gmail.com" className="text-muted-foreground text-sm hover:text-brand">kzonetkd@gmail.com</a>
              </div>
            </li>
            <li className="flex gap-4">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0"><Clock className="h-5 w-5" /></div>
              <div>
                <div className="font-semibold">Hours</div>
                <div className="text-muted-foreground text-sm">Mon – Fri: 3:00 PM – 8:30 PM<br />Saturday: 9:00 AM – 12:00 PM<br />Sunday: Closed</div>
              </div>
            </li>
          </ul>
        </div>
        <div className="rounded-2xl overflow-hidden border border-border shadow-elegant min-h-[400px]">
          <iframe
            title="K-Zone Taekwondo location map"
            src="https://www.google.com/maps?q=10165+Hastings+Drive+Manassas+VA+20110&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            className="w-full h-full min-h-[400px] border-0"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
