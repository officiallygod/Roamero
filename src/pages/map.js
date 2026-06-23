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
import { debounce, formatDate } from '../utils/helpers.js';
import maplibregl from 'maplibre-gl';
import Chart from 'chart.js/auto';

let mapInstance = null;
let searchWorker = null;
let countriesData = null;
let themeObserver = null;
let currentSidePanel = null;

// Chart instances
let dynamicsChart = null;
let trendChart = null;
let markers = [];

export async function renderMap(container, router) {
  container.innerHTML = `
    <div class="dashboard-layout">
      
      <!-- Center Map -->
      <div class="globe-loading" id="globe-loading">
        <div class="globe-loading-spinner"></div>
      </div>
      <div class="globe-container" id="globe-mount"></div>

      <!-- Floating Search Bar -->
      <div class="search-floating" id="search-wrapper">
        <div class="search-input-container">
          <span class="search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <input type="text" id="search-input" placeholder="Search countries & cities..." autocomplete="off" />
        </div>
        <div class="search-results" id="search-results"></div>
      </div>
      
      <!-- Floating Dashboard UI Layer -->
      <div class="dashboard-ui-layer">
        
        <!-- Left Panel -->
        <div class="dash-panel left">
          <!-- General Stats -->
          <div class="dash-card">
            <div class="card-header">
              <div class="card-title">General statistics</div>
              <div class="card-subtitle">All Places</div>
            </div>
            <div class="stat-huge" id="stat-total-visits">0</div>
            
            <div class="ring-charts-row">
              <div class="ring-chart">
                <div class="ring-circle">
                  <svg viewBox="0 0 50 50">
                    <circle class="ring-bg" cx="25" cy="25" r="22.5" />
                    <circle class="ring-fg" id="ring-world" cx="25" cy="25" r="22.5" />
                  </svg>
                  <div class="ring-value" id="ring-world-val">0%</div>
                </div>
                <div class="ring-label">
                  <div class="ring-label-num" id="stat-world-count">0</div>
                  <div class="ring-label-text">World Explored</div>
                </div>
              </div>
              
              <div class="ring-chart">
                <div class="ring-circle">
                  <svg viewBox="0 0 50 50">
                    <circle class="ring-bg" cx="25" cy="25" r="22.5" />
                    <circle class="ring-fg alt" id="ring-partner" cx="25" cy="25" r="22.5" />
                  </svg>
                  <div class="ring-value" id="ring-partner-val">0%</div>
                </div>
                <div class="ring-label">
                  <div class="ring-label-num" id="stat-partner-count">0</div>
                  <div class="ring-label-text">Shared Trips</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Dynamics Chart -->
          <div class="dash-card">
            <div class="card-header">
              <div class="card-title">Dynamics</div>
              <div class="stat-trend positive">↑ 34%</div>
            </div>
            <div class="chart-container">
              <canvas id="chart-dynamics"></canvas>
            </div>
          </div>

          <!-- Most Engaged (Top Continents) -->
          <div class="dash-card">
            <div class="card-header">
              <div class="card-title">Most engaged</div>
              <div class="card-subtitle">Continents</div>
            </div>
            <div class="bar-list" id="top-continents-list">
              <!-- Rendered via JS -->
            </div>
          </div>
        </div>

        <!-- Right Panel -->
        <div class="dash-panel right" style="align-items: flex-end;">
          <!-- Forecast -->
          <div class="dash-card" style="width: 260px;">
            <div class="card-header">
              <div class="card-title">Forecast</div>
            </div>
            <div style="margin-bottom: var(--space-md);">
              <div class="card-subtitle">Yearly</div>
              <div class="stat-huge" style="font-size: var(--text-3xl);">12</div>
              <div class="stat-trend positive">↑ 12% Next Year</div>
            </div>
          </div>

          <!-- Trend Chart -->
          <div class="dash-card" style="width: 300px;">
            <div class="card-header">
              <div class="card-title">Trend</div>
              <div class="card-subtitle">Cities Visited</div>
            </div>
            <div class="chart-container">
              <canvas id="chart-trend"></canvas>
            </div>
          </div>

          <!-- Total Coverage -->
          <div class="dash-card" style="width: 300px; display: flex; align-items: center; gap: var(--space-lg);">
            <div class="ring-circle">
              <svg viewBox="0 0 50 50">
                <circle class="ring-bg" cx="25" cy="25" r="22.5" />
                <circle class="ring-fg" id="ring-coverage" cx="25" cy="25" r="22.5" style="stroke: var(--color-warning);" />
              </svg>
              <div class="ring-value" id="ring-coverage-val">0%</div>
            </div>
            <div>
              <div class="card-subtitle">Total coverage</div>
              <div class="stat-huge" style="font-size: var(--text-2xl);" id="stat-coverage">0</div>
            </div>
          </div>
          
          <!-- Theme Toggle -->
          <div class="dash-card" id="map-actions" style="padding: var(--space-sm); border-radius: var(--radius-full);"></div>
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
  
  // Load data and init
  await loadCountriesData();
  initWebWorker(container);
  await initMap(container);
  initCharts();
  renderDashboardStats();
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
      if (searchWorker) searchWorker.terminate();
      if (mapInstance) {
        mapInstance.remove();
        mapInstance = null;
      }
    }
  };
}

async function loadCountriesData() {
  const m = await import('../data/countries.js');
  countriesData = m;
}

// ============================================
// Web Worker for Search
// ============================================
function initWebWorker(container) {
  const input = container.querySelector('#search-input');
  const results = container.querySelector('#search-results');
  let activeIndex = -1;

  searchWorker = new Worker(new URL('../workers/search.worker.js', import.meta.url), { type: 'module' });

  // Initialize Worker
  if (countriesData && countriesData.ALL_PLACES) {
    searchWorker.postMessage({
      type: 'INIT',
      payload: {
        items: countriesData.ALL_PLACES,
        options: {
          keys: [{ name: 'name', weight: 0.7 }, { name: 'countryName', weight: 0.3 }],
          threshold: 0.35, distance: 100, includeScore: true, includeMatches: true, minMatchCharLength: 1
        }
      }
    });
  }

  // Handle messages from Worker
  searchWorker.onmessage = (e) => {
    const { type, payload } = e.data;
    if (type === 'SEARCH_RESULTS') {
      renderSearchResults(container, payload.results, payload.query);
    }
  };

  const doSearch = debounce((query) => {
    if (!query || query.length < 1) {
      results.classList.remove('visible');
      return;
    }
    searchWorker.postMessage({ type: 'SEARCH', payload: { query } });
  }, 150);

  input.addEventListener('input', () => {
    const val = input.value.trim();
    doSearch(val);
  });
}

function renderSearchResults(container, searchResults, query) {
  const results = container.querySelector('#search-results');
  if (searchResults.length === 0) {
    results.innerHTML = `<div style="padding: 1rem; text-align: center; color: var(--color-text-tertiary);">No places found for "${query}"</div>`;
    results.classList.add('visible');
    return;
  }
  
  const visits = getVisits();
  results.innerHTML = searchResults.slice(0, 10).map((r, i) => {
    const item = r.item;
    const isVisited = item.type === 'country' ? !!visits.countries[item.id] : !!visits.cities[item.id];
    return `
      <div class="search-result-item ${i === 0 ? 'active' : ''}" 
           data-type="${item.type}" data-id="${item.id}" data-country-id="${item.type === 'city' ? item.countryId : item.id}"
           data-lat="${item.lat}" data-lng="${item.lng}" data-name="${item.name}">
        <div>${item.type === 'country' ? (item.emoji || '🌍') : '📍'}</div>
        <div style="flex: 1;">
          <div style="font-weight: 500; font-size: 14px;">${item.name}</div>
          <div style="font-size: 11px; color: var(--color-text-tertiary);">${item.type === 'city' ? item.countryName : item.continent || ''}</div>
        </div>
      </div>
    `;
  }).join('');
  
  results.classList.add('visible');
  results.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', () => selectSearchResult(container, el));
  });
}

function selectSearchResult(container, el) {
  const type = el.dataset.type;
  const id = el.dataset.id;
  const lat = parseFloat(el.dataset.lat);
  const lng = parseFloat(el.dataset.lng);
  const countryId = el.dataset.countryId;
  const name = el.dataset.name;
  
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
// Map Initialization
// ============================================
function getMapStyle(isDark, visits) {
  const visitedIsos = Object.keys(visits.countries);
  const matchExpr = ['match', ['case', ['==', ['get', 'ISO_A2'], '-99'], ['get', 'ISO_A2_EH'], ['get', 'ISO_A2']]];
  
  // Dashboard aesthetic glowing colors
  const unvisitedColor = isDark ? '#1e1b4b' : '#ffffff';
  const colorMe = '#8b5cf6';
  const colorPartner = '#3b82f6';
  const colorBoth = '#f97316';
  
  if (visitedIsos.length === 0) {
    matchExpr.push('NONE', colorMe, unvisitedColor);
  } else {
    visitedIsos.forEach(iso => {
       const info = visits.countries[iso];
       const visitor = info?.visitor || 'me';
       let color = colorMe;
       if (visitor === 'partner') color = colorPartner;
       if (visitor === 'both') color = colorBoth;
       matchExpr.push(iso, color);
    });
    matchExpr.push(unvisitedColor);
  }

  return {
    version: 8,
    sources: {
      countries: {
        type: 'geojson',
        data: import.meta.env.BASE_URL + 'data/110m.geojson',
        generateId: true, tolerance: 0.5
      }
    },
    layers: [
      {
        id: 'background',
        type: 'background',
        paint: {
          'background-color': 'rgba(0,0,0,0)' // Transparent to show CSS radial gradient
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
          'line-color': isDark ? 'rgba(255,255,255,0.1)' : 'rgba(96, 165, 250, 0.3)',
          'line-width': 1.0
        }
      }
    ]
  };
}

async function initMap(container) {
  const mountEl = container.querySelector('#globe-mount');
  const loadingEl = container.querySelector('#globe-loading');
  const visits = getVisits();
  const prefs = getPreferences();
  const isDark = prefs.theme === 'dark';
  
  mapInstance = new maplibregl.Map({
    container: mountEl,
    style: getMapStyle(isDark, visits),
    center: [10, 20],
    zoom: 2.5,
    minZoom: 1.5,
    maxZoom: 10,
    interactive: true,
    pitchWithRotate: false,
    dragRotate: false
  });
  
  mapInstance.on('style.load', () => {
    mapInstance.setProjection({ type: 'globe' });
    if (loadingEl) {
      loadingEl.style.opacity = '0';
      setTimeout(() => loadingEl.remove(), 300);
    }
    renderMapMarkers();
  });
  
  mapInstance.on('click', 'country-fills', (e) => {
    const feature = e.features[0];
    if (!feature) return;
    const iso = feature.properties.ISO_A2;
    const country = countriesData.COUNTRIES.find(c => c.id === iso);
    if (country) {
      setTimeout(() => openSidePanel(container, country), 200);
    }
  });

  mapInstance.on('mouseenter', 'country-fills', () => mapInstance.getCanvas().style.cursor = 'pointer');
  mapInstance.on('mouseleave', 'country-fills', () => mapInstance.getCanvas().style.cursor = '');
}

function refreshMap() {
  if (!mapInstance || !mapInstance.isStyleLoaded()) return;
  const isDark = document.documentElement.dataset.theme === 'dark';
  const visits = getVisits();
  mapInstance.setStyle(getMapStyle(isDark, visits));
  renderDashboardStats();
  renderMapMarkers();
}

// ============================================
// Map Markers
// ============================================
function renderMapMarkers() {
  if (!mapInstance || !countriesData) return;
  
  // Clear old
  markers.forEach(m => m.remove());
  markers = [];
  
  const visits = getVisits();
  const visitedCityIds = Object.keys(visits.cities);
  
  visitedCityIds.forEach(cityId => {
    // Find city coords
    const cityData = countriesData.ALL_PLACES.find(p => p.type === 'city' && p.id === cityId);
    if (!cityData) return;
    
    // Parent country
    const cInfo = visits.countries[cityData.countryId];
    const visitor = cInfo?.visitor || 'me';
    let iconClass = 'purple';
    if (visitor === 'partner') iconClass = 'blue';
    if (visitor === 'both') iconClass = 'orange';

    const el = document.createElement('div');
    el.className = 'map-marker';
    // Fake numbers to match dashboard mockup style (e.g. "Chicago 98,320,300")
    const popScore = Math.floor(Math.random() * 90000000) + 10000000;
    el.innerHTML = `
      <div class="marker-icon ${iconClass}"></div>
      <div>
        <div style="font-size: 9px; color: var(--color-text-tertiary);">${cityData.name}</div>
        <div class="marker-value">${popScore.toLocaleString()}</div>
      </div>
    `;
    
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const country = countriesData.COUNTRIES.find(c => c.id === cityData.countryId);
      if (country) openSidePanel(document.body, country);
    });

    const marker = new maplibregl.Marker({ element: el })
      .setLngLat([cityData.lng, cityData.lat])
      .addTo(mapInstance);
      
    markers.push(marker);
  });
}

// ============================================
// Chart.js & Dashboard Stats
// ============================================
function initCharts() {
  // Common chart options
  Chart.defaults.font.family = "'Inter', sans-serif";
  Chart.defaults.color = "#94a3b8";

  // Dynamics Line Chart
  const ctxDyn = document.getElementById('chart-dynamics');
  if (ctxDyn) {
    const gradient = ctxDyn.getContext('2d').createLinearGradient(0, 0, 400, 0);
    gradient.addColorStop(0, '#6366f1'); // Indigo
    gradient.addColorStop(1, '#ec4899'); // Pink
    
    dynamicsChart = new Chart(ctxDyn, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Dynamics',
          data: [10, 25, 20, 40, 35, 55],
          borderColor: gradient,
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } }
      }
    });
  }

  // Trend Line Chart
  const ctxTrend = document.getElementById('chart-trend');
  if (ctxTrend) {
    trendChart = new Chart(ctxTrend, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
          data: [12, 19, 15, 25, 22],
          borderColor: '#3b82f6',
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0
        }, {
          data: [5, 10, 8, 15, 12],
          borderColor: '#f59e0b',
          borderWidth: 2,
          tension: 0.4,
          pointRadius: 0
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: { x: { display: false }, y: { display: false } }
      }
    });
  }
}

function renderDashboardStats() {
  const visits = getVisits();
  const visitedCountries = Object.values(visits.countries);
  const total = visitedCountries.length;
  
  // Total Visits
  document.getElementById('stat-total-visits').textContent = total.toLocaleString();
  
  // Calculate Rings
  const totalWorld = 250; // Approx countries
  const pctWorld = totalWorld > 0 ? Math.round((total / totalWorld) * 100) : 0;
  
  const partnerCount = visitedCountries.filter(c => c.visitor === 'partner' || c.visitor === 'both').length;
  const pctPartner = total > 0 ? Math.round((partnerCount / total) * 100) : 0;

  // Update Rings (141 is the stroke-dasharray)
  document.getElementById('ring-world').style.strokeDashoffset = 141 - (141 * pctWorld / 100);
  document.getElementById('ring-world-val').textContent = pctWorld + '%';
  document.getElementById('stat-world-count').textContent = total.toLocaleString();
  
  document.getElementById('ring-partner').style.strokeDashoffset = 141 - (141 * pctPartner / 100);
  document.getElementById('ring-partner-val').textContent = pctPartner + '%';
  document.getElementById('stat-partner-count').textContent = partnerCount.toLocaleString();
  
  document.getElementById('ring-coverage').style.strokeDashoffset = 141 - (141 * pctWorld / 100);
  document.getElementById('ring-coverage-val').textContent = pctWorld + '%';
  document.getElementById('stat-coverage').textContent = (total * 21543).toLocaleString(); // Fake large number for mockup

  // Most Engaged (Top Continents)
  const contCounts = {};
  visitedCountries.forEach(v => {
    const c = countriesData.COUNTRIES.find(country => country.id === v.id);
    if (c) {
      contCounts[c.continent] = (contCounts[c.continent] || 0) + 1;
    }
  });
  
  const sortedCont = Object.entries(contCounts).sort((a,b) => b[1] - a[1]).slice(0, 5);
  const colors = ['#8b5cf6', '#3b82f6', '#f97316', '#f43f5e', '#eab308'];
  const max = sortedCont[0] ? sortedCont[0][1] : 1;
  
  document.getElementById('top-continents-list').innerHTML = sortedCont.map((sc, i) => {
    const pct = Math.max((sc[1] / max) * 100, 15);
    const score = (sc[1] * 12431).toLocaleString();
    return `
      <div class="bar-item">
        <div class="bar-wrapper">
          <div class="bar-fill" style="width: ${pct}%; background: ${colors[i % colors.length]};">${sc[0]}</div>
        </div>
        <div class="bar-stats">
          <div class="bar-stats-main">${score}</div>
          <div class="bar-stats-sub">+${Math.floor(Math.random() * 500)}</div>
        </div>
      </div>
    `;
  }).join('');
}

// ============================================
// Side Panel
// ============================================
function initSidePanelEvents(container) {
  container.querySelector('#side-panel-overlay').addEventListener('click', () => closeSidePanel(container));
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
        <span>${country.emoji || '🏳️'}</span>
        <span>${country.name}</span>
      </div>
      <button class="side-panel-close" id="side-panel-close">×</button>
    </div>
    
    <div class="side-panel-body">
      <!-- Country Visit Toggle -->
      <div class="country-visit-toggles" style="display: flex; gap: 8px; margin-bottom: var(--space-xl);">
        <button class="btn-visitor ${visits.countries[country.id]?.visitor === 'me' ? 'active' : ''}" data-visitor="me" style="flex:1; padding: 8px; border-radius: 8px; border: 1px solid var(--color-border); background: var(--color-surface); cursor: pointer;">Me</button>
        <button class="btn-visitor ${visits.countries[country.id]?.visitor === 'partner' ? 'active' : ''}" data-visitor="partner" style="flex:1; padding: 8px; border-radius: 8px; border: 1px solid var(--color-border); background: var(--color-surface); cursor: pointer;">Partner</button>
        <button class="btn-visitor ${visits.countries[country.id]?.visitor === 'both' ? 'active' : ''}" data-visitor="both" style="flex:1; padding: 8px; border-radius: 8px; border: 1px solid var(--color-border); background: var(--color-surface); cursor: pointer;">Both</button>
        <button class="btn-visitor remove-visit ${!countryVisited ? 'hidden' : ''}" id="btn-remove-visit" style="padding: 8px; border-radius: 8px; border: 1px solid var(--color-danger); background: var(--color-danger-bg); cursor: pointer; color: var(--color-danger);">X</button>
      </div>
      
      <h3 style="font-size: 16px; margin-bottom: 16px;">Top Places</h3>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${country.cities.map(city => {
          const cityVisited = !!visitedCities[city.id] || isCityVisited(city.id);
          return `
            <div class="country-visit-toggle ${cityVisited ? 'visited' : ''}" data-city-id="${city.id}">
              <div class="visit-toggle-label">${city.name}</div>
              <div class="visit-toggle-check">${cityVisited ? '✓' : ''}</div>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;
  
  panel.classList.add('open');
  overlay.classList.add('visible');
  
  panel.querySelector('#side-panel-close').addEventListener('click', () => closeSidePanel(container));
  
  panel.querySelectorAll('.btn-visitor[data-visitor]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      markCountryVisited(country.id, null, e.target.dataset.visitor);
      refreshMap();
      openSidePanel(container, country);
    });
  });

  const removeBtn = panel.querySelector('#btn-remove-visit');
  if (removeBtn) {
    removeBtn.addEventListener('click', () => {
      unmarkCountryVisited(country.id);
      refreshMap();
      openSidePanel(container, country);
    });
  }
  
  panel.querySelectorAll('.country-visit-toggle').forEach(el => {
    el.addEventListener('click', () => {
      const cityId = el.dataset.cityId;
      if (isCityVisited(cityId)) unmarkCityVisited(cityId);
      else markCityVisited(cityId, country.id);
      refreshMap();
      openSidePanel(container, country);
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
  toast._timer = setTimeout(() => toast.classList.remove('visible'), 2500);
}
