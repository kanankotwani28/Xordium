// src/components/Pricing.jsx
import React from "react";

export default function Pricing() {
    return (
        <section id="pricing" className="mt-12">
            <h2 className="text-2xl font-semibold">Pricing</h2>
            <p className="mt-2 text-sm text-gray-400">
                Choose the right plan to meet your SEO needs and start optimizing today.
            </p>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
                <PriceCard title="Starter" price="$29/mo" />
                <PriceCard title="Pro" price="$79/mo" highlight />
                <PriceCard title="Business" price="$149/mo" />
            </div>
        </section>
    );
}

function PriceCard({ title, price, highlight }) {
    return (
        <div
            className={`rounded-2xl p-6 ${highlight
                    ? "ring-2 ring-purple-600/40 bg-gradient-to-br from-[#1b1030] to-[#23112a]"
                    : "bg-[#0b0a0f] border border-white/6"
                }`}
        >
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-3xl font-bold">{price}</p>
            <ul className="mt-4 space-y-2 text-sm text-gray-300">
                <li>Keyword optimization</li>
                <li>Automated meta tags</li>
                <li>SEO monitoring</li>
            </ul>
            <button
                className={`mt-6 w-full rounded-full py-2 ${highlight ? "bg-purple-600 text-black" : "border border-white/10"
                    }`}
            >
                Join waitlist
            </button>
        </div>
    );
}
