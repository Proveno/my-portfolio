import { Box, Typography, Avatar, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const AboutMe = () => {
  const t = useTranslations('aboutPage')
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
        {t('aboutPart1')} <span style={{ color: '#34d399' }}>{t('aboutPart2')}</span>
      </Typography>

      <Box
        className='flex-col min-[1400px]:flex-row'
        display='flex'
        // flexDirection={{ xs: 'column', md: 'row' }}
        alignItems='center'
        justifyContent='center'
        gap={4}
        mt={4}
        width='100%'
      >
        {/* Личная информация */}
        <Box sx={{ textAlign: { xs: 'left', md: 'left' } }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center', // Центрирование по вертикали
              justifyContent: 'center', // Центрирование по горизонтали
              textAlign: { xs: 'left', md: 'left' }, // Центрирование текста для маленьких экранов
            }}
          >
            <Avatar
              variant='rounded'
              src='/assets/MyImage.png'
              alt='Profile Picture'
              sx={{
                width: { xs: 150, md: 256 },
                height: { xs: 150, md: 256 },
                border: '4px solid #34d399',
                mt: '16px',
                mb: { xs: 2, md: 0 },
              }}
            />
            <Box sx={{ ml: { md: 3 } }}>
              {/* Отступ слева для больших экранов */}
              <Typography
                variant='h5'
                sx={{ fontWeight: 'bold', textAlign: 'center', mt: { xs: 2, md: 2 } }}
              >
                {t('personalInfo')}
              </Typography>
              <Box mt={2} sx={{ maxWidth: { xs: '100%', md: 270 }, mx: { xs: 'auto', md: 0 } }}>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'> {t('name')}:</b> {t('nameContent')}
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>{t('age')}:</b> {t('ageContent')}
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>{t('phone')}:</b> {t('phoneContent')}
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>{t('email')}:</b> {t('emailContent')}
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>{t('address')}:</b> {t('addressContent')}
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>{t('languages')}:</b> {t('languagesContent')}
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>{t('nationality')}:</b> {t('nationalityContent')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Блок со статистикой */}
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: 600, width: '100%', mt: { xs: 0, md: 0 } }}
          justifyContent='center'
        >
          {[
            { label: t('box1'), value: '4+' },
            { label: t('box2'), value: '4' },
            { label: t('box3'), value: '10+' },
            { label: t('box4'), value: '3+' },
            { label: t('box5'), value: '3+' },
            { label: '', value: '...' },
          ].map((item, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <Paper
                component={motion.div}
                whileHover={{ scale: 1.05 }}
                sx={{
                  padding: '1.5rem',
                  backgroundColor: '#2e2e4d',
                  color: 'white',
                  textAlign: 'center',
                  borderRadius: '8px',
                  height: 120, // Фиксированная высота для блоков
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant='h4' sx={{ color: '#34d399', fontWeight: 'bold' }}>
                  {item.value}
                </Typography>
                <Typography variant='body2'>{item.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default AboutMe
