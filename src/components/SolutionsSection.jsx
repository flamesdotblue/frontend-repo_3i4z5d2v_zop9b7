import { Phone, MessageSquare, Globe, BarChart3, Plug } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="group rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
    <div className="flex items-center gap-3">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
    </div>
    <p className="mt-3 text-sm text-white/70">{description}</p>
  </div>
);

export default function SolutionsSection() {
  return (
    <section id="solutions" className="relative bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">AI-Powered Solutions Crafted for Growth</h2>
          <p className="mt-3 text-white/70">Voice and chat agents that integrate with your tools to capture leads, book appointments, and deliver real-time support.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard icon={Phone} title="Voice Agents" description="Automate calls, lead capture, and appointment booking." />
          <FeatureCard icon={MessageSquare} title="Chatbots" description="Engage visitors, answer questions, qualify leads 24/7." />
          <FeatureCard icon={Globe} title="Multi-Language" description="English, Afrikaans, Zulu, and more." />
          <FeatureCard icon={Plug} title="Seamless Integration" description="Websites, CRMs (GoHighLevel, etc.), automation platforms." />
          <FeatureCard icon={BarChart3} title="Transparent Analytics" description="Track performance, conversions, and user satisfaction." />
          <FeatureCard icon={Globe} title="Any Industry" description="From roofing to dental to e‑commerce—our AI adapts to you." />
        </div>
      </div>
    </section>
  );
}
