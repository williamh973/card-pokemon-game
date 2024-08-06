import { domElements } from "../../../../../../../shared/dom/dom-elements.js";

function removeClassName(firstAttackerCard, classList) {
  setTimeout(() => {
    firstAttackerCard.classList.remove(classList);
  }, 1000);
}

function checkPokemonsLocation(firstAttackerCard) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    firstAttackerCard.classList.add("right-tackle");
    removeClassName(firstAttackerCard, "right-tackle");
  } else {
    firstAttackerCard.classList.add("left-tackle");
    removeClassName(firstAttackerCard, "left-tackle");
  }
}

export function tackleAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && (firstAttackerCard || secondAttackerCard)) {
    checkPokemonsLocation(firstAttackerCard);
  }
}
