# Velocita Navbar - Component Code

File ini berisi kode bersih (clean code) yang HANYA berhubungan dengan navbar Velocita. Anda bisa menyalin kode ini untuk digunakan di project lain tanpa harus memisahkan dari kode demo/layout halaman.

---

## 1. HTML
Letakkan kode ini di dalam tag `<body>` Anda.

```html
<!-- ================================================================
       VELOCITA NAVBAR
       ================================================================ -->
  <nav class="velocita-nav" id="velocita-nav" role="navigation" aria-label="Main navigation">
    <div class="nav-shell">

      <!-- Left LED Wing Tip -->
      <div class="nav-wing nav-wing--left" aria-hidden="true">
        <div class="wing-led"></div>
      </div>

      <!-- Brand Mark -->
      <a href="#home" class="nav-brand" aria-label="Velocita — Home">
        <span class="brand-letter" aria-hidden="true">V</span>
        <span class="brand-dot" aria-hidden="true"></span>
      </a>

      <!-- Separator -->
      <span class="nav-sep" aria-hidden="true"></span>

      <!-- Navigation Links -->
      <ul class="nav-links" role="menubar" aria-label="Page sections">

        <!-- HOME -->
        <li role="none">
          <a href="#home" class="nav-link active" role="menuitem" aria-current="page" data-target="home" id="nav-home">
            <span class="link-icon-box">
              <svg class="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                <polyline points="9 22 9 12 15 12 15 22"/>
              </svg>
            </span>
            <span class="link-label">HOME</span>
            <span class="link-indicator" aria-hidden="true"></span>
          </a>
        </li>

        <!-- TEAM -->
        <li role="none">
          <a href="#team" class="nav-link" role="menuitem" data-target="team" id="nav-team">
            <span class="link-icon-box">
              <svg class="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </span>
            <span class="link-label">TEAM</span>
            <span class="link-indicator" aria-hidden="true"></span>
          </a>
        </li>

        <!-- GARAGE -->
        <li role="none">
          <a href="#garage" class="nav-link" role="menuitem" data-target="garage" id="nav-garage">
            <span class="link-icon-box">
              <svg class="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9L18 10l-2.7-4.1A2 2 0 0 0 13.6 5h-3.2a2 2 0 0 0-1.7 1L6 10l-2.5 1.1C2.7 11.3 2 12.1 2 13v3c0 .6.4 1 1 1h2"/>
                <circle cx="7" cy="17" r="2"/>
                <circle cx="17" cy="17" r="2"/>
              </svg>
            </span>
            <span class="link-label">GARAGE</span>
            <span class="link-indicator" aria-hidden="true"></span>
          </a>
        </li>

        <!-- CIRCUITS -->
        <li role="none">
          <a href="#circuits" class="nav-link" role="menuitem" data-target="circuits" id="nav-circuits">
            <span class="link-icon-box">
              <svg class="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                <line x1="4" y1="22" x2="4" y2="15"/>
              </svg>
            </span>
            <span class="link-label">CIRCUITS</span>
            <span class="link-indicator" aria-hidden="true"></span>
          </a>
        </li>

        <!-- NEWS -->
        <li role="none">
          <a href="#news" class="nav-link" role="menuitem" data-target="news" id="nav-news">
            <span class="link-icon-box">
              <svg class="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/>
                <path d="M18 14h-8"/>
                <path d="M15 18h-5"/>
                <path d="M10 6h8v4h-8z"/>
              </svg>
            </span>
            <span class="link-label">NEWS</span>
            <span class="link-indicator" aria-hidden="true"></span>
          </a>
        </li>

        <!-- STORE -->
        <li role="none">
          <a href="#store" class="nav-link" role="menuitem" data-target="store" id="nav-store">
            <span class="link-icon-box">
              <svg class="link-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </span>
            <span class="link-label">STORE</span>
            <span class="link-indicator" aria-hidden="true"></span>
          </a>
        </li>

      </ul>

      <!-- Separator -->
      <span class="nav-sep" aria-hidden="true"></span>

      <!-- Racing Flag Accent -->
      <div class="nav-flag" aria-hidden="true">
        <svg class="flag-icon" width="18" height="18" viewBox="0 0 20 20" fill="none">
          <rect x="0" y="0" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.9"/>
          <rect x="10" y="0" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.9"/>
          <rect x="5" y="5" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.9"/>
          <rect x="15" y="5" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.9"/>
          <rect x="0" y="10" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.45"/>
          <rect x="10" y="10" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.45"/>
          <rect x="5" y="15" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.2"/>
          <rect x="15" y="15" width="5" height="5" rx="0.5" fill="currentColor" opacity="0.2"/>
        </svg>
      </div>

      <!-- Right LED Wing Tip -->
      <div class="nav-wing nav-wing--right" aria-hidden="true">
        <div class="wing-led"></div>
      </div>

    </div>

  </nav>

  <!-- ==================== MOBILE (siblings to nav, not children) ==================== -->

  <!-- Mobile Toggle Button -->
  <button class="mobile-toggle" id="mobile-toggle"
    aria-label="Toggle navigation menu"
    aria-expanded="false"
    aria-controls="mobile-menu">
    <span class="toggle-line" aria-hidden="true"></span>
    <span class="toggle-line" aria-hidden="true"></span>
    <span class="toggle-line" aria-hidden="true"></span>
    <span class="toggle-glow" aria-hidden="true"></span>
  </button>

  <!-- Mobile Fullscreen Menu -->
  <div class="mobile-menu" id="mobile-menu" role="dialog" aria-hidden="true" aria-label="Navigation menu">
    <div class="mobile-menu-inner">

      <!-- Mobile Brand -->
      <div class="mobile-brand">
        <span class="brand-letter">V</span>
        <span class="brand-name">VELOCITA</span>
      </div>

      <!-- Mobile Links -->
      <ul class="mobile-links" role="menu">
        <li role="none"><a href="#home" class="mobile-link active" role="menuitem" data-target="home">
          <span class="ml-number">01</span><span class="ml-text">HOME</span>
        </a></li>
        <li role="none"><a href="#team" class="mobile-link" role="menuitem" data-target="team">
          <span class="ml-number">02</span><span class="ml-text">TEAM</span>
        </a></li>
        <li role="none"><a href="#garage" class="mobile-link" role="menuitem" data-target="garage">
          <span class="ml-number">03</span><span class="ml-text">GARAGE</span>
        </a></li>
        <li role="none"><a href="#circuits" class="mobile-link" role="menuitem" data-target="circuits">
          <span class="ml-number">04</span><span class="ml-text">CIRCUITS</span>
        </a></li>
        <li role="none"><a href="#news" class="mobile-link" role="menuitem" data-target="news">
          <span class="ml-number">05</span><span class="ml-text">NEWS</span>
        </a></li>
        <li role="none"><a href="#store" class="mobile-link" role="menuitem" data-target="store">
          <span class="ml-number">06</span><span class="ml-text">STORE</span>
        </a></li>
      </ul>

      <!-- Mobile Footer Accent -->
      <div class="mobile-footer" aria-hidden="true">
        <div class="mobile-led"></div>
      </div>

    </div>
  </div>
```

---

## 2. CSS
Letakkan kode ini di file `style.css` Anda.

```css
/* ============================================================
   VELOCITA — Racing Cockpit Navbar
   A motorsport-inspired floating navigation bar with
   carbon fiber textures, LED accent animations,
   and cockpit instrument aesthetics.
   ============================================================ */

/* ─────────────────────────────────────────────
   CSS Custom Properties
   ───────────────────────────────────────────── */
:root {
  /* Surface Colors */
  --color-bg: #050508;
  --color-surface: #0d0d12;
  --color-surface-raised: #141419;
  --color-surface-light: #1c1c24;

  /* Accent Colors */
  --accent-red: #e63946;
  --accent-red-bright: #ff4757;
  --accent-orange: #ff6b35;
  --accent-glow: rgba(230, 57, 70, 0.55);
  --accent-glow-soft: rgba(230, 57, 70, 0.12);
  --accent-glow-muted: rgba(230, 57, 70, 0.06);

  /* Text Colors */
  --text-primary: #eeeef2;
  --text-secondary: #787890;
  --text-muted: #484858;
  --text-accent: #ff5c6a;

  /* Borders */
  --border-subtle: rgba(255, 255, 255, 0.05);
  --border-light: rgba(255, 255, 255, 0.08);
  --border-accent: rgba(230, 57, 70, 0.25);

  /* Typography */
  --font-display: 'Orbitron', monospace, sans-serif;
  --font-body: 'Rajdhani', 'Segoe UI', sans-serif;

  /* Dimensions */
  --nav-height: 72px;
  --nav-max-width: 1100px;
  --nav-bottom: 30px;
  --icon-box: 38px;

  /* Transitions */
  --ease-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-quint: cubic-bezier(0.22, 1, 0.36, 1);
  --t-fast: 0.2s var(--ease-expo);
  --t-medium: 0.4s var(--ease-quint);
  --t-slow: 0.6s var(--ease-quint);
}


/* ─────────────────────────────────────────────
   Reset & Base
   ───────────────────────────────────────────── */
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--text-primary);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  text-decoration: none;
  color: inherit;
}

ul, li {
  list-style: none;
}

button {
  border: none;
  background: none;
  cursor: pointer;
  font: inherit;
  color: inherit;
}


/* ─────────────────────────────────────────────
   Reduced Motion
   ───────────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  html {
    scroll-behavior: auto;
  }
}


/* =============================================================
   VELOCITA NAVBAR — Main Container
   ============================================================= */
.velocita-nav {
  position: fixed;
  bottom: var(--nav-bottom);
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: min(var(--nav-max-width), 92vw);
  /* Entrance animation */
  animation: navEntrance 1s var(--ease-expo) 0.3s both;
}

@keyframes navEntrance {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(40px) scale(0.96);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0) scale(1);
  }
}

/* Ambient glow beneath navbar */
.velocita-nav::before {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 10%;
  right: 10%;
  height: 60%;
  background: radial-gradient(
    ellipse at 50% 80%,
    var(--accent-glow-soft) 0%,
    transparent 70%
  );
  filter: blur(25px);
  pointer-events: none;
  z-index: -1;
  animation: ambientPulse 3s ease-in-out infinite;
}

@keyframes ambientPulse {
  0%, 100% { opacity: 0.5; }
  50%      { opacity: 0.9; }
}


/* =============================================================
   Nav Shell — The Aerodynamic Body
   ============================================================= */
.nav-shell {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: var(--nav-height);
  /* Aerodynamic hexagonal shape */
  clip-path: polygon(
    0%   50%,
    1.2% 28%,
    3%   10%,
    5.5% 2%,
    8%   0%,
    92%  0%,
    94.5% 2%,
    97%  10%,
    98.8% 28%,
    100% 50%,
    98.8% 72%,
    97%  90%,
    94.5% 98%,
    92%  100%,
    8%   100%,
    5.5% 98%,
    3%   90%,
    1.2% 72%
  );
  /* Surface gradient */
  background: linear-gradient(
    180deg,
    #1a1a24 0%,
    #13131b 35%,
    #0f0f16 65%,
    #0c0c12 100%
  );
}

/* Carbon Fiber Texture */
.nav-shell::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(
      0deg,
      transparent,
      transparent 1px,
      rgba(255, 255, 255, 0.012) 1px,
      rgba(255, 255, 255, 0.012) 2px
    ),
    repeating-linear-gradient(
      90deg,
      transparent,
      transparent 1px,
      rgba(255, 255, 255, 0.012) 1px,
      rgba(255, 255, 255, 0.012) 2px
    );
  background-size: 3px 3px;
  pointer-events: none;
  z-index: 1;
}

/* Top Edge Highlight */
.nav-shell::after {
  content: '';
  position: absolute;
  top: 1px;
  left: 10%;
  right: 10%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.06) 15%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.06) 85%,
    transparent
  );
  z-index: 2;
  pointer-events: none;
}


/* =============================================================
   LED Wing Tips
   ============================================================= */
.nav-wing {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 5;
  width: 5px;
  height: 22px;
}

.nav-wing--left {
  left: 8px;
}

.nav-wing--right {
  right: 8px;
}

.wing-led {
  width: 100%;
  height: 100%;
  border-radius: 2.5px;
  background: linear-gradient(180deg, var(--accent-red), var(--accent-orange));
  box-shadow:
    0 0 6px  var(--accent-glow),
    0 0 16px var(--accent-glow),
    0 0 35px rgba(230, 57, 70, 0.2);
  animation: ledPulse 2.4s ease-in-out infinite;
}

@keyframes ledPulse {
  0%, 100% {
    opacity: 0.65;
    box-shadow:
      0 0 6px  var(--accent-glow),
      0 0 16px var(--accent-glow),
      0 0 35px rgba(230, 57, 70, 0.2);
  }
  50% {
    opacity: 1;
    box-shadow:
      0 0 10px var(--accent-glow),
      0 0 28px var(--accent-glow),
      0 0 55px rgba(230, 57, 70, 0.3);
  }
}


/* =============================================================
   Brand Mark
   ============================================================= */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 0 14px 0 32px;
  z-index: 3;
  flex-shrink: 0;
  text-decoration: none;
  outline: none;
  position: relative;
}

.nav-brand:focus-visible {
  outline: 2px solid var(--accent-red);
  outline-offset: 4px;
  border-radius: 4px;
}

.brand-letter {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 900;
  color: var(--accent-red);
  text-shadow:
    0 0 8px  var(--accent-glow),
    0 0 20px rgba(230, 57, 70, 0.25);
  letter-spacing: 3px;
  line-height: 1;
  user-select: none;
}

.brand-dot {
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--accent-red);
  box-shadow: 0 0 6px var(--accent-glow);
  animation: dotPulse 2s ease-in-out infinite;
  margin-top: -8px;
}

@keyframes dotPulse {
  0%, 100% { opacity: 0.4; transform: scale(0.8); }
  50%      { opacity: 1;   transform: scale(1.2); }
}


/* =============================================================
   Separator
   ============================================================= */
.nav-sep {
  display: block;
  width: 1px;
  height: 26px;
  background: linear-gradient(
    180deg,
    transparent 0%,
    var(--border-subtle) 20%,
    var(--border-light) 50%,
    var(--border-subtle) 80%,
    transparent 100%
  );
  flex-shrink: 0;
  z-index: 3;
}


/* =============================================================
   Navigation Links
   ============================================================= */
.nav-links {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 10px;
  flex: 1;
  justify-content: center;
  z-index: 3;
}

/* Individual Link */
.nav-link {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 7px 13px;
  border-radius: 10px;
  position: relative;
  transition:
    background var(--t-fast),
    transform var(--t-fast);
  cursor: pointer;
  outline: none;
  -webkit-tap-highlight-color: transparent;
}

.nav-link:focus-visible {
  outline: 2px solid var(--accent-red);
  outline-offset: 2px;
}

/* Icon Container */
.link-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--icon-box);
  height: var(--icon-box);
  border-radius: 9px;
  border: 1px solid var(--border-subtle);
  background: rgba(255, 255, 255, 0.018);
  transition:
    border-color var(--t-fast),
    background var(--t-fast),
    box-shadow var(--t-fast),
    transform var(--t-fast);
}

.link-icon {
  color: var(--text-secondary);
  transition: color var(--t-fast);
  flex-shrink: 0;
}

/* Label */
.link-label {
  font-family: var(--font-body);
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  color: var(--text-muted);
  transition: color var(--t-fast);
  white-space: nowrap;
}

/* Bottom Indicator */
.link-indicator {
  position: absolute;
  bottom: 3px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 18px;
  height: 2px;
  border-radius: 1px;
  background: var(--accent-red);
  box-shadow: 0 0 8px var(--accent-glow);
  transition: transform var(--t-medium);
  transform-origin: center;
}

/* ---- Hover State ---- */
.nav-link:hover {
  background: rgba(255, 255, 255, 0.03);
}

.nav-link:hover .link-icon-box {
  border-color: var(--border-accent);
  background: var(--accent-glow-muted);
  transform: translateY(-1px);
}

.nav-link:hover .link-icon {
  color: var(--text-primary);
}

.nav-link:hover .link-label {
  color: var(--text-secondary);
}

/* ---- Active State ---- */
.nav-link.active {
  background: var(--accent-glow-muted);
}

.nav-link.active .link-icon-box {
  border-color: var(--accent-red);
  background: rgba(230, 57, 70, 0.12);
  box-shadow:
    0 0 12px rgba(230, 57, 70, 0.12),
    inset 0 0 8px rgba(230, 57, 70, 0.06);
}

.nav-link.active .link-icon {
  color: var(--accent-red-bright);
}

.nav-link.active .link-label {
  color: var(--text-accent);
}

.nav-link.active .link-indicator {
  transform: translateX(-50%) scaleX(1);
}

/* Heat glow under active item */
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 36px;
  height: 10px;
  background: var(--accent-glow);
  filter: blur(10px);
  border-radius: 50%;
  pointer-events: none;
  animation: heatGlow 2.4s ease-in-out infinite;
}

@keyframes heatGlow {
  0%, 100% { opacity: 0.3; }
  50%      { opacity: 0.65; }
}


/* =============================================================
   Racing Flag Accent
   ============================================================= */
.nav-flag {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px 0 8px;
  z-index: 3;
  flex-shrink: 0;
}

.flag-icon {
  color: var(--accent-red);
  opacity: 0.45;
  transition: opacity var(--t-fast);
}

.nav-flag:hover .flag-icon {
  opacity: 0.75;
}


/* =============================================================
   Mobile Toggle
   ============================================================= */
.mobile-toggle {
  display: none;
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 1010;
  width: 54px;
  height: 54px;
  border-radius: 14px;
  background: linear-gradient(145deg, #18181f 0%, #0e0e14 100%);
  border: 1px solid var(--border-subtle);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.03) inset;
  transition:
    border-color var(--t-fast),
    box-shadow var(--t-fast);
  overflow: hidden;
}

.mobile-toggle:hover {
  border-color: var(--border-accent);
}

.mobile-toggle:focus-visible {
  outline: 2px solid var(--accent-red);
  outline-offset: 3px;
}

.toggle-line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-secondary);
  border-radius: 1px;
  transition: var(--t-medium);
  transform-origin: center;
}

/* Subtle glow backdrop */
.toggle-glow {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at center, var(--accent-glow-soft), transparent 70%);
  opacity: 0;
  transition: opacity var(--t-medium);
  pointer-events: none;
}

/* Toggle Active (X shape) */
.mobile-toggle.active {
  border-color: var(--border-accent);
}

.mobile-toggle.active .toggle-glow {
  opacity: 1;
}

.mobile-toggle.active .toggle-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
  background: var(--accent-red);
}

.mobile-toggle.active .toggle-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.mobile-toggle.active .toggle-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
  background: var(--accent-red);
}


/* =============================================================
   Mobile Fullscreen Menu
   ============================================================= */
.mobile-menu {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 1005;
  background: rgba(5, 5, 8, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  opacity: 0;
  visibility: hidden;
  overflow-y: auto;
  transition:
    opacity var(--t-medium),
    visibility var(--t-medium);
}

.mobile-menu.open {
  opacity: 1;
  visibility: visible;
}

.mobile-menu-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  padding: 40px 24px 80px;
  gap: 24px;
}

/* Mobile Brand */
.mobile-brand {
  display: flex;
  align-items: center;
  gap: 14px;
}

.mobile-brand .brand-letter {
  font-size: 2.2rem;
}

.brand-name {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: 5px;
}

/* Mobile Links */
.mobile-links {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 320px;
}

.mobile-link {
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  padding: 13px 22px;
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.015);
  font-family: var(--font-display);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 3px;
  color: var(--text-secondary);
  transition:
    background var(--t-fast),
    border-color var(--t-fast),
    color var(--t-fast),
    transform var(--t-medium),
    opacity var(--t-medium),
    box-shadow var(--t-fast);
  transform: translateY(24px);
  opacity: 0;
}

/* Staggered entrance */
.mobile-menu.open .mobile-link {
  transform: translateY(0);
  opacity: 1;
}

.mobile-menu.open li:nth-child(1) .mobile-link { transition-delay: 0.04s; }
.mobile-menu.open li:nth-child(2) .mobile-link { transition-delay: 0.08s; }
.mobile-menu.open li:nth-child(3) .mobile-link { transition-delay: 0.12s; }
.mobile-menu.open li:nth-child(4) .mobile-link { transition-delay: 0.16s; }
.mobile-menu.open li:nth-child(5) .mobile-link { transition-delay: 0.20s; }
.mobile-menu.open li:nth-child(6) .mobile-link { transition-delay: 0.24s; }

.ml-number {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: var(--text-muted);
  min-width: 20px;
}

.ml-text {
  flex: 1;
}

/* Mobile Link States */
.mobile-link:hover,
.mobile-link:focus-visible {
  background: var(--accent-glow-muted);
  border-color: var(--border-accent);
  color: var(--text-primary);
}

.mobile-link:focus-visible {
  outline: 2px solid var(--accent-red);
  outline-offset: 2px;
}

.mobile-link.active {
  border-color: var(--accent-red);
  color: var(--accent-red);
  background: rgba(230, 57, 70, 0.06);
  box-shadow: 0 0 24px rgba(230, 57, 70, 0.08);
}

.mobile-link.active .ml-number {
  color: rgba(230, 57, 70, 0.5);
}

/* Mobile Footer */
.mobile-footer {
  margin-top: auto;
  display: flex;
  justify-content: center;
}

.mobile-led {
  width: 50px;
  height: 3px;
  border-radius: 1.5px;
  background: linear-gradient(90deg, var(--accent-red), var(--accent-orange));
  box-shadow:
    0 0 8px  var(--accent-glow),
    0 0 18px var(--accent-glow);
  animation: ledPulse 2.4s ease-in-out infinite;
}


/* =============================================================
   Responsive
   ============================================================= */

/* Tablets & Small Laptops */
@media (max-width: 960px) {
  :root {
    --nav-max-width: 96vw;
    --icon-box: 34px;
    --nav-height: 66px;
  }

  .nav-link {
    padding: 6px 10px;
  }

  .link-label {
    font-size: 0.55rem;
    letter-spacing: 1.2px;
  }

  .link-icon svg {
    width: 16px;
    height: 16px;
  }

  .nav-brand {
    padding: 0 10px 0 26px;
  }

  .brand-letter {
    font-size: 1.25rem;
  }

  .nav-flag {
    padding: 0 16px 0 6px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .nav-shell {
    display: none;
  }

  .velocita-nav::before {
    display: none;
  }

  .mobile-toggle {
    display: flex;
  }

  .mobile-menu {
    display: block;
  }
}
```

---

## 3. JavaScript
Letakkan kode ini di file `script.js` Anda atau di dalam tag `<script>`.

```javascript
/**
 * ============================================================
 * Velocita — Racing Cockpit Navbar
 * Interactive navigation with active states, smooth scrolling,
 * mobile menu, keyboard accessibility, and scroll observation.
 * ============================================================
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     DOM References
     ───────────────────────────────────────────── */
  const nav           = document.getElementById('velocita-nav');
  const navLinks      = document.querySelectorAll('.nav-link');
  const mobileToggle  = document.getElementById('mobile-toggle');
  const mobileMenu    = document.getElementById('mobile-menu');
  const mobileLinks   = document.querySelectorAll('.mobile-link');
  const sections      = document.querySelectorAll('.demo-section');

  /** Respect user's reduced-motion preference */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;


  /* ─────────────────────────────────────────────
     Active State Management
     ───────────────────────────────────────────── */

  /**
   * Update the active link across both desktop and mobile navs.
   * @param {string} targetId — The section id to mark as active.
   */
  function setActiveLink(targetId) {
    // Desktop links
    navLinks.forEach(function (link) {
      var isActive = link.dataset.target === targetId;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    // Mobile links
    mobileLinks.forEach(function (link) {
      link.classList.toggle('active', link.dataset.target === targetId);
    });
  }


  /* ─────────────────────────────────────────────
     Smooth Scrolling
     ───────────────────────────────────────────── */

  /**
   * Scroll the viewport to a section.
   * @param {string} targetId — The section id to scroll to.
   */
  function scrollToSection(targetId) {
    var section = document.getElementById(targetId);
    if (!section) return;

    section.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start'
    });
  }


  /* ─────────────────────────────────────────────
     Navigation Click Handler
     ───────────────────────────────────────────── */

  /**
   * Handle a click on any nav link (desktop or mobile).
   * @param {Event} e — The click event.
   */
  function handleNavClick(e) {
    e.preventDefault();
    var target = e.currentTarget.dataset.target;
    if (!target) return;

    setActiveLink(target);
    scrollToSection(target);

    // Close the mobile menu if it's open
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  }


  /* ─────────────────────────────────────────────
     Scroll-Based Active Detection
     ───────────────────────────────────────────── */

  /**
   * Use IntersectionObserver to auto-highlight the nav link
   * corresponding to the section currently in view.
   */
  function initScrollObserver() {
    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }


  /* ─────────────────────────────────────────────
     Mobile Menu
     ───────────────────────────────────────────── */

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus the first link after transition
    var firstLink = mobileMenu.querySelector('.mobile-link');
    if (firstLink) {
      setTimeout(function () {
        firstLink.focus();
      }, 350);
    }
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    mobileToggle.focus();
  }

  function toggleMobileMenu() {
    if (mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }


  /* ─────────────────────────────────────────────
     Keyboard Navigation
     ───────────────────────────────────────────── */

  /**
   * Support Escape to close mobile menu,
   * and arrow keys for nav link traversal.
   */
  function handleKeydown(e) {
    // Escape closes mobile menu
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
      return;
    }

    var focused = document.activeElement;
    var isDesktopLink = focused && focused.classList.contains('nav-link');
    var isMobileLink  = focused && focused.classList.contains('mobile-link');

    if (!isDesktopLink && !isMobileLink) return;

    var links = isDesktopLink
      ? Array.from(navLinks)
      : Array.from(mobileLinks);
    var currentIndex = links.indexOf(focused);
    var nextIndex;

    if (isDesktopLink) {
      // Horizontal: Left/Right arrows
      if (e.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % links.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = (currentIndex - 1 + links.length) % links.length;
      }
    } else {
      // Vertical: Up/Down arrows
      if (e.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % links.length;
      } else if (e.key === 'ArrowUp') {
        nextIndex = (currentIndex - 1 + links.length) % links.length;
      }
    }

    if (nextIndex !== undefined) {
      e.preventDefault();
      links[nextIndex].focus();
    }
  }


  /* ─────────────────────────────────────────────
     Initialization
     ───────────────────────────────────────────── */

  function init() {
    // Desktop nav clicks
    navLinks.forEach(function (link) {
      link.addEventListener('click', handleNavClick);
    });

    // Mobile nav clicks
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', handleNavClick);
    });

    // Mobile toggle
    if (mobileToggle) {
      mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    // Keyboard
    document.addEventListener('keydown', handleKeydown);

    // Scroll-based active detection
    initScrollObserver();

    // Close mobile menu if window resizes back to desktop
    window.addEventListener('resize', function () {
      if (
        window.innerWidth > 768 &&
        mobileMenu &&
        mobileMenu.classList.contains('open')
      ) {
        closeMobileMenu();
      }
    });
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
```
