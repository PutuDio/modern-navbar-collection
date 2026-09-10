# Supaste Dynamic Island Navbar — Component Code

File ini berisi kode komponen bersih (clean isolated code) yang **HANYA** berkaitan dengan **Supaste Dynamic Island Floating Pill Navbar** dan mobile drawer-nya. Anda dapat langsung menyalin kode ini ke project Anda sendiri tanpa perlu memisahkan dari konten demo hero atau clipboard HUD.

---

## 1. HTML Markup

Letakkan kode ini tepat di awal tag `<body>` aplikasi web Anda:

```html
<!-- ================================================================
     SUPASTE DYNAMIC ISLAND NAVBAR
     ================================================================ -->
<div class="island-nav-wrapper" role="banner">
  <nav class="island-nav" id="island-nav" aria-label="Main navigation">

    <!-- Brand -->
    <a href="#home" class="island-brand" aria-label="Supaste — Home">
      <div class="island-brand-icon" aria-hidden="true">
        <!-- Minimalist App Icon -->
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="3" width="12" height="10" rx="2" stroke="white" stroke-width="1.3"/>
          <path d="M5 3V2.5A1.5 1.5 0 0 1 9 2.5V3" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
          <path d="M4 7H10M4 9.5H8" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
        </svg>
      </div>
      <span class="island-brand-name">Supaste</span>
    </a>

    <!-- Separator -->
    <div class="island-sep" aria-hidden="true"></div>

    <!-- Nav Links -->
    <ul class="island-links" role="list">
      <li><a href="#features">Features</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#changelog">Changelog</a></li>
    </ul>

    <!-- CTA Button -->
    <a href="#download" class="island-cta" id="island-cta-download">
      <span class="island-cta-icon" aria-hidden="true">
        <!-- Apple Icon SVG -->
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 1.5C9.5 1.5 9.9 3.1 8.5 4.2C7.2 5.2 6 4.5 6 4.5" stroke="black" stroke-width="1.3" stroke-linecap="round"/>
          <path d="M2.5 9.5C2.5 11.5 3.8 12.8 5.2 12.8C5.8 12.8 6.3 12.5 6.8 12.5C7.3 12.5 7.8 12.8 8.5 12.8C10 12.8 11.5 11.2 11.5 9.2C11.5 7.5 10.3 6.2 8.5 5.8C7.8 5.6 7.1 5.7 6.5 5.7C5.9 5.7 5.2 5.5 4.5 5.8C3.3 6.3 2.5 7.8 2.5 9.5Z" fill="black"/>
        </svg>
      </span>
      Download for macOS
    </a>

    <!-- Mobile Burger Toggle -->
    <button class="island-burger" id="island-burger" aria-label="Toggle mobile menu" aria-expanded="false" aria-controls="island-drawer">
      <span></span>
      <span></span>
      <span></span>
    </button>

  </nav>
</div>

<!-- Mobile Drawer Sheet -->
<div class="island-drawer" id="island-drawer" role="dialog" aria-label="Mobile navigation" aria-modal="true">
  <div class="island-drawer-overlay" id="drawer-overlay"></div>
  <div class="island-drawer-sheet">
    <ul class="drawer-nav-links" role="list">
      <li><a href="#features">Features</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="#pricing">Pricing</a></li>
      <li><a href="#changelog">Changelog</a></li>
    </ul>
    <a href="#download" class="drawer-cta">
      <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
        <path d="M9.5 1.5C9.5 1.5 9.9 3.1 8.5 4.2C7.2 5.2 6 4.5 6 4.5" stroke="black" stroke-width="1.3" stroke-linecap="round"/>
        <path d="M2.5 9.5C2.5 11.5 3.8 12.8 5.2 12.8C5.8 12.8 6.3 12.5 6.8 12.5C7.3 12.5 7.8 12.8 8.5 12.8C10 12.8 11.5 11.2 11.5 9.2C11.5 7.5 10.3 6.2 8.5 5.8C7.8 5.6 7.1 5.7 6.5 5.7C5.9 5.7 5.2 5.5 4.5 5.8C3.3 6.3 2.5 7.8 2.5 9.5Z" fill="black"/>
      </svg>
      Download for macOS
    </a>
  </div>
</div>
```

---

## 2. CSS Styling

Tambahkan styles berikut ke file CSS Anda:

```css
/* ================================================================
   SUPASTE DYNAMIC ISLAND NAVBAR STYLES
   ================================================================ */
:root {
  --island-bg: rgba(10, 10, 12, 0.88);
  --island-border: rgba(255, 255, 255, 0.10);
  --island-shadow: 0 24px 60px rgba(0,0,0,0.55), 0 4px 12px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08);
  --island-blur: blur(28px) saturate(180%);
  --radius-pill: 9999px;
  --glass-text: rgba(255, 255, 255, 0.92);
  --glass-text-muted: rgba(255, 255, 255, 0.60);
  --duration-fast: 180ms;
  --duration-med: 320ms;
  --duration-slow: 500ms;
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
}

/* Island Wrapper */
.island-nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  padding-top: 16px;
  pointer-events: none;
}

/* Island Body */
.island-nav {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 9px 14px;
  background: var(--island-bg);
  border: 1px solid var(--island-border);
  border-radius: var(--radius-pill);
  box-shadow: var(--island-shadow);
  backdrop-filter: var(--island-blur);
  -webkit-backdrop-filter: var(--island-blur);
  pointer-events: all;
  transition: padding var(--duration-med) var(--ease-out),
              gap var(--duration-med) var(--ease-out),
              background var(--duration-med) var(--ease-out);
  max-width: 680px;
  width: max-content;
}

/* Morph on Scroll */
.island-nav.scrolled {
  padding: 7px 12px;
  gap: 8px;
  background: rgba(5, 5, 7, 0.95);
}

/* Brand */
.island-brand {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  flex-shrink: 0;
}

.island-brand-icon {
  width: 26px;
  height: 26px;
  background: linear-gradient(135deg, #5E9BEF, #2B6DEA);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(43, 109, 234, 0.4);
}

.island-brand-name {
  font-size: 13px;
  font-weight: 600;
  color: var(--glass-text);
  letter-spacing: -0.01em;
}

/* Separator */
.island-sep {
  width: 1px;
  height: 18px;
  background: rgba(255, 255, 255, 0.14);
  flex-shrink: 0;
}

/* Nav Links */
.island-links {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.island-links li a {
  display: block;
  padding: 5px 10px;
  font-size: 13px;
  font-weight: 500;
  color: var(--glass-text-muted);
  text-decoration: none;
  border-radius: var(--radius-pill);
  transition: color var(--duration-fast) ease, background var(--duration-fast) ease;
  white-space: nowrap;
  letter-spacing: -0.01em;
}

.island-links li a:hover {
  color: var(--glass-text);
  background: rgba(255, 255, 255, 0.08);
}

/* CTA */
.island-cta {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: #ffffff;
  color: #000000;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius-pill);
  border: none;
  cursor: pointer;
  transition: background var(--duration-fast) ease, transform var(--duration-fast) var(--ease-spring);
  white-space: nowrap;
  letter-spacing: -0.01em;
  flex-shrink: 0;
}

.island-cta:hover {
  background: #e8e8e8;
  transform: scale(1.02);
}

.island-cta:active {
  transform: scale(0.98);
}

/* Mobile Hamburger */
.island-burger {
  display: none;
  flex-direction: column;
  gap: 4.5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.island-burger span {
  display: block;
  width: 18px;
  height: 1.5px;
  background: var(--glass-text-muted);
  border-radius: 99px;
  transition: all var(--duration-med) var(--ease-out);
}

.island-burger.open span:nth-child(1) {
  transform: translateY(6px) rotate(45deg);
  background: var(--glass-text);
}
.island-burger.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.island-burger.open span:nth-child(3) {
  transform: translateY(-6px) rotate(-45deg);
  background: var(--glass-text);
}

/* Mobile Drawer */
.island-drawer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  pointer-events: none;
}

.island-drawer-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  opacity: 0;
  transition: opacity var(--duration-med) ease;
}

.island-drawer-sheet {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(18, 18, 22, 0.97);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0 0 24px 24px;
  padding: 80px 20px 32px;
  transform: translateY(-100%);
  transition: transform var(--duration-slow) var(--ease-out);
}

.island-drawer.open {
  pointer-events: all;
}

.island-drawer.open .island-drawer-overlay {
  opacity: 1;
}

.island-drawer.open .island-drawer-sheet {
  transform: translateY(0);
}

.drawer-nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0 0 24px 0;
  padding: 0;
}

.drawer-nav-links a {
  display: block;
  padding: 12px 16px;
  font-size: 17px;
  font-weight: 500;
  color: var(--glass-text-muted);
  text-decoration: none;
  border-radius: 12px;
  transition: color var(--duration-fast) ease, background var(--duration-fast) ease;
}

.drawer-nav-links a:hover {
  color: var(--glass-text);
  background: rgba(255, 255, 255, 0.08);
}

.drawer-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 20px;
  background: #ffffff;
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  border-radius: var(--radius-pill);
}

/* Responsive queries */
@media (max-width: 768px) {
  .island-links,
  .island-cta,
  .island-sep {
    display: none;
  }

  .island-burger {
    display: flex;
  }

  .island-nav {
    justify-content: space-between;
    width: calc(100vw - 32px);
    max-width: 100%;
  }
}
```

---

## 3. JavaScript Logic

Masukkan kode ini sebelum tag penutup `</body>`:

```javascript
(function () {
  'use strict';

  const islandNav     = document.getElementById('island-nav');
  const islandBurger  = document.getElementById('island-burger');
  const islandDrawer  = document.getElementById('island-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');

  if (!islandNav) return;

  // 1. Morph on Scroll
  let ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      requestAnimationFrame(function () {
        if (window.scrollY > 40) {
          islandNav.classList.add('scrolled');
        } else {
          islandNav.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // 2. Mobile Drawer Controls
  function openDrawer () {
    if (!islandDrawer || !islandBurger) return;
    islandDrawer.classList.add('open');
    islandBurger.classList.add('open');
    islandBurger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer () {
    if (!islandDrawer || !islandBurger) return;
    islandDrawer.classList.remove('open');
    islandBurger.classList.remove('open');
    islandBurger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (islandBurger) {
    islandBurger.addEventListener('click', function () {
      if (islandDrawer.classList.contains('open')) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  // Close drawer when clicking any link
  document.querySelectorAll('.drawer-nav-links a, .drawer-cta').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
})();
```
