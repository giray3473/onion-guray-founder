import { sectionLabels, team } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Team() {
  return (
    <section id="team" className="scroll-mt-20 border-t border-border px-5 py-24 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-soft-gray">
            {sectionLabels.team}
          </p>
          <h2 className="headline mb-12 max-w-[14ch] text-[clamp(2rem,5vw,3.25rem)] text-off-white">
            Onion Development ekibi
          </h2>
        </Reveal>

        <ul className="divide-y divide-border border-y border-border">
          {team.map((member, i) => {
            const inner = (
              <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <span className="font-[family-name:var(--font-sans)] text-[20px] font-medium tracking-[-0.02em] text-off-white md:text-[24px]">
                  {member.name}
                </span>
                <span className="text-[14px] text-soft-gray">{member.role}</span>
              </div>
            );

            return (
              <Reveal key={member.name} delay={i * 0.06}>
                <li>
                  {member.href ? (
                    <a
                      href={member.href}
                      className="block transition-opacity hover:opacity-70"
                      target={member.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        member.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {inner}
                    </a>
                  ) : (
                    inner
                  )}
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
