import React from "react";
import { X, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const product = ["Features", "Integration", "Updates", "FAQ", "Pricing"];
  const company = [
    "About",
    "Blog",
    "Careers",
    "Manifesto",
    "Press",
    "Contract",
  ];
  const resources = ["Examples", "Community", "Guides", "Docs", "Press"];
  const legal = ["Privacy", "Terms", "Security"];

  return (
    <footer className="bg-[#050406] text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {/* Left: Logo + Info */}
          <div className="flex flex-col gap-6 md:w-1/3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#622A9A] to-[#8C45FF] flex items-center justify-center shadow-[0_0_15px_rgba(140,69,255,0.5)]">
                <div className="w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
              </div>
              <span className="text-white font-medium text-base tracking-wide">
                VerifAI
              </span>
            </div>

            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Tools and infrastructure to help teams build and launch AI
              products faster with precision and performance.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-5 pt-2">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <X size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Right: Link Columns */}
          <div className="w-full md:w-2/3 grid grid-cols-2 sm:grid-cols-4 gap-8">
            <FooterColumn title="Product" items={product} />
            <FooterColumn title="Company" items={company} />
            <FooterColumn title="Resources" items={resources} />
            <FooterColumn title="Legal" items={legal} />
          </div>
        </div>

        {/* Bottom minimal text */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500 gap-4">
          <p>
            © {new Date().getFullYear()} AI Startup Kit. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Terms
            </a>
            <a href="#" className="hover:text-gray-300 transition">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }) {
  return (
    <div>
      <h4 className="text-white font-medium mb-3">{title}</h4>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="text-gray-400 hover:text-gray-200 transition-colors text-sm"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
