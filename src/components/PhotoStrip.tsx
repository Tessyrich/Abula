import Image, { type StaticImageData } from "next/image";
import jollofFish from "@/photos/jollof-fish.jpg";
import pot from "@/photos/pot.jpg";
import puffpuff from "@/photos/puffpuff.jpg";
import overhead from "@/photos/overhead.jpg";
import suya from "@/photos/suya.jpg";
import abula from "@/photos/abula.jpg";

const photos: { img: StaticImageData; alt: string; w: string }[] = [
  { img: pot, alt: "A huge pot of jollof rice cooking", w: "w-56 sm:w-72" },
  { img: jollofFish, alt: "Jollof rice with grilled fish and peppers", w: "w-72 sm:w-96" },
  { img: puffpuff, alt: "Fresh puff puff", w: "w-56 sm:w-72" },
  { img: suya, alt: "Grilled goat with flatbread on a red table", w: "w-72 sm:w-96" },
  { img: overhead, alt: "Rice and stew from above on patterned cloth", w: "w-56 sm:w-72" },
  { img: abula, alt: "Ewedu and stew with meat", w: "w-72 sm:w-96" },
];

export function PhotoStrip() {
  const row = [...photos, ...photos];
  return (
    <section aria-label="Photos from the kitchen" className="overflow-hidden py-6">
      <ul className="flex w-max animate-strip gap-4 pl-4 [&:hover]:[animation-play-state:paused]">
        {row.map((p, i) => (
          <li key={i} className={`photo h-64 shrink-0 sm:h-80 ${p.w} ${i % 2 ? "translate-y-4" : ""}`} aria-hidden={i >= photos.length}>
            <Image src={p.img} alt={i < photos.length ? p.alt : ""} placeholder="blur" sizes="400px" className="h-full w-full object-cover" />
          </li>
        ))}
      </ul>
    </section>
  );
}
