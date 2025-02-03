window.addEventListener("DOMContentLoaded", presentPet);

//Det her under virker:
// function presentPet() {
//   let firstName = "Maja";
//   let animalType = "Cat";
//   let animalName = "Hoffa";
//   console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }

//Den her virker også MEN den viser to forskellige beskeder i konsol da den læser de to funktioner hver for sig
// presentPet("Maja", "Cat", "Hoffa");

// function presentPet(firstName, animalType, animalName) {
//   console.log(`My name is ${firstName}, i have a ${animalType} called ${animalName}`);
// }

/* b-delen af opgaven
Funktionen bliver kaldt med variabler der hedder det samme som parametrene?
--> Der sker ingen ændring

Funktionen bliver kaldt med variabler der hedder noget andet?
-->


*/

("use strict");

const firstName = "klaus"
const animalType = "Hund"
const animalName = "Mona"

// const over her virker på samme måde som strings i funktion neden under gør. begge virker på samme måde.

presentPet("klaus", "Hund", "Mona");
function presentPet(firstName, animalType, animalName) {
  console.log(`My name is ${firstName} i have a ${animalType} called ${animalName}`);
}
