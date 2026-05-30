import { useEffect, useRef, useState } from "react";

const strings = ["Web developer", "Django developer", "React developer", "Problem solver"];

export function useTypingEffect() {
  const [text, setText] = useState("");
  const indexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function tick() {
      const current = strings[indexRef.current];

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
        indexRef.current = (indexRef.current + 1) % strings.length;
        speed = 400;
      }

      timer = setTimeout(tick, speed);
    }

    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, []);

  return text;
}
