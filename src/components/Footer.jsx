import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/sridharkonda628', icon: '🐙' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/sridhar-konda', icon: '💼' },
    { name: 'LeetCode', url: 'https://leetcode.com/u/sridhar_konda/', icon: '⚡' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/kondasridhar628', icon: '💻' }
  ]

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' }
  ]

  return (
    <footer className="mt-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-glow mb-4">Konda Sridhar</h3>
            <p className="text-sm opacity-80 mb-4">
              Full Stack Developer passionate about creating innovative web solutions 
              and AI integrations that make a difference.
            </p>
            <div className="flex gap-4">
              {socialLinks.slice(0, 3).map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-lg hover:bg-primary/20 transition-all duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={link.url}
                    className="text-sm opacity-80 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-3">
                             <div className="flex items-center gap-3">
                 <span className="text-primary">📧</span>
                 <a 
                   href="mailto:kondasridhar628@gmail.com"
                   className="text-sm opacity-80 hover:text-primary transition-colors"
                 >
                   kondasridhar628@gmail.com
                 </a>
               </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">📍</span>
                <span className="text-sm opacity-80">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary">💼</span>
                <span className="text-sm opacity-80">Available for opportunities</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm opacity-60">
            © {currentYear} Konda Sridhar. All rights reserved.
          </p>
          <div className="flex gap-6">
            {socialLinks.slice(3).map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-sm opacity-60 hover:text-primary transition-colors"
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          className="fixed bottom-6 right-6 w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary hover:bg-primary/30 transition-all duration-300 z-50"
        >
          ↑
        </motion.button>
      </div>
    </footer>
  )
}
