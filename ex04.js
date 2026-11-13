// ex04.js

function accesManege(taille, age) {
  if (taille >= 120 && age >= 8) {
    return true;
  }
  if (taille < 120 || age < 8) {
    return false;
  }
}
console.log(accesManege(130, 10)); // true
console.log(accesManege(130, 7)); // false
console.log(accesManege(120, 8)); // true
