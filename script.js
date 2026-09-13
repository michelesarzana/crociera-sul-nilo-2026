/* =============================================================
   CROCIERA SUL NILO 2026 — script.js v4
   ============================================================= */

/* ── Mapbox token ── */
const _t1 = 'pk.eyJ1IjoiZGVhZG1hbndyaXRpbmciLCJhIjoiY210em5pejI3MHFrYjJ5cXU5Z2R5dmV3MSJ9';
const _t2 = '.5XFt2TNX41CnKe6JX7ptHQ';
const MAPBOX_TOKEN = _t1 + _t2;

/* ── Day data ── */
const DAYS = [
  {
    id: 1, label: 'G1', city: 'Cairo', date: '12 ott', fullDate: '12 ottobre 2026',
    treatment: 'Cena in hotel',
    mapCenter: [31.35, 30.06], zoom: 10,
    highlight: 'Primo contatto con l\'Egitto: l\'imponente Cairo ti accoglie dopo circa 4 ore di volo da Malpensa.',
    activities: [
      { icon: '✈️', name: 'Partenza Malpensa 07:30', desc: 'Volo Neos N°1424' },
      { icon: '🛬', name: 'Arrivo Cairo 12:20', desc: 'Atterraggio Cairo International Airport' },
      { icon: '🏨', name: 'Check-in Waldorf Astoria', desc: 'Waldorf Astoria Cairo Heliopolis' },
      { icon: '🌆', name: 'Pomeriggio libero Heliopolis', desc: 'Prima esplorazione del quartiere' },
      { icon: '🍽️', name: 'Cena in hotel', desc: 'Ristoranti del Waldorf Astoria' }
    ],
    poi: [
      { id: 'mxp', name: 'Malpensa (MXP)', type: 'airport', lng: 8.7232, lat: 45.6301 },
      { id: 'cai', name: 'Cairo Airport', type: 'airport', lng: 31.4056, lat: 30.1219 },
      { id: 'waldorf', name: 'Waldorf Astoria Cairo', type: 'hotel', lng: 31.3227, lat: 30.0910 }
    ]
  },
  {
    id: 2, label: 'G2', city: 'Giza & Saqqara', date: '13 ott', fullDate: '13 ottobre 2026',
    treatment: 'Pensione completa',
    mapCenter: [31.16, 29.98], zoom: 12,
    highlight: 'Le Sette Meraviglie del Mondo ti aspettano: le Piramidi di Giza, la Sfinge e la prima piramide della storia a Saqqara.',
    activities: [
      { icon: '🏛️', name: 'Memphis / Mit Rahina', desc: 'Antica capitale del Basso Egitto, Colosso di Ramses II' },
      { icon: '🏛️', name: 'Sakkara — Piramide Djoser', desc: 'La prima piramide della storia, circa 2650 a.C.' },
      { icon: '🍽️', name: 'Pranzo locale', desc: 'Ristorante locale tipico' },
      { icon: '🏛️', name: 'Piramidi di Giza + Sfinge', desc: 'Le tre piramidi + la Grande Sfinge (Patrimonio UNESCO)' },
      { icon: '🏛️', name: 'Museo del Papiro', desc: 'Dimostrazione della lavorazione tradizionale del papiro' }
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
    highlight: 'Il Grand Egyptian Museum con il tesoro completo di Tutankhamon: mai esposto così in 3.000 anni. Poi la Cittadella e il bazaar medievale.',
    activities: [
      { icon: '🏛️', name: 'Grand Egyptian Museum (GEM)', desc: 'Tesoro di Tutankhamon + 100.000 reperti' },
      { icon: '🍽️', name: 'Pranzo', desc: 'Pranzo incluso' },
      { icon: '🏰', name: 'Cittadella di Saladino', desc: 'Fortezza medievale con vista panoramica sul Cairo' },
      { icon: '🕌', name: 'Moschea Mohamed Alì', desc: 'La "Moschea d\'Alabastro" — capolavoro ottomano' },
      { icon: '🛒', name: 'Khan el Khalili', desc: 'Il bazaar storico del Cairo islamico dal 1382' }
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
    mapCenter: [31.63, 22.34], zoom: 13,
    highlight: 'I templi di Ramesse II e Nefertari ad Abu Simbel: trasferiti pietra per pietra dall\'UNESCO per salvarli dalle acque del lago Nasser.',
    activities: [
      { icon: '✈️', name: 'Volo Cairo→Aswan', desc: 'Volo interno' },
      { icon: '🚌', name: 'Pullman Aswan→Abu Simbel', desc: '280km verso il confine sudanese' },
      { icon: '🏨', name: 'Check-in Hotel Seti Abu Simbel', desc: 'Hotel fronte lago Nasser' },
      { icon: '🏛️', name: 'Templi di Abu Simbel', desc: 'Grande Tempio di Ramesse II + Piccolo Tempio di Nefertari' },
      { icon: '🎭', name: 'Spettacolo Suoni e Luci', desc: 'Sound & Light Show serale sui templi' }
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
    highlight: 'Imbarco sulla motonave (Gemma o Nile Monarch): il Nilo diventa casa per tre notti. Tempio di Philae e la magia di una feluca al tramonto.',
    activities: [
      { icon: '🚌', name: 'Abu Simbel→Aswan', desc: 'Rientro ad Aswan in pullman' },
      { icon: '🏛️', name: 'Alta Diga di Aswan', desc: 'Una delle grandi opere ingegneristiche del XX secolo' },
      { icon: '🚢', name: 'Imbarco motonave (Gemma o Nile Monarch)', desc: 'Check-in a bordo sul Nilo' },
      { icon: '🍽️', name: 'Pranzo a bordo', desc: 'Prima di tanti pasti con vista sul Nilo' },
      { icon: '🏛️', name: 'Tempio di File (Philae)', desc: 'Trasferita dall\'UNESCO pietra per pietra — ultime iscrizioni geroglifiche' },
      { icon: '⛵', name: 'Feluca al tramonto', desc: 'Navigazione tradizionale tra le rapide del Nilo' }
    ],
    poi: [
      { id: 'dam', name: 'Alta Diga di Aswan', type: 'site', lng: 32.8677, lat: 23.9700 },
      { id: 'philae', name: 'Tempio di File (Philae)', type: 'site', lng: 32.8846, lat: 24.0268 },
      { id: 'nile_ship', name: 'Imbarco Motonave Aswan (Gemma / Nile Monarch)', type: 'ship', lng: 32.8998, lat: 24.0889 }
    ]
  },
  {
    id: 6, label: 'G6', city: 'Navigazione Nilo', date: '17 ott', fullDate: '17 ottobre 2026',
    treatment: 'Soft All Inclusive a bordo',
    mapCenter: [32.87, 24.70], zoom: 9,
    highlight: 'Navigazione sul Nilo tra i templi di Kom Ombo e Edfu — il meglio conservato d\'Egitto, scoperto nel 1800 sotto la sabbia.',
    activities: [
      { icon: '🚢', name: 'Navigazione sul Nilo (Gemma / Nile Monarch)', desc: 'Da Aswan verso nord, paesaggi desertici e oasi' },
      { icon: '🏛️', name: 'Tempio di Kom Ombo', desc: 'Unico tempio doppio d\'Egitto: Sobek e Haroeris + Museo dei Coccodrilli' },
      { icon: '🏛️', name: 'Tempio di Edfu', desc: 'Il tempio meglio conservato d\'Egitto, scoperto nel 1800 sotto la sabbia' },
      { icon: '⚓', name: 'Arrivo a Luxor', desc: 'Ormeggio serale sulla sponda est del Nilo' },
      { icon: '🍽️', name: 'Cena a bordo', desc: 'Con vista sui templi illuminati' }
    ],
    poi: [
      { id: 'kom_ombo', name: 'Tempio di Kom Ombo', type: 'site', lng: 32.9284, lat: 24.4522 },
      { id: 'edfu', name: 'Tempio di Edfu', type: 'site', lng: 32.8733, lat: 24.9779 }
    ]
  },
  {
    id: 7, label: 'G7', city: 'Luxor Ovest', date: '18 ott', fullDate: '18 ottobre 2026',
    treatment: 'Soft All Inclusive a bordo',
    mapCenter: [32.61, 25.73], zoom: 12,
    highlight: 'La Valle dei Re: 63 tombe reali scavate nella roccia. Tra cui quella di Tutankhamon, scoperta intatta nel 1922.',
    activities: [
      { icon: '🏛️', name: 'Valle dei Re', desc: '63 tombe dei faraoni del Nuovo Regno — Tutankhamon inclusa' },
      { icon: '🏛️', name: 'Deir el-Bahari / Hatshepsut', desc: 'Tempio funerario della faraona Hatshepsut, 1479 a.C.' },
      { icon: '🗿', name: 'Colossi di Memnone', desc: 'Due statue monumentali da 18 metri — simbolo della sponda ovest' },
      { icon: '🍽️', name: 'Pranzo a bordo (Gemma / Nile Monarch)', desc: 'Rientro in motonave per il pranzo' },
      { icon: '🌅', name: 'Pomeriggio libero', desc: 'Relax o escursione facoltativa' }
    ],
    poi: [
      { id: 'valley_kings', name: 'Valle dei Re', type: 'site', lng: 32.6014, lat: 25.7402 },
      { id: 'hatshepsut', name: 'Tempio di Hatshepsut', type: 'site', lng: 32.6069, lat: 25.7375 },
      { id: 'memnon', name: 'Colossi di Memnone', type: 'site', lng: 32.6101, lat: 25.7206 }
    ]
  },
  {
    id: 8, label: 'G8', city: 'Luxor Est', date: '19 ott', fullDate: '19 ottobre 2026',
    treatment: 'Pranzo a bordo incluso',
    mapCenter: [32.64, 25.71], zoom: 13,
    highlight: 'Karnak: il più grande complesso templare del mondo, 2 km². Poi il Tempio di Luxor e il rientro a Milano.',
    activities: [
      { icon: '🏛️', name: 'Tempio di Karnak', desc: 'Il più grande complesso templare del mondo — costruito per 2000 anni' },
      { icon: '🏛️', name: 'Tempio di Luxor', desc: 'Il capolavoro di Amenhotep III e Ramesse II' },
      { icon: '🍽️', name: 'Pranzo a bordo', desc: 'Ultimo pranzo sul Nilo' },
      { icon: '🚌', name: 'Transfer aeroporto', desc: 'Trasferimento all\'aeroporto di Luxor' },
      { icon: '✈️', name: 'Volo Luxor→Malpensa 15:10', desc: 'Neos N°1425 — arrivo Milano 18:55' }
    ],
    poi: [
      { id: 'karnak', name: 'Tempio di Karnak', type: 'site', lng: 32.6573, lat: 25.7189 },
      { id: 'luxor_temple', name: 'Tempio di Luxor', type: 'site', lng: 32.6391, lat: 25.6997 },
      { id: 'luxor_apt', name: 'Aeroporto di Luxor', type: 'airport', lng: 32.7066, lat: 25.6712 }
    ]
  }
];

/* ── Extras by day ── */
const EXTRAS_BY_DAY = {
  1: [
    { name: 'Bar Raa Jazz', type: 'Nightlife', desc: 'Cocktail esclusivi e live jazz nel cuore di Heliopolis.', tip: 'Prenotare il tavolo — molto frequentato il weekend.', coords: [31.3300, 30.0900] },
    { name: 'Beirut Street Nightlife', type: 'Nightlife', desc: 'La movida del Cairo moderno tra bar e ristoranti libanesi.', tip: 'Attivo dalle 21 in poi.', coords: [31.2200, 30.0600] },
    { name: 'Koshari El Tahrir', type: 'Cibo', desc: 'Il piatto nazionale egiziano: pasta, lenticchie, riso, sugo piccante. Meno di 3 USD.', tip: 'Locale iconico in Piazza Tahrir.', coords: [31.2357, 30.0444], link: 'https://en.wikipedia.org/wiki/Kushari' }
  ],
  2: [
    { name: 'Piramidi di Dahshur', type: 'Cultura', desc: 'La Piramide Rossa e la Piramide Spezzata — meno turisti, atmosfera autentica.', tip: 'A 10 km da Saqqara, spesso deserto.', coords: [31.2084, 29.8083], link: 'https://it.wikipedia.org/wiki/Dahshur' },
    { name: 'Tramonto a Cavallo sul Plateau', type: 'Natura', desc: 'Giro a cavallo o cammello al tramonto con le piramidi sullo sfondo.', tip: 'Contrattare il prezzo prima: circa 20-30 USD.', coords: [31.1342, 29.9792] },
    { name: 'Vista Panoramica Sud', type: 'Natura', desc: 'Il viewpoint con le tre piramidi in fila — foto imperdibile al tramonto.', tip: 'Raggiungibile in 10 min dalla Sfinge.', coords: [31.1266, 29.9742] }
  ],
  3: [
    { name: 'Al-Muizz Street by Night', type: 'Cultura', desc: 'La via più bella della Cairo islamica illuminata di notte — UNESCO.', tip: 'Ore 19-22: atmosfera magica, meno caldo.', coords: [31.2603, 30.0512], link: 'https://it.wikipedia.org/wiki/Al-Mu%27izz_li-Din_Allah_Street' },
    { name: 'Caffè El-Fishawi', type: 'Cibo', desc: 'Il caffè più antico del Cairo, nel cuore di Khan el Khalili dal 1773.', tip: 'Ottima shisha e tè alla menta — non perderlo.', coords: [31.2621, 30.0472], link: 'https://en.wikipedia.org/wiki/El-Fishawy_Cafe' },
    { name: 'Cairo Food Tour', type: 'Cibo', desc: 'Tour culinario notturno tra i vicoli del bazaar con guida locale.', tip: 'Prenotabile su Viator, circa 35 USD a persona.', coords: [31.2625, 30.0477] }
  ],
  4: [
    { name: 'Sound & Light Show', type: 'Cultura', desc: 'Spettacolo suoni e luci serale sui templi di Abu Simbel — narrato in italiano.', tip: 'Ore 20:00, biglietto ~25 USD.', coords: [31.6258, 22.3372], link: 'https://it.wikipedia.org/wiki/Abu_Simbel' },
    { name: 'Alba ai Templi', type: 'Natura', desc: 'I templi alle 5:30 prima dell\'apertura ufficiale — luce dorata sul lago Nasser.', tip: 'Accordarsi con la guida la sera prima.', coords: [31.6258, 22.3372] },
    { name: 'Villaggio Nubiano Abu Simbel', type: 'Cultura', desc: 'Piccolo villaggio nubiano colorato vicino ai templi — artigianato locale.', tip: 'A piedi dai templi, 15 minuti.', coords: [31.6310, 22.3400], link: 'https://en.wikipedia.org/wiki/Nubian_people' }
  ],
  5: [
    { name: 'Villaggio Nubiano Suhail Island', type: 'Cultura', desc: 'Villaggio nubiano sull\'isola Suhail — case colorate, coccodrilli domestici, ospitalità.', tip: 'In feluca da Aswan, circa 20 min.', coords: [32.8846, 24.0450], link: 'https://en.wikipedia.org/wiki/Suhail_Island' },
    { name: 'Souk delle Spezie di Aswan', type: 'Shopping', desc: 'Mercato di spezie, profumi nubiani e stoffe colorate sul Corniche.', tip: 'Karkadè (ibisco secco) e vaniglia: ottimi souvenir.', coords: [32.8998, 24.0889] },
    { name: 'Cena Panoramica Corniche', type: 'Cibo', desc: 'Ristorante sul Corniche con vista sul Nilo e le isole di Aswan al tramonto.', tip: 'El-Masri Restaurant: pesce locale eccellente.', coords: [32.8998, 24.0889] }
  ],
  6: [
    { name: 'Museo dei Coccodrilli', type: 'Cultura', desc: 'Oltre 300 mummie di coccodrillo nel complesso di Kom Ombo — incluso nel biglietto.', tip: 'Non saltarlo: è raro e affascinante.', coords: [32.9284, 24.4522], link: 'https://it.wikipedia.org/wiki/Kom_Ombo' },
    { name: 'Aperitivo al Tramonto in Coperta', type: 'Nightlife', desc: 'Deck panoramico della motonave durante la navigazione notturna sul Nilo.', tip: 'Ora magica tra Kom Ombo e Edfu.', coords: [32.87, 24.70] },
    { name: 'Danza Nubiana a Bordo', type: 'Cultura', desc: 'Spettacolo di danza nubiana sulla motonave durante la navigazione.', tip: 'Spesso incluso nel programma serale — chiedere all\'accompagnatore.', coords: [32.87, 24.50] }
  ],
  7: [
    { name: 'Mongolfiera all\'Alba', type: 'Natura', desc: 'Volo in mongolfiera all\'alba sulla Valle dei Re — viste spettacolari.', tip: 'Prenotare con 2+ giorni di anticipo, 70-120 USD.', coords: [32.6014, 25.7402], link: 'https://en.wikipedia.org/wiki/Hot_air_ballooning_in_Luxor' },
    { name: 'Tombe dei Nobili', type: 'Cultura', desc: 'Le tombe dei visir e nobili dell\'antico Egitto — affreschi vivaci e meno turisti.', tip: 'Meno conosciute della Valle dei Re, imperdibili.', coords: [32.6074, 25.7267], link: 'https://en.wikipedia.org/wiki/Tombs_of_the_Nobles_(Luxor)' },
    { name: 'Pranzo a El-Gezira', type: 'Cibo', desc: 'Ristorante sull\'isola di Gezira con terrazza sul Nilo e cucina egiziana autentica.', tip: 'Pesce del Nilo e pane feteer.', coords: [32.6396, 25.6872] }
  ],
  8: [
    { name: 'Spettacolo Suoni e Luci Karnak', type: 'Cultura', desc: 'Sound & Light show serale tra le colonne del grande colonnato di Karnak.', tip: 'Se avete un volo il giorno dopo, ottimo per la sera.', coords: [32.6573, 25.7189], link: 'https://it.wikipedia.org/wiki/Karnak' },
    { name: 'Viale delle Sfingi', type: 'Cultura', desc: '3 km di sfingi criocefale che collegano Karnak a Luxor — percorribile a piedi.', tip: 'Meglio al mattino presto o al tramonto.', coords: [32.6481, 25.7094], link: 'https://en.wikipedia.org/wiki/Avenue_of_Sphinxes' },
    { name: 'Cena sul Nilo in Dahabeya', type: 'Cibo', desc: 'Barca a vela tradizionale egiziana con cena tipica e musica dal vivo.', tip: 'Prenotabile in hotel, circa 40 USD a persona.', coords: [32.6391, 25.6997] }
  ]
};

/* ── Itinerary line coordinates ── */
const ITINERARY_LINE_COORDS = [
  [31.2357, 30.0444],
  [31.6258, 22.3372],
  [32.8998, 23.9700],
  [32.9284, 24.4522],
  [32.8733, 24.9779],
  [32.6573, 25.7189]
];

/* ── Map state ── */
let map = null;
let layerVisibility = { official: true, extra: true };
let extraMarkers = [];
let officialMarkers = [];

/* ── renderDayPanel ── */
function renderDayPanel(dayId) {
  const panel = document.getElementById('day-info-panel');
  if (!panel) return;
  const day = DAYS.find(d => d.id === dayId);
  if (!day) return;

  const extras = EXTRAS_BY_DAY[dayId] || [];

  let extrasHTML = '';
  if (extras.length) {
    extrasHTML = '<div class="dip-extras-title">★ EXTRA CONSIGLIATI</div>';
    extras.forEach(function(e) {
      extrasHTML += '<div class="dip-extra-card">' +
        '<div class="dip-extra-type">' + (e.type || '') + '</div>' +
        '<div class="dip-extra-name">' + e.name + '</div>' +
        '<div class="dip-extra-desc">' + (e.desc || '') + '</div>' +
        '<div class="dip-extra-tip">💡 ' + (e.tip || '') + '</div>' +
        (e.link ? '<a href="' + e.link + '" target="_blank" rel="noopener" class="dip-extra-link">→ Approfondisci</a>' : '') +
        '</div>';
    });
  }

  let activitiesHTML = '<div class="dip-activities">';
  day.activities.forEach(function(a) {
    activitiesHTML += '<div class="dip-activity">' +
      '<span class="dip-activity-icon">' + a.icon + '</span>' +
      '<div><strong>' + a.name + '</strong><span>' + a.desc + '</span></div>' +
      '</div>';
  });
  activitiesHTML += '</div>';

  panel.innerHTML =
    '<div class="dip-header">' +
      '<div>' +
        '<div class="dip-title">Giorno ' + day.id + ' — ' + day.city + '</div>' +
        '<div class="dip-date">' + day.fullDate + '</div>' +
      '</div>' +
      '<div class="dip-badge">' + day.treatment + '</div>' +
    '</div>' +
    '<div class="dip-highlight">' + day.highlight + '</div>' +
    activitiesHTML +
    extrasHTML;
}

/* ── initParallax ── */
function initParallax() {
  var dividers = document.querySelectorAll('.parallax-divider');
  if (!dividers.length) return;
  function updateParallax() {
    dividers.forEach(function(div) {
      var img = div.querySelector('.parallax-img');
      if (!img) return;
      var rect = div.getBoundingClientRect();
      var vh = window.innerHeight;
      if (rect.bottom < 0 || rect.top > vh) return;
      var progress = (vh - rect.top) / (vh + rect.height);
      var offset = (progress - 0.5) * 80;
      img.style.transform = 'translateY(' + offset + 'px)';
    });
  }
  window.addEventListener('scroll', updateParallax, { passive: true });
  updateParallax();
}

/* ── initLive ── */
function initLive() {
  var sub = document.querySelector('.live-subtitle');
  if (!sub) return;
  var now = new Date();
  var start = new Date('2026-10-12');
  var end = new Date('2026-10-19');
  if (now >= start && now <= end) {
    sub.textContent = '🔴 Il viaggio è in corso — foto in aggiornamento';
  } else if (now > end) {
    sub.textContent = '✓ Viaggio completato · Ottobre 2026 · Tutti i ricordi';
  } else {
    var diff = Math.ceil((start - now) / (1000 * 60 * 60 * 24));
    sub.textContent = 'Le foto arriveranno durante il viaggio · ' + diff + ' giorni al via';
  }
}

/* ── poiEmoji helper ── */
function poiEmoji(type) {
  var map = { airport: '✈️', hotel: '🏨', site: '🏛️', museum: '🏺', market: '🛒', ship: '⚓' };
  return map[type] || '📍';
}

/* ── initMap ── */
function initMap() {
  if (!MAPBOX_TOKEN || typeof mapboxgl === 'undefined') return;
  mapboxgl.accessToken = MAPBOX_TOKEN;

  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v11',
    center: [29, 26],
    zoom: 5,
    attributionControl: false
  });

  map.addControl(new mapboxgl.NavigationControl({ showCompass: false }), 'top-right');
  map.addControl(new mapboxgl.AttributionControl({ compact: true }));

  map.on('load', function() {
    // Itinerary line
    map.addSource('itinerary', {
      type: 'geojson',
      data: {
        type: 'Feature',
        geometry: { type: 'LineString', coordinates: ITINERARY_LINE_COORDS }
      }
    });
    map.addLayer({
      id: 'itinerary-line',
      type: 'line',
      source: 'itinerary',
      layout: { 'line-join': 'round', 'line-cap': 'round' },
      paint: { 'line-color': '#C8973A', 'line-width': 2.5, 'line-dasharray': [2, 3] }
    });

    // Official POI markers
    DAYS.forEach(function(day) {
      day.poi.forEach(function(poi) {
        var el = document.createElement('div');
        el.style.cssText = 'width:34px;height:34px;border-radius:50%;background:white;border:2.5px solid #C8973A;display:flex;align-items:center;justify-content:center;font-size:15px;cursor:pointer;box-shadow:0 2px 12px rgba(0,0,0,0.18);transition:box-shadow 0.2s,border-color 0.2s;position:relative;z-index:2';
        el.textContent = poiEmoji(poi.type);
        el.title = poi.name;
        el.addEventListener('mouseenter', function() { el.style.boxShadow = '0 4px 20px rgba(200,151,58,0.6)'; el.style.borderColor = '#C8973A'; });
        el.addEventListener('mouseleave', function() { el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.18)'; });
        el.addEventListener('click', function() {
          new mapboxgl.Popup({ offset: 20, closeButton: true })
            .setHTML('<div class="map-popup"><div class="map-popup-name">' + poi.name + '</div><a href="#day-' + day.id + '" class="map-popup-link">Vedi Giorno ' + day.id + ' →</a></div>')
            .setLngLat([poi.lng, poi.lat])
            .addTo(map);
        });
        var marker = new mapboxgl.Marker({ element: el, anchor: 'center' }).setLngLat([poi.lng, poi.lat]).addTo(map);
        officialMarkers.push(marker);
      });
    });

    // Extra markers (teal diamonds)
    Object.keys(EXTRAS_BY_DAY).forEach(function(dayId) {
      var extras = EXTRAS_BY_DAY[dayId];
      extras.forEach(function(extra) {
        var wrapper = document.createElement('div');
        wrapper.style.cssText = 'width:28px;height:28px;display:flex;align-items:center;justify-content:center;cursor:pointer;position:relative;z-index:1;pointer-events:all';
        var diamond = document.createElement('div');
        diamond.style.cssText = 'width:18px;height:18px;background:#2A7B8C;transform:rotate(45deg);border:2px solid #FAF8F3;box-shadow:0 2px 8px rgba(42,123,140,0.4);transition:transform 0.2s';
        wrapper.appendChild(diamond);
        wrapper.addEventListener('mouseenter', function() { diamond.style.transform = 'rotate(45deg) scale(1.3)'; });
        wrapper.addEventListener('mouseleave', function() { diamond.style.transform = 'rotate(45deg) scale(1)'; });
        wrapper.addEventListener('click', function() {
          new mapboxgl.Popup({ offset: 20, closeButton: true })
            .setHTML('<div class="map-popup">' +
              '<div class="map-popup-name">' + extra.name + '</div>' +
              '<div style="font-size:11px;color:#8B7355;margin-top:2px">' + (extra.type || '') + '</div>' +
              (extra.link ? '<a href="' + extra.link + '" target="_blank" rel="noopener" class="map-popup-link">Approfondisci →</a>' : '') +
              '<a href="#day-' + dayId + '" class="map-popup-link">Vedi Giorno ' + dayId + ' →</a>' +
              '</div>')
            .setLngLat(extra.coords)
            .addTo(map);
        });
        var marker = new mapboxgl.Marker({ element: wrapper, anchor: 'center' }).setLngLat(extra.coords).addTo(map);
        extraMarkers.push(marker);
      });
    });

    // Fit to Egypt
    map.fitBounds([[24.5, 21.8], [33.5, 31.5]], { padding: 40, duration: 1200 });
  });

  initMapFilters();
}

/* ── initMapFilters ── */
function initMapFilters() {
  document.querySelectorAll('.filter-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var type = btn.dataset.filter;
      btn.classList.toggle('active');
      if (type === 'official') {
        layerVisibility.official = btn.classList.contains('active');
        officialMarkers.forEach(function(m) {
          m.getElement().style.display = layerVisibility.official ? '' : 'none';
        });
      } else if (type === 'extra') {
        layerVisibility.extra = btn.classList.contains('active');
        extraMarkers.forEach(function(m) {
          m.getElement().style.display = layerVisibility.extra ? '' : 'none';
        });
      }
    });
  });
}

/* ── selectDay ── */
function selectDay(dayId) {
  document.querySelectorAll('.day-btn').forEach(function(btn) {
    btn.classList.toggle('active', parseInt(btn.dataset.day) === dayId);
  });
  renderDayPanel(dayId);
  var day = DAYS.find(function(d) { return d.id === dayId; });
  if (!day) return;
  if (map) {
    map.flyTo({ center: day.mapCenter, zoom: day.zoom, duration: 1200, essential: true });
  }
}

/* ── initReveal ── */
function initReveal() {
  var els = document.querySelectorAll('.reveal');
  if (!els.length) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(function(el) { obs.observe(el); });
}

/* ── initNavbar ── */
function initNavbar() {
  var navbar = document.getElementById('navbar');
  if (!navbar) return;
  function onScroll() {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* ── initHero ── */
function initHero() {
  var hero = document.getElementById('hero');
  if (!hero) return;
  setTimeout(function() { hero.classList.add('loaded'); }, 100);

  var bg = hero.querySelector('.hero-bg');
  if (!bg) return;
  function heroParallax() {
    var scrollY = window.scrollY;
    var offset = scrollY * 0.3;
    bg.style.transform = 'translateY(' + offset + 'px)';
  }
  window.addEventListener('scroll', heroParallax, { passive: true });
}

/* ── animateStats ── */
function animateStats() {
  var stats = document.querySelectorAll('.stat-pill-value[data-target]');
  if (!stats.length) return;
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      var target = parseInt(el.dataset.target);
      var suffix = el.dataset.suffix || '';
      var duration = 1500;
      var start = performance.now();
      function tick(now) {
        var elapsed = now - start;
        var progress = Math.min(elapsed / duration, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  stats.forEach(function(el) { obs.observe(el); });
}

/* ── DOMContentLoaded ── */
document.addEventListener('DOMContentLoaded', function() {
  initReveal();
  initNavbar();
  initHero();
  initParallax();
  initLive();
  animateStats();

  document.querySelectorAll('.day-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      selectDay(parseInt(btn.dataset.day));
    });
  });

  renderDayPanel(1);

  if (typeof mapboxgl !== 'undefined') {
    initMap();
  } else {
    var checkMapbox = setInterval(function() {
      if (typeof mapboxgl !== 'undefined') {
        clearInterval(checkMapbox);
        initMap();
      }
    }, 200);
  }
});
