# BordUp Operations Sidebar — Component Code

File ini berisi kode komponen bersih (clean isolated code) yang **HANYA** berkaitan dengan **BordUp Collapsible Rail Operations Sidebar & Topbar**, termasuk logic collapse/expand (260px ↔ 76px), tooltip saat mode rail, dan taxonomy badge departemen. Anda dapat menyalin kode ini langsung ke template dashboard HR / Enterprise ERP Anda.

---

## 1. HTML Markup

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BordUp™ — HR & Workforce Operations Dashboard</title>
  <meta name="description" content="Enterprise B2B HR, workforce management, and operational management suite. Manage employees, schedules, payroll, and recruitment in one unified platform.">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Mobile overlay -->
<div class="mobile-overlay" id="mobile-overlay" aria-hidden="true"></div>

<!-- ══════════════════════════════════════════════════════════
     APP SHELL
     ══════════════════════════════════════════════════════════ -->
<div class="app-shell">

  <!-- ── SIDEBAR ────────────────────────────────────────────── -->
  <aside class="sidebar" id="sidebar" role="navigation" aria-label="Main sidebar">

    <!-- Header: Brand + Toggle -->
    <div class="sidebar-header">
      <a href="#" class="brand-group" aria-label="BordUp home">
        <div class="brand-icon" aria-hidden="true">
          <!-- BordUp B logo mark -->
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
        <!-- Collapse left arrows -->
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M9 3L5 7l4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Company Workspace Card -->
    <div class="workspace-card" id="workspace-card" tabindex="0" role="button" aria-label="Switch workspace — Rocks Company">
      <div class="workspace-avatar" aria-hidden="true">R</div>
      <div class="workspace-info">
        <div class="workspace-name">Rocks Company</div>
        <div class="workspace-sub">Team · 20 Members</div>
      </div>
      <div class="workspace-chevron" aria-hidden="true">⌃</div>
      <div class="nav-item-tooltip">Rocks Company</div>
    </div>

    <!-- Nav -->
    <nav class="sidebar-nav" aria-label="Sidebar navigation">

      <!-- MAIN MENU -->
      <div class="nav-section">
        <div class="nav-section-title">Main Menu</div>

        <a href="#" class="nav-item active" data-nav="dashboard" aria-label="Dashboard" aria-current="page">
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

      <!-- DEPARTMENT -->
      <div class="nav-section">
        <div class="nav-section-title">
          Department
          <button class="nav-section-add" aria-label="Add department" style="background:none;border:none;cursor:pointer;color:var(--gray-400);font-size:16px;margin-left:4px;">+</button>
        </div>

        <div class="dept-item" data-dept="marketing" tabindex="0" role="button" aria-label="Business and Marketing department">
          <div class="dept-dot" style="background: var(--dept-marketing);" aria-hidden="true"></div>
          <span class="dept-label">Business and Marketing</span>
          <div class="nav-item-tooltip">Marketing</div>
        </div>

        <div class="dept-item" data-dept="design" tabindex="0" role="button" aria-label="Design department">
          <div class="dept-dot" style="background: var(--dept-design);" aria-hidden="true"></div>
          <span class="dept-label">Design</span>
          <div class="nav-item-tooltip">Design</div>
        </div>

        <div class="dept-item" data-dept="pm" tabindex="0" role="button" aria-label="Project Manager department">
          <div class="dept-dot" style="background: var(--dept-pm);" aria-hidden="true"></div>
          <span class="dept-label">Project Manager</span>
          <div class="nav-item-tooltip">Project Manager</div>
        </div>

        <div class="dept-item" data-dept="hr" tabindex="0" role="button" aria-label="Human Resource department">
          <div class="dept-dot" style="background: var(--dept-hr);" aria-hidden="true"></div>
          <span class="dept-label">Human Resource</span>
          <div class="nav-item-tooltip">Human Resource</div>
        </div>

        <div class="dept-item" data-dept="dev" tabindex="0" role="button" aria-label="Development department">
          <div class="dept-dot" style="background: var(--dept-dev);" aria-hidden="true"></div>
          <span class="dept-label">Development</span>
          <div class="nav-item-tooltip">Development</div>
        </div>
      </div>

      <div class="sidebar-divider"></div>

      <!-- OTHER -->
      <div class="nav-section">
        <div class="nav-section-title">Other</div>

        <a href="#" class="nav-item" data-nav="settings" aria-label="Setting">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 2v1M8 13v1M2 8h1M13 8h1M3.64 3.64l.71.71M11.65 11.65l.7.7M12.36 3.64l-.71.71M4.35 11.65l-.7.7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
          </span>
          <span class="nav-label">Setting</span>
          <div class="nav-item-tooltip">Setting</div>
        </a>

        <a href="#" class="nav-item" data-nav="help" aria-label="Help Center">
          <span class="nav-icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="currentColor" stroke-width="1.5"/><path d="M6 6a2 2 0 1 1 2.5 1.9c-.5.1-.5.6-.5 1.1" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="8" cy="11.5" r="0.75" fill="currentColor"/></svg>
          </span>
          <span class="nav-label">Help Center</span>
          <div class="nav-item-tooltip">Help Center</div>
        </a>
      </div>
    </nav>
  </aside>

  <!-- ── MAIN AREA ──────────────────────────────────────────── -->
  <div class="main-area">

    <!-- Mobile topbar -->
    <div class="mobile-topbar" role="banner">
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open sidebar" aria-expanded="false" aria-controls="sidebar">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
        </svg>
      </button>
      <span class="mobile-topbar-title">BordUp™</span>
    </div>

  </div>

</div><!-- /.app-shell -->


<script src="script.js"></script>
</body>
</html>
```

---

## 2. CSS Styling

```css
/* =============================================================
   BORDUP OPERATIONS SIDEBAR — style.css
   Enterprise B2B HR & Workforce Management Suite
   Collapsible Rail Navigation
   ============================================================= */

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');

/* ── Design Tokens ─────────────────────────────────────────── */
:root {
  --font-sans: 'Plus Jakarta Sans', Inter, -apple-system, sans-serif;

  /* Brand Colors */
  --brand-50:   #EEF2FF;
  --brand-100:  #E0E7FF;
  --brand-200:  #C7D2FE;
  --brand-500:  #6366F1;
  --brand-600:  #4F46E5;
  --brand-700:  #4338CA;

  /* Neutral */
  --white:      #FFFFFF;
  --gray-25:    #FCFCFD;
  --gray-50:    #F9FAFB;
  --gray-100:   #F3F4F6;
  --gray-150:   #EBEBEF;
  --gray-200:   #E5E7EB;
  --gray-300:   #D1D5DB;
  --gray-400:   #9CA3AF;
  --gray-500:   #6B7280;
  --gray-600:   #4B5563;
  --gray-700:   #374151;
  --gray-800:   #1F2937;
  --gray-900:   #111827;

  /* Department colors */
  --dept-marketing:  #3B82F6;
  --dept-design:     #10B981;
  --dept-pm:         #F59E0B;
  --dept-hr:         #8B5CF6;
  --dept-dev:        #6366F1;

  /* Status */
  --success-100: #D1FAE5;
  --success-500: #10B981;
  --success-600: #059669;
  --danger-100:  #FEE2E2;
  --danger-500:  #EF4444;
  --danger-600:  #DC2626;
  --warning-100: #FEF3C7;
  --warning-500: #F59E0B;

  /* Layout */
  --sidebar-expanded:  260px;
  --sidebar-collapsed: 76px;
  --content-gap:  24px;

  /* Surfaces */
  --bg-page:    var(--gray-50);
  --bg-sidebar: var(--white);
  --bg-card:    var(--white);

  /* Shadows */
  --shadow-xs: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 8px -2px rgba(0,0,0,0.08), 0 2px 4px -2px rgba(0,0,0,0.04);
  --shadow-lg: 0 12px 16px -4px rgba(0,0,0,0.06), 0 4px 6px -2px rgba(0,0,0,0.03);

  /* Radius */
  --radius-sm:  6px;
  --radius-md:  10px;
  --radius-lg:  14px;
  --radius-xl:  20px;
  --radius-pill: 9999px;

  /* Transitions */
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --dur-fast: 140ms;
  --dur-med:  280ms;
  --dur-slow: 450ms;
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
   SIDEBAR
   ═══════════════════════════════════════════════════════════ */
.sidebar {
  width: var(--sidebar-expanded);
  height: 100%;
  background: var(--bg-sidebar);
  border-right: 1px solid var(--gray-200);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  overflow: hidden;
  position: relative;
  z-index: 100;
  transition: width var(--dur-slow) var(--ease-out);
}

.sidebar.collapsed { width: var(--sidebar-collapsed); }

/* Brand Row */
.sidebar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 16px 14px;
  border-bottom: 1px solid var(--gray-100);
  flex-shrink: 0;
  overflow: hidden;
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  overflow: hidden;
}

.brand-icon {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: linear-gradient(135deg, var(--brand-500) 0%, #8B5CF6 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(99,102,241,0.35);
}

.brand-info {
  overflow: hidden;
  transition: opacity var(--dur-med) ease, width var(--dur-slow) var(--ease-out);
}

.sidebar.collapsed .brand-info { opacity: 0; width: 0; pointer-events: none; }

.brand-name {
  font-size: 15px;
  font-weight: 800;
  color: var(--gray-900);
  letter-spacing: -0.02em;
  white-space: nowrap;
}

.brand-tm {
  font-size: 9px;
  font-weight: 600;
  vertical-align: super;
}

/* Collapse Toggle Button */
.sidebar-toggle-btn {
  width: 28px;
  height: 28px;
  border-radius: var(--radius-sm);
  background: var(--gray-100);
  border: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--gray-500);
  flex-shrink: 0;
  transition: background var(--dur-fast) ease, color var(--dur-fast) ease, transform var(--dur-slow) var(--ease-out);
}

.sidebar-toggle-btn:hover { background: var(--gray-200); color: var(--gray-700); }
.sidebar.collapsed .sidebar-toggle-btn { transform: rotate(180deg); }

/* Company Workspace Card */
.workspace-card {
  margin: 10px 10px 6px;
  padding: 10px;
  background: var(--gray-50);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: background var(--dur-fast) ease;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.workspace-card:hover { background: var(--gray-100); }

.workspace-avatar {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 800;
  color: white;
  flex-shrink: 0;
  background: linear-gradient(135deg, var(--brand-500), #8B5CF6);
}

.workspace-info {
  flex: 1;
  overflow: hidden;
  transition: opacity var(--dur-med) ease;
  min-width: 0;
}

.sidebar.collapsed .workspace-info { opacity: 0; pointer-events: none; }

.workspace-name {
  font-size: 13px;
  font-weight: 700;
  color: var(--gray-800);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.workspace-sub {
  font-size: 11.5px;
  color: var(--gray-400);
  white-space: nowrap;
}

.workspace-chevron {
  color: var(--gray-400);
  font-size: 12px;
  flex-shrink: 0;
  transition: opacity var(--dur-med) ease;
}

.sidebar.collapsed .workspace-chevron { opacity: 0; pointer-events: none; }

/* ── Sidebar Nav ───────────────────────────────────────────── */
.sidebar-nav {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  padding: 6px 8px;
  scrollbar-width: thin;
  scrollbar-color: var(--gray-200) transparent;
}

.sidebar-nav::-webkit-scrollbar { width: 3px; }
.sidebar-nav::-webkit-scrollbar-thumb { background: var(--gray-200); border-radius: 99px; }

.nav-section {
  margin-bottom: 4px;
}

.nav-section-title {
  padding: 10px 8px 4px;
  font-size: 10.5px;
  font-weight: 700;
  color: var(--gray-400);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  transition: opacity var(--dur-med) ease;
}

.sidebar.collapsed .nav-section-title { opacity: 0; }

.nav-section-add {
  display: flex;
  align-items: center;
  gap: 4px;
  float: right;
}

/* Nav Item */
.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 10px;
  border-radius: var(--radius-md);
  color: var(--gray-600);
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  transition: background var(--dur-fast) ease, color var(--dur-fast) ease;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

.nav-item:hover {
  background: var(--gray-100);
  color: var(--gray-900);
}

.nav-item.active {
  background: var(--brand-50);
  color: var(--brand-700);
}

.nav-item.active .nav-icon { color: var(--brand-600); }

.nav-icon {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--gray-500);
  transition: color var(--dur-fast) ease;
}

.nav-item:hover .nav-icon { color: var(--gray-700); }

.nav-label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: opacity var(--dur-med) ease;
}

.sidebar.collapsed .nav-label { opacity: 0; pointer-events: none; width: 0; }

/* Department Items */
.dept-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 10px;
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: background var(--dur-fast) ease;
  overflow: hidden;
}

.dept-item:hover { background: var(--gray-100); }

.dept-dot {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  flex-shrink: 0;
  transition: transform var(--dur-fast) ease;
}

.dept-item:hover .dept-dot { transform: scale(1.2); }

.dept-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--gray-600);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: opacity var(--dur-med) ease;
}

.sidebar.collapsed .dept-label { opacity: 0; width: 0; }

/* Sidebar Divider */
.sidebar-divider {
  height: 1px;
  background: var(--gray-100);
  margin: 8px 10px;
}

/* ── Tooltip on Collapsed Rail ─────────────────────────────── */
.sidebar.collapsed .nav-item,
.sidebar.collapsed .dept-item {
  position: relative;
}

.nav-item-tooltip {
  position: absolute;
  left: calc(var(--sidebar-collapsed) + 8px);
  top: 50%;
  transform: translateY(-50%);
  background: var(--gray-900);
  color: var(--white);
  font-size: 12px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: var(--radius-sm);
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  z-index: 1000;
  transition: opacity var(--dur-fast) ease;
  box-shadow: var(--shadow-md);
}

.nav-item-tooltip::before {
  content: '';
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 5px solid transparent;
  border-right-color: var(--gray-900);
}

.sidebar.collapsed .nav-item:hover .nav-item-tooltip,
.sidebar.collapsed .dept-item:hover .nav-item-tooltip {
  opacity: 1;
}

/* ═══════════════════════════════════════════════════════════
   MAIN CONTENT
   ═══════════════════════════════════════════════════════════ */
.main-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 0;
}

/* ── Content Area ──────────────────────────────────────────── */
.content {
  flex: 1;
  overflow-y: auto;
  padding: var(--content-gap);
  scrollbar-width: thin;
  scrollbar-color: var(--gray-200) transparent;
}

/* ── Cards ─────────────────────────────────────────────────── */
.card {
  background: var(--bg-card);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xs);
  overflow: hidden;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--gray-100);
}

.card-title {
  font-size: 14px;
  font-weight: 700;
  color: var(--gray-800);
  letter-spacing: -0.01em;
}

.card-action {
  font-size: 12.5px;
  font-weight: 600;
  color: var(--brand-600);
  text-decoration: none;
  cursor: pointer;
  transition: color var(--dur-fast) ease;
}

.card-action:hover { color: var(--brand-700); }

/* ── Dashboard Grid Layout ─────────────────────────────────── */
.dash-title {
  font-size: 20px;
  font-weight: 800;
  color: var(--gray-900);
  letter-spacing: -0.02em;
  margin-bottom: 4px;
}

.dash-sub {
  font-size: 13px;
  color: var(--gray-400);
  margin-bottom: 20px;
}

.dash-grid-top {
  display: grid;
  grid-template-columns: 1fr 1fr 320px;
  gap: var(--content-gap);
  margin-bottom: var(--content-gap);
}

.dash-grid-mid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--content-gap);
  margin-bottom: var(--content-gap);
}

/* Payment Card */
.payment-card { padding: 0; grid-column: 1 / -1; }

.payment-info {
  display: flex;
  gap: 40px;
  padding: 16px 20px;
  align-items: center;
}

.payment-field-label {
  font-size: 11px;
  color: var(--gray-400);
  font-weight: 500;
  margin-bottom: 3px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.payment-field-value {
  font-size: 14px;
  font-weight: 700;
  color: var(--gray-800);
  display: flex;
  align-items: center;
  gap: 6px;
}

.payment-method-logo {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  background: #1a1f71;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 900;
  color: #fff;
  letter-spacing: 0.05em;
}

/* What's On calendar card */
.whats-on-body { padding: 0; }

.whats-on-tabs {
  display: flex;
  border-bottom: 1px solid var(--gray-100);
}

.wo-tab {
  flex: 1;
  padding: 12px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  color: var(--gray-400);
  cursor: pointer;
  transition: all var(--dur-fast) ease;
  border-bottom: 2px solid transparent;
  background: none;
  border-top: none;
  border-left: none;
  border-right: none;
  font-family: var(--font-sans);
}

.wo-tab.active {
  color: var(--brand-600);
  border-bottom-color: var(--brand-600);
}

.wo-tab:hover { color: var(--gray-600); }

.wo-entries { padding: 8px 16px; }

.wo-entry {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid var(--gray-50);
}

.wo-entry:last-child { border-bottom: none; }

.wo-entry-avatar {
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

.wo-entry-info { flex: 1; min-width: 0; }

.wo-entry-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--gray-800);
}

.wo-entry-detail {
  font-size: 12px;
  color: var(--gray-400);
  margin-top: 1px;
}

/* Schedule timeline card */
.schedule-body { padding: 16px 20px; }

.schedule-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.schedule-date-pill {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 10px;
  background: var(--gray-100);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-pill);
  font-size: 12px;
  font-weight: 600;
  color: var(--gray-600);
  cursor: pointer;
}

.add-task-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  background: var(--brand-600);
  color: white;
  border: none;
  border-radius: var(--radius-sm);
  font-family: var(--font-sans);
  font-size: 12.5px;
  font-weight: 600;
  cursor: pointer;
  transition: background var(--dur-fast) ease;
}

.add-task-btn:hover { background: var(--brand-700); }

/* Timeline */
.timeline {
  position: relative;
  height: 80px;
  background: var(--gray-50);
  border-radius: var(--radius-sm);
  overflow: hidden;
}

.timeline-hours {
  position: absolute;
  top: 6px;
  left: 0;
  right: 0;
  display: flex;
  padding: 0 12px;
  gap: 0;
}

.timeline-hour {
  flex: 1;
  font-size: 10px;
  color: var(--gray-400);
  font-weight: 500;
  text-align: center;
}

.timeline-events {
  position: absolute;
  top: 22px;
  left: 12px;
  right: 12px;
  display: flex;
  gap: 4px;
  align-items: stretch;
  height: 44px;
}

.timeline-event {
  border-radius: 6px;
  padding: 5px 8px;
  font-size: 10.5px;
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: flex;
  align-items: center;
}

.timeline-now-indicator {
  position: absolute;
  top: 18px;
  bottom: 0;
  width: 2px;
  background: var(--brand-600);
  border-radius: 99px;
  left: 42%;
}

.timeline-now-indicator::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -4px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--brand-600);
  box-shadow: 0 0 8px rgba(99,102,241,0.6);
}

/* Employee table */
.emp-table { width: 100%; border-collapse: collapse; }

.emp-table th {
  padding: 10px 16px;
  font-size: 11.5px;
  font-weight: 600;
  color: var(--gray-400);
  text-align: left;
  border-bottom: 1px solid var(--gray-100);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.emp-table td {
  padding: 12px 16px;
  font-size: 13.5px;
  color: var(--gray-700);
  border-bottom: 1px solid var(--gray-50);
  vertical-align: middle;
}

.emp-table tr:last-child td { border-bottom: none; }
.emp-table tr:hover td { background: var(--gray-25); }

.emp-cell {
  display: flex;
  align-items: center;
  gap: 10px;
}

.emp-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
}

.emp-name { font-weight: 600; color: var(--gray-800); font-size: 13.5px; }
.emp-email { font-size: 12px; color: var(--gray-400); }

.dept-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px;
  border-radius: var(--radius-pill);
  font-size: 12px;
  font-weight: 600;
}

.dept-badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

/* Work hours chart */
.hours-chart-wrapper { padding: 16px 20px; }

.hours-big {
  font-size: 28px;
  font-weight: 800;
  color: var(--gray-900);
  letter-spacing: -0.03em;
  margin-bottom: 14px;
}

.hours-big span { font-size: 18px; }

.chart-bars {
  display: flex;
  align-items: flex-end;
  gap: 6px;
  height: 80px;
}

.chart-col {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.chart-bar-stack {
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  align-items: center;
  height: 68px;
  justify-content: flex-end;
}

.chart-bar {
  width: 100%;
  border-radius: 3px 3px 0 0;
  max-width: 28px;
  min-height: 4px;
}

.chart-bar.work { background: var(--brand-500); }
.chart-bar.overtime { background: var(--warning-100); }

.chart-date {
  font-size: 10px;
  color: var(--gray-400);
  font-weight: 500;
}

/* Leave action cards */
.leave-card {
  background: var(--bg-card);
  border: 1px solid var(--gray-200);
  border-radius: var(--radius-lg);
  padding: 16px;
  box-shadow: var(--shadow-xs);
}

.leave-emp {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.leave-emp-info .emp-name { font-size: 13px; }
.leave-emp-info .emp-email { font-size: 12px; }

.leave-badge {
  display: inline-flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: var(--radius-pill);
  font-size: 11.5px;
  font-weight: 700;
}

.leave-badge-sick { background: var(--danger-100); color: var(--danger-600); }
.leave-badge-annual { background: var(--brand-50); color: var(--brand-700); }
.leave-badge-pending { background: var(--warning-100); color: #92400E; }

.leave-detail { font-size: 12.5px; color: var(--gray-500); margin-bottom: 4px; }
.leave-detail strong { color: var(--gray-700); }

.leave-actions {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.btn-approve, .btn-reject {
  flex: 1;
  padding: 7px;
  border-radius: var(--radius-sm);
  font-size: 12.5px;
  font-weight: 600;
  font-family: var(--font-sans);
  cursor: pointer;
  border: 1.5px solid;
  transition: all var(--dur-fast) ease;
}

.btn-approve {
  background: var(--success-100);
  border-color: var(--success-500);
  color: var(--success-600);
}

.btn-approve:hover {
  background: var(--success-500);
  color: white;
}

.btn-reject {
  background: var(--danger-100);
  border-color: var(--danger-500);
  color: var(--danger-600);
}

.btn-reject:hover {
  background: var(--danger-500);
  color: white;
}

/* ── Mobile Overlay ────────────────────────────────────────── */
.mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.45);
  z-index: 90;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--dur-med) ease;
}

.mobile-overlay.open { opacity: 1; pointer-events: auto; }

/* Mobile topbar */
.mobile-topbar {
  display: none;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  background: var(--white);
  border-bottom: 1px solid var(--gray-200);
  flex-shrink: 0;
}

.mobile-menu-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--gray-500);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-md);
  transition: background var(--dur-fast) ease;
}

.mobile-menu-btn:hover { background: var(--gray-100); }

.mobile-topbar-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--gray-800);
}

/* ── Toast ─────────────────────────────────────────────────── */
.bordup-toast {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: var(--gray-900);
  color: white;
  border-radius: var(--radius-lg);
  padding: 12px 18px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: var(--shadow-lg);
  z-index: 2000;
  opacity: 0;
  transform: translateY(8px);
  pointer-events: none;
  transition: opacity var(--dur-med) ease, transform var(--dur-med) var(--ease-out);
  max-width: 320px;
}

.bordup-toast.show {
  opacity: 1;
  transform: translateY(0);
}

/* ═══════════════════════════════════════════════════════════
   RESPONSIVE
   ═══════════════════════════════════════════════════════════ */
@media (max-width: 1200px) {
  .dash-grid-top { grid-template-columns: 1fr 1fr; }
  .payment-card { grid-column: 1 / -1; }
}

@media (max-width: 1024px) {
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    transform: translateX(-100%);
    z-index: 100;
    box-shadow: var(--shadow-lg);
    transition: transform var(--dur-slow) var(--ease-out), width var(--dur-slow) var(--ease-out);
  }

  .sidebar.mobile-open {
    transform: translateX(0);
    width: var(--sidebar-expanded) !important;
  }

  .mobile-overlay { display: block; }
  .mobile-topbar { display: flex; }

  .dash-grid-top { grid-template-columns: 1fr; }
  .dash-grid-mid { grid-template-columns: 1fr; }
}

@media (max-width: 640px) {
  .content { padding: 16px; }
  .payment-info { flex-direction: column; gap: 16px; align-items: flex-start; }
}

@media (max-width: 480px) {
  .content { padding: 12px; }
  .dash-title { font-size: 18px; }
  .card-header { padding: 12px 14px; }
  .mobile-topbar { padding: 10px 14px; }
  .mobile-topbar-title { font-size: 14px; }
}
```

---

## 3. JavaScript Logic

```javascript
/* =============================================================
   BORDUP OPERATIONS SIDEBAR — script.js
   Sidebar collapse, active nav, mobile drawer, tooltips, toasts
   ============================================================= */
(function () {
  'use strict';

  /* ── DOM refs ──────────────────────────────────────────────── */
  const sidebar       = document.getElementById('sidebar');
  const toggleBtn     = document.getElementById('sidebar-toggle-btn');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const toast         = document.getElementById('bordup-toast');
  const woTabs        = document.querySelectorAll('.wo-tab[data-tab]');

  /* ── 1. Sidebar Collapse / Expand ────────────────────────── */
  let collapsed = false;

  function toggleSidebar () {
    collapsed = !collapsed;
    if (collapsed) {
      sidebar.classList.add('collapsed');
      toggleBtn.setAttribute('aria-label', 'Expand sidebar');
      localStorage.setItem('bordup-sidebar-collapsed', '1');
    } else {
      sidebar.classList.remove('collapsed');
      toggleBtn.setAttribute('aria-label', 'Collapse sidebar');
      localStorage.removeItem('bordup-sidebar-collapsed');
    }
  }

  // Restore state on load
  if (localStorage.getItem('bordup-sidebar-collapsed')) {
    collapsed = true;
    sidebar.classList.add('collapsed');
  }

  toggleBtn.addEventListener('click', toggleSidebar);

  /* ── 2. Active Nav Item ───────────────────────────────────── */
  document.querySelectorAll('.nav-item[data-nav]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      if (window.innerWidth <= 1024) {
        closeMobileSidebar();
      }
    });
  });

  document.querySelectorAll('.dept-item').forEach(item => {
    item.addEventListener('click', () => {
      const dept = item.querySelector('.dept-label');
      if (dept) showToast(`Switched to ${dept.textContent.trim()} department`);
    });
  });

  /* ── 3. Mobile Drawer ────────────────────────────────────── */
  function openMobileSidebar () {
    sidebar.classList.add('mobile-open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileSidebar () {
    sidebar.classList.remove('mobile-open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }

  mobileMenuBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('mobile-open')) closeMobileSidebar();
    else openMobileSidebar();
  });

  mobileOverlay.addEventListener('click', closeMobileSidebar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileSidebar();
  });

  /* ── 4. What's On Tabs ───────────────────────────────────── */
  const woContents = document.querySelectorAll('.wo-content[data-tab]');
  woTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      woTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      woContents.forEach(c => {
        c.style.display = c.dataset.tab === tabId ? 'block' : 'none';
      });
    });
  });

  /* ── 5. Leave Actions ────────────────────────────────────── */
  document.querySelectorAll('.btn-approve').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.leave-card');
      const name = card?.querySelector('.emp-name')?.textContent?.trim() || 'Employee';
      showToast(`✅ Leave approved for ${name}`);
      btn.textContent = 'Approved';
      btn.disabled = true;
      btn.style.opacity = '0.6';
      card.querySelector('.btn-reject').disabled = true;
      card.querySelector('.btn-reject').style.opacity = '0.4';
    });
  });

  document.querySelectorAll('.btn-reject').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.leave-card');
      const name = card?.querySelector('.emp-name')?.textContent?.trim() || 'Employee';
      showToast(`❌ Leave rejected for ${name}`);
      btn.textContent = 'Rejected';
      btn.disabled = true;
      btn.style.opacity = '0.6';
      card.querySelector('.btn-approve').disabled = true;
      card.querySelector('.btn-approve').style.opacity = '0.4';
    });
  });

  /* ── 6. Toast ────────────────────────────────────────────── */
  let toastTimer = null;

  function showToast (msg) {
    if (!toast) return;
    clearTimeout(toastTimer);
    const msgEl = toast.querySelector('.bordup-toast-msg');
    if (msgEl) msgEl.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  /* ── 7. Add Task button ──────────────────────────────────── */
  const addTaskBtn = document.getElementById('add-task-btn');
  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => showToast('📋 New task added to schedule'));
  }

  /* ── 8. Workspace card ───────────────────────────────────── */
  const workspaceCard = document.getElementById('workspace-card');
  if (workspaceCard) {
    workspaceCard.addEventListener('click', () => showToast('🔄 Switch workspace'));
  }

})();
```
