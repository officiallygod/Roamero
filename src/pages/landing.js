/**
 * Roamero — Landing Page
 */
import '../styles/landing.css';
import { createThemeToggle } from '../components/theme-toggle.js';
import { initCookieConsent } from '../components/cookie-consent.js';
import { getStats } from '../services/storage.js';
import { animateNumber } from '../utils/helpers.js';

export function renderLanding(container, router) {
  const stats = getStats();
  
  container.innerHTML = `
    <div class="landing">
      <!-- Navigation -->
      <nav class="landing-nav" id="landing-nav">
        <div class="nav-logo">
          <div class="nav-logo-icon">🌍</div>
          <span>Roamero</span>
        </div>
        <div class="nav-actions" id="nav-actions">
          <!-- theme toggle inserted here -->
        </div>
      </nav>
      
      <!-- Hero -->
      <section class="hero">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              <span>✨</span>
              <span>Your Personal Travel Map</span>
            </div>
            <h1 class="hero-title">
              Every <span class="gradient-text">Place</span>.<br/>
              Every <span class="gradient-text">Journey</span>.
            </h1>
            <p class="hero-subtitle">
              Track your travels across an interactive 3D globe. Mark countries and cities you've visited, 
              and watch your world fill with color as you explore.
            </p>
            <div class="hero-actions">
              <button class="hero-cta" id="cta-explore">
                <span>Explore the Globe</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
              <button class="hero-cta-secondary" id="cta-learn">
                <span>Learn More</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19"/>
                  <polyline points="19 12 12 19 5 12"/>
                </svg>
              </button>
            </div>
          </div>
          
          <div class="hero-globe">
            <div class="hero-stat-card">
              <div class="stat-card-icon">🌎</div>
              <div class="stat-card-label">Countries</div>
              <div class="stat-card-value">195</div>
            </div>
            <div class="hero-stat-card">
              <div class="stat-card-icon">📍</div>
              <div class="stat-card-label">Places</div>
              <div class="stat-card-value">1,950+</div>
            </div>
            <div class="hero-stat-card">
              <div class="stat-card-icon">🗺️</div>
              <div class="stat-card-label">Visited</div>
              <div class="stat-card-value" id="visited-count">${stats.countriesVisited}</div>
            </div>
            <div class="hero-globe-container" id="hero-globe-mount"></div>
          </div>
        </div>
      </section>
      
      <!-- Features -->
      <section class="features" id="features">
        <div class="features-header">
          <h2 class="features-title">Why <span class="gradient-text">Roamero</span>?</h2>
          <p class="features-subtitle">
            A beautiful, personal way to track your travels and inspire your next adventure.
          </p>
        </div>
        
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3 class="feature-title">Interactive 3D Globe</h3>
            <p class="feature-desc">
              Explore a stunning Three.js powered globe. Rotate, zoom, and fly to any destination with buttery-smooth animations.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🎨</div>
            <h3 class="feature-title">Color Your World</h3>
            <p class="feature-desc">
              Watch countries light up in vibrant colors as you mark them visited. See your progress fill the map with life.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3 class="feature-title">Instant Search</h3>
            <p class="feature-desc">
              Find any country or city in milliseconds with fuzzy search. Type a few letters and fly straight there.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">📅</div>
            <h3 class="feature-title">Travel Timeline</h3>
            <p class="feature-desc">
              Record when you visited each place. Build a personal timeline of your adventures around the globe.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">📱</div>
            <h3 class="feature-title">Works Offline</h3>
            <p class="feature-desc">
              Install as a PWA on any device. Your travel data is stored locally and works even without internet.
            </p>
          </div>
          
          <div class="feature-card">
            <div class="feature-icon">🌙</div>
            <h3 class="feature-title">Dark & Light Mode</h3>
            <p class="feature-desc">
              Choose your preferred theme. The globe looks stunning in both dark space mode and clean light mode.
            </p>
          </div>
        </div>
      </section>
      
      <!-- Footer -->
      <footer class="landing-footer">
        <p>
          Made with ❤️ by <a href="https://github.com/officiallygod" target="_blank" rel="noopener">officiallygod</a> · 
          <a href="https://github.com/officiallygod/Roamero" target="_blank" rel="noopener">GitHub</a>
        </p>
      </footer>
    </div>
  `;
  
  // Insert theme toggle
  const navActions = container.querySelector('#nav-actions');
  navActions.appendChild(createThemeToggle());
  
  // CTA → navigate to map
  container.querySelector('#cta-explore').addEventListener('click', () => {
    router.navigate('/map');
  });
  
  // Learn More → scroll to features
  container.querySelector('#cta-learn').addEventListener('click', () => {
    container.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Nav scroll effect
  const nav = container.querySelector('#landing-nav');
  const handleScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
  
  // Init mini globe on the landing page
  initHeroGlobe(container.querySelector('#hero-globe-mount'));
  
  // Cookie consent
  initCookieConsent();
  
  // Animate visited count
  const visitedEl = container.querySelector('#visited-count');
  if (stats.countriesVisited > 0) {
    animateNumber(visitedEl, stats.countriesVisited, 1500);
  }
  
  return {
    destroy() {
      window.removeEventListener('scroll', handleScroll);
    }
  };
}

/**
 * Initialize a small preview globe on the landing hero
 */
async function initHeroGlobe(mountEl) {
  if (!mountEl) return;
  
  try {
    const maplibregl = (await import('maplibre-gl')).default;
    
    const isDark = document.documentElement.dataset.theme === 'dark' || true;
    
    const map = new maplibregl.Map({
      container: mountEl,
      style: {
        version: 8,
        sources: {
          countries: {
            type: 'geojson',
            data: import.meta.env.BASE_URL + 'data/110m.geojson'
          }
        },
        layers: [
          {
            id: 'background',
            type: 'background',
            paint: { 'background-color': 'rgba(0,0,0,0)' }
          },
          {
            id: 'country-fills',
            type: 'fill',
            source: 'countries',
            paint: {
              'fill-color': isDark ? '#1a1a1a' : '#ffffff',
              'fill-opacity': 1.0
            }
          },
          {
            id: 'country-borders',
            type: 'line',
            source: 'countries',
            paint: {
              'line-color': isDark ? '#333333' : '#e5e5e5',
              'line-width': 0.8
            }
          }
        ]
      },
      center: [0, 20],
      zoom: 1.5,
      minZoom: 1.5,
      interactive: false
    });
    
    map.on('style.load', () => {
      map.setProjection({ type: 'globe' });
      
      // Auto rotate
      let currentLng = 0;
      function rotate() {
        currentLng += 0.5;
        if (currentLng > 180) currentLng -= 360;
        map.setCenter([currentLng, 20]);
        requestAnimationFrame(rotate);
      }
      rotate();
    });
    
  } catch (e) {
    console.warn('[Roamero] Could not load hero globe:', e);
    // Fallback: show a static gradient sphere
    mountEl.innerHTML = `
      <div style="
        width: 100%;
        aspect-ratio: 1;
        border-radius: 50%;
        background: var(--gradient-globe);
        box-shadow: var(--shadow-glow-lg);
        animation: float 4s ease-in-out infinite;
      "></div>
    `;
  }
}
