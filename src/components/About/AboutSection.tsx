import { Box } from '@mui/material'
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
        padding: { xs: '0.5rem', md: '2rem' },
        paddingLeft: { xs: 'none', md: 15 },
        width: '100%',
      }}
    >
      <AboutMe />
      <Skills />
      <Experience />
    </Box>
  )
}

export default AboutSection
