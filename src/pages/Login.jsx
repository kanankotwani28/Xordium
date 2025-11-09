// src/pages/Login.jsx
import React, { useState } from "react";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [signIn, setSignIn] = useState(true);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        setError("");
        setSuccess("");

        if (!email || !email.includes("@")) {
            setError("Please enter a valid email.");
            setLoading(false);
            return;
        }
        if (!password || password.length < 6) {
            setError("Please enter a valid password (min 6 characters).");
            setLoading(false);
            return;
        }

        try {
            if (signIn) {
                await signInWithEmailAndPassword(auth, email, password);
                setSuccess("Login successful!");
                setTimeout(() => navigate("/dashboard"), 700);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                setSuccess("Account created successfully! You can now login.");
            }
        } catch (err) {
            console.error(err);
            const code = err?.code;
            if (code === "auth/invalid-email") setError("Invalid email format.");
            else if (code === "auth/email-already-in-use")
                setError("Email already in use. Try logging in.");
            else if (code === "auth/user-not-found")
                setError("No account found with this email.");
            else if (code === "auth/wrong-password") setError("Incorrect password.");
            else setError("Authentication failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
    // Center within viewport minus navbar height (64px). Change 64px if your navbar is taller/shorter.
    <div className="relative min-h-[calc(100vh-64px)] flex items-center justify-center bg-[#07060a] overflow-hidden">
            {/* Radial purple dot background */}
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
            />

            {/* Card - centered horizontally by mx-auto and vertically by parent flex */}
            <div className="absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[720px] max-w-full min-h-[420px] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.7)]">
                {/* Sign Up */}
                <div
                    className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-500 ease-in-out ${!signIn ? "translate-x-full opacity-100 z-[5]" : "opacity-0 z-[1]"
                        }`}
                >
                    <form className="h-full flex flex-col items-center justify-center px-12 bg-[#18141d] text-center rounded-l-2xl">
                        <h1 className="text-2xl font-semibold text-white">Create Account</h1>

                        <input
                            type="text"
                            placeholder="Full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-6 w-full max-w-[260px] rounded-md bg-[#222030] border border-[#3a3750] py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8C45FF]"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-3 w-full max-w-[260px] rounded-md bg-[#222030] border border-[#3a3750] py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8C45FF]"
                        />
                        <div className="w-full max-w-[260px] relative mt-3">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-md bg-[#222030] border border-[#3a3750] py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8C45FF]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((p) => !p)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="mt-6 rounded-full py-3 px-12 text-sm font-semibold text-white tracking-wider bg-gradient-to-r from-[#8C45FF] to-[#602A9A] hover:brightness-110 transition-all"
                        >
                            {loading ? "Please wait..." : "Sign Up"}
                        </button>

                        {error && (
                            <p className="text-red-400 text-sm bg-red-950/30 px-3 py-2 rounded w-full max-w-[260px] my-3">
                                {error}
                            </p>
                        )}
                        {success && (
                            <p className="text-green-400 text-sm bg-green-950/30 px-3 py-2 rounded w-full max-w-[260px] my-3">
                                {success}
                            </p>
                        )}
                    </form>
                </div>

                {/* Sign In */}
                <div
                    className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-500 ease-in-out z-[2] ${!signIn ? "translate-x-full" : "translate-x-0"
                        }`}
                >
                    <form className="h-full flex flex-col items-center justify-center px-12 bg-[#18141d] text-center rounded-l-2xl">
                        <h1 className="text-2xl font-semibold text-white">Sign In</h1>

                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-6 w-full max-w-[260px] rounded-md bg-[#222030] border border-[#3a3750] py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8C45FF]"
                        />
                        <div className="w-full max-w-[260px] relative mt-3">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-md bg-[#222030] border border-[#3a3750] py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8C45FF]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((p) => !p)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <a href="#" className="text-sm text-gray-400 my-3">
                            Forgot your password?
                        </a>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="mt-2 rounded-full py-3 px-12 text-sm font-semibold text-white tracking-wider bg-gradient-to-r from-[#8C45FF] to-[#602A9A] hover:brightness-110 transition-all"
                        >
                            {loading ? "Please wait..." : "Sign In"}
                        </button>

                        {error && (
                            <p className="text-red-400 text-sm bg-red-950/30 px-3 py-2 rounded w-full max-w-[260px] my-3">
                                {error}
                            </p>
                        )}
                        {success && (
                            <p className="text-green-400 text-sm bg-green-950/30 px-3 py-2 rounded w-full max-w-[260px] my-3">
                                {success}
                            </p>
                        )}
                    </form>
                </div>

                {/* Overlay */}
                <div
                    className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-500 ease-in-out z-[100] ${!signIn ? "-translate-x-full" : ""
                        }`}
                >
                    <div
                        className={`relative left-[-100%] h-full w-[200%] transition-transform duration-500 ease-in-out ${!signIn ? "translate-x-1/2" : ""
                            }`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-[#8C45FF] to-[#602A9A]" />

                        <div
                            className={`absolute left-0 w-1/2 h-full flex flex-col items-center justify-center px-8 text-center text-white transition-transform duration-500 ${!signIn ? "translate-x-0" : "-translate-x-5"
                                }`}
                        >
                            <h2 className="text-2xl font-bold">Welcome Back!</h2>
                            <p className="text-sm mt-3 text-white/85">
                                To keep connected with us, please log in with your credentials.
                            </p>
                            <button
                                type="button"
                                onClick={() => setSignIn(true)}
                                className="mt-6 rounded-full py-3 px-8 text-sm font-semibold bg-white text-[#602A9A] hover:bg-white/90 transition-all"
                            >
                                Sign In
                            </button>
                        </div>

                        <div
                            className={`absolute right-0 w-1/2 h-full flex flex-col items-center justify-center px-8 text-center text-white transition-transform duration-500 ${!signIn ? "translate-x-3" : "translate-x-0"
                                }`}
                        >
                            <h2 className="text-2xl font-bold">Hello, Friend!</h2>
                            <p className="text-sm mt-3 text-white/85">Enter your details and start your journey.</p>
                            <button
                                type="button"
                                onClick={() => setSignIn(false)}
                                className="mt-6 rounded-full py-3 px-8 text-sm font-semibold border border-white/40 text-white hover:bg-white/10 transition-all"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
