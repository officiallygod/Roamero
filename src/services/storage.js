/**
 * Roamero Storage Service
 * Handles localStorage, cookies, and data persistence
 */
import LZString from 'lz-string';

const STORAGE_KEYS = {
  VISITS: 'roamero_visits',
  SEARCH_HISTORY: 'roamero_search_history',
  PREFERENCES: 'roamero_preferences',
  COOKIE_CONSENT: 'roamero_cookie_consent',
  CACHE_GEOJSON: 'roamero_geojson_cache',
  FIRST_VISIT: 'roamero_first_visit',
};

const MAX_SEARCH_HISTORY = 20;

// ============================================
// Cookie Utilities
// ============================================

export function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; expires=${expires}; path=/; SameSite=Lax`;
}

export function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) {
    try {
      return JSON.parse(decodeURIComponent(match[2]));
    } catch {
      return null;
    }
  }
  return null;
}

export function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
}

// ============================================
// localStorage Wrapper
// ============================================

function getFromStorage(key, defaultValue = null) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (e) {
    console.warn(`[Roamero] Failed to read ${key} from localStorage:`, e);
    return defaultValue;
  }
}

function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (e) {
    console.warn(`[Roamero] Failed to save ${key} to localStorage:`, e);
    return false;
  }
}

// ============================================
// Visit Data Management
// ============================================

export function getVisits() {
  return getFromStorage(STORAGE_KEYS.VISITS, { countries: {}, cities: {} });
}

export function markCountryVisited(countryId, date = null) {
  const visits = getVisits();
  const current = visits.countries[countryId];

  visits.countries[countryId] = {
    visitedAt: current?.visitedAt || date || new Date().toISOString().split('T')[0],
    markedAt: new Date().toISOString()
  };
  saveToStorage(STORAGE_KEYS.VISITS, visits);
  return visits;
}

export function unmarkCountryVisited(countryId) {
  const visits = getVisits();
  delete visits.countries[countryId];
  // Remove all cities in this country
  Object.keys(visits.cities).forEach(cityId => {
    if (cityId.startsWith(countryId.toLowerCase() + '-')) {
      delete visits.cities[cityId];
    }
  });
  saveToStorage(STORAGE_KEYS.VISITS, visits);
  return visits;
}

export function markCityVisited(cityId, countryId, date = null) {
  const visits = getVisits();
  visits.cities[cityId] = {
    countryId,
    visitedAt: date || new Date().toISOString().split('T')[0],
    markedAt: new Date().toISOString()
  };
  // Auto-mark country as visited too
  if (!visits.countries[countryId]) {
    visits.countries[countryId] = {
      visitedAt: date || new Date().toISOString().split('T')[0],
      markedAt: new Date().toISOString()
    };
  }
  saveToStorage(STORAGE_KEYS.VISITS, visits);
  return visits;
}

export function unmarkCityVisited(cityId) {
  const visits = getVisits();
  delete visits.cities[cityId];
  saveToStorage(STORAGE_KEYS.VISITS, visits);
  return visits;
}

export function isCountryVisited(countryId) {
  const visits = getVisits();
  return !!visits.countries[countryId];
}

export function isCityVisited(cityId) {
  const visits = getVisits();
  return !!visits.cities[cityId];
}

export function getStats(totalCountries = 195, totalCities = 1950) {
  const visits = getVisits();
  const countriesVisited = Object.keys(visits.countries).length;
  const citiesVisited = Object.keys(visits.cities).length;
  return {
    countriesVisited,
    citiesVisited,
    totalCountries,
    totalCities,
    countryPercentage: Math.round((countriesVisited / totalCountries) * 100),
    cityPercentage: Math.round((citiesVisited / totalCities) * 100),
    continentsVisited: 0,
  };
}

export function getVisitedCitiesForCountry(countryId) {
  const visits = getVisits();
  const prefix = countryId.toLowerCase() + '-';
  const result = {};
  Object.keys(visits.cities).forEach(cityId => {
    if (cityId.startsWith(prefix) || visits.cities[cityId].countryId === countryId) {
      result[cityId] = visits.cities[cityId];
    }
  });
  return result;
}

// ============================================
// URL Data Synchronization
// ============================================

export function generateShareableUrl() {
  const visits = getVisits();
  const minimalData = {
    co: Object.keys(visits.countries),
    ci: Object.keys(visits.cities)
  };
  const jsonString = JSON.stringify(minimalData);
  const compressed = LZString.compressToEncodedURIComponent(jsonString);
  const baseUrl = window.location.origin + window.location.pathname;
  return `${baseUrl}?data=${compressed}`;
}

export function loadSharedData(encodedData) {
  try {
    const decompressed = LZString.decompressFromEncodedURIComponent(encodedData);
    if (!decompressed) return false;
    
    const sharedData = JSON.parse(decompressed);
    const visits = getVisits();
    
    // Merge shared countries into local visits
    if (sharedData.co && Array.isArray(sharedData.co)) {
      sharedData.co.forEach(iso => {
        if (!visits.countries[iso]) {
          visits.countries[iso] = {
            visitedAt: new Date().toISOString().split('T')[0],
            markedAt: new Date().toISOString()
          };
        }
      });
    }
    
    // Merge shared cities into local visits
    if (sharedData.ci && Array.isArray(sharedData.ci)) {
      sharedData.ci.forEach(cityId => {
        if (!visits.cities[cityId]) {
          // Attempt to extract countryId from cityId (e.g., "us-chicago" -> "us")
          const countryId = cityId.split('-')[0].toUpperCase();
          visits.cities[cityId] = {
            countryId: countryId,
            visitedAt: new Date().toISOString().split('T')[0],
            markedAt: new Date().toISOString()
          };
        }
      });
    }
    
    saveToStorage(STORAGE_KEYS.VISITS, visits);
    return true;
  } catch (err) {
    console.error('[Roamero] Failed to load shared data:', err);
    return false;
  }
}

// ============================================
// Search History
// ============================================

export function getSearchHistory() {
  return getFromStorage(STORAGE_KEYS.SEARCH_HISTORY, []);
}

export function addSearchHistory(query) {
  if (!query || query.trim().length < 2) return;
  let history = getSearchHistory();
  history = history.filter(h => h.query !== query.trim());
  history.unshift({ query: query.trim(), timestamp: new Date().toISOString() });
  if (history.length > MAX_SEARCH_HISTORY) {
    history = history.slice(0, MAX_SEARCH_HISTORY);
  }
  saveToStorage(STORAGE_KEYS.SEARCH_HISTORY, history);
  return history;
}

export function clearSearchHistory() {
  saveToStorage(STORAGE_KEYS.SEARCH_HISTORY, []);
}

// ============================================
// User Preferences
// ============================================

const DEFAULT_PREFERENCES = {
  theme: 'light',
  autoRotate: true,
  showCities: true,
  globeStyle: 'default',
  animations: true
};

export function getPreferences() {
  return { ...DEFAULT_PREFERENCES, ...getFromStorage(STORAGE_KEYS.PREFERENCES, {}) };
}

export function savePreference(key, value) {
  const prefs = getPreferences();
  prefs[key] = value;
  saveToStorage(STORAGE_KEYS.PREFERENCES, prefs);
  return prefs;
}

export function getTheme() {
  return getPreferences().theme;
}

export function setTheme(theme) {
  savePreference('theme', theme);
  document.documentElement.setAttribute('data-theme', theme);
}

// ============================================
// Cookie Consent & First Visit
// ============================================

export function getCookieConsent() {
  return getCookie(STORAGE_KEYS.COOKIE_CONSENT);
}

export function setCookieConsent(consent) {
  setCookie(STORAGE_KEYS.COOKIE_CONSENT, consent, 365);
  saveToStorage(STORAGE_KEYS.COOKIE_CONSENT, consent);
}

export function hasGivenConsent() {
  return !!getCookieConsent();
}

export function isFirstVisit() {
  return !getFromStorage(STORAGE_KEYS.FIRST_VISIT, false);
}

export function markFirstVisitComplete() {
  saveToStorage(STORAGE_KEYS.FIRST_VISIT, true);
}

export function clearAllData() {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
    deleteCookie(key);
  });
}
