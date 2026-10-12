import { cacheLife } from "next/cache";
import { business } from "@/lib/data";

export async function Footer() {
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-ink/10 bg-cream-2">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 text-sm text-ink-3 sm:px-8 md:flex-row md:items-center md:justify-between">
        <p className="display text-2xl text-ink">Abula Zone Africa</p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
          <a href="#menu" className="hover:text-ink">Menu</a>
          <a href="#reserve" className="hover:text-ink">Book</a>
          <a href="#visit" className="hover:text-ink">Find us</a>
          <a href={business.instagramUrl} target="_blank" rel="noopener" className="hover:text-ink">Instagram</a>
        </nav>
        <p className="text-xs text-ink-4">© {year} Abula Zone Africa Ltd · {business.address.street}, {business.address.postcode}</p>
      </div>
    </footer>
  );
}
