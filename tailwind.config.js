import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ⚫ Neutral shades
        black: "#000000",
        white: "#FFFFFF",

        // 🔳 Dark backgrounds
        "gray-10": "#020103",
        "gray-20": "#0B0A0F",
        "gray-30": "#1A1920",
        "gray-40": "#282729",
        "gray-50": "#3D3D3D",

        // 🟣 Purple shades
        "purple-100": "#9855FF",
        "purple-90": "#8C45FF",
        "purple-80": "#622A9A",
        "purple-70": "#602A9A",
        "purple-60": "#4D3763",
        "purple-50": "#2A193C",

        // 💜 Accent gradients & lights
        "accent-light": "#F9F5FF",
        "accent-blue": "#8C45FF",
        "accent-soft": "#602A9A",

        // 🌗 Whites with opacity variants
        "white-100": "rgba(255, 255, 255, 1)",
        "white-70": "rgba(255, 255, 255, 0.7)",
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-50": "rgba(255, 255, 255, 0.5)",
        "white-15": "rgba(255, 255, 255, 0.15)",
        "white-10": "rgba(255, 255, 255, 0.10)",
      },

      // 🎨 Custom gradients
      backgroundImage: {
        "gradient-purple": "linear-gradient(135deg, #622A9A 0%, #8C45FF 100%)",
        "gradient-purple-light": "linear-gradient(135deg, #8C45FF 0%, #9855FF 100%)",
        "gradient-purple-dark": "linear-gradient(135deg, #2A193C 0%, #622A9A 100%)",
        "gradient-radial": "radial-gradient(circle, rgba(140,69,255,0.4) 0%, rgba(2,1,3,1) 100%)",
      },

      // 💡 Box shadow presets for glow effects
      boxShadow: {
        "purple-glow": "0 0 20px rgba(140, 69, 255, 0.5)",
        "purple-inner": "inset 0 0 30px rgba(140, 69, 255, 0.3)",
        "soft-inner": "inset 0 0 20px rgba(255, 255, 255, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
