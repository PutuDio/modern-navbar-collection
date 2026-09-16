# Liquid Metal Cursor Attractor — Component Code

File ini berisi kode komponen bersih (*clean isolated code*) yang mencakup ketiga bagian: **HTML Markup**, **CSS Styling**, dan **JavaScript Logic** untuk mengintegrasikan navigasi partikel fluida cairan merkuri (*liquid chrome attractor*) ke proyek web Anda.

---

## 1. HTML Markup

Letakkan elemen canvas dan dock navigasi ini di dalam tag `<body>`:

```html
<!-- ================================================================
     LIQUID METAL CURSOR ATTRACTOR NAVBAR & PARTICLES CANVAS
     ================================================================ -->

<!-- Fullscreen Particles Canvas Overlay -->
<canvas id="liquid-canvas"></canvas>

<!-- Magnetic Floating Liquid Dock -->
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
      <span>Generative</span>
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
```

---

## 2. CSS Styling

Tambahkan CSS ini ke stylesheet Anda:

```css
/* ================================================================
   LIQUID METAL CURSOR ATTRACTOR — CSS STYLES
   ================================================================ */
:root {
  --bg-space: #06070a;
  --chrome-100: #ffffff;
  --chrome-200: #e2e8f0;
  --chrome-300: #94a3b8;
  --border-glass: rgba(255, 255, 255, 0.12);
  --border-bright: rgba(255, 255, 255, 0.28);
}

/* Fullscreen Canvas */
#liquid-canvas {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 80;
}

/* Floating Magnetic Dock */
.liquid-dock-container {
  position: fixed;
  z-index: 90;
  pointer-events: auto;
  transition: opacity 0.3s ease;
  left: 0;
  top: 0;
}

.liquid-dock {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background: rgba(18, 22, 34, 0.75);
  backdrop-filter: blur(28px) saturate(180%);
  -webkit-backdrop-filter: blur(28px) saturate(180%);
  border: 1px solid var(--border-bright);
  border-radius: 9999px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(56, 189, 248, 0.15);
  transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.liquid-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 9999px;
  color: var(--chrome-300);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.25s ease;
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
  color: #fff;
}

.liquid-item .item-bead {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #ffffff 0%, #cbd5e1 45%, #475569 85%, #0f172a 100%);
  box-shadow: 0 0 6px rgba(255, 255, 255, 0.6);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.liquid-item:hover .item-bead {
  transform: scale(1.4);
}
```

---

## 3. JavaScript Logic

Sematkan script ini sebelum penutup tag `</body>`:

```javascript
/* ================================================================
   LIQUID METAL CURSOR ATTRACTOR — PARTICLES & VECTOR SIMULATION
   ================================================================ */
(function () {
  'use strict';

  const canvas = document.getElementById('liquid-canvas');
  const ctx = canvas.getContext('2d');
  const dockContainer = document.getElementById('liquid-dock-container');

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

  // 1. Mouse Velocity Tracking
  const mouse = {
    x: width / 2,
    y: height / 2,
    prevX: width / 2,
    prevY: height / 2,
    vx: 0,
    vy: 0,
    speed: 0
  };

  const dockPos = {
    x: width / 2,
    y: height - 90,
    targetX: width / 2,
    targetY: height - 90
  };

  window.addEventListener('mousemove', (e) => {
    mouse.prevX = mouse.x;
    mouse.prevY = mouse.y;
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const dx = mouse.x - mouse.prevX;
    const dy = mouse.y - mouse.prevY;
    mouse.vx = dx;
    mouse.vy = dy;
    mouse.speed = Math.hypot(dx, dy);

    // Magnetic pull towards dock
    const distToDock = Math.hypot(mouse.x - width / 2, mouse.y - (height - 90));
    if (distToDock < 250) {
      dockPos.targetX = width / 2 + (mouse.x - width / 2) * 0.15;
      dockPos.targetY = height - 90 + (mouse.y - (height - 90)) * 0.15;
    } else {
      dockPos.targetX = width / 2;
      dockPos.targetY = height - 90;
    }
  });

  // 2. Liquid Metal Particle Class
  const PARTICLE_COUNT = 30;
  const particles = [];

  class LiquidBead {
    constructor() {
      this.x = width / 2 + (Math.random() - 0.5) * 200;
      this.y = height / 2 + (Math.random() - 0.5) * 150;
      this.baseRadius = 6 + Math.random() * 8;
      this.radius = this.baseRadius;
      this.vx = (Math.random() - 0.5) * 2;
      this.vy = (Math.random() - 0.5) * 2;
      this.friction = 0.94;
    }

    update() {
      const dx = mouse.x - this.x;
      const dy = mouse.y - this.y;
      const dist = Math.hypot(dx, dy);

      // Fast swipe velocity triggers scatter
      if (mouse.speed > 24 && dist < 220) {
        const angle = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.5;
        const force = (mouse.speed / 15) * 12;
        this.vx -= Math.cos(angle) * force;
        this.vy -= Math.sin(angle) * force;
      } else {
        // Magnetic attraction to cursor when calm
        if (dist > 40 && dist < 350) {
          const pull = 0.25 / (this.baseRadius / 4);
          this.vx += (dx / dist) * pull;
          this.vy += (dy / dist) * pull;
        } else if (dist <= 40) {
          this.vx -= (dx / (dist || 1)) * 0.4;
          this.vy -= (dy / (dist || 1)) * 0.4;
        }
      }

      this.vx *= this.friction;
      this.vy *= this.friction;
      this.x += this.vx;
      this.y += this.vy;
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

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
      grad.addColorStop(1, '#0f172a');

      ctx.fillStyle = grad;
      ctx.shadowColor = 'rgba(56, 189, 248, 0.4)';
      ctx.shadowBlur = 10;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new LiquidBead());
  }

  // 3. Procedural Metaball Bridges
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

  // 4. Render Loop 60 FPS
  function animate() {
    ctx.clearRect(0, 0, width, height);

    drawLiquidBridges();

    particles.forEach(p => {
      p.update();
      p.draw();
    });

    dockPos.x += (dockPos.targetX - dockPos.x) * 0.12;
    dockPos.y += (dockPos.targetY - dockPos.y) * 0.12;

    if (dockContainer) {
      dockContainer.style.transform = `translate3d(${dockPos.x}px, ${dockPos.y}px, 0) translate(-50%, -50%)`;
    }

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})();
```
