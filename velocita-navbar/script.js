/**
 * ============================================================
 * Velocita — Racing Cockpit Navbar
 * Interactive navigation with active states, smooth scrolling,
 * mobile menu, keyboard accessibility, and scroll observation.
 * ============================================================
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     DOM References
     ───────────────────────────────────────────── */
  const nav           = document.getElementById('velocita-nav');
  const navLinks      = document.querySelectorAll('.nav-link');
  const mobileToggle  = document.getElementById('mobile-toggle');
  const mobileMenu    = document.getElementById('mobile-menu');
  const mobileLinks   = document.querySelectorAll('.mobile-link');
  const sections      = document.querySelectorAll('.demo-section');

  /** Respect user's reduced-motion preference */
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;


  /* ─────────────────────────────────────────────
     Active State Management
     ───────────────────────────────────────────── */

  /**
   * Update the active link across both desktop and mobile navs.
   * @param {string} targetId — The section id to mark as active.
   */
  function setActiveLink(targetId) {
    // Desktop links
    navLinks.forEach(function (link) {
      var isActive = link.dataset.target === targetId;
      link.classList.toggle('active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    // Mobile links
    mobileLinks.forEach(function (link) {
      link.classList.toggle('active', link.dataset.target === targetId);
    });
  }


  /* ─────────────────────────────────────────────
     Smooth Scrolling
     ───────────────────────────────────────────── */

  /**
   * Scroll the viewport to a section.
   * @param {string} targetId — The section id to scroll to.
   */
  function scrollToSection(targetId) {
    var section = document.getElementById(targetId);
    if (!section) return;

    section.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start'
    });
  }


  /* ─────────────────────────────────────────────
     Navigation Click Handler
     ───────────────────────────────────────────── */

  /**
   * Handle a click on any nav link (desktop or mobile).
   * @param {Event} e — The click event.
   */
  function handleNavClick(e) {
    e.preventDefault();
    var target = e.currentTarget.dataset.target;
    if (!target) return;

    setActiveLink(target);
    scrollToSection(target);

    // Close the mobile menu if it's open
    if (mobileMenu && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    }
  }


  /* ─────────────────────────────────────────────
     Scroll-Based Active Detection
     ───────────────────────────────────────────── */

  /**
   * Use IntersectionObserver to auto-highlight the nav link
   * corresponding to the section currently in view.
   */
  function initScrollObserver() {
    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }


  /* ─────────────────────────────────────────────
     Mobile Menu
     ───────────────────────────────────────────── */

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus the first link after transition
    var firstLink = mobileMenu.querySelector('.mobile-link');
    if (firstLink) {
      setTimeout(function () {
        firstLink.focus();
      }, 350);
    }
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    mobileToggle.focus();
  }

  function toggleMobileMenu() {
    if (mobileMenu.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }


  /* ─────────────────────────────────────────────
     Keyboard Navigation
     ───────────────────────────────────────────── */

  /**
   * Support Escape to close mobile menu,
   * and arrow keys for nav link traversal.
   */
  function handleKeydown(e) {
    // Escape closes mobile menu
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
      closeMobileMenu();
      return;
    }

    var focused = document.activeElement;
    var isDesktopLink = focused && focused.classList.contains('nav-link');
    var isMobileLink  = focused && focused.classList.contains('mobile-link');

    if (!isDesktopLink && !isMobileLink) return;

    var links = isDesktopLink
      ? Array.from(navLinks)
      : Array.from(mobileLinks);
    var currentIndex = links.indexOf(focused);
    var nextIndex;

    if (isDesktopLink) {
      // Horizontal: Left/Right arrows
      if (e.key === 'ArrowRight') {
        nextIndex = (currentIndex + 1) % links.length;
      } else if (e.key === 'ArrowLeft') {
        nextIndex = (currentIndex - 1 + links.length) % links.length;
      }
    } else {
      // Vertical: Up/Down arrows
      if (e.key === 'ArrowDown') {
        nextIndex = (currentIndex + 1) % links.length;
      } else if (e.key === 'ArrowUp') {
        nextIndex = (currentIndex - 1 + links.length) % links.length;
      }
    }

    if (nextIndex !== undefined) {
      e.preventDefault();
      links[nextIndex].focus();
    }
  }


  /* ─────────────────────────────────────────────
     Initialization
     ───────────────────────────────────────────── */

  function init() {
    // Desktop nav clicks
    navLinks.forEach(function (link) {
      link.addEventListener('click', handleNavClick);
    });

    // Mobile nav clicks
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', handleNavClick);
    });

    // Mobile toggle
    if (mobileToggle) {
      mobileToggle.addEventListener('click', toggleMobileMenu);
    }

    // Keyboard
    document.addEventListener('keydown', handleKeydown);

    // Scroll-based active detection
    initScrollObserver();

    // Close mobile menu if window resizes back to desktop
    window.addEventListener('resize', function () {
      if (
        window.innerWidth > 768 &&
        mobileMenu &&
        mobileMenu.classList.contains('open')
      ) {
        closeMobileMenu();
      }
    });
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
