import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$600',
    description: 'Up to 200 calls/month, basic script, email support',
    cta: 'Start Now',
    featured: false,
  },
  {
    name: 'Pro',
    price: '$900',
    description: 'Unlimited calls, CRM integration, priority support, analytics',
    cta: 'Upgrade',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Unlimited agents, full customization, dedicated support, SLA',
    cta: 'Talk to Us',
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="relative bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Straightforward Pricing. Serious Value.</h2>
          <p className="mt-3 text-white/70">Choose a plan that fits your growth stage. Scale anytime.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-xl border border-white/10 p-6 bg-white/5 ${plan.featured ? 'ring-2 ring-violet-500' : ''}`}
            >
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <span className="text-2xl font-semibold">{plan.price}</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{plan.description}</p>

              <ul className="mt-6 space-y-2 text-sm">
                {plan.name === 'Starter' && (
                  <>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> 200 calls/month</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Basic script</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Email support</li>
                  </>
                )}
                {plan.name === 'Pro' && (
                  <>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Unlimited calls</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> CRM integration</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Priority support</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Analytics</li>
                  </>
                )}
                {plan.name === 'Enterprise' && (
                  <>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Unlimited agents</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Full customization</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Dedicated support</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> SLA</li>
                  </>
                )}
              </ul>

              <a
                href="#contact"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 font-medium transition-colors ${plan.featured ? 'bg-violet-500 hover:bg-violet-600' : 'border border-white/15 bg-white/5 hover:bg-white/10'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
          <p className="text-white/80">
            Perfect for any business: roofing, real estate, dental, service, or e‑commerce—our AI solutions work for you.
          </p>
        </div>
      </div>
    </section>
  );
}
