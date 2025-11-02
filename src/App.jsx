import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CTA />
      </main>
      <footer className="bg-[#0a0a0f] border-t border-white/10 py-8 text-center text-white/60">
        <p>© {new Date().getFullYear()} Nebula SaaS. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
