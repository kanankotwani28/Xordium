// src/components/Dashboard/StatCard.jsx
import React from "react";

export default function StatCard({ title, value, delta, children }) {
    return (
        <div className="rounded-lg bg-gray-20/60 border border-white-8 p-4">
            <div className="flex items-center justify-between">
                <div>
                    <div className="text-sm text-white-70">{title}</div>
                    <div className="mt-1 text-2xl font-semibold text-white-100">{value}</div>
                </div>
                {children}
            </div>

            {delta && (
                <div className="mt-3 text-sm">
                    <span className={`text-sm ${delta >= 0 ? "text-green-400" : "text-red-400"}`}>
                        {delta >= 0 ? `+${delta}%` : `${delta}%`}
                    </span>{" "}
                    <span className="text-white-60">vs last week</span>
                </div>
            )}
        </div>
    );
}
