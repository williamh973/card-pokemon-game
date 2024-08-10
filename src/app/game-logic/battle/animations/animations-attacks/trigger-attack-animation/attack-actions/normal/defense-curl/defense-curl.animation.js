import { animationVariables } from "../../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../../shared/dom/dom-elements.js";
import { createDefenseUpAnimation } from "../../../../../animation-stats/defense-up.animation.js";

export async function defenseCurlAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    await createDefenseCurlAnimation(firstAttackerCard);

    const pokemonLocation = domElements.pokemonLeftLocation.contains(
      firstAttackerCard
    )
      ? domElements.pokemonLeftLocation
      : domElements.pokemonRightLocation;

    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        createDefenseUpAnimation(
          pokemonLocation,
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
    }, 1_500);
  });
}
