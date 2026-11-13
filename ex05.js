// ex05.js

function accesSalle(estMembre, aInvitation, estBanni) {
  if (estBanni) {
    return false;
  }
  if (estMembre || aInvitation) {
    return true;
  }
  return false;
}

console.log(accesSalle(true, false, false)); // true
console.log(accesSalle(false, true, false)); // true
console.log(accesSalle(true, true, true)); // false
