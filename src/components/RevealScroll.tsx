import { ReactNode, useEffect, useState } from 'react'
import { motion } from 'framer-motion'

type RevealOnScrollProps = {
  children: ReactNode
  delay?: number
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = document.getElementById('reveal-' + delay)

    const handleScroll = () => {
      const top = window.innerHeight
      if (element && element.getBoundingClientRect().top < top) {
        setIsVisible(true)
      }
    }

    // Trigger visibility for elements already in viewport
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [delay])

  return (
    <motion.div
      id={`reveal-${delay}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}
