// import { useTranslations } from 'next-intl'

// export default function HomePage() {
//   const t = useTranslations('TESTChapter')
//   return <h1>{t('test1')}</h1>
// }
'use client'
import { Box } from '@mui/material'
import NavBar from '@/components/NavBar'
import MainSection from '@/components/MainSection'
import { useEffect, useState } from 'react'
import AboutSection from '@/components/About/AboutSection'
import ContactSection from '@/components/Contact/ContactSection'
import ProjectsSection from '@/components/Projects/ProjectsSection'

const Home = () => {
  const [selectedSection, setSelectedSection] = useState<string>('')
  const [renderElem, setRenderElem] = useState<JSX.Element>(<MainSection />)
  const [hideBlock, setHideBlock] = useState<boolean>(false)
  // setLoaded={setLoaded}

  useEffect(() => {
    setHideBlock(true)
    setTimeout(() => {
      switch (selectedSection) {
        case '#home':
          setRenderElem(<MainSection />)
          break
        case '#about':
          setRenderElem(<AboutSection />)
          break
        case '#contact':
          setRenderElem(<ContactSection />)
          break
        case '#projects':
          setRenderElem(<ProjectsSection />)
          break
        default:
          setRenderElem(<MainSection />)
      }
      setHideBlock(false)
    }, 400)
  }, [selectedSection])
  return (
    <Box className={'bg-[#1f1f2e] '}>
      <Box>
        <NavBar selectedSection={selectedSection} setSelectedSection={setSelectedSection} />
      </Box>
      <Box className={`transition-all duration-500 ${hideBlock ? 'opacity-0' : 'opacity-100'}`}>
        {renderElem}
      </Box>
    </Box>
  )
}

export default Home
