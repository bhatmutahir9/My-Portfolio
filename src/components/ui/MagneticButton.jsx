import { motion } from 'framer-motion';
import { useMagnetic } from '../../hooks/useMagnetic';

export default function MagneticButton({
  children,
  className = '',
  strength = 0.35,
  ...props
}) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic(strength);

  return (
    <motion.button
      ref={ref}
      type="button"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center transition-transform duration-300 ease-out ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export function MagneticLink({
  children,
  className = '',
  strength = 0.35,
  ...props
}) {
  const { ref, handleMouseMove, handleMouseLeave } = useMagnetic(strength);

  return (
    <motion.a
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className={`inline-flex items-center justify-center transition-transform duration-300 ease-out ${className}`}
      {...props}
    >
      {children}
    </motion.a>
  );
}
