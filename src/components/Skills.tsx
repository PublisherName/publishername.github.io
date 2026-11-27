import { Reveal } from "@/components/Reveal";
import type { SkillGroup } from "@/types";
import { useState } from "react";

interface SkillItem {
  name: string;
  slug: string;
}

function SkillIcon({ item }: { item: SkillItem }) {
  const [broken, setBroken] = useState(false);
  const initials = item.name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3);

  if (!item.slug || broken) {
    return (
      <div className="skill-badge">
        <span className="skill-badge__icon skill-badge__initials">{initials}</span>
        <span className="skill-badge__name">{item.name}</span>
      </div>
    );
  }

  return (
    <div className="skill-badge">
      <span className="skill-badge__icon">
        <img
          src={`/assets/icons/${item.slug}.svg`}
          alt=""
          aria-hidden="true"
          className="skill-icon"
          loading="lazy"
          onError={() => setBroken(true)}
        />
      </span>
      <span className="skill-badge__name">{item.name}</span>
    </div>
  );
}

interface SkillsProps {
  skillGroups: SkillGroup[];
}

function groupPath(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section
      id="skills"
      className="pt-24 pb-28 md:pt-32 md:pb-36 border-t border-zinc-800/50 light:border-zinc-200/50"
    >
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="skills-heading">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-emerald-400 mb-3">
                03 / Toolchain
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
                The stack I reach for
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-500 light:text-zinc-600">
                Backend, frontend, APIs, and delivery tools I use to take products from first commit
                to production.
              </p>
            </div>
            <span className="skills-badge">
              {String(skillGroups.length).padStart(2, "0")} core areas
            </span>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70} className="h-full">
              <div className="skill-group-card">
                <div className="skill-group-card__head">
                  <span>
                    <i className="ph ph-terminal-window" />
                    ~/stack/{groupPath(group.title)}
                  </span>
                  <span>{String(group.items.length).padStart(2, "0")}</span>
                </div>
                <p className="skill-group-card__title">{group.title}</p>
                <div className="skill-group-card__items">
                  {group.items.map((item) => (
                    <SkillIcon key={item.name} item={item} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
