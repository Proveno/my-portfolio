'use client'
import { Box } from '@mui/material'
import NavBar from '@/components/NavBar'
import MainSection from '@/components/MainSection'
import { useEffect, useState } from 'react'
import AboutSection from '@/components/About/AboutSection'

const Home = () => {
  const [selectedSection, setSelectedSection] = useState<string>('')
  const [renderElem, setRenderElem] = useState<JSX.Element>(<MainSection />)
  // setLoaded={setLoaded}

  useEffect(() => {
    console.log(selectedSection)
    switch (selectedSection) {
      case '#home':
        setRenderElem(<MainSection />)
        break
      case '#about':
        setRenderElem(<AboutSection />)
        break
      default:
        setRenderElem(<MainSection />)
    }
  }, [selectedSection])
  return (
    <Box>
      <Box>
        <NavBar setSelectedSection={setSelectedSection} />
      </Box>
      <Box>{renderElem}</Box>
    </Box>
  )
}

export default Home
