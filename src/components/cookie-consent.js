/**
 * Roamero — Cookie Consent Component
 */
import { hasGivenConsent, setCookieConsent } from '../services/storage.js';

const CONSENT_STYLES = `
.cookie-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 500;
  padding: var(--space-lg) var(--space-xl);
  background: var(--color-surface);
  backdrop-filter: var(--glass-blur-heavy);
  -webkit-backdrop-filter: var(--glass-blur-heavy);
  border-top: 1px solid var(--color-border);
  transform: translateY(100%);
  transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 -10px 40px rgba(0, 0, 0, 0.2);
}

.cookie-banner.visible {
  transform: translateY(0);
}

.cookie-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-xl);
}

.cookie-text {
  flex: 1;
}

.cookie-title {
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: var(--weight-semibold);
  margin-bottom: var(--space-xs);
}

.cookie-desc {
  font-size: var(--text-sm);
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.cookie-actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  flex-shrink: 0;
}

.cookie-btn {
  padding: var(--space-sm) var(--space-lg);
  border-radius: var(--radius-full);
  font-weight: var(--weight-semibold);
  font-size: var(--text-sm);
  transition: all var(--transition-base);
  cursor: pointer;
  border: none;
}

.cookie-btn-accept {
  background: var(--gradient-accent);
  color: white;
  box-shadow: var(--shadow-glow);
}

.cookie-btn-accept:hover {
  transform: translateY(-1px);
  box-shadow: var(--shadow-glow-lg);
}

.cookie-btn-essential {
  background: var(--color-surface-hover);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
}

.cookie-btn-essential:hover {
  border-color: var(--color-border-hover);
}

@media (max-width: 640px) {
  .cookie-inner {
    flex-direction: column;
    text-align: center;
  }
  
  .cookie-actions {
    width: 100%;
    flex-direction: column;
  }
  
  .cookie-btn {
    width: 100%;
  }
}
`;

export function initCookieConsent() {
  if (hasGivenConsent()) return;

  // Inject styles
  const style = document.createElement('style');
  style.textContent = CONSENT_STYLES;
  document.head.appendChild(style);

  // Create banner
  const banner = document.createElement('div');
  banner.className = 'cookie-banner';
  banner.id = 'cookie-consent-banner';
  banner.innerHTML = `
    <div class="cookie-inner">
      <div class="cookie-text">
        <div class="cookie-title">🍪 We value your privacy</div>
        <div class="cookie-desc">
          Roamero uses cookies and local storage to save your travel data, search history, and preferences. 
          Your data stays on your device — we don't send it anywhere.
        </div>
      </div>
      <div class="cookie-actions">
        <button class="cookie-btn cookie-btn-accept" id="cookie-accept-all">Accept All</button>
        <button class="cookie-btn cookie-btn-essential" id="cookie-essential-only">Essential Only</button>
      </div>
    </div>
  `;
  
  document.body.appendChild(banner);
  
  // Animate in after a short delay
  setTimeout(() => banner.classList.add('visible'), 800);
  
  // Event handlers
  banner.querySelector('#cookie-accept-all').addEventListener('click', () => {
    setCookieConsent({ essential: true, preferences: true, analytics: true, timestamp: Date.now() });
    closeBanner(banner);
  });
  
  banner.querySelector('#cookie-essential-only').addEventListener('click', () => {
    setCookieConsent({ essential: true, preferences: false, analytics: false, timestamp: Date.now() });
    closeBanner(banner);
  });
}

function closeBanner(banner) {
  banner.classList.remove('visible');
  setTimeout(() => banner.remove(), 500);
}
