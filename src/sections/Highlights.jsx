import React from 'react'
import { motion } from 'framer-motion'

export default function Highlights(){
  const items = [
    { t: '100+ beta users', d: 'AI Blogs Booster' },
    { t: '95% Lighthouse', d: 'Frontend performance' },
    { t: '500+ users', d: 'Auth & payments' }
  ]
  return (
    <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6 mt-6" aria-label="Highlights">
      {items.map(x => (
        <motion.div key={x.t} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="card-glass p-6 rounded-lg">
          <h3 className="text-xl font-semibold">{x.t}</h3>
          <p className="mt-2 opacity-80">{x.d}</p>
        </motion.div>
      ))}
    </section>
  )
}
