import { Box, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'

const skills = [
  { name: 'HTML5', level: 'Advanced' },
  { name: 'CSS3', level: 'Advanced' },
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Intermediate' },
  { name: 'ReactJS', level: 'Advanced' },
  { name: 'NextJS', level: 'Intermediate' },
  { name: 'NodeJS', level: 'Intermediate' },
  { name: 'MongoDB', level: 'Intermediate' },
  { name: 'Git', level: 'Intermediate' },
  { name: 'ExpressJS', level: 'Advanced' },
  { name: 'PhotoShop', level: 'Advanced' },
  { name: 'Linux', level: 'Intermediate' },
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
      <Grid container spacing={2} sx={{ maxWidth: 900, mt: 4 }} justifyContent='center'>
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
