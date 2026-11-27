import { Reveal } from "@/components/Reveal";
import type { Education as EducationItem } from "@/types";

function timelineDot(active?: boolean) {
  return active
    ? "border-emerald-500/50 light:border-emerald-400/50 bg-zinc-950 light:bg-zinc-100/80"
    : "border-zinc-700 light:border-zinc-300 bg-zinc-950 light:bg-zinc-100/80";
}

function innerDot(active?: boolean) {
  return active ? "bg-emerald-500" : "bg-zinc-500 light:bg-zinc-400";
}

interface EducationProps {
  educationList: EducationItem[];
}

export function Education({ educationList }: EducationProps) {
  return (
    <section
      id="education"
      className="pt-24 pb-28 md:pt-32 md:pb-36 border-t border-zinc-800/50 light:border-zinc-200/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500 mb-3">
            Education
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
            Academic background
          </h2>
        </Reveal>
        <div className="mt-12 max-w-2xl space-y-0">
          {educationList.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 120}>
              <div className="relative pl-10 pb-8 last:pb-0">
                <div
                  className={`absolute left-0 top-1.5 w-5 h-5 rounded-full border-2 ${timelineDot(edu.active)} flex items-center justify-center`}
                >
                  <div className={`w-2 h-2 rounded-full ${innerDot(edu.active)}`} />
                </div>
                {i < educationList.length - 1 && <div className="timeline-line" />}
                <div className="rounded-2xl bg-zinc-900/40 light:bg-zinc-100/80 p-5 light:shadow-sm light:shadow-zinc-900/5">
                  <div className="flex items-center gap-3 mb-3">
                    <img
                      src={edu.logo}
                      alt={edu.alt}
                      className="h-8 brightness-90 light:brightness-100"
                      loading="lazy"
                    />
                    <span className="font-mono text-xs text-zinc-500 light:text-zinc-500">
                      {edu.period}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-semibold text-zinc-200 light:text-zinc-800">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-zinc-500 light:text-zinc-600 mt-1">{edu.school}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-800 light:bg-zinc-200 text-zinc-400 light:text-zinc-600"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
