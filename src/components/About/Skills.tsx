import { Box, Typography, Grid, Paper } from '@mui/material'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { RevealOnScroll } from '../RevealScroll'

const Skills = () => {
  const t = useTranslations('aboutPage')
  const skills = [
    { name: 'TypeScript', level: t('levelAdvanced') },
    { name: 'JavaScript', level: t('levelAdvanced') },
    { name: 'React', level: t('levelAdvanced') },
    { name: 'Next.js', level: t('levelAdvanced') },
    { name: 'Angular', level: t('levelAdvanced') },
    { name: 'Tailwind CSS', level: t('levelAdvanced') },
    { name: 'Material UI', level: t('levelAdvanced') },
    { name: 'Node.js', level: t('levelAdvanced') },

    { name: 'Express', level: t('levelAdvanced') },
    { name: 'NestJS', level: t('levelIntermediate') },
    { name: 'Hono', level: t('levelIntermediate') },
    { name: 'Prisma ORM', level: t('levelIntermediate') },
    { name: 'MongoDB', level: t('levelIntermediate') },
    { name: 'MySQL', level: t('levelIntermediate') },
    { name: 'SAP HANA', level: t('levelIntermediate') },
    { name: 'SQL', level: t('levelAdvanced') },

    { name: 'AWS', level: t('levelIntermediate') },
    { name: 'Azure', level: t('levelIntermediate') },
    { name: 'GCP', level: t('levelIntermediate') },
    { name: 'Docker', level: t('levelIntermediate') },
    { name: 'Nx (Monorepo)', level: t('levelIntermediate') },
    { name: 'Flutter', level: t('levelIntermediate') },
    { name: 'Dart', level: t('levelIntermediate') },
    { name: 'Git', level: t('levelAdvanced') },
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
        <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 2 }}>
          {t('mySkillsPart1')} <span style={{ color: '#34d399' }}>{t('mySkillsPart2')}</span>
        </Typography>
      </RevealOnScroll>

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
            <RevealOnScroll delay={0.1 * index}>
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
            </RevealOnScroll>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Skills
