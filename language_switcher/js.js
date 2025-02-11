"use strict";

//Siden starter altid med at stå pådansk
const locale = "Dansk";

//Objekter i et array som indeholder de to sprog, dansk og tysk. hvert sprog har en liste somme indeholder objekterne text og location. Location fortæller hvor teksten på siden skal indsætter og text fortæller hvilken tekst der skal stå i stedet for "UDSKIFTES".
const texts = {
  Dansk: {
    texts: [
      { text: "Båden", location: ".header-text" },
      { text: "Robotten", location: ".footer" },
    ],
  },
  Deutsch: {
    texts: [
      { text: "Das Bot", location: ".header-text" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
};
//skiftede de og da ud med dansk og deutsch.

//changelanguage(lang) er en funktion der ændrer sproget på siden. den tjekker om (lang) findes i texts(i array). Og hvis det fines går den igennem alle teksterne og ændrer indholdet (textContent) i HTML-elementerne (location)
function changeLanguage(lang) {
  if (texts[lang]) {
    texts[lang].texts.forEach(({ text, location }) => {
      const element = document.querySelector(location);
      if (element) {
        element.textContent = text;
      }
    });
  }
}

//finder <select> elementet (dropdown-menuen) med id="dropdownLanguage" fra HTML
const languageDropdown = document.querySelector("#dropdownLanguage");

//Den lytter efter ændringer i drop-down menuen. Når man vælger nyt sprog i menuen kører den funktionen changeLanguage() med (event.target.value) --> sproget på siden ændres
languageDropdown.addEventListener("change", (event) => {
  changeLanguage(event.target.value);
});

languageDropdown.value = locale;
// Sætter dropdown select i menu til at vise at den står på "Dansk" fra start
changeLanguage(locale);

// Skifter teksten tilbage til "Dansk" som  istandard. fortæller den at den skal gå tilbage og lytte til functionen changeLanguage.

//når man bruger <select> element kan man ikke bruge "click" som man gør ved <button> element. i stedet for skriver man change. hvis den skulle skiftes når jeg trykkede skulle den laves til en knap. Men nu ændrer den sig når jeg først er inde på de diverse <select> elementer.
