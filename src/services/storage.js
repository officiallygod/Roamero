/**
 * Roamero Storage Service
 * Handles localStorage, cookies, and data persistence
 */

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
// localStorage Wrapper (with error handling)
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

/**
 * Get all visit data
 * @returns {{ countries: Object, cities: Object }}
 */
export function getVisits() {
  return getFromStorage(STORAGE_KEYS.VISITS, { countries: {}, cities: {} });
}

/**
 * Mark a country as visited
 * @param {string} countryId - ISO code
 * @param {string} [date] - Visit date (ISO string)
 */
export function markCountryVisited(countryId, date = null) {
  const visits = getVisits();
  visits.countries[countryId] = {
    visitedAt: date || new Date().toISOString().split('T')[0],
    markedAt: new Date().toISOString(),
  };
  saveToStorage(STORAGE_KEYS.VISITS, visits);
  return visits;
}

/**
 * Unmark a country as visited
 * @param {string} countryId - ISO code
 */
export function unmarkCountryVisited(countryId) {
  const visits = getVisits();
  delete visits.countries[countryId];
  // Also remove all cities in this country
  Object.keys(visits.cities).forEach(cityId => {
    if (cityId.startsWith(countryId.toLowerCase() + '-')) {
      delete visits.cities[cityId];
    }
  });
  saveToStorage(STORAGE_KEYS.VISITS, visits);
  return visits;
}

/**
 * Mark a city as visited
 * @param {string} cityId - City identifier
 * @param {string} countryId - Parent country ISO code
 * @param {string} [date] - Visit date
 */
export function markCityVisited(cityId, countryId, date = null) {
  const visits = getVisits();
  visits.cities[cityId] = {
    countryId,
    visitedAt: date || new Date().toISOString().split('T')[0],
    markedAt: new Date().toISOString(),
  };
  // Auto-mark country as visited too
  if (!visits.countries[countryId]) {
    visits.countries[countryId] = {
      visitedAt: date || new Date().toISOString().split('T')[0],
      markedAt: new Date().toISOString(),
    };
  }
  saveToStorage(STORAGE_KEYS.VISITS, visits);
  return visits;
}

/**
 * Unmark a city as visited
 * @param {string} cityId
 */
export function unmarkCityVisited(cityId) {
  const visits = getVisits();
  delete visits.cities[cityId];
  saveToStorage(STORAGE_KEYS.VISITS, visits);
  return visits;
}

/**
 * Check if a country is visited
 * @param {string} countryId
 * @returns {boolean}
 */
export function isCountryVisited(countryId) {
  const visits = getVisits();
  return !!visits.countries[countryId];
}

/**
 * Check if a city is visited
 * @param {string} cityId
 * @returns {boolean}
 */
export function isCityVisited(cityId) {
  const visits = getVisits();
  return !!visits.cities[cityId];
}

/**
 * Get visit statistics
 * @param {number} totalCountries
 * @param {number} totalCities
 * @returns {{ countriesVisited, citiesVisited, countryPercentage, cityPercentage }}
 */
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
    continentsVisited: 0, // calculated elsewhere
  };
}

/**
 * Get visited cities for a specific country
 * @param {string} countryId
 * @returns {Object}
 */
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
// Search History
// ============================================

export function getSearchHistory() {
  return getFromStorage(STORAGE_KEYS.SEARCH_HISTORY, []);
}

export function addSearchHistory(query) {
  if (!query || query.trim().length < 2) return;
  let history = getSearchHistory();
  // Remove duplicates
  history = history.filter(h => h.query !== query.trim());
  // Add to front
  history.unshift({
    query: query.trim(),
    timestamp: new Date().toISOString(),
  });
  // Limit size
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
  theme: 'dark',
  autoRotate: true,
  showCities: true,
  globeStyle: 'default',
  animations: true,
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
// Cookie Consent
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

// ============================================
// First Visit Detection
// ============================================

export function isFirstVisit() {
  return !getFromStorage(STORAGE_KEYS.FIRST_VISIT, false);
}

export function markFirstVisitComplete() {
  saveToStorage(STORAGE_KEYS.FIRST_VISIT, true);
}

// ============================================
// Data Export / Import
// ============================================

export function exportData() {
  return {
    version: 1,
    exportedAt: new Date().toISOString(),
    visits: getVisits(),
    searchHistory: getSearchHistory(),
    preferences: getPreferences(),
  };
}

export function importData(data) {
  if (!data || data.version !== 1) {
    throw new Error('Invalid data format');
  }
  if (data.visits) saveToStorage(STORAGE_KEYS.VISITS, data.visits);
  if (data.searchHistory) saveToStorage(STORAGE_KEYS.SEARCH_HISTORY, data.searchHistory);
  if (data.preferences) saveToStorage(STORAGE_KEYS.PREFERENCES, data.preferences);
  return true;
}

/**
 * Clear all Roamero data
 */
export function clearAllData() {
  Object.values(STORAGE_KEYS).forEach(key => {
    localStorage.removeItem(key);
    deleteCookie(key);
  });
}
