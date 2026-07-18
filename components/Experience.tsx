import { experience, focus, sectionLabels } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 border-t border-border px-5 py-24 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-10 text-[11px] uppercase tracking-[0.22em] text-soft-gray">
            {sectionLabels.experience}
          </p>
        </Reveal>

        <ul className="divide-y divide-border border-y border-border">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.years}`} delay={i * 0.05}>
              <li className="grid gap-2 py-6 md:grid-cols-[1.2fr_1fr_0.8fr] md:items-baseline md:gap-8">
                <span className="font-[family-name:var(--font-sans)] text-[18px] font-medium tracking-[-0.02em] text-off-white md:text-[20px]">
                  {item.title}
                </span>
                <span className="text-[14px] text-soft-gray">
                  @ {item.company}
                </span>
                <span className="text-[13px] text-soft-gray md:text-right">
                  {item.years}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1} className="mt-20">
          <p className="mb-8 text-[11px] uppercase tracking-[0.22em] text-soft-gray">
            {sectionLabels.focus}
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {focus.map((item) => (
              <li
                key={item}
                className="font-[family-name:var(--font-sans)] text-[22px] tracking-[-0.03em] text-off-white md:text-[28px]"
              >
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
