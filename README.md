# Konda Sridhar — Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, professional design with dark/light theme support
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Vite for lightning-fast development and builds
- 🎭 **Animations**: Smooth animations powered by Framer Motion
- 🌙 **Theme Toggle**: Dark and light theme with persistent storage
- 📄 **Multiple Pages**: Home, Projects, About, and Contact pages
- 🧪 **Tested**: Comprehensive test suite with Jest and React Testing Library

## Tech Stack

- **Frontend**: React 18, Vite 4
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Heroicons, React Icons
- **Routing**: React Router DOM
- **Testing**: Jest, React Testing Library
- **Build Tool**: Vite

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

3. **Run tests**
   ```bash
   npm test
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Hero.jsx        # Hero section component
│   ├── Navbar.jsx      # Navigation bar
│   └── ThemeToggle.jsx # Theme toggle button
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Projects.jsx    # Projects page
│   ├── About.jsx       # About page
│   └── Contact.jsx     # Contact page
├── sections/           # Page sections
│   ├── Highlights.jsx  # Highlights section
│   └── Skills.jsx      # Skills section
├── assets/             # Static assets
├── __tests__/          # Test files
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Customization

### Updating Personal Information
- Edit `src/components/Hero.jsx` for the main hero section
- Update `src/pages/About.jsx` for personal information
- Modify `src/pages/Projects.jsx` for project details
- Update contact information in `src/pages/Contact.jsx`

### Styling
- Global styles are in `src/index.css`
- Tailwind configuration is in `tailwind.config.cjs`
- Theme colors can be customized in the Tailwind config

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add a route in `src/App.jsx`
3. Add navigation link in `src/components/Navbar.jsx`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!
