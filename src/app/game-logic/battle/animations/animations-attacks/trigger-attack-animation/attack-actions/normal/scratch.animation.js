import { animationVariables } from "../../../../../../../shared/animations/animation-variables.js";
import { domElements } from "../../../../../../../shared/dom/dom-elements.js";
import { resetAnimationVariables } from "../reset-animation-variables.js";
import { getTargetCoordonates } from "../get-target-coordonates.js";

export function scratchAnimation(
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

    for (let i = 0; i < 3; i++) {
      createScratch(
        pokemonLocation,
        getTargetLocationCenterX,
        animationVariables.targetLocationCenterY
      );
    }
  }
}

function createScratch(
  pokemonLocation,
  getTargetLocationCenterX,
  targetLocationCenterY
) {
  const scratch = document.createElement("div");
  scratch.classList.add("scratch");
  pokemonLocation.appendChild(scratch);

  gsap.fromTo(
    scratch,
    {
      x: getTargetLocationCenterX + 200,
      y: targetLocationCenterY - 200,
      scale: 1,
    },
    {
      x: getTargetLocationCenterX - 200,
      y: targetLocationCenterY + 200,
      scale: 1,
      duration: 0.3,
      ease: "linear",

      onComplete: () => {
        scratch.remove();
      },
    }
  );
  resetAnimationVariables();
}
