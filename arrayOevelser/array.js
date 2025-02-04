// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

// console.log(letters[4]);

// let newarr = letters;
// newarr[4] = "*";

// console.log(letters[4]);

//Hvad er forskellen på letters og newarr
//De linker begge til det samme array i hukommelse. Man fortæller den i let newarr at den er det samme som letters.

//Hvordan ser hele letters arrayet ud før og efter ændringen til newarr?
// Efter ændringern bliver det 4 element men indeks 4 ændret til "*". det betyder at "e" nu er "*". ændringer i newarr påvirker også letters da det er samme array.

//Er det overhovedet muligt at ændre et af arrayene uden at ændre det andet? Hvorfor ikke?
//Nej det er ikke muligt da man fortæller den at newarr = letters. De peger på samme placering og vil derfor også påvirke det samme array.

//Hvad sker der, hvis du bruger const i stedet for let?
//Man kan stadig ændre indholdet af array'et men kan ikke forbinde letters til til et nyt array.

//Har du en ide om, hvorfor det er sådan? Hvis ikke, så har du et spørgsmål til næste lektion.
// Når vi bruger const i javascript betyder det at variablen ikke kan pege på noget nyt. Men hvis variablen referer til et objekt (som et array), kan vi stadig ændre indholdet af det objekt.

//Array methods (5.5)

const people = ["Harry", "Ron", "Hermione"];

let result;

result = people.push("Draco");

result = people.pop();
//pop gør at den sidste array bliver taget??? ligner at den vises som resultat i stedet for indekset af arrays

result = people.push("Neville");

result = people.push("Luna");
//push tilføjer til arrayet

result = people.slice(0, 3);
//ligner at den tager de første tre elementer af arrays og laver en kopi ish

result = people.splice(1, 0, "Cho");
//Nu er der 6 elementer i arrayet igen men det andet array er tomt. Mon man rykker arrays eller de bliver slået sammen?

people[1] = "Ginny";
//bytter den ud der er på position i indekset (hvilket egentlig er element nr to, men indeks begynder på 0)

result = people.push("Fred", "George");
//tilføjer to mere til array. Nu er det andet tomme array væk og result viser igen antallet af elementer i arrayet (8)

result = people.indexOf("Fred");
//i reslut consol.log viser den hvilket indeks tal fred har (6) selvom den er det 7 element i array

result = people.splice(result, 1);
//man har lige i kaldet over ledt efter "Fred" og her siger man så at den skal lægges i sit eget array i guess? tlnker der en anden forklaring til det.

console.log(result);
console.log(people);

// i consol viser den navnene i arrayet og tilføjer til Draco i det (du pusher ham til arrayet people) og så viser den array antallet (4)

// result = people.pop();

// result = people.push("Neville");

// result = people.push("Luna");

// result = people.slice(0, 3);

// result = people.splice(1, 0, "Cho");

// people[1] = "Ginny";

// result = people.push("Fred", "George");

// result = people.indexOf("Fred");

// result = people.splice(result, 1);
