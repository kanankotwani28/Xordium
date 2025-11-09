import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Features from "./components/Features";
import Clients from "./components/Clients";
import Pricing from "./components/Pricing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#07060a] text-gray-100 antialiased">
      <Navbar />
      <main className="px-4 md:px-10 lg:px-24">
        <Hero />
        <Trusted />
        <Features />
        <Clients />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
