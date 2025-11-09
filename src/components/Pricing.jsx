// src/components/Pricing.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("Pro"); // Default selected plan

  const handleSelect = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <section
      id="pricing"
      className="relative mt-24 py-12 text-center text-white bg-gradient-to-b from-[#0b0a0f] via-[#130a23] to-[#0b0a0f] overflow-hidden"
    >
      {/* === Layer 1: Soft radial glow === */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.15),transparent_70%)]" />

      {/* === Layer 2: Dotted grid with purple shadow === */}
      <div
        className="absolute inset-0 opacity-[0.25] mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(rgba(168,85,247,0.3) 1px, transparent 1px),
            radial-gradient(rgba(168,85,247,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px, 80px 80px",
          backgroundPosition: "0 0, 20px 20px",
          filter: "drop-shadow(0 0 8px rgba(168,85,247,0.25))",
        }}
      ></div>

      {/* === Content === */}
      <motion.h2
        className="relative text-4xl md:text-5xl font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Pricing
      </motion.h2>

      <motion.p
        className="relative mt-3 text-gray-400 text-lg max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Choose the right plan to meet your SEO needs and start optimizing today.
      </motion.p>

      <div className="relative mt-12 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto px-6">
        {["Starter", "Pro", "Business"].map((plan, idx) => (
          <PriceCard
            key={plan}
            title={plan}
            price={
              plan === "Starter"
                ? "$29/mo"
                : plan === "Pro"
                ? "$79/mo"
                : "$149/mo"
            }
            selected={selectedPlan === plan}
            delay={0.2 + idx * 0.2}
            onSelect={() => handleSelect(plan)}
          />
        ))}
      </div>
    </section>
  );
}

function PriceCard({ title, price, selected, delay, onSelect }) {
  return (
    <motion.div
      onClick={onSelect}
      className={`group relative rounded-2xl p-8 cursor-pointer backdrop-blur-sm transition-all duration-500
        ${
          selected
            ? "ring-[0.25px] ring-purple-600/40 bg-gradient-to-br from-[#1b1030] to-[#23112a] shadow-[0_0_25px_rgba(168,85,247,0.3)] scale-[1.03]"
            : "bg-[#0b0a0f]/80 border-[0.5px] border-white/10 hover:border-purple-500/40"
        }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: selected ? 1.03 : 1.05 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-white-500 bg-clip-text text-transparent">
        {price}
      </p>

      <ul className="mt-6 space-y-3 text-sm text-gray-300 text-left">
        <li className="flex items-center gap-2">
          <span className="text-purple-400">✔</span> Keyword optimization
        </li>
        <li className="flex items-center gap-2">
          <span className="text-purple-400">✔</span> Automated meta tags
        </li>
        <li className="flex items-center gap-2">
          <span className="text-purple-400">✔</span> SEO monitoring
        </li>
      </ul>

      <motion.button
        whileHover={{ scale: 1.05 }}
        className={`mt-8 w-full rounded-full py-3 font-semibold transition-all duration-500
          ${
            selected
              ? "bg-purple-600 hover:bg-purple-500 text-black shadow-[0_0_20px_rgba(168,85,247,0.4)]"
              : "border border-white/10 hover:border-purple-500 hover:text-purple-300"
          }`}
      >
        {selected ? "Selected" : "Choose Plan"}
      </motion.button>

      {/* Glow hover effect */}
      {selected && (
        <div className="absolute inset-0 rounded-2xl blur-2xl opacity-30 transition duration-700 bg-purple-600/30"></div>
      )}
    </motion.div>
  );
}
