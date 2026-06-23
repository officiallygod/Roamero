/**
 * Roamero — Main Application Entry Point
 * Handles routing, theme initialization, and page mounting
 */
import './styles/global.css';
import { getTheme, isFirstVisit, markFirstVisitComplete, getPreferences, loadSharedData } from './services/storage.js';
import { prefersDarkMode } from './utils/helpers.js';

// ============================================
// Simple Hash Router
// ============================================
class Router {
  constructor() {
    this.routes = {};
    this.currentPage = null;
    this.appEl = document.getElementById('app');
    window.addEventListener('hashchange', () => this.resolve());
  }

  on(path, handler) {
    this.routes[path] = handler;
    return this;
  }

  async resolve() {
    const hash = window.location.hash.slice(1) || '/';
    const handler = this.routes[hash] || this.routes['/'];

    if (this.currentPage && this.currentPage.destroy) {
      this.currentPage.destroy();
    }

    this.appEl.innerHTML = '';
    this.appEl.classList.add('page-enter');

    if (handler) {
      this.currentPage = await handler(this.appEl);
    }

    setTimeout(() => {
      this.appEl.classList.remove('page-enter');
    }, 400);
  }

  navigate(path) {
    window.location.hash = path;
  }
}

// ============================================
// Initialize Theme
// ============================================
function initTheme() {
  const prefs = getPreferences();
  let theme = prefs.theme;
  
  // First visit: detect system preference
  if (isFirstVisit()) {
    theme = prefersDarkMode() ? 'dark' : 'light';
  }
  
  document.documentElement.setAttribute('data-theme', theme);
}

// ============================================
// App Boot
// ============================================
async function boot() {
  // 1. Init theme before anything renders
  initTheme();
  
  // 1.5 Intercept shared data
  const urlParams = new URLSearchParams(window.location.search);
  const sharedData = urlParams.get('data');
  if (sharedData) {
    if (loadSharedData(sharedData)) {
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
      // Small delay to ensure styles loaded before alert
      setTimeout(() => alert('✨ Shared map loaded successfully!'), 500);
    } else {
      setTimeout(() => alert('Failed to load shared map. Link might be invalid or corrupted.'), 500);
    }
  }

  // 2. Setup router
  const router = new Router();
  
  router
    .on('/', async (container) => {
      const { renderLanding } = await import('./pages/landing.js');
      return renderLanding(container, router);
    })
    .on('/map', async (container) => {
      const { renderMap } = await import('./pages/map.js');
      return renderMap(container, router);
    });

  // 3. Resolve initial route
  await router.resolve();
  
  // 4. Mark first visit complete
  if (isFirstVisit()) {
    markFirstVisitComplete();
  }

  // 5. Register service worker (Vite PWA handles this, but log it)
  if ('serviceWorker' in navigator) {
    console.log('[Roamero] Service Worker support detected');
  }
}

// Start
boot().catch(console.error);
