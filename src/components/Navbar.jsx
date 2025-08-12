import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

export default function Navbar({ theme, toggleTheme }){
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const items = ['Home','Projects','About','Contact']
  
  return (
    <motion.nav initial={{y:-24, opacity:0}} animate={{y:0, opacity:1}} className="fixed w-full z-50 top-4 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="/" className="text-xl font-semibold text-white/95 text-glow">Konda Sridhar</a>
        <div className="hidden md:flex gap-6 items-center">
          {items.map(i=> (
            <NavLink key={i} to={i==='Home'?'/':`/${i.toLowerCase()}`} className={({isActive})=> isActive? 'text-primary font-medium':'opacity-90'}>
              {i}
            </NavLink>
          ))}
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="p-2 rounded card-glass" 
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden mt-4 card-glass rounded-lg p-4"
        >
          <div className="flex flex-col gap-4">
            {items.map(i => (
              <NavLink 
                key={i} 
                to={i==='Home'?'/':`/${i.toLowerCase()}`} 
                className={({isActive}) => isActive ? 'text-primary font-medium' : 'opacity-90'}
                onClick={() => setIsMenuOpen(false)}
              >
                {i}
              </NavLink>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
