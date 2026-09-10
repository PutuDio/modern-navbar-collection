# Velt Developer Navbar — Component Code

File ini berisi kode komponen bersih (clean isolated code) yang **HANYA** berkaitan dengan **Velt Developer Platform Dark Navbar & 4-Column Mega-Menu**. Anda dapat menyalin kode ini langsung ke landing page SDK / dev-tools / SaaS Anda.

---

## 1. HTML Markup

```html
<!-- ================================================================
     VELT DEVELOPER NAVBAR & MEGA MENU
     ================================================================ -->
<div class="velt-nav-root" id="velt-nav-root">

  <nav class="velt-navbar" aria-label="Main navigation">
    <div class="navbar-inner">

      <!-- Brand -->
      <a href="#" class="navbar-brand" aria-label="Velt — Home">
        <div class="brand-mark" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 4L8 12L14 4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="8" cy="8" r="2" fill="rgba(255,255,255,0.5)"/>
          </svg>
        </div>
        <span class="brand-name">Velt</span>
      </a>

      <!-- Nav Links -->
      <ul class="navbar-nav" role="list">
        <!-- Product with 4-Column Mega-Menu -->
        <li class="nav-item-wrap" id="mega-wrap">
          <button class="nav-link" id="mega-trigger" aria-haspopup="true" aria-expanded="false" aria-controls="mega-menu">
            Product
            <span class="nav-link-chevron" aria-hidden="true">▾</span>
          </button>
        </li>
        <li><a href="#use-cases" class="nav-link">Use Cases</a></li>
        <li><a href="#enterprise" class="nav-link">Enterprise</a></li>
        <li><a href="#resources" class="nav-link">Resources</a></li>
        <li><a href="#pricing" class="nav-link">Pricing</a></li>
      </ul>

      <!-- Right actions -->
      <div class="navbar-right">
        <a href="#signin" class="nav-btn-ghost">Sign In</a>
        <a href="#docs" class="nav-btn-ghost nav-btn-docs">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <rect x="2" y="2" width="10" height="10" rx="1.5" stroke="currentColor" stroke-width="1.3"/>
            <path d="M4.5 5h5M4.5 7h5M4.5 9h3" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
          </svg>
          Read Docs
        </a>
        <a href="#book-demo" class="nav-btn-primary" id="btn-book-demo">Book Demo</a>
      </div>

      <!-- Mobile Burger -->
      <button class="navbar-burger" id="nav-burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-drawer">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </div>
  </nav>

  <!-- 4-COLUMN MEGA MENU -->
  <div class="mega-menu-wrapper" role="region">
    <div class="mega-menu" id="mega-menu" role="menu" aria-label="Product features">
      <div class="mega-menu-grid">

        <!-- Col 1: SYNC -->
        <div class="mega-col">
          <div class="mega-col-label">Sync</div>
          <a class="mega-item" href="#comments" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">💬</div>
            <span class="mega-item-text">Comments</span>
          </a>
          <a class="mega-item" href="#notifications" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">🔔</div>
            <span class="mega-item-text">Notifications</span>
          </a>
          <a class="mega-item" href="#recording" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">📹</div>
            <span class="mega-item-text">Recording</span>
          </a>
          <a class="mega-item" href="#analytics" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">📊</div>
            <span class="mega-item-text">View Analytics</span>
          </a>
          <a class="mega-view-all" href="#sync-all">VIEW ALL ↗</a>
        </div>

        <!-- Col 2: REAL TIME -->
        <div class="mega-col">
          <div class="mega-col-label">Real Time</div>
          <a class="mega-item" href="#multiplayer" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">🖊️</div>
            <span class="mega-item-text">Multiplayer Editing</span>
          </a>
          <a class="mega-item" href="#live-state" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">🔄</div>
            <span class="mega-item-text">Live State Sync</span>
          </a>
          <a class="mega-item" href="#presence" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">🟢</div>
            <span class="mega-item-text">Presence</span>
          </a>
          <a class="mega-item" href="#cursors" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">🖱️</div>
            <span class="mega-item-text">Live Cursors</span>
          </a>
          <a class="mega-view-all" href="#realtime-all">VIEW ALL ↗</a>
        </div>

        <!-- Col 3: WORKFLOW -->
        <div class="mega-col">
          <div class="mega-col-label">Workflow</div>
          <a class="mega-item" href="#version-history" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">⏳</div>
            <span class="mega-item-text">Version History</span>
          </a>
          <a class="mega-item" href="#approval" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">✅</div>
            <span class="mega-item-text">Approval Flow</span>
          </a>
          <a class="mega-item" href="#branching" role="menuitem">
            <div class="mega-item-icon" aria-hidden="true">🌿</div>
            <span class="mega-item-text">Branching</span>
          </a>
          <a class="mega-view-all" href="#workflow-all">VIEW ALL ↗</a>
        </div>

        <!-- Col 4: FEATURED SDK CARD -->
        <div class="mega-col mega-col--highlight">
          <div class="mega-highlight-card">
            <div class="mega-highlight-tag">SDK 2.0 AVAILABLE</div>
            <div class="mega-highlight-title">Drop-in Multiplayer in 5 min</div>
            <div class="mega-highlight-desc">Add real-time cursors, comments, and presence to any React, Vue, or Webflow app.</div>
            <a href="#quickstart" class="mega-highlight-cta">Explore Quickstart →</a>
          </div>
        </div>

      </div>
    </div>
  </div>

  <!-- Mobile Drawer -->
  <div class="mobile-drawer" id="mobile-drawer">
    <div class="mobile-drawer-overlay" id="mobile-drawer-overlay"></div>
    <div class="mobile-drawer-body">
      <ul class="mobile-nav-list">
        <li><a href="#products">Product Features</a></li>
        <li><a href="#use-cases">Use Cases</a></li>
        <li><a href="#enterprise">Enterprise</a></li>
        <li><a href="#resources">Resources</a></li>
        <li><a href="#pricing">Pricing</a></li>
      </ul>
      <div class="mobile-actions">
        <a href="#signin" class="nav-btn-ghost" style="text-align:center;">Sign In</a>
        <a href="#book-demo" class="nav-btn-primary" style="text-align:center;">Book Demo</a>
      </div>
    </div>
  </div>

</div>
```

---

## 2. CSS Styling

```css
:root {
  --bg-nav: rgba(12, 13, 20, 0.85);
  --border-nav: rgba(255, 255, 255, 0.08);
  --accent-cyan: #00f2fe;
  --accent-blue: #4facfe;
  --text-white: #f8fafc;
  --text-muted: #94a3b8;
}

.velt-nav-root {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.velt-navbar {
  background: var(--bg-nav);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-nav);
  height: 64px;
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

/* Brand */
.navbar-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand-mark {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: linear-gradient(135deg, #3b82f6, #06b6d4);
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-name {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-white);
  letter-spacing: -0.02em;
}

/* Nav Links */
.navbar-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  border-radius: 6px;
  transition: color 0.15s ease, background 0.15s ease;
}

.nav-link:hover, .nav-link.active {
  color: var(--text-white);
  background: rgba(255, 255, 255, 0.05);
}

.nav-link-chevron {
  font-size: 10px;
  transition: transform 0.2s ease;
}

.nav-item-wrap.open .nav-link-chevron {
  transform: rotate(180deg);
}

/* Right Actions */
.navbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.nav-btn-ghost:hover {
  color: var(--text-white);
  background: rgba(255, 255, 255, 0.05);
}

.nav-btn-primary {
  display: inline-block;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  color: #0b0c10;
  background: linear-gradient(135deg, #00f2fe, #4facfe);
  border-radius: 6px;
  text-decoration: none;
  box-shadow: 0 4px 14px rgba(0, 242, 254, 0.3);
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.nav-btn-primary:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(0, 242, 254, 0.45);
}

/* Mega Menu */
.mega-menu-wrapper {
  position: absolute;
  top: 64px;
  left: 0;
  right: 0;
  pointer-events: none;
}

.mega-menu {
  max-width: 1000px;
  margin: 12px auto 0;
  background: rgba(14, 16, 24, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(20px);
  padding: 24px;
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.mega-menu.show {
  opacity: 1;
  transform: translateY(0);
  pointer-events: all;
}

.mega-menu-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.3fr;
  gap: 24px;
}

.mega-col-label {
  font-size: 11px;
  font-weight: 700;
  color: #64748b;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 12px;
}

.mega-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 8px;
  border-radius: 6px;
  color: var(--text-white);
  text-decoration: none;
  font-size: 13px;
  transition: background 0.15s ease;
}

.mega-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.mega-view-all {
  display: block;
  font-size: 11px;
  font-weight: 600;
  color: var(--accent-cyan);
  text-decoration: none;
  margin-top: 10px;
  padding-left: 8px;
}

/* Highlight Card */
.mega-highlight-card {
  background: linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(6, 182, 212, 0.15));
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 8px;
  padding: 16px;
}

.mega-highlight-tag {
  font-size: 10px;
  font-weight: 700;
  color: var(--accent-cyan);
  margin-bottom: 6px;
}

.mega-highlight-title {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  margin-bottom: 6px;
}

.mega-highlight-desc {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.4;
  margin-bottom: 12px;
}

.mega-highlight-cta {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent-cyan);
  text-decoration: none;
}

/* Mobile burger */
.navbar-burger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 4px;
}
.navbar-burger span {
  width: 20px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
}

@media (max-width: 868px) {
  .navbar-nav, .navbar-right {
    display: none;
  }
  .navbar-burger {
    display: flex;
  }
}
```

---

## 3. JavaScript Logic

```javascript
(function () {
  'use strict';

  const megaWrap = document.getElementById('mega-wrap');
  const megaTrigger = document.getElementById('mega-trigger');
  const megaMenu = document.getElementById('mega-menu');

  if (!megaWrap || !megaTrigger || !megaMenu) return;

  let closeTimer = null;

  function openMega() {
    clearTimeout(closeTimer);
    megaMenu.classList.add('show');
    megaWrap.classList.add('open');
    megaTrigger.setAttribute('aria-expanded', 'true');
  }

  function closeMega() {
    closeTimer = setTimeout(() => {
      megaMenu.classList.remove('show');
      megaWrap.classList.remove('open');
      megaTrigger.setAttribute('aria-expanded', 'false');
    }, 120);
  }

  // Hover with safe area timeout
  megaWrap.addEventListener('mouseenter', openMega);
  megaWrap.addEventListener('mouseleave', closeMega);
  megaMenu.addEventListener('mouseenter', openMega);
  megaMenu.addEventListener('mouseleave', closeMega);

  // Click toggle for touchscreen/keyboard
  megaTrigger.addEventListener('click', (e) => {
    e.preventDefault();
    if (megaMenu.classList.contains('show')) {
      closeMega();
    } else {
      openMega();
    }
  });

  // ESC close
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMega();
  });
})();
```
