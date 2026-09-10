# Untitled UI SaaS Sidebar — Cloud Admin & Team Management

A pixel-perfect, enterprise-grade **dual-tier sidebar navigation** system for modern cloud SaaS platforms and multi-tenant admin portals. Inspired by Untitled UI v4.0. Includes an organization switcher, `⌘K` command palette, account popover with radio switcher, interactive user management data table, and a bottom toast notification. Part of the **Modern Navbar Collection**.

![Theme Support](https://img.shields.io/badge/Theme-Clean%20Light-F9FAFB?style=flat-square&labelColor=374151&color=6366F1)
![Vanilla JS](https://img.shields.io/badge/JS-Vanilla-f7df1e?style=flat-square)
![CSS Tokens](https://img.shields.io/badge/CSS-Custom_Properties-1d4ed8?style=flat-square)
![A11y](https://img.shields.io/badge/A11y-WCAG_2.1_AA-059669?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_Drawer-3b82f6?style=flat-square)

---

## ✨ Features

| Feature | Details |
|---|---|
| **Dual-Tier Sidebar** | Left sidebar with GENERAL, WORKSPACE (Sisyphus Ventures), and FOOTER sections — exactly like Untitled UI v4.0. |
| **⌘K Command Palette** | Press `Ctrl+K` / `⌘K` (or click the search bar) to open a full-featured command dialog with live text filtering across navigation, actions, and preferences. |
| **Account Popover** | Click the profile pill at the bottom to open an account switcher with View Profile, Settings, multi-account radio switcher, Add Account, and Sign Out. |
| **Interactive Data Table** | Full user management table with per-row checkboxes, select-all, permission badges (Admin, Data Export, Data Import), sortable Last Active column, and row action menus. |
| **Toast Notifications** | Row action buttons trigger a rich bottom toast with Undo + View Profile action links. |
| **Top Breadcrumb Bar** | Topbar with workspace icon, breadcrumb path, and user avatar pill. |
| **Mobile Off-Canvas Drawer** | Sidebar slides in from left on mobile with overlay. Menu button in topbar toggles it. |

---

## 📁 File Structure

```
untitled-saas-sidebar/
├── index.html       # Complete SaaS admin shell + User Management demo page
├── style.css        # Untitled UI design system tokens, sidebar, table, popover, dialog
├── script.js        # ⌘K dialog, account popover, table selection, toast, mobile drawer
├── NAVBAR_CODE.md   # Isolated sidebar code for copy-paste integration
└── README.md        # This file
```

---

## 🎨 Design Tokens

```css
:root {
  /* Brand Indigo */
  --brand-500: #6172F3;
  --brand-600: #444CE7;
  --brand-700: #3538CD;

  /* Neutrals */
  --gray-25:  #FCFCFD;
  --gray-50:  #F9FAFB;
  --gray-200: #EAECF0;
  --gray-700: #344054;
  --gray-900: #101828;
}
```

---

## 🚀 Quick Usage

1. Open `index.html` in any modern browser.
2. Press **`Ctrl+K`** (Windows) or **`⌘K`** (Mac) to open the command palette.
3. Click the **Florence Shaw profile pill** (bottom-left) to open the account switcher.
4. Click **row action buttons** (⋯) in the table to trigger the toast notification.
5. On mobile (< 1024px), use the **☰** hamburger in the topbar to open the sidebar drawer.
