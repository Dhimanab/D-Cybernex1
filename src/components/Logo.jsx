import logo from '../assets/dcybernex-logo.png';

export default function Logo({ compact = false }) {
  return (
    <a href="#home" className="group inline-flex items-center gap-3" aria-label="D-Cybernex Systems home">
      <img
        src={logo}
        alt="D-Cybernex Systems logo"
        className="h-12 w-auto object-contain drop-shadow-sm transition duration-300 group-hover:scale-[1.02] md:h-14"
      />
      {!compact && <span className="sr-only">D-Cybernex Systems</span>}
    </a>
  );
}
