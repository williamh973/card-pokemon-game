import { animationVariables } from "../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../shared/dom/dom-elements.js";

export let firstAttackerLocation;
export let secondAttackerLocation;
export let firstAttackerCardRect;
export let secondAttackerCardRect;

export function getFirstAttackerBoundingClientRectLocation() {
  const locationRect = firstAttackerLocation.getBoundingClientRect();
  return locationRect;
}

export function getFirstAttackerBoundingClientRectCard(firstAttackerCard) {
  const cardRect = firstAttackerCard.getBoundingClientRect();
  return cardRect;
}

export function getSecondAttackerBoundingClientRectLocation() {
  const locationRect = secondAttackerLocation.getBoundingClientRect();
  return locationRect;
}

export function getSecondAttackerBoundingClientRectCard(secondAttackerCard) {
  const cardRect = secondAttackerCard.getBoundingClientRect();
  return cardRect;
}

export function checkPokemonsLocation(firstAttackerCard, secondAttackerCard) {
  firstAttackerCardRect =
    getFirstAttackerBoundingClientRectCard(firstAttackerCard);

  secondAttackerCardRect =
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
