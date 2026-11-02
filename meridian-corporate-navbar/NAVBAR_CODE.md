# Meridian Corporate Navbar Code

This file contains only the code needed to implement the **Meridian Corporate & Enterprise Navigation System**. 
No hero sections or demo page contents are included.

---

## 1. Google Font Import
Add this to your HTML `<head>`:
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Meridian — Corporate & Enterprise Navigation | Modern Navbar Collection</title>
  <meta name="description" content="A human-crafted, premium corporate navigation system designed for modern enterprises, advisory firms, and global institutions. Features desktop mega-menus, dual light/dark themes, and accessible mobile drawer.">
  <meta name="keywords" content="corporate navbar, enterprise navigation, mega menu, company profile, accessible UI, vanilla CSS, light dark theme">
  <meta name="author" content="Modern Navbar Collection">

  <!-- Typography: Plus Jakarta Sans & Inter -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Stylesheet -->
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- ================================================================
       MERIDIAN CORPORATE HEADER & NAVIGATION
       ================================================================ -->
  <header class="meridian-header" id="meridian-header">

    <!-- Top Utility Bar (Formal Corporate Indicator) -->
    <div class="header-utility">
      <div class="utility-inner container">
        <div class="utility-left">
          <span class="utility-pill">GLOBAL OFFICES</span>
          <span class="utility-locations">London &bull; New York &bull; Zurich &bull; Singapore &bull; Tokyo</span>
        </div>
        <div class="utility-right">
          <a href="#investors" class="utility-link">Investor Relations</a>
          <span class="utility-sep" aria-hidden="true">&bull;</span>
          <a href="#careers" class="utility-link">
            Careers
            <span class="utility-badge">We're hiring</span>
          </a>
          <span class="utility-sep" aria-hidden="true">&bull;</span>
          <a href="#news" class="utility-link">Press &amp; Media</a>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <div class="header-main">
      <div class="header-inner container">

        <!-- Corporate Brand Logo -->
        <a href="#home" class="brand-logo" aria-label="Meridian Group — Home">
          <span class="logo-mark" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L2 8V20L14 26L26 20V8L14 2Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
              <path d="M14 2V26" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
              <path d="M2 8L14 14L26 8" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
              <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
            </svg>
          </span>
          <span class="logo-text">
            <span class="logo-name">MERIDIAN</span>
            <span class="logo-sub">ENTERPRISE ADVISORY</span>
          </span>
        </a>

        <!-- Desktop Navigation Menu -->
        <nav class="nav-desktop" aria-label="Primary Navigation">
          <ul class="nav-list" role="menubar">

            <!-- Item 1: Mega-Menu (Solutions) -->
            <li class="nav-item has-dropdown has-megamenu" role="none">
              <button type="button" 
                      class="nav-link dropdown-trigger" 
                      role="menuitem" 
                      aria-haspopup="true" 
                      aria-expanded="false" 
                      aria-controls="megamenu-solutions">
                <span>Solutions</span>
                <svg class="chevron-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <!-- Mega-Menu Container -->
              <div class="megamenu" id="megamenu-solutions" role="menu" aria-label="Solutions Menu">
                <div class="megamenu-inner">
                  
                  <!-- Column 1: Strategy & Advisory -->
                  <div class="megamenu-col">
                    <span class="megamenu-header">STRATEGY &amp; ADVISORY</span>
                    <ul class="megamenu-links">
                      <li>
                        <a href="#solutions" class="megamenu-item" role="menuitem">
                          <span class="menu-item-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                          </span>
                          <div class="menu-item-body">
                            <span class="menu-item-title">Enterprise Architecture</span>
                            <span class="menu-item-desc">Comprehensive digital and operating model redesign.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#solutions" class="megamenu-item" role="menuitem">
                          <span class="menu-item-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                          </span>
                          <div class="menu-item-body">
                            <span class="menu-item-title">Capital Advisory &amp; M&amp;A</span>
                            <span class="menu-item-desc">Due diligence, transaction structuring, and liquidity.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#solutions" class="megamenu-item" role="menuitem">
                          <span class="menu-item-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                          </span>
                          <div class="menu-item-body">
                            <span class="menu-item-title">Regulatory &amp; Compliance</span>
                            <span class="menu-item-desc">Global governance frameworks and risk resilience.</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- Column 2: Technology & Transformation -->
                  <div class="megamenu-col">
                    <span class="megamenu-header">TECHNOLOGY PLATFORMS</span>
                    <ul class="megamenu-links">
                      <li>
                        <a href="#solutions" class="megamenu-item" role="menuitem">
                          <span class="menu-item-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                          </span>
                          <div class="menu-item-body">
                            <span class="menu-item-title">Cloud Infrastructure</span>
                            <span class="menu-item-desc">High-reliability hybrid and multi-cloud ecosystems.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#solutions" class="megamenu-item" role="menuitem">
                          <span class="menu-item-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                          </span>
                          <div class="menu-item-body">
                            <span class="menu-item-title">Data Intelligence &amp; AI</span>
                            <span class="menu-item-desc">Executive decision telemetry and data mesh systems.</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#solutions" class="megamenu-item" role="menuitem">
                          <span class="menu-item-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                          </span>
                          <div class="menu-item-body">
                            <span class="menu-item-title">Cyber Defense &amp; Zero Trust</span>
                            <span class="menu-item-desc">Enterprise security postures for mission-critical assets.</span>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <!-- Column 3: Featured Case Study / Research Card -->
                  <div class="megamenu-featured">
                    <div class="featured-card">
                      <div class="featured-tag">2026 GLOBAL BENCHMARK</div>
                      <h4 class="featured-title">Enterprise Operating Model Trends</h4>
                      <p class="featured-summary">How Fortune 500 leadership navigates capital allocation and AI governance.</p>
                      <a href="#insights" class="featured-cta">
                        <span>Download Executive Summary</span>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </li>

            <!-- Item 2: Standard Dropdown (Company) -->
            <li class="nav-item has-dropdown" role="none">
              <button type="button" 
                      class="nav-link dropdown-trigger" 
                      role="menuitem" 
                      aria-haspopup="true" 
                      aria-expanded="false" 
                      aria-controls="dropdown-company">
                <span>Company</span>
                <svg class="chevron-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>

              <ul class="dropdown-menu" id="dropdown-company" role="menu" aria-label="Company Menu">
                <li role="none">
                  <a href="#about" class="dropdown-link" role="menuitem">
                    <span class="dropdown-title">About Meridian</span>
                    <span class="dropdown-desc">Our heritage, global board, and fiduciary philosophy.</span>
                  </a>
                </li>
                <li role="none">
                  <a href="#leadership" class="dropdown-link" role="menuitem">
                    <span class="dropdown-title">Executive Leadership</span>
                    <span class="dropdown-desc">Meet our managing partners and regional directors.</span>
                  </a>
                </li>
                <li role="none">
                  <a href="#careers" class="dropdown-link" role="menuitem">
                    <span class="dropdown-title">
                      Careers &amp; Culture
                      <span class="badge-hiring">Hiring</span>
                    </span>
                    <span class="dropdown-desc">Build your career among industry-leading advisors.</span>
                  </a>
                </li>
                <li role="none">
                  <a href="#esg" class="dropdown-link" role="menuitem">
                    <span class="dropdown-title">ESG &amp; Global Impact</span>
                    <span class="dropdown-desc">Sustainability commitments and governance principles.</span>
                  </a>
                </li>
              </ul>
            </li>

            <!-- Item 3: Direct Link (Case Studies) -->
            <li class="nav-item" role="none">
              <a href="#cases" class="nav-link" role="menuitem">Case Studies</a>
            </li>

            <!-- Item 4: Direct Link (Insights) -->
            <li class="nav-item" role="none">
              <a href="#insights" class="nav-link" role="menuitem">Insights &amp; Reports</a>
            </li>

            <!-- Item 5: Direct Link (Contact) -->
            <li class="nav-item" role="none">
              <a href="#contact" class="nav-link" role="menuitem">Contact</a>
            </li>

          </ul>
        </nav>

        <!-- Right Utility & Action Area -->
        <div class="header-actions">

          <!-- Search Trigger -->
          <button type="button" class="btn-icon" id="search-trigger" aria-label="Search site content">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>

          <!-- Theme Switcher (Light / Dark) -->
          <button type="button" class="btn-icon theme-toggle" id="theme-toggle" aria-label="Switch to dark theme">
            <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
            <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>

          <!-- Secondary Action: Client Portal -->
          <a href="#portal" class="btn-portal">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
              <polyline points="10 17 15 12 10 7"/>
              <line x1="15" y1="12" x2="3" y2="12"/>
            </svg>
            <span>Client Portal</span>
          </a>

          <!-- Primary CTA Button -->
          <a href="#contact" class="btn-primary">
            <span>Schedule Consultation</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button type="button" 
                  class="btn-hamburger" 
                  id="mobile-hamburger" 
                  aria-label="Open mobile navigation menu" 
                  aria-expanded="false" 
                  aria-controls="mobile-drawer">
            <span class="hamburger-bar" aria-hidden="true"></span>
            <span class="hamburger-bar" aria-hidden="true"></span>
          </button>

        </div>

      </div>
    </div>

    <!-- Collapsible Search Bar Overlay -->
    <div class="search-overlay" id="search-overlay" aria-hidden="true">
      <div class="search-container container">
        <form class="search-form" role="search" onsubmit="event.preventDefault();">
          <svg class="search-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input type="search" class="search-input" id="search-input" placeholder="Search advisory services, insights, leadership..." autocomplete="off">
          <button type="button" class="search-close" id="search-close" aria-label="Close search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </form>
        <div class="search-suggestions">
          <span class="suggestion-label">Suggested searches:</span>
          <button type="button" class="suggestion-tag">Capital Allocation</button>
          <button type="button" class="suggestion-tag">Zero-Trust Framework</button>
          <button type="button" class="suggestion-tag">Global Tax Architecture</button>
          <button type="button" class="suggestion-tag">Q3 2026 Telemetry</button>
        </div>
      </div>
    </div>

  </header>

  <!-- ================================================================
       MOBILE NAVIGATION DRAWER (OFF-CANVAS)
       ================================================================ -->
  <div class="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Mobile Navigation">
    <div class="drawer-backdrop" id="drawer-backdrop"></div>
    <div class="drawer-panel">

      <!-- Drawer Top Bar -->
      <div class="drawer-header">
        <div class="brand-logo">
          <span class="logo-mark" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14 2L2 8V20L14 26L26 20V8L14 2Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
              <path d="M14 2V26" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
              <path d="M2 8L14 14L26 8" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
              <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
            </svg>
          </span>
          <span class="logo-text">
            <span class="logo-name">MERIDIAN</span>
          </span>
        </div>
        <button type="button" class="drawer-close" id="drawer-close" aria-label="Close navigation menu">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>

      <!-- Drawer Content (Scrollable) -->
      <div class="drawer-body">

        <!-- Mobile Navigation Accordion -->
        <nav class="mobile-nav" aria-label="Mobile Navigation Menu">
          <ul class="mobile-nav-list">

            <!-- Solutions Accordion -->
            <li class="mobile-nav-item mobile-accordion">
              <button type="button" class="accordion-trigger" aria-expanded="false">
                <span>Solutions</span>
                <svg class="chevron-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="accordion-panel">
                <ul class="accordion-links">
                  <li><a href="#solutions" class="accordion-link">Enterprise Architecture</a></li>
                  <li><a href="#solutions" class="accordion-link">Capital Advisory &amp; M&amp;A</a></li>
                  <li><a href="#solutions" class="accordion-link">Regulatory &amp; Compliance</a></li>
                  <li><a href="#solutions" class="accordion-link">Cloud Infrastructure</a></li>
                  <li><a href="#solutions" class="accordion-link">Data Intelligence &amp; AI</a></li>
                  <li><a href="#solutions" class="accordion-link">Cyber Defense &amp; Zero Trust</a></li>
                </ul>
              </div>
            </li>

            <!-- Company Accordion -->
            <li class="mobile-nav-item mobile-accordion">
              <button type="button" class="accordion-trigger" aria-expanded="false">
                <span>Company</span>
                <svg class="chevron-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="accordion-panel">
                <ul class="accordion-links">
                  <li><a href="#about" class="accordion-link">About Meridian Group</a></li>
                  <li><a href="#leadership" class="accordion-link">Executive Leadership</a></li>
                  <li>
                    <a href="#careers" class="accordion-link">
                      <span>Careers &amp; Culture</span>
                      <span class="badge-hiring">Hiring</span>
                    </a>
                  </li>
                  <li><a href="#esg" class="accordion-link">ESG &amp; Global Impact</a></li>
                </ul>
              </div>
            </li>

            <!-- Direct Links -->
            <li class="mobile-nav-item">
              <a href="#cases" class="mobile-direct-link">Case Studies</a>
            </li>
            <li class="mobile-nav-item">
              <a href="#insights" class="mobile-direct-link">Insights &amp; Reports</a>
            </li>
            <li class="mobile-nav-item">
              <a href="#contact" class="mobile-direct-link">Contact</a>
            </li>
            <li class="mobile-nav-item">
              <a href="#portal" class="mobile-direct-link">Client Portal</a>
            </li>

          </ul>
        </nav>

        <!-- Mobile Drawer CTAs -->
        <div class="drawer-actions">
          <a href="#contact" class="btn-primary btn-block">
            <span>Schedule Consultation</span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>

        <!-- Corporate Contact Details inside Drawer -->
        <div class="drawer-corporate-info">
          <span class="info-label">Direct Inquiries</span>
          <a href="mailto:advisory@meridian-group.com" class="info-link">advisory@meridian-group.com</a>
          <span class="info-phone">+1 (212) 555-0190 (New York HQ)</span>
          <span class="info-phone">+44 (20) 7946-0922 (London City)</span>
        </div>

      </div>

    </div>
  </div>


  <!-- Main JavaScript File -->
  <script src="script.js"></script>
</body>
</html>
```

---

## 2. HTML Markup
Place this at the top of your `<body>`:
```html
<!-- ================================================================
     MERIDIAN CORPORATE HEADER & NAVIGATION
     ================================================================ -->
<header class="meridian-header" id="meridian-header">

  <!-- Top Utility Bar (Formal Corporate Indicator) -->
  <div class="header-utility">
    <div class="utility-inner container">
      <div class="utility-left">
        <span class="utility-pill">GLOBAL OFFICES</span>
        <span class="utility-locations">London &bull; New York &bull; Zurich &bull; Singapore &bull; Tokyo</span>
      </div>
      <div class="utility-right">
        <a href="#investors" class="utility-link">Investor Relations</a>
        <span class="utility-sep" aria-hidden="true">&bull;</span>
        <a href="#careers" class="utility-link">
          Careers
          <span class="utility-badge">We're hiring</span>
        </a>
        <span class="utility-sep" aria-hidden="true">&bull;</span>
        <a href="#news" class="utility-link">Press &amp; Media</a>
      </div>
    </div>
  </div>

  <!-- Main Navigation Bar -->
  <div class="header-main">
    <div class="header-inner container">

      <!-- Corporate Brand Logo -->
      <a href="#home" class="brand-logo" aria-label="Meridian Group — Home">
        <span class="logo-mark" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L2 8V20L14 26L26 20V8L14 2Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
            <path d="M14 2V26" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M2 8L14 14L26 8" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
            <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
          </svg>
        </span>
        <span class="logo-text">
          <span class="logo-name">MERIDIAN</span>
          <span class="logo-sub">ENTERPRISE ADVISORY</span>
        </span>
      </a>

      <!-- Desktop Navigation Menu -->
      <nav class="nav-desktop" aria-label="Primary Navigation">
        <ul class="nav-list" role="menubar">

          <!-- Item 1: Mega-Menu (Solutions) -->
          <li class="nav-item has-dropdown has-megamenu" role="none">
            <button type="button" 
                    class="nav-link dropdown-trigger" 
                    role="menuitem" 
                    aria-haspopup="true" 
                    aria-expanded="false" 
                    aria-controls="megamenu-solutions">
              <span>Solutions</span>
              <svg class="chevron-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <!-- Mega-Menu Container -->
            <div class="megamenu" id="megamenu-solutions" role="menu" aria-label="Solutions Menu">
              <div class="megamenu-inner">
                
                <!-- Column 1: Strategy & Advisory -->
                <div class="megamenu-col">
                  <span class="megamenu-header">STRATEGY &amp; ADVISORY</span>
                  <ul class="megamenu-links">
                    <li>
                      <a href="#solutions" class="megamenu-item" role="menuitem">
                        <span class="menu-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                        </span>
                        <div class="menu-item-body">
                          <span class="menu-item-title">Enterprise Architecture</span>
                          <span class="menu-item-desc">Comprehensive digital and operating model redesign.</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" class="megamenu-item" role="menuitem">
                        <span class="menu-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        </span>
                        <div class="menu-item-body">
                          <span class="menu-item-title">Capital Advisory &amp; M&amp;A</span>
                          <span class="menu-item-desc">Due diligence, transaction structuring, and liquidity.</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" class="megamenu-item" role="menuitem">
                        <span class="menu-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                        </span>
                        <div class="menu-item-body">
                          <span class="menu-item-title">Regulatory &amp; Compliance</span>
                          <span class="menu-item-desc">Global governance frameworks and risk resilience.</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Column 2: Technology & Transformation -->
                <div class="megamenu-col">
                  <span class="megamenu-header">TECHNOLOGY PLATFORMS</span>
                  <ul class="megamenu-links">
                    <li>
                      <a href="#solutions" class="megamenu-item" role="menuitem">
                        <span class="menu-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
                        </span>
                        <div class="menu-item-body">
                          <span class="menu-item-title">Cloud Infrastructure</span>
                          <span class="menu-item-desc">High-reliability hybrid and multi-cloud ecosystems.</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" class="megamenu-item" role="menuitem">
                        <span class="menu-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                        </span>
                        <div class="menu-item-body">
                          <span class="menu-item-title">Data Intelligence &amp; AI</span>
                          <span class="menu-item-desc">Executive decision telemetry and data mesh systems.</span>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="#solutions" class="megamenu-item" role="menuitem">
                        <span class="menu-item-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                        </span>
                        <div class="menu-item-body">
                          <span class="menu-item-title">Cyber Defense &amp; Zero Trust</span>
                          <span class="menu-item-desc">Enterprise security postures for mission-critical assets.</span>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                <!-- Column 3: Featured Case Study / Research Card -->
                <div class="megamenu-featured">
                  <div class="featured-card">
                    <div class="featured-tag">2026 GLOBAL BENCHMARK</div>
                    <h4 class="featured-title">Enterprise Operating Model Trends</h4>
                    <p class="featured-summary">How Fortune 500 leadership navigates capital allocation and AI governance.</p>
                    <a href="#insights" class="featured-cta">
                      <span>Download Executive Summary</span>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </li>

          <!-- Item 2: Standard Dropdown (Company) -->
          <li class="nav-item has-dropdown" role="none">
            <button type="button" 
                    class="nav-link dropdown-trigger" 
                    role="menuitem" 
                    aria-haspopup="true" 
                    aria-expanded="false" 
                    aria-controls="dropdown-company">
              <span>Company</span>
              <svg class="chevron-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>

            <ul class="dropdown-menu" id="dropdown-company" role="menu" aria-label="Company Menu">
              <li role="none">
                <a href="#about" class="dropdown-link" role="menuitem">
                  <span class="dropdown-title">About Meridian</span>
                  <span class="dropdown-desc">Our heritage, global board, and fiduciary philosophy.</span>
                </a>
              </li>
              <li role="none">
                <a href="#leadership" class="dropdown-link" role="menuitem">
                  <span class="dropdown-title">Executive Leadership</span>
                  <span class="dropdown-desc">Meet our managing partners and regional directors.</span>
                </a>
              </li>
              <li role="none">
                <a href="#careers" class="dropdown-link" role="menuitem">
                  <span class="dropdown-title">
                    Careers &amp; Culture
                    <span class="badge-hiring">Hiring</span>
                  </span>
                  <span class="dropdown-desc">Build your career among industry-leading advisors.</span>
                </a>
              </li>
              <li role="none">
                <a href="#esg" class="dropdown-link" role="menuitem">
                  <span class="dropdown-title">ESG &amp; Global Impact</span>
                  <span class="dropdown-desc">Sustainability commitments and governance principles.</span>
                </a>
              </li>
            </ul>
          </li>

          <!-- Item 3: Direct Link (Case Studies) -->
          <li class="nav-item" role="none">
            <a href="#cases" class="nav-link" role="menuitem">Case Studies</a>
          </li>

          <!-- Item 4: Direct Link (Insights) -->
          <li class="nav-item" role="none">
            <a href="#insights" class="nav-link" role="menuitem">Insights &amp; Reports</a>
          </li>

          <!-- Item 5: Direct Link (Contact) -->
          <li class="nav-item" role="none">
            <a href="#contact" class="nav-link" role="menuitem">Contact</a>
          </li>

        </ul>
      </nav>

      <!-- Right Utility & Action Area -->
      <div class="header-actions">

        <!-- Search Trigger -->
        <button type="button" class="btn-icon" id="search-trigger" aria-label="Search site content">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>

        <!-- Theme Switcher (Light / Dark) -->
        <button type="button" class="btn-icon theme-toggle" id="theme-toggle" aria-label="Switch to dark theme">
          <svg class="icon-sun" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="5"/>
            <line x1="12" y1="1" x2="12" y2="3"/>
            <line x1="12" y1="21" x2="12" y2="23"/>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
            <line x1="1" y1="12" x2="3" y2="12"/>
            <line x1="21" y1="12" x2="23" y2="12"/>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
          </svg>
          <svg class="icon-moon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        </button>

        <!-- Secondary Action: Client Portal -->
        <a href="#portal" class="btn-portal">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
            <polyline points="10 17 15 12 10 7"/>
            <line x1="15" y1="12" x2="3" y2="12"/>
          </svg>
          <span>Client Portal</span>
        </a>

        <!-- Primary CTA Button -->
        <a href="#contact" class="btn-primary">
          <span>Schedule Consultation</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <!-- Mobile Hamburger Toggle -->
        <button type="button" 
                class="btn-hamburger" 
                id="mobile-hamburger" 
                aria-label="Open mobile navigation menu" 
                aria-expanded="false" 
                aria-controls="mobile-drawer">
          <span class="hamburger-bar" aria-hidden="true"></span>
          <span class="hamburger-bar" aria-hidden="true"></span>
        </button>

      </div>

    </div>
  </div>

  <!-- Collapsible Search Bar Overlay -->
  <div class="search-overlay" id="search-overlay" aria-hidden="true">
    <div class="search-container container">
      <form class="search-form" role="search" onsubmit="event.preventDefault();">
        <svg class="search-input-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input type="search" class="search-input" id="search-input" placeholder="Search advisory services, insights, leadership..." autocomplete="off">
        <button type="button" class="search-close" id="search-close" aria-label="Close search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </form>
      <div class="search-suggestions">
        <span class="suggestion-label">Suggested searches:</span>
        <button type="button" class="suggestion-tag">Capital Allocation</button>
        <button type="button" class="suggestion-tag">Zero-Trust Framework</button>
        <button type="button" class="suggestion-tag">Global Tax Architecture</button>
        <button type="button" class="suggestion-tag">Q3 2026 Telemetry</button>
      </div>
    </div>
  </div>

</header>

<!-- ================================================================
     MOBILE NAVIGATION DRAWER (OFF-CANVAS)
     ================================================================ -->
<div class="mobile-drawer" id="mobile-drawer" role="dialog" aria-modal="true" aria-hidden="true" aria-label="Mobile Navigation">
  <div class="drawer-backdrop" id="drawer-backdrop"></div>
  <div class="drawer-panel">

    <!-- Drawer Top Bar -->
    <div class="drawer-header">
      <div class="brand-logo">
        <span class="logo-mark" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 2L2 8V20L14 26L26 20V8L14 2Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
            <path d="M14 2V26" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/>
            <path d="M2 8L14 14L26 8" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/>
            <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
          </svg>
        </span>
        <span class="logo-text">
          <span class="logo-name">MERIDIAN</span>
        </span>
      </div>
      <button type="button" class="drawer-close" id="drawer-close" aria-label="Close navigation menu">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <!-- Drawer Content (Scrollable) -->
    <div class="drawer-body">

      <!-- Mobile Navigation Accordion -->
      <nav class="mobile-nav" aria-label="Mobile Navigation Menu">
        <ul class="mobile-nav-list">

          <!-- Solutions Accordion -->
          <li class="mobile-nav-item mobile-accordion">
            <button type="button" class="accordion-trigger" aria-expanded="false">
              <span>Solutions</span>
              <svg class="chevron-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="accordion-panel">
              <ul class="accordion-links">
                <li><a href="#solutions" class="accordion-link">Enterprise Architecture</a></li>
                <li><a href="#solutions" class="accordion-link">Capital Advisory &amp; M&amp;A</a></li>
                <li><a href="#solutions" class="accordion-link">Regulatory &amp; Compliance</a></li>
                <li><a href="#solutions" class="accordion-link">Cloud Infrastructure</a></li>
                <li><a href="#solutions" class="accordion-link">Data Intelligence &amp; AI</a></li>
                <li><a href="#solutions" class="accordion-link">Cyber Defense &amp; Zero Trust</a></li>
              </ul>
            </div>
          </li>

          <!-- Company Accordion -->
          <li class="mobile-nav-item mobile-accordion">
            <button type="button" class="accordion-trigger" aria-expanded="false">
              <span>Company</span>
              <svg class="chevron-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </button>
            <div class="accordion-panel">
              <ul class="accordion-links">
                <li><a href="#about" class="accordion-link">About Meridian Group</a></li>
                <li><a href="#leadership" class="accordion-link">Executive Leadership</a></li>
                <li>
                  <a href="#careers" class="accordion-link">
                    <span>Careers &amp; Culture</span>
                    <span class="badge-hiring">Hiring</span>
                  </a>
                </li>
                <li><a href="#esg" class="accordion-link">ESG &amp; Global Impact</a></li>
              </ul>
            </div>
          </li>

          <!-- Direct Links -->
          <li class="mobile-nav-item">
            <a href="#cases" class="mobile-direct-link">Case Studies</a>
          </li>
          <li class="mobile-nav-item">
            <a href="#insights" class="mobile-direct-link">Insights &amp; Reports</a>
          </li>
          <li class="mobile-nav-item">
            <a href="#contact" class="mobile-direct-link">Contact</a>
          </li>
          <li class="mobile-nav-item">
            <a href="#portal" class="mobile-direct-link">Client Portal</a>
          </li>

        </ul>
      </nav>

      <!-- Mobile Drawer CTAs -->
      <div class="drawer-actions">
        <a href="#contact" class="btn-primary btn-block">
          <span>Schedule Consultation</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>

      <!-- Corporate Contact Details inside Drawer -->
      <div class="drawer-corporate-info">
        <span class="info-label">Direct Inquiries</span>
        <a href="mailto:advisory@meridian-group.com" class="info-link">advisory@meridian-group.com</a>
        <span class="info-phone">+1 (212) 555-0190 (New York HQ)</span>
        <span class="info-phone">+44 (20) 7946-0922 (London City)</span>
      </div>

    </div>

  </div>
</div>
```

---

## 3. CSS Stylesheet
Add this CSS to your styling:
```css
/* ============================================================
   MERIDIAN — Corporate & Enterprise Navigation System
   Designed with human-crafted executive aesthetics, 
   structured multi-column mega-menus, dual light/dark themes, 
   and full WCAG accessibility.
   ============================================================ */

/* ─────────────────────────────────────────────
   CSS Custom Properties & Design Tokens
   ───────────────────────────────────────────── */
:root {
  /* Surface & Backgrounds */
  --bg-page: #fbfcfd;
  --bg-surface: #ffffff;
  --bg-surface-elevated: #ffffff;
  --bg-surface-alt: #f4f6f8;
  --bg-header: rgba(255, 255, 255, 0.92);
  --bg-overlay: rgba(15, 23, 42, 0.45);

  /* Typography Colors */
  --text-primary: #0f172a;       /* Slate 900 */
  --text-secondary: #475569;     /* Slate 600 */
  --text-muted: #64748b;         /* Slate 500 */
  --text-light: #94a3b8;         /* Slate 400 */
  --text-inverse: #ffffff;

  /* Brand Accents */
  --brand-primary: #0f172a;      /* Authoritative Charcoal Slate */
  --brand-primary-hover: #1e293b;
  --brand-accent: #1d4ed8;       /* Executive Royal Cobalt */
  --brand-accent-hover: #1e40af;
  --brand-accent-soft: rgba(29, 78, 216, 0.08);
  --brand-success: #059669;      /* Forest Green badge */
  --brand-success-soft: rgba(5, 150, 105, 0.1);

  /* Borders & Dividers */
  --border-subtle: #e2e8f0;      /* Slate 200 */
  --border-light: #cbd5e1;       /* Slate 300 */
  --border-strong: #94a3b8;
  --border-focus: #1d4ed8;

  /* Shadows (Natural multi-layer ambient occlusion) */
  --shadow-sm: 0 1px 2px 0 rgba(15, 23, 42, 0.05);
  --shadow-md: 0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 4px -2px rgba(15, 23, 42, 0.04);
  --shadow-lg: 0 12px 32px -4px rgba(15, 23, 42, 0.12), 0 4px 8px -2px rgba(15, 23, 42, 0.04);
  --shadow-dropdown: 0 20px 40px -8px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.06);

  /* Dimensions */
  --header-utility-height: 38px;
  --header-main-height: 72px;
  --header-total-height: 110px;
  --container-width: 1240px;
  --border-radius-sm: 6px;
  --border-radius-md: 10px;
  --border-radius-lg: 14px;
  --border-radius-full: 9999px;

  /* Transitions */
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
  --t-fast: 0.18s var(--ease-smooth);
  --t-medium: 0.28s var(--ease-smooth);

  /* Typography */
  --font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* ─────────────────────────────────────────────
   Dark Theme Overrides
   ───────────────────────────────────────────── */
[data-theme="dark"] {
  --bg-page: #080b11;
  --bg-surface: #0f1420;
  --bg-surface-elevated: #141b2a;
  --bg-surface-alt: #0c101a;
  --bg-header: rgba(8, 11, 17, 0.92);
  --bg-overlay: rgba(0, 0, 0, 0.7);

  --text-primary: #f8fafc;
  --text-secondary: #cbd5e1;
  --text-muted: #94a3b8;
  --text-light: #64748b;
  --text-inverse: #080b11;

  --brand-primary: #f8fafc;
  --brand-primary-hover: #e2e8f0;
  --brand-accent: #3b82f6;
  --brand-accent-hover: #60a5fa;
  --brand-accent-soft: rgba(59, 130, 246, 0.12);
  --brand-success: #10b981;
  --brand-success-soft: rgba(16, 185, 129, 0.15);

  --border-subtle: #1e293b;
  --border-light: #334155;
  --border-strong: #475569;
  --border-focus: #3b82f6;

  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.4);
  --shadow-md: 0 4px 14px -2px rgba(0, 0, 0, 0.5), 0 2px 6px -2px rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 14px 36px -4px rgba(0, 0, 0, 0.6), 0 4px 10px -2px rgba(0, 0, 0, 0.4);
  --shadow-dropdown: 0 24px 48px -10px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.08);
}

/* ─────────────────────────────────────────────
   Reset & Base Styles
   ───────────────────────────────────────────── */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: var(--font-family);
  font-size: 16px;
  scroll-behavior: smooth;
  color-scheme: light dark;
}

body {
  background-color: var(--bg-page);
  color: var(--text-primary);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  transition: background-color var(--t-medium), color var(--t-medium);
}

a {
  color: inherit;
  text-decoration: none;
  transition: color var(--t-fast);
}

ul, li {
  list-style: none;
}

button {
  font-family: inherit;
  font-size: inherit;
  border: none;
  background: none;
  cursor: pointer;
  color: inherit;
}

.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 24px;
}

/* ─────────────────────────────────────────────
   HEADER WRAPPER (STICKY)
   ───────────────────────────────────────────── */
.meridian-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background: var(--bg-header);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-subtle);
  transition: border-color var(--t-fast), box-shadow var(--t-fast), background-color var(--t-fast);
}

.meridian-header.header--scrolled {
  border-bottom-color: var(--border-light);
  box-shadow: var(--shadow-md);
}

/* ─────────────────────────────────────────────
   TOP UTILITY BAR
   ───────────────────────────────────────────── */
.header-utility {
  height: var(--header-utility-height);
  border-bottom: 1px solid var(--border-subtle);
  font-size: 0.775rem;
  color: var(--text-muted);
  background: var(--bg-surface-alt);
  display: flex;
  align-items: center;
  transition: background-color var(--t-fast), border-color var(--t-fast);
}

.utility-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.utility-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.utility-pill {
  font-weight: 700;
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
  background: var(--bg-surface);
  padding: 2px 7px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--border-subtle);
}

.utility-locations {
  color: var(--text-muted);
  letter-spacing: 0.02em;
}

.utility-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.utility-link {
  color: var(--text-secondary);
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.utility-link:hover {
  color: var(--brand-accent);
}

.utility-sep {
  color: var(--border-light);
  font-size: 0.6rem;
}

.utility-badge {
  font-size: 0.625rem;
  font-weight: 600;
  color: var(--brand-success);
  background: var(--brand-success-soft);
  padding: 1px 6px;
  border-radius: var(--border-radius-full);
}

/* ─────────────────────────────────────────────
   MAIN NAVIGATION BAR
   ───────────────────────────────────────────── */
.header-main {
  height: var(--header-main-height);
  display: flex;
  align-items: center;
}

.header-inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 24px;
}

/* Brand Logo */
.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
  user-select: none;
}

.logo-mark {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: transform var(--t-fast);
}

.brand-logo:hover .logo-mark {
  transform: scale(1.04);
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.logo-name {
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: 0.12em;
  color: var(--text-primary);
  line-height: 1.1;
}

.logo-sub {
  font-weight: 600;
  font-size: 0.58rem;
  letter-spacing: 0.18em;
  color: var(--text-muted);
  margin-top: 1px;
}

/* ─────────────────────────────────────────────
   DESKTOP NAVIGATION
   ───────────────────────────────────────────── */
.nav-desktop {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 100%;
}

.nav-item {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.nav-item.has-megamenu {
  position: static;
}

.nav-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  font-size: 0.885rem;
  font-weight: 600;
  color: var(--text-secondary);
  border-radius: var(--border-radius-md);
  transition: color var(--t-fast), background-color var(--t-fast);
  cursor: pointer;
  outline: none;
}

.nav-link:hover,
.nav-item:hover > .nav-link,
.nav-link[aria-expanded="true"] {
  color: var(--text-primary);
  background-color: var(--bg-surface-alt);
}

.nav-link:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

.chevron-icon {
  transition: transform var(--t-fast);
  color: var(--text-muted);
}

.nav-item:hover > .nav-link .chevron-icon,
.nav-link[aria-expanded="true"] .chevron-icon {
  transform: rotate(180deg);
  color: var(--text-primary);
}

/* ─────────────────────────────────────────────
   MEGA-MENU (SOLUTIONS)
   ───────────────────────────────────────────── */
.megamenu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(8px);
  width: min(960px, calc(100% - 48px));
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-dropdown);
  padding: 24px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity var(--t-fast), transform var(--t-fast), visibility var(--t-fast);
  z-index: 1000;
}

/* Pointer bridging pseudo-element to prevent accidental close */
.megamenu::before {
  content: '';
  position: absolute;
  top: -14px;
  left: 0;
  right: 0;
  height: 14px;
}

.has-megamenu:hover .megamenu,
.has-megamenu:focus-within .megamenu,
.megamenu.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}

.megamenu-inner {
  display: grid;
  grid-template-columns: 1.15fr 1.15fr 1fr;
  gap: 24px;
}

.megamenu-col {
  display: flex;
  flex-direction: column;
}

.megamenu-header {
  font-size: 0.675rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  margin-bottom: 12px;
  padding-left: 10px;
}

.megamenu-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.megamenu-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px;
  border-radius: var(--border-radius-md);
  transition: background-color var(--t-fast), transform var(--t-fast);
}

.megamenu-item:hover {
  background-color: var(--bg-surface-alt);
}

.menu-item-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: var(--border-radius-sm);
  background: var(--bg-surface-alt);
  border: 1px solid var(--border-subtle);
  color: var(--text-primary);
  flex-shrink: 0;
  margin-top: 2px;
  transition: color var(--t-fast), border-color var(--t-fast), background-color var(--t-fast);
}

.megamenu-item:hover .menu-item-icon {
  color: var(--brand-accent);
  border-color: var(--brand-accent-soft);
  background: var(--brand-accent-soft);
}

.menu-item-body {
  display: flex;
  flex-direction: column;
}

.menu-item-title {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.menu-item-desc {
  font-size: 0.775rem;
  color: var(--text-muted);
  line-height: 1.4;
  margin-top: 2px;
}

/* Featured Case Study / Report Card in Mega-Menu */
.megamenu-featured {
  display: flex;
  flex-direction: column;
}

.featured-card {
  height: 100%;
  background: var(--bg-surface-alt);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-md);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
}

.featured-tag {
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--brand-accent);
  background: var(--brand-accent-soft);
  padding: 3px 8px;
  border-radius: var(--border-radius-sm);
  align-self: flex-start;
}

.featured-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.3;
}

.featured-summary {
  font-size: 0.8rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.featured-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--brand-accent);
  margin-top: auto;
  transition: gap var(--t-fast);
}

.featured-cta:hover {
  gap: 10px;
}

/* ─────────────────────────────────────────────
   STANDARD DROPDOWN (COMPANY)
   ───────────────────────────────────────────── */
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  transform: translateY(8px);
  width: 290px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-dropdown);
  padding: 10px;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity var(--t-fast), transform var(--t-fast), visibility var(--t-fast);
  z-index: 1000;
}

.has-dropdown::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  height: 16px;
}

.has-dropdown:not(.has-megamenu):hover .dropdown-menu,
.has-dropdown:not(.has-megamenu):focus-within .dropdown-menu,
.dropdown-menu.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
}

.dropdown-link {
  display: flex;
  flex-direction: column;
  padding: 10px 12px;
  border-radius: var(--border-radius-md);
  transition: background-color var(--t-fast);
}

.dropdown-link:hover {
  background-color: var(--bg-surface-alt);
}

.dropdown-title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text-primary);
}

.dropdown-desc {
  font-size: 0.75rem;
  color: var(--text-muted);
  line-height: 1.4;
  margin-top: 2px;
}

.badge-hiring {
  font-size: 0.625rem;
  font-weight: 600;
  color: var(--brand-success);
  background: var(--brand-success-soft);
  padding: 1px 6px;
  border-radius: var(--border-radius-full);
}

/* ─────────────────────────────────────────────
   RIGHT ACTIONS GROUP
   ───────────────────────────────────────────── */
.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.btn-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: var(--border-radius-md);
  color: var(--text-secondary);
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface);
  transition: color var(--t-fast), border-color var(--t-fast), background-color var(--t-fast);
}

.btn-icon:hover {
  color: var(--text-primary);
  border-color: var(--border-light);
  background-color: var(--bg-surface-alt);
}

.btn-icon:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

/* Theme Switcher */
.theme-toggle .icon-sun {
  display: none;
}
.theme-toggle .icon-moon {
  display: block;
}
[data-theme="dark"] .theme-toggle .icon-sun {
  display: block;
}
[data-theme="dark"] .theme-toggle .icon-moon {
  display: none;
}

/* Client Portal Secondary Link */
.btn-portal {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-size: 0.84rem;
  font-weight: 600;
  color: var(--text-secondary);
  padding: 8px 12px;
  border-radius: var(--border-radius-md);
  transition: color var(--t-fast), background-color var(--t-fast);
}

.btn-portal:hover {
  color: var(--text-primary);
  background-color: var(--bg-surface-alt);
}

/* Primary CTA Button */
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--brand-primary);
  color: var(--text-inverse);
  padding: 10px 18px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  border: 1px solid transparent;
  box-shadow: var(--shadow-sm);
  transition: background-color var(--t-fast), transform var(--t-fast), box-shadow var(--t-fast);
  white-space: nowrap;
}

.btn-primary:hover {
  background-color: var(--brand-primary-hover);
  box-shadow: var(--shadow-md);
  transform: translateY(-1px);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:focus-visible {
  outline: 2px solid var(--border-focus);
  outline-offset: 2px;
}

.btn-primary svg {
  transition: transform var(--t-fast);
}

.btn-primary:hover svg {
  transform: translateX(2px);
}

/* Button variants */
.btn-large {
  padding: 13px 24px;
  font-size: 0.95rem;
  border-radius: var(--border-radius-md);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--bg-surface);
  color: var(--text-primary);
  padding: 10px 18px;
  font-size: 0.85rem;
  font-weight: 600;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-light);
  box-shadow: var(--shadow-sm);
  transition: background-color var(--t-fast), border-color var(--t-fast), color var(--t-fast);
}

.btn-outline:hover {
  background-color: var(--bg-surface-alt);
  border-color: var(--border-strong);
}

.btn-block {
  width: 100%;
}

/* Mobile Hamburger Toggle */
.btn-hamburger {
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-md);
  border: 1px solid var(--border-subtle);
  background: var(--bg-surface);
  cursor: pointer;
  z-index: 1010;
  transition: border-color var(--t-fast), background-color var(--t-fast);
}

.btn-hamburger:hover {
  border-color: var(--border-light);
  background-color: var(--bg-surface-alt);
}

.hamburger-bar {
  display: block;
  width: 20px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 1px;
  transition: transform var(--t-medium), opacity var(--t-medium);
}

.btn-hamburger.is-active .hamburger-bar:nth-child(1) {
  transform: translateY(4px) rotate(45deg);
}

.btn-hamburger.is-active .hamburger-bar:nth-child(2) {
  transform: translateY(-4px) rotate(-45deg);
}

/* ─────────────────────────────────────────────
   SEARCH OVERLAY
   ───────────────────────────────────────────── */
.search-overlay {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-lg);
  padding: 24px 0 32px;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-10px);
  transition: opacity var(--t-fast), transform var(--t-fast), visibility var(--t-fast);
  z-index: 850;
}

.search-overlay.is-active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.search-form {
  position: relative;
  display: flex;
  align-items: center;
}

.search-input-icon {
  position: absolute;
  left: 16px;
  color: var(--text-muted);
  pointer-events: none;
}

.search-input {
  width: 100%;
  height: 52px;
  padding: 0 48px 0 50px;
  font-size: 1.05rem;
  font-family: inherit;
  color: var(--text-primary);
  background: var(--bg-surface-alt);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-lg);
  outline: none;
  transition: border-color var(--t-fast), box-shadow var(--t-fast);
}

.search-input:focus {
  border-color: var(--border-focus);
  box-shadow: 0 0 0 3px var(--brand-accent-soft);
}

.search-close {
  position: absolute;
  right: 14px;
  color: var(--text-muted);
  cursor: pointer;
  padding: 6px;
}

.search-close:hover {
  color: var(--text-primary);
}

.search-suggestions {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.suggestion-label {
  font-size: 0.775rem;
  color: var(--text-muted);
}

.suggestion-tag {
  font-size: 0.775rem;
  font-weight: 500;
  color: var(--text-secondary);
  background: var(--bg-surface-alt);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-full);
  padding: 4px 10px;
  cursor: pointer;
  transition: background-color var(--t-fast), color var(--t-fast);
}

.suggestion-tag:hover {
  background-color: var(--border-subtle);
  color: var(--text-primary);
}

/* ─────────────────────────────────────────────
   MOBILE DRAWER (OFF-CANVAS)
   ───────────────────────────────────────────── */
.mobile-drawer {
  position: fixed;
  inset: 0;
  z-index: 2000;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--t-medium), visibility var(--t-medium);
}

.mobile-drawer.is-open {
  opacity: 1;
  visibility: visible;
}

.drawer-backdrop {
  position: absolute;
  inset: 0;
  background: var(--bg-overlay);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.drawer-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: min(400px, 86vw);
  height: 100%;
  background: var(--bg-surface);
  border-left: 1px solid var(--border-subtle);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform var(--t-medium);
  overflow-y: auto;
}

.mobile-drawer.is-open .drawer-panel {
  transform: translateX(0);
}

.drawer-header {
  height: var(--header-main-height);
  padding: 0 20px;
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;
}

.drawer-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--border-radius-sm);
  color: var(--text-secondary);
  cursor: pointer;
}

.drawer-close:hover {
  color: var(--text-primary);
  background: var(--bg-surface-alt);
}

.drawer-body {
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* Accordions inside mobile drawer */
.mobile-nav-list {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mobile-nav-item {
  border-bottom: 1px solid var(--border-subtle);
}

.mobile-nav-item:last-child {
  border-bottom: none;
}

.accordion-trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 4px;
  font-size: 0.975rem;
  font-weight: 600;
  color: var(--text-primary);
  text-align: left;
}

.accordion-trigger .chevron-icon {
  transition: transform var(--t-fast);
}

.accordion-trigger[aria-expanded="true"] .chevron-icon {
  transform: rotate(180deg);
}

.accordion-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--t-medium);
  overflow: hidden;
  visibility: hidden;
}

.accordion-trigger[aria-expanded="true"] + .accordion-panel {
  grid-template-rows: 1fr;
  visibility: visible;
}

.accordion-links {
  min-height: 0;
  overflow: hidden;
  padding: 4px 8px 14px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.accordion-link {
  font-size: 0.875rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.accordion-link:hover {
  color: var(--brand-accent);
}

.mobile-direct-link {
  display: block;
  padding: 14px 4px;
  font-size: 0.975rem;
  font-weight: 600;
  color: var(--text-primary);
}

.mobile-direct-link:hover {
  color: var(--brand-accent);
}

.drawer-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.drawer-corporate-info {
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--border-subtle);
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.775rem;
}

.info-label {
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.675rem;
  margin-bottom: 2px;
}

.info-link {
  color: var(--brand-accent);
  font-weight: 600;
}

.info-phone {
  color: var(--text-secondary);
}

/* ─────────────────────────────────────────────
   RESPONSIVE MEDIA QUERIES
   ───────────────────────────────────────────── */
@media (max-width: 1080px) {
  .header-utility {
    display: none;
  }

  .nav-desktop {
    display: none;
  }

  .btn-portal {
    display: none;
  }

  .btn-hamburger {
    display: flex;
  }

  .btn-primary {
    padding: 8px 14px;
    font-size: 0.8rem;
  }
}

@media (max-width: 640px) {
  .header-actions .btn-primary {
    display: none;
  }

  .header-inner {
    padding: 0 16px;
  }

  .logo-sub {
    display: none;
  }
}

@media (max-width: 480px) {
  .header-main { height: 60px; }
  .header-inner { padding: 0 12px; }
  .logo-mark svg { width: 22px; height: 22px; }
  .logo-name { font-size: 0.95rem; }
  .hero-section { padding: 60px 0 60px; }
  .hero-inner { padding: 0 16px; }
  .hero-title { font-size: clamp(1.8rem, 8vw, 2.8rem); }
  .hero-lead { font-size: 0.95rem; }
  .hero-actions { flex-direction: column; gap: 12px; }
  .hero-actions .btn-primary,
  .hero-actions .btn-outline { width: 100%; justify-content: center; }
  .section-header { margin-bottom: 36px; }
  .practices-grid { grid-template-columns: 1fr; }
  .cta-box { padding: 40px 20px; }
  .cta-buttons { flex-direction: column; gap: 12px; }
  .cta-buttons .btn-primary,
  .cta-buttons .btn-outline { width: 100%; justify-content: center; }
  .container { padding: 0 16px; }
}

/* ─────────────────────────────────────────────
   DEMO PAGE SECTIONS (EXECUTIVE PRESENTATION)
   ───────────────────────────────────────────── */
.hero-section {
  padding: 90px 0 80px;
  background: radial-gradient(circle at 50% 0%, var(--bg-surface-alt) 0%, var(--bg-page) 65%);
  border-bottom: 1px solid var(--border-subtle);
  text-align: center;
}

.hero-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-badge-wrap {
  margin-bottom: 24px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--text-secondary);
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-full);
  padding: 6px 14px;
  box-shadow: var(--shadow-sm);
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--brand-success);
}

.hero-title {
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.025em;
  color: var(--text-primary);
  max-width: 860px;
  margin-bottom: 24px;
}

.hero-lead {
  font-size: clamp(1rem, 2vw, 1.25rem);
  color: var(--text-secondary);
  max-width: 720px;
  line-height: 1.6;
  margin-bottom: 36px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 60px;
}

.hero-clients {
  border-top: 1px solid var(--border-subtle);
  padding-top: 36px;
  width: 100%;
}

.clients-label {
  display: block;
  font-size: 0.675rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.clients-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  flex-wrap: wrap;
}

.client-name {
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: var(--text-light);
  opacity: 0.85;
}

/* Stats Section */
.stats-section {
  padding: 60px 0;
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border-subtle);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 32px;
  text-align: center;
}

.stat-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat-number {
  font-size: 2.75rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  line-height: 1;
}

.stat-label {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-weight: 500;
}

/* Practices & Content Sections */
.content-section {
  padding: 100px 0;
}

.section-alt {
  background: var(--bg-surface-alt);
}

.section-header {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 60px;
}

.section-tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--brand-accent);
  margin-bottom: 12px;
}

.section-title {
  font-size: clamp(2rem, 3.5vw, 2.75rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text-primary);
  line-height: 1.2;
  margin-bottom: 16px;
}

.section-desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.practices-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 28px;
}

.practice-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-lg);
  padding: 36px 30px;
  box-shadow: var(--shadow-sm);
  transition: transform var(--t-fast), box-shadow var(--t-fast), border-color var(--t-fast);
}

.practice-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--border-light);
}

.practice-icon {
  font-size: 1.1rem;
  font-weight: 800;
  color: var(--brand-accent);
  margin-bottom: 20px;
}

.practice-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 12px;
}

.practice-desc {
  font-size: 0.925rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* About Grid */
.about-grid {
  max-width: 800px;
  margin: 0 auto;
}

.about-content .section-lead {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.5;
  margin-bottom: 20px;
}

.about-content .section-text {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 30px;
}

.about-highlights {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.highlight-item {
  padding: 16px 20px;
  background: var(--bg-surface);
  border: 1px solid var(--border-subtle);
  border-radius: var(--border-radius-md);
  font-size: 0.925rem;
  color: var(--text-secondary);
}

.highlight-item strong {
  color: var(--text-primary);
}

/* Contact CTA Box */
.contact-cta-section {
  padding: 80px 0 100px;
}

.cta-box {
  background: var(--brand-primary);
  color: var(--text-inverse);
  border-radius: var(--border-radius-lg);
  padding: 60px 40px;
  text-align: center;
  box-shadow: var(--shadow-lg);
}

.cta-title {
  font-size: clamp(1.8rem, 3vw, 2.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.cta-text {
  font-size: 1.05rem;
  color: var(--text-muted);
  max-width: 580px;
  margin: 0 auto 36px;
}

.cta-buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.cta-box .btn-primary {
  background: var(--text-inverse);
  color: var(--brand-primary);
}

.cta-box .btn-primary:hover {
  background: #e2e8f0;
}

.cta-box .btn-outline {
  border-color: rgba(255, 255, 255, 0.2);
  color: var(--text-inverse);
  background: transparent;
}

.cta-box .btn-outline:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Footer */
.meridian-footer {
  border-top: 1px solid var(--border-subtle);
  background: var(--bg-surface);
  padding: 40px 0;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.footer-copyright {
  font-weight: 600;
  color: var(--text-secondary);
}

.footer-links {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-links a:hover {
  color: var(--brand-accent);
}
```

---

## 4. JavaScript Code
Place this in your `script.js` or before `</body>`:
```javascript
/**
 * ============================================================
 * Meridian — Corporate & Enterprise Navigation System
 * Handles Mega-Menu interactions, Mobile Drawer accordions,
 * Light/Dark theme switching, Search overlay, and Keyboard A11y.
 * ============================================================
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     DOM Element References
     ───────────────────────────────────────────── */
  const htmlElement       = document.documentElement;
  const header            = document.getElementById('meridian-header');
  const themeToggle       = document.getElementById('theme-toggle');
  const searchTrigger     = document.getElementById('search-trigger');
  const searchOverlay     = document.getElementById('search-overlay');
  const searchClose       = document.getElementById('search-close');
  const searchInput       = document.getElementById('search-input');
  
  // Mobile Drawer elements
  const mobileHamburger   = document.getElementById('mobile-hamburger');
  const mobileDrawer      = document.getElementById('mobile-drawer');
  const drawerClose       = document.getElementById('drawer-close');
  const drawerBackdrop    = document.getElementById('drawer-backdrop');
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  const mobileNavLinks    = document.querySelectorAll('.mobile-nav a');

  // Desktop Dropdown Triggers
  const dropdownTriggers  = document.querySelectorAll('.dropdown-trigger');
  const dropdownContainers = document.querySelectorAll('.has-dropdown');

  /* ─────────────────────────────────────────────
     1. Theme Management (Light / Dark)
     ───────────────────────────────────────────── */
  const THEME_STORAGE_KEY = 'meridian_corporate_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  }

  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  /* ─────────────────────────────────────────────
     2. Header Scroll Elevation Effect
     ───────────────────────────────────────────── */
  function handleScroll() {
    if (!header) return;
    const isScrolled = window.scrollY > 15;
    header.classList.toggle('header--scrolled', isScrolled);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ─────────────────────────────────────────────
     3. Desktop Dropdown & Mega-Menu Keyboard & Click
     ───────────────────────────────────────────── */
  dropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      const parent = trigger.closest('.has-dropdown');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close other open menus first
      dropdownTriggers.forEach(function (otherTrigger) {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          const otherMenu = otherTrigger.nextElementSibling;
          if (otherMenu) otherMenu.classList.remove('is-open');
        }
      });

      // Toggle current
      trigger.setAttribute('aria-expanded', (!isExpanded).toString());
      const menu = trigger.nextElementSibling;
      if (menu) {
        menu.classList.toggle('is-open', !isExpanded);
      }
    });
  });

  // Close desktop dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      dropdownTriggers.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        const menu = trigger.nextElementSibling;
        if (menu) menu.classList.remove('is-open');
      });
    }
  });

  /* ─────────────────────────────────────────────
     4. Search Overlay Toggle
     ───────────────────────────────────────────── */
  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('is-active');
    searchOverlay.setAttribute('aria-hidden', 'false');
    if (searchInput) {
      setTimeout(function () { searchInput.focus(); }, 100);
    }
  }

  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('is-active');
    searchOverlay.setAttribute('aria-hidden', 'true');
    if (searchTrigger) searchTrigger.focus();
  }

  if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  /* ─────────────────────────────────────────────
     5. Mobile Off-Canvas Drawer & Accordion
     ───────────────────────────────────────────── */
  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileHamburger) {
      mobileHamburger.classList.add('is-active');
      mobileHamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';

    // Focus close button
    if (drawerClose) {
      setTimeout(function () { drawerClose.focus(); }, 150);
    }
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileHamburger) {
      mobileHamburger.classList.remove('is-active');
      mobileHamburger.setAttribute('aria-expanded', 'false');
      mobileHamburger.focus();
    }
    document.body.style.overflow = '';
  }

  if (mobileHamburger) {
    mobileHamburger.addEventListener('click', function () {
      const isOpen = mobileDrawer.classList.contains('is-open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Mobile Accordion toggle
  accordionTriggers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!isExpanded).toString());
    });
  });

  // Close drawer when clicking internal anchor links
  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeDrawer();
    });
  });

  /* ─────────────────────────────────────────────
     6. Global Keyboard A11y (Escape key & Tab)
     ───────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      // Close search if open
      if (searchOverlay && searchOverlay.classList.contains('is-active')) {
        closeSearch();
        return;
      }
      // Close mobile drawer if open
      if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
        closeDrawer();
        return;
      }
      // Close desktop dropdowns
      dropdownTriggers.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        const menu = trigger.nextElementSibling;
        if (menu) menu.classList.remove('is-open');
      });
    }
  });

  // Window resize: auto-close mobile drawer on desktop breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1080 && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  /* ─────────────────────────────────────────────
     Initialization
     ───────────────────────────────────────────── */
  initTheme();
  handleScroll();

})();
```
