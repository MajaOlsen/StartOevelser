const queueNumber = document.getElementById("queue-number");

// Funktion til at hente data
async function fetchData() {
  try {
    const response = await fetch("https://kea-alt-del.dk/kata-distortion/");
    const data = await response.json();
    updateQueue(data.inQueue);
  } catch (error) {
    console.error("Fejl ved hentning af data:", error);
  }
}

// Funktion til at opdatere tallet og animere
function updateQueue(newNumber) {
  if (queueNumber.textContent !== newNumber) {
    queueNumber.textContent = newNumber;

    // Tilføj animation
    queueNumber.classList.add("grow");

    // Fjern animation efter transition
    queueNumber.addEventListener(
      "transitionend",
      () => {
        queueNumber.classList.remove("grow");
      },
      { once: true }
    );
  }
}

// Hent data hver 10. sekund
setInterval(fetchData, 1000);

// Start med at hente data med det samme
fetchData();
