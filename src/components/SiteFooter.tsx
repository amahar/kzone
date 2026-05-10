import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-ink text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-brand-gradient font-display font-bold">K</span>
            <span className="font-display text-lg font-bold">K-Zone Taekwondo</span>
          </div>
          <p className="mt-4 max-w-md text-sm text-primary-foreground/70">
            A safe and educational place where kids build discipline, confidence, and lifelong habits through traditional Taekwondo.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-primary-foreground/60">
            <span className="rounded-full border border-primary-foreground/20 px-3 py-1">Kukkiwon Certified</span>
            <span className="rounded-full border border-primary-foreground/20 px-3 py-1">World Taekwondo</span>
            <span className="rounded-full border border-primary-foreground/20 px-3 py-1">USA Taekwondo</span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Programs</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/schedule" className="hover:text-brand transition-colors">Class Schedule</Link></li>
            <li><Link to="/camps" className="hover:text-brand transition-colors">Seasonal Camps</Link></li>
            <li><Link to="/after-school" className="hover:text-brand transition-colors">After School Care</Link></li>
            <li><Link to="/events" className="hover:text-brand transition-colors">Events</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-sm">Visit Us</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 text-brand shrink-0" />10165 Hastings Drive, Manassas, VA 20110</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-brand shrink-0" /><a href="tel:7033300700" className="hover:text-brand">703-330-0700</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-brand shrink-0" /><a href="mailto:kzonetkd@gmail.com" className="hover:text-brand">kzonetkd@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-primary-foreground/50 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} K-Zone Taekwondo. All rights reserved.</span>
          <span>Manassas, Virginia</span>
        </div>
      </div>
    </footer>
  );
}
