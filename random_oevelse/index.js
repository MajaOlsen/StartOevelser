// document.querySelector("button").addEventListener("click", GenerateRNDnumber);

// function GenerateRNDnumber() {
//   let RandomNumber = Math.floor(Math.random() * 100);
//   //   console.log(RandomNumber);
//   document.querySelector("p").innerHTML = RandomNumber;
// }

/* Noter fra Klaus 

console.log("random number", Math.random());
Math.Random giver dig et tal mellem 0-1. så et meget langt kommatal inden for det. 
-->

console.log("random number", Math.random() * 3);
Fordi man ganger den med 3 så kommer der et tal melle 0-3. Stadig i decimaler
-->

console.log("random number",Math.floor(Math.random() * 3)) ;
Putter Math.random ind i Math.floor. Nu giver den os runde tal. Hvis vi skrev Math.Ceiling ville den runde op. Math floor runder ned til det første decimal
-->

Man kan bruge .round .ceiling .floor og det kan bruges på forskellige tidspunkter.

--> 
Den skulle stoppes i en funktion så den vises på skærmen. således gjorde klaus:

getRandomNumber();
function getRandomNumber() {
const randoNum = Math.round(Math.random() * 100)
console.log("random number", randoNum);

document.querySelector("h2").textContent = randoNum;

Han bruger const jeg brugte let. hvorfor? 
Han har lavet den direkte som nummer, hvor jeg lavede en knap som skulle trykkes på for at vise tallet. 


}
Han laver derefter en <h2> på sin html (jeg har lavet button)


*/
// getRandomNumber();
// function getRandomNumber() {
//   const randoNum = Math.round(Math.random() * 100);
//   console.log("random number", randoNum);
// }

("use strict");

document.querySelector("button").addEventListener("click", evaluateTextfield);

//Her generer vi random nummer og gør tal til string (type) så den har samme type som "guessedNumber" (inputfield) Det skal gøres fordi det skal være samme type for at sammenligne.
//Teksten over var fra før. Man kan godt lave tal om til string men det gjorde at den havde problemer i tal under 10. I stedet for har vi rørt ved den anden kaldet "guessedNumber" og lavet den om til et tal. så nu er det altså tal = tal og ikke string = string.
const randomNumber = Math.round(Math.random() * 100);
console.log(randomNumber);

function evaluateTextfield() {
  //her fanger vi inputtets værdi via dens id
  //Vi skriver value så man ikke bare fanger inputfield men hvad der faktisk skriver i input.
  const guessedNumber = Number(document.getElementById("InputAnswer").value);

  //Her fanger vi det p som vi har givet id'et "response"
  const responseField = document.querySelector("#response");

  //Lavet if statement så den viser svarene på dine gæt.
  if (guessedNumber === randomNumber) {
    responseField.textContent = "Correct!";
  } else if (guessedNumber < randomNumber) {
    responseField.textContent = "Too low!";
  } else if (guessedNumber > randomNumber) {
    responseField.textContent = "Too high!";
  }
}
