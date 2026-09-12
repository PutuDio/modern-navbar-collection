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

    clearTimeout(mouse.idleTimer);
    mouse.isIdle = false;
    mouse.idleTimer = setTimeout(() => {
      mouse.isIdle = true;
      mouse.speed = 0;
    }, 150);

    // Update dock target position
    if (followCursorMode) {
      dockPos.targetX = Math.max(200, Math.min(width - 200, mouse.x));
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
  });

  window.addEventListener('mousedown', () => {
    mouse.isDown = true;
    scatterParticles(mouse.x, mouse.y, 16);
  });

  window.addEventListener('mouseup', () => {
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
