/* Dynamic Island navigation interactions */
(function () {
  'use strict';

  const islandBurger = document.getElementById('island-burger');
  const islandDrawer = document.getElementById('island-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');

  function closeDrawer () {
    islandDrawer.classList.remove('open');
    islandBurger.classList.remove('open');
    islandBurger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  function openDrawer () {
    islandDrawer.classList.add('open');
    islandBurger.classList.add('open');
    islandBurger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  islandBurger.addEventListener('click', () => {
    islandDrawer.classList.contains('open') ? closeDrawer() : openDrawer();
  });
  drawerOverlay.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeDrawer();
  });
  document.querySelectorAll('#island-drawer a').forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
})();
