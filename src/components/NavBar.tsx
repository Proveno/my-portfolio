import { Box, Avatar, IconButton } from '@mui/material'
import { Home, Person, Build, Dashboard, Article, Mail } from '@mui/icons-material'
import { motion } from 'framer-motion'

const NavBar = ({
  setSelectedSection,
}: {
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>
}) => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: '50%',
        left: '2%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        backgroundColor: '#1b1b29',
        padding: '1rem',
        borderRadius: '1rem',
      }}
    >
      {/* Аватар */}
      <Avatar
        src='/assets/MyImage.png'
        alt='Profile Picture'
        sx={{ width: 60, height: 60, mb: 2, border: '2px solid #2e2e4d' }}
      />

      {/* Иконки секций */}
      {[
        { icon: <Home />, href: '#home' },
        { icon: <Person />, href: '#about' },
        { icon: <Build />, href: '#services' },
        { icon: <Dashboard />, href: '#projects' },
        { icon: <Article />, href: '#blog' },
        { icon: <Mail />, href: '#contact' },
      ].map((item, index) => (
        <IconButton
          key={index}
          component='a'
          href={item.href}
          onClick={(e) => setSelectedSection(item.href)}
          sx={{
            color: 'white',
            backgroundColor: '#2e2e4d',
            '&:hover': {
              backgroundColor: '#3a3a5c',
              scale: 1.1,
            },
          }}
        >
          {item.icon}
        </IconButton>
      ))}
    </Box>
  )
}

export default NavBar
