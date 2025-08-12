import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'

export default function App(){
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'dark'
  })

  useEffect(()=>{
    if(theme === 'dark'){
      document.documentElement.classList.remove('light')
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
    }
  },[theme])

  const toggleTheme = ()=> {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  const location = useLocation()

  return (
    <div className="min-h-screen relative">
      <div className="blob" aria-hidden="true" style={{left: '-6rem', top: '-6rem'}}></div>
      <div className="blob" aria-hidden="true" style={{right: '-6rem', bottom: '-6rem', background: 'radial-gradient(circle at 30% 30%, rgba(6,182,212,0.9), rgba(124,58,237,0.7))', opacity:0.28}}></div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
