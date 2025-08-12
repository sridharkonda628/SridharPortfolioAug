import React from 'react'
import Hero from '../components/Hero'
import Highlights from '../sections/Highlights'
import Skills from '../sections/Skills'
import CodingStats from '../components/CodingStats'
import GitHubActivity from '../components/GitHubActivity'
import Certifications from '../components/Certifications'

export default function Home(){
  return (
    <main>
      <Hero />
      <Highlights />
      
      {/* Coding Stats Section */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <h2 className="text-2xl font-bold mb-6">Coding Achievements</h2>
        <CodingStats />
      </section>
      
      {/* GitHub Activity Section */}
      <section className="max-w-6xl mx-auto px-6 mt-12">
        <GitHubActivity />
      </section>
      
      <Skills />
      <Certifications />
    </main>
  )
}
