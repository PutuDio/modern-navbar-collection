/* =============================================================
   VELT DEVELOPER NAVBAR — script.js
   Mega-menu, cursors, CLI copy, tab switcher, mobile drawer
   ============================================================= */
(function () {
  'use strict';

  /* ── DOM refs ──────────────────────────────────────────────── */
  const megaMenu       = document.getElementById('mega-menu');
  const megaTrigger    = document.getElementById('mega-trigger');
  const megaWrap       = document.getElementById('mega-wrap');
  const mobileDrawer   = document.getElementById('mobile-drawer');
  const mobileOverlay  = document.getElementById('mobile-drawer-overlay');
  const navBurger      = document.getElementById('nav-burger');
  const veltToast      = document.getElementById('velt-toast');
  const cliCopyBtn     = document.getElementById('cli-copy-btn');
  const cliCmd         = document.getElementById('cli-cmd-text');
  const ucTabs         = document.querySelectorAll('.uc-tab[data-tab]');
  const ucPreviews     = document.querySelectorAll('.uc-preview[data-tab]');

  /* ── 1. Mega Menu (hover + click with pointer bridge) ─────── */
  let megaCloseTimer = null;

  function openMega () {
    clearTimeout(megaCloseTimer);
    megaMenu.classList.add('open');
    if (megaTrigger) {
      megaTrigger.classList.add('active');
      megaTrigger.querySelector('.nav-link-chevron').style.transform = 'rotate(180deg)';
    }
  }

  function closeMega () {
    megaCloseTimer = setTimeout(() => {
      megaMenu.classList.remove('open');
      if (megaTrigger) {
        megaTrigger.classList.remove('active');
        const chevron = megaTrigger.querySelector('.nav-link-chevron');
        if (chevron) chevron.style.transform = '';
      }
    }, 80);
  }

  // Hover on trigger
  if (megaTrigger) {
    megaTrigger.addEventListener('mouseenter', openMega);
    megaTrigger.addEventListener('mouseleave', closeMega);
    megaTrigger.addEventListener('click', () => {
      if (megaMenu.classList.contains('open')) closeMega();
      else openMega();
    });
    megaTrigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (megaMenu.classList.contains('open')) closeMega();
        else openMega();
      }
    });
  }

  // Hover bridge on mega panel itself
  if (megaMenu) {
    megaMenu.addEventListener('mouseenter', () => clearTimeout(megaCloseTimer));
    megaMenu.addEventListener('mouseleave', closeMega);
  }

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (
      !megaTrigger?.contains(e.target) &&
      !megaMenu?.contains(e.target)
    ) {
      closeMega();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMega();
      closeMobileDrawer();
    }
  });

  /* ── 2. Mobile Drawer ────────────────────────────────────── */
  function openMobileDrawer () {
    mobileDrawer.classList.add('open');
    navBurger.classList.add('open');
    navBurger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileDrawer () {
    mobileDrawer.classList.remove('open');
    navBurger.classList.remove('open');
    navBurger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (navBurger) {
    navBurger.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) closeMobileDrawer();
      else openMobileDrawer();
    });
  }

  if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileDrawer);

  /* ── 3. CLI Copy ─────────────────────────────────────────── */
  if (cliCopyBtn && cliCmd) {
    cliCopyBtn.addEventListener('click', () => {
      const text = cliCmd.textContent.trim();
      if (navigator.clipboard) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
      cliCopyBtn.textContent = '✓';
      cliCopyBtn.classList.add('copied');
      showToast(`Copied: ${text}`);
      setTimeout(() => {
        cliCopyBtn.textContent = '⎘';
        cliCopyBtn.classList.remove('copied');
      }, 2000);
    });
  }

  /* ── 4. Use Case Tabs ────────────────────────────────────── */
  ucTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      ucTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      ucPreviews.forEach(preview => {
        preview.style.display = preview.dataset.tab === tabId ? 'flex' : 'none';
      });
    });
  });

  /* ── 5. Multiplayer Cursor Animation ─────────────────────── */
  const cursorSean = document.getElementById('cursor-sean');
  const cursorEmma = document.getElementById('cursor-emma');

  if (cursorSean && cursorEmma) {
    let t = 0;
    function animateCursors () {
      t += 0.008;
      const seanX = 10 + 8 * Math.sin(t * 0.9);
      const seanY = 10 + 5 * Math.cos(t * 0.7);
      const emmaX = 12 + 7 * Math.sin(t * 0.8 + 2);
      const emmaY = 15 + 4 * Math.cos(t * 0.6 + 1);
      cursorSean.style.transform = `translate(${seanX}px, ${seanY}px)`;
      cursorEmma.style.transform = `translate(${-emmaX}px, ${emmaY}px)`;
      requestAnimationFrame(animateCursors);
    }
    animateCursors();
  }

  /* ── 6. Toast ────────────────────────────────────────────── */
  let toastTimer = null;

  function showToast (msg) {
    if (!veltToast) return;
    clearTimeout(toastTimer);
    const msgEl = veltToast.querySelector('.velt-toast-msg');
    if (msgEl) msgEl.textContent = msg;
    veltToast.classList.add('show');
    toastTimer = setTimeout(() => veltToast.classList.remove('show'), 2500);
  }

  // Make mega-menu items interactive
  document.querySelectorAll('.mega-item').forEach(item => {
    item.addEventListener('click', () => {
      const label = item.querySelector('.mega-item-text');
      if (label) showToast(`Navigating to ${label.textContent}…`);
      closeMega();
    });
  });

  /* ── 7. Smooth scroll ────────────────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMobileDrawer();
    });
  });

})();
