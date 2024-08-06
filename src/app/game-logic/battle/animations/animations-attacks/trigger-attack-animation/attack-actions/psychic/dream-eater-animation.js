import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../../shared/pokemon/pokemon-variables.js";

function coordonates(pokemonLocation, startX, startY, endX, endY) {
  pokemonVariables.firstAttackerLocation = pokemonLocation;

  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      createDreamEater(startX, startY, endX, endY);
    }, i * 125);
  }
}

function checkPokemonsLocation(firstAttackerCard) {
  const leftLocationRect =
    domElements.pokemonLeftLocation.getBoundingClientRect();
  const rightLocationRect =
    domElements.pokemonRightLocation.getBoundingClientRect();

  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    coordonates(
      domElements.pokemonLeftLocation,
      rightLocationRect.left - rightLocationRect.width / 2,
      rightLocationRect.top - 50,
      0,
      0
    );
  } else if (domElements.pokemonRightLocation.contains(firstAttackerCard)) {
    coordonates(
      domElements.pokemonRightLocation,
      leftLocationRect.left - leftLocationRect.width * 2,
      leftLocationRect.top - 50,
      0,
      0
    );
  }
}

function createDreamEater(startX, startY, endX, endY) {
  const dreamEater = document.createElement("div");
  dreamEater.classList.add("dream-eater");
  pokemonVariables.firstAttackerLocation.appendChild(dreamEater);

  const randomNumberY =
    Math.floor(Math.random() * 250) - Math.floor(Math.random() * 250);
  const randomScale = Math.floor(Math.random() * 1.8) + 0.2;

  gsap.fromTo(
    dreamEater,
    {
      x: startX,
      y: startY + randomNumberY,
    },
    {
      x: endX,
      y: endY,
      scale: randomScale,
      duration: 3,
      ease: "sine.inOut",
      onComplete: () => {
        dreamEater.remove();
      },
    }
  );
}

export function dreamEaterAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    checkPokemonsLocation(firstAttackerCard);
  }
}
