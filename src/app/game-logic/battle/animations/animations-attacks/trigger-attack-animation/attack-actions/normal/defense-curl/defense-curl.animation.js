import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { createDefenseUpAnimation } from "../../../../../animation-stats/defense-up.animation.js";

export async function defenseCurlAnimation(attackName, firstAttackerCard) {
  if (attackName && firstAttackerCard) {
    await createDefenseCurlAnimation(firstAttackerCard);
    checkPokemonsLocation(firstAttackerCard);
  }
}

function checkPokemonsLocation(firstAttackerCard) {
  if (domElements.pokemonLeftLocation.contains(firstAttackerCard)) {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createDefenseUpAnimation(
          domElements.pokemonLeftLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY
        );
      }, i * 200);
    }
  } else if (domElements.pokemonRightLocation.contains(firstAttackerCard)) {
    for (let i = 0; i < 10; i++) {
      setTimeout(() => {
        createDefenseUpAnimation(
          domElements.pokemonRightLocation,
          animationVariables.firstAttackerCenterX,
          animationVariables.firstAttackerCenterY
        );
      }, i * 200);
    }
  }
}

async function createDefenseCurlAnimation(firstAttackerCard) {
  return new Promise((resolve) => {
    firstAttackerCard.classList.add("defense-curl");

    setTimeout(() => {
      firstAttackerCard.classList.remove("defense-curl");
      resolve();
    }, 2_500);
  });
}
