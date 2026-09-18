/* ================================================================
   BAGIAN 1 — MEMUAT DAFTAR FOLDER & CARD.JSON
   navbars.json (di root repo) berisi daftar nama folder navbar.
   Kalau nambah navbar baru:
     1. Buat foldernya seperti biasa (index.html, style.css,
        script.js, README.md, NAVBAR_CODE.md, card.json)
     2. Tambahkan nama foldernya ke navbars.json
   File index.html ini TIDAK PERLU disentuh sama sekali lagi.
   ================================================================ */

function shortLabel(categoryLabel) {
  return categoryLabel.split('—')[0].trim();
}

/* ------ Phone-frame card for the ALL view ------ */
function buildPhoneCardHTML(folder, d) {
  const number = String(d.order).padStart(2, '0');
  return `
    <article class="phone-card" data-category="${d.category}" data-keywords="${d.keywords.join(' ')}" data-title="${d.title}" data-desc="${d.descriptionShort}">
      <div class="phone-mockup">
        <div class="phone-notch"></div>
        <div class="phone-screen" id="phone-screen-${folder}">
          <iframe id="phone-iframe-${folder}" src="${folder}/index.html" loading="lazy" title="Preview ${d.title}" tabindex="-1"></iframe>
        </div>
      </div>
      <div class="phone-meta">
        <p class="phone-meta-title">${d.title}</p>
        <p class="phone-meta-cat">${shortLabel(d.categoryLabel)} · ${number}</p>
        <div class="phone-meta-links">
          <a href="${folder}/index.html" class="link-primary" target="_blank">Demo →</a>
          <a href="${folder}/code.html" class="link-secondary">Code</a>
        </div>
      </div>
    </article>`;
}

/* ------ Buka menu mobile di dalam iframe secara otomatis ------
   Butuh field "mobileMenuTrigger" di card.json, isinya CSS selector
   tombol hamburger/toggle navbar itu, misal: "#mobile-toggle".
   Kalau field ini tidak ada di card.json, preview tetap tampil
   apa adanya (menu tertutup) — tidak akan error. */
function openMobileMenuInFrame(folder, data) {
  if (!data.mobileMenuTrigger) return;

  const iframe = document.getElementById(`phone-iframe-${folder}`);
  const screen = document.getElementById(`phone-screen-${folder}`);
  if (!iframe) return;

  iframe.addEventListener('load', () => {
    try {
      const doc = iframe.contentDocument || iframe.contentWindow.document;
      const trigger = doc.querySelector(data.mobileMenuTrigger);
      if (trigger) {
        trigger.click();
        if (screen) screen.classList.add('menu-open');
      } else {
        console.warn(`[phone-preview] Selector "${data.mobileMenuTrigger}" tidak ditemukan di ${folder}`);
      }
    } catch (err) {
      // Kemungkinan iframe belum same-origin (mis. saat dites dari file:// lokal)
      console.warn(`[phone-preview] Tidak bisa mengakses iframe ${folder}:`, err.message);
    }
  });
}

/* ------ Specimen for category-specific views ------ */
function buildSpecimenHTML(folder, d) {
  const number = String(d.order).padStart(2, '0');
  return `
    <article class="specimen" data-category="${d.category}" data-keywords="${d.keywords.join(' ')}"${d.featured ? ' data-featured="true"' : ''}>
      <div class="specimen-head">
        <span class="specimen-number">${number}</span>
        <div>
          ${d.featured ? '<span class="eyebrow-featured">FEATURED</span>' : ''}
          <h2 class="specimen-title">${d.title}</h2>
          <span class="specimen-category">${d.categoryLabel}</span>
        </div>
      </div>
      <div class="specimen-preview">
        <div class="browser-frame">
          <div class="browser-bar"><span></span><span></span><span></span></div>
          <iframe src="${folder}/index.html" loading="lazy" title="Preview ${d.title}"></iframe>
        </div>
      </div>
      <div class="specimen-footer">
        <p class="specimen-desc">${d.descriptionLong}</p>
        <span class="specimen-tech">${d.tech}</span>
        <div class="specimen-links">
          <a href="${folder}/index.html" class="link-primary" target="_blank">VIEW DEMO →</a>
          <a href="${folder}/code.html" class="link-secondary">CODE</a>
        </div>
      </div>
    </article>`;
}

async function loadAllCards() {
  const emptyStatePhone = document.getElementById('emptyStatePhone');
  const emptyState      = document.getElementById('emptyState');
  const filtersNav      = document.getElementById('filtersNav');

  // 1. Ambil daftar folder dari navbars.json
  let folders = [];
  try {
    const res = await fetch('navbars.json');
    folders = await res.json();
  } catch (err) {
    console.error('[dynamic-cards] Gagal memuat navbars.json:', err);
    return;
  }

  // 2. Ambil card.json tiap folder
  const cards = [];
  for (const folder of folders) {
    try {
      const res = await fetch(`${folder}/card.json`);
      if (!res.ok) throw new Error(`card.json tidak ditemukan untuk ${folder}`);
      const data = await res.json();
      cards.push({ folder, data });
    } catch (err) {
      console.error(`[dynamic-cards] Gagal memuat ${folder}:`, err);
    }
  }

  // 3. Urutkan sesuai field "order" di card.json
  cards.sort((a, b) => a.data.order - b.data.order);

  // 4. Sisipkan tiap kartu tepat sebelum pesan "empty state"
  cards.forEach(({ folder, data }) => {
    emptyStatePhone.insertAdjacentHTML('beforebegin', buildPhoneCardHTML(folder, data));
    emptyState.insertAdjacentHTML('beforebegin', buildSpecimenHTML(folder, data));
    openMobileMenuInFrame(folder, data);
  });

  // 5. Buat tombol filter kategori otomatis dari kategori yang benar-benar dipakai
  const seenCategories = new Map();
  cards.forEach(({ data }) => {
    if (!seenCategories.has(data.category)) {
      seenCategories.set(data.category, shortLabel(data.categoryLabel));
    }
  });
  seenCategories.forEach((label, key) => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn';
    btn.dataset.filter = key;
    btn.setAttribute('aria-pressed', 'false');
    btn.textContent = label;
    filtersNav.appendChild(btn);
  });
}

/* ================================================================
   BAGIAN 2 — FILTER & SEARCH
   ================================================================ */
function initFilterAndSearch() {
  const filterBtns      = document.querySelectorAll('.filter-btn');
  const phoneCards      = document.querySelectorAll('.phone-card');
  const specimens       = document.querySelectorAll('.specimen');
  const searchInput     = document.getElementById('searchInput');
  const phoneGrid       = document.getElementById('phoneGrid');
  const archive         = document.getElementById('navbarGrid');
  const emptyStatePhone = document.getElementById('emptyStatePhone');
  const emptyState      = document.getElementById('emptyState');

  let currentFilter = 'all';
  let searchQuery   = '';

  /* Check visibility for phone-cards (ALL view) */
  function matchesPhone(item) {
    const cat      = item.dataset.category;
    const keywords = (
      item.dataset.keywords + ' ' +
      item.dataset.title + ' ' +
      item.dataset.desc
    ).toLowerCase();
    const matchesFilter = currentFilter === 'all' || cat === currentFilter;
    const matchesSearch = searchQuery === '' || keywords.includes(searchQuery);
    return matchesFilter && matchesSearch;
  }

  /* Check visibility for specimens (category view) */
  function matchesSpecimen(item) {
    const cat      = item.dataset.category;
    const keywords = (
      item.dataset.keywords + ' ' +
      item.querySelector('.specimen-title').textContent + ' ' +
      item.querySelector('.specimen-desc').textContent
    ).toLowerCase();
    const matchesFilter = currentFilter === 'all' || cat === currentFilter;
    const matchesSearch = searchQuery === '' || keywords.includes(searchQuery);
    return matchesFilter && matchesSearch;
  }

  function applyFilterAndSearch() {
    const showPhone = currentFilter === 'all';

    phoneGrid.classList.toggle('is-hidden', !showPhone);
    archive.classList.toggle('is-hidden', showPhone);

    if (showPhone) {
      let visibleCount = 0;
      phoneCards.forEach(item => {
        const visible = matchesPhone(item);
        item.style.display = visible ? '' : 'none';
        if (visible) visibleCount++;
      });
      emptyStatePhone.style.display = visibleCount === 0 ? 'block' : 'none';
      emptyState.style.display = 'none';
    } else {
      let visibleCount = 0;
      specimens.forEach(item => {
        const visible = matchesSpecimen(item);
        item.style.display = visible ? '' : 'none';
        if (visible) visibleCount++;
      });
      emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      emptyStatePhone.style.display = 'none';
    }
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      currentFilter = btn.dataset.filter;
      applyFilterAndSearch();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase().trim();
    applyFilterAndSearch();
  });

  document.getElementById('toTop').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ================================================================
   BAGIAN 3 — JALANKAN BERURUTAN
   Kartu & tombol filter harus selesai dibuat DULU, baru filter
   & search di-inisialisasi — supaya querySelectorAll ikut
   menangkap semua elemen yang baru disisipkan.
   ================================================================ */
loadAllCards().then(initFilterAndSearch);