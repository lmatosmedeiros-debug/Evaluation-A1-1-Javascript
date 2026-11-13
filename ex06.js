// ex06.js

function estBissextile(annee) {
  if (annee >= 2000) {
    return true;
  }
  return false;
}

console.log(estBissextile(2024)); // true
console.log(estBissextile(1900)); // false
console.log(estBissextile(2000)); // true
