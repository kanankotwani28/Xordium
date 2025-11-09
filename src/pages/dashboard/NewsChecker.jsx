import React, { useState } from "react";

export default function Settings() {
  const [query, setQuery] = useState("");
  const [checked, setChecked] = useState(null);

  const handleCheck = () => {
    setChecked(query.trim() !== "" ? "Result: This claim appears false ❌" : "Please enter a claim.");
  };

  return (
    <section className="bg-gray-600/30 backdrop-blur-md rounded-xl p-6 border border-green-400/20 shadow-[0_0_25px_rgba(74,222,128,0.25)]">
      <h2 className="text-xl font-semibold text-white mb-3">📰 News Checker</h2>
      <p className="text-white/70 text-sm mb-5">
        Enter a headline or claim to verify its authenticity.
      </p>

      <div className="space-y-3">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter a news claim..."
          className="w-full p-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-white/40 outline-none focus:border-purple-400 transition"
        />
        <button
          onClick={handleCheck}
          className="w-full py-2 rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-medium hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition"
        >
          Check Now
        </button>
      </div>

      {checked && (
        <div className="mt-4 p-3 rounded-lg bg-white/10 border border-white/20 text-sm text-white/80">
          {checked}
        </div>
      )}
    </section>
  );
}
