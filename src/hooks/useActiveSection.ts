import { useEffect, useRef, useState } from "react";

export function useActiveSection() {
  const [activeId, setActiveId] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { threshold: 0.3, rootMargin: "-80px 0px -50% 0px" },
    );

    const sections = document.querySelectorAll("section[id]");
    for (const s of sections) {
      observerRef.current?.observe(s);
    }

    return () => observerRef.current?.disconnect();
  }, []);

  return activeId;
}
