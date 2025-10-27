import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <SolutionsSection />
      <PricingSection />
      <ContactSection />
      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="container mx-auto px-6 py-8 text-center text-white/60 text-sm">
          © {new Date().getFullYear()} AI Automation Agency. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
