import hero from "../assets/hero.jpeg";

export const personal = {
  name: "Mutahir Showket",
  firstName: "Mutahir",
  role: "Full Stack Developer",
  intro:
    "I build modern, responsive and scalable web applications with clean code and exceptional user experiences.",

  email: "mutahirshowket@gmail.com", // Replace with your actual email
  location: "Srinagar, Jammu & Kashmir, India",
  availability: "Open to Work",

  resumeUrl: "/resume.pdf",

  profileImage: hero,

  socials: {
    github: "https://github.com/mutahirshowket",
    linkedin: "https://linkedin.com/in/mutahirshowket", // Replace if different
    twitter: "https://x.com/mutahirshowket", // Replace if different
  },
};

export const navLinks = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "projects", label: "Projects", href: "#projects" },
  { id: "journey", label: "Journey", href: "#journey" },
  { id: "contact", label: "Contact", href: "#contact" },
];

export const about =
  "Passionate Full Stack Developer who enjoys transforming ideas into fast, scalable and user-friendly web applications using modern technologies.";

export const skills = {
  frontend: [
    "React",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
  ],

  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "REST API",
  ],

  tools: [
    "Git",
    "GitHub",
    "Docker",
    "Vite",
    "VS Code",
  ],
};

export const experience = [
  {
    id: 1,
    title: "React Developer Intern",
    description:
      "Built responsive dashboards and integrated REST APIs for internal business applications.",
    period: "2025 – Present",
  },
  {
    id: 2,
    title: "Frontend Developer",
    description:
      "Developed modern, responsive interfaces with React and Tailwind CSS.",
    period: "2024 – 2025",
  },
];

export const education = [
  {
    id: 1,
    title: "B.Tech in Computer Science",
    description:
      "Focused on software engineering, web development and modern programming practices.",
    period: "2022 – 2026",
  },
];

export const certifications = [
  {
    id: 1,
    title: "AWS Cloud Practitioner",
    description:
      "Fundamentals of AWS cloud services and cloud architecture.",
    period: "2025",
  },
  {
    id: 2,
    title: "Meta Front-End Developer",
    description:
      "Professional frontend development with React, JavaScript and modern UI practices.",
    period: "2024",
  },
];