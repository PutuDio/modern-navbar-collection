# Modern Navbar & Sidebar Collection

Koleksi navigasi web modern, siap pakai, dan berstandar produksi tingkat tinggi (*production-ready UI suite*). Dibangun menggunakan **HTML5 semantik, CSS murni (Vanilla Tokens), dan Vanilla JavaScript** tanpa ketergantungan library eksternal.

Setiap komponen navigasi diisolasi ke dalam foldernya masing-masing (*1 folder, 1 jenis navbar*), lengkap dengan demo interaktif, kartu metadata launcher `card.json`, cuplikan kode terisolasi `NAVBAR_CODE.md`, dan dokumentasi `README.md`.

---

## 🧭 Daftar Lengkap Navigasi (12 Model)

| No | Folder / Tipe Navigasi | Kategori | Deskripsi Singkat & Interaktivitas |
|:---:|:---|:---|:---|
| **01** | [`supaste-island-navbar`](./supaste-island-navbar/) | Floating Island | Island navbar mengambang dengan glassmorphism, pill indicator, dan mobile sheet. |
| **02** | [`untitled-saas-sidebar`](./untitled-saas-sidebar/) | SaaS Sidebar | Sidebar aplikasi B2B yang dapat diciutkan (*collapsible*), keyboard shortcuts, dan user menu. |
| **03** | [`velt-developer-navbar`](./velt-developer-navbar/) | Developer Tools | Navbar khusus platform engineer dengan terminal prompt search, command palette (<kbd>Ctrl+K</kbd>), dan status edge API. |
| **04** | [`bordup-operations-sidebar`](./bordup-operations-sidebar/) | Operations & Logistics | Sidebar operasional modular dengan tree menu hierarkis dan multi-level grouping. |
| **05** | [`velocita-navbar`](./velocita-navbar/) | Automotive & Performance | Navigasi dinamis bertema high-speed luxury dengan tachometer gauge visualizer dan drive mode selector. |
| **06** | [`meridian-corporate-navbar`](./meridian-corporate-navbar/) | Corporate & Enterprise | Sistem navigasi korporat dengan multi-column mega-menu, theme toggle, dan utility bar. |
| **07** | [`strata-layered-navbar`](./strata-layered-navbar/) | Layered Multi-Tier | Navigasi berlapis multi-tier dengan secondary context breadcrumbs dan sticky scrolling. |
| **08** | [`semantic-mesh-navbar`](./semantic-mesh-navbar/) | **Experimental (Mind-Map)** | Graf semantik interaktif 60 FPS di kanvas kanvas — node gravitasi, spring physics, dan relasi topik kontekstual. |
| **09** | [`sonic-audio-navbar`](./sonic-audio-navbar/) | **Experimental (Sonic Web Audio)** | Navigasi berbasis suara sintetis native browser via Web Audio API. Setiap menu memainkan synthesizer unik, chord strumming sweep, dan live oscilloscope. |
| **10** | [`chronological-slider-navbar`](./chronological-slider-navbar/) | **Experimental (Timeline Slider)** | Mesin waktu linimasa interaktif (2019-2026+) — navigasi melalui drag scrubber bar, wheel, dan keyboard dengan pergantian tema warna dinamis. |
| **11** | [`cursor-attractor-navbar`](./cursor-attractor-navbar/) | **Experimental (Liquid Metal)** | Navigasi partikel fluida merkuri (*liquid chrome*). Butiran cairan menyatu magnetis saat kursor tenang, dan buyar terpental saat sentakan kursor cepat. |
| **12** | [`ai-intent-navbar`](./ai-intent-navbar/) | **Experimental (AI Predictive)** | Navbar adaptif yang berubah bentuk (*morphing*) secara otomatis mendeteksi persona pengunjung (Developer, Enterprise, Designer) via dwell time tracking. |

---

## ⚡ Arsitektur Proyek

Setiap folder navbar mandiri memiliki struktur berikut:

```
[nama-folder]/
├── index.html        # Demo halaman penuh bertema spesifik
├── style.css         # Styling modern, design tokens, responsive layout
├── script.js         # Logika interaktif & physics engine
├── card.json         # Metadata untuk integrasi dinamis ke root index.html
├── NAVBAR_CODE.md    # Kode terisolasi siap salin-tempel
└── README.md         # Dokumentasi spesifikasi lengkap
```

Dan launcher utama di root repo (`index.html`) membaca `navbars.json` secara dinamis menggunakan fetch API untuk memuat seluruh kartu preview, pencarian keyword instan, dan filter kategori secara otomatis.

---

## 🚀 Cara Menjalankan

Buka `index.html` di browser menggunakan web server lokal (seperti Live Server, Python `http.server`, atau Vite):

```bash
# Menggunakan Python
python -m http.server 8080

# Menggunakan npx serve
npx serve .
```

Buka [http://localhost:8080](http://localhost:8080) di browser untuk menjelajahi semua 12 navbar.
