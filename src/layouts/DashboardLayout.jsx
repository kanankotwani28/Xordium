// src/layouts/DashboardLayout.jsx
import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";
import Header from "../components/Dashboard/Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#050308] via-[#0a0814] to-[#050308] overflow-hidden text-white">
      {/* === Background Layers (Soft Glow + Grid Pattern) === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.2),transparent_70%)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.3] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(rgba(168,85,247,0.25) 1px, transparent 1px),
            radial-gradient(rgba(168,85,247,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 80px 80px",
          backgroundPosition: "0 0, 20px 20px",
          filter: "drop-shadow(0 0 8px rgba(168,85,247,0.25))",
        }}
      ></div>

      {/* === Layout Grid (Sidebar + Main Content Area) === */}
      <div className="relative z-10 p-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-6">
        {/* === Left: Sidebar (Persistent) === */}
        <Sidebar />

        {/* === Right: Main Dashboard Content === */}
  <main className="flex flex-col space-y-8 min-w-0">
          {/* Header stays visible across all pages */}
          <Header />

          {/* Dynamic content area - page changes here */}
          <section className="rounded-xl bg-gray-700/30 backdrop-blur-md border border-purple-400/20 shadow-[0_0_25px_rgba(168,85,247,0.2)] p-6 min-h-[80vh] transition-all duration-300 overflow-x-hidden">
            {/* 👇 This displays whatever route is active */}
            <Outlet />
          </section>
        </main>
      </div>
    </div>
  );
}
