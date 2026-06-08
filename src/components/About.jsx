import SectionTitle from './SectionTitle';
import logo from '../assets/dcybernex-logo.png';

export default function About() {
  return (
    <section id="about" className="bg-mist py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8">
        <div className="rounded-[2.5rem] border border-white bg-white/90 p-8 shadow-soft md:p-12">
          <SectionTitle eyebrow="About D-Cybernex" title="A boutique IT security company with an execution mindset." />
          <p className="mt-6 text-lg leading-8 text-slate-600">
            D-Cybernex Systems helps organizations move from scattered IT setups to secure, reliable and well-documented environments.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            The work covers servers, networks, endpoints, cloud systems, backups, monitoring, access control and ISO 27001-aligned security practices — focused on practical implementation, not inflated claims.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white p-8 shadow-soft">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(25,212,255,.22),transparent_35%)]" />
          <img src={logo} alt="D-Cybernex Systems" className="relative mx-auto h-auto w-full max-w-md object-contain" />
          <div className="relative mt-8 grid grid-cols-2 gap-3">
            {['Boutique', 'Technical', 'Secure', 'Documented'].map((item) => (
              <div key={item} className="rounded-2xl bg-blue-50 px-4 py-3 text-center text-sm font-black text-ink">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
