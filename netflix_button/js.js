window.addEventListener("DOMContentLoaded", start);
//når koden loades så springer den sirekte til funktionen start (da opgaven bedte om at det skulle ske ved sidens load)

let animationCompleted = false;
// Flag til at tjekke, om animationen er slut. Den gør så baggrundsfarve-ændringen kun sker en gang. Det er så både mus-bevægelsen og animationend ikke begge prøver at afslutte animationen

function start() {
  const button = document.querySelector("#netflixButton");

  // Event listener for når animationen slutter. Når animationen slutter køres koden i if-statementet. Den gør at hvis animationcompleted stadig er false, kalder vi finishAnimation() som ændrer baggrundsfarven og skjuler knappen.
  button.addEventListener("animationend", () => {
    if (!animationCompleted) {
      finishAnimation();
    }
  });

  // Event listener lytter om mus bevæger sig. den fortæller så at animationen blot skal køre til ende men ikke skifte baggrundsfarve af sig selv.
  window.addEventListener("mousemove", () => {
    if (!animationCompleted) {
      button.classList.add("filled");
      // Spring animation til slut
      animationCompleted = true;
    }
  });

  // Klik på knappen afslutter animationen
  button.addEventListener("click", finishAnimation);
}

// afslutter animationen og fylder knappen med farve. skifter baggrunden og fjerner knappen. Den sætter også animationCompleted = true så koden ikke kører igen.
function finishAnimation() {
  const button = document.querySelector("#netflixButton");
  document.body.style.backgroundColor = "rgb(95, 7, 7)";
  button.classList.add("hidden");
  animationCompleted = true;
}
