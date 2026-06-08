import SectionTitle from './SectionTitle';
import { approach } from '../data/siteData';

export default function Approach() {
  return (
    <section id="approach" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionTitle center eyebrow="Approach" title="Practical security implementation, step by step." text="No oversized consulting theatre. We understand the environment, improve it and document it properly." />
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {approach.map(([num, title, text]) => (
            <div key={num} className="relative rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft">
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink text-sm font-black text-white shadow-glow">{num}</div>
              <h3 className="text-lg font-black text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
