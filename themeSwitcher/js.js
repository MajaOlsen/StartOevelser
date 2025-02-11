/*Vi skal lave et lille website med en theme-switcher.

Themet skal skiftes med en dropdown (select).

Der skal være 3 themes: Dark, Light og Hawaii.*/

//starter med en DOMContentloaded for at være sikker på ar hele HTML-dokumentet er indlæst før koden kører
document.addEventListener("DOMContentLoaded", () => {
  const themeDropDown = document.querySelector("#dropDownThemes");
  const body = document.body;
  const header = document.querySelector("header");
  const footer = document.querySelector("footer");

  // Sætter det første loadet theme til darkfilter. sørger for at footer, header og body alle får atributten dats-filter="darkFilter".
  const loadTheme = "darkFilter";
  body.setAttribute("data-filter", loadTheme);
  header.setAttribute("data-filter", loadTheme);
  footer.setAttribute("data-filter", loadTheme);
  themeDropDown.value = "Dark";

  //change lytter efter forandringer. altså når en ny option bliver selceted udføres koden nedenfor.
  themeDropDown.addEventListener("change", (event) => {
    //event.target.selcetedIndex finder option-elementet
    const selectedOption = event.target.options[event.target.selectedIndex];
    //dataset.filter henter værdien af data-filter fra den valgte option. altså selectes hawaiiFilter henter den dataset til det.
    const filter = selectedOption.dataset.filter;
    //viser de tilhørende data-filter ud fra hvilket option-element under <select> man har valgt.

    body.setAttribute("data-filter", filter);
    header.setAttribute("data-filter", filter);
    footer.setAttribute("data-filter", filter);
    //css ændrer sig ud fra det valgte tema altså selected option.
  });
});
