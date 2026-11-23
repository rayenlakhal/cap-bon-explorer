const TARIFS_ACTIVITES = {
  "A01": { titre: "Découverte de la médina — Nabeul", prix: 20 },
  "A02": { titre: "Atelier d’initiation à la poterie — Nabeul", prix: 35 },
  "A03": { titre: "Parcours découverte de Kerkouane — Kerkouane", prix: 30 },
  "A04": { titre: "Randonnée découverte — Djebel Abderrahmane", prix: 25 },
  "A05": { titre: "Circuit du littoral — Kélibia", prix: 40 },
  "A06": { titre: "Peinture sur céramique — Nabeul", prix: 25 },
  "A07": { titre: "Découverte d’un marché local — Nabeul", prix: 15 },
  "A08": { titre: "Promenade photographique — Hammamet", prix: 30 }
};

document.addEventListener('DOMContentLoaded', () => {
  initReservation();
});

function initReservation() {
  const form = document.getElementById('reservation-form');
  const selectActivite = document.getElementById('activite');
  const inputParticipants = document.getElementById('participants');
  const inputDate = document.getElementById('date_visite');
  const btnCalculer = document.getElementById('btn-calculer');
  const btnReset = document.getElementById('btn-reset');
  const alertContainer = document.getElementById('form-alerts');
  const recapContainer = document.getElementById('recap-container');

  if (inputDate) {
    const todayStr = getTodayDateString();
    inputDate.setAttribute('min', todayStr);
  }

  const urlParams = new URLSearchParams(window.location.search);
  const preselectId = urlParams.get('id');
  if (preselectId && TARIFS_ACTIVITES[preselectId] && selectActivite) {
    selectActivite.value = preselectId;
  }

  updatePriceCalculation();

  if (selectActivite) {
    selectActivite.addEventListener('change', updatePriceCalculation);
  }

  if (inputParticipants) {
    inputParticipants.addEventListener('input', updatePriceCalculation);
    inputParticipants.addEventListener('change', updatePriceCalculation);
  }

  if (btnCalculer) {
    btnCalculer.addEventListener('click', (e) => {
      e.preventDefault();
      updatePriceCalculation();
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      validateAndSimulate();
    });
  }

  if (btnReset) {
    btnReset.addEventListener('click', () => {
      setTimeout(() => {
        if (selectActivite) selectActivite.value = "A01";
        if (inputParticipants) inputParticipants.value = "1";
        updatePriceCalculation();

        if (alertContainer) alertContainer.innerHTML = '';
        if (recapContainer) recapContainer.classList.add('d-none');
      }, 50);
    });
  }
}

function getTodayDateString() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function updatePriceCalculation() {
  const selectActivite = document.getElementById('activite');
  const inputParticipants = document.getElementById('participants');

  const unitPriceEl = document.getElementById('display-unit-price');
  const subtotalEl = document.getElementById('display-subtotal');
  const discountEl = document.getElementById('display-discount');
  const discountNoticeEl = document.getElementById('display-discount-notice');
  const totalEl = document.getElementById('display-total');

  const actId = selectActivite ? selectActivite.value : "A01";
  const activityData = TARIFS_ACTIVITES[actId] || { titre: "", prix: 0 };
  const unitPrice = activityData.prix;

  let participants = parseInt(inputParticipants ? inputParticipants.value : 1, 10);
  if (isNaN(participants) || participants < 1) {
    participants = 1;
  } else if (participants > 6) {
    participants = 6;
  }

  const subtotal = unitPrice * participants;
  
  let discount = 0;
  if (participants >= 4) {
    discount = Math.round((subtotal * 0.10) * 100) / 100;
  }

  const total = subtotal - discount;

  if (unitPriceEl) unitPriceEl.textContent = `${unitPrice} TND`;
  if (subtotalEl) subtotalEl.textContent = `${subtotal} TND`;
  if (discountEl) discountEl.textContent = `${discount} TND`;
  if (totalEl) totalEl.textContent = `${total} TND`;

  if (discountNoticeEl) {
    if (participants >= 4) {
      discountNoticeEl.classList.remove('d-none');
    } else {
      discountNoticeEl.classList.add('d-none');
    }
  }

  return { unitPrice, subtotal, discount, total, participants, activityData };
}

function validateAndSimulate() {
  const alertContainer = document.getElementById('form-alerts');
  const recapContainer = document.getElementById('recap-container');

  const nom = document.getElementById('nom').value.trim();
  const prenom = document.getElementById('prenom').value.trim();
  const email = document.getElementById('email').value.trim();
  const telephone = document.getElementById('telephone').value.trim();
  const activite = document.getElementById('activite').value;
  const dateVisite = document.getElementById('date_visite').value;
  const participants = parseInt(document.getElementById('participants').value, 10);
  const participationType = document.querySelector('input[name="type_participation"]:checked');
  const consent = document.getElementById('consentement').checked;

  const errors = [];

  if (!nom) errors.push("Le nom est obligatoire.");
  if (!prenom) errors.push("Le prénom est obligatoire.");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("Veuillez saisir une adresse e-mail valide (ex: visiteur@exemple.tn).");
  }

  if (!telephone) {
    errors.push("Le numéro de téléphone est obligatoire.");
  }

  if (!dateVisite) {
    errors.push("La date souhaitée est obligatoire.");
  } else {
    const todayStr = getTodayDateString();
    if (dateVisite < todayStr) {
      errors.push("La date de réservation ne peut pas être antérieure à la date d'aujourd'hui.");
    }
  }

  if (isNaN(participants) || participants < 1 || participants > 6) {
    errors.push("Le nombre de participants doit être compris entre 1 et 6 personnes.");
  }

  if (!participationType) {
    errors.push("Veuillez sélectionner un type de participation (individuel, famille ou groupe).");
  }

  if (!consent) {
    errors.push("Vous devez obligatoirement accepter les conditions de simulation pour continuer.");
  }

  if (errors.length > 0) {
    if (recapContainer) recapContainer.classList.add('d-none');

    let errorHtml = `
      <div class="alert alert-danger alert-dismissible fade show shadow-sm" role="alert">
        <h5 class="alert-heading h6 fw-bold"><i class="bi bi-exclamation-triangle-fill me-2"></i>Erreur de validation</h5>
        <ul class="mb-0 ps-3">
          ${errors.map(err => `<li>${err}</li>`).join('')}
        </ul>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Fermer"></button>
      </div>
    `;
    if (alertContainer) alertContainer.innerHTML = errorHtml;
    alertContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return;
  }

  const calc = updatePriceCalculation();
  if (alertContainer) alertContainer.innerHTML = '';

  const recapActiviteEl = document.getElementById('recap-activite');
  const recapDateEl = document.getElementById('recap-date');
  const recapParticipantsEl = document.getElementById('recap-participants');
  const recapTypeEl = document.getElementById('recap-type');
  const recapTotalEl = document.getElementById('recap-total');
  const recapDetailsEl = document.getElementById('recap-details');

  if (recapActiviteEl) recapActiviteEl.textContent = calc.activityData.titre;
  if (recapDateEl) recapDateEl.textContent = formatDateFR(dateVisite);
  if (recapParticipantsEl) recapParticipantsEl.textContent = `${calc.participants} personne${calc.participants > 1 ? 's' : ''}`;
  if (recapTypeEl) recapTypeEl.textContent = participationType.value;
  if (recapTotalEl) recapTotalEl.textContent = `${calc.total} TND`;

  if (recapDetailsEl) {
    recapDetailsEl.textContent = `(Sous-total : ${calc.subtotal} TND — Remise : ${calc.discount} TND)`;
  }

  if (recapContainer) {
    recapContainer.classList.remove('d-none');
    recapContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function formatDateFR(dateStr) {
  const parts = dateStr.split('-');
  if (parts.length === 3) {
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
  return dateStr;
}
