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
