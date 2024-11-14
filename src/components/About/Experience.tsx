import { Box, Typography, Grid } from '@mui/material'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import SchoolIcon from '@mui/icons-material/School'

const experienceData = [
  {
    title: 'Software Developer',
    company: 'Unix Company',
    period: '2010-2012',
    description:
      'Diligent software engineer with 5+ years of experience in commercial application and software development. Eager to join Cyclone Inc. to build innovative and cutting-edge business solutions for the impressive suite of clients within its global reach.',
  },
  {
    title: 'Back-end Developer',
    company: 'Liza Yoolo ITC Company',
    period: '2012-2018',
    description:
      'Diligent software engineer with 5+ years of experience in commercial application and software development.',
  },
  {
    title: 'Front-end Developer',
    company: 'Ultra Luca Company',
    period: '2018-2021',
    description:
      'Diligent software engineer with 5+ years of experience in commercial application and software development.',
  },
  {
    title: 'Software Developer',
    company: 'Unix Company',
    period: '2021-2022',
    description:
      'Diligent software engineer with 5+ years of experience in commercial application and software development.',
  },
]

const educationData = [
  {
    title: 'Software Engineer',
    institution: 'Cirro Stratus Inc.',
    period: 'May 2018 – Present',
    description:
      'Liaised with Product Managers to identify minimum viable product requirements and clearly defined feature sets into well-scoped user stories for individual team members.',
  },
  {
    title: 'Bachelor of Computer Science',
    institution: 'Carnegie Mellon University',
    period: '2014-2018',
    description:
      'Liaised with Product Managers to identify minimum viable product requirements and clearly defined feature sets into well-scoped user stories for individual team members.',
  },
  {
    title: 'Masters of Sciences',
    institution: 'Uniex Pro University',
    period: '2012-2014',
    description:
      'Liaised with Product Managers to identify minimum viable product requirements and clearly defined feature sets into well-scoped user stories for individual team members.',
  },
  {
    title: 'Bachelor of Sciences',
    institution: 'University of Oregon',
    period: '2009-2012',
    description:
      'Liaised with Product Managers to identify minimum viable product requirements and clearly defined feature sets into well-scoped user stories for individual team members.',
  },
]

const Experience = () => {
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
      <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 4 }}>
        COVER <span style={{ color: '#34d399' }}>LETTER</span>
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }} justifyContent='center'>
        {/* Опыт работы */}
        <Grid item xs={12} md={6}>
          <Box className='flex gap-2'>
            <WorkHistoryIcon fontSize='large' className='mt-0.5 text-[#34d399]' />
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>
              Working Experience
            </Typography>
          </Box>
          <Box sx={{ position: 'relative', pl: 4 }}>
            {/* Вертикальная линия */}
            <Box
              sx={{
                position: 'absolute',
                left: '36px',
                top: 10,
                bottom: 0,
                width: '2px',
                backgroundColor: '#374151',
              }}
            />
            {experienceData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  mb: 4,
                  display: 'flex',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Точка на линии */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#34d399',
                    borderRadius: '50%',
                  }}
                />
                <Box sx={{ textAlign: 'left', ml: 3 }}>
                  <Typography
                    variant='h6'
                    sx={{ color: '#34d399', fontWeight: 'bold', fontSize: '1.1rem' }}
                  >
                    {item.title}{' '}
                    <span style={{ fontSize: '0.9rem', color: '#cfcfcf' }}>({item.period})</span>
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    sx={{ fontStyle: 'italic', color: '#cfcfcf', mb: 1 }}
                  >
                    {item.company}
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#d1d5db', fontSize: '0.95rem' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* Образование */}
        <Grid item xs={12} md={6}>
          <Box className='flex gap-2'>
            <SchoolIcon fontSize='large' className='mt-0.5 text-[#34d399]' />
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>
              Educational Qualifications
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', pl: 4 }}>
            {/* Вертикальная линия */}
            <Box
              sx={{
                position: 'absolute',
                left: '36px',
                top: 10,
                bottom: 0,
                width: '2px',
                backgroundColor: '#374151',
              }}
            />
            {educationData.map((item, index) => (
              <Box
                key={index}
                sx={{
                  mb: 4,
                  display: 'flex',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Точка на линии */}
                <Box
                  sx={{
                    position: 'absolute',
                    left: 0,
                    top: '8px',
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#34d399',
                    borderRadius: '50%',
                  }}
                />
                <Box sx={{ textAlign: 'left', ml: 3 }}>
                  <Typography
                    variant='h6'
                    sx={{ color: '#34d399', fontWeight: 'bold', fontSize: '1.1rem' }}
                  >
                    {item.title}{' '}
                    <span style={{ fontSize: '0.9rem', color: '#cfcfcf' }}>({item.period})</span>
                  </Typography>
                  <Typography
                    variant='subtitle1'
                    sx={{ fontStyle: 'italic', color: '#cfcfcf', mb: 1 }}
                  >
                    {item.institution}
                  </Typography>
                  <Typography variant='body2' sx={{ color: '#d1d5db', fontSize: '0.95rem' }}>
                    {item.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Experience
