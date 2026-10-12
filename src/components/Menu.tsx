import { Flame, Leaf, Star } from "lucide-react";
import { menu, business, type MenuItem } from "@/lib/data";
import { Reveal } from "./Reveal";

function Tag({ t }: { t: NonNullable<MenuItem["tags"]>[number] }) {
  const map = {
    signature: { icon: Star, label: "Signature", cls: "text-gold" },
    spicy: { icon: Flame, label: "Spicy", cls: "text-clay" },
    veg: { icon: Leaf, label: "Veg", cls: "text-palm" },
  } as const;
  const { icon: Icon, label, cls } = map[t];
  return (
    <span className={`inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider ${cls}`} title={label}>
      <Icon className="size-3" aria-hidden /> {label}
    </span>
  );
}

export function Menu() {
  return (
    <section id="menu" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Menu</p>
            <h2 className="display mt-3 text-4xl sm:text-6xl">Pick a swallow, pick a soup, pile on the meat.</h2>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <a href={business.delivery.justEat} target="_blank" rel="noopener" className="btn btn-light !py-3">Just Eat</a>
            <a href={business.delivery.deliveroo} target="_blank" rel="noopener" className="btn btn-light !py-3">Deliveroo</a>
            <a href={business.delivery.uberEats} target="_blank" rel="noopener" className="btn btn-light !py-3">Uber Eats</a>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-x-16 gap-y-14 md:grid-cols-2">
          {menu.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 0.08}>
              <h3 className="display text-2xl sm:text-3xl">{s.title}</h3>
              <p className="mt-1 text-sm text-ink-4">{s.blurb}</p>
              <ul className="mt-5 divide-y divide-ink/8">
                {s.items.map((it) => (
                  <li key={it.name} className="flex items-baseline gap-3 py-3.5">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <span className="font-semibold">{it.name}</span>
                        {it.yoruba && <span className="text-xs text-ink-4">{it.yoruba}</span>}
                        {it.tags?.map((t) => <Tag key={t} t={t} />)}
                      </div>
                      <p className="mt-0.5 text-sm text-ink-3">{it.desc}</p>
                    </div>
                    <span className="shrink-0 font-semibold tabular-nums">{it.price}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
        <p className="mt-10 text-xs text-ink-4">Prices are indicative and include VAT. Allergen information available on request.</p>
      </div>
    </section>
  );
}
