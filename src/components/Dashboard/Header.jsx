// src/components/Dashboard/Header.jsx
import React from "react";
import { Search } from "lucide-react";

export default function Header({ title = "Overview" }) {
    return (
        <header className="flex items-center justify-between gap-4">
            <div>
                <h2 className="text-2xl font-semibold text-white-100">{title}</h2>
                <p className="text-white-70 text-sm">Overview of verification metrics and recent activity</p>
            </div>

            <div className="flex items-center gap-3">
                <div className="relative">
                    <input
                        placeholder="Search claims, sources, users..."
                        className="rounded-full bg-gray-10 border border-white-10 px-4 py-2 text-sm text-white-100 focus:outline-none focus:ring-2 focus:ring-accent-blue w-72"
                    />
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-white-60">
                        <Search size={16} />
                    </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-gray-10 flex items-center justify-center border border-white-8">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent-blue shadow-purple-glow" />
                </div>
            </div>
        </header>
    );
}
