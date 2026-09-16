# Semantic Mesh Navigator — Component Code

File ini berisi kode komponen bersih (*clean isolated code*) yang mencakup ketiga bagian: **HTML Markup**, **CSS Styling**, dan **JavaScript Logic** untuk mengintegrasikan navigasi graf jejaring semantik interaktif (*mind-map spring physics canvas*) ke proyek web Anda.

---

## 1. HTML Markup

Letakkan markup navigasi dan elemen canvas ini di dalam tag `<body>`:

```html
<!-- ================================================================
     SEMANTIC MESH GRAPH NAVIGATION COMPONENT
     ================================================================ -->

<!-- 1. Ambient Background Graph Canvas -->
<canvas id="mesh-canvas" aria-hidden="true"></canvas>

<!-- 2. Mesh Modal Overlay Backdrop -->
<div class="mesh-overlay" id="mesh-overlay" role="dialog" aria-label="Semantic navigation mesh" aria-modal="true"></div>

<!-- 3. Interactive Graph Canvas Layer -->
<canvas id="graph-canvas" role="img" aria-label="Interactive semantic graph navigation — drag and hover nodes to explore" tabindex="0"></canvas>

<!-- 4. Semantic Node Hover Detail Card -->
<div class="node-card" id="node-card" role="tooltip" aria-live="polite">
  <div class="node-card-tag" id="card-tag">Knowledge Domain</div>
  <div class="node-card-title" id="card-title">Research</div>
  <div class="node-card-desc" id="card-desc">Explore connected research domains.</div>
  <div class="node-card-children" id="card-children"></div>
  <a class="node-card-cta" id="card-cta" href="#">Go to Node →</a>
</div>

<!-- 5. Close Mesh Overlay Button -->
<button class="close-mesh-btn" id="close-mesh-btn" aria-label="Close semantic mesh navigation">
  ✕ Close <kbd>ESC</kbd>
</button>

<!-- 6. Top Bar Header & Open Mesh Trigger -->
<header class="top-bar" role="banner">
  <a href="#home" class="top-brand">
    <div class="brand-orb">⬡</div>
    <span class="brand-name">Nexus AI Lab</span>
  </a>

  <div class="top-bar-right">
    <button class="btn-open-mesh" id="open-mesh-btn" aria-label="Open semantic mesh navigation">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <circle cx="7" cy="7" r="2" stroke="currentColor" stroke-width="1.3"/>
        <circle cx="2.5" cy="2.5" r="1.5" stroke="currentColor" stroke-width="1.2"/>
        <circle cx="11.5" cy="2.5" r="1.5" stroke="currentColor" stroke-width="1.2"/>
      </svg>
      Open Mesh <kbd>⌘G</kbd>
    </button>
  </div>
</header>
```

---

## 2. CSS Styling

Tambahkan CSS ini ke stylesheet Anda:

```css
/* ================================================================
   SEMANTIC MESH GRAPH NAVBAR — CSS STYLES
   ================================================================ */
:root {
  --bg-deep: #05070f;
  --text-white: #ffffff;
  --text-muted: #94a3b8;
  --border-glass: rgba(255, 255, 255, 0.12);
  --accent-blue: #6378ff;
}

/* ── Canvases ─────────────────────────────────────────────────── */
#mesh-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 1;
  opacity: 0.35;
}

#graph-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 300;
  pointer-events: none;
  opacity: 0;
  transition: opacity 300ms ease;
}

#graph-canvas.active {
  pointer-events: auto;
  opacity: 1;
  cursor: grab;
}

#graph-canvas.active:active {
  cursor: grabbing;
}

/* ── Overlay Backdrop ─────────────────────────────────────────── */
.mesh-overlay {
  position: fixed;
  inset: 0;
  background: rgba(5, 7, 15, 0.88);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  z-index: 250;
  opacity: 0;
  pointer-events: none;
  transition: opacity 300ms ease;
}

.mesh-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

/* ── Close Button ─────────────────────────────────────────────── */
.close-mesh-btn {
  position: fixed;
  top: 24px;
  right: 28px;
  z-index: 350;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--border-glass);
  color: var(--text-white);
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 12px;
  display: none;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.close-mesh-btn.active {
  display: flex;
}

.close-mesh-btn:hover {
  background: rgba(255, 255, 255, 0.15);
}

.close-mesh-btn kbd {
  background: rgba(255, 255, 255, 0.1);
  padding: 2px 5px;
  border-radius: 4px;
  font-size: 10px;
}

/* ── Node Hover Detail Card ───────────────────────────────────── */
.node-card {
  position: fixed;
  z-index: 320;
  width: 240px;
  padding: 16px;
  border-radius: 16px;
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid var(--border-glass);
  backdrop-filter: blur(20px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  pointer-events: none;
  opacity: 0;
  transform: scale(0.95);
  transition: opacity 200ms ease, transform 200ms ease;
}

.node-card.visible {
  opacity: 1;
  transform: scale(1);
}

.node-card-tag {
  font-size: 10px;
  font-family: monospace;
  color: #38bdf8;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.node-card-title {
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 6px;
}

.node-card-desc {
  font-size: 12px;
  color: var(--text-muted);
  line-height: 1.4;
  margin-bottom: 12px;
}

.node-card-cta {
  display: inline-block;
  font-size: 11px;
  color: #fff;
  text-decoration: none;
  background: var(--accent-blue);
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: 600;
}

/* ── Top Bar ──────────────────────────────────────────────────── */
.top-bar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: rgba(5, 7, 15, 0.7);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-glass);
  z-index: 200;
}

.top-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
  color: #fff;
  font-weight: 700;
}

.btn-open-mesh {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(99, 120, 255, 0.15);
  border: 1px solid rgba(99, 120, 255, 0.35);
  color: #fff;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-open-mesh:hover {
  background: rgba(99, 120, 255, 0.25);
}
```

---

## 3. JavaScript Logic

Sematkan script ini sebelum penutup tag `</body>`:

```javascript
/* ================================================================
   SEMANTIC MESH GRAPH — SPRING PHYSICS & CANVAS ENGINE
   ================================================================ */
(function () {
  'use strict';

  // 1. Data Struktur Graf Node & Edge
  const GRAPH = {
    nodes: [
      { id: 'home', label: 'Home', color: '#6378ff', isRoot: true, mass: 2.2, desc: 'Central knowledge nexus.', href: '#home' },
      { id: 'research', label: 'Research', color: '#a78bfa', isRoot: false, mass: 1.5, desc: 'Explore published AI papers.', href: '#research' },
      { id: 'lab', label: 'Lab', color: '#38bdf8', isRoot: false, mass: 1.3, desc: 'Live computation models & sandboxes.', href: '#lab' },
      { id: 'network', label: 'Network', color: '#34d399', isRoot: false, mass: 1.2, desc: 'Collaborating distributed nodes.', href: '#network' },
      { id: 'papers', label: 'Papers', color: '#fbbf24', isRoot: false, mass: 1.1, desc: 'Technical reports & preprints.', href: '#papers' },
      { id: 'about', label: 'About', color: '#fb7185', isRoot: false, mass: 1.0, desc: 'Mission & research leadership.', href: '#about' }
    ],
    edges: [
      { from: 'home', to: 'research' },
      { from: 'home', to: 'lab' },
      { from: 'home', to: 'network' },
      { from: 'home', to: 'papers' },
      { from: 'home', to: 'about' },
      { from: 'research', to: 'papers' },
      { from: 'lab', to: 'network' }
    ]
  };

  let isOpen = false;
  let W = window.innerWidth;
  let H = window.innerHeight;
  let animId = null;
  let hoveredNode = null;
  let dragNode = null;
  let mouseX = -1000, mouseY = -1000;

  const graphCanvas = document.getElementById('graph-canvas');
  const meshOverlay = document.getElementById('mesh-overlay');
  const nodeCard    = document.getElementById('node-card');
  const openBtn     = document.getElementById('open-mesh-btn');
  const closeBtn    = document.getElementById('close-mesh-btn');
  const ctx         = graphCanvas ? graphCanvas.getContext('2d') : null;

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    if (graphCanvas) { graphCanvas.width = W; graphCanvas.height = H; }
  }
  window.addEventListener('resize', resize);
  resize();

  // Inisialisasi Posisi Node
  function initPositions() {
    const cx = W / 2, cy = H / 2;
    const root = GRAPH.nodes.find(n => n.isRoot);
    root.x = cx; root.y = cy; root.vx = 0; root.vy = 0;

    const leaves = GRAPH.nodes.filter(n => !n.isRoot);
    const radius = Math.min(W, H) * 0.28;
    leaves.forEach((n, i) => {
      const angle = (i / leaves.length) * Math.PI * 2 - Math.PI / 2;
      n.x = cx + Math.cos(angle) * radius;
      n.y = cy + Math.sin(angle) * radius;
      n.vx = 0; n.vy = 0;
    });
  }
  initPositions();

  // 2. Spring Physics Simulation
  function updatePhysics() {
    const cx = W / 2, cy = H / 2;
    const root = GRAPH.nodes.find(n => n.isRoot);
    root.vx += (cx - root.x) * 0.08;
    root.vy += (cy - root.y) * 0.08;

    const leaves = GRAPH.nodes.filter(n => !n.isRoot);
    const baseRadius = Math.min(W, H) * 0.28;

    leaves.forEach((n, i) => {
      const angle = (i / leaves.length) * Math.PI * 2 - Math.PI / 2;
      const tx = cx + Math.cos(angle) * baseRadius;
      const ty = cy + Math.sin(angle) * baseRadius;

      n.vx += (tx - n.x) * 0.035;
      n.vy += (ty - n.y) * 0.035;

      // Mouse attraction
      const mdx = mouseX - n.x, mdy = mouseY - n.y;
      const mdist = Math.hypot(mdx, mdy);
      if (mdist < 220 && mdist > 5) {
        n.vx += (mdx / mdist) * 0.4;
        n.vy += (mdy / mdist) * 0.4;
      }

      n.vx *= 0.8;
      n.vy *= 0.8;
      n.x += n.vx;
      n.y += n.vy;
    });

    root.vx *= 0.8;
    root.vy *= 0.8;
    root.x += root.vx;
    root.y += root.vy;
  }

  // 3. Render Canvas
  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Draw Edges
    GRAPH.edges.forEach(e => {
      const n1 = GRAPH.nodes.find(n => n.id === e.from);
      const n2 = GRAPH.nodes.find(n => n.id === e.to);
      if (!n1 || !n2) return;

      ctx.beginPath();
      ctx.moveTo(n1.x, n1.y);
      ctx.lineTo(n2.x, n2.y);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Draw Nodes
    GRAPH.nodes.forEach(n => {
      const r = (n.isRoot ? 32 : 24);
      const isHov = (hoveredNode === n);

      ctx.beginPath();
      ctx.arc(n.x, n.y, isHov ? r * 1.2 : r, 0, Math.PI * 2);
      ctx.fillStyle = n.color;
      ctx.shadowColor = n.color;
      ctx.shadowBlur = isHov ? 20 : 10;
      ctx.fill();

      // Label Text
      ctx.fillStyle = '#ffffff';
      ctx.font = '600 12px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.shadowBlur = 0;
      ctx.fillText(n.label, n.x, n.y + r + 18);
    });
  }

  function loop() {
    if (!isOpen) return;
    updatePhysics();
    draw();
    animId = requestAnimationFrame(loop);
  }

  // 4. Modal Open/Close Controls
  function openMesh() {
    isOpen = true;
    graphCanvas.classList.add('active');
    meshOverlay.classList.add('active');
    closeBtn.classList.add('active');
    initPositions();
    loop();
  }

  function closeMesh() {
    isOpen = false;
    graphCanvas.classList.remove('active');
    meshOverlay.classList.remove('active');
    closeBtn.classList.remove('active');
    if (nodeCard) nodeCard.classList.remove('visible');
    cancelAnimationFrame(animId);
  }

  if (openBtn) openBtn.addEventListener('click', openMesh);
  if (closeBtn) closeBtn.addEventListener('click', closeMesh);
  if (meshOverlay) meshOverlay.addEventListener('click', closeMesh);

  window.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && (e.key === 'g' || e.key === 'G')) {
      e.preventDefault();
      isOpen ? closeMesh() : openMesh();
    }
    if (e.key === 'Escape' && isOpen) closeMesh();
  });
})();
```
