import { Box, Typography, Grid, TextField, Button, IconButton } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

const ContactSection = () => {
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
      <Typography variant='h3' sx={{ fontWeight: 'bold', mb: 4 }}>
        CONTACT <span style={{ color: '#34d399' }}>ME</span>
      </Typography>

      <Grid container spacing={4} sx={{ mt: 4 }} justifyContent='center'>
        {/* Секция с контактной информацией */}
        <Grid item xs={12} md={5}>
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
            <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 1 }}>
              Get in touch
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

            <Typography variant='body1' sx={{ mb: 3, textAlign: 'left', color: '#d1d5db' }}>
              If you have any questions for me, leave your details and message in the form and I
              will be happy to answer them! Lets turn complex tasks into successful digital
              solutions together!
            </Typography>

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
                Trittauer Amtsweg 51a, 22179 Hamburg
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

            {/* Социальные иконки */}
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <IconButton
                sx={{
                  backgroundColor: '#374151',
                  color: '#d1d5db',
                  '&:hover': { backgroundColor: '#2f2f3e' },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: '#374151',
                  color: '#d1d5db',
                  '&:hover': { backgroundColor: '#2f2f3e' },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: '#374151',
                  color: '#d1d5db',
                  '&:hover': { backgroundColor: '#2f2f3e' },
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{
                  backgroundColor: '#374151',
                  color: '#d1d5db',
                  '&:hover': { backgroundColor: '#2f2f3e' },
                }}
              >
                <GitHubIcon />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Форма обратной связи */}
        <Grid item xs={12} md={5}>
          <Box
            component='form'
            sx={{
              backgroundColor: '#2e2e4d',
              padding: 3,
              borderRadius: '8px',
              boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant='body1' sx={{ mb: 1, color: '#d1d5db', textAlign: 'left' }}>
              Name:
            </Typography>
            <TextField
              fullWidth
              placeholder='Enter Your Name ...'
              variant='outlined'
              sx={{
                mb: 2,
                backgroundColor: '#374151',
                borderRadius: '4px',
                input: { color: 'white' },
              }}
            />

            <Typography variant='body1' sx={{ mb: 1, color: '#d1d5db', textAlign: 'left' }}>
              Email:
            </Typography>
            <TextField
              fullWidth
              placeholder='Enter Your Email ...'
              variant='outlined'
              sx={{
                mb: 2,
                backgroundColor: '#374151',
                borderRadius: '4px',
                input: { color: 'white' },
              }}
            />

            <Typography variant='body1' sx={{ mb: 1, color: '#d1d5db', textAlign: 'left' }}>
              Subject:
            </Typography>
            <TextField
              fullWidth
              placeholder='Enter Your Subject ...'
              variant='outlined'
              sx={{
                mb: 2,
                backgroundColor: '#374151',
                borderRadius: '4px',
                input: { color: 'white' },
              }}
            />

            <Typography variant='body1' sx={{ mb: 1, color: '#d1d5db', textAlign: 'left' }}>
              Message:
            </Typography>
            <TextField
              fullWidth
              placeholder='Enter Your Message ...'
              variant='outlined'
              multiline
              rows={4}
              inputProps={{ style: { color: 'white' } }}
              sx={{
                mb: 3,
                backgroundColor: '#374151',
                borderRadius: '4px',
                input: { color: 'white' },
              }}
            />

            <Button
              variant='contained'
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
              SEND MESSAGE
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default ContactSection
