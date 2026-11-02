# AI Adaptive Intent Navbar — Component Code

File ini berisi kode komponen bersih (*clean isolated code*) yang mencakup ketiga bagian: **HTML Markup**, **CSS Styling**, dan **JavaScript Logic** untuk mengintegrasikan navigasi adaptif prediktif berbasis intent (*predictive morphing navbar*) ke proyek web Anda.

---

## 1. HTML Markup

Letakkan markup ini di dalam tag `<body>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AI Adaptive Intent Navbar — Predictive Morphing Navigation</title>
  <meta name="description" content="A context-aware predictive navbar that morphs its menus, links, and CTAs in real-time based on visitor dwell time, scroll intent, and persona inference.">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Ambient Light Pattern -->
  <div class="bg-grid-pattern" aria-hidden="true"></div>
  <div class="ai-light-orb" id="light-orb" aria-hidden="true"></div>


  <aside class="simulator-strip" aria-label="Intent Simulation Controls">
    <div class="sim-label"><span class="sim-pulse"></span><span>LIVE INTENT SIMULATOR:</span></div>
    <div class="simulator-buttons">
      <button class="sim-btn active" data-intent="exploring">01 / Explorer</button>
      <button class="sim-btn" data-intent="developer">02 / Developer</button>
      <button class="sim-btn" data-intent="enterprise">03 / Enterprise</button>
      <button class="sim-btn" data-intent="designer">04 / Designer</button>
      <a href="../index.html" class="sim-btn" style="text-decoration:none;margin-left:8px;border-color:rgba(255,255,255,0.2);color:#fff;">← Collection</a>
    </div>
  </aside>
  <!-- MORPHING PREDICTIVE NAVBAR -->
  <header class="nav-header">
    <nav class="nav-container" aria-label="Predictive AI Navigation">
      
      <!-- Brand -->
      <a href="#hero" class="nav-brand">
        <div class="brand-icon">⚡</div>
        <span class="brand-name">Synapse OS</span>
      </a>

      <!-- Adaptive Morphing Links -->
      <ul class="nav-menu" id="nav-menu">
        <!-- Injected dynamically by script.js based on intent -->
      </ul>

      <!-- Live Intent Status Pill -->
      <div class="intent-badge-pill" id="intent-badge" title="Live Persona Intent Inference">
        <span class="sparkle">✦</span>
        <span class="intent-text" id="intent-label">General Exploration</span>
        <span class="intent-conf" id="intent-conf">78%</span>
      </div>

      <!-- Adaptive Action CTAs -->
      <div class="nav-actions">
        <a href="../index.html" class="action-btn-adaptive btn-ghost-ai" id="action-ghost">Collection</a>
      </div>

      <!-- Mobile Hamburger Button -->
      <button class="nav-burger-btn" id="nav-burger" aria-label="Toggle Navigation Menu" aria-expanded="false" aria-controls="mobile-drawer">
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  </header>

  <!-- MOBILE DRAWER -->
  <div class="mobile-drawer" id="mobile-drawer" aria-hidden="true">
    <div class="mobile-drawer-backdrop" id="mobile-backdrop"></div>
    <div class="mobile-drawer-panel">
      <div class="mobile-drawer-header">
        <div class="nav-brand">
          <div class="brand-icon">⚡</div>
          <span class="brand-name">Synapse OS</span>
        </div>
        <button class="drawer-close-btn" id="drawer-close" aria-label="Close menu">&times;</button>
      </div>

      <div class="mobile-intent-status" id="mobile-intent-badge">
        <span class="sparkle">✦</span>
        <span class="intent-text" id="mobile-intent-label">General Exploration</span>
        <span class="intent-conf" id="mobile-intent-conf">78%</span>
      </div>

      <ul class="mobile-nav-menu" id="mobile-nav-menu">
        <!-- Injected dynamically by script.js -->
      </ul>

      <div class="mobile-drawer-actions">
        <a href="../index.html" class="action-btn-adaptive btn-ghost-ai">Back to Collection</a>
      </div>
    </div>
  </div>


  <script src="script.js"></script>
</body>
</html>
```

---

## 2. CSS Styling

Tambahkan CSS ini ke berkas stylesheet Anda (`style.css`):

```css
/* =============================================================
   AI ADAPTIVE INTENT NAVBAR — style.css
   Predictive Morphing Navigation System
   ============================================================= */

@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

/* ── Design Tokens ─────────────────────────────────────────── */
:root {
  --bg-dark: #090d16;
  --bg-surface: #0f172a;
  --bg-card: rgba(15, 23, 42, 0.7);
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-active: rgba(99, 102, 241, 0.4);

  --text-white: #ffffff;
  --text-slate-200: #e2e8f0;
  --text-slate-400: #94a3b8;
  --text-slate-500: #64748b;

  --ai-primary: #6366f1;
  --ai-cyan: #06b6d4;
  --ai-emerald: #10b981;
  --ai-amber: #f59e0b;
  --ai-glow: rgba(99, 102, 241, 0.35);

  --font-main: 'Plus Jakarta Sans', sans-serif;
  --font-code: 'JetBrains Mono', monospace;

  --ease-morph: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-morph: 420ms;
}

*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-dark);
  color: var(--text-slate-200);
  font-family: var(--font-main);
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

/* Background Gradients */
.bg-grid-pattern {
  position: fixed;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}

.ai-light-orb {
  position: fixed;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 380px;
  background: radial-gradient(ellipse at center, rgba(99, 102, 241, 0.18) 0%, rgba(6, 182, 212, 0.08) 50%, transparent 80%);
  filter: blur(70px);
  pointer-events: none;
  z-index: 0;
  transition: all 0.8s ease;
}

/* ═══════════════════════════════════════════════════════════════
   TOP SIMULATOR TOOLBAR
   ═══════════════════════════════════════════════════════════════ */
.simulator-strip {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: rgba(11, 15, 25, 0.95);
  border-bottom: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  z-index: 200;
  font-family: var(--font-code);
  font-size: 11px;
}

.simulator-strip .sim-label {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-slate-400);
}

.simulator-strip .sim-pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--ai-emerald);
  box-shadow: 0 0 8px var(--ai-emerald);
  animation: simPulse 1.5s infinite;
}

@keyframes simPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.simulator-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.sim-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  color: var(--text-slate-400);
  font-family: var(--font-code);
  font-size: 11px;
  padding: 3px 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.sim-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

.sim-btn.active {
  background: rgba(99, 102, 241, 0.2);
  border-color: var(--ai-primary);
  color: #fff;
}

/* ═══════════════════════════════════════════════════════════════
   PREDICTIVE AI NAVBAR (MORPHING CONTAINER)
   ═══════════════════════════════════════════════════════════════ */
.nav-header {
  position: fixed;
  top: 54px;
  left: 50%;
  transform: translateX(-50%);
  width: min(1200px, 94vw);
  z-index: 180;
  transition: all var(--duration-morph) var(--ease-morph);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 14px;
  background: rgba(15, 23, 42, 0.82);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid var(--border-subtle);
  border-radius: 9999px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
  transition: all var(--duration-morph) var(--ease-morph);
}

/* Brand Section */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  padding-left: 8px;
}

.brand-icon {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--ai-primary), var(--ai-cyan));
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 800;
  font-size: 15px;
  box-shadow: 0 0 16px var(--ai-glow);
}

.brand-name {
  font-weight: 800;
  font-size: 16px;
  color: var(--text-white);
  letter-spacing: -0.02em;
}

/* Morphing Menu Links */
.nav-menu {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  transition: all var(--duration-morph) var(--ease-morph);
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: 9999px;
  color: var(--text-slate-400);
  font-size: 13px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease;
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--text-white);
  background: rgba(255, 255, 255, 0.06);
}

.nav-link.active {
  color: var(--text-white);
  background: rgba(255, 255, 255, 0.1);
}

/* Adaptive Morphing Items (Show/Hide dynamically) */
.adaptive-item {
  transition: all var(--duration-morph) var(--ease-morph);
  overflow: hidden;
  max-width: 140px;
  opacity: 1;
}

.adaptive-item.collapsed {
  max-width: 0;
  opacity: 0;
  padding: 0;
  margin: 0;
  pointer-events: none;
}

/* Live Intent Badge */
.intent-badge-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.3);
  font-family: var(--font-code);
  font-size: 11px;
  transition: all var(--duration-morph) var(--ease-morph);
}

.intent-badge-pill .sparkle {
  color: var(--ai-cyan);
}

.intent-badge-pill .intent-text {
  color: var(--text-slate-200);
  font-weight: 600;
}

.intent-badge-pill .intent-conf {
  color: var(--ai-cyan);
  font-weight: 700;
}

/* Right Action Buttons */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.action-btn-adaptive {
  padding: 8px 18px;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.btn-primary-ai {
  background: linear-gradient(135deg, var(--ai-primary), #4f46e5);
  color: #fff;
  box-shadow: 0 4px 14px var(--ai-glow);
}

.btn-primary-ai:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5);
}

.btn-ghost-ai {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  color: var(--text-slate-200);
}

.btn-ghost-ai:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}

/* ═══════════════════════════════════════════════════════════════
   PAGE CONTENT (SYNAPSE AI ENTERPRISE SECTIONS)
   ═══════════════════════════════════════════════════════════════ */
.page-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
  padding: 160px 24px 120px;
}

/* Hero Section */
.hero-section {
  text-align: center;
  padding: 60px 0 100px;
}

.ai-chip {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: rgba(99, 102, 241, 0.1);
  border: 1px solid rgba(99, 102, 241, 0.3);
  font-family: var(--font-code);
  font-size: 12px;
  color: var(--ai-cyan);
  margin-bottom: 24px;
}

.hero-h1 {
  font-size: clamp(40px, 6vw, 76px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin-bottom: 24px;
  color: #fff;
}

.hero-h1 .gradient-ai {
  background: linear-gradient(135deg, #ffffff 10%, #cbd5e1 40%, var(--ai-cyan) 75%, var(--ai-primary) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-lead {
  font-size: clamp(16px, 2vw, 19px);
  color: var(--text-slate-400);
  max-width: 720px;
  margin: 0 auto 40px;
}

/* Content Blocks for Intent Dwell Detection */
.intent-detector-block {
  padding: 80px 40px;
  border-radius: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  backdrop-filter: blur(16px);
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.4s ease;
}

.intent-detector-block.focused {
  border-color: var(--border-active);
  box-shadow: 0 0 40px rgba(99, 102, 241, 0.15);
}

.block-tag {
  font-family: var(--font-code);
  font-size: 11px;
  text-transform: uppercase;
  color: var(--ai-cyan);
  letter-spacing: 0.1em;
  margin-bottom: 12px;
}

.block-title {
  font-size: 28px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
}

.block-text {
  color: var(--text-slate-400);
  font-size: 15px;
  max-width: 680px;
  margin-bottom: 30px;
}

/* Code Snippet Box for Developer Intent */
.code-preview {
  background: #060911;
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 20px;
  font-family: var(--font-code);
  font-size: 13px;
  color: #38bdf8;
  overflow-x: auto;
}

/* Enterprise Pricing / Compliance Grid */
.enterprise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.spec-card {
  padding: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--border-subtle);
  border-radius: 16px;
}

.spec-card h4 {
  font-size: 18px;
  color: #fff;
  margin-bottom: 8px;
}

.spec-card p {
  font-size: 13px;
  color: var(--text-slate-400);
}

/* ── Mobile Burger Button ──────────────────────────────────── */
.nav-burger-btn {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 10px;
  cursor: pointer;
  padding: 0;
  z-index: 101;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.nav-burger-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
}

.nav-burger-btn span {
  display: block;
  width: 18px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.25s ease;
}

.nav-burger-btn.is-active span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.nav-burger-btn.is-active span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.nav-burger-btn.is-active span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* ── Mobile Drawer ─────────────────────────────────────────── */
.mobile-drawer {
  position: fixed;
  inset: 0;
  z-index: 999;
  visibility: hidden;
  pointer-events: none;
  transition: visibility 0.3s ease;
}

.mobile-drawer.is-open {
  visibility: visible;
  pointer-events: auto;
}

.mobile-drawer-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(5, 7, 15, 0.75);
  backdrop-filter: blur(8px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mobile-drawer.is-open .mobile-drawer-backdrop {
  opacity: 1;
}

.mobile-drawer-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: min(85vw, 360px);
  height: 100%;
  background: #0b0f19;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.6);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
}

.mobile-drawer.is-open .mobile-drawer-panel {
  transform: translateX(0);
}

.mobile-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.drawer-close-btn {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 24px;
  line-height: 1;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
}

.drawer-close-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}

.mobile-intent-status {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background: rgba(99, 102, 241, 0.12);
  border: 1px solid rgba(99, 102, 241, 0.3);
  border-radius: 999px;
  margin-bottom: 24px;
  font-size: 12px;
  font-family: var(--font-mono, monospace);
  color: #c7d2fe;
}

.mobile-intent-status .sparkle {
  color: #818cf8;
}

.mobile-intent-status .intent-conf {
  margin-left: auto;
  font-weight: 700;
  color: #a5b4fc;
}

.mobile-nav-menu {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
}

.mobile-nav-menu .nav-link {
  display: block;
  padding: 12px 14px;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-slate-300, #cbd5e1);
  text-decoration: none;
  transition: background 0.2s ease, color 0.2s ease;
}

.mobile-nav-menu .nav-link:hover {
  background: rgba(255, 255, 255, 0.08);
  color: #fff;
}

.mobile-drawer-actions {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.mobile-drawer-actions .action-btn-adaptive {
  text-align: center;
  justify-content: center;
  width: 100%;
  padding: 12px 18px;
  font-size: 14px;
}

/* ── Responsive Breakpoints ───────────────────────────────── */
@media (max-width: 1024px) {
  .simulator-strip {
    overflow-x: auto;
    white-space: nowrap;
    justify-content: flex-start;
    padding: 8px 16px;
  }
  .simulator-buttons {
    flex-wrap: nowrap;
  }
}

@media (max-width: 900px) {
  .nav-header {
    top: 12px;
    padding: 0 16px;
  }
  .nav-container {
    padding: 8px 14px;
  }
  .nav-menu {
    display: none;
  }
  .intent-badge-pill {
    display: none;
  }
  .nav-burger-btn {
    display: flex;
  }
  .hero-title {
    font-size: clamp(32px, 6vw, 48px);
  }
}

@media (max-width: 640px) {
  .simulator-strip {
    font-size: 11px;
    padding: 6px 12px;
  }
  .nav-actions {
    display: none; /* Accessible inside mobile drawer */
  }
  .nav-brand .brand-name {
    font-size: 15px;
  }
  .page-container {
    padding: 110px 16px 60px;
  }
  .hero-section {
    padding: 30px 0 60px;
  }
  .spec-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 400px) {
  .nav-container {
    padding: 6px 10px;
  }
  .nav-brand .brand-name { font-size: 13px; }
  .hero-title { font-size: clamp(26px, 7vw, 36px); }
  .hero-subtitle { font-size: 13px; }
  .page-container { padding: 100px 12px 50px; }
  .hero-section { padding: 20px 0 40px; }
  .simulator-strip { font-size: 10px; padding: 5px 10px; }
}
```

---

## 3. JavaScript Logic

Sematkan script ini sebelum penutup tag `</body>`:

```javascript
/* =============================================================
   AI ADAPTIVE INTENT NAVBAR — script.js
   Predictive Intent Inference Engine & Dynamic Morphing
   ============================================================= */

(function () {
  'use strict';

  /* ── Intent Profiles ────────────────────────────────────────── */
  const INTENTS = {
    exploring: {
      id: 'exploring',
      label: 'General Exploration',
      confidence: 78,
      pillColor: '#6366f1',
      links: [
        { label: 'Platform', href: '#hero', class: '' },
        { label: 'Solutions', href: '#solutions', class: '' },
        { label: 'Technology', href: '#tech-specs', class: '' },
        { label: 'Enterprise', href: '#enterprise-security', class: '' },
        { label: 'Pricing', href: '#pricing', class: '' }
      ],
      primaryAction: { label: 'Get Started Free →', href: '#cta' },
      ghostAction: { label: 'Book Demo', href: '#demo' }
    },
    developer: {
      id: 'developer',
      label: 'Developer & Architecture',
      confidence: 96,
      pillColor: '#06b6d4',
      links: [
        { label: 'API Reference', href: '#tech-specs', class: '' },
        { label: 'Python / TS SDK', href: '#tech-specs', class: '' },
        { label: 'Edge Benchmarks', href: '#tech-specs', class: '' },
        { label: 'GitHub Repo', href: 'https://github.com', class: '' }
      ],
      primaryAction: { label: 'npm i @synapse/sdk 📋', href: '#copy-sdk' },
      ghostAction: { label: 'Interactive Sandbox', href: '#sandbox' }
    },
    enterprise: {
      id: 'enterprise',
      label: 'Enterprise Procurement',
      confidence: 93,
      pillColor: '#10b981',
      links: [
        { label: 'SOC2 & HIPAA', href: '#enterprise-security', class: '' },
        { label: '99.999% SLA', href: '#enterprise-security', class: '' },
        { label: 'Security Whitepaper', href: '#enterprise-security', class: '' },
        { label: 'ROI Calculator', href: '#pricing', class: '' }
      ],
      primaryAction: { label: 'Schedule Executive Demo →', href: '#demo' },
      ghostAction: { label: 'Custom Contract', href: '#sales' }
    },
    designer: {
      id: 'designer',
      label: 'Design & Visual Studio',
      confidence: 89,
      pillColor: '#f59e0b',
      links: [
        { label: 'UI Architecture', href: '#hero', class: '' },
        { label: 'Design Tokens', href: '#solutions', class: '' },
        { label: 'Figma Community Kit', href: '#hero', class: '' }
      ],
      primaryAction: { label: 'Download Design Kit 🎨', href: '#kit' },
      ghostAction: { label: 'Component Gallery', href: '#components' }
    }
  };

  /* ── State ─────────────────────────────────────────────────── */
  let currentIntent = 'exploring';
  let dwellTimers = {};

  /* ── DOM References ─────────────────────────────────────────── */
  const navMenu            = document.getElementById('nav-menu');
  const intentLabel        = document.getElementById('intent-label');
  const intentConf         = document.getElementById('intent-conf');
  const intentBadge        = document.getElementById('intent-badge');
  const actionPrimary      = document.getElementById('action-primary');
  const actionGhost        = document.getElementById('action-ghost');
  const simButtons         = document.querySelectorAll('.sim-btn');
  const lightOrb           = document.getElementById('light-orb');

  // Mobile Drawer Elements
  const navBurger          = document.getElementById('nav-burger');
  const mobileDrawer       = document.getElementById('mobile-drawer');
  const mobileBackdrop     = document.getElementById('mobile-backdrop');
  const drawerClose        = document.getElementById('drawer-close');
  const mobileNavMenu      = document.getElementById('mobile-nav-menu');
  const mobileIntentLabel  = document.getElementById('mobile-intent-label');
  const mobileIntentConf   = document.getElementById('mobile-intent-conf');
  const mobileIntentBadge  = document.getElementById('mobile-intent-badge');
  const mobileActionPrimary = document.getElementById('mobile-action-primary');
  const mobileActionGhost  = document.getElementById('mobile-action-ghost');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (navBurger) {
      navBurger.classList.add('is-active');
      navBurger.setAttribute('aria-expanded', 'true');
    }
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (navBurger) {
      navBurger.classList.remove('is-active');
      navBurger.setAttribute('aria-expanded', 'false');
    }
  }

  if (navBurger) {
    navBurger.addEventListener('click', () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });
  }

  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ── Morph Navbar into Intent State ─────────────────────────── */
  function morphNavbar(intentKey) {
    if (!INTENTS[intentKey]) return;
    currentIntent = intentKey;
    const config = INTENTS[intentKey];

    // Update Simulator toolbar active state
    simButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.intent === intentKey);
    });

    // Update Intent Badge
    if (intentLabel) intentLabel.textContent = config.label;
    if (intentConf)  intentConf.textContent  = `${config.confidence}%`;
    if (intentBadge) {
      intentBadge.style.borderColor = config.pillColor;
      intentBadge.style.background  = `${config.pillColor}1a`; // 10% opacity
    }

    // Update Ambient light orb tint
    if (lightOrb) {
      lightOrb.style.background = `radial-gradient(ellipse at center, ${config.pillColor}33 0%, rgba(6, 182, 212, 0.08) 50%, transparent 80%)`;
    }

    // Render morphing links with smooth transition
    if (navMenu) {
      navMenu.style.opacity = '0';
      navMenu.style.transform = 'translateY(-4px)';

      setTimeout(() => {
        navMenu.innerHTML = '';
        config.links.forEach(link => {
          const li = document.createElement('li');
          li.className = 'adaptive-item';
          const a = document.createElement('a');
          a.href = link.href;
          a.className = 'nav-link';
          a.textContent = link.label;
          li.appendChild(a);
          navMenu.appendChild(li);
        });

        navMenu.style.opacity = '1';
        navMenu.style.transform = 'translateY(0)';
      }, 180);
    }

    // Update Mobile Intent Badge
    if (mobileIntentLabel) mobileIntentLabel.textContent = config.label;
    if (mobileIntentConf)  mobileIntentConf.textContent  = `${config.confidence}%`;
    if (mobileIntentBadge) {
      mobileIntentBadge.style.borderColor = config.pillColor;
      mobileIntentBadge.style.background  = `${config.pillColor}22`;
    }

    // Render mobile drawer links
    if (mobileNavMenu) {
      mobileNavMenu.innerHTML = '';
      config.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'nav-link';
        a.textContent = link.label;
        a.addEventListener('click', () => closeDrawer());
        li.appendChild(a);
        mobileNavMenu.appendChild(li);
      });
    }

    // Morph primary CTA
    if (actionPrimary) {
      actionPrimary.textContent = config.primaryAction.label;
      actionPrimary.href = config.primaryAction.href;
      actionPrimary.style.background = `linear-gradient(135deg, ${config.pillColor}, #4f46e5)`;
    }
    if (mobileActionPrimary) {
      mobileActionPrimary.textContent = config.primaryAction.label;
      mobileActionPrimary.href = config.primaryAction.href;
      mobileActionPrimary.style.background = `linear-gradient(135deg, ${config.pillColor}, #4f46e5)`;
      mobileActionPrimary.addEventListener('click', () => closeDrawer());
    }

    // Morph ghost CTA
    if (actionGhost) {
      actionGhost.textContent = config.ghostAction.label;
      actionGhost.href = config.ghostAction.href;
    }
    if (mobileActionGhost) {
      mobileActionGhost.textContent = config.ghostAction.label;
      mobileActionGhost.href = config.ghostAction.href;
      mobileActionGhost.addEventListener('click', () => closeDrawer());
    }
  }


  /* ── Interactive Simulator Buttons ──────────────────────────── */
  simButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetIntent = btn.dataset.intent;
      morphNavbar(targetIntent);
    });
  });

  /* ── Copy SDK Command Feedback ──────────────────────────────── */
  if (actionPrimary) {
    actionPrimary.addEventListener('click', (e) => {
      if (actionPrimary.getAttribute('href') === '#copy-sdk') {
        e.preventDefault();
        navigator.clipboard.writeText('npm install @synapse/sdk');
        const prevText = actionPrimary.textContent;
        actionPrimary.textContent = 'Copied to Clipboard! ✓';
        setTimeout(() => { actionPrimary.textContent = prevText; }, 2000);
      }
    });
  }

  /* ── Initial State ──────────────────────────────────────────── */
  morphNavbar('exploring');

})();
```
