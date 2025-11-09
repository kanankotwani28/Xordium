import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Features from "./components/Features";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Section from "./components/Section";

export default function App() {
  return (
    <div className="min-h-screen bg-[#07060a] text-gray-100 antialiased">
      <Navbar />
      <main className="px-6 md:px-12 lg:px-24">
        {/* selection section with patterned grid + subtle moving gradient background */}
        <section className="w-full h-[80vh] relative overflow-hidden rounded-2xl">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 600"
            preserveAspectRatio="xMidYMid slice"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="gridPattern"
                x="0"
                y="0"
                width="40"
                height="40"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M40 0 L0 0 0 40"
                  fill="none"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.15"
                />
              </pattern>

              {/* <linearGradient id="movingGrad" x1="0" y1="0" x2="1" y2="1"> <stop offset="0%" stopColor="#7c2ae8" stopOpacity="0.12" /> <stop offset="50%" stopColor="#4b1366" stopOpacity="0.08" /> <stop offset="100%" stopColor="#0f0612" stopOpacity="0.14" /> <animateTransform attributeName="gradientTransform" type="translate" dur="20s" values="0 0;0.06 0.06;-0.04 0.03;0 0" repeatCount="indefinite" />
              </linearGradient> */}

              <filter id="softBlur">
                <feGaussianBlur stdDeviation="0.6" />
              </filter>
            </defs>

            <rect
              x="0"
              y="0"
              width="1200"
              height="600"
              fill="url(#movingGrad)"
              opacity="0.9"
            />
            <rect
              x="0"
              y="0"
              width="1200"
              height="600"
              fill="url(#gridPattern)"
              filter="url(#softBlur)"
              opacity="0.9"
            />
          </svg>

          {/* content above background */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <Hero />
          </div>
        </section>

        {/* <Trusted /> */}
        <Features />
        {/* <Clients /> */}
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
