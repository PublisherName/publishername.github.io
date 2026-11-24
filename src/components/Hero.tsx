import { AnimeAvatar } from "@/components/AnimeAvatar";
import { ApiResponseCard } from "@/components/ApiResponseCard";
import { Stats } from "@/components/Stats";
import type { Stat } from "@/types";
import type { CSSProperties } from "react";

interface HeroProps {
  stats: Stat[];
}

function revealDelay(ms: number) {
  return { "--hero-delay": `${ms}ms` } as CSSProperties;
}

export function Hero({ stats }: HeroProps) {
  return (
    <section
      id="hero"
      className="hero-section min-h-dvh flex items-center pt-28 pb-16 lg:min-h-dvh lg:pb-0 md:pt-0 overflow-hidden"
    >
      <div className="hero-code-grid" aria-hidden="true" />
      <div className="max-w-6xl mx-auto w-full px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="order-first lg:order-first lg:col-span-5 relative z-10">
          <p
            className="hero-reveal font-mono text-xs uppercase tracking-[0.18em] text-emerald-400 mb-4 tabular-nums"
            style={revealDelay(60)}
          >
            <span className="inline-flex items-center gap-2">
              <span className="nav-dot" />
              Full-stack engineer · Open to opportunities
            </span>
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-none text-zinc-100 light:text-zinc-900">
            <span className="hero-reveal block" style={revealDelay(110)}>
              Subash
            </span>{" "}
            <span className="hero-reveal block" style={revealDelay(170)}>
              Ghimire
            </span>
          </h1>
          <div className="mt-4 hero-reveal" style={revealDelay(230)}>
            <p className="text-lg sm:text-xl text-zinc-400 light:text-zinc-600 font-display">
              <span className="text-emerald-400">Python/Django · React · PostgreSQL</span>
            </p>
          </div>
          <p
            className="hero-reveal mt-4 max-w-lg text-zinc-500 light:text-zinc-600 leading-relaxed text-sm"
            style={revealDelay(280)}
          >
            I build web applications from database to interface with Django and React, including
            MeroCoffee and two published GNOME Shell extensions.
          </p>
          <div className="hero-reveal mt-8 flex flex-wrap gap-3" style={revealDelay(330)}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-medium text-sm rounded-lg hover:bg-emerald-400 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              View selected work
              <i className="ph ph-arrow-down-right text-sm" />
            </a>
            <a
              href="/subash_ghimire_cv.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 light:border-zinc-300 text-zinc-300 light:text-zinc-700 font-medium text-sm rounded-lg hover:border-zinc-500 light:hover:border-zinc-400 hover:text-zinc-100 light:hover:text-zinc-900 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Download CV
              <i className="ph ph-download-simple text-sm" />
            </a>
          </div>
          <div className="hero-reveal" style={revealDelay(430)}>
            <Stats stats={stats} />
          </div>
        </div>
        <div className="order-last lg:order-last lg:col-span-7 mt-8 flex items-center justify-center relative lg:mt-0">
          <div className="hero-visual relative w-64 h-72 sm:w-80 sm:h-96 lg:w-full lg:max-w-lg lg:aspect-square">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-emerald-500/5 to-transparent light:from-emerald-400/20 light:via-emerald-400/10 rounded-full" />
            <AnimeAvatar />
            <ApiResponseCard />
          </div>
        </div>
      </div>
    </section>
  );
}
