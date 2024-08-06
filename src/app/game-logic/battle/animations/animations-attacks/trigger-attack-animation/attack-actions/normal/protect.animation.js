import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../../shared/pokemon/pokemon-variables.js";
import {
  getFirstAttackerBoundingClientRectCard,
  getSecondAttackerBoundingClientRectCard,
} from "../../../check-pokemon-location/check-pokemon-location.js";

function coordonates(pokemonLocation, startX, endX) {
  pokemonVariables.firstAttackerLocation = pokemonLocation;
  animationVariables.startX = startX;
  animationVariables.endX = endX;
}

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  pokemonVariables.firstAttackerCardRect =
    getFirstAttackerBoundingClientRectCard(firstAttackerCard);

  pokemonVariables.secondAttackerCardRect =
    getSecondAttackerBoundingClientRectCard(secondAttackerCard);

  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    coordonates(domElements.pokemonLeftLocation, 0, 0);
  } else {
    coordonates(domElements.pokemonRightLocation, 0, 0);
  }
}

export function protectAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    const protect = document.createElement("div");
    protect.classList.add("protect");

    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);

    pokemonVariables.firstAttackerLocation.appendChild(protect);

    gsap.fromTo(
      protect,
      { x: animationVariables.startX, y: animationVariables.startY },
      {
        x: (animationVariables.endX = 0),
        y: (animationVariables.endY = 0),
        duration: 2,
        ease: "power1.out",
        onComplete: () => {
          protect.remove();
        },
      }
    );
  }
}
