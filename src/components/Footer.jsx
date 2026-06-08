import Logo from './Logo';
import { navItems } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-blue-100/70">IT Infrastructure | Cybersecurity | Compliance</p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-blue-100/75">
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="hover:text-white">{label}</a>)}
        </div>
        <p className="text-sm text-blue-100/60">© {new Date().getFullYear()} D-Cybernex Systems.</p>
      </div>
    </footer>
  );
}
