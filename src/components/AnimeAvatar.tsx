import { type PointerEvent, useRef } from "react";

const description = "Anime-style illustration of Subash Ghimire, software engineer";

export function AnimeAvatar() {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const element = event.currentTarget;

    element.style.setProperty("--head-x", `${x * 5}px`);
    element.style.setProperty("--head-y", `${y * 3}px`);
    element.style.setProperty("--eye-x", `${x * 11}px`);
    element.style.setProperty("--eye-y", `${y * 6}px`);
  }

  function handlePointerLeave(event: PointerEvent<HTMLDivElement>) {
    const element = event.currentTarget;
    element.style.setProperty("--head-x", "0px");
    element.style.setProperty("--head-y", "0px");
    element.style.setProperty("--eye-x", "0px");
    element.style.setProperty("--eye-y", "0px");
  }

  return (
    <div
      ref={ref}
      className="avatar-wrap"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <svg
        className="avatar-svg"
        viewBox="0 0 400 460"
        role="img"
        aria-label={description}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{description}</title>
        <defs>
          <radialGradient id="avatar-bg" cx="50%" cy="42%" r="62%">
            <stop offset="0%" stopColor="#134e4a" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#1e1b4b" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#09090b" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="avatar-hair" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1f2937" />
            <stop offset="55%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
          <linearGradient id="avatar-hoodie" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1f2937" />
            <stop offset="50%" stopColor="#111827" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
          <linearGradient id="avatar-skin" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0%" stopColor="#ffe4cf" />
            <stop offset="100%" stopColor="#e8b98f" />
          </linearGradient>
          <linearGradient id="avatar-shirt" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#064e3b" />
            <stop offset="100%" stopColor="#111827" />
          </linearGradient>
          <filter id="avatar-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" />
          </filter>
        </defs>

        <g className="avatar-breathe">
          <circle cx="200" cy="220" r="178" fill="url(#avatar-bg)" />
          <circle
            cx="92"
            cy="126"
            r="46"
            fill="#2dd4bf"
            opacity="0.16"
            filter="url(#avatar-glow)"
          />
          <circle
            cx="312"
            cy="120"
            r="52"
            fill="#8b5cf6"
            opacity="0.16"
            filter="url(#avatar-glow)"
          />

          <g className="avatar-code" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <text x="38" y="132" fill="#2dd4bf" stroke="none" fontSize="30" opacity="0.6">
              {"{"}
            </text>
            <text x="330" y="164" fill="#a78bfa" stroke="none" fontSize="30" opacity="0.6">
              {"}"}
            </text>
            <text x="46" y="286" fill="#2dd4bf" stroke="none" fontSize="19" opacity="0.45">
              {"</>"}
            </text>
            <text x="314" y="304" fill="#a78bfa" stroke="none" fontSize="19" opacity="0.45">
              {"{ }"}
            </text>
            <circle cx="58" cy="212" r="2.5" fill="#2dd4bf" stroke="none" opacity="0.7" />
            <circle cx="340" cy="238" r="2.5" fill="#a78bfa" stroke="none" opacity="0.7" />
          </g>

          <path
            d="M44 460C56 380 92 340 148 326L252 326C308 340 344 380 356 460Z"
            fill="url(#avatar-hoodie)"
          />
          <path d="M148 326L200 386L252 326L236 316L200 350L164 316Z" fill="url(#avatar-shirt)" />
          <path
            d="M126 350C132 392 162 414 200 414C238 414 268 392 274 350"
            fill="none"
            stroke="#334155"
            strokeWidth="12"
            strokeLinecap="round"
          />
          <rect x="112" y="338" width="26" height="44" rx="12" fill="#1e293b" stroke="#475569" />
          <rect x="262" y="338" width="26" height="44" rx="12" fill="#1e293b" stroke="#475569" />

          <g className="avatar-head">
            <path d="M178 274H222V338H178Z" fill="url(#avatar-skin)" />
            <ellipse cx="136" cy="212" rx="13" ry="21" fill="#e8b98f" />
            <ellipse cx="264" cy="212" rx="13" ry="21" fill="#e8b98f" />
            <path
              d="M140 156C140 100 168 72 200 72C232 72 260 100 260 156V228C260 274 232 304 200 304C168 304 140 274 140 228Z"
              fill="url(#avatar-skin)"
            />
            <path
              d="M132 180C126 104 160 62 205 64C252 66 276 104 270 176C258 150 244 134 226 126C205 150 168 162 140 154Z"
              fill="url(#avatar-hair)"
            />
            <path
              d="M140 154C158 162 190 156 214 136C226 126 236 116 244 104"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="2"
              opacity="0.35"
            />
            <path
              d="M246 96C264 116 272 142 270 172"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="2"
              opacity="0.4"
            />
            <g className="avatar-blink">
              <g className="avatar-eyes">
                <ellipse cx="171" cy="205" rx="12" ry="10" fill="#f8fafc" opacity="0.9" />
                <ellipse cx="229" cy="205" rx="12" ry="10" fill="#f8fafc" opacity="0.9" />
                <circle cx="172" cy="205" r="5" fill="#92400e" />
                <circle cx="230" cy="205" r="5" fill="#92400e" />
                <circle cx="173" cy="203" r="1.6" fill="#fef3c7" />
                <circle cx="231" cy="203" r="1.6" fill="#fef3c7" />
              </g>
            </g>
            <path
              d="M148 180C158 174 170 174 179 179M221 179C230 174 242 174 252 180"
              fill="none"
              stroke="#1f2937"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M199 216L196 232H204"
              fill="none"
              stroke="#a56a4d"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M184 254C192 262 208 262 216 254"
              fill="none"
              stroke="#7c3f2e"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M140 178C140 118 166 82 200 74"
              fill="none"
              stroke="#2dd4bf"
              strokeWidth="3"
              strokeLinecap="round"
              opacity="0.5"
            />
          </g>
        </g>
      </svg>
      <div className="avatar-bubble">Hi, I build full-stack web applications</div>
    </div>
  );
}
