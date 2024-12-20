import { create, get, getAll } from "./helpers.js";
import { allAnimals } from "./static/allAnimals.js";

// Create Rive instance
const riveInstanceBg = new rive.Rive({
  src: "../assets/rive/web-island.riv",
  canvas: document.getElementById("riveCanvas"),
  autoplay: true,
  stateMachines: "shark",
  onLoad: () => {
    riveInstanceBg.resizeDrawingSurfaceToCanvas();
  },
});

// Resize rive instance
window.addEventListener("resize", () => {
  riveInstanceBg.resizeDrawingSurfaceToCanvas();
});

const animalContainer = document.getElementById("animalContainer");

// Create icons for animal links
allAnimals.forEach((animal) => {
  let imgElement = create("img");
  imgElement.src = animal.image;

  let aElement = create("a");
  aElement.href = animal.url;
  aElement.style.marginLeft = `${Math.floor(Math.random() * 16)}px`;
  aElement.style.marginTop = `${Math.floor(Math.random() * 16)}px`;

  aElement.append(imgElement);
  animalContainer.append(aElement);
});
