import type { Experience as ExperienceItem } from "@/types";
import { motion } from "motion/react";

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
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500 mb-3">
            Experience
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
            Where I have worked
          </h2>
        </motion.div>
        <div className="mt-12 max-w-2xl space-y-0">
          {experienceList.map((exp, i) => (
            <motion.div
              key={`${exp.company}-${exp.title}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pl-10 pb-8 last:pb-0"
            >
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
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-display text-base font-semibold text-zinc-200 light:text-zinc-800">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-zinc-400 light:text-zinc-500">{exp.company}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-xs text-zinc-500">{exp.period}</p>
                    <p className="font-mono text-xs text-zinc-600 light:text-zinc-400">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
