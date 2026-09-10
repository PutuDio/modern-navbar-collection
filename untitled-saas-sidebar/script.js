/* =============================================================
   UNTITLED SAAS SIDEBAR — script.js
   Command Dialog, Account Popover, Mobile Drawer, Toast
   ============================================================= */
(function () {
  'use strict';

  /* ── 1. Mobile Sidebar Drawer ────────────────────────────── */
  const sidebar        = document.getElementById('sidebar');
  const mobileOverlay  = document.getElementById('mobile-overlay');
  const menuBtn        = document.getElementById('topbar-menu-btn');

  function openSidebar () {
    sidebar.classList.add('mobile-open');
    mobileOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    menuBtn.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar () {
    sidebar.classList.remove('mobile-open');
    mobileOverlay.classList.remove('open');
    document.body.style.overflow = '';
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      if (sidebar.classList.contains('mobile-open')) closeSidebar();
      else openSidebar();
    });
  }

  mobileOverlay.addEventListener('click', closeSidebar);

  /* ── 2. Active Nav Items ─────────────────────────────────── */
  document.querySelectorAll('.nav-item[data-nav]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      // Update breadcrumb
      const label = item.querySelector('.nav-label');
      if (label) {
        const breadcrumb = document.getElementById('breadcrumb-current');
        if (breadcrumb) breadcrumb.textContent = label.textContent.trim();
      }

      // Close mobile
      if (window.innerWidth <= 1024) closeSidebar();
    });
  });

  /* ── 3. ⌘K / Ctrl+K Command Dialog ──────────────────────── */
  const cmdOverlay = document.getElementById('cmd-dialog-overlay');
  const cmdInput   = document.getElementById('cmd-input');
  const searchTrigger = document.getElementById('search-trigger');

  function openCmd () {
    cmdOverlay.classList.add('open');
    setTimeout(() => cmdInput && cmdInput.focus(), 80);
    document.body.style.overflow = 'hidden';
  }

  function closeCmd () {
    cmdOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  // Open via keyboard shortcut
  document.addEventListener('keydown', (e) => {
    const isMeta = e.metaKey || e.ctrlKey;
    if (isMeta && e.key === 'k') {
      e.preventDefault();
      if (cmdOverlay.classList.contains('open')) closeCmd();
      else openCmd();
    }
    if (e.key === 'Escape') {
      closeCmd();
      closePopover();
      closeSidebar();
    }
  });

  // Open via search trigger click
  if (searchTrigger) searchTrigger.addEventListener('click', openCmd);

  // Close via overlay click
  if (cmdOverlay) {
    cmdOverlay.addEventListener('click', (e) => {
      if (e.target === cmdOverlay) closeCmd();
    });
  }

  // Command result hover highlight
  const cmdItems = document.querySelectorAll('.cmd-result-item');
  cmdItems.forEach(item => {
    item.addEventListener('click', () => {
      const labelEl = item.querySelector('[data-cmd-label]');
      const label = labelEl ? labelEl.textContent : item.textContent.trim();
      closeCmd();
      showToast(`Navigated to ${label.slice(0,30)}`, 'view-profile');
    });
  });

  // Search filtering
  if (cmdInput) {
    cmdInput.addEventListener('input', () => {
      const q = cmdInput.value.toLowerCase().trim();
      cmdItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = q === '' || text.includes(q) ? '' : 'none';
      });
    });
  }

  /* ── 4. Account Switcher Popover ─────────────────────────── */
  const profilePill    = document.getElementById('profile-pill');
  const popoverEl      = document.getElementById('account-popover');
  const popoverOverlay = document.getElementById('popover-overlay');

  function openPopover () {
    popoverEl.classList.add('open');
    popoverOverlay.classList.add('open');
    profilePill.setAttribute('aria-expanded', 'true');
  }

  function closePopover () {
    popoverEl.classList.remove('open');
    popoverOverlay.classList.remove('open');
    profilePill.setAttribute('aria-expanded', 'false');
  }

  if (profilePill) {
    profilePill.addEventListener('click', (e) => {
      e.stopPropagation();
      if (popoverEl.classList.contains('open')) closePopover();
      else openPopover();
    });
  }

  if (popoverOverlay) {
    popoverOverlay.addEventListener('click', closePopover);
  }

  // Account switch
  document.querySelectorAll('.account-item[data-account]').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.account-radio').forEach(r => r.classList.remove('active'));
      const radio = item.querySelector('.account-radio');
      if (radio) radio.classList.add('active');

      const name = item.querySelector('.account-name-sm');
      if (name) showToast(`Switched to ${name.textContent}`, 'switch-account');
      closePopover();
    });
  });

  // Sign out
  const signOutBtn = document.getElementById('sign-out-btn');
  if (signOutBtn) {
    signOutBtn.addEventListener('click', () => {
      closePopover();
      showToast('Signed out successfully', 'sign-out');
    });
  }

  /* ── 5. Table Row Selection ──────────────────────────────── */
  const tableCheckboxAll = document.getElementById('check-all');

  function updateRowSelection (row, checked) {
    if (checked) {
      row.classList.add('selected');
    } else {
      row.classList.remove('selected');
    }
  }

  document.querySelectorAll('.row-checkbox').forEach(cb => {
    cb.addEventListener('change', () => {
      const row = cb.closest('tr');
      if (row) updateRowSelection(row, cb.checked);
    });
  });

  if (tableCheckboxAll) {
    tableCheckboxAll.addEventListener('change', () => {
      const checked = tableCheckboxAll.checked;
      document.querySelectorAll('.row-checkbox').forEach(cb => {
        cb.checked = checked;
        const row = cb.closest('tr');
        if (row) updateRowSelection(row, checked);
      });
    });
  }

  /* ── 6. Row Action Buttons ───────────────────────────────── */
  document.querySelectorAll('.row-action-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const row = btn.closest('tr');
      const nameCel = row ? row.querySelector('.user-name-sm') : null;
      const name = nameCel ? nameCel.textContent.trim() : 'user';
      showToast(`"${name}" details updated`, 'user-action', 'Undo', 'View profile');
    });
  });

  /* ── 7. Toast Notification ───────────────────────────────── */
  const toast = document.getElementById('action-toast');
  let toastTimer = null;

  function showToast (msg, id, undoLabel, actionLabel) {
    if (!toast) return;
    clearTimeout(toastTimer);

    const msgEl = toast.querySelector('.toast-msg');
    const undoEl = toast.querySelector('#toast-undo');
    const actionEl = toast.querySelector('#toast-action');
    const iconEl = toast.querySelector('.toast-icon');

    if (msgEl) msgEl.textContent = msg;
    if (iconEl) {
      iconEl.textContent = id === 'user-action' ? '✅' :
                           id === 'sign-out'     ? '👋' :
                           id === 'switch-account' ? '🔄' : '✅';
    }
    if (undoEl)  undoEl.textContent  = undoLabel  || 'Dismiss';
    if (actionEl) {
      actionEl.textContent = actionLabel || '';
      actionEl.style.display = actionLabel ? '' : 'none';
    }

    toast.classList.add('show');
    toastTimer = setTimeout(() => toast.classList.remove('show'), 4000);
  }

  // Toast dismiss
  const toastUndo = document.getElementById('toast-undo');
  if (toastUndo) {
    toastUndo.addEventListener('click', () => {
      clearTimeout(toastTimer);
      toast.classList.remove('show');
    });
  }

  /* ── 8. Pagination ───────────────────────────────────────── */
  document.querySelectorAll('.pag-btn[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.pag-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

})();
