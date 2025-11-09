export default function Cta() {
    return (
        <section className="mt-12 py-10 rounded-2xl bg-gradient-to-br from-[#0c0620] to-[#1a0b2a] text-center">
            <h3 className="text-xl font-semibold">AI-driven SEO for everyone.</h3>
            <p className="mt-3 text-sm text-gray-400">No credit card required · 7-days free trial</p>
            <div className="mt-4 flex justify-center">
                <input aria-label="email" className="w-full max-w-sm rounded-l-full px-4 py-2 bg-white/5 placeholder-gray-400" placeholder="Your email" />
                <button className="rounded-r-full bg-purple-600 px-6 py-2">Join waitlist</button>
            </div>
        </section>
    );
}