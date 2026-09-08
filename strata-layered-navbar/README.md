# Strata — Layered Depth Navbar

Navbar bertema dark yang mereka-ulang navigasi sebagai lapisan sedimen fisik. Setiap item menu diperlakukan sebagai lapisan tersendiri dengan kedalaman, bayangan, dan bobotnya sendiri — bukan sekadar deretan teks yang datar.

![difficulty](https://img.shields.io/badge/difficulty-intermediate--advanced-b8794a) ![deps](https://img.shields.io/badge/dependencies-none-4f8a8b)

## Konsep

Kebanyakan navbar memperlakukan item navigasi sebagai elemen yang setara dan datar. **Strata** menolak kedataran itu. Terinspirasi dari penampang lapisan batuan geologis dan seni potong kertas berlapis (kirigami), setiap link memiliki bidang-z sendiri. Saat salah satu item di-hover, item tersebut "terangkat" ke arah pengguna sementara item lain sedikit mundur dan meredup — sebuah interaksi push/pull yang menjual ilusi kedalaman fisik.

## Fitur

- **Efek kedalaman hover** — item yang di-hover terangkat, item lain mundur & meredup
- **Status aktif berbeda dari hover** — pita aksen permanen yang lebih tebal untuk halaman yang sedang dibuka
- **Kompaksi scroll** — navbar memampat secara halus saat pengguna scroll ke bawah
- **Logo berlapis** — efek bayangan bertumpuk yang tersingkap saat logo di-hover
- **Menu mobile full-screen** — setiap item meluncur masuk sebagai pita horizontal dengan animasi bertahap (staggered)
- **Sepenuhnya aksesibel** — navigasi keyboard penuh, `aria-expanded`, `aria-current`, manajemen fokus saat menu dibuka/ditutup, dan dukungan `prefers-reduced-motion`
- **CSS variable-driven** — seluruh palet warna & timing animasi diatur lewat custom properties, mudah di-reskin
- **Vanilla JavaScript** — tanpa dependensi eksternal apa pun

## Struktur File

```
strata-layered-navbar/
├── index.html    # Struktur semantik navbar + konten demo
├── style.css     # Design tokens, layout, animasi, responsive
├── script.js     # Scroll compaction, toggle menu mobile, a11y
└── README.md
```

## Cara Pakai

1. Salin folder `strata-layered-navbar/` ke proyekmu.
2. Pastikan `style.css` dan `script.js` ter-link di `index.html` (atau pindahkan markup ke dalam halamanmu sendiri).
3. Ganti isi link navigasi (`Beranda`, `Karya`, `Layanan`, `Studio`, `Kontak`) dan teks CTA sesuai kebutuhan.
4. Sesuaikan warna lewat custom properties di `:root` pada `style.css`.

```css
:root {
  --strata-bg: #15130f;
  --strata-accent-teal: #4f8a8b;
  --strata-accent-clay: #b8794a;
  /* ...dst — lihat bagian atas style.css untuk daftar lengkap */
}
```

## Breakpoints

| Breakpoint | Perilaku |
|---|---|
| `> 1024px` | Layout penuh dengan efek push/pull antar-item |
| `≤ 1024px` | Efek depth disederhanakan, hover lift saja |
| `≤ 820px` | Menu desktop disembunyikan, hamburger muncul |
| `≤ 480px` | Penyesuaian ukuran tipografi & tinggi navbar |

## Aksesibilitas

- Semua efek transform/opacity dinonaktifkan otomatis saat `prefers-reduced-motion: reduce` aktif
- Fokus keyboard punya outline yang jelas dan berbeda dari gaya hover
- Menu mobile memindahkan fokus ke link pertama saat dibuka, dan mengembalikan fokus ke tombol toggle saat ditutup
- Mendukung penutupan menu dengan tombol `Escape`
- `aria-current="page"` menandai halaman aktif, `aria-expanded` & `aria-hidden` mengikuti status menu

## Lisensi

Bebas digunakan dan dimodifikasi sebagai bagian dari Creative Navbar Collection (open source).
