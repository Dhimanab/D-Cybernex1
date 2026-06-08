import SectionTitle from './SectionTitle';
import { workAreas } from '../data/siteData';
import { CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-gradient-to-br from-ink via-navy to-slate-950 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-grid bg-[size:44px_44px] opacity-10" />
      <video className="absolute right-0 top-0 h-full w-full object-cover opacity-20 video-mask" src={`${import.meta.env.BASE_URL}hero-circuit.mp4`} autoPlay muted loop playsInline preload="metadata" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <div className="mb-3 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">Selected work areas</div>
          <h2 className="text-3xl font-black tracking-tight md:text-5xl">Serious foundations before flashy tools.</h2>
          <p className="mt-5 text-lg leading-8 text-blue-100/80">
            D-Cybernex focuses on the work that makes IT environments secure, documented and manageable.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {workAreas.map((item) => (
            <div key={item} className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-xl">
              <CheckCircle2 className="mb-4 text-cyanx" size={24} />
              <p className="font-bold leading-7">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
