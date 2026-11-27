import { Reveal } from "@/components/Reveal";
import type { Project } from "@/types";

interface ProjectsProps {
  projects: Project[];
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function projectExtension(project: Project) {
  if (project.tags.some((tag) => /python|django/i.test(tag))) return "py";
  if (project.tags.some((tag) => /css|tailwind/i.test(tag))) return "css";
  return "tsx";
}

function projectFile(project: Project) {
  return `${slugify(project.title)}.${projectExtension(project)}`;
}

function projectStatus(project: Project) {
  if (project.url?.includes("extensions.gnome.org")) return "OPEN SOURCE";
  if (project.tags.some((tag) => /template|starter/i.test(tag))) return "TEMPLATE";
  if (project.url) return "LIVE";
  return "PROJECT";
}

function projectLinkLabel(project: Project) {
  if (project.url?.includes("extensions.gnome.org")) return "GNOME";
  if (project.url) return "Live";
  return "Repo";
}

function projectLink(project: Project) {
  return project.url ?? project.repoUrl;
}

function projectBranch(project: Project) {
  const extension = projectExtension(project);
  if (project.tags.some((tag) => /template|starter/i.test(tag))) return "feat/template";
  if (extension === "py") return "feat/api";
  if (extension === "css") return "feat/ui";
  return "main";
}

export function Projects({ projects }: ProjectsProps) {
  const additionalProjects = projects.filter((project) => project.more);

  return (
    <section
      id="projects"
      className="pt-24 pb-28 md:pt-32 md:pb-36 border-t border-zinc-800/50 light:border-zinc-200/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="projects-heading">
            <div>
              <p className="ide-command mb-4">
                <span>subash@portfolio</span>:~/projects <span className="ide-command__caret" />
              </p>
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
                What I&apos;ve built
              </h2>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-zinc-500 light:text-zinc-600 leading-relaxed">
                Production apps, desktop tooling, and backend systems — open in one workspace.
              </p>
            </div>
            <div className="projects-count" aria-label={`${projects.length} projects shipped`}>
              <span>{String(projects.length).padStart(2, "0")}</span>
              <span>repos</span>
            </div>
          </div>
        </Reveal>
        <div className="mt-8 space-y-6">
          {projects
            .filter((project) => !project.more)
            .map((project, i) => {
              const file = projectFile(project);
              const slug = slugify(project.title);
              const reversed = i % 2 === 1;

              return (
                <Reveal key={file} delay={i * 80} direction={reversed ? "right" : "left"}>
                  <article className="ide-window ide-window--project project-row">
                    <div className="ide-titlebar">
                      <span className="ide-dots" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="ide-titlebar__path">{file}</span>
                      <span className="ide-titlebar__branch">
                        <i className="ph ph-git-branch" />
                        {projectBranch(project)}
                      </span>
                    </div>
                    <div className="ide-tabbar">
                      <span className="ide-tab ide-tab--active min-w-0">
                        <i className="ph ph-file-code shrink-0" />
                        <span className="truncate">{file}</span>
                      </span>
                      <span className="ide-chip">{projectStatus(project)}</span>
                      {projectLink(project) && (
                        <a
                          href={projectLink(project)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ide-open"
                          aria-label={`Open ${project.title}`}
                        >
                          <i className="ph ph-arrow-square-out" />
                        </a>
                      )}
                    </div>
                    <div className="ide-window__body project-row__body grid gap-6 lg:grid-cols-2">
                      <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                        <div className="ide-preview">
                          <img
                            src={project.image}
                            alt={`${project.title} project interface`}
                            loading="lazy"
                          />
                          <span className="ide-preview__label">preview / {slug}</span>
                        </div>
                      </div>
                      <div
                        className={`ide-window__info flex flex-col ${
                          reversed ? "lg:order-1" : "lg:order-2"
                        }`}
                      >
                        <p className="ide-row-number">
                          {String(i + 1).padStart(2, "0")} /{" "}
                          {String(projects.length).padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 font-display text-2xl font-semibold text-zinc-100 light:text-zinc-900 md:text-3xl">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-zinc-500 light:text-zinc-600">
                          {project.description}
                        </p>
                        <p className="ide-impact mt-4">
                          <span>Impact</span>
                          {project.impact}
                        </p>
                        {(project.role || project.problem) && (
                          <div className="mt-4 space-y-2 text-sm text-zinc-500 light:text-zinc-600">
                            {project.role && (
                              <p>
                                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-emerald-400 mr-2">
                                  My role
                                </span>
                                {project.role}
                              </p>
                            )}
                            {project.problem && (
                              <p>
                                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-amber-400 mr-2">
                                  Hardest problem
                                </span>
                                {project.problem}
                              </p>
                            )}
                          </div>
                        )}
                        <div className="mt-4 flex flex-wrap gap-2">
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ide-link-btn"
                            >
                              {projectLinkLabel(project)}
                              <i className="ph ph-arrow-up-right" />
                            </a>
                          )}
                          {project.repoUrl && (
                            <a
                              href={project.repoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ide-link-btn ide-link-btn--muted"
                            >
                              Repo
                              <i className="ph ph-github-logo" />
                            </a>
                          )}
                        </div>
                        {project.details && (
                          <details className="ide-details">
                            <summary>
                              <i className="ph ph-caret-right" />
                              README.md
                            </summary>
                            <p>{project.details}</p>
                          </details>
                        )}
                        <div className="ide-tags mt-auto pt-4">
                          {project.tags.map((tag) => (
                            <span key={tag}>#{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="ide-statusbar">
                      <span>{projectBranch(project)}</span>
                      <span>{project.tags.slice(0, 3).join(" · ")}</span>
                      <span className="ide-statusbar__right">UTF-8 · Spaces: 2</span>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          {additionalProjects.length > 0 && (
            <Reveal delay={120}>
              <details className="ide-window ide-window--project ide-more-window">
                <summary className="ide-more-summary">
                  <span className="ide-more-summary__lead">
                    <span className="ide-more-summary__icon" aria-hidden="true">
                      <i className="ph ph-folder-open" />
                    </span>
                    <span>
                      <strong>More shipped work</strong>
                      <small>Additional projects and open-source experiments</small>
                    </span>
                  </span>
                  <span className="ide-more-summary__meta">
                    <span>{String(additionalProjects.length).padStart(2, "0")} repos</span>
                    <i className="ph ph-caret-right" />
                  </span>
                </summary>
                <div className="ide-more-grid p-4">
                  {additionalProjects.map((project) => (
                    <div key={project.title} className="ide-more-item">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="ide-more-item__dot" aria-hidden="true" />
                          <h3 className="font-display text-lg font-semibold text-zinc-100 light:text-zinc-900">
                            {project.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-zinc-500 light:text-zinc-600">
                          {project.description}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 shrink-0">
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ide-link-btn"
                          >
                            {projectLinkLabel(project)}
                          </a>
                        )}
                        {project.repoUrl && (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ide-link-btn ide-link-btn--muted"
                          >
                            Repo
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
