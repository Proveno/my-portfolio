import { Box, Avatar, IconButton } from '@mui/material'
import { Home, Person, Build, Dashboard, Article, Mail } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const NavBar = ({
  setSelectedSection,
}: {
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    console.log(width)
  }, [width])
  return (
    <>
      <Box
        className='transition-all duration-1000'
        sx={{
          position: 'fixed',
          top: '4%',
          left: '2%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          backgroundColor: isOpened ? '#1b1b29' : 'none',
          padding: '0.6rem',
          borderRadius: '0.6rem',
          zIndex: 3,
        }}
        onClick={() => {
          setIsOpened(!isOpened)
        }}
      >
        <MenuIcon
          className={`${isOpened ? 'text-[#34d399]' : 'text-white'} transition-all duration-1000`}
        />
      </Box>
      <Box
        className='transition-all duration-1000'
        sx={{
          position: 'fixed',
          top: '50%',
          left: { xs: isOpened ? '2%' : '-100%', md: '2%' },
          transform: 'translateY(-50%)',
          display: { xs: 'flex', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
          backgroundColor: '#1b1b29',
          padding: '1rem',
          borderRadius: '1rem',
          zIndex: 3,
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
            onClick={() => setSelectedSection(item.href)}
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
    </>
  )
}

export default NavBar
