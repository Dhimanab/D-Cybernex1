import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Logo from './Logo';
import { navItems } from '../data/siteData';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/70 bg-white/80 shadow-sm shadow-slate-900/5 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Logo />
        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} className="text-sm font-semibold text-slate-700 transition hover:text-electric">
              {label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden rounded-2xl bg-ink px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-electric lg:inline-flex"
        >
          Request Consultation
        </a>
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex rounded-xl border border-slate-200 bg-white p-2 text-ink lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 shadow-soft lg:hidden">
          <div className="grid gap-2">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-electric"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
