import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';
import { Rocket, Phone, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Sticky header with persistent CTAs */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/60">
        <div className="container mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#top" className="inline-flex items-center gap-2 text-white/90 font-medium">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-violet-600/20 text-violet-300"><Rocket className="h-4 w-4" /></span>
            AI Automation Agency
          </a>
          <nav className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="rounded-md border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-sm">Start Free Trial</a>
            <a href="#contact" className="rounded-md bg-violet-500 hover:bg-violet-600 px-3 py-1.5 text-sm font-medium">Book Demo</a>
            <a href="#contact" className="rounded-md border border-white/15 bg-white/5 hover:bg-white/10 px-3 py-1.5 text-sm">Contact</a>
          </nav>
        </div>
      </header>

      {/* Mobile sticky actions at bottom */}
      <div className="fixed md:hidden bottom-3 inset-x-3 z-50 flex gap-3">
        <a href="#contact" className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-violet-500 hover:bg-violet-600 px-4 py-3 text-sm font-medium shadow-lg shadow-violet-900/30">
          <Phone className="h-4 w-4" /> Book Demo
        </a>
        <a href="#pricing" className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-3 text-sm font-medium backdrop-blur">
          <MessageSquare className="h-4 w-4" /> Free Trial
        </a>
      </div>

      {/* Main sections */}
      <div id="top" className="pt-14"> {/* offset for sticky header */}
        <HeroSection />
        <SolutionsSection />
        <PricingSection />
        <ContactSection />
      </div>

      {/* Floating support chat bubble */}
      <a href="#contact" aria-label="Chat with us" className="fixed hidden md:inline-flex bottom-6 right-6 z-40 h-12 w-12 items-center justify-center rounded-full bg-violet-500 hover:bg-violet-600 shadow-xl shadow-violet-900/40">
        <MessageSquare className="h-5 w-5" />
      </a>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="container mx-auto px-6 py-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} AI Automation Agency. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
