/* =============================================================
   SUPASTE ISLAND NAVBAR — script.js
   Dynamic Island scroll, HUD dock, copy toast, mobile drawer
   ============================================================= */
(function () {
  'use strict';

  /* ── DOM refs ──────────────────────────────────────────────── */
  const islandNav    = document.getElementById('island-nav');
  const islandBurger = document.getElementById('island-burger');
  const islandDrawer = document.getElementById('island-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');
  const copyToast    = document.getElementById('copy-toast');
  const hudTabs      = document.querySelectorAll('.hud-tab[data-tab]');
  const hudGrids     = document.querySelectorAll('.hud-grid[data-grid]');

  /* ── 1. Dynamic Island Scroll Behaviour ─────────────────── */
  let lastScrollY = window.scrollY;
  let ticking = false;

  function onScroll () {
    lastScrollY = window.scrollY;
    if (!ticking) {
      requestAnimationFrame(updateIsland);
      ticking = true;
    }
  }

  function updateIsland () {
    if (lastScrollY > 40) {
      islandNav.classList.add('scrolled');
    } else {
      islandNav.classList.remove('scrolled');
    }
    ticking = false;
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── 2. Mobile Drawer ────────────────────────────────────── */
  function openDrawer () {
    islandDrawer.classList.add('open');
    islandBurger.classList.add('open');
    islandBurger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer () {
    islandDrawer.classList.remove('open');
    islandBurger.classList.remove('open');
    islandBurger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  islandBurger.addEventListener('click', () => {
    if (islandDrawer.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  drawerOverlay.addEventListener('click', closeDrawer);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  // Close on drawer link click
  document.querySelectorAll('#island-drawer a').forEach(a => {
    a.addEventListener('click', closeDrawer);
  });

  /* ── 3. HUD Category Dock Tabs ───────────────────────────── */
  hudTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.tab;

      // Update tabs
      hudTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Update grids
      hudGrids.forEach(grid => {
        if (grid.dataset.grid === targetId) {
          grid.style.display = 'grid';
          // Animate in
          grid.style.opacity = '0';
          requestAnimationFrame(() => {
            grid.style.transition = 'opacity 220ms ease';
            grid.style.opacity = '1';
          });
        } else {
          grid.style.display = 'none';
        }
      });
    });
  });

  /* ── 4. Copy Toast & Clipboard Cards ─────────────────────── */
  let toastTimer = null;

  function showToast (message) {
    clearTimeout(toastTimer);
    copyToast.querySelector('.copy-toast-msg').textContent = message;
    copyToast.classList.add('show');
    toastTimer = setTimeout(() => copyToast.classList.remove('show'), 2400);
  }

  document.querySelectorAll('.clip-card-copy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const card = btn.closest('.clip-card');
      const label = card.querySelector('.clip-card-label');
      const colorCode = card.querySelector('.color-swatch-code');
      let text = '';
      if (colorCode) text = colorCode.textContent;
      else if (label) text = label.textContent;
      else text = 'Content copied!';

      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      showToast(`Copied "${text.slice(0, 28)}${text.length > 28 ? '…' : ''}"`);
    });
  });

  // Click on any card also shows a copy toast
  document.querySelectorAll('.clip-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.clip-card-copy')) return;
      const label = card.querySelector('.clip-card-label');
      const colorCode = card.querySelector('.color-swatch-code');
      let text = '';
      if (colorCode) text = colorCode.textContent;
      else if (label) text = label.textContent;
      else text = 'Copied!';
      showToast(`Copied "${text.slice(0, 28)}${text.length > 28 ? '…' : ''}"`);
    });
  });

  /* ── 5. Smooth Scroll for anchor links ──────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeDrawer();
    });
  });

  /* ── 6. Parallax subtle for hero ────────────────────────── */
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      hero.style.transform = `translateY(${y * 0.3}px)`;
      hero.style.opacity = Math.max(0, 1 - y / 500);
    }, { passive: true });
  }

})();
