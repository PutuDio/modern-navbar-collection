/**
 * ============================================================
 * Meridian — Corporate & Enterprise Navigation System
 * Handles Mega-Menu interactions, Mobile Drawer accordions,
 * Light/Dark theme switching, Search overlay, and Keyboard A11y.
 * ============================================================
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     DOM Element References
     ───────────────────────────────────────────── */
  const htmlElement       = document.documentElement;
  const header            = document.getElementById('meridian-header');
  const themeToggle       = document.getElementById('theme-toggle');
  const searchTrigger     = document.getElementById('search-trigger');
  const searchOverlay     = document.getElementById('search-overlay');
  const searchClose       = document.getElementById('search-close');
  const searchInput       = document.getElementById('search-input');
  
  // Mobile Drawer elements
  const mobileHamburger   = document.getElementById('mobile-hamburger');
  const mobileDrawer      = document.getElementById('mobile-drawer');
  const drawerClose       = document.getElementById('drawer-close');
  const drawerBackdrop    = document.getElementById('drawer-backdrop');
  const accordionTriggers = document.querySelectorAll('.accordion-trigger');
  const mobileNavLinks    = document.querySelectorAll('.mobile-nav a');

  // Desktop Dropdown Triggers
  const dropdownTriggers  = document.querySelectorAll('.dropdown-trigger');
  const dropdownContainers = document.querySelectorAll('.has-dropdown');

  /* ─────────────────────────────────────────────
     1. Theme Management (Light / Dark)
     ───────────────────────────────────────────── */
  const THEME_STORAGE_KEY = 'meridian_corporate_theme';

  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      applyTheme(prefersDark ? 'dark' : 'light');
    }
  }

  function applyTheme(theme) {
    htmlElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }
  }

  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
    const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  /* ─────────────────────────────────────────────
     2. Header Scroll Elevation Effect
     ───────────────────────────────────────────── */
  function handleScroll() {
    if (!header) return;
    const isScrolled = window.scrollY > 15;
    header.classList.toggle('header--scrolled', isScrolled);
  }

  window.addEventListener('scroll', handleScroll, { passive: true });

  /* ─────────────────────────────────────────────
     3. Desktop Dropdown & Mega-Menu Keyboard & Click
     ───────────────────────────────────────────── */
  dropdownTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', function (e) {
      e.stopPropagation();
      const parent = trigger.closest('.has-dropdown');
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      // Close other open menus first
      dropdownTriggers.forEach(function (otherTrigger) {
        if (otherTrigger !== trigger) {
          otherTrigger.setAttribute('aria-expanded', 'false');
          const otherMenu = otherTrigger.nextElementSibling;
          if (otherMenu) otherMenu.classList.remove('is-open');
        }
      });

      // Toggle current
      trigger.setAttribute('aria-expanded', (!isExpanded).toString());
      const menu = trigger.nextElementSibling;
      if (menu) {
        menu.classList.toggle('is-open', !isExpanded);
      }
    });
  });

  // Close desktop dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-dropdown')) {
      dropdownTriggers.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        const menu = trigger.nextElementSibling;
        if (menu) menu.classList.remove('is-open');
      });
    }
  });

  /* ─────────────────────────────────────────────
     4. Search Overlay Toggle
     ───────────────────────────────────────────── */
  function openSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.add('is-active');
    searchOverlay.setAttribute('aria-hidden', 'false');
    if (searchInput) {
      setTimeout(function () { searchInput.focus(); }, 100);
    }
  }

  function closeSearch() {
    if (!searchOverlay) return;
    searchOverlay.classList.remove('is-active');
    searchOverlay.setAttribute('aria-hidden', 'true');
    if (searchTrigger) searchTrigger.focus();
  }

  if (searchTrigger) searchTrigger.addEventListener('click', openSearch);
  if (searchClose) searchClose.addEventListener('click', closeSearch);

  /* ─────────────────────────────────────────────
     5. Mobile Off-Canvas Drawer & Accordion
     ───────────────────────────────────────────── */
  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (mobileHamburger) {
      mobileHamburger.classList.add('is-active');
      mobileHamburger.setAttribute('aria-expanded', 'true');
    }
    document.body.style.overflow = 'hidden';

    // Focus close button
    if (drawerClose) {
      setTimeout(function () { drawerClose.focus(); }, 150);
    }
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (mobileHamburger) {
      mobileHamburger.classList.remove('is-active');
      mobileHamburger.setAttribute('aria-expanded', 'false');
      mobileHamburger.focus();
    }
    document.body.style.overflow = '';
  }

  if (mobileHamburger) {
    mobileHamburger.addEventListener('click', function () {
      const isOpen = mobileDrawer.classList.contains('is-open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeDrawer);

  // Mobile Accordion toggle
  accordionTriggers.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!isExpanded).toString());
    });
  });

  // Close drawer when clicking internal anchor links
  mobileNavLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      closeDrawer();
    });
  });

  /* ─────────────────────────────────────────────
     6. Global Keyboard A11y (Escape key & Tab)
     ───────────────────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      // Close search if open
      if (searchOverlay && searchOverlay.classList.contains('is-active')) {
        closeSearch();
        return;
      }
      // Close mobile drawer if open
      if (mobileDrawer && mobileDrawer.classList.contains('is-open')) {
        closeDrawer();
        return;
      }
      // Close desktop dropdowns
      dropdownTriggers.forEach(function (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
        const menu = trigger.nextElementSibling;
        if (menu) menu.classList.remove('is-open');
      });
    }
  });

  // Window resize: auto-close mobile drawer on desktop breakpoint
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1080 && mobileDrawer && mobileDrawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  /* ─────────────────────────────────────────────
     Initialization
     ───────────────────────────────────────────── */
  initTheme();
  handleScroll();

})();
