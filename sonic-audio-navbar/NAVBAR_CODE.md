# Sonic Audio Navbar — Component Code

File ini berisi kode komponen bersih (*clean isolated code*) yang mencakup ketiga bagian: **HTML Markup**, **CSS Styling**, dan **JavaScript Logic** untuk mengintegrasikan navigasi berbasis suara Web Audio API (*sonic synthesizer harmonic navbar*) ke proyek web Anda tanpa file audio eksternal.

---

## 1. HTML Markup

Letakkan markup navigasi audio ini di dalam tag `<body>`:

```html
<!-- ================================================================
     SONIC AUDIO HARMONIC NAVBAR
     ================================================================ -->
<div class="sonic-nav-wrapper" role="banner">
  <nav class="sonic-nav" id="sonic-nav" aria-label="Harmonic sonic navigation">

    <!-- Brand -->
    <a href="#home" class="sonic-brand" aria-label="Frequency Studio — Home">
      <div class="brand-waveform" aria-hidden="true">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M1 8 Q3 3 5 8 Q7 13 9 8 Q11 3 13 8 Q15 13 16 8" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="none"/>
        </svg>
      </div>
      <span class="sonic-brand-name">Freq Studio</span>
    </a>

    <!-- Live Visualizer Equalizer Meter -->
    <div class="visualizer-strip" aria-hidden="true" title="Audio meter">
      <div class="viz-bar" style="height:8px;"></div>
      <div class="viz-bar" style="height:14px;"></div>
      <div class="viz-bar" style="height:22px;"></div>
      <div class="viz-bar" style="height:10px;"></div>
      <div class="viz-bar" style="height:26px;"></div>
      <div class="viz-bar" style="height:16px;"></div>
      <div class="viz-bar" style="height:12px;"></div>
    </div>

    <!-- Sonic Nav Links (Each item triggers a synth instrument) -->
    <ul class="sonic-links" role="list">
      <li>
        <a class="sonic-link active" data-voice="home" href="#home" role="listitem">
          <span class="link-instrument">🎛️</span>
          <span>Home</span>
          <span class="link-freq">A3 · 220Hz</span>
          <span class="link-glow-bar" style="background:#a855f7;"></span>
        </a>
      </li>

      <li>
        <a class="sonic-link" data-voice="project" href="#projects" role="listitem">
          <span class="link-instrument">🎸</span>
          <span>Projects</span>
          <span class="link-freq">A4 · 440Hz</span>
          <span class="link-glow-bar" style="background:#06b6d4;"></span>
        </a>
      </li>

      <li>
        <a class="sonic-link" data-voice="lab" href="#lab" role="listitem">
          <span class="link-instrument">🎹</span>
          <span>Lab</span>
          <span class="link-freq">E4 · 330Hz</span>
          <span class="link-glow-bar" style="background:#10b981;"></span>
        </a>
      </li>

      <li>
        <a class="sonic-link" data-voice="about" href="#about" role="listitem">
          <span class="link-instrument">🎺</span>
          <span>About</span>
          <span class="link-freq">C4 · 264Hz</span>
          <span class="link-glow-bar" style="background:#f59e0b;"></span>
        </a>
      </li>

      <li>
        <a class="sonic-link" data-voice="contact" href="#contact" role="listitem">
          <span class="link-instrument">🥁</span>
          <span>Contact</span>
          <span class="link-freq">A2 · 110Hz</span>
          <span class="link-glow-bar" style="background:#f43f5e;"></span>
        </a>
      </li>
    </ul>

  </nav>
</div>
```

---

## 2. CSS Styling

Tambahkan CSS ini ke stylesheet Anda:

```css
/* ================================================================
   SONIC AUDIO NAVBAR — CSS DESIGN TOKENS & STYLES
   ================================================================ */
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');

:root {
  --bg-panel: rgba(28, 22, 48, 0.88);
  --border-subtle: rgba(255, 255, 255, 0.06);
  --border-dim: rgba(255, 255, 255, 0.10);

  --note-home:    #a855f7;
  --note-project: #06b6d4;
  --note-lab:     #10b981;
  --note-about:   #f59e0b;
  --note-contact: #f43f5e;

  --text-main: #f0eaff;
  --text-muted: #8b7db5;
  --font-display: 'Space Grotesk', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}

/* ── Fixed Navbar Container ──────────────────────────────────── */
.sonic-nav-wrapper {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  pointer-events: none;
}

.sonic-nav {
  display: flex;
  align-items: stretch;
  background: var(--bg-panel);
  border: 1px solid var(--border-dim);
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.06);
  pointer-events: all;
  height: 64px;
}

/* ── Brand ───────────────────────────────────────────────────── */
.sonic-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 20px;
  border-right: 1px solid var(--border-subtle);
  text-decoration: none;
  flex-shrink: 0;
}

.brand-waveform {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  background: linear-gradient(135deg, #7c3aed, #a855f7);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 16px rgba(168, 85, 247, 0.45);
}

.sonic-brand-name {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  color: var(--text-main);
}

/* ── Equalizer Meter ─────────────────────────────────────────── */
.visualizer-strip {
  display: flex;
  align-items: center;
  padding: 0 16px;
  border-right: 1px solid var(--border-subtle);
  gap: 3px;
  flex-shrink: 0;
}

.viz-bar {
  width: 3px;
  border-radius: 2px;
  background: var(--note-home);
  transition: height 150ms ease;
  min-height: 2px;
}

/* ── Menu Links ──────────────────────────────────────────────── */
.sonic-links {
  display: flex;
  align-items: stretch;
  list-style: none;
  margin: 0;
  padding: 0;
}

.sonic-link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
  gap: 3px;
  cursor: pointer;
  text-decoration: none;
  color: var(--text-muted);
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 500;
  transition: color 150ms ease, background 150ms ease;
  border-right: 1px solid var(--border-subtle);
  min-width: 88px;
}

.sonic-links li:last-child .sonic-link {
  border-right: none;
}

.sonic-link:hover, .sonic-link.active {
  color: var(--text-main);
  background: rgba(255, 255, 255, 0.05);
}

.link-instrument {
  font-size: 17px;
  line-height: 1;
  transition: transform 200ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

.sonic-link:hover .link-instrument,
.sonic-link.active .link-instrument {
  transform: scale(1.2);
}

.link-freq {
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  opacity: 0.5;
  transition: opacity 150ms ease;
}

.sonic-link:hover .link-freq,
.sonic-link.active .link-freq {
  opacity: 1;
}

.link-glow-bar {
  position: absolute;
  bottom: 0; left: 10%; right: 10%;
  height: 2px;
  border-radius: 2px;
  opacity: 0;
  transition: opacity 150ms ease;
}

.sonic-link.active .link-glow-bar,
.sonic-link:hover .link-glow-bar {
  opacity: 1;
}
```

---

## 3. JavaScript Logic

Sematkan script Web Audio synthesizer ini sebelum penutup tag `</body>`:

```javascript
/* ================================================================
   SONIC AUDIO NAVBAR — WEB AUDIO API SYNTHESIZER ENGINE
   ================================================================ */
(function () {
  'use strict';

  // 1. Definisi Karakter Nada & Synthesizer Per Menu
  const VOICES = [
    { id: 'home',    freq: 220, chord: [220, 277, 330],  type: 'sine',     filterFreq: 600,  color: '#a855f7' },
    { id: 'project', freq: 440, chord: [440, 554, 660],  type: 'sawtooth', filterFreq: 1200, color: '#06b6d4' },
    { id: 'lab',     freq: 330, chord: [330, 415, 495],  type: 'square',   filterFreq: 800,  color: '#10b981' },
    { id: 'about',   freq: 264, chord: [264, 330, 396],  type: 'triangle', filterFreq: 1400, color: '#f59e0b' },
    { id: 'contact', freq: 110, chord: [110, 165, 220],  type: 'sine',     filterFreq: 200,  color: '#f43f5e' }
  ];

  let audioCtx = null;
  let masterGain = null;

  function initAudio() {
    if (audioCtx) return;
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    masterGain = audioCtx.createGain();
    masterGain.gain.value = 0.35;
    masterGain.connect(audioCtx.destination);
  }

  // 2. Mainkan Nada Synthesizer Polyphonic Poly-chord
  function playVoice(voice) {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;

    voice.chord.forEach((freq, i) => {
      const osc  = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filt = audioCtx.createBiquadFilter();

      osc.type = voice.type;
      osc.frequency.setValueAtTime(freq, now);

      filt.type = 'lowpass';
      filt.frequency.value = voice.filterFreq;

      // ADSR envelope
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.5 / (i + 1), now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      osc.connect(filt);
      filt.connect(gain);
      gain.connect(masterGain);

      osc.start(now);
      osc.stop(now + 0.8);
    });

    // Update equalizer viz bars color
    document.querySelectorAll('.viz-bar').forEach(b => {
      b.style.background = voice.color;
      b.style.height = `${Math.floor(Math.random() * 24 + 6)}px`;
    });
  }

  // 3. Attach Event Listener (Hover & Click)
  const sonicLinks = document.querySelectorAll('.sonic-link');
  sonicLinks.forEach(link => {
    const voiceId = link.dataset.voice;
    const voice = VOICES.find(v => v.id === voiceId);
    if (!voice) return;

    link.addEventListener('mouseenter', () => {
      playVoice(voice);
    });

    link.addEventListener('click', (e) => {
      sonicLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      playVoice(voice);
    });
  });

  // Unlock gesture pada klik pertama di window
  window.addEventListener('click', initAudio, { once: true });
})();
```
