import { person } from "@/lib/content";
import { MAIN_SITE_URL } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] text-soft-gray">
          © {year} {person.firstName} {person.lastName}. Onion Development.
        </p>
        <a
          href={MAIN_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[13px] text-soft-gray underline-offset-4 transition-colors hover:text-off-white hover:underline"
        >
          oniondevelopment.com.tr
        </a>
      </div>
    </footer>
  );
}
