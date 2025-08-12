import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

export default function Certifications() {
  const [filter, setFilter] = useState('All')

  const certificates = [
    {
      id: 1,
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      category: 'Cloud',
      image: 'https://placehold.co/300x200/ff9900/ffffff?text=AWS',
      url: '#',
      date: '2024',
      highlight: true
    },
    {
      id: 2,
      name: 'AWS Foundations',
      issuer: 'Amazon Web Services',
      category: 'Cloud',
      image: 'https://placehold.co/300x200/ff9900/ffffff?text=AWS',
      url: '#',
      date: '2024',
      highlight: true
    },
    {
      id: 3,
      name: 'REST API Fundamentals',
      issuer: 'Postman',
      category: 'Tech',
      image: 'https://placehold.co/300x200/ff6c37/ffffff?text=Postman',
      url: '#',
      date: '2024'
    },
    {
      id: 4,
      name: 'Python Full Stack Development',
      issuer: 'AICTE',
      category: 'Tech',
      image: 'https://placehold.co/300x200/06b6d4/ffffff?text=AICTE',
      url: '#',
      date: '2024'
    },
    {
      id: 5,
      name: 'Java Programming',
      issuer: 'HackerRank',
      category: 'Tech',
      image: 'https://placehold.co/300x200/7c3aed/ffffff?text=HackerRank',
      url: '#',
      date: '2024'
    },
    {
      id: 6,
      name: 'SQL Database Management',
      issuer: 'HackerRank',
      category: 'Tech',
      image: 'https://placehold.co/300x200/10b981/ffffff?text=HackerRank',
      url: '#',
      date: '2024'
    },
    {
      id: 7,
      name: 'AI/ML Fundamentals',
      issuer: 'Coursera',
      category: 'AI',
      image: 'https://placehold.co/300x200/f59e0b/ffffff?text=Coursera',
      url: '#',
      date: '2024'
    }
  ]

  const categories = ['All', 'Cloud', 'Tech', 'AI', 'Leadership']

  const filteredCertificates = certificates.filter(cert => 
    filter === 'All' ? true : cert.category === filter
  )

  // Leadership activities section
  const leadershipActivities = [
    {
      id: 1,
      title: 'Technical Lead',
      organization: 'College Coding Club',
      description: 'Led a team of 15 developers in building innovative projects and organizing hackathons',
      period: '2023 - 2024',
      highlight: true
    },
    {
      id: 2,
      title: 'Mentor',
      organization: 'Peer Learning Program',
      description: 'Mentored 20+ junior students in programming fundamentals and problem-solving',
      period: '2023 - Present',
      highlight: true
    },
    {
      id: 3,
      title: 'Event Coordinator',
      organization: 'Tech Fest 2024',
      description: 'Successfully organized a 3-day technical festival with 500+ participants',
      period: '2024',
      highlight: true
    }
  ]

  return (
    <section className="max-w-6xl mx-auto px-6 mt-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6">Certifications & Achievements</h2>
        
        {/* Filter Buttons */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                filter === category 
                  ? 'bg-primary text-white' 
                  : 'bg-white/5 text-white/80 hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Tilt
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                perspective={800}
                glareEnable={true}
                glareMaxOpacity={0.3}
                glareColor="#06b6d4"
                glarePosition="bottom"
                glareBorderRadius="12px"
              >
                <motion.a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  className={`block card-glass rounded-lg overflow-hidden group ${
                    cert.highlight ? 'ring-2 ring-primary/50' : ''
                  }`}
                >
                  <div className="relative">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {cert.highlight && (
                      <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-semibold text-lg mb-1">{cert.name}</h3>
                      <p className="text-white/80 text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm opacity-80">{cert.date}</span>
                      <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full">
                        {cert.category}
                      </span>
                    </div>
                  </div>
                </motion.a>
              </Tilt>
            </motion.div>
          ))}
        </div>

        {/* Leadership Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <span className="text-2xl">👑</span>
            Leadership & Activities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipActivities.map((activity, index) => (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`card-glass p-6 rounded-lg ${
                  activity.highlight ? 'ring-2 ring-primary/50 bg-primary/5' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-semibold text-lg">{activity.title}</h4>
                  {activity.highlight && (
                    <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-primary font-medium text-sm mb-2">{activity.organization}</p>
                <p className="text-sm opacity-80 mb-3">{activity.description}</p>
                <div className="text-xs opacity-60">{activity.period}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
