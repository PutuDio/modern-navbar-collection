# Semantic Mesh Navigator — Mind-Map Graph Physics Navigation

Komponen navigasi visual eksperimental berbasis jejaring graf semantik interaktif (*floating mind-map*). Menggantikan baris navigasi biasa dengan jaringan node gravitasi dan keterkaitan konten yang dinamis.

![Canvas 60fps](https://img.shields.io/badge/Render-Canvas_60fps-6366f1?style=flat-square)
![Spring Physics](https://img.shields.io/badge/Physics-Spring_Simulation-10b981?style=flat-square)
![Pure Vanilla JS](https://img.shields.io/badge/JS-Vanilla-f7df1e?style=flat-square)

---

## ✨ Fitur Utama

- **Physics-Driven Nodes**: Node bertindak sebagai pusat gravitasi dengan gaya tolak (*repulsion*) dan pegas (*spring tension*) interaktif berkecepatan 60 FPS.
- **Organic Sub-Menu Bloom**: Hover atau dekatkan kursor untuk merekah sub-menu secara organik di sekitar node induk.
- **Interactive Drag & Pan**: Tarik dan geser node sesuka hati di kanvas graf, dengan gaya elastis yang membawanya kembali seimbang.
- **Semantic Detail Card**: Mengarahkan kursor ke node menampilkan kartu deskripsi kontekstual, status latensi, dan relasi topik.
- **Dual View Modes**: Mode full-screen graph mesh interaktif atau mode dock bar samping ringkas.

---

## 📁 Struktur File

```
semantic-mesh-navbar/
├── index.html        # Demo riset AI & knowledge graph showcase
├── style.css         # Styling dark theme, neon glows, glassmorphism panel
├── script.js         # Spring physics engine, 60fps canvas renderer, node state
├── card.json         # Metadata integrasi launcher collection
├── NAVBAR_CODE.md    # Cuplikan kode bersih terisolasi
└── README.md         # Dokumentasi spesifikasi
```
