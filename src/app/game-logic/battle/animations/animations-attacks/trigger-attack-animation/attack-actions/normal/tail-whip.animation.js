import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { createDefenseDown } from "../../../../animation-stats/defense-down.animation.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";

export function tailWhipAnimation(
  attackName,
  firstAttackerCard,
  secondAttackerCard
) {
  if (attackName && firstAttackerCard && secondAttackerCard) {
    const pokemonLocation = domElements.pokemonLeftLocation.contains(
      firstAttackerCard
    )
      ? domElements.pokemonLeftLocation
      : domElements.pokemonRightLocation;

    let leftLocationRect =
      domElements.pokemonLeftLocation.getBoundingClientRect();
    let rightLocationRect =
      domElements.pokemonRightLocation.getBoundingClientRect();

    let getTargetLocationCenterX = getTargetCoordonates(
      firstAttackerCard,
      leftLocationRect,
      rightLocationRect
    );

    firstAttackerCard.classList.add("tail-whip");

    setTimeout(() => {
      firstAttackerCard.classList.remove("tail-whip");
    }, 1000);
    for (let i = 0; i < 7; i++) {
      setTimeout(() => {
        createDefenseDown(
          pokemonLocation,
          getTargetLocationCenterX,
          animationVariables.targetLocationCenterY
        );
      }, i * 200);
    }
  }
}
