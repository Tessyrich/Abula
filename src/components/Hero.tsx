"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown } from "lucide-react";
import hero from "@/photos/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.12]);
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const item = (d: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: d, ease: [0.2, 0.7, 0.2, 1] as const },
  });

  return (
    <section ref={ref} id="top" className="relative isolate h-[100svh] min-h-[600px] overflow-hidden bg-ink text-white">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10 will-change-transform">
        <Image
          src={hero}
          alt="Hands holding a bowl of egusi soup piled with assorted meats"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[50%_40%]"
        />
      </motion.div>
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/30" />

      <motion.div style={{ opacity: fade }} className="mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-14 sm:px-8 sm:pb-20">
        <motion.p {...item(0.1)} className="eyebrow !text-gold">
          Nigerian kitchen · Woolwich High Street
        </motion.p>
        <motion.h1 {...item(0.2)} className="display mt-4 max-w-4xl text-[clamp(3rem,9vw,7.5rem)]">
          Proper abula.
          <br />
          Made fresh daily.
        </motion.h1>
        <motion.p {...item(0.35)} className="mt-6 max-w-lg text-lg text-white/85 sm:text-xl">
          Amala, gbegiri and ewedu the Ibadan way. Assorted meats, pepper soup, suya.
          Open every day, noon till midnight.
        </motion.p>
        <motion.div {...item(0.5)} className="mt-8 flex flex-wrap gap-3">
          <a href="#reserve" className="btn btn-primary">Book a table</a>
          <a href="#menu" className="btn btn-outline-light">
            See the menu <ArrowDown className="size-4" aria-hidden />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
