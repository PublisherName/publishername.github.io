import type { SkillGroup } from "@/types";
import { motion } from "motion/react";
import { useState } from "react";

function SkillIcon({ item }: { item: { name: string; slug: string } }) {
  const [broken, setBroken] = useState(false);

  if (!item.slug) {
    return (
      <div className="flex flex-col items-center gap-1.5">
        <span className="w-8 h-8 flex items-center justify-center font-mono text-[10px] font-semibold text-zinc-400 light:text-zinc-600 rounded-lg bg-zinc-800/60 light:bg-zinc-200/60 uppercase tracking-tight">
          {item.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 3)}
        </span>
        <span className="font-mono text-[10px] text-zinc-500 leading-none">{item.name}</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-1.5">
      {broken ? (
        <span className="w-8 h-8 flex items-center justify-center font-mono text-[10px] font-semibold text-zinc-400 light:text-zinc-600 rounded-lg bg-zinc-800/60 light:bg-zinc-200/60 uppercase tracking-tight">
          {item.name
            .split(" ")
            .map((w) => w[0])
            .join("")
            .slice(0, 3)}
        </span>
      ) : (
        <img
          src={`https://cdn.simpleicons.org/${item.slug}/white`}
          alt={item.name}
          className="h-8 brightness-90 skill-icon"
          loading="lazy"
          onError={() => setBroken(true)}
        />
      )}
      <span className="font-mono text-[10px] text-zinc-500 leading-none">{item.name}</span>
    </div>
  );
}

function SkillCard({
  group,
  delay,
}: {
  group: SkillGroup;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-zinc-900/40 light:bg-zinc-100/80 p-5 rounded-2xl hover:bg-zinc-900/60 light:hover:bg-zinc-200/60 transition-colors light:shadow-sm light:shadow-zinc-900/5"
    >
      <h3 className="font-display text-xs font-semibold text-zinc-300 light:text-zinc-700 mb-4 uppercase tracking-wider">
        {group.title}
      </h3>
      <div className="flex flex-wrap gap-4 items-center">
        {group.items.map((item) => (
          <SkillIcon key={item.name} item={item} />
        ))}
      </div>
    </motion.div>
  );
}

interface SkillsProps {
  skillGroups: SkillGroup[];
}

export function Skills({ skillGroups }: SkillsProps) {
  return (
    <section id="skills" className="pt-24 pb-28 md:pt-32 md:pb-36">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-zinc-500 light:text-zinc-500 mb-3">
            Toolbox
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight text-zinc-100 light:text-zinc-900">
            The stack I reach for
          </h2>
        </motion.div>
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.title} group={group} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
