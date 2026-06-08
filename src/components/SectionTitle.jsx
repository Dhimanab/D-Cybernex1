export default function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl`}>
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-electric/15 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-electric shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-cyanx" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-black tracking-tight text-ink md:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{text}</p>}
    </div>
  );
}
