import React from "react";

export default function FakeNews() {
  return (
    <section className="p-0">
      <h2 className="text-xl font-semibold text-white mb-3">
        ⚠️ Fake News Alerts
      </h2>
      <p className="text-white/70 text-sm mb-5">
        Latest detected fake or misleading news circulating online.
      </p>

      <div className="space-y-4">
        <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30 hover:bg-red-900/30 transition">
          <h3 className="font-medium text-white">
            “NASA admits Earth is flat”
          </h3>
          <p className="text-sm text-red-300">
            Confirmed fake • Source: Twitter
          </p>
        </div>

        <div className="p-4 rounded-lg bg-red-900/20 border border-red-500/30 hover:bg-red-900/30 transition">
          <h3 className="font-medium text-white">
            “Local school bans science classes”
          </h3>
          <p className="text-sm text-red-300">
            Verified as false • Source: Facebook
          </p>
        </div>
      </div>
    </section>
  );
}
