import { motion } from 'framer-motion';
import { about, skills } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import ScrollReveal, { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

const skillCategories = [
  { key: 'frontend', label: 'Frontend', color: 'primary' },
  { key: 'backend', label: 'Backend', color: 'secondary' },
  { key: 'tools', label: 'Tools', color: 'accent' },
];

const colorMap = {
  primary: 'hover:border-primary/40 hover:shadow-[0_0_30px_var(--color-glow)] hover:bg-primary/5',
  secondary:
    'hover:border-secondary/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:bg-secondary/5',
  accent:
    'hover:border-accent/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:bg-accent/5',
};

const pillColorMap = {
  primary: 'bg-primary/10 text-primary border-primary/20',
  secondary: 'bg-secondary/10 text-secondary border-secondary/20',
  accent: 'bg-accent/10 text-accent border-accent/20',
};

export default function AboutSkills() {
  return (
    <section
      id="about"
      className="theme-transition section-padding"
      aria-labelledby="about-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="About"
          title="Crafting digital excellence"
          description="A glimpse into who I am and what I bring to the table."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          {/* About card */}
          <ScrollReveal className="lg:col-span-2">
            <div className="glass theme-transition flex h-full flex-col justify-center rounded-2xl p-8 md:p-10">
              <h3
                id="about-heading"
                className="mb-4 font-heading text-xl font-semibold text-foreground"
              >
                About Me
              </h3>
              <p className="text-base leading-relaxed text-muted">{about}</p>
            </div>
          </ScrollReveal>

          {/* Skill cards */}
          <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
            {skillCategories.map(({ key, label, color }) => (
              <StaggerItem key={key}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={`glass theme-transition flex h-full flex-col rounded-2xl border border-border p-6 transition-all duration-300 ${colorMap[color]}`}
                >
                  <h3 className="mb-5 font-heading text-lg font-semibold text-foreground">
                    {label}
                  </h3>
                  <ul className="flex flex-wrap gap-2" role="list">
                    {skills[key].map((skill) => (
                      <li key={skill}>
                        <span
                          className={`theme-transition inline-block rounded-full border px-3 py-1.5 text-xs font-medium transition-transform hover:scale-105 ${pillColorMap[color]}`}
                        >
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
