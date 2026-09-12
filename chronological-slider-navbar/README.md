# Chronological Slider Navbar — Timeline Time-Machine Storytelling

Komponen navigasi berbasis linimasa (*chronological scrubber*) yang revolusioner, dirancang khusus untuk company milestones, perjalanan founder, arsip sejarah, dan roadmap produk interaktif. Navigasi ini menggantikan menu dropdown konvensional dengan sumbu waktu horizontal yang presisi dan interaktif.

![Physics Scrubber](https://img.shields.io/badge/Interaction-Physics_Scrubber-c8922a?style=flat-square)
![Vanilla JS](https://img.shields.io/badge/JS-Pure_Vanilla-f7df1e?style=flat-square)
![Intersection Observer](https://img.shields.io/badge/Observer-Intersection_API-065f46?style=flat-square)
![Responsive](https://img.shields.io/badge/Responsive-Mobile_Touch-1d4ed8?style=flat-square)

---

## ✨ Fitur Unggulan

| Fitur | Deskripsi |
|---|---|
| **Timeline Scrubber Strip** | Sumbu linimasa horizontal di bagian bawah layar dengan cursor diamond di tengah yang mengunci node tahun aktif. |
| **Multi-Modal Navigation** | Navigasi fleksibel: geser slider bar, klik langsung node tahun, drag-to-scrub mouse/touch, scroll mouse wheel, atau tombol panah keyboard (`←` / `→`). |
| **Dynamic Era Color Morphing** | Saat era berganti (2019 Genesis → 2021 Growth → 2023 Expansion → 2025 Scale → 2026+ Future), warna aksen dan background halaman berubah secara mulus. |
| **Animated Numeric Counters** | Stat metrics berhitung secara otomatis (*number ticking animation*) saat chapter discroll ke dalam viewport. |
| **Bidirectional Sync** | Menggeser slider menggerakkan halaman ke chapter yang sesuai; men-scroll halaman secara vertikal juga memperbarui slider linimasa secara otomatis via Intersection Observer. |

---

## 📁 Struktur File

```
chronological-slider-navbar/
├── index.html        # Demo lengkap interaktif linimasa perusahaan
├── style.css         # Styling modern, timeline scrubber, era themes, layout chapter
├── script.js         # Engine timeline scrubbing, inertia drag, dynamic sync
├── card.json         # Metadata integrasi launcher collection
├── NAVBAR_CODE.md    # Cuplikan kode bersih terisolasi siap salin-tempel
└── README.md         # Dokumentasi spesifikasi & cara pakai
```

---

## 🚀 Cara Menggunakan

1. Muat stylesheet `style.css` di tag `<head>`.
2. Pasang elemen `<nav class="timeline-nav">` di bagian bawah halaman.
3. Hubungkan target section konten dengan `id` yang sesuai (cth: `#genesis`, `#growth`, `#expansion`, `#scale`, `#future`).
4. Muat `script.js` sebelum penutup `</body>`.
