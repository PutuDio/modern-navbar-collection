# Chronological Slider Navbar — Component Code

File ini berisi kode komponen bersih (*clean isolated code*) yang mencakup ketiga bagian: **HTML Markup**, **CSS Styling**, dan **JavaScript Logic** untuk mengintegrasikan navigasi mesin waktu linimasa (*timeline scrubber navbar*) ke proyek web Anda.

---

## 1. HTML Markup

Letakkan markup ini di dalam tag `<body>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chronological Slider Navbar — Timeline Time-Machine Storytelling</title>
  <meta name="description" content="A cinematic time-machine timeline slider navbar for company milestones, founder journey, and product roadmaps.">
  <link rel="stylesheet" href="style.css">
</head>
<body class="era-genesis">

  <!-- TOP BAR -->
  <header class="top-bar">
    <div style="display:flex; align-items:center; gap:20px;">
      <a href="../index.html" style="text-decoration:none; display:inline-flex; align-items:center; gap:6px; font-size:13px; color:var(--ink-muted); font-weight:500; padding:6px 12px; border-radius:var(--radius-pill); background:rgba(0,0,0,0.04); border:1px solid var(--border-line);">
        ← Collection
      </a>
      <a href="#" class="brand-name">Aetheria Chronos</a>
    </div>
    <div class="top-bar-right">
      <span class="era-badge" id="era-badge">2019 — Genesis</span>
      <a href="https://github.com" target="_blank" style="text-decoration:none; font-family:var(--font-mono); font-size:11px; padding:6px 14px; border-radius:var(--radius-pill); background:var(--ink); color:#fff; font-weight:600;">Explore Archive</a>
    </div>
  </header>


  <!-- TIMELINE SLIDER NAVBAR (MAIN COMPONENT) -->
  <nav class="timeline-nav" aria-label="Chronological Era Navigation">
    <div class="timeline-track" id="timeline-track">
      <div class="timeline-strip" id="timeline-strip">
        <div class="timeline-line"></div>
        
        <div class="era-node active" tabindex="0" role="button" aria-label="Era 2019 Genesis">
          <span class="era-year">2019</span>
          <span class="era-dot"></span>
          <span class="era-label">Genesis</span>
        </div>

        <div class="era-node" tabindex="0" role="button" aria-label="Era 2021 Growth">
          <span class="era-year">2021</span>
          <span class="era-dot"></span>
          <span class="era-label">Growth</span>
        </div>

        <div class="era-node" tabindex="0" role="button" aria-label="Era 2023 Expansion">
          <span class="era-year">2023</span>
          <span class="era-dot"></span>
          <span class="era-label">Expansion</span>
        </div>

        <div class="era-node" tabindex="0" role="button" aria-label="Era 2025 Scale">
          <span class="era-year">2025</span>
          <span class="era-dot"></span>
          <span class="era-label">Scale</span>
        </div>

        <div class="era-node" tabindex="0" role="button" aria-label="Era 2026+ Future">
          <span class="era-year">2026+</span>
          <span class="era-dot"></span>
          <span class="era-label">Future</span>
        </div>
      </div>

      <!-- Center Scrubber Cursor -->
      <div class="timeline-cursor">
        <div class="cursor-line"></div>
        <div class="cursor-diamond"></div>
      </div>
    </div>

    <!-- Scrubber Slider Controls -->
    <div class="scrubber-controls">
      <button class="scrub-btn" id="prev-era" title="Previous Era (Arrow Left)">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg>
        Prev
      </button>

      <input type="range" id="scrub-input" class="scrub-input" min="0" max="4" value="0" step="1" aria-label="Timeline Era Scrubber">

      <button class="scrub-btn" id="next-era" title="Next Era (Arrow Right)">
        Next
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>
    </div>
  </nav>


  <script src="script.js"></script>
</body>
</html>
```

---

## 2. CSS Styling

Tambahkan CSS ini ke stylesheet Anda:

```css
/* =============================================================
   CHRONOLOGICAL SLIDER NAVBAR — style.css
   Timeline Time-Machine Navigation · Company Storytelling
   ============================================================= */

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

/* ── Design Tokens ─────────────────────────────────────────── */
:root {
  --bg-deep: #f5f0e8;
  --bg-surface: #fefcf8;
  --bg-card: rgba(255, 252, 248, 0.95);

  --border-line: rgba(0, 0, 0, 0.08);
  --border-strong: rgba(0, 0, 0, 0.18);

  --ink: #1a1108;
  --ink-muted: #6b5e48;
  --ink-dim: #a8997e;

  --accent-gold: #c8922a;
  --accent-gold-light: #f0d080;
  --accent-blue: #1d4ed8;
  --accent-emerald: #065f46;
  --accent-rose: #881337;

  /* Era-specific colors (change via JS when switching era) */
  --era-color: var(--accent-gold);

  --font-display: 'Playfair Display', Georgia, serif;
  --font-body: 'Inter', -apple-system, sans-serif;
  --font-mono: 'Space Mono', monospace;

  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-spring: cubic-bezier(0.34, 1.4, 0.64, 1);
  --ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
  --duration-fast: 200ms;
  --duration-med: 380ms;
  --duration-slow: 620ms;

  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-pill: 9999px;
}

/* ── Reset & Base ────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-body);
  background: var(--bg-deep);
  color: var(--ink);
  min-height: 100vh;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  transition: background-color 1.2s var(--ease-in-out);
}

/* ── Era Theme Classes (applied to body) ─────────────────────── */
body.era-genesis    { --era-color: #065f46; --bg-deep: #f0f4f0; }
body.era-growth     { --era-color: #1d4ed8; --bg-deep: #f0f2f8; }
body.era-expansion  { --era-color: #c8922a; --bg-deep: #f8f4ec; }
body.era-scale      { --era-color: #7c3aed; --bg-deep: #f5f0fa; }
body.era-future     { --era-color: #0f766e; --bg-deep: #eef8f7; }

/* ═══════════════════════════════════════════════════════════════
   TOP BAR
   ═══════════════════════════════════════════════════════════════ */
.top-bar {
  position: fixed;
  top: 0; left: 0; right: 0;
  height: 60px;
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  background: rgba(245, 240, 232, 0.9);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-line);
}

.brand-name {
  font-family: var(--font-display);
  font-size: 17px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.02em;
  text-decoration: none;
}

.top-bar-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.era-badge {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: var(--radius-pill);
  background: rgba(0,0,0,0.05);
  color: var(--ink-muted);
  border: 1px solid var(--border-line);
  transition: all var(--duration-med) ease;
}

/* ═══════════════════════════════════════════════════════════════
   TIMELINE SLIDER NAVBAR
   Fixed bottom strip — the main navigation element
   ═══════════════════════════════════════════════════════════════ */
.timeline-nav {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 200;
  background: rgba(245, 240, 232, 0.96);
  backdrop-filter: blur(24px) saturate(160%);
  -webkit-backdrop-filter: blur(24px) saturate(160%);
  border-top: 1px solid var(--border-strong);
  padding: 0;
  user-select: none;
  transition: background var(--duration-med) ease;
}

/* ── Timeline Track ──────────────────────────────────────────── */
.timeline-track {
  position: relative;
  height: 100px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  overflow: hidden;
  cursor: grab;
}

.timeline-track:active { cursor: grabbing; }

/* Fade masks at edges */
.timeline-track::before,
.timeline-track::after {
  content: '';
  position: absolute;
  top: 0; bottom: 0;
  width: 80px;
  z-index: 10;
  pointer-events: none;
}
.timeline-track::before {
  left: 0;
  background: linear-gradient(to right, var(--bg-deep) 0%, transparent 100%);
}
.timeline-track::after {
  right: 0;
  background: linear-gradient(to left, var(--bg-deep) 0%, transparent 100%);
}

/* Inner scrollable strip */
.timeline-strip {
  display: flex;
  align-items: center;
  gap: 0;
  position: relative;
  transition: transform var(--duration-slow) var(--ease-out);
  will-change: transform;
  padding: 0 40%;
}

/* ── Line connecting all eras ────────────────────────────────── */
.timeline-line {
  position: absolute;
  top: 50%;
  left: 0; right: 0;
  height: 1px;
  background: var(--border-strong);
  transform: translateY(-50%);
  z-index: 0;
}

/* ── Era Node ─────────────────────────────────────────────────── */
.era-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  position: relative;
  z-index: 1;
  flex-shrink: 0;
  width: 160px;
  cursor: pointer;
  padding: 8px 0;
}

.era-year {
  font-family: var(--font-mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--ink-dim);
  transition: color var(--duration-fast) ease, font-size var(--duration-med) var(--ease-spring);
  margin-bottom: 8px;
}

.era-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--border-strong);
  border: 2px solid var(--bg-deep);
  transition: all var(--duration-med) var(--ease-spring);
  margin-bottom: 8px;
}

.era-label {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-muted);
  text-align: center;
  transition: color var(--duration-fast) ease, font-size var(--duration-med) var(--ease-spring);
  letter-spacing: -0.01em;
  max-width: 120px;
}

/* Active era */
.era-node.active .era-year {
  color: var(--era-color);
  font-size: 15px;
}

.era-node.active .era-dot {
  width: 18px; height: 18px;
  background: var(--era-color);
  border-color: var(--era-color);
  box-shadow: 0 0 0 4px rgba(200, 146, 42, 0.15), 0 0 16px rgba(200, 146, 42, 0.25);
}

.era-node.active .era-label {
  color: var(--ink);
  font-size: 14px;
  font-weight: 700;
}

/* Center cursor (fixed overlay) */
.timeline-cursor {
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  z-index: 20;
  pointer-events: none;
}

.cursor-line {
  width: 1px;
  height: 100%;
  background: var(--era-color);
  margin: 0 auto;
  opacity: 0.6;
  transition: background var(--duration-med) ease;
}

.cursor-diamond {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 10px; height: 10px;
  background: var(--era-color);
  transition: background var(--duration-med) ease;
}

/* ── Scrubber controls ────────────────────────────────────────── */
.scrubber-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding: 8px 24px;
  border-top: 1px solid var(--border-line);
  height: 48px;
}

.scrub-btn {
  background: none;
  border: none;
  cursor: pointer;
  color: var(--ink-muted);
  padding: 6px;
  border-radius: var(--radius-sm);
  transition: all var(--duration-fast) ease;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-mono);
  font-size: 11px;
}

.scrub-btn:hover { color: var(--ink); background: rgba(0,0,0,0.05); }

.scrub-input {
  -webkit-appearance: none;
  appearance: none;
  width: min(400px, 50vw);
  height: 4px;
  border-radius: var(--radius-pill);
  background: var(--border-line);
  outline: none;
  cursor: pointer;
  transition: background var(--duration-med) ease;
}

.scrub-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 18px; height: 18px;
  border-radius: 50%;
  background: var(--era-color);
  border: 2px solid var(--bg-deep);
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  transition: background var(--duration-fast) ease, transform var(--duration-fast) var(--ease-spring);
}

.scrub-input::-webkit-slider-thumb:hover { transform: scale(1.2); }

.scrub-progress-label {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-dim);
  min-width: 60px;
  text-align: center;
}

/* ═══════════════════════════════════════════════════════════════
   PAGE CONTENT — Chapters
   ═══════════════════════════════════════════════════════════════ */
.page-content {
  padding-top: 60px;
  padding-bottom: 180px; /* space for fixed timeline nav */
}

/* ── Chapter (full-height section) ────────────────────────────── */
.chapter {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 24px;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity var(--duration-slow) var(--ease-out),
              transform var(--duration-slow) var(--ease-out);
}

.chapter.visible {
  opacity: 1;
  transform: translateY(0);
}

.chapter-inner {
  max-width: 1000px;
  width: 100%;
}

/* Chapter header */
.chapter-year-label {
  font-family: var(--font-mono);
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--era-color);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.chapter-year-label::after {
  content: '';
  flex: 1;
  max-width: 60px;
  height: 1px;
  background: var(--era-color);
  opacity: 0.4;
}

.chapter-title {
  font-family: var(--font-display);
  font-size: clamp(36px, 5vw, 72px);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--ink);
  margin-bottom: 20px;
}

.chapter-title em {
  font-style: italic;
  color: var(--era-color);
}

.chapter-subtitle {
  font-size: 17px;
  color: var(--ink-muted);
  max-width: 620px;
  line-height: 1.7;
  margin-bottom: 40px;
}

/* Chapter stats grid */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
}

.stat-card {
  padding: 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-line);
  border-radius: var(--radius-lg);
  border-top: 3px solid var(--era-color);
}

.stat-num {
  font-family: var(--font-display);
  font-size: 32px;
  font-weight: 700;
  color: var(--ink);
  letter-spacing: -0.04em;
  margin-bottom: 4px;
}

.stat-lbl {
  font-size: 12px;
  color: var(--ink-muted);
}

/* Milestone list */
.milestone-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.milestone-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 16px 20px;
  background: var(--bg-card);
  border: 1px solid var(--border-line);
  border-radius: var(--radius-lg);
}

.milestone-icon {
  font-size: 20px;
  flex-shrink: 0;
  padding-top: 2px;
}

.milestone-month {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--ink-dim);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 3px;
}

.milestone-text {
  font-size: 14px;
  font-weight: 500;
  color: var(--ink);
  line-height: 1.5;
}

/* ── Footer ───────────────────────────────────────────────────── */
.page-footer {
  padding: 24px;
  text-align: center;
  border-top: 1px solid var(--border-line);
}

.page-footer p {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--ink-dim);
}

/* ── Responsive ───────────────────────────────────────────────── */
@media (max-width: 900px) {
  .top-bar { padding: 0 20px; }
  .chapter-title { font-size: clamp(30px, 5vw, 48px); }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 768px) {
  .top-bar {
    padding: 0 16px;
    height: 58px;
  }
  .brand-name { font-size: 15px; }
  .top-bar-right { gap: 8px; }
  .top-bar-right a { padding: 5px 10px; font-size: 10px; }
  .era-badge { font-size: 10px; padding: 3px 8px; }
  .timeline-nav {
    padding: 10px 0 14px;
  }
  .timeline-track {
    padding: 0 20px;
    gap: 0;
    justify-content: space-between;
  }
  .era-node {
    min-width: 54px;
  }
  .era-year {
    font-size: 11px;
    margin-bottom: 4px;
  }
  .era-dot {
    width: 10px;
    height: 10px;
    margin-bottom: 4px;
  }
  .era-label {
    font-size: 11px;
    max-width: 70px;
  }
  .era-node.active .era-year { font-size: 13px; }
  .era-node.active .era-label { font-size: 12px; }
  .scrubber-controls {
    gap: 12px;
  }
  .scrub-input {
    width: 50vw;
  }
  .scrub-btn {
    padding: 5px 10px;
    font-size: 11px;
  }
  .chapter-inner {
    padding: 90px 20px 160px;
  }
}

@media (max-width: 480px) {
  .top-bar {
    padding: 0 12px;
  }
  .top-bar a[href="../index.html"] {
    font-size: 11px;
    padding: 4px 8px;
  }
  .brand-name {
    font-size: 13px;
  }
  .top-bar-right a[href*="github"] {
    display: none;
  }
  .stats-grid {
    grid-template-columns: 1fr;
  }
  .scrub-input {
    width: 44vw;
  }
  .chapter-subtitle {
    font-size: 14px;
  }
  .era-node { min-width: 44px; }
  .era-year { font-size: 10px; }
  .era-label { font-size: 10px; max-width: 60px; }
  .era-dot { width: 8px; height: 8px; }
  .timeline-track { padding: 0 12px; }
  .timeline-nav { padding: 8px 0 12px; }
}
```

---

## 3. JavaScript Logic

Sematkan script ini sebelum penutup tag `</body>`:

```javascript
/* =============================================================
   CHRONOLOGICAL SLIDER NAVBAR — script.js
   Timeline Scrubber Navigation Engine
   ============================================================= */
(function () {
  'use strict';

  /* ── Era Data ──────────────────────────────────────────────── */
  const ERAS = [
    { id: 'genesis',   year: '2019', label: 'Genesis',   slug: '#genesis',   themeClass: 'era-genesis',   eraColor: '#065f46', bg: '#f0f4f0' },
    { id: 'growth',    year: '2021', label: 'Growth',    slug: '#growth',    themeClass: 'era-growth',    eraColor: '#1d4ed8', bg: '#f0f2f8' },
    { id: 'expansion', year: '2023', label: 'Expansion', slug: '#expansion', themeClass: 'era-expansion', eraColor: '#c8922a', bg: '#f8f4ec' },
    { id: 'scale',     year: '2025', label: 'Scale',     slug: '#scale',     themeClass: 'era-scale',     eraColor: '#7c3aed', bg: '#f5f0fa' },
    { id: 'future',    year: '2026+',label: 'Future',    slug: '#future',    themeClass: 'era-future',    eraColor: '#0f766e', bg: '#eef8f7' },
  ];

  /* ── State ─────────────────────────────────────────────────── */
  let currentEraIdx = 0;
  let isAnimating   = false;
  let isDragging    = false;
  let dragStartX    = 0;
  let stripOffsetX  = 0;

  /* ── DOM refs ───────────────────────────────────────────────── */
  const body          = document.body;
  const timelineStrip = document.getElementById('timeline-strip');
  const timelineTrack = document.getElementById('timeline-track');
  const eraNodes      = document.querySelectorAll('.era-node');
  const scrubInput    = document.getElementById('scrub-input');
  const eraBadge      = document.getElementById('era-badge');
  const cursorLine    = document.querySelector('.cursor-line');
  const cursorDiamond = document.querySelector('.cursor-diamond');
  const chapters      = document.querySelectorAll('.chapter');
  const prevBtn       = document.getElementById('prev-era');
  const nextBtn       = document.getElementById('next-era');

  /* ── Apply era theme ─────────────────────────────────────────── */
  function applyEra(idx, animate) {
    if (isAnimating && animate) return;
    isAnimating = animate;

    const era = ERAS[idx];
    currentEraIdx = idx;

    // Update body class
    ERAS.forEach(e => body.classList.remove(e.themeClass));
    body.classList.add(era.themeClass);

    // Update CSS variable for era color
    body.style.setProperty('--era-color', era.eraColor);

    // Update era badge
    if (eraBadge) eraBadge.textContent = `${era.year} — ${era.label}`;

    // Update active node state
    eraNodes.forEach((node, i) => {
      node.classList.toggle('active', i === idx);
    });

    // Center the timeline strip to active node
    centerTimeline(idx, animate);

    // Update scrubber
    if (scrubInput) scrubInput.value = idx;

    // Navigate (scroll) to chapter
    const chapter = document.getElementById(era.id);
    if (chapter) {
      if (animate) {
        chapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Trigger visibility animation
      revealChapters();
    }

    // Update cursor colors
    if (cursorLine)    cursorLine.style.background    = era.eraColor;
    if (cursorDiamond) cursorDiamond.style.background = era.eraColor;

    // Update stat card top borders and chapter year labels
    const activeChapter = document.getElementById(era.id);
    if (activeChapter) {
      activeChapter.querySelectorAll('.stat-card').forEach(c => {
        c.style.borderTopColor = era.eraColor;
      });
      activeChapter.querySelectorAll('.chapter-year-label').forEach(l => {
        l.style.color = era.eraColor;
      });
    }

    setTimeout(() => { isAnimating = false; }, 700);
  }

  /* ── Center timeline strip at era ────────────────────────────── */
  function centerTimeline(idx, animate) {
    if (!timelineStrip) return;
    const nodeWidth = 160;
    const offset = -(idx * nodeWidth);
    timelineStrip.style.transition = animate
      ? `transform ${480}ms cubic-bezier(0.22, 1, 0.36, 1)`
      : 'none';
    timelineStrip.style.transform = `translateX(${offset}px)`;
    stripOffsetX = offset;
  }

  /* ── Chapter visibility (intersection + manual) ──────────────── */
  function revealChapters() {
    chapters.forEach(ch => {
      ch.classList.remove('visible');
    });
    requestAnimationFrame(() => {
      const active = document.getElementById(ERAS[currentEraIdx].id);
      if (active) {
        active.classList.add('visible');
      }
    });
  }

  /* ── Era node clicks ─────────────────────────────────────────── */
  eraNodes.forEach((node, i) => {
    node.addEventListener('click', () => {
      if (i !== currentEraIdx) applyEra(i, true);
    });
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        applyEra(i, true);
      }
    });
  });

  /* ── Scrubber input ──────────────────────────────────────────── */
  if (scrubInput) {
    scrubInput.max  = ERAS.length - 1;
    scrubInput.value = 0;
    scrubInput.addEventListener('input', () => {
      const idx = parseInt(scrubInput.value);
      applyEra(idx, true);
    });
  }

  /* ── Prev / Next buttons ─────────────────────────────────────── */
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentEraIdx > 0) applyEra(currentEraIdx - 1, true);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentEraIdx < ERAS.length - 1) applyEra(currentEraIdx + 1, true);
    });
  }

  /* ── Keyboard navigation ─────────────────────────────────────── */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentEraIdx > 0) applyEra(currentEraIdx - 1, true);
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentEraIdx < ERAS.length - 1) applyEra(currentEraIdx + 1, true);
    }
  });

  /* ── Mouse wheel on timeline ─────────────────────────────────── */
  if (timelineTrack) {
    timelineTrack.addEventListener('wheel', (e) => {
      e.preventDefault();
      const dir = e.deltaX > 0 || e.deltaY > 0 ? 1 : -1;
      const newIdx = Math.max(0, Math.min(ERAS.length - 1, currentEraIdx + dir));
      if (newIdx !== currentEraIdx) applyEra(newIdx, true);
    }, { passive: false });
  }

  /* ── Drag-to-scrub on timeline track ──────────────────────────── */
  let pointerStartX = 0;
  let startEraIdx   = 0;

  function onPointerDown(e) {
    isDragging    = true;
    pointerStartX = e.clientX || e.touches?.[0]?.clientX;
    startEraIdx   = currentEraIdx;
    if (timelineStrip) timelineStrip.style.transition = 'none';
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const x   = e.clientX || e.touches?.[0]?.clientX;
    const dx  = x - pointerStartX;
    const nodeWidth = 160;
    const idxShift  = -Math.round(dx / nodeWidth);
    const newIdx    = Math.max(0, Math.min(ERAS.length - 1, startEraIdx + idxShift));

    // Move strip live
    if (timelineStrip) {
      const liveOffset = -(startEraIdx * nodeWidth) + dx;
      timelineStrip.style.transform = `translateX(${liveOffset}px)`;
    }

    // Update active node temporarily
    eraNodes.forEach((n, i) => n.classList.toggle('active', i === newIdx));
    if (eraBadge) eraBadge.textContent = `${ERAS[newIdx].year} — ${ERAS[newIdx].label}`;
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    const x   = e.clientX || e.changedTouches?.[0]?.clientX;
    const dx  = x - pointerStartX;
    const nodeWidth = 160;
    const idxShift  = -Math.round(dx / nodeWidth);
    const newIdx    = Math.max(0, Math.min(ERAS.length - 1, startEraIdx + idxShift));
    applyEra(newIdx, true);
  }

  if (timelineTrack) {
    timelineTrack.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    timelineTrack.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  }

  /* ── IntersectionObserver: update era when user scrolls ────────── */
  const chapterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        const idx = ERAS.findIndex(e => e.id === entry.target.id);
        if (idx !== -1 && idx !== currentEraIdx && !isDragging) {
          applyEra(idx, false); // don't re-scroll, just update nav
        }
      }
    });
  }, { threshold: 0.4, rootMargin: '-10% 0px -10% 0px' });

  chapters.forEach(ch => chapterObserver.observe(ch));

  /* ── Counter animation for stat numbers ────────────────────────── */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1200;
    const start = performance.now();
    const isFloat = !Number.isInteger(target);

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = prefix + (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-num[data-target]');
        counters.forEach(animateCounter);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  chapters.forEach(ch => counterObserver.observe(ch));

  /* ── Init ───────────────────────────────────────────────────── */
  applyEra(0, false);
  revealChapters();

})();
```
