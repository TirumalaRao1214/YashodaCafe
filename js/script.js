/**
 * CAFE YASHODA — Interactive Client Logic
 * Single source of truth menu database, real-time live search,
 * category filtering, smooth scroll spying, and responsive mobile navigation.
 */

'use strict';

// ── Complete Verified Menu Database (18 Categories · 118 Items) ──
const menuData = [
  {
    id: 'tea-specials',
    cat: 'YASHODA TEA SPECIALS',
    short: 'TEA',
    icon: '🍃',
    items: [
      { n: 'SINGLE TEA (PAPER CUP)', p: 12 },
      { n: 'YASHODA TEA', p: 16 },
      { n: 'GINGER TEA', p: 20 },
      { n: 'ELAICHI TEA', p: 20 },
      { n: 'LEMON TEA', p: 20 },
      { n: 'BLACK TEA', p: 20 },
      { n: 'BLACK TEA WITH HONEY', p: 25 },
      { n: 'BLACK TEA WITH LEMON HONEY', p: 30 },
      { n: 'SPECIAL TEA', p: 49 },
      { n: 'GREEN TEA', p: 20 },
      { n: 'ORGANIC GREEN TEA', p: 25 }
    ]
  },
  {
    id: 'coffee-corner',
    cat: 'COFFEE CORNER',
    short: 'COFFEE',
    icon: '☕',
    items: [
      { n: 'BLACK COFFEE', p: 20 },
      { n: 'BLACK COFFEE WITH LEMON', p: 25 },
      { n: 'STRONG COFFEE', p: 25 },
      { n: 'BLACK COFFEE WITH HONEY', p: 25 },
      { n: 'BLACK COFFEE WITH LEMON HONEY', p: 30 },
      { n: 'DOUBLE STRONG COFFEE', p: 30 },
      { n: 'CHOCOLATE COFFEE', p: 35 },
      { n: 'BLACK COFFEE WITH GHEE', p: 40 },
      { n: 'GHEE BULLETPROOF COFFEE', p: 49 },
      { n: 'BLACK ICED COFFEE', p: 89 },
      { n: 'COLD ICED COFFEE', p: 160 },
      { n: 'BASIC CAPPUCCINO', p: 99 }
    ]
  },
  {
    id: 'milk',
    cat: 'MILK DELIGHTS',
    short: 'MILK',
    icon: '🥛',
    items: [
      { n: 'HOT MILK', p: 25 },
      { n: 'HORLICKS MILK', p: 25 },
      { n: 'BOOST MILK', p: 25 },
      { n: 'BADAM MILK', p: 35 },
      { n: 'HOT CHOCOLATE', p: 35 }
    ]
  },
  {
    id: 'snacks',
    cat: 'HOT SNACKS & PUFFS',
    short: 'SNACKS',
    icon: '🥐',
    items: [
      { n: 'ALOO SAMOSA', p: 20 },
      { n: 'SWEET CORN SAMOSA', p: 20 },
      { n: 'PANEER PUFF', p: 25 },
      { n: 'EGG PUFF', p: 25 },
      { n: 'CHICKEN PUFF', p: 25 }
    ]
  },
  {
    id: 'burgers',
    cat: 'GOURMET BURGERS',
    short: 'BURGERS',
    icon: '🍔',
    items: [
      { n: 'VEG BURGER', p: 99 },
      { n: 'EGG BURGER', p: 109 },
      { n: 'ALOO TIKKI BURGER', p: 119 },
      { n: 'VEG CHEESE BURGER', p: 129 },
      { n: 'CHICKEN BURGER', p: 129 },
      { n: 'CHICKEN CHEESE BURGER', p: 149 },
      { n: 'CHICKEN GARLIC BURGER', p: 149 },
      { n: 'CHICKEN CHEESE GARLIC BURGER', p: 159 }
    ]
  },
  {
    id: 'sandwich',
    cat: 'GRILLED SANDWICHES',
    short: 'SANDWICH',
    icon: '🥪',
    items: [
      { n: 'VEG SANDWICH', p: 109 },
      { n: 'EGG SANDWICH', p: 119 },
      { n: 'VEG CHEESE SANDWICH', p: 129 },
      { n: 'VEG GARLIC SANDWICH', p: 139 },
      { n: 'CHICKEN SANDWICH', p: 149 },
      { n: 'CHICKEN CHEESE SANDWICH', p: 159 },
      { n: 'CHICKEN GARLIC SANDWICH', p: 179 },
      { n: 'CHICKEN CHEESE GARLIC SANDWICH', p: 189 }
    ]
  },
  {
    id: 'fries',
    cat: 'CRISPY FRIES & POPS',
    short: 'FRIES',
    icon: '🍟',
    items: [
      { n: 'FRENCH FRIES', p: 109 },
      { n: 'PERI PERI FRENCH FRIES', p: 129 },
      { n: 'POTATO GARLIC POPS', p: 129 }
    ]
  },
  {
    id: 'bun-specials',
    cat: 'BUN SPECIALS',
    short: 'BUNS',
    icon: '🫓',
    items: [
      { n: 'MASKA BUN', p: 65 },
      { n: 'BASUNDI BUN', p: 69 },
      { n: 'OREO BUN DELIGHT', p: 69 },
      { n: 'CHOCO CRUNCH BUN', p: 69 },
      { n: 'HIDE AND SEEK BUN BLAST', p: 69 }
    ]
  },
  {
    id: 'maggie',
    cat: 'HOT MAGGIE BOWLS',
    short: 'MAGGIE',
    icon: '🍜',
    items: [
      { n: 'VEG MAGGIE', p: 40 },
      { n: 'EGG MAGGIE', p: 50 },
      { n: 'CHICKEN MAGGIE', p: 65 }
    ]
  },
  {
    id: 'soups',
    cat: 'WARM COMFORT SOUPS',
    short: 'SOUPS',
    icon: '🍲',
    items: [
      { n: 'TOMATO SOUP', p: 59 },
      { n: 'SWEET CORN SOUP', p: 59 },
      { n: 'GARLIC SOUP', p: 59 }
    ]
  },
  {
    id: 'milkshakes',
    cat: 'SIGNATURE MILKSHAKES',
    short: 'SHAKES',
    icon: '🥤',
    items: [
      { n: 'BANANA SHAKE', p: 99 },
      { n: 'BLACK CURRENT SHAKE', p: 99 },
      { n: 'BUTTERSCOTCH SHAKE', p: 99 },
      { n: 'MANGO SHAKE', p: 99 },
      { n: 'SPL. ROSE SHAKE', p: 99 },
      { n: 'STRAWBERRY SHAKE', p: 99 },
      { n: 'VANILA SHAKE', p: 99 },
      { n: 'BLUE CHOCO SHAKE', p: 109 },
      { n: 'CHOCOLATE BANANA SHAKE', p: 109 },
      { n: 'HIDE&SEEK CRUSH SHAKE', p: 109 },
      { n: 'KITKAT SHAKE', p: 109 },
      { n: 'OREO SHAKE', p: 109 },
      { n: 'STRAWBERRY OREO MILKSHAKE', p: 119 },
      { n: 'DRY FRUIT SHAKE', p: 149 }
    ]
  },
  {
    id: 'mocktails',
    cat: 'REFRESHING MOCKTAILS',
    short: 'MOCKTAILS',
    icon: '🍹',
    items: [
      { n: 'BLUE LAGOON', p: 89 },
      { n: 'MINT MOJITO', p: 89 },
      { n: 'MINT ICED TEA', p: 89 },
      { n: 'STRAWBERRY SODA', p: 89 },
      { n: 'BLUE LAGOON FLOAT', p: 99 },
      { n: 'GALAXY LEMONADE', p: 99 },
      { n: 'STRAWBERRY MOJITO', p: 99 },
      { n: 'STRAWBERRY LEMONADE', p: 99 },
      { n: 'POMEGRANATE MOJITO', p: 109 }
    ]
  },
  {
    id: 'detox-drinks',
    cat: 'WELLNESS & DETOX DRINKS',
    short: 'DETOX',
    icon: '🌿',
    items: [
      { n: 'LEMON DETOX DRINK', p: 45 },
      { n: 'JEERA DETOX DRINK', p: 45 },
      { n: 'GREEN DETOX DRINK', p: 45 },
      { n: 'GINGER LEMON DRINK', p: 45 },
      { n: 'CUCUMBER COOLER', p: 45 },
      { n: 'MINT DETOX DRINK', p: 45 }
    ]
  },
  {
    id: 'special-combo-mocktails',
    cat: 'SPECIAL COMBO MOCKTAILS',
    short: 'COMBO',
    icon: '🍸',
    items: [
      { n: 'STRAWBERRY MINT MOJITO', p: 109 },
      { n: 'MINT BERRY COOLER', p: 109 },
      { n: 'RED GREEN FIZZ', p: 109 }
    ]
  },
  {
    id: 'kids-and-elders',
    cat: 'KIDS & ELDERS FAVORITES',
    short: 'KIDS',
    icon: '🌟',
    items: [
      { n: "KELLOGG'S WITH MILK", p: 89 },
      { n: "KELLOGG'S WITH HONEY", p: 99 },
      { n: 'NUTELLA MILK', p: 55 },
      { n: 'NUTELLA BREAD', p: 89 },
      { n: 'NUTELLA BUN BLAST', p: 99 },
      { n: 'NUTELLA GRILLED SANDWICH', p: 129 },
      { n: 'NUTELLA MILKSHAKE', p: 149 },
      { n: 'VENNALA ICE CREAM WITH NUTELLA', p: 60 }
    ]
  },
  {
    id: 'classic-scoops',
    cat: 'CLASSIC SCOOPS',
    short: 'SCOOPS',
    icon: '🍦',
    _ic: true,
    items: [
      { n: 'VANILLA SCOOP', p: 45 },
      { n: 'CHOCOLATE SCOOP', p: 50 },
      { n: 'BUTTERSCOTCH SCOOP', p: 50 },
      { n: 'STRAWBERRY SCOOP', p: 50 },
      { n: 'BLACK CURRANT SCOOP', p: 55 },
      { n: 'DRY FRUIT SCOOP', p: 65 }
    ]
  },
  {
    id: 'single-sundae',
    cat: 'SINGLE SUNDAES',
    short: 'SUNDAES',
    icon: '🍨',
    _ic: true,
    items: [
      { n: 'CHOCOLATE SUNDAE', d: 'Creamy scoop topped with rich hot chocolate sauce', p: 80 },
      { n: 'STRAWBERRY SUNDAE', d: 'Sweet strawberry compote with velvety scoop', p: 80 },
      { n: 'BUTTERSCOTCH SUNDAE', d: 'Crunchy butterscotch praline with rich caramel drizzle', p: 90 },
      { n: 'NUTTY GRITTY SUNDAE', d: 'Loaded roasted nuts with creamy base & golden sauce', p: 90 },
      { n: 'CRISPY CHOCO SUNDAE', d: 'Crunchy choco-crisps & premium chocolate glaze', p: 90 }
    ]
  },
  {
    id: 'double-sundae',
    cat: 'DOUBLE SUNDAES',
    short: 'DOUBLE',
    icon: '🍧',
    _ic: true,
    items: [
      { n: 'SHOCKING CURRANT', d: 'Black currant & vanilla fusion with fruit compote', p: 110 },
      { n: 'TASTE OF HEAVEN', d: 'Butterscotch & vanilla duo with roasted cashews & caramel', p: 120 },
      { n: 'AWESOME 2 SOME', d: 'Strawberry & chocolate blend with crisp topping', p: 120 },
      { n: 'CHOCO BANANA DOUBLE', d: 'Rich dark chocolate, fresh banana slices & vanilla swirl', p: 120 }
    ]
  }
];

const L_IDS = ['tea-specials', 'milk', 'snacks', 'bun-specials', 'maggie', 'soups', 'detox-drinks', 'kids-and-elders'];
const R_IDS = ['coffee-corner', 'burgers', 'sandwich', 'fries', 'milkshakes', 'mocktails', 'special-combo-mocktails'];
const IC_IDS = ['classic-scoops', 'single-sundae', 'double-sundae'];

// ── Application State ──
let activeFilter = 'all';
let searchQuery = '';

// ── HTML Sanitizer ──
function esc(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ── Render Menu Item Row ──
function renderItemRow(item) {
  return `
    <div class="mi">
      <div class="mi-row">
        <span class="mi-nm">${esc(item.n)}</span>
        <span class="mi-dt" aria-hidden="true"></span>
        <span class="mi-pr"><span class="r">₹</span>${item.p}</span>
      </div>
      ${item.d ? `<div class="mi-ds">${esc(item.d)}</div>` : ''}
    </div>
  `;
}

// ── Render Standard Category Block ──
function renderCategoryBlock(block) {
  const itemsHtml = block.items.map(renderItemRow).join('');
  return `
    <div class="cb" id="cat-${block.id}">
      <div class="ch">
        <span class="ch-lf">${block.icon}</span>
        <h3>${esc(block.cat)}</h3>
        <span class="ch-lf">${block.icon}</span>
        <div class="ch-gr" aria-hidden="true"></div>
      </div>
      <div class="mi-list">${itemsHtml}</div>
    </div>
  `;
}

// ── Render Ice Cream Delights Showcase ──
function renderIceCreamBlock(filteredBlocks) {
  const visible = filteredBlocks.filter(b => IC_IDS.includes(b.id) && b.items.length > 0);
  if (!visible.length) return '';

  const scoops = visible.find(b => b.id === 'classic-scoops');
  const single = visible.find(b => b.id === 'single-sundae');
  const double = visible.find(b => b.id === 'double-sundae');

  let col1Html = '';
  let col2Html = '';

  if (scoops && scoops.items.length) {
    col1Html += `<div class="ic-sh">Classic Scoops</div>` + scoops.items.map(renderItemRow).join('');
  }
  if (single && single.items.length) {
    col1Html += `<div class="ic-sh">Single Sundaes</div>` + single.items.map(renderItemRow).join('');
  }
  if (double && double.items.length) {
    col2Html += `<div class="ic-sh">Double Sundaes &amp; Delights</div>` + double.items.map(renderItemRow).join('');
  }

  return `
    <div class="sdiv" aria-hidden="true">
      <div class="sl"></div>
      <div class="so">❦ ❦ ❦</div>
      <div class="sl"></div>
    </div>
    <div class="ic-hdr" id="cat-ice-cream">
      <div class="ico">🍨</div>
      <h3>Ice Cream Delights</h3>
      <p>Artisan scoops, premium single sundaes &amp; double combos</p>
    </div>
    <div class="ic-cols">
      <div class="ic-col">${col1Html}</div>
      <div class="ic-col">${col2Html}</div>
    </div>
  `;
}

// ── Core Menu Render Function ──
function renderMenu() {
  const colL = document.getElementById('col-l');
  const colR = document.getElementById('col-r');
  const icSec = document.getElementById('ic-sec');
  const mcols = document.getElementById('mcols');
  const noRes = document.getElementById('no-res');
  const srchNote = document.getElementById('srch-note');

  if (!colL || !colR || !icSec) return;

  const q = searchQuery.trim().toLowerCase();

  // Filter Categories & Items
  const filtered = menuData
    .map(catBlock => {
      // If a category tab is selected and doesn't match
      if (activeFilter !== 'all') {
        if (activeFilter === 'ice-cream' && !IC_IDS.includes(catBlock.id)) return null;
        if (activeFilter !== 'ice-cream' && catBlock.id !== activeFilter) return null;
      }

      // If search query is present
      if (q) {
        const catMatch = catBlock.cat.toLowerCase().includes(q);
        const matchingItems = catBlock.items.filter(item => {
          return item.n.toLowerCase().includes(q) || (item.d && item.d.toLowerCase().includes(q)) || catMatch;
        });
        if (!matchingItems.length) return null;
        return { ...catBlock, items: matchingItems };
      }

      return catBlock;
    })
    .filter(Boolean);

  const totalItems = filtered.reduce((acc, c) => acc + c.items.length, 0);

  // Search note
  if (q) {
    srchNote.style.display = 'block';
    srchNote.textContent = `Showing ${totalItems} result${totalItems !== 1 ? 's' : ''} for "${searchQuery}"`;
  } else {
    srchNote.style.display = 'none';
  }

  // Zero results state
  if (!filtered.length) {
    colL.innerHTML = '';
    colR.innerHTML = '';
    icSec.innerHTML = '';
    noRes.style.display = 'block';
    mcols.style.display = 'none';
    return;
  }

  noRes.style.display = 'none';
  mcols.style.display = 'grid';

  const leftBlocks = filtered.filter(b => L_IDS.includes(b.id));
  const rightBlocks = filtered.filter(b => R_IDS.includes(b.id));
  const hasIceCream = filtered.some(b => IC_IDS.includes(b.id));

  // Single category isolation mode
  if (activeFilter !== 'all' && activeFilter !== 'ice-cream') {
    mcols.classList.add('solo');
    colL.innerHTML = filtered.map(renderCategoryBlock).join('');
    colR.innerHTML = '';
    icSec.innerHTML = '';
    return;
  }

  if (activeFilter === 'ice-cream') {
    mcols.classList.remove('solo');
    colL.innerHTML = '';
    colR.innerHTML = '';
    icSec.innerHTML = renderIceCreamBlock(filtered);
    return;
  }

  // Standard Two Column Layout
  mcols.classList.remove('solo');
  colL.innerHTML = leftBlocks.map(renderCategoryBlock).join('');
  colR.innerHTML = rightBlocks.map(renderCategoryBlock).join('');
  icSec.innerHTML = hasIceCream ? renderIceCreamBlock(filtered) : '';
}

// ── Initialize Category Nav Strip ──
function initCategoryNav() {
  const cnav = document.getElementById('cnav');
  if (!cnav) return;

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'tea-specials', label: 'Teas' },
    { id: 'coffee-corner', label: 'Coffee' },
    { id: 'milk', label: 'Milk' },
    { id: 'snacks', label: 'Snacks' },
    { id: 'burgers', label: 'Burgers' },
    { id: 'sandwich', label: 'Sandwiches' },
    { id: 'fries', label: 'Fries' },
    { id: 'bun-specials', label: 'Buns' },
    { id: 'maggie', label: 'Maggie' },
    { id: 'soups', label: 'Soups' },
    { id: 'milkshakes', label: 'Shakes' },
    { id: 'mocktails', label: 'Mocktails' },
    { id: 'detox-drinks', label: 'Detox' },
    { id: 'special-combo-mocktails', label: 'Combos' },
    { id: 'kids-and-elders', label: 'Kids & Elders' },
    { id: 'ice-cream', label: 'Ice Cream' }
  ];

  cnav.innerHTML = categories
    .map(c => `<button class="cp ${c.id === 'all' ? 'on' : ''}" data-cat="${c.id}">${c.label}</button>`)
    .join('');

  cnav.addEventListener('click', e => {
    const btn = e.target.closest('.cp');
    if (!btn) return;

    cnav.querySelectorAll('.cp').forEach(b => b.classList.remove('on'));
    btn.classList.add('on');
    activeFilter = btn.dataset.cat;
    renderMenu();

    // Smooth horizontal scroll into view
    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  });
}

// ── Search Input Handler ──
function initSearch() {
  const searchInput = document.getElementById('menu-search');
  if (!searchInput) return;

  searchInput.addEventListener('input', e => {
    searchQuery = e.target.value;
    renderMenu();
  });
}

// ── Sticky Header Scroll Listener ──
function initHeaderScroll() {
  const hdr = document.getElementById('hdr');
  if (!hdr) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      hdr.classList.add('scrolled');
    } else {
      hdr.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ── Mobile Navigation Hamburger ──
function initMobileNav() {
  const ham = document.getElementById('ham');
  const mnav = document.getElementById('mnav');
  if (!ham || !mnav) return;

  ham.addEventListener('click', () => {
    const isOpen = mnav.style.display === 'block';
    mnav.style.display = isOpen ? 'none' : 'block';
    ham.setAttribute('aria-expanded', !isOpen);
  });

  mnav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mnav.style.display = 'none';
      ham.setAttribute('aria-expanded', 'false');
    });
  });
}

// ── Smooth Scroll & Active Nav Spy ──
function initScrollSpy() {
  const links = document.querySelectorAll('.dnav a[href^="#"]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        current = sec.getAttribute('id');
      }
    });

    links.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === `#${current}`) {
        a.classList.add('active');
      }
    });
  }, { passive: true });
}

// ── DOM Ready Initializer ──
document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileNav();
  initCategoryNav();
  initSearch();
  initScrollSpy();
  renderMenu();
});
