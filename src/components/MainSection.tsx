import { Box, Typography, Button, IconButton } from '@mui/material'
import { GitHub, LinkedIn, Instagram } from '@mui/icons-material'
import { useTranslations } from 'next-intl'
import TypingSubtitle from './TypingSubtitle'
import { RevealOnScroll } from './RevealScroll'

const MainSection = () => {
  const t = useTranslations('homePage')
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
      <RevealOnScroll delay={0.2}>
        <Typography variant='h3' component='h1' sx={{ fontWeight: 'bold' }}>
          {t('IAm')} <span style={{ color: '#34d399' }}>{t('Maksym')}</span>
        </Typography>
      </RevealOnScroll>

      {/* Подзаголовок */}
      <RevealOnScroll delay={0.4}>
        <Box sx={{ mt: 1 }}>
          <TypingSubtitle text={t('softwareDeveloper')} speed={100} loopDelay={2} />
        </Box>
      </RevealOnScroll>

      {/* Описание */}
      <RevealOnScroll delay={0.6}>
        <Typography variant='body1' sx={{ maxWidth: '800px', mt: 2, mb: 4 }}>
          {t('textAboutMe')}
        </Typography>
      </RevealOnScroll>

      {/* Социальные иконки */}
      <RevealOnScroll delay={0.8}>
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
      </RevealOnScroll>
      {/* Кнопка для скачивания CV */}
      <RevealOnScroll delay={1}>
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
          {t('download')}
        </Button>
      </RevealOnScroll>
    </Box>
  )
}

export default MainSection
