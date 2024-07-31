import { animationVariables } from "../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";
import {
  getFirstAttackerBoundingClientRectCard,
  getSecondAttackerBoundingClientRectCard,
} from "../../check-pokemon-location/check-pokemon-location.js";

function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  pokemonVariables.firstAttackerCardRect =
    getFirstAttackerBoundingClientRectCard(firstAttackerCard);

  pokemonVariables.secondAttackerCardRect =
    getSecondAttackerBoundingClientRectCard(secondAttackerCard);

  if (domElements.pokemonFirstLocation.contains(firstAttackerCard)) {
    pokemonVariables.firstAttackerLocation = domElements.pokemonFirstLocation;
    animationVariables.endX =
      +pokemonVariables.secondAttackerCardRect.left -
      pokemonVariables.secondAttackerCardRect.width;
  } else {
    pokemonVariables.firstAttackerLocation = domElements.pokemonSecondLocation;
    animationVariables.startX = -50;
    animationVariables.endX =
      -pokemonVariables.secondAttackerCardRect.left -
      pokemonVariables.secondAttackerCardRect.width -
      400;
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
        y: animationVariables.endY,
        duration: 2,
        ease: "power1.out",
        onComplete: () => {
          protect.remove();
        },
      }
    );
  }
}
