export default function Hero() {
  return (
    <section className="mt-28 grid gap-8 md:grid-cols-2 items-center">
      <div>
        <div className="w-full mx-auto">
          <span className="inline-flex items-center justify-center px-3 py-0.5 text-xs font-semibold rounded-full bg-[#9855ff] text-black">
            NEW
          </span>
          <span className="inline-block text-[#9855FF] text-lg px-3 py-1 rounded-full">
            Latest integration just arrived
          </span>
        </div>
        <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
          Verify News
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">
            with AI.
          </span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl">
          Elevate your knowledge about the world and things happening around you
          with VerifAI — fast verification, clear signals, and guided
          SEO-focused insights.
        </p>
        <div className="mt-6 flex gap-3">
          <button className="rounded-full bg-white px-4 py-2 text-black font-medium shadow-md">
            Start for free
          </button>
          <button className="rounded-full border border-white/10 px-4 py-2 text-sm">
            How it works
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="w-full h-64 md:h-80 rounded-2xl flex items-center justify-center overflow-hidden">
          <svg
            width="320"
            height="320"
            viewBox="0 0 220 220"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="block max-w-none"
          >
            <defs>
              <radialGradient id="g" cx="50%" cy="45%" r="50%">
                <stop offset="0%" stopColor="#7c2ae8" stopOpacity="0.95" />
                <stop offset="50%" stopColor="#3b0764" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#1a0826" stopOpacity="0" />
              </radialGradient>

              <filter id="noise">
                <feTurbulence
                  baseFrequency="0.02 0.03"
                  numOctaves="2"
                  seed="3"
                  result="turb"
                >
                  <animate
                    attributeName="baseFrequency"
                    dur="10s"
                    values="0.02 0.03;0.03 0.02;0.015 0.025;0.02 0.03"
                    repeatCount="indefinite"
                  />
                </feTurbulence>
                <feDisplacementMap
                  in="SourceGraphic"
                  in2="turb"
                  scale="12"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </defs>

            <g filter="url(#noise)">
              <circle
                cx="110"
                cy="110"
                r="78"
                fill="url(#g)"
                stroke="#7c2ae8"
                strokeWidth="6"
                strokeOpacity="0.18"
              >
                <animate
                  attributeName="cx"
                  dur="7s"
                  values="110;118;104;112;110"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  dur="9s"
                  values="110;102;118;108;110"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  dur="12s"
                  values="78;84;72;78"
                  repeatCount="indefinite"
                />
              </circle>

              <circle cx="140" cy="84" r="34" fill="#7c2ae8" fillOpacity="0.12">
                <animate
                  attributeName="cx"
                  dur="6s"
                  values="140;148;132;140"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="cy"
                  dur="8s"
                  values="84;76;92;84"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="r"
                  dur="10s"
                  values="34;40;30;34"
                  repeatCount="indefinite"
                />
              </circle>

              <circle
                cx="110"
                cy="110"
                r="100"
                fill="none"
                stroke="#7c2ae8"
                strokeOpacity="0.03"
                strokeWidth="18"
              >
                <animate
                  attributeName="strokeOpacity"
                  dur="11s"
                  values="0.03;0.06;0.02;0.03"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
