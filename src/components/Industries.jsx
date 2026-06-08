import SectionTitle from './SectionTitle';
import { industries, tech } from '../data/siteData';

export default function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-mist py-20 md:py-28">
      <div className="absolute inset-0 bg-grid bg-[size:46px_46px] opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionTitle
            eyebrow="Industries"
            title="Built for teams that need reliability, not buzzwords."
            text="Focused support for environments where documentation, uptime, security and access control matter."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ icon: Icon, name }) => (
              <div key={name} className="rounded-3xl border border-white bg-white/80 p-5 shadow-sm backdrop-blur">
                <Icon className="mb-4 text-electric" size={26} />
                <p className="font-black text-ink">{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-blue-100 bg-white/85 p-5 shadow-soft">
          <p className="mb-4 text-center text-xs font-black uppercase tracking-[0.28em] text-slate-500">Platforms and technologies we work with</p>
          <div className="flex animate-marquee gap-10 whitespace-nowrap text-xl font-black text-slate-500">
            {[...tech, ...tech].map((item, i) => <span key={`${item}-${i}`}>{item}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
