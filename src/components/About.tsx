import Image from "next/image";
import { Reveal } from "./Reveal";
import overhead from "@/photos/overhead.jpg";
import { business } from "@/lib/data";

export function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <Reveal className="photo aspect-[4/5] max-h-[640px]">
          <Image src={overhead} alt="Rice and stew served on patterned cloth" placeholder="blur" sizes="(min-width:1024px) 50vw, 100vw" className="h-full w-full object-cover" />
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow">Why people come back</p>
            <h2 className="display mt-3 text-4xl sm:text-6xl">Food that tastes like someone’s mum made it.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-ink-3">
              No powdered shortcuts. Gbegiri from peeled beans, ewedu beaten until it draws, meats
              cooked slow in pepper stew. When the pot is finished, it’s finished.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-ink/10 pt-8">
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-4">Hygiene</dt>
                <dd className="display mt-1 text-2xl text-palm">Very good</dd>
                <dd className="text-xs text-ink-4">Inspected {business.hygiene.inspected}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-4">Open</dt>
                <dd className="display mt-1 text-2xl">7 days</dd>
                <dd className="text-xs text-ink-4">12:00 – 00:00</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-4">Groups</dt>
                <dd className="display mt-1 text-2xl">Up to 20</dd>
                <dd className="text-xs text-ink-4">Catering too</dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
