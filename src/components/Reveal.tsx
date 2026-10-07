import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  show: boolean
  children: ReactNode
  delay?: number
  className?: string
  from?: 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade'
}

const offsets = {
  up: { y: 24, x: 0, scale: 1 },
  down: { y: -24, x: 0, scale: 1 },
  left: { x: 28, y: 0, scale: 1 },
  right: { x: -28, y: 0, scale: 1 },
  zoom: { x: 0, y: 0, scale: 0.92 },
  fade: { x: 0, y: 0, scale: 1 },
}

export function Reveal({
  show,
  children,
  delay = 0,
  className,
  from = 'up',
}: RevealProps) {
  if (!show) return null
  const o = offsets[from]
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...o }}
      animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
