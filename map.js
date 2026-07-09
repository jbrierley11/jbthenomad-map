// ─── Region definitions ────────────────────────────────────────────────────
const regions = {
  "North America": {
    countries: ["United States", "Canada", "Mexico", "Bahamas"],
    visited: true,
    bounds: [[-140, 14], [-52, 70]]
  },
  "Central America & Caribbean": {
    countries: ["Guatemala", "El Salvador", "Honduras", "Nicaragua", "Costa Rica", "Panama", "Dominican Republic", "Jamaica", "Cuba"],
    visited: true,
    bounds: [[-92, 7], [-64, 26]]
  },
  "South America": {
    countries: ["Brazil", "Chile", "Argentina", "Peru", "Colombia", "Ecuador", "Bolivia", "Uruguay"],
    visited: true,
    bounds: [[-82, -56], [-32, 13]]
  },
  "Africa": {
    countries: ["Morocco", "Tunisia", "Egypt", "Mauritania", "Senegal", "Cabo Verde", "Somalia", "Ethiopia", "Kenya", "Tanzania", "Namibia", "South Africa"],
    visited: true,
    bounds: [[-18, -36], [52, 38]]
  },
  "Europe": {
    countries: ["Ireland", "United Kingdom", "Portugal", "Spain", "Andorra", "France", "Monaco", "Italy", "Vatican City", "Malta", "Germany", "Czechia", "Austria", "Hungary", "Netherlands", "Romania", "Moldova", "Bulgaria", "Serbia", "Albania", "Norway", "Greece", "Türkiye"],
    visited: true,
    bounds: [[-11, 34], [42, 72]]
  },
  "West/Central Asia": {
    countries: ["UAE", "Bahrain", "Qatar", "Saudi Arabia", "Yemen", "Oman", "Jordan", "Lebanon", "Syria", "Maldives", "Afghanistan", "Pakistan", "Kyrgyzstan", "Kazakhstan"],
    visited: true,
    bounds: [[24, 0], [90, 52]]
  },
  "East/Southeast Asia": {
    countries: ["Japan", "India", "Thailand"],
    visited: true,
    bounds: [[68, 4], [148, 52]]
  },
  "Oceania": {
    countries: ["Australia", "New Zealand", "Fiji", "Papua New Guinea"],
    visited: false,
    bounds: [[113, -47], [179, -8]]
  }
};
 
// ─── State-level data (USA + Brasil) ──────────────────────────────────────
// Each country with states has: states[stateName] = { desc, photos, year, pins[] }
// GeoJSON loaded on demand when country is selected.
const countryStates = {
  "United States": {
    geoJsonUrl: "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json",
    type: "topojson",
    objectName: "states",
    idField: "numeric", // FIPS codes
    nameMap: {
      "12": "Florida", "23": "Maine", "22": "Louisiana", "36": "New York"
    },
    states: {
      "Florida": {
        desc: "South Florida's light is unlike anywhere else — the way it bleeds gold across the Atlantic at dusk, Deerfield Beach empty before the crowds arrive.",
        photos: 87, year: 2022,
        pins: [
          { name: "Deerfield Beach", coords: [-80.1242, 26.3184], desc: "Early morning light on the pier, pelicans, and a beach that still feels local." }
        ]
      },
      "Maine": {
        desc: "Acadia in October when the crowds leave — fog rolling through Bar Harbor, the carriage roads carpeted in red and gold.",
        photos: 64, year: 2021,
        pins: [
          { name: "Acadia NP", coords: [-68.2733, 44.3386], desc: "Cadillac Mountain at first light, the first place in the US to see the sunrise." }
        ]
      },
      "Louisiana": {
        desc: "New Orleans doesn't perform for tourists — it simply is, at all hours, in all its contradiction of beauty and decay.",
        photos: 112, year: 2023,
        pins: [
          { name: "New Orleans", coords: [-90.0715, 29.9511], desc: "The French Quarter at 6am, before the city wakes — the most photogenic silence." }
        ]
      },
      "New York": {
        desc: "New York City at every hour yields a different city — the light on the bridges, the steam rising from the streets, the faces in the subway.",
        photos: 203, year: 2019,
        pins: [
          { name: "New York City", coords: [-74.0060, 40.7128], desc: "Eight million stories compressed into one vertical island." }
        ]
      }
    }
  },
  "Brazil": {
    geoJsonUrl: "https://jbrierley11.github.io/jbthenomad-map/brazil-states.json",
    type: "geojson",
    nameProperty: "geometry_name",
    visitedStates: ["Maranhão", "Ceará", "Rio de Janeiro", "Amazonas"],
    states: {
      "Maranhão": {
        desc: "Lençóis Maranhenses is one of earth's great visual paradoxes — a desert of white dunes filled each rainy season with crystalline lagoons.",
        photos: 78, year: 2023,
        pins: [
          { name: "Lençóis Maranhenses", coords: [-43.1167, -2.5833], desc: "White dunes filled with seasonal lagoons — surreal and still largely undiscovered." }
        ]
      },
      "Ceará": {
        desc: "The northeast coast at its most raw — Jericoacoara's sand streets and Preá's kite-filled skies, all under a light that makes every frame sing.",
        photos: 134, year: 2023,
        pins: [
          { name: "Fortaleza", coords: [-38.5434, -3.7172], desc: "The gateway to Brazil's northeast — frenetic, colourful, alive." },
          { name: "Jericoacoara", coords: [-40.5128, -2.7975], desc: "A car-free village buried in dunes at the edge of the world." },
          { name: "Preá", coords: [-40.4667, -2.7500], desc: "Kitesurfers threading between dunes and lagoons in constant wind." }
        ]
      },
      "Rio de Janeiro": {
        desc: "Rio is geography as destiny — mountains, ocean, and a city wedged gloriously between them, making beauty impossible to ignore.",
        photos: 156, year: 2023,
        pins: [
          { name: "Rio de Janeiro", coords: [-43.1729, -22.9068], desc: "Christ the Redeemer above the clouds, and the city sprawling below in every direction." }
        ]
      },
      "Amazonas": {
        desc: "The Amazon basin from the water — the scale of it only becomes real when your boat disappears into the green and the trees close behind you.",
        photos: 89, year: 2023,
        pins: [
          { name: "Amazon Basin", coords: [-60.0000, -3.0000], desc: "The lungs of the earth — overwhelming in its density, its sound, its life." }
        ]
      }
    }
  }
};
 
// ─── Country data ──────────────────────────────────────────────────────────
const visitedCountries = {
 
  // ── North America ──
  "United States": {
    label: "North America",
    desc: "Four states across the eastern seaboard and Deep South — America's contradictions rendered in landscape, light, and the spaces between cities.",
    photos: 466, regions: 4, year: 2019, hasStates: true, pins: []
  },
  "Canada": {
    label: "North America",
    desc: "Rocky Mountain grandeur and cities built at the edge of wilderness — Canada is scale without ego.",
    photos: 98, regions: 2, year: 2021,
    pins: [{ name: "Banff", coords: [-115.5708, 51.1784], desc: "Turquoise lakes cradled by glacier-carved peaks" }]
  },
  "Mexico": {
    label: "North America",
    desc: "Colonial silver cities and Pacific coastlines — Mexico rewards the traveller who ventures past the obvious.",
    photos: 143, regions: 3, year: 2018,
    pins: [
      { name: "Oaxaca", coords: [-96.7266, 17.0732], desc: "Mezcal, mole, and a city that moves at its own pace" },
      { name: "Mexico City", coords: [-99.1332, 19.4326], desc: "One of the great megalopolises, endlessly layered" }
    ]
  },
  "Bahamas": {
    label: "North America",
    desc: "Waters so clear they read as colour fields from above — the Bahamas is light and sea at their most elemental.",
    photos: 54, regions: 1, year: 2022,
    pins: [{ name: "Nassau", coords: [-77.3504, 25.0443], desc: "Pastel facades and the clearest harbour water" }]
  },
 
  // ── Central America & Caribbean ──
  "Dominican Republic": {
    label: "Central America & Caribbean",
    desc: "Beyond the all-inclusives, the DR holds colonial Santo Domingo and mountain roads that feel genuinely remote.",
    photos: 76, regions: 2, year: 2020,
    pins: [{ name: "Santo Domingo", coords: [-69.9312, 18.4861], desc: "The oldest European city in the Americas" }]
  },
  "Jamaica": {
    label: "Central America & Caribbean",
    desc: "Blue Mountains above the clouds and coastline that pulses with sound — Jamaica is all rhythm and green.",
    photos: 63, regions: 2, year: 2021,
    pins: [{ name: "Blue Mountains", coords: [-76.5833, 18.0500], desc: "Cloud forest trails above the best coffee on earth" }]
  },
  "Cuba": {
    label: "Central America & Caribbean",
    desc: "Havana's crumbling baroque beauty and Viñales valley tobacco fields — Cuba is a time capsule refusing to open.",
    photos: 0, regions: 0, year: 0, pins: []
  },
  "Guatemala": {
    label: "Central America & Caribbean",
    desc: "Antigua's cobbled streets ringed by volcanoes and Lake Atitlán at dawn — Guatemala is the most photogenic corner of Central America.",
    photos: 88, regions: 2, year: 2019,
    pins: [
      { name: "Antigua", coords: [-90.7340, 14.5586], desc: "Baroque ruins framed by Volcán Agua" },
      { name: "Lake Atitlán", coords: [-91.1897, 14.6891], desc: "A crater lake ringed by Maya villages and perfect volcanoes" }
    ]
  },
  "El Salvador": {
    label: "Central America & Caribbean",
    desc: "Surf breaks and volcano craters — El Salvador is Central America's smallest country and one of its most overlooked.",
    photos: 42, regions: 1, year: 2019,
    pins: [{ name: "Santa Ana Volcano", coords: [-89.6306, 13.8528], desc: "An acid crater lake glowing jade at the summit" }]
  },
  "Honduras": {
    label: "Central America & Caribbean",
    desc: "The Bay Islands' reef systems and Copán's intricate Maya carvings — Honduras holds treasures most travellers skip.",
    photos: 55, regions: 2, year: 2019,
    pins: [{ name: "Copán Ruinas", coords: [-89.1425, 14.8384], desc: "The most elaborately carved of all Maya sites" }]
  },
  "Nicaragua": {
    label: "Central America & Caribbean",
    desc: "Granada's lake-facing colonial quarter and volcano boarding at Cerro Negro — Nicaragua is still genuinely off the beaten path.",
    photos: 67, regions: 2, year: 2019,
    pins: [
      { name: "Granada", coords: [-85.9560, 11.9344], desc: "Bright facades and rooftop views over Lake Nicaragua" },
      { name: "Cerro Negro", coords: [-86.7019, 12.5063], desc: "A black cinder cone you can board down at speed" }
    ]
  },
  "Costa Rica": {
    label: "Central America & Caribbean",
    desc: "Cloud forests and Pacific sunset beaches — Costa Rica remains the gold standard of accessible wilderness.",
    photos: 92, regions: 3, year: 2018,
    pins: [
      { name: "Monteverde", coords: [-84.8224, 10.3010], desc: "Cloud forest walkways threading through the canopy" },
      { name: "Manuel Antonio", coords: [-84.1417, 9.3910], desc: "Monkeys on the beach, jungle to the waterline" }
    ]
  },
  "Panama": {
    label: "Central America & Caribbean",
    desc: "The canal at dusk and the Casco Viejo's faded grandeur — Panama City is one of the region's great underrated capitals.",
    photos: 71, regions: 2, year: 2018,
    pins: [
      { name: "Panama Canal", coords: [-79.9190, 9.0800], desc: "One of engineering's great achievements, still running" },
      { name: "Casco Viejo", coords: [-79.5353, 8.9519], desc: "Crumbling colonial beauty by the Pacific" }
    ]
  },
 
  // ── South America ──
  "Brazil": {
    label: "South America",
    desc: "The Amazon's impossible density and the northeast's surreal dune lagoons — Brazil is nature at full volume.",
    photos: 457, regions: 4, year: 2023, hasStates: true, pins: []
  },
  "Colombia": {
    label: "South America",
    desc: "Cartagena's walled city at golden hour and the Coffee Region's green hillsides — Colombia is transformation made visible.",
    photos: 134, regions: 3, year: 2022,
    pins: [
      { name: "Cartagena", coords: [-75.5144, 10.3910], desc: "Bougainvillea over colonial walls in the Caribbean heat" },
      { name: "Salento", coords: [-75.5706, 4.6384], desc: "Wax palms rising from green Andean valleys" }
    ]
  },
  "Ecuador": {
    label: "South America",
    desc: "The Avenue of Volcanoes and markets unchanged since the Inca — Ecuador compresses a continent into one small country.",
    photos: 112, regions: 3, year: 2022,
    pins: [
      { name: "Quilotoa Crater", coords: [-78.9000, -0.8636], desc: "A volcanic lake shimmering jade at altitude" },
      { name: "Otavalo Market", coords: [-78.2619, 0.2342], desc: "The most spectacular indigenous textile market in the Americas" }
    ]
  },
  "Peru": {
    label: "South America",
    desc: "Machu Picchu in cloud, Lake Titicaca at altitude — Peru exists at the edge of the visible world.",
    photos: 189, regions: 4, year: 2022,
    pins: [
      { name: "Machu Picchu", coords: [-72.5450, -13.1631], desc: "Sacred geometry in the clouds" },
      { name: "Lake Titicaca", coords: [-69.3355, -15.8402], desc: "The highest navigable lake on earth" }
    ]
  },
  "Bolivia": {
    label: "South America",
    desc: "Salar de Uyuni's mirror of sky and the world's most surreal landscapes — Bolivia asks you to redefine what earth looks like.",
    photos: 98, regions: 2, year: 2022,
    pins: [
      { name: "Salar de Uyuni", coords: [-67.6291, -20.1338], desc: "The world's largest salt flat, perfect mirror at dawn" },
      { name: "La Paz", coords: [-68.1193, -16.5000], desc: "The world's highest capital city, perpetually in motion" }
    ]
  },
  "Chile": {
    label: "South America",
    desc: "Atacama's altiplano and Patagonia's wind-torn towers — Chile stretches from desert to ice in one long breath.",
    photos: 221, regions: 5, year: 2022,
    pins: [
      { name: "Torres del Paine", coords: [-72.9000, -51.0000], desc: "Granite towers over turquoise glacial lakes" },
      { name: "Atacama Desert", coords: [-68.2000, -23.4667], desc: "The driest place on earth, startlingly beautiful" }
    ]
  },
  "Argentina": {
    label: "South America",
    desc: "Perito Moreno advancing into silence and the Pampas at dusk — Argentina is space, beef, and tango.",
    photos: 198, regions: 5, year: 2022,
    pins: [
      { name: "Perito Moreno", coords: [-73.0500, -50.4833], desc: "A glacier the size of a city, still advancing" },
      { name: "Buenos Aires", coords: [-58.3816, -34.6037], desc: "The Paris of South America, with better steak" }
    ]
  },
  "Uruguay": {
    label: "South America",
    desc: "Colonia del Sacramento's cobbled riverfront and Montevideo's calm confidence — Uruguay is South America at its most liveable.",
    photos: 61, regions: 1, year: 2022,
    pins: [{ name: "Colonia del Sacramento", coords: [-57.8453, -34.4626], desc: "A Portuguese colonial quarter frozen beautifully in time" }]
  },
 
  // ── Europe ──
  "Ireland": {
    label: "Europe · West",
    desc: "Cliffs of Moher in Atlantic mist and the quietude of Connemara — Ireland is landscape as literature.",
    photos: 87, regions: 2, year: 2017,
    pins: [
      { name: "Cliffs of Moher", coords: [-9.4253, 52.9715], desc: "Seven hundred foot drops into the North Atlantic" },
      { name: "Connemara", coords: [-9.8000, 53.5000], desc: "Bog and lake and stone wall under perpetual cloud" }
    ]
  },
  "United Kingdom": {
    label: "Europe · West",
    desc: "Scottish Highlands under lowering skies and London's inexhaustible energy — the UK is several countries sharing a passport.",
    photos: 156, regions: 4, year: 2016,
    pins: [
      { name: "Scottish Highlands", coords: [-4.7331, 57.1225], desc: "Glens and lochs under the most dramatic light in Europe" },
      { name: "London", coords: [-0.1276, 51.5074], desc: "A world city perpetually reinventing itself" }
    ]
  },
  "Portugal": {
    label: "Europe · West",
    desc: "Lisbon's fado-filled Alfama and the Douro Valley's terraced vineyards — Portugal is melancholy made beautiful.",
    photos: 112, regions: 3, year: 2018,
    pins: [
      { name: "Lisbon", coords: [-9.1393, 38.7223], desc: "Tiled facades, trams, and the Tagus at dusk" },
      { name: "Douro Valley", coords: [-7.5000, 41.1500], desc: "Port wine country carved into terraced schist hillsides" }
    ]
  },
  "Spain": {
    label: "Europe · West",
    desc: "Andalucía's golden hour and Catalonia's modernist fever — Spain is passion made architecture.",
    photos: 193, regions: 5, year: 2017,
    pins: [
      { name: "Granada Alhambra", coords: [-3.5920, 37.1760], desc: "Moorish geometry at its most intricate" },
      { name: "Seville", coords: [-5.9845, 37.3891], desc: "Orange trees and flamenco in the streets" }
    ]
  },
  "Andorra": {
    label: "Europe · West",
    desc: "A Pyrenean microstate of duty-free ski towns and high-altitude roads — Andorra is a curiosity worth the detour.",
    photos: 18, regions: 1, year: 2017,
    pins: [{ name: "Andorra la Vella", coords: [1.5218, 42.5063], desc: "The world's highest capital in Europe, nestled in the mountains" }]
  },
  "France": {
    label: "Europe · West",
    desc: "Provence's lavender fields and Paris at blue hour — France is the art of living rendered in landscape.",
    photos: 178, regions: 5, year: 2016,
    pins: [
      { name: "Provence", coords: [5.3698, 43.9352], desc: "Violet lavender rows under summer light" },
      { name: "Mont Saint-Michel", coords: [-1.5114, 48.6361], desc: "A tidal island abbey rising from the sea" }
    ]
  },
  "Monaco": {
    label: "Europe · West",
    desc: "The world's most densely populated country is pure spectacle — Monaco is capitalism's most photogenic extreme.",
    photos: 22, regions: 1, year: 2016,
    pins: [{ name: "Monte Carlo", coords: [7.4246, 43.7384], desc: "Casino facades and yachts stacked against the hillside" }]
  },
  "Italy": {
    label: "Europe · South",
    desc: "Dolomite peaks and crumbling Roman grandeur — Italy is beauty in its most unself-conscious form.",
    photos: 312, regions: 7, year: 2017,
    pins: [
      { name: "Dolomites", coords: [11.8722, 46.4102], desc: "Pink-lit peaks at alpenglow" },
      { name: "Matera", coords: [16.6043, 40.6664], desc: "Ancient cave dwellings carved into ravine walls" },
      { name: "Sicily", coords: [14.2681, 37.5994], desc: "Volcanoes, temples, and baroque excess" }
    ]
  },
  "Vatican City": {
    label: "Europe · South",
    desc: "The smallest country on earth holds the weight of two thousand years of Western art — every surface in the Sistine Chapel earns its reputation.",
    photos: 34, regions: 1, year: 2017,
    pins: [{ name: "Vatican Museums", coords: [12.4534, 41.9065], desc: "Raphael's Rooms and the Sistine ceiling — art at the edge of comprehension" }]
  },
  "Malta": {
    label: "Europe · South",
    desc: "Valletta's baroque limestone streets and the Knights' fortifications — Malta is Mediterranean history compressed into a small island.",
    photos: 46, regions: 1, year: 2019,
    pins: [{ name: "Valletta", coords: [14.5146, 35.8997], desc: "Europe's smallest capital city, entirely a UNESCO site" }]
  },
  "Germany": {
    label: "Europe · Central",
    desc: "Bavaria's fairy-tale castles and Berlin's uncompromising creative energy — Germany refuses to be just one thing.",
    photos: 104, regions: 3, year: 2018,
    pins: [
      { name: "Berlin", coords: [13.4050, 52.5200], desc: "A city still processing its own history through art and architecture" },
      { name: "Neuschwanstein", coords: [10.7498, 47.5576], desc: "The castle that invented the fantasy of castles" }
    ]
  },
  "Czechia": {
    label: "Europe · Central",
    desc: "Prague's Gothic spires above the Vltava and Bohemian countryside — Czechia is medieval Europe preserved in amber.",
    photos: 88, regions: 2, year: 2018,
    pins: [
      { name: "Prague", coords: [14.4378, 50.0755], desc: "One of Europe's most intact medieval city centres" },
      { name: "Český Krumlov", coords: [14.3174, 48.8127], desc: "A Renaissance town coiled in a river bend" }
    ]
  },
  "Austria": {
    label: "Europe · Central",
    desc: "Vienna's imperial coffee house culture and the Salzkammergut's lake-and-mountain perfection — Austria is civilisation at altitude.",
    photos: 79, regions: 2, year: 2018,
    pins: [
      { name: "Vienna", coords: [16.3738, 48.2082], desc: "Ringstrasse grandeur and Freud's consulting room" },
      { name: "Hallstatt", coords: [13.6493, 47.5622], desc: "A lakeside village so beautiful it inspired a Chinese replica" }
    ]
  },
  "Hungary": {
    label: "Europe · Central",
    desc: "Budapest straddling the Danube with its thermal baths and ruin bars — Hungary is central Europe's most underrated capital.",
    photos: 73, regions: 1, year: 2019,
    pins: [{ name: "Budapest", coords: [19.0402, 47.4979], desc: "Parliament at night on the Danube — one of Europe's great views" }]
  },
  "Netherlands": {
    label: "Europe · West",
    desc: "Amsterdam's canal rings and the tulip fields of the Bollenstreek — the Netherlands makes flat land feel like revelation.",
    photos: 81, regions: 2, year: 2018,
    pins: [
      { name: "Amsterdam", coords: [4.9041, 52.3676], desc: "Seventeen century canal rings, cycling, Rembrandt" },
      { name: "Keukenhof", coords: [4.5467, 52.2697], desc: "Seven million tulip bulbs in bloom — overwhelming and magnificent" }
    ]
  },
  "Norway": {
    label: "Europe · North",
    desc: "Fjords carved by ice and light that never fully sets — Norway is a lesson in geological time.",
    photos: 276, regions: 6, year: 2020,
    pins: [
      { name: "Lofoten Islands", coords: [13.5850, 68.1500], desc: "Peaks rising straight from the Arctic sea" },
      { name: "Geirangerfjord", coords: [7.2054, 62.1040], desc: "Waterfalls threading into turquoise water" }
    ]
  },
  "Romania": {
    label: "Europe · East",
    desc: "Transylvania's fortified Saxon churches and the Carpathians at autumn — Romania is the Europe that time forgot in the best way.",
    photos: 91, regions: 3, year: 2021,
    pins: [
      { name: "Sibiu", coords: [24.1503, 45.7983], desc: "A Saxon medieval town in the Transylvanian heartland" },
      { name: "Transfăgărășan Highway", coords: [24.6178, 45.3965], desc: "The most dramatic mountain road in Europe" }
    ]
  },
  "Moldova": {
    label: "Europe · East",
    desc: "Orheiul Vechi's cave monastery carved into limestone cliffs and wine cellars that go on for miles — Moldova is Europe's best-kept secret.",
    photos: 38, regions: 1, year: 2021,
    pins: [{ name: "Orheiul Vechi", coords: [29.0000, 47.2167], desc: "A cliff-face monastery in a river-carved canyon" }]
  },
  "Bulgaria": {
    label: "Europe · East",
    desc: "Plovdiv's ancient Roman theatre and the Rhodope Mountains — Bulgaria is Eastern Europe at its most raw and rewarding.",
    photos: 64, regions: 2, year: 2021,
    pins: [
      { name: "Plovdiv", coords: [24.7489, 42.1354], desc: "A Roman theatre in the city centre still staging performances" },
      { name: "Rila Monastery", coords: [23.3406, 42.1332], desc: "A fortress of faith in a mountain forest" }
    ]
  },
  "Serbia": {
    label: "Europe · East",
    desc: "Belgrade's Kalemegdan fortress and the Đerdap canyon — Serbia is the Balkans at their most energetic and unfiltered.",
    photos: 57, regions: 2, year: 2021,
    pins: [{ name: "Belgrade", coords: [20.4612, 44.8176], desc: "A city at the confluence of two rivers and two cultures" }]
  },
  "Albania": {
    label: "Europe · East",
    desc: "The Albanian Riviera's turquoise coves and Gjirokastër's Ottoman citadel — Albania is Europe's last frontier, and it's extraordinary.",
    photos: 72, regions: 2, year: 2022,
    pins: [
      { name: "Gjirokastër", coords: [20.1394, 40.0758], desc: "A silver city of slate-roofed Ottoman houses on a hillside" },
      { name: "Riviera Coast", coords: [20.0833, 39.9167], desc: "Ionian coves of impossible blue, barely discovered" }
    ]
  },
  "Greece": {
    label: "Europe · South",
    desc: "Cycladic whitewash and Byzantine ruins — Greece is a meditation on light, stone, and the passage of time.",
    photos: 211, regions: 5, year: 2018,
    pins: [
      { name: "Santorini", coords: [25.4615, 36.3932], desc: "Caldera sunsets that stop conversation" },
      { name: "Meteora", coords: [21.6306, 39.7217], desc: "Monasteries balanced on impossible rock pillars" }
    ]
  },
  "Türkiye": {
    label: "Europe · East / Asia",
    desc: "Cappadocia's fairy chimneys and Istanbul's layered history — Türkiye straddles worlds, literally and culturally.",
    photos: 234, regions: 6, year: 2020,
    pins: [
      { name: "Cappadocia", coords: [34.8281, 38.6431], desc: "Balloon-dotted skies above volcanic valleys" },
      { name: "Istanbul", coords: [28.9784, 41.0082], desc: "Two continents, one extraordinary city" },
      { name: "Pamukkale", coords: [29.1208, 37.9212], desc: "Thermal travertine terraces glowing white" }
    ]
  },
 
  // ── Africa ──
  "Morocco": {
    label: "Africa · North",
    desc: "The medinas of Fes and the Sahara at dawn — Morocco is light and shadow in their most theatrical forms.",
    photos: 218, regions: 5, year: 2021,
    pins: [
      { name: "Fes Medina", coords: [-4.9998, 34.0181], desc: "A labyrinth of craft and colour" },
      { name: "Sahara Desert", coords: [-3.9422, 31.0437], desc: "Dunes before sunrise, absolute silence" },
      { name: "Chefchaouen", coords: [-5.2636, 35.1688], desc: "The blue city painted in dreamlight" }
    ]
  },
  "Tunisia": {
    label: "Africa · North",
    desc: "The ruins of Carthage and Sidi Bou Said's blue-white clifftop village — Tunisia is the Mediterranean's forgotten gem.",
    photos: 67, regions: 2, year: 2022,
    pins: [
      { name: "Sidi Bou Said", coords: [10.3424, 36.8688], desc: "Blue and white perfection above the Gulf of Tunis" },
      { name: "Dougga", coords: [9.2214, 36.4225], desc: "The best-preserved Roman theatre in North Africa" }
    ]
  },
  "Egypt": {
    label: "Africa · North",
    desc: "The pyramids at the edge of Cairo's smog and the Nile at first light — Egypt is mythology made stone.",
    photos: 229, regions: 4, year: 2020,
    pins: [
      { name: "Giza Plateau", coords: [31.1342, 29.9773], desc: "The last wonder of the ancient world" },
      { name: "Luxor", coords: [32.6396, 25.6872], desc: "Open-air museum straddling the Nile" },
      { name: "White Desert", coords: [27.7167, 27.3833], desc: "Chalk formations rising from flat sand" }
    ]
  },
  "Mauritania": {
    label: "Africa · West",
    desc: "Ancient caravan cities buried in the Sahara and coastlines no one visits — Mauritania is radical solitude.",
    photos: 89, regions: 3, year: 2022,
    pins: [
      { name: "Chinguetti", coords: [-12.3667, 20.4667], desc: "A medieval Islamic city swallowed by dunes" },
      { name: "Banc d'Arguin", coords: [-16.3000, 19.8333], desc: "Vast tidal flats teeming with migratory birds" }
    ]
  },
  "Senegal": {
    label: "Africa · West",
    desc: "Dakar's vibrant energy and the pink waters of Lac Rose — Senegal is colour, rhythm, and warmth.",
    photos: 134, regions: 4, year: 2022,
    pins: [
      { name: "Dakar", coords: [-17.4441, 14.6937], desc: "A peninsula city at Africa's western tip" },
      { name: "Lac Rose", coords: [-17.2333, 14.8333], desc: "A salt lake that turns flamingo pink" }
    ]
  },
  "Cabo Verde": {
    label: "Africa · West",
    desc: "Volcanic peaks above the Atlantic and morna music drifting through Santo Antão's valleys — Cabo Verde is Africa's most melancholy archipelago.",
    photos: 43, regions: 2, year: 2022,
    pins: [{ name: "Santo Antão", coords: [-25.1000, 17.1000], desc: "Dramatic volcanic ridges descending to green valleys" }]
  },
  "Somalia": {
    label: "Africa · East",
    desc: "Mogadishu's resilience and the forgotten beaches of a coastline longer than the US eastern seaboard — Somalia is a place the world has barely begun to see.",
    photos: 31, regions: 1, year: 2023,
    pins: [{ name: "Mogadishu", coords: [45.3182, 2.0469], desc: "A city rebuilding itself with extraordinary velocity" }]
  },
  "Ethiopia": {
    label: "Africa · East",
    desc: "Lalibela's rock-hewn churches and the Danakil Depression's alien landscape — Ethiopia is civilization's oldest story still being written.",
    photos: 148, regions: 4, year: 2022,
    pins: [
      { name: "Lalibela", coords: [39.0414, 12.0319], desc: "Eleven monolithic churches carved from living rock in the 12th century" },
      { name: "Danakil Depression", coords: [40.6500, 14.2400], desc: "One of the hottest and most alien landscapes on earth" }
    ]
  },
  "Kenya": {
    label: "Africa · East",
    desc: "The Great Migration and Maasai Mara at sunrise — Kenya delivers the wildlife experience that changes everything.",
    photos: 304, regions: 6, year: 2019,
    pins: [
      { name: "Maasai Mara", coords: [35.1500, -1.5000], desc: "The greatest wildlife spectacle on earth" },
      { name: "Lamu Island", coords: [40.9022, -2.2694], desc: "A Swahili stone town lost in time" }
    ]
  },
  "Tanzania": {
    label: "Africa · East",
    desc: "Kilimanjaro above the clouds and Serengeti plains stretching to the horizon — Tanzania is scale made visible.",
    photos: 287, regions: 5, year: 2019,
    pins: [
      { name: "Serengeti", coords: [34.8333, -2.3333], desc: "Endless golden grass and the big five" },
      { name: "Ngorongoro Crater", coords: [35.5800, -3.1758], desc: "A collapsed volcano teeming with wildlife" },
      { name: "Zanzibar", coords: [39.3587, -6.1659], desc: "Spice islands and turquoise shallows" }
    ]
  },
  "Namibia": {
    label: "Africa · South",
    desc: "Sossusvlei's dead trees and Skeleton Coast fog — Namibia is earth at its most elemental and austere.",
    photos: 198, regions: 4, year: 2021,
    pins: [
      { name: "Sossusvlei", coords: [15.3400, -24.7272], desc: "The world's tallest sand dunes at sunrise" },
      { name: "Etosha Pan", coords: [16.3270, -18.8550], desc: "A vast salt pan ringed by wildlife" }
    ]
  },
  "South Africa": {
    label: "Africa · South",
    desc: "Cape Town between mountain and ocean and the Drakensberg at altitude — South Africa contains multitudes.",
    photos: 256, regions: 6, year: 2021,
    pins: [
      { name: "Cape Town", coords: [18.4241, -33.9249], desc: "Table Mountain dropping straight to the sea" },
      { name: "Drakensberg", coords: [29.4833, -29.0833], desc: "Cathedral peaks and San rock art" },
      { name: "Kruger NP", coords: [31.4869, -23.9884], desc: "South Africa's great wildlife reserve" }
    ]
  },
 
  // ── West / Central Asia & Middle East ──
  "UAE": {
    label: "Middle East",
    desc: "Dubai's vertical ambition and Abu Dhabi's quieter grandeur — the UAE is the future arriving ahead of schedule.",
    photos: 88, regions: 2, year: 2021,
    pins: [
      { name: "Dubai", coords: [55.2708, 25.2048], desc: "A skyline that changed what cities thought possible" },
      { name: "Abu Dhabi", coords: [54.3773, 24.4539], desc: "Sheikh Zayed Mosque — white marble and silence at scale" }
    ]
  },
  "Bahrain": {
    label: "Middle East",
    desc: "The Tree of Life alone in the desert and a pearl-diving history beneath modern glass towers — Bahrain is the Gulf's most human scale.",
    photos: 41, regions: 1, year: 2022,
    pins: [{ name: "Manama Souq", coords: [50.5910, 26.2154], desc: "Old pearl-trading alleyways in the heart of the capital" }]
  },
  "Qatar": {
    label: "Middle East",
    desc: "Doha's Museum of Islamic Art and the desert dunes of Khor Al Adaid — Qatar is wealth and tradition negotiating a future.",
    photos: 52, regions: 1, year: 2022,
    pins: [{ name: "Museum of Islamic Art", coords: [51.5362, 25.2948], desc: "I.M. Pei's final masterwork, alone on its peninsula" }]
  },
  "Saudi Arabia": {
    label: "Middle East",
    desc: "Hegra's Nabataean tombs and the vast emptiness of the Rub' al Khali — Saudi Arabia is just opening its doors.",
    photos: 142, regions: 3, year: 2023,
    pins: [
      { name: "AlUla / Hegra", coords: [37.9167, 26.7833], desc: "Monumental tombs carved from rose sandstone" },
      { name: "Edge of the World", coords: [45.5167, 24.0833], desc: "A cliff edge that drops to the end of the earth" }
    ]
  },
  "Yemen": {
    label: "Middle East",
    desc: "Sana'a's gingerbread skyscrapers and Socotra's dragon blood trees — Yemen carries extraordinary beauty through extraordinary hardship.",
    photos: 44, regions: 2, year: 2019,
    pins: [
      { name: "Sana'a Old City", coords: [44.2066, 15.3694], desc: "A UNESCO city of multi-storey mud towers, still inhabited" },
      { name: "Socotra Island", coords: [54.0000, 12.5000], desc: "Dragon blood trees and beaches of no other planet" }
    ]
  },
  "Oman": {
    label: "Middle East",
    desc: "Wadis carved into limestone and dhow harbours at dusk — Oman is the Arab world at its most serene.",
    photos: 183, regions: 5, year: 2021,
    pins: [
      { name: "Wadi Shab", coords: [58.5333, 22.8833], desc: "Emerald pools hidden inside canyon walls" },
      { name: "Wahiba Sands", coords: [58.8000, 22.4000], desc: "A sea of orange dunes at the golden hour" }
    ]
  },
  "Jordan": {
    label: "Middle East",
    desc: "Petra's rose-red rock tombs and Wadi Rum's Martian silence — Jordan is the ancient world at its most cinematic.",
    photos: 119, regions: 3, year: 2021,
    pins: [
      { name: "Petra", coords: [35.4444, 30.3285], desc: "The Treasury emerging from a slot canyon — no photograph prepares you" },
      { name: "Wadi Rum", coords: [36.5000, 29.5833], desc: "Sandstone pillars rising from red desert floor" }
    ]
  },
  "Lebanon": {
    label: "Middle East",
    desc: "Beirut's fractured glamour and the Cedar forests of the north — Lebanon is resilience as a way of life.",
    photos: 68, regions: 2, year: 2022,
    pins: [
      { name: "Beirut", coords: [35.5018, 33.8938], desc: "The Middle East's most complex and compelling capital" },
      { name: "Byblos", coords: [35.6494, 34.1208], desc: "One of the oldest continuously inhabited cities on earth" }
    ]
  },
  "Syria": {
    label: "Middle East",
    desc: "Palmyra's columns against a desert sky and Aleppo's ancient souqs — Syria carries the weight of what was, and what could still be.",
    photos: 37, regions: 2, year: 2010,
    pins: [
      { name: "Palmyra", coords: [38.2667, 34.5500], desc: "Roman colonnades in the Syrian desert — haunting before, haunting after" },
      { name: "Aleppo", coords: [37.1612, 36.2021], desc: "A city of layered civilisations, scarred but still present" }
    ]
  },
  "Maldives": {
    label: "West/Central Asia",
    desc: "Overwater bungalows above lagoons of impossible blue — the Maldives is pure sensory overload, and worth every cliché.",
    photos: 78, regions: 1, year: 2021,
    pins: [{ name: "North Malé Atoll", coords: [73.5000, 4.4000], desc: "A lagoon so clear you can see the coral from above the water" }]
  },
  "Afghanistan": {
    label: "West/Central Asia",
    desc: "The Band-e-Amir lakes and the ghost of the Silk Road — Afghanistan is heartbreak and wonder in equal measure.",
    photos: 98, regions: 3, year: 2023,
    pins: [
      { name: "Band-e-Amir", coords: [67.8297, 34.8470], desc: "Impossibly blue crater lakes in the Hindu Kush" },
      { name: "Bamyan", coords: [67.8197, 34.8197], desc: "Where the great Buddhas once stood" }
    ]
  },
  "Pakistan": {
    label: "West/Central Asia",
    desc: "The Karakoram Highway and K2 base camp — Pakistan holds some of the most dramatic mountain landscapes on earth.",
    photos: 156, regions: 4, year: 2023,
    pins: [
      { name: "Hunza Valley", coords: [74.6500, 36.3167], desc: "Terraced apricot orchards below Rakaposhi" },
      { name: "Lahore", coords: [74.3436, 31.5497], desc: "Mughal grandeur and bazaar chaos" }
    ]
  },
  "Kyrgyzstan": {
    label: "West/Central Asia",
    desc: "Nomadic yurt camps and the Tian Shan mountains — Kyrgyzstan is one of the last truly wild frontiers.",
    photos: 201, regions: 5, year: 2022,
    pins: [
      { name: "Song-Kul Lake", coords: [75.1500, 41.8333], desc: "A high alpine lake ringed by yurt camps" },
      { name: "Ala-Archa", coords: [74.4833, 42.5667], desc: "Glacial gorges an hour from Bishkek" }
    ]
  },
  "Kazakhstan": {
    label: "West/Central Asia",
    desc: "Endless steppe broken by canyon lands and Soviet relics — Kazakhstan defies every expectation.",
    photos: 167, regions: 4, year: 2022,
    pins: [
      { name: "Charyn Canyon", coords: [79.0833, 43.3500], desc: "Kazakhstan's answer to the Grand Canyon" },
      { name: "Almaty", coords: [76.8512, 43.2220], desc: "Mountains rising directly above the city" }
    ]
  },
 
  // ── East / Southeast Asia ──
  "Japan": {
    label: "Asia · East",
    desc: "Cherry blossoms and neon nights — Japan rewired how I see contrast between ancient silence and electric modernity.",
    photos: 340, regions: 8, year: 2019,
    pins: [
      { name: "Kyoto", coords: [135.7681, 35.0116], desc: "Ancient temples draped in golden hour fog" },
      { name: "Tokyo", coords: [139.6917, 35.6895], desc: "Neon geometry and whispered alleys" },
      { name: "Hokkaido", coords: [142.8635, 43.2203], desc: "Frozen landscapes and silence" }
    ]
  },
  "India": {
    label: "Asia · South",
    desc: "Rajasthan's painted havelis and Varanasi's ghats at dusk — India asks you to feel before you understand.",
    photos: 412, regions: 9, year: 2018,
    pins: [
      { name: "Varanasi", coords: [83.0095, 25.3176], desc: "The eternal city on the Ganges" },
      { name: "Jaisalmer", coords: [70.9167, 26.9157], desc: "A golden fort rising from the Thar desert" },
      { name: "Kerala Backwaters", coords: [76.2711, 9.9312], desc: "Houseboats threading green canals" }
    ]
  },
  "Thailand": {
    label: "Asia · Southeast",
    desc: "Chiang Mai's temple-studded old city and Pai's mountain valley — Thailand beyond the beaches is where the country reveals itself.",
    photos: 127, regions: 3, year: 2020,
    pins: [
      { name: "Chiang Mai", coords: [98.9817, 18.7883], desc: "Three hundred temples inside a moated old city" },
      { name: "Pai", coords: [98.4369, 19.3583], desc: "A mountain valley town at the end of a road that earns it" }
    ]
  }
};
 
// ─── ISO numeric ID → country name ────────────────────────────────────────
const countryNameMap = {
  "840": "United States", "124": "Canada", "484": "Mexico", "044": "Bahamas",
  "214": "Dominican Republic", "388": "Jamaica", "192": "Cuba",
  "320": "Guatemala", "222": "El Salvador", "340": "Honduras",
  "558": "Nicaragua", "188": "Costa Rica", "591": "Panama",
  "076": "Brazil", "170": "Colombia", "218": "Ecuador", "604": "Peru",
  "068": "Bolivia", "152": "Chile", "032": "Argentina", "858": "Uruguay",
  "372": "Ireland", "826": "United Kingdom", "620": "Portugal",
  "724": "Spain", "020": "Andorra", "250": "France", "492": "Monaco",
  "380": "Italy", "336": "Vatican City", "470": "Malta", "300": "Greece",
  "276": "Germany", "203": "Czechia", "040": "Austria", "348": "Hungary", "528": "Netherlands",
  "642": "Romania", "498": "Moldova", "100": "Bulgaria", "688": "Serbia", "008": "Albania",
  "578": "Norway", "792": "Türkiye",
  "504": "Morocco", "788": "Tunisia", "818": "Egypt",
  "478": "Mauritania", "686": "Senegal", "132": "Cabo Verde",
  "706": "Somalia", "231": "Ethiopia", "404": "Kenya", "834": "Tanzania",
  "516": "Namibia", "710": "South Africa",
  "784": "UAE", "048": "Bahrain", "634": "Qatar", "682": "Saudi Arabia", "887": "Yemen",
  "512": "Oman", "400": "Jordan", "422": "Lebanon", "760": "Syria",
  "462": "Maldives", "004": "Afghanistan", "586": "Pakistan",
  "417": "Kyrgyzstan", "398": "Kazakhstan",
  "392": "Japan", "356": "India", "764": "Thailand"
};
 
// ─── Country → world region ────────────────────────────────────────────────
const visitedCountryToRegion = {
  "United States": "North America", "Canada": "North America",
  "Mexico": "North America", "Bahamas": "North America",
  "Dominican Republic": "Central America & Caribbean",
  "Jamaica": "Central America & Caribbean", "Cuba": "Central America & Caribbean",
  "Guatemala": "Central America & Caribbean", "El Salvador": "Central America & Caribbean",
  "Honduras": "Central America & Caribbean", "Nicaragua": "Central America & Caribbean",
  "Costa Rica": "Central America & Caribbean", "Panama": "Central America & Caribbean",
  "Brazil": "South America", "Colombia": "South America", "Ecuador": "South America",
  "Peru": "South America", "Bolivia": "South America", "Chile": "South America",
  "Argentina": "South America", "Uruguay": "South America",
  "Ireland": "Europe", "United Kingdom": "Europe", "Portugal": "Europe",
  "Spain": "Europe", "Andorra": "Europe", "France": "Europe", "Monaco": "Europe",
  "Italy": "Europe", "Vatican City": "Europe", "Malta": "Europe",
  "Germany": "Europe", "Czechia": "Europe", "Austria": "Europe",
  "Hungary": "Europe", "Netherlands": "Europe",
  "Romania": "Europe", "Moldova": "Europe", "Bulgaria": "Europe",
  "Serbia": "Europe", "Albania": "Europe", "Norway": "Europe",
  "Greece": "Europe", "Türkiye": "Europe",
  "Morocco": "Africa", "Tunisia": "Africa", "Egypt": "Africa",
  "Mauritania": "Africa", "Senegal": "Africa", "Cabo Verde": "Africa",
  "Somalia": "Africa", "Ethiopia": "Africa",
  "Kenya": "Africa", "Tanzania": "Africa", "Namibia": "Africa", "South Africa": "Africa",
  "UAE": "West/Central Asia", "Bahrain": "West/Central Asia", "Qatar": "West/Central Asia",
  "Saudi Arabia": "West/Central Asia", "Yemen": "West/Central Asia",
  "Oman": "West/Central Asia", "Jordan": "West/Central Asia",
  "Lebanon": "West/Central Asia", "Syria": "West/Central Asia",
  "Maldives": "West/Central Asia",
  "Afghanistan": "West/Central Asia", "Pakistan": "West/Central Asia",
  "Kyrgyzstan": "West/Central Asia", "Kazakhstan": "West/Central Asia",
  "Japan": "East/Southeast Asia", "India": "East/Southeast Asia",
  "Thailand": "East/Southeast Asia"
};
// ─── Setup ─────────────────────────────────────────────────────────────────
const svg = d3.select("#map-svg");
const container = document.getElementById("map-container");
let width = container.clientWidth;
let height = container.clientHeight;
 
const projection = d3.geoNaturalEarth1()
  .scale(width / 6.2)
  .translate([width / 2, height / 2]);
 
const path = d3.geoPath().projection(projection);
const g = svg.append("g");
 
// Sphere
g.append("path").datum({type:"Sphere"}).attr("class","sphere").attr("d", path);
// Graticule
g.append("path").datum(d3.geoGraticule()()).attr("class","graticule").attr("d", path);
 
// ─── State ─────────────────────────────────────────────────────────────────
let currentRegion = null;
let currentCountry = null;
let currentState   = null;
let stateGeoCache  = {}; // cache fetched GeoJSON per country
 
const tooltip   = document.getElementById("tooltip");
const infoPanel = document.getElementById("info-panel");
const hint      = document.getElementById("hint");
const regionPanel = document.getElementById("region-panel");
 
// State panel
const stateLayer = g.append("g").attr("id", "state-layer");
const statePanel = document.getElementById("state-panel");
 
// ─── Load world map ────────────────────────────────────────────────────────
fetch("https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json")
  .then(r => r.json())
  .then(world => {
    const countries = topojson.feature(world, world.objects.countries);
    const borders   = topojson.mesh(world, world.objects.countries, (a,b) => a !== b);
 
    g.selectAll(".country")
      .data(countries.features)
      .enter().append("path")
      .attr("class", d => {
        const name = getCountryName(d.id);
        return "country" + (visitedCountries[name] ? " visited" : "");
      })
      .attr("d", path)
      .on("mouseover", function(event, d) {
        const name = getCountryName(d.id);
        const regionName = visitedCountryToRegion[name];
        if (currentCountry && visitedCountries[currentCountry]?.hasStates) return; // state layer handles hover
        if (currentRegion && visitedCountries[name] && visitedCountryToRegion[name] === currentRegion) {
          tooltip.style.opacity = "1";
          tooltip.textContent = name;
          if (!currentCountry) d3.select(this).classed("active", true);
        } else if (!currentRegion && regionName && regions[regionName]?.visited) {
          tooltip.style.opacity = "1";
          tooltip.textContent = regionName;
          d3.selectAll(".country.visited").classed("region-hover", function(dd) {
            return visitedCountryToRegion[getCountryName(dd.id)] === regionName;
          });
        }
      })
      .on("mousemove", function(event) {
        tooltip.style.left = (event.clientX + 14) + "px";
        tooltip.style.top  = (event.clientY - 28) + "px";
      })
      .on("mouseout", function(event, d) {
        const name = getCountryName(d.id);
        if (!currentCountry || currentCountry !== name) d3.select(this).classed("active", false);
        d3.selectAll(".country").classed("region-hover", false);
        tooltip.style.opacity = "0";
      })
      .on("click", function(event, d) {
        const name = getCountryName(d.id);
        const regionName = visitedCountryToRegion[name];
        if (currentCountry) return; // state layer handles clicks when country selected
        if (currentRegion) {
          if (visitedCountries[name] && visitedCountryToRegion[name] === currentRegion)
            selectCountry(name, d, this);
        } else {
          if (regionName && regions[regionName]?.visited) selectRegion(regionName);
        }
      });
 
    g.append("path").datum(borders)
      .attr("fill","none").attr("stroke","#2a2520").attr("stroke-width",0.3).attr("d",path);
 
    // Country-level pins (non-state countries)
    Object.entries(visitedCountries).forEach(([country, data]) => {
      if (data.hasStates) return; // pins added when state loads
      data.pins.forEach(pin => addPin(pin, country, null));
    });
  });
 
// ─── Add a pin to the SVG ──────────────────────────────────────────────────
function addPin(pin, country, stateName) {
  const [x, y] = projection(pin.coords);
  if (!x || !y) return;
  const pinG = g.append("g")
    .attr("class", "pin-group")
    .attr("transform", `translate(${x},${y})`)
    .attr("data-country", country)
    .attr("data-state", stateName || "")
    .attr("data-pin", pin.name)
    .style("display","none");
  pinG.append("circle").attr("class","pin-pulse").attr("r",6);
  pinG.append("circle").attr("class","pin-outer").attr("r",7);
  pinG.append("circle").attr("class","pin-inner").attr("r",3);
  pinG.on("mouseover", function() { tooltip.style.opacity="1"; tooltip.textContent=pin.name; })
     .on("mousemove", function(event) {
        tooltip.style.left=(event.clientX+14)+"px"; tooltip.style.top=(event.clientY-28)+"px"; })
     .on("mouseout", function() { tooltip.style.opacity="0"; })
     .on("click", function() { openPinOverlay(country, pin); });
}
 
// ─── Country name lookup ───────────────────────────────────────────────────
function getCountryName(id) {
  const idStr = String(id).padStart(3, '0');
  return countryNameMap[idStr] || countryNameMap[String(id)] || "";
}
 
// ─── Select region ──────────────────────────────────────────────────────────
function selectRegion(regionName) {
  currentRegion  = regionName;
  currentCountry = null;
  currentState   = null;
 
  setBreadcrumb({ region: regionName });
 
  const visitedInRegion = Object.keys(visitedCountries).filter(c => visitedCountryToRegion[c] === regionName);
  document.getElementById("rp-title").textContent = regionName;
  document.getElementById("rp-count").textContent = visitedInRegion.length;
  document.getElementById("rp-photos").textContent = visitedInRegion.reduce((s,c) => s + visitedCountries[c].photos, 0);
 
  const listEl = document.getElementById("rp-countries");
  listEl.innerHTML = "";
  visitedInRegion.forEach(c => {
    const item = document.createElement("div");
    item.className = "rp-country-item";
    item.textContent = c + (visitedCountries[c].hasStates ? " ›" : "");
    item.onclick = () => {
      d3.selectAll(".country").each(function(d) {
        if (getCountryName(d.id) === c) selectCountry(c, d, this);
      });
    };
    listEl.appendChild(item);
  });
 
  regionPanel.classList.add("visible");
  infoPanel.classList.remove("visible");
  statePanel.classList.remove("visible");
  hint.classList.add("hidden");
  stateLayer.selectAll("*").remove();
 
  d3.selectAll(".country").classed("dimmed", function(d) {
    return visitedCountryToRegion[getCountryName(d.id)] !== regionName;
  });
  d3.selectAll(".country.visited").classed("region-active", function(d) {
    return visitedCountryToRegion[getCountryName(d.id)] === regionName;
  });
 
  d3.selectAll(".pin-group").style("display","none");
  zoomToBounds(regions[regionName].bounds);
}
 
// ─── Reset to region ────────────────────────────────────────────────────────
function resetToRegion() {
  if (!currentRegion) return;
  currentCountry = null;
  currentState   = null;
 
  infoPanel.classList.remove("visible");
  statePanel.classList.remove("visible");
  regionPanel.classList.add("visible");
  stateLayer.selectAll("*").remove();
 
  d3.selectAll(".country").classed("active", false);
  d3.selectAll(".pin-group").style("display","none");
  setBreadcrumb({ region: currentRegion });
  zoomToBounds(regions[currentRegion].bounds);
}
 
// ─── Select country ─────────────────────────────────────────────────────────
function selectCountry(name, feature, el) {
  currentCountry = name;
  currentState   = null;
  const data = visitedCountries[name];
 
  const titleParts = name.split(" ");
  document.getElementById("panel-label").textContent = data.label;
  document.getElementById("panel-title").innerHTML =
    titleParts.slice(0,-1).join(" ") + (titleParts.length>1?" ":"") + "<em>"+titleParts.slice(-1)+"</em>";
  document.getElementById("panel-sub").textContent = data.desc;
  document.getElementById("stat-photos").textContent = data.photos;
  document.getElementById("stat-regions").textContent = data.regions;
  document.getElementById("stat-year").textContent = data.year;
 
  setBreadcrumb({ region: currentRegion, country: name });
 
  if (data.hasStates) {
    // Show state sub-panel hint inside info panel
    document.getElementById("panel-btn").textContent = "Select a State";
    document.getElementById("panel-btn").onclick = null;
    infoPanel.classList.add("visible");
    regionPanel.classList.remove("visible");
    statePanel.classList.remove("visible");
    hint.classList.add("hidden");
    loadStates(name, feature);
  } else {
    document.getElementById("panel-btn").textContent = "Explore Gallery";
    document.getElementById("panel-btn").onclick = () => openCountryOverlay(name);
    infoPanel.classList.add("visible");
    regionPanel.classList.remove("visible");
    statePanel.classList.remove("visible");
    hint.classList.add("hidden");
 
    d3.selectAll(".pin-group").style("display", function() {
      return this.dataset.country === name && !this.dataset.state ? null : "none";
    }).classed("visible", function() {
      return this.dataset.country === name && !this.dataset.state;
    });
 
    zoomToFeature(feature);
  }
}
 
// ─── Load state boundaries ─────────────────────────────────────────────────
async function loadStates(countryName, countryFeature) {
  stateLayer.selectAll("*").remove();
  d3.selectAll(".pin-group").style("display","none");
 
  const cfg = countryStates[countryName];
  if (!cfg) return;
 
  zoomToFeature(countryFeature);
 
  let features;
  if (stateGeoCache[countryName]) {
    features = stateGeoCache[countryName];
  } else {
    const response = await fetch(cfg.geoJsonUrl);
    console.log('Status:', response.status);
    const raw = await response.json();
    console.log('Raw data:', raw);
    console.log('First feature properties:', raw.features[0].properties);
    if (cfg.type === "topojson") {
      features = topojson.feature(raw, raw.objects[cfg.objectName]).features;
      // Attach name via nameMap
      features.forEach(f => {
        const fips = String(f.id).padStart(2,"0");
        f.properties._name = cfg.nameMap[fips] || null;
      });
    } else {
      features = raw.features;
      features.forEach(f => {
        f.properties._name = f.properties[cfg.nameProperty] || null;
      });
    }
    stateGeoCache[countryName] = features;
    // Pre-add pins for all states
    Object.entries(cfg.states).forEach(([stateName, stateData]) => {
      stateData.pins.forEach(pin => addPin(pin, countryName, stateName));
    });
  }
 
  const visitedSet = cfg.visitedStates
    ? new Set(cfg.visitedStates)
    : new Set(Object.keys(cfg.states));
 
  stateLayer.selectAll(".state-path")
    .data(features)
    .enter().append("path")
    .attr("class", d => {
      const sName = d.properties._name;
      return "state-path" + (visitedSet.has(sName) ? " state-visited" : "");
    })
    .attr("d", path)
    .on("mouseover", function(event, d) {
      const sName = d.properties._name;
      if (!sName || !visitedSet.has(sName)) return;
      tooltip.style.opacity = "1";
      tooltip.textContent = sName;
      if (currentState !== sName) d3.select(this).classed("state-hover", true);
    })
    .on("mousemove", function(event) {
      tooltip.style.left = (event.clientX+14)+"px";
      tooltip.style.top  = (event.clientY-28)+"px";
    })
    .on("mouseout", function(event, d) {
      const sName = d.properties._name;
      if (currentState !== sName) d3.select(this).classed("state-hover", false);
      tooltip.style.opacity = "0";
    })
    .on("click", function(event, d) {
      const sName = d.properties._name;
      if (!sName || !visitedSet.has(sName)) return;
      selectState(countryName, sName, d, this);
    });
}
 
// ─── Select state ───────────────────────────────────────────────────────────
function selectState(countryName, stateName, feature, el) {
  currentState = stateName;
  const cfg  = countryStates[countryName];
  const data = cfg.states[stateName];
  if (!data) return;
 
  // Highlight selected state
  stateLayer.selectAll(".state-path").classed("state-active", function(d) {
    return d.properties._name === stateName;
  }).classed("state-hover", false);
 
  // State panel
  document.getElementById("sp-label").textContent = countryName + " · State";
  const titleParts = stateName.split(" ");
  document.getElementById("sp-title").innerHTML =
    titleParts.slice(0,-1).join(" ") + (titleParts.length>1?" ":"") + "<em>"+titleParts.slice(-1)+"</em>";
  document.getElementById("sp-desc").textContent = data.desc;
  document.getElementById("sp-photos").textContent = data.photos;
  document.getElementById("sp-year").textContent = data.year;
  document.getElementById("sp-btn").onclick = () => openStateOverlay(countryName, stateName);
 
  statePanel.classList.add("visible");
  infoPanel.classList.remove("visible");
  setBreadcrumb({ region: currentRegion, country: countryName, state: stateName });
 
  // Show pins for this state
  d3.selectAll(".pin-group").style("display", function() {
    return this.dataset.country === countryName && this.dataset.state === stateName ? null : "none";
  }).classed("visible", function() {
    return this.dataset.country === countryName && this.dataset.state === stateName;
  });
 
  // Zoom to state bounds
  const [[x0,y0],[x1,y1]] = path.bounds(feature);
  const dx = x1-x0, dy = y1-y0;
  const cx = (x0+x1)/2, cy = (y0+y1)/2;
  const scale = Math.max(1.5, Math.min(18, 0.72 / Math.max(dx/width, dy/height)));
  const tx = width/2 - scale*cx, ty = height/2 - scale*cy;
  g.transition().duration(800).ease(d3.easeCubicInOut)
   .attr("transform", `translate(${tx},${ty}) scale(${scale})`);
}
 
// ─── Breadcrumb helper ─────────────────────────────────────────────────────
function setBreadcrumb({ region, country, state } = {}) {
  const bcWorld   = document.getElementById("bc-world");
  const bcRegion  = document.getElementById("bc-region");
  const bcCountry = document.getElementById("bc-country");
  const bcState   = document.getElementById("bc-state");
 
  bcWorld.classList.toggle("active", !region && !country && !state);
 
  if (region) {
    bcRegion.textContent = region; bcRegion.style.display = "block";
    bcRegion.classList.toggle("active", !country && !state);
  } else {
    bcRegion.style.display = "none";
  }
 
  if (country) {
    bcCountry.textContent = country; bcCountry.style.display = "block";
    bcCountry.classList.toggle("active", !state);
  } else {
    bcCountry.style.display = "none";
  }
 
  if (state) {
    bcState.textContent = state; bcState.style.display = "block";
    bcState.classList.add("active");
  } else {
    bcState.style.display = "none";
  }
}
 
// ─── Zoom helpers ────────────────────────────────────────────────────────────
function zoomToFeature(feature) {
  const [[x0,y0],[x1,y1]] = path.bounds(feature);
  const dx = x1-x0, dy = y1-y0;
  const cx = (x0+x1)/2, cy = (y0+y1)/2;
  const scale = Math.max(1.5, Math.min(14, 0.75 / Math.max(dx/width, dy/height)));
  const tx = width/2 - scale*cx, ty = height/2 - scale*cy;
  g.transition().duration(850).ease(d3.easeCubicInOut)
   .attr("transform", `translate(${tx},${ty}) scale(${scale})`);
}
 
function zoomToBounds(bounds) {
  const [[west,south],[east,north]] = bounds;
  const p0 = projection([west,north]);
  const p1 = projection([east,south]);
  if (!p0||!p1) return;
  const dx = p1[0]-p0[0], dy = p1[1]-p0[1];
  const cx = (p0[0]+p1[0])/2, cy = (p0[1]+p1[1])/2;
  const scale = Math.max(1.2, Math.min(10, 0.78 / Math.max(Math.abs(dx)/width, Math.abs(dy)/height)));
  const tx = width/2 - scale*cx, ty = height/2 - scale*cy;
  g.transition().duration(850).ease(d3.easeCubicInOut)
   .attr("transform", `translate(${tx},${ty}) scale(${scale})`);
}
 
// ─── Reset view ────────────────────────────────────────────────────────────
function resetView() {
  currentRegion=null; currentCountry=null; currentState=null;
  g.transition().duration(750).ease(d3.easeCubicInOut).attr("transform","translate(0,0) scale(1)");
  infoPanel.classList.remove("visible");
  regionPanel.classList.remove("visible");
  statePanel.classList.remove("visible");
  hint.classList.remove("hidden");
  stateLayer.selectAll("*").remove();
  d3.selectAll(".country").classed("active",false).classed("dimmed",false)
    .classed("region-active",false).classed("region-hover",false);
  d3.selectAll(".pin-group").style("display","none").classed("visible",false);
  setBreadcrumb();
}
 
// ─── Overlays ──────────────────────────────────────────────────────────────
function slugify(str) {
  return str.toLowerCase()
    .replace(/[àáâãäå]/g, 'a').replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i').replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u').replace(/[ñ]/g, 'n')
    .replace(/[ç]/g, 'c').replace(/ș|ş/g, 's').replace(/ț|ţ/g, 't')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-').replace(/-+/g, '-').trim();
}
 
function goToDestination(pinName) {
  const slug = slugify(pinName);
  window.location.href = '/destinations/' + slug;
}
 
function openPinOverlay(country, pin) {
  goToDestination(pin.name);
}
 
function openCountryOverlay(name) {
  // Country level — no destination page, do nothing
}
 
function openStateOverlay(countryName, stateName) {
  // State level — no destination page, do nothing
}
 
function closeOverlay() {
  // Navigation handled by goToDestination
}
 
document.getElementById("photo-overlay").addEventListener("click", function(e) {
  if (e.target === this) closeOverlay();
});
 
// ─── Resize ────────────────────────────────────────────────────────────────
window.addEventListener("resize", () => {
  width = container.clientWidth; height = container.clientHeight;
  projection.scale(width/6.2).translate([width/2, height/2]);
  svg.selectAll("path").attr("d", path);
  stateLayer.selectAll(".state-path").attr("d", path);
  d3.selectAll(".pin-group").each(function() {
    const country = this.dataset.country;
    const pinName = this.dataset.pin;
    const stateName = this.dataset.state;
    let pin;
    if (stateName && countryStates[country]) {
      pin = countryStates[country].states[stateName]?.pins.find(p => p.name === pinName);
    } else {
      pin = visitedCountries[country]?.pins.find(p => p.name === pinName);
    }
    if (!pin) return;
    const [x,y] = projection(pin.coords);
    if (x && y) d3.select(this).attr("transform",`translate(${x},${y})`);
  });
});
 
// ─── Escape key navigation ─────────────────────────────────────────────────
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  closeOverlay();
  if (currentState) {
    // Back to country (re-load states view)
    currentState = null;
    statePanel.classList.remove("visible");
    infoPanel.classList.add("visible");
    stateLayer.selectAll(".state-path").classed("state-active", false);
    d3.selectAll(".pin-group").style("display","none");
    setBreadcrumb({ region: currentRegion, country: currentCountry });
  } else if (currentCountry) {
    resetToRegion();
  } else if (currentRegion) {
    resetView();
  }
});
