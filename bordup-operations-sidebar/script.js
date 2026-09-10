/* =============================================================
   BORDUP OPERATIONS SIDEBAR — script.js
   Sidebar collapse, active nav, mobile drawer, tooltips, toasts
   ============================================================= */
(function () {
  'use strict';

  /* ── DOM refs ──────────────────────────────────────────────── */
  const sidebar       = document.getElementById('sidebar');
  const toggleBtn     = document.getElementById('sidebar-toggle-btn');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const toast         = document.getElementById('bordup-toast');
  const woTabs        = document.querySelectorAll('.wo-tab[data-tab]');

  /* ── 1. Sidebar Collapse / Expand ────────────────────────── */
  let collapsed = false;

  function toggleSidebar () {
    collapsed = !collapsed;
    if (collapsed) {
      sidebar.classList.add('collapsed');
      toggleBtn.setAttribute('aria-label', 'Expand sidebar');
      localStorage.setItem('bordup-sidebar-collapsed', '1');
    } else {
      sidebar.classList.remove('collapsed');
      toggleBtn.setAttribute('aria-label', 'Collapse sidebar');
      localStorage.removeItem('bordup-sidebar-collapsed');
    }
  }

  // Restore state on load
  if (localStorage.getItem('bordup-sidebar-collapsed')) {
    collapsed = true;
    sidebar.classList.add('collapsed');
  }

  toggleBtn.addEventListener('click', toggleSidebar);

  /* ── 2. Active Nav Item ───────────────────────────────────── */
  document.querySelectorAll('.nav-item[data-nav]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      if (window.innerWidth <= 1024) {
        closeMobileSidebar();
      }
    });
  });

  document.querySelectorAll('.dept-item').forEach(item => {
    item.addEventListener('click', () => {
      const dept = item.querySelector('.dept-label');
      if (dept) showToast(`Switched to ${dept.textContent.trim()} department`);
    });
  });

  /* ── 3. Mobile Drawer ────────────────────────────────────── */
  function openMobileSidebar () {
    sidebar.classList.add('mobile-open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    mobileMenuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMobileSidebar () {
    sidebar.classList.remove('mobile-open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
    mobileMenuBtn.setAttribute('aria-expanded', 'false');
  }

  mobileMenuBtn.addEventListener('click', () => {
    if (sidebar.classList.contains('mobile-open')) closeMobileSidebar();
    else openMobileSidebar();
  });

  mobileOverlay.addEventListener('click', closeMobileSidebar);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMobileSidebar();
  });

  /* ── 4. What's On Tabs ───────────────────────────────────── */
  const woContents = document.querySelectorAll('.wo-content[data-tab]');
  woTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.dataset.tab;
      woTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      woContents.forEach(c => {
        c.style.display = c.dataset.tab === tabId ? 'block' : 'none';
      });
    });
  });

  /* ── 5. Leave Actions ────────────────────────────────────── */
  document.querySelectorAll('.btn-approve').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.leave-card');
      const name = card?.querySelector('.emp-name')?.textContent?.trim() || 'Employee';
      showToast(`✅ Leave approved for ${name}`);
      btn.textContent = 'Approved';
      btn.disabled = true;
      btn.style.opacity = '0.6';
      card.querySelector('.btn-reject').disabled = true;
      card.querySelector('.btn-reject').style.opacity = '0.4';
    });
  });

  document.querySelectorAll('.btn-reject').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.leave-card');
      const name = card?.querySelector('.emp-name')?.textContent?.trim() || 'Employee';
      showToast(`❌ Leave rejected for ${name}`);
      btn.textContent = 'Rejected';
      btn.disabled = true;
      btn.style.opacity = '0.6';
      card.querySelector('.btn-approve').disabled = true;
      card.querySelector('.btn-approve').style.opacity = '0.4';
    });
  });

  /* ── 6. Toast ────────────────────────────────────────────── */
  let toastTimer = null;

  function showToast (msg) {
    if (!toast) return;
    clearTimeout(toastTimer);
    const msgEl = toast.querySelector('.bordup-toast-msg');
    if (msgEl) msgEl.textContent = msg;
    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
  }

  /* ── 7. Add Task button ──────────────────────────────────── */
  const addTaskBtn = document.getElementById('add-task-btn');
  if (addTaskBtn) {
    addTaskBtn.addEventListener('click', () => showToast('📋 New task added to schedule'));
  }

  /* ── 8. Workspace card ───────────────────────────────────── */
  const workspaceCard = document.getElementById('workspace-card');
  if (workspaceCard) {
    workspaceCard.addEventListener('click', () => showToast('🔄 Switch workspace'));
  }

})();
