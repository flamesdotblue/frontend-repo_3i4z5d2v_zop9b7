import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-[90vh] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient aura on top of Spline (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.25),rgba(2,6,23,0.2)_60%,rgba(2,6,23,1)_100%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm backdrop-blur">
            <Rocket className="h-4 w-4 text-violet-400" />
            <span className="text-white/80">AI Agency</span>
          </div>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold leading-tight">
            Transform Your Business with AI Automation
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-white/80 max-w-2xl">
            Unlock smarter workflows, boost productivity, and drive growth with next-gen voice and chat agents.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 rounded-lg bg-violet-500 hover:bg-violet-600 transition-colors px-5 py-3 font-medium">
              Start Free Trial
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-colors px-5 py-3 font-medium">
              See Demo
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 transition-colors px-5 py-3 font-medium">
              Contact for Enterprise
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
