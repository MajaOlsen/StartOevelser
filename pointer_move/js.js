document.addEventListener("mousemove", (event) => {
  const lightness = (event.clientX / window.innerWidth) * 100;
  const saturation = (event.clientY / window.innerHeight) * 100;
  document.body.style.backgroundColor = `hsl(340, ${saturation}%, ${lightness}%)`;
});
