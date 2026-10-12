import Image, { type StaticImageData } from "next/image";
import { Reveal } from "./Reveal";
import abula from "@/photos/abula.jpg";
import efo from "@/photos/efo.jpg";
import grill from "@/photos/grill.jpg";
import jollof from "@/photos/jollof.jpg";

type Dish = { img: StaticImageData; alt: string; name: string; yoruba: string; desc: string; price: string };

const dishes: Dish[] = [
  {
    img: abula,
    alt: "Bowl of ewedu and pepper stew with assorted meat, held in two hands",
    name: "Abula",
    yoruba: "Àmàlà · gbẹ̀gìrì · ewédú",
    desc: "The house plate. Hot amala with bean soup, jute leaf soup and pepper stew. Pick your meats.",
    price: "from £13.50",
  },
  {
    img: efo,
    alt: "Efo riro spinach stew next to a smooth mound of pounded yam",
    name: "Efo riro & iyan",
    yoruba: "Ẹ̀fọ́ rírò · iyán",
    desc: "Spinach stew loaded with assorted meat, served with fresh pounded yam.",
    price: "£13.50",
  },
  {
    img: grill,
    alt: "Meat grilling over glowing charcoal",
    name: "Suya & asun",
    yoruba: "Yaji spice · open fire",
    desc: "Thin-cut beef in yaji and smoky peppered goat, straight off the grill.",
    price: "from £12",
  },
  {
    img: jollof,
    alt: "Plate of smoky jollof rice with fried plantain",
    name: "Jollof & dodo",
    yoruba: "Party style",
    desc: "Smoky jollof with sweet fried plantain and your choice of chicken or beef.",
    price: "£12",
  },
];

export function Dishes() {
  return (
    <section id="dishes" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal className="max-w-2xl">
        <p className="eyebrow">What to order</p>
        <h2 className="display mt-3 text-4xl sm:text-6xl">Come for the abula. Stay for everything else.</h2>
      </Reveal>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
        {dishes.map((d, i) => (
          <Reveal as="li" key={d.name} delay={i * 0.08} className="group">
            <div className="photo aspect-[4/5]">
              <Image src={d.img} alt={d.alt} placeholder="blur" sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw" className="h-full w-full object-cover" />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-4">
              <h3 className="display text-2xl">{d.name}</h3>
              <span className="shrink-0 text-sm font-semibold text-clay">{d.price}</span>
            </div>
            <p className="mt-0.5 text-xs font-medium uppercase tracking-wider text-ink-4">{d.yoruba}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-3">{d.desc}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
