import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { navLinks, personal } from '../../data/portfolio';
import { useActiveSection } from '../../hooks/useActiveSection';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { MagneticLink } from '../ui/MagneticButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      <header
        className={`theme-transition fixed inset-x-0 top-0 z-50 ${
          scrolled
            ? 'border-b border-border bg-background/70 shadow-sm backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="container-wide flex items-center justify-between px-6 py-4 md:px-12 lg:px-20"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            className="font-heading text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-80"
            aria-label="Go to home"
          >
            MS<span className="text-primary">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex" role="list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className={`theme-transition relative px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? 'text-foreground' : 'text-muted hover:text-foreground'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <MagneticLink
              href={personal.resumeUrl}
              download
              className="theme-transition flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-[0_0_24px_var(--color-glow)] transition-shadow hover:shadow-[0_0_32px_var(--color-glow)]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Resume
            </MagneticLink>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="theme-transition flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/80 text-foreground"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="theme-transition fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col border-l border-border bg-background p-8 lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="font-heading text-lg font-bold">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="flex flex-col gap-2" role="list">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      onClick={handleNavClick}
                      className={`block rounded-xl px-4 py-3 text-lg font-medium transition-colors ${
                        activeSection === link.id
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-card'
                      }`}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto pt-8">
                <MagneticLink
                  href={personal.resumeUrl}
                  download
                  onClick={handleNavClick}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white"
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </MagneticLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
