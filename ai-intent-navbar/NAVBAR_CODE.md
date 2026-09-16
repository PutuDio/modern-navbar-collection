# AI Adaptive Intent Navbar — Component Code

File ini berisi kode komponen bersih (*clean isolated code*) yang mencakup ketiga bagian: **HTML Markup**, **CSS Styling**, dan **JavaScript Logic** untuk mengintegrasikan navigasi adaptif prediktif berbasis intent (*predictive morphing navbar*) ke proyek web Anda.

---

## 1. HTML Markup

Letakkan markup ini di dalam tag `<body>`:

```html
<!-- ================================================================
     AI ADAPTIVE INTENT NAVBAR & SIMULATOR
     ================================================================ -->

<!-- Top Persona Simulator Toolbar (Optional / Testing) -->
<aside class="simulator-strip" aria-label="Intent Simulation Controls">
  <div class="sim-label">
    <span class="sim-pulse"></span>
    <span>LIVE INTENT SIMULATOR:</span>
  </div>
  <div class="simulator-buttons">
    <button class="sim-btn active" data-intent="exploring">01 / Explorer</button>
    <button class="sim-btn" data-intent="developer">02 / Developer</button>
    <button class="sim-btn" data-intent="enterprise">03 / Enterprise</button>
    <button class="sim-btn" data-intent="designer">04 / Designer</button>
  </div>
</aside>

<!-- Predictive Morphing Navbar -->
<header class="nav-header">
  <nav class="nav-container" aria-label="Predictive AI Navigation">
    
    <!-- Brand -->
    <a href="#hero" class="nav-brand">
      <div class="brand-icon">⚡</div>
      <span class="brand-name">Synapse OS</span>
    </a>

    <!-- Adaptive Links (Dinamis via JS berdasarkan persona) -->
    <ul class="nav-menu" id="nav-menu">
      <li class="adaptive-item"><a href="#platform" class="nav-link">Platform</a></li>
      <li class="adaptive-item"><a href="#solutions" class="nav-link">Solutions</a></li>
      <li class="adaptive-item"><a href="#tech-specs" class="nav-link">Technology</a></li>
      <li class="adaptive-item"><a href="#enterprise-security" class="nav-link">Enterprise</a></li>
      <li class="adaptive-item"><a href="#pricing" class="nav-link">Pricing</a></li>
    </ul>

    <!-- Live Intent Confidence Pill -->
    <div class="intent-badge-pill" id="intent-badge" title="Live Persona Intent Inference">
      <span class="sparkle">✦</span>
      <span class="intent-text" id="intent-label">General Exploration</span>
      <span class="intent-conf" id="intent-conf">78%</span>
    </div>

    <!-- Adaptive Action CTAs -->
    <div class="nav-actions">
      <a href="#demo" class="action-btn-adaptive btn-ghost-ai" id="action-ghost">Book Demo</a>
      <a href="#cta" class="action-btn-adaptive btn-primary-ai" id="action-primary">Get Started Free →</a>
    </div>

  </nav>
</header>
```

---

## 2. CSS Styling

Tambahkan CSS ini ke berkas stylesheet Anda (`style.css`):

```css
/* ================================================================
   AI ADAPTIVE INTENT NAVBAR — CSS TOKENS & STYLES
   ================================================================ */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
  --bg-dark: #090d16;
  --bg-surface: #0f172a;
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-active: rgba(99, 102, 241, 0.4);

  --text-white: #ffffff;
  --text-slate-200: #e2e8f0;
  --text-slate-400: #94a3b8;

  --ai-primary: #6366f1;
  --ai-cyan: #06b6d4;
  --ai-emerald: #10b981;
  --ai-glow: rgba(99, 102, 241, 0.35);

  --font-main: 'Plus Jakarta Sans', sans-serif;
  --font-code: 'JetBrains Mono', monospace;

  --ease-morph: cubic-bezier(0.16, 1, 0.3, 1);
  --duration-morph: 420ms;
}

/* ── Top Simulator Toolbar ──────────────────────────────────── */
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

/* ── Morphing Navbar Header ─────────────────────────────────── */
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

/* Morphing Links */
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

.adaptive-item {
  transition: all var(--duration-morph) var(--ease-morph);
}

/* Intent Indicator Pill */
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

@media (max-width: 900px) {
  .simulator-strip { display: none; }
  .nav-header { top: 16px; }
  .nav-menu { display: none; }
  .intent-badge-pill { display: none; }
}
```

---

## 3. JavaScript Logic

Sematkan script ini sebelum penutup tag `</body>`:

```javascript
/* ================================================================
   AI ADAPTIVE INTENT NAVBAR — LOGIC & INFERENCE ENGINE
   ================================================================ */
(function () {
  'use strict';

  // 1. Definisi Profil Persona & Tautan
  const INTENTS = {
    exploring: {
      id: 'exploring',
      label: 'General Exploration',
      confidence: 78,
      pillColor: '#6366f1',
      links: [
        { label: 'Platform', href: '#hero' },
        { label: 'Solutions', href: '#solutions' },
        { label: 'Technology', href: '#tech-specs' },
        { label: 'Enterprise', href: '#enterprise-security' },
        { label: 'Pricing', href: '#pricing' }
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
        { label: 'API Reference', href: '#tech-specs' },
        { label: 'Python / TS SDK', href: '#tech-specs' },
        { label: 'Edge Benchmarks', href: '#tech-specs' },
        { label: 'GitHub Repo', href: 'https://github.com' }
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
        { label: 'SOC2 & HIPAA', href: '#enterprise-security' },
        { label: '99.999% SLA', href: '#enterprise-security' },
        { label: 'Security Whitepaper', href: '#enterprise-security' },
        { label: 'ROI Calculator', href: '#pricing' }
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
        { label: 'UI Architecture', href: '#hero' },
        { label: 'Design Tokens', href: '#solutions' },
        { label: 'Figma Community Kit', href: '#hero' }
      ],
      primaryAction: { label: 'Download Design Kit 🎨', href: '#kit' },
      ghostAction: { label: 'Component Gallery', href: '#components' }
    }
  };

  let currentIntent = 'exploring';
  let dwellTimers = {};

  const navMenu       = document.getElementById('nav-menu');
  const intentLabel   = document.getElementById('intent-label');
  const intentConf    = document.getElementById('intent-conf');
  const intentBadge   = document.getElementById('intent-badge');
  const actionPrimary = document.getElementById('action-primary');
  const actionGhost   = document.getElementById('action-ghost');
  const simButtons    = document.querySelectorAll('.sim-btn');

  // 2. Fungsi Transformasi Morphing Navbar
  function morphNavbar(intentKey) {
    if (!INTENTS[intentKey]) return;
    currentIntent = intentKey;
    const config = INTENTS[intentKey];

    // Update Simulator toolbar
    simButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.intent === intentKey);
    });

    // Update Intent Badge
    if (intentLabel) intentLabel.textContent = config.label;
    if (intentConf)  intentConf.textContent  = `${config.confidence}%`;
    if (intentBadge) {
      intentBadge.style.borderColor = config.pillColor;
      intentBadge.style.background  = `${config.pillColor}1a`;
    }

    // Re-render menu links dengan animasi transisi
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

    // Morph CTA buttons
    if (actionPrimary) {
      actionPrimary.textContent = config.primaryAction.label;
      actionPrimary.href = config.primaryAction.href;
      actionPrimary.style.background = `linear-gradient(135deg, ${config.pillColor}, #4f46e5)`;
    }

    if (actionGhost) {
      actionGhost.textContent = config.ghostAction.label;
      actionGhost.href = config.ghostAction.href;
    }
  }

  // 3. Deteksi Dwell Time & Scroll
  const sectionIntents = [
    { selector: '#tech-specs', intent: 'developer', minDwellMs: 1200 },
    { selector: '#enterprise-security', intent: 'enterprise', minDwellMs: 1400 },
    { selector: '#solutions', intent: 'designer', minDwellMs: 1500 }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const match = sectionIntents.find(s => entry.target.matches(s.selector));
      if (!match) return;

      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        dwellTimers[match.intent] = setTimeout(() => {
          if (currentIntent !== match.intent) {
            morphNavbar(match.intent);
          }
        }, match.minDwellMs);
      } else {
        clearTimeout(dwellTimers[match.intent]);
      }
    });
  }, { threshold: [0.4] });

  sectionIntents.forEach(s => {
    const el = document.querySelector(s.selector);
    if (el) observer.observe(el);
  });

  // 4. Tombol Simulator Toolbar
  simButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      morphNavbar(btn.dataset.intent);
    });
  });

  // Inisialisasi awal
  morphNavbar('exploring');
})();
```
