export default function Hero() {
    return (
        <section className="mt-8 grid gap-8 md:grid-cols-2 items-center">
            <div>
                <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-black text-xs px-3 py-1 rounded-full">Latest integration just arrived</span>
                <h1 className="mt-6 text-4xl md:text-5xl font-extrabold leading-tight">
                    Verify News
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300">with AI.</span>
                </h1>
                <p className="mt-4 text-gray-300 max-w-xl">Elevate your knowledge about the world and things happening around you with VerifAI — fast verification, clear signals, and guided SEO-focused insights.</p>
                <div className="mt-6 flex gap-3">
                    <button className="rounded-full bg-white px-4 py-2 text-black font-medium shadow-md">Start for free</button>
                    <button className="rounded-full border border-white/10 px-4 py-2 text-sm">How it works</button>
                </div>
            </div>


            <div className="relative">
                <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-[#1b1530] to-[#1a0826] shadow-[inset_0_0_80px_rgba(124,58,237,0.35)] flex items-center justify-center">
                    <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="10" width="200" height="200" rx="28" fill="url(#g)" />
                        <defs>
                            <linearGradient id="g" x1="0" x2="1">
                                <stop offset="0" stopColor="#3b0764" />
                                <stop offset="1" stopColor="#7c2ae8" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
        </section>
    );
}