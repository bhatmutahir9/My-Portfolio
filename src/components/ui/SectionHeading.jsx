import ScrollReveal from '../ui/ScrollReveal';

export default function SectionHeading({ label, title, description, align = 'left' }) {
  const alignment =
    align === 'center'
      ? 'items-center text-center'
      : 'items-start text-left';

  return (
    <ScrollReveal className={`mb-16 flex flex-col gap-4 ${alignment}`}>
      {label && (
        <span className="text-sm font-medium uppercase tracking-widest text-primary">
          {label}
        </span>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
