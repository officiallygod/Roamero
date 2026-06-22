<div align="center">

# 🌍 Roamero

### Every Place. Every Journey.

**A beautiful, interactive travel tracker that lets you mark the countries and cities you've visited on a stunning 3D globe.**

[![Deploy to GitHub Pages](https://github.com/officiallygod/Roamero/actions/workflows/deploy.yml/badge.svg)](https://github.com/officiallygod/Roamero/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)

[**🚀 Live Demo**](https://officiallygod.github.io/Roamero/) · [**🐛 Report Bug**](https://github.com/officiallygod/Roamero/issues) · [**✨ Request Feature**](https://github.com/officiallygod/Roamero/issues)

</div>

---

## 🗺️ What is Roamero?

Roamero is a modern, privacy-first travel tracking Progressive Web App that transforms the way you visualize your journeys. Instead of maintaining boring spreadsheets or pinning physical maps, Roamero gives you an interactive 3D globe where every visited country and city comes alive with vibrant colors.

**The concept is simple**: explore a beautiful globe, click on countries, mark them as visited with dates, and watch your world fill up with color. It's designed to give you a sense of accomplishment and inspire you to travel more.

### The Philosophy

> "The world is a book, and those who do not travel read only one page." — Saint Augustine

Roamero is built on the idea that seeing your progress visually — countries lighting up, percentage climbing, cities marked — creates a powerful motivation to explore more of our beautiful planet.

---

## ✨ Features

### 🌐 Interactive 3D Globe
- **Three.js powered** — Smooth 60fps rendering using WebGL
- **Country polygons** — Every country outlined and clickable
- **Fly-to animations** — Smooth camera transitions when navigating
- **Auto-rotate** — The globe spins gracefully when idle
- **Atmosphere glow** — Beautiful ambient lighting effect

### 🎨 Color Your World
- Countries change color when marked as visited
- Each continent has its own color signature
- Visited countries are elevated on the globe for visual emphasis
- Progressive filling creates a rewarding visual experience

### 🔍 Instant Fuzzy Search
- Find any country or city by typing a few characters
- Fuzzy matching handles typos (e.g., "Tokio" → "Tokyo")
- Keyboard navigation with arrow keys
- Search history saved for quick re-access
- "/" keyboard shortcut to focus search

### 📍 195 Countries, 1,950+ Cities
- Complete coverage of all UN member states
- Top 10 tourist destinations per country
- Accurate coordinates for every location
- Brief, engaging descriptions

### 📅 Travel Timeline
- Record the exact date you visited each place
- See visit dates on the globe tooltips
- Track your travel history over time

### 📱 Progressive Web App
- **Install on any device** — Works like a native app
- **Offline support** — Your data works without internet
- **Fast loading** — Service worker caching

### 🌙 Dark & Light Mode
- Beautiful dark theme with deep space aesthetics
- Clean light theme with soft lavender tones
- Respects your system preference
- Toggle with a click

### 🍪 Privacy First
- **All data stored locally** — Nothing sent to servers
- **Cookie consent** — GDPR-compliant consent banner
- **Export your data** — Full data portability
- **No tracking** — No analytics, no third-party scripts

---

## 🛠️ Tech Stack

| Technology | Purpose |
|:-----------|:--------|
| [Vite](https://vitejs.dev/) | Lightning-fast build tool |
| [globe.gl](https://globe.gl/) | Interactive 3D globe (Three.js) |
| [Three.js](https://threejs.org/) | WebGL 3D rendering engine |
| [Fuse.js](https://www.fusejs.io/) | Lightweight fuzzy search |
| [Natural Earth](https://www.naturalearthdata.com/) | Public domain map data |
| [vite-plugin-pwa](https://vite-pwa-org.netlify.app/) | PWA support |

### Architecture

```
src/
├── main.js                 # App entry + router
├── pages/
│   ├── landing.js          # Hero + features
│   └── map.js              # 3D globe + interactions
├── components/
│   ├── cookie-consent.js   # GDPR cookie banner
│   └── theme-toggle.js     # Dark/light switch
├── data/
│   └── countries.js        # 195 countries + cities
├── services/
│   └── storage.js          # localStorage + cookies
├── styles/
│   ├── variables.css       # Design tokens + themes
│   ├── global.css          # Reset + utilities
│   ├── landing.css         # Landing page
│   └── map.css             # Map page
└── utils/
    └── helpers.js           # Utility functions
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/officiallygod/Roamero.git
cd Roamero

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173/Roamero/`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

### GitHub Pages (Automatic)

This project includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to `main`.

1. Go to your repository **Settings** → **Pages**
2. Set Source to **GitHub Actions**
3. Push to `main` — the site will be live at `https://officiallygod.github.io/Roamero/`

### Manual Deploy

```bash
npm run build
# Upload the contents of dist/ to any static hosting
```

---

## 🎨 Design System

Roamero uses a carefully crafted design system:

- **Colors**: Lavender/purple gradient palette with continent-specific accents
- **Typography**: Inter (body) + Space Grotesk (headings) from Google Fonts
- **Effects**: Glassmorphism, smooth gradients, micro-animations
- **Themes**: Full light/dark mode with CSS custom properties
- **Responsive**: Mobile-first, works on all screen sizes

---

## 🗺️ Data Sources

- **Country boundaries**: [Natural Earth](https://www.naturalearthdata.com/) — Public Domain
- **City data**: Curated from [GeoNames](https://www.geonames.org/) — CC-BY 4.0
- **Globe textures**: [three-globe examples](https://github.com/vasturiano/three-globe) — MIT License

All data used is open-source and free from copyright restrictions.

---

## 🛣️ Roadmap

- [x] Interactive 3D globe with country polygons
- [x] Mark countries and cities as visited
- [x] Fuzzy search across all places
- [x] Dark/light theme toggle
- [x] Cookie consent banner
- [x] PWA support (installable, offline)
- [x] Visit date tracking
- [x] Local data persistence
- [ ] Data export/import (JSON)
- [ ] Share your travel map (screenshot/link)
- [ ] Travel statistics dashboard
- [ ] Trip planning mode
- [ ] Social features (compare maps with friends)
- [ ] Backend integration (Node.js/Express)
- [ ] User accounts and cloud sync
- [ ] Travel blog integration

---

## 🤝 Contributing

Contributions are welcome! Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Keep the bundle size small — avoid heavy dependencies
- Follow the existing code style
- Test on both dark and light themes
- Ensure mobile responsiveness
- Add meaningful comments for complex logic

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [globe.gl](https://globe.gl/) by Vasco Asturiano — The incredible 3D globe library
- [Natural Earth](https://www.naturalearthdata.com/) — Beautiful public domain map data
- [Three.js](https://threejs.org/) — The foundation of web 3D graphics
- [Fuse.js](https://www.fusejs.io/) — Lightning-fast fuzzy search

---

<div align="center">

**Made with ❤️ for travelers by [officiallygod](https://github.com/officiallygod)**

*Every place tells a story. Start coloring yours.*

🌍 🌎 🌏

</div>
