import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { pokemonVariables } from "../../../../../../../shared/pokemon/pokemon-variables.js";
import {
  getFirstAttackerBoundingClientRectCard,
  getSecondAttackerBoundingClientRectCard,
} from "../../../check-pokemon-location/check-pokemon-location.js";

const tornado = document.createElement("div");
tornado.classList.add("tornado");

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
    coordonates(domElements.pokemonLeftLocation, 0, 700);
  } else {
    coordonates(domElements.pokemonRightLocation, 0, -700);
  }
}

export function gustAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard) {
    checkPokemonsLocation(firstAttackerCard, secondAttackerCard);

    function createGust() {
      pokemonVariables.firstAttackerLocation.appendChild(tornado);

      gsap.fromTo(
        tornado,
        {
          x: animationVariables.startX,
          y: animationVariables.startY,
          scaleX: 0.5,
          scaleY: 0.5,
          rotation: 0,
        },
        {
          x: animationVariables.endX,
          y: animationVariables.endY,
          scaleX: 1.5,
          scaleY: 1.5,
          rotation: 3060,
          duration: 3,
          ease: "power1.in",
          onComplete: () => tornado.remove(),
        }
      );
    }
    createGust();
  }
}
