import { CheckCircle2 } from 'lucide-react';
import { useMemo, useState } from 'react';

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

function PricingCalculator() {
  const [callsPerMonth, setCallsPerMonth] = useState(800);
  const [avgCallCost, setAvgCallCost] = useState(2.5); // $ per call with humans/tools
  const [deflectionRate, setDeflectionRate] = useState(60); // % handled by AI
  const [conversionLift, setConversionLift] = useState(15); // % boost from instant replies

  const results = useMemo(() => {
    const handledByAI = Math.round(callsPerMonth * (deflectionRate / 100));
    const savings = handledByAI * avgCallCost; // monthly cost avoided
    const extraRevenue = (callsPerMonth * (conversionLift / 100)) * 5; // rough $5 value per improved touch
    const totalBenefit = Math.round(savings + extraRevenue);
    return { handledByAI, savings: Math.round(savings), extraRevenue: Math.round(extraRevenue), totalBenefit };
  }, [callsPerMonth, avgCallCost, deflectionRate, conversionLift]);

  return (
    <div className="mt-12 rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold">Estimate Your ROI</h3>
      <p className="mt-1 text-white/70 text-sm">Adjust the sliders to see how much you can save and earn monthly.</p>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-5">
          <div>
            <label className="flex justify-between text-sm text-white/70">
              <span>Calls per month</span><span className="text-white/90 font-medium">{callsPerMonth}</span>
            </label>
            <input type="range" min="100" max="5000" step="50" value={callsPerMonth} onChange={(e) => setCallsPerMonth(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="flex justify-between text-sm text-white/70">
              <span>Average cost per call ($)</span><span className="text-white/90 font-medium">${avgCallCost.toFixed(2)}</span>
            </label>
            <input type="range" min="0.5" max="10" step="0.1" value={avgCallCost} onChange={(e) => setAvgCallCost(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="flex justify-between text-sm text-white/70">
              <span>AI handling rate (%)</span><span className="text-white/90 font-medium">{deflectionRate}%</span>
            </label>
            <input type="range" min="10" max="100" step="1" value={deflectionRate} onChange={(e) => setDeflectionRate(Number(e.target.value))} className="w-full" />
          </div>
          <div>
            <label className="flex justify-between text-sm text-white/70">
              <span>Conversion lift (%)</span><span className="text-white/90 font-medium">{conversionLift}%</span>
            </label>
            <input type="range" min="0" max="50" step="1" value={conversionLift} onChange={(e) => setConversionLift(Number(e.target.value))} className="w-full" />
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 p-5">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-white/70">Handled by AI</div>
              <div className="text-2xl font-semibold">{results.handledByAI}</div>
            </div>
            <div>
              <div className="text-white/70">Monthly savings</div>
              <div className="text-2xl font-semibold">${results.savings}</div>
            </div>
            <div>
              <div className="text-white/70">Extra revenue</div>
              <div className="text-2xl font-semibold">${results.extraRevenue}</div>
            </div>
            <div>
              <div className="text-white/70">Total benefit</div>
              <div className="text-2xl font-semibold">${results.totalBenefit}</div>
            </div>
          </div>
          <a href="#contact" className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-violet-500 hover:bg-violet-600 px-4 py-3 font-medium">See ROI Breakdown</a>
        </div>
      </div>
    </div>
  );
}

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

        <PricingCalculator />
      </div>
    </section>
  );
}
