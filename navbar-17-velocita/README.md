# Velocita — Racing Cockpit Navbar

A premium, motorsport-inspired floating navigation bar with carbon fiber textures, LED accent animations, and cockpit instrument aesthetics. Part of the **Creative Navbar Collection**.

![Dark Theme](https://img.shields.io/badge/Theme-Dark-1a1a24?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/JS-Vanilla-f7df1e?style=flat-square)
![CSS Only Shape](https://img.shields.io/badge/Shape-CSS_Clip_Path-e63946?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Yes-4ade80?style=flat-square)
![Accessible](https://img.shields.io/badge/A11y-WCAG_2.1-3b82f6?style=flat-square)

---

## ✨ Features

| Feature | Details |
|---------|---------|
| **Aerodynamic Shape** | CSS `clip-path` polygon creates a hexagonal cockpit panel silhouette |
| **Carbon Fiber Texture** | Subtle repeating CSS gradient overlay mimics woven carbon fiber |
| **LED Wing Tips** | Red-to-orange gradient LEDs with pulsing glow animation |
| **Icon Box Navigation** | Each nav item has an icon inside a bordered container |
| **Active State** | Red underline indicator + icon glow + heat signature effect |
| **Hover Effects** | Border color shift, icon lift, and background illumination |
| **Brand Mark** | Animated "V" logo with pulsing dot accent |
| **Racing Flag** | Checkered pattern SVG accent on the right |
| **Mobile Menu** | Fullscreen overlay with staggered link entrance animations |
| **Keyboard Navigation** | Arrow keys, Tab, Enter, Escape support |
| **Scroll Detection** | IntersectionObserver auto-highlights active section |
| **Reduced Motion** | Respects `prefers-reduced-motion` media query |
| **No Dependencies** | Pure HTML + CSS + Vanilla JavaScript |

---

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/your-username/modern-navbar-collection.git

# Navigate to this navbar
cd modern-navbar-collection/navbar-17-velocita

# Open in browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

No build tools, bundlers, or package managers required.

---

## 📁 File Structure

```
navbar-17-velocita/
├── index.html    # Semantic HTML structure + demo sections
├── style.css     # All styles, animations, responsive rules
├── script.js     # Navigation logic, mobile menu, accessibility
└── README.md     # This file
```

---

## 🎨 Customization

All visual properties are controlled by CSS custom properties in `:root`. Modify these to adapt the navbar to your brand:

```css
:root {
  /* ── Colors ── */
  --accent-red: #e63946;          /* Primary accent */
  --accent-red-bright: #ff4757;   /* Bright variant */
  --accent-orange: #ff6b35;       /* Secondary accent (LED gradient) */
  --color-bg: #050508;            /* Page background */
  --color-surface: #0d0d12;       /* Nav surface */

  /* ── Dimensions ── */
  --nav-height: 72px;             /* Navbar height */
  --nav-max-width: 1100px;        /* Max width */
  --nav-bottom: 30px;             /* Distance from bottom */
  --icon-box: 38px;               /* Icon container size */

  /* ── Typography ── */
  --font-display: 'Orbitron', monospace, sans-serif;
  --font-body: 'Rajdhani', sans-serif;
}
```

### Common Modifications

| Want to... | Change this |
|-----------|-------------|
| Change accent color | `--accent-red`, `--accent-red-bright` |
| Change LED color | `--accent-red`, `--accent-orange` |
| Make it wider/narrower | `--nav-max-width` |
| Change position | `--nav-bottom` |
| Change icon box size | `--icon-box` |
| Modify shape | `clip-path` polygon in `.nav-shell` |
| Change fonts | `--font-display`, `--font-body` |

---

## ♿ Accessibility

- Semantic `<nav>` element with `role="navigation"` and `aria-label`
- `role="menubar"` and `role="menuitem"` on navigation links
- `aria-current="page"` on the active link
- `aria-expanded` and `aria-controls` on mobile toggle
- `aria-hidden` on decorative elements
- Focus-visible outlines on all interactive elements
- Arrow key navigation (horizontal on desktop, vertical on mobile)
- Escape key closes mobile menu
- Respects `prefers-reduced-motion`

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome  | 88+     |
| Firefox | 84+     |
| Safari  | 14.1+   |
| Edge    | 88+     |

> Requires `clip-path: polygon()`, `backdrop-filter`, and `IntersectionObserver` support.

---

## 📝 Usage Notes

1. **Removing demo content**: Delete the `<main>` sections and the "DEMO PAGE STYLES" block in `style.css`.
2. **Changing nav items**: Edit the `<li>` elements inside `.nav-links` and the corresponding `.mobile-links`.
3. **Using with a framework**: The navbar is self-contained — copy the `<nav>` HTML, all CSS (except demo styles), and the JS file into your project.
4. **Fixed positioning**: The navbar uses `position: fixed` with `bottom` offset. Ensure your page content has sufficient bottom padding.

---

## 📄 License

MIT License — free for personal and commercial use.
