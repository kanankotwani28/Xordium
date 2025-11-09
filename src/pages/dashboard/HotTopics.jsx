import React from "react";

export default function HotTopics() {
  return (
    <section className="bg-gray-600/30 backdrop-blur-md rounded-xl p-6 border border-purple-500/20 shadow-[0_0_25px_rgba(168,85,247,0.2)]">
      <h2 className="text-xl font-semibold text-white mb-3">🔥 Hot Topics</h2>
      <p className="text-white/70 text-sm mb-5">
        Here are the currently trending news claims being verified.
      </p>

      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="font-medium text-white">“AI can predict earthquakes”</h3>
          <p className="text-sm text-white/60">Under review • Added 5 hours ago</p>
        </div>

        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="font-medium text-white">“Water turns to gold with magnet”</h3>
          <p className="text-sm text-white/60">Flagged as false • Added yesterday</p>
        </div>

        <div className="p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
          <h3 className="font-medium text-white">“Mars base confirmed for 2025”</h3>
          <p className="text-sm text-white/60">Pending verification • Added today</p>
        </div>
      </div>
    </section>
  );
}
