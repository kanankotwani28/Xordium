// src/components/Cta.jsx
import React from "react";
import GridComponent from "./GridComponent";

export default function Cta() {
  return (
    <section className="relative mt-24 py-20 px-6 overflow-hidden rounded-2xl text-center bg-gradient-to-b from-[#1b1030] via-[#120b20] to-black">
      
       <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(168,85,247,0.15)_2px,transparent_2px),linear-gradient(to_bottom,rgba(168,85,247,0.15)_2px,transparent_2px)] bg-[size:80px_80px] opacity-40 animate-slow-pan" />
       {/* <GridComponent /> */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.25),transparent_70%)]" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <h3 className="text-4xl md:text-6xl font-bold text-white leading-snug animate-pulse">
          AI-driven SEO <br className="hidden md:block" /> for everyone.
        </h3>

        <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3">
          <input
            aria-label="email"
            type="email"
            placeholder="Your email"
            className="w-full sm:w-72 rounded-md px-5 py-3 bg-transparent border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition duration-300"
          />
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-purple-600 hover:text-white transition duration-300 shadow-md hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Join waitlist
          </button>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          No credit card required · 7-days free trial
        </p>
      </div>

      {/* === Inline animation style (grid movement) === */}
      <style>{`
        @keyframes slow-pan {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 100px 100px, 100px 100px;
          }
        }
        .animate-slow-pan {
          animation: slow-pan 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
