import { Box, Typography, Button, IconButton } from '@mui/material'
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material'

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
        paddingLeft: { xs: 'none', md: 15 },
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
        I am a student and web developer with over three years of experience in building modern web
        applications. I specialize in React, Next.js, as well as frontend and backend development.
        My key competencies include working with databases (MongoDB, MariaDB) and creating
        responsive user interfaces using CSS, Tailwind CSS, Material UI.
      </Typography>

      {/* Социальные иконки */}
      <Box display='flex' justifyContent='center' gap={2} mb={4}>
        <IconButton
          component='a'
          href='https://www.instagram.com/maksym.reznik/profilecard/?igsh=MTdudnVqYzBnenl1bQ=='
          target='_blank'
          sx={{ color: 'white', bgcolor: '#2e2e4d', p: 1.5 }}
        >
          <Instagram />
        </IconButton>
        <IconButton
          component='a'
          href='https://www.linkedin.com/in/maksym-riznyk-3340941b8/'
          target='_blank'
          sx={{ color: 'white', bgcolor: '#2e2e4d', p: 1.5 }}
        >
          <LinkedIn />
        </IconButton>
        <IconButton
          component='a'
          href='https://github.com/Proveno'
          target='_blank'
          sx={{ color: 'white', bgcolor: '#2e2e4d', p: 1.5 }}
        >
          <GitHub />
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
