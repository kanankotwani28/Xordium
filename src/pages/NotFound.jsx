// src/pages/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-90/10 to-black text-white-100 text-center px-6">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-80 to-purple-90 drop-shadow-[0_0_10px_rgba(140,69,255,0.6)]">
                404
            </h1>
            <p className="text-xl text-white-70 mt-2 mb-6">
                Oops! The page you’re looking for doesn’t exist.
            </p>
            <button
                onClick={() => navigate("/")}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-purple-80 to-purple-90 text-sm font-medium tracking-wide text-white-100 border border-white-15 shadow-purple-glow hover:shadow-[0_0_20px_rgba(140,69,255,0.6)] transition-all duration-300"
            >
                Go Back Home
            </button>
        </div>
    );
}
