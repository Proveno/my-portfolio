'use client'

import {
  Box,
  Typography,
  Grid,
  //  TextField, Button,
  IconButton,
  Button,
  TextField,
} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'

import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram'

import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { RevealOnScroll } from '../RevealScroll'
import toast from 'react-hot-toast'

const ContactSection = () => {
  const t = useTranslations('contactPage')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [honeypot, setHoneypot] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setErrors({ ...errors, [name]: '' })
  }

  const validateForm = () => {
    const newErrors: typeof errors = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }

    if (!formData.name.trim()) {
      newErrors.name = t('fieldNameErr')
    }
    if (!formData.email.trim()) {
      newErrors.email = t('fieldEmailErr')
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('fieldEmailErrFormat')
    }
    if (!formData.subject.trim()) {
      newErrors.subject = t('fieldSubjectErr')
    }
    if (!formData.message.trim()) {
      newErrors.message = t('fieldMessageErr')
    }

    setErrors(newErrors)
    return Object.values(newErrors).every((error) => !error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/mailer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: honeypot,
        }),
      })

      if (response.ok) {
        toast.success(t('toastSuccess'))
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        toast.error(t('toastError'))
        const result = await response.json().catch(() => null)
        console.error('Error sending email:', result)
      }
    } catch (error) {
      toast.error(t('toastError'))
      console.error('Unexpected error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
      {/* Заголовок */}
      <RevealOnScroll delay={0.2}>
        <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 4 }}>
          {t('contactMePart1')} <span style={{ color: '#34d399' }}>{t('contactMePart2')}</span>
        </Typography>
      </RevealOnScroll>

      <Grid container spacing={4} sx={{ mt: 4 }} justifyContent='center'>
        {/* Секция с контактной информацией */}
        <Grid item xs={12} md={5}>
          <RevealOnScroll delay={0.4}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: { xs: '0rem', md: '2rem' },
                backgroundColor: '#1f1f2e',
                color: 'white',
              }}
            >
              {/* Заголовок */}
              <RevealOnScroll delay={0.2}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 1 }}>
                  {t('getInTouch')}
                  <Box
                    sx={{
                      width: '100%',
                      height: '2px',
                      backgroundColor: '#34d399',
                      mt: 0.5,
                      mb: 3,
                    }}
                  ></Box>
                </Typography>
              </RevealOnScroll>
              <RevealOnScroll delay={0.4}>
                <Typography variant='body1' sx={{ mb: 3, textAlign: 'left', color: '#d1d5db' }}>
                  {t('contactText')}
                </Typography>
              </RevealOnScroll>
              <RevealOnScroll delay={0.6}>
                {/* Адрес */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#374151',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                    }}
                  >
                    <LocationOnIcon sx={{ color: '#34d399' }} />
                  </Box>
                  <Typography variant='body1' sx={{ color: '#d1d5db' }}>
                    Trittauer Amtsweg 51a
                  </Typography>
                </Box>

                {/* Email */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#374151',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                    }}
                  >
                    <EmailIcon sx={{ color: '#34d399' }} />
                  </Box>
                  <Typography variant='body1' sx={{ color: '#d1d5db' }}>
                    reznikmaksym14@gmail.com
                  </Typography>
                </Box>

                {/* Телефон */}
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Box
                    sx={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: '#374151',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mr: 2,
                    }}
                  >
                    <PhoneIcon sx={{ color: '#34d399' }} />
                  </Box>
                  <Typography variant='body1' sx={{ color: '#d1d5db' }}>
                    +49 1512 4108711
                  </Typography>
                </Box>
              </RevealOnScroll>
              {/* Социальные иконки */}
              <RevealOnScroll delay={0.8}>
                <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                  <IconButton
                    component='a'
                    href='https://www.instagram.com/maksym.reznik/profilecard/?igsh=MTdudnVqYzBnenl1bQ=='
                    target='_blank'
                    sx={{
                      backgroundColor: '#374151',
                      color: '#d1d5db',
                      '&:hover': { backgroundColor: '#2f2f3e' },
                    }}
                  >
                    <InstagramIcon />
                  </IconButton>
                  <IconButton
                    component='a'
                    href='https://www.linkedin.com/in/maksym-riznyk-3340941b8/'
                    target='_blank'
                    sx={{
                      backgroundColor: '#374151',
                      color: '#d1d5db',
                      '&:hover': { backgroundColor: '#2f2f3e' },
                    }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    component='a'
                    href='https://github.com/Proveno'
                    target='_blank'
                    sx={{
                      backgroundColor: '#374151',
                      color: '#d1d5db',
                      '&:hover': { backgroundColor: '#2f2f3e' },
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Box>
              </RevealOnScroll>
            </Box>
          </RevealOnScroll>
        </Grid>

        {/* Форма обратной связи */}
        <Grid item xs={12} md={5}>
          <RevealOnScroll delay={0.6}>
            <Box
              component='form'
              onSubmit={handleSubmit}
              sx={{
                backgroundColor: '#2e2e4d',
                padding: 3,
                borderRadius: '8px',
                boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              <input
                type='text'
                name='company'
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete='off'
                aria-hidden='true'
                style={{
                  position: 'absolute',
                  left: '-9999px',
                  width: '1px',
                  height: '1px',
                  opacity: 0,
                }}
              />
              <Typography variant='body1' sx={{ mb: 1, color: '#d1d5db', textAlign: 'left' }}>
                {t('fieldName')}:
              </Typography>
              <TextField
                fullWidth
                placeholder={t('fieldNamePlacehold')}
                variant='outlined'
                name='name'
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
                inputProps={{ maxLength: 100 }}
                sx={{
                  mb: !!errors.name ? 0 : 3,
                  backgroundColor: '#374151',
                  borderRadius: '4px',
                  input: { color: 'white' },
                  '.MuiFormHelperText-root': {
                    color: 'red',
                    margin: '0px',
                    paddingTop: '2px',
                    paddingLeft: '6px',
                    fontSize: '0.85rem',
                    background: '#2e2e4d',
                  },
                }}
              />

              <Typography variant='body1' sx={{ mb: 1, color: '#d1d5db', textAlign: 'left' }}>
                {t('fieldEmail')}:
              </Typography>
              <TextField
                fullWidth
                placeholder={t('fieldEmailPlacehold')}
                variant='outlined'
                name='email'
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
                inputProps={{ maxLength: 200 }}
                sx={{
                  mb: !!errors.email ? 0 : 3,
                  backgroundColor: '#374151',
                  borderRadius: '4px',
                  input: { color: 'white' },
                  '.MuiFormHelperText-root': {
                    color: 'red',
                    margin: '0px',
                    paddingTop: '2px',
                    paddingLeft: '6px',
                    fontSize: '0.85rem',
                    background: '#2e2e4d',
                  },
                }}
              />

              <Typography variant='body1' sx={{ mb: 1, color: '#d1d5db', textAlign: 'left' }}>
                {t('fieldSubject')}:
              </Typography>
              <TextField
                fullWidth
                placeholder={t('fieldSubjectPlacehold')}
                variant='outlined'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                error={!!errors.subject}
                helperText={errors.subject}
                inputProps={{ maxLength: 200 }}
                sx={{
                  mb: !!errors.subject ? 0 : 3,
                  backgroundColor: '#374151',
                  borderRadius: '4px',
                  input: { color: 'white' },
                  '.MuiFormHelperText-root': {
                    color: 'red',
                    margin: '0px',
                    paddingTop: '2px',
                    paddingLeft: '6px',
                    fontSize: '0.85rem',
                    background: '#2e2e4d',
                  },
                }}
              />

              <Typography variant='body1' sx={{ mb: 1, color: '#d1d5db', textAlign: 'left' }}>
                {t('fieldMessage')}:
              </Typography>
              <TextField
                fullWidth
                placeholder={t('fieldMessagePlacehold')}
                variant='outlined'
                multiline
                rows={4}
                inputProps={{ style: { color: 'white' }, maxLength: 5000 }}
                name='message'
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
                sx={{
                  mb: !!errors.message ? 1 : 4,
                  backgroundColor: '#374151',
                  borderRadius: '4px',
                  input: { color: 'white' },
                  '.MuiFormHelperText-root': {
                    color: 'red',
                    margin: '0px',
                    paddingTop: '2px',
                    paddingLeft: '6px',
                    fontSize: '0.85rem',
                    background: '#2e2e4d',
                  },
                }}
              />

              <Button
                type='submit'
                variant='contained'
                disabled={isSubmitting}
                fullWidth
                sx={{
                  backgroundColor: '#34d399',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#2f8a6f',
                  },
                }}
              >
                {isSubmitting ? t('loadingMessageBtn') : t('sendMessageBtn')}
              </Button>
            </Box>
          </RevealOnScroll>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContactSection
