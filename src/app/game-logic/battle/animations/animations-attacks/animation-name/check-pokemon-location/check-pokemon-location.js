import { animationVariables } from "../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../shared/dom/dom-elements.js";

export let firstAttackerLocation;
export let secondAttackerLocation;

export function getSecondAttackerBoundingClientRectLocation() {
  const locationRect = secondAttackerLocation.getBoundingClientRect();
  return locationRect;
}

export function getSecondAttackerBoundingClientRectCard(secondAttackerCard) {
  const cardRect = secondAttackerCard.getBoundingClientRect();
  return cardRect;
}

export function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  let secondAttackerCardRect =
    getSecondAttackerBoundingClientRectCard(secondAttackerCard);

  if (domElements.pokemonFirstLocation.contains(firstAttackerCard)) {
    firstAttackerLocation = domElements.pokemonFirstLocation;
    animationVariables.endX =
      +secondAttackerCardRect.left - secondAttackerCardRect.width;
  } else {
    firstAttackerLocation = domElements.pokemonSecondLocation;
    animationVariables.endX =
      -secondAttackerCardRect.left - secondAttackerCardRect.width;
  }
}
