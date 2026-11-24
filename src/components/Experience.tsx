import { Reveal } from "@/components/Reveal";
import type { Experience as ExperienceItem } from "@/types";

interface ExperienceProps {
  experienceList: ExperienceItem[];
}

export function Experience({ experienceList }: ExperienceProps) {
  return (
    <section
      id="experience"
      className="pt-24 pb-28 md:pt-32 md:pb-36 border-t border-zinc-800/50 light:border-zinc-200/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500 mb-3">
            Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
            Where I have worked
          </h2>
        </Reveal>
        <div className="mt-12 max-w-2xl space-y-6">
          {experienceList.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.title}`} delay={i * 120}>
              <div className="relative pl-10">
                <div
                  className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    i === 0
                      ? "border-emerald-500/50 light:border-emerald-400/50 bg-zinc-950 light:bg-zinc-100/80"
                      : "border-zinc-700 light:border-zinc-300 bg-zinc-950 light:bg-zinc-100/80"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      i === 0 ? "bg-emerald-500" : "bg-zinc-500 light:bg-zinc-400"
                    }`}
                  />
                </div>
                {i < experienceList.length - 1 && <div className="timeline-line" />}
                <div className="rounded-2xl bg-zinc-900/40 light:bg-zinc-100/80 p-5 light:shadow-sm light:shadow-zinc-900/5">
                  <div className="flex flex-col gap-3 mb-2 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-semibold text-zinc-200 light:text-zinc-800">
                        {exp.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-zinc-400 light:text-zinc-500">
                        {exp.logo && (
                          <img
                            src={exp.logo}
                            alt={exp.logoAlt ?? exp.company}
                            className="h-6 w-6 rounded-md border border-zinc-700/60 light:border-zinc-300 object-contain"
                          />
                        )}
                        <p className="break-words">{exp.company}</p>
                      </div>
                    </div>
                    <div className="min-w-0 sm:text-right sm:shrink-0">
                      <p className="font-mono text-xs text-zinc-500">{exp.period}</p>
                      {i === 0 && exp.period.includes("Present") && (
                        <span className="experience-present mt-1 inline-flex">Present</span>
                      )}
                      <p className="font-mono text-xs text-zinc-600 light:text-zinc-400 break-words">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {exp.description.map((item) => (
                      <li
                        key={item.slice(0, 40)}
                        className="flex gap-2 text-sm text-zinc-500 light:text-zinc-600 leading-relaxed"
                      >
                        <span className="text-emerald-400 mt-1.5 shrink-0">&ndash;</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
