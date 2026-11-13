// ex08.js

function jouerTour(pointsDeVie, valeur, action) {
  return action(pointsDeVie, valeur);
}

function attaquer(pointsDeVie, valeur) {
  return pointsDeVie - valeur;
}

function soigner(pointsDeVie, valeur) {
  return pointsDeVie + valeur;
}

console.log(jouerTour(100, 30, attaquer)); // 70
console.log(jouerTour(50, 20, soigner)); // 70
console.log(jouerTour(0, 25, soigner)); // 25
