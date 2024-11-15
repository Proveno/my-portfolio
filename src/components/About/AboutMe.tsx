import { Box, Typography, Avatar, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'

const AboutMe = () => {
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
        ABOUT <span style={{ color: '#34d399' }}>ME</span>
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
                PERSONAL INFOS
              </Typography>
              <Box mt={2} sx={{ maxWidth: { xs: '100%', md: 270 }, mx: { xs: 'auto', md: 0 } }}>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>Name:</b> Maksym Riznyk
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>Age:</b> 19
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>Phone:</b> +49 1512 4108711
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>Email:</b> reznikmaksym14@gmail.com
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>Address:</b> Trittauer Amtsweg 51a
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>Languages:</b> German, English, Russian, Ukrainian
                </Typography>
                <Typography variant='body1'>
                  <b className='text-[#34d399]'>Nationality:</b> Ukrainian
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
            { label: 'NUMBERS OF EXPERIENCE', value: '10+' },
            { label: 'COMPLETED PROJECTS', value: '360+' },
            { label: 'ATTEND MEETINGS', value: '332+' },
            { label: 'MAKE BIG SOFTWARE', value: '630+' },
            { label: 'HAPPY CUSTOMERS', value: '890+' },
            { label: 'INTERNATIONAL AWARDS WON', value: '65+' },
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
