import { Phone, Navigation } from "lucide-react";
import { business } from "@/lib/data";
import { Reveal } from "./Reveal";

function Instagram({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function Visit() {
  const a = business.address;
  return (
    <section id="visit" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Find us</p>
          <h2 className="display mt-3 text-4xl sm:text-6xl">Two minutes from Woolwich Arsenal.</h2>
          <address className="mt-6 text-lg not-italic text-ink-3">
            {a.street}, {a.area}
            <br />
            {a.city} {a.postcode}
          </address>
          <p className="mt-4 max-w-md text-ink-3">
            Elizabeth line, DLR, Southeastern and the Thames Clipper all stop at Woolwich. Walk towards
            the river and we’re on the High Street.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={business.mapsUrl} target="_blank" rel="noopener" className="btn btn-dark">
              <Navigation className="size-4" aria-hidden /> Get directions
            </a>
            <a href={business.phoneHref} className="btn btn-light">
              <Phone className="size-4" aria-hidden /> {business.phone}
            </a>
            <a href={business.instagramUrl} target="_blank" rel="noopener" className="btn btn-light">
              <Instagram className="size-4" /> @{business.instagram}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl bg-white p-8 sm:p-10">
          <p className="eyebrow">Opening hours</p>
          <ul className="mt-5 divide-y divide-ink/8">
            {business.hours.map((h) => (
              <li key={h.day} className="flex items-center justify-between py-3">
                <span className="text-ink-3">{h.day}</span>
                <span className="font-semibold tabular-nums">{h.open} – {h.close}</span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm text-ink-4">Kitchen closes 30 minutes before. Last orders for delivery at 23:30.</p>
        </Reveal>
      </div>
    </section>
  );
}
