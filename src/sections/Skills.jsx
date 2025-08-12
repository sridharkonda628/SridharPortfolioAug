import React from 'react'
import { motion } from 'framer-motion'

const SKILLS = [
  { name: 'React', level: 90, icon: '⚛️', color: 'from-blue-400 to-cyan-500' },
  { name: 'Node.js', level: 85, icon: '🟢', color: 'from-green-400 to-emerald-500' },
  { name: 'MongoDB', level: 80, icon: '🍃', color: 'from-green-500 to-teal-600' },
  { name: 'Python', level: 88, icon: '🐍', color: 'from-yellow-400 to-orange-500' },
  { name: 'JavaScript', level: 92, icon: '🟡', color: 'from-yellow-300 to-amber-500' },
  { name: 'TypeScript', level: 78, icon: '🔷', color: 'from-blue-500 to-indigo-600' },
  { name: 'Tailwind CSS', level: 90, icon: '🎨', color: 'from-cyan-400 to-blue-500' },
  { name: 'Framer Motion', level: 85, icon: '✨', color: 'from-purple-400 to-pink-500' },
  { name: 'OpenAI API', level: 75, icon: '🤖', color: 'from-emerald-400 to-green-500' },
  { name: 'Docker', level: 70, icon: '🐳', color: 'from-blue-500 to-cyan-600' },
  { name: 'AWS', level: 72, icon: '☁️', color: 'from-orange-400 to-red-500' },
  { name: 'Git', level: 88, icon: '📝', color: 'from-orange-500 to-red-600' }
]

export default function Skills(){
  return (
    <section className="max-w-6xl mx-auto px-6 mt-12" aria-label="Skills">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-8"
      >
        Skills & Technologies
      </motion.h2>
      
      {/* Auto-scrolling Skills Icons */}
      <div className="mb-8 overflow-hidden">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...SKILLS, ...SKILLS].map((skill, index) => (
            <motion.div
              key={`${skill.name}-${index}`}
              whileHover={{ scale: 1.1, y: -5 }}
              className="flex flex-col items-center gap-2 min-w-[100px]"
            >
              <div className="text-4xl">{skill.icon}</div>
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Skills Progress Bars */}
      <div className="grid md:grid-cols-2 gap-6">
        {SKILLS.map((skill, index) => (
          <motion.div 
            key={skill.name} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card-glass p-4 rounded-lg"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{skill.icon}</span>
                <strong>{skill.name}</strong>
              </div>
              <span className="text-sm opacity-80">{skill.level}%</span>
            </div>
            <div className="bg-white/5 rounded-full h-3 overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} 
                whileInView={{ width: `${skill.level}%` }} 
                transition={{ duration: 1, delay: 0.5 }} 
                className={`h-3 bg-gradient-to-r ${skill.color} rounded-full`} 
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
