import React from "react";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full py-4 flex justify-center bg-[#07060a]">
      <div className="flex items-center justify-between w-[90%] md:w-[85%] lg:w-[70%]">
        {/* 🔹 Left Logo Button */}
        <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-800 to-purple-500 text-sm font-medium tracking-wide text-white border border-purple-400/30 shadow-[0_0_8px_rgba(168,85,247,0.4)] hover:shadow-[0_0_15px_rgba(168,85,247,0.6)] transition-all duration-300">
          VERIFAI
        </button>

        {/* 🔹 Center Glow Icon */}
        <div className="w-9 h-9 flex items-center justify-center rounded-xl bg-[#0c0a13] border border-purple-700/40 shadow-[inset_0_0_10px_rgba(168,85,247,0.8),0_0_8px_rgba(168,85,247,0.3)]">
          <div className="w-3 h-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
        </div>

        {/* 🔹 Right Menu */}
        <nav className="rounded-full border border-purple-900/50 bg-[#0b090f]/80 backdrop-blur-md px-6 py-2 flex items-center gap-6 text-gray-300 text-sm shadow-[0_0_10px_rgba(168,85,247,0.15)]">
          <a
            href="#features"
            className="flex items-center gap-1 hover:text-white transition"
          >
            Features <ChevronDown size={14} />
          </a>
          <a href="#developers" className="hover:text-white transition">
            Developers
          </a>
          <a
            href="#company"
            className="flex items-center gap-1 hover:text-white transition"
          >
            Company <ChevronDown size={14} />
          </a>
          <a href="#blog" className="hover:text-white transition">
            Blog
          </a>
          <a href="#changelog" className="hover:text-white transition">
            Changelog
          </a>
        </nav>
      </div>
    </header>
  );
}
