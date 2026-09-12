/* =============================================================
   CHRONOLOGICAL SLIDER NAVBAR — script.js
   Timeline Scrubber Navigation Engine
   ============================================================= */
(function () {
  'use strict';

  /* ── Era Data ──────────────────────────────────────────────── */
  const ERAS = [
    { id: 'genesis',   year: '2019', label: 'Genesis',   slug: '#genesis',   themeClass: 'era-genesis',   eraColor: '#065f46', bg: '#f0f4f0' },
    { id: 'growth',    year: '2021', label: 'Growth',    slug: '#growth',    themeClass: 'era-growth',    eraColor: '#1d4ed8', bg: '#f0f2f8' },
    { id: 'expansion', year: '2023', label: 'Expansion', slug: '#expansion', themeClass: 'era-expansion', eraColor: '#c8922a', bg: '#f8f4ec' },
    { id: 'scale',     year: '2025', label: 'Scale',     slug: '#scale',     themeClass: 'era-scale',     eraColor: '#7c3aed', bg: '#f5f0fa' },
    { id: 'future',    year: '2026+',label: 'Future',    slug: '#future',    themeClass: 'era-future',    eraColor: '#0f766e', bg: '#eef8f7' },
  ];

  /* ── State ─────────────────────────────────────────────────── */
  let currentEraIdx = 0;
  let isAnimating   = false;
  let isDragging    = false;
  let dragStartX    = 0;
  let stripOffsetX  = 0;

  /* ── DOM refs ───────────────────────────────────────────────── */
  const body          = document.body;
  const timelineStrip = document.getElementById('timeline-strip');
  const timelineTrack = document.getElementById('timeline-track');
  const eraNodes      = document.querySelectorAll('.era-node');
  const scrubInput    = document.getElementById('scrub-input');
  const eraBadge      = document.getElementById('era-badge');
  const cursorLine    = document.querySelector('.cursor-line');
  const cursorDiamond = document.querySelector('.cursor-diamond');
  const chapters      = document.querySelectorAll('.chapter');
  const prevBtn       = document.getElementById('prev-era');
  const nextBtn       = document.getElementById('next-era');

  /* ── Apply era theme ─────────────────────────────────────────── */
  function applyEra(idx, animate) {
    if (isAnimating && animate) return;
    isAnimating = animate;

    const era = ERAS[idx];
    currentEraIdx = idx;

    // Update body class
    ERAS.forEach(e => body.classList.remove(e.themeClass));
    body.classList.add(era.themeClass);

    // Update CSS variable for era color
    body.style.setProperty('--era-color', era.eraColor);

    // Update era badge
    if (eraBadge) eraBadge.textContent = `${era.year} — ${era.label}`;

    // Update active node state
    eraNodes.forEach((node, i) => {
      node.classList.toggle('active', i === idx);
    });

    // Center the timeline strip to active node
    centerTimeline(idx, animate);

    // Update scrubber
    if (scrubInput) scrubInput.value = idx;

    // Navigate (scroll) to chapter
    const chapter = document.getElementById(era.id);
    if (chapter) {
      if (animate) {
        chapter.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // Trigger visibility animation
      revealChapters();
    }

    // Update cursor colors
    if (cursorLine)    cursorLine.style.background    = era.eraColor;
    if (cursorDiamond) cursorDiamond.style.background = era.eraColor;

    // Update stat card top borders and chapter year labels
    const activeChapter = document.getElementById(era.id);
    if (activeChapter) {
      activeChapter.querySelectorAll('.stat-card').forEach(c => {
        c.style.borderTopColor = era.eraColor;
      });
      activeChapter.querySelectorAll('.chapter-year-label').forEach(l => {
        l.style.color = era.eraColor;
      });
    }

    setTimeout(() => { isAnimating = false; }, 700);
  }

  /* ── Center timeline strip at era ────────────────────────────── */
  function centerTimeline(idx, animate) {
    if (!timelineStrip) return;
    const nodeWidth = 160;
    const offset = -(idx * nodeWidth);
    timelineStrip.style.transition = animate
      ? `transform ${480}ms cubic-bezier(0.22, 1, 0.36, 1)`
      : 'none';
    timelineStrip.style.transform = `translateX(${offset}px)`;
    stripOffsetX = offset;
  }

  /* ── Chapter visibility (intersection + manual) ──────────────── */
  function revealChapters() {
    chapters.forEach(ch => {
      ch.classList.remove('visible');
    });
    requestAnimationFrame(() => {
      const active = document.getElementById(ERAS[currentEraIdx].id);
      if (active) {
        active.classList.add('visible');
      }
    });
  }

  /* ── Era node clicks ─────────────────────────────────────────── */
  eraNodes.forEach((node, i) => {
    node.addEventListener('click', () => {
      if (i !== currentEraIdx) applyEra(i, true);
    });
    node.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        applyEra(i, true);
      }
    });
  });

  /* ── Scrubber input ──────────────────────────────────────────── */
  if (scrubInput) {
    scrubInput.max  = ERAS.length - 1;
    scrubInput.value = 0;
    scrubInput.addEventListener('input', () => {
      const idx = parseInt(scrubInput.value);
      applyEra(idx, true);
    });
  }

  /* ── Prev / Next buttons ─────────────────────────────────────── */
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentEraIdx > 0) applyEra(currentEraIdx - 1, true);
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentEraIdx < ERAS.length - 1) applyEra(currentEraIdx + 1, true);
    });
  }

  /* ── Keyboard navigation ─────────────────────────────────────── */
  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      if (currentEraIdx > 0) applyEra(currentEraIdx - 1, true);
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      if (currentEraIdx < ERAS.length - 1) applyEra(currentEraIdx + 1, true);
    }
  });

  /* ── Mouse wheel on timeline ─────────────────────────────────── */
  if (timelineTrack) {
    timelineTrack.addEventListener('wheel', (e) => {
      e.preventDefault();
      const dir = e.deltaX > 0 || e.deltaY > 0 ? 1 : -1;
      const newIdx = Math.max(0, Math.min(ERAS.length - 1, currentEraIdx + dir));
      if (newIdx !== currentEraIdx) applyEra(newIdx, true);
    }, { passive: false });
  }

  /* ── Drag-to-scrub on timeline track ──────────────────────────── */
  let pointerStartX = 0;
  let startEraIdx   = 0;

  function onPointerDown(e) {
    isDragging    = true;
    pointerStartX = e.clientX || e.touches?.[0]?.clientX;
    startEraIdx   = currentEraIdx;
    if (timelineStrip) timelineStrip.style.transition = 'none';
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const x   = e.clientX || e.touches?.[0]?.clientX;
    const dx  = x - pointerStartX;
    const nodeWidth = 160;
    const idxShift  = -Math.round(dx / nodeWidth);
    const newIdx    = Math.max(0, Math.min(ERAS.length - 1, startEraIdx + idxShift));

    // Move strip live
    if (timelineStrip) {
      const liveOffset = -(startEraIdx * nodeWidth) + dx;
      timelineStrip.style.transform = `translateX(${liveOffset}px)`;
    }

    // Update active node temporarily
    eraNodes.forEach((n, i) => n.classList.toggle('active', i === newIdx));
    if (eraBadge) eraBadge.textContent = `${ERAS[newIdx].year} — ${ERAS[newIdx].label}`;
  }

  function onPointerUp(e) {
    if (!isDragging) return;
    isDragging = false;
    const x   = e.clientX || e.changedTouches?.[0]?.clientX;
    const dx  = x - pointerStartX;
    const nodeWidth = 160;
    const idxShift  = -Math.round(dx / nodeWidth);
    const newIdx    = Math.max(0, Math.min(ERAS.length - 1, startEraIdx + idxShift));
    applyEra(newIdx, true);
  }

  if (timelineTrack) {
    timelineTrack.addEventListener('mousedown', onPointerDown);
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    timelineTrack.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  }

  /* ── IntersectionObserver: update era when user scrolls ────────── */
  const chapterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        const idx = ERAS.findIndex(e => e.id === entry.target.id);
        if (idx !== -1 && idx !== currentEraIdx && !isDragging) {
          applyEra(idx, false); // don't re-scroll, just update nav
        }
      }
    });
  }, { threshold: 0.4, rootMargin: '-10% 0px -10% 0px' });

  chapters.forEach(ch => chapterObserver.observe(ch));

  /* ── Counter animation for stat numbers ────────────────────────── */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1200;
    const start = performance.now();
    const isFloat = !Number.isInteger(target);

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      el.textContent = prefix + (isFloat ? value.toFixed(1) : Math.round(value)) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counters = entry.target.querySelectorAll('.stat-num[data-target]');
        counters.forEach(animateCounter);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  chapters.forEach(ch => counterObserver.observe(ch));

  /* ── Init ───────────────────────────────────────────────────── */
  applyEra(0, false);
  revealChapters();

})();
