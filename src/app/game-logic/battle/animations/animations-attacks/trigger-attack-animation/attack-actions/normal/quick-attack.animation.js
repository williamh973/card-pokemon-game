import { domElements } from "../../../../../../../shared/dom/dom-elements.js";

function removeClassName(firstAttackerCard, classList) {
  setTimeout(() => {
    firstAttackerCard.classList.remove(classList);
  }, 1000);
}

function checkPokemonsLocation(firstAttackerCard) {
  if (domElements.pokemonFirstLocation.contains(firstAttackerCard)) {
    firstAttackerCard.classList.add("right-quickAttack");
    removeClassName(firstAttackerCard, "right-quickAttack");
  } else {
    firstAttackerCard.classList.add("left-quickAttack");
    removeClassName(firstAttackerCard, "left-quickAttack");
  }
}

export function quickAttackAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && (firstAttackerCard || secondAttackerCard)) {
    checkPokemonsLocation(firstAttackerCard);
  }
}
