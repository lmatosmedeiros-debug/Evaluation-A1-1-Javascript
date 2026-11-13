// ex02.js

function formaterDuree(minutes) {
  if (minutes < 60) {
    return `0h${minutes}min`;
  } else {
    let heures = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${heures}h${mins}min`;
  }
}

console.log(formaterDuree(135)); // "2h15min"
console.log(formaterDuree(60)); // "1h0min"
console.log(formaterDuree(45)); // "0h45min"
