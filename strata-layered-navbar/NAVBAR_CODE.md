# Strata Navbar - Component Code

File ini berisi kode bersih (clean code) yang HANYA berhubungan dengan navbar Strata. Anda bisa menyalin kode ini untuk digunakan di project lain tanpa harus memisahkan dari kode demo/hero halaman.

---

## 1. HTML
Letakkan kode ini di dalam tag `<body>` Anda, idealnya sebagai elemen pertama.

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Strata — Layered Depth Navbar</title>
  <meta name="description" content="Strata: navbar bertema lapisan sedimen geologis dengan kedalaman, parallax, dan kompaksi scroll." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <!-- ============================================
       NAVBAR STRATA
       Setiap item nav diperlakukan sebagai "lapisan"
       tersendiri (data-band) dengan kedalaman-z masing-masing.
       ============================================ -->
  <header class="strata-nav" id="strataNav">
    <div class="strata-nav__inner">

      <!-- Logo dengan efek bayangan berlapis saat hover -->
      <a href="#beranda" class="strata-logo" aria-label="Strata — kembali ke beranda">
        <span class="strata-logo__layer strata-logo__layer--back" aria-hidden="true">STRATA</span>
        <span class="strata-logo__layer strata-logo__layer--mid" aria-hidden="true">STRATA</span>
        <span class="strata-logo__layer strata-logo__layer--front">STRATA</span>
      </a>

      <!-- Navigasi desktop -->
      <nav class="strata-menu" aria-label="Navigasi utama">
        <ul class="strata-menu__list" role="list">
          <li class="strata-menu__item" data-band="1">
            <a href="#beranda" class="strata-menu__link" aria-current="page">
              <span class="strata-menu__label">Beranda</span>
              <span class="strata-menu__band" aria-hidden="true"></span>
            </a>
          </li>
          <li class="strata-menu__item" data-band="2">
            <a href="#karya" class="strata-menu__link">
              <span class="strata-menu__label">Karya</span>
              <span class="strata-menu__band" aria-hidden="true"></span>
            </a>
          </li>
          <li class="strata-menu__item" data-band="3">
            <a href="#layanan" class="strata-menu__link">
              <span class="strata-menu__label">Layanan</span>
              <span class="strata-menu__band" aria-hidden="true"></span>
            </a>
          </li>
          <li class="strata-menu__item" data-band="4">
            <a href="#studio" class="strata-menu__link">
              <span class="strata-menu__label">Studio</span>
              <span class="strata-menu__band" aria-hidden="true"></span>
            </a>
          </li>
          <li class="strata-menu__item" data-band="5">
            <a href="#kontak" class="strata-menu__link">
              <span class="strata-menu__label">Kontak</span>
              <span class="strata-menu__band" aria-hidden="true"></span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Tombol aksi utama -->
      <a href="#mulai" class="strata-cta">
        <span>Mulai Proyek</span>
      </a>

      <!-- Tombol hamburger untuk mobile -->
      <button
        type="button"
        class="strata-toggle"
        id="strataToggle"
        aria-label="Buka menu navigasi"
        aria-expanded="false"
        aria-controls="strataMobileMenu"
      >
        <span class="strata-toggle__bar" aria-hidden="true"></span>
        <span class="strata-toggle__bar" aria-hidden="true"></span>
        <span class="strata-toggle__bar" aria-hidden="true"></span>
      </button>

    </div>
  </header>

  <!-- ============================================
       MENU MOBILE FULL-SCREEN
       Setiap item meluncur masuk sebagai pita
       horizontal terpisah (staggered).
       ============================================ -->
  <div class="strata-mobile" id="strataMobileMenu" aria-hidden="true">
    <nav aria-label="Navigasi mobile">
      <ul class="strata-mobile__list" role="list">
        <li class="strata-mobile__item"><a href="#beranda" class="strata-mobile__link" aria-current="page">Beranda</a></li>
        <li class="strata-mobile__item"><a href="#karya" class="strata-mobile__link">Karya</a></li>
        <li class="strata-mobile__item"><a href="#layanan" class="strata-mobile__link">Layanan</a></li>
        <li class="strata-mobile__item"><a href="#studio" class="strata-mobile__link">Studio</a></li>
        <li class="strata-mobile__item"><a href="#kontak" class="strata-mobile__link">Kontak</a></li>
      </ul>
    </nav>
    <a href="#mulai" class="strata-mobile__cta">Mulai Proyek</a>
  </div>


  <script src="script.js"></script>
</body>
</html>
```

> 📝 Catatan: `<header class="strata-nav">` menggunakan `position: fixed`, jadi beri `padding-top` pada konten setelahnya sebesar tinggi navbar (`--strata-nav-height`).

---

## 2. CSS
Letakkan kode ini di file `style.css` Anda. Bagian token (`:root`) WAJIB disertakan karena seluruh komponen bergantung pada CSS variables ini.

```css
/* =================================================================
   STRATA — LAYERED DEPTH NAVBAR
   Filosofi: setiap item navigasi adalah "lapisan sedimen" dengan
   kedalaman-z, bayangan, dan bobotnya sendiri. Bukan sekadar
   deretan teks yang datar.
   ================================================================= */

/* -----------------------------------------------------------------
   1. DESIGN TOKENS
   ----------------------------------------------------------------- */
:root {
  /* Warna dasar — gelap hangat, terinspirasi batuan sedimen, BUKAN hitam pekat */
  --strata-bg: #15130f;
  --strata-layer-1: #1e1b16;
  --strata-layer-2: #2b251d;
  --strata-layer-3: #3a3226;

  /* Dua aksen berlapis agar tidak bergantung pada satu warna terang saja */
  --strata-accent-teal: #4f8a8b;
  --strata-accent-clay: #b8794a;

  /* Teks */
  --strata-text: #ede7dc;
  --strata-text-muted: #9c948a;
  --strata-text-dim: #6b6459;

  /* Tipografi */
  --strata-font: "Space Grotesk", "Segoe UI", system-ui, sans-serif;

  /* Bayangan berlapis untuk kesan kedalaman fisik */
  --strata-shadow-sm: 0 2px 6px rgba(0, 0, 0, 0.35);
  --strata-shadow-md: 0 8px 20px rgba(0, 0, 0, 0.45);
  --strata-shadow-lg: 0 16px 36px rgba(0, 0, 0, 0.55);

  /* Timing — terasa seperti bobot yang mengendap, bukan snap */
  --strata-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --strata-duration: 420ms;

  /* Dimensi navbar */
  --strata-nav-height: 84px;
  --strata-nav-height-compact: 60px;
}

/* -----------------------------------------------------------------
   2. RESET DASAR
   ----------------------------------------------------------------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--strata-bg);
  color: var(--strata-text);
  font-family: var(--strata-font);
  min-height: 200vh; /* agar efek scroll compaction terlihat pada demo */
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font-family: inherit;
  cursor: pointer;
  background: none;
  border: none;
}

/* -----------------------------------------------------------------
   3. NAVBAR — KONTAINER UTAMA
   ----------------------------------------------------------------- */
.strata-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--strata-nav-height);
  background: linear-gradient(
    to bottom,
    var(--strata-layer-1) 0%,
    var(--strata-bg) 100%
  );
  border-bottom: 1px solid rgba(237, 231, 220, 0.06);
  box-shadow: var(--strata-shadow-sm);
  transition: height var(--strata-duration) var(--strata-ease),
    box-shadow var(--strata-duration) var(--strata-ease),
    background var(--strata-duration) var(--strata-ease);
}

/* Status "terkompaksi" saat scroll — lapisan "memampat" akibat tekanan */
.strata-nav.is-compact {
  height: var(--strata-nav-height-compact);
  box-shadow: var(--strata-shadow-lg);
  background: var(--strata-bg);
}

.strata-nav__inner {
  max-width: 1280px;
  height: 100%;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* -----------------------------------------------------------------
   4. LOGO — EFEK LAPISAN BAYANGAN
   ----------------------------------------------------------------- */
.strata-logo {
  position: relative;
  display: inline-flex;
  font-weight: 700;
  font-size: 1.35rem;
  letter-spacing: 0.06em;
  flex-shrink: 0;
}

.strata-logo__layer {
  transition: transform var(--strata-duration) var(--strata-ease),
    opacity var(--strata-duration) var(--strata-ease);
}

.strata-logo__layer--front {
  position: relative;
  color: var(--strata-text);
  z-index: 3;
}

.strata-logo__layer--mid,
.strata-logo__layer--back {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.strata-logo__layer--mid {
  color: var(--strata-accent-teal);
  z-index: 2;
}

.strata-logo__layer--back {
  color: var(--strata-accent-clay);
  z-index: 1;
}

/* Saat hover logo, lapisan tersembunyi "tersingkap" seperti kertas bertumpuk */
.strata-logo:hover .strata-logo__layer--mid {
  opacity: 0.55;
  transform: translate(2px, 2px);
}

.strata-logo:hover .strata-logo__layer--back {
  opacity: 0.3;
  transform: translate(4px, 4px);
}

/* -----------------------------------------------------------------
   5. MENU DESKTOP — SETIAP ITEM ADALAH SEBUAH LAPISAN
   ----------------------------------------------------------------- */
.strata-menu {
  flex: 1;
  display: flex;
  justify-content: center;
}

.strata-menu__list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  list-style: none;
}

.strata-menu__item {
  position: relative;
  transition: transform var(--strata-duration) var(--strata-ease),
    opacity var(--strata-duration) var(--strata-ease);
}

.strata-menu__link {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
  padding: 0.6rem 1.1rem;
  font-size: 0.95rem;
  color: var(--strata-text-muted);
  border-radius: 6px;
  transition: color var(--strata-duration) var(--strata-ease),
    transform var(--strata-duration) var(--strata-ease),
    box-shadow var(--strata-duration) var(--strata-ease);
}

.strata-menu__label {
  position: relative;
}

/* Pita aksen di bawah label — representasi lapisan sedimen yang tersingkap */
.strata-menu__band {
  display: block;
  height: 2px;
  width: 0%;
  border-radius: 2px;
  background: var(--strata-accent-teal);
  transition: width var(--strata-duration) var(--strata-ease);
}

/* Saat salah satu item di-hover: item itu terangkat, item lain mundur & meredup.
   Interaksi push/pull inilah yang menjual ilusi kedalaman. */
.strata-menu__list:hover .strata-menu__item {
  transform: scale(0.97);
  opacity: 0.6;
}

.strata-menu__list:hover .strata-menu__item:hover {
  transform: translateY(-3px) scale(1);
  opacity: 1;
}

.strata-menu__item:hover .strata-menu__link {
  color: var(--strata-text);
  box-shadow: var(--strata-shadow-md);
  background: var(--strata-layer-2);
}

.strata-menu__item:hover .strata-menu__band {
  width: 60%;
}

/* Status aktif — pita permanen yang lebih tebal & saturated dari hover */
.strata-menu__link[aria-current="page"] {
  color: var(--strata-text);
  font-weight: 600;
}

.strata-menu__link[aria-current="page"] .strata-menu__band {
  width: 70%;
  height: 3px;
  background: var(--strata-accent-clay);
}

/* Kedalaman idle statis per lapisan (data-band) sebelum interaksi apa pun,
   memberi kesan setiap item memang punya bidang-z yang berbeda */
.strata-menu__item[data-band="2"] { transform: translateY(1px); }
.strata-menu__item[data-band="3"] { transform: translateY(0px); }
.strata-menu__item[data-band="4"] { transform: translateY(1px); }
.strata-menu__item[data-band="5"] { transform: translateY(0px); }

/* Focus keyboard — jelas berbeda dari gaya hover */
.strata-menu__link:focus-visible {
  outline: 2px solid var(--strata-accent-teal);
  outline-offset: 4px;
}

/* -----------------------------------------------------------------
   6. CTA
   ----------------------------------------------------------------- */
.strata-cta {
  flex-shrink: 0;
  padding: 0.65rem 1.4rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--strata-bg);
  background: var(--strata-text);
  border-radius: 6px;
  box-shadow: var(--strata-shadow-sm);
  transition: transform var(--strata-duration) var(--strata-ease),
    box-shadow var(--strata-duration) var(--strata-ease),
    background var(--strata-duration) var(--strata-ease);
}

.strata-cta:hover {
  background: var(--strata-accent-teal);
  color: var(--strata-text);
  transform: translateY(-2px);
  box-shadow: var(--strata-shadow-md);
}

.strata-cta:focus-visible {
  outline: 2px solid var(--strata-accent-teal);
  outline-offset: 3px;
}

/* -----------------------------------------------------------------
   7. TOMBOL HAMBURGER (mobile)
   ----------------------------------------------------------------- */
.strata-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.strata-toggle__bar {
  height: 2px;
  width: 100%;
  background: var(--strata-text);
  border-radius: 2px;
  transition: transform var(--strata-duration) var(--strata-ease),
    opacity var(--strata-duration) var(--strata-ease);
}

.strata-toggle:focus-visible {
  outline: 2px solid var(--strata-accent-teal);
  outline-offset: 4px;
}

/* Animasi menjadi ikon "X" saat menu terbuka */
.strata-toggle[aria-expanded="true"] .strata-toggle__bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.strata-toggle[aria-expanded="true"] .strata-toggle__bar:nth-child(2) {
  opacity: 0;
}
.strata-toggle[aria-expanded="true"] .strata-toggle__bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* -----------------------------------------------------------------
   8. MENU MOBILE FULL-SCREEN — PITA SEDIMEN BERTUMPUK
   ----------------------------------------------------------------- */
.strata-mobile {
  position: fixed;
  inset: 0;
  z-index: 90;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2.5rem;
  padding: 0 2rem;
  background: var(--strata-bg);
  visibility: hidden;
  opacity: 0;
  transition: opacity var(--strata-duration) var(--strata-ease),
    visibility 0s linear var(--strata-duration);
}

.strata-mobile.is-open {
  visibility: visible;
  opacity: 1;
  transition: opacity var(--strata-duration) var(--strata-ease);
}

.strata-mobile__list {
  list-style: none;
  display: flex;
  flex-direction: column;
}

.strata-mobile__item {
  border-bottom: 1px solid rgba(237, 231, 220, 0.08);
  /* Setiap pita mulai tersembunyi & tergeser — dianimasikan lewat JS saat menu dibuka */
  opacity: 0;
  transform: translateX(-24px);
  transition: opacity var(--strata-duration) var(--strata-ease),
    transform var(--strata-duration) var(--strata-ease);
}

.strata-mobile__item:nth-child(even) {
  transform: translateX(24px);
}

.strata-mobile.is-open .strata-mobile__item {
  opacity: 1;
  transform: translateX(0);
}

/* Jeda bertahap (staggered) antar pita */
.strata-mobile.is-open .strata-mobile__item:nth-child(1) { transition-delay: 60ms; }
.strata-mobile.is-open .strata-mobile__item:nth-child(2) { transition-delay: 120ms; }
.strata-mobile.is-open .strata-mobile__item:nth-child(3) { transition-delay: 180ms; }
.strata-mobile.is-open .strata-mobile__item:nth-child(4) { transition-delay: 240ms; }
.strata-mobile.is-open .strata-mobile__item:nth-child(5) { transition-delay: 300ms; }

.strata-mobile__link {
  display: block;
  padding: 1.1rem 0;
  font-size: 1.9rem;
  font-weight: 500;
  color: var(--strata-text-muted);
  transition: color var(--strata-duration) var(--strata-ease);
}

.strata-mobile__link[aria-current="page"] {
  color: var(--strata-accent-clay);
}

.strata-mobile__link:hover,
.strata-mobile__link:focus-visible {
  color: var(--strata-text);
}

.strata-mobile__cta {
  align-self: flex-start;
  padding: 0.75rem 1.6rem;
  font-weight: 600;
  color: var(--strata-bg);
  background: var(--strata-text);
  border-radius: 6px;
  opacity: 0;
  transform: translateY(12px);
  transition: opacity var(--strata-duration) var(--strata-ease),
    transform var(--strata-duration) var(--strata-ease);
  transition-delay: 0ms;
}

.strata-mobile.is-open .strata-mobile__cta {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 360ms;
}

/* Kunci scroll body saat menu mobile terbuka (kelas diatur lewat JS) */
body.strata-lock-scroll {
  overflow: hidden;
}

/* -----------------------------------------------------------------
   9. RESPONSIVE — BREAKPOINTS
   ----------------------------------------------------------------- */

/* Tablet: parallax & efek depth disederhanakan */
@media (max-width: 1024px) {
  .strata-nav__inner {
    padding: 0 1.75rem;
  }

  .strata-menu__list {
    gap: 0.15rem;
  }

  .strata-menu__link {
    padding: 0.55rem 0.8rem;
    font-size: 0.9rem;
  }

  /* Nonaktifkan efek push/pull antar-item, sisakan lift sederhana saat hover */
  .strata-menu__list:hover .strata-menu__item {
    transform: none;
    opacity: 1;
  }

  .strata-menu__list:hover .strata-menu__item:hover {
    transform: translateY(-2px);
  }

  .strata-menu__item[data-band] {
    transform: none;
  }
}

/* Mobile besar: sembunyikan menu desktop, tampilkan hamburger */
@media (max-width: 820px) {
  .strata-menu,
  .strata-cta {
    display: none;
  }

  .strata-toggle {
    display: flex;
  }

  .strata-nav__inner {
    padding: 0 1.5rem;
  }
}

/* Mobile kecil */
@media (max-width: 480px) {
  :root {
    --strata-nav-height: 72px;
    --strata-nav-height-compact: 56px;
  }

  .strata-logo {
    font-size: 1.1rem;
  }

  .strata-mobile {
    padding: 0 1.25rem;
  }

  .strata-mobile__link {
    font-size: 1.5rem;
  }
}

/* -----------------------------------------------------------------
   10. AKSESIBILITAS — REDUCED MOTION
   ----------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .strata-nav,
  .strata-logo__layer,
  .strata-menu__item,
  .strata-menu__link,
  .strata-menu__band,
  .strata-cta,
  .strata-toggle__bar,
  .strata-mobile,
  .strata-mobile__item,
  .strata-mobile__link,
  .strata-mobile__cta {
    transition-duration: 0.01ms !important;
    transform: none !important;
  }

  .strata-menu__list:hover .strata-menu__item,
  .strata-menu__list:hover .strata-menu__item:hover {
    opacity: 1;
  }
}

/* -----------------------------------------------------------------
   11. KONTEN DEMO (bukan bagian dari komponen navbar)
   ----------------------------------------------------------------- */
.demo-hero {
  max-width: 720px;
  margin: 0 auto;
  padding: calc(var(--strata-nav-height) + 6rem) 2rem 4rem;
  text-align: left;
}

.demo-hero__eyebrow {
  color: var(--strata-text-dim);
  font-size: 0.85rem;
  margin-bottom: 1rem;
}

.demo-hero__title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 1.25rem;
  background: linear-gradient(
    120deg,
    var(--strata-text) 40%,
    var(--strata-accent-teal) 100%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.demo-hero__desc {
  color: var(--strata-text-muted);
  font-size: 1.05rem;
  line-height: 1.7;
  max-width: 60ch;
}

.demo-spacer {
  height: 100vh;
}
```

---

## 3. JavaScript
Letakkan kode ini di file `script.js` Anda atau di dalam tag `<script>`.

```javascript
/**
 * STRATA — LAYERED DEPTH NAVBAR
 * ------------------------------------------------------------------
 * Tanggung jawab script ini:
 * 1. Menambahkan/menghapus kelas `.is-compact` saat scroll melewati
 *    threshold (efek "kompaksi lapisan akibat tekanan").
 * 2. Membuka & menutup menu mobile full-screen, termasuk manajemen
 *    fokus dan atribut ARIA.
 * 3. Menutup menu mobile dengan tombol Escape, klik di luar area,
 *    atau saat salah satu link diklik.
 *
 * Tidak ada dependensi eksternal — murni vanilla JavaScript.
 * ------------------------------------------------------------------
 */

(function () {
  "use strict";

  const nav = document.getElementById("strataNav");
  const toggle = document.getElementById("strataToggle");
  const mobileMenu = document.getElementById("strataMobileMenu");

  if (!nav || !toggle || !mobileMenu) return;

  const COMPACT_THRESHOLD = 40; // px — jarak scroll sebelum navbar memampat
  let isMenuOpen = false;

  /* -----------------------------------------------------------------
     1. SCROLL COMPACTION
     Menggunakan requestAnimationFrame agar pembaruan kelas tetap
     halus dan tidak membebani thread utama saat scroll cepat.
     ----------------------------------------------------------------- */
  let ticking = false;

  function updateCompactState() {
    const shouldCompact = window.scrollY > COMPACT_THRESHOLD;
    nav.classList.toggle("is-compact", shouldCompact);
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        window.requestAnimationFrame(updateCompactState);
        ticking = true;
      }
    },
    { passive: true }
  );

  // Set status awal (misalnya jika halaman dimuat ulang dalam posisi scroll)
  updateCompactState();

  /* -----------------------------------------------------------------
     2. MENU MOBILE — BUKA / TUTUP
     ----------------------------------------------------------------- */
  function openMobileMenu() {
    isMenuOpen = true;
    mobileMenu.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Tutup menu navigasi");
    document.body.classList.add("strata-lock-scroll");

    // Pindahkan fokus ke link pertama agar navigasi keyboard tetap logis
    const firstLink = mobileMenu.querySelector(".strata-mobile__link");
    if (firstLink) {
      window.setTimeout(function () {
        firstLink.focus();
      }, 100);
    }
  }

  function closeMobileMenu() {
    isMenuOpen = false;
    mobileMenu.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Buka menu navigasi");
    document.body.classList.remove("strata-lock-scroll");
    toggle.focus();
  }

  function toggleMobileMenu() {
    if (isMenuOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  toggle.addEventListener("click", toggleMobileMenu);

  // Tutup menu saat salah satu link navigasi diklik
  mobileMenu.querySelectorAll(".strata-mobile__link, .strata-mobile__cta").forEach(function (el) {
    el.addEventListener("click", closeMobileMenu);
  });

  // Tutup menu dengan tombol Escape (penting untuk aksesibilitas keyboard)
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && isMenuOpen) {
      closeMobileMenu();
    }
  });

  // Tutup menu otomatis jika layar di-resize melewati breakpoint mobile,
  // agar state tidak "nyangkut" saat berpindah ke tampilan desktop
  window.addEventListener("resize", function () {
    if (isMenuOpen && window.innerWidth > 820) {
      closeMobileMenu();
    }
  });
})();
```
