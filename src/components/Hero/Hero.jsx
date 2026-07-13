import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp} from "react-icons/fa6";

import { personal } from "../../data/portfolio";
import { MagneticLink } from "../ui/MagneticButton";

const socialIcons = [
  {
    icon: FaGithub,
    href: personal.socials.github,
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: personal.socials.linkedin,
    label: "LinkedIn",
  },
  {
    icon: FaWhatsapp,
    href: personal.socials.whatsapp,
    label: "WhatsApp",
  },
];

export default function Hero() {
  const cardRef = useRef(null);

  const [glow, setGlow] = useState({
    x: 50,
    y: 50,
    visible: false,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      visible: true,
    });
  };

  return (
  
    <section
  id="home"
  aria-label="Hero Section"
  className="relative flex min-h-screen items-center overflow-hidden pt-24 lg:pt-28"
>
  {/* ================= Background ================= */}

  <div
    className="pointer-events-none absolute inset-0 overflow-hidden"
    aria-hidden="true"
  >
    {/* Aurora Glow */}

    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.35, 0.55, 0.35],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
      }}
      className="absolute -left-40 -top-32 h-[450px] w-[450px] rounded-full bg-primary/20 blur-[140px]"
    />

    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
      }}
      className="absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-secondary/20 blur-[130px]"
    />

    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.25, 0.45, 0.25],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
      }}
      className="absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-accent/20 blur-[120px]"
    />

    {/* Floating Particles */}

    {[...Array(10)].map((_, i) => (
      <motion.span
        key={i}
        className="absolute h-1.5 w-1.5 rounded-full bg-primary/40"
        style={{
          left: `${8 + i * 9}%`,
          top: `${15 + (i % 4) * 20}%`,
        }}
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 0.7, 0.2],
        }}
        transition={{
          duration: 4 + i,
          repeat: Infinity,
        }}
      />
    ))}
  </div>

  {/* ================= Container ================= */}

  <div
    className="
      container-wide
      relative
      z-10
      mx-auto
      grid
      w-full
      items-center
      gap-14
      px-6
      lg:grid-cols-[1.1fr_0.9fr]
      lg:px-8
    "
  >
    {/* ================= LEFT CONTENT ================= */}

<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.8,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="flex max-w-xl flex-col justify-center"
>
  {/* Greeting */}

  <motion.span
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 }}
    className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-primary"
  >
    Hello, I'm
  </motion.span>

  {/* Name */}

  <motion.h1
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
  >
    {personal.firstName}

    <span className="mt-2 block text-gradient">
      {personal.name.split(" ")[1]}
    </span>
  </motion.h1>

  {/* Role */}

  <motion.h2
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="mt-6 text-xl font-semibold text-primary md:text-2xl"
  >
    {personal.role}
  </motion.h2>

  {/* Intro */}

  <motion.p
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="mt-6 max-w-lg text-base leading-8 text-muted md:text-lg"
  >
    {personal.intro}
  </motion.p>

  {/* Buttons */}

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
    className="mt-10 flex flex-wrap gap-4"
  >
    <MagneticLink
      href="#projects"
      className="rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/40"
    >
      View Projects
    </MagneticLink>

    <MagneticLink
      href={personal.resumeUrl}
      download
      className="flex items-center gap-2 rounded-xl border border-border bg-card/70 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-md transition-all duration-300 hover:border-primary hover:bg-card"
    >
      <Download size={18} />

      Resume
    </MagneticLink>
  </motion.div>

  {/* Social Icons */}

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    className="mt-10 flex items-center gap-4"
  >
    {socialIcons.map(({ icon: Icon, href, label }) => (
      <motion.a
        whileHover={{
          y: -5,
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.95,
        }}
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card/70 text-muted backdrop-blur-md transition-all duration-300 hover:border-primary hover:text-primary"
      >
        <Icon size={18} />
      </motion.a>
    ))}
  </motion.div>
</motion.div>

  {/* ================= RIGHT CONTENT ================= */}

<motion.div
  initial={{ opacity: 0, x: 40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{
    duration: 0.9,
    delay: 0.3,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="relative flex justify-center lg:justify-end"
>
  {/* Glow */}

  <div
    aria-hidden="true"
    className="absolute inset-0 flex items-center justify-center"
  >
    <div className="h-[420px] w-[320px] rounded-full bg-primary/20 blur-[120px]" />
  </div>

  {/* Floating Square */}

  <motion.div
    animate={{
      y: [0, -12, 0],
      rotate: [0, 2, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
    }}
    className="absolute -left-6 top-10 hidden h-16 w-16 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-md lg:block"
  />

  {/* Floating Circle */}

  <motion.div
    animate={{
      y: [0, 12, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
    }}
    className="absolute -right-4 bottom-16 hidden h-12 w-12 rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-md lg:block"
  />

  {/* ================= Card ================= */}

  <div
    ref={cardRef}
    onMouseMove={handleMouseMove}
    onMouseLeave={() =>
      setGlow({
        x: 50,
        y: 50,
        visible: false,
      })
    }
    className="relative w-full max-w-[420px]"
  >
    {/* Glass */}

    <div className="glass relative overflow-hidden rounded-[32px] border border-white/10 bg-card/60 p-4 shadow-2xl backdrop-blur-xl">

      {/* Mouse Glow */}

      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glow.visible ? 1 : 0,
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%,
          rgba(59,130,246,.28),
          transparent 60%)`,
        }}
      />

      {/* Image */}

      <div className="relative overflow-hidden rounded-3xl">

        <img
          src={personal.profileImage}
          alt={personal.name}
          loading="eager"
          className="
            h-[420px]
            w-full
            object-cover
            transition-transform
            duration-700
            hover:scale-105

            sm:h-[470px]

            lg:h-[540px]
          "
        />

      </div>

      {/* Availability */}

      <div
        className="
          absolute
          bottom-8
          left-1/2
          flex
          -translate-x-1/2
          items-center
          gap-2
          rounded-full
          border
          border-white/10
          bg-background/80
          px-4
          py-2
          text-sm
          font-medium
          backdrop-blur-lg
        "
      >
        <span className="relative flex h-3 w-3">

          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />

          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />

        </span>

        {personal.availability}
      </div>
    </div>
  </div>
</motion.div>
    {/* ================= END CONTAINER ================= */}
  </div>

  {/* ================= Scroll Indicator ================= */}

  <motion.a
    href="#about"
    initial={{ opacity: 0, y: 20 }}
    animate={{
      opacity: 1,
      y: [0, 10, 0],
    }}
    transition={{
      delay: 1,
      duration: 2,
      repeat: Infinity,
    }}
    className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-primary"
    aria-label="Scroll to About section"
  >
    <span className="text-xs uppercase tracking-[0.3em]">
      Scroll
    </span>

    <ArrowDown size={18} />
  </motion.a>
</section>
);
}