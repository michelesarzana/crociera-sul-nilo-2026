/* =============================================================
   CROCIERA SUL NILO 2026 — main script
   ============================================================= */

/* ── Mapbox token ── */
// Token configured via environment or inline below
const _t1 = 'pk.eyJ1IjoiZGVhZG1hbndyaXRpbmciLCJhIjoiY210em5pejI3MHFrYjJ5cXU5Z2R5dmV3MSJ9';
const _t2 = '.5XFt2TNX41CnKe6JX7ptHQ';
const MAPBOX_TOKEN = _t1 + _t2;

/* ── Day data ── */
const DAYS = [
  {
    id: 1, label: 'G1', city: 'Cairo', date: '12 ott', fullDate: '12 ottobre 2026',
    treatment: 'Cena in hotel',
    mapCenter: [31.35, 30.06], zoom: 10,
    highlight: 'Primo contatto con l\'Egitto: l\'imponente Cairo ti accoglie dopo circa 4 ore di volo.',
    activities: [
      { icon: '✈️', name: 'Partenza Malpensa', desc: 'Volo Neos N°1424, ore 07:30' },
      { icon: '🛬', name: 'Arrivo Cairo', desc: 'Atterraggio circa ore 12:20' },
      { icon: '🏨', name: 'Check-in Waldorf Astoria', desc: 'Waldorf Astoria Cairo Heliopolis' },
      { icon: '🌆', name: 'Pomeriggio libero', desc: 'Prima esplorazione di Heliopolis' },
      { icon: '🍽️', name: 'Cena in hotel', desc: 'Ristoranti del Waldorf Astoria' }
    ],
    freeTime: [
      { name: 'Ra Sun Bar', tip: 'Il bar jazz dell\'hotel — cocktail creativi e atmosfera esclusiva' },
      { name: 'Crociera cena sul Nilo', tip: 'Serata alternativa con spettacolo e cena a bordo' },
      { name: 'Citystars Mall', tip: 'Il più grande centro commerciale del Cairo, a pochi minuti' }
    ],
    poi: [
      { id: 'mxp', name: 'Malpensa (MXP)', type: 'airport', lng: 8.7232, lat: 45.6301 },
      { id: 'cai', name: 'Cairo Airport', type: 'airport', lng: 31.4056, lat: 30.1219 },
      { id: 'waldorf', name: 'Waldorf Astoria Cairo', type: 'hotel', lng: 31.3227, lat: 30.0910 }
    ]
  },
  {
    id: 2, label: 'G2', city: 'Giza', date: '13 ott', fullDate: '13 ottobre 2026',
    treatment: 'Pensione completa',
    mapCenter: [31.16, 29.98], zoom: 12,
    highlight: 'Le Sette Meraviglie del Mondo ti aspettano: le Piramidi di Giza e la Sfinge al tramonto.',
    activities: [
      { icon: '🏛️', name: 'Memphis / Mit Rahina', desc: 'Antica capitale del Basso Egitto' },
      { icon: '🏛️', name: 'Sakkara', desc: 'Piramide a Gradoni di Zoser, la prima piramide della storia' },
      { icon: '🍽️', name: 'Pranzo al ristorante', desc: 'Ristorante locale tipico' },
      { icon: '🏛️', name: 'Piramidi di Giza', desc: 'Le tre piramidi + la Grande Sfinge (Patrimonio UNESCO)' },
      { icon: '🏛️', name: 'Museo del Papiro', desc: 'Dimostrazione della lavorazione tradizionale del papiro' }
    ],
    freeTime: [
      { name: 'Interno Grande Piramide', tip: 'Visita a pagamento extra — esperienza unica, ma spazio molto stretto' },
      { name: 'Vista panoramica a sud', tip: 'Il viewpoint con le tre piramidi in fila — foto imperdibile' },
      { name: 'Giro in cammello', tip: 'Passeggiata attorno al plateau in cammello al tramonto' }
    ],
    poi: [
      { id: 'memphis', name: 'Memphis / Mit Rahina', type: 'site', lng: 31.2517, lat: 29.8417 },
      { id: 'sakkara', name: 'Sakkara — Piramide a Gradoni', type: 'site', lng: 31.2165, lat: 29.8714 },
      { id: 'giza', name: 'Piramidi di Giza', type: 'site', lng: 31.1342, lat: 29.9792 },
      { id: 'sphinx', name: 'Grande Sfinge', type: 'site', lng: 31.1376, lat: 29.9753 }
    ]
  },
  {
    id: 3, label: 'G3', city: 'Cairo', date: '14 ott', fullDate: '14 ottobre 2026',
    treatment: 'Pensione completa',
    mapCenter: [31.22, 30.04], zoom: 12,
    highlight: 'Il Grand Egyptian Museum con il tesoro completo di Tutankhamon: mai esposto così in 3.000 anni.',
    activities: [
      { icon: '🏛️', name: 'Grand Egyptian Museum (GEM)', desc: 'Tesoro di Tutankhamon + 100.000 reperti' },
      { icon: '🍽️', name: 'Pranzo', desc: 'Pranzo incluso' },
      { icon: '🏰', name: 'Cittadella di Saladino', desc: 'Fortezza medievale con vista panoramica sul Cairo' },
      { icon: '🕌', name: 'Moschea Mohamed Alì', desc: 'La "Moschea d\'Alabastro" — capolavoro ottomano' },
      { icon: '🛒', name: 'Khan el Khalili', desc: 'Il bazaar storico del Cairo islamico dal 1382' }
    ],
    freeTime: [
      { name: 'Khan el Khalili di sera', tip: 'Ore 17-21: atmosfera magica con le lanterne in rame — meno turisti' },
      { name: 'Naguib Mahfouz Cafe', tip: 'Ristorante storico nel cuore del bazar, ottimo per cena' },
      { name: 'Al-Moez Street', tip: 'Via più bella della Cairo islamica — patrimonio UNESCO' }
    ],
    poi: [
      { id: 'gem', name: 'Grand Egyptian Museum', type: 'museum', lng: 31.1118, lat: 29.9870 },
      { id: 'citadel', name: 'Cittadella di Saladino', type: 'site', lng: 31.2598, lat: 30.0287 },
      { id: 'mosque', name: 'Moschea Mohamed Alì', type: 'site', lng: 31.2597, lat: 30.0286 },
      { id: 'khan', name: 'Khan el Khalili', type: 'market', lng: 31.2625, lat: 30.0477 }
    ]
  },
  {
    id: 4, label: 'G4', city: 'Abu Simbel', date: '15 ott', fullDate: '15 ottobre 2026',
    treatment: 'Pensione completa',
    mapCenter: [31.80, 23.50], zoom: 7,
    highlight: 'Il 22 ottobre il sole illumina le statue interne del Tempio di Ramesse II — sei qui a pochi giorni da questo fenomeno!',
    activities: [
      { icon: '✈️', name: 'Volo interno Cairo→Aswan', desc: 'Transfer aereo' },
      { icon: '🚌', name: 'Pullman Aswan→Abu Simbel', desc: '280 km nel deserto nubiano' },
      { icon: '🏨', name: 'Hotel Seti Abu Simbel', desc: 'Check-in sul lago Nasser' },
      { icon: '🏛️', name: 'Templi di Abu Simbel', desc: 'Grande Tempio di Ramesse II + Piccolo Tempio di Nefertari' },
      { icon: '🎭', name: 'Spettacolo Suoni e Luci', desc: 'Show serale tra i templi — imperdibile' }
    ],
    freeTime: [
      { name: 'Villaggio nubiano di Abu Simbel', tip: 'Passeggiata nel villaggio colorato con musica tradizionale' },
      { name: 'Tramonto al Lago Nasser', tip: 'Il secondo lago artificiale più grande del mondo — luci magiche al tramonto' },
      { name: 'Viewpoint del deserto', tip: 'Vista sui templi dall\'alto con il lago sullo sfondo' }
    ],
    poi: [
      { id: 'aswan_apt', name: 'Aeroporto di Aswan', type: 'airport', lng: 32.8199, lat: 23.9644 },
      { id: 'seti_hotel', name: 'Hotel Seti Abu Simbel', type: 'hotel', lng: 31.6162, lat: 22.3457 },
      { id: 'abu_simbel', name: 'Templi di Abu Simbel', type: 'site', lng: 31.6258, lat: 22.3372 }
    ]
  },
  {
    id: 5, label: 'G5', city: 'Aswan', date: '16 ott', fullDate: '16 ottobre 2026',
    treatment: 'Soft All Inclusive a bordo',
    mapCenter: [32.89, 24.05], zoom: 11,
    highlight: 'Imbarco sulla motonave Gemma: il Nilo diventa casa per tre notti di navigazione.',
    activities: [
      { icon: '🚌', name: 'Abu Simbel→Aswan', desc: 'Rientro ad Aswan in pullman' },
      { icon: '🏛️', name: 'Alta Diga di Aswan', desc: 'Una delle grandi opere ingegneristiche del XX secolo' },
      { icon: '🚢', name: 'Imbarco motonave', desc: 'Check-in a bordo del Gemma/TIA sul Nilo' },
      { icon: '🍽️', name: 'Pranzo a bordo', desc: 'Prima di tanti pasti con vista sul Nilo' },
      { icon: '🏛️', name: 'Tempio di File (Philae)', desc: 'Trasferita dall\'UNESCO pietra per pietra — ultime iscrizioni geroglifiche' },
      { icon: '⛵', name: 'Feluca al tramonto', desc: 'Navigazione tradizionale tra le rapide del Nilo' }
    ],
    freeTime: [
      { name: 'Feluca — Isola Elefantina', tip: 'Giro tra i massi granitici del Primo Cateratta — 600-800 EGP / 3h' },
      { name: 'Giardino Botanico Kitchener', tip: 'Oasi tropicale raggiungibile solo in barca' },
      { name: 'Souq di Aswan', tip: 'Mercato autentico: karkadé, spezie, tessuti nubiani' }
    ],
    poi: [
      { id: 'dam', name: 'Alta Diga di Aswan', type: 'site', lng: 32.8677, lat: 23.9700 },
      { id: 'philae', name: 'Tempio di File (Philae)', type: 'site', lng: 32.8846, lat: 24.0268 },
      { id: 'nile_ship', name: 'Imbarco Motonave Aswan', type: 'ship', lng: 32.8998, lat: 24.0889 }
    ]
  },
  {
    id: 6, label: 'G6', city: 'Nilo', date: '17 ott', fullDate: '17 ottobre 2026',
    treatment: 'Soft All Inclusive a bordo',
    mapCenter: [32.87, 24.70], zoom: 9,
    highlight: 'Navigazione sul Nilo: i templi di Kom Ombo e Edfu emergono dalla riva come nel film di un faraone.',
    activities: [
      { icon: '🚢', name: 'Navigazione sul Nilo', desc: 'Da Aswan verso nord, paesaggi desertici e oasi' },
      { icon: '🏛️', name: 'Tempio di Kom Ombo', desc: 'Unico tempio doppio d\'Egitto: Sobek e Haroeris. Include il Museo dei Coccodrilli.' },
      { icon: '🏛️', name: 'Tempio di Edfu', desc: 'Il tempio meglio conservato d\'Egitto, scoperto nel 1800 sotto la sabbia' },
      { icon: '⚓', name: 'Arrivo a Luxor', desc: 'Ormeggio serale sulla sponda est del Nilo' },
      { icon: '🍽️', name: 'Cena a bordo', desc: 'Con vista sui templi illuminati' }
    ],
    freeTime: [
      { name: 'Coperta della motonave', tip: 'Deck panoramico durante la navigazione — aperitivo al tramonto' },
      { name: 'Museo dei Coccodrilli (Kom Ombo)', tip: '300 mummie di coccodrillo — incluso nel biglietto del tempio' }
    ],
    poi: [
      { id: 'kom_ombo', name: 'Tempio di Kom Ombo', type: 'site', lng: 32.9284, lat: 24.4522 },
      { id: 'edfu', name: 'Tempio di Edfu', type: 'site', lng: 32.8733, lat: 24.9779 }
    ]
  },
  {
    id: 7, label: 'G7', city: 'Luxor W', date: '18 ott', fullDate: '18 ottobre 2026',
    treatment: 'Soft All Inclusive a bordo',
    mapCenter: [32.61, 25.73], zoom: 12,
    highlight: 'La Valle dei Re: 63 tombe reali scavate nella roccia. Tra cui quella di Tutankhamon.',
    activities: [
      { icon: '🏛️', name: 'Valle dei Re', desc: '63 tombe dei faraoni del Nuovo Regno — accesso con guida' },
      { icon: '🏛️', name: 'Deir el-Bahari', desc: 'Tempio funerario della regina Hatshepsut, la faraona' },
      { icon: '🗿', name: 'Colossi di Memnone', desc: 'Due statue monumentali da 18 metri — simbolo della sponda ovest' },
      { icon: '🍽️', name: 'Pranzo a bordo', desc: 'Rientro in motonave per il pranzo' },
      { icon: '🌅', name: 'Pomeriggio libero', desc: 'Relax o escursione facoltativa' }
    ],
    freeTime: [
      { name: 'Pallone aerostatico all\'alba', tip: 'Vista sulla Valle dei Re dall\'alto — prenotare con giorni di anticipo, 70-120 USD' },
      { name: 'Tomba di Nefertari (Valle delle Regine)', tip: 'La tomba più bella d\'Egitto — ticket extra limitato' },
      { name: 'Bazaar di Luxor', tip: 'Sharia al-Souk: papiri, alabastro, stoffe — prezzi trattabili' }
    ],
    poi: [
      { id: 'valley_kings', name: 'Valle dei Re', type: 'site', lng: 32.6014, lat: 25.7402 },
      { id: 'hatshepsut', name: 'Tempio di Hatshepsut', type: 'site', lng: 32.6069, lat: 25.7375 },
      { id: 'memnon', name: 'Colossi di Memnone', type: 'site', lng: 32.6101, lat: 25.7206 }
    ]
  },
  {
    id: 8, label: 'G8', city: 'Luxor', date: '19 ott', fullDate: '19 ottobre 2026',
    treatment: 'Pranzo a bordo incluso',
    mapCenter: [32.64, 25.71], zoom: 12,
    highlight: 'Il gran finale: Karnak, il complesso templare più grande del mondo, saluta Michele e Carlotta.',
    activities: [
      { icon: '🏛️', name: 'Tempio di Karnak', desc: 'Il più grande complesso templare del mondo — costruito su 2.000 anni' },
      { icon: '🏛️', name: 'Tempio di Luxor', desc: 'Tempio dell\'Harem Segreto di Opet — collegato a Karnak dall\'Allee delle Sfingi' },
      { icon: '🍽️', name: 'Pranzo a bordo', desc: 'Ultimo pranzo sulla motonave' },
      { icon: '🚌', name: 'Transfer aeroporto', desc: 'Trasferimento all\'aeroporto di Luxor' },
      { icon: '✈️', name: 'Volo Luxor→Malpensa', desc: 'Neos N°1425, 15:10 → arrivo MXP 18:55' }
    ],
    freeTime: [
      { name: 'Luxor Temple by Night', tip: 'Se si ha tempo mattutino — illuminazione serale (18-22): visita separata' },
      { name: 'Avenue degli Sfingi (3 km)', tip: 'Passeggiata storica che collega Karnak a Luxor — percorribile la mattina' },
      { name: 'Corniche di Luxor', tip: 'Ultima passeggiata lungofiume prima del volo — colazione con vista Nilo' }
    ],
    poi: [
      { id: 'karnak', name: 'Tempio di Karnak', type: 'site', lng: 32.6573, lat: 25.7189 },
      { id: 'luxor_temple', name: 'Tempio di Luxor', type: 'site', lng: 32.6391, lat: 25.6997 },
      { id: 'luxor_apt', name: 'Aeroporto di Luxor', type: 'airport', lng: 32.7066, lat: 25.6710 }
    ]
  }
];

/* ── POI icon map ── */
function poiEmoji(type) {
  const map = { airport: '✈️', hotel: '🏨', site: '🏛️', museum: '🏛️', market: '🛒', ship: '🚢', feluca: '⛵' };
  return map[type] || '📍';
}

/* ── Countdown ── */
function initCountdown() {
  const target = new Date('2026-10-12T07:30:00+02:00').getTime();
  function update() {
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hours').textContent = '00';
      document.getElementById('cd-mins').textContent = '00';
      document.getElementById('cd-secs').textContent = '00';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
    document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
    document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
    document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

/* ── Scroll reveal ── */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => observer.observe(el));
}

/* ── Navbar ── */
function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

/* ── Hero parallax ── */
function initHero() {
  const bg = document.querySelector('.hero-bg');
  document.getElementById('hero').classList.add('loaded');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (bg) bg.style.transform = `scale(1) translateY(${y * 0.25}px)`;
  }, { passive: true });
}

/* ── Day info panel ── */
function renderDayPanel(dayId) {
  const day = DAYS.find(d => d.id === dayId);
  if (!day) return;

  const panel = document.getElementById('day-info-panel');
  const freeHtml = day.freeTime.length > 0 ? `
    <div class="free-time-section">
      <h4>⭐ Tempo Libero</h4>
      <div class="free-time-cards">
        ${day.freeTime.map(ft => `
          <div class="free-time-card">
            <div class="ft-name">${ft.name}</div>
            <div class="ft-tip">${ft.tip}</div>
          </div>
        `).join('')}
      </div>
    </div>` : '';

  panel.innerHTML = `
    <div class="day-info-header">
      <div>
        <div class="day-info-title">Giorno ${day.id} — ${day.city}</div>
        <div class="day-info-date">${day.fullDate}</div>
      </div>
      <div class="day-info-badge">${day.treatment}</div>
    </div>
    <div class="day-info-activities">
      ${day.activities.map(a => `
        <div class="activity-item">
          <div class="activity-icon">${a.icon}</div>
          <div class="activity-text">
            <strong>${a.name}</strong>
            <span>${a.desc}</span>
          </div>
        </div>
      `).join('')}
    </div>
    <div class="day-info-highlight">${day.highlight}</div>
    ${freeHtml}
  `;
}

/* ── Mapbox map ── */
let map = null;
let activeMarkers = [];

function clearMarkers() {
  activeMarkers.forEach(m => m.remove());
  activeMarkers = [];
}

function initMap() {
  const container = document.getElementById('map');
  if (!container) return;

  mapboxgl.accessToken = MAPBOX_TOKEN;
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/outdoors-v12',
    center: [31.0, 26.8],
    zoom: 5,
    projection: 'globe'
  });

  map.addControl(new mapboxgl.NavigationControl(), 'top-right');

  map.on('load', () => {
    selectDay(1);
  });
}

function selectDay(dayId) {
  // Update buttons
  document.querySelectorAll('.day-btn').forEach(btn => {
    btn.classList.toggle('active', parseInt(btn.dataset.day) === dayId);
  });

  // Update info panel
  renderDayPanel(dayId);

  const day = DAYS.find(d => d.id === dayId);
  if (!day) return;

  // Map: fly and show POI
  if (map) {
    clearMarkers();
    map.flyTo({ center: day.mapCenter, zoom: day.zoom, duration: 1200, essential: true });
    day.poi.forEach(poi => {
      const el = document.createElement('div');
      el.style.cssText = `
        width:36px; height:36px; border-radius:50%;
        background:white; border:2.5px solid #C9A84C;
        display:flex; align-items:center; justify-content:center;
        font-size:16px; cursor:pointer; box-shadow:0 2px 12px rgba(0,0,0,0.2);
        transition:transform 0.2s;
      `;
      el.textContent = poiEmoji(poi.type);
      el.title = poi.name;
      el.addEventListener('mouseenter', () => el.style.transform = 'scale(1.2)');
      el.addEventListener('mouseleave', () => el.style.transform = 'scale(1)');

      const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
        .setHTML(`<strong style="font-size:13px">${poi.name}</strong>`);

      const marker = new mapboxgl.Marker(el)
        .setLngLat([poi.lng, poi.lat])
        .setPopup(popup)
        .addTo(map);
      activeMarkers.push(marker);
    });
  }
}

/* ── Stat counter animation ── */
function animateStats() {
  const stats = document.querySelectorAll('.stat-num[data-target]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      const duration = 1500;
      const start = performance.now();
      function tick(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach(el => observer.observe(el));
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initReveal();
  initNavbar();
  initHero();
  animateStats();

  // Day selector clicks
  document.querySelectorAll('.day-btn').forEach(btn => {
    btn.addEventListener('click', () => selectDay(parseInt(btn.dataset.day)));
  });

  // Render initial day panel (no map yet)
  renderDayPanel(1);

  // Init map (Mapbox script loaded async in HTML)
  if (typeof mapboxgl !== 'undefined') {
    initMap();
  }
});
