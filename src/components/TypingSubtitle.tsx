import { motion } from 'framer-motion'
import React from 'react'

interface TypingSubtitleProps {
  text: string
  speed?: number
  loopDelay?: number
}

const TypingSubtitle: React.FC<TypingSubtitleProps> = ({ text, speed = 50, loopDelay = 2 }) => {
  const characters = Array.from(text.toUpperCase())

  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            repeat: Infinity,
            repeatType: 'loop',
            repeatDelay: loopDelay,
            staggerChildren: speed / 1000,
          },
        },
      }}
      className='text-xl font-bold text-gray-700'
    >
      {characters.map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, color: 'white', scale: 1.2 },
          }}
          transition={{ duration: 0.2 }}
          className='text-white text-2xl'
        >
          {char}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default TypingSubtitle
