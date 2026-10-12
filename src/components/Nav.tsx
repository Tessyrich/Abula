"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { business } from "@/lib/data";

const links = [
  { href: "#dishes", label: "Food" },
  { href: "#menu", label: "Menu" },
  { href: "#visit", label: "Find us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const dark = !scrolled && !open; // over the hero photo

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 py-3 shadow-[0_1px_0_0_rgba(0,0,0,0.06)] backdrop-blur-md" : "py-5"
      } ${dark ? "text-white" : "text-ink"}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#top" className="display text-xl leading-none sm:text-2xl">
          Abula Zone <span className={dark ? "text-gold" : "text-clay"}>Africa</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-medium opacity-85 transition hover:opacity-100">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href={business.phoneHref} className={`btn !py-3 text-sm ${dark ? "btn-outline-light" : "btn-light"}`}>
            <Phone className="size-4" aria-hidden /> {business.phone}
          </a>
          <a href="#reserve" className="btn btn-primary !py-3 text-sm">Book a table</a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`grid size-11 place-items-center rounded-full border md:hidden ${dark ? "border-white/40" : "border-ink/15"}`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-[68px] bottom-0 z-40 bg-cream px-5 pt-6 text-ink md:hidden">
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="display block border-b border-ink/10 py-5 text-4xl">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3">
            <a href="#reserve" onClick={() => setOpen(false)} className="btn btn-primary">Book a table</a>
            <a href={business.phoneHref} className="btn btn-light"><Phone className="size-4" aria-hidden /> {business.phone}</a>
          </div>
        </div>
      )}
    </header>
  );
}
