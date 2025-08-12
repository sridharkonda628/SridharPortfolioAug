import React from 'react'
import { motion } from 'framer-motion'

export default function About(){
  const education = [
    {
      degree: 'B.Tech Information Technology',
      institution: 'Sreenidhi Institute of Science and Technology',
      period: '2022 - 2026',
      cgpa: '9.04',
      highlights: ['Data Structures & Algorithms', 'Database Management Systems', 'Web Technologies', 'Software Engineering']
    }
  ]

  const skills = [
    { category: 'Programming Languages', items: ['JavaScript', 'Python', 'Java', 'TypeScript'] },
    { category: 'Frontend Technologies', items: ['React.js', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend Technologies', items: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Git', 'CI/CD'] },
    { category: 'Tools & Platforms', items: ['VS Code', 'Postman', 'Figma', 'Jira'] }
  ]

  const achievements = [
    { title: 'LeetCode Rating', value: '1600+', description: 'Consistent problem-solving performance' },
    { title: 'HackerRank Certifications', value: 'Java, SQL', description: 'Verified programming skills' },
    { title: 'AWS Cloud Practitioner', value: 'Certified', description: 'Cloud infrastructure knowledge' },
    { title: 'Academic Excellence', value: 'CGPA 9.04', description: 'Consistent academic performance' }
  ]

  return (
    <section className="pt-28 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8"
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="card-glass p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Background</h3>
              <p className="opacity-90 leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in Data Structures, Algorithms, and modern web technologies. 
                Currently pursuing my B.Tech in Information Technology, I specialize in building scalable MERN stack applications and 
                AI-integrated solutions that solve real-world problems.
              </p>
              <p className="opacity-90 leading-relaxed mt-4">
                With over 350+ problems solved on LeetCode and a 1600+ rating, I have a proven track record of algorithmic problem-solving. 
                My expertise spans from frontend development with React and modern CSS frameworks to backend development with Node.js and 
                cloud services like AWS.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="card-glass p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎓</span>
                Academic Qualifications
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-lg">{edu.degree}</h4>
                      <p className="text-primary font-medium">{edu.institution}</p>
                      <p className="text-sm opacity-80">{edu.period}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{edu.cgpa}</div>
                      <div className="text-sm opacity-80">CGPA</div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Key Subjects:</h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.highlights.map((subject, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                          {subject}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="card-glass p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-3 text-primary">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="card-glass p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white/5 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">{achievement.value}</div>
                    <div className="font-medium text-sm mb-1">{achievement.title}</div>
                    <div className="text-xs opacity-80">{achievement.description}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="card-glass p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">📊</span>
                Quick Facts
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="opacity-80">Projects Completed</span>
                  <span className="font-semibold">15+</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">LeetCode Problems</span>
                  <span className="font-semibold">350+</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">GitHub Repositories</span>
                  <span className="font-semibold">25+</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-80">Certifications</span>
                  <span className="font-semibold">8+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
