# AI Adaptive Intent Navbar — Isolated Code Snippets

Cuplikan kode mandiri siap salin untuk navbar prediktif morphing berbasis intent.

---

## 1. HTML Markup

```html
<!-- PREDICTIVE MORPHING NAVBAR -->
<header class="nav-header">
  <nav class="nav-container" aria-label="Predictive AI Navigation">
    <a href="#" class="nav-brand">
      <div class="brand-icon">⚡</div>
      <span class="brand-name">Synapse OS</span>
    </a>

    <!-- Adaptive Links (Filled dynamically via script) -->
    <ul class="nav-menu" id="nav-menu">
      <li class="adaptive-item"><a href="#platform" class="nav-link">Platform</a></li>
      <li class="adaptive-item"><a href="#solutions" class="nav-link">Solutions</a></li>
      <li class="adaptive-item"><a href="#pricing" class="nav-link">Pricing</a></li>
    </ul>

    <!-- Real-time Intent Confidence Pill -->
    <div class="intent-badge-pill" id="intent-badge">
      <span class="sparkle">✦</span>
      <span class="intent-text" id="intent-label">General Exploration</span>
      <span class="intent-conf" id="intent-conf">78%</span>
    </div>

    <!-- Action Buttons -->
    <div class="nav-actions">
      <a href="#demo" class="action-btn-adaptive btn-ghost-ai" id="action-ghost">Book Demo</a>
      <a href="#cta" class="action-btn-adaptive btn-primary-ai" id="action-primary">Get Started Free →</a>
    </div>
  </nav>
</header>
```

---

## 2. Minimal Morphing Function (JS)

```javascript
function morphNavbar(intentData) {
  const navMenu = document.getElementById('nav-menu');
  const label = document.getElementById('intent-label');
  const conf = document.getElementById('intent-conf');
  const cta = document.getElementById('action-primary');

  // Fade out
  navMenu.style.opacity = '0';

  setTimeout(() => {
    // Update label & confidence
    label.textContent = intentData.label;
    conf.textContent = `${intentData.confidence}%`;
    cta.textContent = intentData.cta;

    // Rebuild links
    navMenu.innerHTML = '';
    intentData.links.forEach(l => {
      const li = document.createElement('li');
      li.className = 'adaptive-item';
      li.innerHTML = `<a href="${l.href}" class="nav-link">${l.title}</a>`;
      navMenu.appendChild(li);
    });

    // Fade in
    navMenu.style.opacity = '1';
  }, 150);
}
```
