import { Box, Typography, Grid } from '@mui/material'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import SchoolIcon from '@mui/icons-material/School'
import { useTranslations } from 'next-intl'
import { RevealOnScroll } from '../RevealScroll'

const Experience = () => {
  const t = useTranslations('aboutPage')
  const experienceData = [
    {
      title: t('work1PosName'),
      company: t('work1Name'),
      period: '01.2023-' + t('present'),
      description: t('work1About'),
    },
    {
      title: t('work2PosName'),
      company: t('work2Name'),
      period: '07.2024-09.2024',
      description: t('work2About'),
    },
    {
      title: t('work3PosName'),
      company: t('work3Name'),
      period: '01.2021-08.2021',
      description: t('work3About'),
    },
  ]

  const educationData = [
    {
      title: t('edu1PosName'),
      institution: t('edu1Name'),
      period: '08.2024–07.2025',
      description: t('edu1About'),
    },
    {
      title: t('edu2PosName'),
      institution: t('edu2Name'),
      period: '04.2019-10.2021',
      description: t('edu2About'),
    },
    {
      title: t('edu3PosName'),
      institution: t('edu3Name'),
      period: '09.2012-06.2023',
      description: t('edu3About'),
    },
  ]

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
      <RevealOnScroll delay={0.2}>
        <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 4 }}>
          {t('coverLetterPart1')} <span style={{ color: '#34d399' }}>{t('coverLetterPart2')}</span>
        </Typography>
      </RevealOnScroll>

      <Grid container spacing={4} sx={{ mt: 4 }} justifyContent='center'>
        {/* Опыт работы */}
        <Grid item xs={12} md={6}>
          <Box className='flex gap-2'>
            <WorkHistoryIcon fontSize='large' className='mt-0.5 text-[#34d399]' />
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2, textAlign: 'left' }}>
              {t('workingExperience')}
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
              {t('education')}
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
                  <Box>
                    <Typography
                      variant='h6'
                      sx={{ color: '#34d399', fontWeight: 'bold', fontSize: '1.1rem' }}
                    >
                      {item.title}{' '}
                      <span style={{ fontSize: '0.9rem', color: '#cfcfcf' }}>({item.period})</span>
                    </Typography>
                  </Box>
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
