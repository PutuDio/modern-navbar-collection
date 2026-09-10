# BordUp Operations Sidebar — Component Code

File ini berisi kode komponen bersih (clean isolated code) yang **HANYA** berkaitan dengan **BordUp Collapsible Rail Operations Sidebar & Topbar**, termasuk logic collapse/expand (260px ↔ 76px), tooltip saat mode rail, dan taxonomy badge departemen. Anda dapat menyalin kode ini langsung ke template dashboard HR / Enterprise ERP Anda.

---

## 1. HTML Markup

```html
<!-- ================================================================
     BORDUP OPERATIONS COLLAPSIBLE SIDEBAR & TOPBAR
     ================================================================ -->

<!-- Mobile overlay -->
<div class="mobile-overlay" id="mobile-overlay" aria-hidden="true"></div>

<div class="app-shell">
  <!-- SIDEBAR (Collapsible Rail) -->
  <aside class="sidebar" id="sidebar" role="navigation" aria-label="Main sidebar">

    <!-- Header: Brand + Toggle -->
    <div class="sidebar-header">
      <a href="#" class="brand-group" aria-label="BordUp home">
        <div class="brand-icon" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <rect x="3" y="3" width="5" height="5" rx="1.5" fill="white" opacity="0.9"/>
            <rect x="3" y="10" width="5" height="5" rx="1.5" fill="white" opacity="0.7"/>
            <rect x="10" y="3" width="5" height="7" rx="1.5" fill="white" opacity="0.5"/>
            <rect x="10" y="12" width="5" height="3" rx="1.5" fill="white" opacity="0.7"/>
          </svg>
        </div>
        <div class="brand-info">
          <div class="brand-name">BordUp<span class="brand-tm">™</span></div>
        </div>
      </a>
      <button class="sidebar-toggle-btn" id="sidebar-toggle-btn" aria-label="Collapse sidebar" aria-expanded="true" aria-controls="sidebar">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M9 3L5 7l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Company Workspace Selector -->
    <div class="workspace-card" id="workspace-card" tabindex="0" role="button" aria-label="Switch workspace — Rocks Company">
      <div class="workspace-avatar" aria-hidden="true">R</div>
      <div class="workspace-info">
        <div class="workspace-name">Rocks Company</div>
        <div class="workspace-sub">Team · 20 Members</div>
      </div>
      <div class="workspace-chevron" aria-hidden="true">⌃</div>
      <div class="nav-item-tooltip">Rocks Company</div>
    </div>

    <!-- Navigation Menu -->
    <nav class="sidebar-nav" aria-label="Sidebar navigation">
      <div class="nav-section">
        <div class="nav-section-title">Main Menu</div>

        <a href="#" class="nav-item active" data-nav="dashboard" aria-label="Dashboard">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="1.5" width="5.5" height="5.5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="1.5" width="5.5" height="5.5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="1.5" y="9" width="5.5" height="5.5" rx="1.5" stroke="currentColor" stroke-width="1.5"/><rect x="9" y="9" width="5.5" height="5.5" rx="1.5" stroke="currentColor" stroke-width="1.5"/></svg>
          </span>
          <span class="nav-label">Dashboard</span>
          <div class="nav-item-tooltip">Dashboard</div>
        </a>

        <a href="#" class="nav-item" data-nav="employee" aria-label="Employee">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5.5" r="3" stroke="currentColor" stroke-width="1.5"/><path d="M2 13.5c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">Employee</span>
          <div class="nav-item-tooltip">Employee</div>
        </a>

        <a href="#" class="nav-item" data-nav="recruitment" aria-label="Recruitment">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2v12M4 6l4-4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M3 14h10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">Recruitment</span>
          <div class="nav-item-tooltip">Recruitment</div>
        </a>

        <a href="#" class="nav-item" data-nav="payroll" aria-label="Payroll">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M2 6.5h12" stroke="currentColor" stroke-width="1.5"/><circle cx="6" cy="9.5" r="1" fill="currentColor"/></svg>
          </span>
          <span class="nav-label">Payroll</span>
          <div class="nav-item-tooltip">Payroll</div>
        </a>

        <a href="#" class="nav-item" data-nav="schedule" aria-label="Schedule">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="11" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M2 7h12M5.5 2v2M10.5 2v2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">Schedule</span>
          <div class="nav-item-tooltip">Schedule</div>
        </a>
      </div>

      <div class="sidebar-divider"></div>

      <!-- Department Color Taxonomy -->
      <div class="nav-section">
        <div class="nav-section-title">Department</div>
        <div class="dept-item" data-dept="marketing" tabindex="0" role="button">
          <div class="dept-dot" style="background:#12b886;" aria-hidden="true"></div>
          <span class="dept-label">Business & Marketing</span>
          <div class="nav-item-tooltip">Marketing</div>
        </div>
        <div class="dept-item" data-dept="design" tabindex="0" role="button">
          <div class="dept-dot" style="background:#845ef7;" aria-hidden="true"></div>
          <span class="dept-label">Design</span>
          <div class="nav-item-tooltip">Design</div>
        </div>
        <div class="dept-item" data-dept="pm" tabindex="0" role="button">
          <div class="dept-dot" style="background:#4c6ef5;" aria-hidden="true"></div>
          <span class="dept-label">Project Manager</span>
          <div class="nav-item-tooltip">Project Manager</div>
        </div>
      </div>
    </nav>
  </aside>

  <!-- Main Topbar -->
  <div class="main-content">
    <header class="topbar">
      <button class="mobile-toggle-btn" id="mobile-toggle-btn" aria-label="Open sidebar">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
      </button>
      <div class="topbar-title">Operations Dashboard</div>
    </header>
  </div>
</div>
```

---

## 2. CSS Styling

```css
:root {
  --sidebar-width-expanded: 260px;
  --sidebar-width-collapsed: 76px;
  --header-height: 68px;
  --color-sidebar-bg: #ffffff;
  --color-sidebar-border: #e9ecef;
  --color-primary: #3b5bdb;
  --color-primary-light: #e8ecfc;
  --color-text-main: #1e293b;
  --color-text-muted: #64748b;
  --ease-spring: cubic-bezier(0.34, 1.3, 0.64, 1);
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

/* Sidebar Shell */
.sidebar {
  width: var(--sidebar-width-expanded);
  background: var(--color-sidebar-bg);
  border-right: 1px solid var(--color-sidebar-border);
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  transition: width 0.28s var(--ease-spring);
  overflow: hidden;
}

/* Collapsed Rail Mode */
.sidebar.collapsed {
  width: var(--sidebar-width-collapsed);
}

.sidebar.collapsed .brand-info,
.sidebar.collapsed .workspace-info,
.sidebar.collapsed .workspace-chevron,
.sidebar.collapsed .nav-label,
.sidebar.collapsed .dept-label,
.sidebar.collapsed .nav-section-title {
  display: none;
}

.sidebar.collapsed .sidebar-toggle-btn svg {
  transform: rotate(180deg);
}

.sidebar.collapsed .nav-item,
.sidebar.collapsed .dept-item {
  justify-content: center;
  padding: 10px 0;
}

.sidebar.collapsed .workspace-card {
  padding: 8px 0;
  justify-content: center;
}

/* Hover Tooltip in Rail Mode */
.nav-item-tooltip {
  display: none;
  position: absolute;
  left: calc(var(--sidebar-width-collapsed) + 8px);
  background: #1e293b;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 5px 10px;
  border-radius: 6px;
  white-space: nowrap;
  pointer-events: none;
  z-index: 500;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.sidebar.collapsed .nav-item:hover .nav-item-tooltip,
.sidebar.collapsed .dept-item:hover .nav-item-tooltip,
.sidebar.collapsed .workspace-card:hover .nav-item-tooltip {
  display: block;
}

/* Header */
.sidebar-header {
  height: var(--header-height);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border-bottom: 1px solid var(--color-sidebar-border);
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
}

.brand-icon {
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-name {
  font-size: 16px;
  font-weight: 700;
  color: var(--color-text-main);
}

.brand-tm {
  font-size: 10px;
  color: #2563eb;
  margin-left: 2px;
}

.sidebar-toggle-btn {
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--color-text-muted);
}

/* Workspace Card */
.workspace-card {
  margin: 12px 14px;
  padding: 8px 10px;
  border-radius: 8px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  position: relative;
}

.workspace-avatar {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  background: #6366f1;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
}

.workspace-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--color-text-main);
}

.workspace-sub {
  font-size: 11px;
  color: var(--color-text-muted);
}

.workspace-chevron {
  margin-left: auto;
  font-size: 12px;
  color: var(--color-text-muted);
}

/* Nav links */
.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  padding: 8px 12px;
}

.nav-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--color-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 8px 8px 4px;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  color: var(--color-text-muted);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 2px;
  position: relative;
}

.nav-item:hover {
  background: #f8fafc;
  color: var(--color-text-main);
}

.nav-item.active {
  background: var(--color-primary-light);
  color: var(--color-primary);
  font-weight: 600;
}

.sidebar-divider {
  height: 1px;
  background: var(--color-sidebar-border);
  margin: 12px 0;
}

/* Dept Taxonomy */
.dept-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  font-size: 13px;
  color: var(--color-text-muted);
  cursor: pointer;
  position: relative;
}

.dept-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Main Content Area */
.main-content {
  margin-left: var(--sidebar-width-expanded);
  flex: 1;
  transition: margin-left 0.28s var(--ease-spring);
}

.sidebar.collapsed ~ .main-content {
  margin-left: var(--sidebar-width-collapsed);
}

.topbar {
  height: var(--header-height);
  background: #fff;
  border-bottom: 1px solid var(--color-sidebar-border);
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 16px;
}

.mobile-toggle-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

@media (max-width: 992px) {
  .sidebar {
    transform: translateX(-100%);
    width: var(--sidebar-width-expanded) !important;
  }
  .sidebar.open {
    transform: translateX(0);
  }
  .main-content {
    margin-left: 0 !important;
  }
  .mobile-toggle-btn {
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
  const toggleBtn = document.getElementById('sidebar-toggle-btn');
  const mobileBtn = document.getElementById('mobile-toggle-btn');
  const overlay = document.getElementById('mobile-overlay');

  if (!sidebar) return;

  // 1. Collapse / Expand Rail Toggle
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
      const isCollapsed = sidebar.classList.contains('collapsed');
      toggleBtn.setAttribute('aria-expanded', !isCollapsed);
      try {
        localStorage.setItem('bordup_sidebar_collapsed', isCollapsed ? '1' : '0');
      } catch (e) {}
    });

    // Restore state from localStorage
    try {
      if (localStorage.getItem('bordup_sidebar_collapsed') === '1') {
        sidebar.classList.add('collapsed');
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    } catch (e) {}
  }

  // 2. Mobile Off-Canvas Drawer
  function openMobile() {
    sidebar.classList.add('open');
    if (overlay) overlay.classList.add('show');
  }
  function closeMobile() {
    sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('show');
  }

  if (mobileBtn) mobileBtn.addEventListener('click', openMobile);
  if (overlay) overlay.addEventListener('click', closeMobile);
})();
```
