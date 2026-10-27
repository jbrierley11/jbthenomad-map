// ─── Region definitions ────────────────────────────────────────────────────
const regions = {
  "North America": {
    countries: ["Mexico"],
    visited: true,
    bounds: [[-140, 14], [-52, 70]]
  },
  "Central America & Caribbean": {
    countries: ["Jamaica"],
    visited: true,
    bounds: [[-92, 7], [-64, 26]]
  },
  "South America": {
    countries: ["Bolivia", "Peru", "Colombia", "Ecuador"],
    visited: true,
    bounds: [[-82, -56], [-32, 13]]
  },
  "Africa": {
    countries: ["Egypt", "Morocco"],
    visited: true,
    bounds: [[-18, -36], [52, 38]]
  },
  "Europe": {
    countries: ["Türkiye", "Greece", "Italy"],
    visited: true,
    bounds: [[-11, 34], [42, 72]]
  },
  "West/Central Asia": {
    countries: ["UAE", "Oman", "Kyrgyzstan", "Kazakhstan"],
    visited: true,
    bounds: [[24, 0], [90, 52]]
  },
  "East/Southeast Asia": {
    countries: [],
    visited: false,
    bounds: [[68, 4], [148, 52]]
  },
  "Oceania": {
    countries: [],
    visited: false,
    bounds: [[113, -47], [179, -8]]
  }
};

// ─── Country data ──────────────────────────────────────────────────────────
const visitedCountries = {
  "Jamaica": {
    label: "Central America & Caribbean",
    desc: "Blue Mountains above the clouds and coastline that pulses with sound — Jamaica is all rhythm and green.",
    photos: 63, regions: 2, year: 2021,
    pins: [
      { name: "Negril", coords: [-78.3524, 18.2711], desc: "Seven Mile Beach and the western cliffs at golden hour — Jamaica before the resorts figured out how to bottle it." }
    ]
  },
  "Mexico": {
    label: "North America",
    desc: "Colonial silver cities and Pacific coastlines — Mexico rewards the traveller who ventures past the obvious.",
    photos: 143, regions: 3, year: 2018,
    pins: [
      { name: "CDMX", coords: [-99.1332, 19.4326], desc: "One of the great megalopolises, endlessly layered and impossible to exhaust." },
      { name: "Oaxaca", coords: [-96.7266, 17.0732], desc: "Mezcal, mole, and a city that moves at its own unhurried pace." }
    ]
  },
  "Colombia": {
    label: "South America",
    desc: "Cartagena's walled city at golden hour and the Coffee Region's green hillsides — Colombia is transformation made visible.",
    photos: 134, regions: 3, year: 2022,
    pins: [
      { name: "Cartagena", coords: [-75.5144, 10.3910], desc: "Bougainvillea over colonial walls in the Caribbean heat — one of the Americas' great cities." },
      { name: "Medellin", coords: [-75.5636, 6.2442], desc: "A city that rewrote its own story, built into a valley of perpetual spring." }
    ]
  },
  "Ecuador": {
    label: "South America",
    desc: "The Avenue of Volcanoes and Galápagos waters unchanged since Darwin — Ecuador compresses a continent into one small country.",
    photos: 112, regions: 3, year: 2022,
    pins: [
      { name: "Isabela", coords: [-91.0750, -0.9560], desc: "The largest Galápagos island — volcanic craters, penguins, and iguanas sharing the shoreline." },
      { name: "San Cristóbal", coords: [-89.4340, -0.9058], desc: "The oldest of the Galápagos islands, where sea lions sleep on the benches." },
      { name: "Santa Cruz", coords: [-90.3515, -0.7393], desc: "The heart of the Galápagos — giant tortoises in the wild, just as Darwin found them." }
    ]
  },
  "Bolivia": {
    label: "South America",
    desc: "Salar de Uyuni's mirror of sky and the world's most surreal landscapes — Bolivia asks you to redefine what earth looks like.",
    photos: 98, regions: 2, year: 2022,
    pins: [
      { name: "Uyuni", coords: [-66.8255, -20.4603], desc: "The world's largest salt flat, perfect mirror at dawn — a place that makes every frame feel inadequate." },
      { name: "La Paz", coords: [-68.1193, -16.5000], desc: "The world's highest capital city, perpetually in motion between the mountains." }
    ]
  },
  "Peru": {
    label: "South America",
    desc: "Machu Picchu in cloud, Lake Titicaca at altitude — Peru exists at the edge of the visible world.",
    photos: 189, regions: 4, year: 2022,
    pins: [
      { name: "Paracas", coords: [-76.2506, -13.8314], desc: "Rust-red cliffs meeting the Pacific — a collision of extremes that produces something unexpectedly beautiful." }
    ]
  },
  "Morocco": {
    label: "Africa · North",
    desc: "The medinas of Fes and the Sahara at dawn — Morocco is light and shadow in their most theatrical forms.",
    photos: 218, regions: 5, year: 2021,
    pins: [
      { name: "Casablanca", coords: [-7.5898, 33.5731], desc: "Morocco's beating commercial heart — the Hassan II Mosque rising from the Atlantic's edge." },
      { name: "Chefchaouen", coords: [-5.2636, 35.1688], desc: "The blue city painted in dreamlight — every alley a photograph." },
      { name: "Essaouira", coords: [-9.7595, 31.5085], desc: "A wind-battered Atlantic port of whitewashed walls and blue boats." },
      { name: "Ifrane", coords: [-5.1118, 33.5228], desc: "Morocco's unlikely alpine town — cedar forests, snow in winter, and Barbary macaques." },
      { name: "Imsouane", coords: [-9.8167, 30.8333], desc: "A tiny fishing village with one of Africa's longest waves and very little else." },
      { name: "Marrakech", coords: [-7.9811, 31.6295], desc: "Djemaa el-Fna at dusk — the world's greatest open-air theatre, ancient and relentless." },
      { name: "Meknes", coords: [-5.5472, 33.8951], desc: "The imperial city that history overlooked, all the more extraordinary for it." },
      { name: "Merzouga", coords: [-4.0084, 31.0998], desc: "The gateway to the Erg Chebbi dunes — the Sahara at its most photogenic." },
      { name: "Ourzazate", coords: [-6.8934, 30.9189], desc: "The door to the desert — kasbah walls glowing gold against the Atlas." },
      { name: "Fez", coords: [-4.9998, 34.0181], desc: "The world's largest living medieval city — a labyrinth of craft and 1,200 years of continuity." }
    ]
  },
  "Egypt": {
    label: "Africa · North",
    desc: "The pyramids at the edge of Cairo's smog and the Nile at first light — Egypt is mythology made stone.",
    photos: 229, regions: 4, year: 2020,
    pins: [
      { name: "White Desert", coords: [27.3833, 27.7167], desc: "Chalk formations rising from flat sand — the Egypt that exists entirely outside the usual itinerary." },
      { name: "Abu Simbel", coords: [31.6258, 22.3372], desc: "Ramesses II carved into the cliff face — moved stone by stone to save it from the rising Nile." },
      { name: "Sinai", coords: [33.9750, 28.5388], desc: "Desert mountains meeting the Red Sea — one of earth's great convergences of landscape and colour." },
      { name: "Cairo", coords: [31.2357, 30.0444], desc: "A city of 20 million living alongside 5,000 years of history — overwhelming and extraordinary." },
      { name: "Giza", coords: [31.1342, 29.9773], desc: "The last wonder of the ancient world — no photograph prepares you for the scale of it." },
      { name: "Luxor", coords: [32.6396, 25.6872], desc: "The world's greatest open-air museum — temples, tombs, and the Nile at first light." },
      { name: "Nile", coords: [32.8998, 26.8206], desc: "The river that made civilisation possible — still the spine of the country after five millennia." },
      { name: "Aswan", coords: [32.8998, 24.0889], desc: "The gentlest city on the Nile — Nubian colour, feluccas at sunset, and the cataract below." }
    ]
  },
  "Greece": {
    label: "Europe · South",
    desc: "Cycladic whitewash and Byzantine ruins — Greece is a meditation on light, stone, and the passage of time.",
    photos: 211, regions: 5, year: 2018,
    pins: [
      { name: "Athens", coords: [23.7275, 37.9838], desc: "Three thousand years of Western civilisation compressed into one extraordinary hilltop city." },
      { name: "Milos", coords: [24.4395, 36.7219], desc: "Volcanic sea caves, coloured fishing villages, and the most dramatic coastline in the Cyclades." },
      { name: "Paros", coords: [25.1489, 37.0853], desc: "A Cycladic island that balances beauty and livability better than almost any other." }
    ]
  },
  "Italy": {
    label: "Europe · South",
    desc: "Dolomite peaks and crumbling Roman grandeur — Italy is beauty in its most unself-conscious form.",
    photos: 312, regions: 7, year: 2017,
    pins: [
      { name: "Milan", coords: [9.1859, 45.4654], desc: "Fashion, finance, and the Last Supper — Italy's most forward-looking city, with the Duomo at its heart." }
    ]
  },
  "Kyrgyzstan": {
    label: "Central Asia",
    desc: "Nomadic yurt camps and the Tian Shan mountains — Kyrgyzstan is one of the last truly wild frontiers.",
    photos: 201, regions: 5, year: 2022,
    pins: [
      { name: "Burana", coords: [74.8000, 42.7333], desc: "A lone minaret rising from the steppe — the last remnant of the ancient Silk Road city of Balasagun." },
      { name: "Song Kol", coords: [75.1500, 41.8333], desc: "A high alpine lake at 3,016 metres ringed by yurt camps and open steppe." },
      { name: "Issyk Kul", coords: [77.0000, 42.4500], desc: "The world's second largest alpine lake — warm enough to swim, dramatic enough to command silence." },
      { name: "Skazka", coords: [77.5833, 42.1167], desc: "The Fairy Tale Canyon — eroded red clay formations on the southern shore of Issyk Kul." },
      { name: "Barskoon", coords: [78.2333, 42.1333], desc: "A waterfall canyon descending from the Tian Shan peaks into the Issyk Kul basin." },
      { name: "Jeti Oguz", coords: [78.2000, 42.3500], desc: "Seven red sandstone bulls rising from a green valley — Kyrgyzstan's most iconic natural formation." },
      { name: "Karakol", coords: [78.3936, 42.4897], desc: "The gateway to the eastern Tian Shan — a compact mountain town with a Russian-era wooden church." },
      { name: "Altyn Arashan", coords: [78.5167, 42.5167], desc: "A remote hot spring valley accessible only by foot or horse — the mountains at their most undisturbed." },
      { name: "Kochkor", coords: [75.7500, 42.2167], desc: "A quiet steppe town famous for its shyrdak felt rugs and the gateway to Song Kol lake." }
    ]
  },
  "Kazakhstan": {
    label: "Central Asia",
    desc: "Endless steppe broken by canyon lands and Soviet relics — Kazakhstan defies every expectation.",
    photos: 167, regions: 4, year: 2022,
    pins: [
      { name: "Charyn", coords: [79.0833, 43.3500], desc: "Kazakhstan's answer to the Grand Canyon — a 150-metre deep canyon of orange rock formations." },
      { name: "Saty", coords: [78.9667, 43.0833], desc: "A remote mountain village at the gateway to the Kolsai lakes and Charyn Canyon." },
      { name: "Kolsai", coords: [78.9833, 43.0500], desc: "Three glacial lakes stacked in a spruce-forested canyon in the Tian Shan foothills." },
      { name: "Altyn Emel", coords: [78.6333, 43.7167], desc: "A vast national park of singing dunes, wild horses, and ancient Scythian burial mounds." },
      { name: "Almaty", coords: [76.8512, 43.2220], desc: "The former capital — mountains rising directly above the city, more European than Central Asian in feel." },
      { name: "Astana", coords: [71.4460, 51.1801], desc: "A futurist capital built from scratch on the steppe — one of the world's most architecturally surreal cities." }
    ]
  },
  "Türkiye": {
    label: "Europe · East / Asia",
    desc: "Cappadocia's fairy chimneys and Istanbul's layered history — Türkiye straddles worlds, literally and culturally.",
    photos: 234, regions: 6, year: 2020,
    pins: [
      { name: "Fethiye", coords: [29.1167, 36.6219], desc: "Turquoise waters and ancient Lycian tombs carved into the cliff face above the harbour." },
      { name: "Kaş", coords: [29.6400, 36.2014], desc: "A tiny Aegean town of bougainvillea, clear water, and boats going nowhere slowly." }
    ]
  },
  "UAE": {
    label: "Middle East",
    desc: "Dubai's vertical ambition and Abu Dhabi's quieter grandeur — the UAE is the future arriving ahead of schedule.",
    photos: 88, regions: 2, year: 2021,
    pins: [
      { name: "Dubai", coords: [55.2708, 25.2048], desc: "A skyline that changed what cities thought was possible — audacious and entirely itself." },
      { name: "Abu Dhabi", coords: [54.3773, 24.4539], desc: "Sheikh Zayed Mosque — white marble and silence at a scale that stops conversation." },
      { name: "Sharjah", coords: [55.8500, 25.1000], desc: "The UAE's cultural capital — desert dunes, art museums, and a quieter side of the Emirates." }
    ]
  },
  "Oman": {
    label: "Middle East",
    desc: "Wadis carved into limestone and dhow harbours at dusk — Oman is the Arab world at its most serene.",
    photos: 183, regions: 5, year: 2021,
    pins: [
      { name: "Musandam", coords: [56.2639, 26.2000], desc: "Fjords in Arabia — dramatic limestone cliffs dropping into the Strait of Hormuz." },
      { name: "Muscat", coords: [58.5922, 23.5880], desc: "A capital of whitewashed elegance built between desert mountains and the Gulf of Oman." },
      { name: "Nizwa", coords: [57.5333, 22.9333], desc: "Oman's ancient interior capital — a great round fort, a date souk, and the stillness of the mountains beyond." },
      { name: "Salalah", coords: [54.0924, 17.0151], desc: "Arabia's green secret — monsoon mists and frankincense trees in the deep south." }
    ]
  }
};

// ─── ISO numeric ID → country name ────────────────────────────────────────
const countryNameMap = {
  "388": "Jamaica",
  "484": "Mexico",
  "170": "Colombia",
  "218": "Ecuador",
  "068": "Bolivia",
  "604": "Peru",
  "504": "Morocco",
  "818": "Egypt",
  "300": "Greece",
  "380": "Italy",
  "792": "Türkiye",
  "784": "UAE",
  "512": "Oman",
  "417": "Kyrgyzstan",
  "398": "Kazakhstan"
};

// ─── Country → world region ────────────────────────────────────────────────
const visitedCountryToRegion = {
  "Jamaica": "Central America & Caribbean",
  "Mexico": "North America",
  "Colombia": "South America",
  "Ecuador": "South America",
  "Bolivia": "South America",
  "Peru": "South America",
  "Morocco": "Africa",
  "Egypt": "Africa",
  "Greece": "Europe",
  "Italy": "Europe",
  "Türkiye": "Europe",
  "UAE": "West/Central Asia",
  "Oman": "West/Central Asia",
  "Kyrgyzstan": "West/Central Asia",
  "Kazakhstan": "West/Central Asia"
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

g.append("path").datum({type:"Sphere"}).attr("class","sphere").attr("d", path);
g.append("path").datum(d3.geoGraticule()()).attr("class","graticule").attr("d", path);

// ─── State ─────────────────────────────────────────────────────────────────
let currentRegion = null;
let currentCountry = null;
let currentState = null;

const tooltip   = document.getElementById("tooltip");
const infoPanel = document.getElementById("info-panel");
const hint      = document.getElementById("hint");
const regionPanel = document.getElementById("region-panel");
const statePanel = document.getElementById("state-panel");
const stateLayer = g.append("g").attr("id", "state-layer");

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
        if (currentRegion) {
          if (visitedCountries[name] && visitedCountryToRegion[name] === currentRegion)
            selectCountry(name, d, this);
        } else {
          if (regionName && regions[regionName]?.visited) selectRegion(regionName);
        }
      });

    g.append("path").datum(borders)
      .attr("fill","none").attr("stroke","#2a2520").attr("stroke-width",0.3).attr("d", path);

    // Add pins for all countries
    Object.entries(visitedCountries).forEach(([country, data]) => {
      data.pins.forEach(pin => addPin(pin, country));
    });
  });

// ─── Add a pin ─────────────────────────────────────────────────────────────
function addPin(pin, country) {
  const [x, y] = projection(pin.coords);
  if (!x || !y) return;
  const pinG = g.append("g")
    .attr("class", "pin-group")
    .attr("transform", `translate(${x},${y})`)
    .attr("data-country", country)
    .attr("data-pin", pin.name)
    .style("display", "none");
  pinG.append("circle").attr("class","pin-pulse").attr("r",1.5);
  pinG.append("circle").attr("class","pin-outer").attr("r",2);
  pinG.append("circle").attr("class","pin-inner").attr("r",0.8);
  pinG.on("mouseover", function() { tooltip.style.opacity="1"; tooltip.textContent=pin.name; })
     .on("mousemove", function(event) {
        tooltip.style.left=(event.clientX+14)+"px"; tooltip.style.top=(event.clientY-28)+"px"; })
     .on("mouseout", function() { tooltip.style.opacity="0"; })
     .on("click", function() { goToDestination(pin.name); });
}

// ─── Country name lookup ───────────────────────────────────────────────────
function getCountryName(id) {
  const idStr = String(id).padStart(3, "0");
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
  document.getElementById("rp-photos").textContent = visitedInRegion.reduce((s,c) => s + visitedCountries[c].pins.length, 0);

  const listEl = document.getElementById("rp-countries");
  listEl.innerHTML = "";
  visitedInRegion.forEach(c => {
    const item = document.createElement("div");
    item.className = "rp-country-item";
    item.textContent = c;
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
  zoomToRegion(regionName);
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
  zoomToRegion(currentRegion);
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

  setBreadcrumb({ region: currentRegion, country: name });

  const pins = data.pins;
  if (pins.length === 1) {
    document.getElementById("panel-btn").textContent = "Explore Destination";
    document.getElementById("panel-btn").onclick = () => goToDestination(pins[0].name);
  } else {
    document.getElementById("panel-btn").textContent = "Select a Destination";
    document.getElementById("panel-btn").onclick = () => infoPanel.classList.remove("visible");
  }

  infoPanel.classList.add("visible");
  regionPanel.classList.remove("visible");
  statePanel.classList.remove("visible");
  hint.classList.add("hidden");

  d3.selectAll(".pin-group").style("display", function() {
    return this.dataset.country === name ? null : "none";
  }).classed("visible", function() {
    return this.dataset.country === name;
  });

  zoomToFeature(feature);
}

// ─── Destination navigation ────────────────────────────────────────────────
function slugify(str) {
  return str.toLowerCase()
    .replace(/[àáâãäå]/g,"a").replace(/[èéêë]/g,"e")
    .replace(/[ìíîï]/g,"i").replace(/[òóôõö]/g,"o")
    .replace(/[ùúûü]/g,"u").replace(/[ñ]/g,"n")
    .replace(/[ç]/g,"c").replace(/ș|ş/g,"s").replace(/ț|ţ/g,"t")
    .replace(/[^a-z0-9\s-]/g,"")
    .replace(/\s+/g,"-").replace(/-+/g,"-").trim();
}

function goToDestination(pinName) {
  window.location.href = "/destinations/" + slugify(pinName);
}

// ─── Zoom helpers ────────────────────────────────────────────────────────────
// Visible area of the map = container minus whatever the fixed navbar covers.
function topInset() {
  const nav = document.querySelector(".w-nav, .navbar");
  if (!nav) return 0;
  const navBottom = nav.getBoundingClientRect().bottom;
  const mapTop = container.getBoundingClientRect().top;
  return Math.max(0, Math.min(height * 0.3, navBottom - mapTop));
}

// Fit a projected box [[x0,y0],[x1,y1]] into the visible area.
function fitBox([[x0,y0],[x1,y1]], fill, minScale, maxScale, duration) {
  const top = topInset() + 16;          // breathing room under the navbar
  const bottom = 24;
  const availW = width, availH = Math.max(100, height - top - bottom);
  const dx = Math.abs(x1-x0), dy = Math.abs(y1-y0);
  const cx = (x0+x1)/2, cy = (y0+y1)/2;
  const scale = Math.max(minScale, Math.min(maxScale, fill / Math.max(dx/availW, dy/availH)));
  const tx = availW/2 - scale*cx;
  const ty = top + availH/2 - scale*cy;
  g.transition().duration(duration).ease(d3.easeCubicInOut)
   .attr("transform",`translate(${tx},${ty}) scale(${scale})`);
}

function zoomToFeature(feature) {
  fitBox(path.bounds(feature), 0.75, 1.5, 14, 850);
}

// Region box = hand-set bounds expanded to include every visited country in it.
function zoomToRegion(regionName) {
  const [[west,south],[east,north]] = regions[regionName].bounds;
  const p0 = projection([west,north]), p1 = projection([east,south]);
  let x0 = Math.min(p0[0],p1[0]), y0 = Math.min(p0[1],p1[1]);
  let x1 = Math.max(p0[0],p1[0]), y1 = Math.max(p0[1],p1[1]);
  d3.selectAll(".country.visited").each(function(d) {
    if (visitedCountryToRegion[getCountryName(d.id)] !== regionName) return;
    const [[a,b],[c,e]] = path.bounds(d);
    x0 = Math.min(x0,a); y0 = Math.min(y0,b); x1 = Math.max(x1,c); y1 = Math.max(y1,e);
  });
  fitBox([[x0,y0],[x1,y1]], 0.85, 1.2, 10, 850);
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

// ─── Breadcrumb ────────────────────────────────────────────────────────────
function setBreadcrumb({ region, country, state } = {}) {
  const bcWorld   = document.getElementById("bc-world");
  const bcRegion  = document.getElementById("bc-region");
  const bcCountry = document.getElementById("bc-country");
  const bcState   = document.getElementById("bc-state");

  bcWorld.classList.toggle("active", !region && !country && !state);

  if (region) {
    bcRegion.textContent = region; bcRegion.style.display = "block";
    bcRegion.classList.toggle("active", !country && !state);
  } else { bcRegion.style.display = "none"; }

  if (country) {
    bcCountry.textContent = country; bcCountry.style.display = "block";
    bcCountry.classList.toggle("active", !state);
  } else { bcCountry.style.display = "none"; }

  if (state) {
    bcState.textContent = state; bcState.style.display = "block";
    bcState.classList.add("active");
  } else { bcState.style.display = "none"; }
}

// ─── Resize ────────────────────────────────────────────────────────────────
window.addEventListener("resize", () => {
  width = container.clientWidth; height = container.clientHeight;
  projection.scale(width/6.2).translate([width/2, height/2]);
  svg.selectAll("path").attr("d", path);
  d3.selectAll(".pin-group").each(function() {
    const country = this.dataset.country;
    const pinName = this.dataset.pin;
    const pin = visitedCountries[country]?.pins.find(p => p.name === pinName);
    if (!pin) return;
    const [x,y] = projection(pin.coords);
    if (x && y) d3.select(this).attr("transform",`translate(${x},${y})`);
  });
});

// ─── Escape key ────────────────────────────────────────────────────────────
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (currentCountry) resetToRegion();
  else if (currentRegion) resetView();
});
