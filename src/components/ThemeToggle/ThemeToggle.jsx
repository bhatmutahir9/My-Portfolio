import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="theme-transition relative flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/80 text-foreground backdrop-blur-sm hover:border-primary/30 hover:shadow-[0_0_20px_var(--color-glow)]"
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <Sun className="h-4 w-4 text-accent" aria-hidden="true" />
        ) : (
          <Moon className="h-4 w-4 text-secondary" aria-hidden="true" />
        )}
      </motion.div>
    </motion.button>
  );
}
