# Untitled UI SaaS Sidebar — Component Code

File ini berisi kode komponen bersih (clean isolated code) yang **HANYA** berkaitan dengan **Untitled UI SaaS Sidebar & Topbar**, termasuk menu navigasi berjenjang, popup profil/account switcher, dan ⌘K command palette. Anda dapat menyalin kode ini langsung ke template admin/SaaS dashboard Anda.

---

## 1. HTML Markup

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Untitled UI — User Management | Team & Access Control</title>
  <meta name="description" content="Manage your team members, roles, and permissions with the Untitled UI SaaS administration dashboard.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>


<!-- ══════════════════════════════════════════════════════════
     ACCOUNT SWITCHER POPOVER
     ══════════════════════════════════════════════════════════ -->
<div class="popover-overlay" id="popover-overlay"></div>
<div class="popover" id="account-popover" role="dialog" aria-label="Account switcher">
  <div class="popover-section">
    <div class="popover-item" tabindex="0">
      <span class="popover-item-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M2 13c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </span>
      <span class="popover-item-label" data-cmd-label="View profile">View profile</span>
      <span class="popover-item-shortcut">⌘K→P</span>
    </div>
    <div class="popover-item" tabindex="0">
      <span class="popover-item-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M8 5v3l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </span>
      <span class="popover-item-label">Account settings</span>
      <span class="popover-item-shortcut">⌘S</span>
    </div>
    <div class="popover-item" tabindex="0">
      <span class="popover-item-icon">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M5 7h6M5 9.5h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </span>
      <span class="popover-item-label">Documentation</span>
    </div>
  </div>

  <div class="popover-section">
    <div class="popover-heading">Switch account</div>
    <div class="account-item" data-account="florence" tabindex="0">
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
      <div class="account-avatar" style="background:linear-gradient(135deg,#f093fb,#f5576c);">
        AF
      </div>
      <div class="account-info">
        <div class="account-name-sm">Ammar Foley</div>
        <div class="account-email-sm">ammar@untitledui.com</div>
      </div>
      <div class="account-radio"></div>
    </div>
  </div>

  <div class="popover-section">
    <button class="add-account-btn" id="add-account-btn" aria-label="Add another account">
      <span style="font-size:16px;color:var(--gray-400);">+</span>
      Add account
    </button>
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

<!-- ══════════════════════════════════════════════════════════
     ⌘K COMMAND DIALOG
     ══════════════════════════════════════════════════════════ -->
<div class="cmd-dialog-overlay" id="cmd-dialog-overlay" role="dialog" aria-modal="true" aria-label="Command palette">
  <div class="cmd-dialog">
    <div class="cmd-input-row">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="5" stroke="var(--gray-400)" stroke-width="1.5"/>
        <path d="M11 11L14 14" stroke="var(--gray-400)" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      <input class="cmd-input" id="cmd-input" type="text" placeholder="Search…" autocomplete="off" spellcheck="false">
      <kbd class="cmd-esc">ESC</kbd>
    </div>
    <div class="cmd-results">
      <div class="cmd-result-section-label">Navigation</div>
      <div class="cmd-result-item" tabindex="0">
        <span class="cmd-result-icon">🏠</span>
        <span data-cmd-label="Dashboard">Dashboard</span>
      </div>
      <div class="cmd-result-item highlighted" tabindex="0">
        <span class="cmd-result-icon">👥</span>
        <span data-cmd-label="User management">User management</span>
      </div>
      <div class="cmd-result-item" tabindex="0">
        <span class="cmd-result-icon">🔐</span>
        <span data-cmd-label="Security & access">Security &amp; access</span>
      </div>
      <div class="cmd-result-item" tabindex="0">
        <span class="cmd-result-icon">💳</span>
        <span data-cmd-label="Payments">Payments</span>
      </div>

      <div class="cmd-result-section-label">Actions</div>
      <div class="cmd-result-item" tabindex="0">
        <span class="cmd-result-icon">➕</span>
        <span data-cmd-label="Add new user">Add new user</span>
      </div>
      <div class="cmd-result-item" tabindex="0">
        <span class="cmd-result-icon">📤</span>
        <span data-cmd-label="Export user data">Export user data</span>
      </div>
      <div class="cmd-result-item" tabindex="0">
        <span class="cmd-result-icon">⚙️</span>
        <span data-cmd-label="Account settings">Account settings</span>
      </div>

      <div class="cmd-result-section-label">Preferences</div>
      <div class="cmd-result-item" tabindex="0">
        <span class="cmd-result-icon">🎨</span>
        <span data-cmd-label="Change appearance">Change appearance</span>
      </div>
      <div class="cmd-result-item" tabindex="0">
        <span class="cmd-result-icon">🔔</span>
        <span data-cmd-label="Notification settings">Notification settings</span>
      </div>
    </div>
  </div>
</div>

<!-- ══════════════════════════════════════════════════════════
     APP SHELL
     ══════════════════════════════════════════════════════════ -->
<div class="app-shell">

  <!-- ── LEFT SIDEBAR ───────────────────────────────────────── -->
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

    <!-- Search Trigger -->
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

    <!-- Nav -->
    <nav class="sidebar-nav" aria-label="Sidebar navigation">
      <!-- GENERAL Section -->
      <div class="nav-section">
        <div class="nav-section-label">General</div>
        <a href="#" class="nav-item" data-nav="dashboard" aria-label="Dashboard">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="5" height="5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="9.5" y="1.5" width="5" height="5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="1.5" y="9.5" width="5" height="5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>
          </span>
          <span class="nav-label">Dashboard</span>
        </a>
        <a href="#" class="nav-item" data-nav="appearance" aria-label="Appearance">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M8 5v3l2 1.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">Appearance</span>
        </a>
        <a href="#" class="nav-item" data-nav="database" aria-label="Database">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><ellipse cx="8" cy="4" rx="5" ry="2" stroke="currentColor" stroke-width="1.5"/><path d="M3 4v4c0 1.1 2.2 2 5 2s5-.9 5-2V4" stroke="currentColor" stroke-width="1.5"/><path d="M3 8v4c0 1.1 2.2 2 5 2s5-.9 5-2V8" stroke="currentColor" stroke-width="1.5"/></svg>
          </span>
          <span class="nav-label">Database</span>
        </a>
        <a href="#" class="nav-item" data-nav="connections" aria-label="Connections">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="4" cy="8" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="4" r="2" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="12" r="2" stroke="currentColor" stroke-width="1.5"/><path d="M6 8h2M10 4.8l-2 2.4M10 11.2l-2-2.4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">Connections</span>
        </a>
        <a href="#" class="nav-item" data-nav="timezones" aria-label="Timezones">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M8 4v4l2.5 2.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">Timezones</span>
        </a>
        <a href="#" class="nav-item" data-nav="notifications" aria-label="Notifications, 4 new">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2a5 5 0 0 0-5 5v3l-1 2h12l-1-2V7a5 5 0 0 0-5-5Z" stroke="currentColor" stroke-width="1.5"/><path d="M6.5 13a1.5 1.5 0 0 0 3 0" stroke="currentColor" stroke-width="1.5"/></svg>
          </span>
          <span class="nav-label">Notifications</span>
          <span class="nav-badge">4</span>
        </a>
      </div>

      <!-- WORKSPACE Section -->
      <div class="nav-section">
        <div class="nav-section-label">
          <span>Sisyphus Ventures</span>
          <button class="nav-section-action" aria-label="Workspace options">···</button>
        </div>
        <a href="#" class="nav-item active" data-nav="user-management" aria-label="User management (current page)" aria-current="page">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="6" cy="5" r="2.5" stroke="currentColor" stroke-width="1.5"/><circle cx="11" cy="5" r="2" stroke="currentColor" stroke-width="1.5"/><path d="M1 13c0-2.5 2-4 5-4s5 1.5 5 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><path d="M11 10c1.5.2 3 1 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">User management</span>
        </a>
        <a href="#" class="nav-item" data-nav="security" aria-label="Security and access">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L3 4v4c0 3 2 5 5 6 3-1 5-3 5-6V4L8 2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>
          </span>
          <span class="nav-label">Security &amp; access</span>
        </a>
        <a href="#" class="nav-item" data-nav="authentication" aria-label="Authentication">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M5 7V5a3 3 0 1 1 6 0v2" stroke="currentColor" stroke-width="1.5"/><circle cx="8" cy="10.5" r="1.5" fill="currentColor"/></svg>
          </span>
          <span class="nav-label">Authentication</span>
        </a>
        <a href="#" class="nav-item" data-nav="payments" aria-label="Payments">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M2 7h12" stroke="currentColor" stroke-width="1.5"/></svg>
          </span>
          <span class="nav-label">Payments</span>
        </a>
        <a href="#" class="nav-item" data-nav="import" aria-label="Import data">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 11v1.5A1.5 1.5 0 0 0 4.5 14h7A1.5 1.5 0 0 0 13 12.5V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">Import data</span>
        </a>
        <a href="#" class="nav-item" data-nav="export" aria-label="Export data">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 10V2M5 5l3-3 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 11v1.5A1.5 1.5 0 0 0 4.5 14h7A1.5 1.5 0 0 0 13 12.5V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">Export data</span>
        </a>
      </div>
    </nav>

    <!-- Footer Links -->
    <div class="sidebar-footer">
      <a href="#" class="nav-item" data-nav="settings" aria-label="Settings" style="margin-bottom:2px;">
        <span class="nav-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3.05 3.05l1.41 1.41M11.54 11.54l1.41 1.41M3.05 12.95l1.41-1.41M11.54 4.46l1.41-1.41" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </span>
        <span class="nav-label">Settings</span>
      </a>
      <a href="#" class="nav-item" data-nav="docs" aria-label="Documentation" style="margin-bottom:2px;">
        <span class="nav-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M5.5 5.5h5M5.5 8h5M5.5 10.5h3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
        </span>
        <span class="nav-label">Documentation</span>
      </a>
      <a href="#" class="nav-item" data-nav="support" aria-label="Support, currently online" style="margin-bottom:8px;">
        <span class="nav-icon" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M6 6a2 2 0 1 1 2 2v1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="11.5" r="0.75" fill="currentColor"/></svg>
        </span>
        <span class="nav-label">Support</span>
        <span class="nav-badge online"><span class="online-dot"></span> Online</span>
      </a>

      <!-- Profile Pill -->
      <div class="profile-pill" id="profile-pill" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-label="Account menu for Florence Shaw">
        <div class="profile-avatar">
          <div class="avatar-img">FS</div>
          <div class="avatar-online-badge"></div>
        </div>
        <div class="profile-info">
          <div class="profile-name">Florence Shaw</div>
          <div class="profile-email">florence@untitledui.com</div>
        </div>
        <button class="profile-action-btn" aria-hidden="true" tabindex="-1">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5 7l3-3 3 3M5 10l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </div>
    </div>
  </aside>
  <div class="main-area">

  <header class="topbar">
    <button class="topbar-menu-btn" id="topbar-menu-btn" aria-label="Open sidebar" aria-expanded="false" aria-controls="sidebar">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    </button>
    <div class="topbar-breadcrumb"><span class="breadcrumb-current" id="breadcrumb-current">User management</span></div>
    <div class="topbar-right"></div>
  </header>
  </div>

<script src="script.js"></script>
</body>
</html>
```

---

## 2. CSS Styling

```css
/* =============================================================
   UNTITLED SAAS SIDEBAR — style.css
   Modern Cloud SaaS Admin Portal / Team Management
   ============================================================= */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

/* ── Design Tokens ─────────────────────────────────────────── */
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  /* Neutral Color Scale */
  --white:    #ffffff;
  --gray-25:  #FCFCFD;
  --gray-50:  #F9FAFB;
  --gray-100: #F2F4F7;
  --gray-200: #EAECF0;
  --gray-300: #D0D5DD;
  --gray-400: #98A2B3;
  --gray-500: #667085;
  --gray-600: #475467;
  --gray-700: #344054;
  --gray-800: #1D2939;
  --gray-900: #101828;

  /* Brand — Indigo/Purple */
  --brand-25:  #F5F8FF;
  --brand-50:  #EEF4FF;
  --brand-100: #E0EAFF;
  --brand-200: #C7D7FE;
  --brand-500: #6172F3;
  --brand-600: #444CE7;
  --brand-700: #3538CD;

  /* Status colors */
  --success-500: #12B76A;
  --success-600: #039855;
  --warning-500: #F79009;
  --error-500:   #F04438;

  /* Layout */
  --sidebar-width: 280px;
  --sidebar-collapsed: 72px;
  --topbar-height: 64px;
  --content-padding: 32px;

  /* Surfaces */
  --bg-page:    var(--gray-50);
  --bg-sidebar: var(--white);
  --bg-topbar:  var(--white);

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(16,24,40,0.05);
  --shadow-sm: 0 1px 3px rgba(16,24,40,0.10), 0 1px 2px rgba(16,24,40,0.06);
  --shadow-md: 0 4px 8px -2px rgba(16,24,40,0.10), 0 2px 4px -2px rgba(16,24,40,0.06);
  --shadow-lg: 0 12px 16px -4px rgba(16,24,40,0.08), 0 4px 6px -2px rgba(16,24,40,0.03);
  --shadow-xl: 0 20px 24px -4px rgba(16,24,40,0.08), 0 8px 8px -4px rgba(16,24,40,0.03);

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-full: 9999px;

  /* Transitions */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 150ms;
  --dur-med: 250ms;
  --dur-slow: 400ms;
}

/* ── Reset ─────────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { height: 100%; }
body {
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--gray-700);
  background: var(--bg-page);
  height: 100vh;
  display: flex;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
}

/* ═══════════════════════════════════════════════════════════
   APP SHELL
   ═══════════════════════════════════════════════════════════ */
.app-shell {
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* ═══════════════════════════════════════════════════════════
   LEFT SIDEBAR
   ═══════════════════════════════════════════════════════════ */
.sidebar {
  width: var(--sidebar-width);
  height: 100%;
  background: var(--bg-sidebar);
  border-right: 1px solid var(--gray-200);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  z-index: 200;
  transition: width var(--dur-slow) var(--ease-out);
}

/* ── Sidebar Brand Header ──────────────────────────────────── */
.sidebar-brand {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 16px 16px;
  border-bottom: 1px solid var(--gray-100);
  flex-shrink: 0;
}

.brand-logo-group {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  overflow: hidden;
}

.brand-icon {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-md);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: var(--shadow-sm);
}

.brand-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-900);
  white-space: nowrap;
  letter-spacing: -0.01em;
}

.brand-version {
  font-size: 11px;
  font-weight: 500;
  color: var(--gray-400);
}

/* ── Search Trigger ────────────────────────────────────────── */
.sidebar-search {
  padding: 12px 16px;
  border-bottom: 1px solid var(--gray-100);
  flex-shrink: 0;
}

.search-trigger {
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease;
  color: var(--gray-400);
  font-family: var(--font-sans);
  font-size: 13.5px;
}

.search-trigger:hover {
  border-color: var(--gray-300);
  box-shadow: var(--shadow-xs);
  color: var(--gray-500);
}

.search-trigger-label {
  flex: 1;
  text-align: left;
  color: var(--gray-400);
  font-size: 13.5px;
}

.search-shortcut {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 11px;
  color: var(--gray-300);
  font-weight: 500;
}

.search-shortcut kbd {
  background: var(--gray-100);
  border: 1px solid var(--gray-200);
  border-radius: 4px;
  padding: 1px 5px;
  font-size: 10px;
  font-family: var(--font-sans);
}

/* ── Sidebar Nav Sections ──────────────────────────────────── */
.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 8px 0;
  scrollbar-width: thin;
  scrollbar-color: var(--gray-200) transparent;
}

.sidebar-nav::-webkit-scrollbar { width: 4px; }
.sidebar-nav::-webkit-scrollbar-thumb { background: var(--gray-200); border-radius: 99px; }
.sidebar-nav::-webkit-scrollbar-track { background: transparent; }

.nav-section {
  padding: 0 8px;
  margin-bottom: 4px;
}

.nav-section-label {
  padding: 10px 8px 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--gray-400);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-section-action {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-400);
  font-size: 16px;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  transition: background var(--dur-fast) ease, color var(--dur-fast) ease;
}

.nav-section-action:hover { background: var(--gray-100); color: var(--gray-600); }

/* ── Nav Item ──────────────────────────────────────────────── */
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: var(--radius-md);
  color: var(--gray-600);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--dur-fast) ease, color var(--dur-fast) ease;
  user-select: none;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.nav-item:hover {
  background: var(--gray-50);
  color: var(--gray-800);
}

.nav-item.active {
  background: var(--brand-50);
  color: var(--brand-700);
}

.nav-item.active .nav-icon { color: var(--brand-600); }

.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-500);
  transition: color var(--dur-fast) ease;
}

.nav-item:hover .nav-icon { color: var(--gray-700); }

.nav-label { flex: 1; min-width: 0; white-space: nowrap; }

.nav-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 6px;
  background: var(--gray-100);
  border-radius: var(--radius-full);
  font-size: 11px;
  font-weight: 600;
  color: var(--gray-600);
  flex-shrink: 0;
  transition: background var(--dur-fast) ease, color var(--dur-fast) ease;
}

.nav-item.active .nav-badge {
  background: var(--brand-100);
  color: var(--brand-700);
}

/* Online indicator badge */
.nav-badge.online {
  background: #ECFDF3;
  color: var(--success-600);
  gap: 4px;
  font-size: 11px;
}

.online-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--success-500);
  flex-shrink: 0;
}

/* ── Sidebar Footer ────────────────────────────────────────── */
.sidebar-footer {
  border-top: 1px solid var(--gray-100);
  padding: 8px;
  flex-shrink: 0;
}

/* ── Profile Pill ──────────────────────────────────────────── */
.profile-pill {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--dur-fast) ease;
  position: relative;
}

.profile-pill:hover { background: var(--gray-50); }

.profile-avatar {
  position: relative;
  flex-shrink: 0;
}

.avatar-img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 600;
  color: white;
}

.avatar-online-badge {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--success-500);
  border: 2px solid var(--white);
}

.profile-info {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.profile-name {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--gray-700);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.profile-email {
  font-size: 12px;
  color: var(--gray-400);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.profile-action-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-400);
  display: flex;
  align-items: center;
  padding: 4px;
  border-radius: var(--radius-sm);
  transition: color var(--dur-fast) ease;
  flex-shrink: 0;
}

.profile-action-btn:hover { color: var(--gray-600); }

/* ═══════════════════════════════════════════════════════════
   MAIN AREA (Topbar + Content)
   ═══════════════════════════════════════════════════════════ */
.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
}

/* ── Topbar ────────────────────────────────────────────────── */
.topbar {
  height: var(--topbar-height);
  background: var(--bg-topbar);
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  position: relative;
  z-index: 160;
  flex-shrink: 0;
  box-shadow: var(--shadow-xs);
}

.topbar-breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.breadcrumb-workspace {
  display: flex;
  align-items: center;
  gap: 6px;
  color: var(--gray-500);
}

.workspace-avatar-sm {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.breadcrumb-sep {
  color: var(--gray-300);
  font-size: 16px;
}

.breadcrumb-current {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-700);
  white-space: nowrap;
}

.topbar-right {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.topbar-avatar {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: var(--radius-md);
  transition: background var(--dur-fast) ease;
}

.topbar-avatar:hover { background: var(--gray-50); }

.topbar-name {
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-700);
}

/* Mobile menu button */
.topbar-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-500);
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: background var(--dur-fast) ease;
}

.topbar-menu-btn:hover { background: var(--gray-100); }

/* ── Page Content ──────────────────────────────────────────── */
.page-content {
  flex: 1;
  overflow-y: auto;
  padding: var(--content-padding);
  scrollbar-width: thin;
  scrollbar-color: var(--gray-200) transparent;
}

.page-header {
  margin-bottom: 24px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--gray-900);
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.page-description {
  font-size: 14px;
  color: var(--gray-500);
}

/* ── Content Actions Bar ───────────────────────────────────── */
.content-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.content-title-sm {
  font-size: 14px;
  font-weight: 600;
  color: var(--gray-900);
  flex: 1;
  white-space: nowrap;
}

.count-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 2px 8px;
  background: var(--brand-50);
  border: 1px solid var(--brand-200);
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 600;
  color: var(--brand-700);
  margin-left: 8px;
}

/* Search input */
.search-input-group {
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--white);
  border: 1px solid var(--gray-300);
  border-radius: var(--radius-md);
  padding: 8px 12px;
  transition: border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease;
}

.search-input-group:focus-within {
  border-color: var(--brand-500);
  box-shadow: 0 0 0 3px rgba(97, 114, 243, 0.12);
}

.search-input-group svg { color: var(--gray-400); flex-shrink: 0; }

.search-input {
  border: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: 14px;
  color: var(--gray-700);
  width: 200px;
  background: transparent;
}

.search-input::placeholder { color: var(--gray-400); }

/* Buttons */
.btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  font-family: var(--font-sans);
  font-size: 14px;
  font-weight: 600;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--dur-fast) ease, border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease, transform var(--dur-fast) ease;
  border: 1px solid transparent;
  text-decoration: none;
  white-space: nowrap;
}

.btn:active { transform: scale(0.99); }

.btn-secondary {
  background: var(--white);
  border-color: var(--gray-300);
  color: var(--gray-700);
  box-shadow: var(--shadow-xs);
}

.btn-secondary:hover {
  background: var(--gray-50);
  border-color: var(--gray-400);
}

.btn-primary {
  background: var(--brand-600);
  color: var(--white);
  box-shadow: var(--shadow-xs);
}

.btn-primary:hover {
  background: var(--brand-700);
  box-shadow: var(--shadow-sm);
}

/* ── User Table ────────────────────────────────────────────── */
.user-table-wrapper {
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-xs);
}

.user-table {
  width: 100%;
  border-collapse: collapse;
}

.user-table th {
  padding: 11px 16px;
  font-size: 12px;
  font-weight: 500;
  color: var(--gray-500);
  text-align: left;
  border-bottom: 1px solid var(--gray-200);
  background: var(--white);
  white-space: nowrap;
}

.user-table th:first-child { padding-left: 20px; width: 24px; }

.user-table td {
  padding: 14px 16px;
  font-size: 14px;
  color: var(--gray-700);
  border-bottom: 1px solid var(--gray-100);
  vertical-align: middle;
}

.user-table td:first-child { padding-left: 20px; width: 24px; }

.user-table tr:last-child td { border-bottom: none; }

.user-table tr:hover td { background: var(--gray-25); }
.user-table tr.selected td { background: var(--brand-25); }

.user-cell {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar-sm {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.user-info-col { min-width: 0; }

.user-name-sm {
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-900);
}

.user-email-sm {
  font-size: 13px;
  color: var(--gray-500);
}

/* Permission badges */
.badge-group {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: var(--radius-full);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}

.badge-admin { background: #F4F3FF; color: #5925DC; }
.badge-export { background: var(--brand-50); color: var(--brand-700); }
.badge-import { background: #ECFDF3; color: var(--success-600); }

.sort-icon {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  opacity: 0.4;
}

/* Checkboxes */
.checkbox {
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--gray-300);
  border-radius: 4px;
  background: var(--white);
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  transition: all var(--dur-fast) ease;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.checkbox:checked {
  background: var(--brand-600);
  border-color: var(--brand-600);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 10 8' fill='none'%3E%3Cpath d='M1 4L3.5 6.5L9 1' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 10px 8px;
}

.row-action-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-400);
  padding: 4px;
  border-radius: var(--radius-sm);
  font-size: 16px;
  transition: color var(--dur-fast) ease, background var(--dur-fast) ease;
}

.row-action-btn:hover { color: var(--gray-600); background: var(--gray-100); }

/* Pagination */
.table-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 14px 20px;
  border-top: 1px solid var(--gray-100);
}

.pag-btn {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-md);
  border: 1px solid var(--gray-200);
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--gray-700);
  cursor: pointer;
  transition: all var(--dur-fast) ease;
  font-family: var(--font-sans);
}

.pag-btn:hover { background: var(--gray-50); border-color: var(--gray-300); }
.pag-btn.active { background: var(--brand-50); border-color: var(--brand-200); color: var(--brand-700); font-weight: 600; }

/* ═══════════════════════════════════════════════════════════
   ACCOUNT SWITCHER POPOVER
   ═══════════════════════════════════════════════════════════ */
.popover-overlay {
  position: fixed;
  inset: 0;
  z-index: 300;
  background: transparent;
  display: none;
}

.popover-overlay.open { display: block; }

.popover {
  position: fixed;
  bottom: calc(var(--sidebar-width) - 100% + 80px);
  left: 8px;
  width: 240px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  z-index: 400;
  transform-origin: bottom left;
  transform: scale(0.95) translateY(8px);
  opacity: 0;
  pointer-events: none;
  transition: transform var(--dur-med) var(--ease-out),
              opacity var(--dur-med) ease;
}

.popover.open {
  transform: scale(1) translateY(0);
  opacity: 1;
  pointer-events: all;
}

.popover-section {
  padding: 6px;
}

.popover-section + .popover-section {
  border-top: 1px solid var(--gray-100);
}

.popover-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: var(--radius-md);
  font-size: 13.5px;
  font-weight: 500;
  color: var(--gray-700);
  cursor: pointer;
  transition: background var(--dur-fast) ease;
  text-decoration: none;
}

.popover-item:hover { background: var(--gray-50); }

.popover-item-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
  flex-shrink: 0;
}

.popover-item-label { flex: 1; }

.popover-item-shortcut {
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 400;
}

.popover-heading {
  padding: 6px 10px 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--gray-400);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.account-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--dur-fast) ease;
}

.account-item:hover { background: var(--gray-50); }

.account-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
  position: relative;
}

.account-online {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--success-500);
  border: 1.5px solid var(--white);
}

.account-info { flex: 1; min-width: 0; }

.account-name-sm {
  font-size: 13px;
  font-weight: 600;
  color: var(--gray-700);
}

.account-email-sm {
  font-size: 11.5px;
  color: var(--gray-400);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.account-radio {
  width: 16px;
  height: 16px;
  border: 1.5px solid var(--gray-300);
  border-radius: 50%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--dur-fast) ease;
}

.account-radio.active {
  border-color: var(--brand-600);
  background: var(--brand-600);
}

.account-radio.active::after {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: white;
}

.add-account-btn {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 13.5px;
  font-weight: 500;
  color: var(--gray-600);
  width: 100%;
  background: none;
  border: none;
  font-family: var(--font-sans);
  transition: background var(--dur-fast) ease;
}

.add-account-btn:hover { background: var(--gray-50); }

/* ═══════════════════════════════════════════════════════════
   CMD+K SEARCH DIALOG
   ═══════════════════════════════════════════════════════════ */
.cmd-dialog-overlay {
  position: fixed;
  inset: 0;
  background: rgba(16, 24, 40, 0.40);
  backdrop-filter: blur(6px);
  z-index: 900;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 120px;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--dur-med) ease;
}

.cmd-dialog-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.cmd-dialog {
  width: 100%;
  max-width: 520px;
  background: var(--white);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  transform: scale(0.95) translateY(-10px);
  transition: transform var(--dur-med) var(--ease-out);
}

.cmd-dialog-overlay.open .cmd-dialog {
  transform: scale(1) translateY(0);
}

.cmd-input-row {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-bottom: 1px solid var(--gray-100);
}

.cmd-input {
  flex: 1;
  border: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: 16px;
  color: var(--gray-900);
  background: transparent;
}

.cmd-input::placeholder { color: var(--gray-400); }

.cmd-esc {
  font-size: 11px;
  color: var(--gray-400);
  border: 1px solid var(--gray-200);
  border-radius: 5px;
  padding: 2px 8px;
  flex-shrink: 0;
  font-family: var(--font-sans);
  background: var(--gray-50);
}

.cmd-results {
  padding: 6px;
  max-height: 320px;
  overflow-y: auto;
}

.cmd-result-section-label {
  padding: 8px 10px 4px;
  font-size: 11px;
  font-weight: 600;
  color: var(--gray-400);
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.cmd-result-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: var(--radius-md);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: var(--gray-700);
  transition: background var(--dur-fast) ease;
}

.cmd-result-item:hover, .cmd-result-item.highlighted {
  background: var(--brand-50);
  color: var(--brand-700);
}

.cmd-result-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray-400);
  flex-shrink: 0;
}

.cmd-result-item:hover .cmd-result-icon,
.cmd-result-item.highlighted .cmd-result-icon { color: var(--brand-500); }

/* ── Toast Notification ────────────────────────────────────── */
.action-toast {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: var(--gray-900);
  border-radius: var(--radius-lg);
  padding: 12px 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: var(--shadow-xl);
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--dur-med) ease, transform var(--dur-med) var(--ease-out);
  max-width: 380px;
  min-width: 280px;
}

.action-toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

.toast-icon { font-size: 18px; flex-shrink: 0; }

.toast-body { flex: 1; }

.toast-msg {
  font-size: 13.5px;
  font-weight: 600;
  color: var(--white);
}

.toast-submsg {
  font-size: 12px;
  color: rgba(255,255,255,0.55);
}

.toast-actions {
  display: flex;
  gap: 8px;
  flex-shrink: 0;
}

.toast-link {
  font-size: 12.5px;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  cursor: pointer;
  transition: color var(--dur-fast) ease;
}

.toast-link:hover { color: var(--white); }
.toast-link.accent { color: var(--brand-200); }
.toast-link.accent:hover { color: var(--brand-100); }

/* ═══════════════════════════════════════════════════════════
   MOBILE OVERLAY DRAWER
   ═══════════════════════════════════════════════════════════ */
.mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(16,24,40,0.5);
  z-index: 150;
  opacity: 0;
  transition: opacity var(--dur-med) ease;
}

.mobile-overlay.open { opacity: 1; }

@media (max-width: 1024px) {
  body { overflow: hidden; }

  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(-100%);
    transition: transform var(--dur-slow) var(--ease-out);
    z-index: 200;
    box-shadow: var(--shadow-xl);
  }

  .sidebar.mobile-open {
    transform: translateX(0);
  }

  .mobile-overlay { display: block; }

  .topbar-menu-btn { display: flex; }

  .page-content { padding: 20px 16px; }

  .search-input { width: 140px; }
}

@media (max-width: 640px) {
  .content-actions { gap: 8px; }
  .search-input-group { display: none; }
  .user-table th:nth-child(3),
  .user-table td:nth-child(3),
  .user-table th:nth-child(4),
  .user-table td:nth-child(4) { display: none; }
  .cmd-dialog { width: min(92vw, 420px); }
  .account-popover { right: 12px; left: 12px; width: auto; }
}

@media (max-width: 480px) {
  .topbar { padding: 0 12px; height: 56px; }
  .page-content { padding: 16px 12px; }
  .content-title { font-size: 18px; }
  .content-desc { font-size: 13px; }
}
```

---

## 3. JavaScript Logic

```javascript
/* =============================================================
   UNTITLED SAAS SIDEBAR — script.js
   Command Dialog, Account Popover, Mobile Drawer, Toast
   ============================================================= */
(function () {
  'use strict';

  /* ── 1. Mobile Sidebar Drawer ────────────────────────────── */
  const sidebar        = document.getElementById('sidebar');
  const menuBtn        = document.getElementById('topbar-menu-btn');

  function openSidebar () {
    if (!sidebar || !menuBtn) return;
    sidebar.classList.add('mobile-open');
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar () {
    if (sidebar) sidebar.classList.remove('mobile-open');
    document.body.style.overflow = '';
    if (menuBtn) menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (sidebar.classList.contains('mobile-open')) closeSidebar();
      else openSidebar();
    });
  }


  /* ── 2. Active Nav Items ─────────────────────────────────── */
  document.querySelectorAll('.nav-item[data-nav]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Update breadcrumb
      const label = item.querySelector('.nav-label');
      if (label) {
        const breadcrumb = document.getElementById('breadcrumb-current');
        if (breadcrumb) breadcrumb.textContent = label.textContent.trim();
      }

      // Close mobile
      if (window.innerWidth <= 1024) closeSidebar();
    });
  });

  /* ── 3. ⌘K / Ctrl+K Command Dialog ──────────────────────── */
  const cmdOverlay = document.getElementById('cmd-dialog-overlay');
  const cmdInput   = document.getElementById('cmd-input');
  const searchTrigger = document.getElementById('search-trigger');

  function openCmd () {
    cmdOverlay.classList.add('open');
    setTimeout(() => cmdInput && cmdInput.focus(), 80);
    document.body.style.overflow = 'hidden';
  }

  function closeCmd () {
    cmdOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Open via keyboard shortcut
  document.addEventListener('keydown', (e) => {
    const isMeta = e.metaKey || e.ctrlKey;
    if (isMeta && e.key === 'k') {
      e.preventDefault();
      if (cmdOverlay.classList.contains('open')) closeCmd();
      else openCmd();
    }
    if (e.key === 'Escape') {
      closeCmd();
      closePopover();
      closeSidebar();
    }
  });

  // Open via search trigger click
  if (searchTrigger) searchTrigger.addEventListener('click', openCmd);

  // Close via overlay click
  if (cmdOverlay) {
    cmdOverlay.addEventListener('click', (e) => {
      if (e.target === cmdOverlay) closeCmd();
    });
  }

  // Command result hover highlight
  const cmdItems = document.querySelectorAll('.cmd-result-item');
  cmdItems.forEach(item => {
    item.addEventListener('click', () => {
      const labelEl = item.querySelector('[data-cmd-label]');
      const label = labelEl ? labelEl.textContent : item.textContent.trim();
      closeCmd();
      showToast(`Navigated to ${label.slice(0,30)}`, 'view-profile');
    });
  });

  // Search filtering
  if (cmdInput) {
    cmdInput.addEventListener('input', () => {
      const q = cmdInput.value.toLowerCase().trim();
      cmdItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = q === '' || text.includes(q) ? '' : 'none';
      });
    });
  }

  /* ── 4. Account Switcher Popover ─────────────────────────── */
  const profilePill    = document.getElementById('profile-pill');
  const popoverEl      = document.getElementById('account-popover');
  const popoverOverlay = document.getElementById('popover-overlay');

  function openPopover () {
    popoverEl.classList.add('open');
    popoverOverlay.classList.add('open');
    profilePill.setAttribute('aria-expanded', 'true');
  }

  function closePopover () {
    popoverEl.classList.remove('open');
    popoverOverlay.classList.remove('open');
    profilePill.setAttribute('aria-expanded', 'false');
  }

  if (profilePill) {
    profilePill.addEventListener('click', (e) => {
      e.stopPropagation();
      if (popoverEl.classList.contains('open')) closePopover();
      else openPopover();
    });
  }

  if (popoverOverlay) {
    popoverOverlay.addEventListener('click', closePopover);
  }

  // Account switch
  document.querySelectorAll('.account-item[data-account]').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.account-radio').forEach(r => r.classList.remove('active'));
      const radio = item.querySelector('.account-radio');
      if (radio) radio.classList.add('active');

      const name = item.querySelector('.account-name-sm');
      if (name) showToast(`Switched to ${name.textContent}`, 'switch-account');
      closePopover();
    });
  });

  // Sign out
  const signOutBtn = document.getElementById('sign-out-btn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      closePopover();
      showToast('Signed out successfully', 'sign-out');
    });
  }

  /* ── 5. Table Row Selection ──────────────────────────────── */
  const tableCheckboxAll = document.getElementById('check-all');

  function updateRowSelection (row, checked) {
    if (checked) {
      row.classList.add('selected');
    } else {
      row.classList.remove('selected');
    }
  }

  document.querySelectorAll('.row-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const row = cb.closest('tr');
      if (row) updateRowSelection(row, cb.checked);
    });
  });

  if (tableCheckboxAll) {
    tableCheckboxAll.addEventListener('change', () => {
      const checked = tableCheckboxAll.checked;
      document.querySelectorAll('.row-checkbox').forEach(cb => {
        cb.checked = checked;
        const row = cb.closest('tr');
        if (row) updateRowSelection(row, checked);
      });
    });
  }

  /* ── 6. Row Action Buttons ───────────────────────────────── */
  document.querySelectorAll('.row-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const row = btn.closest('tr');
      const nameCel = row ? row.querySelector('.user-name-sm') : null;
      const name = nameCel ? nameCel.textContent.trim() : 'user';
      showToast(`"${name}" details updated`, 'user-action', 'Undo', 'View profile');
    });
  });

  /* ── 7. Toast Notification ───────────────────────────────── */
  const toast = document.getElementById('action-toast');
  let toastTimer = null;

  function showToast (msg, id, undoLabel, actionLabel) {
    if (!toast) return;
    clearTimeout(toastTimer);

    const msgEl = toast.querySelector('.toast-msg');
    const undoEl = toast.querySelector('#toast-undo');
    const actionEl = toast.querySelector('#toast-action');
    const iconEl = toast.querySelector('.toast-icon');

    if (msgEl) msgEl.textContent = msg;
    if (iconEl) {
      iconEl.textContent = id === 'user-action' ? '✅' :
                           id === 'sign-out'     ? '👋' :
                           id === 'switch-account' ? '🔄' : '✅';
    }
    if (undoEl)  undoEl.textContent  = undoLabel  || 'Dismiss';
    if (actionEl) {
      actionEl.textContent = actionLabel || '';
      actionEl.style.display = actionLabel ? '' : 'none';
    }

    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
  }

  // Toast dismiss
  const toastUndo = document.getElementById('toast-undo');
  if (toastUndo) {
    toastUndo.addEventListener('click', () => {
      clearTimeout(toastTimer);
      toast.classList.remove('show');
    });
  }

  /* ── 8. Pagination ───────────────────────────────────────── */
  document.querySelectorAll('.pag-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

})();
```
