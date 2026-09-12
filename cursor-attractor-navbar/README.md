# Liquid Metal Cursor Attractor Navbar

Navigasi eksperimental berbasis fisika fluida magnetis (*liquid metal fluid dynamics*). Menggunakan kanvas partikel merkuri cair yang bereaksi secara real-time terhadap kecepatan dan vektor arah kursor pengguna.

![Canvas 60fps](https://img.shields.io/badge/Physics-60FPS_Fluid_Vector-38bdf8?style=flat-square)
![Liquid Metal](https://img.shields.io/badge/Aesthetic-Liquid_Chrome-e2e8f0?style=flat-square)
![Pure Vanilla JS](https://img.shields.io/badge/JS-Vanilla-f7df1e?style=flat-square)

---

## ✨ Cara Kerja & Fitur

| Fitur | Deskripsi |
|---|---|
| **Magnetic Clumping** | Ketika gerakan mouse melambat atau berhenti sejenak, butiran cairan merkuri ditarik secara gravitasi menuju dock navigasi di dekat kursor. |
| **Velocity Scatter** | Gerakan sentakan cepat (*flick*) melepaskan gelombang repulsi impulsif yang membuyarkan partikel ke tepi layar, membuka pandangan tanpa halangan ke konten visual. |
| **Specular Chrome Bridges** | Jembatan cairan (*metaball tendrils*) terbentuk secara dinamis antar-partikel yang berdekatan untuk mensimulasikan tegangan permukaan merkuri cair. |
| **Dual Dock Modes** | Mendukung mode *Magnetic Bottom Dock* dan mode *Follow Cursor* (tekan tombol di header atau shortcut keyboard <kbd>M</kbd>). |
| **Zero Dependencies** | Berjalan murni menggunakan HTML5 Canvas 2D dan Vanilla JavaScript tanpa library physics eksternal. |

---

## 📁 Struktur File

```
cursor-attractor-navbar/
├── index.html        # Demo showcase interaktif studio desain futuristik
├── style.css         # Styling dark space, liquid chrome gradient, glass dock
├── script.js         # Engine partikel fluida, kalkulasi velocity, metaball bridges
├── card.json         # Metadata integrasi launcher collection
├── NAVBAR_CODE.md    # Cuplikan kode bersih terisolasi siap pakai
└── README.md         # Dokumentasi spesifikasi
```
