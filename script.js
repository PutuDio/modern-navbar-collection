/* ================================================================
   DYNAMIC CARD RENDERING
   ================================================================ */

function shortLabel(categoryLabel) {
  return categoryLabel.split('—')[0].trim();
}

/* Code-only cards for the ALL view */
function buildPhoneCardHTML(folder, d) {
  const number = String(d.order).padStart(2, '0');
  return `
    <article class="phone-card" data-category="${d.category}" data-keywords="${d.keywords.join(' ')}" data-title="${d.title}" data-desc="${d.descriptionShort}">
      <div class="desktop-preview">
        <iframe src="${folder}/index.html" loading="lazy" title="Preview ${d.title}"></iframe>
      </div>
      <div class="phone-meta">
        <p class="phone-meta-title">${d.title}</p>
        <p class="phone-meta-cat">${shortLabel(d.categoryLabel)} · ${number}</p>
        <div class="phone-meta-links">
          <a href="${folder}/code.html" class="link-secondary">Code →</a>
        </div>
      </div>
    </article>`;
}

async function loadAllCards() {
  const emptyState = document.getElementById('emptyState');
  const filtersNav = document.getElementById('filtersNav');
  let folders = [];
  try {
    const res = await fetch('navbars.json');
    folders = await res.json();
  } catch (err) {
    console.error('[dynamic-cards] Gagal memuat navbars.json:', err);
    return;
  }
  const cards = [];
  for (const folder of folders) {
    try {
      const res = await fetch(`${folder}/card.json`);
      if (!res.ok) throw new Error(`card.json tidak ditemukan untuk ${folder}`);
      cards.push({ folder, data: await res.json() });
    } catch (err) {
      console.error(`[dynamic-cards] Gagal memuat ${folder}:`, err);
    }
  }
  cards.sort((a, b) => a.data.order - b.data.order);
  cards.forEach(({ folder, data }) => emptyState.insertAdjacentHTML('beforebegin', buildPhoneCardHTML(folder, data)));
  const seenCategories = new Map();
  cards.forEach(({ data }) => {
    if (!seenCategories.has(data.category)) seenCategories.set(data.category, shortLabel(data.categoryLabel));
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

function initFilterAndSearch() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.phone-card');
  const searchInput = document.getElementById('searchInput');
  const emptyState = document.getElementById('emptyState');
  let currentFilter = 'all';
  let searchQuery = '';
  function applyFilterAndSearch() {
    let visibleCount = 0;
    cards.forEach(item => {
      const keywords = `${item.dataset.keywords} ${item.dataset.title} ${item.dataset.desc}`.toLowerCase();
      const visible = (currentFilter === 'all' || item.dataset.category === currentFilter) && keywords.includes(searchQuery);
      item.style.display = visible ? '' : 'none';
      if (visible) visibleCount++;
    });
    emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
  }
  filterBtns.forEach(btn => btn.addEventListener('click', () => {
    filterBtns.forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    currentFilter = btn.dataset.filter;
    applyFilterAndSearch();
  }));
  searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    applyFilterAndSearch();
  });
  document.getElementById('toTop').addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

loadAllCards().then(initFilterAndSearch);
