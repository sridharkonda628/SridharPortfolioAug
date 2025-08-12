import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Typewriter } from 'react-simple-typewriter'
import resume from '../assets/sridhar_resume_aug(3).pdf'
import profileImage from '../assets/sridhar_profile.png'

export default function Hero(){
  const roles = [
    'Full Stack Developer',
    'MERN Stack Expert',
    'AI Integration Specialist',
    'Problem Solver'
  ]

  return (
    <section className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center relative">
        <div style={{zIndex:2}}>
          <motion.h1 initial={{x:-40, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.1}} className="text-4xl md:text-6xl font-bold">
            Hi — I'm <span className="text-glow">Konda Sridhar</span>
          </motion.h1>
          <motion.div initial={{x:-20, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:0.25}} className="mt-6">
            <div className="text-lg opacity-90 mb-2">
              I'm a{' '}
              <span className="text-primary font-semibold">
                <Typewriter
                  words={roles}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </div>
            <p className="text-lg opacity-90">
              I build fast, production-ready MERN apps and AI-integrations. I focus on performance, developer experience and polished UI.
            </p>
          </motion.div>

          <div className="mt-6 flex gap-4 flex-wrap">
            <Link to="/projects" className="btn-primary">See projects</Link>
            <a href="#contact" className="px-5 py-3 rounded-lg card-glass">Contact</a>
            <motion.a
              href={resume}
              download="sridhar_resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Download Resume</span>
              <motion.div
                className="absolute inset-0 bg-primary"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {['React','Node','MongoDB','Tailwind','Framer Motion','OpenAI','Docker','AWS'].map(s => (
              <span key={s} className="px-3 py-1 rounded-full text-sm bg-white/6 text-slate-100">{s}</span>
            ))}
          </div>
        </div>

        <div className="p-6" style={{zIndex:2}}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative"
          >
            {/* <img src="" alt="profile_image" /> */}
            {/* Profile Image */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
            >
              <img 
                src={profileImage} 
                alt="Konda Sridhar"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/256x256/06b6d4/ffffff?text=KS';
                }}
              />
            </motion.div>
            
            {/* Floating Tech Icons */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 pointer-events-none"
            >
              {['React', 'Node', 'MongoDB', 'Python', 'AI'].map((tech, index) => (
                <motion.div
                  key={tech}
                  className="absolute bg-primary/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-primary"
                  style={{
                    left: `${50 + 35 * Math.cos((index * 72) * Math.PI / 180)}%`,
                    top: `${50 + 35 * Math.sin((index * 72) * Math.PI / 180)}%`,
                  }}
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}