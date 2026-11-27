import { useEffect, useRef, useState } from "react";

export const roles = ["Software Engineer", "Django Developer", "API Architect"];

export function useTypingEffect() {
  const [text, setText] = useState(roles[0]);
  const indexRef = useRef(0);
  const charIndexRef = useRef(roles[0].length);
  const isDeletingRef = useRef(true);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const current = roles[indexRef.current];

      if (isDeletingRef.current) {
        charIndexRef.current--;
        setText(current.substring(0, charIndexRef.current));
      } else {
        charIndexRef.current++;
        setText(current.substring(0, charIndexRef.current));
      }

      let speed = isDeletingRef.current ? 35 : 55;

      if (!isDeletingRef.current && charIndexRef.current === current.length) {
        speed = 1600;
        isDeletingRef.current = true;
      } else if (isDeletingRef.current && charIndexRef.current === 0) {
        isDeletingRef.current = false;
        indexRef.current = (indexRef.current + 1) % roles.length;
        speed = 400;
      }

      timer = setTimeout(tick, speed);
    }

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return text;
}
