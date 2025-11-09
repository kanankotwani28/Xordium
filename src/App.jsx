// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Features from "./components/Features";
import VerifyFeatures from "./components/VerifyFeatures";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

// Auth & protected routing
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";

// Pages
import Auth from "./pages/Login"; // combined auth page (Login + Signup tabs)
import Dashboard from "./pages/dashboard/Dashboard";

export default function App() {
  // Inline Home component preserving your original landing structure
  const Home = () => (
    <main className="px-6 md:px-12 lg:px-24">
      <Hero />
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
                    <Dashboard />
                  </ProtectedRoute>
                }
              />

              {/* Fallback - redirect unknown routes to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
