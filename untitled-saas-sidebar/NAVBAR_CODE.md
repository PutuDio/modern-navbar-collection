# Untitled UI SaaS Sidebar — Component Code

File ini berisi kode komponen bersih (clean isolated code) yang **HANYA** berkaitan dengan **Untitled UI SaaS Sidebar & Topbar**, termasuk menu navigasi berjenjang, popup profil/account switcher, dan ⌘K command palette. Anda dapat menyalin kode ini langsung ke template admin/SaaS dashboard Anda.

---

## 1. HTML Markup

```html
<!-- ================================================================
     UNTITLED UI SAAS SIDEBAR & SHELL
     ================================================================ -->

<!-- Mobile overlay -->
<div class="mobile-overlay" id="mobile-overlay" aria-hidden="true"></div>

<!-- Account Switcher Popover -->
<div class="popover-overlay" id="popover-overlay"></div>
<div class="popover" id="account-popover" role="dialog" aria-label="Account switcher">
  <div class="popover-section">
    <div class="popover-item" tabindex="0">
      <span class="popover-item-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M2 13c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </span>
      <span class="popover-item-label">View profile</span>
      <span class="popover-item-shortcut">⌘K→P</span>
    </div>
    <div class="popover-item" tabindex="0">
      <span class="popover-item-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M8 5v3l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </span>
      <span class="popover-item-label">Account settings</span>
      <span class="popover-item-shortcut">⌘S</span>
    </div>
  </div>

  <div class="popover-section">
    <div class="popover-heading">Switch account</div>
    <div class="account-item active" data-account="florence" tabindex="0">
      <div class="account-avatar" style="background:linear-gradient(135deg,#667eea,#764ba2);">
        FS
        <div class="account-online"></div>
      </div>
      <div class="account-info">
        <div class="account-name-sm">Florence Shaw</div>
        <div class="account-email-sm">florence@untitledui.com</div>
      </div>
      <div class="account-radio active"></div>
    </div>
    <div class="account-item" data-account="ammar" tabindex="0">
      <div class="account-avatar" style="background:linear-gradient(135deg,#f093fb,#f5576c);">AF</div>
      <div class="account-info">
        <div class="account-name-sm">Ammar Foley</div>
        <div class="account-email-sm">ammar@untitledui.com</div>
      </div>
      <div class="account-radio"></div>
    </div>
  </div>

  <div class="popover-section">
    <div class="popover-item" id="sign-out-btn" tabindex="0" style="color:var(--gray-600);">
      <span class="popover-item-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 14H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M10 11l3-3-3-3M13 8H6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </span>
      <span>Sign out</span>
      <span class="popover-item-shortcut">⌥⌘Q</span>
    </div>
  </div>
</div>

<!-- ⌘K Command Dialog -->
<div class="cmd-dialog-overlay" id="cmd-dialog-overlay" role="dialog" aria-modal="true" aria-label="Command palette">
  <div class="cmd-dialog">
    <div class="cmd-input-row">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5" stroke="#98a2b3" stroke-width="1.5"/>
        <path d="M11 11L14 14" stroke="#98a2b3" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <input class="cmd-input" id="cmd-input" type="text" placeholder="Type a command or search…" autocomplete="off" spellcheck="false">
      <kbd class="cmd-esc">ESC</kbd>
    </div>
    <div class="cmd-results">
      <div class="cmd-result-section-label">Navigation</div>
      <div class="cmd-result-item" tabindex="0">
        <span class="cmd-result-icon">🏠</span>
        <span>Dashboard</span>
      </div>
      <div class="cmd-result-item highlighted" tabindex="0">
        <span class="cmd-result-icon">👥</span>
        <span>User management</span>
      </div>
      <div class="cmd-result-item" tabindex="0">
        <span class="cmd-result-icon">🔐</span>
        <span>Security & access</span>
      </div>
    </div>
  </div>
</div>

<!-- App Shell -->
<div class="app-shell">
  <!-- Left Sidebar -->
  <aside class="sidebar" id="sidebar" role="navigation" aria-label="Main sidebar">
    <!-- Brand -->
    <div class="sidebar-brand">
      <a href="#" class="brand-logo-group" aria-label="Untitled UI — Home">
        <div class="brand-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="2" y="2" width="6" height="6" rx="1.5" fill="white" opacity="0.9"/>
            <rect x="10" y="2" width="6" height="6" rx="1.5" fill="white" opacity="0.6"/>
            <rect x="2" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.6"/>
            <rect x="10" y="10" width="6" height="6" rx="1.5" fill="white" opacity="0.9"/>
          </svg>
        </div>
        <div>
          <div class="brand-name">Untitled UI</div>
          <div class="brand-version">v4.0</div>
        </div>
      </a>
    </div>

    <!-- Quick Search Trigger -->
    <div class="sidebar-search">
      <button class="search-trigger" id="search-trigger" aria-label="Open command palette" aria-haspopup="dialog">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" stroke-width="1.3"/>
          <path d="M10 10L12.5 12.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
        <span class="search-trigger-label">Search</span>
        <div class="search-shortcut" aria-label="Shortcut Command K">
          <kbd>⌘</kbd><kbd>K</kbd>
        </div>
      </button>
    </div>

    <!-- Navigation List -->
    <nav class="sidebar-nav" aria-label="Sidebar navigation">
      <div class="nav-section">
        <div class="nav-section-label">General</div>
        <a href="#" class="nav-item" data-nav="dashboard">
          <span class="nav-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="5" height="5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="9.5" y="1.5" width="5" height="5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="1.5" y="9.5" width="5" height="5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>
          </span>
          <span class="nav-label">Dashboard</span>
        </a>
        <a href="#" class="nav-item" data-nav="notifications">
          <span class="nav-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a5 5 0 0 0-5 5v3l-1 2h12l-1-2V7a5 5 0 0 0-5-5Z" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 13a1.5 1.5 0 0 0 3 0" stroke="currentColor" stroke-width="1.5"/></svg>
          </span>
          <span class="nav-label">Notifications</span>
          <span class="nav-badge">4</span>
        </a>
      </div>

      <div class="nav-section">
        <div class="nav-section-label">Workspace</div>
        <a href="#" class="nav-item active" data-nav="user-management">
          <span class="nav-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="5" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="11" cy="5" r="2" stroke="currentColor" stroke-width="1.5"/><path d="M1 13c0-2.5 2-4 5-4s5 1.5 5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M11 10c1.5.2 3 1 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">User management</span>
        </a>
        <a href="#" class="nav-item" data-nav="security">
          <span class="nav-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L3 4v4c0 3 2 5 5 6 3-1 5-3 5-6V4L8 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
          </span>
          <span class="nav-label">Security &amp; access</span>
        </a>
      </div>
    </nav>

    <!-- Sidebar Footer -->
    <div class="sidebar-footer">
      <div class="profile-pill" id="profile-pill" role="button" tabindex="0" aria-haspopup="true">
        <div class="profile-avatar">
          <div class="avatar-img">FS</div>
          <div class="avatar-online-badge"></div>
        </div>
        <div class="profile-info">
          <div class="profile-name">Florence Shaw</div>
          <div class="profile-email">florence@untitledui.com</div>
        </div>
      </div>
    </div>
  </aside>

  <!-- Content / Topbar -->
  <div class="main-area">
    <header class="topbar">
      <button class="topbar-menu-btn" id="topbar-menu-btn" aria-label="Open sidebar">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
      <div class="topbar-breadcrumb">
        <span>Sisyphus Ventures</span> / <strong>User management</strong>
      </div>
    </header>
  </div>
</div>
```

---

## 2. CSS Styling

```css
:root {
  --sidebar-width: 280px;
  --topbar-height: 60px;
  --brand-primary: #7f56d9;
  --brand-primary-light: #f9f5ff;
  --gray-25: #fcfcfd;
  --gray-50: #f8f9fc;
  --gray-100: #f2f4f7;
  --gray-200: #eaecf0;
  --gray-300: #d0d5dd;
  --gray-400: #98a2b3;
  --gray-600: #475467;
  --gray-700: #344054;
  --gray-900: #101828;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  width: var(--sidebar-width);
  background: #ffffff;
  border-right: 1px solid var(--gray-200);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
}

.sidebar-brand {
  padding: 24px 20px 16px;
}

.brand-logo-group {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand-icon {
  width: 32px;
  height: 32px;
  background: var(--brand-primary);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--gray-900);
}

.brand-version {
  font-size: 11px;
  color: var(--brand-primary);
  font-weight: 600;
}

/* Search Trigger */
.sidebar-search {
  padding: 0 16px 12px;
}

.search-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: var(--gray-50);
  border: 1px solid var(--gray-300);
  border-radius: 8px;
  color: var(--gray-400);
  font-size: 13px;
  cursor: pointer;
}

.search-shortcut {
  margin-left: auto;
  display: flex;
  gap: 2px;
}

.search-shortcut kbd {
  background: #fff;
  border: 1px solid var(--gray-300);
  border-radius: 4px;
  padding: 1px 5px;
  font-size: 11px;
  color: var(--gray-600);
}

/* Nav */
.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 8px 16px;
}

.nav-section {
  margin-bottom: 20px;
}

.nav-section-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: var(--gray-400);
  letter-spacing: 0.04em;
  padding: 0 8px 6px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 6px;
  color: var(--gray-700);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: background 0.15s ease, color 0.15s ease;
}

.nav-item:hover {
  background: var(--gray-50);
  color: var(--gray-900);
}

.nav-item.active {
  background: var(--brand-primary-light);
  color: var(--brand-primary);
  font-weight: 600;
}

.nav-badge {
  margin-left: auto;
  background: var(--gray-100);
  color: var(--gray-700);
  padding: 2px 7px;
  border-radius: 10px;
  font-size: 11px;
  font-weight: 600;
}

/* Sidebar Footer & Profile */
.sidebar-footer {
  padding: 16px;
  border-top: 1px solid var(--gray-200);
}

.profile-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}

.profile-pill:hover {
  background: var(--gray-50);
}

.avatar-img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #7f56d9;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--gray-900);
}

.profile-email {
  font-size: 12px;
  color: var(--gray-600);
}

/* Main Area */
.main-area {
  margin-left: var(--sidebar-width);
  flex: 1;
}

.topbar {
  height: var(--topbar-height);
  background: #fff;
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 16px;
}

.topbar-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 992px) {
  .sidebar {
    transform: translateX(-100%);
    transition: transform 0.25s ease;
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .main-area {
    margin-left: 0;
  }
  .topbar-menu-btn {
    display: block;
  }
}
```

---

## 3. JavaScript Logic

```javascript
(function () {
  'use strict';

  const sidebar = document.getElementById('sidebar');
  const menuBtn = document.getElementById('topbar-menu-btn');
  const overlay = document.getElementById('mobile-overlay');
  const searchTrigger = document.getElementById('search-trigger');
  const cmdOverlay = document.getElementById('cmd-dialog-overlay');
  const cmdInput = document.getElementById('cmd-input');
  const profilePill = document.getElementById('profile-pill');
  const popover = document.getElementById('account-popover');
  const popoverOverlay = document.getElementById('popover-overlay');

  // Mobile toggle
  function openSidebar() {
    sidebar.classList.add('open');
    if (overlay) overlay.classList.add('show');
  }
  function closeSidebar() {
    sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
  }
  if (menuBtn) menuBtn.addEventListener('click', openSidebar);
  if (overlay) overlay.addEventListener('click', closeSidebar);

  // Command palette (⌘K)
  function openCmd() {
    if (cmdOverlay) {
      cmdOverlay.classList.add('show');
      if (cmdInput) cmdInput.focus();
    }
  }
  function closeCmd() {
    if (cmdOverlay) cmdOverlay.classList.remove('show');
  }
  if (searchTrigger) searchTrigger.addEventListener('click', openCmd);

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      cmdOverlay && cmdOverlay.classList.contains('show') ? closeCmd() : openCmd();
    }
    if (e.key === 'Escape') {
      closeCmd();
      if (popover) popover.classList.remove('open');
    }
  });

  // Popover toggle
  if (profilePill && popover) {
    profilePill.addEventListener('click', () => {
      popover.classList.toggle('open');
      if (popoverOverlay) popoverOverlay.classList.toggle('show');
    });
  }
  if (popoverOverlay) {
    popoverOverlay.addEventListener('click', () => {
      if (popover) popover.classList.remove('open');
      popoverOverlay.classList.remove('show');
    });
  }
})();
```
