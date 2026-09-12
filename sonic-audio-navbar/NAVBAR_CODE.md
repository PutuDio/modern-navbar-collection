# Sonic Audio Navbar — Isolated Code Snippets

Integrasikan navigasi Web Audio API sintetis ini ke dalam proyek kreatif atau portofolio audio Anda.

---

## 1. HTML Markup

```html
<!-- SONIC AUDIO NAVBAR -->
<nav class="sonic-navbar" aria-label="Sonic Audio Navigation">
  <div class="sonic-brand">
    <span class="pulse-dot"></span>
    <span class="brand-text">Resonance Studio</span>
  </div>

  <!-- Realtime Audio Waveform Visualizer -->
  <div class="visualizer-container">
    <canvas id="audio-waveform-canvas" width="180" height="36"></canvas>
  </div>

  <!-- Audio Menu Items -->
  <ul class="sonic-menu">
    <li class="sonic-item active" data-freq="220" data-type="sine" data-name="Ambient Home">
      <a href="#home">Home</a>
    </li>
    <li class="sonic-item" data-freq="330" data-type="triangle" data-name="Synth Studio">
      <a href="#studio">Studio</a>
    </li>
    <li class="sonic-item" data-freq="440" data-type="sine" data-name="Chime Tracks">
      <a href="#tracks">Tracks</a>
    </li>
    <li class="sonic-item" data-freq="554" data-type="sawtooth" data-name="Warm Piano">
      <a href="#artists">Artists</a>
    </li>
    <li class="sonic-item cta" data-freq="659" data-type="sine" data-name="Percussion Hit">
      <a href="#contact">Book Session</a>
    </li>
  </ul>

  <!-- Audio Mute/Enable Button -->
  <button id="sound-toggle-btn" class="sound-toggle-btn" aria-label="Toggle Sound">
    <span id="sound-icon">🔊</span>
  </button>
</nav>
```

---

## 2. Minimal Web Audio Trigger (JS)

```javascript
const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type = 'sine', duration = 0.25) {
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

  gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

// Attach hover
document.querySelectorAll('.sonic-item').forEach(item => {
  item.addEventListener('mouseenter', () => {
    const freq = parseFloat(item.dataset.freq);
    const type = item.dataset.type || 'sine';
    playTone(freq, type);
  });
});
```
