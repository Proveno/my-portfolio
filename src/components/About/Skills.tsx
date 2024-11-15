import { Box, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML5', level: 'Advanced' },
  { name: 'CSS3', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'NextJS', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Tailwind', level: 'Intermediate' },
  { name: 'Bootstrap', level: 'Intermediate' },

  { name: 'NodeJS', level: 'Intermediate' },
  { name: 'Mongo DB', level: 'Intermediate' },

  { name: 'Git', level: 'Intermediate' },
  { name: 'Maria DB', level: 'Beginner' },
  { name: 'C++', level: 'Beginner' },
  { name: 'C#', level: 'Beginner' },
  { name: 'Java', level: 'Beginner' },
  { name: 'Android', level: 'Beginner' },
]

const Skills = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: { xs: '2rem 1rem', md: '4rem 2rem' },
        backgroundColor: '#1f1f2e',
        color: 'white',
        textAlign: 'center',
      }}
    >
      {/* Заголовок */}
      <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 2 }}>
        MY <span style={{ color: '#34d399' }}>SKILLS</span>
      </Typography>

      {/* Список навыков */}
      <Grid
        container
        spacing={2}
        className='min-[1000px]:max-w-[900px] min-[1400px]:max-w-[1100px]'
        sx={{ mt: 4 }}
        justifyContent='center'
      >
        {skills.map((skill, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Paper
              component={motion.div}
              whileHover={{ scale: 1.05 }}
              sx={{
                padding: '0.7rem',
                backgroundColor: '#2e2e4d',
                color: 'white',
                textAlign: 'center',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: 90, // Фиксированная высота для блоков
              }}
            >
              <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#34d399', mb: 1 }}>
                {skill.name}
              </Typography>
              <Typography variant='body2' sx={{ fontSize: '0.9rem', color: '#cfcfcf' }}>
                {skill.level}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Skills
