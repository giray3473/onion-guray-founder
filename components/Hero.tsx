"use client";

import { person } from "@/lib/content";
import { MAIN_SITE_URL } from "@/lib/site";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export function Hero() {
  const preferReduced = useReducedMotion();
  const [canAnimate, setCanAnimate] = useState(false);
  const ease = [0.22, 1, 0.36, 1] as const;

  useEffect(() => {
    setCanAnimate(true);
  }, []);

  const motionOn = canAnimate && !preferReduced;

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-black px-5 pb-16 pt-28 md:px-8 md:pb-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={motionOn ? { opacity: 0, y: 12 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-6 text-[11px] uppercase tracking-[0.22em] text-soft-gray"
        >
          {person.role}
        </motion.p>

        <div className="grid gap-2 md:grid-cols-[1fr_auto] md:items-end md:gap-8">
          <motion.h1
            initial={motionOn ? { opacity: 0, y: 28, scale: 0.98 } : false}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.06, ease }}
            className="headline text-[clamp(3.5rem,14vw,9.5rem)] text-off-white"
          >
            {person.firstName.toUpperCase()}
          </motion.h1>

          <motion.p
            initial={motionOn ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
            className="max-w-sm pb-2 text-[14px] leading-relaxed text-soft-gray md:text-right"
          >
            {person.tagline}
          </motion.p>
        </div>

        <motion.div
          initial={motionOn ? { opacity: 0, y: 20 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="mt-2 flex flex-col gap-6 border-t border-border pt-8 md:mt-4 md:flex-row md:items-end md:justify-between"
        >
          <h2 className="headline text-[clamp(3.5rem,14vw,9.5rem)] text-off-white">
            {person.lastName.toUpperCase()}
          </h2>

          <div className="max-w-sm space-y-5 md:text-right">
            <p className="text-[13px] text-soft-gray">{person.location}</p>
            <p className="text-[14px] leading-relaxed text-soft-gray">
              {person.support}
            </p>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <a
                href="#about"
                className="inline-flex h-10 items-center rounded-[12px] bg-white px-5 text-[13px] font-medium text-black transition-opacity hover:opacity-90"
              >
                Devam et
              </a>
              <a
                href={MAIN_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center rounded-[12px] border border-border px-5 text-[13px] text-off-white transition-colors hover:border-soft-gray"
              >
                Onion Development
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
