import React from 'react'
import { motion } from 'framer-motion'
import GitHubCalendar from 'react-github-calendar'
import LeetCodeCalendar from './LeetCodeCalendar'

export default function GitHubActivity() {
  const githubUsername = 'sridharkonda628'
  const leetcodeUsername = 'sridhar_konda'
  
  const theme = {
    light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  return (
    <div className="space-y-6">
      {/* LeetCode Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="card-glass p-6 rounded-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-2xl">⚡</span>
            LeetCode Activity
          </h3>
          <a
            href={`https://leetcode.com/u/${leetcodeUsername}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm flex items-center gap-1"
          >
            View Profile →
          </a>
        </div>
        
        {/* LeetCode Activity Calendar */}
        <div className="mb-6">
          <LeetCodeCalendar />
        </div>

        {/* LeetCode Stats Grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-3xl font-bold text-orange-400 mb-1">350+</div>
            <div className="text-sm opacity-80">Problems Solved</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-3xl font-bold text-green-400 mb-1">1600+</div>
            <div className="text-sm opacity-80">Rating</div>
          </div>
          <div className="text-center p-4 bg-white/5 rounded-lg">
            <div className="text-3xl font-bold text-blue-400 mb-1">85%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-3">
          <h4 className="font-semibold text-primary">Recent Activity</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="text-lg font-bold">3</div>
              <div className="text-xs opacity-80">This Week</div>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="text-lg font-bold">12</div>
              <div className="text-xs opacity-80">This Month</div>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="text-lg font-bold">2</div>
              <div className="text-xs opacity-80">Contests</div>
            </div>
            <div className="text-center p-3 bg-white/5 rounded-lg">
              <div className="text-lg font-bold">95%</div>
              <div className="text-xs opacity-80">Accuracy</div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-sm opacity-80">
          Active problem solver • Participating in contests • Consistent daily practice
        </div>
      </motion.div>

      {/* GitHub Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="card-glass p-6 rounded-lg"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-2xl">🐙</span>
            GitHub Activity
          </h3>
          <a
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline text-sm flex items-center gap-1"
          >
            View Profile →
          </a>
        </div>
        <div className="overflow-x-auto">
          <GitHubCalendar
            username={githubUsername}
            colorScheme="dark"
            fontSize={12}
            blockSize={12}
            blockMargin={4}
            hideColorLegend={false}
            hideMonthLabels={false}
            showWeekdayLabels={true}
            theme={theme}
          />
        </div>
        <div className="mt-4 text-sm opacity-80">
          Contributions in the last year • 25+ repositories • Active in open source
        </div>
      </motion.div>
    </div>
  )
}
