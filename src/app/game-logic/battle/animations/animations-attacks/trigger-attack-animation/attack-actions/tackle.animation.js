import { animationVariables } from "../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../shared/pokemon/pokemon-variables.js";
import {
  getFirstAttackerBoundingClientRectCard,
  getSecondAttackerBoundingClientRectCard,
} from "../../check-pokemon-location/check-pokemon-location.js";

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

  if (domElements.pokemonFirstLocation.contains(firstAttackerCard)) {
    coordonates(domElements.pokemonFirstLocation, 0, 100);
  } else {
    coordonates(domElements.pokemonSecondLocation, 0, -100);
  }
}

export function tackleAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    const tackle = document.createElement("div");
    tackle.classList.add("tackle");

    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);

    pokemonVariables.firstAttackerLocation.appendChild(tackle);

    gsap.fromTo(
      tackle,
      {
        x: animationVariables.startX,
        y: animationVariables.startY,
        scale: 1,
        opacity: 1,
      },
      {
        x: animationVariables.endX,
        y: animationVariables.endY,
        scale: 1.5,
        opacity: 0.5,
        duration: 1,
        ease: "power1.out",
        onComplete: () => {
          gsap.to(tackle, {
            scale: 1,
            opacity: 0,
            duration: 0.5,
            ease: "power1.in",
            onComplete: () => tackle.remove(),
          });
        },
      }
    );
  }
}
