import { Box, Typography, Button, IconButton } from '@mui/material'
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { motion } from 'framer-motion'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Experience from './Experience'

const AboutSection = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
      sx={{
        backgroundColor: '#1f1f2e',
        color: 'white',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <AboutMe />
      <Skills />
      <Experience />
    </Box>
  )
}

export default AboutSection
