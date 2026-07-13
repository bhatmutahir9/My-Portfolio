import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';
import { personal } from '../../data/portfolio';
import SectionHeading from '../ui/SectionHeading';
import MagneticButton from '../ui/MagneticButton';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: personal.location,
    href: null,
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'https://github.com/bhatmutahir9',
    href: personal.socials.github,
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/mutahir-showket-b21254324/',
    href: personal.socials.linkedin,
  },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="theme-transition section-padding"
      aria-label="Contact section"
    >
      <div className="container-wide">
        <SectionHeading label="Contact" title="Let's Work Together" />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <p className="max-w-md text-base leading-relaxed text-muted md:text-lg">
              Have a project in mind? Drop me a message and let's create something
              exceptional together.
            </p>

            <div className="flex flex-col gap-5">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl glass">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-2xl glass px-5 py-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>
              <span className="text-sm font-medium text-foreground">
                {personal.availability}
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="theme-transition relative rounded-3xl glass p-8 md:p-10"
              aria-label="Contact form"
            >
              <div className="grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="theme-transition w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      placeholder="you@email.com"
                      className="theme-transition w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium text-foreground">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    placeholder="Project inquiry"
                    className="theme-transition w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="theme-transition w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-primary focus:outline-none"
                  />
                </div>

                <MagneticButton
                  type="submit"
                  disabled={isSubmitting}
                  className="theme-transition w-full rounded-xl bg-gradient-to-r from-primary to-secondary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </MagneticButton>
              </div>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl glass backdrop-blur-md"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
                    >
                      <CheckCircle size={48} className="text-green-500" />
                    </motion.div>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-4 font-heading text-lg font-semibold text-foreground"
                    >
                      Message sent successfully!
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
