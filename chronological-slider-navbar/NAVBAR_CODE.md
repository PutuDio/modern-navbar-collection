# Chronological Slider Navbar — Component Code

File ini berisi kode komponen bersih (*clean isolated code*) yang mencakup ketiga bagian: **HTML Markup**, **CSS Styling**, dan **JavaScript Logic** untuk mengintegrasikan navigasi mesin waktu linimasa (*timeline scrubber navbar*) ke proyek web Anda.

---

## 1. HTML Markup

Letakkan markup ini di dalam tag `<body>`:

```html
<!-- ================================================================
     CHRONOLOGICAL SLIDER NAVBAR & TIMELINE CHAPTERS
     ================================================================ -->

<!-- Top Bar Indicator -->
<header class="top-bar">
  <a href="#" class="brand-name">Aetheria Chronos</a>
  <div class="top-bar-right">
    <span class="era-badge" id="era-badge">2019 — Genesis</span>
  </div>
</header>

<!-- Main Chapters (Target Section yang terhubung ke era) -->
<main class="page-content">
  <section class="chapter visible" id="genesis">
    <div class="chapter-inner">
      <div class="chapter-year-label">Era 01 · Inception</div>
      <h1 class="chapter-title">The spark of a <em>borderless</em> vision.</h1>
    </div>
  </section>

  <section class="chapter" id="growth">
    <div class="chapter-inner">
      <div class="chapter-year-label">Era 02 · Rapid Adoption</div>
      <h1 class="chapter-title">Scaling with <em>velocity</em> through resonance.</h1>
    </div>
  </section>

  <section class="chapter" id="expansion">
    <div class="chapter-inner">
      <div class="chapter-year-label">Era 03 · Enterprise Sovereign Grid</div>
      <h1 class="chapter-title">Fortifying the <em>backbone</em> of critical tech.</h1>
    </div>
  </section>

  <section class="chapter" id="scale">
    <div class="chapter-inner">
      <div class="chapter-year-label">Era 04 · Cognitive Mesh</div>
      <h1 class="chapter-title">Orchestrating <em>hyper-scale</em> systems.</h1>
    </div>
  </section>

  <section class="chapter" id="future">
    <div class="chapter-inner">
      <div class="chapter-year-label">Era 05 · The Horizon</div>
      <h1 class="chapter-title">Pioneering the <em>planetary</em> neural fabric.</h1>
    </div>
  </section>
</main>

<!-- Fixed Bottom Timeline Scrubber Navbar -->
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

    <!-- Center Fixed Scrubber Diamond Cursor -->
    <div class="timeline-cursor">
      <div class="cursor-line"></div>
      <div class="cursor-diamond"></div>
    </div>
  </div>

  <!-- Range Slider Controls -->
  <div class="scrubber-controls">
    <button class="scrub-btn" id="prev-era" title="Previous Era">Prev</button>
    <input type="range" id="scrub-input" class="scrub-input" min="0" max="4" value="0" step="1" aria-label="Timeline Era Scrubber">
    <button class="scrub-btn" id="next-era" title="Next Era">Next</button>
  </div>
</nav>
```

---

## 2. CSS Styling

Tambahkan CSS ini ke stylesheet Anda:

```css
/* ================================================================
   CHRONOLOGICAL SLIDER NAVBAR — CSS TOKENS & STYLES
   ================================================================ */
:root {
  --bg-deep: #f5f0e8;
  --ink: #1a1108;
  --ink-muted: #6b5e48;
  --ink-dim: #a8997e;
  --border-line: rgba(0, 0, 0, 0.08);
  --border-strong: rgba(0, 0, 0, 0.18);
  --era-color: #c8922a;
}

body {
  transition: background-color 1.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Inter', sans-serif;
  background: var(--bg-deep);
  color: var(--ink);
  margin: 0;
  padding-bottom: 160px;
}

body.era-genesis   { --era-color: #065f46; --bg-deep: #f0f4f0; }
body.era-growth    { --era-color: #1d4ed8; --bg-deep: #f0f2f8; }
body.era-expansion { --era-color: #c8922a; --bg-deep: #f8f4ec; }
body.era-scale     { --era-color: #7c3aed; --bg-deep: #f5f0fa; }
body.era-future    { --era-color: #0f766e; --bg-deep: #eef8f7; }

/* ── Top Bar ─────────────────────────────────────────────────── */
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
  border-bottom: 1px solid var(--border-line);
}

.brand-name {
  font-weight: 700;
  font-size: 17px;
  color: var(--ink);
  text-decoration: none;
}

.era-badge {
  font-family: monospace;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 9999px;
  background: rgba(0, 0, 0, 0.05);
  color: var(--ink-muted);
  border: 1px solid var(--border-line);
}

/* ── Fixed Bottom Timeline Nav ───────────────────────────────── */
.timeline-nav {
  position: fixed;
  bottom: 0; left: 0; right: 0;
  z-index: 200;
  background: rgba(245, 240, 232, 0.96);
  backdrop-filter: blur(24px);
  border-top: 1px solid var(--border-strong);
  user-select: none;
}

.timeline-track {
  position: relative;
  height: 100px;
  overflow: hidden;
  cursor: grab;
}

.timeline-track:active { cursor: grabbing; }

.timeline-strip {
  display: flex;
  align-items: center;
  position: relative;
  transition: transform 480ms cubic-bezier(0.22, 1, 0.36, 1);
  padding: 0 40%;
}

.timeline-line {
  position: absolute;
  top: 50%; left: 0; right: 0;
  height: 1px;
  background: var(--border-strong);
  transform: translateY(-50%);
}

.era-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  flex-shrink: 0;
  cursor: pointer;
  padding: 8px 0;
}

.era-year {
  font-family: monospace;
  font-size: 13px;
  font-weight: 700;
  color: var(--ink-dim);
  margin-bottom: 8px;
  transition: all 0.2s ease;
}

.era-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--border-strong);
  border: 2px solid var(--bg-deep);
  margin-bottom: 8px;
  transition: all 0.3s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.era-label {
  font-size: 13px;
  font-weight: 500;
  color: var(--ink-muted);
  transition: color 0.2s ease;
}

.era-node.active .era-year {
  color: var(--era-color);
  font-size: 15px;
}

.era-node.active .era-dot {
  width: 18px; height: 18px;
  background: var(--era-color);
  border-color: var(--era-color);
  box-shadow: 0 0 0 4px rgba(200, 146, 42, 0.15);
}

.era-node.active .era-label {
  color: var(--ink);
  font-weight: 700;
}

/* ── Center Scrubber Diamond ──────────────────────────────────── */
.timeline-cursor {
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}

.cursor-line {
  width: 1px;
  height: 100%;
  background: var(--era-color);
  margin: 0 auto;
  opacity: 0.6;
}

.cursor-diamond {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 10px; height: 10px;
  background: var(--era-color);
}

/* ── Controls Strip ───────────────────────────────────────────── */
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
  font-family: monospace;
  font-size: 11px;
  padding: 6px 10px;
}

.scrub-btn:hover { color: var(--ink); }

.scrub-input {
  width: min(400px, 50vw);
  height: 4px;
  cursor: pointer;
}
```

---

## 3. JavaScript Logic

Sematkan script ini sebelum penutup tag `</body>`:

```javascript
/* ================================================================
   CHRONOLOGICAL SLIDER NAVBAR — TIMELINE SCRUBBER ENGINE
   ================================================================ */
(function () {
  'use strict';

  const ERAS = [
    { id: 'genesis',   year: '2019', label: 'Genesis',   themeClass: 'era-genesis',   eraColor: '#065f46' },
    { id: 'growth',    year: '2021', label: 'Growth',    themeClass: 'era-growth',    eraColor: '#1d4ed8' },
    { id: 'expansion', year: '2023', label: 'Expansion', themeClass: 'era-expansion', eraColor: '#c8922a' },
    { id: 'scale',     year: '2025', label: 'Scale',     themeClass: 'era-scale',     eraColor: '#7c3aed' },
    { id: 'future',    year: '2026+',label: 'Future',    themeClass: 'era-future',    eraColor: '#0f766e' },
  ];

  let currentEraIdx = 0;
  let isAnimating   = false;

  const body          = document.body;
  const timelineStrip = document.getElementById('timeline-strip');
  const timelineTrack = document.getElementById('timeline-track');
  const eraNodes      = document.querySelectorAll('.era-node');
  const scrubInput    = document.getElementById('scrub-input');
  const eraBadge      = document.getElementById('era-badge');
  const cursorLine    = document.querySelector('.cursor-line');
  const cursorDiamond = document.querySelector('.cursor-diamond');
  const prevBtn       = document.getElementById('prev-era');
  const nextBtn       = document.getElementById('next-era');

  // 1. Terapkan Era & Geser Timeline
  function applyEra(idx, animate) {
    if (isAnimating && animate) return;
    isAnimating = animate;

    const era = ERAS[idx];
    currentEraIdx = idx;

    // Update body theme class & color tokens
    ERAS.forEach(e => body.classList.remove(e.themeClass));
    body.classList.add(era.themeClass);
    body.style.setProperty('--era-color', era.eraColor);

    if (eraBadge) eraBadge.textContent = `${era.year} — ${era.label}`;

    // Update active node
    eraNodes.forEach((node, i) => {
      node.classList.toggle('active', i === idx);
    });

    // Center timeline strip
    if (timelineStrip) {
      const nodeWidth = 160;
      const offset = -(idx * nodeWidth);
      timelineStrip.style.transition = animate
        ? 'transform 480ms cubic-bezier(0.22, 1, 0.36, 1)'
        : 'none';
      timelineStrip.style.transform = `translateX(${offset}px)`;
    }

    if (scrubInput) scrubInput.value = idx;
    if (cursorLine) cursorLine.style.background = era.eraColor;
    if (cursorDiamond) cursorDiamond.style.background = era.eraColor;

    // Scroll ke section target
    const targetChapter = document.getElementById(era.id);
    if (targetChapter && animate) {
      targetChapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    setTimeout(() => { isAnimating = false; }, 600);
  }

  // 2. Event Listener Klik Node & Scrubber
  eraNodes.forEach((node, i) => {
    node.addEventListener('click', () => {
      if (i !== currentEraIdx) applyEra(i, true);
    });
  });

  if (scrubInput) {
    scrubInput.max = ERAS.length - 1;
    scrubInput.addEventListener('input', () => {
      applyEra(parseInt(scrubInput.value), true);
    });
  }

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

  // 3. Navigasi Keyboard Arrow
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      if (currentEraIdx > 0) applyEra(currentEraIdx - 1, true);
    } else if (e.key === 'ArrowRight') {
      if (currentEraIdx < ERAS.length - 1) applyEra(currentEraIdx + 1, true);
    }
  });

  // 4. Mouse Wheel pada Timeline Track
  if (timelineTrack) {
    timelineTrack.addEventListener('wheel', (e) => {
      e.preventDefault();
      const dir = e.deltaX > 0 || e.deltaY > 0 ? 1 : -1;
      const newIdx = Math.max(0, Math.min(ERAS.length - 1, currentEraIdx + dir));
      if (newIdx !== currentEraIdx) applyEra(newIdx, true);
    }, { passive: false });
  }

  // 5. Intersection Observer (Update otomatis saat halaman di-scroll)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        const idx = ERAS.findIndex(e => e.id === entry.target.id);
        if (idx !== -1 && idx !== currentEraIdx) {
          applyEra(idx, false);
        }
      }
    });
  }, { threshold: 0.4 });

  ERAS.forEach(e => {
    const el = document.getElementById(e.id);
    if (el) observer.observe(el);
  });

  // Inisialisasi posisi awal
  applyEra(0, false);
})();
```
