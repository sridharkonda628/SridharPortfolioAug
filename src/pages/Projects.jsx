import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const DEMO = [
  { 
    id: 'ai-blogs', 
    title: 'AI Blogs Booster', 
    tech: ['React', 'OpenAI', 'Tailwind'], 
    desc: 'AI-powered authoring tool with SEO optimization. Features authoring UI, AI summaries, and performance tuning.',
    codeUrl: 'https://github.com/yourusername/ai-blogs-booster',
    liveUrl: 'https://ai-blogs-booster.vercel.app',
    image: 'https://via.placeholder.com/600x400/06b6d4/ffffff?text=AI+Blogs+Booster'
  },
  { 
    id: 'edulink', 
    title: 'EduLink', 
    tech: ['MERN', 'Socket.io'], 
    desc: 'Tutor marketplace with real-time chat, role-based dashboards and booking.',
    codeUrl: 'https://github.com/yourusername/edulink',
    liveUrl: 'https://edulink-app.vercel.app',
    image: 'https://via.placeholder.com/600x400/7c3aed/ffffff?text=EduLink'
  },
  { 
    id: 'portfolio', 
    title: 'Portfolio Website', 
    tech: ['React', 'Framer Motion', 'Tailwind'], 
    desc: 'Modern portfolio website with smooth animations, dark/light theme, and responsive design.',
    codeUrl: 'https://github.com/yourusername/portfolio',
    liveUrl: 'https://portfolio.vercel.app',
    image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Portfolio'
  }
]
export default function Projects(){
  const [filter, setFilter] = useState('All')
  const list = DEMO.filter(p => filter === 'All' ? true : p.tech.includes(filter))
  const techs = ['All','React','OpenAI','MERN','Socket.io','Tailwind']

  return (
    <section className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          Selected Projects
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 flex gap-3 flex-wrap" 
          role="tablist"
        >
          {techs.map(t => (
            <button 
              key={t} 
              onClick={() => setFilter(t)} 
              className={`px-3 py-1 rounded transition-all duration-300 ${
                filter === t ? 'bg-primary text-white' : 'bg-white/5 hover:bg-white/10'
              }`} 
              aria-pressed={filter===t}
            >
              {t}
            </button>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="projects-swiper"
          >
            {list.map((p, index) => (
              <SwiperSlide key={p.id}>
                <motion.article 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }} 
                  className="card-glass rounded-lg overflow-hidden group"
                >
                  <div className="relative">
                    <img 
                      src={p.image} 
                      alt={p.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                    <p className="text-sm opacity-80 mb-4">{p.desc}</p>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {p.tech.map(t => (
                        <span key={t} className="px-2 py-1 text-xs rounded bg-white/5">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a 
                        className="text-sm underline hover:text-primary transition-colors" 
                        href={p.codeUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                      <a 
                        className="text-sm underline hover:text-primary transition-colors" 
                        href={p.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Live
                      </a>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
