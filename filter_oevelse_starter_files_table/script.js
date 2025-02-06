const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];
const tbodyPointer = document.querySelector("tbody");

//en der viser alle el drevne fartøjer
const alleElDrevneFartoejer = vehicles.filter((veh) => veh.isElectric);
console.log("alle eldrevne fartøjer", alleElDrevneFartoejer);

// en der viser alle fartøjer med mere end 2 sæder
const mereEndToSaeder = vehicles.filter((veh) => veh.passengers > 2);
console.log("Alle fartøjer mere end 2 sæder", mereEndToSaeder);

// alle fartøjer el-drevne fartøjer ejet af Jonas
const fartoejerElAfJonas = alleElDrevneFartoejer.filter((veh) => veh.ownedBy === "Jonas");
console.log("alt elektrisk ejet af jonaes", fartoejerElAfJonas);

// alle rugbrøds drevne fartøjer med plads til mere end en.
const pladsTilMereEndEn = vehicles.filter((veh) => veh.passengers > 1);
const rugbroedMedMereEndEtSaede = pladsTilMereEndEn.filter((veh) => veh.fuel === "Rugbrød");
console.log("rugbrød med plads til mere end en", rugbroedMedMereEndEtSaede);

// Flyt filtreringerne over på 4 knapper der viser de filtreringer der før var hardcodede + 1 knap til at vise alle (ufiltreret)

// Style tabellen endnu mere
document.querySelector("#filtrerMinSeats").addEventListener("click", () => filterArray("minSeats"));

document.querySelector("#filtrerJonas").addEventListener("click", () => filterArray("jonasVehicles"));

document.querySelector("#filtrerElDrevne").addEventListener("click", () => filterArray("elVehicles"));

document.querySelector("#filtrerRugbrødMereEnd1").addEventListener("click", () => filterArray("rugbroedMin1"));

document.querySelector("#showAll").addEventListener("click", () => filterArray("showAll"));

function filterArray(filterType) {
  tbodyPointer.innerHTML = "";

  if (filterType === "minSeats") {
    showTheseVehicles(vehicles.filter((vehicle) => vehicle.passengers > 2));
  }

  if (filterType === "jonasVehicles") {
    showTheseVehicles(vehicles.filter((vehicle) => vehicle.ownedBy === "Jonas"));
  }

  if (filterType === "elVehicles") {
    showTheseVehicles(vehicles.filter((vehicle) => vehicle.isElectric));
  }

  if (filterType === "rugbroedMin1") {
    showTheseVehicles(vehicles.filter((vehicle) => vehicle.passengers > 1 && vehicle.fuel === "Rugbrød"));
  }

  if (filterType === "showAll") {
    showTheseVehicles(vehicles);
  }
}

showTheseVehicles(vehicles);

// function showTheseVehicles(arr) {
//   arr.forEach((each) => {
//     tbodyPointer.innerHTML += `<tr>
//   <td>${each.type}</td>
//   <td>${each.fuel}</td>
//   <td>${each.passengers}</td>
//   <td>${each.stops}</td>
//   <td>${each.ownedBy}</td>
//   <td>${each.isElectric}</td>
//   <td>${each.isTandem}</td>
// </tr>`;
//   });

// Lav nogle if statements i showTheseVehicles funktionen så tabellen bliver smukkere: uden undefined og tomme felter og true;
// function showTheseVehicles(arr) {
//   arr.forEach((each) => {
//     if (each.ownedBy === undefined) {
//       tbodyPointer.innerHTML += `<tr>
//       <td>${each.type}</td>
//       <td>${each.fuel}</td>
//       <td>${each.passengers}</td>
//       <td>${each.stops}</td>
//       <td>has no owner</td>
//       <td>${each.isElectric}</td>
//       <td>${each.isTandem}</td>
//     </tr>`;
//     } else if (each.stops === undefined) {
//       tbodyPointer.innerHTML += `<tr>
//   <td>${each.type}</td>
//   <td>${each.fuel}</td>
//   <td>${each.passengers}</td>
//   <td>No stops</td>
//   <td>${each.ownedBy}</td>
//   <td>${each.isElectric}</td>
//   <td>${each.isTandem}</td>
// </tr>`;
//     }
//   });

function showTheseVehicles(arr) {
  console.log(arr);

  arr.forEach((each) => {
    let row = "<tr>";

    if (each.type === undefined) {
      row += "<td> No Type</td>";
    } else {
      row += "<td>" + each.type + "</td>";
    }

    if (each.fuel === undefined) {
      row += "<td> No Fuel</td>";
    } else {
      row += "<td>" + each.fuel + "</td>";
    }

    if (each.passengers === undefined) {
      row += "<td> No passengers</td>";
    } else {
      row += "<td>" + each.passengers + "</td>";
    }

    if (each.stops === undefined) {
      row += "<td> No stops</td>";
    } else {
      row += "<td>" + each.stops + "</td>";
    }

    if (each.ownedBy === undefined) {
      row += "<td> No owner</td>";
    } else {
      row += "<td>" + each.ownedBy + "</td>";
    }

    if (each.isElectric === undefined) {
      row += "<td> Not Electric</td>";
    } else if (each.isElectric === true) {
      row += "<td> Electric</td>";
    } else {
      row += "<td>" + each.isElectric + "</td>";
    }

    if (each.isTandem === undefined) {
      row += "<td> No Tandem</td>";
    } else if (each.isTandem === true) {
      row += "<td> Tandem</td>";
    } else {
      row += "<td>" + each.isTandem + "</td>";
    }

    row += "</tr>";
    tbodyPointer.innerHTML += row;
  });
}
