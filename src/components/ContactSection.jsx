import { Mail, Building2, MessageSquare, ArrowRight } from 'lucide-react';

function BlogCard({ title, tag, excerpt }) {
  return (
    <a href="#contact" className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition-colors block">
      <div className="text-xs uppercase tracking-wide text-violet-300">{tag}</div>
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{excerpt}</p>
      <div className="mt-4 inline-flex items-center gap-2 text-sm text-violet-300">
        Read more <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-slate-950 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        {/* AI-Powered Content Hub */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold">Insights from Our AI</h2>
          <p className="mt-3 text-white/70">Guides, automation tips, and industry insights generated and curated by our own agents.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <BlogCard tag="Guide" title="How Voice Agents Boost Lead Capture 3x" excerpt="Learn how instant voice responses turn missed calls into booked appointments." />
          <BlogCard tag="Playbook" title="Integrate AI with Your CRM in 30 Minutes" excerpt="Connect GoHighLevel or your CRM to automate follow-ups and reporting." />
          <BlogCard tag="Benchmark" title="Chat vs Voice: When to Use Each" excerpt="Find the right balance to maximize satisfaction and conversion." />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold">Ready to Accelerate Your Business with AI?</h3>
            <p className="mt-3 text-white/70">Start your journey today. Chat with us, book a free demo, or explore flexible solutions for your business.</p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-white/80"><MessageSquare className="h-5 w-5 text-violet-300" /> Book a free demo</div>
              <div className="flex items-center gap-3 text-white/80"><Mail className="h-5 w-5 text-violet-300" /> hello@youragency.com</div>
              <div className="flex items-center gap-3 text-white/80"><Building2 className="h-5 w-5 text-violet-300" /> Enterprise inquiries welcome</div>

              <blockquote className="mt-6 rounded-lg border border-white/10 bg-white/5 p-4 text-sm text-white/80">
                “Integrating voice agents helped us qualify 3x more leads in less time. Game changer!”
              </blockquote>
            </div>

            <div className="mt-8 rounded-xl border border-violet-700/30 bg-gradient-to-br from-violet-600/10 to-fuchsia-600/10 p-6">
              <h4 className="text-xl font-semibold">Enterprise? Let's Build Your Perfect AI Automation</h4>
              <p className="mt-2 text-white/80">Schedule a call and co‑create a solution that fits your unique needs—advanced integration, dedicated support, and flexible volume pricing.</p>
              <a href="#contact" className="mt-4 inline-flex items-center rounded-lg bg-violet-500 hover:bg-violet-600 transition-colors px-5 py-3 font-medium">Request Consultation</a>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm text-white/70">Name</label>
                <input type="text" required className="mt-1 rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
              <div className="flex flex-col">
                <label className="text-sm text-white/70">Email</label>
                <input type="email" required className="mt-1 rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm text-white/70">Business Type</label>
                <input type="text" className="mt-1 rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm text-white/70">Interested Services</label>
                <select className="mt-1 rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500">
                  <option>Voice Agents</option>
                  <option>Chatbots</option>
                  <option>Integrations</option>
                  <option>Analytics</option>
                </select>
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm text-white/70">Message</label>
                <textarea rows="5" className="mt-1 rounded-lg bg-slate-900/70 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center rounded-lg bg-violet-500 hover:bg-violet-600 transition-colors px-5 py-3 font-medium">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}
