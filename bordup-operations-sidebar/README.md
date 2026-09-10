# BordUp™ Operations Sidebar — Enterprise B2B HR & Workforce Suite

A comprehensive, enterprise-grade **collapsible rail sidebar navigation** system for B2B HR operations, workforce planning, and operational dashboards. Features a collapsible sidebar (260px wide to 76px compact rail), department color taxonomy badges, workspace switcher, and interactive operational dashboard elements. Part of the **Modern Navbar Collection**.

![Theme Support](https://img.shields.io/badge/Theme-Light%20Enterprise-f8fafc?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/JS-Vanilla-f7df1e?style=flat-square)
![CSS Tokens](https://img.shields.io/badge/CSS-Custom_Properties-1d4ed8?style=flat-square)
![A11y](https://img.shields.io/badge/A11y-WCAG_2.1_AA-059669?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_Drawer-3b82f6?style=flat-square)

---

## ✨ Features

| Feature | Details |
|---|---|
| **Collapsible Sidebar Rail** | Smooth transition between full width (`260px`) and icon-only rail mode (`76px`) with localStorage state persistence. |
| **Hover Tooltips in Rail Mode** | When collapsed, menu items display sleek floating hover tooltips indicating the label and notification badges. |
| **Workspace Selector** | Interactive company workspace dropdown switcher ("Rocks Company · 20 Members") with keyboard accessibility. |
| **Department Color Taxonomy** | Category badges with dedicated pastel accents for Engineering (Indigo), Design (Purple), Marketing (Teal), and Sales (Amber). |
| **Active Nav Indicator & Pill Count** | Navigation links feature active indicators and notification pill badges (e.g., "Schedule +3", "Messages 4"). |
| **Interactive Dashboard Page** | Includes enterprise metric stat cards, schedule timeline with avatars, employee directory table, and pending leave request cards. |
| **Action Toast Feedback** | Approving or rejecting employee leave requests triggers responsive toast feedback with smooth slide-up animation. |
| **Mobile Drawer Support** | Full-height off-canvas drawer on mobile (< 992px) with backdrop overlay blur and accessible toggle. |
| **Zero Dependencies** | Built using 100% semantic HTML5, pure modern CSS with variables, and Vanilla JavaScript. |

---

## 📁 File Structure

```
bordup-operations-sidebar/
├── index.html        # Complete HR Operations dashboard & collapsible sidebar
├── style.css         # Enterprise design tokens, sidebar rail animations, dashboard grid
├── script.js         # Collapse toggle, navigation state, leave actions, mobile drawer
├── NAVBAR_CODE.md    # Clean, isolated sidebar code ready to copy into your project
└── README.md         # Documentation and implementation details
```

---

## 🎨 Design Tokens

All design tokens are defined as CSS custom properties in `style.css`:

```css
:root {
  /* Sidebar Geometry */
  --sidebar-width-expanded: 260px;
  --sidebar-width-collapsed: 76px;
  --header-height: 68px;

  /* Enterprise Palette */
  --color-bg-app: #f4f6fa;
  --color-sidebar-bg: #ffffff;
  --color-sidebar-border: #e9ecef;
  --color-primary: #3b5bdb;
  --color-primary-light: #e8ecfc;
  --color-text-main: #1e293b;
  --color-text-muted: #64748b;

  /* Department Taxonomy */
  --dept-eng: #4c6ef5;
  --dept-design: #845ef7;
  --dept-marketing: #12b886;
  --dept-sales: #f59f00;
}
```

---

## 🚀 Quick Usage

1. Open `index.html` in any modern web browser.
2. Click the **collapse arrow button** on the top right of the sidebar to toggle between expanded and rail modes.
3. In collapsed rail mode, **hover over navigation icons** to see the contextual tooltips.
4. Click **Approve** or **Reject** on the leave request cards to test live state updates and toast alerts.
5. Resize the viewport below `992px` to experience the mobile responsive drawer.
