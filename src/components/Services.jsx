import SectionTitle from './SectionTitle';
import { services } from '../data/siteData';

export default function Services() {
  return (
    <section id="services" className="relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle
          eyebrow="What we do"
          title="One focused partner for secure IT operations."
          text="Less noise, clearer execution. Infrastructure, security and documentation brought together in one practical workflow."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }, index) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-white to-blue-50/60 p-7 shadow-soft transition duration-300 hover:-translate-y-2 hover:border-electric/25 hover:shadow-glow"
            >
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-cyanx/20 to-electric/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-electric shadow-sm ring-1 ring-blue-100">
                <Icon size={26} />
              </div>
              <p className="mt-7 text-xs font-black uppercase tracking-[0.24em] text-slate-400">0{index + 1}</p>
              <h3 className="mt-2 text-xl font-black text-ink">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
