import { Box, Typography, Button, IconButton } from '@mui/material'
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material'
import { motion } from 'framer-motion'

const MainSection = () => {
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
      {/* Заголовок */}
      <Typography variant='h3' component='h1' sx={{ fontWeight: 'bold' }}>
        I am <span style={{ color: '#34d399' }}>Maksym Riznyk</span>
      </Typography>

      {/* Подзаголовок */}
      <Typography variant='h5' sx={{ fontWeight: 'bold', mt: 1 }}>
        SOFTWARE DEVELOPER
      </Typography>

      {/* Описание */}
      <Typography variant='body1' sx={{ maxWidth: '800px', mt: 2, mb: 4 }}>
        Full Stack Web Developer specializing in front-end and back-end development. Experienced
        with all stages of the development cycle for dynamic websites. Well-versed in programming
        languages like JavaScript, ES6, Node.js, HTML5, CSS3, and frameworks like React and MongoDB.
      </Typography>

      {/* Социальные иконки */}
      <Box display='flex' justifyContent='center' gap={2} mb={4}>
        <IconButton
          component='a'
          href='https://github.com'
          target='_blank'
          sx={{ color: 'white', bgcolor: '#2e2e4d', p: 1.5 }}
        >
          <GitHub />
        </IconButton>
        <IconButton
          component='a'
          href='https://linkedin.com'
          target='_blank'
          sx={{ color: 'white', bgcolor: '#2e2e4d', p: 1.5 }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component='a'
          href='https://twitter.com'
          target='_blank'
          sx={{ color: 'white', bgcolor: '#2e2e4d', p: 1.5 }}
        >
          <Twitter />
        </IconButton>
      </Box>

      {/* Кнопка для скачивания CV */}
      <Button
        variant='outlined'
        sx={{
          color: '#34d399',
          borderColor: '#34d399',
          ':hover': { backgroundColor: '#34d399', color: 'white' },
        }}
        href='/assets/Maksym Riznyk Lebenslauf.pdf'
        download
      >
        Download CV
      </Button>
    </Box>
  )
}

export default MainSection
