import React from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

export default function ThemeToggle({theme, toggleTheme}){
  return (
    <button onClick={toggleTheme} className="p-2 rounded card-glass" aria-label="Toggle theme">
      {theme === 'dark' ? <SunIcon className="w-5 h-5 text-yellow-400"/> : <MoonIcon className="w-5 h-5 text-sky-600"/>}
    </button>
  )
}
