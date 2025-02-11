/*Given a name string, e.g. “Peter Heronimous Lind” - split the string into three variables: firstName, middleName and lastName.

Hint: use indexOf and substring 

Expect the name to be a const - you can’t modify it.

Console.log the three variables at the very end of your code.

Remember that you may not use "magic numbers" in your code, so you have to create the program, so it finds the beginning and end of each part of the name.

Also test the code with your own name (make up a middle name, if you don't have one) to ensure that it works for different lengths.*/

const nameStr = "Maja Bach Skjoldgaard Olsen";

const firstName = nameStr.substring(0, nameStr.indexOf(" "));
console.log("firstName", firstName + "_");

const middleName = nameStr.substring(nameStr.indexOf(" ") + 1, nameStr.lastIndexOf(" "));
console.log("middleName", "_" + middleName + "_");

const lastName = nameStr.substring(nameStr.lastIndexOf(" ") + 1);
console.log("lastName", "_" + lastName + "_");

// // nameStr.substring(0, 4);
// console.log(firstName);

// const middleName = nameStr.substring(5, 9);
// console.log(middleName);

// const lastName = nameStr.substring(10, 15);
// console.log(lastName);
