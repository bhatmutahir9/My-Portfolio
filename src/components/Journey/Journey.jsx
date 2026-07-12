import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap } from 'lucide-react';
import {
  certifications,
  education,
  experience,
} from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

const columns = [
  {
    key: 'experience',
    title: 'Experience',
    icon: Briefcase,
    items: experience,
    accent: 'primary',
  },
  {
    key: 'education',
    title: 'Education',
    icon: GraduationCap,
    items: education,
    accent: 'secondary',
  },
  {
    key: 'certifications',
    title: 'Certifications',
    icon: Award,
    items: certifications,
    accent: 'accent',
  },
];

const iconColors = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary/10 text-secondary',
  accent: 'bg-accent/10 text-accent',
};

function TimelineCard({ item, accent }) {
  return (
    <motion.div
      whileHover={{ x: 4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="theme-transition relative pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-8px)] before:w-px before:bg-border last:before:hidden"
    >
      <span
        className={`absolute left-[-4px] top-2 h-2 w-2 rounded-full ${
          accent === 'primary'
            ? 'bg-primary'
            : accent === 'secondary'
              ? 'bg-secondary'
              : 'bg-accent'
        }`}
        aria-hidden="true"
      />
      <div className="glass theme-transition rounded-xl border border-border p-5 transition-colors hover:border-primary/20">
        <div className="mb-1 flex items-start justify-between gap-3">
          <h4 className="font-heading text-sm font-semibold text-foreground">
            {item.title}
          </h4>
          <span className="shrink-0 text-xs text-muted">{item.period}</span>
        </div>
        <p className="text-sm leading-relaxed text-muted">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Journey() {
  return (
    <section
      id="journey"
      className="theme-transition section-padding"
      aria-labelledby="journey-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Journey"
          title="Experience & growth"
          description="My professional path, education, and credentials."
        />

        <StaggerContainer className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {columns.map(({ key, title, icon: Icon, items, accent }) => (
            <StaggerItem key={key}>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${iconColors[accent]}`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3
                    id={key === 'experience' ? 'journey-heading' : undefined}
                    className="font-heading text-lg font-semibold text-foreground"
                  >
                    {title}
                  </h3>
                </div>

                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <TimelineCard key={item.id} item={item} accent={accent} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
