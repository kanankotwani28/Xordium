// src/components/Features.jsx
import React from "react";

export default function Features() {
  return (
    <section id="features" className="mt-12 grid gap-8 md:grid-cols-3">
      <Card
        icon="🧠"
        title="AI-Powered Credibility Scoring"
        desc="Our advanced NLP models analyze news content to determine its authenticity and assign a reliability score."
      />
      <Card
        icon="📊"
        title="Interactive Fake News Dashboard"
        desc="Explore misinformation trends through a powerful visual dashboard. Track fake news sources, and credibility scores."
      />
      <Card
        icon="⚡"
        title="Instant News Verification"
        desc="Paste any news headline, article, or URL to get an instant truthfulness assessment with AI-generated explanations."
      />
    </section>
  );
}

function Card({ icon, title, desc }) {
  return (
    <div className="rounded-2xl p-6 py-10 bg-gradient-to-b from-white/2 to-white/1 border-2 border-gray-600 shadow-lg">
      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center font-bold">
        {icon}
      </div>
      <h3 className="mt-4 font-semibold text-lg">{title}</h3>
      <p className="mt-2 text-sm text-gray-300">{desc}</p>
    </div>
  );
}
