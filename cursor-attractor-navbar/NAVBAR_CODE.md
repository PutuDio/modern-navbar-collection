# Liquid Metal Cursor Attractor — Component Code

File ini berisi kode komponen bersih (*clean isolated code*) yang mencakup ketiga bagian: **HTML Markup**, **CSS Styling**, dan **JavaScript Logic** untuk mengintegrasikan navigasi partikel fluida cairan merkuri (*liquid chrome attractor*) ke proyek web Anda.

---

## 1. HTML Markup

Letakkan elemen canvas dan dock navigasi ini di dalam tag `<body>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Liquid Metal Cursor Attractor Navbar — Magnetic Fluid Dynamics</title>
  <meta name="description" content="An experimental gaze and cursor-attracted liquid metal navbar with fluid velocity scattering and magnetic particle physics.">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- Ambient Light Blobs -->
  <div class="ambient-glow" aria-hidden="true"></div>

  <!-- FIXED TOP STATUS BAR -->
  <header class="top-nav">
    <div style="display:flex; align-items:center; gap:20px;">
      <a href="../index.html" class="back-btn">← Collection</a>
      <a href="#" class="brand-wrapper">
        <div class="brand-orb"></div>
        <span class="brand-title">AURA Liquid</span>
      </a>
    </div>

    <div class="top-metrics">
      <div class="metric-pill">
        <span class="dot"></span>
        <span>VELOCITY:</span>
        <strong id="velocity-val" style="color:#fff;">0 px/s</strong>
      </div>
      <div class="metric-pill">
        <span>STATE:</span>
        <strong id="state-val" style="color:var(--neon-cyan);">RESTING LIQUID</strong>
      </div>
      <button id="toggle-mode-btn" class="back-btn" style="cursor:pointer; background:rgba(56,189,248,0.1); border-color:rgba(56,189,248,0.4);">
        Mode: Magnetic Dock
      </button>
    </div>
  </header>

  <!-- LIQUID PARTICLES CANVAS -->
  <canvas id="liquid-canvas"></canvas>

  <!-- MAGNETIC LIQUID DOCK NAVBAR -->
  <div class="liquid-dock-container" id="liquid-dock-container">
    <nav class="liquid-dock" id="liquid-dock" aria-label="Liquid Navigation Bar">
      <a href="#hero" class="liquid-item active">
        <span class="item-bead"></span>
        <span>Overview</span>
      </a>
      <a href="#dynamics" class="liquid-item">
        <span class="item-bead"></span>
        <span>Fluid Dynamics</span>
      </a>
      <a href="#generative" class="liquid-item">
        <span class="item-bead"></span>
        <span>Generative Mesh</span>
      </a>
      <a href="#showcase" class="liquid-item">
        <span class="item-bead"></span>
        <span>Showcase</span>
      </a>
      <a href="#contact" class="liquid-item">
        <span class="item-bead"></span>
        <span>Connect</span>
      </a>
    </nav>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 2. CSS Styling

Tambahkan CSS ini ke stylesheet Anda:

```css
/* =============================================================
   CURSOR ATTRACTOR NAVBAR — style.css
   Liquid Metal & Magnetic Particle Navigation System
   ============================================================= */

@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Space+Grotesk:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

/* ── Tokens & Variables ─────────────────────────────────────── */
:root {
  --bg-space: #06070a;
  --bg-surface: rgba(14, 17, 24, 0.7);
  --bg-card: rgba(18, 22, 32, 0.6);
  --border-glass: rgba(255, 255, 255, 0.12);
  --border-bright: rgba(255, 255, 255, 0.28);

  --chrome-100: #ffffff;
  --chrome-200: #e2e8f0;
  --chrome-300: #94a3b8;
  --chrome-glow: rgba(200, 225, 255, 0.4);
  --chrome-specular: radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 45%, #475569 85%, #0f172a 100%);

  --neon-cyan: #38bdf8;
  --neon-violet: #a855f7;
  --neon-silver: #e2e8f0;

  --font-display: 'Syne', sans-serif;
  --font-body: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --ease-elastic: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
}

/* ── Reset ──────────────────────────────────────────────────── */
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  width: 100%;
  min-height: 100vh;
  background-color: var(--bg-space);
  color: var(--chrome-200);
  font-family: var(--font-body);
  overflow-x: hidden;
  position: relative;
  -webkit-font-smoothing: antialiased;
}

/* Background Ambient Glow */
.ambient-glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;
}

.ambient-glow::before {
  content: '';
  position: absolute;
  top: 15%;
  left: 20%;
  width: 50vw;
  height: 50vw;
  background: radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(168, 85, 247, 0.04) 40%, transparent 70%);
  filter: blur(80px);
  animation: floatAmbient 16s ease-in-out infinite alternate;
}

.ambient-glow::after {
  content: '';
  position: absolute;
  bottom: 10%;
  right: 15%;
  width: 40vw;
  height: 40vw;
  background: radial-gradient(circle, rgba(168, 85, 247, 0.09) 0%, rgba(56, 189, 248, 0.03) 50%, transparent 70%);
  filter: blur(100px);
  animation: floatAmbient 20s ease-in-out infinite alternate-reverse;
}

@keyframes floatAmbient {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(60px, 40px) scale(1.15); }
}

/* ═══════════════════════════════════════════════════════════════
   FIXED TOP STATUS BAR
   ═══════════════════════════════════════════════════════════════ */
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: rgba(6, 7, 10, 0.65);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border-glass);
  z-index: 100;
}

.brand-wrapper {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
}

.brand-orb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--chrome-specular);
  box-shadow: 0 0 12px var(--chrome-glow);
  position: relative;
}

.brand-orb::after {
  content: '';
  position: absolute;
  inset: 2px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, #ffffff, transparent 60%);
}

.brand-title {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 19px;
  letter-spacing: -0.02em;
  color: var(--chrome-100);
}

.top-metrics {
  display: flex;
  align-items: center;
  gap: 24px;
}

.metric-pill {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 6px 14px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-glass);
  color: var(--chrome-300);
  display: flex;
  align-items: center;
  gap: 8px;
}

.metric-pill .dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--neon-cyan);
  box-shadow: 0 0 8px var(--neon-cyan);
  animation: pulseDot 2s infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.back-btn {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--chrome-200);
  text-decoration: none;
  padding: 6px 14px;
  border-radius: 8px;
  border: 1px solid var(--border-glass);
  transition: all 0.2s ease;
}

.back-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-color: var(--border-bright);
}

/* ═══════════════════════════════════════════════════════════════
   LIQUID METAL PARTICLE CANVAS OVERLAY
   ═══════════════════════════════════════════════════════════════ */
#liquid-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 80;
}

/* ═══════════════════════════════════════════════════════════════
   MAGNETIC FLOATING BEADS & LIQUID MENU DOCK
   ═══════════════════════════════════════════════════════════════ */
.liquid-dock-container {
  position: fixed;
  z-index: 90;
  pointer-events: auto;
  transition: opacity 0.3s ease;
}

.liquid-dock {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: rgba(18, 22, 34, 0.72);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid var(--border-bright);
  border-radius: 9999px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.15);
  transition: transform 0.4s var(--ease-elastic), box-shadow 0.3s ease;
}

.liquid-dock:hover {
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7), 0 0 45px rgba(168, 85, 247, 0.25);
}

.liquid-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 9999px;
  color: var(--chrome-300);
  text-decoration: none;
  font-family: var(--font-body);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: -0.01em;
  position: relative;
  transition: all 0.25s var(--ease-smooth);
  cursor: pointer;
}

.liquid-item:hover, .liquid-item.active {
  color: var(--chrome-100);
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.08);
}

.liquid-item.active {
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.25), rgba(168, 85, 247, 0.25));
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.liquid-item .item-bead {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--chrome-specular);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
  transition: transform 0.3s var(--ease-elastic);
}

.liquid-item:hover .item-bead {
  transform: scale(1.4);
}

/* Physics State Notice Overlay */
.physics-notice {
  position: fixed;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(14, 18, 28, 0.85);
  backdrop-filter: blur(12px);
  border: 1px solid var(--border-glass);
  border-radius: 9999px;
  padding: 8px 20px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--chrome-300);
  z-index: 70;
  display: flex;
  align-items: center;
  gap: 10px;
  pointer-events: none;
  animation: fadeInNotice 1s ease-out;
}

.physics-notice kbd {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid var(--border-bright);
  border-radius: 4px;
  padding: 2px 6px;
  color: #fff;
}

@keyframes fadeInNotice {
  from { opacity: 0; transform: translate(-50%, 15px); }
  to { opacity: 1; transform: translate(-50%, 0); }
}

/* ═══════════════════════════════════════════════════════════════
   PAGE CONTENT (SHOWCASE SECTIONS)
   ═══════════════════════════════════════════════════════════════ */
.content-wrapper {
  position: relative;
  z-index: 10;
  max-width: 1240px;
  margin: 0 auto;
  padding: 140px 32px 100px;
}

/* Hero Section */
.hero {
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--neon-cyan);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 24px;
}

.hero-tag::before {
  content: '';
  width: 28px;
  height: 2px;
  background: var(--neon-cyan);
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(42px, 7vw, 88px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
  color: var(--chrome-100);
}

.hero-title .gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 30%, #38bdf8 65%, #a855f7 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: clamp(16px, 2vw, 20px);
  color: var(--chrome-300);
  max-width: 680px;
  line-height: 1.6;
  margin-bottom: 44px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.primary-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border-radius: 9999px;
  background: linear-gradient(135deg, #38bdf8, #818cf8);
  color: #040814;
  font-weight: 700;
  font-size: 14px;
  text-decoration: none;
  box-shadow: 0 10px 30px rgba(56, 189, 248, 0.35);
  transition: all 0.25s ease;
}

.primary-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 40px rgba(56, 189, 248, 0.5);
}

.ghost-btn {
  display: inline-flex;
  align-items: center;
  padding: 14px 28px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-glass);
  color: var(--chrome-200);
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.ghost-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--border-bright);
}

/* Feature Grid Section */
.features-section {
  padding: 100px 0;
}

.section-header {
  margin-bottom: 60px;
}

.section-header h2 {
  font-family: var(--font-display);
  font-size: 38px;
  font-weight: 700;
  color: var(--chrome-100);
  margin-bottom: 12px;
}

.section-header p {
  color: var(--chrome-300);
  font-size: 16px;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 24px;
}

.liquid-card {
  padding: 36px;
  border-radius: 24px;
  background: var(--bg-card);
  border: 1px solid var(--border-glass);
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s var(--ease-smooth), border-color 0.3s ease;
}

.liquid-card:hover {
  transform: translateY(-6px);
  border-color: var(--border-bright);
}

.liquid-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--neon-cyan), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.liquid-card:hover::before {
  opacity: 1;
}

.card-num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--neon-cyan);
  margin-bottom: 20px;
}

.card-title {
  font-family: var(--font-display);
  font-size: 22px;
  font-weight: 700;
  color: var(--chrome-100);
  margin-bottom: 12px;
}

.card-desc {
  font-size: 14px;
  line-height: 1.6;
  color: var(--chrome-300);
}

/* ── Responsive adjustments ────────────────────────────────── */
@media (max-width: 900px) {
  .top-metrics .metric-pill:first-child { display: none; }
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .top-nav {
    height: 60px;
    padding: 0 16px;
  }
  .content-wrapper {
    padding: 90px 16px 120px;
  }
  .hero-title {
    font-size: clamp(28px, 7vw, 42px);
  }
  .liquid-dock {
    gap: 4px;
    padding: 6px 10px;
    max-width: 94vw;
  }
  .liquid-item {
    padding: 8px 12px;
    font-size: 13px;
  }
}

@media (max-width: 640px) {
  .top-metrics #toggle-mode-btn { display: none; }
  .cards-grid { grid-template-columns: 1fr; }
  .top-metrics .metric-pill { font-size: 10px; padding: 4px 10px; }
  .liquid-dock {
    overflow-x: auto;
    white-space: nowrap;
    justify-content: flex-start;
    border-radius: 999px;
    padding: 6px 8px;
  }
  .liquid-item {
    padding: 6px 10px;
    font-size: 12px;
    flex-shrink: 0;
  }
}

@media (max-width: 420px) {
  .brand-wrapper .brand-title { font-size: 16px; }
  .top-nav { padding: 0 12px; }
  .back-btn { font-size: 11px; padding: 4px 8px; }
  .hero-subtitle { font-size: 14px; }
}
```

---

## 3. JavaScript Logic

Sematkan script ini sebelum penutup tag `</body>`:

```javascript
/* =============================================================
   CURSOR ATTRACTOR NAVBAR — script.js
   Liquid Metal & Magnetic Particle Physics Simulation
   ============================================================= */

(function () {
  'use strict';

  /* ── Canvas Setup ───────────────────────────────────────────── */
  const canvas = document.getElementById('liquid-canvas');
  const ctx = canvas.getContext('2d');
  const dockContainer = document.getElementById('liquid-dock-container');
  const dock = document.getElementById('liquid-dock');
  const velocityBadge = document.getElementById('velocity-val');
  const stateBadge = document.getElementById('state-val');

  let width = 0;
  let height = 0;
  let dpr = window.devicePixelRatio || 1;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);
  }
  window.addEventListener('resize', resize);
  resize();

  /* ── Mouse & Velocity Tracking ──────────────────────────────── */
  const mouse = {
    x: width / 2,
    y: height / 2,
    prevX: width / 2,
    prevY: height / 2,
    vx: 0,
    vy: 0,
    speed: 0,
    isIdle: false,
    idleTimer: null,
    isDown: false
  };

  const dockPos = {
    x: width / 2,
    y: height - 100,
    targetX: width / 2,
    targetY: height - 100
  };

  let followCursorMode = false; // default bottom dock with fluid magnetic drift

  function updatePointer(clientX, clientY) {
    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;
    mouse.x = clientX;
    mouse.y = clientY;

    const dx = mouse.x - mouse.prevX;
    const dy = mouse.y - mouse.prevY;
    mouse.vx = dx;
    mouse.vy = dy;
    mouse.speed = Math.hypot(dx, dy);

    clearTimeout(mouse.idleTimer);
    mouse.isIdle = false;
    mouse.idleTimer = setTimeout(() => {
      mouse.isIdle = true;
      mouse.speed = 0;
    }, 150);

    // Update dock target position
    if (followCursorMode) {
      dockPos.targetX = Math.max(160, Math.min(width - 160, mouse.x));
      dockPos.targetY = Math.max(100, Math.min(height - 60, mouse.y + 60));
    } else {
      // Magnetic pull toward bottom dock when approaching
      const distToDock = Math.hypot(mouse.x - width / 2, mouse.y - (height - 80));
      if (distToDock < 250) {
        dockPos.targetX = width / 2 + (mouse.x - width / 2) * 0.15;
        dockPos.targetY = height - 80 + (mouse.y - (height - 80)) * 0.15;
      } else {
        dockPos.targetX = width / 2;
        dockPos.targetY = height - 80;
      }
    }
  }

  window.addEventListener('mousemove', (e) => {
    updatePointer(e.clientX, e.clientY);
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  window.addEventListener('mousedown', () => {
    mouse.isDown = true;
    scatterParticles(mouse.x, mouse.y, 16);
  });

  window.addEventListener('touchstart', (e) => {
    mouse.isDown = true;
    if (e.touches.length > 0) {
      updatePointer(e.touches[0].clientX, e.touches[0].clientY);
      scatterParticles(mouse.x, mouse.y, 14);
    }
  }, { passive: true });

  window.addEventListener('mouseup', () => {
    mouse.isDown = false;
  });

  window.addEventListener('touchend', () => {
    mouse.isDown = false;
  });

  /* ── Liquid Metal Particles ─────────────────────────────────── */
  const PARTICLE_COUNT = 32;
  const particles = [];

  class LiquidBead {
    constructor(id) {
      this.id = id;
      this.x = width / 2 + (Math.random() - 0.5) * 300;
      this.y = height / 2 + (Math.random() - 0.5) * 200;
      this.baseRadius = 6 + Math.random() * 8;
      this.radius = this.baseRadius;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.hue = Math.random() > 0.5 ? 200 : 270;
      this.friction = 0.94;
      this.mass = this.baseRadius / 4;
    }

    update() {
      // Distance to cursor
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.hypot(dx, dy);

      // Fast swipe velocity triggers scatter
      if (mouse.speed > 24 && dist < 220) {
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;
        const force = (mouse.speed / 15) * 12;
        this.vx -= Math.cos(angle) * force;
        this.vy -= Math.sin(angle) * force;
        this.radius = this.baseRadius * 0.8;
      } else {
        // Magnetic attraction to cursor when slow/calm
        if (dist > 40 && dist < 350) {
          const pull = 0.25 / this.mass;
          this.vx += (dx / dist) * pull;
          this.vy += (dy / dist) * pull;
        } else if (dist <= 40) {
          // Soft repel to avoid stacking exactly on cursor
          this.vx -= (dx / (dist || 1)) * 0.4;
          this.vy -= (dy / (dist || 1)) * 0.4;
        }
      }

      // Gravitational attraction towards floating dock center
      const dockDx = dockPos.x - this.x;
      const dockDy = dockPos.y - this.y;
      const dockDist = Math.hypot(dockDx, dockDy);
      if (dockDist < 300) {
        this.vx += (dockDx / dockDist) * 0.08;
        this.vy += (dockDy / dockDist) * 0.08;
      }

      // Apply physics
      this.vx *= this.friction;
      this.vy *= this.friction;
      this.x += this.vx;
      this.y += this.vy;

      // Soft restore radius
      this.radius += (this.baseRadius - this.radius) * 0.1;

      // Wall bounce
      if (this.x < this.radius) { this.x = this.radius; this.vx *= -0.8; }
      if (this.x > width - this.radius) { this.x = width - this.radius; this.vx *= -0.8; }
      if (this.y < this.radius) { this.y = this.radius; this.vy *= -0.8; }
      if (this.y > height - this.radius) { this.y = height - this.radius; this.vy *= -0.8; }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

      // Liquid Chrome Specular Gradient
      const grad = ctx.createRadialGradient(
        this.x - this.radius * 0.35,
        this.y - this.radius * 0.35,
        this.radius * 0.1,
        this.x,
        this.y,
        this.radius
      );
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.3, '#cbd5e1');
      grad.addColorStop(0.65, '#64748b');
      grad.addColorStop(0.9, '#1e293b');
      grad.addColorStop(1, '#0f172a');

      ctx.fillStyle = grad;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
      ctx.shadowBlur = 12;
      ctx.fill();

      // Core highlight rim
      ctx.beginPath();
      ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.25, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.fill();

      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new LiquidBead(i));
  }

  function scatterParticles(originX, originY, power = 15) {
    particles.forEach(p => {
      const dx = p.x - originX;
      const dy = p.y - originY;
      const dist = Math.hypot(dx, dy) || 1;
      const angle = Math.atan2(dy, dx);
      p.vx += Math.cos(angle) * (power / (dist * 0.05 + 1));
      p.vy += Math.sin(angle) * (power / (dist * 0.05 + 1));
    });
  }

  /* ── Connecting Liquid Tendrils (Metaball bridge) ─────────────── */
  function drawLiquidBridges() {
    ctx.save();
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const p1 = particles[i];
        const p2 = particles[j];
        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.hypot(dx, dy);

        if (dist < 65) {
          const alpha = (1 - dist / 65) * 0.55;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(203, 213, 225, ${alpha})`;
          ctx.lineWidth = (1 - dist / 65) * 6;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      }
    }
    ctx.restore();
  }

  /* ── Render Loop ────────────────────────────────────────────── */
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Update & draw liquid bridges
    drawLiquidBridges();

    // Update & draw beads
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    // Smooth lerp dock position
    dockPos.x += (dockPos.targetX - dockPos.x) * 0.12;
    dockPos.y += (dockPos.targetY - dockPos.y) * 0.12;

    if (dockContainer) {
      dockContainer.style.transform = `translate3d(${dockPos.x}px, ${dockPos.y}px, 0) translate(-50%, -50%)`;
    }

    // Update HUD metrics
    if (velocityBadge) {
      velocityBadge.textContent = `${Math.round(mouse.speed)} px/s`;
    }
    if (stateBadge) {
      if (mouse.speed > 24) {
        stateBadge.textContent = 'SCATTERING';
        stateBadge.style.color = '#f43f5e';
      } else if (mouse.speed > 2) {
        stateBadge.textContent = 'MAGNETIC ATTRACT';
        stateBadge.style.color = '#38bdf8';
      } else {
        stateBadge.textContent = 'RESTING LIQUID';
        stateBadge.style.color = '#a855f7';
      }
    }

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);

  /* ── Interactive Menu Items ─────────────────────────────────── */
  const menuItems = document.querySelectorAll('.liquid-item');
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      menuItems.forEach(m => m.classList.remove('active'));
      item.classList.add('active');

      const rect = item.getBoundingClientRect();
      scatterParticles(rect.left + rect.width / 2, rect.top + rect.height / 2, 22);

      const targetId = item.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetEl = document.querySelector(targetId);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  /* ── Toggle Mode Button (Docked vs Orbiting Cursor) ─────────── */
  const toggleModeBtn = document.getElementById('toggle-mode-btn');
  if (toggleModeBtn) {
    toggleModeBtn.addEventListener('click', () => {
      followCursorMode = !followCursorMode;
      toggleModeBtn.textContent = followCursorMode ? 'Mode: Follow Cursor' : 'Mode: Magnetic Dock';
      scatterParticles(mouse.x, mouse.y, 25);
    });
  }

  // Keyboard shortcut (Space / M)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'm' || e.key === 'M') {
      if (toggleModeBtn) toggleModeBtn.click();
    }
  });

})();
```
