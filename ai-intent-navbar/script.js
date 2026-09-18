/* =============================================================
   AI ADAPTIVE INTENT NAVBAR — script.js
   Predictive Intent Inference Engine & Dynamic Morphing
   ============================================================= */

(function () {
  'use strict';

  /* ── Intent Profiles ────────────────────────────────────────── */
  const INTENTS = {
    exploring: {
      id: 'exploring',
      label: 'General Exploration',
      confidence: 78,
      pillColor: '#6366f1',
      links: [
        { label: 'Platform', href: '#hero', class: '' },
        { label: 'Solutions', href: '#solutions', class: '' },
        { label: 'Technology', href: '#tech-specs', class: '' },
        { label: 'Enterprise', href: '#enterprise-security', class: '' },
        { label: 'Pricing', href: '#pricing', class: '' }
      ],
      primaryAction: { label: 'Get Started Free →', href: '#cta' },
      ghostAction: { label: 'Book Demo', href: '#demo' }
    },
    developer: {
      id: 'developer',
      label: 'Developer & Architecture',
      confidence: 96,
      pillColor: '#06b6d4',
      links: [
        { label: 'API Reference', href: '#tech-specs', class: '' },
        { label: 'Python / TS SDK', href: '#tech-specs', class: '' },
        { label: 'Edge Benchmarks', href: '#tech-specs', class: '' },
        { label: 'GitHub Repo', href: 'https://github.com', class: '' }
      ],
      primaryAction: { label: 'npm i @synapse/sdk 📋', href: '#copy-sdk' },
      ghostAction: { label: 'Interactive Sandbox', href: '#sandbox' }
    },
    enterprise: {
      id: 'enterprise',
      label: 'Enterprise Procurement',
      confidence: 93,
      pillColor: '#10b981',
      links: [
        { label: 'SOC2 & HIPAA', href: '#enterprise-security', class: '' },
        { label: '99.999% SLA', href: '#enterprise-security', class: '' },
        { label: 'Security Whitepaper', href: '#enterprise-security', class: '' },
        { label: 'ROI Calculator', href: '#pricing', class: '' }
      ],
      primaryAction: { label: 'Schedule Executive Demo →', href: '#demo' },
      ghostAction: { label: 'Custom Contract', href: '#sales' }
    },
    designer: {
      id: 'designer',
      label: 'Design & Visual Studio',
      confidence: 89,
      pillColor: '#f59e0b',
      links: [
        { label: 'UI Architecture', href: '#hero', class: '' },
        { label: 'Design Tokens', href: '#solutions', class: '' },
        { label: 'Figma Community Kit', href: '#hero', class: '' }
      ],
      primaryAction: { label: 'Download Design Kit 🎨', href: '#kit' },
      ghostAction: { label: 'Component Gallery', href: '#components' }
    }
  };

  /* ── State ─────────────────────────────────────────────────── */
  let currentIntent = 'exploring';
  let dwellTimers = {};

  /* ── DOM References ─────────────────────────────────────────── */
  const navMenu            = document.getElementById('nav-menu');
  const intentLabel        = document.getElementById('intent-label');
  const intentConf         = document.getElementById('intent-conf');
  const intentBadge        = document.getElementById('intent-badge');
  const actionPrimary      = document.getElementById('action-primary');
  const actionGhost        = document.getElementById('action-ghost');
  const simButtons         = document.querySelectorAll('.sim-btn');
  const lightOrb           = document.getElementById('light-orb');

  // Mobile Drawer Elements
  const navBurger          = document.getElementById('nav-burger');
  const mobileDrawer       = document.getElementById('mobile-drawer');
  const mobileBackdrop     = document.getElementById('mobile-backdrop');
  const drawerClose        = document.getElementById('drawer-close');
  const mobileNavMenu      = document.getElementById('mobile-nav-menu');
  const mobileIntentLabel  = document.getElementById('mobile-intent-label');
  const mobileIntentConf   = document.getElementById('mobile-intent-conf');
  const mobileIntentBadge  = document.getElementById('mobile-intent-badge');
  const mobileActionPrimary = document.getElementById('mobile-action-primary');
  const mobileActionGhost  = document.getElementById('mobile-action-ghost');

  function openDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (navBurger) {
      navBurger.classList.add('is-active');
      navBurger.setAttribute('aria-expanded', 'true');
    }
  }

  function closeDrawer() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('is-open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (navBurger) {
      navBurger.classList.remove('is-active');
      navBurger.setAttribute('aria-expanded', 'false');
    }
  }

  if (navBurger) {
    navBurger.addEventListener('click', () => {
      const isOpen = mobileDrawer && mobileDrawer.classList.contains('is-open');
      isOpen ? closeDrawer() : openDrawer();
    });
  }

  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeDrawer);
  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });

  /* ── Morph Navbar into Intent State ─────────────────────────── */
  function morphNavbar(intentKey) {
    if (!INTENTS[intentKey]) return;
    currentIntent = intentKey;
    const config = INTENTS[intentKey];

    // Update Simulator toolbar active state
    simButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.intent === intentKey);
    });

    // Update Intent Badge
    if (intentLabel) intentLabel.textContent = config.label;
    if (intentConf)  intentConf.textContent  = `${config.confidence}%`;
    if (intentBadge) {
      intentBadge.style.borderColor = config.pillColor;
      intentBadge.style.background  = `${config.pillColor}1a`; // 10% opacity
    }

    // Update Ambient light orb tint
    if (lightOrb) {
      lightOrb.style.background = `radial-gradient(ellipse at center, ${config.pillColor}33 0%, rgba(6, 182, 212, 0.08) 50%, transparent 80%)`;
    }

    // Render morphing links with smooth transition
    if (navMenu) {
      navMenu.style.opacity = '0';
      navMenu.style.transform = 'translateY(-4px)';

      setTimeout(() => {
        navMenu.innerHTML = '';
        config.links.forEach(link => {
          const li = document.createElement('li');
          li.className = 'adaptive-item';
          const a = document.createElement('a');
          a.href = link.href;
          a.className = 'nav-link';
          a.textContent = link.label;
          li.appendChild(a);
          navMenu.appendChild(li);
        });

        navMenu.style.opacity = '1';
        navMenu.style.transform = 'translateY(0)';
      }, 180);
    }

    // Update Mobile Intent Badge
    if (mobileIntentLabel) mobileIntentLabel.textContent = config.label;
    if (mobileIntentConf)  mobileIntentConf.textContent  = `${config.confidence}%`;
    if (mobileIntentBadge) {
      mobileIntentBadge.style.borderColor = config.pillColor;
      mobileIntentBadge.style.background  = `${config.pillColor}22`;
    }

    // Render mobile drawer links
    if (mobileNavMenu) {
      mobileNavMenu.innerHTML = '';
      config.links.forEach(link => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = link.href;
        a.className = 'nav-link';
        a.textContent = link.label;
        a.addEventListener('click', () => closeDrawer());
        li.appendChild(a);
        mobileNavMenu.appendChild(li);
      });
    }

    // Morph primary CTA
    if (actionPrimary) {
      actionPrimary.textContent = config.primaryAction.label;
      actionPrimary.href = config.primaryAction.href;
      actionPrimary.style.background = `linear-gradient(135deg, ${config.pillColor}, #4f46e5)`;
    }
    if (mobileActionPrimary) {
      mobileActionPrimary.textContent = config.primaryAction.label;
      mobileActionPrimary.href = config.primaryAction.href;
      mobileActionPrimary.style.background = `linear-gradient(135deg, ${config.pillColor}, #4f46e5)`;
      mobileActionPrimary.addEventListener('click', () => closeDrawer());
    }

    // Morph ghost CTA
    if (actionGhost) {
      actionGhost.textContent = config.ghostAction.label;
      actionGhost.href = config.ghostAction.href;
    }
    if (mobileActionGhost) {
      mobileActionGhost.textContent = config.ghostAction.label;
      mobileActionGhost.href = config.ghostAction.href;
      mobileActionGhost.addEventListener('click', () => closeDrawer());
    }
  }

  /* ── Dwell Time & Scroll Detection Heuristics ───────────────── */
  const sectionIntents = [
    { selector: '#tech-specs', intent: 'developer', minDwellMs: 1200 },
    { selector: '#enterprise-security', intent: 'enterprise', minDwellMs: 1400 },
    { selector: '#solutions', intent: 'designer', minDwellMs: 1500 }
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const match = sectionIntents.find(s => entry.target.matches(s.selector));
      if (!match) return;

      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        entry.target.classList.add('focused');
        dwellTimers[match.intent] = setTimeout(() => {
          if (currentIntent !== match.intent) {
            morphNavbar(match.intent);
          }
        }, match.minDwellMs);
      } else {
        entry.target.classList.remove('focused');
        clearTimeout(dwellTimers[match.intent]);
      }
    });
  }, { threshold: [0.4] });

  sectionIntents.forEach(s => {
    const el = document.querySelector(s.selector);
    if (el) observer.observe(el);
  });

  /* ── Interactive Simulator Buttons ──────────────────────────── */
  simButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetIntent = btn.dataset.intent;
      morphNavbar(targetIntent);
    });
  });

  /* ── Copy SDK Command Feedback ──────────────────────────────── */
  if (actionPrimary) {
    actionPrimary.addEventListener('click', (e) => {
      if (actionPrimary.getAttribute('href') === '#copy-sdk') {
        e.preventDefault();
        navigator.clipboard.writeText('npm install @synapse/sdk');
        const prevText = actionPrimary.textContent;
        actionPrimary.textContent = 'Copied to Clipboard! ✓';
        setTimeout(() => { actionPrimary.textContent = prevText; }, 2000);
      }
    });
  }

  /* ── Initial State ──────────────────────────────────────────── */
  morphNavbar('exploring');

})();
