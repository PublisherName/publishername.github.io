import type { Project } from "@/types";
import { motion } from "motion/react";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section
      id="projects"
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
            Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
            Things I have built
          </h2>
        </motion.div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group rounded-2xl bg-zinc-900/40 light:bg-zinc-100/80 overflow-hidden hover:bg-zinc-900/60 light:hover:bg-zinc-200/60 transition-colors light:shadow-sm light:shadow-zinc-900/5 flex flex-col"
            >
              <div className="aspect-[16/10] bg-zinc-800/50 light:bg-zinc-200/60 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={`${project.title} project interface`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-display text-base font-semibold text-zinc-200 light:text-zinc-800">
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                      aria-label={`${project.title} project link`}
                    >
                      {project.title}
                      <i className="ph ph-arrow-square-out text-sm shrink-0" />
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="mt-2 text-sm text-zinc-500 light:text-zinc-600 leading-relaxed flex-1">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] px-2 py-0.5 rounded bg-zinc-800 light:bg-zinc-200 text-zinc-400 light:text-zinc-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
