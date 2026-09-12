# Liquid Metal Cursor Attractor — Isolated Code Snippets

Cuplikan kode mandiri siap pasang untuk efek navigasi Liquid Metal Magnetis.

---

## 1. HTML Markup

```html
<!-- LIQUID PARTICLES CANVAS (FULLSCREEN OVERLAY) -->
<canvas id="liquid-canvas"></canvas>

<!-- FLOATING LIQUID DOCK -->
<div class="liquid-dock-container" id="liquid-dock-container">
  <nav class="liquid-dock" id="liquid-dock" aria-label="Liquid Navigation Bar">
    <a href="#hero" class="liquid-item active">
      <span class="item-bead"></span>
      <span>Overview</span>
    </a>
    <a href="#features" class="liquid-item">
      <span class="item-bead"></span>
      <span>Features</span>
    </a>
    <a href="#projects" class="liquid-item">
      <span class="item-bead"></span>
      <span>Projects</span>
    </a>
    <a href="#contact" class="liquid-item">
      <span class="item-bead"></span>
      <span>Contact</span>
    </a>
  </nav>
</div>
```

---

## 2. Core CSS

```css
#liquid-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 80;
}

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
  background: rgba(18, 22, 34, 0.75);
  backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 9999px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
}

.liquid-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 9999px;
  color: #94a3b8;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.25s ease;
}

.liquid-item:hover, .liquid-item.active {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.1);
}

.liquid-item .item-bead {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #ffffff, #64748b);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
}
```
