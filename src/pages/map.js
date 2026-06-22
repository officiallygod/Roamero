/**
 * Roamero — Map Page
 * Interactive 3D globe with country/city tracking
 */
import '../styles/map.css';
import { createThemeToggle } from '../components/theme-toggle.js';
import { initCookieConsent } from '../components/cookie-consent.js';
import {
  getVisits, markCountryVisited, unmarkCountryVisited,
  markCityVisited, unmarkCityVisited, isCountryVisited, isCityVisited,
  getStats, getSearchHistory, addSearchHistory, getPreferences, getVisitedCitiesForCountry
} from '../services/storage.js';
import { debounce, formatDate, getContinentColor } from '../utils/helpers.js';
import * as THREE from 'three';
let globeInstance = null;
let fuseInstance = null;
let countriesData = null;
let geoJsonData = null;
let currentSidePanel = null;

export async function renderMap(container, router) {
  container.innerHTML = `
    <div class="map-page">
      <!-- Loading State -->
      <div class="globe-loading" id="globe-loading">
        <div class="globe-loading-spinner"></div>
        <div class="globe-loading-text">Loading globe...</div>
      </div>
      
      <!-- Globe Mount -->
      <div class="globe-container" id="globe-mount"></div>
      
      <!-- Top Bar -->
      <div class="map-topbar">
        <div class="search-wrapper" id="search-wrapper">
          <div class="search-input-container">
            <span class="search-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </span>
            <input type="text" class="search-input" id="search-input" placeholder="Search countries & cities..." autocomplete="off" />
            <button class="search-clear" id="search-clear">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <span class="search-kbd">/</span>
          </div>
          <div class="search-results" id="search-results"></div>
        </div>
        
        <div class="map-actions" id="map-actions">
          <!-- theme toggle inserted here -->
        </div>
      </div>
      
      <!-- Side Panel Overlay -->
      <div class="side-panel-overlay" id="side-panel-overlay"></div>
      
      <!-- Side Panel -->
      <div class="side-panel" id="side-panel"></div>
      
      <!-- Toast -->
      <div class="toast" id="toast"></div>
    </div>
  `;
  
  // Insert theme toggle
  const mapActions = container.querySelector('#map-actions');
  mapActions.appendChild(createThemeToggle());
  
  // Init cookie consent
  initCookieConsent();
  
  // Load data and init globe
  await initGlobe(container);
  initSearch(container);
  initSidePanelEvents(container);
  
  // Keyboard shortcut: "/" to focus search
  const handleKeydown = (e) => {
    if (e.key === '/' && document.activeElement !== container.querySelector('#search-input')) {
      e.preventDefault();
      container.querySelector('#search-input').focus();
    }
    if (e.key === 'Escape') {
      closeSidePanel(container);
      container.querySelector('#search-results').classList.remove('visible');
      container.querySelector('#search-input').blur();
    }
  };
  document.addEventListener('keydown', handleKeydown);
  
  return {
    destroy() {
      document.removeEventListener('keydown', handleKeydown);
      if (globeInstance) {
        // globe.gl doesn't have a clean destroy, so we just clear the container
        const mount = container.querySelector('#globe-mount');
        if (mount) mount.innerHTML = '';
        globeInstance = null;
      }
    }
  };
}

let gradientMaterial;
let unvisitedMaterialDark;
let unvisitedMaterialLight;

function getGradientMaterial() {
  if (gradientMaterial) return gradientMaterial;
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const context = canvas.getContext('2d');
  
  const gradient = context.createLinearGradient(0, 0, 256, 256);
  gradient.addColorStop(0, '#8b5cf6'); // Purple
  gradient.addColorStop(0.5, '#ec4899'); // Pink
  gradient.addColorStop(1, '#f59e0b'); // Orange
  
  context.fillStyle = gradient;
  context.fillRect(0, 0, 256, 256);
  
  const texture = new THREE.CanvasTexture(canvas);
  gradientMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true, opacity: 0.95 });
  return gradientMaterial;
}

function getUnvisitedMaterial(isDark) {
  if (isDark) {
    if (!unvisitedMaterialDark) unvisitedMaterialDark = new THREE.MeshBasicMaterial({ color: '#1e1842', transparent: true, opacity: 0.6 });
    return unvisitedMaterialDark;
  } else {
    if (!unvisitedMaterialLight) unvisitedMaterialLight = new THREE.MeshBasicMaterial({ color: '#c8bee6', transparent: true, opacity: 0.5 });
    return unvisitedMaterialLight;
  }
}

// ============================================
// Globe Initialization
// ============================================
async function initGlobe(container) {
  const mountEl = container.querySelector('#globe-mount');
  const loadingEl = container.querySelector('#globe-loading');
  
  try {
    // Load dependencies in parallel
    const [Globe, countries, geoJson] = await Promise.all([
      import('globe.gl').then(m => m.default),
      import('../data/countries.js').then(m => m),
      fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_50m_admin_0_countries.geojson')
        .then(r => r.json())
        .catch(() => null)
    ]);
    
    countriesData = countries;
    geoJsonData = geoJson;
    
    const visits = getVisits();
    const prefs = getPreferences();
    const isDark = prefs.theme === 'dark';
    
    // Create globe
    const globe = Globe()
      .backgroundColor('rgba(0,0,0,0)')
      .showAtmosphere(true)
      .atmosphereColor(isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(124, 58, 237, 0.1)')
      .atmosphereAltitude(0.15)
      .width(window.innerWidth)
      .height(window.innerHeight)
      (mountEl);
      
    globe.globeMaterial().color.set(isDark ? '#1a1625' : '#e6e1f0');
    
    globeInstance = globe;
    
    // Add GeoJSON polygon layer for countries
    if (geoJson) {
      globe
        .polygonsData(geoJson.features)
        .polygonAltitude(d => {
          const iso = d.properties.ISO_A2;
          return visits.countries[iso] ? 0.02 : 0.005;
        })
        .polygonCapMaterial(d => {
          const iso = d.properties.ISO_A2;
          if (visits.countries[iso]) {
            return getGradientMaterial();
          }
          return getUnvisitedMaterial(isDark);
        })
        .polygonSideColor(() => isDark ? 'rgba(139, 92, 246, 0.08)' : 'rgba(124, 58, 237, 0.06)')
        .polygonStrokeColor(() => isDark ? 'rgba(139, 92, 246, 0.25)' : 'rgba(124, 58, 237, 0.2)')
        .polygonLabel(d => {
          const iso = d.properties.ISO_A2;
          const name = d.properties.NAME || d.properties.ADMIN;
          const visited = visits.countries[iso];
          return `
            <div style="
              background: rgba(15, 10, 30, 0.9);
              backdrop-filter: blur(10px);
              padding: 8px 14px;
              border-radius: 10px;
              border: 1px solid rgba(139, 92, 246, 0.3);
              font-family: 'Inter', sans-serif;
              color: #f0ecf9;
              font-size: 13px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.3);
            ">
              <div style="font-weight: 600; margin-bottom: 2px;">${name}</div>
              ${visited
                ? `<div style="color: #34d399; font-size: 11px;">✓ Visited · ${formatDate(visited.visitedAt)}</div>`
                : `<div style="color: #7b6f9e; font-size: 11px;">Not yet visited</div>`
              }
            </div>
          `;
        })
        .onPolygonClick(d => {
          const iso = d.properties.ISO_A2;
          const country = countries.COUNTRIES.find(c => c.id === iso);
          if (country) {
            if (isCountryVisited(country.id)) {
              unmarkCountryVisited(country.id);
              showToast(container, `❌ ${country.name} unmarked`);
            } else {
              markCountryVisited(country.id);
              showToast(container, `✅ ${country.name} marked as visited!`);
            }
            refreshGlobe(container);
          }
        })
        .onPolygonHover(d => {
          if (d) {
            mountEl.style.cursor = 'pointer';
          } else {
            mountEl.style.cursor = 'grab';
          }
        });
        
      // Add HD Country Names on the globe
      globe
        .labelsData(geoJson.features)
        .labelLat(d => d.properties.LABEL_Y)
        .labelLng(d => d.properties.LABEL_X)
        .labelText(d => d.properties.NAME)
        .labelSize(0.8)
        .labelDotRadius(0.1)
        .labelColor(() => isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)')
        .labelResolution(2);
    }
    
    // Add city points for visited cities
    addCityPoints(globe, countries, visits);
    
    // Globe controls
    globe.controls().autoRotate = prefs.autoRotate !== false;
    globe.controls().autoRotateSpeed = 0.5;
    globe.controls().enableDamping = true;
    globe.controls().dampingFactor = 0.1;
    globe.controls().rotateSpeed = 0.8;
    globe.controls().zoomSpeed = 1;
    globe.controls().minDistance = 120;
    globe.controls().maxDistance = 500;
    
    // Set initial view
    globe.pointOfView({ lat: 20, lng: 10, altitude: 2.2 });
    
    // Stop auto-rotate on user interaction
    mountEl.addEventListener('mousedown', () => {
      globe.controls().autoRotate = false;
    });
    mountEl.addEventListener('touchstart', () => {
      globe.controls().autoRotate = false;
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
      globe.width(window.innerWidth);
      globe.height(window.innerHeight);
    });
    
    // Hide loading
    if (loadingEl) {
      loadingEl.style.opacity = '0';
      setTimeout(() => loadingEl.remove(), 300);
    }
    
  } catch (err) {
    console.error('[Roamero] Failed to initialize globe:', err);
    if (loadingEl) {
      loadingEl.innerHTML = `
        <div style="text-align: center; color: var(--color-text-secondary);">
          <div style="font-size: 48px; margin-bottom: 16px;">🌍</div>
          <div>Could not load the globe.</div>
          <div style="font-size: 13px; margin-top: 8px; color: var(--color-text-muted);">${err.message}</div>
          <button class="btn btn-primary" style="margin-top: 16px;" onclick="location.reload()">Retry</button>
        </div>
      `;
    }
  }
}

/**
 * Add city point markers to the globe
 */
function addCityPoints(globe, countries, visits) {
  // Show visited cities as points on the globe
  const visitedCityIds = Object.keys(visits.cities);
  if (visitedCityIds.length === 0) return;
  
  const cityPoints = [];
  countries.COUNTRIES.forEach(country => {
    country.cities.forEach(city => {
      if (visits.cities[city.id]) {
        cityPoints.push({
          lat: city.lat,
          lng: city.lng,
          name: city.name,
          countryName: country.name,
          size: 0.06,
          color: getContinentColor(country.continent),
        });
      }
    });
  });
  
  if (cityPoints.length > 0) {
    globe
      .pointsData(cityPoints)
      .pointAltitude('size')
      .pointColor('color')
      .pointRadius(0.3)
      .pointLabel(d => `
        <div style="
          background: rgba(15, 10, 30, 0.9);
          backdrop-filter: blur(10px);
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid rgba(139, 92, 246, 0.3);
          font-family: 'Inter', sans-serif;
          color: #f0ecf9;
          font-size: 12px;
        ">
          <div style="font-weight: 600;">📍 ${d.name}</div>
          <div style="color: #a89cc8; font-size: 11px;">${d.countryName}</div>
        </div>
      `);
  }
}

/**
 * Refresh the globe colors and data after a visit change
 */
function refreshGlobe(container) {
  if (!globeInstance || !geoJsonData || !countriesData) return;
  
  const visits = getVisits();
  const prefs = getPreferences();
  const isDark = prefs.theme === 'dark';
  
  // Re-trigger polygon rendering
  globeInstance.polygonsData(geoJsonData.features);
  
  globeInstance
    .polygonAltitude(d => {
      const iso = d.properties.ISO_A2;
      return visits.countries[iso] ? 0.02 : 0.005;
    })
    .polygonCapMaterial(d => {
      const iso = d.properties.ISO_A2;
      if (visits.countries[iso]) {
        return getGradientMaterial();
      }
      return getUnvisitedMaterial(isDark);
    });
  
  // Refresh city points
  addCityPoints(globeInstance, countriesData, visits);
}

// ============================================
// Search
// ============================================
function initSearch(container) {
  const input = container.querySelector('#search-input');
  const results = container.querySelector('#search-results');
  const clearBtn = container.querySelector('#search-clear');
  let activeIndex = -1;
  
  // Init Fuse.js
  import('fuse.js').then(Fuse => {
    const FuseClass = Fuse.default || Fuse;
    if (countriesData && countriesData.ALL_PLACES) {
      fuseInstance = new FuseClass(countriesData.ALL_PLACES, {
        keys: [
          { name: 'name', weight: 0.7 },
          { name: 'countryName', weight: 0.3 },
        ],
        threshold: 0.35,
        distance: 100,
        includeScore: true,
        includeMatches: true,
        minMatchCharLength: 1,
      });
    }
  });
  
  const doSearch = debounce((query) => {
    if (!query || query.length < 1 || !fuseInstance) {
      results.classList.remove('visible');
      return;
    }
    
    const searchResults = fuseInstance.search(query).slice(0, 12);
    
    if (searchResults.length === 0) {
      results.innerHTML = `<div class="search-no-results">No places found for "${query}"</div>`;
      results.classList.add('visible');
      return;
    }
    
    const visits = getVisits();
    
    results.innerHTML = `
      <div class="search-results-header">Results</div>
      ${searchResults.map((r, i) => {
        const item = r.item;
        const isVisited = item.type === 'country' 
          ? !!visits.countries[item.id] 
          : !!visits.cities[item.id];
        
        return `
          <div class="search-result-item ${i === 0 ? 'active' : ''}" 
               data-type="${item.type}" 
               data-id="${item.id}"
               data-country-id="${item.type === 'city' ? item.countryId : item.id}"
               data-lat="${item.lat}" 
               data-lng="${item.lng}">
            <div class="search-result-icon">
              ${item.type === 'country' ? (item.emoji || '🌍') : '📍'}
            </div>
            <div class="search-result-info">
              <div class="search-result-name">${item.name}</div>
              <div class="search-result-meta">
                ${item.type === 'city' ? item.countryName : item.continent || ''}
              </div>
            </div>
            <span class="search-result-badge ${item.type} ${isVisited ? 'visited' : ''}">
              ${isVisited ? '✓ Visited' : item.type}
            </span>
          </div>
        `;
      }).join('')}
    `;
    
    results.classList.add('visible');
    activeIndex = 0;
    
    // Click handlers for results
    results.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        selectSearchResult(container, el);
      });
    });
  }, 150);
  
  input.addEventListener('input', () => {
    const val = input.value.trim();
    clearBtn.classList.toggle('visible', val.length > 0);
    container.querySelector('.search-kbd')?.classList.toggle('visible', val.length === 0);
    doSearch(val);
  });
  
  clearBtn.addEventListener('click', () => {
    input.value = '';
    clearBtn.classList.remove('visible');
    results.classList.remove('visible');
    input.focus();
  });
  
  // Keyboard navigation
  input.addEventListener('keydown', (e) => {
    const items = results.querySelectorAll('.search-result-item');
    if (!items.length) return;
    
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIndex = Math.min(activeIndex + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      items.forEach((el, i) => el.classList.toggle('active', i === activeIndex));
    } else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault();
      selectSearchResult(container, items[activeIndex]);
    }
  });
  
  // Close results when clicking outside
  document.addEventListener('click', (e) => {
    if (!container.querySelector('#search-wrapper')?.contains(e.target)) {
      results.classList.remove('visible');
    }
  });
}

function selectSearchResult(container, el) {
  const type = el.dataset.type;
  const id = el.dataset.id;
  const lat = parseFloat(el.dataset.lat);
  const lng = parseFloat(el.dataset.lng);
  const countryId = el.dataset.countryId;
  const name = el.querySelector('.search-result-name').textContent;
  
  // Save to search history
  addSearchHistory(name);
  
  // Close search
  container.querySelector('#search-results').classList.remove('visible');
  container.querySelector('#search-input').value = name;
  container.querySelector('#search-input').blur();
  
  // Fly to location
  if (globeInstance) {
    globeInstance.pointOfView({ lat, lng, altitude: type === 'city' ? 0.8 : 1.5 }, 1000);
  }
  
  // Open side panel for country
  if (countriesData) {
    const cId = type === 'country' ? id : countryId;
    const country = countriesData.COUNTRIES.find(c => c.id === cId);
    if (country) {
      setTimeout(() => openSidePanel(container, country), 500);
    }
  }
}

// ============================================
// Side Panel
// ============================================
function initSidePanelEvents(container) {
  container.querySelector('#side-panel-overlay').addEventListener('click', () => {
    closeSidePanel(container);
  });
}

function openSidePanel(container, country) {
  const panel = container.querySelector('#side-panel');
  const overlay = container.querySelector('#side-panel-overlay');
  const visits = getVisits();
  const countryVisited = !!visits.countries[country.id];
  const visitedCities = getVisitedCitiesForCountry(country.id);
  
  currentSidePanel = country;
  
  panel.innerHTML = `
    <div class="side-panel-header">
      <div class="side-panel-title">
        <span class="side-panel-flag">${country.emoji || '🏳️'}</span>
        <span class="side-panel-name">${country.name}</span>
      </div>
      <button class="side-panel-close" id="side-panel-close">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    
    <div class="side-panel-body">
      <p class="side-panel-desc">${country.description || ''}</p>
      
      <div class="side-panel-meta">
        <div class="side-panel-meta-item">🌍 ${country.continent}</div>
        <div class="side-panel-meta-item">📍 ${country.cities.length} places</div>
      </div>
      
      <!-- Country Visit Toggle -->
      <div class="country-visit-toggle ${countryVisited ? 'visited' : ''}" id="country-visit-toggle">
        <div class="visit-toggle-label">
          <div class="visit-toggle-check">
            ${countryVisited ? `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
          </div>
          <span>${countryVisited ? 'Visited!' : 'Mark as visited'}</span>
        </div>
      </div>
      
      ${countryVisited ? `
        <div class="visit-date-row">
          <span style="font-size: var(--text-sm); color: var(--color-text-tertiary);">📅 When?</span>
          <input type="date" class="visit-date-input" id="country-visit-date" 
                 value="${visits.countries[country.id]?.visitedAt || ''}" />
        </div>
      ` : ''}
      
      <!-- Cities -->
      <h3 class="side-panel-section-title" style="margin-top: var(--space-xl);">Top Places</h3>
      <div class="city-list" id="city-list">
        ${country.cities.map(city => {
          const cityVisited = !!visitedCities[city.id] || isCityVisited(city.id);
          const visitDate = visits.cities[city.id]?.visitedAt;
          return `
            <div class="city-item ${cityVisited ? 'visited' : ''}" data-city-id="${city.id}">
              <div class="city-marker"></div>
              <div class="city-info">
                <div class="city-name">${city.name}</div>
                <div class="city-desc">${city.description || ''}</div>
                ${cityVisited && visitDate ? `<div class="city-visit-date">Visited ${formatDate(visitDate)}</div>` : ''}
              </div>
              <div class="city-check">
                ${cityVisited ? `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  
  panel.classList.add('open');
  overlay.classList.add('visible');
  
  // Close button
  panel.querySelector('#side-panel-close').addEventListener('click', () => {
    closeSidePanel(container);
  });
  
  // Country visit toggle
  panel.querySelector('#country-visit-toggle').addEventListener('click', () => {
    if (isCountryVisited(country.id)) {
      unmarkCountryVisited(country.id);
      showToast(container, `❌ ${country.name} removed`);
    } else {
      markCountryVisited(country.id);
      showToast(container, `✅ ${country.name} marked as visited!`);
    }
    refreshGlobe(container);
    openSidePanel(container, country); // Re-render
  });
  
  // Country date change
  const dateInput = panel.querySelector('#country-visit-date');
  if (dateInput) {
    dateInput.addEventListener('change', (e) => {
      markCountryVisited(country.id, e.target.value);
      refreshGlobe(container);
    });
  }
  
  // City click handlers
  panel.querySelectorAll('.city-item').forEach(el => {
    el.addEventListener('click', () => {
      const cityId = el.dataset.cityId;
      if (isCityVisited(cityId)) {
        unmarkCityVisited(cityId);
        showToast(container, `📍 City unmarked`);
      } else {
        markCityVisited(cityId, country.id);
        showToast(container, `📍 City marked as visited!`);
      }
      refreshGlobe(container);
      openSidePanel(container, country); // Re-render
    });
    
    // Fly to city on double-click
    el.addEventListener('dblclick', () => {
      const cityId = el.dataset.cityId;
      const city = country.cities.find(c => c.id === cityId);
      if (city && globeInstance) {
        globeInstance.pointOfView({ lat: city.lat, lng: city.lng, altitude: 0.5 }, 800);
      }
    });
  });
}

function closeSidePanel(container) {
  container.querySelector('#side-panel')?.classList.remove('open');
  container.querySelector('#side-panel-overlay')?.classList.remove('visible');
  currentSidePanel = null;
}

// Stats removed

// ============================================
// Toast
// ============================================
function showToast(container, message) {
  const toast = container.querySelector('#toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('visible');
  }, 2500);
}
