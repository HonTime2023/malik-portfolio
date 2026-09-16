export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-brand-accent">
        {eyebrow}
      </p>
      <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
      {description && <p className="text-sm leading-relaxed text-brand-muted sm:text-base">{description}</p>}
    </div>
  );
}
