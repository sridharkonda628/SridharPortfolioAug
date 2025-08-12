import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CodingStats() {
  const [counts, setCounts] = useState({
    leetcode: 0,
    hackerrank: 0,
    rating: 0
  })

  const targetCounts = {
    leetcode: 350,
    hackerrank: 200,
    rating: 1600
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const timer = setInterval(() => {
      setCounts(prev => ({
        leetcode: Math.min(prev.leetcode + Math.ceil(targetCounts.leetcode / steps), targetCounts.leetcode),
        hackerrank: Math.min(prev.hackerrank + Math.ceil(targetCounts.hackerrank / steps), targetCounts.hackerrank),
        rating: Math.min(prev.rating + Math.ceil(targetCounts.rating / steps), targetCounts.rating)
      }))
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  const stats = [
    {
      platform: 'LeetCode',
      count: counts.leetcode,
      target: targetCounts.leetcode,
      icon: '⚡',
      color: 'from-orange-400 to-red-500',
      url: 'https://leetcode.com/u/sridhar_konda/',
      description: 'Problems Solved'
    },
    {
      platform: 'HackerRank',
      count: counts.hackerrank,
      target: targetCounts.hackerrank,
      icon: '💻',
      color: 'from-green-400 to-emerald-500',
      url: 'https://www.hackerrank.com/profile/kondasridhar628',
      description: 'Challenges Completed'
    },
    {
      platform: 'GitHub',
      count: 25,
      target: 50,
      icon: '🐙',
      color: 'from-gray-400 to-gray-600',
      url: 'https://github.com/sridharkonda628',
      description: 'Repositories'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid md:grid-cols-3 gap-4"
    >
      {stats.map((stat, index) => (
        <motion.a
          key={stat.platform}
          href={stat.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="card-glass p-6 rounded-lg text-center group cursor-pointer"
        >
          <div className="text-3xl mb-2">{stat.icon}</div>
          <h3 className="text-lg font-semibold mb-2">{stat.platform}</h3>
          <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
            {stat.count}+
          </div>
          <div className="text-sm opacity-80 mt-1">
            {stat.description}
          </div>
          <div className="mt-3 w-full bg-white/10 rounded-full h-1">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(stat.count / stat.target) * 100}%` }}
              transition={{ duration: 1, delay: 0.5 }}
              className={`h-1 bg-gradient-to-r ${stat.color} rounded-full`}
            />
          </div>
        </motion.a>
      ))}
    </motion.div>
  )
}
