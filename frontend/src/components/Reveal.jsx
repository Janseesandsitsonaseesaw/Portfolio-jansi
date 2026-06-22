import { motion } from 'framer-motion'

/**
 * Wraps children in a subtle fade + translate reveal, triggered once
 * when scrolled into view. Used throughout for "section appearing
 * naturally" per the brief — elegant, not flashy.
 */
export default function Reveal({ children, delay = 0, y = 18, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
