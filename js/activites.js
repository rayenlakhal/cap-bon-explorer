
var activites = [
  {
    id: "A01", titre: "Découverte de la médina", lieu: "Nabeul", categorie: "Culture", duree: "2 h", prix: 20,
    image: "images/medina.jpg",
    accroche: "Flânez au cœur des ruelles historiques et découvrez l'âme authentique de Nabeul.",
    description: "Partez pour une immersion guidée au cœur des ruelles blanches et des voûtes séculaires de la médina de Nabeul. Vous découvrirez l'architecture traditionnelle tunisienne, les portes cloutées typiques et l'effervescence des souks d'épices et d'aromates. Le parcours inclut des arrêts auprès des artisans dinandiers et nattiers perpétuant des savoir-faire ancestraux. Une expérience culturelle chaleureuse et incontournable pour s'imprégner de l'hospitalité du Cap Bon."
  },
  {
    id: "A02", titre: "Atelier d’initiation à la poterie", lieu: "Nabeul", categorie: "Artisanat", duree: "1 h 30", prix: 35,
    image: "images/poterier.jpg",
    accroche: "Façonnez l'argile sur un tour traditionnel sous l'œil bienveillant d'un maître potier.",
    description: "Nabeul est réputée depuis l'Antiquité pour sa céramique et son argile d'une exceptionnelle finesse. Cet atelier pratique vous installe directement devant un tour de potier traditionnel aux côtés d'un artisan local passionné. Vous apprendrez les gestes fondamentaux du centrage, du creusage et de l'élévation de la terre pour modeler votre propre récipient. Chaque participant repart avec sa création séchée et des souvenirs tactiles inoubliables."
  },
  {
    id: "A03", titre: "Parcours découverte de Kerkouane", lieu: "Kerkouane", categorie: "Culture", duree: "2 h 30", prix: 30,
    image: "images/Kerkouane.jpg",
    accroche: "Explorez l'unique cité punique intacte au monde, classée au patrimoine de l'UNESCO.",
    description: "Kerkouane offre un témoignage archéologique exceptionnel car elle n'a jamais été reconstruite par les Romains après sa destruction. Accompagné d'un guide passionné, vous marcherez au milieu des maisons phéniciennes préservées, de leurs célèbres baignoires en mosaïque rose et de leurs cours intérieures. La visite longe les falaises maritimes et offre une vue spectaculaire sur les eaux turquoise de la péninsule. Un voyage fascinant dans le temps et l'histoire carthaginoise."
  },
  {
    id: "A04", titre: "Randonnée découverte", lieu: "Djebel Abderrahmane", categorie: "Nature", duree: "3 h", prix: 25,
    image: "images/rond",
    accroche: "Randonnez sur la crête boisée du Cap Bon avec panoramas saisissants sur les deux golfes.",
    description: "Le Djebel Abderrahmane constitue la véritable colonne vertébrale verte de la péninsule du Cap Bon. Ce parcours de randonnée accessible serpente entre forêts de pins d'Alep, maquis méditerranéen odorant et crêtes rocheuses. Au sommet, vous profiterez d'une vue panoramique imprenable qui embrasse à la fois le golfe d'Hammamet et le golfe de Tunis. C'est une bouffée d'oxygène pur pour les amateurs d'écotourisme et de grands espaces préservés."
  },
  {
    id: "A05", titre: "Circuit du littoral", lieu: "Kélibia", categorie: "Nature", duree: "3 h", prix: 40,
    image: "images/Kélibia.jpg",
    accroche: "Balade côtière entre plages de sable blanc immaculé et ascension de la forteresse byzantine.",
    description: "Kélibia séduit immédiatement par la clarté légendaire de ses eaux marines et la silhouette imposante de son fort perché. Ce circuit côtier vous invite à longer les criques sauvages avant de monter aux remparts de la citadelle byzantine dominant la mer. De là-haut, par temps clair, la côte sicilienne se profile à l'horizon lointain. La balade se termine par une dégustation rafraîchissante au bord du port de pêche traditionnel."
  },
  {
    id: "A06", titre: "Peinture sur céramique", lieu: "Nabeul", categorie: "Artisanat", duree: "2 h", prix: 25,
    image: "images/cira.jpg",
    accroche: "Exprimez votre créativité sur carreau ou assiette en appliquant les motifs floraux andalous.",
    description: "La faïence de Nabeul se distingue par ses émaux lumineux, son jaune safran, son vert oxyde et son bleu cobalt profond. Durant cet atelier créatif, vous découvrirez les pigments minéraux et les techniques de tracé au pinceau fin sur carreau d'émail cru. Vous pourrez reproduire des motifs géométriques traditionnels ou laisser libre cours à votre propre inspiration artistique. Votre œuvre sera ensuite émaillée et cuite dans les fours de l'atelier pour un rendu durable."
  },
  {
    id: "A07", titre: "Découverte d’un marché local", lieu: "Nabeul", categorie: "Découverte", duree: "1 h 30", prix: 15,
    image: "",
    accroche: "Plongez dans les couleurs, les parfums de fleurs d'oranger et les saveurs des terroirs locaux.",
    description: "Le grand marché hebdomadaire de Nabeul est l'un des plus vivants et colorés de toute la Tunisie. Au fil des étals, vous goûterez aux agrumes gorgés de soleil, à l'authentique harissa artisanale fumée et aux eaux florales distillées sur place. C'est l'occasion idéale d'échanger directement avec les petits producteurs ruraux et les marchands d'épices. Une promenade sensorielle et gourmande qui réjouira tous les curieux de traditions culinaires."
  },
  {
    id: "A08", titre: "Promenade photographique", lieu: "Hammamet", categorie: "Découverte", duree: "2 h", prix: 30,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    accroche: "Immortalisez les lumières dorées sur les barques bleues et les remparts de la médina marine.",
    description: "Hammamet a fasciné des générations de peintres et d'écrivains grâce à sa lumière marine douce et singulière. Cette promenade guidée orientée photographie vous emmène le long de la jetée des pêcheurs et sur le chemin de ronde de la médina. Vous apprendrez à capter les reflets aquatiques, les textures des pierres patinées et les contrastes vifs des barques en bois. Accessible à tous, que vous disposiez d'un boîtier reflex ou d'un simple smartphone."
  }
];


var categorieChoisie = "Toutes";


var champRecherche = document.getElementById("search-input");
var boutonsCategorie = document.querySelectorAll(".category-filter-btn");
var menuTri = document.getElementById("sort-select");
var grille = document.getElementById("activities-grid");
var compteur = document.getElementById("compteur-activites");
var messageVide = document.getElementById("no-result-message");

function simplifier(texte) {
  return texte.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function mettreAJour() {
  var motCherche = simplifier(champRecherche.value.trim());
  var resultat = [];

  for (var i = 0; i < activites.length; i++) {
    var a = activites[i];

    var bonneCategorie = (categorieChoisie === "Toutes" || a.categorie === categorieChoisie);
    var bonMot = simplifier(a.titre).includes(motCherche) || simplifier(a.lieu).includes(motCherche);

    if (bonneCategorie && bonMot) {
      resultat.push(a);
    }
  }

  if (menuTri.value === "price-asc") {
    resultat.sort(function (a, b) { return a.prix - b.prix; });
  }
  if (menuTri.value === "price-desc") {
    resultat.sort(function (a, b) { return b.prix - a.prix; });
  }
  if (menuTri.value === "title-asc") {
    resultat.sort(function (a, b) { return a.titre.localeCompare(b.titre); });
  }

  compteur.textContent = resultat.length;

  if (resultat.length === 0) {
    messageVide.classList.remove("d-none");
  } else {
    messageVide.classList.add("d-none");
  }

  var html = "";
  for (var j = 0; j < resultat.length; j++) {
    var act = resultat[j];
    html += '<div class="col-12 col-md-6 col-lg-3 mb-4">' +
      '<article class="card card-activite h-100">' +
        '<img src="' + act.image + '" class="card-img-top" alt="' + act.titre + '">' +
        '<div class="card-body d-flex flex-column">' +
          '<div class="d-flex justify-content-between align-items-center mb-2">' +
            '<span class="badge bg-secondary">' + act.categorie + '</span>' +
            '<strong class="text-success">' + act.prix + ' TND</strong>' +
          '</div>' +
          '<h3 class="card-title h6 mb-2">' + act.titre + '</h3>' +
          '<p class="small text-muted mb-2">' + act.lieu + ' • ' + act.duree + '</p>' +
          '<p class="card-text small text-secondary mb-3 flex-grow-1">' + act.accroche + '</p>' +
          '<div class="mt-auto d-flex gap-2">' +
            '<button type="button" class="btn btn-sm btn-outline-secondary flex-grow-1" onclick="ouvrirDetails(\'' + act.id + '\')">Détails</button>' +
            '<a href="reservation.html?id=' + act.id + '" class="btn btn-sm btn-cbe-primary">Réserver</a>' +
          '</div>' +
        '</div>' +
      '</article>' +
    '</div>';
  }
  grille.innerHTML = html;
}

function ouvrirDetails(id) {

  var act = null;
  for (var i = 0; i < activites.length; i++) {
    if (activites[i].id === id) {
      act = activites[i];
    }
  }

  document.getElementById("modalActivityTitle").textContent = act.id + " — " + act.titre;
  document.getElementById("modalActivityBadge").textContent = act.categorie;
  document.getElementById("modalActivityImage").src = act.image;
  document.getElementById("modalActivityLieu").textContent = act.lieu;
  document.getElementById("modalActivityDuree").textContent = act.duree;
  document.getElementById("modalActivityPrix").textContent = act.prix + " TND / personne";
  document.getElementById("modalActivityDesc").textContent = act.description;
  document.getElementById("modalActivityReserveLink").href = "reservation.html?id=" + act.id;


  var fenetre = new bootstrap.Modal(document.getElementById("activityModal"));
  fenetre.show();
}


champRecherche.oninput = mettreAJour;


menuTri.onchange = mettreAJour;

for (var k = 0; k < boutonsCategorie.length; k++) {
  boutonsCategorie[k].onclick = function () {
    // Remettre tous les boutons "normaux"
    for (var m = 0; m < boutonsCategorie.length; m++) {
      boutonsCategorie[m].classList.remove("active", "btn-cbe-primary");
      boutonsCategorie[m].classList.add("btn-outline-secondary");
    }
    // Mettre le bouton cliqué en couleur
    this.classList.add("active", "btn-cbe-primary");
    this.classList.remove("btn-outline-secondary");

    categorieChoisie = this.getAttribute("data-category");
    mettreAJour();
  };
}

mettreAJour();
