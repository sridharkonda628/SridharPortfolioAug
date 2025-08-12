import React from 'react'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from '../App'

test('renders navbar title', () => {
  render(<BrowserRouter><App /></BrowserRouter>)
  const nav = screen.getByRole('link', { name: /Konda Sridhar/i })
  expect(nav).toBeInTheDocument()
})

test('renders navigation links', () => {
  render(<BrowserRouter><App /></BrowserRouter>)
  expect(screen.getAllByRole('link', { name: 'Home' })).toHaveLength(2) // One in nav, one in footer
  expect(screen.getAllByRole('link', { name: 'Projects' })).toHaveLength(2) // One in nav, one in footer
  expect(screen.getAllByRole('link', { name: 'About' })).toHaveLength(2) // One in nav, one in footer
  expect(screen.getAllByRole('link', { name: 'Contact' })).toHaveLength(3) // One in nav, one in hero, one in footer
})

test('renders theme toggle button', () => {
  render(<BrowserRouter><App /></BrowserRouter>)
  const themeToggles = screen.getAllByLabelText('Toggle theme')
  expect(themeToggles).toHaveLength(2) // One for desktop, one for mobile
})
