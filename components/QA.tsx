import { qa, sectionLabels } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function QA() {
  return (
    <section id="qa" className="scroll-mt-20 border-t border-border px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-12 text-[11px] uppercase tracking-[0.22em] text-soft-gray">
            {sectionLabels.qa}
          </p>
        </Reveal>

        <ul className="space-y-0">
          {qa.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <li className="border-t border-border py-10 last:border-b">
                <h3 className="font-[family-name:var(--font-sans)] max-w-2xl text-[20px] font-medium tracking-[-0.02em] text-off-white md:text-[24px]">
                  {item.q}
                </h3>
                <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-soft-gray md:text-[16px]">
                  {item.a}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
