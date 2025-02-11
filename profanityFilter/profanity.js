/*    

1.Start med at lave en simpel HTML-struktur. Du skal have et tekstafsnit (<p>) med ovenstående sætning, og en knap, som brugeren kan klikke på for at opdatere teksten med de "gode" ord.
    
2. Lav en funktion, der erstatter de "dårlige" ord med de "gode" fra det udleverede array. Hvis teksten allerede er opdateret (ingen "dårlige" ord), skal der vises en <dialog>, der informerer brugeren om dette. Dette kan laves simpelt med et flag eller avanceret hvor teksten bliver undersøgt for om den indeholder nogle af de dårlige ord, og derfor har været igennem profanity filteret. 
    

3. Tilføj en event listener til din knap. Når den klikkes, bør din ord-erstatningsfunktion blive kaldt, og teksten skal opdateres.
    

4. Brug evt. CSS til at tildele en gul baggrund til de "gode" ord.

*/
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

// console.log("SCRIPT LOADED");

document.querySelector("#filterBTN").addEventListener("click", filterWords);

function filterWords() {
  console.log("FILTER BAD WORDS");
  console.log(curseWords);
  dialogBox.showModal();
}

// document.querySelector("#closeDialog").addEventListener("click", closeDialogBox);

// function closeDialogBox() {
//   dialogBox.close();
//   console.log("LUK");
// }

//skal have if-statement som gør er cursewords = bad skal bad skiftes til good fra array.
//til if-statement. Hvis der ikke er dårlige ord tilbage skal den vise dialog box som også kan lukkes efter.
// dialogBox.showModal();

//add eventlistener click til knap #closeDialog for ar lukke dialogbox
// dialogBox.close();
