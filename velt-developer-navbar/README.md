# Velt Developer Navbar — Real-Time Collaboration SDK Platform

A stunning **dark-mode developer platform navbar** with a hover-safe **4-column mega-menu**, animated **live multiplayer cursors** (Sean & Emma), a CLI copy command card, and interactive use-case tabs. Built for real-time collaboration SDK platforms, developer tooling companies, and agent AI infrastructure providers. Part of the **Modern Navbar Collection**.

![Theme Support](https://img.shields.io/badge/Theme-Obsidian%20Dark-090a0f?style=flat-square&color=7C3AED)
![Vanilla JS](https://img.shields.io/badge/JS-Vanilla-f7df1e?style=flat-square)
![CSS Tokens](https://img.shields.io/badge/CSS-Custom_Properties-7C3AED?style=flat-square)
![A11y](https://img.shields.io/badge/A11y-WCAG_2.1_AA-059669?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_Drawer-3b82f6?style=flat-square)

---

## ✨ Features

| Feature | Details |
|---|---|
| **Obsidian Dark Topbar** | Fixed glassmorphism navbar with `backdrop-filter` blur, subtle border, and a "Book Demo" CTA with violet glow box-shadow. |
| **4-Column Mega-Menu** | Hover (or click) "Product" to reveal a rich dropdown with: **Sync** (Comments, Notifications, Recording, Activity Logs, Video Editor, Analytics, Reactions), **Real Time** (Multiplayer Editing, Single Editor, Live State Sync, Live Selection, Huddle, Presence, Cursors, Follow Mode), **Platform** (Admin Console, Dev Tools, MCP, Webhooks & API, Integrations), and a **Showcase Card** with live canvas preview. |
| **Pointer Bridge** | The mega-menu uses a safe hover bridge — moving the cursor from the trigger to the dropdown doesn't cause it to close. |
| **Live Multiplayer Cursors** | Two animated cursor tags (Sean & Emma) float around the hero section with smooth sine-wave animations in real time. |
| **CLI Command Card** | A code block with `npx skills add velt-js/agent-skills` and a ⎘ copy button that triggers a toast confirmation. |
| **Use-Case Tab Switcher** | Tabs for Dashboard Product, Documentation, Video Editor, CMS Product, and Canvas Editor. Clicking switches the preview panel. |
| **Dot Grid Background** | Subtle dot grid pattern over a violet radial gradient, giving the page a technical / data-rich atmosphere. |
| **Mobile Right Drawer** | On narrow viewports, a right-side panel slides in from the edge showing all nav links organized by section. |

---

## 📁 File Structure

```
velt-developer-navbar/
├── index.html       # Full dark developer platform page
├── style.css        # Dark design tokens, mega-menu grid, cursors, dot grid
├── script.js        # Hover mega-menu, cursor animation, CLI copy, tab switcher
├── NAVBAR_CODE.md   # Isolated navbar code for copy-paste integration
└── README.md        # This file
```

---

## 🎨 Design Tokens

```css
:root {
  --bg-base:        #090a0f;
  --bg-elevated:    #13141f;
  --accent-primary: #7C3AED;  /* Electric Violet */
  --neon-cyan:      #06B6D4;
  --neon-green:     #10B981;
  --text-primary:   rgba(255,255,255,0.95);
  --text-secondary: rgba(255,255,255,0.60);
}
```

---

## 🚀 Quick Usage

1. Open `index.html` in any modern browser.
2. **Hover** over the "Product" nav link to open the 4-column mega-menu.
3. Watch **Sean & Emma cursors** animate around the hero.
4. Click the **⎘ copy button** next to the CLI command to copy and see the toast.
5. Click **use-case tabs** to switch between product previews.
6. On mobile (< 1024px), tap the **☰ burger** (top-right) to open the right drawer.

---

## 🔧 Customization

- **Add mega-menu columns**: Add a new `<div class="mega-col">` inside `.mega-menu-grid`.
- **Change accent color**: Update `--accent-primary` token.
- **Add more cursors**: Duplicate the `.cursor-tag` elements and animate them in `script.js`.
- **Change CLI command**: Edit the `#cli-cmd-text` inner text.
- **Add use-case tabs**: Add a `.uc-tab[data-tab]` and a matching `.uc-preview[data-tab]`.
