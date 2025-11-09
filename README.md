# 🧠 VerifyAI — AI-driven News Verification Platform

VerifyAI is a modern web platform built with **React + Tailwind CSS**, designed to help users verify the authenticity of news, analyze source credibility, and visualize trust signals — all powered by artificial intelligence.

This project includes a **custom dark theme**, **gradient-based purple palette**, and a **fully themed scrollbar** that matches the brand aesthetic.

---

## 🚀 Tech Stack

- **Frontend:** React 18 + Vite  
- **Styling:** Tailwind CSS (custom theme)  
- **Icons:** Lucide React  
- **Language:** TypeScript (optional)  
- **Design Tokens:** Extracted from Figma color palette

---

## 🎨 Theme Overview

VerifyAI’s UI is built around a **dark, minimal design** with a focus on readability, subtle gradients, and purple accents.

| Element | Description | Example |
|----------|--------------|---------|
| Background | Deep gradient from near-black to muted purple | `from-purple-90/40 via-gray-20 to-black` |
| Text | Shades of white with varying opacity for hierarchy | `text-white-100`, `text-white-70`, `text-white-60` |
| Accent | Core purple accent across UI | `#9855FF`, `#8C45FF`, `#622A9A` |
| Shadows | Soft purple glows for highlights | `shadow-purple-glow`, `shadow-purple-inner` |

All of these are configured via custom tokens inside your `tailwind.config.ts` file.

---

## 🧩 Features

- 🎯 **Themed Components** — Every component (Navbar, Hero, Footer, Features) follows a unified dark aesthetic.  
- 🪄 **Custom Scrollbar** — Scrollbars match the site’s color palette (purple thumb, black track, glowing edges).  
- ⚡ **Fully Responsive** — Smooth scaling across all device sizes.  
- 💬 **Lucide Icons** — Crisp, scalable icons optimized for dark backgrounds.  
- 🎨 **Gradient Backgrounds** — Subtle purple-to-black gradients enhance depth and contrast.

---

## 🧱 Folder Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── VerifyFeatures.jsx
│   ├── Trusted.jsx
│   ├── Button.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/
│   └── Home.jsx
├── styles/
│   └── index.css   # includes scrollbar customization
├── App.jsx
└── main.jsx
```

---

## 🎨 Custom Scrollbar Setup

Your project includes a fully themed scrollbar that aligns with the VerifyAI brand colors.

**Location:** `src/styles/index.css`

```css
/* === Global Scrollbar Styling === */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #0a090f;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, #9855ff 0%, #8c45ff 100%);
  border-radius: 10px;
  border: 2px solid #0a090f;
  box-shadow: 0 0 8px rgba(140, 69, 255, 0.4);
  transition: background 0.3s ease;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(180deg, #a975ff 0%, #9855ff 100%);
}

/* Firefox Support */
* {
  scrollbar-color: #9855ff #0a090f;
  scrollbar-width: thin;
}
```

✅ **Result:**  
- Purple glowing scrollbar thumb (`#9855FF → #8C45FF`)  
- Off-black background for subtle contrast  
- Smooth hover transitions  
- Works on Chrome, Edge, and Firefox

---

## 🧠 Tailwind Theme Tokens (Simplified)

```js
colors: {
  black: "#000000",
  white: "#FFFFFF",
  "gray-10": "#020103",
  "gray-20": "#0B0A0F",
  "gray-30": "#1A1920",
  "purple-80": "#622A9A",
  "purple-90": "#8C45FF",
  "white-100": "rgba(255,255,255,1)",
  "white-70": "rgba(255,255,255,0.7)",
  "white-60": "rgba(255,255,255,0.6)",
  "white-15": "rgba(255,255,255,0.15)",
},
boxShadow: {
  "purple-glow": "0 0 20px rgba(140,69,255,0.5)",
  "purple-inner": "inset 0 0 30px rgba(140,69,255,0.3)",
},
```

---

## 🧪 Running Locally

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Start development server
npm run dev

# 3️⃣ Open in browser
http://localhost:5173
```

---

## 📷 Design Preview

**Theme:** Purple Glow  
**Gradient:** Purple → Deep Black  
**Accent:** AI-inspired clean neon finish  

<p align="center">
  <img src="https://via.placeholder.com/800x400/0a090f/FFFFFF?text=VerifyAI+Preview" width="80%" alt="VerifyAI Preview"/>
</p>

---

## ⚙️ Future Enhancements

- 🧩 Add dark/light theme toggle  
- 🌍 Internationalized UI (i18n support)  
- 🧾 Dynamic AI-powered data fetching for verified news  
- 🪶 Accessibility improvements (ARIA roles, focus styles)

---

## 🧑‍💻 Author

**Aayush Arya**  
Frontend Developer • React | Tailwind | Firebase | REST API  
🚀 *Building scalable, visually consistent UI systems for the future.*

---

## 📜 License
This project is licensed under the **MIT License** — free for personal and commercial use.

---

> **“Clarity builds trust — VerifyAI helps you see the truth through the noise.”**
