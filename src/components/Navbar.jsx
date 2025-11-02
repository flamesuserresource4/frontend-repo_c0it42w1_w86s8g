import { Rocket, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-tr from-fuchsia-500 to-cyan-400">
            <Rocket className="h-5 w-5" />
          </span>
          <span className="font-semibold tracking-tight">Nebula SaaS</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          <a href="#get-started" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:opacity-90 transition">Get Started</a>
        </nav>
        <button aria-label="Toggle menu" className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
          <Menu />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-4 text-white/80">
            <a href="#features" className="hover:text-white transition-colors" onClick={() => setOpen(false)}>Features</a>
            <a href="#pricing" className="hover:text-white transition-colors" onClick={() => setOpen(false)}>Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors" onClick={() => setOpen(false)}>Contact</a>
            <a href="#get-started" className="px-4 py-2 rounded-md bg-white text-black font-medium text-center" onClick={() => setOpen(false)}>Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
}
