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
  const navMenu       = document.getElementById('nav-menu');
  const intentLabel   = document.getElementById('intent-label');
  const intentConf    = document.getElementById('intent-conf');
  const intentBadge   = document.getElementById('intent-badge');
  const actionPrimary = document.getElementById('action-primary');
  const actionGhost   = document.getElementById('action-ghost');
  const simButtons    = document.querySelectorAll('.sim-btn');
  const lightOrb      = document.getElementById('light-orb');

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

    // Morph primary CTA
    if (actionPrimary) {
      actionPrimary.textContent = config.primaryAction.label;
      actionPrimary.href = config.primaryAction.href;
      actionPrimary.style.background = `linear-gradient(135deg, ${config.pillColor}, #4f46e5)`;
    }

    // Morph ghost CTA
    if (actionGhost) {
      actionGhost.textContent = config.ghostAction.label;
      actionGhost.href = config.ghostAction.href;
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
