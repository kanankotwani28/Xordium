// src/components/Dashboard/Sidebar.jsx
import React from "react";
import { Home, FileText, LogOut, AlertTriangle, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
  const { signOut, user } = useAuth();

  const items = [
    { to: "/dashboard", label: "Overview", icon: <Home size={16} /> },
    {
      to: "/dashboard/hot-topics",
      label: "Hot topics",
      icon: <FileText size={16} />,
    },
    {
      to: "/dashboard/fake-news",
      label: "Fake news",
      icon: <AlertTriangle size={16} />,
    },
    {
      to: "/dashboard/news-checker",
      label: "News Checker",
      icon: <Newspaper size={16} />,
    },
  ];

  return (
    <section
      id="sidebar"
      className="
        relative w-72 h-[85vh] 
        text-white 
        bg-gradient-to-b from-[#070509] via-[#0a0814] to-[#030207]
        rounded-2xl overflow-hidden p-6 
        border border-[#8b5cf6]/40 
        shadow-[0_0_25px_rgba(139,92,246,0.25)]
        flex flex-col
        backdrop-blur-md
      "
    >
      {/* === Background Layers === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_75%)] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.3] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(rgba(168,85,247,0.25) 1px, transparent 1px),
            radial-gradient(rgba(168,85,247,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 80px 80px",
          backgroundPosition: "0 0, 20px 20px",
          filter: "drop-shadow(0 0 12px rgba(168,85,247,0.3))",
        }}
      ></div>

      {/* === Neon border glow === */}
      <div className="absolute inset-0 border border-purple-500/30 rounded-2xl shadow-[0_0_25px_rgba(168,85,247,0.3)] pointer-events-none"></div>

      {/* === Sidebar Content === */}
      <div className="relative flex flex-col h-full z-10 justify-between pb-6">
        {/* === Top Section: Brand + Navigation === */}
        <div>
          {/* Brand Section */}
          <div className="mb-10 flex items-center gap-3">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-purple-600 to-fuchsia-700 flex items-center justify-center shadow-[0_0_25px_rgba(168,85,247,0.6)]">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
            </div>
            <div>
              <div className="text-white font-semibold text-lg tracking-wide drop-shadow-[0_0_5px_rgba(168,85,247,0.5)]">
                VerifyAI
              </div>
              <div className="text-white/60 text-sm">
                {user?.name || "Researcher"}
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-1">
            {items.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                className="flex items-center gap-3 px-4 py-2 rounded-md text-white/70 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-fuchsia-700/20 border border-transparent hover:border-purple-500/40 transition-all duration-300"
              >
                <span className="text-purple-300">{it.icon}</span>
                <span className="text-sm font-medium">{it.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* === Bottom Section: Sign Out === */}
        <div className="mt-8 border-t border-purple-500/20 pt-4">
          <button
            onClick={async () => await signOut()}
            className="w-full flex items-center gap-2 px-4 py-2 text-sm rounded-md text-red-400 border border-red-500/20 hover:border-red-500/40 hover:bg-red-900/30 hover:shadow-[0_0_10px_rgba(239,68,68,0.4)] transition duration-300"
          >
            <LogOut size={16} />
            <span>Sign out</span>
          </button>
        </div>
      </div>
    </section>
  );
}
