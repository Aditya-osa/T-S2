import { useState, useEffect } from 'react'
import {
  Header,
  Sidebar,
  Hero,
  About,
  Services,
  RecruitmentProcess,
  Projects,
  Features,
  Training,
  Industries,
  Team,
  Testimonials,
  Blog,
  FAQ,
  Footer,
  BackToTop,
  VideoModal,
} from './components'
import { initAnimations } from './utils/initAnimations'
import './App.css'

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState(null)

  useEffect(() => {
    // 1. Preloader curtain animation
    const preloaderTimer = setTimeout(() => {
      document.body.classList.add('loaded')
    }, 300)

    // 2. Initialize Digix animations, SplitText, and Swipers
    const animTimer = setTimeout(() => {
      initAnimations()
    }, 150)

    return () => {
      clearTimeout(preloaderTimer)
      clearTimeout(animTimer)
    }
  }, [])

  return (
    <div className="digix-app">
      {/* Digix template loader wrapper */}
      <div className="loader-wrapper">
        <div className="loader"></div>
        <div className="loader-section section-left"></div>
        <div className="loader-section section-right"></div>
      </div>

      <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main>
        <Hero onOpenVideo={(url) => setVideoUrl(url)} />
        <About /> <Features />
        <Services />
        <RecruitmentProcess />
        <Projects />

        <Training />
        <Industries />
        <Team />
        <Testimonials />
        <Blog />
        <FAQ />
      </main>
      <Footer />
      <BackToTop />
      {videoUrl && <VideoModal url={videoUrl} onClose={() => setVideoUrl(null)} />}
    </div>
  )
}
