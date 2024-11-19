import { Box, Avatar, IconButton } from '@mui/material'
import { Person, Dashboard, Mail } from '@mui/icons-material'
import { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

const NavBar = ({
  setSelectedSection,
}: {
  setSelectedSection: React.Dispatch<React.SetStateAction<string>>
}) => {
  const [isOpened, setIsOpened] = useState<boolean>(false)
  const [width, setWidth] = useState(0)
  const divRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setWidth(window.innerWidth)
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  useEffect(() => {
    // console.log(width)
  }, [width])
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setIsOpened(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setIsOpened])
  return (
    <>
      <Box
        className='transition-all duration-1000'
        sx={{
          display: { xs: 'flex', md: 'none' },
          position: 'fixed',
          top: '4%',
          left: '2%',
          transform: 'translateY(-50%)',
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
        ref={divRef}
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
          sx={{
            width: { xs: 60, md: 70, lg: 80 },
            height: { xs: 60, md: 70, lg: 80 },
            mb: 2,
            border: '2px solid #2e2e4d',
          }}
          onClick={() => setSelectedSection('#home')}
        />

        {/* Иконки секций */}
        {[
          { icon: <Person />, href: '#about' },
          { icon: <Dashboard />, href: '#projects' },
          { icon: <Mail />, href: '#contact' },
        ].map((item, index) => (
          <IconButton
            key={index}
            component='a'
            href={item.href}
            onClick={() => setSelectedSection(item.href)}
            sx={{
              width: { xs: 40, md: 45, lg: 50 },
              height: { xs: 40, md: 45, lg: 50 },
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
