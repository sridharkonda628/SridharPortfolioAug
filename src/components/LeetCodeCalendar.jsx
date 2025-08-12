import React from 'react'
import { motion } from 'framer-motion'

export default function LeetCodeCalendar() {
  // Generate mock data for the last year (you can replace this with real data)
  const generateActivityData = () => {
    const data = []
    const today = new Date()
    const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate())
    
    for (let d = new Date(oneYearAgo); d <= today; d.setDate(d.getDate() + 1)) {
      const date = new Date(d)
      // Generate random activity levels (0-4) with more activity on weekdays
      const isWeekend = date.getDay() === 0 || date.getDay() === 6
      const baseActivity = isWeekend ? 0.3 : 0.7
      const random = Math.random()
      let level = 0
      
      if (random < baseActivity * 0.4) level = 1
      else if (random < baseActivity * 0.7) level = 2
      else if (random < baseActivity * 0.9) level = 3
      else if (random < baseActivity) level = 4
      
      data.push({
        date: date.toISOString().split('T')[0],
        level: level,
        count: level
      })
    }
    
    return data
  }

  const activityData = generateActivityData()
  
  // Group data by weeks
  const weeks = []
  let currentWeek = []
  
  activityData.forEach((day, index) => {
    if (index % 7 === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek)
      currentWeek = []
    }
    currentWeek.push(day)
  })
  if (currentWeek.length > 0) {
    weeks.push(currentWeek)
  }

  const getColor = (level) => {
    const colors = [
      'bg-gray-700', // No activity
      'bg-green-600', // Low activity
      'bg-green-500', // Medium activity
      'bg-green-400', // High activity
      'bg-green-300'  // Very high activity
    ]
    return colors[level] || colors[0]
  }

  const getTooltipText = (day) => {
    if (day.count === 0) return `${day.date}: No problems solved`
    return `${day.date}: ${day.count} problem${day.count > 1 ? 's' : ''} solved`
  }

  return (
    <div className="overflow-x-auto">
      <div className="inline-flex gap-1">
        {weeks.map((week, weekIndex) => (
          <div key={weekIndex} className="flex flex-col gap-1">
            {week.map((day, dayIndex) => (
              <motion.div
                key={`${weekIndex}-${dayIndex}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: (weekIndex * 7 + dayIndex) * 0.001,
                  duration: 0.3 
                }}
                className={`w-3 h-3 rounded-sm ${getColor(day.level)} hover:scale-125 transition-transform cursor-pointer`}
                title={getTooltipText(day)}
              />
            ))}
          </div>
        ))}
      </div>
      
      {/* Legend */}
      <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
        <span>Less</span>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-sm bg-gray-700"></div>
          <div className="w-3 h-3 rounded-sm bg-green-600"></div>
          <div className="w-3 h-3 rounded-sm bg-green-500"></div>
          <div className="w-3 h-3 rounded-sm bg-green-400"></div>
          <div className="w-3 h-3 rounded-sm bg-green-300"></div>
        </div>
        <span>More</span>
      </div>
    </div>
  )
}
