// src/components/Features.jsx
import React from "react";

export default function Features() {
  return (
    <section id="features" className="mt-12 grid gap-8 md:grid-cols-3">
      <Card
        title="SEO goal setting"
        desc="Helps you set and achieve SEO goals with guided assistance."
      />
      <Card
        title="User-friendly dashboard"
        desc="Perform complex SEO audits and optimizations with a single click."
      />
      <Card
        title="Smart Keyword Generator"
        desc="Automatic suggestions and the best keywords to target."
      />
    </section>
  );
}

function Card({ title, desc }) {
  return (
    <div className="rounded-2xl p-6 py-10 bg-gradient-to-b from-white/2 to-white/1 border-2 border-gray-600 shadow-lg">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center font-bold">
        +
      </div>
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{desc}</p>
    </div>
  );
}
