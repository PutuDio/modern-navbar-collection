# Chronological Slider Navbar — Isolated Code Snippets

Gunakan cuplikan kode di bawah ini jika Anda ingin memasang navigasi linimasa (*timeline scrubber*) ini ke proyek web Anda secara mandiri.

---

## 1. HTML Markup

```html
<!-- TOP BAR UTILITY -->
<header class="top-bar">
  <a href="#" class="brand-name">Aetheria Chronos</a>
  <div class="top-bar-right">
    <span class="era-badge" id="era-badge">2019 — Genesis</span>
  </div>
</header>

<!-- MAIN CONTENT CHAPTERS -->
<main class="page-content">
  <section class="chapter visible" id="genesis">
    <div class="chapter-inner">
      <div class="chapter-year-label">Era 01 · Inception</div>
      <h1 class="chapter-title">The spark of a <em>borderless</em> vision.</h1>
      <!-- Stats and Milestones here -->
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

<!-- TIMELINE SLIDER NAVBAR (BOTTOM FIXED) -->
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

    <!-- Center Fixed Scrubber Diamond -->
    <div class="timeline-cursor">
      <div class="cursor-line"></div>
      <div class="cursor-diamond"></div>
    </div>
  </div>

  <!-- Range Slider Scrubber Controls -->
  <div class="scrubber-controls">
    <button class="scrub-btn" id="prev-era" title="Previous Era">Prev</button>
    <input type="range" id="scrub-input" class="scrub-input" min="0" max="4" value="0" step="1" aria-label="Timeline Era Scrubber">
    <button class="scrub-btn" id="next-era" title="Next Era">Next</button>
  </div>
</nav>
```

---

## 2. Core CSS

```css
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
}

body.era-genesis   { --era-color: #065f46; --bg-deep: #f0f4f0; }
body.era-growth    { --era-color: #1d4ed8; --bg-deep: #f0f2f8; }
body.era-expansion { --era-color: #c8922a; --bg-deep: #f8f4ec; }
body.era-scale     { --era-color: #7c3aed; --bg-deep: #f5f0fa; }
body.era-future    { --era-color: #0f766e; --bg-deep: #eef8f7; }

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
}

.era-dot {
  width: 12px; height: 12px;
  border-radius: 50%;
  background: var(--border-strong);
  transition: all 300ms ease;
  margin: 8px 0;
}

.era-node.active .era-dot {
  width: 18px; height: 18px;
  background: var(--era-color);
  box-shadow: 0 0 0 4px rgba(200, 146, 42, 0.15);
}

.timeline-cursor {
  position: absolute;
  top: 0; bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
}

.cursor-diamond {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 10px; height: 10px;
  background: var(--era-color);
}
```
