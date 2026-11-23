# INSTITUT SUPÉRIEUR DES ÉTUDES TECHNOLOGIQUES DE NABEUL
## Département Informatique — Développement Web côté client
### Mini-projet Web : HTML5 / CSS3 / JavaScript / Bootstrap 5

---

# RAPPORT DE PROJET
## CAP BON EXPLORER
### Conception et Réalisation d’un Portail Touristique et Artisanal Interactif & Responsive

* **Année universitaire :** 2026 – 2027
* **Semestre :** 1
* **Etudient :** Mohamed Rayen Lakhal
* **Encadrant :** M. Mohamed Najeh ISSAOUI (`mednajehissaoui@gmail.com`)
* **Niveau :** Développement Web côté client

---

## 1. Introduction et Objectifs Pédagogiques

La presqu'île du Cap Bon en Tunisie recèle d'inestimables trésors : ateliers de maîtres potiers à Nabeul, ruines puniques maritimes à Kerkouane, citadelles byzantines à Kélibia et sentiers boisés au Djebel Abderrahmane. 

Le projet **Cap Bon Explorer** répond au cahier des charges d'une jeune structure touristique fictive souhaitant promouvoir ces richesses au travers d'un portail web moderne, immersif et totalement autonome côté client.

Les objectifs pédagogiques majeurs atteints au cours de ce projet sont :
1. **Sémantique HTML5 irréprochable :** Structuration en balises sémantiques strictes (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`, `table`, `caption`).
2. **Identité visuelle CSS3 personnalisée :** Création d'une feuille de style dédiée `css/style.css` mariant l'héritage artisanal (terracotta, bleu céramique, sable doux) aux normes ergonomiques modernes, avec support d'un mode clair/sombre.
3. **Intégration Bootstrap 5.3.3 :** Utilisation méthodique du système de grille responsive et de composants interactifs (navbar toggler, modal, accordion, alertes).
4. **Programmation JavaScript native (ES6+) :** Logique de recherche instantanée, filtrage combiné, manipulation du DOM via `addEventListener`, moteur de calcul dynamique et validation complète de formulaire sans rechargement.

---

## 2. Architecture et Organisation des Fichiers

L'organisation des fichiers respecte fidèlement l'arborescence minimale exigée :

```text
cap-bon-explorer/
├── index.html              # Page d'accueil, présentation de la structure et atouts
├── activites.html          # Catalogue des 8 activités obligatoires avec recherche et modal
├── agenda.html             # Calendrier des 6 événements dans un tableau HTML5 responsive
├── reservation.html        # Simulateur de réservation, calculs et validation JS
├── contact.html            # Coordonnées, horaires, carte statique et FAQ en accordion
├── css/
│   └── style.css           # Feuille de style personnalisée (distincte de Bootstrap)
├── js/
│   ├── app.js              # Fonctions communes (thème sombre localStorage, dates)
│   ├── activites.js        # Données du catalogue, recherche, filtres et modale
│   └── reservation.js      # Simulateur tarifaire, remise 10% et contrôles stricts
├── images/
│   ├── logo.svg            # Logo vectoriel représentant le soleil, la mer et l'amphore
│   ├── carte-nabeul.svg    # Carte vectorielle statique repérant les sites du Cap Bon
│   ├── banner.jpg          # Grande bannière visuelle de la page d'accueil
│   ├── a01-medina-nabeul.jpg
│   ├── a02-poterie-nabeul.jpg
│   ├── a03-kerkouane.jpg
│   ├── a04-djebel.jpg
│   ├── a05-kelibia.jpg
│   ├── a06-ceramique.jpg
│   ├── a07-marche-nabeul.jpg
│   └── a08-hammamet.jpg
├── docs/
│   ├── rapport.md          # Version markdown du rapport
│   └── rapport.html        # Version imprimable en PDF haute fidélité
└── README.md               # Documentation de synthèse et guide d'évaluation
```

Tous les liens internes et chemins d'accès vers les ressources utilisent des **chemins relatifs stricts**, garantissant le fonctionnement immédiat du site après décompression sur n'importe quel ordinateur ou système d'exploitation.

---

## 3. Détail des Pages et Composants Développés

### 3.1. Page 1 — Accueil (`index.html`)
* **Bannière visuelle (Hero Banner) :** Présente le titre fort, le texte de départ obligatoire de 45 mots et deux boutons d'appel à l'action (« Découvrir les activités » et « Simuler une réservation »).
* **Section « Qui sommes-nous ? » :** Rédigée en deux paragraphes équilibrés (115 mots) décrivant l'engagement de la jeune structure en faveur d'un tourisme authentique et respectueux des artisans.
* **Activités mises en avant :** Présentation de 3 cartes représentatives (Poterie A02, Kerkouane A03, Kélibia A05) avec tarif, catégorie et liens contextuels.
* **Section « Pourquoi découvrir le Cap Bon ? » :** Grille de 4 atouts majeurs (Artisanat réputé, Histoire punique, Rivages sauvages, Terroir agricole).

### 3.2. Page 2 — Catalogue d’activités (`activites.html`)
* **Grille des 8 activités obligatoires :** Cartes Bootstrap adaptatives (1 carte/ligne sur mobile, 2 sur tablette, 3 à 4 sur grand écran).
* **Recherche instantanée :** Filtrage en direct à chaque frappe dans le champ texte, portant à la fois sur le titre et la localisation de l'activité (insensible aux majuscules et aux accents grâce à la normalisation NFD).
* **Filtre par catégorie :** Boutons d'accès rapide (Toutes, Culture, Artisanat, Nature, Découverte).
* **Combinaison recherche & filtre :** Lorsqu'une catégorie est sélectionnée, la recherche textuelle ne s'applique que sur les activités de cette catégorie.
* **Compteur dynamique :** Badge affichant le nombre exact de cartes visibles (`#compteur-activites`).
* **Gestion du cas 0 résultat :** Affichage d'un bloc d'alerte explicite *« Aucune activité trouvée »* lorsque la recherche combinée ne retourne rien (ex: Nature + "poterie").
* **Fenêtre modale Bootstrap :** Au clic sur « Voir les détails », la modale `#activityModal` se remplit dynamiquement avec l'illustration, les caractéristiques et la description détaillée de 4 phrases rédigée pour l'activité.

### 3.3. Page 3 — Agenda des événements (`agenda.html`)
* **Tableau sémantique HTML5 :** Utilisation conforme de `<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, `<td>`.
* **Responsive mobile :** Conteneur `.table-responsive` permettant une lecture fluide sans débordement sur petit écran.
* **Données officielles :** Intégration des 6 événements de référence (Promenade photographique, Initiation poterie, Randonnée découverte, Découverte médina, Peinture sur céramique, Marché local).
* **Zone « Prochaines expériences » :** Bloc informatif comprenant deux liens distincts vers le catalogue (`activites.html`) et le simulateur (`reservation.html`).

### 3.4. Page 4 — Simulateur de réservation (`reservation.html`)
* **Formulaire complet :** Nom, prénom, email, téléphone, activité (liste déroulante), date souhaitée, nombre de participants (1 à 6), type de participation (boutons radio), commentaire et case à cocher de consentement obligatoire.
* **Moteur de calcul temps réel :**
  $$\text{Sous-total} = \text{Prix unitaire} \times \text{Participants}$$
  $$\text{Remise} = 10\% \text{ du sous-total si } \text{Participants} \ge 4 \text{ sinon } 0$$
  $$\text{Total} = \text{Sous-total} - \text{Remise}$$
* **Affichage distinct :** Présentation claire du prix unitaire, du sous-total, du montant de remise et du total en Dinars Tunisiens (TND).
* **Contrôles de validation JS stricts :**
  * Blocage des dates antérieures à aujourd'hui (date système locale).
  * Vérification du format email par expression régulière standard.
  * Vérification de la complétude du numéro de téléphone et de l'acceptation des conditions.
* **Récapitulatif à l'écran :** En cas de saisie valide, affichage immédiat d'un volet récapitulatif reprenant l'activité, la date, les participants et le total, accompagné de la mention textuelle obligatoire :
  *« Simulation enregistrée localement à l’écran : aucune réservation réelle n’a été effectuée »*.
* **Bouton « Réinitialiser » :** Remet à zéro l'ensemble des champs du formulaire, masque les erreurs et réinitialise les montants calculés.

### 3.5. Page 5 — Contact & FAQ (`contact.html`)
* **Bloc « Nous contacter » :** Coordonnées d'agence fictives à Nabeul (14 Avenue Habib Bourguiba), téléphone fictif (+216 72 285 000) et e-mail.
* **Horaires d'accueil :** Tableau clair distinguant les plages horaires en semaine, le samedi et les sorties du dimanche.
* **Carte statique :** Fichier vectoriel `carte-nabeul.svg` illustrant la péninsule et la position relative des différents centres d'intérêt sans recourir à une API externe.
* **FAQ en accordéon :** 4 volets interactifs Bootstrap répondant aux interrogations fréquentes des visiteurs.
* **Mini-formulaire :** Formulaire de contact avec contrôle HTML5 et confirmation visuelle simulée sans rechargement.

---

## 4. Résultats des Scénarios de Test Obligatoires (T01 à T12)

Les tests ont été exécutés conformément au protocole de la Section 7 :

| N° | Manipulation | Résultat attendu | Résultat obtenu | Validation |
|---|---|---|---|:---:|
| **T01** | Ouvrir la page Activités sans filtre | 8 cartes visibles et compteur = 8 | 8 cartes affichées, badge = 8 | **Conforme** |
| **T02** | Rechercher « poterie » | Seule l'activité A02 reste affichée | Carte A02 seule, compteur = 1 | **Conforme** |
| **T03** | Choisir « Nature » avec recherche vide | 2 cartes : A04 et A05 | Cartes A04 et A05 affichées | **Conforme** |
| **T04** | Choisir « Nature » puis saisir « poterie » | 0 résultat et message explicite | Message d'alerte affiché, 0 carte | **Conforme** |
| **T05** | Afficher les détails de A06 | La modale présente la peinture sur céramique | Modale complète pour A06 ouverte | **Conforme** |
| **T06** | Réserver A02 pour 2 personnes | Sous-total = 70 TND, remise = 0, total = 70 | 70 TND sous-total, 0 remise, 70 total | **Conforme** |
| **T07** | Réserver A06 pour 4 personnes | Sous-total = 100 TND, remise = 10, total = 90 | 100 TND, 10 TND remise, 90 TND total | **Conforme** |
| **T08** | Saisir une date de réservation passée | Validation refusée et erreur expliquée | Erreur rouge détaillée, date bloquée | **Conforme** |
| **T09** | Soumettre sans email ou sans consentement | Aucune confirmation de simulation | Blocage immédiat avec message d'erreur | **Conforme** |
| **T10** | Tester sur écran étroit (360–390 px) | Menu utilisable, cartes lisibles, pas de débordement | Aucun débordement horizontal (overflow-x) | **Conforme** |
| **T11** | Cliquer sur « Réinitialiser » | Champs et récapitulatif reviennent à l'état initial | Formulaire et calculs réinitialisés | **Conforme** |
| **T12** | Naviguer sur les 5 pages | Aucun lien brisé ni erreur en console | Console JS vierge de toute erreur | **Conforme** |

---

## 5. Fonctionnalités Bonus Développées

Pour dépasser les attentes et enrichir l'expérience utilisateur, les bonus facultatifs suivants ont été intégrés :
1. **Mode clair / sombre persistant (localStorage) :** Un sélecteur d'ambiance permet à l'utilisateur d'alterner entre un thème méditerranéen ensoleillé et un thème nuit contrasté. La variable est stockée dans le navigateur (`cbe-theme`) et conservée d'une page à l'autre.
2. **Tri multicritères du catalogue :** Possibilité de réordonner les activités par tarif croissant, tarif décroissant ou par ordre alphabétique.
3. **Pré-sélection via paramètre d'URL :** Le bouton « Réserver » d'une carte d'activité ou d'un événement d'agenda transmet l'identifiant (ex: `reservation.html?id=A02`), pré-sélectionnant l'activité et recalculant le prix instantanément.

---

## 6. Difficultés Rencontrées et Solutions Apportées

1. **Combinaison fluide du filtre catégorie et de la recherche instantanée :**
   * *Difficulté :* Éviter que la recherche textuelle ne réinitialise la catégorie sélectionnée ou n'affiche des activités hors-sujet.
   * *Solution :* Centralisation du filtrage dans une fonction unique `applyFilters()` évaluant simultanément `matchCategory` et `matchSearch` sur le tableau source `ACTIVITES`.
2. **Gestion robuste des dates côté client sans backend :**
   * *Difficulté :* Comparer la date saisie par l'utilisateur avec la date du jour sans être perturbé par les fuseaux horaires ou les heures.
   * *Solution :* Utilisation d'une fonction `getTodayDateString()` extrayant l'année, le mois et le jour au format standard `YYYY-MM-DD` pour une comparaison lexicale stricte.
3. **Adaptation responsive du tableau de l'agenda :**
   * *Difficulté :* Conserver une lisibilité optimale des 6 colonnes sur les smartphones d'une largeur de 360 px.
   * *Solution :* Encapsulation dans `.table-responsive` avec masquage conditionnel des badges secondaires sur très petits écrans.

---

## 7. Sources et Crédits des Ressources

* **Framework CSS :** Bootstrap 5.3.3 (CDN officiel jsDelivr).
* **Icônes :** Bootstrap Icons 1.11.3 (CDN officiel).
* **Identité visuelle & Cartographie :** Fichiers vectoriels originaux créés pour le projet (`images/logo.svg`, `images/carte-nabeul.svg`).
* **Photographies :** Banques d'images libres de droits sous licence libre / Unsplash / Wikimedia Commons (ateliers de poterie de Nabeul, ruines de Kerkouane, fort de Kélibia, panoramas du Djebel Abderrahmane et côtes d'Hammamet).
