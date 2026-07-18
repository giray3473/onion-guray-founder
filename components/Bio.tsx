import { person } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export function Bio() {
  const initials = `${person.firstName[0] ?? ""}${person.lastName[0] ?? ""}`;

  return (
    <section id="about" className="scroll-mt-20 border-t border-border px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-20">
        <Reveal>
          <div className="flex flex-col gap-6">
            {person.avatarEnabled ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={person.avatarSrc}
                alt={`${person.firstName} ${person.lastName}`}
                className="aspect-[4/5] w-full max-w-xs object-cover"
              />
            ) : (
              <div
                className="flex aspect-[4/5] w-full max-w-xs items-end border border-border bg-black p-6"
                aria-hidden
              >
                <span className="headline text-[4rem] text-off-white/90">
                  {initials}
                </span>
              </div>
            )}
            <p className="text-[11px] uppercase tracking-[0.2em] text-soft-gray">
              Hakkında
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="space-y-6">
            {person.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="max-w-xl text-[17px] leading-[1.7] text-off-white/90 md:text-[18px]"
              >
                {paragraph}
              </p>
            ))}

            <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-4">
              {person.socials
                .filter((s) => s.href && s.href !== "#")
                .map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-soft-gray underline-offset-4 transition-colors hover:text-off-white hover:underline"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              {person.socials.every((s) => !s.href || s.href === "#") && (
                <li className="text-[13px] text-soft-gray">
                  Sosyal linkleri <code className="text-off-white/70">lib/content.ts</code>{" "}
                  içinde güncelle.
                </li>
              )}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
