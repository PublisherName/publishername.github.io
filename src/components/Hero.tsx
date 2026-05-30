import { HeroPattern } from "@/components/HeroPattern";
import { useTypingEffect } from "@/hooks/useTypingEffect";

export function Hero() {
  const typedText = useTypingEffect();

  return (
    <section id="hero" className="min-h-dvh flex items-center pt-24 md:pt-0 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full px-6 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-5 pt-8 lg:pt-0 relative z-10">
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400 mb-4 tabular-nums">
            Full-stack developer
          </p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter leading-none text-zinc-100 light:text-zinc-900">
            Subash
            <br />
            Ghimire
          </h1>
          <div className="mt-4">
            <p className="text-lg sm:text-xl text-zinc-400 light:text-zinc-600 font-display">
              <span className="text-emerald-400 typing-cursor" id="typing-text">
                {typedText}
              </span>
            </p>
          </div>
          <p className="mt-4 max-w-md text-zinc-500 light:text-zinc-600 leading-relaxed text-sm">
            Building products that matter, from payments to pixels.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/subash_ghimire_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-zinc-950 font-medium text-sm rounded-lg hover:bg-emerald-400 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              View Resume
              <i className="ph ph-arrow-up-right text-sm" />
            </a>
            <a
              href="mailto:info@subashghimire.info.np"
              className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 light:border-zinc-300 text-zinc-300 light:text-zinc-700 font-medium text-sm rounded-lg hover:border-zinc-500 light:hover:border-zinc-400 hover:text-zinc-100 light:hover:text-zinc-900 transition-all hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Get in Touch
            </a>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/publishername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 light:text-zinc-500 hover:text-zinc-300 light:hover:text-zinc-700 transition-colors"
              aria-label="GitHub profile"
            >
              <i className="ph ph-github-logo text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/publishername/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 light:text-zinc-500 hover:text-zinc-300 light:hover:text-zinc-700 transition-colors"
              aria-label="LinkedIn profile"
            >
              <i className="ph ph-linkedin-logo text-xl" />
            </a>
            <a
              href="mailto:info@subashghimire.info.np"
              className="text-zinc-500 light:text-zinc-500 hover:text-zinc-300 light:hover:text-zinc-700 transition-colors"
              aria-label="Send email"
            >
              <i className="ph ph-envelope text-xl" />
            </a>
          </div>
        </div>
        <div className="lg:col-span-7 hidden lg:flex items-center justify-center relative">
          <div className="relative w-full max-w-lg mx-auto aspect-square">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-emerald-500/5 to-transparent light:from-emerald-400/20 light:via-emerald-400/10 rounded-full" />
            <div className="w-full h-full text-emerald-400/25 light:text-emerald-600">
              <HeroPattern />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
