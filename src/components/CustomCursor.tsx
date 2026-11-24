import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const dotElement: HTMLDivElement = dot;
    const ringElement: HTMLDivElement = ring;
    const root = document.documentElement;
    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let frame = 0;

    function onMove(event: PointerEvent) {
      x = event.clientX;
      y = event.clientY;
      dotElement.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      root.classList.add("cursor-active");
    }

    function onOver(event: PointerEvent) {
      const target = event.target;
      const interactive = target instanceof Element && target.closest("a, button");
      root.classList.toggle("cursor-hover", Boolean(interactive));
    }

    function loop() {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      ringElement.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      frame = requestAnimationFrame(loop);
    }

    frame = requestAnimationFrame(loop);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      root.classList.remove("cursor-active", "cursor-hover");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
}
