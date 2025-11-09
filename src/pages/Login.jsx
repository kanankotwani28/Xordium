import React, { useState } from "react";
import { auth } from "../firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
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
                setTimeout(() => navigate("/dashboard"), 800);
            } else {
                await createUserWithEmailAndPassword(auth, email, password);
                setSuccess("Account created successfully! You can now login.");
            }
        } catch (error) {
            console.error("🔥 Firebase error:", error);
            if (error.code === "auth/invalid-email") setError("Invalid email format.");
            else if (error.code === "auth/email-already-in-use")
                setError("Email already in use. Try logging in.");
            else if (error.code === "auth/user-not-found")
                setError("No account found with this email.");
            else if (error.code === "auth/wrong-password")
                setError("Incorrect password.");
            else setError("Authentication failed. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-[#07060a] overflow-hidden">
            {/* Gradient Pattern Background */}
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
            ></div>

            {/* Form Card Container */}
            <div className="relative w-[720px] max-w-full min-h-[420px] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.7)] z-10">
                {/* Sign Up Panel */}
                <div
                    className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-500 ease-in-out ${!signIn ? "translate-x-full opacity-100 z-[5]" : "opacity-0 z-[1]"
                        }`}
                >
                    <form className="bg-[#18141d] flex items-center justify-center flex-col px-[50px] h-full text-center">
                        <h1 className="font-semibold text-2xl text-white">Create Account</h1>

                        <input
                            type="text"
                            placeholder="Full name"
                            className="mt-6 w-full rounded-md bg-[#222030] border border-[#3a3750] py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8C45FF]"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="mt-3 w-full rounded-md bg-[#222030] border border-[#3a3750] py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8C45FF]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="w-full relative mt-3">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-md bg-[#222030] border border-[#3a3750] py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8C45FF]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="mt-6 rounded-full py-3 px-12 text-sm font-semibold text-white tracking-wider bg-gradient-to-r from-[#8C45FF] to-[#602A9A] hover:brightness-110 active:scale-95 transition-all"
                        >
                            {loading ? "Please wait..." : "Sign Up"}
                        </button>

                        {error && (
                            <p className="text-red-400 text-sm bg-red-950/40 px-3 py-2 rounded w-full my-3">
                                {error}
                            </p>
                        )}
                        {success && (
                            <p className="text-green-400 text-sm bg-green-950/40 px-3 py-2 rounded w-full my-3">
                                {success}
                            </p>
                        )}
                    </form>
                </div>

                {/* Sign In Panel */}
                <div
                    className={`absolute top-0 left-0 w-1/2 h-full transition-all duration-500 ease-in-out z-[2] ${!signIn ? "translate-x-full" : "translate-x-0"
                        }`}
                >
                    <form className="bg-[#18141d] flex items-center justify-center flex-col px-[50px] h-full text-center">
                        <h1 className="font-semibold text-2xl text-white">Sign In</h1>

                        <input
                            type="email"
                            placeholder="Email"
                            className="mt-6 w-full rounded-md bg-[#222030] border border-[#3a3750] py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8C45FF]"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <div className="w-full relative mt-3">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full rounded-md bg-[#222030] border border-[#3a3750] py-3 px-4 text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8C45FF]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword((prev) => !prev)}
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
                            className="mt-2 rounded-full py-3 px-12 text-sm font-semibold text-white tracking-wider bg-gradient-to-r from-[#8C45FF] to-[#602A9A] hover:brightness-110 active:scale-95 transition-all"
                        >
                            {loading ? "Please wait..." : "Sign In"}
                        </button>

                        {error && (
                            <p className="text-red-400 text-sm bg-red-950/40 px-3 py-2 rounded w-full my-3">
                                {error}
                            </p>
                        )}
                        {success && (
                            <p className="text-green-400 text-sm bg-green-950/40 px-3 py-2 rounded w-full my-3">
                                {success}
                            </p>
                        )}
                    </form>
                </div>

                {/* Overlay Section */}
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
                            className={`absolute left-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center text-white transition-transform duration-500 ${!signIn ? "translate-x-0" : "-translate-x-5"
                                }`}
                        >
                            <h2 className="text-2xl font-bold">Welcome Back!</h2>
                            <p className="text-sm mt-3 text-white/85">
                                To keep connected with us, please log in with your credentials.
                            </p>
                            <button
                                type="button"
                                onClick={() => setSignIn(true)}
                                className="mt-6 rounded-full py-3 px-10 text-sm font-semibold bg-white text-[#602A9A] hover:bg-white/90 transition-all"
                            >
                                Sign In
                            </button>
                        </div>

                        <div
                            className={`absolute right-0 w-1/2 h-full flex flex-col items-center justify-center px-10 text-center text-white transition-transform duration-500 ${!signIn ? "translate-x-3" : "translate-x-0"
                                }`}
                        >
                            <h2 className="text-2xl font-bold">Hello, Friend!</h2>
                            <p className="text-sm mt-3 text-white/85">
                                Enter your personal details and start your journey with us.
                            </p>
                            <button
                                type="button"
                                onClick={() => setSignIn(false)}
                                className="mt-6 rounded-full py-3 px-10 text-sm font-semibold border border-white/40 text-white hover:bg-white/10 transition-all"
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
