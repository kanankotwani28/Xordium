// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Trusted from "./components/Trusted";
import Features from "./components/Features";
import VerifyFeatures from "./components/VerifyFeatures";
// import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Auth & protected routing
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

// Pages
import Auth from "./pages/Login"; // combined auth page (Login + Signup tabs). Update path if you kept a different file.
import Dashboard from "./pages/dashboard/Dashboard";
import NotFound from "./pages/NotFound";

//Routes
import DashboardRoute from "./routes/DashboardRoute";

export default function App() {
  // Inline Home component preserving your original landing structure
  const Home = () => (
    <main className="px-4 md:px-10 lg:px-24">
      {/* selection section with patterned grid + subtle moving gradient background */}
      <section className="w-full h-[80vh] relative overflow-hidden rounded-2xl">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1200 600"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="gridPattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M40 0 L0 0 0 40"
                fill="none"
                stroke="white"
                strokeWidth="1"
                strokeOpacity="0.15"
              />
            </pattern>

            <filter id="softBlur">
              <feGaussianBlur stdDeviation="0.6" />
            </filter>
          </defs>

          {/* if you don't have movingGrad defined, keep this rect transparent or remove it */}
          <rect x="0" y="0" width="1200" height="600" fill="transparent" opacity="0.9" />
          <rect
            x="0"
            y="0"
            width="1200"
            height="600"
            fill="url(#gridPattern)"
            filter="url(#softBlur)"
            opacity="0.9"
          />
        </svg>

        {/* content above background */}
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <Hero />
        </div>
      </section>

      {/* <Trusted /> */}
      <Features />
      <VerifyFeatures />
      {/* <Clients /> */}
      <Pricing />
      <CTA />
    </main>
  );

  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-[#07060a] text-gray-100 antialiased flex flex-col">
          <Navbar />

          <div className="flex-1">
            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />} />

              {/* Combined auth page (login + signup tabs) */}
              <Route path="/auth" element={<Auth />} />

              {/* Backwards-compatible routes: redirect /login and /signup to /auth */}
              <Route path="/login" element={<Navigate to="/auth" replace />} />
              <Route path="/signup" element={<Navigate to="/auth" replace />} />

              {/* Protected dashboard */}
              <Route
                path="/dashboard/*"
                element={
                  <ProtectedRoute>
                    <DashboardRoute />
                  </ProtectedRoute>
                }
              />

              {/* 404 fallback */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}