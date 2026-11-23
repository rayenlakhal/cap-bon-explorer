const ACTIVITES = [
  {
    id: "A01",
    titre: "Découverte de la médina",
    lieu: "Nabeul",
    categorie: "Culture",
    duree: "2 h",
    prix: 20,
    image: "images/a01-medina-nabeul.jpg",
    accroche: "Flânez au cœur des ruelles historiques et découvrez l'âme authentique de Nabeul.",
    description: "Partez pour une immersion guidée au cœur des ruelles blanches et des voûtes séculaires de la médina de Nabeul. Vous découvrirez l'architecture traditionnelle tunisienne, les portes cloutées typiques et l'effervescence des souks d'épices et d'aromates. Le parcours inclut des arrêts auprès des artisans dinandiers et nattiers perpétuant des savoir-faire ancestraux. Une expérience culturelle chaleureuse et incontournable pour s'imprégner de l'hospitalité du Cap Bon."
  },
  {
    id: "A02",
    titre: "Atelier d’initiation à la poterie",
    lieu: "Nabeul",
    categorie: "Artisanat",
    duree: "1 h 30",
    prix: 35,
    image: "images/a02-poterie-nabeul.jpg",
    accroche: "Façonnez l'argile sur un tour traditionnel sous l'œil bienveillant d'un maître potier.",
    description: "Nabeul est réputée depuis l'Antiquité pour sa céramique et son argile d'une exceptionnelle finesse. Cet atelier pratique vous installe directement devant un tour de potier traditionnel aux côtés d'un artisan local passionné. Vous apprendrez les gestes fondamentaux du centrage, du creusage et de l'élévation de la terre pour modeler votre propre récipient. Chaque participant repart avec sa création séchée et des souvenirs tactiles inoubliables."
  },
  {
    id: "A03",
    titre: "Parcours découverte de Kerkouane",
    lieu: "Kerkouane",
    categorie: "Culture",
    duree: "2 h 30",
    prix: 30,
    image: "images/a03-kerkouane.jpg",
    accroche: "Explorez l'unique cité punique intacte au monde, classée au patrimoine de l'UNESCO.",
    description: "Kerkouane offre un témoignage archéologique exceptionnel car elle n'a jamais été reconstruite par les Romains après sa destruction. Accompagné d'un guide passionné, vous marcherez au milieu des maisons phéniciennes préservées, de leurs célèbres baignoires en mosaïque rose et de leurs cours intérieures. La visite longe les falaises maritimes et offre une vue spectaculaire sur les eaux turquoise de la péninsule. Un voyage fascinant dans le temps et l'histoire carthaginoise."
  },
  {
    id: "A04",
    titre: "Randonnée découverte",
    lieu: "Djebel Abderrahmane",
    categorie: "Nature",
    duree: "3 h",
    prix: 25,
    image: "images/a04-djebel.jpg",
    accroche: "Randonnez sur la crête boisée du Cap Bon avec panoramas saisissants sur les deux golfes.",
    description: "Le Djebel Abderrahmane constitue la véritable colonne vertébrale verte de la péninsule du Cap Bon. Ce parcours de randonnée accessible serpente entre forêts de pins d'Alep, maquis méditerranéen odorant et crêtes rocheuses. Au sommet, vous profiterez d'une vue panoramique imprenable qui embrasse à la fois le golfe d'Hammamet et le golfe de Tunis. C'est une bouffée d'oxygène pur pour les amateurs d'écotourisme et de grands espaces préservés."
  },
  {
    id: "A05",
    titre: "Circuit du littoral",
    lieu: "Kélibia",
    categorie: "Nature",
    duree: "3 h",
    prix: 40,
    image: "images/a05-kelibia.jpg",
    accroche: "Balade côtière entre plages de sable blanc immaculé et ascension de la forteresse byzantine.",
    description: "Kélibia séduit immédiatement par la clarté légendaire de ses eaux marines et la silhouette imposante de son fort perché. Ce circuit côtier vous invite à longer les criques sauvages avant de monter aux remparts de la citadelle byzantine dominant la mer. De là-haut, par temps clair, la côte sicilienne se profile à l'horizon lointain. La balade se termine par une dégustation rafraîchissante au bord du port de pêche traditionnel."
  },
  {
    id: "A06",
    titre: "Peinture sur céramique",
    lieu: "Nabeul",
    categorie: "Artisanat",
    duree: "2 h",
    prix: 25,
    image: "images/a06-ceramique.jpg",
    accroche: "Exprimez votre créativité sur carreau ou assiette en appliquant les motifs floraux andalous.",
    description: "La faïence de Nabeul se distingue par ses émaux lumineux, son jaune safran, son vert oxyde et son bleu cobalt profond. Durant cet atelier créatif, vous découvrirez les pigments minéraux et les techniques de tracé au pinceau fin sur carreau d'émail cru. Vous pourrez reproduire des motifs géométriques traditionnels ou laisser libre cours à votre propre inspiration artistique. Votre œuvre sera ensuite émaillée et cuite dans les fours de l'atelier pour un rendu durable."
  },
  {
    id: "A07",
    titre: "Découverte d’un marché local",
    lieu: "Nabeul",
    categorie: "Découverte",
    duree: "1 h 30",
    prix: 15,
    image: "images/a07-marche-nabeul.jpg",
    accroche: "Plongez dans les couleurs, les parfums de fleurs d'oranger et les saveurs des terroirs locaux.",
    description: "Le grand marché hebdomadaire de Nabeul est l'un des plus vivants et colorés de toute la Tunisie. Au fil des étals, vous goûterez aux agrumes gorgés de soleil, à l'authentique harissa artisanale fumée et aux eaux florales distillées sur place. C'est l'occasion idéale d'échanger directement avec les petits producteurs ruraux et les marchands d'épices. Une promenade sensorielle et gourmande qui réjouira tous les curieux de traditions culinaires."
  },
  {
    id: "A08",
    titre: "Promenade photographique",
    lieu: "Hammamet",
    categorie: "Découverte",
    duree: "2 h",
    prix: 30,
    image: "images/a08-hammamet.jpg",
    accroche: "Immortalisez les lumières dorées sur les barques bleues et les remparts de la médina marine.",
    description: "Hammamet a fasciné des générations de peintres et d'écrivains grâce à sa lumière marine douce et singulière. Cette promenade guidée orientée photographie vous emmène le long de la jetée des pêcheurs et sur le chemin de ronde de la médina. Vous apprendrez à capter les reflets aquatiques, les textures des pierres patinées et les contrastes vifs des barques en bois. Accessible à tous, que vous disposiez d'un boîtier reflex ou d'un simple smartphone."
  }
];

let currentCategory = "Toutes";
let searchQuery = "";
let currentSort = "default";

document.addEventListener('DOMContentLoaded', () => {
  initCatalogue();
});

function initCatalogue() {
  const searchInput = document.getElementById('search-input');
  const categoryFilters = document.querySelectorAll('.category-filter-btn');
  const sortSelect = document.getElementById('sort-select');

  renderActivities(ACTIVITES);

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  categoryFilters.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryFilters.forEach(b => {
        b.classList.remove('active', 'btn-cbe-primary');
        b.classList.add('btn-outline-secondary');
      });
      
      btn.classList.add('active', 'btn-cbe-primary');
      btn.classList.remove('btn-outline-secondary');
      
      currentCategory = btn.getAttribute('data-category') || "Toutes";
      applyFilters();
    });
  });

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      applyFilters();
    });
  }

  document.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.btn-detail-activity');
    if (detailBtn) {
      const actId = detailBtn.getAttribute('data-id');
      openActivityModal(actId);
    }
  });
}

function normalizeText(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function applyFilters() {
  const normSearch = normalizeText(searchQuery);

  let filtered = ACTIVITES.filter(item => {
    const matchCategory = (currentCategory === "Toutes") || (item.categorie === currentCategory);
    const normTitle = normalizeText(item.titre);
    const normLieu = normalizeText(item.lieu);
    const matchSearch = normSearch === "" || normTitle.includes(normSearch) || normLieu.includes(normSearch);

    return matchCategory && matchSearch;
  });

  if (currentSort === "price-asc") {
    filtered.sort((a, b) => a.prix - b.prix);
  } else if (currentSort === "price-desc") {
    filtered.sort((a, b) => b.prix - a.prix);
  } else if (currentSort === "title-asc") {
    filtered.sort((a, b) => a.titre.localeCompare(b.titre));
  }

  renderActivities(filtered);
}

function renderActivities(list) {
  const gridContainer = document.getElementById('activities-grid');
  const counterEl = document.getElementById('compteur-activites');
  const noResultEl = document.getElementById('no-result-message');

  if (!gridContainer) return;

  if (counterEl) {
    counterEl.textContent = list.length;
  }

  if (list.length === 0) {
    gridContainer.innerHTML = '';
    if (noResultEl) {
      noResultEl.classList.remove('d-none');
    }
    return;
  }

  if (noResultEl) {
    noResultEl.classList.add('d-none');
  }

  let html = '';
  list.forEach(item => {
    html += `
      <div class="col-12 col-md-6 col-lg-3 mb-4">
        <article class="card card-activite h-100">
          <img src="${item.image}" class="card-img-top" alt="${item.titre} à ${item.lieu}">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-secondary">${item.categorie}</span>
              <strong class="text-success">${item.prix} TND</strong>
            </div>
            <h3 class="card-title h6 mb-2">${item.titre}</h3>
            <p class="small text-muted mb-2">
              <i class="bi bi-geo-alt me-1"></i>${item.lieu} &bull; <i class="bi bi-clock me-1"></i>${item.duree}
            </p>
            <p class="card-text small text-secondary mb-3 flex-grow-1">${item.accroche}</p>
            <div class="mt-auto d-flex gap-2">
              <button type="button" class="btn btn-sm btn-outline-secondary flex-grow-1 btn-detail-activity" data-id="${item.id}">
                Détails
              </button>
              <a href="reservation.html?id=${item.id}" class="btn btn-sm btn-cbe-primary">
                Réserver
              </a>
            </div>
          </div>
        </article>
      </div>
    `;
  });

  gridContainer.innerHTML = html;
}

function openActivityModal(activityId) {
  const item = ACTIVITES.find(a => a.id === activityId);
  if (!item) return;

  const modalTitle = document.getElementById('modalActivityTitle');
  const modalBadge = document.getElementById('modalActivityBadge');
  const modalImage = document.getElementById('modalActivityImage');
  const modalLieu = document.getElementById('modalActivityLieu');
  const modalDuree = document.getElementById('modalActivityDuree');
  const modalPrix = document.getElementById('modalActivityPrix');
  const modalDesc = document.getElementById('modalActivityDesc');
  const modalReserveLink = document.getElementById('modalActivityReserveLink');

  if (modalTitle) modalTitle.textContent = `${item.id} — ${item.titre}`;
  if (modalBadge) {
    modalBadge.className = 'badge bg-secondary me-2';
    modalBadge.textContent = item.categorie;
  }
  if (modalImage) {
    modalImage.src = item.image;
    modalImage.alt = item.titre;
  }
  if (modalLieu) modalLieu.textContent = item.lieu;
  if (modalDuree) modalDuree.textContent = item.duree;
  if (modalPrix) modalPrix.textContent = `${item.prix} TND / personne`;
  if (modalDesc) modalDesc.textContent = item.description;
  if (modalReserveLink) modalReserveLink.href = `reservation.html?id=${item.id}`;

  const modalElement = document.getElementById('activityModal');
  if (modalElement && typeof bootstrap !== 'undefined') {
    const modalInstance = bootstrap.Modal.getOrCreateInstance(modalElement);
    modalInstance.show();
  }
}
