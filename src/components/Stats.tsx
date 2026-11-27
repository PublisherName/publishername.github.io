import { Reveal } from "@/components/Reveal";
import type { Stat } from "@/types";
import { useEffect, useLayoutEffect, useRef } from "react";

const useIsomorphicLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

function StatValue({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element || !document.documentElement.classList.contains("js-motion")) return;

    let frame = 0;
    let start = 0;

    function animate(timestamp: number) {
      if (!element) return;
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / 600, 1);
      const eased = 1 - (1 - progress) ** 3;
      element.textContent = String(Math.round(stat.value * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        element.textContent = String(stat.value);
      }
    }

    function startAnimation() {
      if (!element) return;
      element.textContent = "0";
      frame = requestAnimationFrame(animate);
    }

    if (!("IntersectionObserver" in window)) {
      startAnimation();
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        startAnimation();
      },
      { threshold: 0.5 },
    );

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [stat.value]);

  return <span ref={ref}>{stat.value}</span>;
}

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <div className="stats-row mt-10 flex flex-wrap gap-x-8 gap-y-4">
      {stats.map((stat) => (
        <Reveal key={stat.label}>
          <div className="stat-item">
            <p className="font-display text-2xl font-semibold text-zinc-100 light:text-zinc-900 tabular-nums">
              <StatValue stat={stat} />
              {stat.suffix && <span className="text-emerald-400">{stat.suffix}</span>}
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-zinc-500 mt-1">
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
