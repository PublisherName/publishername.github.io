import { useReveal } from "@/hooks/useReveal";
import type { CSSProperties, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
}

export function Reveal({ children, className = "", delay = 0, direction = "up" }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const style = { "--reveal-delay": `${delay}ms` } as CSSProperties;
  const directionClass = direction === "up" ? "" : ` reveal--${direction}`;

  return (
    <div ref={ref} className={`reveal${directionClass} ${className}`} style={style}>
      {children}
    </div>
  );
}
