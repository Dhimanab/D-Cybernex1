import { ArrowUpRight, PlayCircle } from 'lucide-react';
import { heroStats } from '../data/siteData';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,#dff1ff_0%,#f7fbff_34%,#ffffff_72%)] pt-28 md:pt-32">
      <div className="absolute inset-0 bg-grid bg-[size:42px_42px] opacity-35" />
      <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-cyanx/20 blur-3xl" />
      <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-electric/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:pb-20">
        <div>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.26em] text-ink shadow-sm">
            <span className="h-2 w-2 rounded-full bg-electric shadow-[0_0_0_6px_rgba(10,114,255,.12)]" />
            IT Infrastructure • Cybersecurity • Compliance
          </div>
          <h1 className="max-w-4xl text-5xl font-black tracking-[-0.055em] text-ink md:text-7xl lg:text-8xl">
            Secure. Resilient.
            <span className="block bg-gradient-to-r from-electric via-cyanx to-blue-600 bg-clip-text text-transparent">Future-Ready.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            We design, secure and document IT environments that power healthcare, medtech and growing businesses — without unnecessary complexity.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-ink px-7 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-electric">
              Request Consultation <ArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" size={18} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-blue-100 bg-white/90 px-7 py-4 text-sm font-black text-ink shadow-soft transition hover:-translate-y-1 hover:border-electric/30 hover:text-electric">
              Explore Services <ArrowUpRight size={18} />
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {heroStats.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex items-center gap-3 border-r border-slate-200 last:border-r-0">
                <div className="rounded-2xl bg-blue-50 p-3 text-electric"><Icon size={22} /></div>
                <div>
                  <p className="font-black text-ink">{title}</p>
                  <p className="text-sm text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[460px] overflow-hidden rounded-[2.2rem] border border-white/80 bg-slate-950 shadow-[0_30px_100px_rgba(10,40,90,.25)]">
          <video className="absolute inset-0 h-full w-full object-cover opacity-95" src={`${import.meta.env.BASE_URL}hero-circuit.mp4`} autoPlay muted loop playsInline preload="metadata" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,114,255,.05),rgba(2,8,23,.68)_65%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
          <div className="absolute left-6 top-6 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white shadow-glow backdrop-blur-xl">
            <div className="flex items-center gap-2 text-sm font-bold"><PlayCircle size={18} /> Live cyber layer</div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 grid gap-3 sm:grid-cols-3">
            {['Network', 'Cloud', 'Endpoint'].map((item, i) => (
              <div key={item} className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">Layer 0{i + 1}</p>
                <p className="mt-1 text-lg font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
