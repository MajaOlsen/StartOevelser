// Krav
// Antallet af kunder skal være en værdi mellem 0 og 100
// Der skal vises 20 søjler og den yderst til højre skal være den nyeste. Det kan godt være at diagrammet først skal fyldes før du når op på 20 søjler, det kommer an på hvordan du laver det.
// En ny måling/søjle skal tilføjes hvert sekund.

const list = document.querySelector("ul");

// const li = document.createElement("li");
// li.style.setProperty("--height", "30");
// list.appendChild(li);

const barArray = [];

//man sætter et interval mellem barene. Dette kalder på hvilken funktion og så siger den skal være 1000ms forsinket/delay
setInterval(generateBars, 1000);

//Consol logger barArray så den bliver ved med at tilføje en random værdi i mit array. Men der skal kun være maks 20 værdier. vi pusher et tal ind

function generateBars() {
  const costumerNumber = Math.round(Math.random() * 100);
  barArray.push(costumerNumber);
  console.log("GENERATE BARS", barArray);

  const li = document.createElement("li");
  li.style.setProperty("--height", costumerNumber);
  list.appendChild(li);

  if (barArray.length >= 20) {
    console.log("barArray er længeren end 20");
    barArray.shift();
    list.removeChild(list.firstElementChild);

    //shift får den første søjle/værdi til at fjerne sig så bar-chart rykker sig mod venstre og kun viser 20 værdier på skærmen af gangen.
    //remove child kalder man på det firste list element på html'en og det fjerner den. Så nu fjerner den både første arraytal og det tilsvarende element.
  }
}
