//insert array fra opgaven
document.querySelector("button").addEventListener("click", openBreadcrumb);

const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

function openBreadcrumb() {
  console.log("Generate breadcrumbs");
  //breadcrumbs skal komme frem

  bc.forEach((vare) => {
    console.log(vare.name);
    console.log(vare.link);
    console.log("********");

    //Der kaldes på const bc med vores string. Nu skal det laves så "<" mellem linkene ikke kan trykkes på. Vi flyttede "a"-tagget over på den anden side af "<"

    //fjerne link på sidste link i array
    console.log("sidste elm", bc[bc.length - 1].name);

    //Man kan række ud efter de forskellige ting i strings. har sat ".name" efter den lille "formel" som så viser mig i konsollen hvilket navn præcis den string har.

    const navnetPaasidsteElm = bc[bc.length - 1].name;
    if (navnetPaasidsteElm === vare.name) {
      console.log("vi i gang med det sidste element.");
      document.querySelector("ul").innerHTML += `<li>&nbsp;<&nbsp;${vare.name}</li>`;
    } else {
      document.querySelector("ul").innerHTML += `<li>&nbsp;<&nbsp;<a href="${vare.link}">${vare.name}</a></li>`;
    }
  });
}

// const arr = ["ræv", "hund", "bjørn", "abe"];

// console.log(arr[arr.length - 1]);

//&nbsp
