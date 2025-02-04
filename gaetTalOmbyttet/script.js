//FØRSTE VERSION:
// const guessBTN = document.querySelector("#computerGuess");
// const tooLow = document.querySelector(".answerTooLow");
// const tooHigh = document.querySelector(".answerTooHigh");
// const correct = document.querySelector(".answerCorrect");
// const guess = document.querySelector("#Guesses");

// guessBTN.addEventListener("click", computerGuessNumber);
// tooLow.addEventListener("click", tooLowAnswer);
// tooHigh.addEventListener("click", tooHighAnswer);
// correct.addEventListener("click", correctAnswer);

// let min = 1;
// let max = 100;
// let compGuess;

// function computerGuessNumber() {
//   console.log("Computer Guessing");
//   //kodes til når spillet er færdigt og computeren har gættet det så skal det starte forfra og fjerne al text.
//   compGuess = Math.floor(Math.random() * (max - min + 1)) + min;
//   guess.innerText = `is it ${compGuess}?`;
//   //Her sætter du den til Math.random og du beder computeren gætte på et tal mellem 1-100. nu skal vi gøre så funktionerne fortæller den om den har ret eller ej.
// }

// function tooLowAnswer() {
//   console.log("too Low");
//   guess.textContent = "I'll guess higher!";
//   //trykker du tooLow skal computeren gætte igen. Derfor skal denne function fortælle computeren at den ikke har ret men fortælle at den skal gætte højere
//   min = compGuess + 1;
//   computerGuessNumber();
// }

// function tooHighAnswer() {
//   console.log("too High");
//   guess.textContent = "I'll guess lower!";
//   //Trykker du tooHigh så fortæller du computeren at dens gæt er for højt, herunder skal der kodes så den gætter igen.
//   max = compGuess - 1;
//   computerGuessNumber();
// }

// function correctAnswer() {
//   console.log("correct!");
//   guess.textContent = "I guessed it!";
//   //computeren har gættet rigtigt og gætter ikke igen. trykker du start Guessing igen så skal den clear alt andet indhold.
// }

// //Computeren har et problem. Hvis man trykker for meget på min eller max

const guessBTN = document.querySelector("#computerGuess");
const tooLow = document.querySelector(".answerTooLow");
const tooHigh = document.querySelector(".answerTooHigh");
const correct = document.querySelector(".answerCorrect");
const guess = document.querySelector("#Guesses");

guessBTN.addEventListener("click", startNewGame);
tooLow.addEventListener("click", tooLowAnswer);
tooHigh.addEventListener("click", tooHighAnswer);
correct.addEventListener("click", correctAnswer);

let min, max, compGuess;

function startNewGame() {
  console.log("Game Restarted");
  //når bruger trykker på start guessing knap så resetter den min og max til 1 og 100. Så kalder den til funktionen computerGuessNumber som så begynder math.random functionen og man kan begynde at gætte
  min = 1;
  max = 100;
  computerGuessNumber();
}

function computerGuessNumber() {
  if (min > max) {
    guess.innerText = "Oops! Something went wrong. Restart.";
    startNewGame();
    return;
  }
  compGuess = Math.floor(Math.random() * (max - min + 1)) + min;
  guess.innerText = `Is it ${compGuess}?`;
}

function tooLowAnswer() {
  if (compGuess >= max) return;
  //Return stopper functionen i at køre længere end muligt. Den stopper også errors i forbindelse med spam af knapper. Med return slipper jeg for "NaN" errors som sker da min bliver større end max.

  console.log("Too Low");
  min = compGuess + 1;
  computerGuessNumber();
}

function tooHighAnswer() {
  if (compGuess <= min) return;
  console.log("Too High");
  max = compGuess - 1;
  computerGuessNumber();
}

function correctAnswer() {
  console.log("Correct!");
  guess.innerText = "I guessed it! Click 'Start Guessing' to play again.";
}

//  let counter = 0;
// console.log("counter", counter);
// counter++;
// counter += 1;
//Ved ikke hvor min counter skal sættes ind henne.
