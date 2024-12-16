import { Box, Grid, Typography } from '@mui/material'
import ProjectCard from './ProjectCard'
import { useTranslations } from 'next-intl'
import { RevealOnScroll } from '../RevealScroll'

const ProjectsSection = () => {
  const t = useTranslations('projects')

  const projects = [
    {
      image: '/assets/projects/ItTutor.png',
      title: t('proj1Name'),
      description: t('proj1About'),
      technologies: ['Next JS 13', 'TypeScript', 'Material UI', 'GPT API'],
      link: 'https://www.it-tutor.ai/',
      enabled: true,
    },
    {
      image: '/assets/projects/Frion.png',
      title: t('proj2Name'),
      description: t('proj2About'),
      technologies: ['Next JS 13', 'JavaScript', 'Tailwind', 'Mongo DB'],
      link: 'https://frion-app.vercel.app/de',
      enabled: true,
    },
    // Добавьте больше проектов здесь
  ]

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
        paddingLeft: { xs: 'none', md: 20 },
      }}
    >
      <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 4 }}>
        {t('myProjectsPart1')} <span style={{ color: '#34d399' }}>{t('myProjectsPart2')}</span>
      </Typography>
      <Box className='flex justify-center w-full'>
        <Grid container spacing={4} justifyContent='center'>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className='flex justify-center w-full'>
              <RevealOnScroll delay={0.1 * index}>
                <ProjectCard {...project} />
              </RevealOnScroll>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default ProjectsSection
