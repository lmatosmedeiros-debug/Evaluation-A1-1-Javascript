// ex07.js

function appliquerRemise(prix, pourcentage) {
  return prix - (prix * pourcentage) / 100;
}

function ajouterTVA(prix) {
  return prix + prix * 0.2;
}

function calculerPrixFinal(prix, pourcentage) {
  let prixApresRemise = appliquerRemise(prix, pourcentage);
  return ajouterTVA(prixApresRemise);
}

console.log(appliquerRemise(100, 10)); // 90
console.log(ajouterTVA(50)); // 60

console.log(calculerPrixFinal(100, 10)); // 108
console.log(calculerPrixFinal(50, 20)); // 48
