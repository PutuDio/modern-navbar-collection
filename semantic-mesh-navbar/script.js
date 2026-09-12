/* =============================================================
   SEMANTIC MESH NAVBAR — script.js
   Spring Physics Graph Navigation Engine
   ============================================================= */
(function () {
  'use strict';

  /* ── Graph Data ─────────────────────────────────────────────── */
  const GRAPH = {
    nodes: [
      {
        id: 'home', label: 'Home', icon: '⬡', color: '#6378ff',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 2.2,
        desc: 'The central nexus of the knowledge graph. Start your journey here.',
        tag: 'Root Node',
        children: ['research', 'lab', 'network', 'papers', 'about'],
        href: '#home',
        isRoot: true,
      },
      {
        id: 'research', label: 'Research', icon: '◎', color: '#a78bfa',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 1.5,
        desc: 'Explore papers, datasets, and ongoing investigation tracks across seven research domains.',
        tag: 'Knowledge Domain',
        children: ['papers', 'lab'],
        href: '#research',
      },
      {
        id: 'lab', label: 'Lab', icon: '◈', color: '#38bdf8',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 1.3,
        desc: 'Live experiments, agent sandboxes, and interactive model probes. Run computations directly.',
        tag: 'Sandbox',
        children: ['network', 'papers'],
        href: '#lab',
      },
      {
        id: 'network', label: 'Network', icon: '◇', color: '#34d399',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 1.2,
        desc: 'A graph of collaborating institutions, researchers, and shared datasets across 40+ nodes.',
        tag: 'Collaboration Graph',
        children: ['about'],
        href: '#network',
      },
      {
        id: 'papers', label: 'Papers', icon: '◻', color: '#fbbf24',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 1.1,
        desc: '214 peer-reviewed publications, preprints, and technical reports since 2019.',
        tag: 'Publication Archive',
        children: ['about'],
        href: '#papers',
      },
      {
        id: 'about', label: 'About', icon: '○', color: '#fb7185',
        x: 0, y: 0, vx: 0, vy: 0,
        mass: 1.0,
        desc: 'Mission, leadership, funding sources, and the story behind the neural inference lab.',
        tag: 'Meta',
        children: [],
        href: '#about',
      },
    ],
    edges: [
      { from: 'home', to: 'research' },
      { from: 'home', to: 'lab' },
      { from: 'home', to: 'network' },
      { from: 'home', to: 'papers' },
      { from: 'home', to: 'about' },
      { from: 'research', to: 'papers' },
      { from: 'research', to: 'lab' },
      { from: 'lab', to: 'network' },
      { from: 'network', to: 'about' },
      { from: 'papers', to: 'about' },
    ],
  };

  /* ── State ─────────────────────────────────────────────────── */
  let isOpen = false;
  let W = 0, H = 0;
  let animId = null;
  let mouseX = -1000, mouseY = -1000;
  let hoveredNode = null;
  let dragNode = null;
  let dragOffX = 0, dragOffY = 0;
  const nodeRadius = (n) => (n.isRoot ? 34 : 26) * (n.mass * 0.6);

  /* ── DOM refs ───────────────────────────────────────────────── */
  const bgCanvas    = document.getElementById('mesh-canvas');
  const graphCanvas = document.getElementById('graph-canvas');
  const meshOverlay = document.getElementById('mesh-overlay');
  const nodeCard    = document.getElementById('node-card');
  const openBtn     = document.getElementById('open-mesh-btn');
  const closeBtn    = document.getElementById('close-mesh-btn');
  const instruction = document.getElementById('mesh-instruction');

  const bgCtx   = bgCanvas ? bgCanvas.getContext('2d') : null;
  const graphCtx = graphCanvas ? graphCanvas.getContext('2d') : null;

  /* ── Layout helpers ─────────────────────────────────────────── */
  function positionNodes() {
    W = window.innerWidth;
    H = window.innerHeight;
    const cx = W / 2;
    const cy = H / 2;
    const root = GRAPH.nodes.find(n => n.isRoot);
    root.x = cx; root.y = cy;

    const leaves = GRAPH.nodes.filter(n => !n.isRoot);
    const radius = Math.min(W, H) * 0.28;
    leaves.forEach((n, i) => {
      const angle = (i / leaves.length) * Math.PI * 2 - Math.PI / 2;
      n.x = cx + Math.cos(angle) * radius;
      n.y = cy + Math.sin(angle) * radius;
      n.vx = 0; n.vy = 0;
    });
  }

  function resize() {
    W = window.innerWidth;
    H = window.innerHeight;
    if (bgCanvas) { bgCanvas.width = W; bgCanvas.height = H; }
    if (graphCanvas) { graphCanvas.width = W; graphCanvas.height = H; }
  }

  window.addEventListener('resize', () => {
    resize();
    if (!isOpen) positionNodes();
  });

  /* ── Physics spring update ───────────────────────────────────── */
  const K_SPRING   = 0.035;   // spring strength to target position
  const DAMPING    = 0.80;    // velocity damping per frame
  const REPULSION  = 9000;    // node-to-node repulsion
  const MOUSE_PULL = 260;     // how close mouse must be to attract
  const MOUSE_STR  = 0.022;   // mouse pull/repulsion strength

  function updatePhysics() {
    const cx = W / 2;
    const cy = H / 2;
    const root = GRAPH.nodes.find(n => n.isRoot);

    // Home node always returns to center
    root.vx += (cx - root.x) * 0.08;
    root.vy += (cy - root.y) * 0.08;

    // Leaf spring targets (orbiting around center based on angle)
    const leaves = GRAPH.nodes.filter(n => !n.isRoot);
    const baseRadius = Math.min(W, H) * 0.28;

    leaves.forEach((n, i) => {
      const angle = (i / leaves.length) * Math.PI * 2 - Math.PI / 2;
      const targetX = cx + Math.cos(angle) * baseRadius;
      const targetY = cy + Math.sin(angle) * baseRadius;

      // Spring toward target position
      n.vx += (targetX - n.x) * K_SPRING;
      n.vy += (targetY - n.y) * K_SPRING;
    });

    // Repulsion between all nodes
    for (let i = 0; i < GRAPH.nodes.length; i++) {
      for (let j = i + 1; j < GRAPH.nodes.length; j++) {
        const a = GRAPH.nodes[i];
        const b = GRAPH.nodes[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist2 = dx * dx + dy * dy + 1;
        const force = REPULSION / dist2;
        a.vx -= (dx / Math.sqrt(dist2)) * force;
        a.vy -= (dy / Math.sqrt(dist2)) * force;
        b.vx += (dx / Math.sqrt(dist2)) * force;
        b.vy += (dy / Math.sqrt(dist2)) * force;
      }
    }

    // Mouse interaction
    GRAPH.nodes.forEach(n => {
      if (dragNode === n) return;
      const dx = mouseX - n.x;
      const dy = mouseY - n.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_PULL) {
        const factor = (1 - dist / MOUSE_PULL) * MOUSE_STR;
        n.vx += dx * factor;
        n.vy += dy * factor;
      }
    });

    // Integrate velocities
    GRAPH.nodes.forEach(n => {
      if (dragNode === n) return;
      n.vx *= DAMPING;
      n.vy *= DAMPING;
      n.x  += n.vx;
      n.y  += n.vy;

      // Boundary soft clamping
      const r = nodeRadius(n);
      const pad = r + 80;
      if (n.x < pad) n.vx += (pad - n.x) * 0.1;
      if (n.x > W - pad) n.vx -= (n.x - (W - pad)) * 0.1;
      if (n.y < pad) n.vy += (pad - n.y) * 0.1;
      if (n.y > H - pad) n.vy -= (n.y - (H - pad)) * 0.1;
    });
  }

  /* ── Background particle field ─────────────────────────────── */
  const BG_PARTICLES = Array.from({ length: 80 }, () => ({
    x: Math.random(), y: Math.random(),
    r: Math.random() * 1.5 + 0.3,
    speed: Math.random() * 0.00015 + 0.00005,
    offset: Math.random() * Math.PI * 2,
  }));

  function drawBackground(t) {
    if (!bgCtx) return;
    bgCtx.clearRect(0, 0, W, H);
    BG_PARTICLES.forEach(p => {
      const px = ((p.x + p.speed * t * 0.1) % 1) * W;
      const py = ((p.y + Math.sin(t * 0.001 + p.offset) * 0.0003) % 1) * H;
      bgCtx.beginPath();
      bgCtx.arc(px, py, p.r, 0, Math.PI * 2);
      bgCtx.fillStyle = `rgba(99,120,255,${0.15 + Math.sin(t * 0.002 + p.offset) * 0.08})`;
      bgCtx.fill();
    });
  }

  /* ── Graph draw ─────────────────────────────────────────────── */
  function drawGraph() {
    if (!graphCtx || !isOpen) return;
    graphCtx.clearRect(0, 0, W, H);

    // Draw edges
    GRAPH.edges.forEach(e => {
      const from = GRAPH.nodes.find(n => n.id === e.from);
      const to   = GRAPH.nodes.find(n => n.id === e.to);
      if (!from || !to) return;

      const isHovered = hoveredNode && (hoveredNode.id === from.id || hoveredNode.id === to.id);

      graphCtx.beginPath();
      graphCtx.moveTo(from.x, from.y);
      graphCtx.lineTo(to.x, to.y);
      graphCtx.strokeStyle = isHovered
        ? `rgba(167,139,250,0.55)`
        : `rgba(99,120,255,0.18)`;
      graphCtx.lineWidth = isHovered ? 1.5 : 1;
      graphCtx.stroke();

      // Animated dot traveling along edge
      const progress = ((Date.now() % 3000) / 3000 + (GRAPH.edges.indexOf(e) * 0.15)) % 1;
      const dotX = from.x + (to.x - from.x) * progress;
      const dotY = from.y + (to.y - from.y) * progress;
      graphCtx.beginPath();
      graphCtx.arc(dotX, dotY, 2, 0, Math.PI * 2);
      graphCtx.fillStyle = isHovered
        ? 'rgba(167,139,250,0.9)'
        : 'rgba(99,120,255,0.5)';
      graphCtx.fill();
    });

    // Draw nodes
    GRAPH.nodes.forEach(n => {
      const r = nodeRadius(n);
      const isHov = hoveredNode === n;

      // Glow
      if (isHov || n.isRoot) {
        const grd = graphCtx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 2.5);
        grd.addColorStop(0, n.color + '40');
        grd.addColorStop(1, n.color + '00');
        graphCtx.beginPath();
        graphCtx.arc(n.x, n.y, r * 2.5, 0, Math.PI * 2);
        graphCtx.fillStyle = grd;
        graphCtx.fill();
      }

      // Outer ring (hover)
      if (isHov) {
        graphCtx.beginPath();
        graphCtx.arc(n.x, n.y, r + 5, 0, Math.PI * 2);
        graphCtx.strokeStyle = n.color + 'AA';
        graphCtx.lineWidth = 1.5;
        graphCtx.stroke();
      }

      // Node body
      const grd2 = graphCtx.createRadialGradient(n.x - r * 0.3, n.y - r * 0.3, 0, n.x, n.y, r);
      grd2.addColorStop(0, n.color + 'EE');
      grd2.addColorStop(0.6, n.color + 'AA');
      grd2.addColorStop(1, n.color + '55');
      graphCtx.beginPath();
      graphCtx.arc(n.x, n.y, r, 0, Math.PI * 2);
      graphCtx.fillStyle = grd2;
      graphCtx.fill();

      // Inner border
      graphCtx.beginPath();
      graphCtx.arc(n.x, n.y, r, 0, Math.PI * 2);
      graphCtx.strokeStyle = n.color + '88';
      graphCtx.lineWidth = 1;
      graphCtx.stroke();

      // Label
      graphCtx.font = `${n.isRoot ? '600' : '500'} ${n.isRoot ? 14 : 12}px 'Space Grotesk', sans-serif`;
      graphCtx.fillStyle = '#ffffff';
      graphCtx.textAlign = 'center';
      graphCtx.textBaseline = 'middle';
      graphCtx.fillText(n.label, n.x, n.y);

      // Children count badge (for non-leaf nodes)
      if (n.children && n.children.length > 0) {
        const bx = n.x + r * 0.72;
        const by = n.y - r * 0.72;
        graphCtx.beginPath();
        graphCtx.arc(bx, by, 9, 0, Math.PI * 2);
        graphCtx.fillStyle = '#0b0d14';
        graphCtx.fill();
        graphCtx.strokeStyle = n.color + 'CC';
        graphCtx.lineWidth = 1.2;
        graphCtx.stroke();
        graphCtx.font = '500 9px Inter, sans-serif';
        graphCtx.fillStyle = n.color;
        graphCtx.textAlign = 'center';
        graphCtx.textBaseline = 'middle';
        graphCtx.fillText(n.children.length, bx, by);
      }
    });
  }

  /* ── Animation loop ─────────────────────────────────────────── */
  let lastT = 0;
  function tick(t) {
    animId = requestAnimationFrame(tick);
    drawBackground(t);
    if (isOpen) {
      updatePhysics();
      drawGraph();
    }
  }

  /* ── Node at point ──────────────────────────────────────────── */
  function getNodeAt(x, y) {
    for (let i = GRAPH.nodes.length - 1; i >= 0; i--) {
      const n = GRAPH.nodes[i];
      const r = nodeRadius(n);
      const dx = x - n.x, dy = y - n.y;
      if (dx * dx + dy * dy <= r * r) return n;
    }
    return null;
  }

  /* ── Node card update ───────────────────────────────────────── */
  function showNodeCard(node, cx, cy) {
    if (!nodeCard) return;
    const card = nodeCard;
    card.querySelector('.node-card-tag').textContent = node.tag;
    card.querySelector('.node-card-tag').style.color = node.color;
    card.querySelector('.node-card-title').textContent = node.label;
    card.querySelector('.node-card-desc').textContent = node.desc;

    const childrenEl = card.querySelector('.node-card-children');
    if (node.children && node.children.length > 0) {
      childrenEl.innerHTML = node.children
        .map(cid => {
          const child = GRAPH.nodes.find(n => n.id === cid);
          return `<span class="child-chip">${child ? child.label : cid}</span>`;
        })
        .join('');
      childrenEl.style.display = 'flex';
    } else {
      childrenEl.innerHTML = '';
      childrenEl.style.display = 'none';
    }

    const cta = card.querySelector('.node-card-cta');
    cta.href = node.href;
    cta.textContent = `Go to ${node.label} →`;

    // Position card intelligently
    const cw = 250, ch = 180;
    let lx = cx + 24, ly = cy - 20;
    if (lx + cw > W - 24) lx = cx - cw - 24;
    if (ly + ch > H - 24) ly = H - ch - 24;
    if (ly < 80) ly = 80;
    card.style.left = lx + 'px';
    card.style.top  = ly + 'px';
    card.classList.add('visible');
  }

  function hideNodeCard() {
    if (nodeCard) nodeCard.classList.remove('visible');
  }

  /* ── Open / Close ───────────────────────────────────────────── */
  function openMesh() {
    isOpen = true;
    positionNodes();
    meshOverlay.classList.add('open');
    graphCanvas.classList.add('open');
    closeBtn.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (instruction) instruction.style.display = 'none';
  }

  function closeMesh() {
    isOpen = false;
    meshOverlay.classList.remove('open');
    graphCanvas.classList.remove('open');
    closeBtn.classList.remove('open');
    hideNodeCard();
    document.body.style.overflow = '';
    if (graphCtx) graphCtx.clearRect(0, 0, W, H);
  }

  /* ── Event listeners ─────────────────────────────────────────── */
  if (openBtn) openBtn.addEventListener('click', openMesh);
  if (closeBtn) closeBtn.addEventListener('click', closeMesh);

  if (meshOverlay) {
    meshOverlay.addEventListener('click', (e) => {
      if (e.target === meshOverlay) closeMesh();
    });
  }

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen) closeMesh();
    if ((e.metaKey || e.ctrlKey) && e.key === 'g') { e.preventDefault(); openMesh(); }
  });

  if (graphCanvas) {
    graphCanvas.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      const hit = getNodeAt(mouseX, mouseY);
      if (hit !== hoveredNode) {
        hoveredNode = hit;
        graphCanvas.style.cursor = hit ? 'pointer' : 'crosshair';
        if (hit) {
          showNodeCard(hit, mouseX, mouseY);
        } else {
          hideNodeCard();
        }
      }
      if (dragNode) {
        dragNode.x = mouseX + dragOffX;
        dragNode.y = mouseY + dragOffY;
        dragNode.vx = 0; dragNode.vy = 0;
      }
    });

    graphCanvas.addEventListener('mousedown', (e) => {
      const hit = getNodeAt(e.clientX, e.clientY);
      if (hit) {
        dragNode = hit;
        dragOffX = hit.x - e.clientX;
        dragOffY = hit.y - e.clientY;
      }
    });

    graphCanvas.addEventListener('mouseup', () => { dragNode = null; });

    graphCanvas.addEventListener('click', (e) => {
      const hit = getNodeAt(e.clientX, e.clientY);
      if (hit && hit.href) {
        closeMesh();
        setTimeout(() => {
          const el = document.querySelector(hit.href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    });

    // Touch support
    graphCanvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const t = e.touches[0];
      mouseX = t.clientX; mouseY = t.clientY;
      hoveredNode = getNodeAt(mouseX, mouseY);
      if (dragNode) {
        dragNode.x = mouseX + dragOffX;
        dragNode.y = mouseY + dragOffY;
        dragNode.vx = 0; dragNode.vy = 0;
      }
    }, { passive: false });

    graphCanvas.addEventListener('touchstart', (e) => {
      const t = e.touches[0];
      const hit = getNodeAt(t.clientX, t.clientY);
      if (hit) { dragNode = hit; dragOffX = hit.x - t.clientX; dragOffY = hit.y - t.clientY; }
    });

    graphCanvas.addEventListener('touchend', () => { dragNode = null; });
  }

  /* ── Init ───────────────────────────────────────────────────── */
  resize();
  positionNodes();
  requestAnimationFrame(tick);

})();
