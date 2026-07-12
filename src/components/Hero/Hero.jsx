import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react';
import { personal } from '../../data/portfolio';
import { MagneticLink } from '../ui/MagneticButton';

const socialIcons = [
  { icon: Github, href: personal.socials.github, label: 'GitHub' },
  { icon: Linkedin, href: personal.socials.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: personal.socials.twitter, label: 'Twitter' },
];

export default function Hero() {
  const cardRef = useRef(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, visible: false });

  const handleMouseMove = (e) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      visible: true,
    });
  };

  return (
    <section
      id="home"
      className="theme-transition relative flex min-h-screen items-center overflow-hidden section-padding pt-32"
      aria-label="Hero"
    >
      {/* Aurora background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-aurora absolute -left-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
        <div
          className="animate-aurora absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-secondary/10 blur-[100px]"
          style={{ animationDelay: '-7s' }}
        />
        <div
          className="animate-aurora absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-accent/8 blur-[80px]"
          style={{ animationDelay: '-14s' }}
        />

        {/* Subtle particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/30"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10 grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-medium uppercase tracking-widest text-primary"
            >
              Hello, I&apos;m
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-heading text-5xl font-bold leading-[1.1] tracking-tight text-foreground md:text-6xl lg:text-7xl"
            >
              {personal.name.split(' ')[0]}
              <br />
              <span className="text-gradient">{personal.name.split(' ')[1]}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-heading text-xl font-medium text-muted md:text-2xl"
            >
              {personal.role}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-md text-base leading-relaxed text-muted md:text-lg"
            >
              {personal.intro}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <MagneticLink
              href="#projects"
              className="theme-transition rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_30px_var(--color-glow)] hover:shadow-[0_0_40px_var(--color-glow)]"
            >
              View Projects
            </MagneticLink>
            <MagneticLink
              href={personal.resumeUrl}
              download
              className="theme-transition flex items-center gap-2 rounded-xl border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm hover:border-primary/30"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4"
          >
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="theme-transition flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card/50 text-muted backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — profile card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setGlow((g) => ({ ...g, visible: false }))}
            className="relative"
          >
            {/* Glow behind card */}
            <div
              className="animate-pulse-glow absolute inset-0 rounded-3xl bg-primary/20 blur-3xl"
              aria-hidden="true"
            />

            {/* Floating shapes */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-6 top-12 h-16 w-16 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm"
              aria-hidden="true"
            />
            <motion.div
              animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -right-4 bottom-20 h-12 w-12 rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-sm"
              aria-hidden="true"
            />

            <div className="glass theme-transition relative overflow-hidden rounded-3xl p-3 shadow-2xl">
              {/* Mouse glow */}
              <div
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  opacity: glow.visible ? 1 : 0,
                  background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, var(--color-glow) 0%, transparent 60%)`,
                }}
                aria-hidden="true"
              />

              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={personal.profileImage}
                  alt={`${personal.name} profile`}
                  className="aspect-[4/5] w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>

              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-8 left-8 flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-md"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                {personal.availability}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-foreground"
        aria-label="Scroll to about section"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-scroll-indicator" />
      </motion.a>
    </section>
  );
}
