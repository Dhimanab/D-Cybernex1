import { ArrowUpRight, Mail, MapPin, MessageCircle } from 'lucide-react';
import { contact } from '../data/siteData';

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-br from-ink to-navy" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-electric to-ink p-[1px] shadow-glow">
          <div className="grid gap-8 rounded-[2.45rem] bg-white p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-electric">Start the conversation</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight text-ink md:text-6xl">Build a cleaner, safer IT environment.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Share your current IT, cybersecurity or compliance requirement and we’ll map a practical next step.
              </p>
              <a href={`mailto:${contact.email}?subject=D-Cybernex%20Systems%20Consultation`} className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-ink px-7 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-electric">
                Email D-Cybernex <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="grid gap-4">
              <a href={`mailto:${contact.email}`} className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-mist p-5 transition hover:border-electric/30 hover:bg-blue-50">
                <div className="rounded-2xl bg-white p-3 text-electric shadow-sm"><Mail size={24} /></div>
                <div><p className="text-sm text-slate-500">Primary email</p><p className="font-black text-ink">{contact.email}</p></div>
              </a>
              <a href={`mailto:${contact.altEmail}`} className="group flex items-center gap-4 rounded-3xl border border-slate-200 bg-mist p-5 transition hover:border-electric/30 hover:bg-blue-50">
                <div className="rounded-2xl bg-white p-3 text-electric shadow-sm"><MessageCircle size={24} /></div>
                <div><p className="text-sm text-slate-500">Enquiries</p><p className="font-black text-ink">{contact.altEmail}</p></div>
              </a>
              <div className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-mist p-5">
                <div className="rounded-2xl bg-white p-3 text-electric shadow-sm"><MapPin size={24} /></div>
                <div><p className="text-sm text-slate-500">Location</p><p className="font-black text-ink">{contact.location}</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
