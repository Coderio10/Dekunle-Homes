"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Button from "./Button";
import Counter from "./Counter";
import { STATS } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="relative bg-navy overflow-hidden">
      <div className="relative h-[75svh] md:h-[92svh] min-h-[460px] max-h-[860px]">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=80&auto=format"
          alt="Construction engineer supervising an active building site"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/55 to-navy/25" />

        <div className="relative z-10 h-full max-w-container mx-auto px-6 md:px-8 flex flex-col justify-end pb-10 md:pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-white text-[38px] sm:text-[48px] md:text-[64px] font-bold leading-[1.05] max-w-3xl"
          >
            Engineering better communities.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
            className="text-white/80 text-[17px] md:text-[19px] leading-[1.6] max-w-lg mt-5"
          >
            Construction, real estate and property management, led by
            engineers, not salespeople.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="flex flex-wrap gap-4 mt-9"
          >
            <Button href="/projects" variant="primary">
              Explore Projects
            </Button>
            <Button href="/contact" variant="outline-light">
              Partner With Us
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        className="relative z-10 max-w-container mx-auto px-6 md:px-8"
      >
        <div className="bg-white rounded-3xl shadow-card-hover -mt-12 md:-mt-14 mb-16 md:mb-20 px-6 md:px-10 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center md:text-left">
              <b className="block font-display text-[28px] md:text-[34px] text-navy font-bold">
                <Counter target={s.value} suffix={s.suffix} />
              </b>
              <span className="block text-[13px] text-slate2 mt-1.5 leading-[1.4]">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
