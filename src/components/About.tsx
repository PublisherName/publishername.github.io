import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="pt-24 pb-28 md:pt-32 md:pb-36">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500 mb-3">
            About
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
            Full-stack products from database to interface
          </h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-5 gap-10 md:gap-16 items-start relative">
          <Reveal delay={100} className="md:col-span-2">
            <div className="relative mx-auto md:mx-0 w-full max-w-[18rem] aspect-[4/5] rounded-2xl overflow-hidden border border-zinc-800 light:border-zinc-200 group">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img
                src="/assets/img/subash_ghimire.jpeg"
                alt="Subash Ghimire, full-stack developer"
                className="w-full h-full object-cover object-[center_18%]"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal delay={200} className="md:col-span-3 space-y-4">
            <p className="text-zinc-400 light:text-zinc-600 leading-relaxed">
              I&apos;m a full-stack software engineer who builds web applications from database to
              interface, using Django and React. My work includes MeroCoffee, a creator-support
              platform, and two published GNOME Shell extensions.
            </p>
            <p className="text-zinc-400 light:text-zinc-600 leading-relaxed">
              I hold a Bachelor in Computer Engineering from Mid West University and currently work
              as a Full Stack Engineer at Thoplo Machine. I care about clean architecture, resilient
              systems, and shipping tools people actually use.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
