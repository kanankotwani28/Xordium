import React from "react";
import {
    ShieldCheck,
    BarChart2,
    Search,
    Globe,
    Bell,
    Zap,
    FileText,
    Users,
    Settings,
} from "lucide-react";

const FEATURES = [
    {
        icon: <ShieldCheck size={18} />,
        title: "Real-time Fact Checks",
        desc: "Automatically verify breaking stories with cross-source comparisons and confidence scores.",
    },
    {
        icon: <BarChart2 size={18} />,
        title: "Trust Signals Dashboard",
        desc: "Get visual signals that summarize credibility, source history, and evidence strength.",
    },
    {
        icon: <Search size={18} />,
        title: "Source Traceability",
        desc: "Follow each claim back to its origin with links to primary sources and timestamps.",
    },
    {
        icon: <Globe size={18} />,
        title: "Global Coverage",
        desc: "Monitor trends from international and regional outlets across multiple categories.",
    },
    {
        icon: <Bell size={18} />,
        title: "Automated Alerts",
        desc: "Stay informed as our system flags new claims, corrections, or emerging misinformation.",
    },
    {
        icon: <Zap size={18} />,
        title: "AI-driven Summaries",
        desc: "Receive concise, neutral summaries of verified stories powered by natural language AI.",
    },
    {
        icon: <FileText size={18} />,
        title: "Policy & Attribution",
        desc: "Transparent source attribution and credibility scoring for every verified article.",
    },
    {
        icon: <Users size={18} />,
        title: "Collaboration Tools",
        desc: "Share notes, tag sources, and collaborate with editors or researchers in real time.",
    },
    {
        icon: <Settings size={18} />,
        title: "Custom Verification Rules",
        desc: "Tailor verification pipelines to your niche, from newsrooms to data teams.",
    },
];

export default function VerifyFeatures() {
    return (
        <section
            className="
        mt-12 
        py-16 
        rounded-2xl 
        relative overflow-hidden
        bg-gradient-to-br 
        from-purple-90/40 
        via-gray-20 
        to-black
        shadow-[inset_0_0_60px_rgba(140,69,255,0.15)]
      "
        >
            {/* faint radial glow background */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_left,rgba(140,69,255,0.25)_0%,transparent_70%)]" />

            <div className="relative max-w-6xl mx-auto px-6">
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white-100">
                        Elevate your <span className="text-accent-blue">verification</span> workflow.
                    </h2>
                    <p className="mt-3 text-white-70 max-w-2xl">
                        Empower your editorial or research team with AI-powered tools to analyze, verify,
                        and track the authenticity of any news or claim — instantly.
                    </p>
                </div>

                {/* Features grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {FEATURES.map((f, i) => (
                        <FeatureCard key={i} icon={f.icon} title={f.title} desc={f.desc} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, desc }) {
    return (
        <div className="flex gap-4 items-start">
            <div
                className="
          flex-shrink-0
          w-10 h-10
          rounded-lg
          bg-gradient-to-br from-purple-80 to-purple-90
          flex items-center justify-center
          shadow-purple-glow
        "
            >
                <div className="text-white-100">{icon}</div>
            </div>
            <div>
                <h3 className="text-white-100 font-medium text-lg">{title}</h3>
                <p className="mt-2 text-white-60 text-sm leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
