// src/components/Dashboard/Sidebar.jsx
import React from "react";
import { Home, FileText, Bell, Settings, Users, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function Sidebar() {
    const { signOut, user } = useAuth();

    const items = [
        { to: "/dashboard", label: "Overview", icon: <Home size={16} /> },
        { to: "/dashboard/claims", label: "Claims", icon: <FileText size={16} /> },
        { to: "/dashboard/alerts", label: "Alerts", icon: <Bell size={16} /> },
        { to: "/dashboard/team", label: "Team", icon: <Users size={16} /> },
        { to: "/dashboard/settings", label: "Settings", icon: <Settings size={16} /> },
    ];

    return (
        <aside className="w-72 bg-gray-20/60 backdrop-blur-md rounded-xl p-4 border border-white-8 flex flex-col">
            <div className="mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-80 to-purple-90 flex items-center justify-center shadow-purple-glow">
                        <div className="w-2.5 h-2.5 rounded-full bg-white-100" />
                    </div>
                    <div>
                        <div className="text-white-100 font-semibold">VerifyAI</div>
                        <div className="text-white-60 text-sm">{user?.name || "Researcher"}</div>
                    </div>
                </div>
            </div>

            <nav className="flex-1 space-y-1">
                {items.map((it) => (
                    <Link
                        key={it.to}
                        to={it.to}
                        className="flex items-center gap-3 px-3 py-2 rounded-md text-white-70 hover:bg-gray-20/40 hover:text-white transition"
                    >
                        <span className="text-gray-100/80">{it.icon}</span>
                        <span className="text-sm">{it.label}</span>
                    </Link>
                ))}
            </nav>

            <div className="mt-4">
                <button
                    onClick={async () => await signOut()}
                    className="w-full text-left px-3 py-2 rounded-md text-sm text-red-400 hover:bg-[#2b0b2b] transition"
                >
                    <div className="flex items-center gap-2">
                        <LogOut size={16} />
                        <span>Sign out</span>
                    </div>
                </button>
            </div>
        </aside>
    );
}
