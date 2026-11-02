/* =============================================================
   SONIC AUDIO NAVBAR — script.js
   Web Audio API Synthesizer · Harmonic Navigation Engine
   ============================================================= */
(function () {
  'use strict';

  /* ─────────────────────────────────────────────────────────────
     AUDIO ENGINE
     Each nav link has a unique synthesizer voice:
     Home    → Ambient Pad (sine + lowpass)     220 Hz
     Projects→ Synth Lead (sawtooth + highpass)  440 Hz
     Lab     → Arpeggiator (square + echo-ish)   330 Hz
     About   → Electric Piano (triangle + warm)  264 Hz
     Contact → Rhythm Tap (pulse + punch)        110 Hz
  ────────────────────────────────────────────────────────────── */

  const VOICES = [
    { id: 'home',    label: 'Home',     instrument: '🎛️',  freq: 220, chord: [220, 277, 330],  type: 'sine',     filterType: 'lowpass',  filterFreq: 600,  color: '#a855f7', soundLabel: 'Ambient Pad',     note: 'A3' },
    { id: 'project', label: 'Projects', instrument: '🎸',  freq: 440, chord: [440, 554, 660],  type: 'sawtooth', filterType: 'bandpass', filterFreq: 1200, color: '#06b6d4', soundLabel: 'Synth Lead',      note: 'A4' },
    { id: 'lab',     label: 'Lab',      instrument: '🎹',  freq: 330, chord: [330, 415, 495],  type: 'square',   filterType: 'lowpass',  filterFreq: 800,  color: '#10b981', soundLabel: 'Arpeggiator',     note: 'E4' },
    { id: 'about',   label: 'About',    instrument: '🎺',  freq: 264, chord: [264, 330, 396],  type: 'triangle', filterType: 'lowpass',  filterFreq: 1400, color: '#f59e0b', soundLabel: 'Electric Piano',   note: 'C4' },
    { id: 'contact', label: 'Contact',  instrument: '🥁',  freq: 110, chord: [110, 165, 220],  type: 'sine',     filterType: 'highpass', filterFreq: 200,  color: '#f43f5e', soundLabel: 'Rhythm Tap',       note: 'A2' },
  ];

  let audioCtx = null;
  let masterGain = null;
  let isUnlocked = false;
  let activeVoice = VOICES[0];
  let sweepTimeouts = [];
  /* ── DOM refs ───────────────────────────────────────────────── */
  const sonicLinks  = document.querySelectorAll('.sonic-link');
  const vizBars     = document.querySelectorAll('.viz-bar');
  const banner      = document.getElementById('soundscape-banner');
  const bannerIcon  = document.getElementById('banner-icon');
  const bannerValue = document.getElementById('banner-value');

  /* ── Audio context init (requires user gesture) ─────────────── */
  function initAudio() {
    if (audioCtx) return;
    audioCtx  = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.4;
    masterGain.connect(audioCtx.destination);

    isUnlocked = true;


    playVoice(VOICES[0], false); // play ambient welcome note
  }

  /* ── Play a synthesizer voice ────────────────────────────────── */
  function playVoice(voice, isClick) {
    if (!audioCtx) return;
    const now = audioCtx.currentTime;

    voice.chord.forEach((freq, i) => {
      const osc  = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filt = audioCtx.createBiquadFilter();

      osc.type      = voice.type;
      osc.frequency.setValueAtTime(freq, now);

      // Slight vibrato for richness
      const lfo = audioCtx.createOscillator();
      const lfoGain = audioCtx.createGain();
      lfo.frequency.setValueAtTime(4, now);
      lfoGain.gain.setValueAtTime(voice.type === 'sawtooth' ? 8 : 3, now);
      lfo.connect(lfoGain);
      lfoGain.connect(osc.frequency);
      lfo.start(now);

      filt.type            = voice.filterType;
      filt.frequency.value = voice.filterFreq;
      filt.Q.value         = 2;

      // ADSR envelope
      const attackTime  = isClick ? 0.01 : 0.08;
      const decayTime   = isClick ? 0.08 : 0.12;
      const sustainLevel = isClick ? 0.5  : 0.35;
      const releaseTime  = isClick ? 0.5  : 1.4;
      const totalDuration = attackTime + decayTime + (isClick ? 0.4 : 1.0) + releaseTime;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.6 / (i + 1), now + attackTime);
      gain.gain.linearRampToValueAtTime(sustainLevel / (i + 1), now + attackTime + decayTime);
      gain.gain.setValueAtTime(sustainLevel / (i + 1), now + totalDuration - releaseTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + totalDuration);

      osc.connect(filt);
      filt.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + totalDuration);
      lfo.stop(now + totalDuration);
    });

    activeVoice = voice;
    updateNavColors(voice);
    showBanner(voice);
  }

  /* ── Strumming: sweep fast over nav ─────────────────────────── */
  let lastStrumIdx = -1;
  let strumChain = [];

  function strumVoice(voice, delayMs) {
    const t = setTimeout(() => {
      if (!audioCtx) return;
      const now = audioCtx.currentTime;
      const osc  = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = voice.type;
      osc.frequency.setValueAtTime(voice.freq, now);
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.25, now + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 0.5);
    }, delayMs);
    sweepTimeouts.push(t);
  }

  function clearSweep() {
    sweepTimeouts.forEach(clearTimeout);
    sweepTimeouts = [];
  }

  /* ── Visualizer bars animation ───────────────────────────────── */
  function updateVizBars(voice) {
    if (!vizBars.length) return;
    const heights = [6, 12, 20, 14, 28, 18, 10, 22, 8, 16, 24, 10, 18];
    vizBars.forEach((bar, i) => {
      const h = (heights[i % heights.length] + Math.random() * 10);
      bar.style.height = h + 'px';
      bar.style.background = voice.color;
      bar.style.boxShadow = `0 0 6px ${voice.color}80`;
    });
  }


  function updateNavColors(voice) {
    sonicLinks.forEach(link => {
      link.classList.remove('active');
      const gBar = link.querySelector('.link-glow-bar');
      if (gBar) gBar.style.background = '';
    });
    const active = document.querySelector(`.sonic-link[data-voice="${voice.id}"]`);
    if (active) {
      active.classList.add('active');
      const gBar = active.querySelector('.link-glow-bar');
      if (gBar) gBar.style.background = voice.color;
    }
  }

  /* ── Banner ──────────────────────────────────────────────────── */
  let bannerTimer = null;
  function showBanner(voice) {
    if (!banner) return;
    if (bannerIcon)  bannerIcon.textContent  = voice.instrument;
    if (bannerValue) bannerValue.textContent = `${voice.soundLabel} · ${voice.note} · ${voice.freq} Hz`;
    banner.classList.add('visible');
    clearTimeout(bannerTimer);
    bannerTimer = setTimeout(() => banner.classList.remove('visible'), 2800);
  }

  /* ── Nav events ─────────────────────────────────────────────── */
  sonicLinks.forEach((link, idx) => {
    const voice = VOICES.find(v => v.id === link.dataset.voice);
    if (!voice) return;

    link.addEventListener('mouseenter', () => {
      if (!isUnlocked) return;
      // Trigger strum chord note on hover
      strumVoice(voice, 0);
      link.classList.add('playing');

      const ripple = link.querySelector('.link-ripple');
      if (ripple) {
        ripple.style.borderColor = voice.color;
        link.classList.remove('playing');
        void link.offsetWidth; // trigger reflow
        link.classList.add('playing');
      }

      updateVizBars(voice);

      // If sweeping fast (mouse moves across multiple links)
      clearSweep();
    });

    link.addEventListener('pointerdown', () => {
      if (!isUnlocked) { initAudio(); return; }
      strumVoice(voice, 0);
      link.classList.add('playing');
      const ripple = link.querySelector('.link-ripple');
      if (ripple) {
        ripple.style.borderColor = voice.color;
        link.classList.remove('playing');
        void link.offsetWidth;
        link.classList.add('playing');
      }
      updateVizBars(voice);
      showBanner(voice);
    });

    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (!isUnlocked) { initAudio(); return; }
      playVoice(voice, true);
      // Navigate
      const target = document.querySelector(voice.href || `#${voice.id}`);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  });

  /* ── Sweep detection (fast hover creates harmonic sweep) ────── */
  let lastHoverTime = 0;
  let hoverIdx = -1;
  sonicLinks.forEach((link, idx) => {
    link.addEventListener('mouseenter', () => {
      const now = Date.now();
      if (now - lastHoverTime < 180 && hoverIdx !== idx) {
        // Fast sweep — schedule strum
        strumVoice(VOICES[idx] || VOICES[0], 0);
      }
      lastHoverTime = now;
      hoverIdx = idx;
    });
  });







})();
