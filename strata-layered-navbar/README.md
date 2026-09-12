# Strata — Layered Depth Navbar

A dark, editorial-style navigation bar that reimagines navigation as physical, layered sediment. Every link behaves as its own depth-layer — lifting, receding, and casting shadow like stacked geological strata. Part of the **Creative Navbar Collection**.

![Dark Theme](https://img.shields.io/badge/Theme-Dark-15130f?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/JS-Vanilla-f7df1e?style=flat-square)
![CSS Variables](https://img.shields.io/badge/CSS-Custom_Properties-4f8a8b?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Yes-b8794a?style=flat-square)
![Accessible](https://img.shields.io/badge/A11y-WCAG_2.1-3b82f6?style=flat-square)

---

## ✨ Features

| Feature | Details |
|---|---|
| **Layered Depth Interaction** | Setiap nav item punya bidang-z sendiri; hover pada satu item membuatnya "terangkat" sementara item lain mundur & meredup (efek push/pull) |
| **Layered Logo** | Logo "STRATA" punya bayangan berlapis (teal + clay) yang tersingkap saat di-hover, seperti kertas bertumpuk dilihat dari sudut |
| **Active vs Hover State** | Status aktif memakai pita aksen permanen yang lebih tebal & saturated, berbeda jelas dari pita hover sementara |
| **Scroll Compaction** | Navbar memampat secara halus (`.is-compact`) saat pengguna scroll ke bawah, mensimulasikan tekanan pada lapisan sedimen |
| **Full-Screen Mobile Menu** | Setiap item meluncur masuk sebagai pita horizontal terpisah dengan animasi staggered dari sisi berselang-seling |
| **Keyboard Accessible** | Fokus terlihat jelas, `Escape` menutup menu, fokus otomatis berpindah ke link pertama saat menu dibuka |
| **Reduced Motion Support** | Seluruh efek transform/opacity dinonaktifkan otomatis saat `prefers-reduced-motion: reduce` aktif |
| **Zero Dependencies** | Dibangun murni dengan HTML5 semantik, CSS3, dan Vanilla JavaScript |

---

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/your-username/creative-navbar-collection.git

# Masuk ke folder navbar ini
cd creative-navbar-collection/strata-layered-navbar

# Buka di browser
start index.html        # Windows
open index.html         # macOS
xdg-open index.html     # Linux
```

Tidak perlu build tool, bundler, atau package manager apa pun.

Untuk mengintegrasikan **hanya komponen navbar** (tanpa konten demo) ke proyekmu, lihat **[`NAVBAR_CODE.md`](./NAVBAR_CODE.md)** — kode HTML/CSS/JS navbar yang sudah diisolasi dan siap salin-tempel.

---

## 📁 File Structure

```
strata-layered-navbar/
├── index.html        # Struktur semantik navbar + konten demo
├── style.css          # Design tokens, layout, animasi, responsive rules
├── script.js           # Scroll compaction, toggle menu mobile, A11y
├── NAVBAR_CODE.md    # Kode navbar terisolasi, siap salin-tempel
├── assets/               # Screenshot spotlight untuk README
└── README.md          # Dokumentasi ini
```

---

## 🎨 Design System & Customization

Seluruh warna, tipografi, dan timing animasi diatur lewat CSS custom properties di `:root` pada `style.css`:

```css
:root {
  /* Warna dasar — gelap hangat, bukan hitam pekat */
  --strata-bg: #15130f;
  --strata-layer-1: #1e1b16;
  --strata-layer-2: #2b251d;

  /* Dua aksen berlapis */
  --strata-accent-teal: #4f8a8b;
  --strata-accent-clay: #b8794a;

  /* Teks */
  --strata-text: #ede7dc;
  --strata-text-muted: #9c948a;

  /* Timing — terasa seperti bobot yang mengendap */
  --strata-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --strata-duration: 420ms;
}
```

### Common Modifications

| Want to... | Change this |
|---|---|
| Ganti warna aksen | `--strata-accent-teal`, `--strata-accent-clay` |
| Ganti warna latar | `--strata-bg`, `--strata-layer-1`, `--strata-layer-2` |
| Ubah tinggi navbar | `--strata-nav-height`, `--strata-nav-height-compact` |
| Ubah kecepatan animasi | `--strata-duration`, `--strata-ease` |
| Ganti isi menu | Elemen `<li class="strata-menu__item">` di `index.html` dan `.strata-mobile__item` yang sepadan |
| Ubah threshold kompaksi scroll | Konstanta `COMPACT_THRESHOLD` di `script.js` |

---

## ♿ Accessibility

- `<header>` dan `<nav aria-label="Navigasi utama">` semantik
- `aria-current="page"` menandai halaman aktif di link desktop & mobile
- `aria-expanded` dan `aria-controls` pada tombol hamburger
- `aria-hidden` pada elemen dekoratif (lapisan logo, pita band)
- Fokus keyboard punya outline jelas, berbeda dari gaya hover
- Menu mobile memindahkan fokus ke link pertama saat dibuka, dan mengembalikan fokus ke tombol toggle saat ditutup
- Tombol `Escape` menutup menu mobile
- Mendukung penuh `prefers-reduced-motion`

---

## 🌐 Browser Support

| Browser | Version |
|---|---|
| Chrome | 88+ |
| Firefox | 84+ |
| Safari | 14.1+ |
| Edge | 88+ |

> Bergantung pada dukungan CSS Custom Properties, `backdrop-filter`-free shadows, dan `prefers-reduced-motion`.

---

## 📝 Usage Notes

1. **Menghapus konten demo**: hapus elemen `<main id="beranda">` dan blok gaya di bagian "KONTEN DEMO" pada `style.css`.
2. **Mengganti item navigasi**: edit elemen `<li>` di dalam `.strata-menu__list` (desktop) dan `.strata-mobile__list` (mobile) — pastikan jumlah & urutannya tetap sinkron.
3. **Posisi fixed**: navbar memakai `position: fixed`, jadi beri `padding-top` pada konten halaman sebesar `--strata-nav-height`.
4. **Memakai di framework lain**: cukup salin markup `<header class="strata-nav">` beserta `<div class="strata-mobile">`, seluruh CSS (kecuali bagian "KONTEN DEMO"), dan `script.js` ke proyekmu — lihat `NAVBAR_CODE.md` untuk versi yang sudah dipisahkan.

---

## 📄 License

MIT License — bebas digunakan dan dimodifikasi sebagai bagian dari Creative Navbar Collection (open source).
