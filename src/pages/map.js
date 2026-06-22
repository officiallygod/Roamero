/**
 * Roamero — Map Page
 * Interactive globe and map tracking using MapLibre GL JS
 */
import '../styles/map.css';
import 'maplibre-gl/dist/maplibre-gl.css';
import { createThemeToggle } from '../components/theme-toggle.js';
import { initCookieConsent } from '../components/cookie-consent.js';
import {
  getVisits, markCountryVisited, unmarkCountryVisited,
  markCityVisited, unmarkCityVisited, isCountryVisited, isCityVisited,
  getSearchHistory, addSearchHistory, getPreferences, getVisitedCitiesForCountry
} from '../services/storage.js';
import { debounce, formatDate, getContinentColor } from '../utils/helpers.js';
import maplibregl from 'maplibre-gl';

let mapInstance = null;
let fuseInstance = null;
let countriesData = null;
let themeObserver = null;
let currentSidePanel = null;

export async function renderMap(container, router) {
  container.innerHTML = `
    <div class="map-page">
      <!-- Loading State -->
      <div class="globe-loading" id="globe-loading">
        <div class="globe-loading-spinner"></div>
        <div class="globe-loading-text">Initializing Engine...</div>
      </div>
      
      <!-- Map Mount -->
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
  
  // Load data and init map
  await initMap(container);
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
  
  // Listen for theme changes to update map colors
  themeObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === 'data-theme') {
        refreshMap();
      }
    });
  });
  themeObserver.observe(document.documentElement, { attributes: true });

  return {
    destroy() {
      if (themeObserver) themeObserver.disconnect();
      document.removeEventListener('keydown', handleKeydown);
      if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
      }
    }
  };
}

/**
 * Generate MapLibre Style Object dynamically based on visits and theme
 */
function getMapStyle(isDark, visits) {
  const visitedIsos = Object.keys(visits.countries);
  
  // Natural Earth uses -99 for France and Norway. Real ISO is in ISO_A2_EH
  const getIso = ['case', 
    ['==', ['get', 'ISO_A2'], '-99'], ['get', 'ISO_A2_EH'], 
    ['get', 'ISO_A2']
  ];
  
  const matchExpr = ['match', getIso];
  
  const unvisitedDark = '#121212';
  const unvisitedLight = '#ffffff';
  
  if (visitedIsos.length === 0) {
    matchExpr.push('NONE', '#8b5cf6', isDark ? unvisitedDark : unvisitedLight);
  } else {
    visitedIsos.forEach(iso => {
       const country = countriesData.COUNTRIES.find(c => c.id === iso);
       const color = getContinentColor(country ? country.continent : 'Europe');
       matchExpr.push(iso, color);
    });
    matchExpr.push(isDark ? unvisitedDark : unvisitedLight);
  }

  return {
    version: 8,
    glyphs: "https://demotiles.maplibre.org/font/{fontstack}/{range}.pbf",
    sources: {
      countries: {
        type: 'geojson',
        // 50m provides gorgeous smooth borders, while MapLibre keeps it lightning fast
        data: import.meta.env.BASE_URL + 'data/50m.geojson'
      }
    },
    layers: [
      {
        id: 'background',
        type: 'background',
        paint: {
          'background-color': isDark ? '#000000' : '#f0f2f5'
        }
      },
      {
        id: 'country-fills',
        type: 'fill',
        source: 'countries',
        paint: {
          'fill-color': matchExpr,
          'fill-opacity': 1.0
        }
      },
      {
        id: 'country-borders',
        type: 'line',
        source: 'countries',
        paint: {
          'line-color': isDark ? '#2a2a2a' : '#e0e2e6',
          'line-width': 0.8
        }
      },
      {
        id: 'country-labels',
        type: 'symbol',
        source: 'countries',
        minzoom: 4.0, // Only show when zoomed in
        filter: ['>', ['get', 'POP_EST'], 5000000], // Filter tiny countries
        layout: {
          'text-field': ['get', 'NAME'],
          'text-font': ['Open Sans Regular'],
          'text-size': 14,
          'text-transform': 'uppercase',
          'text-letter-spacing': 0.1,
          'symbol-spacing': 1000,
          'text-padding': 20,
          'text-allow-overlap': false,
          'text-ignore-placement': false,
          'text-variable-anchor': ['center'],
          'text-justify': 'center'
        },
        paint: {
          'text-color': isDark ? '#8b7faf' : '#6b7280',
          'text-halo-color': isDark ? '#121212' : '#ffffff',
          'text-halo-width': 2,
          'text-opacity': [
            'interpolate',
            ['linear'],
            ['zoom'],
            4.0, 0, // Fade in smoothly
            5.0, 1
          ]
        }
      }
    ]
  };
}

// ============================================
// Map Initialization
// ============================================
async function initMap(container) {
  const mountEl = container.querySelector('#globe-mount');
  const loadingEl = container.querySelector('#globe-loading');
  
  try {
    // Load countries data
    const m = await import('../data/countries.js');
    countriesData = m;
    
    const visits = getVisits();
    const prefs = getPreferences();
    const isDark = prefs.theme === 'dark';
    
    mapInstance = new maplibregl.Map({
      container: mountEl,
      style: getMapStyle(isDark, visits),
      center: [10, 20],
      zoom: 1.5,
      minZoom: 1.5,
      maxZoom: 10,
      interactive: true,
      pitchWithRotate: false,
      dragRotate: false
    });
    
    mapInstance.on('style.load', () => {
      // Enable the highly requested Google-Maps style Globe projection!
      mapInstance.setProjection({
        type: 'globe'
      });
      
      // Hide loading
      if (loadingEl) {
        loadingEl.style.opacity = '0';
        setTimeout(() => loadingEl.remove(), 300);
      }
      
      // Attempt IP Geolocation
      fetch('https://ipapi.co/json/')
        .then(r => r.json())
        .then(data => {
          if (data && data.country_code && countriesData) {
            const country = countriesData.COUNTRIES.find(c => c.id === data.country_code);
            if (country) {
              mapInstance.flyTo({ center: [country.lng, country.lat], zoom: 3, duration: 2500 });
            }
          }
        })
        .catch(() => console.log('[Roamero] IP Geolocation bypassed'));
    });
    
    // Interactions
    mapInstance.on('click', 'country-fills', (e) => {
      const feature = e.features[0];
      if (!feature) return;
      const iso = feature.properties.ISO_A2;
      const country = countriesData.COUNTRIES.find(c => c.id === iso);
      
      if (country) {
        if (isCountryVisited(country.id)) {
          unmarkCountryVisited(country.id);
          showToast(container, `❌ ${country.name} unmarked`);
        } else {
          markCountryVisited(country.id);
          showToast(container, `✅ ${country.name} marked as visited!`);
        }
        refreshMap();
        
        // Open side panel
        setTimeout(() => openSidePanel(container, country), 200);
      }
    });

    mapInstance.on('mouseenter', 'country-fills', () => {
      mapInstance.getCanvas().style.cursor = 'pointer';
    });
    
    mapInstance.on('mouseleave', 'country-fills', () => {
      mapInstance.getCanvas().style.cursor = '';
    });
    
  } catch (err) {
    console.error('[Roamero] Failed to initialize map:', err);
    if (loadingEl) {
      loadingEl.innerHTML = `
        <div style="text-align: center; color: var(--color-text-secondary);">
          <div style="font-size: 48px; margin-bottom: 16px;">🌍</div>
          <div>Could not load the map engine.</div>
          <div style="font-size: 13px; margin-top: 8px; color: var(--color-text-muted);">${err.message}</div>
          <button class="btn btn-primary" style="margin-top: 16px;" onclick="location.reload()">Retry</button>
        </div>
      `;
    }
  }
}

/**
 * Refresh Map Style based on visits
 */
function refreshMap() {
  if (!mapInstance || !mapInstance.isStyleLoaded()) return;
  const isDark = document.documentElement.dataset.theme === 'dark';
  const visits = getVisits();
  mapInstance.setStyle(getMapStyle(isDark, visits));
}

// ============================================
// Search
// ============================================
function initSearch(container) {
  const input = container.querySelector('#search-input');
  const results = container.querySelector('#search-results');
  const clearBtn = container.querySelector('#search-clear');
  let activeIndex = -1;
  
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
    
    results.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => selectSearchResult(container, el));
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
  
  addSearchHistory(name);
  
  container.querySelector('#search-results').classList.remove('visible');
  container.querySelector('#search-input').value = name;
  container.querySelector('#search-input').blur();
  
  if (mapInstance) {
    mapInstance.flyTo({ center: [lng, lat], zoom: type === 'city' ? 6 : 3, duration: 1500 });
  }
  
  if (countriesData) {
    const cId = type === 'country' ? id : countryId;
    const country = countriesData.COUNTRIES.find(c => c.id === cId);
    if (country) {
      setTimeout(() => openSidePanel(container, country), 800);
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
  
  panel.querySelector('#side-panel-close').addEventListener('click', () => {
    closeSidePanel(container);
  });
  
  panel.querySelector('#country-visit-toggle').addEventListener('click', () => {
    if (isCountryVisited(country.id)) {
      unmarkCountryVisited(country.id);
      showToast(container, `❌ ${country.name} removed`);
    } else {
      markCountryVisited(country.id);
      showToast(container, `✅ ${country.name} marked as visited!`);
    }
    refreshMap();
    openSidePanel(container, country);
  });
  
  const dateInput = panel.querySelector('#country-visit-date');
  if (dateInput) {
    dateInput.addEventListener('change', (e) => {
      markCountryVisited(country.id, e.target.value);
      refreshMap();
    });
  }
  
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
      refreshMap();
      openSidePanel(container, country);
    });
    
    el.addEventListener('dblclick', () => {
      const cityId = el.dataset.cityId;
      const city = country.cities.find(c => c.id === cityId);
      if (city && mapInstance) {
        mapInstance.flyTo({ center: [city.lng, city.lat], zoom: 6, duration: 1000 });
      }
    });
  });
}

function closeSidePanel(container) {
  container.querySelector('#side-panel')?.classList.remove('open');
  container.querySelector('#side-panel-overlay')?.classList.remove('visible');
  currentSidePanel = null;
}

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
