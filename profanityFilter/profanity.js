/*    

1.Start med at lave en simpel HTML-struktur. Du skal have et tekstafsnit (<p>) med ovenstående sætning, og en knap, som brugeren kan klikke på for at opdatere teksten med de "gode" ord.
    
2. Lav en funktion, der erstatter de "dårlige" ord med de "gode" fra det udleverede array. Hvis teksten allerede er opdateret (ingen "dårlige" ord), skal der vises en <dialog>, der informerer brugeren om dette. Dette kan laves simpelt med et flag eller avanceret hvor teksten bliver undersøgt for om den indeholder nogle af de dårlige ord, og derfor har været igennem profanity filteret. 
    

3. Tilføj en event listener til din knap. Når den klikkes, bør din ord-erstatningsfunktion blive kaldt, og teksten skal opdateres.
    

4. Brug evt. CSS til at tildele en gul baggrund til de "gode" ord.

*/

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is fully loaded");

  const curseWords = [
    { bad: "var", good: "const" },
    { bad: "float", good: "grid" },
    { bad: "marquee", good: "just don't" },
  ];

  const textContent = document.querySelector("#textContent");
  const filterBTN = document.querySelector("#filterBTN");
  const dialogBox = document.querySelector("#dialogBox");
  const dialogBoxClose = document.querySelector("#closeDialog");

  let isUpdated = false; // Flag for tracking if words have been changed

  filterBTN.addEventListener("click", () => {
    if (!isUpdated) {
      let modifiedText = textContent.innerHTML;

      // Gennemgå alle curseWords med forEach og erstat alle de dårlige ord
      curseWords.forEach(({ bad, good }) => {
        const regex = new RegExp(`\\b${bad}\\b`, "g");
        if (modifiedText.match(regex)) {
          modifiedText = modifiedText.replace(regex, `<span data-filter="good-word">${good}</span>`);
          isUpdated = true; // Vi har lavet en ændring
        }
      });

      if (isUpdated) {
        textContent.innerHTML = modifiedText;
      }
    } else {
      dialogBox.showModal();
    }
  });

  dialogBoxClose.addEventListener("click", () => dialogBox.close());
});

//skal have if-statement som gør er cursewords = bad skal bad skiftes til good fra array. med false og true (flag) kan vi fortælle en if-statement at hvis ordeneerskifter=true så skal den åbne dialog box. men hvis ordeneerskiftet=false skal den skifte dem.
//til if-statement. Hvis der ikke er dårlige ord tilbage skal den vise dialog box som også kan lukkes efter.
// dialogBox.showModal();

//add eventlistener click til knap #closeDialog for ar lukke dialogbox
// dialogBox.close();
