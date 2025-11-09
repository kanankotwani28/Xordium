// src/pages/dashboard/Dashboard.jsx
import React from "react";
// import Sidebar from "../../components/Dashboard/Sidebar";
// import Header from "../../components/Dashboard/Header";
import StatCard from "../../components/Dashboard/StatCard";

export default function Dashboard() {
  return (
    <>
      {/* === Stats Section (Boxed) === */}
      <div className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-5 pb-10 shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] mb-8">
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <StatCard title="Verified claims" value="1,243" delta={6}>
            <div className="text-sm text-white/70">Confidence</div>
          </StatCard>
          <StatCard title="Pending reviews" value="54" delta={-2}>
            <div className="text-sm text-white/70">Assigned</div>
          </StatCard>
          <StatCard title="Alerts today" value="12" delta={10}>
            <div className="text-sm text-white/70">High priority</div>
          </StatCard>
        </div>
      </div>

      {/* === Secondary Section === */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-5 shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]">
          <h3 className="text-lg font-medium text-white">Recent activity</h3>
          <p className="text-sm text-white/60 mt-2">
            Recent verification events, claim updates, and actions will appear
            here.
          </p>
          <div className="mt-5 space-y-3 text-sm">
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
              Claim <strong>#A173</strong> updated by <strong>Alex</strong>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
              New alert: <strong>Viral image</strong> flagged
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition">
              Policy updated for source <strong>LocalPost</strong>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="rounded-xl bg-white/5 backdrop-blur-md border border-white/10 p-5 shadow-[0_0_25px_rgba(168,85,247,0.15)] transition-all hover:shadow-[0_0_35px_rgba(168,85,247,0.25)]">
          <h3 className="text-lg font-medium text-white">Quick actions</h3>
          <div className="mt-5 flex flex-col gap-3">
            <button className="py-2 rounded-md bg-gradient-to-r from-purple-500 to-fuchsia-600 text-white font-medium hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition">
              Create new verification
            </button>
            <button className="py-2 rounded-md border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition">
              Import sources
            </button>
            <button className="py-2 rounded-md border border-white/10 text-white/70 hover:text-white hover:bg-white/10 transition">
              Invite teammate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
