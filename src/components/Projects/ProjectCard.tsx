import { Box, Typography, Button, Chip } from '@mui/material'
import { useTranslations } from 'next-intl'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  technologies: string[]
  link: string
}

const ProjectCard = ({ image, title, description, technologies, link }: ProjectCardProps) => {
  const t = useTranslations('projects')
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 345,
        backgroundColor: '#2e2e4d',
        color: 'white',
        borderRadius: '8px',
        overflow: 'hidden',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s',
        '&:hover': {
          transform: 'scale(1.05)',
        },
        height: 520, // Фиксированная высота карточки
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Фото проекта */}
      <Box
        component='img'
        src={image}
        alt={title}
        sx={{ width: '100%', height: 180, objectFit: 'cover' }}
      />

      {/* Описание и детали проекта */}
      <Box
        sx={{
          padding: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexGrow: 1,
        }}
      >
        <Box>
          <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 1 }}>
            {title}
          </Typography>

          {/* Описание с прокруткой при необходимости */}
          <Box
            sx={{
              maxHeight: 100, // Фиксированная высота для описания
              overflowY: 'auto', // Прокрутка только если текст не помещается
              mb: 2,
            }}
          >
            <Typography variant='body2' sx={{ color: '#d1d5db' }}>
              {description}
            </Typography>
          </Box>

          {/* Технологии с прокруткой при необходимости */}
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              flexWrap: 'wrap',
              maxHeight: 80, // Фиксированная высота для стека технологий
              overflowY: 'auto', // Прокрутка только если чипы не помещаются
              mb: 2,
            }}
          >
            {technologies.map((tech, index) => (
              <Chip
                key={index}
                label={tech}
                sx={{ backgroundColor: '#374151', color: 'white', fontSize: '0.75rem' }}
              />
            ))}
          </Box>
        </Box>

        {/* Кнопка перехода */}
        <Button
          href={link}
          target='_blank'
          rel='noopener noreferrer'
          variant='contained'
          sx={{
            backgroundColor: '#34d399',
            color: 'white',
            fontWeight: 'bold',
            width: '100%',
            mt: 2,
            '&:hover': {
              backgroundColor: '#2f8a6f',
            },
          }}
        >
          {t('viewProjBtn')}
        </Button>
      </Box>
    </Box>
  )
}

export default ProjectCard
