export default function Clients() {
    return (
        <section id="clients" className="mt-16 py-8">
            <h2 className="text-2xl font-semibold">Our clients</h2>
            <div className="mt-6 grid md:grid-cols-3 gap-6 items-center">
                <div className="col-span-1 rounded-xl bg-gradient-to-br from-white/2 to-white/1 p-6">
                    <p className="text-sm text-gray-300">"This product has completely transformed how I see the news and get verified results"</p>
                    <p className="mt-4 font-semibold">Talia Taylor</p>
                </div>
                <div className="md:col-span-2 bg-gradient-to-br from-[#0d0710] to-[#180824] rounded-xl p-6">
                    <p className="text-sm text-gray-400">Short case study or testimonial area. Add logos, metrics and a short quote here.</p>
                </div>
            </div>
        </section>
    );
}