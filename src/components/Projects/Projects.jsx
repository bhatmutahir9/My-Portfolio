import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { projects } from '../../data/projects';
import LazyImage from '../ui/LazyImage';
import SectionHeading from '../ui/SectionHeading';
import { StaggerContainer, StaggerItem } from '../ui/ScrollReveal';

export default function Projects() {
  return (
    <section
      id="projects"
      className="theme-transition section-padding bg-card/30"
      aria-labelledby="projects-heading"
    >
      <div className="container-wide">
        <SectionHeading
          label="Work"
          title="Featured Projects"
          description="Selected work showcasing design precision and technical depth."
        />

        <StaggerContainer className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="theme-transition group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-300 hover:border-primary/30 hover:shadow-[0_0_40px_var(--color-glow)]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="aspect-16/10 w-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-card/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                  <div>
                    <h3
                      id={project.id === 1 ? 'projects-heading' : undefined}
                      className="font-heading text-xl font-semibold text-foreground"
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border bg-background/50 px-3 py-1 text-xs font-medium text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-transition flex flex-1 items-center justify-center gap-2 rounded-xl border border-border py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="theme-transition flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-2.5 text-sm font-medium text-white transition-shadow hover:shadow-[0_0_24px_var(--color-glow)]"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
