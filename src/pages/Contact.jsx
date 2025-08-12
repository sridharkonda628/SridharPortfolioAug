import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const send = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setIsSubmitting(false)
    setShowConfetti(true)
    
    // Hide confetti after 3 seconds
    setTimeout(() => setShowConfetti(false), 3000)
    
    // Reset status after 5 seconds
    setTimeout(() => setStatus(''), 5000)
  }

  return (
    <section id="contact" className="pt-28 pb-16">
      {showConfetti && <Confetti />}
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold"
        >
          Get in touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 opacity-80"
        >
          I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
        </motion.p>
        
        <form onSubmit={send} className="mt-6 grid gap-4">
          <input 
            required 
            value={form.name} 
            onChange={e => setForm({ ...form, name: e.target.value })} 
            className="p-3 rounded card-glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors" 
            placeholder="Your name" 
          />
          <input 
            required 
            type="email"
            value={form.email} 
            onChange={e => setForm({ ...form, email: e.target.value })} 
            className="p-3 rounded card-glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors" 
            placeholder="Email" 
          />
          <textarea 
            required 
            value={form.message} 
            onChange={e => setForm({ ...form, message: e.target.value })} 
            className="p-3 rounded card-glass border border-white/10 focus:border-primary/50 focus:outline-none transition-colors resize-none" 
            rows={6} 
            placeholder="Your message..." 
          />
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="px-4 py-2 btn-primary rounded disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          
          {status === 'sent' && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-center p-3 rounded card-glass"
            >
              Thanks for your message! I'll get back to you soon.
            </motion.p>
          )}
        </form>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <div className="card-glass p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Email</h3>
            <a href="mailto:kondasridhar628@gmail.com" className="text-primary hover:underline">kondasridhar628@gmail.com</a>
          </div>
          <div className="card-glass p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Location</h3>
            <p className="opacity-80">Hyderabad, India</p>
          </div>
          <div className="card-glass p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="opacity-80">+91 98765 43210</p>
          </div>
          <div className="card-glass p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Availability</h3>
            <p className="opacity-80">Open to opportunities</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
