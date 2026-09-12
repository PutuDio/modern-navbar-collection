# Semantic Mesh Navigator — Isolated Code Snippets

Panduan dan cuplikan kode terisolasi untuk mengintegrasikan kanvas navigasi Semantic Mesh Graph ke aplikasi web Anda.

---

## 1. HTML Markup

```html
<!-- FLOATING MESH CANVAS -->
<div id="mesh-canvas-container" class="mesh-canvas-wrapper">
  <canvas id="mesh-canvas"></canvas>
</div>

<!-- SEMANTIC HOVER INFO POPUP -->
<div id="semantic-popup" class="semantic-popup hidden" aria-live="polite">
  <div class="popup-badge" id="popup-badge">RESEARCH NODE</div>
  <h4 class="popup-title" id="popup-title">Neural Engine</h4>
  <p class="popup-desc" id="popup-desc">Deep generative inference and latency profiling.</p>
  <div class="popup-footer">
    <span id="popup-links">3 Connected Edges</span>
    <button class="popup-action-btn" id="popup-action">Open Node →</button>
  </div>
</div>

<!-- HUD CONTROL OVERLAY -->
<div class="mesh-hud">
  <button id="toggle-physics-btn" class="hud-btn">Toggle Physics</button>
  <button id="reset-view-btn" class="hud-btn">Reset Grid</button>
</div>
```

---

## 2. Basic Styling

```css
.mesh-canvas-wrapper {
  position: fixed;
  inset: 0;
  pointer-events: auto;
  z-index: 50;
}

#mesh-canvas {
  width: 100%;
  height: 100%;
  display: block;
  background: radial-gradient(circle at center, #0d1117 0%, #05070a 100%);
}

.semantic-popup {
  position: absolute;
  z-index: 100;
  background: rgba(15, 23, 42, 0.88);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 16px;
  width: 240px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.semantic-popup.hidden {
  opacity: 0;
  transform: scale(0.92);
}
```
