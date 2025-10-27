import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight, Mic, Send } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

function AIDemoWidget() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI voice/chat agent. Ask me about pricing, integrations, or booking a demo.' },
  ]);
  const [input, setInput] = useState('');
  const [listening, setListening] = useState(false);
  const listRef = useRef(null);
  const recognitionRef = useRef(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages.length]);

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recog = new SpeechRecognition();
      recog.lang = 'en-US';
      recog.interimResults = false;
      recog.continuous = false;
      recog.onresult = (e) => {
        const transcript = Array.from(e.results).map(r => r[0].transcript).join(' ');
        setInput(transcript);
      };
      recog.onend = () => setListening(false);
      recognitionRef.current = recog;
    }
  }, []);

  const send = (text) => {
    const content = (text ?? input).trim();
    if (!content) return;
    setMessages((m) => [...m, { role: 'user', content }]);
    setInput('');

    // Simulated agent reply
    setTimeout(() => {
      const reply = simulateAgent(content);
      setMessages((m) => [...m, { role: 'assistant', content: reply }]);
    }, 500);
  };

  const toggleListen = () => {
    const recog = recognitionRef.current;
    if (!recog) return;
    if (listening) {
      recog.stop();
      setListening(false);
    } else {
      setListening(true);
      try { recog.start(); } catch (_) { setListening(false); }
    }
  };

  return (
    <div className="group relative w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur shadow-2xl overflow-hidden">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-tr from-violet-600/20 via-fuchsia-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      <div className="relative p-4">
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-sm text-white/80"><Rocket className="h-4 w-4 text-violet-300" /> Try Our AI Now</div>
          <span className="text-xs text-white/60">Live demo</span>
        </div>
        <div ref={listRef} className="mt-3 h-56 overflow-y-auto rounded-lg bg-slate-950/40 p-3 space-y-3 border border-white/5">
          {messages.map((m, i) => (
            <div key={i} className={`max-w-[85%] rounded-lg px-3 py-2 text-sm ${m.role === 'assistant' ? 'bg-white/5 text-white/90' : 'bg-violet-600/80 text-white ml-auto'}`}>
              {m.content}
            </div>
          ))}
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button
            onClick={toggleListen}
            disabled={!recognitionRef.current}
            className={`inline-flex items-center justify-center rounded-lg border border-white/10 px-3 py-2 ${listening ? 'bg-red-500/90 hover:bg-red-500' : 'bg-white/5 hover:bg-white/10'} transition-colors`}
            title={recognitionRef.current ? (listening ? 'Stop listening' : 'Start voice input') : 'Voice not supported'}
          >
            <Mic className="h-4 w-4" />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Ask anything..."
            className="flex-1 rounded-lg bg-slate-950/40 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button onClick={() => send()} className="inline-flex items-center justify-center gap-2 rounded-lg bg-violet-500 hover:bg-violet-600 px-3 py-2 text-sm font-medium">
            <Send className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function simulateAgent(text) {
  const t = text.toLowerCase();
  if (t.includes('price') || t.includes('cost')) {
    return 'Our Starter plan begins at $600/month and Pro at $900/month. Need help choosing?';
  }
  if (t.includes('book') || t.includes('demo')) {
    return 'I can book a demo for you. What time works best? You can also click Book Demo at the top right.';
  }
  if (t.includes('integrations') || t.includes('crm') || t.includes('gohighlevel')) {
    return 'We integrate with CRMs like GoHighLevel and more. Tell me your stack and I\'ll confirm compatibility.';
  }
  if (t.includes('trial')) {
    return 'You can start a free trial from the pricing section. I\'m here if you have questions!';
  }
  return 'Great question! Here\'s a quick answer: our AI handles voice and chat, supports multiple languages, and adapts to your workflows.';
}

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
      <div className="relative z-10 container mx-auto px-6 pt-28 pb-20 md:pt-36 md:pb-28">
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

        {/* AI Demo Widget */}
        <div className="mt-8 md:mt-10">
          <AIDemoWidget />
        </div>
      </div>
    </section>
  );
}
