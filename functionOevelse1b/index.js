//Test af sayHello funktionen
window.addEventListener("DOMContentLoaded", sayName);

sayName("Maja", "Olsen");

function sayName(Lastname, Firstname) {
  console.log(`Hello ${Lastname} ${Firstname}`);
}

/*Hvad sker der hvis:
Funktionen bliver kaldt på en linje tidligere end den er erklæret på?
 --> Sætter man den over window.addEventListener så sker der ikke noget i konsollen.

Funktionen bliver kaldt med en variabel der hedder myName?
--> Hvis man kun ændrer variabel fra f.eks. Firstname til myName så virker den ikke. Man skal ændre både navnet på variable men også på function. Hvis man ændrer begge til "myName" så viser den stadig den første string fra sayName, altså "Maja".

Hvis der er en anden variabel der hedder firstName uden for funktionen?
--> Der sker ingen ændring. 

Hvis funktionen blvier kaldt uden noget parameter?
--> Jeg udkommenterer og så viser den kun "Hello" beskeden men ikke mine navne
--> får bare undefined

Hvis funktionen bliver kaldt med firstName og lastName?'
--> Så viser den både fornavn og efternavn i parametrenes rækkefølge. 

Hvis funktionen bliver kaldt med lastName før firstName. 
--> Så viser den lastname først.


*/
