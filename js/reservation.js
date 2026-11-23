
var prix = {
  A01: 20, A02: 35, A03: 30, A04: 25,
  A05: 40, A06: 25, A07: 15, A08: 30
};

var noms = {
  A01: "Découverte de la médina — Nabeul",
  A02: "Atelier d’initiation à la poterie — Nabeul",
  A03: "Parcours découverte de Kerkouane — Kerkouane",
  A04: "Randonnée découverte — Djebel Abderrahmane",
  A05: "Circuit du littoral — Kélibia",
  A06: "Peinture sur céramique — Nabeul",
  A07: "Découverte d’un marché local — Nabeul",
  A08: "Promenade photographique — Hammamet"
};

var formulaire = document.getElementById("reservation-form");
var choixActivite = document.getElementById("activite");
var champParticipants = document.getElementById("participants");
var champDate = document.getElementById("date_visite");
var zoneErreurs = document.getElementById("form-alerts");
var zoneRecap = document.getElementById("recap-container");

function dateAujourdhui() {
  var d = new Date();
  var mois = String(d.getMonth() + 1).padStart(2, "0");
  var jour = String(d.getDate()).padStart(2, "0");
  return d.getFullYear() + "-" + mois + "-" + jour;
}

function calculer() {
  var prixUnitaire = prix[choixActivite.value];

  var personnes = parseInt(champParticipants.value);
  if (isNaN(personnes) || personnes < 1) {
    personnes = 1;
  }
  if (personnes > 6) {
    personnes = 6;
  }

  var sousTotal = prixUnitaire * personnes;

  var remise = 0;
  if (personnes >= 4) {
    remise = sousTotal * 0.1;
  }

  var total = sousTotal - remise;

  document.getElementById("display-unit-price").textContent = prixUnitaire + " TND";
  document.getElementById("display-subtotal").textContent = sousTotal + " TND";
  document.getElementById("display-discount").textContent = remise + " TND";
  document.getElementById("display-total").textContent = total + " TND";

  var badge = document.getElementById("display-discount-notice");
  if (personnes >= 4) {
    badge.classList.remove("d-none");
  } else {
    badge.classList.add("d-none");
  }

  return { personnes: personnes, sousTotal: sousTotal, remise: remise, total: total };
}

function valider() {
  var erreurs = [];

  var nom = document.getElementById("nom").value.trim();
  var prenom = document.getElementById("prenom").value.trim();
  var email = document.getElementById("email").value.trim();
  var telephone = document.getElementById("telephone").value.trim();
  var date = champDate.value;
  var personnes = parseInt(champParticipants.value);
  var type = document.querySelector('input[name="type_participation"]:checked');
  var accepte = document.getElementById("consentement").checked;

  var formeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (nom === "") {
    erreurs.push("Le nom est obligatoire.");
  }
  if (prenom === "") {
    erreurs.push("Le prénom est obligatoire.");
  }
  if (!formeEmail.test(email)) {
    erreurs.push("Veuillez saisir une adresse e-mail valide (ex: visiteur@exemple.tn).");
  }
  if (telephone === "") {
    erreurs.push("Le numéro de téléphone est obligatoire.");
  }
  if (date === "") {
    erreurs.push("La date souhaitée est obligatoire.");
  } else if (date < dateAujourdhui()) {
    erreurs.push("La date de réservation ne peut pas être antérieure à la date d'aujourd'hui.");
  }
  if (isNaN(personnes) || personnes < 1 || personnes > 6) {
    erreurs.push("Le nombre de participants doit être compris entre 1 et 6 personnes.");
  }
  if (type === null) {
    erreurs.push("Veuillez sélectionner un type de participation (individuel, famille ou groupe).");
  }
  if (!accepte) {
    erreurs.push("Vous devez obligatoirement accepter les conditions de simulation pour continuer.");
  }

  if (erreurs.length > 0) {
    zoneRecap.classList.add("d-none");

    var liste = "";
    for (var i = 0; i < erreurs.length; i++) {
      liste += "<li>" + erreurs[i] + "</li>";
    }
    zoneErreurs.innerHTML =
      '<div class="alert alert-danger" role="alert">' +
        '<h5 class="alert-heading h6 fw-bold">Erreur de validation</h5>' +
        '<ul class="mb-0 ps-3">' + liste + '</ul>' +
      '</div>';
    return;
  }

  zoneErreurs.innerHTML = "";
  var calcul = calculer();

  var morceaux = date.split("-");
  var dateFrancaise = morceaux[2] + "/" + morceaux[1] + "/" + morceaux[0];

  var texteParticipants = calcul.personnes + " personne";
  if (calcul.personnes > 1) {
    texteParticipants += "s";
  }

  document.getElementById("recap-activite").textContent = noms[choixActivite.value];
  document.getElementById("recap-date").textContent = dateFrancaise;
  document.getElementById("recap-participants").textContent = texteParticipants;
  document.getElementById("recap-type").textContent = type.value;
  document.getElementById("recap-total").textContent = calcul.total + " TND";
  document.getElementById("recap-details").textContent =
    "(Sous-total : " + calcul.sousTotal + " TND — Remise : " + calcul.remise + " TND)";

  zoneRecap.classList.remove("d-none");
}

champDate.min = dateAujourdhui();

var id = new URLSearchParams(window.location.search).get("id");
if (id !== null && prix[id] !== undefined) {
  choixActivite.value = id;
}

calculer();


choixActivite.onchange = calculer;
champParticipants.oninput = calculer;
document.getElementById("btn-calculer").onclick = calculer;

formulaire.onsubmit = function (event) {
  event.preventDefault();
  valider();
};

document.getElementById("btn-reset").onclick = function () {
  formulaire.reset();
  zoneErreurs.innerHTML = "";
  zoneRecap.classList.add("d-none");
  calculer();
};
