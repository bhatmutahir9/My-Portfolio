import { ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { personal } from '../../data/portfolio';
import MagneticButton, { MagneticLink } from '../ui/MagneticButton';

const socialIcons = [
  { icon: FaGithub, href: personal.socials.github, label: 'GitHub' },
  { icon: FaLinkedin, href: personal.socials.linkedin, label: 'LinkedIn' },
  { icon: FaXTwitter, href: personal.socials.twitter, label: 'Twitter' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const year = new Date().getFullYear();

  return (
    <footer
      className="theme-transition border-t border-border section-padding pb-8 pt-16"
      role="contentinfo"
    >
      <div className="container-wide">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-heading text-xl font-bold tracking-tight"
              aria-label="Back to top"
            >
              <span className="text-gradient">MS</span>
              <span>.</span>
            </a>
            <p className="text-sm text-muted">
              &copy; {year} {personal.name}. All rights reserved.
            </p>
            <p className="text-xs text-muted/70">Built with React + Tailwind</p>
          </div>

          <div className="flex items-center gap-3" aria-label="Social links">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <MagneticLink
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="theme-transition flex h-10 w-10 items-center justify-center rounded-xl glass text-muted transition-colors hover:text-primary"
              >
                <Icon size={18} />
              </MagneticLink>
            ))}
          </div>

          <MagneticButton
            onClick={scrollToTop}
            aria-label="Back to top"
            className="theme-transition gap-2 rounded-xl glass px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:text-foreground hover:glow-primary"
          >
            <ArrowUp size={16} />
            Back to Top
          </MagneticButton>
        </div>
      </div>
    </footer>
  );
}
