import { Box, Grid, Typography } from '@mui/material'
import ProjectCard from './ProjectCard'

const projects = [
  {
    image: '/assets/projects/ItTutor.png',
    title: 'IT-Tutor',
    description:
      'Online IT courses service that offers a wide selection of learning materials and interactive courses on various IT topics. The user-friendly platform helps beginners and advanced users improve their technical skills.',
    technologies: ['Next JS 13', 'TypeScript', 'Material UI', 'GPT API'],
    link: 'https://www.it-tutor.ai/',
    enabled: true,
  },
  {
    image: '/assets/projects/Frion.png',
    title: 'Frion',
    description:
      'Frion is a platform for a fictitious animal shelter that offers various services related to pets. Users can register pets for adoption, surrender found animals or request treatment for their animals. The site also offers a product selection for animals as well as the possibility to find emergency shelters nearby. All requests are confirmed with the operators via messenger, email or phone. The platform is multilingual and offers a user-friendly interface for animal lovers.',
    technologies: ['Next JS 13', 'JavaScript', 'Tailwind', 'Mongo DB'],
    link: 'https://frion-app.vercel.app/de',
    enabled: true,
  },
  // Добавьте больше проектов здесь
]

const ProjectsSection = () => {
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
        MY <span style={{ color: '#34d399' }}>PROJECTS</span>
      </Typography>
      <Box className='flex justify-center w-full'>
        <Grid container spacing={4} justifyContent='center'>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className='flex justify-center w-full'>
              <ProjectCard {...project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default ProjectsSection
