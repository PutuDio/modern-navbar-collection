# Semantic Mesh Navigator — Component Code

File ini berisi kode komponen bersih (*clean isolated code*) yang mencakup ketiga bagian: **HTML Markup**, **CSS Styling**, dan **JavaScript Logic** untuk mengintegrasikan navigasi graf jejaring semantik interaktif (*mind-map spring physics canvas*) ke proyek web Anda.

---

## 1. HTML Markup

Letakkan markup navigasi dan elemen canvas ini di dalam tag `<body>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nexus AI Research Lab — Semantic Mesh Navigation</title>
  <meta name="description" content="An experimental mind-map graph navigation where pages connect as semantic nodes with spring-physics and live edge traversal animations.">
  <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- ── Ambient background canvas (always visible) ───────────── -->
<canvas id="mesh-canvas" aria-hidden="true"></canvas>

<!-- ── Mesh overlay backdrop ────────────────────────────────── -->
<div class="mesh-overlay" id="mesh-overlay" role="dialog" aria-label="Semantic navigation mesh" aria-modal="true"></div>

<!-- ── Interactive graph canvas ──────────────────────────────── -->
<canvas id="graph-canvas" role="img" aria-label="Interactive semantic graph navigation — drag and hover nodes to explore" tabindex="0"></canvas>

<!-- ── Node hover card ───────────────────────────────────────── -->
<div class="node-card" id="node-card" role="tooltip" aria-live="polite">
  <div class="node-card-tag" id="card-tag">Knowledge Domain</div>
  <div class="node-card-title" id="card-title">Research</div>
  <div class="node-card-desc" id="card-desc">Explore connected research domains.</div>
  <div class="node-card-children" id="card-children"></div>
  <a class="node-card-cta" id="card-cta" href="#">Go to Research →</a>
</div>

<!-- ── Close mesh button ─────────────────────────────────────── -->
<button class="close-mesh-btn" id="close-mesh-btn" aria-label="Close semantic mesh navigation">
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 1l10 10M11 1L1 11" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>
  Close  <kbd>ESC</kbd>
</button>

<!-- ═══════════════════════════════════════════════════════════
     TOP MINIMAL BRAND BAR
     ═══════════════════════════════════════════════════════════ -->
<header class="top-bar" role="banner">
  <a href="#home" class="top-brand" aria-label="Nexus AI Research Lab — Home">
    <div class="brand-orb" aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="2.5" fill="white" opacity="0.9"/>
        <line x1="8" y1="2" x2="8" y2="5" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="8" y1="11" x2="8" y2="14" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="2" y1="8" x2="5" y2="8" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="11" y1="8" x2="14" y2="8" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
        <line x1="3.8" y1="3.8" x2="5.9" y2="5.9" stroke="white" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
        <line x1="10.1" y1="10.1" x2="12.2" y2="12.2" stroke="white" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
        <line x1="12.2" y1="3.8" x2="10.1" y2="5.9" stroke="white" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
        <line x1="5.9" y1="10.1" x2="3.8" y2="12.2" stroke="white" stroke-width="1.3" stroke-linecap="round" opacity="0.6"/>
      </svg>
    </div>
    <span class="brand-name">Nexus AI Lab</span>
    <span class="brand-badge">α 0.9</span>
  </a>

  <div class="top-bar-right">
    <span class="mesh-hint" aria-hidden="true">
      <span class="hint-dot"></span>
      <span id="hint-text">Click node to navigate</span>
    </span>
    <button class="btn-open-mesh" id="open-mesh-btn" aria-label="Open semantic mesh navigation" aria-haspopup="dialog">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-width="1.3"/>
        <circle cx="2.5" cy="2.5" r="1.5" stroke="currentColor" stroke-width="1.2"/>
        <circle cx="11.5" cy="2.5" r="1.5" stroke="currentColor" stroke-width="1.2"/>
        <circle cx="2.5" cy="11.5" r="1.5" stroke="currentColor" stroke-width="1.2"/>
        <circle cx="11.5" cy="11.5" r="1.5" stroke="currentColor" stroke-width="1.2"/>
        <line x1="3.6" y1="3.6" x2="5.5" y2="5.5" stroke="currentColor" stroke-width="1.2"/>
        <line x1="10.4" y1="3.6" x2="8.5" y2="5.5" stroke="currentColor" stroke-width="1.2"/>
        <line x1="3.6" y1="10.4" x2="5.5" y2="8.5" stroke="currentColor" stroke-width="1.2"/>
        <line x1="10.4" y1="10.4" x2="8.5" y2="8.5" stroke="currentColor" stroke-width="1.2"/>
      </svg>
      Open Mesh
      <kbd style="font-size:10px;background:rgba(255,255,255,0.08);border-radius:3px;padding:1px 4px;border:1px solid rgba(255,255,255,0.1);">⌘G</kbd>
    </button>
    <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Open menu" aria-expanded="false" aria-controls="mesh-mobile-drawer">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>
    </button>
  </div>
</header>

<!-- ── Mobile navigation drawer ──────────────────────────────── -->
<div class="mesh-mobile-drawer" id="mesh-mobile-drawer" aria-hidden="true">
  <div class="mesh-mobile-backdrop" id="mesh-mobile-backdrop"></div>
  <div class="mesh-mobile-panel">
    <div class="mesh-drawer-header">
      <div class="top-brand">
        <div class="brand-orb" aria-hidden="true"></div>
        <span class="brand-name">Nexus AI Lab</span>
      </div>
      <button class="mesh-drawer-close" id="mesh-drawer-close" aria-label="Close menu">&times;</button>
    </div>
    
    <div class="mesh-drawer-quick-actions">
      <button class="btn-primary" id="mobile-trigger-mesh" style="width:100%; justify-content:center; gap:8px;">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="2" stroke="currentColor" stroke-width="1.3"/><circle cx="2.5" cy="2.5" r="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="11.5" cy="2.5" r="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="2.5" cy="11.5" r="1.5" stroke="currentColor" stroke-width="1.2"/><circle cx="11.5" cy="11.5" r="1.5" stroke="currentColor" stroke-width="1.2"/></svg>
        Open Knowledge Mesh
      </button>
    </div>

    <div class="mesh-drawer-title">Knowledge Graph Nodes</div>
    <nav class="mesh-drawer-nav">
      <a href="#home" class="mesh-drawer-link"><span class="node-bullet" style="background:#6378ff;"></span>⬡ Home &amp; Overview</a>
      <a href="#research" class="mesh-drawer-link"><span class="node-bullet" style="background:#a78bfa;"></span>◎ Research Domains</a>
      <a href="#lab" class="mesh-drawer-link"><span class="node-bullet" style="background:#38bdf8;"></span>◈ Interactive Lab</a>
      <a href="#publications" class="mesh-drawer-link"><span class="node-bullet" style="background:#fbbf24;"></span>◻ Selected Publications</a>
      <a href="#team" class="mesh-drawer-link"><span class="node-bullet" style="background:#fb7185;"></span>◇ Research Fellows</a>
      <a href="../index.html" class="mesh-drawer-link" style="margin-top:12px; border-top:1px solid var(--border-subtle); padding-top:12px; color:var(--text-muted);">← Back to Collection</a>
    </nav>
  </div>
</div>

<!-- Semantic mesh navigation -->
<script src="script.js"></script>
</body>
</html>
```

---

## 2. CSS Styling

Tambahkan CSS ini ke stylesheet Anda:

```css
/* =============================================================
   SEMANTIC MESH NAVBAR — style.css
   Mind-Map Graph Navigation · AI Research Lab Theme
   ============================================================= */

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

/* ── Design Tokens ─────────────────────────────────────────── */
:root {
  --bg-void: #050508;
  --bg-surface: rgba(12, 14, 22, 0.92);
  --bg-card: rgba(18, 22, 38, 0.88);
  --bg-node: rgba(22, 28, 48, 0.95);

  --border-subtle: rgba(255, 255, 255, 0.07);
  --border-dim: rgba(255, 255, 255, 0.12);
  --border-glow: rgba(99, 120, 255, 0.4);

  --node-primary: #6378ff;
  --node-secondary: #a78bfa;
  --node-accent: #38bdf8;
  --node-emerald: #34d399;
  --node-amber: #fbbf24;
  --node-rose: #fb7185;

  --edge-color: rgba(99, 120, 255, 0.25);
  --edge-active: rgba(99, 120, 255, 0.7);
  --edge-hover: rgba(167, 139, 250, 0.5);

  --text-main: #f0f2ff;
  --text-muted: #7c85b0;
  --text-dim: #4a5075;

  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 160ms;
  --duration-med: 280ms;
  --duration-slow: 480ms;

  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-pill: 9999px;
}

/* ── Reset & Base ────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--bg-void);
  color: var(--text-main);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  cursor: default;
}

/* ── Canvas Layer (behind everything) ───────────────────────── */
#mesh-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 0;
  pointer-events: none;
}

/* ═══════════════════════════════════════════════════════════════
   SEMANTIC MESH NAVBAR
   ═══════════════════════════════════════════════════════════════ */

/* Top minimal brand bar */
.top-bar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 60px;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: rgba(5, 5, 8, 0.75);
  backdrop-filter: blur(20px) saturate(160%);
  -webkit-backdrop-filter: blur(20px) saturate(160%);
  border-bottom: 1px solid var(--border-subtle);
}

.top-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.brand-orb {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--node-primary), var(--node-secondary));
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 14px rgba(99, 120, 255, 0.5);
  flex-shrink: 0;
}

.brand-orb svg { display: block; }

.brand-name {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.brand-badge {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  color: var(--node-primary);
  background: rgba(99, 120, 255, 0.1);
  border: 1px solid rgba(99, 120, 255, 0.25);
  padding: 2px 7px;
  border-radius: var(--radius-pill);
  letter-spacing: 0.04em;
}

.top-bar-right {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mesh-hint {
  font-size: 12px;
  color: var(--text-dim);
  font-family: var(--font-mono);
  display: flex;
  align-items: center;
  gap: 6px;
}

.hint-dot {
  width: 6px; height: 6px;
  border-radius: 50%;
  background: var(--node-primary);
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(99, 120, 255, 0.5); }
  50% { opacity: 0.7; box-shadow: 0 0 0 4px rgba(99, 120, 255, 0); }
}

.btn-open-mesh {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: rgba(99, 120, 255, 0.12);
  border: 1px solid rgba(99, 120, 255, 0.3);
  border-radius: var(--radius-pill);
  color: var(--node-primary);
  font-size: 12px;
  font-weight: 600;
  font-family: var(--font-body);
  cursor: pointer;
  transition: all var(--duration-fast) ease;
}

.btn-open-mesh:hover {
  background: rgba(99, 120, 255, 0.22);
  border-color: rgba(99, 120, 255, 0.55);
  color: #a0afff;
  box-shadow: 0 0 16px rgba(99, 120, 255, 0.25);
}

/* ── Mesh Overlay (full-screen open state) ───────────────────── */
.mesh-overlay {
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(5, 5, 8, 0.82);
  backdrop-filter: blur(6px);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-slow) var(--ease-out);
}

.mesh-overlay.open {
  opacity: 1;
  pointer-events: all;
}

/* ── Interactive Graph Canvas ─────────────────────────────────── */
#graph-canvas {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  z-index: 101;
  cursor: crosshair;
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--duration-slow) var(--ease-out);
}

#graph-canvas.open {
  opacity: 1;
  pointer-events: all;
}

/* ── Node Tooltip / Context Card ─────────────────────────────── */
.node-card {
  position: fixed;
  z-index: 102;
  background: var(--bg-card);
  border: 1px solid var(--border-dim);
  border-radius: var(--radius-lg);
  padding: 16px 20px;
  min-width: 220px;
  max-width: 280px;
  pointer-events: none;
  opacity: 0;
  transform: translateY(8px) scale(0.96);
  transition: opacity var(--duration-med) var(--ease-out),
              transform var(--duration-med) var(--ease-spring);
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.6),
              0 0 0 1px rgba(255, 255, 255, 0.04);
}

.node-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
  pointer-events: all;
}

.node-card-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 6px;
}

.node-card-title {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 6px;
  letter-spacing: -0.02em;
}

.node-card-desc {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.5;
  margin-bottom: 12px;
}

.node-card-children {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 12px;
}

.child-chip {
  font-size: 10px;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: var(--text-muted);
}

.node-card-cta {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(99, 120, 255, 0.12);
  border: 1px solid rgba(99, 120, 255, 0.25);
  border-radius: var(--radius-md);
  color: var(--node-primary);
  font-size: 12px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: all var(--duration-fast) ease;
}

.node-card-cta:hover {
  background: rgba(99, 120, 255, 0.22);
  border-color: rgba(99, 120, 255, 0.5);
}

/* ── Close mesh button ─────────────────────────────────────── */
.close-mesh-btn {
  position: fixed;
  top: 18px;
  right: 32px;
  z-index: 103;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-pill);
  color: var(--text-muted);
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  font-family: var(--font-body);
  opacity: 0;
  pointer-events: none;
  transition: all var(--duration-med) var(--ease-out);
}

.close-mesh-btn.open {
  opacity: 1;
  pointer-events: all;
}

.close-mesh-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: var(--text-main);
}

/* ═══════════════════════════════════════════════════════════════
   PAGE CONTENT (Hero + Sections)
   ═══════════════════════════════════════════════════════════════ */

.page-content {
  position: relative;
  z-index: 1;
  padding-top: 60px;
}

/* ── Hero ─────────────────────────────────────────────────────── */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 24px 60px;
  position: relative;
}

.hero-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 5px 14px;
  border-radius: var(--radius-pill);
  background: rgba(99, 120, 255, 0.08);
  border: 1px solid rgba(99, 120, 255, 0.18);
  font-size: 12px;
  font-weight: 600;
  font-family: var(--font-mono);
  color: var(--node-primary);
  letter-spacing: 0.04em;
  margin-bottom: 24px;
}

.hero-title {
  font-family: var(--font-display);
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 700;
  letter-spacing: -0.04em;
  line-height: 1.08;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #ffffff 30%, var(--node-secondary) 80%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: clamp(15px, 2vw, 18px);
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto 36px;
  line-height: 1.65;
}

.hero-cta-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  flex-wrap: wrap;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  background: linear-gradient(135deg, var(--node-primary), var(--node-secondary));
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  border-radius: var(--radius-lg);
  text-decoration: none;
  cursor: pointer;
  border: none;
  box-shadow: 0 8px 28px rgba(99, 120, 255, 0.4);
  transition: all var(--duration-med) var(--ease-spring);
  font-family: var(--font-body);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 36px rgba(99, 120, 255, 0.55);
}

.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-dim);
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 600;
  border-radius: var(--radius-lg);
  text-decoration: none;
  cursor: pointer;
  font-family: var(--font-body);
  transition: all var(--duration-fast) ease;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-main);
}

/* ── Floating stat chips ─────────────────────────────────────── */
.hero-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 48px;
  flex-wrap: wrap;
}

.stat-chip {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 18px;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(12px);
}

.stat-value {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  color: var(--text-main);
  letter-spacing: -0.02em;
}

.stat-label {
  font-size: 12px;
  color: var(--text-muted);
  font-weight: 500;
}

/* ── Feature sections ─────────────────────────────────────────── */
.section {
  max-width: 1100px;
  margin: 0 auto;
  padding: 80px 24px;
}

.section-header {
  text-align: center;
  margin-bottom: 52px;
}

.section-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--node-primary);
  margin-bottom: 12px;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(26px, 4vw, 42px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.2;
  color: var(--text-main);
}

/* ── Cards grid ───────────────────────────────────────────────── */
.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.feature-card {
  background: var(--bg-node);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 28px;
  transition: all var(--duration-med) var(--ease-out);
  position: relative;
  overflow: hidden;
}

.feature-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  opacity: 0;
  transition: opacity var(--duration-fast) ease;
}

.feature-card:hover {
  border-color: var(--border-glow);
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(0, 0, 0, 0.4);
}

.feature-card:hover::before {
  opacity: 1;
}

.feature-card.c1::before { background: linear-gradient(90deg, var(--node-primary), var(--node-accent)); }
.feature-card.c2::before { background: linear-gradient(90deg, var(--node-secondary), var(--node-rose)); }
.feature-card.c3::before { background: linear-gradient(90deg, var(--node-accent), var(--node-emerald)); }
.feature-card.c4::before { background: linear-gradient(90deg, var(--node-emerald), var(--node-primary)); }
.feature-card.c5::before { background: linear-gradient(90deg, var(--node-amber), var(--node-rose)); }
.feature-card.c6::before { background: linear-gradient(90deg, var(--node-rose), var(--node-secondary)); }

.fc-icon {
  width: 44px; height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-bottom: 16px;
}

.fc-title {
  font-family: var(--font-display);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: var(--text-main);
  margin-bottom: 8px;
}

.fc-desc {
  font-size: 13px;
  color: var(--text-muted);
  line-height: 1.6;
}

/* ── Research Papers section ─────────────────────────────────── */
.papers-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.paper-item {
  display: flex;
  align-items: flex-start;
  gap: 18px;
  padding: 20px 24px;
  background: var(--bg-node);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all var(--duration-fast) ease;
}

.paper-item:hover {
  border-color: var(--border-dim);
  background: rgba(22, 28, 48, 1);
}

.paper-num {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--node-primary);
  padding-top: 3px;
  flex-shrink: 0;
}

.paper-meta {
  flex: 1;
}

.paper-category {
  font-family: var(--font-mono);
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-dim);
  margin-bottom: 4px;
}

.paper-title {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
  margin-bottom: 4px;
}

.paper-authors {
  font-size: 12px;
  color: var(--text-muted);
}

.paper-arrow {
  color: var(--text-dim);
  font-size: 16px;
  padding-top: 2px;
  transition: transform var(--duration-fast) ease;
}

.paper-item:hover .paper-arrow {
  transform: translateX(4px);
  color: var(--node-primary);
}

/* ── Footer ───────────────────────────────────────────────────── */
.page-footer {
  border-top: 1px solid var(--border-subtle);
  padding: 32px 24px;
  text-align: center;
}

.page-footer p {
  font-size: 12px;
  color: var(--text-dim);
  font-family: var(--font-mono);
}

/* ── Mesh Open Instruction Overlay (first time) ─────────────── */
.mesh-instruction {
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 50;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 20px;
  background: rgba(12, 14, 22, 0.9);
  border: 1px solid var(--border-dim);
  border-radius: var(--radius-pill);
  font-size: 12px;
  color: var(--text-muted);
  font-family: var(--font-mono);
  backdrop-filter: blur(12px);
  animation: float-hint 3s ease-in-out infinite;
}

@keyframes float-hint {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-5px); }
}

.mesh-instruction kbd {
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 4px;
  padding: 1px 6px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-main);
}

/* ── Mobile responsiveness & Drawer ────────────────────────── */
.mobile-menu-btn {
  display: none;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 8px 12px;
  color: var(--text-main);
  cursor: pointer;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.mobile-menu-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.25);
}

.mesh-mobile-drawer {
  position: fixed;
  inset: 0;
  z-index: 1000;
  visibility: hidden;
  pointer-events: none;
  transition: visibility 0.3s ease;
}

.mesh-mobile-drawer.open {
  visibility: visible;
  pointer-events: auto;
}

.mesh-mobile-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(6, 8, 18, 0.8);
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.mesh-mobile-drawer.open .mesh-mobile-backdrop {
  opacity: 1;
}

.mesh-mobile-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: min(85vw, 360px);
  height: 100%;
  background: #0d1021;
  border-left: 1px solid var(--border-subtle);
  box-shadow: -10px 0 40px rgba(0, 0, 0, 0.7);
  padding: 24px 20px;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  overflow-y: auto;
}

.mesh-mobile-drawer.open .mesh-mobile-panel {
  transform: translateX(0);
}

.mesh-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border-subtle);
}

.mesh-drawer-close {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
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
}

.mesh-drawer-quick-actions {
  margin-bottom: 24px;
}

.mesh-drawer-title {
  font-family: var(--font-mono, monospace);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-dim);
  margin-bottom: 12px;
}

.mesh-drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mesh-drawer-link {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 14px;
  border-radius: var(--radius-md);
  font-size: 14px;
  font-weight: 500;
  color: var(--text-muted);
  text-decoration: none;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid transparent;
  transition: all 0.2s ease;
}

.mesh-drawer-link:hover {
  background: rgba(255, 255, 255, 0.07);
  color: #fff;
  border-color: var(--border-subtle);
}

.node-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

@media (max-width: 900px) {
  .top-bar-right .mesh-hint { display: none; }
  .btn-open-mesh { padding: 7px 12px; font-size: 12px; }
}

@media (max-width: 768px) {
  .top-bar { padding: 0 16px; }
  .btn-open-mesh { display: none; }
  .mobile-menu-btn { display: flex; }
  .hero-title { font-size: clamp(30px, 7vw, 42px); }
  .features-grid { grid-template-columns: 1fr; }
  .hero-stats { gap: 12px; flex-wrap: wrap; }
  .node-detail-card { width: min(90vw, 320px); }
}

@media (max-width: 480px) {
  .hero { padding: 100px 0 50px; }
  .hero-cta-group { flex-direction: column; }
  .hero-cta-group .btn-primary, .hero-cta-group .btn-secondary { width: 100%; justify-content: center; }
  .top-brand .brand-name { font-size: 14px; }
  .top-brand .brand-badge { display: none; }
  .top-bar { padding: 0 12px; height: 52px; }
  .hero-title { font-size: clamp(24px, 6.5vw, 36px); }
  .hero-desc { font-size: 14px; padding: 0 16px; }
  .hero-stats { flex-direction: column; gap: 8px; }
  .section-container { padding: 0 16px; }
}
```

---

## 3. JavaScript Logic

Sematkan script ini sebelum penutup tag `</body>`:

```javascript
/* =============================================================
   SEMANTIC MESH NAVBAR — script.js
   Spring Physics Graph Navigation Engine
   ============================================================= */
(function () {
  'use strict';

  /* ── Graph Data ─────────────────────────────────────────────── */
  const GRAPH = {
    nodes: [
      {
        id: 'home', label: 'Home', icon: '⬡', color: '#6378ff',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 2.2,
        desc: 'The central nexus of the knowledge graph. Start your journey here.',
        tag: 'Root Node',
        children: ['research', 'lab', 'network', 'papers', 'about'],
        href: '#home',
        isRoot: true,
      },
      {
        id: 'research', label: 'Research', icon: '◎', color: '#a78bfa',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 1.5,
        desc: 'Explore papers, datasets, and ongoing investigation tracks across seven research domains.',
        tag: 'Knowledge Domain',
        children: ['papers', 'lab'],
        href: '#research',
      },
      {
        id: 'lab', label: 'Lab', icon: '◈', color: '#38bdf8',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 1.3,
        desc: 'Live experiments, agent sandboxes, and interactive model probes. Run computations directly.',
        tag: 'Sandbox',
        children: ['network', 'papers'],
        href: '#lab',
      },
      {
        id: 'network', label: 'Network', icon: '◇', color: '#34d399',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 1.2,
        desc: 'A graph of collaborating institutions, researchers, and shared datasets across 40+ nodes.',
        tag: 'Collaboration Graph',
        children: ['about'],
        href: '#network',
      },
      {
        id: 'papers', label: 'Papers', icon: '◻', color: '#fbbf24',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 1.1,
        desc: '214 peer-reviewed publications, preprints, and technical reports since 2019.',
        tag: 'Publication Archive',
        children: ['about'],
        href: '#papers',
      },
      {
        id: 'about', label: 'About', icon: '○', color: '#fb7185',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 1.0,
        desc: 'Mission, leadership, funding sources, and the story behind the neural inference lab.',
        tag: 'Meta',
        children: [],
        href: '#about',
      },
    ],
    edges: [
      { from: 'home', to: 'research' },
      { from: 'home', to: 'lab' },
      { from: 'home', to: 'network' },
      { from: 'home', to: 'papers' },
      { from: 'home', to: 'about' },
      { from: 'research', to: 'papers' },
      { from: 'research', to: 'lab' },
      { from: 'lab', to: 'network' },
      { from: 'network', to: 'about' },
      { from: 'papers', to: 'about' },
    ],
  };

  /* ── State ─────────────────────────────────────────────────── */
  let isOpen = false;
  let W = 0, H = 0;
  let animId = null;
  let mouseX = -1000, mouseY = -1000;
  let hoveredNode = null;
  let dragNode = null;
  let dragOffX = 0, dragOffY = 0;
  const nodeRadius = (n) => (n.isRoot ? 34 : 26) * (n.mass * 0.6);

  /* ── DOM refs ───────────────────────────────────────────────── */
  const bgCanvas    = document.getElementById('mesh-canvas');
  const graphCanvas = document.getElementById('graph-canvas');
  const meshOverlay = document.getElementById('mesh-overlay');
  const nodeCard    = document.getElementById('node-card');
  const openBtn     = document.getElementById('open-mesh-btn');
  const closeBtn    = document.getElementById('close-mesh-btn');
  const instruction = document.getElementById('mesh-instruction');

  // Mobile Drawer elements
  const mobileMenuBtn     = document.getElementById('mobile-menu-btn');
  const mobileDrawer      = document.getElementById('mesh-mobile-drawer');
  const mobileBackdrop    = document.getElementById('mesh-mobile-backdrop');
  const mobileCloseBtn    = document.getElementById('mesh-drawer-close');
  const mobileTriggerMesh = document.getElementById('mobile-trigger-mesh');
  const mobileLinks       = document.querySelectorAll('.mesh-drawer-link');

  const bgCtx   = bgCanvas ? bgCanvas.getContext('2d') : null;
  const graphCtx = graphCanvas ? graphCanvas.getContext('2d') : null;

  /* ── Layout helpers ─────────────────────────────────────────── */
  function positionNodes() {
    W = window.innerWidth;
    H = window.innerHeight;
    const cx = W / 2;
    const cy = H / 2;
    const root = GRAPH.nodes.find(n => n.isRoot);
    root.x = cx; root.y = cy;

    const leaves = GRAPH.nodes.filter(n => !n.isRoot);
    const radius = Math.min(W, H) * 0.28;
    leaves.forEach((n, i) => {
      const angle = (i / leaves.length) * Math.PI * 2 - Math.PI / 2;
      n.x = cx + Math.cos(angle) * radius;
      n.y = cy + Math.sin(angle) * radius;
      n.vx = 0; n.vy = 0;
    });
  }

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    if (bgCanvas) { bgCanvas.width = W; bgCanvas.height = H; }
    if (graphCanvas) { graphCanvas.width = W; graphCanvas.height = H; }
  }

  window.addEventListener('resize', () => {
    resize();
    if (!isOpen) positionNodes();
  });

  /* ── Physics spring update ───────────────────────────────────── */
  const K_SPRING   = 0.035;   // spring strength to target position
  const DAMPING    = 0.80;    // velocity damping per frame
  const REPULSION  = 9000;    // node-to-node repulsion
  const MOUSE_PULL = 260;     // how close mouse must be to attract
  const MOUSE_STR  = 0.022;   // mouse pull/repulsion strength

  function updatePhysics() {
    const cx = W / 2;
    const cy = H / 2;
    const root = GRAPH.nodes.find(n => n.isRoot);

    // Home node always returns to center
    root.vx += (cx - root.x) * 0.08;
    root.vy += (cy - root.y) * 0.08;

    // Leaf spring targets (orbiting around center based on angle)
    const leaves = GRAPH.nodes.filter(n => !n.isRoot);
    const baseRadius = Math.min(W, H) * 0.28;

    leaves.forEach((n, i) => {
      const angle = (i / leaves.length) * Math.PI * 2 - Math.PI / 2;
      const targetX = cx + Math.cos(angle) * baseRadius;
      const targetY = cy + Math.sin(angle) * baseRadius;

      // Spring toward target position
      n.vx += (targetX - n.x) * K_SPRING;
      n.vy += (targetY - n.y) * K_SPRING;
    });

    // Repulsion between all nodes
    for (let i = 0; i < GRAPH.nodes.length; i++) {
      for (let j = i + 1; j < GRAPH.nodes.length; j++) {
        const a = GRAPH.nodes[i];
        const b = GRAPH.nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist2 = dx * dx + dy * dy + 1;
        const force = REPULSION / dist2;
        a.vx -= (dx / Math.sqrt(dist2)) * force;
        a.vy -= (dy / Math.sqrt(dist2)) * force;
        b.vx += (dx / Math.sqrt(dist2)) * force;
        b.vy += (dy / Math.sqrt(dist2)) * force;
      }
    }

    // Mouse interaction
    GRAPH.nodes.forEach(n => {
      if (dragNode === n) return;
      const dx = mouseX - n.x;
      const dy = mouseY - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_PULL) {
        const factor = (1 - dist / MOUSE_PULL) * MOUSE_STR;
        n.vx += dx * factor;
        n.vy += dy * factor;
      }
    });

    // Integrate velocities
    GRAPH.nodes.forEach(n => {
      if (dragNode === n) return;
      n.vx *= DAMPING;
      n.vy *= DAMPING;
      n.x  += n.vx;
      n.y  += n.vy;

      // Boundary soft clamping
      const r = nodeRadius(n);
      const pad = r + 80;
      if (n.x < pad) n.vx += (pad - n.x) * 0.1;
      if (n.x > W - pad) n.vx -= (n.x - (W - pad)) * 0.1;
      if (n.y < pad) n.vy += (pad - n.y) * 0.1;
      if (n.y > H - pad) n.vy -= (n.y - (H - pad)) * 0.1;
    });
  }

  /* ── Background particle field ─────────────────────────────── */
  const BG_PARTICLES = Array.from({ length: 80 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.5 + 0.3,
    speed: Math.random() * 0.00015 + 0.00005,
    offset: Math.random() * Math.PI * 2,
  }));

  function drawBackground(t) {
    if (!bgCtx) return;
    bgCtx.clearRect(0, 0, W, H);
    BG_PARTICLES.forEach(p => {
      const px = ((p.x + p.speed * t * 0.1) % 1) * W;
      const py = ((p.y + Math.sin(t * 0.001 + p.offset) * 0.0003) % 1) * H;
      bgCtx.beginPath();
      bgCtx.arc(px, py, p.r, 0, Math.PI * 2);
      bgCtx.fillStyle = `rgba(99,120,255,${0.15 + Math.sin(t * 0.002 + p.offset) * 0.08})`;
      bgCtx.fill();
    });
  }

  /* ── Graph draw ─────────────────────────────────────────────── */
  function drawGraph() {
    if (!graphCtx || !isOpen) return;
    graphCtx.clearRect(0, 0, W, H);

    // Draw edges
    GRAPH.edges.forEach(e => {
      const from = GRAPH.nodes.find(n => n.id === e.from);
      const to   = GRAPH.nodes.find(n => n.id === e.to);
      if (!from || !to) return;

      const isHovered = hoveredNode && (hoveredNode.id === from.id || hoveredNode.id === to.id);

      graphCtx.beginPath();
      graphCtx.moveTo(from.x, from.y);
      graphCtx.lineTo(to.x, to.y);
      graphCtx.strokeStyle = isHovered
        ? `rgba(167,139,250,0.55)`
        : `rgba(99,120,255,0.18)`;
      graphCtx.lineWidth = isHovered ? 1.5 : 1;
      graphCtx.stroke();

      // Animated dot traveling along edge
      const progress = ((Date.now() % 3000) / 3000 + (GRAPH.edges.indexOf(e) * 0.15)) % 1;
      const dotX = from.x + (to.x - from.x) * progress;
      const dotY = from.y + (to.y - from.y) * progress;
      graphCtx.beginPath();
      graphCtx.arc(dotX, dotY, 2, 0, Math.PI * 2);
      graphCtx.fillStyle = isHovered
        ? 'rgba(167,139,250,0.9)'
        : 'rgba(99,120,255,0.5)';
      graphCtx.fill();
    });

    // Draw nodes
    GRAPH.nodes.forEach(n => {
      const r = nodeRadius(n);
      const isHov = hoveredNode === n;

      // Glow
      if (isHov || n.isRoot) {
        const grd = graphCtx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 2.5);
        grd.addColorStop(0, n.color + '40');
        grd.addColorStop(1, n.color + '00');
        graphCtx.beginPath();
        graphCtx.arc(n.x, n.y, r * 2.5, 0, Math.PI * 2);
        graphCtx.fillStyle = grd;
        graphCtx.fill();
      }

      // Outer ring (hover)
      if (isHov) {
        graphCtx.beginPath();
        graphCtx.arc(n.x, n.y, r + 5, 0, Math.PI * 2);
        graphCtx.strokeStyle = n.color + 'AA';
        graphCtx.lineWidth = 1.5;
        graphCtx.stroke();
      }

      // Node body
      const grd2 = graphCtx.createRadialGradient(n.x - r * 0.3, n.y - r * 0.3, 0, n.x, n.y, r);
      grd2.addColorStop(0, n.color + 'EE');
      grd2.addColorStop(0.6, n.color + 'AA');
      grd2.addColorStop(1, n.color + '55');
      graphCtx.beginPath();
      graphCtx.arc(n.x, n.y, r, 0, Math.PI * 2);
      graphCtx.fillStyle = grd2;
      graphCtx.fill();

      // Inner border
      graphCtx.beginPath();
      graphCtx.arc(n.x, n.y, r, 0, Math.PI * 2);
      graphCtx.strokeStyle = n.color + '88';
      graphCtx.lineWidth = 1;
      graphCtx.stroke();

      // Label
      graphCtx.font = `${n.isRoot ? '600' : '500'} ${n.isRoot ? 14 : 12}px 'Space Grotesk', sans-serif`;
      graphCtx.fillStyle = '#ffffff';
      graphCtx.textAlign = 'center';
      graphCtx.textBaseline = 'middle';
      graphCtx.fillText(n.label, n.x, n.y);

      // Children count badge (for non-leaf nodes)
      if (n.children && n.children.length > 0) {
        const bx = n.x + r * 0.72;
        const by = n.y - r * 0.72;
        graphCtx.beginPath();
        graphCtx.arc(bx, by, 9, 0, Math.PI * 2);
        graphCtx.fillStyle = '#0b0d14';
        graphCtx.fill();
        graphCtx.strokeStyle = n.color + 'CC';
        graphCtx.lineWidth = 1.2;
        graphCtx.stroke();
        graphCtx.font = '500 9px Inter, sans-serif';
        graphCtx.fillStyle = n.color;
        graphCtx.textAlign = 'center';
        graphCtx.textBaseline = 'middle';
        graphCtx.fillText(n.children.length, bx, by);
      }
    });
  }

  /* ── Animation loop ─────────────────────────────────────────── */
  let lastT = 0;
  function tick(t) {
    animId = requestAnimationFrame(tick);
    drawBackground(t);
    if (isOpen) {
      updatePhysics();
      drawGraph();
    }
  }

  /* ── Node at point ──────────────────────────────────────────── */
  function getNodeAt(x, y) {
    for (let i = GRAPH.nodes.length - 1; i >= 0; i--) {
      const n = GRAPH.nodes[i];
      const r = nodeRadius(n);
      const dx = x - n.x, dy = y - n.y;
      if (dx * dx + dy * dy <= r * r) return n;
    }
    return null;
  }

  /* ── Node card update ───────────────────────────────────────── */
  function showNodeCard(node, cx, cy) {
    if (!nodeCard) return;
    const card = nodeCard;
    card.querySelector('.node-card-tag').textContent = node.tag;
    card.querySelector('.node-card-tag').style.color = node.color;
    card.querySelector('.node-card-title').textContent = node.label;
    card.querySelector('.node-card-desc').textContent = node.desc;

    const childrenEl = card.querySelector('.node-card-children');
    if (node.children && node.children.length > 0) {
      childrenEl.innerHTML = node.children
        .map(cid => {
          const child = GRAPH.nodes.find(n => n.id === cid);
          return `<span class="child-chip">${child ? child.label : cid}</span>`;
        })
        .join('');
      childrenEl.style.display = 'flex';
    } else {
      childrenEl.innerHTML = '';
      childrenEl.style.display = 'none';
    }

    const cta = card.querySelector('.node-card-cta');
    cta.href = node.href;
    cta.textContent = `Go to ${node.label} →`;

    // Position card intelligently
    const cw = 250, ch = 180;
    let lx = cx + 24, ly = cy - 20;
    if (lx + cw > W - 24) lx = cx - cw - 24;
    if (ly + ch > H - 24) ly = H - ch - 24;
    if (ly < 80) ly = 80;
    card.style.left = lx + 'px';
    card.style.top  = ly + 'px';
    card.classList.add('visible');
  }

  function hideNodeCard() {
    if (nodeCard) nodeCard.classList.remove('visible');
  }

  /* ── Open / Close ───────────────────────────────────────────── */
  function openMesh() {
    isOpen = true;
    positionNodes();
    meshOverlay.classList.add('open');
    graphCanvas.classList.add('open');
    closeBtn.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (instruction) instruction.style.display = 'none';
  }

  function closeMesh() {
    isOpen = false;
    meshOverlay.classList.remove('open');
    graphCanvas.classList.remove('open');
    closeBtn.classList.remove('open');
    hideNodeCard();
    document.body.style.overflow = '';
    if (graphCtx) graphCtx.clearRect(0, 0, W, H);
  }

  /* ── Mobile Drawer Functions ─────────────────────────────────── */
  function openMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener('click', openMobileDrawer);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileDrawer);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileDrawer);
  if (mobileTriggerMesh) {
    mobileTriggerMesh.addEventListener('click', () => {
      closeMobileDrawer();
      setTimeout(openMesh, 200);
    });
  }
  mobileLinks.forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });

  /* ── Event listeners ─────────────────────────────────────────── */
  if (openBtn) openBtn.addEventListener('click', openMesh);
  if (closeBtn) closeBtn.addEventListener('click', closeMesh);

  if (meshOverlay) {
    meshOverlay.addEventListener('click', (e) => {
      if (e.target === meshOverlay) closeMesh();
    });
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (isOpen) closeMesh();
      closeMobileDrawer();
    }
    if ((e.metaKey || e.ctrlKey) && e.key === 'g') { e.preventDefault(); openMesh(); }
  });

  if (graphCanvas) {
    graphCanvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const hit = getNodeAt(mouseX, mouseY);
      if (hit !== hoveredNode) {
        hoveredNode = hit;
        graphCanvas.style.cursor = hit ? 'pointer' : 'crosshair';
        if (hit) {
          showNodeCard(hit, mouseX, mouseY);
        } else {
          hideNodeCard();
        }
      }
      if (dragNode) {
        dragNode.x = mouseX + dragOffX;
        dragNode.y = mouseY + dragOffY;
        dragNode.vx = 0; dragNode.vy = 0;
      }
    });

    graphCanvas.addEventListener('mousedown', (e) => {
      const hit = getNodeAt(e.clientX, e.clientY);
      if (hit) {
        dragNode = hit;
        dragOffX = hit.x - e.clientX;
        dragOffY = hit.y - e.clientY;
      }
    });

    graphCanvas.addEventListener('mouseup', () => { dragNode = null; });

    graphCanvas.addEventListener('click', (e) => {
      const hit = getNodeAt(e.clientX, e.clientY);
      if (hit && hit.href) {
        closeMesh();
        setTimeout(() => {
          const el = document.querySelector(hit.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    });

    // Touch support
    graphCanvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const t = e.touches[0];
      mouseX = t.clientX; mouseY = t.clientY;
      hoveredNode = getNodeAt(mouseX, mouseY);
      if (dragNode) {
        dragNode.x = mouseX + dragOffX;
        dragNode.y = mouseY + dragOffY;
        dragNode.vx = 0; dragNode.vy = 0;
      }
    }, { passive: false });

    graphCanvas.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      const hit = getNodeAt(t.clientX, t.clientY);
      if (hit) { dragNode = hit; dragOffX = hit.x - t.clientX; dragOffY = hit.y - t.clientY; }
    });

    graphCanvas.addEventListener('touchend', () => { dragNode = null; });
  }

  /* ── Init ───────────────────────────────────────────────────── */
  resize();
  positionNodes();
  requestAnimationFrame(tick);

})();
```
