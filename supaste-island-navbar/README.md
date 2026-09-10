# Supaste Island Navbar — macOS Dynamic Island Landing Page

A premium, Apple-inspired floating pill navigation system for desktop productivity app landing pages. Features a **Dynamic Island** that morphs on scroll, an interactive **in-app clipboard HUD** dock with category tabs, glassmorphism surfaces, and a rich macOS Sonoma sky background. Part of the **Modern Navbar Collection**.

![Theme Support](https://img.shields.io/badge/Theme-Dark%20Glass-0a0a0c?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/JS-Vanilla-f7df1e?style=flat-square)
![CSS Tokens](https://img.shields.io/badge/CSS-Custom_Properties-1d4ed8?style=flat-square)
![A11y](https://img.shields.io/badge/A11y-WCAG_2.1_AA-059669?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_Drawer-3b82f6?style=flat-square)

---

## ✨ Features

| Feature | Details |
|---|---|
| **Dynamic Island Pill** | Centered floating pill navbar at top of viewport. Contracts subtly on scroll using `backdrop-filter` glassmorphism. |
| **macOS Sonoma Sky Background** | Atmospheric gradient from deep night blue to soft sky blue with green hills — exactly like macOS Sonoma wallpaper. |
| **In-App Clipboard HUD** | Full interactive app preview: top search bar (⌘F), category dock tabs (History, Prompts, Colors, Assets, Inspirations), and a 4-column card grid. |
| **Category Tabs** | Clicking a tab switches the HUD content grid with a smooth fade-in animation. Tabs show item count badges. |
| **Copy Toast** | Clicking any clipboard card triggers a bottom toast notification: "Copied `#0055FF`" or similar. |
| **Mobile Drawer Sheet** | On mobile, the pill shows only the burger. Tapping it slides down a full-screen drawer with frosted backdrop. |
| **Parallax Hero** | Hero text has a subtle parallax effect on scroll (translateY + fade). |
| **Zero Dependencies** | Pure HTML5, CSS3, Vanilla JS. No frameworks. |

---

## 📁 File Structure

```
supaste-island-navbar/
├── index.html        # Complete macOS landing page + HUD app window
├── style.css         # Apple design tokens, island animations, HUD dock, responsive
├── script.js         # Scroll detection, dock tabs, copy toast, mobile drawer
├── NAVBAR_CODE.md    # Isolated navbar code for easy copy-paste integration
└── README.md         # This file
```

---

## 🎨 Design Tokens

All design values are defined as CSS custom properties:

```css
:root {
  /* Island */
  --island-bg: rgba(10, 10, 12, 0.88);
  --island-border: rgba(255, 255, 255, 0.10);
  --island-blur: blur(28px) saturate(180%);

  /* Accent */
  --accent-blue: #0071E3;

  /* HUD */
  --dock-bg: rgba(28, 28, 30, 0.92);
  --dock-tab-active: rgba(255, 255, 255, 0.14);
}
```

---

## 🚀 Quick Usage

1. Open `index.html` in any modern browser.
2. **Scroll** down to see the island contract.
3. **Click category tabs** (History / Prompts / Colors / Assets / Inspirations) to switch clipboard content.
4. **Click any clipboard card** to trigger the copy toast.
5. **Resize to mobile** (< 768px) to see the hamburger and mobile drawer sheet.

---

## 🔧 Customization

- **Change brand**: Edit `.island-brand-name` text and `.island-brand-icon` SVG.
- **Change CTA text**: Edit `.island-cta` inner text.
- **Add more tabs**: Add a `<button class="hud-tab" data-tab="my-tab">` and a matching `<div class="hud-grid" data-grid="my-tab">`.
- **Change sky**: Modify the gradient in `.page-bg` background property.
- **Adjust island glass**: Change `--island-bg` and `--island-blur` tokens.
