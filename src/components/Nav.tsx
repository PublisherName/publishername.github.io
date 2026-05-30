import { MoonIcon, SunIcon } from "@/components/ThemeIcons";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

interface NavProps {
  theme: "dark" | "light";
  onToggleTheme: () => void;
}

export function Nav({ theme, onToggleTheme }: NavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useActiveSection();

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setMenuOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 h-16 md:h-18 flex items-center border-b border-zinc-800/50 light:border-zinc-200/50 bg-zinc-950/80 light:bg-white/80 backdrop-blur-md"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto w-full px-6 flex items-center justify-between">
          <a
            href="#hero"
            className="font-display text-lg font-semibold tracking-tight text-zinc-100 light:text-zinc-900 hover:text-emerald-400 transition-colors"
            aria-label="Home"
          >
            SG
          </a>
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm transition-colors rounded-lg hover:bg-zinc-800/50 light:hover:bg-zinc-100/50 ${
                  activeId === link.href.slice(1)
                    ? "text-emerald-400"
                    : "text-zinc-400 light:text-zinc-500 hover:text-zinc-100 light:hover:text-zinc-900"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="w-px h-5 bg-zinc-700 light:bg-zinc-200 mx-2" />
            <a
              href="/subash_ghimire_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-emerald-400 light:text-emerald-600 border border-emerald-500/30 light:border-emerald-600/30 rounded-lg hover:bg-emerald-500/10 light:hover:bg-emerald-600/10 transition-colors"
              aria-label="View resume (opens in new tab)"
            >
              Resume
              <i className="ph ph-arrow-up-right text-xs" />
            </a>
            <button
              type="button"
              onClick={onToggleTheme}
              className="ml-2 relative h-8 w-[52px] shrink-0 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 overflow-hidden"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              role="switch"
              aria-checked={theme === "light"}
            >
              <span
                className={`absolute inset-0 rounded-full transition-colors duration-500 ${
                  theme === "dark" ? "bg-zinc-800" : "bg-gradient-to-r from-amber-200 to-amber-100"
                }`}
              />
              <span
                className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
                  theme === "dark" ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 120%, rgba(52,211,153,0.15), transparent 60%)",
                }}
              />
              {theme === "dark" && (
                <>
                  <span className="absolute top-[7px] left-[9px] w-[2.5px] h-[2.5px] rounded-full bg-zinc-400/60" />
                  <span className="absolute top-[18px] left-[14px] w-[2px] h-[2px] rounded-full bg-zinc-400/40" />
                  <span className="absolute top-[11px] left-[24px] w-[1.5px] h-[1.5px] rounded-full bg-zinc-400/50" />
                  <span className="absolute top-[20px] left-[28px] w-[2px] h-[2px] rounded-full bg-zinc-400/30" />
                  <span className="absolute top-[8px] left-[35px] w-[2px] h-[2px] rounded-full bg-zinc-400/50" />
                </>
              )}
              <span
                className={`absolute top-0.5 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-500 ${
                  theme === "dark"
                    ? "left-0.5 bg-zinc-100 text-zinc-800"
                    : "left-[23px] bg-amber-500 text-white shadow-[0_0_12px_-2px_rgba(245,158,11,0.6)]"
                }`}
              >
                {theme === "dark" ? <MoonIcon /> : <SunIcon />}
              </span>
            </button>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              className="relative h-8 w-[52px] shrink-0 rounded-full transition-all duration-500 focus-visible:outline-none overflow-hidden"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              role="switch"
              aria-checked={theme === "light"}
            >
              <span
                className={`absolute inset-0 rounded-full transition-colors duration-500 ${
                  theme === "dark" ? "bg-zinc-800" : "bg-gradient-to-r from-amber-200 to-amber-100"
                }`}
              />
              <span
                className={`absolute inset-0 rounded-full transition-opacity duration-500 ${
                  theme === "dark" ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 120%, rgba(52,211,153,0.15), transparent 60%)",
                }}
              />
              {theme === "dark" && (
                <>
                  <span className="absolute top-[7px] left-[9px] w-[2.5px] h-[2.5px] rounded-full bg-zinc-400/60" />
                  <span className="absolute top-[18px] left-[14px] w-[2px] h-[2px] rounded-full bg-zinc-400/40" />
                  <span className="absolute top-[11px] left-[24px] w-[1.5px] h-[1.5px] rounded-full bg-zinc-400/50" />
                  <span className="absolute top-[20px] left-[28px] w-[2px] h-[2px] rounded-full bg-zinc-400/30" />
                  <span className="absolute top-[8px] left-[35px] w-[2px] h-[2px] rounded-full bg-zinc-400/50" />
                </>
              )}
              <span
                className={`absolute top-0.5 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-500 ${
                  theme === "dark"
                    ? "left-0.5 bg-zinc-100 text-zinc-800"
                    : "left-[23px] bg-amber-500 text-white shadow-[0_0_12px_-2px_rgba(245,158,11,0.6)]"
                }`}
              >
                {theme === "dark" ? <MoonIcon /> : <SunIcon />}
              </span>
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="p-2 text-zinc-400 hover:text-zinc-100 transition-colors rounded-lg"
              aria-label="Open menu"
            >
              <i className="ph ph-list text-xl" />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-zinc-950/98 light:bg-white/98 backdrop-blur-lg flex flex-col items-center justify-center gap-6"
          aria-label="Navigation menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMenuOpen(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") setMenuOpen(false);
          }}
        >
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 p-2 text-zinc-400 light:text-zinc-500 hover:text-zinc-100 light:hover:text-zinc-900 transition-colors"
            aria-label="Close menu"
          >
            <i className="ph ph-x text-2xl" />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-display text-zinc-400 light:text-zinc-500 hover:text-zinc-100 light:hover:text-zinc-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4">
            <a
              href="/subash_ghimire_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-6 py-3 text-sm font-medium text-emerald-400 light:text-emerald-600 border border-emerald-500/30 light:border-emerald-600/30 rounded-lg hover:bg-emerald-500/10 light:hover:bg-emerald-600/10 transition-colors"
            >
              Resume
              <i className="ph ph-arrow-up-right text-xs" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
