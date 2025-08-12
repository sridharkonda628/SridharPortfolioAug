import '@testing-library/jest-dom'

// Mock IntersectionObserver for Framer Motion
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null
  }
  disconnect() {
    return null
  }
  unobserve() {
    return null
  }
}

// Mock Swiper components
jest.mock('swiper/react', () => ({
  Swiper: ({ children }) => <div data-testid="swiper">{children}</div>,
  SwiperSlide: ({ children }) => <div data-testid="swiper-slide">{children}</div>,
}))

jest.mock('swiper/modules', () => ({
  Navigation: {},
  Pagination: {},
  Autoplay: {},
}))

// Mock CSS imports
jest.mock('swiper/css', () => ({}))
jest.mock('swiper/css/navigation', () => ({}))
jest.mock('swiper/css/pagination', () => ({}))

// Mock other dependencies
jest.mock('react-github-calendar', () => ({
  __esModule: true,
  default: () => <div data-testid="github-calendar">GitHub Calendar</div>,
}))

jest.mock('react-simple-typewriter', () => ({
  Typewriter: ({ words }) => <span data-testid="typewriter">{words[0]}</span>,
}))

jest.mock('react-parallax-tilt', () => ({
  __esModule: true,
  default: ({ children }) => <div data-testid="tilt">{children}</div>,
}))

jest.mock('react-confetti', () => ({
  __esModule: true,
  default: () => <div data-testid="confetti">Confetti</div>,
}))
